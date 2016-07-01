// The CoqManager (& CoqPanel) class.
// (c) 2015-2016 Mines ParisTech/ARMINES
//
// CoqManager manages a document composed of several coq snippets,
// allowing the user to send/retract indivual coq sentences throu
// them. The Coq snippets can be provided by several sources, we just
// require them to be able to list parts and implement marks.
//

// XXX: use RequireJS or something like that.
"use strict";

// Extra stuff... we better use jQuery.

Array.prototype.last = function() { return this[this.length-1]; };
String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, "");
};

/***********************************************************************/
/* A Provider Container aggregates several containers, the main deal   */
/* here is keeping track of focus, as the focused container can be     */
/* different from the "active" one                                     */
/***********************************************************************/

class ProviderContainer {

    constructor(elms) {

        // Code snippets.
        this.snippets = [];

        // Debug variables
        var idx = 0;

        // for (e of elms) not very covenient here due to the closure.
        elms.forEach(function (e) {

            // Init.
            var cm = new CmCoqProvider(e);
            cm.idx = idx++;
            this.snippets.push(cm);

            // Track focus XXX (make generic)
            cm.editor.on('focus', evt => { this.currentFocus = cm; });

            // Track invalidate
            cm.onInvalidate = smt => { this.onInvalidate(smt); };
            cm.onMouseEnter = smt => { this.onMouseEnter(smt); };
            cm.onMouseLeave = smt => { this.onMouseLeave(smt); };

            // XXX: We use a strong assumption for now: the cursor is
            // at the invalid region, so we just do goCursor().

            // however, in the future, onInvalidate should provice the
            // concrete invalid statement.
        },this);
    }

    // Get the next candidate and mark it.
    getNext(prev) {

        var spr, next;

        // If we have no previous element start with the first
        // snippet, else get the current one.
        if (!prev) {
            spr  = this.snippets[0];
            next = spr.getNext(null);
        } else {
            spr  = prev.sp;
            next = spr.getNext(prev);
        }

        // We got a snippet!
        if (next) {
            next.sp = spr;
            return next;
        } else {
            // Try the next snippet.
            var idx = this.snippets.indexOf(spr);
            while (idx < this.snippets.length - 1) {
                spr  = this.snippets[idx+1];
                next = spr.getNext(null);
                if (next) {
                    next.sp = spr;
                    return next;
                } else {
                    idx = this.snippets.indexOf(spr);
                }
            } // while
            // No next snippet :( !
            return null;
        }
    }

    mark(stm, mark) {
        stm.sp.mark(stm, mark);
    }

    cursorToStart(stm) {
        stm.sp.cursorToStart(stm);
    }

    cursorToEnd(stm) {
        stm.sp.cursorToEnd(stm);
    }

    focus() {
        if (this.currentFocus)
            this.currentFocus.focus();
        else
            this.snippets[0].focus();
    }

    // Get the point of the current focused element.
    getAtPoint() {
        return this.currentFocus.getAtPoint();
    }
}

/***********************************************************************/
/* CoqManager coordinates the coq code objects, the panel, and the coq */
/* js object.                                                          */
/*                                                                     */
/***********************************************************************/

var copyOptions = function(obj, target) {
    if (!target) target = {};
    for (var prop in target) {
        if (obj.hasOwnProperty(prop)) {
            target[prop] = obj[prop];
        }
    }
    return target;
}

class CoqManager {

