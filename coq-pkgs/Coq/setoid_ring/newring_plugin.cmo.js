(function(l3){"use strict";var
ah=140,cN=",",a$="AddSetoidRing",S='"',cM="field_mod",u=250,cL="(",a5="AddSetoidField",cK="constants",R="plugins/setoid_ring/g_newring.ml4",a4="Field_tac",cJ="Exception in vernac extend ",cu="with carrier ",cH="postprocess tactic",cI="Init",a3="field",cG="InitialRing",p=246,ct="decidable",cD="Pphi_pow",cE='Using setoid "',cF="tactic recognizing constants",cs=102,L="Extension: cannot occur",cC="postprocess",a_="setoid",cr=-10,cB="ring_mod",cq="$map",F="]",cp="preprocess",bq="power_tac",cA="Print",aC="closed_term",br="power",cz="Ring_polynom",aB="protect_fv",co="Ring_tac",aA="Ring",cn='and "',cm="$lH",ck="morphism",cl="plugins/setoid_ring/newring.ml",a9="field_lookup",a8="vernac argument needs not wit printer",ac="Coq",ci="closed",cj="F",a7="x",a2="ring_lookup",bp="ring",as=": ",ch="preprocess tactic",ab=124,E="[",cy='and morphisms "',cg="and equivalence relation ",cf=")",cc="field_mods",cd=":",ce="t",az=139,ca="abstract",cb="$f",a1="vernac argument needs not globwit printer",a0="sign",a6="Exception in tactic extend ",b$="PEeval",aZ="div",aY="newring_plugin",cw="Add",cx="completeness",cv="ring_mods",b_="Pphi_dev",G=l3.jsoo_runtime,K=G.caml_check_bound,b=G.caml_new_string,t=G.caml_obj_tag,bo=G.caml_register_global,v=G.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):G.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):G.caml_call_gen(a,[b,c])}function
e(a,b,c,d){return a.length==3?a(b,c,d):G.caml_call_gen(a,[b,c,d])}function
Q(a,b,c,d,e){return a.length==4?a(b,c,d,e):G.caml_call_gen(a,[b,c,d,e])}function
V(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):G.caml_call_gen(a,[b,c,d,e,f])}function
l0(a,b,c,d,e,f,g,h,i){return a.length==8?a(b,c,d,e,f,g,h,i):G.caml_call_gen(a,[b,c,d,e,f,g,h,i])}function
l1(a,b,c,d,e,f,g,h,i,j){return a.length==9?a(b,c,d,e,f,g,h,i,j):G.caml_call_gen(a,[b,c,d,e,f,g,h,i,j])}function
l2(a,b,c,d,e,f,g,h,i,j,k){return a.length==10?a(b,c,d,e,f,g,h,i,j,k):G.caml_call_gen(a,[b,c,d,e,f,g,h,i,j,k])}var
f=G.caml_get_global_data(),bH=[0,b(aY),b("get_res")],bJ=[0,[0,b(ac),[0,b("Setoids"),[0,b("Setoid"),0]]],[0,[0,b(ac),[0,b("Lists"),[0,b("List"),0]]],[0,[0,b(ac),[0,b(cI),[0,b("Datatypes"),0]]],[0,[0,b(ac),[0,b(cI),[0,b("Logic"),0]]],0]]]],ax=b("setoid_ring"),J=b(aY),q=f.Term,O=f.Closure,i=f.Util,bu=f.Tacmach,A=f.Proofview,W=f.Coqlib,al=f.Global,h=f.Names,j=f.Pervasives,ai=f.Tacintern,bx=f.Lib,s=f.CamlinternalLazy,aD=f.Universes,ad=f.Rewrite,N=f.Not_found,k=f.Errors,B=f.Mod_subst,X=f.Tacsubst,T=f.Libnames,ae=f.Retyping,bw=f.Reductionops,d=f.Pp,I=f.Printer,H=f.Assert_failure,ak=f.Globnames,r=f.Tacinterp,aE=f.Typing,af=f.Evarutil,bv=f.Smartlocate,l=f.Loc,M=f.Feedback,by=f.Flags,aj=f.Stdarg,g=f.Genarg,aH=f.Evd,bs=f.Univ,bz=f.Declare,bA=f.Constrintern,n=f.Constrarg,ba=f.Quote_plugin,bt=f.Tactics,at=f.Tacenv,aF=f.Summary,aG=f.Libobject,aV=f.Tacentries,b4=f.Egramml,ao=f.Vernac_classifier,b3=f.Vernacinterp,P=f.Ppconstr,aa=f.Pptactic,m=f.Pcoq,ay=f.Mltop,ap=f.CList,o=f.CLexer,gE=[0,0,0],gF=[0,0,0],gu=b("field kind"),gv=b(cF),gw=b(ch),gx=b(cH),gy=b(a_),gz=b(br),gA=b(a0),gB=b(aZ),gC=b("infinite property"),gj=[0,b(a4),0],gk=[0,0,0],gl=b("field_lemmas"),gm=b("_field_lemma1"),gn=b("_field_lemma2"),go=b("_field_lemma3"),gp=b("_field_lemma4"),gq=b("_lemma5"),gs=[22,0],gr=[22,0],gh=b("field inverse should be declared as a morphism"),f4=b("arguments of field_simplify do not have all the same type"),f5=b(a3),f3=[0,b(a4),0],f6=b(S),f7=b(S),f8=b("cannot find a declared field structure over"),f9=b(a3),f_=[0,b(cl),840,12],fY=[0,1],fZ=[0,0],fX=b("bad field structure"),fb=[0,0,0],fc=[0,0,0],e4=b("ring kind"),e5=b(cF),e6=b(ch),e7=b(cH),e8=b(a_),e9=b(br),e_=b(a0),e$=b(aZ),e2=b(" cannot be set twice"),eW=[0,b("Ring_base"),0],eX=b("ring_lemmas"),eY=b("_ring_lemma1"),eZ=b("_ring_lemma2"),e1=[22,0],e0=[22,0],eU=[0,1],eV=[0,0],eT=b("bad ring structure"),eC=b("ring addition should be declared as a morphism"),eD=b("ring multiplication should be declared as a morphism"),eE=b("ring opposite should be declared as a morphism"),eF=b(S),eG=b(cn),eH=b(S),eI=b(S),eJ=b('",'),eK=b(cy),eL=b(S),eM=b(cE),eN=b(S),eO=b(cn),eP=b(S),eQ=b(cy),eR=b(S),eS=b(cE),ey=b("cannot find setoid relation"),ek=b("arguments of ring_simplify do not have all the same type"),el=b(bp),em=b(S),en=b(S),eo=b("cannot find a declared ring structure over"),ep=b(bp),eq=[0,b(cl),360,12],dJ=[0,b(cz),0],dI=b("newring"),dA=b(aA),dz=b(aA),dv=b("ring: cannot find relation (not closed)"),du=b("ring: cannot find relation"),dl=b(aA),dk=b(aA),dj=b(a7),di=b(a7),dg=b(a7),de=b("Ring.exec_tactic: anomaly"),db=b(a7),dc=b(cj),dd=b(cj),c$=[2,1],da=[0,1],c7=[0,b(aY),b(aC)],c8=b(ce),c9=b(ce),c1=b("not found"),c2=b("map "),c3=b("lookup_map"),cZ=b("dummy"),cY=b("global_head_of_constr"),dm=b("Build_Setoid_Theory"),dp=b("None"),dq=b("Some"),dr=b("eq"),ds=b("cons"),dt=b("nil"),dw=b(ac),dx=[0,[0,b("Ring_theory"),0],[0,[0,b(cz),0],[0,[0,b(co),0],[0,[0,b(cG),0],[0,[0,b(a4),0],[0,[0,b("Field_theory"),0],0]]]]]],dB=[0,b(ac),0],dC=b(co),dE=[0,b(ac),0],dF=b(cG),dK=b("almost_ring_theory"),dL=b("Eqsth"),dN=b("Eq_ext"),dP=b("Eq_s_ext"),dR=b("ring_theory"),dS=b("mk_reqe"),dU=b("semi_ring_theory"),dV=b("mk_seqe"),dX=b("Abstract"),dY=b("Computational"),d0=b("Morphism"),d2=b("inv_morph_nothing"),d3=b("mkhypo"),d5=b("hypo"),d8=b(b$),d$=b(cD),ec=b(b_),eg=b(bp),eh=b("ring-tac-carrier-table"),ei=b("ring-tac-name-table"),es=b("tactic-new-ring-theory"),fe=[0,b(ac),0],ff=b(a4),fk=b("FEeval"),fn=b(b$),fq=b(cD),ft=b(b_),fw=b("display_pow_linear"),fz=b("display_linear"),fD=b(a3),fG=b("PCond"),fK=b("field_cond"),fL=b(a3),fN=b("simpl_field_expr"),fO=b("almost_field_theory"),fP=b("field_theory"),fQ=b("semi_field_theory"),fR=b("AF_AR"),fT=b("F_R"),fV=b("SF_SR"),f0=b("field-tac-carrier-table"),f1=b("field-tac-name-table"),ga=b("tactic-new-field-theory"),ky=b("$lt"),kH=[0,b(R),1,0],kz=[0,b(F)],kA=b(cm),kG=[0,b(R),1,0],kB=[0,b(E)],kC=b(cb),kF=[0,b(R),1,0],kD=[0,b(a9)],kE=b(a9),kt=b(L),kj=b(a5),kY=b(a5),kV=b(L),kT=b(L),kR=b(a5),kO=b(L),kL=b(cg),kM=b(cu),kK=b("The following field structures have been declared:"),kJ=b(L),jW=b(a1),jU=b(a8),jF=b(a1),jD=b(a8),jr=b(cx),k5=b("$lrt"),lc=[0,b(R),1,0],k6=[0,b(F)],k7=b(cm),lb=[0,b(R),1,0],k8=[0,b(E)],k9=b(cb),la=[0,b(R),1,0],k_=[0,b(a2)],k$=b(a2),k0=b(L),ji=b(a$),lt=b(a$),lq=b(L),lo=b(L),lm=b(a$),lj=b(L),lg=b(cg),lh=b(cu),lf=b("The following ring structures have been declared:"),le=b(L),iV=b(a1),iT=b(a8),iE=b(a1),iC=b(a8),ht=[0,0],gX=b(ca),gY=b(ct),gZ=b(ck),g0=b(F),g1=b(E),g2=b(cK),g3=b(F),g4=b(E),g5=b(ci),g6=b(F),g7=b(E),g8=b(cp),g9=b(F),g_=b(E),g$=b(cC),ha=b(a_),hb=b(F),hc=b(E),hd=b(bq),he=b(F),hf=b(E),hg=b(bq),hh=b(a0),hi=b(aZ),lA=[0,[0,b(F)],0],lB=b("$l"),lH=[0,b(R),1,0],lC=[0,b(E)],lD=b("$t"),lG=[0,b(R),1,0],lE=[0,b(aC)],lF=b(aC),lv=b(L),lQ=b(cq),lZ=[0,b(R),1,0],lR=[0,b(aB)],lS=b("$id"),lY=[0,b(R),1,0],lT=[0,b("in")],lU=b(cq),lX=[0,b(R),1,0],lV=[0,b(aB)],lW=b(aB),lL=b(L),lJ=b(L),gG=b(aY),lO=b(aB),gI=b(as),gJ=b(aB),gL=b(a6),ly=b(aC),gQ=b(as),gR=b(aC),gT=b(a6),hj=b(cB),hl=b(cB),hq=b(ct),hu=b(ca),hy=b(ck),hB=b(F),hE=b(E),hG=b(cK),hJ=b(F),hM=b(E),hO=b(ci),hR=b(F),hU=b(E),hW=b(cp),hZ=b(F),h2=b(E),h4=b(cC),h9=b(a_),ib=b(a0),ie=b(F),ii=b(E),il=b(br),ip=b(F),is=b(E),iv=b(bq),iz=b(aZ),iG=b(cv),iI=b(cv),iM=b(cf),iO=b(cN),iQ=b(cL),iY=b(as),iZ=b(a$),i1=b(cJ),i5=[0,[0,[0,b(cA)],[0,[0,b("Rings")],0]],0],ja=[0,b(cd)],je=[0,b(aA)],jf=[0,b(cw)],k3=b(a2),jk=b(as),jl=b(a2),jn=b(a6),js=b(cM),ju=b(cM),jA=b(cx),jH=b(cc),jJ=b(cc),jN=b(cf),jP=b(cN),jR=b(cL),jZ=b(as),j0=b(a5),j2=b(cJ),j6=[0,[0,[0,b(cA)],[0,[0,b("Fields")],0]],0],kb=[0,b(cd)],kf=[0,b("Field")],kg=[0,b(cw)],kw=b(a9),kl=b(as),km=b(a9),ko=b(a6),cS=f.Option,cO=f.Vars,cQ=f.Refiner,cV=f.Environ,cT=f.Goal,cP=f.Tacticals,cU=f.Esubst,cR=f.Redexpr,cW=f.Constr;function
bB(g,f,e,d,b){switch(a(f,d)){case
0:return c(O[49],e,b);case
1:return a(O[32],b);default:return-1===d?c(O[49],e,b):a(g,b)}}function
cX(b){var
c=a(q[39],b);try{var
g=a(ak[16],c[1]);return g}catch(b){b=v(b);if(b===N){var
f=a(d[1],cY);return e(k[3],0,0,f)}throw b}}function
bC(b){try{var
c=a(ak[16],b);return c}catch(b){b=v(b);if(b===N)return[0,a(h[1][5],cZ)];throw b}}function
aI(f,d,b){var
k=a(f,bC(b));if(k){var
p=-1,r=k[1];return bB(function(a){return aI(f,d,a)},r,d,p,b)}var
h=a(q[ah],b);switch(h[0]){case
6:var
s=function(a,b){return aI(f,a,b)};return e(O[51],s,d,b);case
9:var
g=h[2],j=h[1],t=0;if(g.length-1<=0){var
u=a(q[ab],[0,j,g]);return a(O[32],u)}var
l=c(i[19][50],t,g),m=a(q[ab],[0,j,l[1]]),n=a(f,bC(m));if(n){var
v=n[1],o=function(b,a){return bB(function(a){return aI(f,d,a)},v,d,b,a)},w=c(i[19][16],o,l[2]),x=[6,o(-1,m),w];return a(O[33],x)}var
y=a(q[ab],[0,j,g]);return a(O[32],y);default:return a(O[32],b)}}function
bD(b,a){try{var
c=[0,e(i[17][119],ak[5],a,b)];return c}catch(a){a=v(a);if(a===N)return 0;throw a}}var
bb=[0,i[15][44][1]];function
bc(b,a){bb[1]=e(i[15][44][4],b,a,bb[1]);return 0}function
c0(e){try{var
b=c(i[15][44][22],e,bb[1]);return b}catch(b){b=v(b);if(b===N){var
f=a(d[1],c1),g=a(d[24],e),h=a(d[1],c2),j=c(d[14],h,g),l=c(d[14],j,f);return c(k[7],c3,l)}throw b}}function
bd(f,d,j,b){var
g=a(cU[1],0),h=aI(a(c0(f),b),g,b),i=e(O[37],0,O[11],d);return c(O[54],i,h)}function
c4(a){var
b=0,c=2,d=[0,function(b,c,d){return bd(a,b,c,d)},c];return e(bt[49],0,d,b)}function
c5(b,a){var
c=[0,[0,a,0]],d=2,f=[0,function(a,c,d){return bd(b,a,c,d)},d];return e(bt[49],0,f,c)}function
c6(f,b){var
g=c(i[17][12],aD[48],b),h=e(i[17][16],ba[1][8][4],g,ba[1][8][1]);if(c(ba[1][16],h,f))return a(A[13],0);var
j=a(d[9],0);return c(cP[70][4],0,j)}function
bE(b){var
d=[0,c7,0];function
e(a){return[0,[0,l[4],a]]}var
f=c(i[17][12],e,b),j=a(g[17],n[6]),k=a(g[5],j),m=[0,[0,c(g[7],k,f)],0],o=a(h[1][5],c8),p=[0,[1,[0,l[4],o]],0],q=a(g[5],n[8]),r=[0,[0,c(g[7],q,p)],m],s=[31,l[4],d,r];return[28,[0,[0,[0,a(h[1][5],c9)],0],s]]}function
c_(c){var
b=a(al[2],0),d=a(aH[17],b);return e(bA[13],b,d,c)}function
U(c){var
b=a(al[2],0),d=a(aH[17],b);return Q(bA[10],b,d,0,c)[1]}function
ag(e,d,b){var
f=a(aD[54],b),g=a(bs[35][14],d),i=c(aD[55],g,f),j=[0,a(bs[35][13],i)],k=[0,[0,l0(bz[2],0,da,0,0,0,j,0,b)],c$],l=a(h[1][5],e),m=V(bz[3],0,0,l,0,k);return a(q[125],m)}function
bF(g,f){function
k(g,b){var
d=b[1],i=a(j[20],d),k=c(j[16],db,i),f=a(h[1][5],k),m=[2,[1,[0,l[4],f]]],n=e(h[1][10][4],f,g,b[3]);return[0,d+1|0,[0,m,b[2]],n]}var
b=e(i[17][16],k,f,[0,0,0,h[1][10][1]]),m=b[3],n=a(h[1][5],dc),o=e(h[1][10][4],n,g,m),p=[0,o,a(r[28],0)[2]],q=b[2],d=a(h[1][5],dd);return c(r[18],p,[29,[0,l[4],[3,l[4],[1,[0,l[4],d]],q]]])}var
bG=[0,[0]],df=[0,bH,0],dh=[0,function(d,b){var
e=a(i[17][3],d),f=a(g[6],aj[3]),k=c(r[2][7],f,e);function
l(d){var
e=b[1],f=a(j[20],d),g=c(j[16],dg,f),i=a(h[1][5],g);return c(h[1][10][22],i,e)}bG[1]=c(i[19][2],k,l);return a(A[13],0)}];e(at[9],0,bH,dh);function
bI(C,B,k,b,z){function
D(g,b){var
d=b[1],i=a(j[20],d),k=c(j[16],di,i),f=a(h[1][5],k),m=[2,[1,[0,l[4],f]]],n=b[3],o=a(r[2][1],g),p=e(h[1][10][4],f,o,n);return[0,d+1|0,[0,m,b[2]],p]}var
m=e(i[17][16],D,z,[0,0,0,h[1][10][1]]),E=a(r[28],0)[2],F=[0,m[3],E];function
G(b){var
d=a(j[20],b),e=c(j[16],dj,d);return a(h[1][5],e)}var
H=c(i[17][48],k,G),I=a(g[5],aj[3]),J=[0,[0,c(g[7],I,k)],0],K=[31,l[4],df,J];function
L(a){return[0,a]}var
M=[5,[28,[0,c(i[17][12],L,H),K]]],v=aH[3][1],w=q[117],x=a(cV[10],C),f=Q(cT[4][6],B,x,w,v),y=[0,f[1],f[3]],d=t(b),N=c(i[18],m[2],[0,M,0]),o=u===d?b[1]:p===d?a(s[2],b):b,O=c(r[18],F,[29,[0,l[4],[3,l[4],[0,[0,l[4],o]],N]]]),P=c(A[66][8],O,y),R=a(cQ[2],P),n=a(af[43],R),S=n[2],T=c(aH[142],0,n[1])[2],U=bG[1];function
V(c){var
b=a(r[2][2],c),d=b?b[1]:a(j[2],de);return a(S,d)}return[0,c(i[19][15],V,U),T]}function
bK(a){return[p,function(b){return e(W[6],dk,bJ,a)}]}function
aJ(a){return[p,function(b){return e(W[7],dl,bJ,a)}]}var
dn=bK(dm),be=aJ(dp),bf=aJ(dq),Y=bK(dr),au=aJ(ds),av=aJ(dt);function
aw(b,d){var
c=t(b),e=u===c?b[1]:p===c?a(s[2],b):b;return a(q[ab],[0,e,d])}function
w(f,b,e){var
d=t(b),g=u===d?b[1]:p===d?a(s[2],b):b,h=[0,c(af[13],f,g),e];return a(q[ab],h)}function
bL(h){var
c=a(q[ah],h);if(9===c[0]){var
b=c[2];if(2<=b.length-1){var
j=e(i[19][7],b,0,b.length-1-2|0),d=a(q[ab],[0,c[1],j]);if(a(cO[2],d)){var
f=b.length-1-1|0,g=b.length-1-2|0,l=K(b,f)[f+1];return[0,d,K(b,g)[g+1],l]}return a(k[6],dv)}}return a(k[6],du)}var
aK=[0,dw,[0,ax,0]];function
dy(a){return c(i[18],aK,a)}var
bM=c(i[17][12],dy,dx);function
Z(a){return[p,function(b){return e(W[6],dz,bM,a)}]}function
C(a){return[p,function(b){return e(W[7],dA,bM,a)}]}var
dD=c(i[17][12],h[1][5],[0,dC,[0,ax,dB]]);a(h[5][4],dD);var
dG=c(i[17][12],h[1][5],[0,dF,[0,ax,dE]]),dH=a(h[5][4],dG);function
bN(b){return[p,function(d){var
c=a(h[6][4],b);return e(h[cs],[0,dH],h[5][6],c)}]}function
am(a){var
b=[0,ax,dJ];return[p,function(c){return e(W[5],dI,b,a)}]}var
aL=Z(dK),dM=C(dL),dO=C(dN),dQ=C(dP),aM=Z(dR),dT=Z(dS),aN=Z(dU),dW=Z(dV),aO=Z(dX),dZ=Z(dY),d1=Z(d0),_=bN(d2),d4=C(d3),z=C(d5);function
bO(g,f){var
b=f;for(;;){var
d=a(q[ah],b);if(6===d[0]){var
b=d[3];continue}var
e=bL(b),h=function(c){var
b=c[1],d=t(b),e=c[2],f=u===d?b[1]:p===d?a(s[2],b):b;return[0,f,e]},j=c(i[17][12],h,g),k=function(a){return-1===a?1:2},l=[0,[0,cX(e[1]),k],j];return function(a){return bD(l,a)}}}var
d6=0;function
d7(b){var
a=b+1|0;if(!(13<a>>>0))switch(a){case
12:return 2;case
0:case
8:case
10:case
13:return 0}return 1}var
d9=[0,[0,am(d8),d7],d6];function
d_(b){var
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
ea=[0,[0,am(d$),d_],d9];function
eb(b){var
a=b-8|0;if(6<a>>>0){if(-9!==a)return 1}else
if(5===a)return 2;return 0}var
ed=[0,[0,am(ec),eb],ea],ee=[0,[0,av,function(b){var
a=-1!==b?1:0,c=a?1:a;return c}],ed],ef=[0,[0,au,function(a){var
b=-1!==a?1:0;if(b){if(2!==a)return 1;var
c=2}else
var
c=b;return c}],ee];bc(eg,function(a){return bO(ef,a)});var
an=a(i[21][1],[0,cW[33]]),bg=e(aF[2],0,eh,an[1]),bh=e(aF[2],0,ei,T[24][1]);function
ej(a){return c(an[22],a,bg[1])}function
er(d){var
a=d[2],b=d[1],e=c(B[45],b,a[1]),f=c(B[45],b,a[2]),g=c(B[45],b,a[3]),h=c(B[45],b,a[4]),i=c(B[45],b,a[5]),j=c(B[45],b,a[6]),k=c(B[45],b,a[9]),l=c(B[45],b,a[10]),m=c(X[1],b,a[7]),n=c(X[1],b,a[8]),o=c(X[1],b,a[11]),p=c(X[1],b,a[12]);if(e===a[1])if(f===a[2])if(c(q[136],g,a[3]))if(h===a[4])if(i===a[5])if(j===a[6])if(k===a[9])if(l===a[10])if(m===a[7])if(n===a[8])if(o===a[11])if(p===a[12])return a;return[0,e,f,g,h,i,j,m,n,k,l,o,p]}function
bP(b){var
a=b[2],c=b[1];bg[1]=e(an[4],a[1],a,bg[1]);bh[1]=e(T[24][4],c[1],a,bh[1]);return 0}var
aP=a(aG[1],es),et=aP[8],eu=aP[7];function
ev(a){return[0,a]}function
ew(c,b){var
a=1===c?1:0;return a?bP(b):a}var
ex=a(aG[4],[0,aP[1],bP,aP[3],ew,ev,er,eu,et]);function
bQ(d,e,c,b){try{var
f=Q(ad[10],d,e[1],c,b),g=Q(ad[11],d,f[1],c,b),h=Q(ad[12],d,g[1],c,b);e[1]=h[1];var
i=aw(dn,[0,c,b,f[2],g[2],h[2]]);return i}catch(b){b=v(b);if(b===N)return a(k[6],ey);throw b}}function
ez(h,g,f,e,d,c,b,a){return aw(dT,[0,h,g,f,e,d,c,b,a])}function
eA(f,e,d,c,b,a){return aw(dW,[0,f,e,d,c,b,a])}function
eB(r,g,h){var
b=h[5],l=h[4],i=h[3],j=h[2],f=h[1],o=a(q[ah],b);if(9===o[0])if(1===o[2].length-1){var
E=t(Y),aP=u===E?Y[1]:p===E?a(s[2],Y):Y;if(c(q[az],o[1],aP)){var
aQ=w(g,dM,[0,f]),aR=l?w(g,dO,[0,f,j,i,l[1]]):w(g,dQ,[0,f,j,i]),aS=e(aE[7],r,g,aQ);return[0,aS,e(aE[7],r,g,aR)]}}var
x=[0,[0,[0,[0,f,[0,b]]],[0,[0,[0,f,[0,b]]],0]],[0,[0,f,[0,b]]]],F=bQ(a(al[2],0),g,f,b);try{var
aO=c(ad[13],x,j),y=aO}catch(b){b=v(b);if(b!==N)throw b;var
y=a(k[6],eC)}var
m=y[2];try{var
aN=c(ad[13],x,i),z=aN}catch(b){b=v(b);if(b!==N)throw b;var
z=a(k[6],eD)}var
n=z[2];if(l){var
A=l[1];try{var
ap=c(ad[13],[0,[0,[0,[0,f,[0,b]]],0],[0,[0,f,[0,b]]]],A),B=ap}catch(b){b=v(b);if(b!==N)throw b;var
B=a(k[6],eE)}var
C=B[2],G=ez(f,j,i,A,b,m,n,C),H=a(d[1],eF),J=a(I[5],C),K=a(d[1],eG),L=a(d[17],0),O=a(d[1],eH),P=a(I[5],n),Q=a(d[1],eI),R=a(d[17],0),S=a(d[1],eJ),T=a(I[5],m),U=a(d[1],eK),V=a(d[17],0),W=a(d[1],eL),X=a(I[5],b),Z=a(d[1],eM),_=c(d[14],Z,X),$=c(d[14],_,W),aa=c(d[14],$,V),ab=c(d[14],aa,U),ac=c(d[14],ab,T),ae=c(d[14],ac,S),af=c(d[14],ae,R),ag=c(d[14],af,Q),ai=c(d[14],ag,P),aj=c(d[14],ai,O),ak=c(d[14],aj,L),am=c(d[14],ak,K),an=c(d[14],am,J),ao=c(d[14],an,H);c(by[52],M[11],ao);var
D=G}else{var
aq=a(d[1],eN),ar=a(I[5],n),as=a(d[1],eO),at=a(d[17],0),au=a(d[1],eP),av=a(I[5],m),aw=a(d[1],eQ),ax=a(d[17],0),ay=a(d[1],eR),aA=a(I[5],b),aB=a(d[1],eS),aC=c(d[14],aB,aA),aD=c(d[14],aC,ay),aF=c(d[14],aD,ax),aG=c(d[14],aF,aw),aH=c(d[14],aG,av),aI=c(d[14],aH,au),aJ=c(d[14],aI,at),aK=c(d[14],aJ,as),aL=c(d[14],aK,ar),aM=c(d[14],aL,aq);c(by[52],M[11],aM);var
D=eA(f,j,i,b,m,n)}return[0,F,D]}function
bR(h,g,f,e,d,c,b,a){return a?a[1]:eB(h,g,[0,f,e,d,c,b])}function
bS(b){if(typeof
b==="number"){var
c=t(aO);return u===c?aO[1]:p===c?a(s[2],aO):aO}else
return 0===b[0]?aw(dZ,[0,b[1]]):aw(d1,[0,b[1]])}function
bT(o,n,m,k,j,d){if(d){var
b=d[1];if(0===b[0])return a(ai[3],b[1]);var
f=b[1],g=function(a){return c(bv[3],0,a)};return bE(c(i[17][12],g,f))}var
e=t(_),h=u===e?_[1]:p===e?a(s[2],_):_;return[29,[0,l[4],[3,l[4],[0,[0,l[4],h]],0]]]}function
aQ(c,b,a){return w(b,d4,[0,V(ae[2],0,0,c,b[1],a),a])}function
bU(d,b,h){var
f=t(z),j=u===f?z[1]:p===f?a(s[2],z):z,g=c(af[13],b,j),k=w(b,av,[0,g]);function
l(c,a){return w(b,au,[0,g,aQ(d,b,c),a])}var
m=e(i[17][16],l,h,k),n=e(aE[7],d,b,m);return c(af[42],b[1],n)}function
bV(m,b,e){var
f=t(z),n=u===f?z[1]:p===f?a(s[2],z):z,g=c(af[13],b,n);if(e){var
h=e[1],d=h[1];if(0===d[0])var
j=a(ai[3],d[1]);else
var
o=d[1],q=function(a){return c(bv[3],0,a)},j=bE(c(i[17][12],q,o));return[0,j,w(b,bf,[0,g,aQ(m,b,U(h[2]))])]}var
k=t(_),r=u===k?_[1]:p===k?a(s[2],_):_,v=[0,[0,l[4],r]],x=w(b,be,[0,g]);return[0,[29,[0,l[4],[3,l[4],v,0]]],x]}function
bW(g,b,d){var
e=t(z),h=u===e?z[1]:p===e?a(s[2],z):z,f=c(af[13],b,h);return d?w(b,bf,[0,f,aQ(g,b,U(d[1]))]):w(b,be,[0,f])}function
bX(g,b,d){var
e=t(z),h=u===e?z[1]:p===e?a(s[2],z):z,f=c(af[13],b,h);return d?w(b,bf,[0,f,aQ(g,b,U(d[1]))]):w(b,be,[0,f])}function
bY(o,J,ar,I,aq,H,ap,ao,an){var
L=H[2],M=H[1],N=J[2],r=J[1],as=c(i[18],aK,eW);a(W[11],as);var
f=a(al[2],0),_=V(ae[2],0,0,f,r,N),m=a(q[ah],_);if(9===m[0]){var
b=m[2],v=b.length-1-6|0;if(2<v>>>0)var
e=0;else{var
n=m[1];switch(v){case
0:var
w=t(aN),$=b[1],aa=b[2],ab=b[3],ac=b[4],ad=b[5],af=b[6],aj=u===w?aN[1]:p===w?a(s[2],aN):aN;if(c(q[az],n,aj))var
d=[0,eU,$,aa,ab,ac,ad,0,0,af],e=1;else
var
e=0;break;case
1:var
e=0;break;default:var
x=b[1],y=b[2],z=b[3],A=b[4],B=b[5],C=b[6],D=b[7],E=b[8],F=t(aL),ak=u===F?aL[1]:p===F?a(s[2],aL):aL;if(c(q[az],n,ak))var
d=[0,0,x,y,z,A,B,[0,C],[0,D],E],e=1;else{var
G=t(aM),am=u===G?aM[1]:p===G?a(s[2],aM):aM;if(c(q[az],n,am))var
d=[0,eV,x,y,z,A,B,[0,C],[0,D],E],e=1;else
var
e=0}}}}else
var
e=0;if(!e)var
d=a(k[6],eT);var
O=d[9],P=d[8],Q=d[6],R=d[5],S=d[2],g=[0,r],T=bR(f,g,S,R,Q,P,O,ar),U=T[1],X=bV(f,g,ap),at=bW(f,g,ao),au=bX(f,g,an),av=[0,at,[0,au,[0,bS(I),0]]],aw=[0,U,[0,T[2],[0,N,[0,X[2],av]]]],ax=bN(eX),Y=bI(f,g[1],5,ax,aw),Z=Y[2],l=Y[1],ay=K(l,3)[4],aA=K(l,4)[5],aB=a(h[1][7],o),aC=ag(c(j[16],aB,eY),Z,ay),aD=a(h[1][7],o),aE=ag(c(j[16],aD,eZ),Z,aA),aF=bT(f,r,I,d[1],[0,d[3],d[4],R,Q,P],aq),aG=M?a(ai[3],M[1]):e1,aH=L?a(ai[3],L[1]):e0,aI=X[1],aJ=K(l,0)[1],aO=K(l,2)[3],aP=a(ex,[0,S,O,U,K(l,1)[2],aO,aJ,aF,aI,aC,aE,aG,aH]);c(bx[6],o,aP);return 0}function
bZ(a){return typeof
a==="number"?0:0===a[0]?[0,U(a[1])]:[1,U(a[1])]}function
x(e,b,d){if(a(cS[3],b[1])){b[1]=[0,d];return 0}var
f=c(j[16],e,e2);return a(k[6],f)}function
e3(l){var
b=[0,0],d=[0,0],e=[0,0],f=[0,0],g=[0,0],h=[0,0],j=[0,0],k=[0,0];function
m(a){switch(a[0]){case
0:return x(e4,b,bZ(a[1]));case
1:return x(e5,e,a[1]);case
2:return x(e6,f,a[1]);case
3:return x(e7,g,a[1]);case
4:var
c=U(a[2]);return x(e8,d,[0,U(a[1]),c]);case
5:return x(e9,j,[0,a[1],a[2]]);case
6:return x(e_,h,a[1]);default:return x(e$,k,a[1])}}c(i[17][11],m,l);var
a=b[1],n=a?a[1]:a;return[0,n,d[1],e[1],f[1],g[1],j[1],h[1],k[1]]}function
b0(a,c){if(a)return a;var
b=bL(c);return[0,b[2],[0,b[3],0]]}function
b1(d,a,b,c){var
f=w(a,av,[0,b]);function
g(d,c){return w(a,au,[0,b,d,c])}var
h=e(i[17][16],g,c,f);return e(aE[7],d,a,h)}var
y=r[2][1];function
$(b){var
d=a(r[28],0);return c(r[2][6],d,b)}function
fa(b){var
c=a(y,b[2]),d=a(y,b[3]),e=a(y,b[4]),f=a(y,b[5]),g=a(y,b[6]),h=$(b[7]),i=$(b[8]),j=a(y,b[9]),k=a(y,b[10]),l=$([28,[0,fb,b[11]]]);return[0,c,[0,d,[0,e,[0,f,[0,g,[0,h,[0,i,[0,j,[0,k,[0,l,[0,$([28,[0,fc,b[12]]]),0]]]]]]]]]]]}function
fd(D,C,B,z){var
b=[0,function(l){var
e=a(bu[49][4],l),b=a(A[62][5],l);try{var
h=[0,e],f=b0(B,z);if(f){var
g=V(ae[2],0,0,b,e,f[1]),m=function(h){var
i=V(ae[2],0,0,b,e,h),f=1-V(bw[82],0,b,e,g,i);if(f){var
j=a(d[1],ek);return c(k[7],el,j)}return f};c(i[17][11],m,f[2]);try{var
x=ej(g),j=x}catch(b){b=v(b);if(b!==N)throw b;var
n=a(d[1],em),o=a(I[5],g),p=a(d[1],en),q=a(d[17],0),r=a(d[1],eo),s=c(d[14],r,q),t=c(d[14],s,p),u=c(d[14],t,o),w=c(d[14],u,n),j=c(k[7],ep,w)}var
E=a(y,b1(b,h,j[1],f)),F=a(y,bU(b,h,C)),G=fa(j),J=bF(D,c(i[18],G,[0,F,[0,E,0]])),K=a(A[60][1],h[1]),L=c(A[15],K,J);return L}throw[0,H,eq]}catch(b){b=v(b);if(a(A[66][10],b))return c(A[18],0,b);throw b}}];return a(A[62][10],b)}var
fg=c(i[17][12],h[1][5],[0,ff,[0,ax,fe]]),fh=a(h[5][4],fg),fi=0;function
fj(c){var
a=c-8|0;if(6<a>>>0)var
b=-9===a?1:0;else
if(4<=a)switch(a-4|0){case
0:var
b=0;break;case
1:return 2;default:var
b=1}else
var
b=1;return b?0:1}var
fl=[0,[0,C(fk),fj],fi];function
fm(b){var
a=b+1|0;if(!(13<a>>>0))switch(a){case
12:return 2;case
0:case
8:case
10:case
13:return 0}return 1}var
fo=[0,[0,am(fn),fm],fl];function
fp(b){var
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
fr=[0,[0,am(fq),fp],fo];function
fs(b){var
a=b-8|0;if(6<a>>>0){if(-9!==a)return 1}else
if(5===a)return 2;return 0}var
fu=[0,[0,am(ft),fs],fr];function
fv(d){var
b=d-9|0;if(10<b>>>0)var
a=cr===b?1:0;else{var
c=b-6|0;if(2<c>>>0)var
a=1;else
switch(c){case
0:var
a=0;break;case
1:var
a=1;break;default:return 2}}return a?0:1}var
fx=[0,[0,C(fw),fv],fu];function
fy(b){var
a=b-9|0;if(7<a>>>0){if(cr!==a)return 1}else
if(5===a)return 2;return 0}var
fA=[0,[0,C(fz),fy],fx],fB=[0,[0,av,function(b){var
a=-1!==b?1:0,c=a?1:a;return c}],fA],fC=[0,[0,au,function(a){var
b=-1!==a?1:0;if(b){if(2!==a)return 1;var
c=2}else
var
c=b;return c}],fB];bc(fD,function(a){return bO(fC,a)});var
fE=0;function
fF(b){var
a=b+1|0;if(!(15<a>>>0))switch(a){case
14:return 2;case
0:case
10:case
12:case
15:return 0}return 1}var
fH=[0,[0,C(fG),fF],fE],fI=[0,[0,av,function(b){var
a=-1!==b?1:0,c=a?1:a;return c}],fH],fJ=[0,[0,au,function(a){var
b=-1!==a?1:0;if(b){if(2!==a)return 1;var
c=2}else
var
c=b;return c}],fI];bc(fK,function(e){function
b(c){var
b=c[1],d=t(b),e=c[2],f=u===d?b[1]:p===d?a(s[2],b):b;return[0,f,e]}var
d=c(i[17][12],b,fJ);return function(a){return bD(d,a)}});function
fM(a,b,c){return bd(fL,a,b,c)}c(cR[3],fN,fM);var
aR=C(fO),aS=C(fP),aT=C(fQ),fS=C(fR),fU=C(fT),fW=C(fV),bi=e(aF[2],0,f0,an[1]),bj=e(aF[2],0,f1,T[24][1]);function
f2(a){return c(an[22],a,bi[1])}function
f$(d){var
a=d[2],b=d[1],e=c(B[45],b,a[1]),f=c(B[45],b,a[2]),g=c(B[45],b,a[5]),h=c(B[45],b,a[6]),i=c(B[45],b,a[7]),j=c(B[45],b,a[8]),k=c(B[45],b,a[9]),l=c(X[1],b,a[3]),m=c(X[1],b,a[4]),n=c(X[1],b,a[10]),o=c(X[1],b,a[11]);if(e===a[1])if(f===a[2])if(g===a[5])if(h===a[6])if(i===a[7])if(j===a[8])if(k===a[9])if(l===a[3])if(m===a[4])if(n===a[10])if(o===a[11])return a;return[0,e,f,l,m,g,h,i,j,k,n,o]}function
b2(b){var
a=b[2],c=b[1];bi[1]=e(an[4],a[1],a,bi[1]);bj[1]=e(T[24][4],c[1],a,bj[1]);return 0}var
aU=a(aG[1],ga),gb=aU[8],gc=aU[7];function
gd(a){return[0,a]}function
ge(c,b){var
a=1===c?1:0;return a?b2(b):a}var
gf=a(aG[4],[0,aU[1],b2,aU[3],ge,gd,f$,gc,gb]);function
gg(i,b,f,d){var
e=a(q[ah],d);if(9===e[0])if(1===e[2].length-1){var
h=t(Y),m=u===h?Y[1]:p===h?a(s[2],Y):Y;if(c(q[az],e[1],m)){var
n=a(W[38],0)[6],o=[0,a(aD[48],n),[0,b,b,f]];return a(q[ab],o)}}bQ(a(al[2],0),i,b,d);var
j=[0,[0,[0,[0,b,[0,d]]],0],[0,[0,b,[0,d]]]];try{var
l=c(ad[13],j,f),g=l}catch(b){b=v(b);if(b!==N)throw b;var
g=a(k[6],gh)}return g[2]}function
gi(l,aj,aD,I,af,ad,ac,aa,$,_){var
am=ac[2],an=ac[1],o=aj[2],ao=aj[1],aE=c(i[18],aK,gj);a(W[11],aE);var
m=a(al[2],0),f=[0,ao],az=V(ae[2],0,0,m,f[1],o),G=a(q[ah],az);if(9===G[0]){var
b=G[2],M=b.length-1-8|0;if(2<M>>>0)var
g=0;else{var
H=G[1];switch(M){case
0:var
N=b[1],O=b[2],P=b[3],Q=b[4],R=b[5],S=b[6],T=b[7],U=b[8],X=t(aT),aA=u===X?aT[1]:p===X?a(s[2],aT):aT;if(c(ak[11],aA,H))var
d=[0,fY,N,O,P,Q,R,0,0,S,T,U,w(f,fW,[0,N,O,P,Q,R,S,T,U,o])],g=1;else
var
g=0;break;case
1:var
g=0;break;default:var
v=b[1],x=b[2],y=b[3],z=b[4],A=b[5],B=b[6],C=b[7],D=b[8],E=b[9],F=b[10],Y=t(aR),aB=u===Y?aR[1]:p===Y?a(s[2],aR):aR;if(c(ak[11],aB,H))var
d=[0,0,v,x,y,z,A,[0,B],[0,C],D,E,F,w(f,fS,[0,v,x,y,z,A,B,C,D,E,F,o])],g=1;else{var
Z=t(aS),aC=u===Z?aS[1]:p===Z?a(s[2],aS):aS;if(c(ak[11],aC,H))var
d=[0,fZ,v,x,y,z,A,[0,B],[0,C],D,E,F,w(f,fU,[0,v,x,y,z,A,B,C,D,E,F,o])],g=1;else
var
g=0}}}}else
var
g=0;if(!g)var
d=a(k[6],fX);var
J=d[11],ap=d[8],aq=d[6],ar=d[5],L=d[2],as=bR(m,f,L,ar,aq,ap,J,aD),at=as[2],au=as[1];bY(l,[0,f[1],d[12]],[0,[0,au,at]],I,af,gk,aa,$,_);var
av=bV(m,f,aa),aF=bW(m,f,$),aG=bX(m,f,_),aH=gg(f,L,d[10],J),aI=[0,aF,[0,aG,[0,bS(I),0]]],aJ=[0,au,[0,at,[0,aH,[0,o,[0,av[2],aI]]]]],ay=[p,function(c){var
b=a(h[6][4],gl);return e(h[cs],[0,fh],h[5][6],b)}],aw=bI(m,f[1],9,ay,aJ),r=aw[2],n=aw[1],aL=K(n,3)[4],aM=K(n,4)[5],aN=K(n,5)[6],aO=K(n,6)[7];if(ad)var
aP=[0,ad[1]],aQ=[0,K(n,8)[9],aP],ax=a(q[ab],aQ);else
var
ax=K(n,7)[8];var
aU=a(h[1][7],l),aV=ag(c(j[16],aU,gm),r,aL),aW=a(h[1][7],l),aX=ag(c(j[16],aW,gn),r,aM),aY=a(h[1][7],l),aZ=ag(c(j[16],aY,go),r,aN),a0=a(h[1][7],l),a1=ag(c(j[16],a0,gp),r,aO),a2=a(h[1][7],l),a3=ag(c(j[16],a2,gq),r,ax),a4=bT(m,ao,I,d[1],[0,d[3],d[4],ar,aq,ap],af),a5=an?a(ai[3],an[1]):gs,a6=am?a(ai[3],am[1]):gr,a7=a(gf,[0,L,J,a4,av[1],aV,aX,aZ,a1,a3,a5,a6]);c(bx[6],l,a7);return 0}function
gt(b){var
d=[0,0],e=[0,0],f=[0,0],g=[0,0],h=[0,0],j=[0,0],k=[0,0],l=[0,0],m=[0,0];function
n(b){if(0===b[0]){var
a=b[1];switch(a[0]){case
0:return x(gu,d,bZ(a[1]));case
1:return x(gv,f,a[1]);case
2:return x(gw,g,a[1]);case
3:return x(gx,h,a[1]);case
4:var
c=U(a[2]);return x(gy,e,[0,U(a[1]),c]);case
5:return x(gz,l,[0,a[1],a[2]]);case
6:return x(gA,k,a[1]);default:return x(gB,m,a[1])}}return x(gC,j,U(b[1]))}c(i[17][11],n,b);var
a=d[1],o=a?a[1]:a;return[0,o,e[1],j[1],f[1],g[1],h[1],l[1],k[1],m[1]]}function
gD(b){var
c=a(y,b[2]),d=$(b[3]),e=$(b[4]),f=a(y,b[5]),g=a(y,b[7]),h=a(y,b[6]),i=a(y,b[8]),j=a(y,b[9]),k=$([28,[0,gE,b[10]]]);return[0,c,[0,d,[0,e,[0,f,[0,g,[0,h,[0,i,[0,j,[0,k,[0,$([28,[0,gF,b[11]]]),0]]]]]]]]]]}var
D=[0,c5,c4,c6,e3,bY,c_,bh,fd,gt,gi,bj,function(E,D,C,B){var
b=[0,function(l){var
e=a(bu[49][4],l),b=a(A[62][5],l);try{var
h=[0,e],f=b0(C,B),m=c(i[18],aK,f3);a(W[11],m);if(f){var
g=V(ae[2],0,0,b,e,f[1]),n=function(h){var
i=V(ae[2],0,0,b,e,h),f=1-V(bw[82],0,b,e,g,i);if(f){var
j=a(d[1],f4);return c(k[7],f5,j)}return f};c(i[17][11],n,f[2]);try{var
z=f2(g),j=z}catch(b){b=v(b);if(b!==N)throw b;var
o=a(d[1],f6),p=a(I[5],g),q=a(d[1],f7),r=a(d[17],0),s=a(d[1],f8),t=c(d[14],s,r),u=c(d[14],t,q),w=c(d[14],u,p),x=c(d[14],w,o),j=c(k[7],f9,x)}var
F=a(y,b1(b,h,j[1],f)),G=a(y,bU(b,h,D)),J=gD(j),K=bF(E,c(i[18],J,[0,G,[0,F,0]])),L=a(A[60][1],h[1]),M=c(A[15],L,K);return M}throw[0,H,f_]}catch(b){b=v(b);if(a(A[66][10],b))return c(A[18],0,b);throw b}}];return a(A[62][10],b)}];bo(384,D,"Newring_plugin.Newring");a(ay[12],gG);try{var
lI=0,lK=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(g[6],aj[4]),f=c(r[2][7],e,d);return function(b){return a(D[2],f)}}return a(j[2],lJ)},lI],lM=[0,function(b){if(b){var
d=b[2];if(d)if(!d[2]){var
e=b[1],f=a(g[6],aj[4]),h=c(r[2][7],f,e),i=d[1],k=a(g[6],n[4]),l=c(r[2][7],k,i);return function(a){return c(D[1],h,l)}}}return a(j[2],lL)},lK],lN=a(i[19][12],lM);e(at[9],0,[0,J,lO],lN);var
lP=function(q){var
i=a(h[1][6],lQ),b=aj[4],f=0,g=0;if(0===b[0]){var
j=[0,[0,lR,[0,[1,l[4],[5,[0,b[1]]],i],g]],f],m=a(h[1][6],lS),d=n[4],k=0;if(0===d[0]){var
o=[0,lT,[0,[1,l[4],[5,[0,d[1]]],m],k]],p=a(h[1][6],lU),e=aj[4];if(0===e[0])return c(aV[4],[0,J,lW],[0,[0,lV,[0,[1,l[4],[5,[0,e[1]]],p],o]],j]);throw[0,H,lX]}throw[0,H,lY]}throw[0,H,lZ]};c(ay[19],lP,J)}catch(b){b=v(b);if(!a(k[22],b))throw b;var
gH=c(k[18],0,b),gK=c(j[16],gJ,gI),gM=c(j[16],gL,gK),gN=a(d[1],gM),gO=c(d[13],gN,gH);a(M[13],gO)}try{var
lu=0,lw=[0,function(b){if(b){var
d=b[2];if(d)if(!d[2]){var
e=b[1],f=a(g[6],n[8]),h=c(r[2][7],f,e),i=d[1],k=a(g[17],n[18]),l=a(g[6],k),m=c(r[2][7],l,i);return function(a){return c(D[3],h,m)}}}return a(j[2],lv)},lu],lx=a(i[19][12],lw);e(at[9],0,[0,J,ly],lx);var
lz=function(j){var
f=a(h[1][6],lB),b=n[18],e=0;if(0===b[0]){var
g=[0,lC,[0,[1,l[4],[0,[5,[0,b[1]]]],f],lA]],i=a(h[1][6],lD),d=n[8];if(0===d[0])return c(aV[4],[0,J,lF],[0,[0,lE,[0,[1,l[4],[5,[0,d[1]]],i],g]],e]);throw[0,H,lG]}throw[0,H,lH]};c(ay[19],lz,J)}catch(b){b=v(b);if(!a(k[22],b))throw b;var
gP=c(k[18],0,b),gS=c(j[16],gR,gQ),gU=c(j[16],gT,gS),gV=a(d[1],gU),gW=c(d[13],gV,gP);a(M[13],gW)}function
aW(b){switch(b[0]){case
0:var
f=b[1];if(typeof
f==="number")return a(d[1],gX);else{if(0===f[0]){var
i=c(d[47],P[22],f[1]),j=a(d[1],gY);return c(d[14],j,i)}var
k=c(d[47],P[22],f[1]),l=a(d[1],gZ);return c(d[14],l,k)}case
1:var
g=b[1];if(0===g[0]){var
m=a(d[1],g0),n=a(aa[18],g[1]),o=a(d[1],g1),p=a(d[17],0),q=a(d[1],g2),r=c(d[14],q,p),s=c(d[14],r,o),t=c(d[14],s,n);return c(d[14],t,m)}var
u=a(d[1],g3),v=e(d[54],d[17],T[41],g[1]),w=a(d[1],g4),x=a(d[17],0),y=a(d[1],g5),z=c(d[14],y,x),A=c(d[14],z,w),B=c(d[14],A,v);return c(d[14],B,u);case
2:var
C=a(d[1],g6),D=a(aa[18],b[1]),E=a(d[1],g7),F=a(d[17],0),G=a(d[1],g8),H=c(d[14],G,F),I=c(d[14],H,E),J=c(d[14],I,D);return c(d[14],J,C);case
3:var
K=a(d[1],g9),L=a(aa[18],b[1]),M=a(d[1],g_),N=a(d[17],0),O=a(d[1],g$),Q=c(d[14],O,N),R=c(d[14],Q,M),S=c(d[14],R,L);return c(d[14],S,K);case
4:var
U=c(d[47],P[22],b[2]),V=c(d[47],P[22],b[1]),W=a(d[1],ha),X=c(d[14],W,V);return c(d[14],X,U);case
5:var
h=b[1];if(0===h[0]){var
Y=a(d[1],hb),Z=a(aa[18],h[1]),_=a(d[1],hc),$=a(d[17],0),ab=c(d[47],P[22],b[2]),ac=a(d[1],hd),ad=c(d[14],ac,ab),ae=c(d[14],ad,$),af=c(d[14],ae,_),ag=c(d[14],af,Z);return c(d[14],ag,Y)}var
ah=a(d[1],he),ai=e(d[54],d[17],T[41],h[1]),aj=a(d[1],hf),ak=a(d[17],0),al=c(d[47],P[22],b[2]),am=a(d[1],hg),an=c(d[14],am,al),ao=c(d[14],an,ak),ap=c(d[14],ao,aj),aq=c(d[14],ap,ai);return c(d[14],aq,ah);case
6:var
ar=c(d[47],P[22],b[1]),as=a(d[1],hh);return c(d[14],as,ar);default:var
at=c(d[47],P[22],b[1]),au=a(d[1],hi);return c(d[14],au,at)}}var
bk=a(g[3],hj),hk=a(g[4],bk),aX=e(m[13],m[9],hl,hk),hm=0,hn=0;function
ho(a,c,b){return[0,[0,a]]}var
hp=[6,m[15][1]],hr=[0,[0,[0,[0,0,[0,a(o[15],hq)]],hp],ho],hn];function
hs(b,a){return ht}var
hv=[0,[0,[0,0,[0,a(o[15],hu)]],hs],hr];function
hw(a,c,b){return[0,[1,a]]}var
hx=[6,m[15][1]],hz=[0,[0,[0,[0,0,[0,a(o[15],hy)]],hx],hw],hv];function
hA(e,a,d,c,b){return[1,[0,a]]}var
hC=[0,a(o[15],hB)],hD=[6,m[17][18]],hF=[0,a(o[15],hE)],hH=[0,[0,[0,[0,[0,[0,0,[0,a(o[15],hG)]],hF],hD],hC],hA],hz];function
hI(e,a,d,c,b){return[1,[1,a]]}var
hK=[0,a(o[15],hJ)],hL=[1,[6,m[15][7]]],hN=[0,a(o[15],hM)],hP=[0,[0,[0,[0,[0,[0,0,[0,a(o[15],hO)]],hN],hL],hK],hI],hH];function
hQ(e,a,d,c,b){return[2,a]}var
hS=[0,a(o[15],hR)],hT=[6,m[17][18]],hV=[0,a(o[15],hU)],hX=[0,[0,[0,[0,[0,[0,0,[0,a(o[15],hW)]],hV],hT],hS],hQ],hP];function
hY(e,a,d,c,b){return[3,a]}var
h0=[0,a(o[15],hZ)],h1=[6,m[17][18]],h3=[0,a(o[15],h2)],h5=[0,[0,[0,[0,[0,[0,0,[0,a(o[15],h4)]],h3],h1],h0],hY],hX];function
h6(b,a,d,c){return[4,a,b]}var
h7=[6,m[15][1]],h8=[6,m[15][1]],h_=[0,[0,[0,[0,[0,0,[0,a(o[15],h9)]],h8],h7],h6],h5];function
h$(a,c,b){return[6,a]}var
ia=[6,m[15][1]],ic=[0,[0,[0,[0,0,[0,a(o[15],ib)]],ia],h$],h_];function
id(f,b,e,a,d,c){return[5,[1,b],a]}var
ig=[0,a(o[15],ie)],ih=[1,[6,m[15][7]]],ij=[0,a(o[15],ii)],ik=[6,m[15][1]],im=[0,[0,[0,[0,[0,[0,[0,0,[0,a(o[15],il)]],ik],ij],ih],ig],id],ic];function
io(f,b,e,a,d,c){return[5,[0,b],a]}var
iq=[0,a(o[15],ip)],ir=[6,m[17][18]],it=[0,a(o[15],is)],iu=[6,m[15][1]],iw=[0,[0,[0,[0,[0,[0,[0,0,[0,a(o[15],iv)]],iu],it],ir],iq],io],im];function
ix(a,c,b){return[7,a]}var
iy=[6,m[15][1]],iA=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,a(o[15],iz)]],iy],ix],iw]],hm]];e(m[23],aX,0,iA);function
iB(h,g,f,c){var
b=a(d[1],iC);return e(k[3],0,0,b)}function
iD(h,g,f,c){var
b=a(d[1],iE);return e(k[3],0,0,b)}function
iF(c,b,a){return aW}Q(aa[1],bk,iF,iD,iB);function
b5(b){var
c=e(d[54],d[44],aW,b);return a(d[61],c)}var
aq=a(g[3],iG),iH=a(g[4],aq),b6=e(m[13],m[9],iI,iH),iJ=0,iK=0;function
iL(d,a,c,b){return a}var
iN=[0,a(o[15],iM)],iP=[2,[6,aX],[0,a(o[15],iO)]],iR=[0,0,[0,[0,0,0,[0,[0,[0,[0,[0,0,[0,a(o[15],iQ)]],iP],iN],iL],iK]],iJ]];e(m[23],b6,0,iR);function
iS(h,g,f,c){var
b=a(d[1],iT);return e(k[3],0,0,b)}function
iU(h,g,f,c){var
b=a(d[1],iV);return e(k[3],0,0,b)}function
iW(c,b,a){return b5}Q(aa[1],aq,iW,iU,iS);try{var
ld=0,li=[0,[0,0,function(b){return b?a(j[2],le):function(g){var
b=a(d[26],lf);a(M[12],b);var
e=D[7][1];function
f(e,b){var
f=a(I[5],b[2]),g=a(d[1],lg),h=a(d[17],0),i=a(I[5],b[1]),j=a(d[1],lh),k=a(d[17],0),l=a(T[20],e),m=a(P[12],l),n=c(d[14],m,k),o=c(d[14],n,j),p=c(d[14],o,i),q=c(d[14],p,h),r=c(d[14],q,g),s=c(d[14],r,f),t=c(d[30],2,s);return a(M[12],t)}return c(T[24][10],f,e)}}],ld],lk=[0,[0,0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e)if(!e[2]){var
h=b[1],i=a(g[4],n[4]),k=c(g[8],i,h),l=d[1],m=a(g[4],n[8]),o=c(g[8],m,l),p=e[1],q=a(g[18],aq),r=a(g[4],q),f=c(g[8],r,p);return function(n){var
c=f?f[1]:f,b=a(D[4],c),d=b[8],e=b[7],g=b[6],h=[0,b[4],b[5]],i=b[3],j=b[1],l=b[2],m=a(D[6],o);return l1(D[5],k,m,l,j,i,h,g,e,d)}}}}return a(j[2],lj)}],li],ll=function(b,a){return e(b3[1],a[1],[0,lm,b],a[2])};c(ap[80],ll,lk);var
ln=0,lp=[0,function(b){return b?a(j[2],lo):function(a){return ao[5]}},ln],lr=[0,function(b){if(b){var
c=b[2];if(c){var
d=c[2];if(d)if(!d[2])return function(a){return ao[6]}}}return a(j[2],lq)},lp],ls=function(b,a){return c(ao[3],[0,lt,b],a)};c(ap[80],ls,lr)}catch(b){b=v(b);if(!a(k[22],b))throw b;var
iX=c(k[18],0,b),i0=c(j[16],iZ,iY),i2=c(j[16],i1,i0),i3=a(d[1],i2),i4=c(d[13],i3,iX);a(M[13],i4)}var
i6=[5,[6,a(m[12],aq)]],i7=a(g[18],aq),i8=a(g[4],i7),i9=[0,[1,l[4],i8,i6],0],i_=[6,a(m[12],n[8])],i$=a(g[4],n[8]),jb=[0,ja,[0,[1,l[4],i$,i_],i9]],jc=[6,a(m[12],n[4])],jd=a(g[4],n[4]),jg=[0,[0,jf,[0,je,[0,[1,l[4],jd,jc],jb]]],i5];function
jh(b,a){return e(b4[1],[0,ji,b],0,a)}c(ap[80],jh,jg);try{var
kZ=0,k1=[0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e)if(!e[2]){var
f=b[1],h=a(g[6],n[14]),k=c(r[2][7],h,f),l=d[1],m=a(g[17],n[8]),o=a(g[6],m),p=c(r[2][7],o,l),q=e[1],s=a(g[17],n[8]),t=a(g[6],s),u=c(r[2][7],t,q);return function(c){var
b=a(i[17][93],u);return Q(D[8],k,p,b[2],b[1])}}}}return a(j[2],k0)},kZ],k2=a(i[19][12],k1);e(at[9],0,[0,J,k3],k2);var
k4=function(q){var
i=a(h[1][6],k5),b=n[8],f=0,g=0;if(0===b[0]){var
j=[0,k6,[0,[1,l[4],[0,[5,[0,b[1]]]],i],g]],k=a(h[1][6],k7),d=n[8];if(0===d[0]){var
m=[0,k8,[0,[1,l[4],[2,[5,[0,d[1]]]],k],j]],o=a(h[1][6],k9),e=n[14],p=0;if(0===e[0])return c(aV[4],[0,J,k$],[0,[0,k_,[0,[1,l[4],[6,[0,e[1]],p],o],m]],f]);throw[0,H,la]}throw[0,H,lb]}throw[0,H,lc]};c(ay[19],k4,J)}catch(b){b=v(b);if(!a(k[22],b))throw b;var
jj=c(k[18],0,b),jm=c(j[16],jl,jk),jo=c(j[16],jn,jm),jp=a(d[1],jo),jq=c(d[13],jp,jj);a(M[13],jq)}function
bl(b){if(0===b[0])return aW(b[1]);var
e=c(d[47],P[22],b[1]),f=a(d[1],jr);return c(d[14],f,e)}var
bm=a(g[3],js),jt=a(g[4],bm),bn=e(m[13],m[9],ju,jt),jv=0,jw=0,jx=[0,[0,[0,0,[6,aX]],function(a,b){return[0,a]}],jw];function
jy(a,c,b){return[1,a]}var
jz=[6,m[15][1]],jB=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,a(o[15],jA)]],jz],jy],jx]],jv]];e(m[23],bn,0,jB);function
jC(h,g,f,c){var
b=a(d[1],jD);return e(k[3],0,0,b)}function
jE(h,g,f,c){var
b=a(d[1],jF);return e(k[3],0,0,b)}function
jG(c,b,a){return bl}Q(aa[1],bm,jG,jE,jC);function
b7(b){var
c=e(d[54],d[44],bl,b);return a(d[61],c)}var
ar=a(g[3],jH),jI=a(g[4],ar),b8=e(m[13],m[9],jJ,jI),jK=0,jL=0;function
jM(d,a,c,b){return a}var
jO=[0,a(o[15],jN)],jQ=[2,[6,bn],[0,a(o[15],jP)]],jS=[0,0,[0,[0,0,0,[0,[0,[0,[0,[0,0,[0,a(o[15],jR)]],jQ],jO],jM],jL]],jK]];e(m[23],b8,0,jS);function
jT(h,g,f,c){var
b=a(d[1],jU);return e(k[3],0,0,b)}function
jV(h,g,f,c){var
b=a(d[1],jW);return e(k[3],0,0,b)}function
jX(c,b,a){return b7}Q(aa[1],ar,jX,jV,jT);try{var
kI=0,kN=[0,[0,0,function(b){return b?a(j[2],kJ):function(g){var
b=a(d[26],kK);a(M[12],b);var
e=D[11][1];function
f(e,b){var
f=a(I[5],b[2]),g=a(d[1],kL),h=a(d[17],0),i=a(I[5],b[1]),j=a(d[1],kM),k=a(d[17],0),l=a(T[20],e),m=a(P[12],l),n=c(d[14],m,k),o=c(d[14],n,j),p=c(d[14],o,i),q=c(d[14],p,h),r=c(d[14],q,g),s=c(d[14],r,f),t=c(d[30],2,s);return a(M[12],t)}return c(T[24][10],f,e)}}],kI],kP=[0,[0,0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e)if(!e[2]){var
h=b[1],i=a(g[4],n[4]),k=c(g[8],i,h),l=d[1],m=a(g[4],n[8]),o=c(g[8],m,l),p=e[1],q=a(g[18],ar),r=a(g[4],q),f=c(g[8],r,p);return function(p){var
c=f?f[1]:f,b=a(D[9],c),d=b[9],e=b[8],g=b[7],h=[0,b[5],b[6]],i=b[3],j=b[4],l=b[1],m=b[2],n=a(D[6],o);return l2(D[10],k,n,m,l,j,i,h,g,e,d)}}}}return a(j[2],kO)}],kN],kQ=function(b,a){return e(b3[1],a[1],[0,kR,b],a[2])};c(ap[80],kQ,kP);var
kS=0,kU=[0,function(b){return b?a(j[2],kT):function(a){return ao[5]}},kS],kW=[0,function(b){if(b){var
c=b[2];if(c){var
d=c[2];if(d)if(!d[2])return function(a){return ao[6]}}}return a(j[2],kV)},kU],kX=function(b,a){return c(ao[3],[0,kY,b],a)};c(ap[80],kX,kW)}catch(b){b=v(b);if(!a(k[22],b))throw b;var
jY=c(k[18],0,b),j1=c(j[16],j0,jZ),j3=c(j[16],j2,j1),j4=a(d[1],j3),j5=c(d[13],j4,jY);a(M[13],j5)}var
j7=[5,[6,a(m[12],ar)]],j8=a(g[18],ar),j9=a(g[4],j8),j_=[0,[1,l[4],j9,j7],0],j$=[6,a(m[12],n[8])],ka=a(g[4],n[8]),kc=[0,kb,[0,[1,l[4],ka,j$],j_]],kd=[6,a(m[12],n[4])],ke=a(g[4],n[4]),kh=[0,[0,kg,[0,kf,[0,[1,l[4],ke,kd],kc]]],j6];function
ki(b,a){return e(b4[1],[0,kj,b],0,a)}c(ap[80],ki,kh);try{var
ks=0,ku=[0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e)if(!e[2]){var
f=b[1],h=a(g[6],n[14]),k=c(r[2][7],h,f),l=d[1],m=a(g[17],n[8]),o=a(g[6],m),p=c(r[2][7],o,l),q=e[1],s=a(g[17],n[8]),t=a(g[6],s),u=c(r[2][7],t,q);return function(c){var
b=a(i[17][93],u);return Q(D[12],k,p,b[2],b[1])}}}}return a(j[2],kt)},ks],kv=a(i[19][12],ku);e(at[9],0,[0,J,kw],kv);var
kx=function(p){var
i=a(h[1][6],ky),b=n[8],f=0,g=0;if(0===b[0]){var
j=[0,kz,[0,[1,l[4],[0,[5,[0,b[1]]]],i],g]],k=a(h[1][6],kA),d=n[8];if(0===d[0]){var
m=[0,kB,[0,[1,l[4],[2,[5,[0,d[1]]]],k],j]],o=a(h[1][6],kC),e=n[14];if(0===e[0])return c(aV[4],[0,J,kE],[0,[0,kD,[0,[1,l[4],[5,[0,e[1]]],o],m]],f]);throw[0,H,kF]}throw[0,H,kG]}throw[0,H,kH]};c(ay[19],kx,J)}catch(b){b=v(b);if(!a(k[22],b))throw b;var
kk=c(k[18],0,b),kn=c(j[16],km,kl),kp=c(j[16],ko,kn),kq=a(d[1],kp),kr=c(d[13],kq,kk);a(M[13],kr)}var
b9=[0,J,aW,bk,aX,b5,aq,b6,bl,bm,bn,b7,ar,b8];bo(395,b9,"Newring_plugin.G_newring");bo(396,[0,D,b9],"Newring_plugin");return});
