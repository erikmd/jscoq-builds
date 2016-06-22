(function(a){"use strict";var
ai=140,cP=",",ba="AddSetoidRing",T='"',cO="field_mod",v=250,cN="(",a6="AddSetoidField",cM="constants",S="plugins/setoid_ring/g_newring.ml4",a5="Field_tac",cL="Exception in vernac extend ",cw="with carrier ",cJ="postprocess tactic",cK="Init",a4="field",cI="InitialRing",r=246,cv="decidable",cF="Pphi_pow",cG='Using setoid "',cH="tactic recognizing constants",cu=102,M="Extension: cannot occur",cE="postprocess",a$="setoid",ct=-10,cD="ring_mod",cs="$map",G="]",cr="preprocess",br="power_tac",cC="Print",aD="closed_term",bs="power",cB="Ring_polynom",aC="protect_fv",cq="Ring_tac",aB="Ring",cp='and "',co="$lH",cm="morphism",cn="plugins/setoid_ring/newring.ml",a_="field_lookup",a9="vernac argument needs not wit printer",ad="Coq",ck="closed",cl="F",a8="x",a3="ring_lookup",bq="ring",at=": ",cj="preprocess tactic",ac=124,F="[",cA='and morphisms "',ci="and equivalence relation ",ch=")",ce="field_mods",cf=":",cg="t",aA=139,cc="abstract",cd="$f",a2="vernac argument needs not globwit printer",a1="sign",a7="Exception in tactic extend ",cb="PEeval",a0="div",aZ="newring_plugin",cy="Add",cz="completeness",cx="ring_mods",ca="Pphi_dev",H=a.jsoo_runtime,L=H.caml_check_bound,b=H.caml_new_string,u=H.caml_obj_tag,bp=H.caml_register_global,x=H.caml_wrap_exception;function
k(a,b){return a.length==1?a(b):H.caml_call_gen(a,[b])}function
l(a,b,c){return a.length==2?a(b,c):H.caml_call_gen(a,[b,c])}function
m(a,b,c,d){return a.length==3?a(b,c,d):H.caml_call_gen(a,[b,c,d])}function
R(a,b,c,d,e){return a.length==4?a(b,c,d,e):H.caml_call_gen(a,[b,c,d,e])}function
W(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):H.caml_call_gen(a,[b,c,d,e,f])}function
l1(a,b,c,d,e,f,g,h,i){return a.length==8?a(b,c,d,e,f,g,h,i):H.caml_call_gen(a,[b,c,d,e,f,g,h,i])}function
l2(a,b,c,d,e,f,g,h,i,j){return a.length==9?a(b,c,d,e,f,g,h,i,j):H.caml_call_gen(a,[b,c,d,e,f,g,h,i,j])}function
l3(a,b,c,d,e,f,g,h,i,j,k){return a.length==10?a(b,c,d,e,f,g,h,i,j,k):H.caml_call_gen(a,[b,c,d,e,f,g,h,i,j,k])}var
c=H.caml_get_global_data(),bJ=[0,b(aZ),b("get_res")],bL=[0,[0,b(ad),[0,b("Setoids"),[0,b("Setoid"),0]]],[0,[0,b(ad),[0,b("Lists"),[0,b("List"),0]]],[0,[0,b(ad),[0,b(cK),[0,b("Datatypes"),0]]],[0,[0,b(ad),[0,b(cK),[0,b("Logic"),0]]],0]]]],ay=b("setoid_ring"),K=b(aZ),s=c.Term,P=c.Closure,o=c.Util,bw=c.Tacmach,w=c.Proofview,X=c.Coqlib,am=c.Global,n=c.Names,p=c.Pervasives,aj=c.Tacintern,bz=c.Lib,t=c.CamlinternalLazy,aE=c.Universes,ae=c.Rewrite,O=c.Not_found,q=c.Errors,C=c.Mod_subst,Y=c.Tacsubst,U=c.Libnames,af=c.Retyping,by=c.Reductionops,e=c.Pp,J=c.Printer,I=c.Assert_failure,al=c.Globnames,j=c.Tacinterp,aF=c.Typing,ag=c.Evarutil,bx=c.Smartlocate,g=c.Loc,N=c.Feedback,bA=c.Flags,ak=c.Stdarg,f=c.Genarg,aI=c.Evd,bt=c.Univ,bB=c.Declare,bC=c.Constrintern,h=c.Constrarg,bb=c.Quote_plugin,bv=c.Tacticals,bu=c.Tactics,au=c.Tacenv,aG=c.Summary,aH=c.Libobject,aW=c.Tacentries,b6=c.Egramml,ap=c.Vernac_classifier,b5=c.Vernacinterp,Q=c.Ppconstr,ab=c.Pptactic,d=c.Pcoq,az=c.Mltop,aq=c.CList,i=c.CLexer,gF=[0,0,0],gG=[0,0,0],gv=b("field kind"),gw=b(cH),gx=b(cj),gy=b(cJ),gz=b(a$),gA=b(bs),gB=b(a1),gC=b(a0),gD=b("infinite property"),gk=[0,b(a5),0],gl=[0,0,0],gm=b("field_lemmas"),gn=b("_field_lemma1"),go=b("_field_lemma2"),gp=b("_field_lemma3"),gq=b("_field_lemma4"),gr=b("_lemma5"),gt=[22,0],gs=[22,0],gi=b("field inverse should be declared as a morphism"),f5=b("arguments of field_simplify do not have all the same type"),f6=b(a4),f4=[0,b(a5),0],f7=b(T),f8=b(T),f9=b("cannot find a declared field structure over"),f_=b(a4),f$=[0,b(cn),841,12],fZ=[0,1],f0=[0,0],fY=b("bad field structure"),fc=[0,0,0],fd=[0,0,0],e5=b("ring kind"),e6=b(cH),e7=b(cj),e8=b(cJ),e9=b(a$),e_=b(bs),e$=b(a1),fa=b(a0),e3=b(" cannot be set twice"),eX=[0,b("Ring_base"),0],eY=b("ring_lemmas"),eZ=b("_ring_lemma1"),e0=b("_ring_lemma2"),e2=[22,0],e1=[22,0],eV=[0,1],eW=[0,0],eU=b("bad ring structure"),eD=b("ring addition should be declared as a morphism"),eE=b("ring multiplication should be declared as a morphism"),eF=b("ring opposite should be declared as a morphism"),eG=b(T),eH=b(cp),eI=b(T),eJ=b(T),eK=b('",'),eL=b(cA),eM=b(T),eN=b(cG),eO=b(T),eP=b(cp),eQ=b(T),eR=b(cA),eS=b(T),eT=b(cG),ez=b("cannot find setoid relation"),el=b("arguments of ring_simplify do not have all the same type"),em=b(bq),en=b(T),eo=b(T),ep=b("cannot find a declared ring structure over"),eq=b(bq),er=[0,b(cn),361,12],dK=[0,b(cB),0],dJ=b("newring"),dB=b(aB),dA=b(aB),dw=b("ring: cannot find relation (not closed)"),dv=b("ring: cannot find relation"),dm=b(aB),dl=b(aB),dk=b(a8),dj=b(a8),dh=b(a8),df=b("Ring.exec_tactic: anomaly"),dc=b(a8),dd=b(cl),de=b(cl),da=[2,1],db=[0,1],c8=[0,b(aZ),b(aD)],c9=b(cg),c_=b(cg),c2=b("not found"),c3=b("map "),c4=b("lookup_map"),c0=b("dummy"),cZ=b("global_head_of_constr"),dn=b("Build_Setoid_Theory"),dq=b("None"),dr=b("Some"),ds=b("eq"),dt=b("cons"),du=b("nil"),dx=b(ad),dy=[0,[0,b("Ring_theory"),0],[0,[0,b(cB),0],[0,[0,b(cq),0],[0,[0,b(cI),0],[0,[0,b(a5),0],[0,[0,b("Field_theory"),0],0]]]]]],dC=[0,b(ad),0],dD=b(cq),dF=[0,b(ad),0],dG=b(cI),dL=b("almost_ring_theory"),dM=b("Eqsth"),dO=b("Eq_ext"),dQ=b("Eq_s_ext"),dS=b("ring_theory"),dT=b("mk_reqe"),dV=b("semi_ring_theory"),dW=b("mk_seqe"),dY=b("Abstract"),dZ=b("Computational"),d1=b("Morphism"),d3=b("inv_morph_nothing"),d4=b("mkhypo"),d6=b("hypo"),d9=b(cb),ea=b(cF),ed=b(ca),eh=b(bq),ei=b("ring-tac-carrier-table"),ej=b("ring-tac-name-table"),et=b("tactic-new-ring-theory"),ff=[0,b(ad),0],fg=b(a5),fl=b("FEeval"),fo=b(cb),fr=b(cF),fu=b(ca),fx=b("display_pow_linear"),fA=b("display_linear"),fE=b(a4),fH=b("PCond"),fL=b("field_cond"),fM=b(a4),fO=b("simpl_field_expr"),fP=b("almost_field_theory"),fQ=b("field_theory"),fR=b("semi_field_theory"),fS=b("AF_AR"),fU=b("F_R"),fW=b("SF_SR"),f1=b("field-tac-carrier-table"),f2=b("field-tac-name-table"),gb=b("tactic-new-field-theory"),kz=b("$lt"),kI=[0,b(S),1,0],kA=[0,b(G)],kB=b(co),kH=[0,b(S),1,0],kC=[0,b(F)],kD=b(cd),kG=[0,b(S),1,0],kE=[0,b(a_)],kF=b(a_),ku=b(M),kk=b(a6),kZ=b(a6),kW=b(M),kU=b(M),kS=b(a6),kP=b(M),kM=b(ci),kN=b(cw),kL=b("The following field structures have been declared:"),kK=b(M),jX=b(a2),jV=b(a9),jG=b(a2),jE=b(a9),js=b(cz),k6=b("$lrt"),ld=[0,b(S),1,0],k7=[0,b(G)],k8=b(co),lc=[0,b(S),1,0],k9=[0,b(F)],k_=b(cd),lb=[0,b(S),1,0],k$=[0,b(a3)],la=b(a3),k1=b(M),jj=b(ba),lu=b(ba),lr=b(M),lp=b(M),ln=b(ba),lk=b(M),lh=b(ci),li=b(cw),lg=b("The following ring structures have been declared:"),lf=b(M),iW=b(a2),iU=b(a9),iF=b(a2),iD=b(a9),hu=[0,0],gY=b(cc),gZ=b(cv),g0=b(cm),g1=b(G),g2=b(F),g3=b(cM),g4=b(G),g5=b(F),g6=b(ck),g7=b(G),g8=b(F),g9=b(cr),g_=b(G),g$=b(F),ha=b(cE),hb=b(a$),hc=b(G),hd=b(F),he=b(br),hf=b(G),hg=b(F),hh=b(br),hi=b(a1),hj=b(a0),lB=[0,[0,b(G)],0],lC=b("$l"),lI=[0,b(S),1,0],lD=[0,b(F)],lE=b("$t"),lH=[0,b(S),1,0],lF=[0,b(aD)],lG=b(aD),lw=b(M),lR=b(cs),l0=[0,b(S),1,0],lS=[0,b(aC)],lT=b("$id"),lZ=[0,b(S),1,0],lU=[0,b("in")],lV=b(cs),lY=[0,b(S),1,0],lW=[0,b(aC)],lX=b(aC),lM=b(M),lK=b(M),gH=b(aZ),lP=b(aC),gJ=b(at),gK=b(aC),gM=b(a7),lz=b(aD),gR=b(at),gS=b(aD),gU=b(a7),hk=b(cD),hm=b(cD),hr=b(cv),hv=b(cc),hz=b(cm),hC=b(G),hF=b(F),hH=b(cM),hK=b(G),hN=b(F),hP=b(ck),hS=b(G),hV=b(F),hX=b(cr),h0=b(G),h3=b(F),h5=b(cE),h_=b(a$),ic=b(a1),ig=b(G),ij=b(F),im=b(bs),iq=b(G),it=b(F),iw=b(br),iA=b(a0),iH=b(cx),iJ=b(cx),iN=b(ch),iP=b(cP),iR=b(cN),iZ=b(at),i0=b(ba),i2=b(cL),i6=[0,[0,[0,b(cC)],[0,[0,b("Rings")],0]],0],jb=[0,b(cf)],jf=[0,b(aB)],jg=[0,b(cy)],k4=b(a3),jl=b(at),jm=b(a3),jo=b(a7),jt=b(cO),jv=b(cO),jB=b(cz),jI=b(ce),jK=b(ce),jO=b(ch),jQ=b(cP),jS=b(cN),j0=b(at),j1=b(a6),j3=b(cL),j7=[0,[0,[0,b(cC)],[0,[0,b("Fields")],0]],0],kc=[0,b(cf)],kg=[0,b("Field")],kh=[0,b(cy)],kx=b(a_),km=b(at),kn=b(a_),kp=b(a7),cT=c.Option,cQ=c.Vars,cR=c.Refiner,cW=c.Environ,cU=c.Goal,cV=c.Esubst,cS=c.Redexpr,cX=c.Constr;function
bD(a,b,c,d,e){switch(k(b,d)){case
0:return l(P[49],c,e);case
1:return k(P[32],e);default:return-1===d?l(P[49],c,e):k(a,e)}}function
cY(a){var
b=k(s[39],a);try{var
d=k(al[16],b[1]);return d}catch(f){f=x(f);if(f===O){var
c=k(e[1],cZ);return m(q[3],0,0,c)}throw f}}function
bE(a){try{var
b=k(al[16],a);return b}catch(f){f=x(f);if(f===O)return[0,k(n[1][5],c0)];throw f}}function
aJ(e,d,c){var
g=k(e,bE(c));if(g){var
p=-1,q=g[1];return bD(function(a){return aJ(e,d,a)},q,d,p,c)}var
b=k(s[ai],c);switch(b[0]){case
6:var
r=function(a,b){return aJ(e,a,b)};return m(P[51],r,d,c);case
9:var
a=b[2],f=b[1],t=0;if(a.length-1<=0){var
u=k(s[ac],[0,f,a]);return k(P[32],u)}var
h=l(o[19][50],t,a),i=k(s[ac],[0,f,h[1]]),j=k(e,bE(i));if(j){var
v=j[1],n=function(a,b){return bD(function(a){return aJ(e,d,a)},v,d,a,b)},w=l(o[19][16],n,h[2]),x=[6,n(-1,i),w];return k(P[33],x)}var
y=k(s[ac],[0,f,a]);return k(P[32],y);default:return k(P[32],c)}}function
bF(a,b){try{var
c=[0,m(o[17][118],al[5],b,a)];return c}catch(f){f=x(f);if(f===O)return 0;throw f}}var
bc=[0,o[15][44][1]];function
bd(a,b){bc[1]=m(o[15][44][4],a,b,bc[1]);return 0}function
c1(a){try{var
f=l(o[15][44][22],a,bc[1]);return f}catch(f){f=x(f);if(f===O){var
b=k(e[1],c2),c=k(e[24],a),d=k(e[1],c3),g=l(e[14],d,c),h=l(e[14],g,b);return l(q[7],c4,h)}throw f}}function
be(a,b,c,d){var
e=k(cV[1],0),f=aJ(k(c1(a),d),e,d),g=m(P[37],0,P[11],b);return l(P[54],g,f)}function
c5(d){var
a=0,b=2,c=[0,function(a,b,c){return be(d,a,b,c)},b],e=m(bu[49],0,c,a);return k(w[66][8],e)}function
c6(d,b){var
a=[0,[0,b,0]],c=2,e=[0,function(a,b,c){return be(d,a,b,c)},c],f=m(bu[49],0,e,a);return k(w[66][8],f)}function
c7(a,b){var
c=l(o[17][12],aE[48],b),d=m(o[17][16],bb[1][8][4],c,bb[1][8][1]);if(l(bb[1][16],d,a))return bv[1];var
f=k(e[9],0);return l(bv[24],0,f)}function
bG(a){var
b=[0,c8,0];function
c(a){return[0,[0,g[4],a]]}var
d=l(o[17][12],c,a),e=k(f[17],h[6]),i=k(f[5],e),j=[0,[0,l(f[7],i,d)],0],m=k(n[1][5],c9),p=[0,[1,[0,g[4],m]],0],q=k(f[5],h[8]),r=[0,[0,l(f[7],q,p)],j],s=[31,g[4],b,r];return[28,[0,[0,[0,k(n[1][5],c_)],0],s]]}function
c$(a){var
b=k(am[2],0),c=k(aI[17],b);return m(bC[13],b,c,a)}function
V(a){var
b=k(am[2],0),c=k(aI[17],b);return R(bC[10],b,c,0,a)[1]}function
ah(a,b,c){var
d=k(aE[54],c),e=k(bt[35][14],b),f=l(aE[55],e,d),g=[0,k(bt[35][13],f)],h=[0,[0,l1(bB[2],0,db,0,0,0,g,0,c)],da],i=k(n[1][5],a),j=W(bB[3],0,0,i,0,h);return k(s[125],j)}function
bH(a,b){function
e(a,b){var
c=b[1],e=k(p[20],c),f=l(p[16],dc,e),d=k(n[1][5],f),h=[2,[1,[0,g[4],d]]],i=m(n[1][10][4],d,a,b[3]);return[0,c+1|0,[0,h,b[2]],i]}var
c=m(o[17][16],e,b,[0,0,0,n[1][10][1]]),f=c[3],h=k(n[1][5],dd),i=m(n[1][10][4],h,a,f),q=[0,i,k(j[28],0)[2]],r=c[2],d=k(n[1][5],de);return l(j[18],q,[29,[0,g[4],[3,g[4],[1,[0,g[4],d]],r]]])}var
bI=[0,[0]],dg=[0,bJ,0],di=[0,function(a,b){var
c=k(o[17][3],a),d=k(f[6],ak[3]),e=l(j[2][7],d,c);function
g(a){var
c=b[1],d=k(p[20],a),e=l(p[16],dh,d),f=k(n[1][5],e);return l(n[1][10][22],f,c)}bI[1]=l(o[19][2],e,g);return k(w[13],0)}];m(au[9],0,bJ,di);function
bK(a,b,c,d,e){function
D(a,b){var
c=b[1],e=k(p[20],c),f=l(p[16],dj,e),d=k(n[1][5],f),h=[2,[1,[0,g[4],d]]],i=b[3],o=k(j[2][1],a),q=m(n[1][10][4],d,o,i);return[0,c+1|0,[0,h,b[2]],q]}var
q=m(o[17][16],D,e,[0,0,0,n[1][10][1]]),E=k(j[28],0)[2],F=[0,q[3],E];function
G(a){var
b=k(p[20],a),c=l(p[16],dk,b);return k(n[1][5],c)}var
H=l(o[17][48],c,G),I=k(f[5],ak[3]),J=[0,[0,l(f[7],I,c)],0],K=[31,g[4],dg,J];function
L(a){return[0,a]}var
M=[5,[28,[0,l(o[17][12],L,H),K]]],z=aI[3][1],A=s[117],B=k(cW[10],a),i=R(cU[4][6],b,B,A,z),C=[0,i[1],i[3]],h=u(d),N=l(o[18],q[2],[0,M,0]),y=v===h?d[1]:r===h?k(t[2],d):d,O=l(j[18],F,[29,[0,g[4],[3,g[4],[0,[0,g[4],y]],N]]]),P=l(w[66][8],O,C),Q=k(cR[2],P),x=k(ag[43],Q),S=x[2],T=l(aI[142],0,x[1])[2],U=bI[1];function
V(a){var
b=k(j[2][2],a),c=b?b[1]:k(p[2],df);return k(S,c)}return[0,l(o[19][15],V,U),T]}function
bM(b){return[r,function(a){return m(X[6],dl,bL,b)}]}function
aK(b){return[r,function(a){return m(X[7],dm,bL,b)}]}var
dp=bM(dn),bf=aK(dq),bg=aK(dr),Z=bM(ds),av=aK(dt),aw=aK(du);function
ax(a,b){var
c=u(a),d=v===c?a[1]:r===c?k(t[2],a):a;return k(s[ac],[0,d,b])}function
y(a,b,c){var
d=u(b),e=v===d?b[1]:r===d?k(t[2],b):b,f=[0,l(ag[13],a,e),c];return k(s[ac],f)}function
bN(a){var
c=k(s[ai],a);if(9===c[0]){var
b=c[2];if(2<=b.length-1){var
g=m(o[19][7],b,0,b.length-1-2|0),d=k(s[ac],[0,c[1],g]);if(k(cQ[2],d)){var
e=b.length-1-1|0,f=b.length-1-2|0,h=L(b,e)[e+1];return[0,d,L(b,f)[f+1],h]}return k(q[6],dw)}}return k(q[6],dv)}var
aL=[0,dx,[0,ay,0]];function
dz(a){return l(o[18],aL,a)}var
bO=l(o[17][12],dz,dy);function
_(b){return[r,function(a){return m(X[6],dA,bO,b)}]}function
D(b){return[r,function(a){return m(X[7],dB,bO,b)}]}var
dE=l(o[17][12],n[1][5],[0,dD,[0,ay,dC]]);k(n[5][4],dE);var
dH=l(o[17][12],n[1][5],[0,dG,[0,ay,dF]]),dI=k(n[5][4],dH);function
bP(b){return[r,function(a){var
c=k(n[6][4],b);return m(n[cu],[0,dI],n[5][6],c)}]}function
an(b){var
c=[0,ay,dK];return[r,function(a){return m(X[5],dJ,c,b)}]}var
aM=_(dL),dN=D(dM),dP=D(dO),dR=D(dQ),aN=_(dS),dU=_(dT),aO=_(dV),dX=_(dW),aP=_(dY),d0=_(dZ),d2=_(d1),$=bP(d3),d5=D(d4),B=D(d6);function
bQ(a,b){var
c=b;for(;;){var
d=k(s[ai],c);if(6===d[0]){var
c=d[3];continue}var
e=bN(c),f=function(a){var
b=a[1],c=u(b),d=a[2],e=v===c?b[1]:r===c?k(t[2],b):b;return[0,e,d]},g=l(o[17][12],f,a),h=function(a){return-1===a?1:2},i=[0,[0,cY(e[1]),h],g];return function(a){return bF(i,a)}}}var
d7=0;function
d8(a){var
b=a+1|0;if(!(13<b>>>0))switch(b){case
12:return 2;case
0:case
8:case
10:case
13:return 0}return 1}var
d_=[0,[0,an(d9),d8],d7];function
d$(a){var
b=a+1|0;if(!(18<b>>>0))switch(b){case
17:return 2;case
0:case
9:case
10:case
11:case
12:case
14:case
16:case
18:return 0}return 1}var
eb=[0,[0,an(ea),d$],d_];function
ec(a){var
b=a-8|0;if(6<b>>>0){if(-9!==b)return 1}else
if(5===b)return 2;return 0}var
ee=[0,[0,an(ed),ec],eb],ef=[0,[0,aw,function(a){var
b=-1!==a?1:0,c=b?1:b;return c}],ee],eg=[0,[0,av,function(a){var
b=-1!==a?1:0;if(b){if(2!==a)return 1;var
c=2}else
var
c=b;return c}],ef];bd(eh,function(a){return bQ(eg,a)});var
ao=k(o[21][1],[0,cX[33]]),bh=m(aG[2],0,ei,ao[1]),bi=m(aG[2],0,ej,U[24][1]);function
ek(a){return l(ao[22],a,bh[1])}function
es(a){var
b=a[2],c=a[1],d=l(C[45],c,b[1]),e=l(C[45],c,b[2]),f=l(C[45],c,b[3]),g=l(C[45],c,b[4]),h=l(C[45],c,b[5]),i=l(C[45],c,b[6]),j=l(C[45],c,b[9]),k=l(C[45],c,b[10]),m=l(Y[1],c,b[7]),n=l(Y[1],c,b[8]),o=l(Y[1],c,b[11]),p=l(Y[1],c,b[12]);if(d===b[1])if(e===b[2])if(l(s[136],f,b[3]))if(g===b[4])if(h===b[5])if(i===b[6])if(j===b[9])if(k===b[10])if(m===b[7])if(n===b[8])if(o===b[11])if(p===b[12])return b;return[0,d,e,f,g,h,i,m,n,j,k,o,p]}function
bR(a){var
b=a[2],c=a[1];bh[1]=m(ao[4],b[1],b,bh[1]);bi[1]=m(U[24][4],c[1],b,bi[1]);return 0}var
aQ=k(aH[1],et),eu=aQ[8],ev=aQ[7];function
ew(a){return[0,a]}function
ex(a,b){var
c=1===a?1:0;return c?bR(b):c}var
ey=k(aH[4],[0,aQ[1],bR,aQ[3],ex,ew,es,ev,eu]);function
bS(a,b,c,d){try{var
e=R(ae[10],a,b[1],c,d),f=R(ae[11],a,e[1],c,d),g=R(ae[12],a,f[1],c,d);b[1]=g[1];var
h=ax(dp,[0,c,d,e[2],f[2],g[2]]);return h}catch(f){f=x(f);if(f===O)return k(q[6],ez);throw f}}function
eA(a,b,c,d,e,f,g,h){return ax(dU,[0,a,b,c,d,e,f,g,h])}function
eB(a,b,c,d,e,f){return ax(dX,[0,a,b,c,d,e,f])}function
eC(a,b,c){var
d=c[5],i=c[4],g=c[3],h=c[2],f=c[1],o=k(s[ai],d);if(9===o[0])if(1===o[2].length-1){var
E=u(Z),aP=v===E?Z[1]:r===E?k(t[2],Z):Z;if(l(s[aA],o[1],aP)){var
aQ=y(b,dN,[0,f]),aR=i?y(b,dP,[0,f,h,g,i[1]]):y(b,dR,[0,f,h,g]),aS=m(aF[7],a,b,aQ);return[0,aS,m(aF[7],a,b,aR)]}}var
p=[0,[0,[0,[0,f,[0,d]]],[0,[0,[0,f,[0,d]]],0]],[0,[0,f,[0,d]]]],F=bS(k(am[2],0),b,f,d);try{var
aO=l(ae[13],p,h),w=aO}catch(f){f=x(f);if(f!==O)throw f;var
w=k(q[6],eD)}var
j=w[2];try{var
aN=l(ae[13],p,g),z=aN}catch(f){f=x(f);if(f!==O)throw f;var
z=k(q[6],eE)}var
n=z[2];if(i){var
A=i[1];try{var
ap=l(ae[13],[0,[0,[0,[0,f,[0,d]]],0],[0,[0,f,[0,d]]]],A),B=ap}catch(f){f=x(f);if(f!==O)throw f;var
B=k(q[6],eF)}var
C=B[2],G=eA(f,h,g,A,d,j,n,C),H=k(e[1],eG),I=k(J[5],C),K=k(e[1],eH),L=k(e[17],0),M=k(e[1],eI),P=k(J[5],n),Q=k(e[1],eJ),R=k(e[17],0),S=k(e[1],eK),T=k(J[5],j),U=k(e[1],eL),V=k(e[17],0),W=k(e[1],eM),X=k(J[5],d),Y=k(e[1],eN),_=l(e[14],Y,X),$=l(e[14],_,W),aa=l(e[14],$,V),ab=l(e[14],aa,U),ac=l(e[14],ab,T),ad=l(e[14],ac,S),af=l(e[14],ad,R),ag=l(e[14],af,Q),ah=l(e[14],ag,P),aj=l(e[14],ah,M),ak=l(e[14],aj,L),al=l(e[14],ak,K),an=l(e[14],al,I),ao=l(e[14],an,H);l(bA[52],N[11],ao);var
D=G}else{var
aq=k(e[1],eO),ar=k(J[5],n),as=k(e[1],eP),at=k(e[17],0),au=k(e[1],eQ),av=k(J[5],j),aw=k(e[1],eR),ax=k(e[17],0),ay=k(e[1],eS),az=k(J[5],d),aB=k(e[1],eT),aC=l(e[14],aB,az),aD=l(e[14],aC,ay),aE=l(e[14],aD,ax),aG=l(e[14],aE,aw),aH=l(e[14],aG,av),aI=l(e[14],aH,au),aJ=l(e[14],aI,at),aK=l(e[14],aJ,as),aL=l(e[14],aK,ar),aM=l(e[14],aL,aq);l(bA[52],N[11],aM);var
D=eB(f,h,g,d,j,n)}return[0,F,D]}function
bT(a,b,c,d,e,f,g,h){return h?h[1]:eC(a,b,[0,c,d,e,f,g])}function
bU(a){if(typeof
a==="number"){var
b=u(aP);return v===b?aP[1]:r===b?k(t[2],aP):aP}else
return 0===a[0]?ax(d0,[0,a[1]]):ax(d2,[0,a[1]])}function
bV(a,b,c,d,e,f){if(f){var
h=f[1];if(0===h[0])return k(aj[3],h[1]);var
j=h[1],m=function(a){return l(bx[3],0,a)};return bG(l(o[17][12],m,j))}var
i=u($),n=v===i?$[1]:r===i?k(t[2],$):$;return[29,[0,g[4],[3,g[4],[0,[0,g[4],n]],0]]]}function
aR(a,b,c){return y(b,d5,[0,W(af[2],0,0,a,b[1],c),c])}function
bW(e,d,c){var
a=u(B),b=v===a?B[1]:r===a?k(t[2],B):B,f=l(ag[13],d,b),g=y(d,aw,[0,f]);function
h(a,b){return y(d,av,[0,f,aR(e,d,a),b])}var
i=m(o[17][16],h,c,g),j=m(aF[7],e,d,i);return l(ag[42],d[1],j)}function
bX(a,b,c){var
e=u(B),m=v===e?B[1]:r===e?k(t[2],B):B,f=l(ag[13],b,m);if(c){var
h=c[1],d=h[1];if(0===d[0])var
i=k(aj[3],d[1]);else
var
n=d[1],p=function(a){return l(bx[3],0,a)},i=bG(l(o[17][12],p,n));return[0,i,y(b,bg,[0,f,aR(a,b,V(h[2]))])]}var
j=u($),q=v===j?$[1]:r===j?k(t[2],$):$,s=[0,[0,g[4],q]],w=y(b,bf,[0,f]);return[0,[29,[0,g[4],[3,g[4],s,0]]],w]}function
bY(a,b,c){var
d=u(B),f=v===d?B[1]:r===d?k(t[2],B):B,e=l(ag[13],b,f);return c?y(b,bg,[0,e,aR(a,b,V(c[1]))]):y(b,bf,[0,e])}function
bZ(a,b,c){var
d=u(B),f=v===d?B[1]:r===d?k(t[2],B):B,e=l(ag[13],b,f);return c?y(b,bg,[0,e,aR(a,b,V(c[1]))]):y(b,bf,[0,e])}function
b0(a,b,c,d,e,f,g,h,i){var
Q=f[2],R=f[1],S=b[2],C=b[1],as=l(o[18],aL,eX);k(X[11],as);var
x=k(am[2],0),ad=W(af[2],0,0,x,C,S),A=k(s[ai],ad);if(9===A[0]){var
j=A[2],D=j.length-1-6|0;if(2<D>>>0)var
w=0;else{var
B=A[1];switch(D){case
0:var
E=u(aO),ae=j[1],ag=j[2],ak=j[3],al=j[4],an=j[5],ao=j[6],ap=v===E?aO[1]:r===E?k(t[2],aO):aO;if(l(s[aA],B,ap))var
m=[0,eV,ae,ag,ak,al,an,0,0,ao],w=1;else
var
w=0;break;case
1:var
w=0;break;default:var
F=j[1],G=j[2],H=j[3],I=j[4],J=j[5],K=j[6],M=j[7],N=j[8],O=u(aM),aq=v===O?aM[1]:r===O?k(t[2],aM):aM;if(l(s[aA],B,aq))var
m=[0,0,F,G,H,I,J,[0,K],[0,M],N],w=1;else{var
P=u(aN),ar=v===P?aN[1]:r===P?k(t[2],aN):aN;if(l(s[aA],B,ar))var
m=[0,eW,F,G,H,I,J,[0,K],[0,M],N],w=1;else
var
w=0}}}}else
var
w=0;if(!w)var
m=k(q[6],eU);var
T=m[9],U=m[8],V=m[6],Y=m[5],Z=m[2],y=[0,C],_=bT(x,y,Z,Y,V,U,T,c),$=_[1],aa=bX(x,y,g),at=bY(x,y,h),au=bZ(x,y,i),av=[0,at,[0,au,[0,bU(d),0]]],aw=[0,$,[0,_[2],[0,S,[0,aa[2],av]]]],ax=bP(eY),ab=bK(x,y[1],5,ax,aw),ac=ab[2],z=ab[1],ay=L(z,3)[4],az=L(z,4)[5],aB=k(n[1][7],a),aC=ah(l(p[16],aB,eZ),ac,ay),aD=k(n[1][7],a),aE=ah(l(p[16],aD,e0),ac,az),aF=bV(x,C,d,m[1],[0,m[3],m[4],Y,V,U],e),aG=R?k(aj[3],R[1]):e2,aH=Q?k(aj[3],Q[1]):e1,aI=aa[1],aJ=L(z,0)[1],aK=L(z,2)[3],aP=k(ey,[0,Z,T,$,L(z,1)[2],aK,aJ,aF,aI,aC,aE,aG,aH]);l(bz[6],a,aP);return 0}function
b1(a){return typeof
a==="number"?0:0===a[0]?[0,V(a[1])]:[1,V(a[1])]}function
z(a,b,c){if(k(cT[3],b[1])){b[1]=[0,c];return 0}var
d=l(p[16],a,e3);return k(q[6],d)}function
e4(a){var
c=[0,0],d=[0,0],e=[0,0],f=[0,0],g=[0,0],h=[0,0],i=[0,0],j=[0,0];function
k(a){switch(a[0]){case
0:return z(e5,c,b1(a[1]));case
1:return z(e6,e,a[1]);case
2:return z(e7,f,a[1]);case
3:return z(e8,g,a[1]);case
4:var
b=V(a[2]);return z(e9,d,[0,V(a[1]),b]);case
5:return z(e_,i,[0,a[1],a[2]]);case
6:return z(e$,h,a[1]);default:return z(fa,j,a[1])}}l(o[17][11],k,a);var
b=c[1],m=b?b[1]:b;return[0,m,d[1],e[1],f[1],g[1],i[1],h[1],j[1]]}function
b2(a,b){if(a)return a;var
c=bN(b);return[0,c[2],[0,c[3],0]]}function
b3(a,e,c,d){var
b=y(e,aw,[0,c]);function
f(a,b){return y(e,av,[0,c,a,b])}var
g=m(o[17][16],f,d,b);return m(aF[7],a,e,g)}var
A=j[2][1];function
aa(a){var
b=k(j[28],0);return l(j[2][6],b,a)}function
fb(a){var
b=k(A,a[2]),c=k(A,a[3]),d=k(A,a[4]),e=k(A,a[5]),f=k(A,a[6]),g=aa(a[7]),h=aa(a[8]),i=k(A,a[9]),j=k(A,a[10]),l=aa([28,[0,fc,a[11]]]);return[0,b,[0,c,[0,d,[0,e,[0,f,[0,g,[0,h,[0,i,[0,j,[0,l,[0,aa([28,[0,fd,a[12]]]),0]]]]]]]]]]]}function
fe(D,b,c,d){var
a=[0,function(a){var
g=k(bw[49][4],a),f=k(w[62][5],a);try{var
j=[0,g],h=b2(c,d);if(h){var
i=W(af[2],0,0,f,g,h[1]),n=function(a){var
c=W(af[2],0,0,f,g,a),b=1-W(by[82],0,f,g,i,c);if(b){var
d=k(e[1],el);return l(q[7],em,d)}return b};l(o[17][11],n,h[2]);try{var
C=ek(i),m=C}catch(f){f=x(f);if(f!==O)throw f;var
p=k(e[1],en),r=k(J[5],i),s=k(e[1],eo),t=k(e[17],0),u=k(e[1],ep),v=l(e[14],u,t),y=l(e[14],v,s),z=l(e[14],y,r),B=l(e[14],z,p),m=l(q[7],eq,B)}var
E=k(A,b3(f,j,m[1],h)),F=k(A,bW(f,j,b)),G=fb(m),H=bH(D,l(o[18],G,[0,F,[0,E,0]])),K=k(w[60][1],j[1]),L=l(w[15],K,H);return L}throw[0,I,er]}catch(f){f=x(f);if(k(w[66][10],f))return l(w[18],0,f);throw f}}];return k(w[62][10],a)}var
fh=l(o[17][12],n[1][5],[0,fg,[0,ay,ff]]),fi=k(n[5][4],fh),fj=0;function
fk(a){var
b=a-8|0;if(6<b>>>0)var
c=-9===b?1:0;else
if(4<=b)switch(b-4|0){case
0:var
c=0;break;case
1:return 2;default:var
c=1}else
var
c=1;return c?0:1}var
fm=[0,[0,D(fl),fk],fj];function
fn(a){var
b=a+1|0;if(!(13<b>>>0))switch(b){case
12:return 2;case
0:case
8:case
10:case
13:return 0}return 1}var
fp=[0,[0,an(fo),fn],fm];function
fq(a){var
b=a+1|0;if(!(18<b>>>0))switch(b){case
17:return 2;case
0:case
9:case
10:case
11:case
12:case
14:case
16:case
18:return 0}return 1}var
fs=[0,[0,an(fr),fq],fp];function
ft(a){var
b=a-8|0;if(6<b>>>0){if(-9!==b)return 1}else
if(5===b)return 2;return 0}var
fv=[0,[0,an(fu),ft],fs];function
fw(a){var
c=a-9|0;if(10<c>>>0)var
b=ct===c?1:0;else{var
d=c-6|0;if(2<d>>>0)var
b=1;else
switch(d){case
0:var
b=0;break;case
1:var
b=1;break;default:return 2}}return b?0:1}var
fy=[0,[0,D(fx),fw],fv];function
fz(a){var
b=a-9|0;if(7<b>>>0){if(ct!==b)return 1}else
if(5===b)return 2;return 0}var
fB=[0,[0,D(fA),fz],fy],fC=[0,[0,aw,function(a){var
b=-1!==a?1:0,c=b?1:b;return c}],fB],fD=[0,[0,av,function(a){var
b=-1!==a?1:0;if(b){if(2!==a)return 1;var
c=2}else
var
c=b;return c}],fC];bd(fE,function(a){return bQ(fD,a)});var
fF=0;function
fG(a){var
b=a+1|0;if(!(15<b>>>0))switch(b){case
14:return 2;case
0:case
10:case
12:case
15:return 0}return 1}var
fI=[0,[0,D(fH),fG],fF],fJ=[0,[0,aw,function(a){var
b=-1!==a?1:0,c=b?1:b;return c}],fI],fK=[0,[0,av,function(a){var
b=-1!==a?1:0;if(b){if(2!==a)return 1;var
c=2}else
var
c=b;return c}],fJ];bd(fL,function(a){function
b(a){var
b=a[1],c=u(b),d=a[2],e=v===c?b[1]:r===c?k(t[2],b):b;return[0,e,d]}var
c=l(o[17][12],b,fK);return function(a){return bF(c,a)}});function
fN(a,b,c){return be(fM,a,b,c)}l(cS[3],fO,fN);var
aS=D(fP),aT=D(fQ),aU=D(fR),fT=D(fS),fV=D(fU),fX=D(fW),bj=m(aG[2],0,f1,ao[1]),bk=m(aG[2],0,f2,U[24][1]);function
f3(a){return l(ao[22],a,bj[1])}function
ga(a){var
b=a[2],c=a[1],d=l(C[45],c,b[1]),e=l(C[45],c,b[2]),f=l(C[45],c,b[5]),g=l(C[45],c,b[6]),h=l(C[45],c,b[7]),i=l(C[45],c,b[8]),j=l(C[45],c,b[9]),k=l(Y[1],c,b[3]),m=l(Y[1],c,b[4]),n=l(Y[1],c,b[10]),o=l(Y[1],c,b[11]);if(d===b[1])if(e===b[2])if(f===b[5])if(g===b[6])if(h===b[7])if(i===b[8])if(j===b[9])if(k===b[3])if(m===b[4])if(n===b[10])if(o===b[11])return b;return[0,d,e,k,m,f,g,h,i,j,n,o]}function
b4(a){var
b=a[2],c=a[1];bj[1]=m(ao[4],b[1],b,bj[1]);bk[1]=m(U[24][4],c[1],b,bk[1]);return 0}var
aV=k(aH[1],gb),gc=aV[8],gd=aV[7];function
ge(a){return[0,a]}function
gf(a,b){var
c=1===a?1:0;return c?b4(b):c}var
gg=k(aH[4],[0,aV[1],b4,aV[3],gf,ge,ga,gd,gc]);function
gh(a,b,c,d){var
e=k(s[ai],d);if(9===e[0])if(1===e[2].length-1){var
f=u(Z),j=v===f?Z[1]:r===f?k(t[2],Z):Z;if(l(s[aA],e[1],j)){var
m=k(X[38],0)[6],n=[0,k(aE[48],m),[0,b,b,c]];return k(s[ac],n)}}bS(k(am[2],0),a,b,d);var
h=[0,[0,[0,[0,b,[0,d]]],0],[0,[0,b,[0,d]]]];try{var
i=l(ae[13],h,c),g=i}catch(f){f=x(f);if(f!==O)throw f;var
g=k(q[6],gi)}return g[2]}function
gj(a,b,c,d,e,f,g,h,i,j){var
an=g[2],ao=g[1],D=b[2],ap=b[1],aE=l(o[18],aL,gk);k(X[11],aE);var
B=k(am[2],0),z=[0,ap],aA=W(af[2],0,0,B,z[1],D),Q=k(s[ai],aA);if(9===Q[0]){var
w=Q[2],U=w.length-1-8|0;if(2<U>>>0)var
A=0;else{var
R=Q[1];switch(U){case
0:var
V=w[1],Y=w[2],Z=w[3],_=w[4],$=w[5],aa=w[6],ab=w[7],ad=w[8],ae=u(aU),aB=v===ae?aU[1]:r===ae?k(t[2],aU):aU;if(l(al[11],aB,R))var
x=[0,fZ,V,Y,Z,_,$,0,0,aa,ab,ad,y(z,fX,[0,V,Y,Z,_,$,aa,ab,ad,D])],A=1;else
var
A=0;break;case
1:var
A=0;break;default:var
F=w[1],G=w[2],H=w[3],I=w[4],J=w[5],K=w[6],M=w[7],N=w[8],O=w[9],P=w[10],ag=u(aS),aC=v===ag?aS[1]:r===ag?k(t[2],aS):aS;if(l(al[11],aC,R))var
x=[0,0,F,G,H,I,J,[0,K],[0,M],N,O,P,y(z,fT,[0,F,G,H,I,J,K,M,N,O,P,D])],A=1;else{var
ak=u(aT),aD=v===ak?aT[1]:r===ak?k(t[2],aT):aT;if(l(al[11],aD,R))var
x=[0,f0,F,G,H,I,J,[0,K],[0,M],N,O,P,y(z,fV,[0,F,G,H,I,J,K,M,N,O,P,D])],A=1;else
var
A=0}}}}else
var
A=0;if(!A)var
x=k(q[6],fY);var
S=x[11],aq=x[8],ar=x[6],as=x[5],T=x[2],at=bT(B,z,T,as,ar,aq,S,c),au=at[2],av=at[1];b0(a,[0,z[1],x[12]],[0,[0,av,au]],d,e,gl,h,i,j);var
aw=bX(B,z,h),aF=bY(B,z,i),aG=bZ(B,z,j),aH=gh(z,T,x[10],S),aI=[0,aF,[0,aG,[0,bU(d),0]]],aJ=[0,av,[0,au,[0,aH,[0,D,[0,aw[2],aI]]]]],az=[r,function(a){var
b=k(n[6][4],gm);return m(n[cu],[0,fi],n[5][6],b)}],ax=bK(B,z[1],9,az,aJ),E=ax[2],C=ax[1],aK=L(C,3)[4],aM=L(C,4)[5],aN=L(C,5)[6],aO=L(C,6)[7];if(f)var
aP=[0,f[1]],aQ=[0,L(C,8)[9],aP],ay=k(s[ac],aQ);else
var
ay=L(C,7)[8];var
aR=k(n[1][7],a),aV=ah(l(p[16],aR,gn),E,aK),aW=k(n[1][7],a),aX=ah(l(p[16],aW,go),E,aM),aY=k(n[1][7],a),aZ=ah(l(p[16],aY,gp),E,aN),a0=k(n[1][7],a),a1=ah(l(p[16],a0,gq),E,aO),a2=k(n[1][7],a),a3=ah(l(p[16],a2,gr),E,ay),a4=bV(B,ap,d,x[1],[0,x[3],x[4],as,ar,aq],e),a5=ao?k(aj[3],ao[1]):gt,a6=an?k(aj[3],an[1]):gs,a7=k(gg,[0,T,S,a4,aw[1],aV,aX,aZ,a1,a3,a5,a6]);l(bz[6],a,a7);return 0}function
gu(a){var
c=[0,0],d=[0,0],e=[0,0],f=[0,0],g=[0,0],h=[0,0],i=[0,0],j=[0,0],k=[0,0];function
m(a){if(0===a[0]){var
b=a[1];switch(b[0]){case
0:return z(gv,c,b1(b[1]));case
1:return z(gw,e,b[1]);case
2:return z(gx,f,b[1]);case
3:return z(gy,g,b[1]);case
4:var
l=V(b[2]);return z(gz,d,[0,V(b[1]),l]);case
5:return z(gA,j,[0,b[1],b[2]]);case
6:return z(gB,i,b[1]);default:return z(gC,k,b[1])}}return z(gD,h,V(a[1]))}l(o[17][11],m,a);var
b=c[1],n=b?b[1]:b;return[0,n,d[1],h[1],e[1],f[1],g[1],j[1],i[1],k[1]]}function
gE(a){var
b=k(A,a[2]),c=aa(a[3]),d=aa(a[4]),e=k(A,a[5]),f=k(A,a[7]),g=k(A,a[6]),h=k(A,a[8]),i=k(A,a[9]),j=aa([28,[0,gF,a[10]]]);return[0,b,[0,c,[0,d,[0,e,[0,f,[0,g,[0,h,[0,i,[0,j,[0,aa([28,[0,gG,a[11]]]),0]]]]]]]]]]}var
E=[0,c6,c5,c7,e4,b0,c$,bi,fe,gu,gj,bk,function(E,b,c,d){var
a=[0,function(a){var
g=k(bw[49][4],a),f=k(w[62][5],a);try{var
j=[0,g],h=b2(c,d),n=l(o[18],aL,f4);k(X[11],n);if(h){var
i=W(af[2],0,0,f,g,h[1]),p=function(a){var
c=W(af[2],0,0,f,g,a),b=1-W(by[82],0,f,g,i,c);if(b){var
d=k(e[1],f5);return l(q[7],f6,d)}return b};l(o[17][11],p,h[2]);try{var
D=f3(i),m=D}catch(f){f=x(f);if(f!==O)throw f;var
r=k(e[1],f7),s=k(J[5],i),t=k(e[1],f8),u=k(e[17],0),v=k(e[1],f9),y=l(e[14],v,u),z=l(e[14],y,t),B=l(e[14],z,s),C=l(e[14],B,r),m=l(q[7],f_,C)}var
F=k(A,b3(f,j,m[1],h)),G=k(A,bW(f,j,b)),H=gE(m),K=bH(E,l(o[18],H,[0,G,[0,F,0]])),L=k(w[60][1],j[1]),M=l(w[15],L,K);return M}throw[0,I,f$]}catch(f){f=x(f);if(k(w[66][10],f))return l(w[18],0,f);throw f}}];return k(w[62][10],a)}];bp(384,E,"Newring_plugin.Newring");k(az[12],gH);try{var
lJ=0,lL=[0,function(a){if(a)if(!a[2]){var
b=a[1],c=k(f[6],ak[4]),d=l(j[2][7],c,b);return function(a){var
b=k(E[2],d);return k(w[66][1],b)}}return k(p[2],lK)},lJ],lN=[0,function(a){if(a){var
b=a[2];if(b)if(!b[2]){var
c=a[1],d=k(f[6],ak[4]),e=l(j[2][7],d,c),g=b[1],i=k(f[6],h[4]),m=l(j[2][7],i,g);return function(a){var
b=l(E[1],e,m);return k(w[66][1],b)}}}return k(p[2],lM)},lL],lO=k(o[19][12],lN);m(au[9],0,[0,K,lP],lO);var
lQ=function(a){var
i=k(n[1][6],lR),b=ak[4],e=0,f=0;if(0===b[0]){var
j=[0,[0,lS,[0,[1,g[4],[5,[0,b[1]]],i],f]],e],o=k(n[1][6],lT),c=h[4],m=0;if(0===c[0]){var
p=[0,lU,[0,[1,g[4],[5,[0,c[1]]],o],m]],q=k(n[1][6],lV),d=ak[4];if(0===d[0])return l(aW[4],[0,K,lX],[0,[0,lW,[0,[1,g[4],[5,[0,d[1]]],q],p]],j]);throw[0,I,lY]}throw[0,I,lZ]}throw[0,I,l0]};l(az[19],lQ,K)}catch(f){f=x(f);if(!k(q[22],f))throw f;var
gI=l(q[18],0,f),gL=l(p[16],gK,gJ),gN=l(p[16],gM,gL),gO=k(e[1],gN),gP=l(e[13],gO,gI);k(N[13],gP)}try{var
lv=0,lx=[0,function(a){if(a){var
b=a[2];if(b)if(!b[2]){var
c=a[1],d=k(f[6],h[8]),e=l(j[2][7],d,c),g=b[1],i=k(f[17],h[18]),m=k(f[6],i),n=l(j[2][7],m,g);return function(a){var
b=l(E[3],e,n);return k(w[66][1],b)}}}return k(p[2],lw)},lv],ly=k(o[19][12],lx);m(au[9],0,[0,K,lz],ly);var
lA=function(a){var
e=k(n[1][6],lC),b=h[18],d=0;if(0===b[0]){var
f=[0,lD,[0,[1,g[4],[0,[5,[0,b[1]]]],e],lB]],i=k(n[1][6],lE),c=h[8];if(0===c[0])return l(aW[4],[0,K,lG],[0,[0,lF,[0,[1,g[4],[5,[0,c[1]]],i],f]],d]);throw[0,I,lH]}throw[0,I,lI]};l(az[19],lA,K)}catch(f){f=x(f);if(!k(q[22],f))throw f;var
gQ=l(q[18],0,f),gT=l(p[16],gS,gR),gV=l(p[16],gU,gT),gW=k(e[1],gV),gX=l(e[13],gW,gQ);k(N[13],gX)}function
aX(a){switch(a[0]){case
0:var
b=a[1];if(typeof
b==="number")return k(e[1],gY);else{if(0===b[0]){var
f=l(e[47],Q[22],b[1]),g=k(e[1],gZ);return l(e[14],g,f)}var
h=l(e[47],Q[22],b[1]),i=k(e[1],g0);return l(e[14],i,h)}case
1:var
c=a[1];if(0===c[0]){var
j=k(e[1],g1),n=k(ab[18],c[1]),o=k(e[1],g2),p=k(e[17],0),q=k(e[1],g3),r=l(e[14],q,p),s=l(e[14],r,o),t=l(e[14],s,n);return l(e[14],t,j)}var
u=k(e[1],g4),v=m(e[54],e[17],U[41],c[1]),w=k(e[1],g5),x=k(e[17],0),y=k(e[1],g6),z=l(e[14],y,x),A=l(e[14],z,w),B=l(e[14],A,v);return l(e[14],B,u);case
2:var
C=k(e[1],g7),D=k(ab[18],a[1]),E=k(e[1],g8),F=k(e[17],0),G=k(e[1],g9),H=l(e[14],G,F),I=l(e[14],H,E),J=l(e[14],I,D);return l(e[14],J,C);case
3:var
K=k(e[1],g_),L=k(ab[18],a[1]),M=k(e[1],g$),N=k(e[17],0),O=k(e[1],ha),P=l(e[14],O,N),R=l(e[14],P,M),S=l(e[14],R,L);return l(e[14],S,K);case
4:var
T=l(e[47],Q[22],a[2]),V=l(e[47],Q[22],a[1]),W=k(e[1],hb),X=l(e[14],W,V);return l(e[14],X,T);case
5:var
d=a[1];if(0===d[0]){var
Y=k(e[1],hc),Z=k(ab[18],d[1]),_=k(e[1],hd),$=k(e[17],0),aa=l(e[47],Q[22],a[2]),ac=k(e[1],he),ad=l(e[14],ac,aa),ae=l(e[14],ad,$),af=l(e[14],ae,_),ag=l(e[14],af,Z);return l(e[14],ag,Y)}var
ah=k(e[1],hf),ai=m(e[54],e[17],U[41],d[1]),aj=k(e[1],hg),ak=k(e[17],0),al=l(e[47],Q[22],a[2]),am=k(e[1],hh),an=l(e[14],am,al),ao=l(e[14],an,ak),ap=l(e[14],ao,aj),aq=l(e[14],ap,ai);return l(e[14],aq,ah);case
6:var
ar=l(e[47],Q[22],a[1]),as=k(e[1],hi);return l(e[14],as,ar);default:var
at=l(e[47],Q[22],a[1]),au=k(e[1],hj);return l(e[14],au,at)}}var
bl=k(f[3],hk),hl=k(f[4],bl),aY=m(d[13],d[9],hm,hl),hn=0,ho=0;function
hp(a,b,c){return[0,[0,a]]}var
hq=[6,d[15][1]],hs=[0,[0,[0,[0,0,[0,k(i[15],hr)]],hq],hp],ho];function
ht(a,b){return hu}var
hw=[0,[0,[0,0,[0,k(i[15],hv)]],ht],hs];function
hx(a,b,c){return[0,[1,a]]}var
hy=[6,d[15][1]],hA=[0,[0,[0,[0,0,[0,k(i[15],hz)]],hy],hx],hw];function
hB(a,b,c,d,e){return[1,[0,b]]}var
hD=[0,k(i[15],hC)],hE=[6,d[17][18]],hG=[0,k(i[15],hF)],hI=[0,[0,[0,[0,[0,[0,0,[0,k(i[15],hH)]],hG],hE],hD],hB],hA];function
hJ(a,b,c,d,e){return[1,[1,b]]}var
hL=[0,k(i[15],hK)],hM=[1,[6,d[15][7]]],hO=[0,k(i[15],hN)],hQ=[0,[0,[0,[0,[0,[0,0,[0,k(i[15],hP)]],hO],hM],hL],hJ],hI];function
hR(a,b,c,d,e){return[2,b]}var
hT=[0,k(i[15],hS)],hU=[6,d[17][18]],hW=[0,k(i[15],hV)],hY=[0,[0,[0,[0,[0,[0,0,[0,k(i[15],hX)]],hW],hU],hT],hR],hQ];function
hZ(a,b,c,d,e){return[3,b]}var
h1=[0,k(i[15],h0)],h2=[6,d[17][18]],h4=[0,k(i[15],h3)],h6=[0,[0,[0,[0,[0,[0,0,[0,k(i[15],h5)]],h4],h2],h1],hZ],hY];function
h7(a,b,c,d){return[4,b,a]}var
h8=[6,d[15][1]],h9=[6,d[15][1]],h$=[0,[0,[0,[0,[0,0,[0,k(i[15],h_)]],h9],h8],h7],h6];function
ia(a,b,c){return[6,a]}var
ib=[6,d[15][1]],id=[0,[0,[0,[0,0,[0,k(i[15],ic)]],ib],ia],h$];function
ie(a,b,c,d,e,f){return[5,[1,b],d]}var
ih=[0,k(i[15],ig)],ii=[1,[6,d[15][7]]],ik=[0,k(i[15],ij)],il=[6,d[15][1]],io=[0,[0,[0,[0,[0,[0,[0,0,[0,k(i[15],im)]],il],ik],ii],ih],ie],id];function
ip(a,b,c,d,e,f){return[5,[0,b],d]}var
ir=[0,k(i[15],iq)],is=[6,d[17][18]],iu=[0,k(i[15],it)],iv=[6,d[15][1]],ix=[0,[0,[0,[0,[0,[0,[0,0,[0,k(i[15],iw)]],iv],iu],is],ir],ip],io];function
iy(a,b,c){return[7,a]}var
iz=[6,d[15][1]],iB=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,k(i[15],iA)]],iz],iy],ix]],hn]];m(d[23],aY,0,iB);function
iC(a,b,c,d){var
f=k(e[1],iD);return m(q[3],0,0,f)}function
iE(a,b,c,d){var
f=k(e[1],iF);return m(q[3],0,0,f)}function
iG(a,b,c){return aX}R(ab[1],bl,iG,iE,iC);function
b7(a){var
b=m(e[54],e[44],aX,a);return k(e[61],b)}var
ar=k(f[3],iH),iI=k(f[4],ar),b8=m(d[13],d[9],iJ,iI),iK=0,iL=0;function
iM(a,b,c,d){return b}var
iO=[0,k(i[15],iN)],iQ=[2,[6,aY],[0,k(i[15],iP)]],iS=[0,0,[0,[0,0,0,[0,[0,[0,[0,[0,0,[0,k(i[15],iR)]],iQ],iO],iM],iL]],iK]];m(d[23],b8,0,iS);function
iT(a,b,c,d){var
f=k(e[1],iU);return m(q[3],0,0,f)}function
iV(a,b,c,d){var
f=k(e[1],iW);return m(q[3],0,0,f)}function
iX(a,b,c){return b7}R(ab[1],ar,iX,iV,iT);try{var
le=0,lj=[0,[0,0,function(a){return a?k(p[2],lf):function(a){var
b=k(e[26],lg);k(N[12],b);var
c=E[7][1];function
d(a,b){var
c=k(J[5],b[2]),d=k(e[1],lh),f=k(e[17],0),g=k(J[5],b[1]),h=k(e[1],li),i=k(e[17],0),j=k(U[20],a),m=k(Q[12],j),n=l(e[14],m,i),o=l(e[14],n,h),p=l(e[14],o,g),q=l(e[14],p,f),r=l(e[14],q,d),s=l(e[14],r,c),t=l(e[30],2,s);return k(N[12],t)}return l(U[24][10],d,c)}}],le],ll=[0,[0,0,function(a){if(a){var
b=a[2];if(b){var
c=b[2];if(c)if(!c[2]){var
e=a[1],g=k(f[4],h[4]),i=l(f[8],g,e),j=b[1],m=k(f[4],h[8]),n=l(f[8],m,j),o=c[1],q=k(f[18],ar),r=k(f[4],q),d=l(f[8],r,o);return function(a){var
c=d?d[1]:d,b=k(E[4],c),e=b[8],f=b[7],g=b[6],h=[0,b[4],b[5]],j=b[3],l=b[1],m=b[2],o=k(E[6],n);return l2(E[5],i,o,m,l,j,h,g,f,e)}}}}return k(p[2],lk)}],lj],lm=function(a,b){return m(b5[1],b[1],[0,ln,a],b[2])};l(aq[80],lm,ll);var
lo=0,lq=[0,function(a){return a?k(p[2],lp):function(a){return ap[5]}},lo],ls=[0,function(a){if(a){var
b=a[2];if(b){var
c=b[2];if(c)if(!c[2])return function(a){return ap[6]}}}return k(p[2],lr)},lq],lt=function(a,b){return l(ap[3],[0,lu,a],b)};l(aq[80],lt,ls)}catch(f){f=x(f);if(!k(q[22],f))throw f;var
iY=l(q[18],0,f),i1=l(p[16],i0,iZ),i3=l(p[16],i2,i1),i4=k(e[1],i3),i5=l(e[13],i4,iY);k(N[13],i5)}var
i7=[5,[6,k(d[12],ar)]],i8=k(f[18],ar),i9=k(f[4],i8),i_=[0,[1,g[4],i9,i7],0],i$=[6,k(d[12],h[8])],ja=k(f[4],h[8]),jc=[0,jb,[0,[1,g[4],ja,i$],i_]],jd=[6,k(d[12],h[4])],je=k(f[4],h[4]),jh=[0,[0,jg,[0,jf,[0,[1,g[4],je,jd],jc]]],i6];function
ji(a,b){return m(b6[1],[0,jj,a],0,b)}l(aq[80],ji,jh);try{var
k0=0,k2=[0,function(a){if(a){var
b=a[2];if(b){var
c=b[2];if(c)if(!c[2]){var
d=a[1],e=k(f[6],h[14]),g=l(j[2][7],e,d),i=b[1],m=k(f[17],h[8]),n=k(f[6],m),q=l(j[2][7],n,i),r=c[1],s=k(f[17],h[8]),t=k(f[6],s),u=l(j[2][7],t,r);return function(a){var
b=k(o[17][92],u);return R(E[8],g,q,b[2],b[1])}}}}return k(p[2],k1)},k0],k3=k(o[19][12],k2);m(au[9],0,[0,K,k4],k3);var
k5=function(a){var
i=k(n[1][6],k6),b=h[8],e=0,f=0;if(0===b[0]){var
j=[0,k7,[0,[1,g[4],[0,[5,[0,b[1]]]],i],f]],m=k(n[1][6],k8),c=h[8];if(0===c[0]){var
o=[0,k9,[0,[1,g[4],[2,[5,[0,c[1]]]],m],j]],p=k(n[1][6],k_),d=h[14],q=0;if(0===d[0])return l(aW[4],[0,K,la],[0,[0,k$,[0,[1,g[4],[6,[0,d[1]],q],p],o]],e]);throw[0,I,lb]}throw[0,I,lc]}throw[0,I,ld]};l(az[19],k5,K)}catch(f){f=x(f);if(!k(q[22],f))throw f;var
jk=l(q[18],0,f),jn=l(p[16],jm,jl),jp=l(p[16],jo,jn),jq=k(e[1],jp),jr=l(e[13],jq,jk);k(N[13],jr)}function
bm(a){if(0===a[0])return aX(a[1]);var
b=l(e[47],Q[22],a[1]),c=k(e[1],js);return l(e[14],c,b)}var
bn=k(f[3],jt),ju=k(f[4],bn),bo=m(d[13],d[9],jv,ju),jw=0,jx=0,jy=[0,[0,[0,0,[6,aY]],function(a,b){return[0,a]}],jx];function
jz(a,b,c){return[1,a]}var
jA=[6,d[15][1]],jC=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,k(i[15],jB)]],jA],jz],jy]],jw]];m(d[23],bo,0,jC);function
jD(a,b,c,d){var
f=k(e[1],jE);return m(q[3],0,0,f)}function
jF(a,b,c,d){var
f=k(e[1],jG);return m(q[3],0,0,f)}function
jH(a,b,c){return bm}R(ab[1],bn,jH,jF,jD);function
b9(a){var
b=m(e[54],e[44],bm,a);return k(e[61],b)}var
as=k(f[3],jI),jJ=k(f[4],as),b_=m(d[13],d[9],jK,jJ),jL=0,jM=0;function
jN(a,b,c,d){return b}var
jP=[0,k(i[15],jO)],jR=[2,[6,bo],[0,k(i[15],jQ)]],jT=[0,0,[0,[0,0,0,[0,[0,[0,[0,[0,0,[0,k(i[15],jS)]],jR],jP],jN],jM]],jL]];m(d[23],b_,0,jT);function
jU(a,b,c,d){var
f=k(e[1],jV);return m(q[3],0,0,f)}function
jW(a,b,c,d){var
f=k(e[1],jX);return m(q[3],0,0,f)}function
jY(a,b,c){return b9}R(ab[1],as,jY,jW,jU);try{var
kJ=0,kO=[0,[0,0,function(a){return a?k(p[2],kK):function(a){var
b=k(e[26],kL);k(N[12],b);var
c=E[11][1];function
d(a,b){var
c=k(J[5],b[2]),d=k(e[1],kM),f=k(e[17],0),g=k(J[5],b[1]),h=k(e[1],kN),i=k(e[17],0),j=k(U[20],a),m=k(Q[12],j),n=l(e[14],m,i),o=l(e[14],n,h),p=l(e[14],o,g),q=l(e[14],p,f),r=l(e[14],q,d),s=l(e[14],r,c),t=l(e[30],2,s);return k(N[12],t)}return l(U[24][10],d,c)}}],kJ],kQ=[0,[0,0,function(a){if(a){var
b=a[2];if(b){var
c=b[2];if(c)if(!c[2]){var
e=a[1],g=k(f[4],h[4]),i=l(f[8],g,e),j=b[1],m=k(f[4],h[8]),n=l(f[8],m,j),o=c[1],q=k(f[18],as),r=k(f[4],q),d=l(f[8],r,o);return function(a){var
c=d?d[1]:d,b=k(E[9],c),e=b[9],f=b[8],g=b[7],h=[0,b[5],b[6]],j=b[3],l=b[4],m=b[1],o=b[2],p=k(E[6],n);return l3(E[10],i,p,o,m,l,j,h,g,f,e)}}}}return k(p[2],kP)}],kO],kR=function(a,b){return m(b5[1],b[1],[0,kS,a],b[2])};l(aq[80],kR,kQ);var
kT=0,kV=[0,function(a){return a?k(p[2],kU):function(a){return ap[5]}},kT],kX=[0,function(a){if(a){var
b=a[2];if(b){var
c=b[2];if(c)if(!c[2])return function(a){return ap[6]}}}return k(p[2],kW)},kV],kY=function(a,b){return l(ap[3],[0,kZ,a],b)};l(aq[80],kY,kX)}catch(f){f=x(f);if(!k(q[22],f))throw f;var
jZ=l(q[18],0,f),j2=l(p[16],j1,j0),j4=l(p[16],j3,j2),j5=k(e[1],j4),j6=l(e[13],j5,jZ);k(N[13],j6)}var
j8=[5,[6,k(d[12],as)]],j9=k(f[18],as),j_=k(f[4],j9),j$=[0,[1,g[4],j_,j8],0],ka=[6,k(d[12],h[8])],kb=k(f[4],h[8]),kd=[0,kc,[0,[1,g[4],kb,ka],j$]],ke=[6,k(d[12],h[4])],kf=k(f[4],h[4]),ki=[0,[0,kh,[0,kg,[0,[1,g[4],kf,ke],kd]]],j7];function
kj(a,b){return m(b6[1],[0,kk,a],0,b)}l(aq[80],kj,ki);try{var
kt=0,kv=[0,function(a){if(a){var
b=a[2];if(b){var
c=b[2];if(c)if(!c[2]){var
d=a[1],e=k(f[6],h[14]),g=l(j[2][7],e,d),i=b[1],m=k(f[17],h[8]),n=k(f[6],m),q=l(j[2][7],n,i),r=c[1],s=k(f[17],h[8]),t=k(f[6],s),u=l(j[2][7],t,r);return function(a){var
b=k(o[17][92],u);return R(E[12],g,q,b[2],b[1])}}}}return k(p[2],ku)},kt],kw=k(o[19][12],kv);m(au[9],0,[0,K,kx],kw);var
ky=function(a){var
i=k(n[1][6],kz),b=h[8],e=0,f=0;if(0===b[0]){var
j=[0,kA,[0,[1,g[4],[0,[5,[0,b[1]]]],i],f]],m=k(n[1][6],kB),c=h[8];if(0===c[0]){var
o=[0,kC,[0,[1,g[4],[2,[5,[0,c[1]]]],m],j]],p=k(n[1][6],kD),d=h[14];if(0===d[0])return l(aW[4],[0,K,kF],[0,[0,kE,[0,[1,g[4],[5,[0,d[1]]],p],o]],e]);throw[0,I,kG]}throw[0,I,kH]}throw[0,I,kI]};l(az[19],ky,K)}catch(f){f=x(f);if(!k(q[22],f))throw f;var
kl=l(q[18],0,f),ko=l(p[16],kn,km),kq=l(p[16],kp,ko),kr=k(e[1],kq),ks=l(e[13],kr,kl);k(N[13],ks)}var
b$=[0,K,aX,bl,aY,b7,ar,b8,bm,bn,bo,b9,as,b_];bp(395,b$,"Newring_plugin.G_newring");bp(396,[0,E,b$],"Newring_plugin");return});
