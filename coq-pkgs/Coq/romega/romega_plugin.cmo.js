(function(ja){"use strict";var
cg="xO",cl=" - ",cm="not",cB=140,bq=": ",j=250,ck="Z.succ",cz="not a number",cA="Z.pred",bt="Z.opp",cq="xH",aZ="Zpos",G=124,cy="REIFED PROBLEM\n\n",e=246,cj="FF",bo="Z.sub",bu=119,cH="romega_plugin",ct="True",at="Z",cx="Extension: cannot occur",R="romega",cw="\n====================================\n",bs="N",cE="False",cs="with",bp="Z.mul",cD="Prop",br="romega'",aY="",cp="or",cv="TT",a0="Omega",cf="=SYSTEM===================================\n",co="Exception in tactic extend ",aX="Zneg",S=136,bn="Z.add",ci="positive",aW="Z0",cu="  Depends on:",cC="nat",cG="  CONCL: ",cr="and",cF="Omega: Can't solve a goal with non-linear products",ce="C_MULT_OPP_LEFT",ch="\n------------------------------------\n",cn="\n",cd="xI",_="Coq",z=ja.jsoo_runtime,Z=z.caml_equal,b=z.caml_new_string,i=z.caml_obj_tag,aV=z.caml_register_global,n=z.caml_string_notequal,t=z.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):z.caml_call_gen(a,[b])}function
d(a,b,c){return a.length==2?a(b,c):z.caml_call_gen(a,[b,c])}function
u(a,b,c,d){return a.length==3?a(b,c,d):z.caml_call_gen(a,[b,c,d])}function
bm(a,b,c,d,e){return a.length==4?a(b,c,d,e):z.caml_call_gen(a,[b,c,d,e])}function
i$(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):z.caml_call_gen(a,[b,c,d,e,f])}function
af(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):z.caml_call_gen(a,[b,c,d,e,f,g])}function
cc(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):z.caml_call_gen(a,[b,c,d,e,f,g,h])}var
p=z.caml_get_global_data(),Y=b(cH),g=p.CamlinternalLazy,s=p.Term,r=p.Bigint,B=p.Errors,a2=p.Tacmach,au=p.Logic,w=p.Names,k=p.Pervasives,a1=p.Univ,I=p.Coqlib,bv=p.Global,a3=p.Nametab,f=p.Util,l=p.Printf,E=p.Hashtbl,H=p.Not_found,$=p.Tactics,U=p.Proofview,bI=p.Invalid_argument,v=p.Pp,a6=p.Feedback,aa=p.Tacticals,ca=p.Constrarg,b_=p.Loc,bl=p.List,b$=p.Genarg,b9=p.Tacinterp,aT=p.Tacenv,bk=p.Mltop,bw=[0,b(_),[0,b(R),[0,b("ReflOmegaCore"),0]]],gI=b(bn),gJ=b(bp),gK=b(bt),gL=b(cA),gM=b(bo),gN=b(ck),gO=b(aW),gP=b(aX),gQ=b(aZ),gB=b("Z.ge"),gC=b("Z.gt"),gD=b("Z.le"),gE=b("Z.lt"),gF=b("Zne"),gG=b("eq"),gH=[1,b(at),0],gr=b(bn),gs=b(bp),gt=b(bt),gu=b(cA),gv=b(bo),gw=b(ck),gx=b(aW),gy=b(aX),gz=b(aZ),gi=b(cq),gj=b(cd),gk=b(cg),gl=b(cz),gm=b(aW),gn=b(aX),go=b(aZ),gp=b(cz),gh=b(aX),gg=b(aZ),gf=b(aW),ge=b(cd),gd=b(cg),gc=b(cq),ga=b(bo),f_=b(bt),f8=b(bp),f6=b(bn),f4=b(at),fY=b(cE),fZ=b(ct),f0=b(cr),f1=b("iff"),f2=b(cm),f3=b(cp),fS=b("nil"),fR=b("cons"),fP=[0,b("Init"),[0,b("Datatypes"),0]],fQ=b(aY),fO=b("O"),fN=b("S"),fK=b("do_omega"),fI=b("interp_goal_concl"),fG=b("E_SOLVE"),fE=b("E_EXTRACT"),fC=b("E_SPLIT"),fA=b("D_mono"),fy=b("D_right"),fw=b("D_left"),fu=b("direction"),fs=b("O_NEGATE_CONTRADICT_INV"),fq=b("O_NEGATE_CONTRADICT"),fo=b("O_CONSTANT_NUL"),fm=b("O_SPLIT_INEQ"),fk=b("O_MERGE_EQ"),fi=b("O_CONTRADICTION"),fg=b("O_STATE"),fe=b("O_SUM"),fc=b("O_EXACT_DIVIDE"),fa=b("O_NOT_EXACT_DIVIDE"),e_=b("O_DIV_APPROX"),e8=b("O_CONSTANT_NEG"),e6=b("O_CONSTANT_NOT_NUL"),e4=b("C_MULT_COMM"),e2=b("C_MINUS"),e0=b("C_MULT_ASSOC_REDUCED"),eY=b(ce),eW=b("C_RED6"),eU=b("C_RED5"),eS=b("C_RED4"),eQ=b("C_RED3"),eO=b("C_RED2"),eM=b("C_RED1"),eK=b("C_RED0"),eI=b("C_PLUS_COMM"),eG=b("C_PLUS_PERMUTE"),eE=b("C_PLUS_ASSOC_L"),eC=b("C_PLUS_ASSOC_R"),eA=b("C_MULT_ASSOC_R"),ey=b(ce),ew=b("C_MULT_PLUS_DISTR"),eu=b("C_REDUCE"),es=b("C_OPP_ONE"),eq=b("C_OPP_MULT_R"),eo=b("C_OPP_OPP"),em=b("C_OPP_PLUS"),el=b("C_NOP"),ek=b("C_SEQ"),ej=b("C_RIGHT"),ei=b("C_LEFT"),eh=b("C_DO_BOTH"),ef=b("F_right"),ed=b("F_left"),eb=b("F_cancel"),d$=b("F_equal"),d_=b("t_fusion"),d8=b("Tprop"),d6=b("Timp"),d4=b("Tand"),d2=b("Tor"),d0=b("Tnot"),dY=b("FalseTerm"),dW=b("TrueTerm"),dU=b("NeqTerm"),dS=b("GtTerm"),dQ=b("LtTerm"),dO=b("GeqTerm"),dM=b("LeqTerm"),dK=b("EqTerm"),dI=b("proposition"),dG=b("Tvar"),dE=b("Tminus"),dC=b("Topp"),dA=b("Tmult"),dy=b("Tplus"),dw=b("Tint"),du=b("P_STEP"),ds=b("P_INVERT"),dq=b("P_RIGHT"),dn=b("P_LEFT"),dl=b("pair_step"),dj=b("h_step"),dh=b("I"),df=b(cE),dd=b(ct),db=b(cp),c$=b(cm),c9=b(cr),c7=b("eq_refl"),cO=b("Omega: Not a quantifier-free goal"),cL=b("."),cM=b(aY),cN=b(aY),cK=[0,b(at),[0,b(bs),[0,b("Pos"),0]]],cP=b("Const_omega.Destruct"),cR=[0,b(_),[0,b("Logic"),[0,b("Decidable"),0]]],cS=[0,b("ZOmega"),0],cV=[0,[0,b(_),[0,b("Lists"),[0,b("List"),0]]],0],c1=[0,[0,b(_),[0,b("Numbers"),[0,b("BinNums"),0]]],0],c2=[0,[0,b(_),[0,b("ZArith"),[0,b("BinInt"),0]]],0],c3=b(a0),c4=b(a0),c5=b(a0),c6=b(a0),g8=[0,[2,0,0],b("%s")],g9=[0,[12,40,[15,[11,b(" + "),[15,[12,41,0]]]]],b("(%a + %a)")],g_=[0,[12,40,[15,[11,b(" * "),[15,[12,41,0]]]]],b("(%a * %a)")],g$=[0,[12,40,[15,[11,b(cl),[15,[12,41,0]]]]],b("(%a - %a)")],ha=[0,[11,b("~ "),[15,0]],b("~ %a")],hb=[0,[12,86,[4,0,[0,2,2],0,0]],b("V%02d")],hc=[0,[12,63,0],b("?")],hd=[0,[11,b(cv),0],b(cv)],he=[0,[11,b(cj),0],b(cj)],hf=b("="),hh=b("<="),hi=b(">="),hj=b(">"),hk=b("<"),hl=b("!="),hg=[0,[15,[12,32,[2,0,[12,32,[15,0]]]]],b("%a %s %a")],hm=[0,[11,b("not("),[15,[12,41,0]]],b("not(%a)")],hn=[0,[12,40,[15,[11,b(" or "),[15,[12,41,0]]]]],b("(%a or %a)")],ho=[0,[12,40,[15,[11,b(" and "),[15,[12,41,0]]]]],b("(%a and %a)")],hp=[0,[12,40,[15,[11,b(" => "),[15,[12,41,0]]]]],b("(%a => %a)")],hq=[0,[11,b(cD),0],b(cD)],hr=b("weight"),hs=b("weight minus"),hy=b(cF),hz=b("scalar minus"),hA=b(cF),hB=b("negate minus"),h1=b(" "),h2=[0,[4,0,0,0,[12,91,[2,0,[12,93,0]]]],b("%d[%s]")],h3=[0,[12,83,[4,0,0,0,[12,40,[15,[12,44,[15,[12,41,0]]]]]]],b("S%d(%a,%a)")],h4=[0,[4,0,0,0,[11,b(cl),[4,0,0,0,[12,10,0]]]],b("%d - %d\n")],h9=[0,[11,b("Cannot find constructor "),[4,0,0,0,0]],b("Cannot find constructor %d")],h_=[0,0,0],h$=[0,1,0],ia=[0,[11,b("Cannot find equation "),[4,0,0,0,0]],b("Cannot find equation %d")],ib=[0,2,0],ij=[0,b(_),[0,b(R),[0,b("ROmega"),0]]],ik=b("ROmega can't solve this system"),ie=[0,[12,32,[4,0,0,0,0]],b(" %d")],ic=[0,[11,b("SYSTEME "),[4,0,0,0,[12,10,0]]],b("SYSTEME %d\n")],id=b("\n  Depend :"),ig=b("\n  Split points :"),ih=[0,[11,b(ch),0],b(ch)],ii=[0,[11,b(cw),0],b(cw)],h7=b("not_treated"),h8=b("no contradiction"),h6=[0,[11,b("get_hyp "),[4,0,0,0,0]],b("get_hyp %d")],h5=b("find_path"),h0=b("select_smaller"),hZ=[0,[11,b(cf),0],b(cf)],hR=b("L"),hS=b("R"),hT=b("M"),hQ=[0,[11,b(cu),0],b(cu)],hU=b(aY),hV=[0,[11,b("\n  Path: "),[2,0,0]],b("\n  Path: %s")],hW=b("yes"),hY=b("no"),hX=[0,[11,b("\n  Origin: "),[2,0,[11,b(" (negated : "),[2,0,[11,b(")\n\n"),0]]]]],b("\n  Origin: %s (negated : %s)\n\n")],hP=[0,[11,b("  E"),[4,0,0,0,[11,b(" : "),[15,[12,32,[2,0,[11,b(" 0\n"),0]]]]]]],b("  E%d : %a %s 0\n")],hN=[0,[11,b(" L"),[4,0,0,0,0]],b(" L%d")],hO=[0,[11,b(" R"),[4,0,0,0,0]],b(" R%d")],hM=[0,0,0],hK=[0,[11,b("  "),[2,0,[11,b(bq),0]]],b("  %s: ")],hL=[0,[12,10,0],b(cn)],hG=[0,2,0],hH=[0,[11,b(cy),0],b(cy)],hI=[0,[11,b(cG),0],b(cG)],hJ=[0,[12,10,0],b(cn)],hF=b("condense.1"),hE=b("reduce_factor.1"),hD=b("shrink.1"),hw=[0,[4,0,0,0,[11,b(" -> "),[4,0,0,0,[12,10,0]]]],b("%d -> %d\n")],hv=[0,[11,b("Atome "),[4,0,0,0,[11,b(" non trouv\xc3\xa9\n"),0]]],b("Atome %d non trouv\xc3\xa9\n")],ht=b("CO"),hu=b("compile_equation"),g7=[0,[11,b("Omega Equation "),[4,0,0,0,[11,b(" non trouv\xc3\xa9e\n"),0]]],b("Omega Equation %d non trouv\xc3\xa9e\n")],g6=b("get_prop"),g4=b("get_reified_atom"),g3=b("unintern"),g2=[0,[11,b("OV"),[4,0,0,0,0]],b("OV%d")],gX=[0,[12,40,[0,[4,0,[0,2,2],0,[12,41,0]]]],b("(%c%02d)")],gY=b(" := "),gZ=b("  ===============================\n\n"),g0=b("ENVIRONMENT OF PROPOSITIONS :"),g1=b("ENVIRONMENT OF TERMS :"),gV=b("__goal__"),i3=[0,[0,[0,b(R)],[0,[0,b(cs)],[0,[0,b("*")],0]]],0],i4=b("$l"),i8=[0,b("plugins/romega/g_romega.ml4"),1,0],i5=[0,b(cs)],i6=[0,b(R)],i7=b(br),iY=b(cx),iW=[0,b(cC),[0,b(ci),[0,b(bs),[0,b(at),0]]]],iV=b(cx),iC=b(R),iD=b(R),is=b(bs),it=b(at),iu=b(cC),iv=b(ci),ix=b("zify_positive"),iy=b("zify_nat"),iz=b("zify_op"),iA=b("zify_N"),iw=b("No ROmega knowledge base for type "),ir=[0,b("PreOmega"),[0,b("omega"),[0,b(_),0]]],iq=b(cH),i_=b(R),iF=b(bq),iG=b(R),iI=b(co),i1=b(br),iN=b(bq),iO=b(br),iQ=b(co),cJ=p.Globnames,cI=p.Universes,gR=p.Failure,gS=p.Printer,gT=p.Omega_plugin,il=p.Assert_failure,im=p.Tacentries,io=p.String,ip=p.Array;function
a4(b){var
h=a(a3[41],b),c=a(w[5][5],h);if(c)var
e=a(w[1][7],c[1]),i=d(f[15][45][2],e,cK)?d(k[16],e,cL):cM,g=i;else
var
g=cN;var
j=a(a3[42],b),l=a(w[1][7],j);return d(k[16],g,l)}function
ag(e){var
d=a(s[39],e),c=d[2],b=a(s[cB],d[1]);switch(b[0]){case
1:if(!c)return[0,a(w[1][7],b[1])];break;case
6:if(b[1]){if(!c)return a(B[6],cO)}else
if(!c)return[2,b[2],b[3]];break;case
10:return[1,a4([1,b[1][1]]),c];case
11:return[1,a4([2,b[1][1]]),c];case
12:return[1,a4([3,b[1][1]]),c]}return 0}var
cQ=[248,cP,z.caml_fresh_oo_id(0)];function
bx(e){var
d=a(s[39],e),b=a(s[cB],d[1]);switch(b[0]){case
10:var
c=[1,b[1][1]];break;case
11:var
c=[2,b[1][1]];break;case
12:var
c=[3,b[1][1]];break;default:throw cQ}var
f=d[2];return[0,a(a3[42],c),f]}var
cT=[0,d(k[22],bw,cS),0],cU=d(k[22],[0,bw,0],cT),cW=d(k[22],cV,cU),cX=d(k[22],I[9],cW),cY=d(k[22],I[8],cX),cZ=d(k[22],[0,cR,0],cY),c0=d(k[22],I[10],cZ),J=d(I[6],c3,I[10]),h=d(I[6],c4,c0),av=d(I[6],c5,c2),T=d(I[6],c6,c1),c8=[e,function(b){return a(J,c7)}],c_=[e,function(b){return a(J,c9)}],da=[e,function(b){return a(J,c$)}],dc=[e,function(b){return a(J,db)}],de=[e,function(b){return a(J,dd)}],dg=[e,function(b){return a(J,df)}],di=[e,function(b){return a(J,dh)}],dk=[e,function(b){return a(h,dj)}],dm=[e,function(b){return a(h,dl)}],dp=[e,function(b){return a(h,dn)}],dr=[e,function(b){return a(h,dq)}],dt=[e,function(b){return a(h,ds)}],dv=[e,function(b){return a(h,du)}],dx=[e,function(b){return a(h,dw)}],dz=[e,function(b){return a(h,dy)}],dB=[e,function(b){return a(h,dA)}],dD=[e,function(b){return a(h,dC)}],dF=[e,function(b){return a(h,dE)}],dH=[e,function(b){return a(h,dG)}],dJ=[e,function(b){return a(h,dI)}],dL=[e,function(b){return a(h,dK)}],dN=[e,function(b){return a(h,dM)}],dP=[e,function(b){return a(h,dO)}],dR=[e,function(b){return a(h,dQ)}],dT=[e,function(b){return a(h,dS)}],dV=[e,function(b){return a(h,dU)}],dX=[e,function(b){return a(h,dW)}],dZ=[e,function(b){return a(h,dY)}],d1=[e,function(b){return a(h,d0)}],d3=[e,function(b){return a(h,d2)}],d5=[e,function(b){return a(h,d4)}],d7=[e,function(b){return a(h,d6)}],d9=[e,function(b){return a(h,d8)}],aw=[e,function(b){return a(h,d_)}],ea=[e,function(b){return a(h,d$)}],ec=[e,function(b){return a(h,eb)}],ee=[e,function(b){return a(h,ed)}],eg=[e,function(b){return a(h,ef)}],ah=[e,function(b){return a(h,eh)}],ai=[e,function(b){return a(h,ei)}],aj=[e,function(b){return a(h,ej)}],ak=[e,function(b){return a(h,ek)}],q=[e,function(b){return a(h,el)}],en=[e,function(b){return a(h,em)}],ep=[e,function(b){return a(h,eo)}],er=[e,function(b){return a(h,eq)}],et=[e,function(b){return a(h,es)}],ev=[e,function(b){return a(h,eu)}],ex=[e,function(b){return a(h,ew)}],ez=[e,function(b){return a(h,ey)}],eB=[e,function(b){return a(h,eA)}],eD=[e,function(b){return a(h,eC)}],eF=[e,function(b){return a(h,eE)}],eH=[e,function(b){return a(h,eG)}],eJ=[e,function(b){return a(h,eI)}],eL=[e,function(b){return a(h,eK)}],eN=[e,function(b){return a(h,eM)}],eP=[e,function(b){return a(h,eO)}],eR=[e,function(b){return a(h,eQ)}],eT=[e,function(b){return a(h,eS)}],eV=[e,function(b){return a(h,eU)}],eX=[e,function(b){return a(h,eW)}],eZ=[e,function(b){return a(h,eY)}],e1=[e,function(b){return a(h,e0)}],e3=[e,function(b){return a(h,e2)}],e5=[e,function(b){return a(h,e4)}],e7=[e,function(b){return a(h,e6)}],e9=[e,function(b){return a(h,e8)}],e$=[e,function(b){return a(h,e_)}],fb=[e,function(b){return a(h,fa)}],fd=[e,function(b){return a(h,fc)}],ff=[e,function(b){return a(h,fe)}],fh=[e,function(b){return a(h,fg)}],fj=[e,function(b){return a(h,fi)}],fl=[e,function(b){return a(h,fk)}],fn=[e,function(b){return a(h,fm)}],fp=[e,function(b){return a(h,fo)}],fr=[e,function(b){return a(h,fq)}],ft=[e,function(b){return a(h,fs)}],fv=[e,function(b){return a(h,fu)}],fx=[e,function(b){return a(h,fw)}],fz=[e,function(b){return a(h,fy)}],fB=[e,function(b){return a(h,fA)}],fD=[e,function(b){return a(h,fC)}],fF=[e,function(b){return a(h,fE)}],fH=[e,function(b){return a(h,fG)}],fJ=[e,function(b){return a(h,fI)}],fL=[e,function(b){return a(h,fK)}];function
by(b){var
c=i(q),k=j===c?q[1]:e===c?a(g[2],q):q;if(d(s[S],b,k)){var
f=i(q);return j===f?q[1]:e===f?a(g[2],q):q}var
h=i(ai),l=[0,b],m=j===h?ai[1]:e===h?a(g[2],ai):ai;return a(s[G],[0,m,l])}function
bz(b){var
c=i(q),k=j===c?q[1]:e===c?a(g[2],q):q;if(d(s[S],b,k)){var
f=i(q);return j===f?q[1]:e===f?a(g[2],q):q}var
h=i(aj),l=[0,b],m=j===h?aj[1]:e===h?a(g[2],aj):aj;return a(s[G],[0,m,l])}function
fM(c,b){var
f=i(q),l=j===f?q[1]:e===f?a(g[2],q):q;if(d(s[S],c,l))return bz(b);var
h=i(q),m=j===h?q[1]:e===h?a(g[2],q):q;if(d(s[S],b,m))return by(c);var
k=i(ah),n=[0,c,b],o=j===k?ah[1]:e===k?a(g[2],ah):ah;return a(s[G],[0,o,n])}function
bA(c,b){var
f=i(q),l=j===f?q[1]:e===f?a(g[2],q):q;if(d(s[S],c,l))return b;var
h=i(q),m=j===h?q[1]:e===h?a(g[2],q):q;if(d(s[S],b,m))return c;var
k=i(ak),n=[0,c,b],o=j===k?ak[1]:e===k?a(g[2],ak):ak;return a(s[G],[0,o,n])}function
bB(b){if(b){var
c=b[2],d=b[1];return c?bA(d,bB(c)):d}var
f=i(q);return j===f?q[1]:e===f?a(g[2],q):q}var
ax=[e,function(b){return a(J,fN)}],ay=[e,function(b){return a(J,fO)}];function
bC(b){if(0===b){var
c=i(ay);return j===c?ay[1]:e===c?a(g[2],ay):ay}var
d=i(ax),f=[0,bC(b-1|0)],h=j===d?ax[1]:e===d?a(g[2],ax):ax;return a(s[G],[0,h,f])}function
bD(c){var
b=u(I[5],fQ,fP,c),d=a(bv[45],b)?function(b){return a(a1[29][3],[0,b])}:function(a){return a1[29][1]};return function(c){var
e=d(c),f=[0,a(cJ[10],b),e];return a(s[131],f)}}function
bE(d,c,b){function
e(b){if(b){var
h=e(b[2]),i=[0,b[1],h],f=[0,a(bD(fR),d),[0,c]],j=[0,a(s[G],f),i];return a(s[G],j)}var
g=[0,a(bD(fS),d),[0,c]];return a(s[G],g)}return e(b)}var
fT=a(bv[54],0),fU=a(cI[9],fT);function
fV(a){return bE(fU,s[117],a)}var
fW=a1[1][1];function
bF(a,b){return bE(fW,a,b)}function
fX(c){var
b=i(aw),d=j===b?aw[1]:e===b?a(g[2],aw):aw;return bF(d,c)}var
f5=[e,function(b){return a(T,f4)}],f7=[e,function(b){return a(av,f6)}],f9=[e,function(b){return a(av,f8)}],f$=[e,function(b){return a(av,f_)}],gb=[e,function(b){return a(av,ga)}],az=[e,function(b){return a(T,gc)}],aA=[e,function(b){return a(T,gd)}],aB=[e,function(b){return a(T,ge)}],aC=[e,function(b){return a(T,gf)}],aD=[e,function(b){return a(T,gg)}],aE=[e,function(b){return a(T,gh)}];function
bG(g){function
c(g){var
f=bx(g),b=f[2],e=a(w[1][7],f[1]);if(n(e,gi)){if(n(e,gj)){if(!n(e,gk))if(b)if(!b[2]){var
h=c(b[1]);return d(r[14],r[7],h)}}else
if(b)if(!b[2]){var
i=c(b[1]),j=d(r[14],r[7],i);return d(r[12],r[6],j)}}else
if(!b)return r[6];return a(k[2],gl)}var
f=bx(g),b=f[2],e=a(w[1][7],f[1]);if(n(e,gm)){if(n(e,gn)){if(!n(e,go))if(b)if(!b[2])return c(b[1])}else
if(b)if(!b[2]){var
h=c(b[1]);return a(r[22],h)}}else
if(!b)return r[5];return a(k[2],gp)}function
a5(b){if(Z(b,r[6])){var
c=i(az);return j===c?az[1]:e===c?a(g[2],az):az}var
f=d(r[15],b,r[7]),m=[0,a5(f[1])];if(Z(f[2],r[5]))var
h=i(aA),n=j===h?aA[1]:e===h?a(g[2],aA):aA,k=n;else
var
l=i(aB),o=j===l?aB[1]:e===l?a(g[2],aB):aB,k=o;return a(s[G],[0,k,m])}function
bH(b){if(Z(b,r[5])){var
c=i(aC);return j===c?aC[1]:e===c?a(g[2],aC):aC}if(a(r[18],b)){var
d=i(aD),h=[0,a5(b)],k=j===d?aD[1]:e===d?a(g[2],aD):aD;return a(s[G],[0,k,h])}var
f=i(aE),l=[0,a5(a(r[22],b))],m=j===f?aE[1]:e===f?a(g[2],aE):aE;return a(s[G],[0,m,l])}function
gq(u){try{var
d=ag(u);if(typeof
d==="number")var
c=0;else
if(1===d[0]){var
e=d[1];if(n(e,gr))if(n(e,gs))if(n(e,gt))if(n(e,gu))if(n(e,gv))if(n(e,gw)){if(n(e,gx))if(n(e,gy))if(n(e,gz))var
c=0,b=0,h=0;else
var
h=1;else
var
h=1;else
var
h=1;if(h)try{var
v=[5,bG(u)],g=v,c=1,b=0}catch(d){d=t(d);if(!a(B[22],d))throw d;var
g=0,c=1,b=0}}else{var
i=d[2];if(i)if(i[2])var
c=0,b=0;else
var
f=[4,i[1]],b=1;else
var
c=0,b=0}else{var
j=d[2];if(j){var
k=j[2];if(k)if(k[2])var
c=0,b=0;else
var
f=[2,j[1],k[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}else{var
l=d[2];if(l)if(l[2])var
c=0,b=0;else
var
w=bH(a(r[22],r[6])),f=[0,l[1],w],b=1;else
var
c=0,b=0}else{var
m=d[2];if(m)if(m[2])var
c=0,b=0;else
var
f=[3,m[1]],b=1;else
var
c=0,b=0}else{var
o=d[2];if(o){var
p=o[2];if(p)if(p[2])var
c=0,b=0;else
var
f=[1,o[1],p[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}else{var
q=d[2];if(q){var
s=q[2];if(s)if(s[2])var
c=0,b=0;else
var
f=[0,q[1],s[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}if(b)var
g=f,c=1}else
var
c=0;if(!c)var
g=0;return g}catch(b){b=t(b);if(a(au[4],b))return 0;throw b}}function
gA(N,K){try{var
h=ag(K);if(typeof
h==="number")var
c=0;else
if(1===h[0]){var
k=h[1];if(n(k,gB))if(n(k,gC))if(n(k,gD))if(n(k,gE))if(n(k,gF))if(n(k,gG))var
c=0,b=0;else{var
w=h[2];if(w){var
x=w[2];if(x){var
y=x[2];if(y)if(y[2])var
c=0,b=0;else
if(Z(ag(d(a2[29],N,w[1])),gH))var
l=[0,x[1],y[1]],b=1;else
var
c=0,b=0;else
var
c=0,b=0}else
var
c=0,b=0}else
var
c=0,b=0}else{var
z=h[2];if(z){var
A=z[2];if(A)if(A[2])var
c=0,b=0;else
var
l=[1,z[1],A[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}else{var
B=h[2];if(B){var
C=B[2];if(C)if(C[2])var
c=0,b=0;else
var
l=[2,B[1],C[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}else{var
D=h[2];if(D){var
E=D[2];if(E)if(E[2])var
c=0,b=0;else
var
l=[3,D[1],E[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}else{var
F=h[2];if(F){var
G=F[2];if(G)if(G[2])var
c=0,b=0;else
var
l=[4,F[1],G[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}else{var
H=h[2];if(H){var
I=H[2];if(I)if(I[2])var
c=0,b=0;else
var
l=[5,H[1],I[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}if(b)var
M=l,c=1}else
var
c=0;if(!c){try{var
g=ag(K);if(typeof
g==="number")var
f=0;else
switch(g[0]){case
1:var
i=g[1];if(n(i,fY))if(n(i,fZ))if(n(i,f0))if(n(i,f1))if(n(i,f2))if(n(i,f3))var
f=0,e=0;else{var
o=g[2];if(o){var
p=o[2];if(p)if(p[2])var
f=0,e=0;else
var
j=[7,o[1],p[1]],e=1;else
var
f=0,e=0}else
var
f=0,e=0}else{var
q=g[2];if(q)if(q[2])var
f=0,e=0;else
var
j=[6,q[1]],e=1;else
var
f=0,e=0}else{var
r=g[2];if(r){var
s=r[2];if(s)if(s[2])var
f=0,e=0;else
var
j=[10,r[1],s[1]],e=1;else
var
f=0,e=0}else
var
f=0,e=0}else{var
u=g[2];if(u){var
v=u[2];if(v)if(v[2])var
f=0,e=0;else
var
j=[8,u[1],v[1]],e=1;else
var
f=0,e=0}else
var
f=0,e=0}else{var
J=g[2];if(J)var
f=0,e=0;else
var
j=J,e=1}else
if(g[2])var
f=0,e=0;else
var
j=1,e=1;if(e)var
m=j,f=1;break;case
2:var
m=[9,g[1],g[2]],f=1;break;default:var
f=0}if(!f)var
m=2;var
L=m}catch(b){b=t(b);if(!a(au[4],b))throw b;var
L=2}var
M=L}return M}catch(b){b=t(b);if(a(au[4],b))return 2;throw b}}var
c=[0,c8,c_,da,dc,de,dg,di,dk,dm,dp,dr,dt,dv,dx,dz,dB,dD,dF,dH,dJ,dL,dN,dP,dR,dT,dV,dX,dZ,d1,d3,d5,d7,d9,ea,ec,ee,eg,ah,ai,aj,ak,q,en,ep,er,et,ev,ex,ez,eB,eD,eF,eH,eJ,eL,eN,eP,eR,eT,eV,eX,eZ,e1,e3,e5,e7,e9,e$,fb,fd,ff,fh,fj,fl,fn,fp,fr,ft,fv,fx,fz,fB,fD,fF,fH,fJ,fL,by,bz,fM,bA,bB,bC,bF,fV,fX,[0,f5,f7,f9,f$,gb,bH,gq,gA,function(b){function
j(l){var
e=l;for(;;){var
c=ag(e);if(typeof
c!=="number"&&1===c[0]){var
a=c[1];if(n(a,gI))if(n(a,gJ)){if(n(a,gK))if(n(a,gL))if(n(a,gM))if(n(a,gN)){if(n(a,gO))if(n(a,gP))if(n(a,gQ))var
b=1,d=0,f=0;else
var
f=1;else
var
f=1;else
var
f=1;if(f){bG(e);return 1}}else
var
d=1;else
var
b=0,d=0;else
var
d=1;else
var
d=1;if(d){var
g=c[2];if(g){if(!g[2]){var
e=g[1];continue}var
b=1}else
var
b=1}}else
var
b=0;else
var
b=0;if(!b){var
h=c[2];if(h){var
i=h[2];if(i)if(!i[2]){var
k=j(h[1]);if(k){var
e=i[1];continue}return k}}}}return 0}}try{var
c=j(b);return c}catch(b){b=t(b);if(a(B[22],b))return 0;throw b}}]];aV(295,c,"Romega_plugin.Const_omega");var
o=a(gT[1][2],[0,r[17],r[16],r[12],r[13],r[14],r[15],r[22],r[5],r[6],r[2]]),K=[0,0];function
bJ(b){K[1];return a(aa[1],b)}function
gU(b){a(k[29],b);a(k[32],0);return a(k[46],k[24])}var
ab=aa[5],A=s[G];function
bK(c,a){switch(c){case
0:var
b=0===a?1:0;break;case
1:var
b=1===a?1:0;break;default:var
b=2<=a?1:0}return b?1:0}var
V=a(w[1][5],gV);function
bL(c){var
a=d(E[1],0,7),b=d(E[1],0,7);return[0,0,0,0,d(E[1],0,7),0,b,a]}function
bM(a){a[5]=a[5]+1|0;return a[5]}function
bN(a){return 0===a[0]?[1,a[1]]:[0,a[1]]}function
gW(a){return a[1]}function
bO(c){function
b(f,e,c){if(c){var
g=u(l[4],gX,f,e),h=b(f,e+1|0,c[2]),i=a(v[6],0),j=a(gS[2],c[1]),k=a(v[1],gY),m=a(v[1],g),n=a(v[17],0),o=d(v[14],n,m),p=d(v[14],o,k),q=d(v[14],p,j),r=d(v[14],q,i);return d(v[14],r,h)}return a(v[1],gZ)}var
e=b(80,0,c[2]),f=a(v[6],0),g=a(v[1],g0),h=d(v[14],g,f),i=d(v[14],h,e),j=b(86,0,c[1]),k=a(v[6],0),m=a(v[1],g1),n=d(v[14],m,k),o=d(v[14],n,j),p=a(v[6],0),q=d(v[14],i,p),r=d(v[14],q,o);return a(a6[15],r)}var
a7=[0,0];function
bP(a){a7[1]=0;return 0}function
a8(a){a7[1]++;return a7[1]}var
a9=[0,0];function
bQ(a){a9[1]=0;return 0}function
a_(a){a9[1]++;return a9[1]}function
al(a){return d(l[4],g2,a)}function
a$(b,c){try{var
a=u(f[17][bu],Z,c,b[3]);return a}catch(a){a=t(a);if(a===H){var
d=a_(0);b[3]=[0,[0,c,d],b[3]];return d}throw a}}function
bR(a,c,b){a[3]=[0,[0,c,b],a[3]];return 0}function
aF(e,d){var
b=e[3];for(;;){if(b){var
c=b[1];if(d===c[2])return c[1];var
b=b[2];continue}return a(k[2],g3)}}function
ba(e,b){try{var
c=u(f[17][79],s[S],e,b[1]);return c}catch(c){c=t(c);if(c===H){var
g=a(f[17][1],b[1]);b[1]=d(f[18],b[1],[0,e,0]);return g}throw c}}function
bb(b){try{var
c=a(f[17][5],b[1]);return c}catch(b){b=t(b);if(b[1]===bI)return a(k[2],g4);throw b}}function
bS(b,e){try{var
c=u(f[17][79],s[S],e,b[2]);return c}catch(c){c=t(c);if(c===H){var
g=a(f[17][1],b[2]);b[2]=d(f[18],b[2],[0,e,0]);return g}throw c}}function
g5(c,b){try{var
e=d(f[17][5],c,b);return e}catch(b){b=t(b);if(b[1]===bI)return a(k[2],g6);throw b}}function
bT(c,b){var
e=b[8][1];try{d(E[6],c[6],e);var
a=0;return a}catch(a){a=t(a);if(a===H)return u(E[5],c[6],e,b);throw a}}function
bc(a,b){try{var
c=d(E[6],a[6],b);return c}catch(a){a=t(a);if(a===H){d(l[2],g7,b);throw a}throw a}}function
C(c,b){switch(b[0]){case
0:var
e=a(r[2],b[1]);return u(l[1],c,g8,e);case
1:return af(l[1],c,g9,C,b[1],C,b[2]);case
2:return af(l[1],c,g_,C,b[1],C,b[2]);case
3:return af(l[1],c,g$,C,b[1],C,b[2]);case
4:return bm(l[1],c,ha,C,b[1]);case
5:return u(l[1],c,hb,b[1]);default:return d(l[1],c,hc)}}function
F(b,a){if(typeof
a==="number")return 0===a?d(l[1],b,hd):d(l[1],b,he);else
switch(a[0]){case
0:var
e=a[2];switch(e[1]){case
0:var
c=hf;break;case
1:var
c=hh;break;case
2:var
c=hi;break;case
3:var
c=hj;break;case
4:var
c=hk;break;default:var
c=hl}return cc(l[1],b,hg,C,e[2],c,C,e[3]);case
1:return bm(l[1],b,hm,F,a[1]);case
2:return af(l[1],b,hn,F,a[2],F,a[3]);case
3:return af(l[1],b,ho,F,a[2],F,a[3]);case
4:return af(l[1],b,hp,F,a[2],F,a[3]);default:return d(l[1],b,hq)}}function
D(d,c){var
b=c;for(;;)switch(b[0]){case
1:return a(k[2],hr);case
3:return a(k[2],hs);case
5:return a$(d,b);case
0:case
6:return-1;default:var
b=b[1];continue}}function
bU(h,g){var
n=0;return function(o){var
c=n,b=o;for(;;){switch(b[0]){case
0:var
i=a8(0),j=b[1];return[0,i,g,a(f[17][6],c),j];case
1:var
d=b[1];if(2===d[0]){var
e=d[2];if(0===e[0]){var
l=b[2],m=a$(h,d[1]),c=[0,[0,e[1],m],c],b=l;continue}}break}a(k[27],ht);C(k[24],b);return a(k[2],hu)}}}function
aG(e,b){function
c(a){if(a){var
d=a[1],f=c(a[2]),g=[0,d[1]];return[1,[2,aF(e,d[2]),g],f]}return[0,b[4]]}return c(b[3])}function
m(b,d){var
c=i(b),f=j===c?b[1]:e===c?a(g[2],b):b;return a(A,[0,f,d])}function
bV(e,b){function
d(f){var
b=f;for(;;)switch(b[0]){case
0:return a(c[97][6],b[1]);case
1:var
g=d(b[2]),h=[0,d(b[1]),g];return m(c[97][2],h);case
2:var
i=d(b[2]),j=[0,d(b[1]),i];return m(c[97][3],j);case
3:var
k=d(b[2]),l=[0,d(b[1]),k];return m(c[97][5],l);case
4:var
n=[0,d(b[1])];return m(c[97][4],n);case
5:var
o=b[1];return a(bb(e),o);default:var
b=b[1];continue}}return d(b)}function
bW(c,b){try{var
a=d(E[6],c[4],b);return a}catch(a){a=t(a);if(a===H){d(l[2],hv,b);var
e=c[4],f=function(b,a){return u(l[2],hw,b,a)};d(E[11],f,e);throw H}throw a}}function
N(d,e){var
b=e;for(;;)switch(b[0]){case
0:var
f=[0,a(c[97][6],b[1])];return m(c[14],f);case
1:var
g=N(d,b[2]),h=[0,N(d,b[1]),g];return m(c[15],h);case
2:var
i=N(d,b[2]),j=[0,N(d,b[1]),i];return m(c[16],j);case
3:var
k=N(d,b[2]),l=[0,N(d,b[1]),k];return m(c[18],l);case
4:var
n=[0,N(d,b[1])];return m(c[17],n);case
5:var
o=bW(d,b[1]),p=[0,a(c[93],o)];return m(c[19],p);default:var
b=b[1];continue}}function
y(a,b){try{var
c=N(a,b);return c}catch(a){a=t(a);C(k[25],b);throw a}}function
O(b,f){if(typeof
f==="number"){if(0===f){var
h=c[27],l=i(h);return j===l?h[1]:e===l?a(g[2],h):h}var
k=c[28],n=i(k);return j===n?k[1]:e===n?a(g[2],k):k}else
switch(f[0]){case
0:var
d=f[2];switch(d[1]){case
0:var
o=y(b,d[3]),p=[0,y(b,d[2]),o];return m(c[21],p);case
1:var
q=y(b,d[3]),r=[0,y(b,d[2]),q];return m(c[22],r);case
2:var
s=y(b,d[3]),t=[0,y(b,d[2]),s];return m(c[23],t);case
3:var
u=y(b,d[3]),v=[0,y(b,d[2]),u];return m(c[25],v);case
4:var
w=y(b,d[3]),x=[0,y(b,d[2]),w];return m(c[24],x);default:var
z=y(b,d[3]),A=[0,y(b,d[2]),z];return m(c[26],A)}case
1:var
B=[0,O(b,f[1])];return m(c[29],B);case
2:var
C=O(b,f[3]),D=[0,O(b,f[2]),C];return m(c[30],D);case
3:var
E=O(b,f[3]),F=[0,O(b,f[2]),E];return m(c[31],F);case
4:var
G=O(b,f[3]),H=[0,O(b,f[2]),G];return m(c[32],H);default:var
I=bS(b,f[1]),J=[0,a(c[93],I)];return m(c[33],J)}}function
aH(a,b){try{var
c=O(a,b);return c}catch(a){a=t(a);F(k[25],b);throw a}}function
hx(b,e,d){var
g=[0,a(c[97][6],d)],h=m(c[14],g);function
i(d,e){var
f=[0,a(c[97][6],d[1])],g=m(c[14],f),h=[0,y(b,aF(b,d[2])),g],i=[0,m(c[16],h),e];return m(c[15],i)}return u(f[17][16],i,e,h)}function
aI(a,c,b){try{var
e=hx(a,c,b);return e}catch(a){a=t(a);d(o[29],al,[0,c,b]);throw a}}var
L=a(f[17][97],z.caml_int_compare);function
am(b){var
a=b;for(;;)switch(a[0]){case
4:var
a=a[1];continue;case
5:return[0,a[1],0];case
0:case
6:return 0;default:var
c=am(a[2]);return d(L,am(a[1]),c)}}function
aJ(a){if(a){var
b=a[1],c=aJ(a[2]),e=d(L,am(b[3]),c);return d(L,am(b[2]),e)}return a}function
aK(b){var
a=b;for(;;){if(typeof
a!=="number")switch(a[0]){case
0:return aJ([0,a[2],0]);case
1:var
a=a[1];continue;case
5:break;default:var
c=aK(a[3]);return d(L,aK(a[2]),c)}return 0}}function
an(f,b){switch(b[0]){case
0:var
x=[0,d(o[8],f,b[1])],h=c[47],p=i(h),y=0,z=j===p?h[1]:e===p?a(g[2],h):h;return[0,a(c[92],[0,z,y]),x];case
1:var
q=an(f,b[1]),s=an(f,b[2]),A=[1,q[2],s[2]],C=[0,d(c[90],q[1],s[1]),0],l=c[48],t=i(l),D=j===t?l[1]:e===t?a(g[2],l):l;return[0,a(c[92],[0,D,C]),A];case
2:var
u=b[2];if(0===u[0]){var
E=[0,d(o[8],f,u[1])],m=c[63],v=i(m),F=[2,b[1],E],G=0,H=j===v?m[1]:e===v?a(g[2],m):m;return[0,a(c[92],[0,H,G]),F]}return a(B[6],hy);case
3:return a(k[2],hz);case
4:var
I=[0,a(r[22],f)],n=c[62],w=i(n),J=[2,b[1],I],K=0,L=j===w?n[1]:e===w?a(g[2],n):n;return[0,a(c[92],[0,L,K]),J];case
5:return[0,a(c[92],0),[2,b,[0,f]]];default:return[0,a(c[92],0),[6,[2,b,[0,f]]]]}}function
aL(b){switch(b[0]){case
0:var
y=[0,a(r[22],b[1])],f=c[47],p=i(f),z=0,A=j===p?f[1]:e===p?a(g[2],f):f;return[0,a(c[92],[0,A,z]),y];case
1:var
q=aL(b[1]),s=aL(b[2]),C=[1,q[2],s[2]],D=[0,d(c[90],q[1],s[1]),0],h=c[43],t=i(h),E=j===t?h[1]:e===t?a(g[2],h):h;return[0,a(c[92],[0,E,D]),C];case
2:var
u=b[2];if(0===u[0]){var
F=[0,a(r[22],u[1])],l=c[45],v=i(l),G=[2,b[1],F],H=0,I=j===v?l[1]:e===v?a(g[2],l):l;return[0,a(c[92],[0,I,H]),G]}return a(B[6],hA);case
3:return a(k[2],hB);case
4:var
m=c[44],w=i(m),J=b[1],K=0,L=j===w?m[1]:e===w?a(g[2],m):m;return[0,a(c[92],[0,L,K]),J];case
5:var
n=c[46],x=i(n),M=[2,b,[0,o[14]]],N=0,O=j===x?n[1]:e===x?a(g[2],n):n;return[0,a(c[92],[0,O,N]),M];default:var
P=[6,[4,b[1]]];return[0,a(c[92],0),P]}}function
hC(b){return a(f[17][1],b)}function
bX(I,h,H,f){function
b(u){var
f=u[1];if(f){var
h=u[2],l=f[2],w=f[1],x=w[2];if(h){var
v=h[2],y=h[1],z=y[2];if(x===z){var
J=o[11],K=d(o[8],H,y[1]),L=d(o[8],I,w[1]),M=d(o[6],L,K);if(d(r[17],M,J)){var
N=b([0,l,v]),m=c[35],A=i(m),O=j===A?m[1]:e===A?a(g[2],m):m;return[0,O,N]}var
P=b([0,l,v]),n=c[34],B=i(n),Q=j===B?n[1]:e===B?a(g[2],n):n;return[0,Q,P]}if(d(o[19],x,z)){var
R=b([0,l,h]),p=c[36],C=i(p),S=j===C?p[1]:e===C?a(g[2],p):p;return[0,S,R]}var
T=b([0,f,v]),q=c[37],D=i(q),U=j===D?q[1]:e===D?a(g[2],q):q;return[0,U,T]}var
V=b([0,l,0]),s=c[36],E=i(s),W=j===E?s[1]:e===E?a(g[2],s):s;return[0,W,V]}var
F=u[2];if(F){var
X=b([0,0,F[2]]),t=c[37],G=i(t),Y=j===G?t[1]:e===G?a(g[2],t):t;return[0,Y,X]}a(k[46],k[24]);return 0}var
l=b([0,h,f]);return a(c[96],l)}function
ac(f,u){var
b=u[2],h=u[1];switch(h[0]){case
0:switch(b[0]){case
0:var
K=[0,d(o[6],h[1],b[1])],k=c[47],v=i(k),L=0,M=j===v?k[1]:e===v?a(g[2],k):k;return[0,a(c[92],[0,M,L]),K];case
1:var
t=0;break;default:var
t=1}break;case
1:var
A=h[2],n=h[1];if(1===b[0]){var
F=b[1],ae=D(f,F),af=D(f,n);if(d(o[19],af,ae)){var
G=ac(f,[0,A,b]),ag=[1,n,G[2]],ah=[0,a(c[89],G[1]),0],r=c[51],H=i(r),ai=j===H?r[1]:e===H?a(g[2],r):r;return[0,a(c[92],[0,ai,ah]),ag]}var
I=ac(f,[0,h,b[2]]),aj=[1,F,I[2]],ak=[0,a(c[89],I[1]),0],s=c[53],J=i(s),al=j===J?s[1]:e===J?a(g[2],s):s;return[0,a(c[92],[0,al,ak]),aj]}var
X=D(f,b),Y=D(f,n);if(d(o[19],Y,X)){var
B=ac(f,[0,A,b]),Z=[1,n,B[2]],_=[0,a(c[89],B[1]),0],p=c[51],C=i(p),$=j===C?p[1]:e===C?a(g[2],p):p;return[0,a(c[92],[0,$,_]),Z]}var
q=c[54],E=i(q),aa=[1,b,h],ab=0,ad=j===E?q[1]:e===E?a(g[2],q):q;return[0,a(c[92],[0,ad,ab]),aa];default:var
t=0}if(!t)if(1===b[0]){var
x=b[1],S=D(f,h),T=D(f,x);if(d(o[19],T,S)){var
y=ac(f,[0,h,b[2]]),U=[1,x,y[2]],V=[0,a(c[89],y[1]),0],m=c[53],z=i(m),W=j===z?m[1]:e===z?a(g[2],m):m;return[0,a(c[92],[0,W,V]),U]}return[0,a(c[92],0),[1,h,b]]}var
N=D(f,b),O=D(f,h);if(d(o[18],O,N)){var
l=c[54],w=i(l),P=[1,b,h],Q=0,R=j===w?l[1]:e===w?a(g[2],l):l;return[0,a(c[92],[0,R,Q]),P]}return[0,a(c[92],0),[1,h,b]]}function
bd(d,b){switch(d[0]){case
2:var
n=d[1];switch(b[0]){case
2:if(5===n[0]){var
f=c[59],p=i(f),u=[2,[5,n[1]],[1,d[2],b[2]]],v=j===p?f[1]:e===p?a(g[2],f):f;return[0,v,u]}break;case
5:var
h=c[58],q=i(h),w=[2,[5,b[1]],[1,d[2],[0,o[12]]]],x=j===q?h[1]:e===q?a(g[2],h):h;return[0,x,w]}break;case
5:var
r=d[1];switch(b[0]){case
2:var
l=c[57],s=i(l),y=[2,[5,r],[1,b[2],[0,o[12]]]],z=j===s?l[1]:e===s?a(g[2],l):l;return[0,z,y];case
5:var
m=c[56],t=i(m),A=[2,[5,r],[0,o[13]]],D=j===t?m[1]:e===t?a(g[2],m):m;return[0,D,A]}break}C(k[24],d);a(k[32],0);C(k[24],b);a(k[32],0);a(k[46],k[24]);return a(B[6],hD)}function
ao(b){switch(b[0]){case
2:var
l=b[1];if(5===l[0]){var
m=b[2];if(0===m[0])return[0,0,b];var
k=function(b){switch(b[0]){case
0:return b[1];case
1:var
c=k(b[2]),e=k(b[1]);return d(o[6],e,c);default:return a(B[6],hF)}},q=[0,k(m)],f=c[47],n=i(f),r=[2,[5,l[1]],q],s=0,t=j===n?f[1]:e===n?a(g[2],f):f;return[0,[0,t,s],r]}break;case
5:var
h=c[55],p=i(h),u=[2,[5,b[1]],[0,o[12]]],v=0,w=j===p?h[1]:e===p?a(g[2],h):h;return[0,[0,w,v],u]}return a(B[6],hE)}function
ad(b,l){switch(l[0]){case
0:return[0,0,l];case
1:var
h=l[2],k=l[1];switch(h[0]){case
0:var
p=ao(k),C=[1,p[2],[0,h[1]]],E=a(c[92],p[1]);return[0,[0,a(c[88],E),0],C];case
1:var
q=h[1],F=D(b,q);if(D(b,k)===F){var
r=bd(k,q),m=c[52],s=i(m),G=j===s?m[1]:e===s?a(g[2],m):m,t=ad(b,[1,r[2],h[2]]),H=t[2],I=t[1],J=a(c[92],[0,r[1],0]);return[0,[0,G,[0,a(c[88],J),I]],H]}var
u=ao(k),v=ad(b,h),K=[1,u[2],v[2]],L=a(c[92],v[1]),M=a(c[92],u[1]);return[0,[0,d(c[90],M,L),0],K];default:var
N=D(b,h);if(D(b,k)===N){var
w=bd(k,h),x=ad(b,w[2]);return[0,[0,w[1],x[1]],x[2]]}var
y=ao(k),z=ad(b,h),O=[1,y[2],z[2]],P=a(c[92],z[1]),Q=a(c[92],y[1]);return[0,[0,d(c[90],Q,P),0],O]}default:var
A=ao(l),n=c[61],B=i(n),R=[1,A[2],[0,o[11]]],S=0,T=j===B?n[1]:e===B?a(g[2],n):n;return[0,d(f[18],A[1],[0,T,S]),R]}}function
aM(b){if(1===b[0]){var
h=b[1];if(2===h[0])if(5===h[1][0]){var
p=h[2];if(0===p[0])if(d(r[17],p[1],o[11])){var
q=aM(b[2]),k=c[60],s=i(k),v=q[2],w=q[1],x=j===s?k[1]:e===s?a(g[2],k):k;return[0,[0,x,w],v]}}var
l=aM(b[2]),m=l[1],t=[1,h,l[2]];if(a(f[17][47],m))var
n=0;else
var
u=a(c[92],m),n=[0,a(c[89],u),0];return[0,n,t]}return[0,0,b]}function
P(f,b){switch(b[0]){case
1:var
q=P(f,b[1]),r=P(f,b[2]),s=ac(f,[0,q[1],r[1]]),G=[0,s[1],0],H=[0,d(c[90],q[2],r[2]),G],I=a(c[92],H);return[0,s[2],I];case
2:var
t=P(f,b[1]),u=t[2],n=t[1],v=P(f,b[2]),w=v[2],o=v[1];if(0===o[0]){var
x=an(o[1],n),J=[0,x[1],0],K=[0,d(c[90],u,w),J],L=a(c[92],K);return[0,x[2],L]}if(0===n[0]){var
y=an(n[1],o),k=c[65],z=i(k),M=[0,y[1],0],N=j===z?k[1]:e===z?a(g[2],k):k,O=[0,d(c[90],u,w),[0,N,M]],Q=a(c[92],O);return[0,y[2],Q]}var
l=c[42],A=i(l),R=j===A?l[1]:e===A?a(g[2],l):l;return[0,[6,b],R];case
3:var
B=P(f,[1,b[1],[4,b[2]]]),m=c[64],C=i(m),S=[0,B[2],0],T=j===C?m[1]:e===C?a(g[2],m):m,U=a(c[92],[0,T,S]);return[0,B[1],U];case
4:var
D=P(f,b[1]),E=aL(D[1]),V=[0,E[1],0],W=[0,a(c[88],D[2]),V],X=a(c[92],W);return[0,E[2],X];default:var
h=c[42],p=i(h),F=j===p?h[1]:e===p?a(g[2],h):h;return[0,b,F]}}function
be(b,g){var
d=P(b,g),e=ad(b,d[1]),f=aM(e[2]),h=f[2],i=[0,a(c[92],f[1]),0],j=[0,a(c[92],e[1]),i];return[0,a(c[92],[0,d[2],j]),h]}function
bY(a){switch(a){case
0:return 5;case
1:return 3;case
2:return 4;case
3:return 1;case
4:return 2;default:return 0}}function
bZ(k,h,i){var
b=i[3],c=i[2],j=i[1],l=h[1],m=h[4],n=h[3],p=h[2];function
e(c,b,h,g){var
e=be(k,d(h,c,b)),i=e[2],o=a(bU(k,g),i),q=[0,n,a(f[17][6],m)];return[0,j,c,b,e[1],q,l,p,o]}try{var
q=l?bY(j):j;switch(q){case
0:var
r=0,g=e(c,b,function(b,a){return[1,b,[4,a]]},r);break;case
1:var
s=1,g=e(c,b,function(b,a){return[1,a,[4,b]]},s);break;case
2:var
u=1,g=e(c,b,function(b,a){return[1,b,[4,a]]},u);break;case
3:var
v=1,g=e(c,b,function(b,a){return[1,[1,b,[0,o[14]]],[4,a]]},v);break;case
4:var
w=1,g=e(c,b,function(b,a){return[1,[1,a,[0,o[14]]],[4,b]]},w);break;default:var
x=2,g=e(c,b,function(b,a){return[1,b,[4,a]]},x)}return g}catch(b){b=t(b);if(a(au[4],b))throw b;throw b}}function
W(d,e){var
b=a(c[97][7],e);if(typeof
b!=="number")switch(b[0]){case
0:var
h=b[2],i=b[1];return aN(d,function(b,a){return[1,b,a]},i,h);case
1:var
f=b[2],g=b[1],m=a(c[97][9],g)?0:a(c[97][9],f)?0:1;if(!m)return aN(d,function(b,a){return[2,b,a]},g,f);break;case
2:var
j=b[2],k=b[1];return aN(d,function(b,a){return[3,b,a]},k,j);case
3:return[4,W(d,b[1])];case
4:var
l=[0,o[12]];return[1,W(d,b[1]),l];default:return[0,b[1]]}return[5,ba(e,d)]}function
aN(a,e,c,b){var
f=W(a,c);return d(e,f,W(a,b))}function
ap(c,b,g,n,j,m,l,k){var
h=b[4],i=b[3],d=b[2],e=bM(c),o=g?[0,[0,e],d]:d,p=g?[0,[1,e],d]:d;if(g){var
q=[0,i,a(f[17][6],h)];u(E[5],c[7],e,q)}var
r=ae(c,[0,n,o,i,[0,0,h]],j,l);return u(m,e,r,ae(c,[0,b[1],p,i,[0,1,h]],j,k))}function
X(a,g,f,e,d,c){var
h=W(a,d),b=bZ(a,g,[0,e,h,W(a,c)]);bT(a,b);return[0,f,b]}function
ae(e,b,h,g){var
f=b[1],a=d(c[97][8],h,g);if(typeof
a==="number")switch(a){case
0:return 0;case
1:return 1;default:return[5,g]}else
switch(a[0]){case
0:return X(e,b,g,0,a[1],a[2]);case
1:return X(e,b,g,5,a[1],a[2]);case
2:return X(e,b,g,4,a[1],a[2]);case
3:return X(e,b,g,1,a[1],a[2]);case
4:return X(e,b,g,3,a[1],a[2]);case
5:return X(e,b,g,2,a[1],a[2]);case
6:return[1,ae(e,[0,1-f,b[2],b[3],[0,2,b[4]]],h,a[1])];case
7:var
k=a[2],l=a[1];return ap(e,b,1-f,f,h,function(c,b,a){return[2,c,b,a]},l,k);case
8:var
m=a[2],n=a[1];return ap(e,b,f,f,h,function(c,b,a){return[3,c,b,a]},n,m);case
9:var
o=a[2],p=a[1];return ap(e,b,1-f,1-f,h,function(c,b,a){return[4,c,b,a]},p,o);default:var
i=a[2],j=a[1],q=d(s[49],i,j),r=d(s[49],j,i);return ap(e,b,f,f,h,function(c,b,a){return[3,c,b,a]},r,q)}}function
b0(c,b){var
e=[1,ae(c,[0,1,0,V,hG],b,a(a2[7],b))];if(K[1]){a(l[2],hH);a(l[2],hI);F(k[24],e);a(l[2],hJ)}function
g(e){if(e){var
h=e[1],f=h[1],i=ae(c,[0,0,0,f,0],b,h[2]);if(K[1]){var
j=a(w[1][7],f);d(l[2],hK,j);F(k[24],i);a(l[2],hL)}return[0,[0,f,i],g(e[2])]}if(K[1])bO(c);return 0}return[0,[0,V,e],g(a(a2[10],b))]}function
M(e,b,c,a){if(typeof
a!=="number")switch(a[0]){case
0:return[0,[0,a[2],b],0];case
1:return Q(e,b,c,a[1]);case
2:var
g=a[1],j=M(e,b,[0,g,c],a[2]),k=M(e,b,[0,g,c],a[3]);return d(f[18],j,k);case
3:var
l=a[3],m=M(e,b,c,a[2]),h=function(a){if(a){var
b=h(a[2]),g=M(e,a[1],c,l);return d(f[18],g,b)}return a};return h(m);case
4:var
i=a[1],n=Q(e,b,[0,i,c],a[2]),o=M(e,b,[0,i,c],a[3]);return d(f[18],n,o)}return[0,b,0]}function
Q(e,c,b,a){if(typeof
a!=="number")switch(a[0]){case
0:return[0,[0,a[2],c],0];case
1:return M(e,c,b,a[1]);case
2:var
j=a[3],k=Q(e,c,b,a[2]),g=function(a){if(a){var
c=g(a[2]),h=Q(e,a[1],b,j);return d(f[18],h,c)}return a};return g(k);case
3:var
h=a[1],l=Q(e,c,[0,h,b],a[2]),m=Q(e,c,[0,h,b],a[3]);return d(f[18],l,m);case
4:var
n=a[3],o=M(e,c,b,a[2]),i=function(a){if(a){var
c=i(a[2]),g=Q(e,a[1],b,n);return d(f[18],g,c)}return a};return i(o)}return[0,c,0]}function
b1(a){function
b(a){if(a){var
c=a[1],d=M(c[1],0,0,c[2]),e=b(a[2]);return u(f[17][122],f[18],d,e)}return hM}return b(a)}function
aO(a){return 0===a[0]?d(l[2],hN,a[1]):d(l[2],hO,a[1])}function
b2(b){function
h(b){var
h=c[42],n=i(h),s=j===n?h[1]:e===n?a(g[2],h):h;F(k[24],[0,s,b]);a(k[32],0);var
m=b[8],p=a(o[31],m[2]),q=[0,m[3],m[4]];function
r(b){return a(o[29],al)}i$(l[2],hP,m[1],r,q,p);a(l[2],hQ);d(f[17][11],aO,b[7]);var
t=b[5][2];function
v(a){switch(a){case
0:return hR;case
1:return hS;default:return hT}}var
x=d(f[17][12],v,t),y=d(f[15][7],hU,x);d(l[2],hV,y);var
z=b[6]?hW:hY,A=a(w[1][7],b[5][1]);return u(l[2],hX,A,z)}function
m(b){a(l[2],hZ);return d(f[17][11],h,b)}return d(f[17][11],m,b)}function
aq(e){var
a=e;for(;;){if(a){var
c=a[2],b=a[1];switch(b[0]){case
6:var
f=aq(c);return d(L,[0,b[1][1],0],f);case
15:var
g=aq(b[3][2]);return d(L,aq(b[2][2]),g);default:var
a=c;continue}}return a}}function
ar(e){var
a=e;for(;;){if(a){var
c=a[2],b=a[1];switch(b[0]){case
5:var
g=ar(c);return[0,b[1],g];case
15:var
h=ar(b[3][2]),i=ar(b[2][2]);return d(f[18],i,h);default:var
a=c;continue}}return a}}function
b3(b,l){function
k(b,a){return b[5]-a[5]|0}function
h(a){if(0===a[0]){var
b=ar(a[1][3]);return d(f[17][40],k,b)}var
c=h(a[3]),e=h(a[2]);return u(f[17][44],k,e,c)}var
n=h(l);function
o(f){var
k=aG(b,f[2]),l=bV(b,k),h=ba(l,b),d=c[97][1],n=i(d),o=j===n?d[1]:e===n?a(g[2],d):d,p=m(c[1],[0,o,l]);bR(b,[5,h],f[5]);return[0,h,p,[0,k,[5,h]],f[2][1]]}return d(f[17][12],o,n)}function
bf(c,b){if(b){try{var
h=bc(c,b[1])[7],d=h}catch(a){a=t(a);if(a!==H)throw a;var
d=0}var
e=bf(c,b[2]),g=a(f[17][6],d);return u(f[17][53],Z,g,e)}return b}function
b4(b){function
c(c,b){var
d=a(f[17][1],b[2]);return a(f[17][1],c[2])-d|0}try{var
e=d(f[17][40],c,b),g=a(f[17][3],e);return g}catch(b){b=t(b);if(b[1]===gR)return a(k[2],h0);throw b}}function
b5(c,a){function
e(i){var
a=i;for(;;){if(a){var
g=a[2],b=a[1];if(d(f[17][26],b,c)){var
a=g;continue}var
j=bN(b);if(d(f[17][26],j,c))throw k[3];var
h=[0,b,e(g)]}else
var
h=a;return h}}function
b(a){try{var
b=e(a[2]),c=[0,[0,a[1],b]];return c}catch(a){a=t(a);if(a===k[3])return 0;throw a}}return d(f[17][64],b,a)}function
aP(a){if(0===a[0])return a[1][2];var
b=aP(a[3]);return d(L,aP(a[2]),b)}function
b6(j,h){function
b(a){if(typeof
a==="number")return 0===a?m(c[5],[0]):m(c[6],[0]);else
switch(a[0]){case
1:var
e=[0,b(a[1])];return m(c[3],e);case
2:var
f=b(a[3]),g=[0,b(a[2]),f];return m(c[4],g);case
3:var
h=b(a[3]),i=[0,b(a[2]),h];return m(c[2],i);case
4:var
j=b(a[3]),k=b(a[2]);return d(s[49],k,j);default:return a[1]}}function
g(d,g,f){var
h=e(g),c=e(f);if(h){var
i=h[1];return c?[0,a(d,[0,i,c[1]])]:[0,a(d,[0,i,[5,b(f)]])]}if(c)var
k=c[1],j=[0,a(d,[0,[5,b(g)],k])];else
var
j=c;return j}function
e(a){if(typeof
a!=="number")switch(a[0]){case
0:var
c=d(f[17][26],a[2][8][1],j),h=c?[0,a]:c;return h;case
1:var
b=e(a[1]),i=b?[0,[1,b[1]]]:b;return i;case
2:var
k=a[1],l=a[3],m=a[2];return g(function(a){return[2,k,a[1],a[2]]},m,l);case
3:var
n=a[1],o=a[3],p=a[2];return g(function(a){return[3,n,a[1],a[2]]},p,o);case
4:var
q=a[1],r=a[3],s=a[2];return g(function(a){return[4,q,a[1],a[2]]},s,r)}return 0}var
i=e(h);return i?i[1]:[5,b(h)]}function
aQ(b,a){if(0===a[0]){var
c=a[1],e=d(f[17][12],k[20],c[2]),g=d(f[15][7],h1,e),h=u(l[4],h2,c[1],g);return d(k[49],b,h)}return cc(l[1],b,h3,a[1],aQ,a[2],aQ,a[3])}function
aR(b,c){function
e(g,d,c){if(c){var
h=c[1];if(0===h[0]){var
i=h[1],k=aR(b,a(f[17][6],[0,[1,i],d]));return[1,i,e(g,[0,[0,i],d],c[2]),k]}var
j=h[1],l=e(g,[0,[1,j],d],c[2]);return[1,j,aR(b,a(f[17][6],[0,[0,j],d])),l]}return[0,g]}var
g=b5(c,b);try{var
h=b4(g)}catch(e){e=t(e);var
i=a(f[17][1],b),j=a(f[17][1],g);u(l[2],h4,j,i);d(f[17][11],aO,c);throw e}var
k=h[2],m=a(f[17][6],c);return e(h[1],m,k)}function
bg(i,m){var
c=0,b=m,n=i[2],o=i[1];a:for(;;){if(b){var
j=b[1];if(0===j[0]){var
l=j[1];if(d(w[1][1],o,l[1])){var
e=[0,l[2],n];for(;;){var
f=e[1];if(f){var
g=e[2];if(g)if(bK(f[1],g[1])){var
e=[0,f[2],g[2]];continue}var
h=0}else
var
h=[0,e[2]];if(h)return[0,c,h[1]];var
c=c+1|0,b=b[2];continue a}}}var
c=c+1|0,b=b[2];continue}return a(k[2],h5)}}function
bh(k){function
l(f){switch(f){case
0:var
b=c[80];break;case
1:var
b=c[81];break;default:var
b=c[82]}var
d=i(b);return j===d?b[1]:e===d?a(g[2],b):b}var
m=d(f[17][12],l,k),b=c[79],h=i(b),n=j===h?b[1]:e===h?a(g[2],b):b;return d(c[94],n,m)}function
x(b,c){try{var
g=u(f[17][79],Z,[1,c],b);return g}catch(b){b=t(b);if(b===H){var
e=d(l[4],h6,c);return a(k[2],e)}throw b}}function
b7(n,b){function
m(h,ao){var
l=ao;for(;;){if(l){var
b=l[1];switch(b[0]){case
0:var
H=b[2],ap=x(h,b[1][1]),aq=a(c[93],ap),ar=m(h,l[2]),as=a(f[17][1],H[3]),at=a(c[93],as),au=aI(n,H[3],H[4]),av=a(c[97][6],b[4]),aw=[0,a(c[97][6],b[3]),av,au,at,ar,aq],q=c[68],L=i(q),ax=j===L?q[1]:e===L?a(g[2],q):q;return a(A,[0,ax,aw]);case
1:var
r=b[2],s=b[1],M=d(o[26],s[4],r),ay=d(o[8],M,r),az=d(o[7],s[4],ay),aA=s[3],aB=function(a){return d(o[9],a,r)},N=d(o[43],aB,aA),aC=x(h,s[1]),aD=a(c[93],aC),aE=a(f[17][1],N),aH=a(c[93],aE),aJ=aI(n,N,M),aK=a(c[97][6],az),aL=[0,a(c[97][6],r),aK,aJ,aH,aD],t=c[69],O=i(t),aM=j===O?t[1]:e===O?a(g[2],t):t;return a(A,[0,aM,aL]);case
3:var
I=b[2],J=b[1],aN=J[3],aO=function(a){return d(o[9],a,I)},P=d(o[43],aO,aN),aP=d(o[26],J[4],I),aQ=x(h,J[1]),aR=a(c[93],aQ),aS=m(h,l[2]),aT=a(f[17][1],P),aU=a(c[93],aT),aV=aI(n,P,aP),aW=[0,a(c[97][6],I),aV,aU,aS,aR],u=c[70],Q=i(u),aX=j===Q?u[1]:e===Q?a(g[2],u):u;return a(A,[0,aX,aW]);case
4:var
R=b[3],S=R[2],T=R[1],U=b[2],V=U[2],W=U[1],aY=x(h,V[1]),aZ=x(h,S[1]),a0=bX(W,V[3],T,S[3]),a1=m([0,[1,b[1]],h],l[2]),a2=a(c[93],aZ),a3=a(c[97][6],T),a4=a(c[93],aY),a5=[0,a(c[97][6],W),a4,a3,a2,a0,a1],v=c[71],X=i(v),a6=j===X?v[1]:e===X?a(g[2],v):v;return a(A,[0,a6,a5]);case
5:var
p=b[1],Y=p[4],Z=p[3],_=p[2],a7=x(h,Z[1]),a8=x(h,_[1]),a9=aF(n,p[5]),a_=aG(n,_),a$=be(n,[1,aG(n,Z),[2,[1,[4,a9],a_],[0,Y]]]),ba=m([0,[1,p[1][1]],h],l[2]),bb=a(c[93],a8),bc=a(c[93],a7),bd=a$[1],bf=[0,a(c[97][6],Y),bd,bc,bb,ba],w=c[72],$=i(w),bg=j===$?w[1]:e===$?a(g[2],w):w;return a(A,[0,bg,bf]);case
9:var
aa=b[1],bh=a(f[17][1],aa[3]),bi=a(c[93],bh),bj=x(h,b[2][1]),bk=a(c[93],bj),bl=x(h,aa[1]),bm=[0,bi,a(c[93],bl),bk],y=c[73],ab=i(y),bn=j===ab?y[1]:e===ab?a(g[2],y):y;return a(A,[0,bn,bm]);case
10:var
K=b[2],ac=b[1];if(0===b[3]){var
bo=x(h,K[1]),bp=a(c[93],bo),bq=x(h,ac[1]),br=a(c[93],bq),bs=a(f[17][1],K[3]),bt=[0,a(c[93],bs),br,bp],z=c[78],ad=i(z),bu=j===ad?z[1]:e===ad?a(g[2],z):z;return a(A,[0,bu,bt])}var
bv=x(h,K[1]),bw=a(c[93],bv),bx=x(h,ac[1]),by=[0,a(c[93],bx),bw],B=c[77],ae=i(B),bz=j===ae?B[1]:e===ae?a(g[2],B):B;return a(A,[0,bz,by]);case
11:var
af=b[2],bA=x(h,af[1]),bB=x(h,b[3]),bC=m([0,[1,b[1]],h],l[2]),bD=a(c[93],bB),bE=a(c[93],bA),bF=a(f[17][1],af[3]),bG=[0,a(c[93],bF),bE,bD,bC],C=c[74],ag=i(C),bH=j===ag?C[1]:e===ag?a(g[2],C):C;return a(A,[0,bH,bG]);case
12:var
bI=x(h,b[1]),bJ=[0,a(c[93],bI)],D=c[66],ah=i(D),bK=j===ah?D[1]:e===ah?a(g[2],D):D;return a(A,[0,bK,bJ]);case
13:var
bL=x(h,b[1]),bM=[0,a(c[93],bL)],E=c[76],ai=i(E),bN=j===ai?E[1]:e===ai?a(g[2],E):E;return a(A,[0,bN,bM]);case
14:var
bO=x(h,b[1]),bP=[0,a(c[93],bO)],F=c[67],aj=i(F),bQ=j===aj?F[1]:e===aj?a(g[2],F):F;return a(A,[0,bQ,bP]);case
15:var
ak=b[3],al=b[2],am=b[1],bR=x(h,am[1]),bS=m([0,[1,al[1]],h],al[2]),bT=m([0,[1,ak[1]],h],ak[2]),bU=a(c[93],bR),bV=a(f[17][1],am[3]),bW=[0,a(c[93],bV),bU,bS,bT],G=c[75],an=i(G),bY=j===an?G[1]:e===an?a(g[2],G):G;return a(A,[0,bY,bW]);case
16:return a(k[2],h7);default:var
l=l[2];continue}}return a(k[2],h8)}}return function(a){return m(b,a)}}function
aS(h,g,e){if(0===e[0]){var
i=e[1];return bi(i[3],h,g,i[2])}var
j=e[1];try{var
x=d(E[6],h[7],j),b=x}catch(c){c=t(c);if(c!==H)throw c;var
o=d(l[4],h9,j),b=a(k[2],o)}var
n=bg(b,g),p=d(f[18],b[2],h_),q=[0,[0,b[1],p]],r=d(f[18],b[2],h$),s=aS(h,[0,[0,[0,b[1],r]],g],e[3]),u=aS(h,[0,q,g],e[2]),v=bh(n[2]),w=[0,a(c[93],n[1]),v,u,s];return m(c[83],w)}function
bi(i,h,g,b){if(b){var
j=b[1];try{var
v=d(E[6],h[6],j),e=v}catch(b){b=t(b);if(b!==H)throw b;var
p=d(l[4],ia,j),e=a(k[2],p)}var
n=bg(e[5],g),o=n[2],q=e[6]?d(f[18],o,ib):o,r=bi(i,h,[0,[1,e[8][1]],g],b[2]),s=bh(q),u=[0,a(c[93],n[1]),s,r];return m(c[84],u)}var
w=[0,a(b7(h,g),i)];return m(c[85],w)}function
b8(b,D,P){var
F=[0,0];function
Q(i){var
g=F[1];function
j(a){return a[8]}var
m=d(f[17][12],j,i),c=d(o[69],[0,a8,a_,al],m),e=aq(c),h=bf(b,e);if(K[1]){d(l[2],ic,g);d(o[36],al,c);a(k[27],id);var
n=function(a){return d(l[2],ie,a)};d(f[17][11],n,e);a(k[27],ig);d(f[17][11],aO,h);a(l[2],ih)}F[1]++;return[0,[0,g,e,c],h]}if(K[1])a(l[2],ii);var
n=aR(d(f[17][12],Q,P),0);if(K[1]){aQ(k[24],n);a(k[32],0)}var
G=aP(n);function
R(a){return bc(b,a)}var
x=d(f[17][12],R,G);function
S(a){return a[5][1]}var
T=d(f[17][12],S,x),W=a(f[17][95],T),p=[0,V,u(f[17][88],w[1][1],V,W)];function
X(a){return u(f[17][bu],w[1][1],a,D)}var
z=d(f[17][12],X,p),Y=aJ(x),Z=d(L,Y,aK(u(f[17][bu],w[1][1],V,D))),h=b3(b,n);function
_(a){return a[1]}var
aa=d(f[17][12],_,h);function
ac(a){return a[2]}var
ad=d(f[17][12],ac,h);function
ae(a){return[1,a[4]]}var
af=d(f[17][12],ae,h),ag=d(f[18],Z,aa);function
H(d,c){if(c){var
e=c[1],g=a(bb(b),e);u(E[5],b[4],e,d);var
f=[0,g,H(d+1|0,c[2])]}else
var
f=c;return f}var
ah=H(0,ag),q=c[97][1],I=i(q),ai=j===I?q[1]:e===I?a(g[2],q):q,aj=d(c[94],ai,ah);function
ak(d){var
a=d[3],e=y(b,a[2]),f=[0,y(b,a[1]),e];return m(c[21],f)}var
am=d(f[17][12],ak,h);if(z){var
A=z[1];if(typeof
A==="number")var
C=1;else
if(1===A[0])var
J=aH(b,A[1]),B=1,C=0;else
var
C=1;if(C)var
B=0}else
var
B=0;if(!B)var
J=aH(b,1);var
an=a(f[17][4],z);function
ao(a){return aH(b,b6(G,a))}var
ap=d(f[17][12],ao,an),ar=a(c[95],b[2]),as=d(f[18],am,ap),r=c[20],M=i(r),at=j===M?r[1]:e===M?a(g[2],r):r,au=[0,J,ar,aj,d(c[94],at,as)],av=m(c[86],au);function
aw(b){function
d(a){if(a){if(1===a[1]){var
e=[0,d(a[2])];return m(c[11],e)}var
f=[0,d(a[2])];return m(c[10],f)}var
g=[0,b[4]],h=b[6]?c[12]:c[13];return m(h,g)}var
e=u(f[17][79],w[1][1],b[5][1],p),g=0===e?0:e+a(f[17][1],h)|0,i=d(b[5][2]),j=[0,a(c[93],g),i];return m(c[9],j)}var
ax=d(f[17][12],aw,x),t=c[8],N=i(t),ay=j===N?t[1]:e===N?a(g[2],t):t,az=d(c[94],ay,ax),aA=a(f[17][4],p);function
aB(a){return[0,[0,a,0]]}var
aC=d(f[17][12],aB,aA),aD=aS(b,d(f[18],[0,[0,[0,V,0]],af],aC),n),v=c[7],O=i(v),aE=j===O?v[1]:e===O?a(g[2],v):v,aF=a($[85],aE),aG=a(U[66][8],aF),aI=a(U[66][8],$[66]),aL=m(c[87],[0,aD,az]),aM=a($[85],aL),aN=a(U[66][8],aM),aT=a($[52],av),aU=a(U[66][8],aT),aV=a(f[17][4],p),aW=d(f[17][12],s[113],aV),aX=d(f[18],ad,aW),aY=a($[148],aX);return d(ab,d(ab,d(ab,d(ab,d(ab,a(U[66][8],aY),aU),aN),bJ),aI),aG)}var
bj=[0,o,K,bJ,gU,ab,A,bK,V,bL,bM,bN,gW,bO,a8,bP,a_,bQ,al,a$,bR,aF,ba,bb,bS,g5,bT,bc,C,F,D,bU,aG,m,bV,bW,y,aH,aI,L,am,aJ,aK,an,aL,hC,bX,ac,bd,ao,ad,aM,P,be,bY,bZ,W,aN,ap,X,ae,b0,M,Q,b1,aO,b2,aq,ar,b3,bf,b4,b5,aP,b6,aQ,aR,bg,bh,x,b7,aS,bi,b8,function(b){a(I[11],ij);bP(0);bQ(0);try{var
c=bL(0),d=b0(c,b),e=b1(d);if(K[1])b2(e);var
f=a(b8(c,d,e),b);return f}catch(b){b=t(b);if(b===o[28])return a(B[6],ik);throw b}}];aV(308,bj,"Romega_plugin.Refl_omega");a(bk[12],iq);function
as(b){var
c=d(bl[13],w[1][5],ir),e=a(w[5][4],c),f=a(w[6][4],b),g=d(w[13][2],[0,e],f),h=a(aT[6],g);return a(b9[17],h)}function
aU(b){var
c=d(f[17][96],io[29],b);function
e(b){if(n(b,is)){if(n(b,it)){if(n(b,iu)){if(n(b,iv)){var
c=d(k[16],iw,b);return a(B[6],c)}return as(ix)}return as(iy)}return as(iz)}return as(iA)}var
g=d(bl[13],e,c),h=a(U[66][1],bj[84]),i=d(aa[70][3],$[28],h),j=a(aa[70][20],g),l=a(U[55],j),m=a(aa[70][28],l);return d(aa[70][3],m,i)}function
iB(d){var
b=[28,[0,0,[31,b_[4],[0,[0,Y,iC],0],0]]],c=a(w[1][5],iD);return bm(aT[4],1,0,c,b)}try{var
i9=[0,function(b,a){return aU(0)}];u(aT[9],0,[0,Y,i_],i9);d(bk[19],iB,Y)}catch(b){b=t(b);if(!a(B[22],b))throw b;var
iE=d(B[18],0,b),iH=d(k[16],iG,iF),iJ=d(k[16],iI,iH),iK=a(v[1],iJ),iL=d(v[13],iK,iE);a(a6[13],iL)}try{var
iU=0,iX=[0,function(b){return b?a(k[2],iV):function(a){return aU(iW)}},iU],iZ=[0,function(b){if(b)if(!b[2]){var
c=b[1],e=a(b$[17],ca[4]),f=a(b$[6],e),g=d(b9[2][7],f,c);return function(a){return aU(d(bl[13],w[1][7],g))}}return a(k[2],iY)},iX],i0=a(ip[12],iZ);u(aT[9],0,[0,Y,i1],i0);var
i2=function(f){var
e=a(w[1][6],i4),b=ca[4],c=0;if(0===b[0])return d(im[4],[0,Y,i7],[0,[0,i6,[0,i5,[0,[1,b_[4],[0,[5,[0,b[1]]]],e],c]]],i3]);throw[0,il,i8]};d(bk[19],i2,Y)}catch(b){b=t(b);if(!a(B[22],b))throw b;var
iM=d(B[18],0,b),iP=d(k[16],iO,iN),iR=d(k[16],iQ,iP),iS=a(v[1],iR),iT=d(v[13],iS,iM);a(a6[13],iT)}var
cb=[0,Y,as,aU];aV(320,cb,"Romega_plugin.G_romega");aV(321,[0,c,bj,cb],"Romega_plugin");return});