    constructor(elems, options) {

        options = options ? options : {};

        // Default options
        this.options = {
            mock:    false,
            prelude: true,
            wrapper_id: 'ide-wrapper',
            base_path:  "../",
            init_pkgs: ['init'],
            all_pkgs:  ['init', 'math-comp', 'mtac',
                        'coq-base', 'coq-arith', 'coq-reals',
                        'coquelicot', 'flocq', 'tlc', 'sf', 'cpdt', 'color', 'relalg', 'unimath',
                        'plugin-utils', 'extlib', 'mirrorcore']
        };

        this.options = copyOptions(options, this.options);

        // UI setup.
        this.layout = new CoqLayoutClassic(this.options);

        // Setup our providers of Coq statements.
        this.provider = new ProviderContainer(elems);

        this.provider.onInvalidate = stm => {

            // Clear the last error, XXX it is a bit of a hack.
            if (this.error && this.error == stm) {
                this.provider.mark(this.error, "clear");
                this.error = null;
                return;
            } else if (this.error) {
                // Not the one invalidated, clear and go.
                this.provider.mark(this.error, "clear");
                this.error = null;
            }

            setTimeout( () => {
                this.goCursor();
                // We must do one more back, as the one in the cursor is the invalid one!
                this.goPrev(true);
            }, 100);
        };

        this.provider.onMouseEnter = stm => {
            if (stm.coq_sid) {
                if(this.debug)
                    console.log("Requested goals info:", this.goals[stm.coq_sid]);
            } else {
                console.log("Weird, info for stm but not coq_sid", stm);
            }
        };

        this.provider.onMouseLeave = stm => {
            console.log("leave");
        };

        this.coq           = new Worker(this.options.base_path + 'coq-js/jscoq_worker.js');
        this.coq.onmessage = evt => this.coq_handler(evt);

        // this.coq1           = new Worker(this.options.base_path + 'coq-js/jscoq_worker.js');
        // this.coq1.onmessage = evt => this.coq_handler(evt);

        // Keybindings setup
        // XXX: This should belong to the panel.
        document.addEventListener('keydown', evt => this.keyHandler(evt));

        // XXX: Depends on the layout.
        document.getElementById('hide-panel')
            .addEventListener('click', evt => this.layout.toggle() );

        // XXX: Only done for the adjustWidth
        // XXX: We should get a reflow-friendly document from Coq.
        this.layout.coq = this.coq;

        // Panel setup 2: packages panel.
        // XXX: In the future this may also manage the downloads.
        this.packages = new PackageManager(this.layout.packages, this.options.base_path, this.coq);

        // Initial Coq state.
        this.coq.postMessage(["GetInfo"]);

        // This is a sid-based index of processed statements.
        this.debug       = true;
        this.stm_id      = [];
        this.sentences   = [];
        this.pending_sentences   = [];
        this.goals       = [];
        this.waitForPkgs = [];
        this.pqueue      = [];

        // Display packages panel:
        var pkg_panel = document.getElementById('packages-panel').parentNode;
        pkg_panel.classList.remove('collapsed');
        this.layout.show();

        // Initialize pkg info.
        let bp = '../';
        // console.log("bp:", bp);
        this.coq.postMessage(["InfoPkg", bp, this.options.all_pkgs]);
    }

    feedProcessingIn(sid) {
    }

    feedFileDependency(sid) {
    }

    feedFileLoaded(sid, file, mod) {
        this.layout.log(file + ' loaded succesfully.', 'Info');
    }

    feedProcessed(nsid) {
        this.layout.proof.textContent +=
            "\ncoq worker is ready with sid!! " + nsid.toString() +
            "\nPlease, wait for library loading";

        this.feedProcessed = this.feedProcessedReady;

    }

    feedProcessedReady(nsid) {

        if(this.debug)
            console.log('State processed', nsid);

        // The semantics of the stm here are a bit crazy, it will send
        // feedback for states that we don't know the id yet.
        if (! this.stm_id[nsid] ) {
            console.log('ready but not added?', nsid);
            return;
        }

        var stm = this.stm_id[nsid];

        this.provider.mark(stm, "clear");
        this.provider.mark(stm, "ok");

        // Get goals
        this.coq.postMessage(["Goals"]);

        // if(update_focus)
        //     this.provider.cursorToEnd(next);

    }

