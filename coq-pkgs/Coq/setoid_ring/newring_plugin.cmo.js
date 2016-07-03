(function(le){"use strict";var
ag=140,cK=",",bp="AddSetoidRing",R='"',cJ="field_mod",u=250,cI="(",bm="AddSetoidField",cH="constants",Q="plugins/setoid_ring/g_newring.ml4",a0="Field_tac",cs="with carrier ",cF="postprocess tactic",cG="Init",aZ="field",cE="InitialRing",o=246,cr="decidable",cB="Pphi_pow",cC='Using setoid "',cD="tactic recognizing constants",cq=102,L="Extension: cannot occur",cA="postprocess",a5="setoid",cp=-10,cz="ring_mod",co="$map",E="]",cn="preprocess",bl="power_tac",cy="Print",a4="closed_term",bo="power",cx="Ring_polynom",a3="protect_fv",cm="Ring_tac",az="Ring",cl='and "',ck="$lH",ci="morphism",cj="plugins/setoid_ring/newring.ml",bn="field_lookup",a2="vernac argument needs not wit printer",ab="Coq",cg="closed",ch="F",a1="x",bk="ring_lookup",bj="ring",cf="preprocess tactic",aa=124,D="[",cw='and morphisms "',ce="and equivalence relation ",cd=")",ca="field_mods",cb=":",cc="t",ay=139,b_="abstract",b$="$f",aY="vernac argument needs not globwit printer",aX="sign",b9="PEeval",aW="div",aV="newring_plugin",cu="Add",cv="completeness",ct="ring_mods",b8="Pphi_dev",F=le.jsoo_runtime,K=F.caml_check_bound,b=F.caml_new_string,t=F.caml_obj_tag,bi=F.caml_register_global,J=F.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):F.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):F.caml_call_gen(a,[b,c])}function
e(a,b,c,d){return a.length==3?a(b,c,d):F.caml_call_gen(a,[b,c,d])}function
P(a,b,c,d,e){return a.length==4?a(b,c,d,e):F.caml_call_gen(a,[b,c,d,e])}function
U(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):F.caml_call_gen(a,[b,c,d,e,f])}function
lb(a,b,c,d,e,f,g,h,i){return a.length==8?a(b,c,d,e,f,g,h,i):F.caml_call_gen(a,[b,c,d,e,f,g,h,i])}function
lc(a,b,c,d,e,f,g,h,i,j){return a.length==9?a(b,c,d,e,f,g,h,i,j):F.caml_call_gen(a,[b,c,d,e,f,g,h,i,j])}function
ld(a,b,c,d,e,f,g,h,i,j,k){return a.length==10?a(b,c,d,e,f,g,h,i,j,k):F.caml_call_gen(a,[b,c,d,e,f,g,h,i,j,k])}var
f=F.caml_get_global_data(),bF=[0,b(aV),b("get_res")],bH=[0,[0,b(ab),[0,b("Setoids"),[0,b("Setoid"),0]]],[0,[0,b(ab),[0,b("Lists"),[0,b("List"),0]]],[0,[0,b(ab),[0,b(cG),[0,b("Datatypes"),0]]],[0,[0,b(ab),[0,b(cG),[0,b("Logic"),0]]],0]]]],aw=b("setoid_ring"),I=b(aV),p=f.Term,N=f.CClosure,i=f.Util,bs=f.Tacmach,z=f.Proofview,V=f.Coqlib,ak=f.Global,h=f.Names,n=f.Pervasives,ah=f.Tacintern,bv=f.Lib,s=f.CamlinternalLazy,aA=f.Universes,ac=f.Rewrite,M=f.Not_found,q=f.CErrors,A=f.Mod_subst,W=f.Tacsubst,S=f.Libnames,ad=f.Retyping,bu=f.Reductionops,d=f.Pp,H=f.Printer,G=f.Assert_failure,aj=f.Globnames,r=f.Tacinterp,aB=f.Typing,ae=f.Evarutil,bt=f.Smartlocate,j=f.Loc,al=f.Feedback,bw=f.Flags,ai=f.Stdarg,g=f.Genarg,aE=f.Evd,bq=f.Univ,bx=f.Declare,by=f.Constrintern,l=f.Constrarg,a6=f.Quote_plugin,br=f.Tactics,as=f.Tacenv,aC=f.Summary,aD=f.Libobject,aS=f.Tacentries,b2=f.Egramml,ao=f.Vernac_classifier,b1=f.Vernacinterp,O=f.Ppconstr,$=f.Pptactic,k=f.Pcoq,ax=f.Mltop,ap=f.CList,m=f.CLexer,gB=[0,0,0],gC=[0,0,0],gr=b("field kind"),gs=b(cD),gt=b(cf),gu=b(cF),gv=b(a5),gw=b(bo),gx=b(aX),gy=b(aW),gz=b("infinite property"),gg=[0,b(a0),0],gh=[0,0,0],gi=b("field_lemmas"),gj=b("_field_lemma1"),gk=b("_field_lemma2"),gl=b("_field_lemma3"),gm=b("_field_lemma4"),gn=b("_lemma5"),gp=[22,0],go=[22,0],ge=b("field inverse should be declared as a morphism"),f1=b("arguments of field_simplify do not have all the same type"),f2=b(aZ),f0=[0,b(a0),0],f3=b(R),f4=b(R),f5=b("cannot find a declared field structure over"),f6=b(aZ),f7=[0,b(cj),840,12],fV=[0,1],fW=[0,0],fU=b("bad field structure"),e_=[0,0,0],e$=[0,0,0],e1=b("ring kind"),e2=b(cD),e3=b(cf),e4=b(cF),e5=b(a5),e6=b(bo),e7=b(aX),e8=b(aW),eZ=b(" cannot be set twice"),eT=[0,b("Ring_base"),0],eU=b("ring_lemmas"),eV=b("_ring_lemma1"),eW=b("_ring_lemma2"),eY=[22,0],eX=[22,0],eR=[0,1],eS=[0,0],eQ=b("bad ring structure"),ez=b("ring addition should be declared as a morphism"),eA=b("ring multiplication should be declared as a morphism"),eB=b("ring opposite should be declared as a morphism"),eC=b(R),eD=b(cl),eE=b(R),eF=b(R),eG=b('",'),eH=b(cw),eI=b(R),eJ=b(cC),eK=b(R),eL=b(cl),eM=b(R),eN=b(cw),eO=b(R),eP=b(cC),ev=b("cannot find setoid relation"),eh=b("arguments of ring_simplify do not have all the same type"),ei=b(bj),ej=b(R),ek=b(R),el=b("cannot find a declared ring structure over"),em=b(bj),en=[0,b(cj),360,12],dG=[0,b(cx),0],dF=b("newring"),dx=b(az),dw=b(az),ds=b("ring: cannot find relation (not closed)"),dr=b("ring: cannot find relation"),di=b(az),dh=b(az),dg=b(a1),df=b(a1),dd=b(a1),db=b("Ring.exec_tactic: anomaly"),c_=b(a1),c$=b(ch),da=b(ch),c8=[2,1],c9=[0,1],c4=[0,b(aV),b(a4)],c5=b(cc),c6=b(cc),cY=b("not found"),cZ=b("map "),c0=b("lookup_map"),cW=b("dummy"),cV=b("global_head_of_constr"),dj=b("Build_Setoid_Theory"),dl=b("None"),dm=b("Some"),dn=b("eq"),dp=b("cons"),dq=b("nil"),dt=b(ab),du=[0,[0,b("Ring_theory"),0],[0,[0,b(cx),0],[0,[0,b(cm),0],[0,[0,b(cE),0],[0,[0,b(a0),0],[0,[0,b("Field_theory"),0],0]]]]]],dy=[0,b(ab),0],dz=b(cm),dB=[0,b(ab),0],dC=b(cE),dH=b("almost_ring_theory"),dI=b("Eqsth"),dK=b("Eq_ext"),dM=b("Eq_s_ext"),dO=b("ring_theory"),dP=b("mk_reqe"),dR=b("semi_ring_theory"),dS=b("mk_seqe"),dU=b("Abstract"),dV=b("Computational"),dX=b("Morphism"),dZ=b("inv_morph_nothing"),d0=b("mkhypo"),d2=b("hypo"),d5=b(b9),d8=b(cB),d$=b(b8),ed=b(bj),ee=b("ring-tac-carrier-table"),ef=b("ring-tac-name-table"),ep=b("tactic-new-ring-theory"),fb=[0,b(ab),0],fc=b(a0),fh=b("FEeval"),fk=b(b9),fn=b(cB),fq=b(b8),ft=b("display_pow_linear"),fw=b("display_linear"),fA=b(aZ),fD=b("PCond"),fH=b("field_cond"),fI=b(aZ),fK=b("simpl_field_expr"),fL=b("almost_field_theory"),fM=b("field_theory"),fN=b("semi_field_theory"),fO=b("AF_AR"),fQ=b("F_R"),fS=b("SF_SR"),fX=b("field-tac-carrier-table"),fY=b("field-tac-name-table"),f9=b("tactic-new-field-theory"),k3=b("$lt"),la=[0,b(Q),1,0],k4=[0,b(E)],k5=b(ck),k$=[0,b(Q),1,0],k6=[0,b(D)],k7=b(b$),k_=[0,b(Q),1,0],k8=[0,b(bn)],k9=b(bn),kY=b(L),kW=b(bm),kG=b(bm),kD=b(L),kB=b(L),kz=b(bm),kw=b(L),kt=b(ce),ku=b(cs),ks=b("The following field structures have been declared:"),kr=b(L),ko=b(aY),km=b(a2),j9=b(aY),j7=b(a2),jV=b(cv),jL=b("$lrt"),jU=[0,b(Q),1,0],jM=[0,b(E)],jN=b(ck),jT=[0,b(Q),1,0],jO=[0,b(D)],jP=b(b$),jS=[0,b(Q),1,0],jQ=[0,b(bk)],jR=b(bk),jG=b(L),jE=b(bp),jo=b(bp),jl=b(L),jj=b(L),jh=b(bp),je=b(L),jb=b(ce),jc=b(cs),ja=b("The following ring structures have been declared:"),i$=b(L),i8=b(aY),i6=b(a2),iR=b(aY),iP=b(a2),hG=[0,0],g_=b(b_),g$=b(cr),ha=b(ci),hb=b(E),hc=b(D),hd=b(cH),he=b(E),hf=b(D),hg=b(cg),hh=b(E),hi=b(D),hj=b(cn),hk=b(E),hl=b(D),hm=b(cA),hn=b(a5),ho=b(E),hp=b(D),hq=b(bl),hr=b(E),hs=b(D),ht=b(bl),hu=b(aX),hv=b(aW),g2=[0,[0,b(E)],0],g3=b("$l"),g9=[0,b(Q),1,0],g4=[0,b(D)],g5=b("$t"),g8=[0,b(Q),1,0],g6=[0,b(a4)],g7=b(a4),gX=b(L),gM=b(co),gV=[0,b(Q),1,0],gN=[0,b(a3)],gO=b("$id"),gU=[0,b(Q),1,0],gP=[0,b("in")],gQ=b(co),gT=[0,b(Q),1,0],gR=[0,b(a3)],gS=b(a3),gH=b(L),gF=b(L),gD=b(aV),gK=b(a3),g0=b(a4),hw=b(cz),hy=b(cz),hD=b(cr),hH=b(b_),hL=b(ci),hO=b(E),hR=b(D),hT=b(cH),hW=b(E),hZ=b(D),h1=b(cg),h4=b(E),h7=b(D),h9=b(cn),ia=b(E),id=b(D),ig=b(cA),il=b(a5),iq=b(aX),it=b(E),iw=b(D),iz=b(bo),iC=b(E),iF=b(D),iI=b(bl),iM=b(aW),iT=b(ct),iV=b(ct),iZ=b(cd),i1=b(cK),i3=b(cI),jp=[0,[0,[0,b(cy)],[0,[0,b("Rings")],0]],0],jw=[0,b(cb)],jA=[0,b(az)],jB=[0,b(cu)],jJ=b(bk),jW=b(cJ),jY=b(cJ),j4=b(cv),j$=b(ca),kb=b(ca),kf=b(cd),kh=b(cK),kj=b(cI),kH=[0,[0,[0,b(cy)],[0,[0,b("Fields")],0]],0],kO=[0,b(cb)],kS=[0,b("Field")],kT=[0,b(cu)],k1=b(bn),cP=f.Option,cL=f.Vars,cN=f.Refiner,cS=f.Environ,cQ=f.Goal,cM=f.Tacticals,cR=f.Esubst,cO=f.Redexpr,cT=f.Constr;function
bz(g,f,e,d,b){switch(a(f,d)){case
0:return c(N[54],e,b);case
1:return a(N[37],b);default:return-1===d?c(N[54],e,b):a(g,b)}}function
cU(b){var
c=a(p[39],b);try{var
g=a(aj[16],c[1]);return g}catch(b){b=J(b);if(b===M){var
f=a(d[1],cV);return e(q[3],0,0,f)}throw b}}function
bA(b){try{var
c=a(aj[16],b);return c}catch(b){b=J(b);if(b===M)return[0,a(h[1][5],cW)];throw b}}function
aF(f,d,b){var
k=a(f,bA(b));if(k){var
q=-1,r=k[1];return bz(function(a){return aF(f,d,a)},r,d,q,b)}var
h=a(p[ag],b);switch(h[0]){case
6:var
s=function(a,b){return aF(f,a,b)};return e(N[56],s,d,b);case
9:var
g=h[2],j=h[1],t=0;if(g.length-1<=0){var
u=a(p[aa],[0,j,g]);return a(N[37],u)}var
l=c(i[19][50],t,g),m=a(p[aa],[0,j,l[1]]),n=a(f,bA(m));if(n){var
v=n[1],o=function(b,a){return bz(function(a){return aF(f,d,a)},v,d,b,a)},w=c(i[19][16],o,l[2]),x=[6,o(-1,m),w];return a(N[38],x)}var
y=a(p[aa],[0,j,g]);return a(N[37],y);default:return a(N[37],b)}}function
bB(b,a){try{var
c=[0,e(i[17][119],aj[5],a,b)];return c}catch(a){a=J(a);if(a===M)return 0;throw a}}var
a7=[0,i[15][44][1]];function
a8(b,a){a7[1]=e(i[15][44][4],b,a,a7[1]);return 0}function
cX(e){try{var
b=c(i[15][44][22],e,a7[1]);return b}catch(b){b=J(b);if(b===M){var
f=a(d[1],cY),g=a(d[24],e),h=a(d[1],cZ),j=c(d[14],h,g),k=c(d[14],j,f);return c(q[7],c0,k)}throw b}}function
a9(f,d,j,b){var
g=a(cR[1],0),h=aF(a(cX(f),b),g,b),i=e(N[42],0,N[9],d);return c(N[59],i,h)}function
c1(a){var
b=0,c=2,d=[0,function(b,c,d){return a9(a,b,c,d)},c];return e(br[49],0,d,b)}function
c2(b,a){var
c=[0,[0,a,0]],d=2,f=[0,function(a,c,d){return a9(b,a,c,d)},d];return e(br[49],0,f,c)}function
c3(f,b){var
g=c(i[17][12],aA[48],b),h=e(i[17][16],a6[1][8][4],g,a6[1][8][1]);if(c(a6[1][16],h,f))return a(z[13],0);var
j=a(d[9],0);return c(cM[70][4],0,j)}function
bC(b){var
d=[0,c4,0];function
e(a){return[0,[0,j[4],a]]}var
f=c(i[17][12],e,b),k=a(g[17],l[6]),m=a(g[5],k),n=[0,[0,c(g[7],m,f)],0],o=a(h[1][5],c5),p=[0,[1,[0,j[4],o]],0],q=a(g[5],l[8]),r=[0,[0,c(g[7],q,p)],n],s=[31,j[4],d,r];return[28,[0,[0,[0,a(h[1][5],c6)],0],s]]}function
c7(c){var
b=a(ak[2],0),d=a(aE[17],b);return e(by[13],b,d,c)}function
T(c){var
b=a(ak[2],0),d=a(aE[17],b);return P(by[10],b,d,0,c)[1]}function
af(e,d,b){var
f=a(aA[54],b),g=a(bq[35][14],d),i=c(aA[55],g,f),j=[0,a(bq[35][13],i)],k=[0,[0,lb(bx[2],0,c9,0,0,0,j,0,b)],c8],l=a(h[1][5],e),m=U(bx[3],0,0,l,0,k);return a(p[125],m)}function
bD(g,f){function
k(g,b){var
d=b[1],i=a(n[20],d),k=c(n[16],c_,i),f=a(h[1][5],k),l=[2,[1,[0,j[4],f]]],m=e(h[1][10][4],f,g,b[3]);return[0,d+1|0,[0,l,b[2]],m]}var
b=e(i[17][16],k,f,[0,0,0,h[1][10][1]]),l=b[3],m=a(h[1][5],c$),o=e(h[1][10][4],m,g,l),p=[0,o,a(r[28],0)[2]],q=b[2],d=a(h[1][5],da);return c(r[18],p,[29,[0,j[4],[3,j[4],[1,[0,j[4],d]],q]]])}var
bE=[0,[0]],dc=[0,bF,0],de=[0,function(d,b){var
e=a(i[17][3],d),f=a(g[6],ai[3]),j=c(r[2][7],f,e);function
k(d){var
e=b[1],f=a(n[20],d),g=c(n[16],dd,f),i=a(h[1][5],g);return c(h[1][10][22],i,e)}bE[1]=c(i[19][2],j,k);return a(z[13],0)}];e(as[9],0,bF,de);function
bG(C,B,k,b,A){function
D(g,b){var
d=b[1],i=a(n[20],d),k=c(n[16],df,i),f=a(h[1][5],k),l=[2,[1,[0,j[4],f]]],m=b[3],o=a(r[2][1],g),p=e(h[1][10][4],f,o,m);return[0,d+1|0,[0,l,b[2]],p]}var
l=e(i[17][16],D,A,[0,0,0,h[1][10][1]]),E=a(r[28],0)[2],F=[0,l[3],E];function
G(b){var
d=a(n[20],b),e=c(n[16],dg,d);return a(h[1][5],e)}var
H=c(i[17][48],k,G),I=a(g[5],ai[3]),J=[0,[0,c(g[7],I,k)],0],K=[31,j[4],dc,J];function
L(a){return[0,a]}var
M=[5,[28,[0,c(i[17][12],L,H),K]]],v=aE[3][1],w=p[117],x=a(cS[10],C),f=P(cQ[4][6],B,x,w,v),y=[0,f[1],f[3]],d=t(b),N=c(i[18],l[2],[0,M,0]),q=u===d?b[1]:o===d?a(s[2],b):b,O=c(r[18],F,[29,[0,j[4],[3,j[4],[0,[0,j[4],q]],N]]]),Q=c(z[66][8],O,y),R=a(cN[2],Q),m=a(ae[43],R),S=m[2],T=c(aE[142],0,m[1])[2],U=bE[1];function
V(c){var
b=a(r[2][2],c),d=b?b[1]:a(n[2],db);return a(S,d)}return[0,c(i[19][15],V,U),T]}function
bI(a){return[o,function(b){return e(V[6],dh,bH,a)}]}function
aG(a){return[o,function(b){return e(V[7],di,bH,a)}]}var
dk=bI(dj),a_=aG(dl),a$=aG(dm),X=bI(dn),at=aG(dp),au=aG(dq);function
av(b,d){var
c=t(b),e=u===c?b[1]:o===c?a(s[2],b):b;return a(p[aa],[0,e,d])}function
v(f,b,e){var
d=t(b),g=u===d?b[1]:o===d?a(s[2],b):b,h=[0,c(ae[13],f,g),e];return a(p[aa],h)}function
bJ(h){var
c=a(p[ag],h);if(9===c[0]){var
b=c[2];if(2<=b.length-1){var
j=e(i[19][7],b,0,b.length-1-2|0),d=a(p[aa],[0,c[1],j]);if(a(cL[2],d)){var
f=b.length-1-1|0,g=b.length-1-2|0,k=K(b,f)[f+1];return[0,d,K(b,g)[g+1],k]}return a(q[6],ds)}}return a(q[6],dr)}var
aH=[0,dt,[0,aw,0]];function
dv(a){return c(i[18],aH,a)}var
bK=c(i[17][12],dv,du);function
Y(a){return[o,function(b){return e(V[6],dw,bK,a)}]}function
B(a){return[o,function(b){return e(V[7],dx,bK,a)}]}var
dA=c(i[17][12],h[1][5],[0,dz,[0,aw,dy]]);a(h[5][4],dA);var
dD=c(i[17][12],h[1][5],[0,dC,[0,aw,dB]]),dE=a(h[5][4],dD);function
bL(b){return[o,function(d){var
c=a(h[6][4],b);return e(h[cq],[0,dE],h[5][6],c)}]}function
am(a){var
b=[0,aw,dG];return[o,function(c){return e(V[5],dF,b,a)}]}var
aI=Y(dH),dJ=B(dI),dL=B(dK),dN=B(dM),aJ=Y(dO),dQ=Y(dP),aK=Y(dR),dT=Y(dS),aL=Y(dU),dW=Y(dV),dY=Y(dX),Z=bL(dZ),d1=B(d0),y=B(d2);function
bM(g,f){var
b=f;for(;;){var
d=a(p[ag],b);if(6===d[0]){var
b=d[3];continue}var
e=bJ(b),h=function(c){var
b=c[1],d=t(b),e=c[2],f=u===d?b[1]:o===d?a(s[2],b):b;return[0,f,e]},j=c(i[17][12],h,g),k=function(a){return-1===a?1:2},l=[0,[0,cU(e[1]),k],j];return function(a){return bB(l,a)}}}var
d3=0;function
d4(b){var
a=b+1|0;if(!(13<a>>>0))switch(a){case
12:return 2;case
0:case
8:case
10:case
13:return 0}return 1}var
d6=[0,[0,am(d5),d4],d3];function
d7(b){var
a=b+1|0;if(!(18<a>>>0))switch(a){case
17:return 2;case
0:case
9:case
10:case
11:case
12:case
14:case
16:case
18:return 0}return 1}var
d9=[0,[0,am(d8),d7],d6];function
d_(b){var
a=b-8|0;if(6<a>>>0){if(-9!==a)return 1}else
if(5===a)return 2;return 0}var
ea=[0,[0,am(d$),d_],d9],eb=[0,[0,au,function(b){var
a=-1!==b?1:0,c=a?1:a;return c}],ea],ec=[0,[0,at,function(a){var
b=-1!==a?1:0;if(b){if(2!==a)return 1;var
c=2}else
var
c=b;return c}],eb];a8(ed,function(a){return bM(ec,a)});var
an=a(i[21][1],[0,cT[33]]),ba=e(aC[2],0,ee,an[1]),bb=e(aC[2],0,ef,S[24][1]);function
eg(a){return c(an[22],a,ba[1])}function
eo(d){var
a=d[2],b=d[1],e=c(A[45],b,a[1]),f=c(A[45],b,a[2]),g=c(A[45],b,a[3]),h=c(A[45],b,a[4]),i=c(A[45],b,a[5]),j=c(A[45],b,a[6]),k=c(A[45],b,a[9]),l=c(A[45],b,a[10]),m=c(W[1],b,a[7]),n=c(W[1],b,a[8]),o=c(W[1],b,a[11]),q=c(W[1],b,a[12]);if(e===a[1])if(f===a[2])if(c(p[136],g,a[3]))if(h===a[4])if(i===a[5])if(j===a[6])if(k===a[9])if(l===a[10])if(m===a[7])if(n===a[8])if(o===a[11])if(q===a[12])return a;return[0,e,f,g,h,i,j,m,n,k,l,o,q]}function
bN(b){var
a=b[2],c=b[1];ba[1]=e(an[4],a[1],a,ba[1]);bb[1]=e(S[24][4],c[1],a,bb[1]);return 0}var
aM=a(aD[1],ep),eq=aM[8],er=aM[7];function
es(a){return[0,a]}function
et(c,b){var
a=1===c?1:0;return a?bN(b):a}var
eu=a(aD[4],[0,aM[1],bN,aM[3],et,es,eo,er,eq]);function
bO(d,e,c,b){try{var
f=P(ac[10],d,e[1],c,b),g=P(ac[11],d,f[1],c,b),h=P(ac[12],d,g[1],c,b);e[1]=h[1];var
i=av(dk,[0,c,b,f[2],g[2],h[2]]);return i}catch(b){b=J(b);if(b===M)return a(q[6],ev);throw b}}function
ew(h,g,f,e,d,c,b,a){return av(dQ,[0,h,g,f,e,d,c,b,a])}function
ex(f,e,d,c,b,a){return av(dT,[0,f,e,d,c,b,a])}function
ey(r,g,h){var
b=h[5],k=h[4],i=h[3],j=h[2],f=h[1],n=a(p[ag],b);if(9===n[0])if(1===n[2].length-1){var
D=t(X),aR=u===D?X[1]:o===D?a(s[2],X):X;if(c(p[ay],n[1],aR)){var
aS=v(g,dJ,[0,f]),aT=k?v(g,dL,[0,f,j,i,k[1]]):v(g,dN,[0,f,j,i]),aU=e(aB[7],r,g,aS);return[0,aU,e(aB[7],r,g,aT)]}}var
w=[0,[0,[0,[0,f,[0,b]]],[0,[0,[0,f,[0,b]]],0]],[0,[0,f,[0,b]]]],E=bO(a(ak[2],0),g,f,b);try{var
aQ=c(ac[13],w,j),x=aQ}catch(b){b=J(b);if(b!==M)throw b;var
x=a(q[6],ez)}var
l=x[2];try{var
aP=c(ac[13],w,i),y=aP}catch(b){b=J(b);if(b!==M)throw b;var
y=a(q[6],eA)}var
m=y[2];if(k){var
z=k[1];try{var
aq=c(ac[13],[0,[0,[0,[0,f,[0,b]]],0],[0,[0,f,[0,b]]]],z),A=aq}catch(b){b=J(b);if(b!==M)throw b;var
A=a(q[6],eB)}var
B=A[2],F=ew(f,j,i,z,b,l,m,B),G=a(d[1],eC),I=a(H[5],B),K=a(d[1],eD),L=a(d[17],0),N=a(d[1],eE),O=a(H[5],m),P=a(d[1],eF),Q=a(d[17],0),R=a(d[1],eG),S=a(H[5],l),T=a(d[1],eH),U=a(d[17],0),V=a(d[1],eI),W=a(H[5],b),Y=a(d[1],eJ),Z=c(d[14],Y,W),_=c(d[14],Z,V),$=c(d[14],_,U),aa=c(d[14],$,T),ab=c(d[14],aa,S),ad=c(d[14],ab,R),ae=c(d[14],ad,Q),af=c(d[14],ae,P),ah=c(d[14],af,O),ai=c(d[14],ah,N),aj=c(d[14],ai,L),am=c(d[14],aj,K),an=c(d[14],am,I),ao=c(d[14],an,G),ap=function(a){return c(al[11],0,a)};c(bw[52],ap,ao);var
C=F}else{var
ar=a(d[1],eK),as=a(H[5],m),at=a(d[1],eL),au=a(d[17],0),av=a(d[1],eM),aw=a(H[5],l),ax=a(d[1],eN),az=a(d[17],0),aA=a(d[1],eO),aC=a(H[5],b),aD=a(d[1],eP),aE=c(d[14],aD,aC),aF=c(d[14],aE,aA),aG=c(d[14],aF,az),aH=c(d[14],aG,ax),aI=c(d[14],aH,aw),aJ=c(d[14],aI,av),aK=c(d[14],aJ,au),aL=c(d[14],aK,at),aM=c(d[14],aL,as),aN=c(d[14],aM,ar),aO=function(a){return c(al[11],0,a)};c(bw[52],aO,aN);var
C=ex(f,j,i,b,l,m)}return[0,E,C]}function
bP(h,g,f,e,d,c,b,a){return a?a[1]:ey(h,g,[0,f,e,d,c,b])}function
bQ(b){if(typeof
b==="number"){var
c=t(aL);return u===c?aL[1]:o===c?a(s[2],aL):aL}else
return 0===b[0]?av(dW,[0,b[1]]):av(dY,[0,b[1]])}function
bR(p,n,m,l,k,d){if(d){var
b=d[1];if(0===b[0])return a(ah[3],b[1]);var
f=b[1],g=function(a){return c(bt[3],0,a)};return bC(c(i[17][12],g,f))}var
e=t(Z),h=u===e?Z[1]:o===e?a(s[2],Z):Z;return[29,[0,j[4],[3,j[4],[0,[0,j[4],h]],0]]]}function
aN(c,b,a){return v(b,d1,[0,U(ad[2],0,0,c,b[1],a),a])}function
bS(d,b,h){var
f=t(y),j=u===f?y[1]:o===f?a(s[2],y):y,g=c(ae[13],b,j),k=v(b,au,[0,g]);function
l(c,a){return v(b,at,[0,g,aN(d,b,c),a])}var
m=e(i[17][16],l,h,k),n=e(aB[7],d,b,m);return c(ae[42],b[1],n)}function
bT(m,b,e){var
f=t(y),n=u===f?y[1]:o===f?a(s[2],y):y,g=c(ae[13],b,n);if(e){var
h=e[1],d=h[1];if(0===d[0])var
k=a(ah[3],d[1]);else
var
p=d[1],q=function(a){return c(bt[3],0,a)},k=bC(c(i[17][12],q,p));return[0,k,v(b,a$,[0,g,aN(m,b,T(h[2]))])]}var
l=t(Z),r=u===l?Z[1]:o===l?a(s[2],Z):Z,w=[0,[0,j[4],r]],x=v(b,a_,[0,g]);return[0,[29,[0,j[4],[3,j[4],w,0]]],x]}function
bU(g,b,d){var
e=t(y),h=u===e?y[1]:o===e?a(s[2],y):y,f=c(ae[13],b,h);return d?v(b,a$,[0,f,aN(g,b,T(d[1]))]):v(b,a_,[0,f])}function
bV(g,b,d){var
e=t(y),h=u===e?y[1]:o===e?a(s[2],y):y,f=c(ae[13],b,h);return d?v(b,a$,[0,f,aN(g,b,T(d[1]))]):v(b,a_,[0,f])}function
bW(m,J,ar,I,aq,H,ap,ao,an){var
L=H[2],M=H[1],N=J[2],r=J[1],as=c(i[18],aH,eT);a(V[11],as);var
f=a(ak[2],0),_=U(ad[2],0,0,f,r,N),k=a(p[ag],_);if(9===k[0]){var
b=k[2],v=b.length-1-6|0;if(2<v>>>0)var
e=0;else{var
l=k[1];switch(v){case
0:var
w=t(aK),$=b[1],aa=b[2],ab=b[3],ac=b[4],ae=b[5],ai=b[6],aj=u===w?aK[1]:o===w?a(s[2],aK):aK;if(c(p[ay],l,aj))var
d=[0,eR,$,aa,ab,ac,ae,0,0,ai],e=1;else
var
e=0;break;case
1:var
e=0;break;default:var
x=b[1],y=b[2],z=b[3],A=b[4],B=b[5],C=b[6],D=b[7],E=b[8],F=t(aI),al=u===F?aI[1]:o===F?a(s[2],aI):aI;if(c(p[ay],l,al))var
d=[0,0,x,y,z,A,B,[0,C],[0,D],E],e=1;else{var
G=t(aJ),am=u===G?aJ[1]:o===G?a(s[2],aJ):aJ;if(c(p[ay],l,am))var
d=[0,eS,x,y,z,A,B,[0,C],[0,D],E],e=1;else
var
e=0}}}}else
var
e=0;if(!e)var
d=a(q[6],eQ);var
O=d[9],P=d[8],Q=d[6],R=d[5],S=d[2],g=[0,r],T=bP(f,g,S,R,Q,P,O,ar),W=T[1],X=bT(f,g,ap),at=bU(f,g,ao),au=bV(f,g,an),av=[0,at,[0,au,[0,bQ(I),0]]],aw=[0,W,[0,T[2],[0,N,[0,X[2],av]]]],ax=bL(eU),Y=bG(f,g[1],5,ax,aw),Z=Y[2],j=Y[1],az=K(j,3)[4],aA=K(j,4)[5],aB=a(h[1][7],m),aC=af(c(n[16],aB,eV),Z,az),aD=a(h[1][7],m),aE=af(c(n[16],aD,eW),Z,aA),aF=bR(f,r,I,d[1],[0,d[3],d[4],R,Q,P],aq),aG=M?a(ah[3],M[1]):eY,aL=L?a(ah[3],L[1]):eX,aM=X[1],aN=K(j,0)[1],aO=K(j,2)[3],aP=a(eu,[0,S,O,W,K(j,1)[2],aO,aN,aF,aM,aC,aE,aG,aL]);c(bv[6],m,aP);return 0}function
bX(a){return typeof
a==="number"?0:0===a[0]?[0,T(a[1])]:[1,T(a[1])]}function
w(e,b,d){if(a(cP[3],b[1])){b[1]=[0,d];return 0}var
f=c(n[16],e,eZ);return a(q[6],f)}function
e0(l){var
b=[0,0],d=[0,0],e=[0,0],f=[0,0],g=[0,0],h=[0,0],j=[0,0],k=[0,0];function
m(a){switch(a[0]){case
0:return w(e1,b,bX(a[1]));case
1:return w(e2,e,a[1]);case
2:return w(e3,f,a[1]);case
3:return w(e4,g,a[1]);case
4:var
c=T(a[2]);return w(e5,d,[0,T(a[1]),c]);case
5:return w(e6,j,[0,a[1],a[2]]);case
6:return w(e7,h,a[1]);default:return w(e8,k,a[1])}}c(i[17][11],m,l);var
a=b[1],n=a?a[1]:a;return[0,n,d[1],e[1],f[1],g[1],j[1],h[1],k[1]]}function
bY(a,c){if(a)return a;var
b=bJ(c);return[0,b[2],[0,b[3],0]]}function
bZ(d,a,b,c){var
f=v(a,au,[0,b]);function
g(d,c){return v(a,at,[0,b,d,c])}var
h=e(i[17][16],g,c,f);return e(aB[7],d,a,h)}var
x=r[2][1];function
_(b){var
d=a(r[28],0);return c(r[2][6],d,b)}function
e9(b){var
c=a(x,b[2]),d=a(x,b[3]),e=a(x,b[4]),f=a(x,b[5]),g=a(x,b[6]),h=_(b[7]),i=_(b[8]),j=a(x,b[9]),k=a(x,b[10]),l=_([28,[0,e_,b[11]]]);return[0,c,[0,d,[0,e,[0,f,[0,g,[0,h,[0,i,[0,j,[0,k,[0,l,[0,_([28,[0,e$,b[12]]]),0]]]]]]]]]]]}function
fa(C,B,A,y){var
b=[0,function(k){var
e=a(bs[49][4],k),b=a(z[62][5],k);try{var
h=[0,e],f=bY(A,y);if(f){var
g=U(ad[2],0,0,b,e,f[1]),l=function(h){var
i=U(ad[2],0,0,b,e,h),f=1-U(bu[75],0,b,e,g,i);if(f){var
j=a(d[1],eh);return c(q[7],ei,j)}return f};c(i[17][11],l,f[2]);try{var
w=eg(g),j=w}catch(b){b=J(b);if(b!==M)throw b;var
m=a(d[1],ej),n=a(H[5],g),o=a(d[1],ek),p=a(d[17],0),r=a(d[1],el),s=c(d[14],r,p),t=c(d[14],s,o),u=c(d[14],t,n),v=c(d[14],u,m),j=c(q[7],em,v)}var
D=a(x,bZ(b,h,j[1],f)),E=a(x,bS(b,h,B)),F=e9(j),I=bD(C,c(i[18],F,[0,E,[0,D,0]])),K=a(z[60][1],h[1]),L=c(z[15],K,I);return L}throw[0,G,en]}catch(b){b=J(b);if(a(z[66][10],b))return c(z[18],0,b);throw b}}];return a(z[62][10],b)}var
fd=c(i[17][12],h[1][5],[0,fc,[0,aw,fb]]),fe=a(h[5][4],fd),ff=0;function
fg(c){var
a=c-8|0;if(6<a>>>0)var
b=-9===a?1:0;else
if(4<=a)switch(a-4|0){case
0:var
b=0;break;case
1:return 2;default:var
b=1}else
var
b=1;return b?0:1}var
fi=[0,[0,B(fh),fg],ff];function
fj(b){var
a=b+1|0;if(!(13<a>>>0))switch(a){case
12:return 2;case
0:case
8:case
10:case
13:return 0}return 1}var
fl=[0,[0,am(fk),fj],fi];function
fm(b){var
a=b+1|0;if(!(18<a>>>0))switch(a){case
17:return 2;case
0:case
9:case
10:case
11:case
12:case
14:case
16:case
18:return 0}return 1}var
fo=[0,[0,am(fn),fm],fl];function
fp(b){var
a=b-8|0;if(6<a>>>0){if(-9!==a)return 1}else
if(5===a)return 2;return 0}var
fr=[0,[0,am(fq),fp],fo];function
fs(d){var
b=d-9|0;if(10<b>>>0)var
a=cp===b?1:0;else{var
c=b-6|0;if(2<c>>>0)var
a=1;else
switch(c){case
0:var
a=0;break;case
1:var
a=1;break;default:return 2}}return a?0:1}var
fu=[0,[0,B(ft),fs],fr];function
fv(b){var
a=b-9|0;if(7<a>>>0){if(cp!==a)return 1}else
if(5===a)return 2;return 0}var
fx=[0,[0,B(fw),fv],fu],fy=[0,[0,au,function(b){var
a=-1!==b?1:0,c=a?1:a;return c}],fx],fz=[0,[0,at,function(a){var
b=-1!==a?1:0;if(b){if(2!==a)return 1;var
c=2}else
var
c=b;return c}],fy];a8(fA,function(a){return bM(fz,a)});var
fB=0;function
fC(b){var
a=b+1|0;if(!(15<a>>>0))switch(a){case
14:return 2;case
0:case
10:case
12:case
15:return 0}return 1}var
fE=[0,[0,B(fD),fC],fB],fF=[0,[0,au,function(b){var
a=-1!==b?1:0,c=a?1:a;return c}],fE],fG=[0,[0,at,function(a){var
b=-1!==a?1:0;if(b){if(2!==a)return 1;var
c=2}else
var
c=b;return c}],fF];a8(fH,function(e){function
b(c){var
b=c[1],d=t(b),e=c[2],f=u===d?b[1]:o===d?a(s[2],b):b;return[0,f,e]}var
d=c(i[17][12],b,fG);return function(a){return bB(d,a)}});function
fJ(a,b,c){return a9(fI,a,b,c)}c(cO[3],fK,fJ);var
aO=B(fL),aP=B(fM),aQ=B(fN),fP=B(fO),fR=B(fQ),fT=B(fS),bc=e(aC[2],0,fX,an[1]),bd=e(aC[2],0,fY,S[24][1]);function
fZ(a){return c(an[22],a,bc[1])}function
f8(d){var
a=d[2],b=d[1],e=c(A[45],b,a[1]),f=c(A[45],b,a[2]),g=c(A[45],b,a[5]),h=c(A[45],b,a[6]),i=c(A[45],b,a[7]),j=c(A[45],b,a[8]),k=c(A[45],b,a[9]),l=c(W[1],b,a[3]),m=c(W[1],b,a[4]),n=c(W[1],b,a[10]),o=c(W[1],b,a[11]);if(e===a[1])if(f===a[2])if(g===a[5])if(h===a[6])if(i===a[7])if(j===a[8])if(k===a[9])if(l===a[3])if(m===a[4])if(n===a[10])if(o===a[11])return a;return[0,e,f,l,m,g,h,i,j,k,n,o]}function
b0(b){var
a=b[2],c=b[1];bc[1]=e(an[4],a[1],a,bc[1]);bd[1]=e(S[24][4],c[1],a,bd[1]);return 0}var
aR=a(aD[1],f9),f_=aR[8],f$=aR[7];function
ga(a){return[0,a]}function
gb(c,b){var
a=1===c?1:0;return a?b0(b):a}var
gc=a(aD[4],[0,aR[1],b0,aR[3],gb,ga,f8,f$,f_]);function
gd(i,b,f,d){var
e=a(p[ag],d);if(9===e[0])if(1===e[2].length-1){var
h=t(X),l=u===h?X[1]:o===h?a(s[2],X):X;if(c(p[ay],e[1],l)){var
m=a(V[38],0)[6],n=[0,a(aA[48],m),[0,b,b,f]];return a(p[aa],n)}}bO(a(ak[2],0),i,b,d);var
j=[0,[0,[0,[0,b,[0,d]]],0],[0,[0,b,[0,d]]]];try{var
k=c(ac[13],j,f),g=k}catch(b){b=J(b);if(b!==M)throw b;var
g=a(q[6],ge)}return g[2]}function
gf(j,al,aD,I,ai,ae,ac,ab,$,_){var
am=ac[2],an=ac[1],m=al[2],ao=al[1],aE=c(i[18],aH,gg);a(V[11],aE);var
k=a(ak[2],0),f=[0,ao],az=U(ad[2],0,0,k,f[1],m),G=a(p[ag],az);if(9===G[0]){var
b=G[2],M=b.length-1-8|0;if(2<M>>>0)var
g=0;else{var
H=G[1];switch(M){case
0:var
N=b[1],O=b[2],P=b[3],Q=b[4],R=b[5],S=b[6],T=b[7],W=b[8],X=t(aQ),aA=u===X?aQ[1]:o===X?a(s[2],aQ):aQ;if(c(aj[11],aA,H))var
d=[0,fV,N,O,P,Q,R,0,0,S,T,W,v(f,fT,[0,N,O,P,Q,R,S,T,W,m])],g=1;else
var
g=0;break;case
1:var
g=0;break;default:var
w=b[1],x=b[2],y=b[3],z=b[4],A=b[5],B=b[6],C=b[7],D=b[8],E=b[9],F=b[10],Y=t(aO),aB=u===Y?aO[1]:o===Y?a(s[2],aO):aO;if(c(aj[11],aB,H))var
d=[0,0,w,x,y,z,A,[0,B],[0,C],D,E,F,v(f,fP,[0,w,x,y,z,A,B,C,D,E,F,m])],g=1;else{var
Z=t(aP),aC=u===Z?aP[1]:o===Z?a(s[2],aP):aP;if(c(aj[11],aC,H))var
d=[0,fW,w,x,y,z,A,[0,B],[0,C],D,E,F,v(f,fR,[0,w,x,y,z,A,B,C,D,E,F,m])],g=1;else
var
g=0}}}}else
var
g=0;if(!g)var
d=a(q[6],fU);var
J=d[11],ap=d[8],aq=d[6],ar=d[5],L=d[2],as=bP(k,f,L,ar,aq,ap,J,aD),at=as[2],au=as[1];bW(j,[0,f[1],d[12]],[0,[0,au,at]],I,ai,gh,ab,$,_);var
av=bT(k,f,ab),aF=bU(k,f,$),aG=bV(k,f,_),aI=gd(f,L,d[10],J),aJ=[0,aF,[0,aG,[0,bQ(I),0]]],aK=[0,au,[0,at,[0,aI,[0,m,[0,av[2],aJ]]]]],ay=[o,function(c){var
b=a(h[6][4],gi);return e(h[cq],[0,fe],h[5][6],b)}],aw=bG(k,f[1],9,ay,aK),r=aw[2],l=aw[1],aL=K(l,3)[4],aM=K(l,4)[5],aN=K(l,5)[6],aR=K(l,6)[7];if(ae)var
aS=[0,ae[1]],aT=[0,K(l,8)[9],aS],ax=a(p[aa],aT);else
var
ax=K(l,7)[8];var
aU=a(h[1][7],j),aV=af(c(n[16],aU,gj),r,aL),aW=a(h[1][7],j),aX=af(c(n[16],aW,gk),r,aM),aY=a(h[1][7],j),aZ=af(c(n[16],aY,gl),r,aN),a0=a(h[1][7],j),a1=af(c(n[16],a0,gm),r,aR),a2=a(h[1][7],j),a3=af(c(n[16],a2,gn),r,ax),a4=bR(k,ao,I,d[1],[0,d[3],d[4],ar,aq,ap],ai),a5=an?a(ah[3],an[1]):gp,a6=am?a(ah[3],am[1]):go,a7=a(gc,[0,L,J,a4,av[1],aV,aX,aZ,a1,a3,a5,a6]);c(bv[6],j,a7);return 0}function
gq(b){var
d=[0,0],e=[0,0],f=[0,0],g=[0,0],h=[0,0],j=[0,0],k=[0,0],l=[0,0],m=[0,0];function
n(b){if(0===b[0]){var
a=b[1];switch(a[0]){case
0:return w(gr,d,bX(a[1]));case
1:return w(gs,f,a[1]);case
2:return w(gt,g,a[1]);case
3:return w(gu,h,a[1]);case
4:var
c=T(a[2]);return w(gv,e,[0,T(a[1]),c]);case
5:return w(gw,l,[0,a[1],a[2]]);case
6:return w(gx,k,a[1]);default:return w(gy,m,a[1])}}return w(gz,j,T(b[1]))}c(i[17][11],n,b);var
a=d[1],o=a?a[1]:a;return[0,o,e[1],j[1],f[1],g[1],h[1],l[1],k[1],m[1]]}function
gA(b){var
c=a(x,b[2]),d=_(b[3]),e=_(b[4]),f=a(x,b[5]),g=a(x,b[7]),h=a(x,b[6]),i=a(x,b[8]),j=a(x,b[9]),k=_([28,[0,gB,b[10]]]);return[0,c,[0,d,[0,e,[0,f,[0,g,[0,h,[0,i,[0,j,[0,k,[0,_([28,[0,gC,b[11]]]),0]]]]]]]]]]}var
C=[0,c2,c1,c3,e0,bW,c7,bb,fa,gq,gf,bd,function(D,C,B,A){var
b=[0,function(k){var
e=a(bs[49][4],k),b=a(z[62][5],k);try{var
h=[0,e],f=bY(B,A),l=c(i[18],aH,f0);a(V[11],l);if(f){var
g=U(ad[2],0,0,b,e,f[1]),m=function(h){var
i=U(ad[2],0,0,b,e,h),f=1-U(bu[75],0,b,e,g,i);if(f){var
j=a(d[1],f1);return c(q[7],f2,j)}return f};c(i[17][11],m,f[2]);try{var
y=fZ(g),j=y}catch(b){b=J(b);if(b!==M)throw b;var
n=a(d[1],f3),o=a(H[5],g),p=a(d[1],f4),r=a(d[17],0),s=a(d[1],f5),t=c(d[14],s,r),u=c(d[14],t,p),v=c(d[14],u,o),w=c(d[14],v,n),j=c(q[7],f6,w)}var
E=a(x,bZ(b,h,j[1],f)),F=a(x,bS(b,h,C)),I=gA(j),K=bD(D,c(i[18],I,[0,F,[0,E,0]])),L=a(z[60][1],h[1]),N=c(z[15],L,K);return N}throw[0,G,f7]}catch(b){b=J(b);if(a(z[66][10],b))return c(z[18],0,b);throw b}}];return a(z[62][10],b)}];bi(366,C,"Newring_plugin.Newring");a(ax[12],gD);var
gE=0,gG=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(g[6],ai[4]),f=c(r[2][7],e,d);return function(b){return a(C[2],f)}}return a(n[2],gF)},gE],gI=[0,function(b){if(b){var
d=b[2];if(d)if(!d[2]){var
e=b[1],f=a(g[6],ai[4]),h=c(r[2][7],f,e),i=d[1],j=a(g[6],l[4]),k=c(r[2][7],j,i);return function(a){return c(C[1],h,k)}}}return a(n[2],gH)},gG],gJ=a(i[19][12],gI);e(as[9],0,[0,I,gK],gJ);function
gL(q){var
i=a(h[1][6],gM),b=ai[4],f=0,g=0;if(0===b[0]){var
k=[0,[0,gN,[0,[1,j[4],[5,[0,b[1]]],i],g]],f],n=a(h[1][6],gO),d=l[4],m=0;if(0===d[0]){var
o=[0,gP,[0,[1,j[4],[5,[0,d[1]]],n],m]],p=a(h[1][6],gQ),e=ai[4];if(0===e[0])return c(aS[4],[0,I,gS],[0,[0,gR,[0,[1,j[4],[5,[0,e[1]]],p],o]],k]);throw[0,G,gT]}throw[0,G,gU]}throw[0,G,gV]}c(ax[19],gL,I);var
gW=0,gY=[0,function(b){if(b){var
d=b[2];if(d)if(!d[2]){var
e=b[1],f=a(g[6],l[8]),h=c(r[2][7],f,e),i=d[1],j=a(g[17],l[18]),k=a(g[6],j),m=c(r[2][7],k,i);return function(a){return c(C[3],h,m)}}}return a(n[2],gX)},gW],gZ=a(i[19][12],gY);e(as[9],0,[0,I,g0],gZ);function
g1(k){var
f=a(h[1][6],g3),b=l[18],e=0;if(0===b[0]){var
g=[0,g4,[0,[1,j[4],[0,[5,[0,b[1]]]],f],g2]],i=a(h[1][6],g5),d=l[8];if(0===d[0])return c(aS[4],[0,I,g7],[0,[0,g6,[0,[1,j[4],[5,[0,d[1]]],i],g]],e]);throw[0,G,g8]}throw[0,G,g9]}c(ax[19],g1,I);function
aT(b){switch(b[0]){case
0:var
f=b[1];if(typeof
f==="number")return a(d[1],g_);else{if(0===f[0]){var
i=c(d[47],O[22],f[1]),j=a(d[1],g$);return c(d[14],j,i)}var
k=c(d[47],O[22],f[1]),l=a(d[1],ha);return c(d[14],l,k)}case
1:var
g=b[1];if(0===g[0]){var
m=a(d[1],hb),n=a($[18],g[1]),o=a(d[1],hc),p=a(d[17],0),q=a(d[1],hd),r=c(d[14],q,p),s=c(d[14],r,o),t=c(d[14],s,n);return c(d[14],t,m)}var
u=a(d[1],he),v=e(d[54],d[17],S[41],g[1]),w=a(d[1],hf),x=a(d[17],0),y=a(d[1],hg),z=c(d[14],y,x),A=c(d[14],z,w),B=c(d[14],A,v);return c(d[14],B,u);case
2:var
C=a(d[1],hh),D=a($[18],b[1]),E=a(d[1],hi),F=a(d[17],0),G=a(d[1],hj),H=c(d[14],G,F),I=c(d[14],H,E),J=c(d[14],I,D);return c(d[14],J,C);case
3:var
K=a(d[1],hk),L=a($[18],b[1]),M=a(d[1],hl),N=a(d[17],0),P=a(d[1],hm),Q=c(d[14],P,N),R=c(d[14],Q,M),T=c(d[14],R,L);return c(d[14],T,K);case
4:var
U=c(d[47],O[22],b[2]),V=c(d[47],O[22],b[1]),W=a(d[1],hn),X=c(d[14],W,V);return c(d[14],X,U);case
5:var
h=b[1];if(0===h[0]){var
Y=a(d[1],ho),Z=a($[18],h[1]),_=a(d[1],hp),aa=a(d[17],0),ab=c(d[47],O[22],b[2]),ac=a(d[1],hq),ad=c(d[14],ac,ab),ae=c(d[14],ad,aa),af=c(d[14],ae,_),ag=c(d[14],af,Z);return c(d[14],ag,Y)}var
ah=a(d[1],hr),ai=e(d[54],d[17],S[41],h[1]),aj=a(d[1],hs),ak=a(d[17],0),al=c(d[47],O[22],b[2]),am=a(d[1],ht),an=c(d[14],am,al),ao=c(d[14],an,ak),ap=c(d[14],ao,aj),aq=c(d[14],ap,ai);return c(d[14],aq,ah);case
6:var
ar=c(d[47],O[22],b[1]),as=a(d[1],hu);return c(d[14],as,ar);default:var
at=c(d[47],O[22],b[1]),au=a(d[1],hv);return c(d[14],au,at)}}var
be=a(g[3],hw),hx=a(g[4],be),aU=e(k[13],k[9],hy,hx),hz=0,hA=0;function
hB(a,c,b){return[0,[0,a]]}var
hC=[6,k[15][1]],hE=[0,[0,[0,[0,0,[0,a(m[15],hD)]],hC],hB],hA];function
hF(b,a){return hG}var
hI=[0,[0,[0,0,[0,a(m[15],hH)]],hF],hE];function
hJ(a,c,b){return[0,[1,a]]}var
hK=[6,k[15][1]],hM=[0,[0,[0,[0,0,[0,a(m[15],hL)]],hK],hJ],hI];function
hN(e,a,d,c,b){return[1,[0,a]]}var
hP=[0,a(m[15],hO)],hQ=[6,k[17][18]],hS=[0,a(m[15],hR)],hU=[0,[0,[0,[0,[0,[0,0,[0,a(m[15],hT)]],hS],hQ],hP],hN],hM];function
hV(e,a,d,c,b){return[1,[1,a]]}var
hX=[0,a(m[15],hW)],hY=[1,[6,k[15][7]]],h0=[0,a(m[15],hZ)],h2=[0,[0,[0,[0,[0,[0,0,[0,a(m[15],h1)]],h0],hY],hX],hV],hU];function
h3(e,a,d,c,b){return[2,a]}var
h5=[0,a(m[15],h4)],h6=[6,k[17][18]],h8=[0,a(m[15],h7)],h_=[0,[0,[0,[0,[0,[0,0,[0,a(m[15],h9)]],h8],h6],h5],h3],h2];function
h$(e,a,d,c,b){return[3,a]}var
ib=[0,a(m[15],ia)],ic=[6,k[17][18]],ie=[0,a(m[15],id)],ih=[0,[0,[0,[0,[0,[0,0,[0,a(m[15],ig)]],ie],ic],ib],h$],h_];function
ii(b,a,d,c){return[4,a,b]}var
ij=[6,k[15][1]],ik=[6,k[15][1]],im=[0,[0,[0,[0,[0,0,[0,a(m[15],il)]],ik],ij],ii],ih];function
io(a,c,b){return[6,a]}var
ip=[6,k[15][1]],ir=[0,[0,[0,[0,0,[0,a(m[15],iq)]],ip],io],im];function
is(f,b,e,a,d,c){return[5,[1,b],a]}var
iu=[0,a(m[15],it)],iv=[1,[6,k[15][7]]],ix=[0,a(m[15],iw)],iy=[6,k[15][1]],iA=[0,[0,[0,[0,[0,[0,[0,0,[0,a(m[15],iz)]],iy],ix],iv],iu],is],ir];function
iB(f,b,e,a,d,c){return[5,[0,b],a]}var
iD=[0,a(m[15],iC)],iE=[6,k[17][18]],iG=[0,a(m[15],iF)],iH=[6,k[15][1]],iJ=[0,[0,[0,[0,[0,[0,[0,0,[0,a(m[15],iI)]],iH],iG],iE],iD],iB],iA];function
iK(a,c,b){return[7,a]}var
iL=[6,k[15][1]],iN=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,a(m[15],iM)]],iL],iK],iJ]],hz]];e(k[23],aU,0,iN);function
iO(h,g,f,c){var
b=a(d[1],iP);return e(q[3],0,0,b)}function
iQ(h,g,f,c){var
b=a(d[1],iR);return e(q[3],0,0,b)}function
iS(c,b,a){return aT}P($[1],be,iS,iQ,iO);function
b3(b){var
c=e(d[54],d[44],aT,b);return a(d[61],c)}var
aq=a(g[3],iT),iU=a(g[4],aq),b4=e(k[13],k[9],iV,iU),iW=0,iX=0;function
iY(d,a,c,b){return a}var
i0=[0,a(m[15],iZ)],i2=[2,[6,aU],[0,a(m[15],i1)]],i4=[0,0,[0,[0,0,0,[0,[0,[0,[0,[0,0,[0,a(m[15],i3)]],i2],i0],iY],iX]],iW]];e(k[23],b4,0,i4);function
i5(h,g,f,c){var
b=a(d[1],i6);return e(q[3],0,0,b)}function
i7(h,g,f,c){var
b=a(d[1],i8);return e(q[3],0,0,b)}function
i9(c,b,a){return b3}P($[1],aq,i9,i7,i5);var
i_=0,jd=[0,[0,0,function(b){return b?a(n[2],i$):function(g){var
b=a(d[26],ja);c(al[12],0,b);var
e=C[7][1];function
f(e,b){var
f=a(H[5],b[2]),g=a(d[1],jb),h=a(d[17],0),i=a(H[5],b[1]),j=a(d[1],jc),k=a(d[17],0),l=a(S[20],e),m=a(O[12],l),n=c(d[14],m,k),o=c(d[14],n,j),p=c(d[14],o,i),q=c(d[14],p,h),r=c(d[14],q,g),s=c(d[14],r,f),t=c(d[30],2,s);return c(al[12],0,t)}return c(S[24][10],f,e)}}],i_],jf=[0,[0,0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e)if(!e[2]){var
h=b[1],i=a(g[4],l[4]),j=c(g[8],i,h),k=d[1],m=a(g[4],l[8]),o=c(g[8],m,k),p=e[1],q=a(g[18],aq),r=a(g[4],q),f=c(g[8],r,p);return function(n){var
c=f?f[1]:f,b=a(C[4],c),d=b[8],e=b[7],g=b[6],h=[0,b[4],b[5]],i=b[3],k=b[1],l=b[2],m=a(C[6],o);return lc(C[5],j,m,l,k,i,h,g,e,d)}}}}return a(n[2],je)}],jd];function
jg(b,a){return e(b1[1],a[1],[0,jh,b],a[2])}c(ap[80],jg,jf);var
ji=0,jk=[0,function(b){return b?a(n[2],jj):function(a){return ao[5]}},ji],jm=[0,function(b){if(b){var
c=b[2];if(c){var
d=c[2];if(d)if(!d[2])return function(a){return ao[6]}}}return a(n[2],jl)},jk];function
jn(b,a){return c(ao[3],[0,jo,b],a)}c(ap[80],jn,jm);var
jq=[5,[6,a(k[12],aq)]],jr=a(g[18],aq),js=a(g[4],jr),jt=[0,[1,j[4],js,jq],0],ju=[6,a(k[12],l[8])],jv=a(g[4],l[8]),jx=[0,jw,[0,[1,j[4],jv,ju],jt]],jy=[6,a(k[12],l[4])],jz=a(g[4],l[4]),jC=[0,[0,jB,[0,jA,[0,[1,j[4],jz,jy],jx]]],jp];function
jD(b,a){return e(b2[1],[0,jE,b],0,a)}c(ap[80],jD,jC);var
jF=0,jH=[0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e)if(!e[2]){var
f=b[1],h=a(g[6],l[14]),j=c(r[2][7],h,f),k=d[1],m=a(g[17],l[8]),o=a(g[6],m),p=c(r[2][7],o,k),q=e[1],s=a(g[17],l[8]),t=a(g[6],s),u=c(r[2][7],t,q);return function(c){var
b=a(i[17][93],u);return P(C[8],j,p,b[2],b[1])}}}}return a(n[2],jG)},jF],jI=a(i[19][12],jH);e(as[9],0,[0,I,jJ],jI);function
jK(q){var
i=a(h[1][6],jL),b=l[8],f=0,g=0;if(0===b[0]){var
k=[0,jM,[0,[1,j[4],[0,[5,[0,b[1]]]],i],g]],m=a(h[1][6],jN),d=l[8];if(0===d[0]){var
n=[0,jO,[0,[1,j[4],[2,[5,[0,d[1]]]],m],k]],o=a(h[1][6],jP),e=l[14],p=0;if(0===e[0])return c(aS[4],[0,I,jR],[0,[0,jQ,[0,[1,j[4],[6,[0,e[1]],p],o],n]],f]);throw[0,G,jS]}throw[0,G,jT]}throw[0,G,jU]}c(ax[19],jK,I);function
bf(b){if(0===b[0])return aT(b[1]);var
e=c(d[47],O[22],b[1]),f=a(d[1],jV);return c(d[14],f,e)}var
bg=a(g[3],jW),jX=a(g[4],bg),bh=e(k[13],k[9],jY,jX),jZ=0,j0=0,j1=[0,[0,[0,0,[6,aU]],function(a,b){return[0,a]}],j0];function
j2(a,c,b){return[1,a]}var
j3=[6,k[15][1]],j5=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,a(m[15],j4)]],j3],j2],j1]],jZ]];e(k[23],bh,0,j5);function
j6(h,g,f,c){var
b=a(d[1],j7);return e(q[3],0,0,b)}function
j8(h,g,f,c){var
b=a(d[1],j9);return e(q[3],0,0,b)}function
j_(c,b,a){return bf}P($[1],bg,j_,j8,j6);function
b5(b){var
c=e(d[54],d[44],bf,b);return a(d[61],c)}var
ar=a(g[3],j$),ka=a(g[4],ar),b6=e(k[13],k[9],kb,ka),kc=0,kd=0;function
ke(d,a,c,b){return a}var
kg=[0,a(m[15],kf)],ki=[2,[6,bh],[0,a(m[15],kh)]],kk=[0,0,[0,[0,0,0,[0,[0,[0,[0,[0,0,[0,a(m[15],kj)]],ki],kg],ke],kd]],kc]];e(k[23],b6,0,kk);function
kl(h,g,f,c){var
b=a(d[1],km);return e(q[3],0,0,b)}function
kn(h,g,f,c){var
b=a(d[1],ko);return e(q[3],0,0,b)}function
kp(c,b,a){return b5}P($[1],ar,kp,kn,kl);var
kq=0,kv=[0,[0,0,function(b){return b?a(n[2],kr):function(g){var
b=a(d[26],ks);c(al[12],0,b);var
e=C[11][1];function
f(e,b){var
f=a(H[5],b[2]),g=a(d[1],kt),h=a(d[17],0),i=a(H[5],b[1]),j=a(d[1],ku),k=a(d[17],0),l=a(S[20],e),m=a(O[12],l),n=c(d[14],m,k),o=c(d[14],n,j),p=c(d[14],o,i),q=c(d[14],p,h),r=c(d[14],q,g),s=c(d[14],r,f),t=c(d[30],2,s);return c(al[12],0,t)}return c(S[24][10],f,e)}}],kq],kx=[0,[0,0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e)if(!e[2]){var
h=b[1],i=a(g[4],l[4]),j=c(g[8],i,h),k=d[1],m=a(g[4],l[8]),o=c(g[8],m,k),p=e[1],q=a(g[18],ar),r=a(g[4],q),f=c(g[8],r,p);return function(p){var
c=f?f[1]:f,b=a(C[9],c),d=b[9],e=b[8],g=b[7],h=[0,b[5],b[6]],i=b[3],k=b[4],l=b[1],m=b[2],n=a(C[6],o);return ld(C[10],j,n,m,l,k,i,h,g,e,d)}}}}return a(n[2],kw)}],kv];function
ky(b,a){return e(b1[1],a[1],[0,kz,b],a[2])}c(ap[80],ky,kx);var
kA=0,kC=[0,function(b){return b?a(n[2],kB):function(a){return ao[5]}},kA],kE=[0,function(b){if(b){var
c=b[2];if(c){var
d=c[2];if(d)if(!d[2])return function(a){return ao[6]}}}return a(n[2],kD)},kC];function
kF(b,a){return c(ao[3],[0,kG,b],a)}c(ap[80],kF,kE);var
kI=[5,[6,a(k[12],ar)]],kJ=a(g[18],ar),kK=a(g[4],kJ),kL=[0,[1,j[4],kK,kI],0],kM=[6,a(k[12],l[8])],kN=a(g[4],l[8]),kP=[0,kO,[0,[1,j[4],kN,kM],kL]],kQ=[6,a(k[12],l[4])],kR=a(g[4],l[4]),kU=[0,[0,kT,[0,kS,[0,[1,j[4],kR,kQ],kP]]],kH];function
kV(b,a){return e(b2[1],[0,kW,b],0,a)}c(ap[80],kV,kU);var
kX=0,kZ=[0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e)if(!e[2]){var
f=b[1],h=a(g[6],l[14]),j=c(r[2][7],h,f),k=d[1],m=a(g[17],l[8]),o=a(g[6],m),p=c(r[2][7],o,k),q=e[1],s=a(g[17],l[8]),t=a(g[6],s),u=c(r[2][7],t,q);return function(c){var
b=a(i[17][93],u);return P(C[12],j,p,b[2],b[1])}}}}return a(n[2],kY)},kX],k0=a(i[19][12],kZ);e(as[9],0,[0,I,k1],k0);function
k2(p){var
i=a(h[1][6],k3),b=l[8],f=0,g=0;if(0===b[0]){var
k=[0,k4,[0,[1,j[4],[0,[5,[0,b[1]]]],i],g]],m=a(h[1][6],k5),d=l[8];if(0===d[0]){var
n=[0,k6,[0,[1,j[4],[2,[5,[0,d[1]]]],m],k]],o=a(h[1][6],k7),e=l[14];if(0===e[0])return c(aS[4],[0,I,k9],[0,[0,k8,[0,[1,j[4],[5,[0,e[1]]],o],n]],f]);throw[0,G,k_]}throw[0,G,k$]}throw[0,G,la]}c(ax[19],k2,I);var
b7=[0,I,aT,be,aU,b3,aq,b4,bf,bg,bh,b5,ar,b6];bi(377,b7,"Newring_plugin.G_newring");bi(378,[0,C,b7],"Newring_plugin");return});
