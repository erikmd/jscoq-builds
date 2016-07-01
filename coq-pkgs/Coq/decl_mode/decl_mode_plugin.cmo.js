(function(pf){"use strict";var
dV="*",ek='"end claim" expected.',ep=104,aB="that",aF=140,eo="decl_mode_plugin",_=",",ej="be",d_='"end focus" expected.',aE="such",dU="Insufficient justification.",L=250,bH="consider",by="(",d9="Not inside a proof per cases or induction.",cu="suppose it is",cB=148,Z="Init",co="DeclProof",cp="on",C=246,ct="suppose",T="plugins/decl_mode/decl_proof_instr.ml",dT="    ",ei="escape",d8="assume",aD="Extension: cannot occur",dS='"end cases" expected.',d7="Datatypes",cs="execute_cases ",cw="DeclReturn",s=113,dR="for",bv=122,d6="with",cr="Classic",cv="then",q="",d5="=~",bD="Previous step is not an equality.",en="~=",d4="suffices",d3='"end induction" expected.',eh="using",cA="ProofInstr",bx="given",E="and",bG=121,d2="cases",h="IDENT",dQ='"thesis for ..." is not applicable here.',aC="Declarative",d1="plugins/decl_mode/decl_interp.ml",cz="by",d0="induction",eg=".",dP="take",cq="proof",aW="thesis",ef="impossible",bu="thus",dO="subcase_",O=124,em="of",ee="thesis_for",ed=111,cn=133,dN="Not enough sub-hypotheses to match statements.",dZ="hence",cy="we have",bC=")",cm="_tmp",bB="let",aA=":",cl=116,ec="proof_instr",el="show",bF="Logic",bA="we",dY="define",cx="reconsider",bE="claim",bz="to",dX="This case should already be trapped",bw="Specif",ab=114,ck="focus",aV="as",dM="No pop/stop expected here",d$=146,ea="per",eb="declmode",ag="have",dW="end",J=pf.jsoo_runtime,S=J.caml_check_bound,b=J.caml_new_string,K=J.caml_obj_tag,az=J.caml_register_global,H=J.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):J.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):J.caml_call_gen(a,[b,c])}function
e(a,b,c,d){return a.length==3?a(b,c,d):J.caml_call_gen(a,[b,c,d])}function
D(a,b,c,d,e){return a.length==4?a(b,c,d,e):J.caml_call_gen(a,[b,c,d,e])}function
N(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):J.caml_call_gen(a,[b,c,d,e,f])}function
cj(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):J.caml_call_gen(a,[b,c,d,e,f,g])}var
l=J.caml_get_global_data(),d=l.Pp,j=l.Errors,aX=l.Environ,aG=l.Context,w=l.Proof,F=l.Proof_global,g=l.Util,B=l.Goal,t=l.Evd,U=l.Pervasives,cC=l.Pfedit,ah=l.Option,u=l.Loc,y=l.Tacintern,f=l.Term,z=l.Vars,aq=l.Namegen,ac=l.Global,M=l.Assert_failure,V=l.Pretyping,ap=l.Tacinterp,o=l.Names,R=l.Nameops,G=l.Termops,cH=l.Detyping,I=l.CamlinternalLazy,bK=l.Coqlib,cG=l.Universes,P=l.Closure,$=l.Not_found,a7=l.Reductionops,m=l.Tacmach,p=l.Tactics,n=l.Proofview,i=l.Tacticals,bQ=l.Rtree,bR=l.Inductiveops,av=l.Inductive,cT=l.Sigma,ad=l.Printer,cV=l.Locusops,cU=l.Reduction,cS=l.Typing,cR=l.Unification,cW=l.Evarutil,cX=l.CWarnings,b0=l.Ppconstr,bl=l.Pptactic,b4=l.Compat,b3=l.Egramml,bn=l.Vernac_classifier,b1=l.Vernacinterp,k=l.Pcoq,an=l.Genarg,b2=l.Gramext,aa=l.CList,bI=[0,0],eF=b('"end claim"'),eG=b('"end focus"'),eH=b('"end proof"'),eC=b("lonely suppose"),eE=b('"end induction" or start a new case'),eD=b('"end cases" or start a new case'),eB=b("no previous statement to use"),eu=b("get_info"),eK=b('"(_ | _)" is not allowed here'),eL=b("simple_pattern"),eS=b("Anonymous pattern variable"),eY=[0,b(d1),302,18],eZ=[0,b(d1),314,18],e_=b('"thesis for" is not applicable here.'),e6=b(" does not occur in pattern."),e7=b("Variable "),e8=b(cu),e5=[2,[0,0]],e0=b("No proof per cases/induction/inversion in progress."),e1=b("expected."),e2=b("none"),e3=b("Wrong number of extra arguments: "),e4=b(cu),eW=b("undetected disjunctive pattern"),eX=b("empty pattern list"),eO=b(bD),eP=b(bD),eN=[0,0],eQ=b("__"),gv=b(cm),gz=b(dN),gw=b("Matching hypothesis not found."),gx=b("Last statements do not match a complete hypothesis."),gy=b(cm),gA=b(dN),gC=[0,b(T),811,18],gO=b(dM),gP=b("Case pattern belongs to wrong inductive type."),gQ=b(dM),gR=b("we should pop here"),gS=b("tree is expected to end here"),gT=b("Premature end of branch"),gY=b('Only "suppose it is" can be used here.'),hc=[0,b(T),1282,2],ha=b("Nothing to skip"),hb=[0,b(cs)],hd=[0,b(T),1261,9],he=b("Nothing to split"),hf=[0,b(cs)],hg=b("End of branch with garbage left"),hh=[0,b(cs)],hi=b("wrong stack size"),hu=[0,b(T),1427,1],hv=[0,b(T),1424,1],hw=[0,b(T),1430,1],hx=[0,b(T),1437,1],hy=b("Not applicable"),hA=b(cr),hB=b(cr),hC=b("hd"),hD=b('"end induction" generated an ill-formed fixpoint'),ht=[0,0],hl=b("_fix"),hm=b("_main_arg"),hk=b(dX),hp=b(ek),hq=b(d_),hr=b(dX),ho=b(d3),hn=b(dS),hj=[2,0],g8=b("missing case"),g6=[0,b(T),1218,30],g5=[0,b(T),1220,2],g4=b(ef),g2=b(ef),g1=[0,[0,0,0],0],gZ=b(dO),g0=b("wrong place for cases"),gU=b("cannot give an induction hypothesis (wrong inductive type)."),gV=b(ee),gW=b("cannot give an induction hypothesis (wrong parameters)."),gX=b(ee),gN=b(dO),gM=b('Do not mix "suppose" with "suppose it is".'),gL=b("wrong stack state"),gJ=[0,b(T),933,5],gK=[0,b(T),924,3],gI=b("anonymous_matched"),gH=b("Case analysis must be done on an inductive object."),gG=b("map_tree: not a splitting node"),gF=b("map_tree_rp: not a splitting node"),gD=b(dQ),gB=b(cm),gt=b("_cofact"),gs=b("_hyp"),gr=b("_claim"),gp=b("No previous equality."),gq=b("_eq"),gm=b(bD),gn=b(bD),gk=b("_fact"),gj=b('"then" and "hence" require at least one previous fact'),gi=b(dQ),gh=b("I could not relate this statement to the thesis."),gf=b("cannot happen"),gg=[0,b("concl_refiner")],ge=[0,2,1],gd=[0,2,2],fT=b(aC),fS=b(dU),fO=b(dU),fD=b("Weird case occurred ..."),fC=b(d9),fE=b(d9),fy=b(d3),fx=b(dS),fz=b(ek),fA=b(d_),fB=b('"end proof" expected.'),fw=b("Lonely suppose on stack."),fu=b('"return" cannot be used outside of Declarative Proof Mode.'),fq=[0,0],fl=b('You are inside a proof per cases/induction.\nPlease "suppose" something or "end" it now.'),fg=b("Cannot clear "),fh=b(q),fj=[0,b("Strict"),[0,b("Proofs"),0]],fk=b("strict mode"),fF=b("___"),fH=b("No automation registered"),fP=b(eb),fQ=b("declmode-insufficient-justification"),fU=b(E),fV=[0,b(Z),[0,b(bF),0]],fW=b("and_rect"),fX=[0,b(Z),[0,b(bF),0]],fY=b("prod"),fZ=[0,b(Z),[0,b(d7),0]],f0=b("prod_rect"),f1=[0,b(Z),[0,b(d7),0]],f2=b("ex"),f3=[0,b(Z),[0,b(bF),0]],f4=b("ex_ind"),f5=[0,b(Z),[0,b(bF),0]],f6=b("sig"),f7=[0,b(Z),[0,b(bw),0]],f8=b("sig_rect"),f9=[0,b(Z),[0,b(bw),0]],f_=b("sigT"),f$=[0,b(Z),[0,b(bw),0]],ga=b("sigT_rect"),gb=[0,b(Z),[0,b(bw),0]],g9=b(eb),g_=b("declmode-missing-case"),hN=b(E),hO=b("be such that"),hP=b("such that"),it=b(bC),iu=b(by),ik=b(bC),il=b(by),h1=b(ei),h5=b(dZ),h4=b(cv),h3=b(bu),h2=b(ag),h6=b(bu),h7=b(dT),h8=b(d4),h9=b(cy),h_=b(d8),h$=b(bB),ia=b(bB),ib=b(bx),ic=b(bx),id=b("from "),ie=b(bH),ig=b(bH),ih=b(bE),ii=b("focus on"),ij=b(aV),im=b(dY),io=b(aV),ip=b(cx),iq=b(cy),ir=b(ct),iw=b(cy),ix=b(E),iv=b(d6),is=b(cu),iy=b(dP),iz=b(ea),iA=b(dW),iL=b(bC),iM=b(aA),iN=b(by),iH=b(bC),iI=b(aA),iJ=b(by),iB=b("unknown emphasis"),iC=b(dT),iD=b("*   "),iE=b("**  "),iF=b("*** "),h0=b(en),hZ=b(d5),hX=b(cp),hY=b(em),hU=b(cq),hV=b(bE),hW=b(ck),hT=b(d0),hS=b(d2),hQ=b("to show"),hR=b("to have"),hJ=b(dR),hK=b(aW),hL=b(aW),hI=b(eh),hF=b(_),hG=b(cz),hH=b("by *"),hE=b(aA),kY=[0,0],jT=b(cw),jQ=b(cw),jN=[0,[4,b(aC)],0],jM=b(aD),jK=b(cw),jH=b(aD),jF=b(co),jC=b(co),jz=[0,[4,b(aC)],0],jy=b(aD),jw=b(co),jt=b(aD),jn=[0,[0,1]],jj=b(cA),je=b(cA),jb=b(aD),i$=b(cA),i8=b(aD),i6=[0,[4,b(cr)],0],i1=b(aC),iZ=b("Nothing left to prove here."),i0=b(aC),iW=b(eg),iX=b("Subproof completed, now type "),iS=b("thesis :="),iT=b("============================"),iU=b("  "),iV=b("     *** Declarative Mode ***"),iQ=b(eo),iR=b(eo),i2=b(ec),i3=b("vernac:proof_command"),i5=b(ec),jo=[0,1],jq=b(aC),jD=[0,[0,[0,b(cq)],0],0],jR=[0,[0,[0,b("return")],0],0],jU=b(aW),jV=b("statement"),jW=b("constr_or_thesis"),jX=b("statement_or_thesis"),jY=b("justification_items"),jZ=b("justification_method"),j0=b("simple_cut_or_thesis"),j1=b("simple_cut"),j2=b("elim_type"),j3=b("block_type"),j4=b("elim_obj"),j5=b("elim_step"),j6=b("rew_step"),j7=b("cut_step"),j8=b("loc_id"),j9=b("hyp"),j_=b("consider_vars"),j$=b("consider_hyps"),ka=b("assume_vars"),kb=b("assume_hyps"),kc=b("assume_clause"),kd=b("suff_vars"),ke=b("suff_hyps"),kf=b("suff_clause"),kg=b("let_vars"),kh=b("let_hyps"),ki=b("given_vars"),kj=b("given_hyps"),kk=b("suppose_vars"),kl=b("suppose_hyps"),km=b("suppose_clause"),kn=b("intro_step"),ko=b("emphasis"),kp=b("bare_proof_instr"),ks=[0,[10,[0,b(q),b(aW)]],0],kv=[10,[0,b(q),b(dR)]],kw=[10,[0,b(q),b(aW)]],kA=[10,[0,b(q),b(aA)]],kO=[10,[0,b(q),b(aA)]],k1=[10,[0,b(q),b(_)]],k2=[10,[0,b(q),b(cz)]],k4=[0,[10,[0,b(q),b(cz)]],[0,[10,[0,b(q),b(dV)]],0]],k_=[10,[0,b(q),b(eh)]],lh=[0,[10,[0,b(h),b(d0)]],0],lj=[0,[10,[0,b(h),b(d2)]],0],ln=[0,[10,[0,b(h),b(bE)]],0],lp=[0,[10,[0,b(h),b(ck)]],0],lr=[0,[10,[0,b(h),b(cq)]],0],lx=[10,[0,b(h),b(cp)]],lz=[10,[0,b(h),b(em)]],lE=[10,[0,b(h),b("from")]],lF=[10,[0,b(h),b(bH)]],lH=[10,[0,b(h),b(ea)]],lJ=[10,[0,b(h),b(d4)]],lN=[10,[0,b(q),b(en)]],lP=[10,[0,b(q),b(d5)]],lT=[10,[0,b(q),b(cv)]],lV=[10,[0,b(q),b(cv)]],lX=[10,[0,b(h),b(bu)]],lZ=[10,[0,b(h),b(bu)]],l1=[10,[0,b(h),b(dZ)]],l5=[10,[0,b(h),b(ag)]],l7=[10,[0,b(h),b(bE)]],l9=[10,[0,b(h),b(cp)]],l_=[10,[0,b(h),b(ck)]],ma=[10,[0,b(q),b(dW)]],mc=[0,[10,[0,b(h),b(ei)]],0],ml=[10,[0,b(q),b(aA)]],mp=[0,[10,[0,b(q),b(_)]],[0,0,0]],mr=[10,[0,b(h),b(aB)]],ms=[10,[0,b(h),b(aE)]],mw=[0,[10,[0,b(h),b(E)]],[0,0,0]],my=[10,[0,b(h),b(bH)]],mz=[10,[0,b(h),b(E)]],mF=[0,[10,[0,b(q),b(_)]],[0,0,0]],mH=[10,[0,b(h),b(aB)]],mI=[10,[0,b(h),b(aE)]],mM=[0,[10,[0,b(h),b(E)]],[0,0,0]],mO=[10,[0,b(h),b(ag)]],mP=[10,[0,b(h),b(bA)]],mQ=[10,[0,b(h),b(E)]],mV=[10,[0,b(h),b(ag)]],mW=[10,[0,b(h),b(bA)]],m1=[10,[0,b(h),b(el)]],m2=[10,[0,b(h),b(bz)]],m4=[0,[10,[0,b(q),b(_)]],[0,0,0]],m6=[10,[0,b(h),b(aB)]],m7=[10,[0,b(h),b(aE)]],m$=[0,[10,[0,b(h),b(E)]],[0,0,0]],nb=[10,[0,b(h),b(ag)]],nc=[10,[0,b(h),b(bz)]],nd=[10,[0,b(h),b(E)]],nf=[10,[0,b(h),b(el)]],ng=[10,[0,b(h),b(bz)]],nk=[10,[0,b(h),b(ag)]],nl=[10,[0,b(h),b(bz)]],nr=[0,[10,[0,b(q),b(_)]],[0,0,0]],nt=[10,[0,b(h),b(aB)]],nu=[10,[0,b(h),b(aE)]],nv=[10,[0,b(h),b(ej)]],nz=[0,[10,[0,b(h),b(E)]],[0,0,0]],nB=[10,[0,b(q),b(bB)]],nC=[10,[0,b(h),b(E)]],nI=[0,[10,[0,b(q),b(_)]],[0,0,0]],nK=[10,[0,b(h),b(aB)]],nL=[10,[0,b(h),b(aE)]],nP=[0,[10,[0,b(h),b(E)]],[0,0,0]],nR=[10,[0,b(h),b(bx)]],nS=[10,[0,b(h),b(E)]],nY=[0,[10,[0,b(q),b(_)]],[0,0,0]],n1=[10,[0,b(h),b(aB)]],n2=[10,[0,b(h),b(aE)]],n5=[0,[10,[0,b(h),b(ej)]],0],n_=[0,[10,[0,b(h),b(E)]],[0,0,0]],oa=[10,[0,b(h),b(ag)]],ob=[10,[0,b(h),b(bA)]],oc=[10,[0,b(h),b(E)]],oh=[10,[0,b(h),b(ag)]],oi=[10,[0,b(h),b(bA)]],on=[10,[0,b(h),b(ct)]],os=[10,[0,b(h),b(E)]],ow=[10,[0,b(q),b(_)]],ox=[10,[0,b(q),b(d6)]],oA=b("0"),oB=[10,[0,b(h),b("is")]],oC=[10,[0,b(h),b("it")]],oD=[10,[0,b(h),b(ct)]],oF=[10,[0,b(q),b(bB)]],oI=[10,[0,b(q),b(_)]],oJ=[10,[0,b(h),b(dP)]],oL=[10,[0,b(h),b(d8)]],oN=[10,[0,b(h),b(bx)]],oQ=[10,[0,b(q),b(aV)]],oR=[10,[0,b(h),b(dY)]],oU=[10,[0,b(q),b(aV)]],oV=[10,[0,b(h),b(cx)]],oY=[10,[0,b(q),b(aV)]],oZ=[10,[0,b(h),b(cx)]],o3=[0,[10,[0,b(q),b(dV)]],0],o5=[0,[10,[0,b(q),b("**")]],0],o7=[0,[10,[0,b(q),b("***")]],0],pd=[0,[10,[0,b(q),b(eg)]],0],eI=l.Constrintern,fa=l.Failure,fc=l.Type_errors,fe=l.Glob_ops,fb=l.Invalid_argument,ff=l.Feedback,fd=l.Goptions,iO=l.Mltop,iP=l.G_vernac;function
eq(a){bI[1]=1;return 0}function
er(a){bI[1]=0;return 0}function
es(a){return bI[1]}var
aY=a(t[3][6],0);function
cD(e){var
b=a(w[33][1],e),f=a(g[17][3],b[1]),h=c(B[4][5],b[2],f),d=c(t[3][3],h,aY),i=d?1:d;return i}function
cE(c){try{var
b=cD(a(cC[9],0));return b}catch(a){a=H(a);if(a===F[11])return 2;throw a}}function
et(b){return 1===cE(0)?a(j[6],b):0}function
bJ(e,d){var
f=c(B[4][5],e,d),b=c(t[3][3],f,aY);return b?b[1]:a(U[1],eu)}function
ev(b,a){var
d=c(B[4][5],b,a);return c(t[3][3],d,aY)}var
aZ=a(w[16],0),ew=c(w[18],0,aZ);function
ex(f){var
b=a(w[33][1],f),c=a(g[17][3],b[1]),d=bJ(b[2],c)[1];function
h(a){return e(w[19],ew,d,1)}return a(F[27],h)}function
ey(c){function
b(b,a){return e(w[23],aZ,a,0)}return a(F[27],b)}function
cF(d){try{var
b=c(w[26],aZ,d);return b}catch(b){b=H(b);if(b===w[25]){var
e=a(w[33][3],d);return bJ(e[2],e[1])[1]}throw b}}function
ez(a){return c(w[26],aZ,a)}function
eA(c){var
b=a(aX[9],c);return b?a(aG[2][1][1],b[1]):a(j[6],eB)}var
x=[0,eq,er,es,cD,cE,et,aY,bJ,ev,ez,cF,eA,function(k){var
b=cF(k);if(b){var
c=b[1];if(typeof
c==="number")switch(c){case
0:var
g=b[2];if(g){var
h=g[1];if(typeof
h==="number")var
f=0;else
var
i=h[1],f=1}else
var
f=0;if(!f){var
l=a(d[1],eC);return e(j[3],0,0,l)}break;case
1:return eF;default:return eG}else
var
i=c[1];return 0===i?eD:eE}return eH},ex,ey];az(414,x,"Decl_mode_plugin.Decl_mode");function
cI(b){var
c=b[3],d=b[2];return a(g[17][47],c)?d:[4,b[1],d,c]}function
ar(d,b,a){var
e=c(d,b,a[2]);return[0,a[1],e]}function
bL(d,a,b){return[0,a,c(d,a,b)]}function
bM(b,a){return 0===a[0]?[0,c(y[7],b,a[1])]:[1,a[1]]}function
aH(b,a){var
d=a[2];return[0,c(o[1][9][4],b,a[1]),d]}function
cJ(j,b,d){if(0===d[0]){var
e=d[1],f=e[2],g=f[1],k=f[2],l=a(y[7],b),m=[0,g,c(ah[15],l,k)],n=[0,[0,e[1],m]];return[0,aH(g,b),n]}var
h=d[1],o=[1,ar(j,b,h)],i=h[1],p=i?aH(i[1],b):b;return[0,p,o]}function
as(c,b,a){function
d(a,b){return cJ(c,a,b)}return e(g[17][cl],d,b,a)[2]}function
a0(k,j,b){var
d=c(k,j,b[1]),e=d[1],l=b[3],i=a(y[5],e),m=a(a(ah[15],i),l),n=b[2],f=a(y[7],e),h=a(g[17][12],f),o=a(a(ah[15],h),n);return[0,d[2],o,m]}function
cK(d,b){function
f(d,b){var
e=b[2],f=e[1],g=e[2],h=a(y[7],d),i=[0,f,c(ah[15],h,g)],j=[0,b[1],i];return[0,aH(f,d),j]}return e(g[17][cl],f,b,d)}function
eJ(d,a){var
f=a[1],h=y[7];function
i(a,b){return cJ(h,a,b)}var
b=e(g[17][cl],i,d,f),c=b[1],j=bM(c,a[2]);return[0,c,[0,b[2],j]]}function
a1(m,l){var
f=m,b=l;for(;;){switch(b[0]){case
0:var
n=b[2],f=aH(b[3],f),b=n;continue;case
1:var
o=b[4],p=b[3],q=a(g[17][15],a1),r=e(ah[17],q,f,p);return e(g[17][15],a1,r,o);case
2:var
h=b[2];if(h){var
i=h[1];if(0!==i[0])return aH(i[1][2],f)}break;case
3:var
s=a(d[1],eK);return c(u[9],b[1],[0,j[5],eL,s]);case
4:var
k=b[3],t=a(g[17][10],[0,k[1],[0,b[4],k[2]]]);return e(g[17][15],a1,f,t);case
7:var
b=b[3];continue}return f}}function
a2(d,b){if(typeof
b==="number")return 0;else
switch(b[0]){case
0:return[0,a2(d,b[1])];case
1:return[1,a2(d,b[1])];case
2:return[2,a2(d,b[1])];case
3:var
o=b[1],p=function(a,b){return ar(bM,a,b)};return[3,a0(function(a,b){return bL(p,a,b)},d,o)];case
4:var
q=b[2],r=y[7],s=function(a,b){return ar(r,a,b)},t=a0(function(a,b){return bL(s,a,b)},d,q);return[4,b[1],t];case
5:return[5,a0(eJ,d,b[1])];case
6:return[6,as(y[7],d,b[1])];case
7:return[7,as(y[7],d,b[1])];case
8:return[8,as(y[7],d,b[1])];case
9:var
u=as(y[7],d,b[2]);return[9,c(y[7],d,b[1]),u];case
10:return[10,ar(y[7],d,b[1])];case
11:return[11,ar(y[7],d,b[1])];case
12:var
v=b[3],f=cK(b[2],d),n=c(y[7],f[1],v);return[12,b[1],f[2],n];case
13:var
w=c(y[7],d,b[2]);return[13,b[1],w];case
14:return[14,as(y[7],d,b[1])];case
15:var
h=b[2],i=cK(b[1],d),x=a1(i[1],h),z=as(bM,x,b[3]);return[15,i[2],h,z];case
16:var
A=b[1],B=a(y[7],d);return[16,c(g[17][12],B,A)];case
17:var
e=b[2];if(0===e[0])var
j=[0,c(y[7],d,e[1])];else
var
k=e[1],l=y[7],m=function(a,b){return ar(l,a,b)},j=[1,a0(function(a,b){return bL(m,a,b)},d,k)];return[17,b[1],j];default:return[18,b[1]]}}function
eM(b,a){var
c=a2(b,a[2]);return[0,a[1],c]}function
at(d,c,b,a){return d?N(V[11],0,eN,c,b,a[1])[1]:N(V[11],0,0,c,b,a[1])[1]}var
a3=[C,function(b){return a(cG[48],bK[30])}];function
aI(d,c,b,a){var
f=e(d,c,b,a[2]);return[0,a[1],f]}function
cL(j,c,b){function
d(c,d){if(0===c[0]){var
e=c[1],f=e[2],g=f[2],b=f[1];return g?[6,u[4],[0,b],0,g[1][1],d]:[6,u[4],[0,b],0,[13,[0,e[1],[1,[0,b]],0,0]],d]}var
h=c[1],i=a(j,h[2]);return[6,u[4],h[1],0,i,d]}return e(g[17][16],d,c,b)}var
cM=[12,u[4],0];function
bN(i,b,h,d){if(d){var
j=d[1],e=a(f[34],h),g=e[1],k=[0,g,c(z[12],b,e[2])],m=g?[0,a(f[s],g[1]),b]:[0,a(f[ab],0),b],n=0===j[0]?[0,k]:[1,c(i,k,j[1])],l=bN(i,m,e[3],d[2]);return[0,[0,n,l[1]],l[2]]}return[0,0,c(z[12],b,h)]}function
cN(f,e,d,c,a,b){var
g=cL(f,a,b);return bN(e,0,N(V[11],0,0,d,c,g)[1],a)}function
au(c,b,a){function
d(a,b){return a}return cN(function(a){return a[1]},d,c,b,a,cM)[1]}var
eR=a(o[1][5],eQ);function
cO(b,a){if(0===a[0]){var
f=a[2],d=a[1];if(f){var
h=b[1];b[1]=[0,[0,[0,d,f[1]],h[1]],h[2]];return a}var
i=b[1],j=i[2],e=c(aq[25],eR,j);b[1]=[0,[0,[0,d,e],i[1]],[0,e,j]];return[0,d,[0,e]]}var
k=a[4],l=a[3];function
m(a){return cO(b,a)}var
n=c(g[17][12],m,l);return[1,a[1],a[2],n,k]}function
bO(b){if(0===b[0]){var
i=b[2];if(i)return[1,[0,b[1],i[1]]];var
m=a(d[1],eS);return e(j[3],0,0,m)}var
k=b[2],l=k[1],n=a(ac[26],l)[1],p=c(g[17][12],bO,b[3]),f=n[6],h=p;for(;;){if(0<f){var
o=[0,[13,[0,u[4],[4,l,f],0,0]],h],f=f-1|0,h=o;continue}return cI([0,b[1],[0,[0,u[4],[3,k],0]],h])}}function
eT(b){var
c=b[2],d=c[2],a=c[1],e=b[1];if(d){var
f=d[1];return function(b){return[6,u[4],[0,a],0,f[1],b]}}return function(b){return[6,u[4],[0,a],0,[13,[0,e,[1,[0,a]],0,0]],b]}}function
eU(a,c){var
b=a[2];return[6,u[4],[0,b],0,[13,[0,a[1],[1,[0,b]],0,0]],c]}function
eV(a,b){var
c=bO(a[2]);return[7,u[4],[0,a[1]],c,b]}function
cP(b,a){if(0===a[0])return b;var
c=a[4],d=c?[0,[0,c[1],a],b]:b;return e(g[17][15],cP,d,a[3])}function
a4(j,b,i,h){if(h){var
d=a(j,i),e=d[1],k=[0,e,c(z[12],b,d[2])];if(e){var
l=[0,a(f[s],e[1]),b],g=a4(j,l,d[3],h[2]);return[0,[0,k,g[1]],g[2],g[3]]}throw[0,M,eY]}return[0,0,b,c(z[12],b,i)]}function
cQ(b,i,h){if(h){var
d=a(f[36],i),e=d[1],j=c(z[12],b,d[3]),k=[0,e,[0,c(z[12],b,d[2]),j]];if(e){var
l=[0,a(f[s],e[1]),b],g=cQ(l,d[4],h[2]);return[0,[0,k,g[1]],g[2],g[3]]}throw[0,M,eZ]}return[0,0,b,c(z[12],b,i)]}function
a5(k,j,d,b){var
f=e(k,j,d,b[1]),l=b[3],m=a(ap[28],0),n=a(ap[2][6],m),o=c(ah[15],n,l),p=b[2],q=f[1];function
h(a){return N(V[11],0,0,q,d,a[1])[1]}var
i=a(g[17][12],h),r=a(a(ah[15],i),p);return[0,f[2],r,o]}function
bP(d,a,c,b){return[0,a,e(d,a,c,b)]}function
e9(b,i,h){var
d=h[2],k=h[1];if(0===d[0])var
m=d[1][1],n=function(a,b){return a},l=cN(function(a){return a[1]},n,b,i,k,m),f=[0,l[1],[0,l[2]]];else
var
f=d[1]?a(j[6],e_):[0,au(b,i,k),d];function
o(f,e){var
a=f[1],d=a[1];return d?c(aX[31],[0,d[1],a[2]],e):b}return[0,e(g[17][16],o,f[1],b),f]}function
e$(b){var
c=b[2],d=c[2],a=c[1],e=b[1];if(d){var
f=d[1];return function(b){return[5,u[4],[0,a],0,f[1],b]}}return function(b){return[5,u[4],[0,a],0,[13,[0,e,[1,[0,a]],0,0]],b]}}function
a6(m,h,i,b){if(typeof
b==="number")return 0;else
switch(b[0]){case
0:return[0,a6(m,h,i,b[1])];case
1:return[1,a6(m,h,i,b[1])];case
2:return[2,a6(m,h,i,b[1])];case
3:var
a8=b[1],a9=1,a_=function(b,c,a){return 0===a[0]?[0,at(a9,b,c,a[1])]:[1,a[1]]},a$=function(a,b,c){return aI(a_,a,b,c)};return[3,a5(function(a,b,c){return bP(a$,a,b,c)},h,i,a8)];case
4:var
ba=b[2],aj=a(x[12],h),ah=c(aX[37],aj,h),ae=e(P[42],0,P[9],h),af=a(P[36],ah),ag=c(P[47],ae,af),p=a(f[aF],ag);if(9===p[0]){var
E=p[2],F=K(a3),ai=L===F?a3[1]:C===F?a(I[2],a3):a3;if(c(f[136],p[1],ai))if(3===E.length-1)var
z=S(E,0)[1],B=1;else
var
B=0;else
var
B=0;if(!B)var
z=a(j[6],eP)}else
var
z=a(j[6],eO);var
bb=function(a,b,c){return N(V[11],0,[0,[0,z]],a,b,c[1])[1]},bc=function(a,b,c){return aI(bb,a,b,c)},bd=a5(function(a,b,c){return bP(bc,a,b,c)},h,i,ba);return[4,b[1],bd];case
5:return[5,a5(e9,h,i,b[1])];case
6:return[6,au(h,i,b[1])];case
7:return[7,au(h,i,b[1])];case
8:return[8,au(h,i,b[1])];case
9:var
be=au(h,i,b[2]);return[9,at(0,h,i,b[1]),be];case
10:var
bf=b[1],bg=1;return[10,aI(function(a,b,c){return at(bg,a,b,c)},h,i,bf)];case
11:var
bh=b[1],bi=1;return[11,aI(function(a,b,c){return at(bi,a,b,c)},h,i,bh)];case
12:var
$=b[2],a2=e(g[17][16],e$,$,b[3][1]),a7=N(V[11],0,0,h,i,a2)[1],_=a4(f[35],0,a7,$);return[12,b[1],_[1],_[3]];case
13:var
bj=at(1,h,i,b[2]);return[13,b[1],bj];case
14:return[14,au(h,i,b[1])];case
15:var
aa=b[3],ab=b[2],n=b[1],O=m[1];if(O){var
Q=O[1];if(typeof
Q==="number")var
D=0;else
var
k=Q[2],D=1}else
var
D=0;if(!D)var
k=a(j[6],e0)[2];var
T=a(ac[26],k[3]),r=T[1][6]-k[7]|0;if(1-(a(g[17][1],n)===r?1:0)){var
ar=a(d[1],e1),as=a(d[17],0),av=0===r?a(d[1],e2):a(d[20],r),aw=a(d[1],e3),ax=c(d[14],aw,av),ay=c(d[14],ax,as),az=c(d[14],ay,ar);c(j[7],e4,az)}var
aA=[0,[0,u[4],[2,k[3]],0]],aB=k[6],aC=function(a){return cj(cH[6],0,0,0,h,t[16],a)},aD=c(g[17][12],aC,aB),aE=function(a){return[1,[0,a[1],a[2][1]]]},aG=c(g[17][12],aE,n),aH=function(a){return[13,[0,u[4],e5,0,0]]},aJ=c(g[17][48],T[2][6],aH),aK=c(g[18],aG,aJ),aL=c(g[18],aD,aK),aM=cI([0,u[4],aA,aL]),H=c(eI[8],h,ab),q=H[2],an=H[1];if(q)if(q[2])var
ao=a(d[1],eW),l=e(j[3],0,0,ao);else
var
J=q[1],M=J[2],ap=J[1],am=cP(0,M),ak=function(d,b,a){return[0,[0,d,c(o[1][12][3],b,a)],a]},al=e(o[1][10][11],ak,ap,am),l=[0,an,a(g[17][6],al),M];else
var
aq=a(d[1],eX),l=e(j[3],0,0,aq);var
U=l[3],W=l[2],X=l[1],Y=[0,[0,0,X]],aN=cL(function(b){if(0===b[0])return b[1][1];var
e=b[1];if(e){var
f=e[1];if(1-c(o[1][12][2],f,X)){var
g=a(d[1],e6),h=a(R[1],f),i=a(d[1],e7),k=c(d[14],i,h),l=c(d[14],k,g);c(j[7],e8,l)}return[12,u[4],0]}return[12,u[4],0]},aa,cM),aO=cO(Y,U),Z=a(g[17][6],Y[1][1]),aP=bO(aO),aQ=e(g[17][16],eV,W,[7,u[4],0,[14,u[4],aP,[0,aM]],aN]),aR=e(g[17][16],eU,Z,aQ),aS=e(g[17][16],eT,n,aR),aT=N(V[11],0,0,h,i,aS)[1],s=a4(f[34],0,aT,n),v=a4(f[34],s[2],s[3],Z),w=cQ(v[2],v[3],W),y=a(f[36],w[3]),aU=function(b,a){var
c=a[2];return 0===c[0]?[0,b[1],[0,b[2]]]:[0,a[1],[1,c[1]]]},aV=a(G[55],y[4]),aW=bN(aU,w[2],aV,aa)[1];return[15,s[1],[0,v[1],w[1],y[2],y[3],U,ab],aW];case
16:var
bk=b[1],bl=function(a){return N(V[11],0,0,h,i,a[1])[1]};return[16,c(g[17][12],bl,bk)];case
17:var
A=b[2];if(0===A[0])var
ad=[0,N(V[11],0,0,h,i,A[1][1])[1]];else
var
aY=A[1],aZ=1,a0=function(a,b,c){return at(aZ,a,b,c)},a1=function(a,b,c){return aI(a0,a,b,c)},ad=[1,a5(function(a,b,c){return bP(a1,a,b,c)},h,i,aY)];return[17,b[1],ad];default:return[18,b[1]]}}var
aJ=[0,eM,function(d,c,b,a){var
e=a6(d,c,b,a[2]);return[0,a[1],e]}];az(434,aJ,"Decl_mode_plugin.Decl_interp");function
ai(p,k){var
f=k[2],b=k[1],q=o[1][9][1];function
r(b,a){return c(o[1][9][4],a,b)}var
s=e(g[17][15],r,q,p),u=c(B[4][1],f,b),v=c(B[4][2],f,b),w=c(B[4][4],f,b),l=[0,a(t[98],f)];try{var
C=N(cW[52],u,l,v,w,s),h=C}catch(b){b=H(b);if(b[1]!==cW[50])throw b;var
x=a(R[1],b[2]),y=a(d[1],fg),z=c(d[14],y,x),h=c(j[7],fh,z)}var
m=l[1],A=c(B[4][5],m,b),i=D(B[4][6],m,h[1],h[2],A),n=i[1];return[0,[0,n,0],D(B[4][8],i[3],b,n,i[2])]}function
ae(a){return c(x[8],a[2],a[1])}var
cY=[0,0];function
fi(a){cY[1]=a;return 0}function
cZ(a){return cY[1]}a(fd[4],[0,1,0,fk,fj,cZ,fi]);function
c0(g,b){var
d=a(m[1],b),h=a(m[7],b),i=a(m[2],b),j=c(B[4][2],i,d),k=a(m[2],b),l=a(g,c(B[4][5],k,d)),n=a(m[2],b),f=D(B[4][6],n,j,h,l),o=e(B[4][7],f[3],d,f[2]);return[0,[0,f[1],0],o]}function
W(b,a){return c0(function(a){return e(t[3][2],a,x[7],b)},a)}function
aK(a){return c0(function(a){return c(t[3][4],a,x[7])},a)}function
aL(b){var
d=a(m[8],b),f=e(P[42],0,P[9],d);return function(b){var
d=a(P[36],b);return c(P[47],f,d)}}function
c1(g,b){var
d=c(av[4],g,b),e=d[2],f=0===e[6]?1:0,h=f?1-a(bR[19],[0,b,d[1],e]):f;return h}function
fm(c,b){var
d=a(t[69],b),f=a(t[98],d);function
h(a,b){return D(t[95],a[1],a[2],0,b)}return e(g[17][16],h,c,f)}function
fn(b){return 95===J.caml_string_get(a(o[1][7],b),0)?1:0}function
fo(d){function
e(a){if(a){var
b=e(a[2]),d=a[1],f=function(e){var
a=[0,d,0];function
b(b){return ai(a,b)}return c(i[21],b,e)};return c(i[5],f,b)}return i[1]}var
b=a(m[9],d);if(b)var
h=a(G[81],b[2]),f=c(g[17][29],fn,h);else
var
f=b;return a(e(f),d)}function
aj(b,a){return c(p[138],[0,b],a)}function
fp(a){return W(fq,a)}function
fr(d){var
b=a(n[66][1],fp);a(cC[21],b);var
c=a(F[12],0);return a(x[14],c)}function
bS(f){var
d=a(ac[2],0);function
c(g,f){var
c=a(n[37],n[54]),b=e(w[29],d,c,f);return[0,b[1],b[2][1]]}var
b=1-a(F[26],c);return b?e(ff[8],0,0,3):b}function
ak(b){return a(x[15],0)}function
fs(a){return ak(0)}function
ft(c){try{bS(0);var
b=ak(0);return b}catch(b){b=H(b);if(b===$)return a(j[6],fu);throw b}}function
fv(a){return ft(0)}function
c2(b){if(a(w[7],b)){var
c=a(x[11],b);if(c){var
g=c[1];if(typeof
g!=="number"){var
m=a(d[1],fD);return e(j[3],0,0,m)}if(0===g){var
h=c[2];if(h)if(typeof
h[1]!=="number")return ak(0)}}return a(j[6],fC)}var
f=a(x[10],b);if(f){var
i=f[1],k=typeof
i==="number";if(!k)return k;if(0===i){var
l=f[2];if(l)if(typeof
l[1]!=="number"){bS(0);return ak(0)}}}return a(j[6],fE)}var
fG=a(o[1][5],fF);function
bT(j,d){var
b=[0,o[1][9][1]];function
g(h,d){var
j=a(f[aF],h);if(1===j[0]){b[1]=c(o[1][9][4],j[1],b[1]);return a(i[1],d)}var
g=c(m[20],fG,d);b[1]=c(o[1][9][4],g,b[1]);var
k=a(p[75],[0,g,0]),l=a(n[66][8],k),q=N(p[d$],0,[0,g],h,0,cV[7]),r=a(n[66][8],q);return e(i[5],r,l,d)}var
h=e(i[32],g,j,d),k=0,l=b[1],q=[0,function(b){function
d(d){var
b=a(aG[2][1][1],d);if(c(o[1][9][3],b,l))return i[1];var
e=[0,b,0];function
f(a){return ai(e,a)}return a(i[21],f)}var
f=a(m[9],b);return e(i[32],d,f,b)},k],r=[0,function(a){return h},q];return c(i[7],r,d)}var
fI=a(d[1],fH),fJ=c(j[2],0,fI),c3=[0,c(n[18],0,fJ)];function
fK(a){c3[1]=a;return 0}function
fL(a){return c3[1]}var
fM=a(n[13],0),a8=c(n[14],fM,fL);function
fN(b){return a(d[26],fO)}var
fR=D(cX[2],fQ,fP,0,fN);function
aM(d,b){function
f(b){return cZ(0)?a(j[6],fS):(c(fR,0,0),a(x[1],0),[0,0,a(t[69],b)])}var
g=a(n[66][8],p[41]),h=[0,c(i[5],d,g),0],k=a(i[20],h);return e(i[4],k,f,b)}function
c4(d,b){var
e=a(n[66][8],a8);function
f(a){return bT(d,a)}return aM(c(i[5],f,e),b)}function
X(b,a){return[C,function(c){return e(bK[4],fT,b,a)}]}var
a9=X(fV,fU),a_=X(fX,fW),a$=X(fZ,fY),ba=X(f1,f0),bb=X(f3,f2),bc=X(f5,f4),bd=X(f7,f6),be=X(f9,f8),bf=X(f$,f_),bg=X(gb,ga);function
bU(d,b,a){if(a){var
e=a[2],f=a[1];return d===f[1]?c(g[18],b,e):[0,f,bU(d,b,e)]}throw $}function
gc(d,b,p,k){var
q=b[2],r=a(aL(k),q),j=a(f[39],r),l=j[2],n=a(f[aF],j[1]);if(11===n[0]){var
h=n[1],i=h[1],s=h[2];if(c1(d,i)){var
o=c(av[4],d,i),u=c(av[17],h,[0,o[1],o[2]]),v=function(q,o){var
r=[0,a(f[131],[0,[0,i,q+1|0],s]),l],u=a(f[59],r),v=c(f[76],o,l),w=c(cU[26],d,v);function
n(i,d,b){if(b){var
g=i+1|0,p=b[2],h=n(g,[0,a(f[ab],g),d],p),q=h[3],r=a(aG[1][1][3],b[1]),s=c(z[12],d,r),j=a(m[8],k),l=e(P[42],0,P[14],j),o=a(P[36],s),t=[0,[0,g,c(P[46],l,o)],q];return[0,h[1],h[2],t]}return[0,i,d,0]}var
x=a(g[17][6],w[1]),h=n(b[3],0,x),j=h[3],y=h[1],A=[0,u,a(g[17][6],h[2])],B=a(f[59],A),C=e(t[96],b[1],[0,B,gd],b[5]),E=bU(b[1],j,b[4]);function
F(b,a){return D(t[95],a[1],a[2],0,b)}var
G=e(g[17][15],F,C,j),H=a(g[17][6],j);function
I(a){return c(g[22][3],[0,a[1],a[2],y,E,G],p)}return c(g[17][11],I,H)};return c(g[19][14],v,u)}}return 0}function
c5(b,h){var
a=h;for(;;){if(a){var
d=a[2],e=a[1],f=e[1];if(c(t[88],b,f)){var
a=d;continue}var
i=c5(b,d),g=[0,[0,f,c(a7[90],b,e[2])],i]}else
var
g=a;return g}}function
c6(h,W,n){var
i=a(m[7],n),u=a(t[69],n),b=a(m[8],n),k=e(cS[4],b,[0,u],i),X=a(f[ed],k);function
v(w,t,q,o){if(o){var
x=o[2],y=o[1],z=y[1],b=c(G[54],q,y[2]),Y=e(aq[9],w,b,0),h=e(p[14],t,Y,n),A=c(aX[31],[0,h,b],w),Z=e(cS[4],A,[0,u],b),B=a(f[ed],Z),_=[0,[0,z,a(f[s],h)],q];if(a(g[17][47],x)){var
$=c(G[54],_,W);return[0,B,b,e(f[50],h,b,$)]}var
r=v(A,[0,h,t],[0,[0,z,a(f[s],h)],q],x),k=r[2],D=r[1],m=e(f[50],h,b,r[3]),aa=a(f[s],h);if(c(G[53],aa,k)){var
l=e(f[50],h,b,k);if(0===D){if(0===X){var
E=K(bb),ab=[0,b,l],ac=L===E?bb[1]:C===E?a(I[2],bb):bb,F=K(bc),ad=a(f[O],[0,ac,ab]),ae=[0,b,l,i,m],af=L===F?bc[1]:C===F?a(I[2],bc):bc;return[0,0,ad,a(f[O],[0,af,ae])]}var
H=K(bd),ag=[0,b,l],ah=L===H?bd[1]:C===H?a(I[2],bd):bd,J=a(f[O],[0,ah,ag]),M=K(be),ai=[0,b,l,a(f[bv],[0,0,J,i]),m],aj=L===M?be[1]:C===M?a(I[2],be):be;return[0,2,J,a(f[O],[0,aj,ai])]}var
N=K(bf),ak=[0,b,l],al=L===N?bf[1]:C===N?a(I[2],bf):bf,P=a(f[O],[0,al,ak]),Q=K(bg),am=[0,b,l,a(f[bv],[0,0,P,i]),m],an=L===Q?bg[1]:C===Q?a(I[2],bg):bg;return[0,2,P,a(f[O],[0,an,am])]}if(0===B)if(0===D){var
R=K(a9),ao=[0,b,k],ap=L===R?a9[1]:C===R?a(I[2],a9):a9,S=K(a_),ar=a(f[O],[0,ap,ao]),as=[0,b,k,i,m],at=L===S?a_[1]:C===S?a(I[2],a_):a_;return[0,0,ar,a(f[O],[0,at,as])]}var
T=K(a$),au=[0,b,k],av=L===T?a$[1]:C===T?a(I[2],a$):a$,U=a(f[O],[0,av,au]),V=K(ba),aw=[0,b,k,a(f[bv],[0,0,U,i]),m],ax=L===V?ba[1]:C===V?a(I[2],ba):ba;return[0,2,U,a(f[O],[0,ax,aw])]}var
ay=a(d[1],gf);return e(j[3],0,gg,ay)}var
l=v(b,0,0,h),o=[0,a(f[ab],1)];return a(f[O],[0,l[3],o])}function
aN(C,B,k,d){try{var
o=a(m[8],d),b=a(m[7],d),u=fm([0,[0,0,b],k],d),h=a(g[22][2],0),F=0,v=0,w=function(b,a){return c(U[5],b,a[1])},x=[0,0,b,e(g[17][15],w,v,k),[0,[0,0,b],0],u];c(g[22][3],x,h);var
q=function(c){for(;;){var
b=a(g[22][9],h);try{var
i=b[2],l=[0,a(cR[5],0)],m=cj(cR[8],o,b[5],1,l,B,i);if(0<c)var
f=q(c-1|0);else
var
n=e(t[96],b[1],[0,C,ge],m),p=bU(b[1],k,b[4]),f=[0,b[1],b[2],b[3],p,n];return f}catch(c){c=H(c);if(a(j[22],c)){gc(o,b,h,d);continue}throw c}}};try{var
i=q(F)}catch(a){a=H(a);if(a===g[22][1])throw $;throw a}var
y=a(f[ab],0),z=c(a7[90],i[5],y),A=[0,c5(i[5],i[4]),z],l=A}catch(b){b=H(b);if(b!==$)throw b;var
l=a(j[6],gh)}var
r=l[2],s=l[1];if(a(g[17][47],s)){var
D=a(p[45],r);return c(n[66][8],D,d)}var
E=c6(s,r,d);return c(m[45],E,d)}function
c7(d,c,b){return 0===b[0]?b[1]:b[1]?a(j[6],gi):a(m[7],c)}function
c8(h,e,r,b){if(h)try{var
o=a(m[8],b),p=a(x[12],o),q=[0,a(f[s],p),0],d=q}catch(b){b=H(b);if(b[1]!==j[5])throw b;var
d=a(j[6],gj)}else
var
d=h;function
k(b){var
f=e[2];return f?bT(c(g[18],d,f[1]),b):a(i[1],b)}function
l(b){var
d=e[3];if(d){var
f=d[1],g=a(ap[28],0),h=c(ap[19],g,f);return c(n[66][8],h,b)}return c(n[66][8],a8,b)}return aM(c(i[5],k,l),b)}function
c9(r,q,p,g,b){var
h=ae(b),j=g[1],k=j[1];if(k)var
d=k[1];else
var
y=a(o[1][5],gk),d=c(m[20],y,b);var
l=e(r,h,b,j[2]),t=[0,function(b){return q?aN(a(f[s],d),l,0,b):a(i[1],b)},0];function
u(a){return c8(p,g,h,a)}var
v=[0,c(i[5],aK,u),t],w=aj(d,l),x=a(n[66][8],w);return e(i[11],x,v,b)}var
Q=[C,function(b){return a(cG[48],bK[30])}];function
gl(h,e){var
i=c(m[19],e,h),k=a(aL(e),i),d=a(f[aF],k);if(9===d[0]){var
b=d[2],g=K(Q),l=L===g?Q[1]:C===g?a(I[2],Q):Q;if(c(G[63],d[1],l))if(3===b.length-1){var
n=S(b,2)[3],o=S(b,1)[2];return[0,S(b,0)[1],o,n]}return a(j[6],gn)}return a(j[6],gm)}function
go(D,B,d,b){try{var
am=a(m[8],b),an=a(x[12],am),g=an}catch(b){b=H(b);if(b[1]!==j[5])throw b;var
g=a(j[6],gp)}var
k=gl(g,b),l=k[3],q=k[2],r=k[1];function
E(b){var
c=d[2];return c?bT(c[1],b):a(i[1],b)}function
F(b){var
e=d[3];if(e){var
f=e[1],g=a(ap[28],0),h=c(ap[19],g,f);return c(n[66][8],h,b)}return c(n[66][8],a8,b)}function
t(a){return aM(c(i[5],E,F),a)}var
u=d[1][1];if(u)var
h=u[1];else
var
al=a(o[1][5],gq),h=c(m[20],al,b);function
v(c,b){return D?aN(a(f[s],h),c,0,b):a(i[1],b)}if(0===B){var
w=K(Q),G=[0,r,d[1][2],l],J=L===w?Q[1]:C===w?a(I[2],Q):Q,y=a(f[O],[0,J,G]),M=0,N=[0,function(a){return v(y,a)},M],P=a(f[s],g),R=a(p[45],P),S=[0,t,[0,a(n[66][8],R),0]],T=a(p[cn],q),U=a(n[66][8],T),V=c(i[11],U,S),W=[0,c(i[5],aK,V),N],X=aj(h,y),Y=a(n[66][8],X);return e(i[11],Y,W,b)}var
z=K(Q),Z=[0,r,q,d[1][2]],_=L===z?Q[1]:C===z?a(I[2],Q):Q,A=a(f[O],[0,_,Z]),$=0,aa=[0,function(a){return v(A,a)},$],ab=a(f[s],g),ac=a(p[45],ab),ad=[0,a(n[66][8],ac),[0,t,0]],ae=a(p[cn],l),af=a(n[66][8],ae),ag=c(i[11],af,ad),ah=[0,c(i[5],aK,ag),aa],ai=aj(h,A),ak=a(n[66][8],ai);return e(i[11],ak,ah,b)}function
c_(h,d,b){var
k=ae(b),j=d[1];if(j)var
g=j[1];else
var
x=a(o[1][5],gr),g=c(m[20],x,b);function
l(b){if(h){var
c=d[2];return aN(a(f[s],g),c,0,b)}return a(i[1],b)}var
p=k[1],q=h?2:1,r=[0,[0,q,p]],t=0,u=[0,l,[0,function(a){return W(r,a)},t]],v=aj(g,d[2]),w=a(n[66][8],v);return e(i[11],w,u,b)}function
aO(f,e,d){if(e)var
b=e[1];else
var
k=a(o[1][5],gs),b=c(m[20],k,d);var
g=[0,a(f,b),0],h=a(p[23],b),j=[0,a(n[66][8],h),g];return c(i[7],j,d)}function
bV(d,b){var
e=i[1];function
f(d){var
b=d[1],e=b[1];function
f(d){var
e=c(p[4],0,[0,d,b[2]]);return a(n[66][8],e)}function
g(a){return aO(f,e,a)}return a(i[5],g)}return D(g[17][16],f,d,e,b)}function
c$(b,a){var
c=a?[0,b,c$(b+1|0,a[2])]:a;return c}function
bW(b,e){if(b){var
d=b[1][1],j=bW(b[2],e),g=c(z[8],1,j),h=d[1];if(h)var
k=a(f[s],h[1]),i=c(G[58],k,g);else
var
i=g;return a(f[bG],[0,d[1],d[2],i])}return e}function
da(d,b){if(b){var
e=b[1],h=a(f[34],d),i=b[2],j=[0,a(f[ab],e),0],g=da(c(f[76],d,j),i);return[0,[0,[0,e,h[2]],g[1]],g[2]]}return[0,0,d]}function
gu(n,b){var
o=c(m[19],b,n),p=a(aL(b),o),e=a(f[39],p),d=a(m[8],b),h=a(f[aF],e[1]);if(11===h[0]){var
i=h[1],j=i[1];if(c1(d,j)){var
k=c(av[4],d,j),l=c(av[17],i,[0,k[1],k[2]]);if(1-(1===l.length-1?1:0))throw $;var
q=e[2],r=S(l,0)[1],s=c(f[76],r,q),t=c(cU[26],d,s)[1];return a(g[17][1],t)}}throw $}function
db(g,f,d,b){if(0<g){var
j=a(o[1][5],gv),h=c(m[20],j,b),k=[0,h,f],l=g-1|0,q=function(a){return db(l,k,d,a)},r=a(p[23],h),s=a(n[66][8],r);return e(i[5],s,q,b)}return c(d,f,b)}function
af(h,l,k,b,e){if(k){if(b){var
r=b[1][1],t=b[2],q=k[2],d=k[1],y=function(e){try{var
x=gu(d,e),k=x}catch(b){b=H(b);if(b!==$)throw b;var
k=a(j[6],gw)}var
m=0;function
o(a){var
d=c(g[17][8],a,q);return function(a){return af(h,l,d,b,a)}}var
r=0,t=[0,function(a){return db(k,r,o,a)},m],u=a(f[s],d),v=a(p[ep],u),w=[0,a(n[66][8],v),t];return c(i[7],w,e)},u=r[1];if(u)var
v=u[1],z=0,A=[0,[0,v,1],l],B=[0,function(a){return af(h,A,q,t,a)},z],C=a(p[81],[0,[0,d,v],0]),E=[0,a(n[66][8],C),B],w=a(i[7],E);else
var
I=[0,[0,d,0],l],w=function(a){return af(h,I,q,t,a)};var
F=c(p[4],0,[0,d,r[2]]),G=a(n[66][8],F);return D(i[33],G,w,y,e)}return a(j[6],gx)}if(b){if(h){var
J=a(o[1][5],gy),x=c(m[20],J,e),K=function(b){return a(j[6],gz)},L=[0,x,0],M=0,N=1,O=function(a){return af(N,M,L,b,a)},P=a(p[23],x),Q=a(n[66][8],P);return D(i[33],Q,O,K,e)}return a(j[6],gA)}return a(i[1],e)}function
dc(d,b){if(d){var
f=d[1],g=c(m[15],b,f),h=d[2],j=function(a){return dc(h,a)},k=0,l=function(a){return aN(f,g,k,a)};return e(i[5],l,j,b)}return a(i[1],b)}function
dd(b,d){if(b){var
e=b[1],i=dd(b[2],d),j=c(z[8],1,i),g=e[1];if(g){var
h=g[1],k=a(f[s],h),l=c(G[58],k,j);return a(f[bv],[0,[0,h],e[2],l])}throw[0,M,gC]}return d}function
gE(d){var
b=d[1];if(b){var
c=a(bQ[6],d[2])[1];if(typeof
c!=="number"&&0===c[0])if(c[1][2]===b[1])return 1;var
e=0}else
var
e=b;return e}function
de(i,h){var
b=i;for(;;){var
d=a(bQ[6],b[2]);if(typeof
d[1]==="number"){var
b=[0,0,a(ac[26],h)[2][12]];continue}var
e=d[2],f=b[1],j=function(b){var
d=a(bQ[6],b)[2];function
e(a){return[0,f,a]}return c(g[19][15],e,d)};return c(g[19][15],j,e)}}function
bh(e,a,d,b){var
f=de(d,a);function
h(d,a){var
e=c(b,d,a);return[0,c(g[19][15],gE,a),e]}return[1,e,a,c(g[19][16],h,f)]}function
df(e,d,b){if(1===b[0]){var
f=function(b,a){var
e=c(d,b,a[2]);return[0,a[1],e]},h=c(g[19][16],f,b[3]),i=b[2];return[1,a(e,b[1]),i,h]}return a(U[2],gG)}function
dg(d,b,a){function
c(b,a){return 0}return bh(o[1][9][1],b,a,c)}function
dh(v,d,b){var
l=a(m[7],b),n=a(m[8],b),h=c(m[15],b,d),w=c(G[45],d,l),x=a(aL(b),h),o=a(f[39],x);try{var
C=a(f[43],o[1]),p=C}catch(b){b=H(b);if(b!==f[28])throw b;var
p=a(j[6],gH)}var
i=p[1],q=a(ac[26],i),r=q[1];if(0===v)var
k=r[6],s=0;else
var
k=r[7],s=[0,i[2]];var
t=c(g[17][99],k,o[2]),u=t[2];function
y(a,d){var
e=c(m[15],b,a),f=[0,e,c(G[58],a,d)];return c(aq[17],n,f)}var
z=[0,h,c(G[58],d,l)],A=c(aq[17],n,z),B=e(g[17][16],y,u,A);return[0,w,[0,d,h,i,B,u,t[1],k,[0,s,q[2][12]]]]}function
bX(c,b,a){return 0<a?[0,b,bX(c,b,a-1|0)]:[2,c]}function
aP(b,c){if(c){var
d=c[2],f=c[1],i=b[1];if(f){var
j=f[2],k=f[1],h=k[1];if(0===h[0]){var
m=aP(b,[0,j,d]);return[0,a(o[1][9][5],i),m]}var
l=h[2],n=h[3],p=l[2],q=function(k,h){var
c=k===(p-1|0)?1:0;if(c)var
l=0,m=function(a,b){return[0,b,S(h,a)[a+1]]},q=aP(b,[0,e(g[17][69],m,l,n),[0,j,d]]),f=[0,[0,a(o[1][9][5],i),q]];else
var
f=c;return f};return bh(o[1][9][1],l[1],k[2],q)}return[2,aP(b,d)]}return[3,b]}function
aw(f,l,b){var
m=f[1];if(l){var
h=l[2],n=l[1];if(n){var
k=n[2],r=n[1],s=r[2],p=r[1];if(0===p[0])switch(b[0]){case
0:var
B=aw(f,[0,k,h],b[2]);return[0,c(o[1][9][4],m,b[1]),B];case
1:var
C=function(b,a){return bi(f,1,[0,k,h],a)};return df(a(o[1][9][4],m),C,b);default:var
D=a(d[1],gO);return e(j[3],0,0,D)}var
t=p[3],u=p[2],v=u[2],w=u[1];switch(b[0]){case
0:var
x=b[2],i=b[1];return bh(i,w,s,function(b,a){if(b===(v-1|0)){var
d=0,j=function(b,c){return[0,c,S(a,b)[b+1]]},l=e(g[17][69],j,d,t),n=aw(f,[0,l,[0,k,h]],bX(x,i,a.length-1));return[0,[0,c(o[1][9][4],m,i),n]]}return[0,[0,i,bX(x,i,a.length-1)]]});case
1:if(1-c(o[37],w,b[2]))a(j[6],gP);if(1===b[0]){var
q=b[2],y=de(s,q),z=function(a,b){var
c=b[2],i=S(y,a)[a+1];if(a===(v-1|0))var
j=0,l=function(a,b){return[0,b,S(i,a)[a+1]]},d=bi(f,0,[0,e(g[17][69],l,j,t),[0,k,h]],c);else
var
d=c;return[0,b[1],d]},A=c(g[19][16],z,b[3]);return[1,b[1],q,A]}return a(U[2],gF);default:var
E=a(d[1],gQ);return e(j[3],0,0,E)}}if(2===b[0])return[2,aw(f,h,b[1])];var
F=a(d[1],gR);return e(j[3],0,0,F)}if(3===b[0])return[3,b[1]];var
G=a(d[1],gS);return e(j[3],0,0,G)}function
bi(b,h,e,d){var
f=b[1];if(d){var
g=d[1],i=bj(b,h,e,g[2]);return[0,[0,c(o[1][9][4],f,g[1]),i]]}var
j=aP(b,e);return[0,[0,a(o[1][9][5],f),j]]}function
bj(f,h,g,b){var
i=f[1];if(0<h)switch(b[0]){case
0:var
k=bj(f,h,g,b[2]);return[0,c(o[1][9][4],i,b[1]),k];case
1:var
l=function(b,a){return bi(f,h+1|0,g,a)};return df(a(o[1][9][4],i),l,b);case
2:return[2,bj(f,h-1|0,g,b[1])];default:var
m=a(d[1],gT);return e(j[3],0,0,m)}return aw(f,g,b)}function
di(e,d){var
a=d;for(;;){if(a){var
b=a[1];if(c(o[2][4],b[1],e))return b[2];var
a=a[2];continue}throw $}}function
bY(h,k,b,i){var
l=a(f[79],k)[1],m=a(f[39],k),p=a(f[43],m[1]);if(1-c(o[37],p[1],b[3])){var
q=a(d[1],gU),r=a(d[17],0),s=e(ad[4],i,t[16],h),u=c(d[14],s,r),v=c(d[14],u,q);c(j[7],gV,v)}var
n=c(g[17][99],b[7],m[2]);if(1-e(g[17][24],G[63],n[1],b[6])){var
w=a(d[1],gW),x=a(d[17],0),y=e(ad[4],i,t[16],h),A=c(d[14],y,x),B=c(d[14],A,w);c(j[7],gX,B)}var
C=c(g[18],n[2],[0,h,0]),D=b[4],E=a(g[17][1],l),F=[0,c(z[8],E,D),C],H=a(f[59],F),I=c(a7[20],t[16],H);return c(f[64],l,I)}function
bZ(g,j,e,b,d){if(e){var
k=e[1];if(0===k[0])var
o=k[1],p=o[2],h=o[1];else{var
i=k[1],l=i[2];if(0!==l[0]){var
q=l[1],y=bZ(g,j,e[2],b,d),A=c(z[8],1,y),r=i[1],B=r?c(z[20],r[1],A):b;if(q){var
n=q[1],C=a(f[s],n);try{var
D=di([0,n],g[1]),t=D}catch(a){a=H(a);if(a!==$)throw a;var
t=di([0,n],g[2])[2]}var
u=bY(C,t,j,a(m[8],d))}else
var
u=a(m[7],d);return a(f[bG],[0,i[1],u,B])}var
p=l[1],h=i[1]}var
v=bZ(g,j,e[2],b,d),w=c(z[8],1,v),x=h?c(z[20],h[1],w):b;return a(f[bG],[0,h,p,x])}return b}function
dj(j,b,h,i,d){var
k=a(m[8],d),l=bZ(b,h,i,bY(b[3],b[4],h,k),d);function
n(b,d){var
g=b[1];if(g){var
h=c(z[8],1,d);return e(f[52],g[1],b[2],h)}var
i=c(z[8],1,d);return a(f[bG],[0,0,b[2],i])}function
o(b,d){var
e=b[1];if(e){var
g=c(z[8],1,d);return D(f[51],e[1],b[2][1],b[2][2],g)}var
h=c(z[8],1,d);return a(f[123],[0,0,b[2][1],b[2][2],h])}var
p=e(g[17][16],o,b[2],l),q=c(g[18],j,b[1]);return e(g[17][16],n,q,p)}function
dk(g,f,c,e,d){var
b=d;for(;;){if(typeof
b==="number"){if(0===b)return a(j[6],gY);var
b=[0,dg(f,c[3],c[8])];continue}return[0,aw(g,[0,[0,[0,e,c[8]],0],0],b[1])]}}function
dl(a){function
b(a){return[0,a,g1]}return c(g[17][12],b,a)}function
dm(i,b){function
f(f){var
b=f[2];if(b)var
c=b[1],g=[0,[0,c[1],[0,i,c[2]]],b[2]];else
var
h=a(d[1],g2),g=e(j[3],0,0,h);return[0,f[1],g]}return c(g[17][12],f,b)}function
dn(h,f,a){function
b(d){var
a=d[1],b=c(o[1][9][3],a,f),e=b?[0,h]:b;return[0,a,[0,[0,e,0],d[2]]]}return c(g[17][12],b,a)}function
g3(k){var
b=k[2];if(b){var
h=b[1],l=h[1];if(b[2])if(l)var
m=b[2],n=m[1],r=a(g[17][6],h[2]),s=a(f[59],[0,l[1],r]),i=[0,[0,n[1],[0,s,n[2]]],m[2]];else
var
p=b[2],q=p[1],t=p[2],u=c(g[18],h[2],q[2]),i=[0,[0,q[1],u],t];else
var
i=b;var
o=i}else
var
v=a(d[1],g4),o=e(j[3],0,0,v);return[0,k[1],o]}function
dp(a){return c(g[17][12],g3,a)}function
dq(n,b,h,d){var
p=a(f[s],d),i=c(m[19],h,d),q=a(f[79],i),j=a(f[39],i),r=a(f[43],j[1]);if(c(o[37],r[1],b[3])){var
k=c(g[17][99],b[7],j[2]);try{var
x=e(g[17][24],G[63],k[1],b[6]),l=x}catch(a){a=H(a);if(a[1]!==fb)throw a;var
l=0}if(l){var
t=c(g[18],k[2],[0,p,0]),u=[0,a(f[s],n),t],v=a(f[59],u),w=c(a7[20],h[2],v);return c(f[66],q[1],w)}throw[0,M,g5]}throw[0,M,g6]}function
g7(b){return a(d[26],g8)}var
g$=D(cX[2],g_,g9,0,g7);function
bk(y,x,r,Q,P,w,O,h){var
l=Q,k=P,b=O;for(;;)switch(b[0]){case
0:if(k){var
T=dm(k[1],l),l=T,k=k[2],b=b[2];continue}var
U=a(d[1],ha);return e(j[3],0,hb,U);case
1:var
q=b[2],V=b[1];if(k){var
t=k[1],W=k[2],z=a(ac[26],q),X=z[1][6],Y=a(m[7],h),u=a(m[8],h),A=c(m[15],h,t),Z=a(aL(h),A),B=a(f[39],Z),C=a(f[43],B[1]);if(c(o[37],C[1],q)){var
D=c(g[17][99],X,B[2]),E=D[1],_=function(a,b){var
d=c(m[15],h,a),e=[0,d,c(G[58],a,b)];return c(aq[17],u,e)},$=[0,A,c(G[58],t,Y)],aa=c(aq[17],u,$),ad=e(g[17][16],_,D[2],aa),ae=e(bR[75],u,q,4),af=c(av[17],[0,q,C[2]],z),ag=function(b){var
d=c(f[76],b,E),e=a(f[88],d);return c(p[15],e,h)},F=c(g[19][15],ag,af),ah=function(b,c){return a(f[ab],b+1|0)},ai=[0,ae,ad,t,c(g[19][16],ah,F)],aj=a(f[cn],ai),ak=function(b,e,v){var
h=e[2],j=e[1],k=S(F,b)[b+1];function
m(b,c){if(c){var
d=c[1],e=m(b+1|0,c[2]),g=e[3],h=e[2],i=e[1];return S(j,b)[b+1]?[0,[0,a(f[s],d),i],[0,d,h],g+1|0]:[0,[0,a(f[s],d),i],h,g]}if(b===j.length-1)return[0,W,0,w];throw[0,M,hc]}var
d=m(0,k),z=d[2],A=0;if(h)var
t=h[1],B=t[1],C=function(a){return c(o[1][9][3],a[1],B)},D=c(g[17][29],C,l),G=[0,a(f[128],[0,q,b+1|0]),E],H=dn(a(f[59],G),V,D),I=t[2],J=d[3],K=d[1],u=function(a){return bk(y,x,r,H,K,J,I,a)};else{c(g$,0,0);var
u=a(r,a(f[ab],1))}var
L=[0,u,A],N=[0,function(b){function
d(c){return dq(a(R[12],y),x,b,c)}var
e=c(g[17][12],d,z),f=a(p[cB],e);return c(n[66][8],f,b)},L];function
O(b){var
c=a(p[23],b);return a(n[66][8],c)}var
P=[0,c(i[32],O,k),N];return c(i[7],P,v)},al=c(g[19][16],ak,b[3]),am=a(m[45],aj);return e(i[12],am,al,h)}throw[0,M,hd]}var
an=a(d[1],he);return e(j[3],0,hf,an);case
2:var
ao=dp(l),l=ao,b=b[1];continue;default:var
H=b[1],I=H[2],J=I[1],K=H[1];if(k){var
ap=a(d[1],hg);return e(j[3],0,hh,ap)}var
v=c(o[1][12][3],K,l);if(v){var
L=v[1];if(!L[1])if(!v[2]){var
as=function(b){return a(f[ab],b+1|0)},at=c(g[17][48],J+I[2]|0,as),N=c(g[17][99],J,at),au=c(g[17][8],L[2],N[2]),aw=c(g[17][7],N[1],au),ax=[0,a(f[s],K),aw],ay=a(r,a(f[59],ax)),az=a(n[66][8],p[17]),aA=c(i[26],w,az);return e(i[5],aA,ay,h)}}var
ar=a(d[1],hi);return e(j[3],0,0,ar)}}function
dr(i,b){var
d=[0,function(j){var
k=a(cT[6],j),l=a(m[7],b),f=a(m[8],b),g=cj(cH[6],0,0,0,f,t[16],i);function
d(a){return 2===a[0]?[13,[0,u[4],hj,0,0]]:c(fe[7],d,a)}var
h=d(g),e=N(V[8],0,f,k,[0,[0,l]],h);return a(cT[21][5],[0,e[2],e[1]])}],e=c(p[160][1],0,d);return c(n[66][8],e,b)}function
hs(a){return W(ht,a)}function
hz(f,m){var
b=m;for(;;)if(typeof
b==="number"){a(x[14],f);return a(F[10],hA)}else
switch(b[0]){case
18:var
h=b[1];if(typeof
h==="number")return 0===h?a(F[10],hB):0;if(0===h[1])return ak(0);var
n=a(w[9],f),o=a(g[17][3],n),k=a(w[33][1],f);try{var
r=a(g[17][3],k[1]),s=c(B[4][1],k[2],r),l=s}catch(b){b=H(b);if(b[1]===fa)if(J.caml_string_notequal(b[2],hC))var
i=0;else
var
l=a(ac[2],0),i=1;else
var
i=0;if(!i)throw b}try{c(bR[77],l,o);var
q=fs(0);return q}catch(b){b=H(b);if(b[1]===fc[1])if(14===b[3][0]){var
p=a(d[1],hD);return e(j[3],0,0,p)}throw b}case
0:case
1:case
2:var
b=b[1];continue;case
10:case
11:case
14:case
15:case
17:return a(x[14],f);default:return 0}}function
ds(L,r){var
v=L[2];for(;;){if(typeof
v==="number")var
y=0;else
switch(v[0]){case
18:var
K=v[1];if(typeof
K==="number"){if(a(w[28],r))ak(0);else{var
k=a(w[7],r)?a(x[11],r):a(x[10],r);if(k){var
E=k[1];if(typeof
E==="number")if(0===E){var
U=k[2];if(U){var
V=U[1];if(typeof
V==="number")var
R=1;else
var
X=V[1],C=1,R=0}else
var
R=1;if(R){var
as=a(d[1],fw);e(j[3],0,0,as);var
B=1,C=0}}else
var
B=0,C=0;else
var
X=E[1],C=1;if(C)var
B=0===X?(a(j[6],fx),1):(a(j[6],fy),1)}else
var
B=0;if(!B){if(typeof
K==="number"){switch(K){case
0:if(k)var
t=0,l=0;else
var
l=1;break;case
1:if(k){var
Z=k[1];if(typeof
Z==="number")if(2===Z)var
t=0,l=0;else
var
l=1;else
var
l=1}else
var
t=0,l=0;break;default:if(k){var
_=k[1];if(typeof
_==="number"&&2===_)var
l=1;else
var
t=0,l=0}else
var
t=0,l=0}if(l){bS(0);ak(0);var
t=1}}else
var
t=0;if(!t)if(k){var
Y=k[1],aU=typeof
Y==="number"?2===Y?(a(j[6],fA),1):0:0;if(!aU)a(j[6],fz)}else
a(j[6],fB)}}var
O=0,y=2}else
var
y=1;break;case
14:case
15:var
y=1;break;case
0:case
1:case
2:var
v=v[1];continue;default:var
y=0}switch(y){case
0:if(1-a(w[7],r)){var
T=a(x[10],r);if(T)if(typeof
T[1]==="number")var
S=1;else{a(j[6],fl);var
ar=1,S=0}else
var
S=1;if(S)var
ar=0}else
var
ar=0;var
O=1;break;case
1:c2(r);var
O=1;break}var
P=a(F[12],0);if(O){var
an=a(w[33][1],P),ao=an[2],ap=[0,a(g[17][3],an[1]),ao],aq=a(m[8],ap),aL=c(aJ[1],[0,o[1][9][1],aq],L),aP=ae(ap),u=0,q=0,b=D(aJ[2],aP,aq,ao,aL)[2];for(;;){if(typeof
b==="number")var
h=hs;else
switch(b[0]){case
0:if(q)throw[0,M,hu];var
q=1,b=b[1];continue;case
1:if(u)throw[0,M,hv];var
u=1,b=b[1];continue;case
2:if(!q)if(!u){var
u=1,q=1,b=b[1];continue}throw[0,M,hw];case
3:var
at=b[1],h=function(a){return c9(c7,u,q,at,a)};break;case
4:if(q)throw[0,M,hx];var
au=b[2],av=b[1],h=function(a){return go(u,av,au,a)};break;case
5:var
$=b[1],h=function(b){var
h=ae(b),t=a(o[1][5],gt),j=c(m[20],t,b),k=$[1],d=k[1],l=bW(d,c7(h,b,k[2])),p=c$(1,d),r=da(l,p),u=r[2],v=r[1],w=c(g[17][12],f[ab],p),x=[0,a(f[s],j),w],y=a(f[59],x),z=[0,function(a){return aN(y,u,v,a)},0],A=0,B=[0,aK,[0,function(a){return c8(q,$,h,a)},A]],C=[0,function(a){return bV(d,a)},B],D=[0,a(i[7],C),z],E=aj(j,l),F=a(n[66][8],E);return e(i[11],F,D,b)};break;case
8:var
ax=b[1],h=function(a){return af(1,0,0,ax,a)};break;case
9:var
aa=b[2],ad=b[1],h=function(b){var
h=a(f[99],ad),d=a(f[aF],h);if(1===d[0])return af(0,0,[0,d[1],0],aa,b);var
j=a(o[1][5],gB),g=c(m[20],j,b),k=[0,g,0],l=0,q=0;function
r(a){return af(q,l,k,aa,a)}var
s=c(p[143],[0,g],ad),t=a(n[66][8],s);return e(i[5],t,r,b)};break;case
10:var
ay=b[1],az=0,h=function(a){return c_(az,ay,a)};break;case
11:var
aA=b[1],aB=1,h=function(a){return c_(aB,aA,a)};break;case
12:var
aC=b[3],aD=b[2],aE=b[1],h=function(d){var
a=dd(aD,aC),b=N(p[d$],0,[0,aE],a,0,cV[7]);return c(n[66][8],b,d)};break;case
13:var
ag=b[2],G=b[1],h=function(b){if(0===G[0]){var
d=G[1],f=c(m[18],b,d),g=[0,d,a(aG[2][1][2],f),ag],h=a(aG[2][1][18],g),i=c(p[4],0,h);return c(n[66][8],i,b)}if(G[1])return a(j[6],gD);var
k=e(p[3],0,ag,2);return c(n[66][8],k,b)};break;case
14:var
ah=b[1],h=function(g){var
p=ae(g),s=a(m[7],g),t=a(o[1][5],gN),q=c(m[20],t,g),u=bW(ah,s),k=p[1],v=[0,[0,0,p[1]]];if(k){var
b=k[1];if(typeof
b==="number")var
h=0;else{var
l=b[4];if(typeof
b[3]==="number")var
f=[0,l,[0,[0,b[1],b[2],0,[0,q,l]],k[2]]],h=1;else
var
f=a(j[6],gM),h=1}}else
var
h=0;if(!h)var
r=a(d[1],gL),f=e(j[3],0,0,r);var
w=[0,f[2]],x=0,y=[0,function(a){return W(w,a)},x],z=0,A=f[1],B=[0,function(a){return ai(A,a)},z],C=[0,function(a){return bV(ah,a)},B],D=[0,function(a){return W(v,a)},C],E=[0,a(i[7],D),y],F=aj(q,u),G=a(n[66][8],F);return e(i[11],G,E,g)};break;case
15:var
H=b[3],z=b[2],I=b[1],h=function(h){var
t=ae(h),x=a(o[1][5],gZ),l=c(m[20],x,h),q=t[1];if(q){var
b=q[1];if(typeof
b==="number")var
s=0;else
var
w=b[1],k=b[2],v=b[3],r=b[4],u=q[2],s=1}else
var
s=0;if(!s)var
y=a(d[1],g0),f=e(j[3],0,0,y),w=f[1],k=f[2],v=f[3],r=f[4],u=f[5];var
A=dj(I,z,k,H,h),B=[0,[0,0,t[1]]],C=z[5],E=a(m[8],h),F=a(g[17][1],H),G=[0,[0,[0,w,k,dk([0,l,[0,a(g[17][1],I),F]],E,k,C,v),[0,l,r]],u]],J=0,K=[0,function(a){return W(G,a)},J],L=0,M=[0,function(a){return ai(r,a)},L],N=[0,function(e){var
b=i[1];function
d(b){if(0===b[0])var
d=b[1],f=d[2],e=d[1];else{var
g=b[1],h=g[2],j=g[1];if(0!==h[0]){var
m=function(a){return i[1]},o=function(a){return aO(m,j,a)};return a(i[5],o)}var
f=h[1],e=j}function
k(b){var
d=c(p[4],0,[0,b,f]);return a(n[66][8],d)}function
l(a){return aO(k,e,a)}return a(i[5],l)}return D(g[17][16],d,H,b,e)},M],O=z[2],P=[0,function(e){var
b=i[1];function
d(b){var
d=b[1];function
e(d){var
e=c(p[4],0,[1,d,b[2][1],b[2][2]]);return a(n[66][8],e)}function
f(a){return aO(e,d,a)}return a(i[5],f)}return D(g[17][16],d,O,b,e)},N],Q=c(g[18],I,z[1]),R=[0,function(e){var
b=i[1];function
d(b){var
d=b[1];function
e(d){var
e=c(p[4],0,[0,d,b[2]]);return a(n[66][8],e)}function
f(a){return aO(e,d,a)}return a(i[5],f)}return D(g[17][16],d,Q,b,e)},P],S=[0,function(a){return W(B,a)},R],T=[0,a(i[7],S),K],U=aj(l,A),V=a(n[66][8],U);return e(i[11],V,T,h)};break;case
16:var
aH=b[1],h=function(a){return dc(aH,a)};break;case
17:var
J=b[2],A=b[1],h=function(b){var
l=a(m[8],b),h=ae(b);if(0===J[0]){var
j=dh(A,J[1],b),g=j[2],n=j[1]?[0,dg(l,g[3],g[8])]:1;return W([0,[0,[0,A,g,n,0],h[1]]],b)}var
d=J[1];if(0===d[1][1]){var
p=a(o[1][5],gI),k=c(m[20],p,b),q=a(f[s],k),r=[0,[0,[0,k],d[1][2]],d[2],d[3]],t=function(a){var
b=dh(A,q,a);if(b[1])throw[0,M,gJ];return W([0,[0,[0,A,b[2],1,0],h[1]]],a)},u=0,v=0,w=function(c,b,a){return a},x=function(a){return c9(w,v,u,r,a)};return e(i[5],x,t,b)}throw[0,M,gK]};break;case
18:var
al=b[1];if(typeof
al==="number")var
aI=a(d[1],hy),h=e(j[3],0,0,aI);else
var
am=al[1],h=function(y){var
w=ae(y)[1];if(w){var
l=w[1];if(typeof
l==="number"){switch(l){case
0:var
z=a(d[1],hk),q=e(j[3],0,0,z);break;case
1:var
q=a(j[6],hp);break;default:var
q=a(j[6],hq)}var
r=q[1],b=q[2],k=q[3],h=q[4]}else
var
r=l[1],b=l[2],k=l[3],h=l[4]}else
var
$=a(d[1],hr),u=e(j[3],0,0,$),r=u[1],b=u[2],k=u[3],h=u[4];var
A=0===r?0===am?r:a(j[6],hn):0===am?a(j[6],ho):r;if(typeof
k==="number")if(0===k)var
v=0;else
var
Z=a(p[99],b[1]),_=[0,a(n[66][8],Z),0],t=a(i[20],_),v=1;else
var
v=0;if(!v)if(0===A)if(typeof
k==="number")var
B=c(g[17][12],f[s],h),C=function(a){return c4(B,a)},D=a(p[ep],b[1]),E=a(n[66][8],D),t=c(i[5],E,C);else
var
F=k[1],H=[0,b[1],0],G=0,I=dl(h),J=function(b){var
c=0,d=a(n[66][8],p[41]),e=[0,function(a){return aM(d,a)},c],f=[0,function(a){return ai(h,a)},e],g=[0,function(a){return dr(b,a)},f];return a(i[7],g)},K=0,t=function(a){return bk(K,b,J,I,H,G,F,a)};else
if(typeof
k==="number")var
L=0,M=c(g[17][12],f[s],h),N=[0,function(a){return c4(M,a)},L],O=[0,a(g[17][1],b[5])+1|0],P=a(p[101],O),Q=[0,a(n[66][8],P),N],R=c(g[18],b[5],[0,b[1],0]),S=a(p[cB],R),T=[0,a(n[66][8],S),Q],t=a(i[7],T);else
var
U=k[1],x=a(g[17][1],b[5]),V=function(d){var
j=a(o[1][5],hl),e=c(m[20],j,d),k=a(o[1][5],hm),g=c(m[20],k,d),r=[0,a(f[s],g),0],l=0,q=0,t=dl(h);function
u(b){var
c=0,d=a(n[66][8],p[41]),f=[0,function(a){return aM(d,a)},c],g=[0,function(a){return ai(h,a)},f],j=[0,function(a){return dr(b,a)},g],k=[0,e,0],l=[0,function(a){return ai(k,a)},j];return a(i[7],l)}var
v=[0,e],w=[0,function(a){return bk(v,b,u,t,r,q,U,a)},l],y=a(p[23],g),z=[0,a(n[66][8],y),w],A=a(n[66][8],p[17]),B=[0,c(i[26],x,A),z],C=c(p[8],[0,e],x+1|0),D=[0,a(n[66][8],C),B];return c(i[7],D,d)},W=c(g[18],b[5],[0,b[1],0]),X=a(p[cB],W),Y=a(n[66][8],X),t=c(i[5],Y,V);return e(i[5],aK,t,y)};break;default:var
aw=b[1],h=function(a){return bV(aw,a)}}var
aQ=c(i[5],h,fo),aR=a(n[66][1],aQ),aS=a(ac[2],0),Q=e(w[29],aS,aR,P)[1];break}}else
var
Q=P;var
aT=function(b,a){return Q};a(F[27],aT);return hz(Q,L[2])}}var
aQ=[0,fr,fv,fK,a8,c6,ds,function(b){return ds(b,a(F[12],0))},W,bk,aP,aw,bi,bj,dj,dk,bY,c2,dp,dn,dm,dq,af,bh];az(458,aQ,"Decl_mode_plugin.Decl_proof_instr");function
Y(m,b){var
n=a(m,b[2]),e=b[1];if(e)var
g=a(d[17],0),h=a(d[1],hE),i=a(d[17],0),j=a(R[1],e[1]),k=c(d[14],j,i),l=c(d[14],k,h),f=c(d[14],l,g);else
var
f=a(d[9],0);return c(d[14],f,n)}function
al(f,b){if(0===b[0])return a(f,b[1]);var
e=b[1];if(e){var
g=a(R[1],e[1]),h=a(d[17],0),i=a(d[1],hJ),j=a(d[17],0),k=a(d[1],hK),l=c(d[14],k,j),m=c(d[14],l,i),n=c(d[14],m,h);return c(d[14],n,g)}return a(d[1],hL)}function
am(B,A,z,b){var
h=b[3];if(h)var
t=a(A,h[1]),u=a(d[17],0),v=a(d[1],hI),w=a(d[17],0),x=c(d[14],w,v),y=c(d[14],x,u),i=c(d[14],y,t);else
var
i=a(d[9],0);var
j=b[2];if(j){var
g=j[1];if(g)var
k=function(b){return a(d[1],hF)},l=e(d[54],k,B,g),m=a(d[17],0),n=a(d[1],hG),o=a(d[17],0),p=c(d[14],o,n),q=c(d[14],p,m),f=c(d[14],q,l);else
var
f=a(d[9],0)}else
var
r=a(d[1],hH),s=a(d[17],0),f=c(d[14],s,r);var
C=a(z,b[1]),D=c(d[30],1,C),E=c(d[14],D,f);return c(d[14],E,i)}function
hM(a){return 0===a[0]?a[1]:f[117]}function
ax(a){return a}function
ay(j,f,i,l,h,e,b){if(l)var
m=a(d[17],0),n=a(d[1],hN),g=c(d[14],n,m);else
var
g=a(d[9],0);if(b){var
k=b[1];if(0===k[0]){var
o=aR(j,f,i,0,h,e,b),p=a(d[1],e),q=a(d[17],0),r=c(d[14],q,g),s=c(d[14],r,p);return c(d[14],s,o)}var
t=ay(j,f,i,1,h,e,b[2]),u=Y(f,k[1]),v=a(d[17],0),w=c(d[14],v,g),x=c(d[14],w,u);return c(d[14],x,t)}return a(d[9],0)}function
aR(f,i,h,k,e,g,b){if(b){var
j=b[1];if(0===j[0]){var
l=k?a(d[44],0):a(d[9],0),m=aR(f,i,h,1,e,g,b[2]),n=a(f,j[1]),o=a(d[17],0),p=c(d[14],o,l),q=c(d[14],p,n);return c(d[14],q,m)}var
r=e?a(d[1],hO):a(d[1],hP),s=ay(f,i,h,0,e,g,b),t=a(d[17],0),u=c(d[14],t,r);return c(d[14],u,s)}return a(d[9],0)}function
dt(b){return 0===b?a(d[1],hS):a(d[1],hT)}function
bm(h,f,bQ,i,w){var
o=0,k=0,b=w[2];for(;;){if(typeof
b==="number")var
g=a(d[1],h1);else
switch(b[0]){case
0:var
o=1,b=b[1];continue;case
1:var
k=1,b=b[1];continue;case
2:var
o=1,k=1,b=b[1];continue;case
3:var
m=b[1];if(0===o)if(0===k)var
H=function(a){return al(f,a)},I=am(f,i,function(a){return Y(H,a)},m),J=a(d[17],0),K=a(d[1],h2),L=c(d[14],K,J),g=c(d[14],L,I);else
var
M=function(a){return al(f,a)},N=am(f,i,function(a){return Y(M,a)},m),O=a(d[17],0),P=a(d[1],h3),Q=c(d[14],P,O),g=c(d[14],Q,N);else
if(0===k)var
S=function(a){return al(f,a)},T=am(f,i,function(a){return Y(S,a)},m),U=a(d[17],0),V=a(d[1],h4),W=c(d[14],V,U),g=c(d[14],W,T);else
var
X=function(a){return al(f,a)},Z=am(f,i,function(a){return Y(X,a)},m),_=a(d[17],0),$=a(d[1],h5),aa=c(d[14],$,_),g=c(d[14],aa,Z);break;case
4:var
ab=b[2],ac=am(f,i,function(a){return Y(f,a)},ab),ad=a(d[17],0),ae=0===b[1]?a(d[1],hZ):a(d[1],h0),af=a(d[17],0),ag=k?a(d[1],h6):a(d[1],h7),ah=c(d[14],ag,af),ai=c(d[14],ah,ae),aj=c(d[14],ai,ad),g=c(d[14],aj,ac);break;case
5:var
ak=b[1],an=am(f,i,function(b){var
e=al(f,b[2]),g=a(d[17],0),i=a(d[1],hQ),j=a(d[17],0),k=ay(h,f,ax,0,0,hR,b[1]),l=c(d[14],k,j),m=c(d[14],l,i),n=c(d[14],m,g);return c(d[14],n,e)},ak),ao=a(d[1],h8),g=c(d[14],ao,an);break;case
6:var
ap=ay(h,f,ax,0,0,h9,b[1]),aq=a(d[1],h_),g=c(d[14],aq,ap);break;case
7:var
ar=aR(h,f,ax,0,1,h$,b[1]),as=a(d[1],ia),g=c(d[14],as,ar);break;case
8:var
at=aR(h,f,ax,0,0,ib,b[1]),au=a(d[1],ic),g=c(d[14],au,at);break;case
9:var
av=a(f,b[1]),aw=a(d[1],id),az=a(d[17],0),aA=aR(h,f,ax,0,0,ie,b[2]),aB=a(d[1],ig),aC=c(d[14],aB,aA),aD=c(d[14],aC,az),aE=c(d[14],aD,aw),g=c(d[14],aE,av);break;case
10:var
aF=Y(f,b[1]),aG=a(d[17],0),aH=a(d[1],ih),aI=c(d[14],aH,aG),g=c(d[14],aI,aF);break;case
11:var
aJ=Y(f,b[1]),aK=a(d[17],0),aL=a(d[1],ii),aM=c(d[14],aL,aK),g=c(d[14],aM,aJ);break;case
12:var
aN=a(f,b[3]),aO=a(d[1],ij),aP=a(d[17],0),aQ=b[2],aS=function(b){var
e=a(d[1],ik),f=a(h,b),g=a(d[1],il),i=c(d[14],g,f);return c(d[14],i,e)},aT=e(d[54],d[17],aS,aQ),aU=a(d[17],0),aV=a(R[1],b[1]),aW=a(d[17],0),aX=a(d[1],im),aY=c(d[14],aX,aW),aZ=c(d[14],aY,aV),a0=c(d[14],aZ,aU),a1=c(d[14],a0,aT),a2=c(d[14],a1,aP),a3=c(d[14],a2,aO),g=c(d[14],a3,aN);break;case
13:var
a4=a(f,b[2]),a5=a(d[17],0),a6=a(d[1],io),a7=a(d[17],0),a8=al(R[1],b[1]),a9=a(d[17],0),a_=a(d[1],ip),a$=c(d[14],a_,a9),ba=c(d[14],a$,a8),bb=c(d[14],ba,a7),bc=c(d[14],bb,a6),bd=c(d[14],bc,a5),g=c(d[14],bd,a4);break;case
14:var
be=ay(h,f,ax,0,0,iq,b[1]),bf=a(d[1],ir),g=c(d[14],bf,be);break;case
15:var
r=b[3],s=b[1];if(0===r)var
t=a(d[9],0);else
var
bv=0,bw=0,bx=ay(h,function(a){return al(f,a)},hM,bw,bv,iw,r),by=a(d[1],ix),bz=a(d[17],0),bA=c(d[14],bz,by),t=c(d[14],bA,bx);if(0===s)var
u=a(d[9],0);else
var
bm=a(d[17],0),bn=function(b){var
e=a(d[1],it),f=a(h,b),g=a(d[1],iu),i=c(d[14],g,f);return c(d[14],i,e)},bo=e(d[54],d[17],bn,s),bp=a(d[17],0),bq=a(d[1],iv),br=a(d[17],0),bs=c(d[14],br,bq),bt=c(d[14],bs,bp),bu=c(d[14],bt,bo),u=c(d[14],bu,bm);var
bg=a(bQ,b[2]),bh=a(d[17],0),bi=a(d[1],is),bj=c(d[14],bi,bh),bk=c(d[14],bj,bg),bl=c(d[14],bk,u),g=c(d[14],bl,t);break;case
16:var
bB=e(d[54],d[44],f,b[1]),bC=a(d[17],0),bD=a(d[1],iy),bE=c(d[14],bD,bC),g=c(d[14],bE,bB);break;case
17:var
p=b[2];if(0===p[0])var
y=a(f,p[1]),z=a(d[17],0),A=a(d[1],hX),B=c(d[14],A,z),v=c(d[14],B,y);else
var
C=p[1],D=am(f,i,function(a){return Y(f,a)},C),E=a(d[17],0),F=a(d[1],hY),G=c(d[14],F,E),v=c(d[14],G,D);var
bF=a(d[17],0),bG=dt(b[1]),bH=a(d[17],0),bI=a(d[1],iz),bJ=c(d[14],bI,bH),bK=c(d[14],bJ,bG),bL=c(d[14],bK,bF),g=c(d[14],bL,v);break;default:var
q=b[1];if(typeof
q==="number")switch(q){case
0:var
n=a(d[1],hU);break;case
1:var
n=a(d[1],hV);break;default:var
n=a(d[1],hW)}else
var
n=dt(q[1]);var
bM=a(d[17],0),bN=a(d[1],iA),bO=c(d[14],bN,bM),g=c(d[14],bO,n)}var
bR=a(d[17],0),x=w[1];if(3<x>>>0)var
bP=a(d[1],iB),l=e(j[3],0,0,bP);else
switch(x){case
0:var
l=a(d[1],iC);break;case
1:var
l=a(d[1],iD);break;case
2:var
l=a(d[1],iE);break;default:var
l=a(d[1],iF)}var
bS=c(d[14],l,bR);return c(d[14],bS,g)}}function
iG(g,f,e,b){var
h=a(e,bl[29]),i=b0[24];return bm(function(h){var
b=h[2],e=b[2],f=b[1];if(e){var
i=a(d[1],iH),j=a(g,e[1]),k=a(d[1],iI),l=a(R[1],f),m=a(d[1],iJ),n=c(d[14],m,l),o=c(d[14],n,k),p=c(d[14],o,j);return c(d[14],p,i)}return a(R[1],f)},f,i,h,b)}function
iK(g,f,e,b){var
h=a(e,bl[29]),i=b0[24];return bm(function(h){var
b=h[2],e=b[2],f=b[1];if(e){var
i=a(d[1],iL),j=a(g,e[1]),k=a(d[1],iM),l=a(R[1],f),m=a(d[1],iN),n=c(d[14],m,l),o=c(d[14],n,k),p=c(d[14],o,j);return c(d[14],p,i)}return a(R[1],f)},f,i,h,b)}var
aS=[0,bm,iG,iK,function(e,d,c,b){var
f=a(c,bl[29]);function
g(b){return a(b0[24],b[6])}return bm(function(a){return Y(e,a)},d,g,f,b)}];az(461,aS,"Decl_mode_plugin.Ppdecl_proof");a(iO[12],iR);function
b5(f){var
j=a(t[68],f),k=a(m[2],f),g=c(B[4][13],k,j),b=g[2],h=g[1],i=c(B[4][1],b,h),l=c(B[4][4],b,h),n=e(ad[19],i,b,l),o=a(d[18],0),p=a(d[1],iS),q=a(d[18],0),r=a(d[1],iT),s=a(d[18],0),u=c(ad[61],i,b),v=c(d[14],u,s),w=c(d[14],v,r),x=c(d[14],w,q),y=c(d[14],x,p),z=c(d[14],y,o),A=c(d[14],z,n),C=c(d[28],0,A),D=a(d[1],iU),E=a(d[6],0),F=a(d[6],0),G=a(d[1],iV),H=c(d[14],G,F),I=c(d[14],H,E),J=c(d[14],I,D);return c(d[14],J,C)}function
du(e,q,f,p,o,n,b){var
g=e?e[1]:1;if(b)if(!b[2])if(g)return b5([0,b[1],f]);var
h=a(F[12],0),i=a(x[13],h),j=a(d[1],iW),k=a(d[1],i),l=a(d[1],iX),m=c(d[14],l,k);return c(d[14],m,j)}function
iY(h,b){var
a=b[2],d=b[1],f=c(B[4][1],a,d),g=c(x[8],a,d);return e(aJ[2],g,f,a)}function
dv(c){var
b=a(F[12],0);return a(w[7],b)?a(j[6],iZ):(a(aQ[1],0),a(F[10],i0))}function
dw(b){a(aQ[2],0);return a(F[10],i1)}function
dx(b){return a(aQ[7],b)}var
ao=a(an[2],i2),bo=a(k[1][10],i3),i4=a(an[4],ao),dy=e(k[13],k[9],i5,i4);D(bl[1],ao,aS[2],aS[3],aS[4]);function
dz(d){var
a=d[2];if(typeof
a==="number")var
b=1;else
if(18===a[0])var
c=a[1],b=typeof
c==="number"?0===c?1:0:0;else
var
b=0;return b?i6:bn[7]}var
i7=0,i9=[0,[0,0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(an[4],ao),f=c(an[8],e,d);return function(a){return dx(f)}}return a(U[2],i8)}],i7];function
i_(b,a){return e(b1[1],a[1],[0,i$,b],a[2])}c(aa[80],i_,i9);var
ja=0,jc=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(an[4],ao),f=c(an[8],e,d);return function(a){return dz(f)}}return a(U[2],jb)},ja];function
jd(b,a){return c(bn[3],[0,je,b],a)}c(aa[80],jd,jc);var
jf=[6,a(k[12],ao)],jg=a(an[4],ao),jh=[0,[0,[1,u[4],jg,jf],0],0];function
ji(b,a){return e(b3[1],[0,jj,b],[0,bo],a)}c(aa[80],ji,jh);var
jk=0,jl=0;function
jm(b,c){return a(b,jn)}e(k[1][7],bo,jo,[0,[0,0,0,[0,[0,[0,[2,iP[10]],0],jm],jl]],jk]);function
jp(b){a(k[21],k[18][8]);return a(ad[84],ad[85])}var
jr=[0,jq,function(b){a(k[21],bo);return a(ad[84],[0,du,ad[85][2],b5])},jp];a(F[1],jr);var
js=0,ju=[0,[0,0,function(b){return b?a(U[2],jt):function(a){return dv(0)}}],js];function
jv(b,a){return e(b1[1],a[1],[0,jw,b],a[2])}c(aa[80],jv,ju);var
jx=0,jA=[0,function(b){return b?a(U[2],jy):function(a){return jz}},jx];function
jB(b,a){return c(bn[3],[0,jC,b],a)}c(aa[80],jB,jA);function
jE(b,a){return e(b3[1],[0,jF,b],0,a)}c(aa[80],jE,jD);var
jG=0,jI=[0,[0,0,function(b){return b?a(U[2],jH):function(a){return dw(0)}}],jG];function
jJ(b,a){return e(b1[1],a[1],[0,jK,b],a[2])}c(aa[80],jJ,jI);var
jL=0,jO=[0,function(b){return b?a(U[2],jM):function(a){return jN}},jL];function
jP(b,a){return c(bn[3],[0,jQ,b],a)}c(aa[80],jP,jO);function
jS(b,a){return e(b3[1],[0,jT,b],0,a)}c(aa[80],jS,jR);function
b6(a){var
b=a?a[1]:a;return b}var
r=k[1][5][1],bp=a(r,jU),A=a(r,jV),bq=a(r,jW),aT=a(r,jX),br=a(r,jY),bs=a(r,jZ),aU=a(r,j0),bt=a(r,j1),b7=a(r,j2),dA=a(r,j3),dB=a(r,j4),b8=a(r,j5),b9=a(r,j6),dC=a(r,j7),b_=a(r,j8),v=a(r,j9),b$=a(r,j_),dD=a(r,j$),ca=a(r,ka),cb=a(r,kb),cc=a(r,kc),cd=a(r,kd),ce=a(r,ke),dE=a(r,kf),cf=a(r,kg),dF=a(r,kh),cg=a(r,ki),dG=a(r,kj),ch=a(r,kk),ci=a(r,kl),dH=a(r,km),dI=a(r,kn),dJ=a(r,ko),dK=a(r,kp),kq=0,kr=0,kt=[0,[0,ks,function(b,a){return 0}],kr];function
ku(a,d,c,b){return[0,a]}e(k[1][7],bp,0,[0,[0,0,0,[0,[0,[0,kw,[0,kv,[0,[2,k[15][6]],0]]],ku],kt]],kq]);var
kx=0,ky=0;function
kz(b,d,a,c){return[0,[0,a],b]}var
kB=[0,[0,[0,[2,k[15][6]],[0,kA,[0,[2,k[15][1]],0]]],kz],ky];function
kC(c,b){return[0,0,[0,[1,[0,a(b4[10],b),c]],0]]}var
kD=[0,[0,[0,[2,k[15][6]],0],kC],kB];function
kE(a,b){return[0,0,a]}e(k[1][7],A,0,[0,[0,0,0,[0,[0,[0,[2,k[15][1]],0],kE],kD]],kx]);var
kF=0,kG=0;function
kH(a,b){return[0,a]}var
kI=[0,[0,0,0,[0,[0,[0,[2,k[15][1]],0],kH],kG]],kF],kJ=0,kK=[0,[0,0,0,[0,[0,[0,[2,bp],0],function(a,b){return[1,a]}],kJ]],kI];e(k[1][7],bq,0,kK);var
kL=0,kM=0;function
kN(b,d,a,c){return[0,[0,a],b]}var
kP=[0,[0,[0,[2,k[15][6]],[0,kO,[0,[2,bq],0]]],kN],kM];function
kQ(c,b){return[0,0,[0,[0,[1,[0,a(b4[10],b),c]],0]]]}var
kR=[0,[0,[0,[2,k[15][6]],0],kQ],kP];function
kS(a,b){return[0,0,[0,a]]}var
kT=[0,[0,0,0,[0,[0,[0,[2,k[15][1]],0],kS],kR]],kL],kU=0,kV=[0,[0,0,0,[0,[0,[0,[2,bp],0],function(a,b){return[0,0,[1,a]]}],kU]],kT];e(k[1][7],aT,0,kV);var
kW=0,kX=0,kZ=[0,[0,0,function(a){return kY}],kX];function
k0(a,c,b){return[0,a]}var
k3=[0,[0,[0,k2,[0,[7,[2,k[15][1]],k1,0],0]],k0],kZ],k5=[0,[0,0,0,[0,[0,k4,function(c,b,a){return 0}],k3]],kW];e(k[1][7],br,0,k5);var
k6=0,k7=0,k8=[0,[0,0,function(a){return 0}],k7];function
k9(a,c,b){return[0,a]}e(k[1][7],bs,0,[0,[0,0,0,[0,[0,[0,k_,[0,[2,k[17][18]],0]],k9],k8]],k6]);var
k$=0,la=0,lb=[0,[0,0,0,[0,[0,[0,[2,aT],[0,[2,br],[0,[2,bs],0]]],function(c,b,a,d){return[0,a,b,c]}],la]],k$];e(k[1][7],aU,0,lb);var
lc=0,ld=0,le=[0,[0,0,0,[0,[0,[0,[2,A],[0,[2,br],[0,[2,bs],0]]],function(c,b,a,d){return[0,a,b,c]}],ld]],lc];e(k[1][7],bt,0,le);var
lf=0,lg=0,li=[0,[0,lh,function(b,a){return 1}],lg],lk=[0,[0,0,0,[0,[0,lj,function(b,a){return 0}],li]],lf];e(k[1][7],b7,0,lk);var
ll=0,lm=0,lo=[0,[0,ln,function(b,a){return 1}],lm],lq=[0,[0,lp,function(b,a){return 2}],lo],ls=[0,[0,lr,function(b,a){return 0}],lq],lt=[0,[0,0,0,[0,[0,[0,[2,b7],0],function(a,b){return[0,a]}],ls]],ll];e(k[1][7],dA,0,lt);var
lu=0,lv=0;function
lw(a,c,b){return[0,a]}var
ly=[0,[0,[0,lx,[0,[2,k[15][1]],0]],lw],lv],lA=[0,[0,0,0,[0,[0,[0,lz,[0,[2,bt],0]],function(a,c,b){return[1,a]}],ly]],lu];e(k[1][7],dB,0,lA);var
lB=0,lC=0;function
lD(b,e,a,d,c){return[9,b,a]}var
lG=[0,[0,[0,lF,[0,[2,b$],[0,lE,[0,[2,k[15][1]],0]]]],lD],lC],lI=[0,[0,[0,lH,[0,[2,b7],[0,[2,dB],0]]],function(b,a,d,c){return[17,a,b]}],lG],lK=[0,[0,0,0,[0,[0,[0,lJ,[0,[2,dE],[0,[2,br],[0,[2,bs],0]]]],function(c,b,a,e,d){return[5,[0,a,b,c]]}],lI]],lB];e(k[1][7],b8,0,lK);var
lL=0,lM=0,lO=[0,[0,[0,lN,[0,[2,bt],0]],function(a,c,b){return[0,1,a]}],lM],lQ=[0,[0,0,0,[0,[0,[0,lP,[0,[2,bt],0]],function(a,c,b){return[0,0,a]}],lO]],lL];e(k[1][7],b9,0,lQ);var
lR=0,lS=0,lU=[0,[0,[0,lT,[0,[2,b8],0]],function(a,c,b){return[0,a]}],lS],lW=[0,[0,[0,lV,[0,[2,aU],0]],function(a,c,b){return[0,[3,a]]}],lU],lY=[0,[0,[0,lX,[0,[2,b9],0]],function(a,c,b){return[1,[4,a[1],a[2]]]}],lW],l0=[0,[0,[0,lZ,[0,[2,aU],0]],function(a,c,b){return[1,[3,a]]}],lY],l2=[0,[0,[0,l1,[0,[2,aU],0]],function(a,c,b){return[2,[3,a]]}],l0],l3=[0,[0,[0,[2,b8],0],function(a,b){return a}],l2],l4=[0,[0,[0,[2,b9],0],function(a,b){return[4,a[1],a[2]]}],l3],l6=[0,[0,[0,l5,[0,[2,aU],0]],function(a,c,b){return[3,a]}],l4],l8=[0,[0,[0,l7,[0,[2,A],0]],function(a,c,b){return[10,a]}],l6],l$=[0,[0,[0,l_,[0,l9,[0,[2,A],0]]],function(a,d,c,b){return[11,a]}],l8],mb=[0,[0,[0,ma,[0,[2,dA],0]],function(a,c,b){return[18,a]}],l$],md=[0,[0,0,0,[0,[0,mc,function(b,a){return 0}],mb]],lR];e(k[1][7],dC,0,md);var
me=0,mf=0;function
mg(d,c,b){return[0,a(b4[10],c),[0,d,b]]}e(k[1][7],b_,0,[0,[0,0,0,[0,[0,[0,[2,k[15][6]],0],mg],mf]],me]);var
mh=0,mi=0,mj=[0,[0,[0,[2,b_],0],function(b,c){return a(b,0)}],mi];function
mk(c,e,b,d){return a(b,[0,c])}e(k[1][7],v,0,[0,[0,0,0,[0,[0,[0,[2,b_],[0,ml,[0,[2,k[15][1]],0]]],mk],mj]],mh]);var
mm=0,mn=0,mo=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],mn],mq=[0,[0,[0,[2,v],mp],function(b,d,a,c){return[0,[0,a],b]}],mo],mt=[0,[0,0,0,[0,[0,[0,[2,v],[0,ms,[0,mr,[0,[2,dD],0]]]],function(b,e,d,a,c){return[0,[0,a],b]}],mq]],mm];e(k[1][7],b$,0,mt);var
mu=0,mv=0,mx=[0,[0,[0,[2,A],mw],function(b,d,a,c){return[0,[1,a],b]}],mv],mA=[0,[0,[0,[2,A],[0,mz,[0,my,[0,[2,b$],0]]]],function(b,e,d,a,c){return[0,[1,a],b]}],mx],mB=[0,[0,0,0,[0,[0,[0,[2,A],0],function(a,b){return[0,[1,a],0]}],mA]],mu];e(k[1][7],dD,0,mB);var
mC=0,mD=0,mE=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],mD],mG=[0,[0,[0,[2,v],mF],function(b,d,a,c){return[0,[0,a],b]}],mE],mJ=[0,[0,0,0,[0,[0,[0,[2,v],[0,mI,[0,mH,[0,[2,cb],0]]]],function(b,e,d,a,c){return[0,[0,a],b]}],mG]],mC];e(k[1][7],ca,0,mJ);var
mK=0,mL=0,mN=[0,[0,[0,[2,A],mM],function(b,d,a,c){return[0,[1,a],b]}],mL],mR=[0,[0,[0,[2,A],[0,mQ,[0,mP,[0,mO,[0,[2,ca],0]]]]],function(b,f,e,d,a,c){return[0,[1,a],b]}],mN],mS=[0,[0,0,0,[0,[0,[0,[2,A],0],function(a,b){return[0,[1,a],0]}],mR]],mK];e(k[1][7],cb,0,mS);var
mT=0,mU=0,mX=[0,[0,[0,mW,[0,mV,[0,[2,ca],0]]],function(a,d,c,b){return a}],mU],mY=[0,[0,0,0,[0,[0,[0,[2,cb],0],function(a,b){return a}],mX]],mT];e(k[1][7],cc,0,mY);var
mZ=0,m0=0,m3=[0,[0,[0,[2,v],[0,m2,[0,m1,[0,[2,bq],0]]]],function(b,e,d,a,c){return[0,[0,[0,a],0],b]}],m0],m5=[0,[0,[0,[2,v],m4],function(a,d,b,c){return[0,[0,[0,b],a[1]],a[2]]}],m3],m8=[0,[0,0,0,[0,[0,[0,[2,v],[0,m7,[0,m6,[0,[2,ce],0]]]],function(a,e,d,b,c){return[0,[0,[0,b],a[1]],a[2]]}],m5]],mZ];e(k[1][7],cd,0,m8);var
m9=0,m_=0,na=[0,[0,[0,[2,A],m$],function(a,d,b,c){return[0,[0,[1,b],a[1]],a[2]]}],m_],ne=[0,[0,[0,[2,A],[0,nd,[0,nc,[0,nb,[0,[2,cd],0]]]]],function(a,f,e,d,b,c){return[0,[0,[1,b],a[1]],a[2]]}],na],nh=[0,[0,0,0,[0,[0,[0,[2,A],[0,ng,[0,nf,[0,[2,bq],0]]]],function(b,e,d,a,c){return[0,[0,[1,a],0],b]}],ne]],m9];e(k[1][7],ce,0,nh);var
ni=0,nj=0,nm=[0,[0,[0,nl,[0,nk,[0,[2,cd],0]]],function(a,d,c,b){return a}],nj],nn=[0,[0,0,0,[0,[0,[0,[2,ce],0],function(a,b){return a}],nm]],ni];e(k[1][7],dE,0,nn);var
no=0,np=0,nq=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],np],ns=[0,[0,[0,[2,v],nr],function(b,d,a,c){return[0,[0,a],b]}],nq],nw=[0,[0,0,0,[0,[0,[0,[2,v],[0,nv,[0,nu,[0,nt,[0,[2,dF],0]]]]],function(b,f,e,d,a,c){return[0,[0,a],b]}],ns]],no];e(k[1][7],cf,0,nw);var
nx=0,ny=0,nA=[0,[0,[0,[2,A],nz],function(b,d,a,c){return[0,[1,a],b]}],ny],nD=[0,[0,[0,[2,A],[0,nC,[0,nB,[0,[2,cf],0]]]],function(b,e,d,a,c){return[0,[1,a],b]}],nA],nE=[0,[0,0,0,[0,[0,[0,[2,A],0],function(a,b){return[0,[1,a],0]}],nD]],nx];e(k[1][7],dF,0,nE);var
nF=0,nG=0,nH=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],nG],nJ=[0,[0,[0,[2,v],nI],function(b,d,a,c){return[0,[0,a],b]}],nH],nM=[0,[0,0,0,[0,[0,[0,[2,v],[0,nL,[0,nK,[0,[2,dG],0]]]],function(b,e,d,a,c){return[0,[0,a],b]}],nJ]],nF];e(k[1][7],cg,0,nM);var
nN=0,nO=0,nQ=[0,[0,[0,[2,A],nP],function(b,d,a,c){return[0,[1,a],b]}],nO],nT=[0,[0,[0,[2,A],[0,nS,[0,nR,[0,[2,cg],0]]]],function(b,e,d,a,c){return[0,[1,a],b]}],nQ],nU=[0,[0,0,0,[0,[0,[0,[2,A],0],function(a,b){return[0,[1,a],0]}],nT]],nN];e(k[1][7],dG,0,nU);var
nV=0,nW=0,nX=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],nW],nZ=[0,[0,[0,[2,v],nY],function(b,d,a,c){return[0,[0,a],b]}],nX];function
n0(b,f,e,d,a,c){return[0,[0,a],b]}var
n3=[0,n2,[0,n1,[0,[2,ci],0]]],n4=0,n6=[0,[0,n5,function(a,b){return a}],n4],n7=[0,[0,0,0,[0,[0,[0,[2,v],[0,[8,a(b2[2],n6)],n3]],n0],nZ]],nV];e(k[1][7],ch,0,n7);var
n8=0,n9=0,n$=[0,[0,[0,[2,aT],n_],function(b,d,a,c){return[0,[1,a],b]}],n9],od=[0,[0,[0,[2,aT],[0,oc,[0,ob,[0,oa,[0,[2,ch],0]]]]],function(b,f,e,d,a,c){return[0,[1,a],b]}],n$],oe=[0,[0,0,0,[0,[0,[0,[2,aT],0],function(a,b){return[0,[1,a],0]}],od]],n8];e(k[1][7],ci,0,oe);var
of=0,og=0,oj=[0,[0,[0,oi,[0,oh,[0,[2,ch],0]]],function(a,d,c,b){return a}],og],ok=[0,[0,0,0,[0,[0,[0,[2,ci],0],function(a,b){return a}],oj]],of];e(k[1][7],dH,0,ok);var
ol=0,om=0,oo=[0,[0,[0,on,[0,[2,cc],0]],function(a,c,b){return[14,a]}],om];function
op(c,b,a,h,g,f,e){var
d=b6(c);return[15,b6(b),a,d]}var
oq=0,or=0,ot=[0,[0,[0,os,[0,[2,dH],0]],function(a,c,b){return a}],or],ou=[0,[8,a(b2[2],ot)],oq],ov=0,oy=[0,[0,[0,ox,[0,[7,[2,v],ow,0],0]],function(a,c,b){return a}],ov],oz=[0,[8,a(b2[2],oy)],ou],oE=[0,[0,[0,oD,[0,oC,[0,oB,[0,[3,k[15][9],oA],oz]]]],op],oo],oG=[0,[0,[0,oF,[0,[2,cf],0]],function(a,c,b){return[7,a]}],oE];function
oH(a,c,b){return[16,a]}var
oK=[0,[0,[0,oJ,[0,[7,[2,k[15][1]],oI,0],0]],oH],oG],oM=[0,[0,[0,oL,[0,[2,cc],0]],function(a,c,b){return[6,a]}],oK],oO=[0,[0,[0,oN,[0,[2,cg],0]],function(a,c,b){return[8,a]}],oM];function
oP(c,f,b,a,e,d){return[12,a,b,c]}var
oS=[0,[0,[0,oR,[0,[2,k[15][6]],[0,[4,[2,v]],[0,oQ,[0,[2,k[15][1]],0]]]]],oP],oO];function
oT(b,e,a,d,c){return[13,[0,a],b]}var
oW=[0,[0,[0,oV,[0,[2,k[15][6]],[0,oU,[0,[2,k[15][1]],0]]]],oT],oS];function
oX(b,e,a,d,c){return[13,[1,a],b]}e(k[1][7],dI,0,[0,[0,0,0,[0,[0,[0,oZ,[0,[2,bp],[0,oY,[0,[2,k[15][1]],0]]]],oX],oW]],ol]);var
o0=0,o1=0,o2=[0,[0,0,function(a){return 0}],o1],o4=[0,[0,o3,function(b,a){return 1}],o2],o6=[0,[0,o5,function(b,a){return 2}],o4],o8=[0,[0,0,0,[0,[0,o7,function(b,a){return 3}],o6]],o0];e(k[1][7],dJ,0,o8);var
o9=0,o_=0,o$=[0,[0,[0,[2,dC],0],function(a,b){return a}],o_],pa=[0,[0,0,0,[0,[0,[0,[2,dI],0],function(a,b){return a}],o$]],o9];e(k[1][7],dK,0,pa);var
pb=0,pc=0,pe=[0,[0,0,0,[0,[0,[0,[2,dJ],[0,[2,dK],pd]],function(d,b,a,c){return[0,a,b]}],pc]],pb];e(k[1][7],dy,0,pe);var
dL=[0,iQ,b5,du,iY,dv,dw,dx,ao,bo,dy,dz,b6];az(472,dL,"Decl_mode_plugin.G_decl_mode");az(473,[0,x,aJ,aQ,aS,dL],"Decl_mode_plugin");return});