    // Simplifier to the "rich" format coq uses.
    flatMsg(msg) {

        // Elements are ...
        if (msg.constructor !== Array) {
            return msg;
        }

        var ret;
        var tag, ct, id, att, m;
        [tag, ct] = msg;

        switch (tag) {

        // Element(tag_of_element, att (single string), list of xml)
        case "Element":
            [id, att, m] = ct;
            let imm = m.map(this.flatMsg, this);
            ret = "".concat(...imm);
            break;

        // PCData contains a string
        case "PCData":
            ret = ct;
            break;

        default:
            ret = msg;
        }
        return ret;
    }

    feedMessage(sid, lvl, loc, msg) {

        var fmsg = this.flatMsg(msg);
        // Coq lvl
        var lvl  = lvl[0];

        if(this.debug)
            console.log(sid, lvl, loc, fmsg);

        // XXX: Proper levels.
        this.layout.log(fmsg, lvl);

        if (lvl === 'Error') {

            let err_stm;

            // Error on add or in added stm ?
            if (sid < 0) {
                err_stm = this.pending_sentences[0];
                // XXX; hack
                this.error = err_stm;
            } else {
                err_stm = this.sentences.last();
            }
            this.provider.mark(err_stm, "clear");
            this.provider.mark(err_stm, "error");

            this.pending_sentences = [];
            this.pqueue = [];
        }
    }

    coqFeedback(fb) {

        var feed_tag = fb.contents[0];

        if( this['feed'+feed_tag] ) {
            fb.contents[0] = fb.id[1];
            this['feed'+feed_tag].apply(this, fb.contents);
        } else {
            console.log('Feedback type', feed_tag, 'not handled');
        }

    }

    coqAdded(nsid) {

        if(this.debug)
            console.log('adding: ', nsid);

        // Added by Coq !! Try to observe:
        let cur_stm = this.pending_sentences.shift();

        this.sentences.push(cur_stm);
        this.stm_id[nsid] = cur_stm;
        cur_stm.coq_sid = nsid;

        // XXX: Hacky hacky patching
        if(this.pqueue.length > 0) {
            var msg = this.pqueue.shift();
            msg[1] = nsid;
            this.coq.postMessage(msg);
        // We have a target to go.
        } else if (this.goTarget) {
            // [Modulo the same old bugs, we need a position comparison op]
            // We have reached the destination...
            if (this.provider.getAtPoint()) {
                this.coq.postMessage(['Commit', nsid]);
            } else {
                this.goNext(false);
            }
        } else {
            this.coq.postMessage(['Commit', nsid]);
        }

    }

    coqGoalInfo(sid, goals) {
        this.goals[sid] = goals;

        // XXX this doesn't work propertly
        if (!this.pending_sentences.length)
            this.layout.update_goals(goals);
    }

    coqLog(level, msg) {

        if (this.debug) console.log(msg, level[0]);

        this.layout.log(msg, level[0]);
    }

    coqLibInfo(bname, bi) {
        this.packages.addBundleInfo(bname, bi);

        // Init list processing
        var rem_pkg = this.options.init_pkgs;
        var idx = rem_pkg.indexOf(bname);
        if(idx > -1) {
            this.coq.postMessage(['LoadPkg', bname]);
        }
    }

    coqLibProgress(evt) {
        this.packages.onPkgProgress(evt);
    }

    coqLibLoaded(bname) {

        this.packages.onBundleLoad(bname);

        var rem_pkg = this.options.init_pkgs;
        var idx = rem_pkg.indexOf(bname);
        if(idx > -1) {

            rem_pkg.splice(idx, 1);

            if (rem_pkg.length === 0)
                this.coqInit();
        }
    }

    coqCoqExn(msg) {
        // this.layout.log(msg, "Error");
        console.log('coqExn', msg);
    }

    coqJsonExn(msg) {
        // this.layout.log(msg, "Error");
        console.log('jsonExn', msg);
    };

    coqCoqInfo(info) {

        this.layout.proof.textContent =
               info
            + "\nPlease wait for the libraries to load, thanks!"
            + "\nIf you have trouble try cleaning your browser's cache.\n";
    }

