(function(iU){"use strict";var
cd="xO",ci=" - ",cj="not",cy=140,j=250,ch="Z.succ",cw="not a number",cx="Z.pred",bq="Z.opp",cm="xH",aZ="Zpos",F=124,cv="REIFED PROBLEM\n\n",d=246,cg="FF",bn="Z.sub",br=119,cE="romega_plugin",cp="True",at="Z",cu="Extension: cannot occur",_="romega",ct="\n====================================\n",bp="N",cB="False",co="with",bo="Z.mul",cA="Prop",cs="romega'",aY="",cl="or",cr="TT",a0="Omega",cc="=SYSTEM===================================\n",aX="Zneg",R=136,bm="Z.add",cf="positive",aW="Z0",cq="  Depends on:",cz="nat",cD="  CONCL: ",cn="and",cC="Omega: Can't solve a goal with non-linear products",cb="C_MULT_OPP_LEFT",ce="\n------------------------------------\n",ck="\n",ca="xI",Z="Coq",z=iU.jsoo_runtime,Y=z.caml_equal,b=z.caml_new_string,i=z.caml_obj_tag,aV=z.caml_register_global,n=z.caml_string_notequal,u=z.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):z.caml_call_gen(a,[b])}function
e(a,b,c){return a.length==2?a(b,c):z.caml_call_gen(a,[b,c])}function
t(a,b,c,d){return a.length==3?a(b,c,d):z.caml_call_gen(a,[b,c,d])}function
bl(a,b,c,d,e){return a.length==4?a(b,c,d,e):z.caml_call_gen(a,[b,c,d,e])}function
iT(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):z.caml_call_gen(a,[b,c,d,e,f])}function
af(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):z.caml_call_gen(a,[b,c,d,e,f,g])}function
b$(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):z.caml_call_gen(a,[b,c,d,e,f,g,h])}var
p=z.caml_get_global_data(),X=b(cE),g=p.CamlinternalLazy,s=p.Term,r=p.Bigint,I=p.CErrors,a2=p.Tacmach,au=p.Logic,v=p.Names,k=p.Pervasives,a1=p.Univ,H=p.Coqlib,bs=p.Global,a3=p.Nametab,f=p.Util,l=p.Printf,D=p.Hashtbl,G=p.Not_found,$=p.Tactics,T=p.Proofview,bF=p.Invalid_argument,w=p.Pp,aa=p.Tacticals,b9=p.Constrarg,b7=p.Loc,bk=p.List,b8=p.Genarg,b6=p.Tacinterp,aT=p.Tacenv,bj=p.Mltop,bt=[0,b(Z),[0,b(_),[0,b("ReflOmegaCore"),0]]],gF=b(bm),gG=b(bo),gH=b(bq),gI=b(cx),gJ=b(bn),gK=b(ch),gL=b(aW),gM=b(aX),gN=b(aZ),gy=b("Z.ge"),gz=b("Z.gt"),gA=b("Z.le"),gB=b("Z.lt"),gC=b("Zne"),gD=b("eq"),gE=[1,b(at),0],go=b(bm),gp=b(bo),gq=b(bq),gr=b(cx),gs=b(bn),gt=b(ch),gu=b(aW),gv=b(aX),gw=b(aZ),gf=b(cm),gg=b(ca),gh=b(cd),gi=b(cw),gj=b(aW),gk=b(aX),gl=b(aZ),gm=b(cw),ge=b(aX),gd=b(aZ),gc=b(aW),gb=b(ca),ga=b(cd),f$=b(cm),f9=b(bn),f7=b(bq),f5=b(bo),f3=b(bm),f1=b(at),fV=b(cB),fW=b(cp),fX=b(cn),fY=b("iff"),fZ=b(cj),f0=b(cl),fP=b("nil"),fO=b("cons"),fM=[0,b("Init"),[0,b("Datatypes"),0]],fN=b(aY),fL=b("O"),fK=b("S"),fH=b("do_omega"),fF=b("interp_goal_concl"),fD=b("E_SOLVE"),fB=b("E_EXTRACT"),fz=b("E_SPLIT"),fx=b("D_mono"),fv=b("D_right"),ft=b("D_left"),fr=b("direction"),fp=b("O_NEGATE_CONTRADICT_INV"),fn=b("O_NEGATE_CONTRADICT"),fl=b("O_CONSTANT_NUL"),fj=b("O_SPLIT_INEQ"),fh=b("O_MERGE_EQ"),ff=b("O_CONTRADICTION"),fd=b("O_STATE"),fb=b("O_SUM"),e$=b("O_EXACT_DIVIDE"),e9=b("O_NOT_EXACT_DIVIDE"),e7=b("O_DIV_APPROX"),e5=b("O_CONSTANT_NEG"),e3=b("O_CONSTANT_NOT_NUL"),e1=b("C_MULT_COMM"),eZ=b("C_MINUS"),eX=b("C_MULT_ASSOC_REDUCED"),eV=b(cb),eT=b("C_RED6"),eR=b("C_RED5"),eP=b("C_RED4"),eN=b("C_RED3"),eL=b("C_RED2"),eJ=b("C_RED1"),eH=b("C_RED0"),eF=b("C_PLUS_COMM"),eD=b("C_PLUS_PERMUTE"),eB=b("C_PLUS_ASSOC_L"),ez=b("C_PLUS_ASSOC_R"),ex=b("C_MULT_ASSOC_R"),ev=b(cb),et=b("C_MULT_PLUS_DISTR"),er=b("C_REDUCE"),ep=b("C_OPP_ONE"),en=b("C_OPP_MULT_R"),el=b("C_OPP_OPP"),ej=b("C_OPP_PLUS"),ei=b("C_NOP"),eh=b("C_SEQ"),eg=b("C_RIGHT"),ef=b("C_LEFT"),ee=b("C_DO_BOTH"),ec=b("F_right"),ea=b("F_left"),d_=b("F_cancel"),d8=b("F_equal"),d7=b("t_fusion"),d5=b("Tprop"),d3=b("Timp"),d1=b("Tand"),dZ=b("Tor"),dX=b("Tnot"),dV=b("FalseTerm"),dT=b("TrueTerm"),dR=b("NeqTerm"),dP=b("GtTerm"),dN=b("LtTerm"),dL=b("GeqTerm"),dJ=b("LeqTerm"),dH=b("EqTerm"),dF=b("proposition"),dD=b("Tvar"),dB=b("Tminus"),dz=b("Topp"),dx=b("Tmult"),dv=b("Tplus"),dt=b("Tint"),dr=b("P_STEP"),dp=b("P_INVERT"),dm=b("P_RIGHT"),dk=b("P_LEFT"),di=b("pair_step"),dg=b("h_step"),de=b("I"),dc=b(cB),da=b(cp),c_=b(cl),c8=b(cj),c6=b(cn),c4=b("eq_refl"),cL=b("Omega: Not a quantifier-free goal"),cI=b("."),cJ=b(aY),cK=b(aY),cH=[0,b(at),[0,b(bp),[0,b("Pos"),0]]],cM=b("Const_omega.Destruct"),cO=[0,b(Z),[0,b("Logic"),[0,b("Decidable"),0]]],cP=[0,b("ZOmega"),0],cS=[0,[0,b(Z),[0,b("Lists"),[0,b("List"),0]]],0],cY=[0,[0,b(Z),[0,b("Numbers"),[0,b("BinNums"),0]]],0],cZ=[0,[0,b(Z),[0,b("ZArith"),[0,b("BinInt"),0]]],0],c0=b(a0),c1=b(a0),c2=b(a0),c3=b(a0),g6=[0,[2,0,0],b("%s")],g7=[0,[12,40,[15,[11,b(" + "),[15,[12,41,0]]]]],b("(%a + %a)")],g8=[0,[12,40,[15,[11,b(" * "),[15,[12,41,0]]]]],b("(%a * %a)")],g9=[0,[12,40,[15,[11,b(ci),[15,[12,41,0]]]]],b("(%a - %a)")],g_=[0,[11,b("~ "),[15,0]],b("~ %a")],g$=[0,[12,86,[4,0,[0,2,2],0,0]],b("V%02d")],ha=[0,[12,63,0],b("?")],hb=[0,[11,b(cr),0],b(cr)],hc=[0,[11,b(cg),0],b(cg)],hd=b("="),hf=b("<="),hg=b(">="),hh=b(">"),hi=b("<"),hj=b("!="),he=[0,[15,[12,32,[2,0,[12,32,[15,0]]]]],b("%a %s %a")],hk=[0,[11,b("not("),[15,[12,41,0]]],b("not(%a)")],hl=[0,[12,40,[15,[11,b(" or "),[15,[12,41,0]]]]],b("(%a or %a)")],hm=[0,[12,40,[15,[11,b(" and "),[15,[12,41,0]]]]],b("(%a and %a)")],hn=[0,[12,40,[15,[11,b(" => "),[15,[12,41,0]]]]],b("(%a => %a)")],ho=[0,[11,b(cA),0],b(cA)],hp=b("weight"),hq=b("weight minus"),hw=b(cC),hx=b("scalar minus"),hy=b(cC),hz=b("negate minus"),hZ=b(" "),h0=[0,[4,0,0,0,[12,91,[2,0,[12,93,0]]]],b("%d[%s]")],h1=[0,[12,83,[4,0,0,0,[12,40,[15,[12,44,[15,[12,41,0]]]]]]],b("S%d(%a,%a)")],h2=[0,[4,0,0,0,[11,b(ci),[4,0,0,0,[12,10,0]]]],b("%d - %d\n")],h7=[0,[11,b("Cannot find constructor "),[4,0,0,0,0]],b("Cannot find constructor %d")],h8=[0,0,0],h9=[0,1,0],h_=[0,[11,b("Cannot find equation "),[4,0,0,0,0]],b("Cannot find equation %d")],h$=[0,2,0],ih=[0,b(Z),[0,b(_),[0,b("ROmega"),0]]],ii=b("ROmega can't solve this system"),ic=[0,[12,32,[4,0,0,0,0]],b(" %d")],ia=[0,[11,b("SYSTEME "),[4,0,0,0,[12,10,0]]],b("SYSTEME %d\n")],ib=b("\n  Depend :"),id=b("\n  Split points :"),ie=[0,[11,b(ce),0],b(ce)],ig=[0,[11,b(ct),0],b(ct)],h5=b("not_treated"),h6=b("no contradiction"),h4=[0,[11,b("get_hyp "),[4,0,0,0,0]],b("get_hyp %d")],h3=b("find_path"),hY=b("select_smaller"),hX=[0,[11,b(cc),0],b(cc)],hP=b("L"),hQ=b("R"),hR=b("M"),hO=[0,[11,b(cq),0],b(cq)],hS=b(aY),hT=[0,[11,b("\n  Path: "),[2,0,0]],b("\n  Path: %s")],hU=b("yes"),hW=b("no"),hV=[0,[11,b("\n  Origin: "),[2,0,[11,b(" (negated : "),[2,0,[11,b(")\n\n"),0]]]]],b("\n  Origin: %s (negated : %s)\n\n")],hN=[0,[11,b("  E"),[4,0,0,0,[11,b(" : "),[15,[12,32,[2,0,[11,b(" 0\n"),0]]]]]]],b("  E%d : %a %s 0\n")],hL=[0,[11,b(" L"),[4,0,0,0,0]],b(" L%d")],hM=[0,[11,b(" R"),[4,0,0,0,0]],b(" R%d")],hK=[0,0,0],hI=[0,[11,b("  "),[2,0,[11,b(": "),0]]],b("  %s: ")],hJ=[0,[12,10,0],b(ck)],hE=[0,2,0],hF=[0,[11,b(cv),0],b(cv)],hG=[0,[11,b(cD),0],b(cD)],hH=[0,[12,10,0],b(ck)],hD=b("condense.1"),hC=b("reduce_factor.1"),hB=b("shrink.1"),hu=[0,[4,0,0,0,[11,b(" -> "),[4,0,0,0,[12,10,0]]]],b("%d -> %d\n")],ht=[0,[11,b("Atome "),[4,0,0,0,[11,b(" non trouv\xc3\xa9\n"),0]]],b("Atome %d non trouv\xc3\xa9\n")],hr=b("CO"),hs=b("compile_equation"),g5=[0,[11,b("Omega Equation "),[4,0,0,0,[11,b(" non trouv\xc3\xa9e\n"),0]]],b("Omega Equation %d non trouv\xc3\xa9e\n")],g4=b("get_prop"),g2=b("get_reified_atom"),g1=b("unintern"),g0=[0,[11,b("OV"),[4,0,0,0,0]],b("OV%d")],gV=[0,[12,40,[0,[4,0,[0,2,2],0,[12,41,0]]]],b("(%c%02d)")],gW=b(" := "),gX=b("  ===============================\n\n"),gY=b("ENVIRONMENT OF PROPOSITIONS :"),gZ=b("ENVIRONMENT OF TERMS :"),gT=b("__goal__"),iN=[0,[0,[0,b(_)],[0,[0,b(co)],[0,[0,b("*")],0]]],0],iO=b("$l"),iS=[0,b("plugins/romega/g_romega.ml4"),1,0],iP=[0,b(co)],iQ=[0,b(_)],iR=b(cs),iI=b(cu),iG=[0,b(cz),[0,b(cf),[0,b(bp),[0,b(at),0]]]],iF=b(cu),iA=b(_),iB=b(_),iq=b(bp),ir=b(at),is=b(cz),it=b(cf),iv=b("zify_positive"),iw=b("zify_nat"),ix=b("zify_op"),iy=b("zify_N"),iu=b("No ROmega knowledge base for type "),ip=[0,b("PreOmega"),[0,b("omega"),[0,b(Z),0]]],io=b(cE),iD=b(_),iL=b(cs),cG=p.Globnames,cF=p.Universes,gO=p.Failure,gP=p.Printer,gR=p.Feedback,gQ=p.Omega_plugin,ij=p.Assert_failure,ik=p.Tacentries,il=p.String,im=p.Array;function
a4(b){var
h=a(a3[41],b),c=a(v[5][5],h);if(c)var
d=a(v[1][7],c[1]),i=e(f[15][45][2],d,cH)?e(k[16],d,cI):cJ,g=i;else
var
g=cK;var
j=a(a3[42],b),l=a(v[1][7],j);return e(k[16],g,l)}function
ag(e){var
d=a(s[39],e),c=d[2],b=a(s[cy],d[1]);switch(b[0]){case
1:if(!c)return[0,a(v[1][7],b[1])];break;case
6:if(b[1]){if(!c)return a(I[6],cL)}else
if(!c)return[2,b[2],b[3]];break;case
10:return[1,a4([1,b[1][1]]),c];case
11:return[1,a4([2,b[1][1]]),c];case
12:return[1,a4([3,b[1][1]]),c]}return 0}var
cN=[248,cM,z.caml_fresh_oo_id(0)];function
bu(e){var
d=a(s[39],e),b=a(s[cy],d[1]);switch(b[0]){case
10:var
c=[1,b[1][1]];break;case
11:var
c=[2,b[1][1]];break;case
12:var
c=[3,b[1][1]];break;default:throw cN}var
f=d[2];return[0,a(a3[42],c),f]}var
cQ=[0,e(k[22],bt,cP),0],cR=e(k[22],[0,bt,0],cQ),cT=e(k[22],cS,cR),cU=e(k[22],H[9],cT),cV=e(k[22],H[8],cU),cW=e(k[22],[0,cO,0],cV),cX=e(k[22],H[10],cW),J=e(H[6],c0,H[10]),h=e(H[6],c1,cX),av=e(H[6],c2,cZ),S=e(H[6],c3,cY),c5=[d,function(b){return a(J,c4)}],c7=[d,function(b){return a(J,c6)}],c9=[d,function(b){return a(J,c8)}],c$=[d,function(b){return a(J,c_)}],db=[d,function(b){return a(J,da)}],dd=[d,function(b){return a(J,dc)}],df=[d,function(b){return a(J,de)}],dh=[d,function(b){return a(h,dg)}],dj=[d,function(b){return a(h,di)}],dl=[d,function(b){return a(h,dk)}],dn=[d,function(b){return a(h,dm)}],dq=[d,function(b){return a(h,dp)}],ds=[d,function(b){return a(h,dr)}],du=[d,function(b){return a(h,dt)}],dw=[d,function(b){return a(h,dv)}],dy=[d,function(b){return a(h,dx)}],dA=[d,function(b){return a(h,dz)}],dC=[d,function(b){return a(h,dB)}],dE=[d,function(b){return a(h,dD)}],dG=[d,function(b){return a(h,dF)}],dI=[d,function(b){return a(h,dH)}],dK=[d,function(b){return a(h,dJ)}],dM=[d,function(b){return a(h,dL)}],dO=[d,function(b){return a(h,dN)}],dQ=[d,function(b){return a(h,dP)}],dS=[d,function(b){return a(h,dR)}],dU=[d,function(b){return a(h,dT)}],dW=[d,function(b){return a(h,dV)}],dY=[d,function(b){return a(h,dX)}],d0=[d,function(b){return a(h,dZ)}],d2=[d,function(b){return a(h,d1)}],d4=[d,function(b){return a(h,d3)}],d6=[d,function(b){return a(h,d5)}],aw=[d,function(b){return a(h,d7)}],d9=[d,function(b){return a(h,d8)}],d$=[d,function(b){return a(h,d_)}],eb=[d,function(b){return a(h,ea)}],ed=[d,function(b){return a(h,ec)}],ah=[d,function(b){return a(h,ee)}],ai=[d,function(b){return a(h,ef)}],aj=[d,function(b){return a(h,eg)}],ak=[d,function(b){return a(h,eh)}],q=[d,function(b){return a(h,ei)}],ek=[d,function(b){return a(h,ej)}],em=[d,function(b){return a(h,el)}],eo=[d,function(b){return a(h,en)}],eq=[d,function(b){return a(h,ep)}],es=[d,function(b){return a(h,er)}],eu=[d,function(b){return a(h,et)}],ew=[d,function(b){return a(h,ev)}],ey=[d,function(b){return a(h,ex)}],eA=[d,function(b){return a(h,ez)}],eC=[d,function(b){return a(h,eB)}],eE=[d,function(b){return a(h,eD)}],eG=[d,function(b){return a(h,eF)}],eI=[d,function(b){return a(h,eH)}],eK=[d,function(b){return a(h,eJ)}],eM=[d,function(b){return a(h,eL)}],eO=[d,function(b){return a(h,eN)}],eQ=[d,function(b){return a(h,eP)}],eS=[d,function(b){return a(h,eR)}],eU=[d,function(b){return a(h,eT)}],eW=[d,function(b){return a(h,eV)}],eY=[d,function(b){return a(h,eX)}],e0=[d,function(b){return a(h,eZ)}],e2=[d,function(b){return a(h,e1)}],e4=[d,function(b){return a(h,e3)}],e6=[d,function(b){return a(h,e5)}],e8=[d,function(b){return a(h,e7)}],e_=[d,function(b){return a(h,e9)}],fa=[d,function(b){return a(h,e$)}],fc=[d,function(b){return a(h,fb)}],fe=[d,function(b){return a(h,fd)}],fg=[d,function(b){return a(h,ff)}],fi=[d,function(b){return a(h,fh)}],fk=[d,function(b){return a(h,fj)}],fm=[d,function(b){return a(h,fl)}],fo=[d,function(b){return a(h,fn)}],fq=[d,function(b){return a(h,fp)}],fs=[d,function(b){return a(h,fr)}],fu=[d,function(b){return a(h,ft)}],fw=[d,function(b){return a(h,fv)}],fy=[d,function(b){return a(h,fx)}],fA=[d,function(b){return a(h,fz)}],fC=[d,function(b){return a(h,fB)}],fE=[d,function(b){return a(h,fD)}],fG=[d,function(b){return a(h,fF)}],fI=[d,function(b){return a(h,fH)}];function
bv(b){var
c=i(q),k=j===c?q[1]:d===c?a(g[2],q):q;if(e(s[R],b,k)){var
f=i(q);return j===f?q[1]:d===f?a(g[2],q):q}var
h=i(ai),l=[0,b],m=j===h?ai[1]:d===h?a(g[2],ai):ai;return a(s[F],[0,m,l])}function
bw(b){var
c=i(q),k=j===c?q[1]:d===c?a(g[2],q):q;if(e(s[R],b,k)){var
f=i(q);return j===f?q[1]:d===f?a(g[2],q):q}var
h=i(aj),l=[0,b],m=j===h?aj[1]:d===h?a(g[2],aj):aj;return a(s[F],[0,m,l])}function
fJ(c,b){var
f=i(q),l=j===f?q[1]:d===f?a(g[2],q):q;if(e(s[R],c,l))return bw(b);var
h=i(q),m=j===h?q[1]:d===h?a(g[2],q):q;if(e(s[R],b,m))return bv(c);var
k=i(ah),n=[0,c,b],o=j===k?ah[1]:d===k?a(g[2],ah):ah;return a(s[F],[0,o,n])}function
bx(c,b){var
f=i(q),l=j===f?q[1]:d===f?a(g[2],q):q;if(e(s[R],c,l))return b;var
h=i(q),m=j===h?q[1]:d===h?a(g[2],q):q;if(e(s[R],b,m))return c;var
k=i(ak),n=[0,c,b],o=j===k?ak[1]:d===k?a(g[2],ak):ak;return a(s[F],[0,o,n])}function
by(b){if(b){var
c=b[2],e=b[1];return c?bx(e,by(c)):e}var
f=i(q);return j===f?q[1]:d===f?a(g[2],q):q}var
ax=[d,function(b){return a(J,fK)}],ay=[d,function(b){return a(J,fL)}];function
bz(b){if(0===b){var
c=i(ay);return j===c?ay[1]:d===c?a(g[2],ay):ay}var
e=i(ax),f=[0,bz(b-1|0)],h=j===e?ax[1]:d===e?a(g[2],ax):ax;return a(s[F],[0,h,f])}function
bA(c){var
b=t(H[5],fN,fM,c),d=a(bs[45],b)?function(b){return a(a1[29][3],[0,b])}:function(a){return a1[29][1]};return function(c){var
e=d(c),f=[0,a(cG[10],b),e];return a(s[131],f)}}function
bB(d,c,b){function
e(b){if(b){var
h=e(b[2]),i=[0,b[1],h],f=[0,a(bA(fO),d),[0,c]],j=[0,a(s[F],f),i];return a(s[F],j)}var
g=[0,a(bA(fP),d),[0,c]];return a(s[F],g)}return e(b)}var
fQ=a(bs[54],0),fR=a(cF[9],fQ);function
fS(a){return bB(fR,s[117],a)}var
fT=a1[1][1];function
bC(a,b){return bB(fT,a,b)}function
fU(c){var
b=i(aw),e=j===b?aw[1]:d===b?a(g[2],aw):aw;return bC(e,c)}var
f2=[d,function(b){return a(S,f1)}],f4=[d,function(b){return a(av,f3)}],f6=[d,function(b){return a(av,f5)}],f8=[d,function(b){return a(av,f7)}],f_=[d,function(b){return a(av,f9)}],az=[d,function(b){return a(S,f$)}],aA=[d,function(b){return a(S,ga)}],aB=[d,function(b){return a(S,gb)}],aC=[d,function(b){return a(S,gc)}],aD=[d,function(b){return a(S,gd)}],aE=[d,function(b){return a(S,ge)}];function
bD(g){function
c(g){var
f=bu(g),b=f[2],d=a(v[1][7],f[1]);if(n(d,gf)){if(n(d,gg)){if(!n(d,gh))if(b)if(!b[2]){var
h=c(b[1]);return e(r[14],r[7],h)}}else
if(b)if(!b[2]){var
i=c(b[1]),j=e(r[14],r[7],i);return e(r[12],r[6],j)}}else
if(!b)return r[6];return a(k[2],gi)}var
f=bu(g),b=f[2],d=a(v[1][7],f[1]);if(n(d,gj)){if(n(d,gk)){if(!n(d,gl))if(b)if(!b[2])return c(b[1])}else
if(b)if(!b[2]){var
h=c(b[1]);return a(r[22],h)}}else
if(!b)return r[5];return a(k[2],gm)}function
a5(b){if(Y(b,r[6])){var
c=i(az);return j===c?az[1]:d===c?a(g[2],az):az}var
f=e(r[15],b,r[7]),m=[0,a5(f[1])];if(Y(f[2],r[5]))var
h=i(aA),n=j===h?aA[1]:d===h?a(g[2],aA):aA,k=n;else
var
l=i(aB),o=j===l?aB[1]:d===l?a(g[2],aB):aB,k=o;return a(s[F],[0,k,m])}function
bE(b){if(Y(b,r[5])){var
c=i(aC);return j===c?aC[1]:d===c?a(g[2],aC):aC}if(a(r[18],b)){var
e=i(aD),h=[0,a5(b)],k=j===e?aD[1]:d===e?a(g[2],aD):aD;return a(s[F],[0,k,h])}var
f=i(aE),l=[0,a5(a(r[22],b))],m=j===f?aE[1]:d===f?a(g[2],aE):aE;return a(s[F],[0,m,l])}function
gn(t){try{var
d=ag(t);if(typeof
d==="number")var
c=0;else
if(1===d[0]){var
e=d[1];if(n(e,go))if(n(e,gp))if(n(e,gq))if(n(e,gr))if(n(e,gs))if(n(e,gt)){if(n(e,gu))if(n(e,gv))if(n(e,gw))var
c=0,b=0,h=0;else
var
h=1;else
var
h=1;else
var
h=1;if(h)try{var
v=[5,bD(t)],g=v,c=1,b=0}catch(d){d=u(d);if(!a(I[22],d))throw d;var
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
w=bE(a(r[22],r[6])),f=[0,l[1],w],b=1;else
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
g=0;return g}catch(b){b=u(b);if(a(au[4],b))return 0;throw b}}function
gx(N,K){try{var
h=ag(K);if(typeof
h==="number")var
c=0;else
if(1===h[0]){var
k=h[1];if(n(k,gy))if(n(k,gz))if(n(k,gA))if(n(k,gB))if(n(k,gC))if(n(k,gD))var
c=0,b=0;else{var
w=h[2];if(w){var
x=w[2];if(x){var
y=x[2];if(y)if(y[2])var
c=0,b=0;else
if(Y(ag(e(a2[29],N,w[1])),gE))var
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
i=g[1];if(n(i,fV))if(n(i,fW))if(n(i,fX))if(n(i,fY))if(n(i,fZ))if(n(i,f0))var
f=0,d=0;else{var
o=g[2];if(o){var
p=o[2];if(p)if(p[2])var
f=0,d=0;else
var
j=[7,o[1],p[1]],d=1;else
var
f=0,d=0}else
var
f=0,d=0}else{var
q=g[2];if(q)if(q[2])var
f=0,d=0;else
var
j=[6,q[1]],d=1;else
var
f=0,d=0}else{var
r=g[2];if(r){var
s=r[2];if(s)if(s[2])var
f=0,d=0;else
var
j=[10,r[1],s[1]],d=1;else
var
f=0,d=0}else
var
f=0,d=0}else{var
t=g[2];if(t){var
v=t[2];if(v)if(v[2])var
f=0,d=0;else
var
j=[8,t[1],v[1]],d=1;else
var
f=0,d=0}else
var
f=0,d=0}else{var
J=g[2];if(J)var
f=0,d=0;else
var
j=J,d=1}else
if(g[2])var
f=0,d=0;else
var
j=1,d=1;if(d)var
m=j,f=1;break;case
2:var
m=[9,g[1],g[2]],f=1;break;default:var
f=0}if(!f)var
m=2;var
L=m}catch(b){b=u(b);if(!a(au[4],b))throw b;var
L=2}var
M=L}return M}catch(b){b=u(b);if(a(au[4],b))return 2;throw b}}var
c=[0,c5,c7,c9,c$,db,dd,df,dh,dj,dl,dn,dq,ds,du,dw,dy,dA,dC,dE,dG,dI,dK,dM,dO,dQ,dS,dU,dW,dY,d0,d2,d4,d6,d9,d$,eb,ed,ah,ai,aj,ak,q,ek,em,eo,eq,es,eu,ew,ey,eA,eC,eE,eG,eI,eK,eM,eO,eQ,eS,eU,eW,eY,e0,e2,e4,e6,e8,e_,fa,fc,fe,fg,fi,fk,fm,fo,fq,fs,fu,fw,fy,fA,fC,fE,fG,fI,bv,bw,fJ,bx,by,bz,bC,fS,fU,[0,f2,f4,f6,f8,f_,bE,gn,gx,function(b){function
j(l){var
e=l;for(;;){var
c=ag(e);if(typeof
c!=="number"&&1===c[0]){var
a=c[1];if(n(a,gF))if(n(a,gG)){if(n(a,gH))if(n(a,gI))if(n(a,gJ))if(n(a,gK)){if(n(a,gL))if(n(a,gM))if(n(a,gN))var
b=1,d=0,f=0;else
var
f=1;else
var
f=1;else
var
f=1;if(f){bD(e);return 1}}else
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
c=j(b);return c}catch(b){b=u(b);if(a(I[22],b))return 0;throw b}}]];aV(289,c,"Romega_plugin.Const_omega");var
o=a(gQ[1][2],[0,r[17],r[16],r[12],r[13],r[14],r[15],r[22],r[5],r[6],r[2]]),K=[0,0];function
bG(b){K[1];return a(aa[1],b)}function
gS(b){a(k[29],b);a(k[32],0);return a(k[46],k[24])}var
ab=aa[5],A=s[F];function
bH(c,a){switch(c){case
0:var
b=0===a?1:0;break;case
1:var
b=1===a?1:0;break;default:var
b=2<=a?1:0}return b?1:0}var
U=a(v[1][5],gT);function
bI(c){var
a=e(D[1],0,7),b=e(D[1],0,7);return[0,0,0,0,e(D[1],0,7),0,b,a]}function
bJ(a){a[5]=a[5]+1|0;return a[5]}function
bK(a){return 0===a[0]?[1,a[1]]:[0,a[1]]}function
gU(a){return a[1]}function
bL(c){function
b(f,d,c){if(c){var
g=t(l[4],gV,f,d),h=b(f,d+1|0,c[2]),i=a(w[6],0),j=a(gP[2],c[1]),k=a(w[1],gW),m=a(w[1],g),n=a(w[17],0),o=e(w[14],n,m),p=e(w[14],o,k),q=e(w[14],p,j),r=e(w[14],q,i);return e(w[14],r,h)}return a(w[1],gX)}var
d=b(80,0,c[2]),f=a(w[6],0),g=a(w[1],gY),h=e(w[14],g,f),i=e(w[14],h,d),j=b(86,0,c[1]),k=a(w[6],0),m=a(w[1],gZ),n=e(w[14],m,k),o=e(w[14],n,j),p=a(w[6],0),q=e(w[14],i,p),r=e(w[14],q,o);return e(gR[15],0,r)}var
a6=[0,0];function
bM(a){a6[1]=0;return 0}function
a7(a){a6[1]++;return a6[1]}var
a8=[0,0];function
bN(a){a8[1]=0;return 0}function
a9(a){a8[1]++;return a8[1]}function
al(a){return e(l[4],g0,a)}function
a_(b,c){try{var
a=t(f[17][br],Y,c,b[3]);return a}catch(a){a=u(a);if(a===G){var
d=a9(0);b[3]=[0,[0,c,d],b[3]];return d}throw a}}function
bO(a,c,b){a[3]=[0,[0,c,b],a[3]];return 0}function
aF(e,d){var
b=e[3];for(;;){if(b){var
c=b[1];if(d===c[2])return c[1];var
b=b[2];continue}return a(k[2],g1)}}function
a$(d,b){try{var
c=t(f[17][79],s[R],d,b[1]);return c}catch(c){c=u(c);if(c===G){var
g=a(f[17][1],b[1]);b[1]=e(f[18],b[1],[0,d,0]);return g}throw c}}function
ba(b){try{var
c=a(f[17][5],b[1]);return c}catch(b){b=u(b);if(b[1]===bF)return a(k[2],g2);throw b}}function
bP(b,d){try{var
c=t(f[17][79],s[R],d,b[2]);return c}catch(c){c=u(c);if(c===G){var
g=a(f[17][1],b[2]);b[2]=e(f[18],b[2],[0,d,0]);return g}throw c}}function
g3(c,b){try{var
d=e(f[17][5],c,b);return d}catch(b){b=u(b);if(b[1]===bF)return a(k[2],g4);throw b}}function
bQ(c,b){var
d=b[8][1];try{e(D[6],c[6],d);var
a=0;return a}catch(a){a=u(a);if(a===G)return t(D[5],c[6],d,b);throw a}}function
bb(a,b){try{var
c=e(D[6],a[6],b);return c}catch(a){a=u(a);if(a===G){e(l[2],g5,b);throw a}throw a}}function
B(c,b){switch(b[0]){case
0:var
d=a(r[2],b[1]);return t(l[1],c,g6,d);case
1:return af(l[1],c,g7,B,b[1],B,b[2]);case
2:return af(l[1],c,g8,B,b[1],B,b[2]);case
3:return af(l[1],c,g9,B,b[1],B,b[2]);case
4:return bl(l[1],c,g_,B,b[1]);case
5:return t(l[1],c,g$,b[1]);default:return e(l[1],c,ha)}}function
E(b,a){if(typeof
a==="number")return 0===a?e(l[1],b,hb):e(l[1],b,hc);else
switch(a[0]){case
0:var
d=a[2];switch(d[1]){case
0:var
c=hd;break;case
1:var
c=hf;break;case
2:var
c=hg;break;case
3:var
c=hh;break;case
4:var
c=hi;break;default:var
c=hj}return b$(l[1],b,he,B,d[2],c,B,d[3]);case
1:return bl(l[1],b,hk,E,a[1]);case
2:return af(l[1],b,hl,E,a[2],E,a[3]);case
3:return af(l[1],b,hm,E,a[2],E,a[3]);case
4:return af(l[1],b,hn,E,a[2],E,a[3]);default:return e(l[1],b,ho)}}function
C(d,c){var
b=c;for(;;)switch(b[0]){case
1:return a(k[2],hp);case
3:return a(k[2],hq);case
5:return a_(d,b);case
0:case
6:return-1;default:var
b=b[1];continue}}function
bR(h,g){var
n=0;return function(o){var
c=n,b=o;for(;;){switch(b[0]){case
0:var
i=a7(0),j=b[1];return[0,i,g,a(f[17][6],c),j];case
1:var
d=b[1];if(2===d[0]){var
e=d[2];if(0===e[0]){var
l=b[2],m=a_(h,d[1]),c=[0,[0,e[1],m],c],b=l;continue}}break}a(k[27],hr);B(k[24],b);return a(k[2],hs)}}}function
aG(e,b){function
c(a){if(a){var
d=a[1],f=c(a[2]),g=[0,d[1]];return[1,[2,aF(e,d[2]),g],f]}return[0,b[4]]}return c(b[3])}function
m(b,e){var
c=i(b),f=j===c?b[1]:d===c?a(g[2],b):b;return a(A,[0,f,e])}function
bS(e,b){function
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
o=b[1];return a(ba(e),o);default:var
b=b[1];continue}}return d(b)}function
bT(c,b){try{var
a=e(D[6],c[4],b);return a}catch(a){a=u(a);if(a===G){e(l[2],ht,b);var
d=c[4],f=function(b,a){return t(l[2],hu,b,a)};e(D[11],f,d);throw G}throw a}}function
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
o=bT(d,b[1]),p=[0,a(c[93],o)];return m(c[19],p);default:var
b=b[1];continue}}function
y(a,b){try{var
c=N(a,b);return c}catch(a){a=u(a);B(k[25],b);throw a}}function
O(b,f){if(typeof
f==="number"){if(0===f){var
h=c[27],l=i(h);return j===l?h[1]:d===l?a(g[2],h):h}var
k=c[28],n=i(k);return j===n?k[1]:d===n?a(g[2],k):k}else
switch(f[0]){case
0:var
e=f[2];switch(e[1]){case
0:var
o=y(b,e[3]),p=[0,y(b,e[2]),o];return m(c[21],p);case
1:var
q=y(b,e[3]),r=[0,y(b,e[2]),q];return m(c[22],r);case
2:var
s=y(b,e[3]),t=[0,y(b,e[2]),s];return m(c[23],t);case
3:var
u=y(b,e[3]),v=[0,y(b,e[2]),u];return m(c[25],v);case
4:var
w=y(b,e[3]),x=[0,y(b,e[2]),w];return m(c[24],x);default:var
z=y(b,e[3]),A=[0,y(b,e[2]),z];return m(c[26],A)}case
1:var
B=[0,O(b,f[1])];return m(c[29],B);case
2:var
C=O(b,f[3]),D=[0,O(b,f[2]),C];return m(c[30],D);case
3:var
E=O(b,f[3]),F=[0,O(b,f[2]),E];return m(c[31],F);case
4:var
G=O(b,f[3]),H=[0,O(b,f[2]),G];return m(c[32],H);default:var
I=bP(b,f[1]),J=[0,a(c[93],I)];return m(c[33],J)}}function
aH(a,b){try{var
c=O(a,b);return c}catch(a){a=u(a);E(k[25],b);throw a}}function
hv(b,e,d){var
g=[0,a(c[97][6],d)],h=m(c[14],g);function
i(d,e){var
f=[0,a(c[97][6],d[1])],g=m(c[14],f),h=[0,y(b,aF(b,d[2])),g],i=[0,m(c[16],h),e];return m(c[15],i)}return t(f[17][16],i,e,h)}function
aI(a,c,b){try{var
d=hv(a,c,b);return d}catch(a){a=u(a);e(o[29],al,[0,c,b]);throw a}}var
L=a(f[17][97],z.caml_int_compare);function
am(b){var
a=b;for(;;)switch(a[0]){case
4:var
a=a[1];continue;case
5:return[0,a[1],0];case
0:case
6:return 0;default:var
c=am(a[2]);return e(L,am(a[1]),c)}}function
aJ(a){if(a){var
b=a[1],c=aJ(a[2]),d=e(L,am(b[3]),c);return e(L,am(b[2]),d)}return a}function
aK(b){var
a=b;for(;;){if(typeof
a!=="number")switch(a[0]){case
0:return aJ([0,a[2],0]);case
1:var
a=a[1];continue;case
5:break;default:var
c=aK(a[3]);return e(L,aK(a[2]),c)}return 0}}function
an(f,b){switch(b[0]){case
0:var
x=[0,e(o[8],f,b[1])],h=c[47],p=i(h),y=0,z=j===p?h[1]:d===p?a(g[2],h):h;return[0,a(c[92],[0,z,y]),x];case
1:var
q=an(f,b[1]),s=an(f,b[2]),A=[1,q[2],s[2]],B=[0,e(c[90],q[1],s[1]),0],l=c[48],t=i(l),C=j===t?l[1]:d===t?a(g[2],l):l;return[0,a(c[92],[0,C,B]),A];case
2:var
u=b[2];if(0===u[0]){var
D=[0,e(o[8],f,u[1])],m=c[63],v=i(m),E=[2,b[1],D],F=0,G=j===v?m[1]:d===v?a(g[2],m):m;return[0,a(c[92],[0,G,F]),E]}return a(I[6],hw);case
3:return a(k[2],hx);case
4:var
H=[0,a(r[22],f)],n=c[62],w=i(n),J=[2,b[1],H],K=0,L=j===w?n[1]:d===w?a(g[2],n):n;return[0,a(c[92],[0,L,K]),J];case
5:return[0,a(c[92],0),[2,b,[0,f]]];default:return[0,a(c[92],0),[6,[2,b,[0,f]]]]}}function
aL(b){switch(b[0]){case
0:var
y=[0,a(r[22],b[1])],f=c[47],p=i(f),z=0,A=j===p?f[1]:d===p?a(g[2],f):f;return[0,a(c[92],[0,A,z]),y];case
1:var
q=aL(b[1]),s=aL(b[2]),B=[1,q[2],s[2]],C=[0,e(c[90],q[1],s[1]),0],h=c[43],t=i(h),D=j===t?h[1]:d===t?a(g[2],h):h;return[0,a(c[92],[0,D,C]),B];case
2:var
u=b[2];if(0===u[0]){var
E=[0,a(r[22],u[1])],l=c[45],v=i(l),F=[2,b[1],E],G=0,H=j===v?l[1]:d===v?a(g[2],l):l;return[0,a(c[92],[0,H,G]),F]}return a(I[6],hy);case
3:return a(k[2],hz);case
4:var
m=c[44],w=i(m),J=b[1],K=0,L=j===w?m[1]:d===w?a(g[2],m):m;return[0,a(c[92],[0,L,K]),J];case
5:var
n=c[46],x=i(n),M=[2,b,[0,o[14]]],N=0,O=j===x?n[1]:d===x?a(g[2],n):n;return[0,a(c[92],[0,O,N]),M];default:var
P=[6,[4,b[1]]];return[0,a(c[92],0),P]}}function
hA(b){return a(f[17][1],b)}function
bU(I,h,H,f){function
b(u){var
f=u[1];if(f){var
h=u[2],l=f[2],w=f[1],x=w[2];if(h){var
v=h[2],y=h[1],z=y[2];if(x===z){var
J=o[11],K=e(o[8],H,y[1]),L=e(o[8],I,w[1]),M=e(o[6],L,K);if(e(r[17],M,J)){var
N=b([0,l,v]),m=c[35],A=i(m),O=j===A?m[1]:d===A?a(g[2],m):m;return[0,O,N]}var
P=b([0,l,v]),n=c[34],B=i(n),Q=j===B?n[1]:d===B?a(g[2],n):n;return[0,Q,P]}if(e(o[19],x,z)){var
R=b([0,l,h]),p=c[36],C=i(p),S=j===C?p[1]:d===C?a(g[2],p):p;return[0,S,R]}var
T=b([0,f,v]),q=c[37],D=i(q),U=j===D?q[1]:d===D?a(g[2],q):q;return[0,U,T]}var
V=b([0,l,0]),s=c[36],E=i(s),W=j===E?s[1]:d===E?a(g[2],s):s;return[0,W,V]}var
F=u[2];if(F){var
X=b([0,0,F[2]]),t=c[37],G=i(t),Y=j===G?t[1]:d===G?a(g[2],t):t;return[0,Y,X]}a(k[46],k[24]);return 0}var
l=b([0,h,f]);return a(c[96],l)}function
ac(f,u){var
b=u[2],h=u[1];switch(h[0]){case
0:switch(b[0]){case
0:var
K=[0,e(o[6],h[1],b[1])],k=c[47],v=i(k),L=0,M=j===v?k[1]:d===v?a(g[2],k):k;return[0,a(c[92],[0,M,L]),K];case
1:var
t=0;break;default:var
t=1}break;case
1:var
A=h[2],n=h[1];if(1===b[0]){var
F=b[1],ae=C(f,F),af=C(f,n);if(e(o[19],af,ae)){var
G=ac(f,[0,A,b]),ag=[1,n,G[2]],ah=[0,a(c[89],G[1]),0],r=c[51],H=i(r),ai=j===H?r[1]:d===H?a(g[2],r):r;return[0,a(c[92],[0,ai,ah]),ag]}var
I=ac(f,[0,h,b[2]]),aj=[1,F,I[2]],ak=[0,a(c[89],I[1]),0],s=c[53],J=i(s),al=j===J?s[1]:d===J?a(g[2],s):s;return[0,a(c[92],[0,al,ak]),aj]}var
X=C(f,b),Y=C(f,n);if(e(o[19],Y,X)){var
B=ac(f,[0,A,b]),Z=[1,n,B[2]],_=[0,a(c[89],B[1]),0],p=c[51],D=i(p),$=j===D?p[1]:d===D?a(g[2],p):p;return[0,a(c[92],[0,$,_]),Z]}var
q=c[54],E=i(q),aa=[1,b,h],ab=0,ad=j===E?q[1]:d===E?a(g[2],q):q;return[0,a(c[92],[0,ad,ab]),aa];default:var
t=0}if(!t)if(1===b[0]){var
x=b[1],S=C(f,h),T=C(f,x);if(e(o[19],T,S)){var
y=ac(f,[0,h,b[2]]),U=[1,x,y[2]],V=[0,a(c[89],y[1]),0],m=c[53],z=i(m),W=j===z?m[1]:d===z?a(g[2],m):m;return[0,a(c[92],[0,W,V]),U]}return[0,a(c[92],0),[1,h,b]]}var
N=C(f,b),O=C(f,h);if(e(o[18],O,N)){var
l=c[54],w=i(l),P=[1,b,h],Q=0,R=j===w?l[1]:d===w?a(g[2],l):l;return[0,a(c[92],[0,R,Q]),P]}return[0,a(c[92],0),[1,h,b]]}function
bc(e,b){switch(e[0]){case
2:var
n=e[1];switch(b[0]){case
2:if(5===n[0]){var
f=c[59],p=i(f),u=[2,[5,n[1]],[1,e[2],b[2]]],v=j===p?f[1]:d===p?a(g[2],f):f;return[0,v,u]}break;case
5:var
h=c[58],q=i(h),w=[2,[5,b[1]],[1,e[2],[0,o[12]]]],x=j===q?h[1]:d===q?a(g[2],h):h;return[0,x,w]}break;case
5:var
r=e[1];switch(b[0]){case
2:var
l=c[57],s=i(l),y=[2,[5,r],[1,b[2],[0,o[12]]]],z=j===s?l[1]:d===s?a(g[2],l):l;return[0,z,y];case
5:var
m=c[56],t=i(m),A=[2,[5,r],[0,o[13]]],C=j===t?m[1]:d===t?a(g[2],m):m;return[0,C,A]}break}B(k[24],e);a(k[32],0);B(k[24],b);a(k[32],0);a(k[46],k[24]);return a(I[6],hB)}function
ao(b){switch(b[0]){case
2:var
l=b[1];if(5===l[0]){var
m=b[2];if(0===m[0])return[0,0,b];var
k=function(b){switch(b[0]){case
0:return b[1];case
1:var
c=k(b[2]),d=k(b[1]);return e(o[6],d,c);default:return a(I[6],hD)}},q=[0,k(m)],f=c[47],n=i(f),r=[2,[5,l[1]],q],s=0,t=j===n?f[1]:d===n?a(g[2],f):f;return[0,[0,t,s],r]}break;case
5:var
h=c[55],p=i(h),u=[2,[5,b[1]],[0,o[12]]],v=0,w=j===p?h[1]:d===p?a(g[2],h):h;return[0,[0,w,v],u]}return a(I[6],hC)}function
ad(b,l){switch(l[0]){case
0:return[0,0,l];case
1:var
h=l[2],k=l[1];switch(h[0]){case
0:var
p=ao(k),D=[1,p[2],[0,h[1]]],E=a(c[92],p[1]);return[0,[0,a(c[88],E),0],D];case
1:var
q=h[1],F=C(b,q);if(C(b,k)===F){var
r=bc(k,q),m=c[52],s=i(m),G=j===s?m[1]:d===s?a(g[2],m):m,t=ad(b,[1,r[2],h[2]]),H=t[2],I=t[1],J=a(c[92],[0,r[1],0]);return[0,[0,G,[0,a(c[88],J),I]],H]}var
u=ao(k),v=ad(b,h),K=[1,u[2],v[2]],L=a(c[92],v[1]),M=a(c[92],u[1]);return[0,[0,e(c[90],M,L),0],K];default:var
N=C(b,h);if(C(b,k)===N){var
w=bc(k,h),x=ad(b,w[2]);return[0,[0,w[1],x[1]],x[2]]}var
y=ao(k),z=ad(b,h),O=[1,y[2],z[2]],P=a(c[92],z[1]),Q=a(c[92],y[1]);return[0,[0,e(c[90],Q,P),0],O]}default:var
A=ao(l),n=c[61],B=i(n),R=[1,A[2],[0,o[11]]],S=0,T=j===B?n[1]:d===B?a(g[2],n):n;return[0,e(f[18],A[1],[0,T,S]),R]}}function
aM(b){if(1===b[0]){var
h=b[1];if(2===h[0])if(5===h[1][0]){var
p=h[2];if(0===p[0])if(e(r[17],p[1],o[11])){var
q=aM(b[2]),k=c[60],s=i(k),v=q[2],w=q[1],x=j===s?k[1]:d===s?a(g[2],k):k;return[0,[0,x,w],v]}}var
l=aM(b[2]),m=l[1],t=[1,h,l[2]];if(a(f[17][47],m))var
n=0;else
var
u=a(c[92],m),n=[0,a(c[89],u),0];return[0,n,t]}return[0,0,b]}function
P(f,b){switch(b[0]){case
1:var
q=P(f,b[1]),r=P(f,b[2]),s=ac(f,[0,q[1],r[1]]),G=[0,s[1],0],H=[0,e(c[90],q[2],r[2]),G],I=a(c[92],H);return[0,s[2],I];case
2:var
t=P(f,b[1]),u=t[2],n=t[1],v=P(f,b[2]),w=v[2],o=v[1];if(0===o[0]){var
x=an(o[1],n),J=[0,x[1],0],K=[0,e(c[90],u,w),J],L=a(c[92],K);return[0,x[2],L]}if(0===n[0]){var
y=an(n[1],o),k=c[65],z=i(k),M=[0,y[1],0],N=j===z?k[1]:d===z?a(g[2],k):k,O=[0,e(c[90],u,w),[0,N,M]],Q=a(c[92],O);return[0,y[2],Q]}var
l=c[42],A=i(l),R=j===A?l[1]:d===A?a(g[2],l):l;return[0,[6,b],R];case
3:var
B=P(f,[1,b[1],[4,b[2]]]),m=c[64],C=i(m),S=[0,B[2],0],T=j===C?m[1]:d===C?a(g[2],m):m,U=a(c[92],[0,T,S]);return[0,B[1],U];case
4:var
D=P(f,b[1]),E=aL(D[1]),V=[0,E[1],0],W=[0,a(c[88],D[2]),V],X=a(c[92],W);return[0,E[2],X];default:var
h=c[42],p=i(h),F=j===p?h[1]:d===p?a(g[2],h):h;return[0,b,F]}}function
bd(b,g){var
d=P(b,g),e=ad(b,d[1]),f=aM(e[2]),h=f[2],i=[0,a(c[92],f[1]),0],j=[0,a(c[92],e[1]),i];return[0,a(c[92],[0,d[2],j]),h]}function
bV(a){switch(a){case
0:return 5;case
1:return 3;case
2:return 4;case
3:return 1;case
4:return 2;default:return 0}}function
bW(k,h,i){var
b=i[3],c=i[2],j=i[1],l=h[1],m=h[4],n=h[3],p=h[2];function
d(c,b,h,g){var
d=bd(k,e(h,c,b)),i=d[2],o=a(bR(k,g),i),q=[0,n,a(f[17][6],m)];return[0,j,c,b,d[1],q,l,p,o]}try{var
q=l?bV(j):j;switch(q){case
0:var
r=0,g=d(c,b,function(b,a){return[1,b,[4,a]]},r);break;case
1:var
s=1,g=d(c,b,function(b,a){return[1,a,[4,b]]},s);break;case
2:var
t=1,g=d(c,b,function(b,a){return[1,b,[4,a]]},t);break;case
3:var
v=1,g=d(c,b,function(b,a){return[1,[1,b,[0,o[14]]],[4,a]]},v);break;case
4:var
w=1,g=d(c,b,function(b,a){return[1,[1,a,[0,o[14]]],[4,b]]},w);break;default:var
x=2,g=d(c,b,function(b,a){return[1,b,[4,a]]},x)}return g}catch(b){b=u(b);if(a(au[4],b))throw b;throw b}}function
V(d,e){var
b=a(c[97][7],e);if(typeof
b!=="number")switch(b[0]){case
0:var
h=b[2],i=b[1];return aN(d,function(b,a){return[1,b,a]},i,h);case
1:var
f=b[2],g=b[1],m=a(c[97][9],g)?0:a(c[97][9],f)?0:1;if(!m)return aN(d,function(b,a){return[2,b,a]},g,f);break;case
2:var
j=b[2],k=b[1];return aN(d,function(b,a){return[3,b,a]},k,j);case
3:return[4,V(d,b[1])];case
4:var
l=[0,o[12]];return[1,V(d,b[1]),l];default:return[0,b[1]]}return[5,a$(e,d)]}function
aN(a,d,c,b){var
f=V(a,c);return e(d,f,V(a,b))}function
ap(c,b,g,n,j,m,l,k){var
h=b[4],i=b[3],d=b[2],e=bJ(c),o=g?[0,[0,e],d]:d,p=g?[0,[1,e],d]:d;if(g){var
q=[0,i,a(f[17][6],h)];t(D[5],c[7],e,q)}var
r=ae(c,[0,n,o,i,[0,0,h]],j,l);return t(m,e,r,ae(c,[0,b[1],p,i,[0,1,h]],j,k))}function
W(a,g,f,e,d,c){var
h=V(a,d),b=bW(a,g,[0,e,h,V(a,c)]);bQ(a,b);return[0,f,b]}function
ae(d,b,h,g){var
f=b[1],a=e(c[97][8],h,g);if(typeof
a==="number")switch(a){case
0:return 0;case
1:return 1;default:return[5,g]}else
switch(a[0]){case
0:return W(d,b,g,0,a[1],a[2]);case
1:return W(d,b,g,5,a[1],a[2]);case
2:return W(d,b,g,4,a[1],a[2]);case
3:return W(d,b,g,1,a[1],a[2]);case
4:return W(d,b,g,3,a[1],a[2]);case
5:return W(d,b,g,2,a[1],a[2]);case
6:return[1,ae(d,[0,1-f,b[2],b[3],[0,2,b[4]]],h,a[1])];case
7:var
k=a[2],l=a[1];return ap(d,b,1-f,f,h,function(c,b,a){return[2,c,b,a]},l,k);case
8:var
m=a[2],n=a[1];return ap(d,b,f,f,h,function(c,b,a){return[3,c,b,a]},n,m);case
9:var
o=a[2],p=a[1];return ap(d,b,1-f,1-f,h,function(c,b,a){return[4,c,b,a]},p,o);default:var
i=a[2],j=a[1],q=e(s[49],i,j),r=e(s[49],j,i);return ap(d,b,f,f,h,function(c,b,a){return[3,c,b,a]},r,q)}}function
bX(c,b){var
d=[1,ae(c,[0,1,0,U,hE],b,a(a2[7],b))];if(K[1]){a(l[2],hF);a(l[2],hG);E(k[24],d);a(l[2],hH)}function
g(d){if(d){var
h=d[1],f=h[1],i=ae(c,[0,0,0,f,0],b,h[2]);if(K[1]){var
j=a(v[1][7],f);e(l[2],hI,j);E(k[24],i);a(l[2],hJ)}return[0,[0,f,i],g(d[2])]}if(K[1])bL(c);return 0}return[0,[0,U,d],g(a(a2[10],b))]}function
M(d,b,c,a){if(typeof
a!=="number")switch(a[0]){case
0:return[0,[0,a[2],b],0];case
1:return Q(d,b,c,a[1]);case
2:var
g=a[1],j=M(d,b,[0,g,c],a[2]),k=M(d,b,[0,g,c],a[3]);return e(f[18],j,k);case
3:var
l=a[3],m=M(d,b,c,a[2]),h=function(a){if(a){var
b=h(a[2]),g=M(d,a[1],c,l);return e(f[18],g,b)}return a};return h(m);case
4:var
i=a[1],n=Q(d,b,[0,i,c],a[2]),o=M(d,b,[0,i,c],a[3]);return e(f[18],n,o)}return[0,b,0]}function
Q(d,c,b,a){if(typeof
a!=="number")switch(a[0]){case
0:return[0,[0,a[2],c],0];case
1:return M(d,c,b,a[1]);case
2:var
j=a[3],k=Q(d,c,b,a[2]),g=function(a){if(a){var
c=g(a[2]),h=Q(d,a[1],b,j);return e(f[18],h,c)}return a};return g(k);case
3:var
h=a[1],l=Q(d,c,[0,h,b],a[2]),m=Q(d,c,[0,h,b],a[3]);return e(f[18],l,m);case
4:var
n=a[3],o=M(d,c,b,a[2]),i=function(a){if(a){var
c=i(a[2]),g=Q(d,a[1],b,n);return e(f[18],g,c)}return a};return i(o)}return[0,c,0]}function
bY(a){function
b(a){if(a){var
c=a[1],d=M(c[1],0,0,c[2]),e=b(a[2]);return t(f[17][122],f[18],d,e)}return hK}return b(a)}function
aO(a){return 0===a[0]?e(l[2],hL,a[1]):e(l[2],hM,a[1])}function
bZ(b){function
h(b){var
h=c[42],n=i(h),s=j===n?h[1]:d===n?a(g[2],h):h;E(k[24],[0,s,b]);a(k[32],0);var
m=b[8],p=a(o[31],m[2]),q=[0,m[3],m[4]];function
r(b){return a(o[29],al)}iT(l[2],hN,m[1],r,q,p);a(l[2],hO);e(f[17][11],aO,b[7]);var
u=b[5][2];function
w(a){switch(a){case
0:return hP;case
1:return hQ;default:return hR}}var
x=e(f[17][12],w,u),y=e(f[15][7],hS,x);e(l[2],hT,y);var
z=b[6]?hU:hW,A=a(v[1][7],b[5][1]);return t(l[2],hV,A,z)}function
m(b){a(l[2],hX);return e(f[17][11],h,b)}return e(f[17][11],m,b)}function
aq(d){var
a=d;for(;;){if(a){var
c=a[2],b=a[1];switch(b[0]){case
6:var
f=aq(c);return e(L,[0,b[1][1],0],f);case
15:var
g=aq(b[3][2]);return e(L,aq(b[2][2]),g);default:var
a=c;continue}}return a}}function
ar(d){var
a=d;for(;;){if(a){var
c=a[2],b=a[1];switch(b[0]){case
5:var
g=ar(c);return[0,b[1],g];case
15:var
h=ar(b[3][2]),i=ar(b[2][2]);return e(f[18],i,h);default:var
a=c;continue}}return a}}function
b0(b,l){function
k(b,a){return b[5]-a[5]|0}function
h(a){if(0===a[0]){var
b=ar(a[1][3]);return e(f[17][40],k,b)}var
c=h(a[3]),d=h(a[2]);return t(f[17][44],k,d,c)}var
n=h(l);function
o(f){var
k=aG(b,f[2]),l=bS(b,k),h=a$(l,b),e=c[97][1],n=i(e),o=j===n?e[1]:d===n?a(g[2],e):e,p=m(c[1],[0,o,l]);bO(b,[5,h],f[5]);return[0,h,p,[0,k,[5,h]],f[2][1]]}return e(f[17][12],o,n)}function
be(c,b){if(b){try{var
h=bb(c,b[1])[7],d=h}catch(a){a=u(a);if(a!==G)throw a;var
d=0}var
e=be(c,b[2]),g=a(f[17][6],d);return t(f[17][53],Y,g,e)}return b}function
b1(b){function
c(c,b){var
d=a(f[17][1],b[2]);return a(f[17][1],c[2])-d|0}try{var
d=e(f[17][40],c,b),g=a(f[17][3],d);return g}catch(b){b=u(b);if(b[1]===gO)return a(k[2],hY);throw b}}function
b2(c,a){function
d(i){var
a=i;for(;;){if(a){var
g=a[2],b=a[1];if(e(f[17][26],b,c)){var
a=g;continue}var
j=bK(b);if(e(f[17][26],j,c))throw k[3];var
h=[0,b,d(g)]}else
var
h=a;return h}}function
b(a){try{var
b=d(a[2]),c=[0,[0,a[1],b]];return c}catch(a){a=u(a);if(a===k[3])return 0;throw a}}return e(f[17][64],b,a)}function
aP(a){if(0===a[0])return a[1][2];var
b=aP(a[3]);return e(L,aP(a[2]),b)}function
b3(j,h){function
b(a){if(typeof
a==="number")return 0===a?m(c[5],[0]):m(c[6],[0]);else
switch(a[0]){case
1:var
d=[0,b(a[1])];return m(c[3],d);case
2:var
f=b(a[3]),g=[0,b(a[2]),f];return m(c[4],g);case
3:var
h=b(a[3]),i=[0,b(a[2]),h];return m(c[2],i);case
4:var
j=b(a[3]),k=b(a[2]);return e(s[49],k,j);default:return a[1]}}function
g(e,g,f){var
h=d(g),c=d(f);if(h){var
i=h[1];return c?[0,a(e,[0,i,c[1]])]:[0,a(e,[0,i,[5,b(f)]])]}if(c)var
k=c[1],j=[0,a(e,[0,[5,b(g)],k])];else
var
j=c;return j}function
d(a){if(typeof
a!=="number")switch(a[0]){case
0:var
c=e(f[17][26],a[2][8][1],j),h=c?[0,a]:c;return h;case
1:var
b=d(a[1]),i=b?[0,[1,b[1]]]:b;return i;case
2:var
k=a[1],l=a[3],m=a[2];return g(function(a){return[2,k,a[1],a[2]]},m,l);case
3:var
n=a[1],o=a[3],p=a[2];return g(function(a){return[3,n,a[1],a[2]]},p,o);case
4:var
q=a[1],r=a[3],s=a[2];return g(function(a){return[4,q,a[1],a[2]]},s,r)}return 0}var
i=d(h);return i?i[1]:[5,b(h)]}function
aQ(b,a){if(0===a[0]){var
c=a[1],d=e(f[17][12],k[20],c[2]),g=e(f[15][7],hZ,d),h=t(l[4],h0,c[1],g);return e(k[49],b,h)}return b$(l[1],b,h1,a[1],aQ,a[2],aQ,a[3])}function
aR(b,c){function
g(e,d,c){if(c){var
h=c[1];if(0===h[0]){var
i=h[1],k=aR(b,a(f[17][6],[0,[1,i],d]));return[1,i,g(e,[0,[0,i],d],c[2]),k]}var
j=h[1],l=g(e,[0,[1,j],d],c[2]);return[1,j,aR(b,a(f[17][6],[0,[0,j],d])),l]}return[0,e]}var
h=b2(c,b);try{var
d=b1(h)}catch(d){d=u(d);var
i=a(f[17][1],b),j=a(f[17][1],h);t(l[2],h2,j,i);e(f[17][11],aO,c);throw d}var
k=d[2],m=a(f[17][6],c);return g(d[1],m,k)}function
bf(i,m){var
c=0,b=m,n=i[2],o=i[1];a:for(;;){if(b){var
j=b[1];if(0===j[0]){var
l=j[1];if(e(v[1][1],o,l[1])){var
d=[0,l[2],n];for(;;){var
f=d[1];if(f){var
g=d[2];if(g)if(bH(f[1],g[1])){var
d=[0,f[2],g[2]];continue}var
h=0}else
var
h=[0,d[2]];if(h)return[0,c,h[1]];var
c=c+1|0,b=b[2];continue a}}}var
c=c+1|0,b=b[2];continue}return a(k[2],h3)}}function
bg(k){function
l(f){switch(f){case
0:var
b=c[80];break;case
1:var
b=c[81];break;default:var
b=c[82]}var
e=i(b);return j===e?b[1]:d===e?a(g[2],b):b}var
m=e(f[17][12],l,k),b=c[79],h=i(b),n=j===h?b[1]:d===h?a(g[2],b):b;return e(c[94],n,m)}function
x(b,c){try{var
g=t(f[17][79],Y,[1,c],b);return g}catch(b){b=u(b);if(b===G){var
d=e(l[4],h4,c);return a(k[2],d)}throw b}}function
b4(n,b){function
m(h,ao){var
l=ao;for(;;){if(l){var
b=l[1];switch(b[0]){case
0:var
H=b[2],ap=x(h,b[1][1]),aq=a(c[93],ap),ar=m(h,l[2]),as=a(f[17][1],H[3]),at=a(c[93],as),au=aI(n,H[3],H[4]),av=a(c[97][6],b[4]),aw=[0,a(c[97][6],b[3]),av,au,at,ar,aq],q=c[68],L=i(q),ax=j===L?q[1]:d===L?a(g[2],q):q;return a(A,[0,ax,aw]);case
1:var
r=b[2],s=b[1],M=e(o[26],s[4],r),ay=e(o[8],M,r),az=e(o[7],s[4],ay),aA=s[3],aB=function(a){return e(o[9],a,r)},N=e(o[43],aB,aA),aC=x(h,s[1]),aD=a(c[93],aC),aE=a(f[17][1],N),aH=a(c[93],aE),aJ=aI(n,N,M),aK=a(c[97][6],az),aL=[0,a(c[97][6],r),aK,aJ,aH,aD],t=c[69],O=i(t),aM=j===O?t[1]:d===O?a(g[2],t):t;return a(A,[0,aM,aL]);case
3:var
I=b[2],J=b[1],aN=J[3],aO=function(a){return e(o[9],a,I)},P=e(o[43],aO,aN),aP=e(o[26],J[4],I),aQ=x(h,J[1]),aR=a(c[93],aQ),aS=m(h,l[2]),aT=a(f[17][1],P),aU=a(c[93],aT),aV=aI(n,P,aP),aW=[0,a(c[97][6],I),aV,aU,aS,aR],u=c[70],Q=i(u),aX=j===Q?u[1]:d===Q?a(g[2],u):u;return a(A,[0,aX,aW]);case
4:var
R=b[3],S=R[2],T=R[1],U=b[2],V=U[2],W=U[1],aY=x(h,V[1]),aZ=x(h,S[1]),a0=bU(W,V[3],T,S[3]),a1=m([0,[1,b[1]],h],l[2]),a2=a(c[93],aZ),a3=a(c[97][6],T),a4=a(c[93],aY),a5=[0,a(c[97][6],W),a4,a3,a2,a0,a1],v=c[71],X=i(v),a6=j===X?v[1]:d===X?a(g[2],v):v;return a(A,[0,a6,a5]);case
5:var
p=b[1],Y=p[4],Z=p[3],_=p[2],a7=x(h,Z[1]),a8=x(h,_[1]),a9=aF(n,p[5]),a_=aG(n,_),a$=bd(n,[1,aG(n,Z),[2,[1,[4,a9],a_],[0,Y]]]),ba=m([0,[1,p[1][1]],h],l[2]),bb=a(c[93],a8),bc=a(c[93],a7),be=a$[1],bf=[0,a(c[97][6],Y),be,bc,bb,ba],w=c[72],$=i(w),bg=j===$?w[1]:d===$?a(g[2],w):w;return a(A,[0,bg,bf]);case
9:var
aa=b[1],bh=a(f[17][1],aa[3]),bi=a(c[93],bh),bj=x(h,b[2][1]),bk=a(c[93],bj),bl=x(h,aa[1]),bm=[0,bi,a(c[93],bl),bk],y=c[73],ab=i(y),bn=j===ab?y[1]:d===ab?a(g[2],y):y;return a(A,[0,bn,bm]);case
10:var
K=b[2],ac=b[1];if(0===b[3]){var
bo=x(h,K[1]),bp=a(c[93],bo),bq=x(h,ac[1]),br=a(c[93],bq),bs=a(f[17][1],K[3]),bt=[0,a(c[93],bs),br,bp],z=c[78],ad=i(z),bu=j===ad?z[1]:d===ad?a(g[2],z):z;return a(A,[0,bu,bt])}var
bv=x(h,K[1]),bw=a(c[93],bv),bx=x(h,ac[1]),by=[0,a(c[93],bx),bw],B=c[77],ae=i(B),bz=j===ae?B[1]:d===ae?a(g[2],B):B;return a(A,[0,bz,by]);case
11:var
af=b[2],bA=x(h,af[1]),bB=x(h,b[3]),bC=m([0,[1,b[1]],h],l[2]),bD=a(c[93],bB),bE=a(c[93],bA),bF=a(f[17][1],af[3]),bG=[0,a(c[93],bF),bE,bD,bC],C=c[74],ag=i(C),bH=j===ag?C[1]:d===ag?a(g[2],C):C;return a(A,[0,bH,bG]);case
12:var
bI=x(h,b[1]),bJ=[0,a(c[93],bI)],D=c[66],ah=i(D),bK=j===ah?D[1]:d===ah?a(g[2],D):D;return a(A,[0,bK,bJ]);case
13:var
bL=x(h,b[1]),bM=[0,a(c[93],bL)],E=c[76],ai=i(E),bN=j===ai?E[1]:d===ai?a(g[2],E):E;return a(A,[0,bN,bM]);case
14:var
bO=x(h,b[1]),bP=[0,a(c[93],bO)],F=c[67],aj=i(F),bQ=j===aj?F[1]:d===aj?a(g[2],F):F;return a(A,[0,bQ,bP]);case
15:var
ak=b[3],al=b[2],am=b[1],bR=x(h,am[1]),bS=m([0,[1,al[1]],h],al[2]),bT=m([0,[1,ak[1]],h],ak[2]),bV=a(c[93],bR),bW=a(f[17][1],am[3]),bX=[0,a(c[93],bW),bV,bS,bT],G=c[75],an=i(G),bY=j===an?G[1]:d===an?a(g[2],G):G;return a(A,[0,bY,bX]);case
16:return a(k[2],h5);default:var
l=l[2];continue}}return a(k[2],h6)}}return function(a){return m(b,a)}}function
aS(h,g,d){if(0===d[0]){var
i=d[1];return bh(i[3],h,g,i[2])}var
j=d[1];try{var
x=e(D[6],h[7],j),b=x}catch(c){c=u(c);if(c!==G)throw c;var
o=e(l[4],h7,j),b=a(k[2],o)}var
n=bf(b,g),p=e(f[18],b[2],h8),q=[0,[0,b[1],p]],r=e(f[18],b[2],h9),s=aS(h,[0,[0,[0,b[1],r]],g],d[3]),t=aS(h,[0,q,g],d[2]),v=bg(n[2]),w=[0,a(c[93],n[1]),v,t,s];return m(c[83],w)}function
bh(i,h,g,b){if(b){var
j=b[1];try{var
v=e(D[6],h[6],j),d=v}catch(b){b=u(b);if(b!==G)throw b;var
p=e(l[4],h_,j),d=a(k[2],p)}var
n=bf(d[5],g),o=n[2],q=d[6]?e(f[18],o,h$):o,r=bh(i,h,[0,[1,d[8][1]],g],b[2]),s=bg(q),t=[0,a(c[93],n[1]),s,r];return m(c[84],t)}var
w=[0,a(b4(h,g),i)];return m(c[85],w)}function
b5(b,E,P){var
F=[0,0];function
Q(i){var
g=F[1];function
j(a){return a[8]}var
m=e(f[17][12],j,i),c=e(o[69],[0,a7,a9,al],m),d=aq(c),h=be(b,d);if(K[1]){e(l[2],ia,g);e(o[36],al,c);a(k[27],ib);var
n=function(a){return e(l[2],ic,a)};e(f[17][11],n,d);a(k[27],id);e(f[17][11],aO,h);a(l[2],ie)}F[1]++;return[0,[0,g,d,c],h]}if(K[1])a(l[2],ig);var
n=aR(e(f[17][12],Q,P),0);if(K[1]){aQ(k[24],n);a(k[32],0)}var
G=aP(n);function
R(a){return bb(b,a)}var
x=e(f[17][12],R,G);function
S(a){return a[5][1]}var
V=e(f[17][12],S,x),W=a(f[17][95],V),p=[0,U,t(f[17][88],v[1][1],U,W)];function
X(a){return t(f[17][br],v[1][1],a,E)}var
z=e(f[17][12],X,p),Y=aJ(x),Z=e(L,Y,aK(t(f[17][br],v[1][1],U,E))),h=b0(b,n);function
_(a){return a[1]}var
aa=e(f[17][12],_,h);function
ac(a){return a[2]}var
ad=e(f[17][12],ac,h);function
ae(a){return[1,a[4]]}var
af=e(f[17][12],ae,h),ag=e(f[18],Z,aa);function
H(d,c){if(c){var
e=c[1],g=a(ba(b),e);t(D[5],b[4],e,d);var
f=[0,g,H(d+1|0,c[2])]}else
var
f=c;return f}var
ah=H(0,ag),q=c[97][1],I=i(q),ai=j===I?q[1]:d===I?a(g[2],q):q,aj=e(c[94],ai,ah);function
ak(d){var
a=d[3],e=y(b,a[2]),f=[0,y(b,a[1]),e];return m(c[21],f)}var
am=e(f[17][12],ak,h);if(z){var
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
ao(a){return aH(b,b3(G,a))}var
ap=e(f[17][12],ao,an),ar=a(c[95],b[2]),as=e(f[18],am,ap),r=c[20],M=i(r),at=j===M?r[1]:d===M?a(g[2],r):r,au=[0,J,ar,aj,e(c[94],at,as)],av=m(c[86],au);function
aw(b){function
d(a){if(a){if(1===a[1]){var
e=[0,d(a[2])];return m(c[11],e)}var
f=[0,d(a[2])];return m(c[10],f)}var
g=[0,b[4]],h=b[6]?c[12]:c[13];return m(h,g)}var
e=t(f[17][79],v[1][1],b[5][1],p),g=0===e?0:e+a(f[17][1],h)|0,i=d(b[5][2]),j=[0,a(c[93],g),i];return m(c[9],j)}var
ax=e(f[17][12],aw,x),u=c[8],N=i(u),ay=j===N?u[1]:d===N?a(g[2],u):u,az=e(c[94],ay,ax),aA=a(f[17][4],p);function
aB(a){return[0,[0,a,0]]}var
aC=e(f[17][12],aB,aA),aD=aS(b,e(f[18],[0,[0,[0,U,0]],af],aC),n),w=c[7],O=i(w),aE=j===O?w[1]:d===O?a(g[2],w):w,aF=a($[85],aE),aG=a(T[66][8],aF),aI=a(T[66][8],$[66]),aL=m(c[87],[0,aD,az]),aM=a($[85],aL),aN=a(T[66][8],aM),aT=a($[52],av),aU=a(T[66][8],aT),aV=a(f[17][4],p),aW=e(f[17][12],s[113],aV),aX=e(f[18],ad,aW),aY=a($[148],aX);return e(ab,e(ab,e(ab,e(ab,e(ab,a(T[66][8],aY),aU),aN),bG),aI),aG)}var
bi=[0,o,K,bG,gS,ab,A,bH,U,bI,bJ,bK,gU,bL,a7,bM,a9,bN,al,a_,bO,aF,a$,ba,bP,g3,bQ,bb,B,E,C,bR,aG,m,bS,bT,y,aH,aI,L,am,aJ,aK,an,aL,hA,bU,ac,bc,ao,ad,aM,P,bd,bV,bW,V,aN,ap,W,ae,bX,M,Q,bY,aO,bZ,aq,ar,b0,be,b1,b2,aP,b3,aQ,aR,bf,bg,x,b4,aS,bh,b5,function(b){a(H[11],ih);bM(0);bN(0);try{var
c=bI(0),d=bX(c,b),e=bY(d);if(K[1])bZ(e);var
f=a(b5(c,d,e),b);return f}catch(b){b=u(b);if(b===o[28])return a(I[6],ii);throw b}}];aV(302,bi,"Romega_plugin.Refl_omega");a(bj[12],io);function
as(b){var
c=e(bk[13],v[1][5],ip),d=a(v[5][4],c),f=a(v[6][4],b),g=e(v[13][2],[0,d],f),h=a(aT[6],g);return a(b6[17],h)}function
aU(b){var
c=e(f[17][96],il[29],b);function
d(b){if(n(b,iq)){if(n(b,ir)){if(n(b,is)){if(n(b,it)){var
c=e(k[16],iu,b);return a(I[6],c)}return as(iv)}return as(iw)}return as(ix)}return as(iy)}var
g=e(bk[13],d,c),h=a(T[66][1],bi[84]),i=e(aa[70][3],$[28],h),j=a(aa[70][20],g),l=a(T[55],j),m=a(aa[70][28],l);return e(aa[70][3],m,i)}function
iz(d){var
b=[28,[0,0,[31,b7[4],[0,[0,X,iA],0],0]]],c=a(v[1][5],iB);return bl(aT[4],1,0,c,b)}var
iC=[0,function(b,a){return aU(0)}];t(aT[9],0,[0,X,iD],iC);e(bj[19],iz,X);var
iE=0,iH=[0,function(b){return b?a(k[2],iF):function(a){return aU(iG)}},iE],iJ=[0,function(b){if(b)if(!b[2]){var
c=b[1],d=a(b8[17],b9[4]),f=a(b8[6],d),g=e(b6[2][7],f,c);return function(a){return aU(e(bk[13],v[1][7],g))}}return a(k[2],iI)},iH],iK=a(im[12],iJ);t(aT[9],0,[0,X,iL],iK);function
iM(f){var
d=a(v[1][6],iO),b=b9[4],c=0;if(0===b[0])return e(ik[4],[0,X,iR],[0,[0,iQ,[0,iP,[0,[1,b7[4],[0,[5,[0,b[1]]]],d],c]]],iN]);throw[0,ij,iS]}e(bj[19],iM,X);var
b_=[0,X,as,aU];aV(314,b_,"Romega_plugin.G_romega");aV(315,[0,c,bi,b_],"Romega_plugin");return});
