(function(a){"use strict";var
ch="xO",cm=" - ",cn="not",cC=140,br=": ",l=250,cl="Z.succ",cA="not a number",cB="Z.pred",bv="Z.opp",cr="xH",a0="Zpos",H=124,cz="REIFED PROBLEM\n\n",f=246,ck="FF",bp="Z.sub",cI="romega_plugin",cu="True",au="Z",cy="Extension: cannot occur",S="romega",cx="\n====================================\n",bu="N",cF="False",ct="with",bq="Z.mul",bs=118,cE="Prop",bt="romega'",aZ="",cq="or",cw="TT",a1="Omega",cg="=SYSTEM===================================\n",cp="Exception in tactic extend ",aY="Zneg",T=136,bo="Z.add",cj="positive",aX="Z0",cv="  Depends on:",cD="nat",cH="  CONCL: ",cs="and",cG="Omega: Can't solve a goal with non-linear products",cf="C_MULT_OPP_LEFT",ci="\n------------------------------------\n",co="\n",ce="xI",$="Coq",A=a.jsoo_runtime,_=A.caml_equal,b=A.caml_new_string,k=A.caml_obj_tag,aW=A.caml_register_global,d=A.caml_string_notequal,u=A.caml_wrap_exception;function
i(a,b){return a.length==1?a(b):A.caml_call_gen(a,[b])}function
g(a,b,c){return a.length==2?a(b,c):A.caml_call_gen(a,[b,c])}function
v(a,b,c,d){return a.length==3?a(b,c,d):A.caml_call_gen(a,[b,c,d])}function
bn(a,b,c,d,e){return a.length==4?a(b,c,d,e):A.caml_call_gen(a,[b,c,d,e])}function
ja(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):A.caml_call_gen(a,[b,c,d,e,f])}function
ag(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):A.caml_call_gen(a,[b,c,d,e,f,g])}function
cd(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):A.caml_call_gen(a,[b,c,d,e,f,g,h])}var
q=A.caml_get_global_data(),Z=b(cI),h=q.CamlinternalLazy,t=q.Term,s=q.Bigint,C=q.Errors,a3=q.Tacmach,av=q.Logic,x=q.Names,m=q.Pervasives,a2=q.Univ,J=q.Coqlib,bw=q.Global,a4=q.Nametab,j=q.Util,n=q.Printf,F=q.Hashtbl,I=q.Not_found,aa=q.Tactics,V=q.Proofview,bJ=q.Invalid_argument,w=q.Pp,a7=q.Feedback,ab=q.Tacticals,cb=q.Constrarg,b$=q.Loc,bm=q.List,ca=q.Genarg,b_=q.Tacinterp,aU=q.Tacenv,bl=q.Mltop,bx=[0,b($),[0,b(S),[0,b("ReflOmegaCore"),0]]],gJ=b(bo),gK=b(bq),gL=b(bv),gM=b(cB),gN=b(bp),gO=b(cl),gP=b(aX),gQ=b(aY),gR=b(a0),gC=b("Z.ge"),gD=b("Z.gt"),gE=b("Z.le"),gF=b("Z.lt"),gG=b("Zne"),gH=b("eq"),gI=[1,b(au),0],gs=b(bo),gt=b(bq),gu=b(bv),gv=b(cB),gw=b(bp),gx=b(cl),gy=b(aX),gz=b(aY),gA=b(a0),gj=b(cr),gk=b(ce),gl=b(ch),gm=b(cA),gn=b(aX),go=b(aY),gp=b(a0),gq=b(cA),gi=b(aY),gh=b(a0),gg=b(aX),gf=b(ce),ge=b(ch),gd=b(cr),gb=b(bp),f$=b(bv),f9=b(bq),f7=b(bo),f5=b(au),fZ=b(cF),f0=b(cu),f1=b(cs),f2=b("iff"),f3=b(cn),f4=b(cq),fT=b("nil"),fS=b("cons"),fQ=[0,b("Init"),[0,b("Datatypes"),0]],fR=b(aZ),fP=b("O"),fO=b("S"),fL=b("do_omega"),fJ=b("interp_goal_concl"),fH=b("E_SOLVE"),fF=b("E_EXTRACT"),fD=b("E_SPLIT"),fB=b("D_mono"),fz=b("D_right"),fx=b("D_left"),fv=b("direction"),ft=b("O_NEGATE_CONTRADICT_INV"),fr=b("O_NEGATE_CONTRADICT"),fp=b("O_CONSTANT_NUL"),fn=b("O_SPLIT_INEQ"),fl=b("O_MERGE_EQ"),fj=b("O_CONTRADICTION"),fh=b("O_STATE"),ff=b("O_SUM"),fd=b("O_EXACT_DIVIDE"),fb=b("O_NOT_EXACT_DIVIDE"),e$=b("O_DIV_APPROX"),e9=b("O_CONSTANT_NEG"),e7=b("O_CONSTANT_NOT_NUL"),e5=b("C_MULT_COMM"),e3=b("C_MINUS"),e1=b("C_MULT_ASSOC_REDUCED"),eZ=b(cf),eX=b("C_RED6"),eV=b("C_RED5"),eT=b("C_RED4"),eR=b("C_RED3"),eP=b("C_RED2"),eN=b("C_RED1"),eL=b("C_RED0"),eJ=b("C_PLUS_COMM"),eH=b("C_PLUS_PERMUTE"),eF=b("C_PLUS_ASSOC_L"),eD=b("C_PLUS_ASSOC_R"),eB=b("C_MULT_ASSOC_R"),ez=b(cf),ex=b("C_MULT_PLUS_DISTR"),ev=b("C_REDUCE"),et=b("C_OPP_ONE"),er=b("C_OPP_MULT_R"),ep=b("C_OPP_OPP"),en=b("C_OPP_PLUS"),em=b("C_NOP"),el=b("C_SEQ"),ek=b("C_RIGHT"),ej=b("C_LEFT"),ei=b("C_DO_BOTH"),eg=b("F_right"),ee=b("F_left"),ec=b("F_cancel"),ea=b("F_equal"),d$=b("t_fusion"),d9=b("Tprop"),d7=b("Timp"),d5=b("Tand"),d3=b("Tor"),d1=b("Tnot"),dZ=b("FalseTerm"),dX=b("TrueTerm"),dV=b("NeqTerm"),dT=b("GtTerm"),dR=b("LtTerm"),dP=b("GeqTerm"),dN=b("LeqTerm"),dL=b("EqTerm"),dJ=b("proposition"),dH=b("Tvar"),dF=b("Tminus"),dD=b("Topp"),dB=b("Tmult"),dz=b("Tplus"),dx=b("Tint"),dv=b("P_STEP"),dt=b("P_INVERT"),dr=b("P_RIGHT"),dp=b("P_LEFT"),dm=b("pair_step"),dk=b("h_step"),di=b("I"),dg=b(cF),de=b(cu),dc=b(cq),da=b(cn),c_=b(cs),c8=b("eq_refl"),cP=b("Omega: Not a quantifier-free goal"),cM=b("."),cN=b(aZ),cO=b(aZ),cL=[0,b(au),[0,b(bu),[0,b("Pos"),0]]],cQ=b("Const_omega.Destruct"),cS=[0,b($),[0,b("Logic"),[0,b("Decidable"),0]]],cT=[0,b("ZOmega"),0],cW=[0,[0,b($),[0,b("Lists"),[0,b("List"),0]]],0],c2=[0,[0,b($),[0,b("Numbers"),[0,b("BinNums"),0]]],0],c3=[0,[0,b($),[0,b("ZArith"),[0,b("BinInt"),0]]],0],c4=b(a1),c5=b(a1),c6=b(a1),c7=b(a1),g9=[0,[2,0,0],b("%s")],g_=[0,[12,40,[15,[11,b(" + "),[15,[12,41,0]]]]],b("(%a + %a)")],g$=[0,[12,40,[15,[11,b(" * "),[15,[12,41,0]]]]],b("(%a * %a)")],ha=[0,[12,40,[15,[11,b(cm),[15,[12,41,0]]]]],b("(%a - %a)")],hb=[0,[11,b("~ "),[15,0]],b("~ %a")],hc=[0,[12,86,[4,0,[0,2,2],0,0]],b("V%02d")],hd=[0,[12,63,0],b("?")],he=[0,[11,b(cw),0],b(cw)],hf=[0,[11,b(ck),0],b(ck)],hg=b("="),hi=b("<="),hj=b(">="),hk=b(">"),hl=b("<"),hm=b("!="),hh=[0,[15,[12,32,[2,0,[12,32,[15,0]]]]],b("%a %s %a")],hn=[0,[11,b("not("),[15,[12,41,0]]],b("not(%a)")],ho=[0,[12,40,[15,[11,b(" or "),[15,[12,41,0]]]]],b("(%a or %a)")],hp=[0,[12,40,[15,[11,b(" and "),[15,[12,41,0]]]]],b("(%a and %a)")],hq=[0,[12,40,[15,[11,b(" => "),[15,[12,41,0]]]]],b("(%a => %a)")],hr=[0,[11,b(cE),0],b(cE)],hs=b("weight"),ht=b("weight minus"),hz=b(cG),hA=b("scalar minus"),hB=b(cG),hC=b("negate minus"),h2=b(" "),h3=[0,[4,0,0,0,[12,91,[2,0,[12,93,0]]]],b("%d[%s]")],h4=[0,[12,83,[4,0,0,0,[12,40,[15,[12,44,[15,[12,41,0]]]]]]],b("S%d(%a,%a)")],h5=[0,[4,0,0,0,[11,b(cm),[4,0,0,0,[12,10,0]]]],b("%d - %d\n")],h_=[0,[11,b("Cannot find constructor "),[4,0,0,0,0]],b("Cannot find constructor %d")],h$=[0,0,0],ia=[0,1,0],ib=[0,[11,b("Cannot find equation "),[4,0,0,0,0]],b("Cannot find equation %d")],ic=[0,2,0],ik=[0,b($),[0,b(S),[0,b("ROmega"),0]]],il=b("ROmega can't solve this system"),ig=[0,[12,32,[4,0,0,0,0]],b(" %d")],id=[0,[11,b("SYSTEME "),[4,0,0,0,[12,10,0]]],b("SYSTEME %d\n")],ie=b("\n  Depend :"),ih=b("\n  Split points :"),ii=[0,[11,b(ci),0],b(ci)],ij=[0,[11,b(cx),0],b(cx)],h8=b("not_treated"),h9=b("no contradiction"),h7=[0,[11,b("get_hyp "),[4,0,0,0,0]],b("get_hyp %d")],h6=b("find_path"),h1=b("select_smaller"),h0=[0,[11,b(cg),0],b(cg)],hS=b("L"),hT=b("R"),hU=b("M"),hR=[0,[11,b(cv),0],b(cv)],hV=b(aZ),hW=[0,[11,b("\n  Path: "),[2,0,0]],b("\n  Path: %s")],hX=b("yes"),hZ=b("no"),hY=[0,[11,b("\n  Origin: "),[2,0,[11,b(" (negated : "),[2,0,[11,b(")\n\n"),0]]]]],b("\n  Origin: %s (negated : %s)\n\n")],hQ=[0,[11,b("  E"),[4,0,0,0,[11,b(" : "),[15,[12,32,[2,0,[11,b(" 0\n"),0]]]]]]],b("  E%d : %a %s 0\n")],hO=[0,[11,b(" L"),[4,0,0,0,0]],b(" L%d")],hP=[0,[11,b(" R"),[4,0,0,0,0]],b(" R%d")],hN=[0,0,0],hL=[0,[11,b("  "),[2,0,[11,b(br),0]]],b("  %s: ")],hM=[0,[12,10,0],b(co)],hH=[0,2,0],hI=[0,[11,b(cz),0],b(cz)],hJ=[0,[11,b(cH),0],b(cH)],hK=[0,[12,10,0],b(co)],hG=b("condense.1"),hF=b("reduce_factor.1"),hE=b("shrink.1"),hx=[0,[4,0,0,0,[11,b(" -> "),[4,0,0,0,[12,10,0]]]],b("%d -> %d\n")],hw=[0,[11,b("Atome "),[4,0,0,0,[11,b(" non trouv\xc3\xa9\n"),0]]],b("Atome %d non trouv\xc3\xa9\n")],hu=b("CO"),hv=b("compile_equation"),g8=[0,[11,b("Omega Equation "),[4,0,0,0,[11,b(" non trouv\xc3\xa9e\n"),0]]],b("Omega Equation %d non trouv\xc3\xa9e\n")],g7=b("get_prop"),g5=b("get_reified_atom"),g4=b("unintern"),g3=[0,[11,b("OV"),[4,0,0,0,0]],b("OV%d")],gY=[0,[12,40,[0,[4,0,[0,2,2],0,[12,41,0]]]],b("(%c%02d)")],gZ=b(" := "),g0=b("  ===============================\n\n"),g1=b("ENVIRONMENT OF PROPOSITIONS :"),g2=b("ENVIRONMENT OF TERMS :"),gW=b("__goal__"),i4=[0,[0,[0,b(S)],[0,[0,b(ct)],[0,[0,b("*")],0]]],0],i5=b("$l"),i9=[0,b("plugins/romega/g_romega.ml4"),1,0],i6=[0,b(ct)],i7=[0,b(S)],i8=b(bt),iZ=b(cy),iX=[0,b(cD),[0,b(cj),[0,b(bu),[0,b(au),0]]]],iW=b(cy),iD=b(S),iE=b(S),it=b(bu),iu=b(au),iv=b(cD),iw=b(cj),iy=b("zify_positive"),iz=b("zify_nat"),iA=b("zify_op"),iB=b("zify_N"),ix=b("No ROmega knowledge base for type "),is=[0,b("PreOmega"),[0,b("omega"),[0,b($),0]]],ir=b(cI),i$=b(S),iG=b(br),iH=b(S),iJ=b(cp),i2=b(bt),iO=b(br),iP=b(bt),iR=b(cp),cK=q.Globnames,cJ=q.Universes,gS=q.Failure,gT=q.Printer,gU=q.Omega_plugin,im=q.Assert_failure,io=q.Tacentries,ip=q.String,iq=q.Array;function
a5(a){var
e=i(a4[41],a),b=i(x[5][5],e);if(b)var
c=i(x[1][7],b[1]),f=g(j[15][45][2],c,cL)?g(m[16],c,cM):cN,d=f;else
var
d=cO;var
h=i(a4[42],a),k=i(x[1][7],h);return g(m[16],d,k)}function
ah(a){var
d=i(t[39],a),c=d[2],b=i(t[cC],d[1]);switch(b[0]){case
1:if(!c)return[0,i(x[1][7],b[1])];break;case
6:if(b[1]){if(!c)return i(C[6],cP)}else
if(!c)return[2,b[2],b[3]];break;case
10:return[1,a5([1,b[1][1]]),c];case
11:return[1,a5([2,b[1][1]]),c];case
12:return[1,a5([3,b[1][1]]),c]}return 0}var
cR=[248,cQ,A.caml_fresh_oo_id(0)];function
by(a){var
d=i(t[39],a),b=i(t[cC],d[1]);switch(b[0]){case
10:var
c=[1,b[1][1]];break;case
11:var
c=[2,b[1][1]];break;case
12:var
c=[3,b[1][1]];break;default:throw cR}var
e=d[2];return[0,i(a4[42],c),e]}var
cU=[0,g(m[22],bx,cT),0],cV=g(m[22],[0,bx,0],cU),cX=g(m[22],cW,cV),cY=g(m[22],J[9],cX),cZ=g(m[22],J[8],cY),c0=g(m[22],[0,cS,0],cZ),c1=g(m[22],J[10],c0),K=g(J[6],c4,J[10]),c=g(J[6],c5,c1),aw=g(J[6],c6,c3),U=g(J[6],c7,c2),c9=[f,function(a){return i(K,c8)}],c$=[f,function(a){return i(K,c_)}],db=[f,function(a){return i(K,da)}],dd=[f,function(a){return i(K,dc)}],df=[f,function(a){return i(K,de)}],dh=[f,function(a){return i(K,dg)}],dj=[f,function(a){return i(K,di)}],dl=[f,function(a){return i(c,dk)}],dn=[f,function(a){return i(c,dm)}],dq=[f,function(a){return i(c,dp)}],ds=[f,function(a){return i(c,dr)}],du=[f,function(a){return i(c,dt)}],dw=[f,function(a){return i(c,dv)}],dy=[f,function(a){return i(c,dx)}],dA=[f,function(a){return i(c,dz)}],dC=[f,function(a){return i(c,dB)}],dE=[f,function(a){return i(c,dD)}],dG=[f,function(a){return i(c,dF)}],dI=[f,function(a){return i(c,dH)}],dK=[f,function(a){return i(c,dJ)}],dM=[f,function(a){return i(c,dL)}],dO=[f,function(a){return i(c,dN)}],dQ=[f,function(a){return i(c,dP)}],dS=[f,function(a){return i(c,dR)}],dU=[f,function(a){return i(c,dT)}],dW=[f,function(a){return i(c,dV)}],dY=[f,function(a){return i(c,dX)}],d0=[f,function(a){return i(c,dZ)}],d2=[f,function(a){return i(c,d1)}],d4=[f,function(a){return i(c,d3)}],d6=[f,function(a){return i(c,d5)}],d8=[f,function(a){return i(c,d7)}],d_=[f,function(a){return i(c,d9)}],ax=[f,function(a){return i(c,d$)}],eb=[f,function(a){return i(c,ea)}],ed=[f,function(a){return i(c,ec)}],ef=[f,function(a){return i(c,ee)}],eh=[f,function(a){return i(c,eg)}],ai=[f,function(a){return i(c,ei)}],aj=[f,function(a){return i(c,ej)}],ak=[f,function(a){return i(c,ek)}],al=[f,function(a){return i(c,el)}],r=[f,function(a){return i(c,em)}],eo=[f,function(a){return i(c,en)}],eq=[f,function(a){return i(c,ep)}],es=[f,function(a){return i(c,er)}],eu=[f,function(a){return i(c,et)}],ew=[f,function(a){return i(c,ev)}],ey=[f,function(a){return i(c,ex)}],eA=[f,function(a){return i(c,ez)}],eC=[f,function(a){return i(c,eB)}],eE=[f,function(a){return i(c,eD)}],eG=[f,function(a){return i(c,eF)}],eI=[f,function(a){return i(c,eH)}],eK=[f,function(a){return i(c,eJ)}],eM=[f,function(a){return i(c,eL)}],eO=[f,function(a){return i(c,eN)}],eQ=[f,function(a){return i(c,eP)}],eS=[f,function(a){return i(c,eR)}],eU=[f,function(a){return i(c,eT)}],eW=[f,function(a){return i(c,eV)}],eY=[f,function(a){return i(c,eX)}],e0=[f,function(a){return i(c,eZ)}],e2=[f,function(a){return i(c,e1)}],e4=[f,function(a){return i(c,e3)}],e6=[f,function(a){return i(c,e5)}],e8=[f,function(a){return i(c,e7)}],e_=[f,function(a){return i(c,e9)}],fa=[f,function(a){return i(c,e$)}],fc=[f,function(a){return i(c,fb)}],fe=[f,function(a){return i(c,fd)}],fg=[f,function(a){return i(c,ff)}],fi=[f,function(a){return i(c,fh)}],fk=[f,function(a){return i(c,fj)}],fm=[f,function(a){return i(c,fl)}],fo=[f,function(a){return i(c,fn)}],fq=[f,function(a){return i(c,fp)}],fs=[f,function(a){return i(c,fr)}],fu=[f,function(a){return i(c,ft)}],fw=[f,function(a){return i(c,fv)}],fy=[f,function(a){return i(c,fx)}],fA=[f,function(a){return i(c,fz)}],fC=[f,function(a){return i(c,fB)}],fE=[f,function(a){return i(c,fD)}],fG=[f,function(a){return i(c,fF)}],fI=[f,function(a){return i(c,fH)}],fK=[f,function(a){return i(c,fJ)}],fM=[f,function(a){return i(c,fL)}];function
bz(a){var
b=k(r),e=l===b?r[1]:f===b?i(h[2],r):r;if(g(t[T],a,e)){var
c=k(r);return l===c?r[1]:f===c?i(h[2],r):r}var
d=k(aj),j=[0,a],m=l===d?aj[1]:f===d?i(h[2],aj):aj;return i(t[H],[0,m,j])}function
bA(a){var
b=k(r),e=l===b?r[1]:f===b?i(h[2],r):r;if(g(t[T],a,e)){var
c=k(r);return l===c?r[1]:f===c?i(h[2],r):r}var
d=k(ak),j=[0,a],m=l===d?ak[1]:f===d?i(h[2],ak):ak;return i(t[H],[0,m,j])}function
fN(a,b){var
c=k(r),j=l===c?r[1]:f===c?i(h[2],r):r;if(g(t[T],a,j))return bA(b);var
d=k(r),m=l===d?r[1]:f===d?i(h[2],r):r;if(g(t[T],b,m))return bz(a);var
e=k(ai),n=[0,a,b],o=l===e?ai[1]:f===e?i(h[2],ai):ai;return i(t[H],[0,o,n])}function
bB(a,b){var
c=k(r),j=l===c?r[1]:f===c?i(h[2],r):r;if(g(t[T],a,j))return b;var
d=k(r),m=l===d?r[1]:f===d?i(h[2],r):r;if(g(t[T],b,m))return a;var
e=k(al),n=[0,a,b],o=l===e?al[1]:f===e?i(h[2],al):al;return i(t[H],[0,o,n])}function
bC(a){if(a){var
b=a[2],c=a[1];return b?bB(c,bC(b)):c}var
d=k(r);return l===d?r[1]:f===d?i(h[2],r):r}var
ay=[f,function(a){return i(K,fO)}],az=[f,function(a){return i(K,fP)}];function
bD(a){if(0===a){var
b=k(az);return l===b?az[1]:f===b?i(h[2],az):az}var
c=k(ay),d=[0,bD(a-1|0)],e=l===c?ay[1]:f===c?i(h[2],ay):ay;return i(t[H],[0,e,d])}function
bE(a){var
b=v(J[5],fR,fQ,a),c=i(bw[45],b)?function(a){return i(a2[29][3],[0,a])}:function(a){return a2[29][1]};return function(a){var
d=c(a),e=[0,i(cK[10],b),d];return i(t[131],e)}}function
bF(d,b,c){function
e(a){if(a){var
g=e(a[2]),h=[0,a[1],g],c=[0,i(bE(fS),d),[0,b]],j=[0,i(t[H],c),h];return i(t[H],j)}var
f=[0,i(bE(fT),d),[0,b]];return i(t[H],f)}return e(c)}var
fU=i(bw[54],0),fV=i(cJ[9],fU);function
fW(a){return bF(fV,t[117],a)}var
fX=a2[1][1];function
bG(a,b){return bF(fX,a,b)}function
fY(a){var
b=k(ax),c=l===b?ax[1]:f===b?i(h[2],ax):ax;return bG(c,a)}var
f6=[f,function(a){return i(U,f5)}],f8=[f,function(a){return i(aw,f7)}],f_=[f,function(a){return i(aw,f9)}],ga=[f,function(a){return i(aw,f$)}],gc=[f,function(a){return i(aw,gb)}],aA=[f,function(a){return i(U,gd)}],aB=[f,function(a){return i(U,ge)}],aC=[f,function(a){return i(U,gf)}],aD=[f,function(a){return i(U,gg)}],aE=[f,function(a){return i(U,gh)}],aF=[f,function(a){return i(U,gi)}];function
bH(a){function
c(a){var
f=by(a),b=f[2],e=i(x[1][7],f[1]);if(d(e,gj)){if(d(e,gk)){if(!d(e,gl))if(b)if(!b[2]){var
h=c(b[1]);return g(s[14],s[7],h)}}else
if(b)if(!b[2]){var
j=c(b[1]),k=g(s[14],s[7],j);return g(s[12],s[6],k)}}else
if(!b)return s[6];return i(m[2],gm)}var
f=by(a),b=f[2],e=i(x[1][7],f[1]);if(d(e,gn)){if(d(e,go)){if(!d(e,gp))if(b)if(!b[2])return c(b[1])}else
if(b)if(!b[2]){var
h=c(b[1]);return i(s[22],h)}}else
if(!b)return s[5];return i(m[2],gq)}function
a6(a){if(_(a,s[6])){var
b=k(aA);return l===b?aA[1]:f===b?i(h[2],aA):aA}var
c=g(s[15],a,s[7]),m=[0,a6(c[1])];if(_(c[2],s[5]))var
d=k(aB),n=l===d?aB[1]:f===d?i(h[2],aB):aB,e=n;else
var
j=k(aC),o=l===j?aC[1]:f===j?i(h[2],aC):aC,e=o;return i(t[H],[0,e,m])}function
bI(a){if(_(a,s[5])){var
b=k(aD);return l===b?aD[1]:f===b?i(h[2],aD):aD}if(i(s[18],a)){var
c=k(aE),e=[0,a6(a)],g=l===c?aE[1]:f===c?i(h[2],aE):aE;return i(t[H],[0,g,e])}var
d=k(aF),j=[0,a6(i(s[22],a))],m=l===d?aF[1]:f===d?i(h[2],aF):aF;return i(t[H],[0,m,j])}function
gr(a){try{var
e=ah(a);if(typeof
e==="number")var
c=0;else
if(1===e[0]){var
f=e[1];if(d(f,gs))if(d(f,gt))if(d(f,gu))if(d(f,gv))if(d(f,gw))if(d(f,gx)){if(d(f,gy))if(d(f,gz))if(d(f,gA))var
c=0,b=0,j=0;else
var
j=1;else
var
j=1;else
var
j=1;if(j)try{var
v=[5,bH(a)],h=v,c=1,b=0}catch(f){f=u(f);if(!i(C[22],f))throw f;var
h=0,c=1,b=0}}else{var
k=e[2];if(k)if(k[2])var
c=0,b=0;else
var
g=[4,k[1]],b=1;else
var
c=0,b=0}else{var
l=e[2];if(l){var
m=l[2];if(m)if(m[2])var
c=0,b=0;else
var
g=[2,l[1],m[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}else{var
n=e[2];if(n)if(n[2])var
c=0,b=0;else
var
w=bI(i(s[22],s[6])),g=[0,n[1],w],b=1;else
var
c=0,b=0}else{var
o=e[2];if(o)if(o[2])var
c=0,b=0;else
var
g=[3,o[1]],b=1;else
var
c=0,b=0}else{var
p=e[2];if(p){var
q=p[2];if(q)if(q[2])var
c=0,b=0;else
var
g=[1,p[1],q[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}else{var
r=e[2];if(r){var
t=r[2];if(t)if(t[2])var
c=0,b=0;else
var
g=[0,r[1],t[1]],b=1;else
var
c=0,b=0}else
var
c=0,b=0}if(b)var
h=g,c=1}else
var
c=0;if(!c)var
h=0;return h}catch(f){f=u(f);if(i(av[4],f))return 0;throw f}}function
gB(a,b){try{var
k=ah(b);if(typeof
k==="number")var
e=0;else
if(1===k[0]){var
n=k[1];if(d(n,gC))if(d(n,gD))if(d(n,gE))if(d(n,gF))if(d(n,gG))if(d(n,gH))var
e=0,c=0;else{var
y=k[2];if(y){var
z=y[2];if(z){var
A=z[2];if(A)if(A[2])var
e=0,c=0;else
if(_(ah(g(a3[29],a,y[1])),gI))var
o=[0,z[1],A[1]],c=1;else
var
e=0,c=0;else
var
e=0,c=0}else
var
e=0,c=0}else
var
e=0,c=0}else{var
B=k[2];if(B){var
C=B[2];if(C)if(C[2])var
e=0,c=0;else
var
o=[1,B[1],C[1]],c=1;else
var
e=0,c=0}else
var
e=0,c=0}else{var
D=k[2];if(D){var
E=D[2];if(E)if(E[2])var
e=0,c=0;else
var
o=[2,D[1],E[1]],c=1;else
var
e=0,c=0}else
var
e=0,c=0}else{var
F=k[2];if(F){var
G=F[2];if(G)if(G[2])var
e=0,c=0;else
var
o=[3,F[1],G[1]],c=1;else
var
e=0,c=0}else
var
e=0,c=0}else{var
H=k[2];if(H){var
I=H[2];if(I)if(I[2])var
e=0,c=0;else
var
o=[4,H[1],I[1]],c=1;else
var
e=0,c=0}else
var
e=0,c=0}else{var
J=k[2];if(J){var
K=J[2];if(K)if(K[2])var
e=0,c=0;else
var
o=[5,J[1],K[1]],c=1;else
var
e=0,c=0}else
var
e=0,c=0}if(c)var
N=o,e=1}else
var
e=0;if(!e){try{var
j=ah(b);if(typeof
j==="number")var
h=0;else
switch(j[0]){case
1:var
l=j[1];if(d(l,fZ))if(d(l,f0))if(d(l,f1))if(d(l,f2))if(d(l,f3))if(d(l,f4))var
h=0,f=0;else{var
q=j[2];if(q){var
r=q[2];if(r)if(r[2])var
h=0,f=0;else
var
m=[7,q[1],r[1]],f=1;else
var
h=0,f=0}else
var
h=0,f=0}else{var
s=j[2];if(s)if(s[2])var
h=0,f=0;else
var
m=[6,s[1]],f=1;else
var
h=0,f=0}else{var
t=j[2];if(t){var
v=t[2];if(v)if(v[2])var
h=0,f=0;else
var
m=[10,t[1],v[1]],f=1;else
var
h=0,f=0}else
var
h=0,f=0}else{var
w=j[2];if(w){var
x=w[2];if(x)if(x[2])var
h=0,f=0;else
var
m=[8,w[1],x[1]],f=1;else
var
h=0,f=0}else
var
h=0,f=0}else{var
L=j[2];if(L)var
h=0,f=0;else
var
m=L,f=1}else
if(j[2])var
h=0,f=0;else
var
m=1,f=1;if(f)var
p=m,h=1;break;case
2:var
p=[9,j[1],j[2]],h=1;break;default:var
h=0}if(!h)var
p=2;var
M=p}catch(f){f=u(f);if(!i(av[4],f))throw f;var
M=2}var
N=M}return N}catch(f){f=u(f);if(i(av[4],f))return 2;throw f}}var
e=[0,c9,c$,db,dd,df,dh,dj,dl,dn,dq,ds,du,dw,dy,dA,dC,dE,dG,dI,dK,dM,dO,dQ,dS,dU,dW,dY,d0,d2,d4,d6,d8,d_,eb,ed,ef,eh,ai,aj,ak,al,r,eo,eq,es,eu,ew,ey,eA,eC,eE,eG,eI,eK,eM,eO,eQ,eS,eU,eW,eY,e0,e2,e4,e6,e8,e_,fa,fc,fe,fg,fi,fk,fm,fo,fq,fs,fu,fw,fy,fA,fC,fE,fG,fI,fK,fM,bz,bA,fN,bB,bC,bD,bG,fW,fY,[0,f6,f8,f_,ga,gc,bI,gr,gB,function(a){function
l(a){var
g=a;for(;;){var
e=ah(g);if(typeof
e!=="number"&&1===e[0]){var
b=e[1];if(d(b,gJ))if(d(b,gK)){if(d(b,gL))if(d(b,gM))if(d(b,gN))if(d(b,gO)){if(d(b,gP))if(d(b,gQ))if(d(b,gR))var
c=1,f=0,h=0;else
var
h=1;else
var
h=1;else
var
h=1;if(h){bH(g);return 1}}else
var
f=1;else
var
c=0,f=0;else
var
f=1;else
var
f=1;if(f){var
i=e[2];if(i){if(!i[2]){var
g=i[1];continue}var
c=1}else
var
c=1}}else
var
c=0;else
var
c=0;if(!c){var
j=e[2];if(j){var
k=j[2];if(k)if(!k[2]){var
m=l(j[1]);if(m){var
g=k[1];continue}return m}}}}return 0}}try{var
b=l(a);return b}catch(f){f=u(f);if(i(C[22],f))return 0;throw f}}]];aW(295,e,"Romega_plugin.Const_omega");var
p=i(gU[1][2],[0,s[17],s[16],s[12],s[13],s[14],s[15],s[22],s[5],s[6],s[2]]),L=[0,0];function
bK(a){L[1];return i(ab[1],a)}function
gV(a){i(m[29],a);i(m[32],0);return i(m[46],m[24])}var
ac=ab[5],B=t[H];function
bL(a,b){switch(a){case
0:var
c=0===b?1:0;break;case
1:var
c=1===b?1:0;break;default:var
c=2<=b?1:0}return c?1:0}var
W=i(x[1][5],gW);function
bM(a){var
b=g(F[1],0,7),c=g(F[1],0,7);return[0,0,0,0,g(F[1],0,7),0,c,b]}function
bN(a){a[5]=a[5]+1|0;return a[5]}function
bO(a){return 0===a[0]?[1,a[1]]:[0,a[1]]}function
gX(a){return a[1]}function
bP(a){function
d(a,b,c){if(c){var
e=v(n[4],gY,a,b),f=d(a,b+1|0,c[2]),h=i(w[6],0),j=i(gT[2],c[1]),k=i(w[1],gZ),l=i(w[1],e),m=i(w[17],0),o=g(w[14],m,l),p=g(w[14],o,k),q=g(w[14],p,j),r=g(w[14],q,h);return g(w[14],r,f)}return i(w[1],g0)}var
b=d(80,0,a[2]),c=i(w[6],0),e=i(w[1],g1),f=g(w[14],e,c),h=g(w[14],f,b),j=d(86,0,a[1]),k=i(w[6],0),l=i(w[1],g2),m=g(w[14],l,k),o=g(w[14],m,j),p=i(w[6],0),q=g(w[14],h,p),r=g(w[14],q,o);return i(a7[15],r)}var
a8=[0,0];function
bQ(a){a8[1]=0;return 0}function
a9(a){a8[1]++;return a8[1]}var
a_=[0,0];function
bR(a){a_[1]=0;return 0}function
a$(a){a_[1]++;return a_[1]}function
am(a){return g(n[4],g3,a)}function
ba(a,b){try{var
d=v(j[17][bs],_,b,a[3]);return d}catch(f){f=u(f);if(f===I){var
c=a$(0);a[3]=[0,[0,b,c],a[3]];return c}throw f}}function
bS(a,b,c){a[3]=[0,[0,b,c],a[3]];return 0}function
aG(a,b){var
c=a[3];for(;;){if(c){var
d=c[1];if(b===d[2])return d[1];var
c=c[2];continue}return i(m[2],g4)}}function
bb(a,b){try{var
d=v(j[17][79],t[T],a,b[1]);return d}catch(f){f=u(f);if(f===I){var
c=i(j[17][1],b[1]);b[1]=g(j[18],b[1],[0,a,0]);return c}throw f}}function
bc(a){try{var
b=i(j[17][5],a[1]);return b}catch(f){f=u(f);if(f[1]===bJ)return i(m[2],g5);throw f}}function
bT(a,b){try{var
d=v(j[17][79],t[T],b,a[2]);return d}catch(f){f=u(f);if(f===I){var
c=i(j[17][1],a[2]);a[2]=g(j[18],a[2],[0,b,0]);return c}throw f}}function
g6(a,b){try{var
c=g(j[17][5],a,b);return c}catch(f){f=u(f);if(f[1]===bJ)return i(m[2],g7);throw f}}function
bU(a,b){var
c=b[8][1];try{g(F[6],a[6],c);var
d=0;return d}catch(f){f=u(f);if(f===I)return v(F[5],a[6],c,b);throw f}}function
bd(a,b){try{var
c=g(F[6],a[6],b);return c}catch(f){f=u(f);if(f===I){g(n[2],g8,b);throw f}throw f}}function
D(a,b){switch(b[0]){case
0:var
c=i(s[2],b[1]);return v(n[1],a,g9,c);case
1:return ag(n[1],a,g_,D,b[1],D,b[2]);case
2:return ag(n[1],a,g$,D,b[1],D,b[2]);case
3:return ag(n[1],a,ha,D,b[1],D,b[2]);case
4:return bn(n[1],a,hb,D,b[1]);case
5:return v(n[1],a,hc,b[1]);default:return g(n[1],a,hd)}}function
G(a,b){if(typeof
b==="number")return 0===b?g(n[1],a,he):g(n[1],a,hf);else
switch(b[0]){case
0:var
d=b[2];switch(d[1]){case
0:var
c=hg;break;case
1:var
c=hi;break;case
2:var
c=hj;break;case
3:var
c=hk;break;case
4:var
c=hl;break;default:var
c=hm}return cd(n[1],a,hh,D,d[2],c,D,d[3]);case
1:return bn(n[1],a,hn,G,b[1]);case
2:return ag(n[1],a,ho,G,b[2],G,b[3]);case
3:return ag(n[1],a,hp,G,b[2],G,b[3]);case
4:return ag(n[1],a,hq,G,b[2],G,b[3]);default:return g(n[1],a,hr)}}function
E(a,b){var
c=b;for(;;)switch(c[0]){case
1:return i(m[2],hs);case
3:return i(m[2],ht);case
5:return ba(a,c);case
0:case
6:return-1;default:var
c=c[1];continue}}function
bV(g,b){var
o=0;return function(a){var
d=o,c=a;for(;;){switch(c[0]){case
0:var
h=a9(0),k=c[1];return[0,h,b,i(j[17][6],d),k];case
1:var
e=c[1];if(2===e[0]){var
f=e[2];if(0===f[0]){var
l=c[2],n=ba(g,e[1]),d=[0,[0,f[1],n],d],c=l;continue}}break}i(m[27],hu);D(m[24],c);return i(m[2],hv)}}}function
aH(e,b){function
c(a){if(a){var
d=a[1],f=c(a[2]),g=[0,d[1]];return[1,[2,aG(e,d[2]),g],f]}return[0,b[4]]}return c(b[3])}function
o(a,b){var
c=k(a),d=l===c?a[1]:f===c?i(h[2],a):a;return i(B,[0,d,b])}function
bW(d,b){function
c(a){var
b=a;for(;;)switch(b[0]){case
0:return i(e[97][6],b[1]);case
1:var
f=c(b[2]),g=[0,c(b[1]),f];return o(e[97][2],g);case
2:var
h=c(b[2]),j=[0,c(b[1]),h];return o(e[97][3],j);case
3:var
k=c(b[2]),l=[0,c(b[1]),k];return o(e[97][5],l);case
4:var
m=[0,c(b[1])];return o(e[97][4],m);case
5:var
n=b[1];return i(bc(d),n);default:var
b=b[1];continue}}return c(b)}function
bX(a,b){try{var
e=g(F[6],a[4],b);return e}catch(f){f=u(f);if(f===I){g(n[2],hw,b);var
c=a[4],d=function(a,b){return v(n[2],hx,a,b)};g(F[11],d,c);throw I}throw f}}function
O(a,b){var
c=b;for(;;)switch(c[0]){case
0:var
d=[0,i(e[97][6],c[1])];return o(e[14],d);case
1:var
f=O(a,c[2]),g=[0,O(a,c[1]),f];return o(e[15],g);case
2:var
h=O(a,c[2]),j=[0,O(a,c[1]),h];return o(e[16],j);case
3:var
k=O(a,c[2]),l=[0,O(a,c[1]),k];return o(e[18],l);case
4:var
m=[0,O(a,c[1])];return o(e[17],m);case
5:var
n=bX(a,c[1]),p=[0,i(e[93],n)];return o(e[19],p);default:var
c=c[1];continue}}function
z(a,b){try{var
c=O(a,b);return c}catch(f){f=u(f);D(m[25],b);throw f}}function
P(a,b){if(typeof
b==="number"){if(0===b){var
d=e[27],j=k(d);return l===j?d[1]:f===j?i(h[2],d):d}var
g=e[28],m=k(g);return l===m?g[1]:f===m?i(h[2],g):g}else
switch(b[0]){case
0:var
c=b[2];switch(c[1]){case
0:var
n=z(a,c[3]),p=[0,z(a,c[2]),n];return o(e[21],p);case
1:var
q=z(a,c[3]),r=[0,z(a,c[2]),q];return o(e[22],r);case
2:var
s=z(a,c[3]),t=[0,z(a,c[2]),s];return o(e[23],t);case
3:var
u=z(a,c[3]),v=[0,z(a,c[2]),u];return o(e[25],v);case
4:var
w=z(a,c[3]),x=[0,z(a,c[2]),w];return o(e[24],x);default:var
y=z(a,c[3]),A=[0,z(a,c[2]),y];return o(e[26],A)}case
1:var
B=[0,P(a,b[1])];return o(e[29],B);case
2:var
C=P(a,b[3]),D=[0,P(a,b[2]),C];return o(e[30],D);case
3:var
E=P(a,b[3]),F=[0,P(a,b[2]),E];return o(e[31],F);case
4:var
G=P(a,b[3]),H=[0,P(a,b[2]),G];return o(e[32],H);default:var
I=bT(a,b[1]),J=[0,i(e[93],I)];return o(e[33],J)}}function
aI(a,b){try{var
c=P(a,b);return c}catch(f){f=u(f);G(m[25],b);throw f}}function
hy(d,b,c){var
a=[0,i(e[97][6],c)],f=o(e[14],a);function
g(a,b){var
c=[0,i(e[97][6],a[1])],f=o(e[14],c),g=[0,z(d,aG(d,a[2])),f],h=[0,o(e[16],g),b];return o(e[15],h)}return v(j[17][16],g,b,f)}function
aJ(a,b,c){try{var
d=hy(a,b,c);return d}catch(f){f=u(f);g(p[29],am,[0,b,c]);throw f}}var
M=i(j[17][96],A.caml_int_compare);function
an(a){var
b=a;for(;;)switch(b[0]){case
4:var
b=b[1];continue;case
5:return[0,b[1],0];case
0:case
6:return 0;default:var
c=an(b[2]);return g(M,an(b[1]),c)}}function
aK(a){if(a){var
b=a[1],c=aK(a[2]),d=g(M,an(b[3]),c);return g(M,an(b[2]),d)}return a}function
aL(a){var
b=a;for(;;){if(typeof
b!=="number")switch(b[0]){case
0:return aK([0,b[2],0]);case
1:var
b=b[1];continue;case
5:break;default:var
c=aL(b[3]);return g(M,aL(b[2]),c)}return 0}}function
ao(a,b){switch(b[0]){case
0:var
x=[0,g(p[8],a,b[1])],c=e[47],o=k(c),y=0,z=l===o?c[1]:f===o?i(h[2],c):c;return[0,i(e[92],[0,z,y]),x];case
1:var
q=ao(a,b[1]),r=ao(a,b[2]),A=[1,q[2],r[2]],B=[0,g(e[90],q[1],r[1]),0],d=e[48],t=k(d),D=l===t?d[1]:f===t?i(h[2],d):d;return[0,i(e[92],[0,D,B]),A];case
2:var
u=b[2];if(0===u[0]){var
E=[0,g(p[8],a,u[1])],j=e[63],v=k(j),F=[2,b[1],E],G=0,H=l===v?j[1]:f===v?i(h[2],j):j;return[0,i(e[92],[0,H,G]),F]}return i(C[6],hz);case
3:return i(m[2],hA);case
4:var
I=[0,i(s[22],a)],n=e[62],w=k(n),J=[2,b[1],I],K=0,L=l===w?n[1]:f===w?i(h[2],n):n;return[0,i(e[92],[0,L,K]),J];case
5:return[0,i(e[92],0),[2,b,[0,a]]];default:return[0,i(e[92],0),[6,[2,b,[0,a]]]]}}function
aM(a){switch(a[0]){case
0:var
y=[0,i(s[22],a[1])],b=e[47],o=k(b),z=0,A=l===o?b[1]:f===o?i(h[2],b):b;return[0,i(e[92],[0,A,z]),y];case
1:var
q=aM(a[1]),r=aM(a[2]),B=[1,q[2],r[2]],D=[0,g(e[90],q[1],r[1]),0],c=e[43],t=k(c),E=l===t?c[1]:f===t?i(h[2],c):c;return[0,i(e[92],[0,E,D]),B];case
2:var
u=a[2];if(0===u[0]){var
F=[0,i(s[22],u[1])],d=e[45],v=k(d),G=[2,a[1],F],H=0,I=l===v?d[1]:f===v?i(h[2],d):d;return[0,i(e[92],[0,I,H]),G]}return i(C[6],hB);case
3:return i(m[2],hC);case
4:var
j=e[44],w=k(j),J=a[1],K=0,L=l===w?j[1]:f===w?i(h[2],j):j;return[0,i(e[92],[0,L,K]),J];case
5:var
n=e[46],x=k(n),M=[2,a,[0,p[14]]],N=0,O=l===x?n[1]:f===x?i(h[2],n):n;return[0,i(e[92],[0,O,N]),M];default:var
P=[6,[4,a[1]]];return[0,i(e[92],0),P]}}function
hD(a){return i(j[17][1],a)}function
bY(I,b,c,d){function
j(a){var
b=a[1];if(b){var
d=a[2],n=b[2],x=b[1],y=x[2];if(d){var
w=d[2],z=d[1],A=z[2];if(y===A){var
J=p[11],K=g(p[8],c,z[1]),L=g(p[8],I,x[1]),M=g(p[6],L,K);if(g(s[17],M,J)){var
N=j([0,n,w]),o=e[35],B=k(o),O=l===B?o[1]:f===B?i(h[2],o):o;return[0,O,N]}var
P=j([0,n,w]),q=e[34],C=k(q),Q=l===C?q[1]:f===C?i(h[2],q):q;return[0,Q,P]}if(g(p[19],y,A)){var
R=j([0,n,d]),r=e[36],D=k(r),S=l===D?r[1]:f===D?i(h[2],r):r;return[0,S,R]}var
T=j([0,b,w]),t=e[37],E=k(t),U=l===E?t[1]:f===E?i(h[2],t):t;return[0,U,T]}var
V=j([0,n,0]),u=e[36],F=k(u),W=l===F?u[1]:f===F?i(h[2],u):u;return[0,W,V]}var
G=a[2];if(G){var
X=j([0,0,G[2]]),v=e[37],H=k(v),Y=l===H?v[1]:f===H?i(h[2],v):v;return[0,Y,X]}i(m[46],m[24]);return 0}var
a=j([0,b,d]);return i(e[96],a)}function
ad(a,b){var
c=b[2],d=b[1];switch(d[0]){case
0:switch(c[0]){case
0:var
K=[0,g(p[6],d[1],c[1])],j=e[47],v=k(j),L=0,M=l===v?j[1]:f===v?i(h[2],j):j;return[0,i(e[92],[0,M,L]),K];case
1:var
u=0;break;default:var
u=1}break;case
1:var
A=d[2],o=d[1];if(1===c[0]){var
F=c[1],ae=E(a,F),af=E(a,o);if(g(p[19],af,ae)){var
G=ad(a,[0,A,c]),ag=[1,o,G[2]],ah=[0,i(e[89],G[1]),0],s=e[51],H=k(s),ai=l===H?s[1]:f===H?i(h[2],s):s;return[0,i(e[92],[0,ai,ah]),ag]}var
I=ad(a,[0,d,c[2]]),aj=[1,F,I[2]],ak=[0,i(e[89],I[1]),0],t=e[53],J=k(t),al=l===J?t[1]:f===J?i(h[2],t):t;return[0,i(e[92],[0,al,ak]),aj]}var
X=E(a,c),Y=E(a,o);if(g(p[19],Y,X)){var
B=ad(a,[0,A,c]),Z=[1,o,B[2]],_=[0,i(e[89],B[1]),0],q=e[51],C=k(q),$=l===C?q[1]:f===C?i(h[2],q):q;return[0,i(e[92],[0,$,_]),Z]}var
r=e[54],D=k(r),aa=[1,c,d],ab=0,ac=l===D?r[1]:f===D?i(h[2],r):r;return[0,i(e[92],[0,ac,ab]),aa];default:var
u=0}if(!u)if(1===c[0]){var
x=c[1],S=E(a,d),T=E(a,x);if(g(p[19],T,S)){var
y=ad(a,[0,d,c[2]]),U=[1,x,y[2]],V=[0,i(e[89],y[1]),0],n=e[53],z=k(n),W=l===z?n[1]:f===z?i(h[2],n):n;return[0,i(e[92],[0,W,V]),U]}return[0,i(e[92],0),[1,d,c]]}var
N=E(a,c),O=E(a,d);if(g(p[18],O,N)){var
m=e[54],w=k(m),P=[1,c,d],Q=0,R=l===w?m[1]:f===w?i(h[2],m):m;return[0,i(e[92],[0,R,Q]),P]}return[0,i(e[92],0),[1,d,c]]}function
be(a,b){switch(a[0]){case
2:var
n=a[1];switch(b[0]){case
2:if(5===n[0]){var
c=e[59],o=k(c),u=[2,[5,n[1]],[1,a[2],b[2]]],v=l===o?c[1]:f===o?i(h[2],c):c;return[0,v,u]}break;case
5:var
d=e[58],q=k(d),w=[2,[5,b[1]],[1,a[2],[0,p[12]]]],x=l===q?d[1]:f===q?i(h[2],d):d;return[0,x,w]}break;case
5:var
r=a[1];switch(b[0]){case
2:var
g=e[57],s=k(g),y=[2,[5,r],[1,b[2],[0,p[12]]]],z=l===s?g[1]:f===s?i(h[2],g):g;return[0,z,y];case
5:var
j=e[56],t=k(j),A=[2,[5,r],[0,p[13]]],B=l===t?j[1]:f===t?i(h[2],j):j;return[0,B,A]}break}D(m[24],a);i(m[32],0);D(m[24],b);i(m[32],0);i(m[46],m[24]);return i(C[6],hE)}function
ap(a){switch(a[0]){case
2:var
j=a[1];if(5===j[0]){var
m=a[2];if(0===m[0])return[0,0,a];var
d=function(a){switch(a[0]){case
0:return a[1];case
1:var
b=d(a[2]),c=d(a[1]);return g(p[6],c,b);default:return i(C[6],hG)}},q=[0,d(m)],b=e[47],n=k(b),r=[2,[5,j[1]],q],s=0,t=l===n?b[1]:f===n?i(h[2],b):b;return[0,[0,t,s],r]}break;case
5:var
c=e[55],o=k(c),u=[2,[5,a[1]],[0,p[12]]],v=0,w=l===o?c[1]:f===o?i(h[2],c):c;return[0,[0,w,v],u]}return i(C[6],hF)}function
ae(a,b){switch(b[0]){case
0:return[0,0,b];case
1:var
c=b[2],d=b[1];switch(c[0]){case
0:var
o=ap(d),C=[1,o[2],[0,c[1]]],D=i(e[92],o[1]);return[0,[0,i(e[88],D),0],C];case
1:var
q=c[1],F=E(a,q);if(E(a,d)===F){var
r=be(d,q),m=e[52],s=k(m),G=l===s?m[1]:f===s?i(h[2],m):m,t=ae(a,[1,r[2],c[2]]),H=t[2],I=t[1],J=i(e[92],[0,r[1],0]);return[0,[0,G,[0,i(e[88],J),I]],H]}var
u=ap(d),v=ae(a,c),K=[1,u[2],v[2]],L=i(e[92],v[1]),M=i(e[92],u[1]);return[0,[0,g(e[90],M,L),0],K];default:var
N=E(a,c);if(E(a,d)===N){var
w=be(d,c),x=ae(a,w[2]);return[0,[0,w[1],x[1]],x[2]]}var
y=ap(d),z=ae(a,c),O=[1,y[2],z[2]],P=i(e[92],z[1]),Q=i(e[92],y[1]);return[0,[0,g(e[90],Q,P),0],O]}default:var
A=ap(b),n=e[61],B=k(n),R=[1,A[2],[0,p[11]]],S=0,T=l===B?n[1]:f===B?i(h[2],n):n;return[0,g(j[18],A[1],[0,T,S]),R]}}function
aN(a){if(1===a[0]){var
b=a[1];if(2===b[0])if(5===b[1][0]){var
o=b[2];if(0===o[0])if(g(s[17],o[1],p[11])){var
q=aN(a[2]),c=e[60],r=k(c),v=q[2],w=q[1],x=l===r?c[1]:f===r?i(h[2],c):c;return[0,[0,x,w],v]}}var
d=aN(a[2]),m=d[1],t=[1,b,d[2]];if(i(j[17][47],m))var
n=0;else
var
u=i(e[92],m),n=[0,i(e[89],u),0];return[0,n,t]}return[0,0,a]}function
Q(a,b){switch(b[0]){case
1:var
q=Q(a,b[1]),r=Q(a,b[2]),s=ad(a,[0,q[1],r[1]]),G=[0,s[1],0],H=[0,g(e[90],q[2],r[2]),G],I=i(e[92],H);return[0,s[2],I];case
2:var
t=Q(a,b[1]),u=t[2],n=t[1],v=Q(a,b[2]),w=v[2],o=v[1];if(0===o[0]){var
x=ao(o[1],n),J=[0,x[1],0],K=[0,g(e[90],u,w),J],L=i(e[92],K);return[0,x[2],L]}if(0===n[0]){var
y=ao(n[1],o),d=e[65],z=k(d),M=[0,y[1],0],N=l===z?d[1]:f===z?i(h[2],d):d,O=[0,g(e[90],u,w),[0,N,M]],P=i(e[92],O);return[0,y[2],P]}var
j=e[42],A=k(j),R=l===A?j[1]:f===A?i(h[2],j):j;return[0,[6,b],R];case
3:var
B=Q(a,[1,b[1],[4,b[2]]]),m=e[64],C=k(m),S=[0,B[2],0],T=l===C?m[1]:f===C?i(h[2],m):m,U=i(e[92],[0,T,S]);return[0,B[1],U];case
4:var
D=Q(a,b[1]),E=aM(D[1]),V=[0,E[1],0],W=[0,i(e[88],D[2]),V],X=i(e[92],W);return[0,E[2],X];default:var
c=e[42],p=k(c),F=l===p?c[1]:f===p?i(h[2],c):c;return[0,b,F]}}function
bf(a,b){var
c=Q(a,b),d=ae(a,c[1]),f=aN(d[2]),g=f[2],h=[0,i(e[92],f[1]),0],j=[0,i(e[92],d[1]),h];return[0,i(e[92],[0,c[2],j]),g]}function
bZ(a){switch(a){case
0:return 5;case
1:return 3;case
2:return 4;case
3:return 1;case
4:return 2;default:return 0}}function
b0(k,b,c){var
a=c[3],d=c[2],h=c[1],l=b[1],m=b[4],n=b[3],o=b[2];function
e(a,b,c,d){var
e=bf(k,g(c,a,b)),f=e[2],p=i(bV(k,d),f),q=[0,n,i(j[17][6],m)];return[0,h,a,b,e[1],q,l,o,p]}try{var
q=l?bZ(h):h;switch(q){case
0:var
r=0,f=e(d,a,function(a,b){return[1,a,[4,b]]},r);break;case
1:var
s=1,f=e(d,a,function(a,b){return[1,b,[4,a]]},s);break;case
2:var
t=1,f=e(d,a,function(a,b){return[1,a,[4,b]]},t);break;case
3:var
v=1,f=e(d,a,function(a,b){return[1,[1,a,[0,p[14]]],[4,b]]},v);break;case
4:var
w=1,f=e(d,a,function(a,b){return[1,[1,b,[0,p[14]]],[4,a]]},w);break;default:var
x=2,f=e(d,a,function(a,b){return[1,a,[4,b]]},x)}return f}catch(f){f=u(f);if(i(av[4],f))throw f;throw f}}function
X(a,b){var
c=i(e[97][7],b);if(typeof
c!=="number")switch(c[0]){case
0:var
g=c[2],h=c[1];return aO(a,function(a,b){return[1,a,b]},h,g);case
1:var
d=c[2],f=c[1],m=i(e[97][9],f)?0:i(e[97][9],d)?0:1;if(!m)return aO(a,function(a,b){return[2,a,b]},f,d);break;case
2:var
j=c[2],k=c[1];return aO(a,function(a,b){return[3,a,b]},k,j);case
3:return[4,X(a,c[1])];case
4:var
l=[0,p[12]];return[1,X(a,c[1]),l];default:return[0,c[1]]}return[5,bb(b,a)]}function
aO(a,b,c,d){var
e=X(a,c);return g(b,e,X(a,d))}function
aq(a,b,c,d,e,f,g,h){var
m=b[4],n=b[3],k=b[2],l=bN(a),o=c?[0,[0,l],k]:k,p=c?[0,[1,l],k]:k;if(c){var
q=[0,n,i(j[17][6],m)];v(F[5],a[7],l,q)}var
r=af(a,[0,d,o,n,[0,0,m]],e,g);return v(f,l,r,af(a,[0,b[1],p,n,[0,1,m]],e,h))}function
Y(a,b,c,d,e,f){var
h=X(a,e),g=b0(a,b,[0,d,h,X(a,f)]);bU(a,g);return[0,c,g]}function
af(a,b,c,d){var
h=b[1],f=g(e[97][8],c,d);if(typeof
f==="number")switch(f){case
0:return 0;case
1:return 1;default:return[5,d]}else
switch(f[0]){case
0:return Y(a,b,d,0,f[1],f[2]);case
1:return Y(a,b,d,5,f[1],f[2]);case
2:return Y(a,b,d,4,f[1],f[2]);case
3:return Y(a,b,d,1,f[1],f[2]);case
4:return Y(a,b,d,3,f[1],f[2]);case
5:return Y(a,b,d,2,f[1],f[2]);case
6:return[1,af(a,[0,1-h,b[2],b[3],[0,2,b[4]]],c,f[1])];case
7:var
k=f[2],l=f[1];return aq(a,b,1-h,h,c,function(a,b,c){return[2,a,b,c]},l,k);case
8:var
m=f[2],n=f[1];return aq(a,b,h,h,c,function(a,b,c){return[3,a,b,c]},n,m);case
9:var
o=f[2],p=f[1];return aq(a,b,1-h,1-h,c,function(a,b,c){return[4,a,b,c]},p,o);default:var
i=f[2],j=f[1],q=g(t[49],i,j),r=g(t[49],j,i);return aq(a,b,h,h,c,function(a,b,c){return[3,a,b,c]},r,q)}}function
b1(c,b){var
a=[1,af(c,[0,1,0,W,hH],b,i(a3[7],b))];if(L[1]){i(n[2],hI);i(n[2],hJ);G(m[24],a);i(n[2],hK)}function
e(a){if(a){var
f=a[1],d=f[1],h=af(c,[0,0,0,d,0],b,f[2]);if(L[1]){var
j=i(x[1][7],d);g(n[2],hL,j);G(m[24],h);i(n[2],hM)}return[0,[0,d,h],e(a[2])]}if(L[1])bP(c);return 0}return[0,[0,W,a],e(i(a3[10],b))]}function
N(e,b,c,d){if(typeof
d!=="number")switch(d[0]){case
0:return[0,[0,d[2],b],0];case
1:return R(e,b,c,d[1]);case
2:var
a=d[1],i=N(e,b,[0,a,c],d[2]),k=N(e,b,[0,a,c],d[3]);return g(j[18],i,k);case
3:var
l=d[3],m=N(e,b,c,d[2]),f=function(a){if(a){var
b=f(a[2]),d=N(e,a[1],c,l);return g(j[18],d,b)}return a};return f(m);case
4:var
h=d[1],n=R(e,b,[0,h,c],d[2]),o=N(e,b,[0,h,c],d[3]);return g(j[18],n,o)}return[0,b,0]}function
R(e,b,c,d){if(typeof
d!=="number")switch(d[0]){case
0:return[0,[0,d[2],b],0];case
1:return N(e,b,c,d[1]);case
2:var
i=d[3],k=R(e,b,c,d[2]),f=function(a){if(a){var
b=f(a[2]),d=R(e,a[1],c,i);return g(j[18],d,b)}return a};return f(k);case
3:var
a=d[1],l=R(e,b,[0,a,c],d[2]),m=R(e,b,[0,a,c],d[3]);return g(j[18],l,m);case
4:var
n=d[3],o=N(e,b,c,d[2]),h=function(a){if(a){var
b=h(a[2]),d=R(e,a[1],c,n);return g(j[18],d,b)}return a};return h(o)}return[0,b,0]}function
b2(a){function
b(a){if(a){var
c=a[1],d=N(c[1],0,0,c[2]),e=b(a[2]);return v(j[17][121],j[18],d,e)}return hN}return b(a)}function
aP(a){return 0===a[0]?g(n[2],hO,a[1]):g(n[2],hP,a[1])}function
b3(a){function
b(a){var
b=e[42],d=k(b),s=l===d?b[1]:f===d?i(h[2],b):b;G(m[24],[0,s,a]);i(m[32],0);var
c=a[8],o=i(p[31],c[2]),q=[0,c[3],c[4]];function
r(a){return i(p[29],am)}ja(n[2],hQ,c[1],r,q,o);i(n[2],hR);g(j[17][11],aP,a[7]);var
t=a[5][2];function
u(a){switch(a){case
0:return hS;case
1:return hT;default:return hU}}var
w=g(j[17][12],u,t),y=g(j[15][7],hV,w);g(n[2],hW,y);var
z=a[6]?hX:hZ,A=i(x[1][7],a[5][1]);return v(n[2],hY,A,z)}function
c(a){i(n[2],h0);return g(j[17][11],b,a)}return g(j[17][11],c,a)}function
ar(a){var
b=a;for(;;){if(b){var
d=b[2],c=b[1];switch(c[0]){case
6:var
e=ar(d);return g(M,[0,c[1][1],0],e);case
15:var
f=ar(c[3][2]);return g(M,ar(c[2][2]),f);default:var
b=d;continue}}return b}}function
as(a){var
b=a;for(;;){if(b){var
d=b[2],c=b[1];switch(c[0]){case
5:var
e=as(d);return[0,c[1],e];case
15:var
f=as(c[3][2]),h=as(c[2][2]);return g(j[18],h,f);default:var
b=d;continue}}return b}}function
b4(c,b){function
m(a,b){return a[5]-b[5]|0}function
d(a){if(0===a[0]){var
b=as(a[1][3]);return g(j[17][40],m,b)}var
c=d(a[3]),e=d(a[2]);return v(j[17][44],m,e,c)}var
a=d(b);function
n(a){var
g=aH(c,a[2]),j=bW(c,g),d=bb(j,c),b=e[97][1],m=k(b),n=l===m?b[1]:f===m?i(h[2],b):b,p=o(e[1],[0,n,j]);bS(c,[5,d],a[5]);return[0,d,p,[0,g,[5,d]],a[2][1]]}return g(j[17][12],n,a)}function
bg(a,b){if(b){try{var
f=bd(a,b[1])[7],c=f}catch(f){f=u(f);if(f!==I)throw f;var
c=0}var
d=bg(a,b[2]),e=i(j[17][6],c);return v(j[17][53],_,e,d)}return b}function
b5(a){function
b(a,b){var
c=i(j[17][1],b[2]);return i(j[17][1],a[2])-c|0}try{var
c=g(j[17][40],b,a),d=i(j[17][3],c);return d}catch(f){f=u(f);if(f[1]===gS)return i(m[2],h1);throw f}}function
b6(d,b){function
e(a){var
b=a;for(;;){if(b){var
f=b[2],c=b[1];if(g(j[17][26],c,d)){var
b=f;continue}var
i=bO(c);if(g(j[17][26],i,d))throw m[3];var
h=[0,c,e(f)]}else
var
h=b;return h}}function
a(a){try{var
b=e(a[2]),c=[0,[0,a[1],b]];return c}catch(f){f=u(f);if(f===m[3])return 0;throw f}}return g(j[17][64],a,b)}function
aQ(a){if(0===a[0])return a[1][2];var
b=aQ(a[3]);return g(M,aQ(a[2]),b)}function
b7(h,b){function
d(a){if(typeof
a==="number")return 0===a?o(e[5],[0]):o(e[6],[0]);else
switch(a[0]){case
1:var
b=[0,d(a[1])];return o(e[3],b);case
2:var
c=d(a[3]),f=[0,d(a[2]),c];return o(e[4],f);case
3:var
h=d(a[3]),i=[0,d(a[2]),h];return o(e[2],i);case
4:var
j=d(a[3]),k=d(a[2]);return g(t[49],k,j);default:return a[1]}}function
c(a,b,c){var
g=f(b),e=f(c);if(g){var
h=g[1];return e?[0,i(a,[0,h,e[1]])]:[0,i(a,[0,h,[5,d(c)]])]}if(e)var
k=e[1],j=[0,i(a,[0,[5,d(b)],k])];else
var
j=e;return j}function
f(a){if(typeof
a!=="number")switch(a[0]){case
0:var
d=g(j[17][26],a[2][8][1],h),e=d?[0,a]:d;return e;case
1:var
b=f(a[1]),i=b?[0,[1,b[1]]]:b;return i;case
2:var
k=a[1],l=a[3],m=a[2];return c(function(a){return[2,k,a[1],a[2]]},m,l);case
3:var
n=a[1],o=a[3],p=a[2];return c(function(a){return[3,n,a[1],a[2]]},p,o);case
4:var
q=a[1],r=a[3],s=a[2];return c(function(a){return[4,q,a[1],a[2]]},s,r)}return 0}var
a=f(b);return a?a[1]:[5,d(b)]}function
aR(a,b){if(0===b[0]){var
c=b[1],d=g(j[17][12],m[20],c[2]),e=g(j[15][7],h2,d),f=v(n[4],h3,c[1],e);return g(m[49],a,f)}return cd(n[1],a,h4,b[1],aR,b[2],aR,b[3])}function
aS(d,b){function
e(a,b,c){if(c){var
f=c[1];if(0===f[0]){var
g=f[1],k=aS(d,i(j[17][6],[0,[1,g],b]));return[1,g,e(a,[0,[0,g],b],c[2]),k]}var
h=f[1],l=e(a,[0,[1,h],b],c[2]);return[1,h,aS(d,i(j[17][6],[0,[0,h],b])),l]}return[0,a]}var
a=b6(b,d);try{var
c=b5(a)}catch(f){f=u(f);var
h=i(j[17][1],d),k=i(j[17][1],a);v(n[2],h5,k,h);g(j[17][11],aP,b);throw f}var
f=c[2],l=i(j[17][6],b);return e(c[1],l,f)}function
bh(a,b){var
d=0,c=b,n=a[2],o=a[1];a:for(;;){if(c){var
k=c[1];if(0===k[0]){var
l=k[1];if(g(x[1][1],o,l[1])){var
e=[0,l[2],n];for(;;){var
f=e[1];if(f){var
h=e[2];if(h)if(bL(f[1],h[1])){var
e=[0,f[2],h[2]];continue}var
j=0}else
var
j=[0,e[2]];if(j)return[0,d,j[1]];var
d=d+1|0,c=c[2];continue a}}}var
d=d+1|0,c=c[2];continue}return i(m[2],h6)}}function
bi(a){function
d(a){switch(a){case
0:var
b=e[80];break;case
1:var
b=e[81];break;default:var
b=e[82]}var
c=k(b);return l===c?b[1]:f===c?i(h[2],b):b}var
m=g(j[17][12],d,a),b=e[79],c=k(b),n=l===c?b[1]:f===c?i(h[2],b):b;return g(e[94],n,m)}function
y(a,b){try{var
d=v(j[17][79],_,[1,b],a);return d}catch(f){f=u(f);if(f===I){var
c=g(n[4],h7,b);return i(m[2],c)}throw f}}function
b8(o,b){function
n(a,b){var
d=b;for(;;){if(d){var
c=d[1];switch(c[0]){case
0:var
I=c[2],ap=y(a,c[1][1]),aq=i(e[93],ap),ar=n(a,d[2]),as=i(j[17][1],I[3]),at=i(e[93],as),au=aJ(o,I[3],I[4]),av=i(e[97][6],c[4]),aw=[0,i(e[97][6],c[3]),av,au,at,ar,aq],r=e[68],M=k(r),ax=l===M?r[1]:f===M?i(h[2],r):r;return i(B,[0,ax,aw]);case
1:var
s=c[2],t=c[1],N=g(p[26],t[4],s),ay=g(p[8],N,s),az=g(p[7],t[4],ay),aA=t[3],aB=function(a){return g(p[9],a,s)},O=g(p[43],aB,aA),aC=y(a,t[1]),aD=i(e[93],aC),aE=i(j[17][1],O),aF=i(e[93],aE),aI=aJ(o,O,N),aK=i(e[97][6],az),aL=[0,i(e[97][6],s),aK,aI,aF,aD],u=e[69],P=k(u),aM=l===P?u[1]:f===P?i(h[2],u):u;return i(B,[0,aM,aL]);case
3:var
J=c[2],K=c[1],aN=K[3],aO=function(a){return g(p[9],a,J)},Q=g(p[43],aO,aN),aP=g(p[26],K[4],J),aQ=y(a,K[1]),aR=i(e[93],aQ),aS=n(a,d[2]),aT=i(j[17][1],Q),aU=i(e[93],aT),aV=aJ(o,Q,aP),aW=[0,i(e[97][6],J),aV,aU,aS,aR],v=e[70],R=k(v),aX=l===R?v[1]:f===R?i(h[2],v):v;return i(B,[0,aX,aW]);case
4:var
S=c[3],T=S[2],U=S[1],V=c[2],W=V[2],X=V[1],aY=y(a,W[1]),aZ=y(a,T[1]),a0=bY(X,W[3],U,T[3]),a1=n([0,[1,c[1]],a],d[2]),a2=i(e[93],aZ),a3=i(e[97][6],U),a4=i(e[93],aY),a5=[0,i(e[97][6],X),a4,a3,a2,a0,a1],w=e[71],Y=k(w),a6=l===Y?w[1]:f===Y?i(h[2],w):w;return i(B,[0,a6,a5]);case
5:var
q=c[1],Z=q[4],_=q[3],$=q[2],a7=y(a,_[1]),a8=y(a,$[1]),a9=aG(o,q[5]),a_=aH(o,$),a$=bf(o,[1,aH(o,_),[2,[1,[4,a9],a_],[0,Z]]]),ba=n([0,[1,q[1][1]],a],d[2]),bb=i(e[93],a8),bc=i(e[93],a7),bd=a$[1],be=[0,i(e[97][6],Z),bd,bc,bb,ba],x=e[72],aa=k(x),bg=l===aa?x[1]:f===aa?i(h[2],x):x;return i(B,[0,bg,be]);case
9:var
ab=c[1],bh=i(j[17][1],ab[3]),bi=i(e[93],bh),bj=y(a,c[2][1]),bk=i(e[93],bj),bl=y(a,ab[1]),bm=[0,bi,i(e[93],bl),bk],z=e[73],ac=k(z),bn=l===ac?z[1]:f===ac?i(h[2],z):z;return i(B,[0,bn,bm]);case
10:var
L=c[2],ad=c[1];if(0===c[3]){var
bo=y(a,L[1]),bp=i(e[93],bo),bq=y(a,ad[1]),br=i(e[93],bq),bs=i(j[17][1],L[3]),bt=[0,i(e[93],bs),br,bp],A=e[78],ae=k(A),bu=l===ae?A[1]:f===ae?i(h[2],A):A;return i(B,[0,bu,bt])}var
bv=y(a,L[1]),bw=i(e[93],bv),bx=y(a,ad[1]),by=[0,i(e[93],bx),bw],C=e[77],af=k(C),bz=l===af?C[1]:f===af?i(h[2],C):C;return i(B,[0,bz,by]);case
11:var
ag=c[2],bA=y(a,ag[1]),bB=y(a,c[3]),bC=n([0,[1,c[1]],a],d[2]),bD=i(e[93],bB),bE=i(e[93],bA),bF=i(j[17][1],ag[3]),bG=[0,i(e[93],bF),bE,bD,bC],D=e[74],ah=k(D),bH=l===ah?D[1]:f===ah?i(h[2],D):D;return i(B,[0,bH,bG]);case
12:var
bI=y(a,c[1]),bJ=[0,i(e[93],bI)],E=e[66],ai=k(E),bK=l===ai?E[1]:f===ai?i(h[2],E):E;return i(B,[0,bK,bJ]);case
13:var
bL=y(a,c[1]),bM=[0,i(e[93],bL)],F=e[76],aj=k(F),bN=l===aj?F[1]:f===aj?i(h[2],F):F;return i(B,[0,bN,bM]);case
14:var
bO=y(a,c[1]),bP=[0,i(e[93],bO)],G=e[67],ak=k(G),bQ=l===ak?G[1]:f===ak?i(h[2],G):G;return i(B,[0,bQ,bP]);case
15:var
al=c[3],am=c[2],an=c[1],bR=y(a,an[1]),bS=n([0,[1,am[1]],a],am[2]),bT=n([0,[1,al[1]],a],al[2]),bU=i(e[93],bR),bV=i(j[17][1],an[3]),bW=[0,i(e[93],bV),bU,bS,bT],H=e[75],ao=k(H),bX=l===ao?H[1]:f===ao?i(h[2],H):H;return i(B,[0,bX,bW]);case
16:return i(m[2],h8);default:var
d=d[2];continue}}return i(m[2],h9)}}return function(a){return n(b,a)}}function
aT(a,b,c){if(0===c[0]){var
f=c[1];return bj(f[3],a,b,f[2])}var
h=c[1];try{var
x=g(F[6],a[7],h),d=x}catch(f){f=u(f);if(f!==I)throw f;var
l=g(n[4],h_,h),d=i(m[2],l)}var
k=bh(d,b),p=g(j[18],d[2],h$),q=[0,[0,d[1],p]],r=g(j[18],d[2],ia),s=aT(a,[0,[0,[0,d[1],r]],b],c[3]),t=aT(a,[0,q,b],c[2]),v=bi(k[2]),w=[0,i(e[93],k[1]),v,t,s];return o(e[83],w)}function
bj(a,b,c,d){if(d){var
k=d[1];try{var
v=g(F[6],b[6],k),h=v}catch(f){f=u(f);if(f!==I)throw f;var
p=g(n[4],ib,k),h=i(m[2],p)}var
f=bh(h[5],c),l=f[2],q=h[6]?g(j[18],l,ic):l,r=bj(a,b,[0,[1,h[8][1]],c],d[2]),s=bi(q),t=[0,i(e[93],f[1]),s,r];return o(e[84],t)}var
w=[0,i(b8(b,c),a)];return o(e[85],w)}function
b9(d,b,c){var
G=[0,0];function
Q(a){var
e=G[1];function
h(a){return a[8]}var
k=g(j[17][12],h,a),b=g(p[69],[0,a9,a$,am],k),c=ar(b),f=bg(d,c);if(L[1]){g(n[2],id,e);g(p[36],am,b);i(m[27],ie);var
l=function(a){return g(n[2],ig,a)};g(j[17][11],l,c);i(m[27],ih);g(j[17][11],aP,f);i(n[2],ii)}G[1]++;return[0,[0,e,c,b],f]}if(L[1])i(n[2],ij);var
q=aS(g(j[17][12],Q,c),0);if(L[1]){aR(m[24],q);i(m[32],0)}var
H=aQ(q);function
R(a){return bd(d,a)}var
A=g(j[17][12],R,H);function
S(a){return a[5][1]}var
T=g(j[17][12],S,A),U=i(j[17][94],T),r=[0,W,v(j[17][88],x[1][1],W,U)];function
X(a){return v(j[17][bs],x[1][1],a,b)}var
B=g(j[17][12],X,r),Y=aK(A),Z=g(M,Y,aL(v(j[17][bs],x[1][1],W,b))),a=b4(d,q);function
_(a){return a[1]}var
$=g(j[17][12],_,a);function
ab(a){return a[2]}var
ad=g(j[17][12],ab,a);function
ae(a){return[1,a[4]]}var
af=g(j[17][12],ae,a),ag=g(j[18],Z,$);function
I(a,b){if(b){var
c=b[1],f=i(bc(d),c);v(F[5],d[4],c,a);var
e=[0,f,I(a+1|0,b[2])]}else
var
e=b;return e}var
ah=I(0,ag),s=e[97][1],J=k(s),ai=l===J?s[1]:f===J?i(h[2],s):s,aj=g(e[94],ai,ah);function
ak(a){var
b=a[3],c=z(d,b[2]),f=[0,z(d,b[1]),c];return o(e[21],f)}var
al=g(j[17][12],ak,a);if(B){var
C=B[1];if(typeof
C==="number")var
E=1;else
if(1===C[0])var
K=aI(d,C[1]),D=1,E=0;else
var
E=1;if(E)var
D=0}else
var
D=0;if(!D)var
K=aI(d,1);var
an=i(j[17][4],B);function
ao(a){return aI(d,b7(H,a))}var
ap=g(j[17][12],ao,an),aq=i(e[95],d[2]),as=g(j[18],al,ap),u=e[20],N=k(u),at=l===N?u[1]:f===N?i(h[2],u):u,au=[0,K,aq,aj,g(e[94],at,as)],av=o(e[86],au);function
aw(b){function
c(a){if(a){if(1===a[1]){var
d=[0,c(a[2])];return o(e[11],d)}var
f=[0,c(a[2])];return o(e[10],f)}var
g=[0,b[4]],h=b[6]?e[12]:e[13];return o(h,g)}var
d=v(j[17][79],x[1][1],b[5][1],r),f=0===d?0:d+i(j[17][1],a)|0,g=c(b[5][2]),h=[0,i(e[93],f),g];return o(e[9],h)}var
ax=g(j[17][12],aw,A),w=e[8],O=k(w),ay=l===O?w[1]:f===O?i(h[2],w):w,az=g(e[94],ay,ax),aA=i(j[17][4],r);function
aB(a){return[0,[0,a,0]]}var
aC=g(j[17][12],aB,aA),aD=aT(d,g(j[18],[0,[0,[0,W,0]],af],aC),q),y=e[7],P=k(y),aE=l===P?y[1]:f===P?i(h[2],y):y,aF=i(aa[85],aE),aG=i(V[66][8],aF),aH=i(V[66][8],aa[66]),aJ=o(e[87],[0,aD,az]),aM=i(aa[85],aJ),aN=i(V[66][8],aM),aO=i(aa[52],av),aU=i(V[66][8],aO),aV=i(j[17][4],r),aW=g(j[17][12],t[113],aV),aX=g(j[18],ad,aW),aY=i(aa[148],aX);return g(ac,g(ac,g(ac,g(ac,g(ac,i(V[66][8],aY),aU),aN),bK),aH),aG)}var
bk=[0,p,L,bK,gV,ac,B,bL,W,bM,bN,bO,gX,bP,a9,bQ,a$,bR,am,ba,bS,aG,bb,bc,bT,g6,bU,bd,D,G,E,bV,aH,o,bW,bX,z,aI,aJ,M,an,aK,aL,ao,aM,hD,bY,ad,be,ap,ae,aN,Q,bf,bZ,b0,X,aO,aq,Y,af,b1,N,R,b2,aP,b3,ar,as,b4,bg,b5,b6,aQ,b7,aR,aS,bh,bi,y,b8,aT,bj,b9,function(a){i(J[11],ik);bQ(0);bR(0);try{var
b=bM(0),c=b1(b,a),d=b2(c);if(L[1])b3(d);var
e=i(b9(b,c,d),a);return e}catch(f){f=u(f);if(f===p[28])return i(C[6],il);throw f}}];aW(308,bk,"Romega_plugin.Refl_omega");i(bl[12],ir);function
at(a){var
b=g(bm[13],x[1][5],is),c=i(x[5][4],b),d=i(x[6][4],a),e=g(x[13][2],[0,c],d),f=i(aU[6],e);return i(b_[17],f)}function
aV(a){var
b=g(j[17][95],ip[29],a);function
c(a){if(d(a,it)){if(d(a,iu)){if(d(a,iv)){if(d(a,iw)){var
b=g(m[16],ix,a);return i(C[6],b)}return at(iy)}return at(iz)}return at(iA)}return at(iB)}var
e=g(bm[13],c,b),f=i(V[66][1],bk[84]),h=g(ab[70][3],aa[28],f),k=i(ab[70][20],e),l=i(V[55],k),n=i(ab[70][28],l);return g(ab[70][3],n,h)}function
iC(a){var
b=[28,[0,0,[31,b$[4],[0,[0,Z,iD],0],0]]],c=i(x[1][5],iE);return bn(aU[4],1,0,c,b)}try{var
i_=[0,function(a,b){return aV(0)}];v(aU[9],0,[0,Z,i$],i_);g(bl[19],iC,Z)}catch(f){f=u(f);if(!i(C[22],f))throw f;var
iF=g(C[18],0,f),iI=g(m[16],iH,iG),iK=g(m[16],iJ,iI),iL=i(w[1],iK),iM=g(w[13],iL,iF);i(a7[13],iM)}try{var
iV=0,iY=[0,function(a){return a?i(m[2],iW):function(a){return aV(iX)}},iV],i0=[0,function(a){if(a)if(!a[2]){var
b=a[1],c=i(ca[17],cb[4]),d=i(ca[6],c),e=g(b_[2][7],d,b);return function(a){return aV(g(bm[13],x[1][7],e))}}return i(m[2],iZ)},iY],i1=i(iq[12],i0);v(aU[9],0,[0,Z,i2],i1);var
i3=function(a){var
d=i(x[1][6],i5),b=cb[4],c=0;if(0===b[0])return g(io[4],[0,Z,i8],[0,[0,i7,[0,i6,[0,[1,b$[4],[0,[5,[0,b[1]]]],d],c]]],i4]);throw[0,im,i9]};g(bl[19],i3,Z)}catch(f){f=u(f);if(!i(C[22],f))throw f;var
iN=g(C[18],0,f),iQ=g(m[16],iP,iO),iS=g(m[16],iR,iQ),iT=i(w[1],iS),iU=g(w[13],iT,iN);i(a7[13],iU)}var
cc=[0,Z,at,aV];aW(320,cc,"Romega_plugin.G_romega");aW(321,[0,e,bk,cc],"Romega_plugin");return});