    // Coq Init: At this point, the required libraries are loaded
    // and Coq is ready to be used.
    coqInit() {

        // Hide the packages panel.
        var pkg_panel = document.getElementById('packages-panel').parentNode;
        pkg_panel.classList.add('collapsed');

        // Enable the IDE.
        this.layout.proof.textContent +=
            "\n===> JsCoq filesystem initalized with success!\n" +
            "===> Loaded packages [" + this.options.init_pkgs.join(', ') + "] \n";

        // XXXXXX: Critical point
        if (this.options.prelude) {

            var prelude_command = "Require Import Coq.Init.Prelude. ";
            // this.pending_sentences.push({});
            this.coq.postMessage(["Add", 1, -1, prelude_command]);
        }
        this.enable();
    };

    coq_handler(evt) {

        var msg     = evt.data;
        var msg_tag = msg[0];

        if(this.debug)
            console.log("coq_evt", msg);

        // We call the corresponding coq$msg_tag(msg[1]..msg[n])

        if( this['coq'+msg_tag] ) {
            msg.shift();
            this['coq'+msg_tag].apply(this, msg);
        } else {
            console.log('Message type', msg_tag, 'not handled');
        }

    };

    // Keyboard handling
    keyHandler(e) {

        // All our keybindings are prefixed by alt.
        if (e.keyCode === 119) // F8
            this.layout.toggle();

        if (!e.altKey && !e.metaKey) return true;
        var btn_name;
        switch (e.keyCode) {
            case 13: // ENTER
                btn_name = 'to-cursor';
                break;
            case 78: // N
            case 40: // flèche en bas
                btn_name = 'down';
                break;
            case 80: // P
            case 38: // flèche en haut
                btn_name = 'up';
                break;
        }

        if(btn_name) {
            this.provider.focus();
            this.raiseButton(btn_name);
            e.preventDefault();
        }
    }

    // Enable the IDE.
    enable() {

        // Set Printing Width
        window.addEventListener('resize', evt => { this.layout.adjustWidth(); } );

        // XXX: Should be the task of the layout.
        this.btnEventHandler = this.toolbarClickHandler.bind(this);
        this.layout.buttons.addEventListener('click', this.btnEventHandler);
        this.layout.buttons.style.display = 'inline-block';
        this.layout.buttons.style.opacity = 1;
        this.provider.focus();
    }

    // Disable the IDE.
    disable() {
        // Disable the buttons.
        this.layout.buttons.removeEventListener('click', this.btnEventHandler);
        this.layout.buttons.style.display = 'none';
        this.layout.buttons.style.opacity = 0;
        this.layout.proof.textContent +=
                "\n===> Waiting for Package load!\n";

    }

    // Drops all the state!
    reset() {

        // Not yet initialized.
        if(!this.sid) return;

        var initial_sid;

        if (this.options.prelude) {
            initial_sid = this.sid[1];
            this.sid    = [this.sid[0], this.sid[1]];
        } else {
            initial_sid = this.sid[0];
            this.sid    = [this.sid[0]];
        }

        // Reset Coq.
        this.coq.edit(initial_sid);

        // Reset out sentences
        this.sentences.forEach(function(stm) {
            this.provider.mark(stm, "clear");
        }, this);

        this.sentences = [];

    }

    toolbarClickHandler(evt) {

        this.provider.focus();

        switch (evt.target.name) {
            case 'to-cursor' :
                this.goCursor();
                break;

            case 'up' :
                this.goPrev(false);
                break;

            case 'down' :
                this.goNext(true);
                break;
        }
    }

    raiseButton(btn_name) {

        // XXX: EG: Here I disagree with the current code, it
        // should be possible to use the coq manager without a toolbar!

        // This is a bit different from most UI indeed.
        var btns = this.layout.buttons.getElementsByTagName('img');
        var btn  = btns.namedItem(btn_name);

        if (btn) {
            btn.dispatchEvent(new MouseEvent('click',
                                             {'view'       : window,
                                              'bubbles'    : true,
                                              'cancelable' : true
                                             }));
        }
    }

