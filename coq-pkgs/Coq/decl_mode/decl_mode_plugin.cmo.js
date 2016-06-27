(function(pv){"use strict";var
dX="*",el='"end claim" expected.',eq=104,aC="that",aG=140,ep="decl_mode_plugin",_=",",ek="be",ea='"end focus" expected.',aF="such",dW="Insufficient justification.",M=250,bL="consider",bA="(",d$="Not inside a proof per cases or induction.",cy="Exception in vernac extend ",cz="suppose it is",cE=148,Z="Init",bx="DeclProof",cs="on",D=246,cx="suppose",U="plugins/decl_mode/decl_proof_instr.ml",dV="    ",ej="escape",d_="assume",aE="Extension: cannot occur",dU='"end cases" expected.',d9="Datatypes",cw="execute_cases ",bG="DeclReturn",s=113,dT="for",bw=122,d8="with",cv="Classic",cA="then",q="",d7="=~",bF="Previous step is not an equality.",eo="~=",d6="suffices",d5='"end induction" expected.',ei="using",bK="ProofInstr",bz="given",F="and",bJ=121,d4="cases",i="IDENT",dS='"thesis for ..." is not applicable here.',aD="Declarative",d3="plugins/decl_mode/decl_interp.ml",cD="by",d2="induction",eh=".",dR="take",ct=": ",cu="proof",aX="thesis",eg="impossible",bv="thus",dQ="subcase_",P=124,en="of",ef="thesis_for",ee=111,cr=133,dP="Not enough sub-hypotheses to match statements.",d1="hence",cC="we have",bE=")",cq="_tmp",bD="let",aB=":",cp=116,ed="proof_instr",em="show",bI="Logic",bC="we",d0="define",cB="reconsider",bH="claim",bB="to",dZ="This case should already be trapped",by="Specif",ab=114,co="focus",aW="as",dO="No pop/stop expected here",eb=146,ec="per",ag="have",dY="end",J=pv.jsoo_runtime,T=J.caml_check_bound,b=J.caml_new_string,K=J.caml_obj_tag,aA=J.caml_register_global,C=J.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):J.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):J.caml_call_gen(a,[b,c])}function
e(a,b,c,d){return a.length==3?a(b,c,d):J.caml_call_gen(a,[b,c,d])}function
L(a,b,c,d,e){return a.length==4?a(b,c,d,e):J.caml_call_gen(a,[b,c,d,e])}function
O(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):J.caml_call_gen(a,[b,c,d,e,f])}function
cn(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):J.caml_call_gen(a,[b,c,d,e,f,g])}var
l=J.caml_get_global_data(),d=l.Pp,h=l.Errors,aY=l.Environ,aH=l.Context,w=l.Proof,G=l.Proof_global,g=l.Util,B=l.Goal,t=l.Evd,E=l.Pervasives,cF=l.Pfedit,ah=l.Option,u=l.Loc,y=l.Tacintern,f=l.Term,z=l.Vars,aq=l.Namegen,ac=l.Global,N=l.Assert_failure,V=l.Pretyping,ap=l.Tacinterp,o=l.Names,S=l.Nameops,H=l.Termops,cK=l.Detyping,I=l.CamlinternalLazy,bO=l.Coqlib,cJ=l.Universes,Q=l.Closure,$=l.Not_found,a8=l.Reductionops,m=l.Tacmach,p=l.Tactics,n=l.Proofview,j=l.Tacticals,bU=l.Rtree,aw=l.Feedback,bV=l.Inductiveops,av=l.Inductive,cW=l.Sigma,ad=l.Printer,cY=l.Locusops,cX=l.Reduction,cV=l.Typing,cU=l.Unification,cZ=l.Evarutil,b4=l.Ppconstr,bm=l.Pptactic,b8=l.Compat,b7=l.Egramml,bo=l.Vernac_classifier,b5=l.Vernacinterp,k=l.Pcoq,an=l.Genarg,b6=l.Gramext,aa=l.CList,bM=[0,0],eG=b('"end claim"'),eH=b('"end focus"'),eI=b('"end proof"'),eD=b("lonely suppose"),eF=b('"end induction" or start a new case'),eE=b('"end cases" or start a new case'),eC=b("no previous statement to use"),ev=b("get_info"),eL=b('"(_ | _)" is not allowed here'),eM=b("simple_pattern"),eT=b("Anonymous pattern variable"),eZ=[0,b(d3),302,18],e0=[0,b(d3),314,18],e$=b('"thesis for" is not applicable here.'),e7=b(" does not occur in pattern."),e8=b("Variable "),e9=b(cz),e6=[2,[0,0]],e1=b("No proof per cases/induction/inversion in progress."),e2=b("expected."),e3=b("none"),e4=b("Wrong number of extra arguments: "),e5=b(cz),eX=b("undetected disjunctive pattern"),eY=b("empty pattern list"),eP=b(bF),eQ=b(bF),eO=[0,0],eR=b("__"),gr=b(cq),gv=b(dP),gs=b("Matching hypothesis not found."),gt=b("Last statements do not match a complete hypothesis."),gu=b(cq),gw=b(dP),gy=[0,b(U),807,18],gK=b(dO),gL=b("Case pattern belongs to wrong inductive type."),gM=b(dO),gN=b("we should pop here"),gO=b("tree is expected to end here"),gP=b("Premature end of branch"),gU=b('Only "suppose it is" can be used here.'),g5=[0,b(U),1275,2],g6=b("missing case"),g3=b("Nothing to skip"),g4=[0,b(cw)],g7=[0,b(U),1254,9],g8=b("Nothing to split"),g9=[0,b(cw)],g_=b("End of branch with garbage left"),g$=[0,b(cw)],ha=b("wrong stack size"),hm=[0,b(U),1420,1],hn=[0,b(U),1417,1],ho=[0,b(U),1423,1],hp=[0,b(U),1430,1],hq=b("Not applicable"),hs=b(cv),ht=b(cv),hu=b("hd"),hv=b('"end induction" generated an ill-formed fixpoint'),hl=[0,0],hd=b("_fix"),he=b("_main_arg"),hc=b(dZ),hh=b(el),hi=b(ea),hj=b(dZ),hg=b(d5),hf=b(dU),hb=[2,0],g2=[0,b(U),1214,30],g1=[0,b(U),1216,2],g0=b(eg),gY=b(eg),gX=[0,[0,0,0],0],gV=b(dQ),gW=b("wrong place for cases"),gQ=b("cannot give an induction hypothesis (wrong inductive type)."),gR=b(ef),gS=b("cannot give an induction hypothesis (wrong parameters)."),gT=b(ef),gJ=b(dQ),gI=b('Do not mix "suppose" with "suppose it is".'),gH=b("wrong stack state"),gF=[0,b(U),929,5],gG=[0,b(U),920,3],gE=b("anonymous_matched"),gD=b("Case analysis must be done on an inductive object."),gC=b("map_tree: not a splitting node"),gB=b("map_tree_rp: not a splitting node"),gz=b(dS),gx=b(cq),gp=b("_cofact"),go=b("_hyp"),gn=b("_claim"),gl=b("No previous equality."),gm=b("_eq"),gi=b(bF),gj=b(bF),gg=b("_fact"),gf=b('"then" and "hence" require at least one previous fact'),ge=b(dS),gd=b("I could not relate this statement to the thesis."),gb=b("cannot happen"),gc=[0,b("concl_refiner")],ga=[0,2,1],f$=[0,2,2],fP=b(aD),fN=b(dW),fO=b(dW),fD=b("Weird case occurred ..."),fC=b(d$),fE=b(d$),fy=b(d5),fx=b(dU),fz=b(el),fA=b(ea),fB=b('"end proof" expected.'),fw=b("Lonely suppose on stack."),fu=b('"return" cannot be used outside of Declarative Proof Mode.'),fq=[0,0],fl=b('You are inside a proof per cases/induction.\nPlease "suppose" something or "end" it now.'),fg=b("Cannot clear "),fh=b(q),fj=[0,b("Strict"),[0,b("Proofs"),0]],fk=b("strict mode"),fF=b("___"),fH=b("No automation registered"),fQ=b(F),fR=[0,b(Z),[0,b(bI),0]],fS=b("and_rect"),fT=[0,b(Z),[0,b(bI),0]],fU=b("prod"),fV=[0,b(Z),[0,b(d9),0]],fW=b("prod_rect"),fX=[0,b(Z),[0,b(d9),0]],fY=b("ex"),fZ=[0,b(Z),[0,b(bI),0]],f0=b("ex_ind"),f1=[0,b(Z),[0,b(bI),0]],f2=b("sig"),f3=[0,b(Z),[0,b(by),0]],f4=b("sig_rect"),f5=[0,b(Z),[0,b(by),0]],f6=b("sigT"),f7=[0,b(Z),[0,b(by),0]],f8=b("sigT_rect"),f9=[0,b(Z),[0,b(by),0]],hF=b(F),hG=b("be such that"),hH=b("such that"),ik=b(bE),il=b(bA),ib=b(bE),ic=b(bA),hT=b(ej),hX=b(d1),hW=b(cA),hV=b(bv),hU=b(ag),hY=b(bv),hZ=b(dV),h0=b(d6),h1=b(cC),h2=b(d_),h3=b(bD),h4=b(bD),h5=b(bz),h6=b(bz),h7=b("from "),h8=b(bL),h9=b(bL),h_=b(bH),h$=b("focus on"),ia=b(aW),id=b(d0),ie=b(aW),ig=b(cB),ih=b(cC),ii=b(cx),io=b(cC),ip=b(F),im=b(d8),ij=b(cz),iq=b(dR),ir=b(ec),is=b(dY),iD=b(bE),iE=b(aB),iF=b(bA),iz=b(bE),iA=b(aB),iB=b(bA),it=b("unknown emphasis"),iu=b(dV),iv=b("*   "),iw=b("**  "),ix=b("*** "),hS=b(eo),hR=b(d7),hP=b(cs),hQ=b(en),hM=b(cu),hN=b(bH),hO=b(co),hL=b(d2),hK=b(d4),hI=b("to show"),hJ=b("to have"),hB=b(dT),hC=b(aX),hD=b(aX),hA=b(ei),hx=b(_),hy=b(cD),hz=b("by *"),hw=b(aB),kI=[0,0],jD=b(bG),o$=b(bG),o8=[0,[4,b(aD)],0],o7=b(aE),o5=b(bG),o2=b(aE),js=b(bx),pk=b(bx),ph=[0,[4,b(aD)],0],pg=b(aE),pe=b(bx),pb=b(aE),jd=[0,[0,1]],i$=b(bK),pu=b(bK),pr=b(aE),pp=b(bK),pm=b(aE),iY=[0,[4,b(cv)],0],iT=b(aD),iR=b("Nothing left to prove here."),iS=b(aD),iO=b(eh),iP=b("Subproof completed, now type "),iK=b("thesis :="),iL=b("============================"),iM=b("  "),iN=b("     *** Declarative Mode ***"),iI=b(ep),iJ=b(ep),iU=b(ed),iV=b("vernac:proof_command"),iX=b(ed),i0=b(ct),i1=b(bK),i3=b(cy),je=[0,1],jg=b(aD),jj=b(ct),jk=b(bx),jm=b(cy),jq=[0,[0,[0,b(cu)],0],0],ju=b(ct),jv=b(bG),jx=b(cy),jB=[0,[0,[0,b("return")],0],0],jE=b(aX),jF=b("statement"),jG=b("constr_or_thesis"),jH=b("statement_or_thesis"),jI=b("justification_items"),jJ=b("justification_method"),jK=b("simple_cut_or_thesis"),jL=b("simple_cut"),jM=b("elim_type"),jN=b("block_type"),jO=b("elim_obj"),jP=b("elim_step"),jQ=b("rew_step"),jR=b("cut_step"),jS=b("loc_id"),jT=b("hyp"),jU=b("consider_vars"),jV=b("consider_hyps"),jW=b("assume_vars"),jX=b("assume_hyps"),jY=b("assume_clause"),jZ=b("suff_vars"),j0=b("suff_hyps"),j1=b("suff_clause"),j2=b("let_vars"),j3=b("let_hyps"),j4=b("given_vars"),j5=b("given_hyps"),j6=b("suppose_vars"),j7=b("suppose_hyps"),j8=b("suppose_clause"),j9=b("intro_step"),j_=b("emphasis"),j$=b("bare_proof_instr"),kc=[0,[10,[0,b(q),b(aX)]],0],kf=[10,[0,b(q),b(dT)]],kg=[10,[0,b(q),b(aX)]],kk=[10,[0,b(q),b(aB)]],ky=[10,[0,b(q),b(aB)]],kL=[10,[0,b(q),b(_)]],kM=[10,[0,b(q),b(cD)]],kO=[0,[10,[0,b(q),b(cD)]],[0,[10,[0,b(q),b(dX)]],0]],kU=[10,[0,b(q),b(ei)]],k3=[0,[10,[0,b(i),b(d2)]],0],k5=[0,[10,[0,b(i),b(d4)]],0],k9=[0,[10,[0,b(i),b(bH)]],0],k$=[0,[10,[0,b(i),b(co)]],0],lb=[0,[10,[0,b(i),b(cu)]],0],lh=[10,[0,b(i),b(cs)]],lj=[10,[0,b(i),b(en)]],lo=[10,[0,b(i),b("from")]],lp=[10,[0,b(i),b(bL)]],lr=[10,[0,b(i),b(ec)]],lt=[10,[0,b(i),b(d6)]],lx=[10,[0,b(q),b(eo)]],lz=[10,[0,b(q),b(d7)]],lD=[10,[0,b(q),b(cA)]],lF=[10,[0,b(q),b(cA)]],lH=[10,[0,b(i),b(bv)]],lJ=[10,[0,b(i),b(bv)]],lL=[10,[0,b(i),b(d1)]],lP=[10,[0,b(i),b(ag)]],lR=[10,[0,b(i),b(bH)]],lT=[10,[0,b(i),b(cs)]],lU=[10,[0,b(i),b(co)]],lW=[10,[0,b(q),b(dY)]],lY=[0,[10,[0,b(i),b(ej)]],0],l7=[10,[0,b(q),b(aB)]],l$=[0,[10,[0,b(q),b(_)]],[0,0,0]],mb=[10,[0,b(i),b(aC)]],mc=[10,[0,b(i),b(aF)]],mg=[0,[10,[0,b(i),b(F)]],[0,0,0]],mi=[10,[0,b(i),b(bL)]],mj=[10,[0,b(i),b(F)]],mp=[0,[10,[0,b(q),b(_)]],[0,0,0]],mr=[10,[0,b(i),b(aC)]],ms=[10,[0,b(i),b(aF)]],mw=[0,[10,[0,b(i),b(F)]],[0,0,0]],my=[10,[0,b(i),b(ag)]],mz=[10,[0,b(i),b(bC)]],mA=[10,[0,b(i),b(F)]],mF=[10,[0,b(i),b(ag)]],mG=[10,[0,b(i),b(bC)]],mL=[10,[0,b(i),b(em)]],mM=[10,[0,b(i),b(bB)]],mO=[0,[10,[0,b(q),b(_)]],[0,0,0]],mQ=[10,[0,b(i),b(aC)]],mR=[10,[0,b(i),b(aF)]],mV=[0,[10,[0,b(i),b(F)]],[0,0,0]],mX=[10,[0,b(i),b(ag)]],mY=[10,[0,b(i),b(bB)]],mZ=[10,[0,b(i),b(F)]],m1=[10,[0,b(i),b(em)]],m2=[10,[0,b(i),b(bB)]],m6=[10,[0,b(i),b(ag)]],m7=[10,[0,b(i),b(bB)]],nb=[0,[10,[0,b(q),b(_)]],[0,0,0]],nd=[10,[0,b(i),b(aC)]],ne=[10,[0,b(i),b(aF)]],nf=[10,[0,b(i),b(ek)]],nj=[0,[10,[0,b(i),b(F)]],[0,0,0]],nl=[10,[0,b(q),b(bD)]],nm=[10,[0,b(i),b(F)]],ns=[0,[10,[0,b(q),b(_)]],[0,0,0]],nu=[10,[0,b(i),b(aC)]],nv=[10,[0,b(i),b(aF)]],nz=[0,[10,[0,b(i),b(F)]],[0,0,0]],nB=[10,[0,b(i),b(bz)]],nC=[10,[0,b(i),b(F)]],nI=[0,[10,[0,b(q),b(_)]],[0,0,0]],nL=[10,[0,b(i),b(aC)]],nM=[10,[0,b(i),b(aF)]],nP=[0,[10,[0,b(i),b(ek)]],0],nU=[0,[10,[0,b(i),b(F)]],[0,0,0]],nW=[10,[0,b(i),b(ag)]],nX=[10,[0,b(i),b(bC)]],nY=[10,[0,b(i),b(F)]],n3=[10,[0,b(i),b(ag)]],n4=[10,[0,b(i),b(bC)]],n9=[10,[0,b(i),b(cx)]],oc=[10,[0,b(i),b(F)]],og=[10,[0,b(q),b(_)]],oh=[10,[0,b(q),b(d8)]],ok=b("0"),ol=[10,[0,b(i),b("is")]],om=[10,[0,b(i),b("it")]],on=[10,[0,b(i),b(cx)]],op=[10,[0,b(q),b(bD)]],os=[10,[0,b(q),b(_)]],ot=[10,[0,b(i),b(dR)]],ov=[10,[0,b(i),b(d_)]],ox=[10,[0,b(i),b(bz)]],oA=[10,[0,b(q),b(aW)]],oB=[10,[0,b(i),b(d0)]],oE=[10,[0,b(q),b(aW)]],oF=[10,[0,b(i),b(cB)]],oI=[10,[0,b(q),b(aW)]],oJ=[10,[0,b(i),b(cB)]],oN=[0,[10,[0,b(q),b(dX)]],0],oP=[0,[10,[0,b(q),b("**")]],0],oR=[0,[10,[0,b(q),b("***")]],0],oZ=[0,[10,[0,b(q),b(eh)]],0],eJ=l.Constrintern,fb=l.Failure,fd=l.Type_errors,ff=l.Glob_ops,fc=l.Invalid_argument,fe=l.Goptions,iG=l.Mltop,iH=l.G_vernac;function
er(a){bM[1]=1;return 0}function
es(a){bM[1]=0;return 0}function
et(a){return bM[1]}var
aZ=a(t[3][6],0);function
cG(e){var
b=a(w[33][1],e),f=a(g[17][3],b[1]),h=c(B[4][5],b[2],f),d=c(t[3][3],h,aZ),i=d?1:d;return i}function
cH(c){try{var
b=cG(a(cF[9],0));return b}catch(a){a=C(a);if(a===G[11])return 2;throw a}}function
eu(b){return 1===cH(0)?a(h[6],b):0}function
bN(e,d){var
f=c(B[4][5],e,d),b=c(t[3][3],f,aZ);return b?b[1]:a(E[1],ev)}function
ew(b,a){var
d=c(B[4][5],b,a);return c(t[3][3],d,aZ)}var
a0=a(w[16],0),ex=c(w[18],0,a0);function
ey(f){var
b=a(w[33][1],f),c=a(g[17][3],b[1]),d=bN(b[2],c)[1];function
h(a){return e(w[19],ex,d,1)}return a(G[27],h)}function
ez(c){function
b(b,a){return e(w[23],a0,a,0)}return a(G[27],b)}function
cI(d){try{var
b=c(w[26],a0,d);return b}catch(b){b=C(b);if(b===w[25]){var
e=a(w[33][3],d);return bN(e[2],e[1])[1]}throw b}}function
eA(a){return c(w[26],a0,a)}function
eB(c){var
b=a(aY[9],c);return b?a(aH[2][1][1],b[1]):a(h[6],eC)}var
x=[0,er,es,et,cG,cH,eu,aZ,bN,ew,eA,cI,eB,function(k){var
b=cI(k);if(b){var
c=b[1];if(typeof
c==="number")switch(c){case
0:var
g=b[2];if(g){var
i=g[1];if(typeof
i==="number")var
f=0;else
var
j=i[1],f=1}else
var
f=0;if(!f){var
l=a(d[1],eD);return e(h[3],0,0,l)}break;case
1:return eG;default:return eH}else
var
j=c[1];return 0===j?eE:eF}return eI},ey,ez];aA(419,x,"Decl_mode_plugin.Decl_mode");function
cL(b){var
c=b[3],d=b[2];return a(g[17][47],c)?d:[4,b[1],d,c]}function
ar(d,b,a){var
e=c(d,b,a[2]);return[0,a[1],e]}function
bP(d,a,b){return[0,a,c(d,a,b)]}function
bQ(b,a){return 0===a[0]?[0,c(y[7],b,a[1])]:[1,a[1]]}function
aI(b,a){var
d=a[2];return[0,c(o[1][9][4],b,a[1]),d]}function
cM(j,b,d){if(0===d[0]){var
e=d[1],f=e[2],g=f[1],k=f[2],l=a(y[7],b),m=[0,g,c(ah[15],l,k)],n=[0,[0,e[1],m]];return[0,aI(g,b),n]}var
h=d[1],o=[1,ar(j,b,h)],i=h[1],p=i?aI(i[1],b):b;return[0,p,o]}function
as(c,b,a){function
d(a,b){return cM(c,a,b)}return e(g[17][cp],d,b,a)[2]}function
a1(k,j,b){var
d=c(k,j,b[1]),e=d[1],l=b[3],i=a(y[5],e),m=a(a(ah[15],i),l),n=b[2],f=a(y[7],e),h=a(g[17][12],f),o=a(a(ah[15],h),n);return[0,d[2],o,m]}function
cN(d,b){function
f(d,b){var
e=b[2],f=e[1],g=e[2],h=a(y[7],d),i=[0,f,c(ah[15],h,g)],j=[0,b[1],i];return[0,aI(f,d),j]}return e(g[17][cp],f,b,d)}function
eK(d,a){var
f=a[1],h=y[7];function
i(a,b){return cM(h,a,b)}var
b=e(g[17][cp],i,d,f),c=b[1],j=bQ(c,a[2]);return[0,c,[0,b[2],j]]}function
a2(m,l){var
f=m,b=l;for(;;){switch(b[0]){case
0:var
n=b[2],f=aI(b[3],f),b=n;continue;case
1:var
o=b[4],p=b[3],q=a(g[17][15],a2),r=e(ah[17],q,f,p);return e(g[17][15],a2,r,o);case
2:var
i=b[2];if(i){var
j=i[1];if(0!==j[0])return aI(j[1][2],f)}break;case
3:var
s=a(d[1],eL);return c(u[9],b[1],[0,h[5],eM,s]);case
4:var
k=b[3],t=a(g[17][10],[0,k[1],[0,b[4],k[2]]]);return e(g[17][15],a2,f,t);case
7:var
b=b[3];continue}return f}}function
a3(d,b){if(typeof
b==="number")return 0;else
switch(b[0]){case
0:return[0,a3(d,b[1])];case
1:return[1,a3(d,b[1])];case
2:return[2,a3(d,b[1])];case
3:var
o=b[1],p=function(a,b){return ar(bQ,a,b)};return[3,a1(function(a,b){return bP(p,a,b)},d,o)];case
4:var
q=b[2],r=y[7],s=function(a,b){return ar(r,a,b)},t=a1(function(a,b){return bP(s,a,b)},d,q);return[4,b[1],t];case
5:return[5,a1(eK,d,b[1])];case
6:return[6,as(y[7],d,b[1])];case
7:return[7,as(y[7],d,b[1])];case
8:return[8,as(y[7],d,b[1])];case
9:var
u=as(y[7],d,b[2]);return[9,c(y[7],d,b[1]),u];case
10:return[10,ar(y[7],d,b[1])];case
11:return[11,ar(y[7],d,b[1])];case
12:var
v=b[3],f=cN(b[2],d),n=c(y[7],f[1],v);return[12,b[1],f[2],n];case
13:var
w=c(y[7],d,b[2]);return[13,b[1],w];case
14:return[14,as(y[7],d,b[1])];case
15:var
h=b[2],i=cN(b[1],d),x=a2(i[1],h),z=as(bQ,x,b[3]);return[15,i[2],h,z];case
16:var
A=b[1],B=a(y[7],d);return[16,c(g[17][12],B,A)];case
17:var
e=b[2];if(0===e[0])var
j=[0,c(y[7],d,e[1])];else
var
k=e[1],l=y[7],m=function(a,b){return ar(l,a,b)},j=[1,a1(function(a,b){return bP(m,a,b)},d,k)];return[17,b[1],j];default:return[18,b[1]]}}function
eN(b,a){var
c=a3(b,a[2]);return[0,a[1],c]}function
at(d,c,b,a){return d?O(V[11],0,eO,c,b,a[1])[1]:O(V[11],0,0,c,b,a[1])[1]}var
a4=[D,function(b){return a(cJ[48],bO[30])}];function
aJ(d,c,b,a){var
f=e(d,c,b,a[2]);return[0,a[1],f]}function
cO(j,c,b){function
d(c,d){if(0===c[0]){var
e=c[1],f=e[2],g=f[2],b=f[1];return g?[6,u[4],[0,b],0,g[1][1],d]:[6,u[4],[0,b],0,[13,[0,e[1],[1,[0,b]],0,0]],d]}var
h=c[1],i=a(j,h[2]);return[6,u[4],h[1],0,i,d]}return e(g[17][16],d,c,b)}var
cP=[12,u[4],0];function
bR(i,b,h,d){if(d){var
j=d[1],e=a(f[34],h),g=e[1],k=[0,g,c(z[12],b,e[2])],m=g?[0,a(f[s],g[1]),b]:[0,a(f[ab],0),b],n=0===j[0]?[0,k]:[1,c(i,k,j[1])],l=bR(i,m,e[3],d[2]);return[0,[0,n,l[1]],l[2]]}return[0,0,c(z[12],b,h)]}function
cQ(f,e,d,c,a,b){var
g=cO(f,a,b);return bR(e,0,O(V[11],0,0,d,c,g)[1],a)}function
au(c,b,a){function
d(a,b){return a}return cQ(function(a){return a[1]},d,c,b,a,cP)[1]}var
eS=a(o[1][5],eR);function
cR(b,a){if(0===a[0]){var
f=a[2],d=a[1];if(f){var
h=b[1];b[1]=[0,[0,[0,d,f[1]],h[1]],h[2]];return a}var
i=b[1],j=i[2],e=c(aq[25],eS,j);b[1]=[0,[0,[0,d,e],i[1]],[0,e,j]];return[0,d,[0,e]]}var
k=a[4],l=a[3];function
m(a){return cR(b,a)}var
n=c(g[17][12],m,l);return[1,a[1],a[2],n,k]}function
bS(b){if(0===b[0]){var
j=b[2];if(j)return[1,[0,b[1],j[1]]];var
m=a(d[1],eT);return e(h[3],0,0,m)}var
k=b[2],l=k[1],n=a(ac[26],l)[1],p=c(g[17][12],bS,b[3]),f=n[6],i=p;for(;;){if(0<f){var
o=[0,[13,[0,u[4],[4,l,f],0,0]],i],f=f-1|0,i=o;continue}return cL([0,b[1],[0,[0,u[4],[3,k],0]],i])}}function
eU(b){var
c=b[2],d=c[2],a=c[1],e=b[1];if(d){var
f=d[1];return function(b){return[6,u[4],[0,a],0,f[1],b]}}return function(b){return[6,u[4],[0,a],0,[13,[0,e,[1,[0,a]],0,0]],b]}}function
eV(a,c){var
b=a[2];return[6,u[4],[0,b],0,[13,[0,a[1],[1,[0,b]],0,0]],c]}function
eW(a,b){var
c=bS(a[2]);return[7,u[4],[0,a[1]],c,b]}function
cS(b,a){if(0===a[0])return b;var
c=a[4],d=c?[0,[0,c[1],a],b]:b;return e(g[17][15],cS,d,a[3])}function
a5(j,b,i,h){if(h){var
d=a(j,i),e=d[1],k=[0,e,c(z[12],b,d[2])];if(e){var
l=[0,a(f[s],e[1]),b],g=a5(j,l,d[3],h[2]);return[0,[0,k,g[1]],g[2],g[3]]}throw[0,N,eZ]}return[0,0,b,c(z[12],b,i)]}function
cT(b,i,h){if(h){var
d=a(f[36],i),e=d[1],j=c(z[12],b,d[3]),k=[0,e,[0,c(z[12],b,d[2]),j]];if(e){var
l=[0,a(f[s],e[1]),b],g=cT(l,d[4],h[2]);return[0,[0,k,g[1]],g[2],g[3]]}throw[0,N,e0]}return[0,0,b,c(z[12],b,i)]}function
a6(k,j,d,b){var
f=e(k,j,d,b[1]),l=b[3],m=a(ap[28],0),n=a(ap[2][6],m),o=c(ah[15],n,l),p=b[2],q=f[1];function
h(a){return O(V[11],0,0,q,d,a[1])[1]}var
i=a(g[17][12],h),r=a(a(ah[15],i),p);return[0,f[2],r,o]}function
bT(d,a,c,b){return[0,a,e(d,a,c,b)]}function
e_(b,j,i){var
d=i[2],k=i[1];if(0===d[0])var
m=d[1][1],n=function(a,b){return a},l=cQ(function(a){return a[1]},n,b,j,k,m),f=[0,l[1],[0,l[2]]];else
var
f=d[1]?a(h[6],e$):[0,au(b,j,k),d];function
o(f,e){var
a=f[1],d=a[1];return d?c(aY[31],[0,d[1],a[2]],e):b}return[0,e(g[17][16],o,f[1],b),f]}function
fa(b){var
c=b[2],d=c[2],a=c[1],e=b[1];if(d){var
f=d[1];return function(b){return[5,u[4],[0,a],0,f[1],b]}}return function(b){return[5,u[4],[0,a],0,[13,[0,e,[1,[0,a]],0,0]],b]}}function
a7(m,i,j,b){if(typeof
b==="number")return 0;else
switch(b[0]){case
0:return[0,a7(m,i,j,b[1])];case
1:return[1,a7(m,i,j,b[1])];case
2:return[2,a7(m,i,j,b[1])];case
3:var
a8=b[1],a9=1,a_=function(b,c,a){return 0===a[0]?[0,at(a9,b,c,a[1])]:[1,a[1]]},a$=function(a,b,c){return aJ(a_,a,b,c)};return[3,a6(function(a,b,c){return bT(a$,a,b,c)},i,j,a8)];case
4:var
ba=b[2],aj=a(x[12],i),ah=c(aY[37],aj,i),ae=e(Q[37],0,Q[11],i),af=a(Q[31],ah),ag=c(Q[42],ae,af),p=a(f[aG],ag);if(9===p[0]){var
E=p[2],F=K(a4),ai=M===F?a4[1]:D===F?a(I[2],a4):a4;if(c(f[136],p[1],ai))if(3===E.length-1)var
z=T(E,0)[1],B=1;else
var
B=0;else
var
B=0;if(!B)var
z=a(h[6],eQ)}else
var
z=a(h[6],eP);var
bb=function(a,b,c){return O(V[11],0,[0,[0,z]],a,b,c[1])[1]},bc=function(a,b,c){return aJ(bb,a,b,c)},bd=a6(function(a,b,c){return bT(bc,a,b,c)},i,j,ba);return[4,b[1],bd];case
5:return[5,a6(e_,i,j,b[1])];case
6:return[6,au(i,j,b[1])];case
7:return[7,au(i,j,b[1])];case
8:return[8,au(i,j,b[1])];case
9:var
be=au(i,j,b[2]);return[9,at(0,i,j,b[1]),be];case
10:var
bf=b[1],bg=1;return[10,aJ(function(a,b,c){return at(bg,a,b,c)},i,j,bf)];case
11:var
bh=b[1],bi=1;return[11,aJ(function(a,b,c){return at(bi,a,b,c)},i,j,bh)];case
12:var
$=b[2],a2=e(g[17][16],fa,$,b[3][1]),a3=O(V[11],0,0,i,j,a2)[1],_=a5(f[35],0,a3,$);return[12,b[1],_[1],_[3]];case
13:var
bj=at(1,i,j,b[2]);return[13,b[1],bj];case
14:return[14,au(i,j,b[1])];case
15:var
aa=b[3],ab=b[2],n=b[1],N=m[1];if(N){var
P=N[1];if(typeof
P==="number")var
C=0;else
var
k=P[2],C=1}else
var
C=0;if(!C)var
k=a(h[6],e1)[2];var
R=a(ac[26],k[3]),r=R[1][6]-k[7]|0;if(1-(a(g[17][1],n)===r?1:0)){var
ar=a(d[1],e2),as=a(d[17],0),av=0===r?a(d[1],e3):a(d[20],r),aw=a(d[1],e4),ax=c(d[14],aw,av),ay=c(d[14],ax,as),az=c(d[14],ay,ar);c(h[7],e5,az)}var
aA=[0,[0,u[4],[2,k[3]],0]],aB=k[6],aC=function(a){return cn(cK[6],0,0,0,i,t[16],a)},aD=c(g[17][12],aC,aB),aE=function(a){return[1,[0,a[1],a[2][1]]]},aF=c(g[17][12],aE,n),aH=function(a){return[13,[0,u[4],e6,0,0]]},aI=c(g[17][48],R[2][6],aH),aK=c(g[18],aF,aI),aL=c(g[18],aD,aK),aM=cL([0,u[4],aA,aL]),G=c(eJ[8],i,ab),q=G[2],an=G[1];if(q)if(q[2])var
ao=a(d[1],eX),l=e(h[3],0,0,ao);else
var
J=q[1],L=J[2],ap=J[1],am=cS(0,L),ak=function(d,b,a){return[0,[0,d,c(o[1][12][3],b,a)],a]},al=e(o[1][10][11],ak,ap,am),l=[0,an,a(g[17][6],al),L];else
var
aq=a(d[1],eY),l=e(h[3],0,0,aq);var
U=l[3],W=l[2],X=l[1],Y=[0,[0,0,X]],aN=cO(function(b){if(0===b[0])return b[1][1];var
e=b[1];if(e){var
f=e[1];if(1-c(o[1][12][2],f,X)){var
g=a(d[1],e7),i=a(S[1],f),j=a(d[1],e8),k=c(d[14],j,i),l=c(d[14],k,g);c(h[7],e9,l)}return[12,u[4],0]}return[12,u[4],0]},aa,cP),aO=cR(Y,U),Z=a(g[17][6],Y[1][1]),aP=bS(aO),aQ=e(g[17][16],eW,W,[7,u[4],0,[14,u[4],aP,[0,aM]],aN]),aR=e(g[17][16],eV,Z,aQ),aS=e(g[17][16],eU,n,aR),aT=O(V[11],0,0,i,j,aS)[1],s=a5(f[34],0,aT,n),v=a5(f[34],s[2],s[3],Z),w=cT(v[2],v[3],W),y=a(f[36],w[3]),aU=function(b,a){var
c=a[2];return 0===c[0]?[0,b[1],[0,b[2]]]:[0,a[1],[1,c[1]]]},aV=a(H[55],y[4]),aW=bR(aU,w[2],aV,aa)[1];return[15,s[1],[0,v[1],w[1],y[2],y[3],U,ab],aW];case
16:var
bk=b[1],bl=function(a){return O(V[11],0,0,i,j,a[1])[1]};return[16,c(g[17][12],bl,bk)];case
17:var
A=b[2];if(0===A[0])var
ad=[0,O(V[11],0,0,i,j,A[1][1])[1]];else
var
aX=A[1],aZ=1,a0=function(a,b,c){return at(aZ,a,b,c)},a1=function(a,b,c){return aJ(a0,a,b,c)},ad=[1,a6(function(a,b,c){return bT(a1,a,b,c)},i,j,aX)];return[17,b[1],ad];default:return[18,b[1]]}}var
aK=[0,eN,function(d,c,b,a){var
e=a7(d,c,b,a[2]);return[0,a[1],e]}];aA(439,aK,"Decl_mode_plugin.Decl_interp");function
ai(p,k){var
f=k[2],b=k[1],q=o[1][9][1];function
r(b,a){return c(o[1][9][4],a,b)}var
s=e(g[17][15],r,q,p),u=c(B[4][1],f,b),v=c(B[4][2],f,b),w=c(B[4][4],f,b),l=[0,a(t[98],f)];try{var
D=O(cZ[52],u,l,v,w,s),i=D}catch(b){b=C(b);if(b[1]!==cZ[50])throw b;var
x=a(S[1],b[2]),y=a(d[1],fg),z=c(d[14],y,x),i=c(h[7],fh,z)}var
m=l[1],A=c(B[4][5],m,b),j=L(B[4][6],m,i[1],i[2],A),n=j[1];return[0,[0,n,0],L(B[4][8],j[3],b,n,j[2])]}function
ae(a){return c(x[8],a[2],a[1])}var
c0=[0,0];function
fi(a){c0[1]=a;return 0}function
c1(a){return c0[1]}a(fe[4],[0,1,0,fk,fj,c1,fi]);function
c2(g,b){var
d=a(m[1],b),h=a(m[7],b),i=a(m[2],b),j=c(B[4][2],i,d),k=a(m[2],b),l=a(g,c(B[4][5],k,d)),n=a(m[2],b),f=L(B[4][6],n,j,h,l),o=e(B[4][7],f[3],d,f[2]);return[0,[0,f[1],0],o]}function
W(b,a){return c2(function(a){return e(t[3][2],a,x[7],b)},a)}function
aL(a){return c2(function(a){return c(t[3][4],a,x[7])},a)}function
aM(b){var
d=a(m[8],b),f=e(Q[37],0,Q[11],d);return function(b){var
d=a(Q[31],b);return c(Q[42],f,d)}}function
c3(g,b){var
d=c(av[4],g,b),e=d[2],f=0===e[6]?1:0,h=f?1-a(bV[19],[0,b,d[1],e]):f;return h}function
fm(c,b){var
d=a(t[69],b),f=a(t[98],d);function
h(a,b){return L(t[95],a[1],a[2],0,b)}return e(g[17][16],h,c,f)}function
fn(b){return 95===J.caml_string_get(a(o[1][7],b),0)?1:0}function
fo(d){function
e(a){if(a){var
b=e(a[2]),d=a[1],f=function(e){var
a=[0,d,0];function
b(b){return ai(a,b)}return c(j[21],b,e)};return c(j[5],f,b)}return j[1]}var
b=a(m[9],d);if(b)var
h=a(H[81],b[2]),f=c(g[17][29],fn,h);else
var
f=b;return a(e(f),d)}function
aj(b,a){return c(p[138],[0,b],a)}function
fp(a){return W(fq,a)}function
fr(d){var
b=a(n[66][1],fp);a(cF[21],b);var
c=a(G[12],0);return a(x[14],c)}function
bW(f){var
d=a(ac[2],0);function
c(g,f){var
c=a(n[37],n[54]),b=e(w[29],d,c,f);return[0,b[1],b[2][1]]}var
b=1-a(G[26],c);return b?e(aw[8],0,0,3):b}function
ak(b){return a(x[15],0)}function
fs(a){return ak(0)}function
ft(c){try{bW(0);var
b=ak(0);return b}catch(b){b=C(b);if(b===$)return a(h[6],fu);throw b}}function
fv(a){return ft(0)}function
c4(b){if(a(w[7],b)){var
c=a(x[11],b);if(c){var
g=c[1];if(typeof
g!=="number"){var
m=a(d[1],fD);return e(h[3],0,0,m)}if(0===g){var
i=c[2];if(i)if(typeof
i[1]!=="number")return ak(0)}}return a(h[6],fC)}var
f=a(x[10],b);if(f){var
j=f[1],k=typeof
j==="number";if(!k)return k;if(0===j){var
l=f[2];if(l)if(typeof
l[1]!=="number"){bW(0);return ak(0)}}}return a(h[6],fE)}var
fG=a(o[1][5],fF);function
bX(i,d){var
b=[0,o[1][9][1]];function
g(h,d){var
i=a(f[aG],h);if(1===i[0]){b[1]=c(o[1][9][4],i[1],b[1]);return a(j[1],d)}var
g=c(m[20],fG,d);b[1]=c(o[1][9][4],g,b[1]);var
k=a(p[75],[0,g,0]),l=a(n[66][8],k),q=O(p[eb],0,[0,g],h,0,cY[7]),r=a(n[66][8],q);return e(j[5],r,l,d)}var
h=e(j[32],g,i,d),k=0,l=b[1],q=[0,function(b){function
d(d){var
b=a(aH[2][1][1],d);if(c(o[1][9][3],b,l))return j[1];var
e=[0,b,0];function
f(a){return ai(e,a)}return a(j[21],f)}var
f=a(m[9],b);return e(j[32],d,f,b)},k],r=[0,function(a){return h},q];return c(j[7],r,d)}var
fI=a(d[1],fH),fJ=c(h[2],0,fI),c5=[0,c(n[18],0,fJ)];function
fK(a){c5[1]=a;return 0}function
fL(a){return c5[1]}var
fM=a(n[13],0),a9=c(n[14],fM,fL);function
aN(f,b){function
g(b){if(c1(0))return a(h[6],fN);var
c=a(d[1],fO);a(aw[13],c);a(x[1],0);return[0,0,a(t[69],b)]}var
i=a(n[66][8],p[41]),k=[0,c(j[5],f,i),0],l=a(j[20],k);return e(j[4],l,g,b)}function
c6(d,b){var
e=a(n[66][8],a9);function
f(a){return bX(d,a)}return aN(c(j[5],f,e),b)}function
X(b,a){return[D,function(c){return e(bO[4],fP,b,a)}]}var
a_=X(fR,fQ),a$=X(fT,fS),ba=X(fV,fU),bb=X(fX,fW),bc=X(fZ,fY),bd=X(f1,f0),be=X(f3,f2),bf=X(f5,f4),bg=X(f7,f6),bh=X(f9,f8);function
bY(d,b,a){if(a){var
e=a[2],f=a[1];return d===f[1]?c(g[18],b,e):[0,f,bY(d,b,e)]}throw $}function
f_(d,b,p,k){var
q=b[2],r=a(aM(k),q),j=a(f[39],r),l=j[2],n=a(f[aG],j[1]);if(11===n[0]){var
h=n[1],i=h[1],s=h[2];if(c3(d,i)){var
o=c(av[4],d,i),u=c(av[17],h,[0,o[1],o[2]]),v=function(q,o){var
r=[0,a(f[131],[0,[0,i,q+1|0],s]),l],u=a(f[59],r),v=c(f[76],o,l),w=c(cX[26],d,v);function
n(i,d,b){if(b){var
g=i+1|0,p=b[2],h=n(g,[0,a(f[ab],g),d],p),q=h[3],r=a(aH[1][1][3],b[1]),s=c(z[12],d,r),j=a(m[8],k),l=e(Q[37],0,Q[12],j),o=a(Q[31],s),t=[0,[0,g,c(Q[41],l,o)],q];return[0,h[1],h[2],t]}return[0,i,d,0]}var
x=a(g[17][6],w[1]),h=n(b[3],0,x),j=h[3],y=h[1],A=[0,u,a(g[17][6],h[2])],B=a(f[59],A),C=e(t[96],b[1],[0,B,f$],b[5]),D=bY(b[1],j,b[4]);function
E(b,a){return L(t[95],a[1],a[2],0,b)}var
F=e(g[17][15],E,C,j),G=a(g[17][6],j);function
H(a){return c(g[22][3],[0,a[1],a[2],y,D,F],p)}return c(g[17][11],H,G)};return c(g[19][14],v,u)}}return 0}function
c7(b,h){var
a=h;for(;;){if(a){var
d=a[2],e=a[1],f=e[1];if(c(t[88],b,f)){var
a=d;continue}var
i=c7(b,d),g=[0,[0,f,c(a8[97],b,e[2])],i]}else
var
g=a;return g}}function
c8(i,W,n){var
j=a(m[7],n),u=a(t[69],n),b=a(m[8],n),k=e(cV[4],b,[0,u],j),X=a(f[ee],k);function
v(w,t,q,o){if(o){var
x=o[2],y=o[1],z=y[1],b=c(H[54],q,y[2]),Y=e(aq[9],w,b,0),i=e(p[14],t,Y,n),A=c(aY[31],[0,i,b],w),Z=e(cV[4],A,[0,u],b),B=a(f[ee],Z),_=[0,[0,z,a(f[s],i)],q];if(a(g[17][47],x)){var
$=c(H[54],_,W);return[0,B,b,e(f[50],i,b,$)]}var
r=v(A,[0,i,t],[0,[0,z,a(f[s],i)],q],x),k=r[2],C=r[1],m=e(f[50],i,b,r[3]),aa=a(f[s],i);if(c(H[53],aa,k)){var
l=e(f[50],i,b,k);if(0===C){if(0===X){var
E=K(bc),ab=[0,b,l],ac=M===E?bc[1]:D===E?a(I[2],bc):bc,F=K(bd),ad=a(f[P],[0,ac,ab]),ae=[0,b,l,j,m],af=M===F?bd[1]:D===F?a(I[2],bd):bd;return[0,0,ad,a(f[P],[0,af,ae])]}var
G=K(be),ag=[0,b,l],ah=M===G?be[1]:D===G?a(I[2],be):be,J=a(f[P],[0,ah,ag]),L=K(bf),ai=[0,b,l,a(f[bw],[0,0,J,j]),m],aj=M===L?bf[1]:D===L?a(I[2],bf):bf;return[0,2,J,a(f[P],[0,aj,ai])]}var
N=K(bg),ak=[0,b,l],al=M===N?bg[1]:D===N?a(I[2],bg):bg,O=a(f[P],[0,al,ak]),Q=K(bh),am=[0,b,l,a(f[bw],[0,0,O,j]),m],an=M===Q?bh[1]:D===Q?a(I[2],bh):bh;return[0,2,O,a(f[P],[0,an,am])]}if(0===B)if(0===C){var
R=K(a_),ao=[0,b,k],ap=M===R?a_[1]:D===R?a(I[2],a_):a_,S=K(a$),ar=a(f[P],[0,ap,ao]),as=[0,b,k,j,m],at=M===S?a$[1]:D===S?a(I[2],a$):a$;return[0,0,ar,a(f[P],[0,at,as])]}var
T=K(ba),au=[0,b,k],av=M===T?ba[1]:D===T?a(I[2],ba):ba,U=a(f[P],[0,av,au]),V=K(bb),aw=[0,b,k,a(f[bw],[0,0,U,j]),m],ax=M===V?bb[1]:D===V?a(I[2],bb):bb;return[0,2,U,a(f[P],[0,ax,aw])]}var
ay=a(d[1],gb);return e(h[3],0,gc,ay)}var
l=v(b,0,0,i),o=[0,a(f[ab],1)];return a(f[P],[0,l[3],o])}function
aO(D,B,k,d){try{var
o=a(m[8],d),b=a(m[7],d),u=fm([0,[0,0,b],k],d),i=a(g[22][2],0),H=0,v=0,w=function(b,a){return c(E[5],b,a[1])},x=[0,0,b,e(g[17][15],w,v,k),[0,[0,0,b],0],u];c(g[22][3],x,i);var
q=function(c){for(;;){var
b=a(g[22][9],i);try{var
j=b[2],l=[0,a(cU[5],0)],m=cn(cU[8],o,b[5],1,l,B,j);if(0<c)var
f=q(c-1|0);else
var
n=e(t[96],b[1],[0,D,ga],m),p=bY(b[1],k,b[4]),f=[0,b[1],b[2],b[3],p,n];return f}catch(c){c=C(c);if(a(h[22],c)){f_(o,b,i,d);continue}throw c}}};try{var
j=q(H)}catch(a){a=C(a);if(a===g[22][1])throw $;throw a}var
y=a(f[ab],0),z=c(a8[97],j[5],y),A=[0,c7(j[5],j[4]),z],l=A}catch(b){b=C(b);if(b!==$)throw b;var
l=a(h[6],gd)}var
r=l[2],s=l[1];if(a(g[17][47],s)){var
F=a(p[45],r);return c(n[66][8],F,d)}var
G=c8(s,r,d);return c(m[45],G,d)}function
c9(d,c,b){return 0===b[0]?b[1]:b[1]?a(h[6],ge):a(m[7],c)}function
c_(i,e,r,b){if(i)try{var
o=a(m[8],b),p=a(x[12],o),q=[0,a(f[s],p),0],d=q}catch(b){b=C(b);if(b[1]!==h[5])throw b;var
d=a(h[6],gf)}else
var
d=i;function
k(b){var
f=e[2];return f?bX(c(g[18],d,f[1]),b):a(j[1],b)}function
l(b){var
d=e[3];if(d){var
f=d[1],g=a(ap[28],0),h=c(ap[19],g,f);return c(n[66][8],h,b)}return c(n[66][8],a9,b)}return aN(c(j[5],k,l),b)}function
c$(r,q,p,g,b){var
h=ae(b),i=g[1],k=i[1];if(k)var
d=k[1];else
var
y=a(o[1][5],gg),d=c(m[20],y,b);var
l=e(r,h,b,i[2]),t=[0,function(b){return q?aO(a(f[s],d),l,0,b):a(j[1],b)},0];function
u(a){return c_(p,g,h,a)}var
v=[0,c(j[5],aL,u),t],w=aj(d,l),x=a(n[66][8],w);return e(j[11],x,v,b)}var
R=[D,function(b){return a(cJ[48],bO[30])}];function
gh(i,e){var
j=c(m[19],e,i),k=a(aM(e),j),d=a(f[aG],k);if(9===d[0]){var
b=d[2],g=K(R),l=M===g?R[1]:D===g?a(I[2],R):R;if(c(H[63],d[1],l))if(3===b.length-1){var
n=T(b,2)[3],o=T(b,1)[2];return[0,T(b,0)[1],o,n]}return a(h[6],gj)}return a(h[6],gi)}function
gk(E,B,d,b){try{var
am=a(m[8],b),an=a(x[12],am),g=an}catch(b){b=C(b);if(b[1]!==h[5])throw b;var
g=a(h[6],gl)}var
k=gh(g,b),l=k[3],q=k[2],r=k[1];function
F(b){var
c=d[2];return c?bX(c[1],b):a(j[1],b)}function
G(b){var
e=d[3];if(e){var
f=e[1],g=a(ap[28],0),h=c(ap[19],g,f);return c(n[66][8],h,b)}return c(n[66][8],a9,b)}function
t(a){return aN(c(j[5],F,G),a)}var
u=d[1][1];if(u)var
i=u[1];else
var
al=a(o[1][5],gm),i=c(m[20],al,b);function
v(c,b){return E?aO(a(f[s],i),c,0,b):a(j[1],b)}if(0===B){var
w=K(R),H=[0,r,d[1][2],l],J=M===w?R[1]:D===w?a(I[2],R):R,y=a(f[P],[0,J,H]),L=0,N=[0,function(a){return v(y,a)},L],O=a(f[s],g),Q=a(p[45],O),S=[0,t,[0,a(n[66][8],Q),0]],T=a(p[cr],q),U=a(n[66][8],T),V=c(j[11],U,S),W=[0,c(j[5],aL,V),N],X=aj(i,y),Y=a(n[66][8],X);return e(j[11],Y,W,b)}var
z=K(R),Z=[0,r,q,d[1][2]],_=M===z?R[1]:D===z?a(I[2],R):R,A=a(f[P],[0,_,Z]),$=0,aa=[0,function(a){return v(A,a)},$],ab=a(f[s],g),ac=a(p[45],ab),ad=[0,a(n[66][8],ac),[0,t,0]],ae=a(p[cr],l),af=a(n[66][8],ae),ag=c(j[11],af,ad),ah=[0,c(j[5],aL,ag),aa],ai=aj(i,A),ak=a(n[66][8],ai);return e(j[11],ak,ah,b)}function
da(h,d,b){var
k=ae(b),i=d[1];if(i)var
g=i[1];else
var
x=a(o[1][5],gn),g=c(m[20],x,b);function
l(b){if(h){var
c=d[2];return aO(a(f[s],g),c,0,b)}return a(j[1],b)}var
p=k[1],q=h?2:1,r=[0,[0,q,p]],t=0,u=[0,l,[0,function(a){return W(r,a)},t]],v=aj(g,d[2]),w=a(n[66][8],v);return e(j[11],w,u,b)}function
aP(f,e,d){if(e)var
b=e[1];else
var
k=a(o[1][5],go),b=c(m[20],k,d);var
g=[0,a(f,b),0],h=a(p[23],b),i=[0,a(n[66][8],h),g];return c(j[7],i,d)}function
bZ(d,b){var
e=j[1];function
f(d){var
b=d[1],e=b[1];function
f(d){var
e=c(p[4],0,[0,d,b[2]]);return a(n[66][8],e)}function
g(a){return aP(f,e,a)}return a(j[5],g)}return L(g[17][16],f,d,e,b)}function
db(b,a){var
c=a?[0,b,db(b+1|0,a[2])]:a;return c}function
b0(b,e){if(b){var
d=b[1][1],j=b0(b[2],e),g=c(z[8],1,j),h=d[1];if(h)var
k=a(f[s],h[1]),i=c(H[58],k,g);else
var
i=g;return a(f[bJ],[0,d[1],d[2],i])}return e}function
dc(d,b){if(b){var
e=b[1],h=a(f[34],d),i=b[2],j=[0,a(f[ab],e),0],g=dc(c(f[76],d,j),i);return[0,[0,[0,e,h[2]],g[1]],g[2]]}return[0,0,d]}function
gq(n,b){var
o=c(m[19],b,n),p=a(aM(b),o),e=a(f[39],p),d=a(m[8],b),h=a(f[aG],e[1]);if(11===h[0]){var
i=h[1],j=i[1];if(c3(d,j)){var
k=c(av[4],d,j),l=c(av[17],i,[0,k[1],k[2]]);if(1-(1===l.length-1?1:0))throw $;var
q=e[2],r=T(l,0)[1],s=c(f[76],r,q),t=c(cX[26],d,s)[1];return a(g[17][1],t)}}throw $}function
dd(g,f,d,b){if(0<g){var
i=a(o[1][5],gr),h=c(m[20],i,b),k=[0,h,f],l=g-1|0,q=function(a){return dd(l,k,d,a)},r=a(p[23],h),s=a(n[66][8],r);return e(j[5],s,q,b)}return c(d,f,b)}function
af(i,l,k,b,e){if(k){if(b){var
r=b[1][1],t=b[2],q=k[2],d=k[1],y=function(e){try{var
x=gq(d,e),k=x}catch(b){b=C(b);if(b!==$)throw b;var
k=a(h[6],gs)}var
m=0;function
o(a){var
d=c(g[17][8],a,q);return function(a){return af(i,l,d,b,a)}}var
r=0,t=[0,function(a){return dd(k,r,o,a)},m],u=a(f[s],d),v=a(p[eq],u),w=[0,a(n[66][8],v),t];return c(j[7],w,e)},u=r[1];if(u)var
v=u[1],z=0,A=[0,[0,v,1],l],B=[0,function(a){return af(i,A,q,t,a)},z],D=a(p[81],[0,[0,d,v],0]),E=[0,a(n[66][8],D),B],w=a(j[7],E);else
var
H=[0,[0,d,0],l],w=function(a){return af(i,H,q,t,a)};var
F=c(p[4],0,[0,d,r[2]]),G=a(n[66][8],F);return L(j[33],G,w,y,e)}return a(h[6],gt)}if(b){if(i){var
I=a(o[1][5],gu),x=c(m[20],I,e),J=function(b){return a(h[6],gv)},K=[0,x,0],M=0,N=1,O=function(a){return af(N,M,K,b,a)},P=a(p[23],x),Q=a(n[66][8],P);return L(j[33],Q,O,J,e)}return a(h[6],gw)}return a(j[1],e)}function
de(d,b){if(d){var
f=d[1],g=c(m[15],b,f),h=d[2],i=function(a){return de(h,a)},k=0,l=function(a){return aO(f,g,k,a)};return e(j[5],l,i,b)}return a(j[1],b)}function
df(b,d){if(b){var
e=b[1],i=df(b[2],d),j=c(z[8],1,i),g=e[1];if(g){var
h=g[1],k=a(f[s],h),l=c(H[58],k,j);return a(f[bw],[0,[0,h],e[2],l])}throw[0,N,gy]}return d}function
gA(d){var
b=d[1];if(b){var
c=a(bU[6],d[2])[1];if(typeof
c!=="number"&&0===c[0])if(c[1][2]===b[1])return 1;var
e=0}else
var
e=b;return e}function
dg(i,h){var
b=i;for(;;){var
d=a(bU[6],b[2]);if(typeof
d[1]==="number"){var
b=[0,0,a(ac[26],h)[2][12]];continue}var
e=d[2],f=b[1],j=function(b){var
d=a(bU[6],b)[2];function
e(a){return[0,f,a]}return c(g[19][15],e,d)};return c(g[19][15],j,e)}}function
bi(e,a,d,b){var
f=dg(d,a);function
h(d,a){var
e=c(b,d,a);return[0,c(g[19][15],gA,a),e]}return[1,e,a,c(g[19][16],h,f)]}function
dh(e,d,b){if(1===b[0]){var
f=function(b,a){var
e=c(d,b,a[2]);return[0,a[1],e]},h=c(g[19][16],f,b[3]),i=b[2];return[1,a(e,b[1]),i,h]}return a(E[2],gC)}function
di(d,b,a){function
c(b,a){return 0}return bi(o[1][9][1],b,a,c)}function
dj(v,d,b){var
l=a(m[7],b),n=a(m[8],b),i=c(m[15],b,d),w=c(H[45],d,l),x=a(aM(b),i),o=a(f[39],x);try{var
D=a(f[43],o[1]),p=D}catch(b){b=C(b);if(b!==f[28])throw b;var
p=a(h[6],gD)}var
j=p[1],q=a(ac[26],j),r=q[1];if(0===v)var
k=r[6],s=0;else
var
k=r[7],s=[0,j[2]];var
t=c(g[17][99],k,o[2]),u=t[2];function
y(a,d){var
e=c(m[15],b,a),f=[0,e,c(H[58],a,d)];return c(aq[17],n,f)}var
z=[0,i,c(H[58],d,l)],A=c(aq[17],n,z),B=e(g[17][16],y,u,A);return[0,w,[0,d,i,j,B,u,t[1],k,[0,s,q[2][12]]]]}function
b1(c,b,a){return 0<a?[0,b,b1(c,b,a-1|0)]:[2,c]}function
aQ(b,c){if(c){var
d=c[2],f=c[1],i=b[1];if(f){var
j=f[2],k=f[1],h=k[1];if(0===h[0]){var
m=aQ(b,[0,j,d]);return[0,a(o[1][9][5],i),m]}var
l=h[2],n=h[3],p=l[2],q=function(k,h){var
c=k===(p-1|0)?1:0;if(c)var
l=0,m=function(a,b){return[0,b,T(h,a)[a+1]]},q=aQ(b,[0,e(g[17][69],m,l,n),[0,j,d]]),f=[0,[0,a(o[1][9][5],i),q]];else
var
f=c;return f};return bi(o[1][9][1],l[1],k[2],q)}return[2,aQ(b,d)]}return[3,b]}function
ax(f,l,b){var
m=f[1];if(l){var
i=l[2],n=l[1];if(n){var
k=n[2],r=n[1],s=r[2],p=r[1];if(0===p[0])switch(b[0]){case
0:var
B=ax(f,[0,k,i],b[2]);return[0,c(o[1][9][4],m,b[1]),B];case
1:var
C=function(b,a){return bj(f,1,[0,k,i],a)};return dh(a(o[1][9][4],m),C,b);default:var
D=a(d[1],gK);return e(h[3],0,0,D)}var
t=p[3],u=p[2],v=u[2],w=u[1];switch(b[0]){case
0:var
x=b[2],j=b[1];return bi(j,w,s,function(b,a){if(b===(v-1|0)){var
d=0,h=function(b,c){return[0,c,T(a,b)[b+1]]},l=e(g[17][69],h,d,t),n=ax(f,[0,l,[0,k,i]],b1(x,j,a.length-1));return[0,[0,c(o[1][9][4],m,j),n]]}return[0,[0,j,b1(x,j,a.length-1)]]});case
1:if(1-c(o[37],w,b[2]))a(h[6],gL);if(1===b[0]){var
q=b[2],y=dg(s,q),z=function(a,b){var
c=b[2],h=T(y,a)[a+1];if(a===(v-1|0))var
j=0,l=function(a,b){return[0,b,T(h,a)[a+1]]},d=bj(f,0,[0,e(g[17][69],l,j,t),[0,k,i]],c);else
var
d=c;return[0,b[1],d]},A=c(g[19][16],z,b[3]);return[1,b[1],q,A]}return a(E[2],gB);default:var
F=a(d[1],gM);return e(h[3],0,0,F)}}if(2===b[0])return[2,ax(f,i,b[1])];var
G=a(d[1],gN);return e(h[3],0,0,G)}if(3===b[0])return[3,b[1]];var
H=a(d[1],gO);return e(h[3],0,0,H)}function
bj(b,h,e,d){var
f=b[1];if(d){var
g=d[1],i=bk(b,h,e,g[2]);return[0,[0,c(o[1][9][4],f,g[1]),i]]}var
j=aQ(b,e);return[0,[0,a(o[1][9][5],f),j]]}function
bk(f,i,g,b){var
j=f[1];if(0<i)switch(b[0]){case
0:var
k=bk(f,i,g,b[2]);return[0,c(o[1][9][4],j,b[1]),k];case
1:var
l=function(b,a){return bj(f,i+1|0,g,a)};return dh(a(o[1][9][4],j),l,b);case
2:return[2,bk(f,i-1|0,g,b[1])];default:var
m=a(d[1],gP);return e(h[3],0,0,m)}return ax(f,g,b)}function
dk(e,d){var
a=d;for(;;){if(a){var
b=a[1];if(c(o[2][4],b[1],e))return b[2];var
a=a[2];continue}throw $}}function
b2(i,k,b,j){var
l=a(f[79],k)[1],m=a(f[39],k),p=a(f[43],m[1]);if(1-c(o[37],p[1],b[3])){var
q=a(d[1],gQ),r=a(d[17],0),s=e(ad[4],j,t[16],i),u=c(d[14],s,r),v=c(d[14],u,q);c(h[7],gR,v)}var
n=c(g[17][99],b[7],m[2]);if(1-e(g[17][24],H[63],n[1],b[6])){var
w=a(d[1],gS),x=a(d[17],0),y=e(ad[4],j,t[16],i),A=c(d[14],y,x),B=c(d[14],A,w);c(h[7],gT,B)}var
C=c(g[18],n[2],[0,i,0]),D=b[4],E=a(g[17][1],l),F=[0,c(z[8],E,D),C],G=a(f[59],F),I=c(a8[20],t[16],G);return c(f[64],l,I)}function
b3(g,j,e,b,d){if(e){var
k=e[1];if(0===k[0])var
o=k[1],p=o[2],h=o[1];else{var
i=k[1],l=i[2];if(0!==l[0]){var
q=l[1],y=b3(g,j,e[2],b,d),A=c(z[8],1,y),r=i[1],B=r?c(z[20],r[1],A):b;if(q){var
n=q[1],D=a(f[s],n);try{var
E=dk([0,n],g[1]),t=E}catch(a){a=C(a);if(a!==$)throw a;var
t=dk([0,n],g[2])[2]}var
u=b2(D,t,j,a(m[8],d))}else
var
u=a(m[7],d);return a(f[bJ],[0,i[1],u,B])}var
p=l[1],h=i[1]}var
v=b3(g,j,e[2],b,d),w=c(z[8],1,v),x=h?c(z[20],h[1],w):b;return a(f[bJ],[0,h,p,x])}return b}function
dl(j,b,h,i,d){var
k=a(m[8],d),l=b3(b,h,i,b2(b[3],b[4],h,k),d);function
n(b,d){var
g=b[1];if(g){var
h=c(z[8],1,d);return e(f[52],g[1],b[2],h)}var
i=c(z[8],1,d);return a(f[bJ],[0,0,b[2],i])}function
o(b,d){var
e=b[1];if(e){var
g=c(z[8],1,d);return L(f[51],e[1],b[2][1],b[2][2],g)}var
h=c(z[8],1,d);return a(f[123],[0,0,b[2][1],b[2][2],h])}var
p=e(g[17][16],o,b[2],l),q=c(g[18],j,b[1]);return e(g[17][16],n,q,p)}function
dm(g,f,c,e,d){var
b=d;for(;;){if(typeof
b==="number"){if(0===b)return a(h[6],gU);var
b=[0,di(f,c[3],c[8])];continue}return[0,ax(g,[0,[0,[0,e,c[8]],0],0],b[1])]}}function
dn(a){function
b(a){return[0,a,gX]}return c(g[17][12],b,a)}function
dp(j,b){function
f(f){var
b=f[2];if(b)var
c=b[1],g=[0,[0,c[1],[0,j,c[2]]],b[2]];else
var
i=a(d[1],gY),g=e(h[3],0,0,i);return[0,f[1],g]}return c(g[17][12],f,b)}function
dq(h,f,a){function
b(d){var
a=d[1],b=c(o[1][9][3],a,f),e=b?[0,h]:b;return[0,a,[0,[0,e,0],d[2]]]}return c(g[17][12],b,a)}function
gZ(k){var
b=k[2];if(b){var
i=b[1],l=i[1];if(b[2])if(l)var
m=b[2],n=m[1],r=a(g[17][6],i[2]),s=a(f[59],[0,l[1],r]),j=[0,[0,n[1],[0,s,n[2]]],m[2]];else
var
p=b[2],q=p[1],t=p[2],u=c(g[18],i[2],q[2]),j=[0,[0,q[1],u],t];else
var
j=b;var
o=j}else
var
v=a(d[1],g0),o=e(h[3],0,0,v);return[0,k[1],o]}function
dr(a){return c(g[17][12],gZ,a)}function
ds(n,b,h,d){var
p=a(f[s],d),i=c(m[19],h,d),q=a(f[79],i),j=a(f[39],i),r=a(f[43],j[1]);if(c(o[37],r[1],b[3])){var
k=c(g[17][99],b[7],j[2]);try{var
x=e(g[17][24],H[63],k[1],b[6]),l=x}catch(a){a=C(a);if(a[1]!==fc)throw a;var
l=0}if(l){var
t=c(g[18],k[2],[0,p,0]),u=[0,a(f[s],n),t],v=a(f[59],u),w=c(a8[20],h[2],v);return c(f[66],q[1],w)}throw[0,N,g1]}throw[0,N,g2]}function
bl(y,x,r,Q,P,w,O,i){var
l=Q,k=P,b=O;for(;;)switch(b[0]){case
0:if(k){var
R=dp(k[1],l),l=R,k=k[2],b=b[2];continue}var
U=a(d[1],g3);return e(h[3],0,g4,U);case
1:var
q=b[2],V=b[1];if(k){var
t=k[1],W=k[2],z=a(ac[26],q),X=z[1][6],Y=a(m[7],i),u=a(m[8],i),A=c(m[15],i,t),Z=a(aM(i),A),B=a(f[39],Z),C=a(f[43],B[1]);if(c(o[37],C[1],q)){var
D=c(g[17][99],X,B[2]),E=D[1],_=function(a,b){var
d=c(m[15],i,a),e=[0,d,c(H[58],a,b)];return c(aq[17],u,e)},$=[0,A,c(H[58],t,Y)],aa=c(aq[17],u,$),ad=e(g[17][16],_,D[2],aa),ae=e(bV[75],u,q,4),af=c(av[17],[0,q,C[2]],z),ag=function(b){var
d=c(f[76],b,E),e=a(f[88],d);return c(p[15],e,i)},F=c(g[19][15],ag,af),ah=function(b,c){return a(f[ab],b+1|0)},ai=[0,ae,ad,t,c(g[19][16],ah,F)],aj=a(f[cr],ai),ak=function(b,h,z){var
i=h[2],k=h[1],m=T(F,b)[b+1];function
t(b,c){if(c){var
d=c[1],e=t(b+1|0,c[2]),g=e[3],h=e[2],i=e[1];return T(k,b)[b+1]?[0,[0,a(f[s],d),i],[0,d,h],g+1|0]:[0,[0,a(f[s],d),i],h,g]}if(b===k.length-1)return[0,W,0,w];throw[0,N,g5]}var
e=t(0,m),A=e[2],B=0;if(i)var
u=i[1],C=u[1],D=function(a){return c(o[1][9][3],a[1],C)},G=c(g[17][29],D,l),H=[0,a(f[128],[0,q,b+1|0]),E],I=dq(a(f[59],H),V,G),J=u[2],K=e[3],L=e[1],v=function(a){return bl(y,x,r,I,L,K,J,a)};else{var
R=a(d[1],g6);a(aw[13],R);var
v=a(r,a(f[ab],1))}var
M=[0,v,B],O=[0,function(b){function
d(c){return ds(a(S[12],y),x,b,c)}var
e=c(g[17][12],d,A),f=a(p[cE],e);return c(n[66][8],f,b)},M];function
P(b){var
c=a(p[23],b);return a(n[66][8],c)}var
Q=[0,c(j[32],P,m),O];return c(j[7],Q,z)},al=c(g[19][16],ak,b[3]),am=a(m[45],aj);return e(j[12],am,al,i)}throw[0,N,g7]}var
an=a(d[1],g8);return e(h[3],0,g9,an);case
2:var
ao=dr(l),l=ao,b=b[1];continue;default:var
G=b[1],I=G[2],J=I[1],K=G[1];if(k){var
ap=a(d[1],g_);return e(h[3],0,g$,ap)}var
v=c(o[1][12][3],K,l);if(v){var
L=v[1];if(!L[1])if(!v[2]){var
as=function(b){return a(f[ab],b+1|0)},at=c(g[17][48],J+I[2]|0,as),M=c(g[17][99],J,at),au=c(g[17][8],L[2],M[2]),ax=c(g[17][7],M[1],au),ay=[0,a(f[s],K),ax],az=a(r,a(f[59],ay)),aA=a(n[66][8],p[17]),aB=c(j[26],w,aA);return e(j[5],aB,az,i)}}var
ar=a(d[1],ha);return e(h[3],0,0,ar)}}function
dt(i,b){var
d=[0,function(j){var
k=a(cW[6],j),l=a(m[7],b),f=a(m[8],b),g=cn(cK[6],0,0,0,f,t[16],i);function
d(a){return 2===a[0]?[13,[0,u[4],hb,0,0]]:c(ff[7],d,a)}var
h=d(g),e=O(V[8],0,f,k,[0,[0,l]],h);return a(cW[21][5],[0,e[2],e[1]])}],e=c(p[160][1],0,d);return c(n[66][8],e,b)}function
hk(a){return W(hl,a)}function
hr(f,m){var
b=m;for(;;)if(typeof
b==="number"){a(x[14],f);return a(G[10],hs)}else
switch(b[0]){case
18:var
i=b[1];if(typeof
i==="number")return 0===i?a(G[10],ht):0;if(0===i[1])return ak(0);var
n=a(w[9],f),o=a(g[17][3],n),k=a(w[33][1],f);try{var
r=a(g[17][3],k[1]),s=c(B[4][1],k[2],r),l=s}catch(b){b=C(b);if(b[1]===fb)if(J.caml_string_notequal(b[2],hu))var
j=0;else
var
l=a(ac[2],0),j=1;else
var
j=0;if(!j)throw b}try{c(bV[77],l,o);var
q=fs(0);return q}catch(b){b=C(b);if(b[1]===fd[1])if(14===b[3][0]){var
p=a(d[1],hv);return e(h[3],0,0,p)}throw b}case
0:case
1:case
2:var
b=b[1];continue;case
10:case
11:case
14:case
15:case
17:return a(x[14],f);default:return 0}}function
du(K,r){var
v=K[2];for(;;){if(typeof
v==="number")var
y=0;else
switch(v[0]){case
18:var
J=v[1];if(typeof
J==="number"){if(a(w[28],r))ak(0);else{var
k=a(w[7],r)?a(x[11],r):a(x[10],r);if(k){var
D=k[1];if(typeof
D==="number")if(0===D){var
U=k[2];if(U){var
V=U[1];if(typeof
V==="number")var
R=1;else
var
X=V[1],C=1,R=0}else
var
R=1;if(R){var
as=a(d[1],fw);e(h[3],0,0,as);var
B=1,C=0}}else
var
B=0,C=0;else
var
X=D[1],C=1;if(C)var
B=0===X?(a(h[6],fx),1):(a(h[6],fy),1)}else
var
B=0;if(!B){if(typeof
J==="number"){switch(J){case
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
t=0,l=0}if(l){bW(0);ak(0);var
t=1}}else
var
t=0;if(!t)if(k){var
Y=k[1],aU=typeof
Y==="number"?2===Y?(a(h[6],fA),1):0:0;if(!aU)a(h[6],fz)}else
a(h[6],fB)}}var
M=0,y=2}else
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
S=1;else{a(h[6],fl);var
ar=1,S=0}else
var
S=1;if(S)var
ar=0}else
var
ar=0;var
M=1;break;case
1:c4(r);var
M=1;break}var
P=a(G[12],0);if(M){var
an=a(w[33][1],P),ao=an[2],ap=[0,a(g[17][3],an[1]),ao],aq=a(m[8],ap),aJ=c(aK[1],[0,o[1][9][1],aq],K),aM=ae(ap),u=0,q=0,b=L(aK[2],aM,aq,ao,aJ)[2];for(;;){if(typeof
b==="number")var
i=hk;else
switch(b[0]){case
0:if(q)throw[0,N,hm];var
q=1,b=b[1];continue;case
1:if(u)throw[0,N,hn];var
u=1,b=b[1];continue;case
2:if(!q)if(!u){var
u=1,q=1,b=b[1];continue}throw[0,N,ho];case
3:var
at=b[1],i=function(a){return c$(c9,u,q,at,a)};break;case
4:if(q)throw[0,N,hp];var
au=b[2],av=b[1],i=function(a){return gk(u,av,au,a)};break;case
5:var
$=b[1],i=function(b){var
h=ae(b),t=a(o[1][5],gp),i=c(m[20],t,b),k=$[1],d=k[1],l=b0(d,c9(h,b,k[2])),p=db(1,d),r=dc(l,p),u=r[2],v=r[1],w=c(g[17][12],f[ab],p),x=[0,a(f[s],i),w],y=a(f[59],x),z=[0,function(a){return aO(y,u,v,a)},0],A=0,B=[0,aL,[0,function(a){return c_(q,$,h,a)},A]],C=[0,function(a){return bZ(d,a)},B],D=[0,a(j[7],C),z],E=aj(i,l),F=a(n[66][8],E);return e(j[11],F,D,b)};break;case
8:var
ax=b[1],i=function(a){return af(1,0,0,ax,a)};break;case
9:var
aa=b[2],ad=b[1],i=function(b){var
h=a(f[99],ad),d=a(f[aG],h);if(1===d[0])return af(0,0,[0,d[1],0],aa,b);var
i=a(o[1][5],gx),g=c(m[20],i,b),k=[0,g,0],l=0,q=0;function
r(a){return af(q,l,k,aa,a)}var
s=c(p[143],[0,g],ad),t=a(n[66][8],s);return e(j[5],t,r,b)};break;case
10:var
ay=b[1],az=0,i=function(a){return da(az,ay,a)};break;case
11:var
aA=b[1],aB=1,i=function(a){return da(aB,aA,a)};break;case
12:var
aC=b[3],aD=b[2],aE=b[1],i=function(d){var
a=df(aD,aC),b=O(p[eb],0,[0,aE],a,0,cY[7]);return c(n[66][8],b,d)};break;case
13:var
ag=b[2],E=b[1],i=function(b){if(0===E[0]){var
d=E[1],f=c(m[18],b,d),g=[0,d,a(aH[2][1][2],f),ag],i=a(aH[2][1][18],g),j=c(p[4],0,i);return c(n[66][8],j,b)}if(E[1])return a(h[6],gz);var
k=e(p[3],0,ag,2);return c(n[66][8],k,b)};break;case
14:var
ah=b[1],i=function(g){var
p=ae(g),s=a(m[7],g),t=a(o[1][5],gJ),q=c(m[20],t,g),u=b0(ah,s),k=p[1],v=[0,[0,0,p[1]]];if(k){var
b=k[1];if(typeof
b==="number")var
i=0;else{var
l=b[4];if(typeof
b[3]==="number")var
f=[0,l,[0,[0,b[1],b[2],0,[0,q,l]],k[2]]],i=1;else
var
f=a(h[6],gI),i=1}}else
var
i=0;if(!i)var
r=a(d[1],gH),f=e(h[3],0,0,r);var
w=[0,f[2]],x=0,y=[0,function(a){return W(w,a)},x],z=0,A=f[1],B=[0,function(a){return ai(A,a)},z],C=[0,function(a){return bZ(ah,a)},B],D=[0,function(a){return W(v,a)},C],E=[0,a(j[7],D),y],F=aj(q,u),G=a(n[66][8],F);return e(j[11],G,E,g)};break;case
15:var
F=b[3],z=b[2],H=b[1],i=function(i){var
t=ae(i),x=a(o[1][5],gV),l=c(m[20],x,i),q=t[1];if(q){var
b=q[1];if(typeof
b==="number")var
s=0;else
var
w=b[1],k=b[2],v=b[3],r=b[4],u=q[2],s=1}else
var
s=0;if(!s)var
y=a(d[1],gW),f=e(h[3],0,0,y),w=f[1],k=f[2],v=f[3],r=f[4],u=f[5];var
A=dl(H,z,k,F,i),B=[0,[0,0,t[1]]],C=z[5],D=a(m[8],i),E=a(g[17][1],F),G=[0,[0,[0,w,k,dm([0,l,[0,a(g[17][1],H),E]],D,k,C,v),[0,l,r]],u]],I=0,J=[0,function(a){return W(G,a)},I],K=0,M=[0,function(a){return ai(r,a)},K],N=[0,function(e){var
b=j[1];function
d(b){if(0===b[0])var
d=b[1],f=d[2],e=d[1];else{var
g=b[1],h=g[2],i=g[1];if(0!==h[0]){var
m=function(a){return j[1]},o=function(a){return aP(m,i,a)};return a(j[5],o)}var
f=h[1],e=i}function
k(b){var
d=c(p[4],0,[0,b,f]);return a(n[66][8],d)}function
l(a){return aP(k,e,a)}return a(j[5],l)}return L(g[17][16],d,F,b,e)},M],O=z[2],P=[0,function(e){var
b=j[1];function
d(b){var
d=b[1];function
e(d){var
e=c(p[4],0,[1,d,b[2][1],b[2][2]]);return a(n[66][8],e)}function
f(a){return aP(e,d,a)}return a(j[5],f)}return L(g[17][16],d,O,b,e)},N],Q=c(g[18],H,z[1]),R=[0,function(e){var
b=j[1];function
d(b){var
d=b[1];function
e(d){var
e=c(p[4],0,[0,d,b[2]]);return a(n[66][8],e)}function
f(a){return aP(e,d,a)}return a(j[5],f)}return L(g[17][16],d,Q,b,e)},P],S=[0,function(a){return W(B,a)},R],T=[0,a(j[7],S),J],U=aj(l,A),V=a(n[66][8],U);return e(j[11],V,T,i)};break;case
16:var
aF=b[1],i=function(a){return de(aF,a)};break;case
17:var
I=b[2],A=b[1],i=function(b){var
l=a(m[8],b),h=ae(b);if(0===I[0]){var
i=dj(A,I[1],b),g=i[2],n=i[1]?[0,di(l,g[3],g[8])]:1;return W([0,[0,[0,A,g,n,0],h[1]]],b)}var
d=I[1];if(0===d[1][1]){var
p=a(o[1][5],gE),k=c(m[20],p,b),q=a(f[s],k),r=[0,[0,[0,k],d[1][2]],d[2],d[3]],t=function(a){var
b=dj(A,q,a);if(b[1])throw[0,N,gF];return W([0,[0,[0,A,b[2],1,0],h[1]]],a)},u=0,v=0,w=function(c,b,a){return a},x=function(a){return c$(w,v,u,r,a)};return e(j[5],x,t,b)}throw[0,N,gG]};break;case
18:var
al=b[1];if(typeof
al==="number")var
aI=a(d[1],hq),i=e(h[3],0,0,aI);else
var
am=al[1],i=function(y){var
w=ae(y)[1];if(w){var
l=w[1];if(typeof
l==="number"){switch(l){case
0:var
z=a(d[1],hc),q=e(h[3],0,0,z);break;case
1:var
q=a(h[6],hh);break;default:var
q=a(h[6],hi)}var
r=q[1],b=q[2],k=q[3],i=q[4]}else
var
r=l[1],b=l[2],k=l[3],i=l[4]}else
var
$=a(d[1],hj),u=e(h[3],0,0,$),r=u[1],b=u[2],k=u[3],i=u[4];var
A=0===r?0===am?r:a(h[6],hf):0===am?a(h[6],hg):r;if(typeof
k==="number")if(0===k)var
v=0;else
var
Z=a(p[99],b[1]),_=[0,a(n[66][8],Z),0],t=a(j[20],_),v=1;else
var
v=0;if(!v)if(0===A)if(typeof
k==="number")var
B=c(g[17][12],f[s],i),C=function(a){return c6(B,a)},D=a(p[eq],b[1]),E=a(n[66][8],D),t=c(j[5],E,C);else
var
F=k[1],H=[0,b[1],0],G=0,I=dn(i),J=function(b){var
c=0,d=a(n[66][8],p[41]),e=[0,function(a){return aN(d,a)},c],f=[0,function(a){return ai(i,a)},e],g=[0,function(a){return dt(b,a)},f];return a(j[7],g)},K=0,t=function(a){return bl(K,b,J,I,H,G,F,a)};else
if(typeof
k==="number")var
L=0,M=c(g[17][12],f[s],i),N=[0,function(a){return c6(M,a)},L],O=[0,a(g[17][1],b[5])+1|0],P=a(p[101],O),Q=[0,a(n[66][8],P),N],R=c(g[18],b[5],[0,b[1],0]),S=a(p[cE],R),T=[0,a(n[66][8],S),Q],t=a(j[7],T);else
var
U=k[1],x=a(g[17][1],b[5]),V=function(d){var
h=a(o[1][5],hd),e=c(m[20],h,d),k=a(o[1][5],he),g=c(m[20],k,d),r=[0,a(f[s],g),0],l=0,q=0,t=dn(i);function
u(b){var
c=0,d=a(n[66][8],p[41]),f=[0,function(a){return aN(d,a)},c],g=[0,function(a){return ai(i,a)},f],h=[0,function(a){return dt(b,a)},g],k=[0,e,0],l=[0,function(a){return ai(k,a)},h];return a(j[7],l)}var
v=[0,e],w=[0,function(a){return bl(v,b,u,t,r,q,U,a)},l],y=a(p[23],g),z=[0,a(n[66][8],y),w],A=a(n[66][8],p[17]),B=[0,c(j[26],x,A),z],C=c(p[8],[0,e],x+1|0),D=[0,a(n[66][8],C),B];return c(j[7],D,d)},W=c(g[18],b[5],[0,b[1],0]),X=a(p[cE],W),Y=a(n[66][8],X),t=c(j[5],Y,V);return e(j[5],aL,t,y)};break;default:var
aw=b[1],i=function(a){return bZ(aw,a)}}var
aQ=c(j[5],i,fo),aR=a(n[66][1],aQ),aS=a(ac[2],0),Q=e(w[29],aS,aR,P)[1];break}}else
var
Q=P;var
aT=function(b,a){return Q};a(G[27],aT);return hr(Q,K[2])}}var
aR=[0,fr,fv,fK,a9,c8,du,function(b){return du(b,a(G[12],0))},W,bl,aQ,ax,bj,bk,dl,dm,b2,c4,dr,dq,dp,ds,af,bi];aA(462,aR,"Decl_mode_plugin.Decl_proof_instr");function
Y(m,b){var
n=a(m,b[2]),e=b[1];if(e)var
g=a(d[17],0),h=a(d[1],hw),i=a(d[17],0),j=a(S[1],e[1]),k=c(d[14],j,i),l=c(d[14],k,h),f=c(d[14],l,g);else
var
f=a(d[9],0);return c(d[14],f,n)}function
al(f,b){if(0===b[0])return a(f,b[1]);var
e=b[1];if(e){var
g=a(S[1],e[1]),h=a(d[17],0),i=a(d[1],hB),j=a(d[17],0),k=a(d[1],hC),l=c(d[14],k,j),m=c(d[14],l,i),n=c(d[14],m,h);return c(d[14],n,g)}return a(d[1],hD)}function
am(B,A,z,b){var
h=b[3];if(h)var
t=a(A,h[1]),u=a(d[17],0),v=a(d[1],hA),w=a(d[17],0),x=c(d[14],w,v),y=c(d[14],x,u),i=c(d[14],y,t);else
var
i=a(d[9],0);var
j=b[2];if(j){var
g=j[1];if(g)var
k=function(b){return a(d[1],hx)},l=e(d[54],k,B,g),m=a(d[17],0),n=a(d[1],hy),o=a(d[17],0),p=c(d[14],o,n),q=c(d[14],p,m),f=c(d[14],q,l);else
var
f=a(d[9],0)}else
var
r=a(d[1],hz),s=a(d[17],0),f=c(d[14],s,r);var
C=a(z,b[1]),D=c(d[30],1,C),E=c(d[14],D,f);return c(d[14],E,i)}function
hE(a){return 0===a[0]?a[1]:f[117]}function
ay(a){return a}function
az(j,f,i,l,h,e,b){if(l)var
m=a(d[17],0),n=a(d[1],hF),g=c(d[14],n,m);else
var
g=a(d[9],0);if(b){var
k=b[1];if(0===k[0]){var
o=aS(j,f,i,0,h,e,b),p=a(d[1],e),q=a(d[17],0),r=c(d[14],q,g),s=c(d[14],r,p);return c(d[14],s,o)}var
t=az(j,f,i,1,h,e,b[2]),u=Y(f,k[1]),v=a(d[17],0),w=c(d[14],v,g),x=c(d[14],w,u);return c(d[14],x,t)}return a(d[9],0)}function
aS(f,i,h,k,e,g,b){if(b){var
j=b[1];if(0===j[0]){var
l=k?a(d[44],0):a(d[9],0),m=aS(f,i,h,1,e,g,b[2]),n=a(f,j[1]),o=a(d[17],0),p=c(d[14],o,l),q=c(d[14],p,n);return c(d[14],q,m)}var
r=e?a(d[1],hG):a(d[1],hH),s=az(f,i,h,0,e,g,b),t=a(d[17],0),u=c(d[14],t,r);return c(d[14],u,s)}return a(d[9],0)}function
dv(b){return 0===b?a(d[1],hK):a(d[1],hL)}function
bn(i,f,bQ,j,w){var
o=0,k=0,b=w[2];for(;;){if(typeof
b==="number")var
g=a(d[1],hT);else
switch(b[0]){case
0:var
o=1,b=b[1];continue;case
1:var
k=1,b=b[1];continue;case
2:var
o=1,k=1,b=b[1];continue;case
3:var
m=b[1];if(0===o)if(0===k)var
H=function(a){return al(f,a)},I=am(f,j,function(a){return Y(H,a)},m),J=a(d[17],0),K=a(d[1],hU),L=c(d[14],K,J),g=c(d[14],L,I);else
var
M=function(a){return al(f,a)},N=am(f,j,function(a){return Y(M,a)},m),O=a(d[17],0),P=a(d[1],hV),Q=c(d[14],P,O),g=c(d[14],Q,N);else
if(0===k)var
R=function(a){return al(f,a)},T=am(f,j,function(a){return Y(R,a)},m),U=a(d[17],0),V=a(d[1],hW),W=c(d[14],V,U),g=c(d[14],W,T);else
var
X=function(a){return al(f,a)},Z=am(f,j,function(a){return Y(X,a)},m),_=a(d[17],0),$=a(d[1],hX),aa=c(d[14],$,_),g=c(d[14],aa,Z);break;case
4:var
ab=b[2],ac=am(f,j,function(a){return Y(f,a)},ab),ad=a(d[17],0),ae=0===b[1]?a(d[1],hR):a(d[1],hS),af=a(d[17],0),ag=k?a(d[1],hY):a(d[1],hZ),ah=c(d[14],ag,af),ai=c(d[14],ah,ae),aj=c(d[14],ai,ad),g=c(d[14],aj,ac);break;case
5:var
ak=b[1],an=am(f,j,function(b){var
e=al(f,b[2]),g=a(d[17],0),h=a(d[1],hI),j=a(d[17],0),k=az(i,f,ay,0,0,hJ,b[1]),l=c(d[14],k,j),m=c(d[14],l,h),n=c(d[14],m,g);return c(d[14],n,e)},ak),ao=a(d[1],h0),g=c(d[14],ao,an);break;case
6:var
ap=az(i,f,ay,0,0,h1,b[1]),aq=a(d[1],h2),g=c(d[14],aq,ap);break;case
7:var
ar=aS(i,f,ay,0,1,h3,b[1]),as=a(d[1],h4),g=c(d[14],as,ar);break;case
8:var
at=aS(i,f,ay,0,0,h5,b[1]),au=a(d[1],h6),g=c(d[14],au,at);break;case
9:var
av=a(f,b[1]),aw=a(d[1],h7),ax=a(d[17],0),aA=aS(i,f,ay,0,0,h8,b[2]),aB=a(d[1],h9),aC=c(d[14],aB,aA),aD=c(d[14],aC,ax),aE=c(d[14],aD,aw),g=c(d[14],aE,av);break;case
10:var
aF=Y(f,b[1]),aG=a(d[17],0),aH=a(d[1],h_),aI=c(d[14],aH,aG),g=c(d[14],aI,aF);break;case
11:var
aJ=Y(f,b[1]),aK=a(d[17],0),aL=a(d[1],h$),aM=c(d[14],aL,aK),g=c(d[14],aM,aJ);break;case
12:var
aN=a(f,b[3]),aO=a(d[1],ia),aP=a(d[17],0),aQ=b[2],aR=function(b){var
e=a(d[1],ib),f=a(i,b),g=a(d[1],ic),h=c(d[14],g,f);return c(d[14],h,e)},aT=e(d[54],d[17],aR,aQ),aU=a(d[17],0),aV=a(S[1],b[1]),aW=a(d[17],0),aX=a(d[1],id),aY=c(d[14],aX,aW),aZ=c(d[14],aY,aV),a0=c(d[14],aZ,aU),a1=c(d[14],a0,aT),a2=c(d[14],a1,aP),a3=c(d[14],a2,aO),g=c(d[14],a3,aN);break;case
13:var
a4=a(f,b[2]),a5=a(d[17],0),a6=a(d[1],ie),a7=a(d[17],0),a8=al(S[1],b[1]),a9=a(d[17],0),a_=a(d[1],ig),a$=c(d[14],a_,a9),ba=c(d[14],a$,a8),bb=c(d[14],ba,a7),bc=c(d[14],bb,a6),bd=c(d[14],bc,a5),g=c(d[14],bd,a4);break;case
14:var
be=az(i,f,ay,0,0,ih,b[1]),bf=a(d[1],ii),g=c(d[14],bf,be);break;case
15:var
r=b[3],s=b[1];if(0===r)var
t=a(d[9],0);else
var
bv=0,bw=0,bx=az(i,function(a){return al(f,a)},hE,bw,bv,io,r),by=a(d[1],ip),bz=a(d[17],0),bA=c(d[14],bz,by),t=c(d[14],bA,bx);if(0===s)var
u=a(d[9],0);else
var
bm=a(d[17],0),bn=function(b){var
e=a(d[1],ik),f=a(i,b),g=a(d[1],il),h=c(d[14],g,f);return c(d[14],h,e)},bo=e(d[54],d[17],bn,s),bp=a(d[17],0),bq=a(d[1],im),br=a(d[17],0),bs=c(d[14],br,bq),bt=c(d[14],bs,bp),bu=c(d[14],bt,bo),u=c(d[14],bu,bm);var
bg=a(bQ,b[2]),bh=a(d[17],0),bi=a(d[1],ij),bj=c(d[14],bi,bh),bk=c(d[14],bj,bg),bl=c(d[14],bk,u),g=c(d[14],bl,t);break;case
16:var
bB=e(d[54],d[44],f,b[1]),bC=a(d[17],0),bD=a(d[1],iq),bE=c(d[14],bD,bC),g=c(d[14],bE,bB);break;case
17:var
p=b[2];if(0===p[0])var
y=a(f,p[1]),z=a(d[17],0),A=a(d[1],hP),B=c(d[14],A,z),v=c(d[14],B,y);else
var
C=p[1],D=am(f,j,function(a){return Y(f,a)},C),E=a(d[17],0),F=a(d[1],hQ),G=c(d[14],F,E),v=c(d[14],G,D);var
bF=a(d[17],0),bG=dv(b[1]),bH=a(d[17],0),bI=a(d[1],ir),bJ=c(d[14],bI,bH),bK=c(d[14],bJ,bG),bL=c(d[14],bK,bF),g=c(d[14],bL,v);break;default:var
q=b[1];if(typeof
q==="number")switch(q){case
0:var
n=a(d[1],hM);break;case
1:var
n=a(d[1],hN);break;default:var
n=a(d[1],hO)}else
var
n=dv(q[1]);var
bM=a(d[17],0),bN=a(d[1],is),bO=c(d[14],bN,bM),g=c(d[14],bO,n)}var
bR=a(d[17],0),x=w[1];if(3<x>>>0)var
bP=a(d[1],it),l=e(h[3],0,0,bP);else
switch(x){case
0:var
l=a(d[1],iu);break;case
1:var
l=a(d[1],iv);break;case
2:var
l=a(d[1],iw);break;default:var
l=a(d[1],ix)}var
bS=c(d[14],l,bR);return c(d[14],bS,g)}}function
iy(g,f,e,b){var
h=a(e,bm[29]),i=b4[24];return bn(function(h){var
b=h[2],e=b[2],f=b[1];if(e){var
i=a(d[1],iz),j=a(g,e[1]),k=a(d[1],iA),l=a(S[1],f),m=a(d[1],iB),n=c(d[14],m,l),o=c(d[14],n,k),p=c(d[14],o,j);return c(d[14],p,i)}return a(S[1],f)},f,i,h,b)}function
iC(g,f,e,b){var
h=a(e,bm[29]),i=b4[24];return bn(function(h){var
b=h[2],e=b[2],f=b[1];if(e){var
i=a(d[1],iD),j=a(g,e[1]),k=a(d[1],iE),l=a(S[1],f),m=a(d[1],iF),n=c(d[14],m,l),o=c(d[14],n,k),p=c(d[14],o,j);return c(d[14],p,i)}return a(S[1],f)},f,i,h,b)}var
aT=[0,bn,iy,iC,function(e,d,c,b){var
f=a(c,bm[29]);function
g(b){return a(b4[24],b[6])}return bn(function(a){return Y(e,a)},d,g,f,b)}];aA(465,aT,"Decl_mode_plugin.Ppdecl_proof");a(iG[12],iJ);function
b9(f){var
j=a(t[68],f),k=a(m[2],f),g=c(B[4][13],k,j),b=g[2],h=g[1],i=c(B[4][1],b,h),l=c(B[4][4],b,h),n=e(ad[19],i,b,l),o=a(d[18],0),p=a(d[1],iK),q=a(d[18],0),r=a(d[1],iL),s=a(d[18],0),u=c(ad[61],i,b),v=c(d[14],u,s),w=c(d[14],v,r),x=c(d[14],w,q),y=c(d[14],x,p),z=c(d[14],y,o),A=c(d[14],z,n),C=c(d[28],0,A),D=a(d[1],iM),E=a(d[6],0),F=a(d[6],0),G=a(d[1],iN),H=c(d[14],G,F),I=c(d[14],H,E),J=c(d[14],I,D);return c(d[14],J,C)}function
dw(e,q,f,p,o,n,b){var
g=e?e[1]:1;if(b)if(!b[2])if(g)return b9([0,b[1],f]);var
h=a(G[12],0),i=a(x[13],h),j=a(d[1],iO),k=a(d[1],i),l=a(d[1],iP),m=c(d[14],l,k);return c(d[14],m,j)}function
iQ(h,b){var
a=b[2],d=b[1],f=c(B[4][1],a,d),g=c(x[8],a,d);return e(aK[2],g,f,a)}function
dx(c){var
b=a(G[12],0);return a(w[7],b)?a(h[6],iR):(a(aR[1],0),a(G[10],iS))}function
dy(b){a(aR[2],0);return a(G[10],iT)}function
dz(b){return a(aR[7],b)}var
ao=a(an[2],iU),bp=a(k[1][10],iV),iW=a(an[4],ao),dA=e(k[13],k[9],iX,iW);L(bm[1],ao,aT[2],aT[3],aT[4]);function
dB(d){var
a=d[2];if(typeof
a==="number")var
b=1;else
if(18===a[0])var
c=a[1],b=typeof
c==="number"?0===c?1:0:0;else
var
b=0;return b?iY:bo[7]}try{var
pl=0,pn=[0,[0,0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(an[4],ao),f=c(an[8],e,d);return function(a){return dz(f)}}return a(E[2],pm)}],pl],po=function(b,a){return e(b5[1],a[1],[0,pp,b],a[2])};c(aa[80],po,pn);var
pq=0,ps=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(an[4],ao),f=c(an[8],e,d);return function(a){return dB(f)}}return a(E[2],pr)},pq],pt=function(b,a){return c(bo[3],[0,pu,b],a)};c(aa[80],pt,ps)}catch(b){b=C(b);if(!a(h[22],b))throw b;var
iZ=c(h[18],0,b),i2=c(E[16],i1,i0),i4=c(E[16],i3,i2),i5=a(d[1],i4),i6=c(d[13],i5,iZ);a(aw[13],i6)}var
i7=[6,a(k[12],ao)],i8=a(an[4],ao),i9=[0,[0,[1,u[4],i8,i7],0],0];function
i_(b,a){return e(b7[1],[0,i$,b],[0,bp],a)}c(aa[80],i_,i9);var
ja=0,jb=0;function
jc(b,c){return a(b,jd)}e(k[1][7],bp,je,[0,[0,0,0,[0,[0,[0,[2,iH[10]],0],jc],jb]],ja]);function
jf(b){a(k[21],k[18][8]);return a(ad[84],ad[85])}var
jh=[0,jg,function(b){a(k[21],bp);return a(ad[84],[0,dw,ad[85][2],b9])},jf];a(G[1],jh);try{var
pa=0,pc=[0,[0,0,function(b){return b?a(E[2],pb):function(a){return dx(0)}}],pa],pd=function(b,a){return e(b5[1],a[1],[0,pe,b],a[2])};c(aa[80],pd,pc);var
pf=0,pi=[0,function(b){return b?a(E[2],pg):function(a){return ph}},pf],pj=function(b,a){return c(bo[3],[0,pk,b],a)};c(aa[80],pj,pi)}catch(b){b=C(b);if(!a(h[22],b))throw b;var
ji=c(h[18],0,b),jl=c(E[16],jk,jj),jn=c(E[16],jm,jl),jo=a(d[1],jn),jp=c(d[13],jo,ji);a(aw[13],jp)}function
jr(b,a){return e(b7[1],[0,js,b],0,a)}c(aa[80],jr,jq);try{var
o1=0,o3=[0,[0,0,function(b){return b?a(E[2],o2):function(a){return dy(0)}}],o1],o4=function(b,a){return e(b5[1],a[1],[0,o5,b],a[2])};c(aa[80],o4,o3);var
o6=0,o9=[0,function(b){return b?a(E[2],o7):function(a){return o8}},o6],o_=function(b,a){return c(bo[3],[0,o$,b],a)};c(aa[80],o_,o9)}catch(b){b=C(b);if(!a(h[22],b))throw b;var
jt=c(h[18],0,b),jw=c(E[16],jv,ju),jy=c(E[16],jx,jw),jz=a(d[1],jy),jA=c(d[13],jz,jt);a(aw[13],jA)}function
jC(b,a){return e(b7[1],[0,jD,b],0,a)}c(aa[80],jC,jB);function
b_(a){var
b=a?a[1]:a;return b}var
r=k[1][5][1],bq=a(r,jE),A=a(r,jF),br=a(r,jG),aU=a(r,jH),bs=a(r,jI),bt=a(r,jJ),aV=a(r,jK),bu=a(r,jL),b$=a(r,jM),dC=a(r,jN),dD=a(r,jO),ca=a(r,jP),cb=a(r,jQ),dE=a(r,jR),cc=a(r,jS),v=a(r,jT),cd=a(r,jU),dF=a(r,jV),ce=a(r,jW),cf=a(r,jX),cg=a(r,jY),ch=a(r,jZ),ci=a(r,j0),dG=a(r,j1),cj=a(r,j2),dH=a(r,j3),ck=a(r,j4),dI=a(r,j5),cl=a(r,j6),cm=a(r,j7),dJ=a(r,j8),dK=a(r,j9),dL=a(r,j_),dM=a(r,j$),ka=0,kb=0,kd=[0,[0,kc,function(b,a){return 0}],kb];function
ke(a,d,c,b){return[0,a]}e(k[1][7],bq,0,[0,[0,0,0,[0,[0,[0,kg,[0,kf,[0,[2,k[15][6]],0]]],ke],kd]],ka]);var
kh=0,ki=0;function
kj(b,d,a,c){return[0,[0,a],b]}var
kl=[0,[0,[0,[2,k[15][6]],[0,kk,[0,[2,k[15][1]],0]]],kj],ki];function
km(c,b){return[0,0,[0,[1,[0,a(b8[10],b),c]],0]]}var
kn=[0,[0,[0,[2,k[15][6]],0],km],kl];function
ko(a,b){return[0,0,a]}e(k[1][7],A,0,[0,[0,0,0,[0,[0,[0,[2,k[15][1]],0],ko],kn]],kh]);var
kp=0,kq=0;function
kr(a,b){return[0,a]}var
ks=[0,[0,0,0,[0,[0,[0,[2,k[15][1]],0],kr],kq]],kp],kt=0,ku=[0,[0,0,0,[0,[0,[0,[2,bq],0],function(a,b){return[1,a]}],kt]],ks];e(k[1][7],br,0,ku);var
kv=0,kw=0;function
kx(b,d,a,c){return[0,[0,a],b]}var
kz=[0,[0,[0,[2,k[15][6]],[0,ky,[0,[2,br],0]]],kx],kw];function
kA(c,b){return[0,0,[0,[0,[1,[0,a(b8[10],b),c]],0]]]}var
kB=[0,[0,[0,[2,k[15][6]],0],kA],kz];function
kC(a,b){return[0,0,[0,a]]}var
kD=[0,[0,0,0,[0,[0,[0,[2,k[15][1]],0],kC],kB]],kv],kE=0,kF=[0,[0,0,0,[0,[0,[0,[2,bq],0],function(a,b){return[0,0,[1,a]]}],kE]],kD];e(k[1][7],aU,0,kF);var
kG=0,kH=0,kJ=[0,[0,0,function(a){return kI}],kH];function
kK(a,c,b){return[0,a]}var
kN=[0,[0,[0,kM,[0,[7,[2,k[15][1]],kL,0],0]],kK],kJ],kP=[0,[0,0,0,[0,[0,kO,function(c,b,a){return 0}],kN]],kG];e(k[1][7],bs,0,kP);var
kQ=0,kR=0,kS=[0,[0,0,function(a){return 0}],kR];function
kT(a,c,b){return[0,a]}e(k[1][7],bt,0,[0,[0,0,0,[0,[0,[0,kU,[0,[2,k[17][18]],0]],kT],kS]],kQ]);var
kV=0,kW=0,kX=[0,[0,0,0,[0,[0,[0,[2,aU],[0,[2,bs],[0,[2,bt],0]]],function(c,b,a,d){return[0,a,b,c]}],kW]],kV];e(k[1][7],aV,0,kX);var
kY=0,kZ=0,k0=[0,[0,0,0,[0,[0,[0,[2,A],[0,[2,bs],[0,[2,bt],0]]],function(c,b,a,d){return[0,a,b,c]}],kZ]],kY];e(k[1][7],bu,0,k0);var
k1=0,k2=0,k4=[0,[0,k3,function(b,a){return 1}],k2],k6=[0,[0,0,0,[0,[0,k5,function(b,a){return 0}],k4]],k1];e(k[1][7],b$,0,k6);var
k7=0,k8=0,k_=[0,[0,k9,function(b,a){return 1}],k8],la=[0,[0,k$,function(b,a){return 2}],k_],lc=[0,[0,lb,function(b,a){return 0}],la],ld=[0,[0,0,0,[0,[0,[0,[2,b$],0],function(a,b){return[0,a]}],lc]],k7];e(k[1][7],dC,0,ld);var
le=0,lf=0;function
lg(a,c,b){return[0,a]}var
li=[0,[0,[0,lh,[0,[2,k[15][1]],0]],lg],lf],lk=[0,[0,0,0,[0,[0,[0,lj,[0,[2,bu],0]],function(a,c,b){return[1,a]}],li]],le];e(k[1][7],dD,0,lk);var
ll=0,lm=0;function
ln(b,e,a,d,c){return[9,b,a]}var
lq=[0,[0,[0,lp,[0,[2,cd],[0,lo,[0,[2,k[15][1]],0]]]],ln],lm],ls=[0,[0,[0,lr,[0,[2,b$],[0,[2,dD],0]]],function(b,a,d,c){return[17,a,b]}],lq],lu=[0,[0,0,0,[0,[0,[0,lt,[0,[2,dG],[0,[2,bs],[0,[2,bt],0]]]],function(c,b,a,e,d){return[5,[0,a,b,c]]}],ls]],ll];e(k[1][7],ca,0,lu);var
lv=0,lw=0,ly=[0,[0,[0,lx,[0,[2,bu],0]],function(a,c,b){return[0,1,a]}],lw],lA=[0,[0,0,0,[0,[0,[0,lz,[0,[2,bu],0]],function(a,c,b){return[0,0,a]}],ly]],lv];e(k[1][7],cb,0,lA);var
lB=0,lC=0,lE=[0,[0,[0,lD,[0,[2,ca],0]],function(a,c,b){return[0,a]}],lC],lG=[0,[0,[0,lF,[0,[2,aV],0]],function(a,c,b){return[0,[3,a]]}],lE],lI=[0,[0,[0,lH,[0,[2,cb],0]],function(a,c,b){return[1,[4,a[1],a[2]]]}],lG],lK=[0,[0,[0,lJ,[0,[2,aV],0]],function(a,c,b){return[1,[3,a]]}],lI],lM=[0,[0,[0,lL,[0,[2,aV],0]],function(a,c,b){return[2,[3,a]]}],lK],lN=[0,[0,[0,[2,ca],0],function(a,b){return a}],lM],lO=[0,[0,[0,[2,cb],0],function(a,b){return[4,a[1],a[2]]}],lN],lQ=[0,[0,[0,lP,[0,[2,aV],0]],function(a,c,b){return[3,a]}],lO],lS=[0,[0,[0,lR,[0,[2,A],0]],function(a,c,b){return[10,a]}],lQ],lV=[0,[0,[0,lU,[0,lT,[0,[2,A],0]]],function(a,d,c,b){return[11,a]}],lS],lX=[0,[0,[0,lW,[0,[2,dC],0]],function(a,c,b){return[18,a]}],lV],lZ=[0,[0,0,0,[0,[0,lY,function(b,a){return 0}],lX]],lB];e(k[1][7],dE,0,lZ);var
l0=0,l1=0;function
l2(d,c,b){return[0,a(b8[10],c),[0,d,b]]}e(k[1][7],cc,0,[0,[0,0,0,[0,[0,[0,[2,k[15][6]],0],l2],l1]],l0]);var
l3=0,l4=0,l5=[0,[0,[0,[2,cc],0],function(b,c){return a(b,0)}],l4];function
l6(c,e,b,d){return a(b,[0,c])}e(k[1][7],v,0,[0,[0,0,0,[0,[0,[0,[2,cc],[0,l7,[0,[2,k[15][1]],0]]],l6],l5]],l3]);var
l8=0,l9=0,l_=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],l9],ma=[0,[0,[0,[2,v],l$],function(b,d,a,c){return[0,[0,a],b]}],l_],md=[0,[0,0,0,[0,[0,[0,[2,v],[0,mc,[0,mb,[0,[2,dF],0]]]],function(b,e,d,a,c){return[0,[0,a],b]}],ma]],l8];e(k[1][7],cd,0,md);var
me=0,mf=0,mh=[0,[0,[0,[2,A],mg],function(b,d,a,c){return[0,[1,a],b]}],mf],mk=[0,[0,[0,[2,A],[0,mj,[0,mi,[0,[2,cd],0]]]],function(b,e,d,a,c){return[0,[1,a],b]}],mh],ml=[0,[0,0,0,[0,[0,[0,[2,A],0],function(a,b){return[0,[1,a],0]}],mk]],me];e(k[1][7],dF,0,ml);var
mm=0,mn=0,mo=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],mn],mq=[0,[0,[0,[2,v],mp],function(b,d,a,c){return[0,[0,a],b]}],mo],mt=[0,[0,0,0,[0,[0,[0,[2,v],[0,ms,[0,mr,[0,[2,cf],0]]]],function(b,e,d,a,c){return[0,[0,a],b]}],mq]],mm];e(k[1][7],ce,0,mt);var
mu=0,mv=0,mx=[0,[0,[0,[2,A],mw],function(b,d,a,c){return[0,[1,a],b]}],mv],mB=[0,[0,[0,[2,A],[0,mA,[0,mz,[0,my,[0,[2,ce],0]]]]],function(b,f,e,d,a,c){return[0,[1,a],b]}],mx],mC=[0,[0,0,0,[0,[0,[0,[2,A],0],function(a,b){return[0,[1,a],0]}],mB]],mu];e(k[1][7],cf,0,mC);var
mD=0,mE=0,mH=[0,[0,[0,mG,[0,mF,[0,[2,ce],0]]],function(a,d,c,b){return a}],mE],mI=[0,[0,0,0,[0,[0,[0,[2,cf],0],function(a,b){return a}],mH]],mD];e(k[1][7],cg,0,mI);var
mJ=0,mK=0,mN=[0,[0,[0,[2,v],[0,mM,[0,mL,[0,[2,br],0]]]],function(b,e,d,a,c){return[0,[0,[0,a],0],b]}],mK],mP=[0,[0,[0,[2,v],mO],function(a,d,b,c){return[0,[0,[0,b],a[1]],a[2]]}],mN],mS=[0,[0,0,0,[0,[0,[0,[2,v],[0,mR,[0,mQ,[0,[2,ci],0]]]],function(a,e,d,b,c){return[0,[0,[0,b],a[1]],a[2]]}],mP]],mJ];e(k[1][7],ch,0,mS);var
mT=0,mU=0,mW=[0,[0,[0,[2,A],mV],function(a,d,b,c){return[0,[0,[1,b],a[1]],a[2]]}],mU],m0=[0,[0,[0,[2,A],[0,mZ,[0,mY,[0,mX,[0,[2,ch],0]]]]],function(a,f,e,d,b,c){return[0,[0,[1,b],a[1]],a[2]]}],mW],m3=[0,[0,0,0,[0,[0,[0,[2,A],[0,m2,[0,m1,[0,[2,br],0]]]],function(b,e,d,a,c){return[0,[0,[1,a],0],b]}],m0]],mT];e(k[1][7],ci,0,m3);var
m4=0,m5=0,m8=[0,[0,[0,m7,[0,m6,[0,[2,ch],0]]],function(a,d,c,b){return a}],m5],m9=[0,[0,0,0,[0,[0,[0,[2,ci],0],function(a,b){return a}],m8]],m4];e(k[1][7],dG,0,m9);var
m_=0,m$=0,na=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],m$],nc=[0,[0,[0,[2,v],nb],function(b,d,a,c){return[0,[0,a],b]}],na],ng=[0,[0,0,0,[0,[0,[0,[2,v],[0,nf,[0,ne,[0,nd,[0,[2,dH],0]]]]],function(b,f,e,d,a,c){return[0,[0,a],b]}],nc]],m_];e(k[1][7],cj,0,ng);var
nh=0,ni=0,nk=[0,[0,[0,[2,A],nj],function(b,d,a,c){return[0,[1,a],b]}],ni],nn=[0,[0,[0,[2,A],[0,nm,[0,nl,[0,[2,cj],0]]]],function(b,e,d,a,c){return[0,[1,a],b]}],nk],no=[0,[0,0,0,[0,[0,[0,[2,A],0],function(a,b){return[0,[1,a],0]}],nn]],nh];e(k[1][7],dH,0,no);var
np=0,nq=0,nr=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],nq],nt=[0,[0,[0,[2,v],ns],function(b,d,a,c){return[0,[0,a],b]}],nr],nw=[0,[0,0,0,[0,[0,[0,[2,v],[0,nv,[0,nu,[0,[2,dI],0]]]],function(b,e,d,a,c){return[0,[0,a],b]}],nt]],np];e(k[1][7],ck,0,nw);var
nx=0,ny=0,nA=[0,[0,[0,[2,A],nz],function(b,d,a,c){return[0,[1,a],b]}],ny],nD=[0,[0,[0,[2,A],[0,nC,[0,nB,[0,[2,ck],0]]]],function(b,e,d,a,c){return[0,[1,a],b]}],nA],nE=[0,[0,0,0,[0,[0,[0,[2,A],0],function(a,b){return[0,[1,a],0]}],nD]],nx];e(k[1][7],dI,0,nE);var
nF=0,nG=0,nH=[0,[0,[0,[2,v],0],function(a,b){return[0,[0,a],0]}],nG],nJ=[0,[0,[0,[2,v],nI],function(b,d,a,c){return[0,[0,a],b]}],nH];function
nK(b,f,e,d,a,c){return[0,[0,a],b]}var
nN=[0,nM,[0,nL,[0,[2,cm],0]]],nO=0,nQ=[0,[0,nP,function(a,b){return a}],nO],nR=[0,[0,0,0,[0,[0,[0,[2,v],[0,[8,a(b6[2],nQ)],nN]],nK],nJ]],nF];e(k[1][7],cl,0,nR);var
nS=0,nT=0,nV=[0,[0,[0,[2,aU],nU],function(b,d,a,c){return[0,[1,a],b]}],nT],nZ=[0,[0,[0,[2,aU],[0,nY,[0,nX,[0,nW,[0,[2,cl],0]]]]],function(b,f,e,d,a,c){return[0,[1,a],b]}],nV],n0=[0,[0,0,0,[0,[0,[0,[2,aU],0],function(a,b){return[0,[1,a],0]}],nZ]],nS];e(k[1][7],cm,0,n0);var
n1=0,n2=0,n5=[0,[0,[0,n4,[0,n3,[0,[2,cl],0]]],function(a,d,c,b){return a}],n2],n6=[0,[0,0,0,[0,[0,[0,[2,cm],0],function(a,b){return a}],n5]],n1];e(k[1][7],dJ,0,n6);var
n7=0,n8=0,n_=[0,[0,[0,n9,[0,[2,cg],0]],function(a,c,b){return[14,a]}],n8];function
n$(c,b,a,h,g,f,e){var
d=b_(c);return[15,b_(b),a,d]}var
oa=0,ob=0,od=[0,[0,[0,oc,[0,[2,dJ],0]],function(a,c,b){return a}],ob],oe=[0,[8,a(b6[2],od)],oa],of=0,oi=[0,[0,[0,oh,[0,[7,[2,v],og,0],0]],function(a,c,b){return a}],of],oj=[0,[8,a(b6[2],oi)],oe],oo=[0,[0,[0,on,[0,om,[0,ol,[0,[3,k[15][9],ok],oj]]]],n$],n_],oq=[0,[0,[0,op,[0,[2,cj],0]],function(a,c,b){return[7,a]}],oo];function
or(a,c,b){return[16,a]}var
ou=[0,[0,[0,ot,[0,[7,[2,k[15][1]],os,0],0]],or],oq],ow=[0,[0,[0,ov,[0,[2,cg],0]],function(a,c,b){return[6,a]}],ou],oy=[0,[0,[0,ox,[0,[2,ck],0]],function(a,c,b){return[8,a]}],ow];function
oz(c,f,b,a,e,d){return[12,a,b,c]}var
oC=[0,[0,[0,oB,[0,[2,k[15][6]],[0,[4,[2,v]],[0,oA,[0,[2,k[15][1]],0]]]]],oz],oy];function
oD(b,e,a,d,c){return[13,[0,a],b]}var
oG=[0,[0,[0,oF,[0,[2,k[15][6]],[0,oE,[0,[2,k[15][1]],0]]]],oD],oC];function
oH(b,e,a,d,c){return[13,[1,a],b]}e(k[1][7],dK,0,[0,[0,0,0,[0,[0,[0,oJ,[0,[2,bq],[0,oI,[0,[2,k[15][1]],0]]]],oH],oG]],n7]);var
oK=0,oL=0,oM=[0,[0,0,function(a){return 0}],oL],oO=[0,[0,oN,function(b,a){return 1}],oM],oQ=[0,[0,oP,function(b,a){return 2}],oO],oS=[0,[0,0,0,[0,[0,oR,function(b,a){return 3}],oQ]],oK];e(k[1][7],dL,0,oS);var
oT=0,oU=0,oV=[0,[0,[0,[2,dE],0],function(a,b){return a}],oU],oW=[0,[0,0,0,[0,[0,[0,[2,dK],0],function(a,b){return a}],oV]],oT];e(k[1][7],dM,0,oW);var
oX=0,oY=0,o0=[0,[0,0,0,[0,[0,[0,[2,dL],[0,[2,dM],oZ]],function(d,b,a,c){return[0,a,b]}],oY]],oX];e(k[1][7],dA,0,o0);var
dN=[0,iI,b9,dw,iQ,dx,dy,dz,ao,bp,dA,dB,b_];aA(476,dN,"Decl_mode_plugin.G_decl_mode");aA(477,[0,x,aK,aR,aT,dN],"Decl_mode_plugin");return});