    process_special(text) {

        var special;

        if (special = text.match(/Comments \"(.*): (.+)\"./)) {
            let cmd  = special[1];
            let args = special[2];

            switch (cmd) {

            case 'pkgs':
                let pkgs = args.split(' ');
                console.log('Requested pkgs '); console.log(pkgs);

                let pkg_panel = document.getElementById('packages-panel').parentNode;
                pkg_panel.classList.remove('collapsed');

                this.disable();
                this.waitForPkgs = pkgs;

                pkgs.forEach(this.coq.add_pkg,this);

                return true;

            case 'dump':
                window.dumpCache();
                return true;

            default:
                console.log("Unrecognized jscoq command");
                return false;
            }
        }
        return false;
    }

    goPrev(inPlace) {

        // If we didn't load the prelude, prevent unloading it to
        // workaround a bug in Coq.
        if (!this.options.prelude && this.sentences.length <= 1) return;

        if (this.error) {
            this.provider.mark(this.error, "clear");
            this.error = null;
        }

        var stm = this.sentences.pop();
        this.provider.mark(stm, "clear");

        if(!inPlace)
            this.provider.cursorToStart(stm);

        // Tell coq to go back to the old state.
        let sid_old  = stm.coq_sid;
        stm.coq_sid = null;

        let sid_last = this.sentences.last().coq_sid;
        this.coq.postMessage(['EditAt', sid_last]);

        this.goals[sid_old]  = null;
        this.layout.update_goals(this.goals[sid_last]);

    }

    // Return if we had success.
    goNext(update_focus) {

        var cur_stm;

        if (this.pending_sentences.length > 0)
            cur_stm = this.pending_sentences.last();
        else
            cur_stm = this.sentences.last();

        var next = this.provider.getNext(cur_stm);

        // We are the the end
        if(!next) { return false; }

        // Hack....
        if(next.is_comment) {
            this.provider.mark(next, "ok");
            return true;
        } else {
            this.provider.mark(next, "processing");
        }

        // We focus the new snippet.
        if(update_focus) {
            this.currentFocus = next.sp;
            this.currentFocus.focus();
        }
        // XXXX: We should be fully event driven here...

        // process special jscoq commands, for now:
        // Comment "pkg: list" will load packages.
        this.process_special(next.text);

        // XXX
        this.pending_sentences.push(next);
        let add_msg = ["Add", 0, -1, next.text];

        if (cur_stm && cur_stm.coq_sid) {
            add_msg[1] = cur_stm.coq_sid;
            this.coq.postMessage(add_msg);
        } else if (cur_stm) {
            this.pqueue.push(add_msg);
        } else {
            add_msg[1] = this.options.prelude ? 2 : 1 ;
            this.coq.postMessage(add_msg);
        }

        return false;
    }

    // XXX Not used.
    goSentence(smt) {

        var idx = this.sentences.indexOf(smt);
        if (0 <= idx) {
            console.log("Going back to: " + idx + " " + this.sentences[idx].toString());
            while (this.sentences.length > idx + 1) {
                this.goPrev(false);
            }
        } else {}
    }

    goCursor() {

        var cur = this.provider.getAtPoint();

        if (cur) {
            var idx = this.sentences.indexOf(cur);
            if (0 <= idx) {
                console.log("Going back to: " + idx + " " + this.sentences[idx].toString());
                while (this.sentences.length > idx + 1) {
                    this.goPrev(true);
                }
                this.layout.show();
            } else { // We need to go next!
                console.log("Schedule goNext!");
                if (this.goNext(false)) {
                    setTimeout(() => { this.goCursor(); }, 100);
                }
            }
        } else {
            this.goTarget = true;
            this.goNext(false);
        }
    }
}

// Local Variables:
// js-indent-level: 4
// End:
