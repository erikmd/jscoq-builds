(function(dP){"use strict";var
bJ=617,bE=145,bF="eqTLR",ay="Rmult",K=140,aC="R0",aD="Ropp",Z="Rle",aB="Rminus",bD="fourier_plugin",Q=124,bC="eqTRL",Y="Rlt",e=246,bI="Fourier",X="fourier",aa="Rge",bB="plugins/fourier/fourier.ml",aA=113,ax="plugins/fourier/fourierR.ml",$="Rgt",aw="Rplus",_=248,av="Rinv",bA="R",bH="Reals",az="R1",bG="Rdiv",o=dP.jsoo_runtime,j=o.caml_check_bound,bz=o.caml_div,W=o.caml_fresh_oo_id,s=o.caml_mul,b=o.caml_new_string,ak=o.caml_register_global,h=o.caml_string_notequal,A=o.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):o.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):o.caml_call_gen(a,[b,c])}function
V(a,b,c,d){return a.length==3?a(b,c,d):o.caml_call_gen(a,[b,c,d])}function
dO(a,b,c,d,e){return a.length==4?a(b,c,d,e):o.caml_call_gen(a,[b,c,d,e])}var
m=o.caml_get_global_data(),B=[0,0,1],aF=[0,1,1],aj=b(bD),R=m.Assert_failure,l=m.List,z=m.Pervasives,p=m.Term,f=m.Tactics,g=m.Tacticals,L=m.Proofview,I=m.Coqlib,M=m.Names,ac=m.Errors,aO=m.Equality,ar=m.Array,bv=m.Tacenv,bw=m.Pp,bx=m.Mltop,bT=[0,b(bB),176,9],bR=[0,b(bB),147,9],bQ=b("empty ineq"),bM=b("/"),bS=b("Fourier.Contradiction"),b1=b("not_of_constant"),b3=b(bG),b4=b(av),b5=b(aB),b6=b(ay),b7=b(aD),b8=b(aw),b9=b(aC),b_=b(az),ca=b(bG),cb=b(av),cc=b(aB),cd=b(ay),ce=b(aD),cf=b(aw),cg=b(aC),ch=b(az),dn=[0,b("Coq"),[0,b(X),[0,b(bI),0]]],dp=b("new_hyp_for_fourier"),du=b(aa),dv=b($),dw=b(Z),dx=b(Y),dq=b("No inequalities"),dr=b("fourier failed"),dt=[0,b(ax),bJ,11],ds=[0,b(ax),bJ,30],df=b(aa),dg=b($),dh=b(Z),di=b(Y),dj=b(bF),dk=b(bC),dl=[0,b(ax),426,6],dd=b("Rlt_not_le_frac_opp"),dc=b("Rnot_le_le"),db=b("Rnot_lt_lt"),da=b("Rfourier_le_le"),c$=b("Rfourier_le_lt"),c_=b("Rfourier_lt_le"),c9=b("Rfourier_lt_lt"),c8=b("Rfourier_le"),c7=b("Rfourier_lt"),c6=b("Rfourier_not_lt_ge"),c5=b("Rfourier_not_le_gt"),c4=b("Rfourier_not_gt_le"),c3=b("Rfourier_not_ge_lt"),c2=b("Rfourier_eqRL_to_le"),c1=b("Rfourier_eqLR_to_le"),c0=b("Rfourier_ge_to_le"),cZ=b("Rfourier_gt_to_lt"),cY=b("Rle_not_lt"),cX=b("Rnot_lt0"),cW=b("Rle_mult_inv_pos"),cV=b("Rle_zero_1"),cU=b("Rle_zero_zero"),cT=b("Rlt_mult_inv_pos"),cS=b("Rle_zero_pos_plus1"),cR=b("Rlt_zero_pos_plus1"),cQ=b("Rlt_zero_1"),cN=b("Rinv_1"),cO=[0,b(bH),[0,b("RIneq"),0]],cM=b(az),cL=b(aC),cK=b(av),cJ=b(aD),cI=b(aw),cH=b(ay),cG=b(aB),cE=b(bA),cC=b(aa),cB=b(Z),cz=b($),cy=b(Y),ck=b(aa),cl=b($),cm=b(Z),cn=b(Y),co=b(Y),cp=b(Z),cq=b($),cr=b(aa),cs=b(bA),ct=b(bC),cu=b(bF),bZ=b("Coq.Reals.Rdefinitions"),b0=b("constant_not_of_R"),b2=b("FourierR.NoRational"),b$=b("FourierR.NoLinear"),cj=b("FourierR.NoIneq"),cv=b(bI),cx=[0,b(bH),[0,b("Rdefinitions"),0]],cP=[0,b(X),[0,b("Fourier_util"),0]],dm=b("FourierR.GoalDone"),dC=b(X),dD=b("fourierz"),dA=b(bD),dN=b(X),dF=b(": "),dG=b(X),dI=b("Exception in tactic extend "),bK=m.Failure,bX=m.Contradiction,bY=m.CamlinternalLazy,bW=m.Globnames,bU=m.Not_found,bV=m.Hashtbl,dy=m.Loc,dz=m.Feedback;function
bL(b){a(z[29],b[1]);a(z[27],bM);return a(z[29],b[2])}function
aE(d,c){var
b=d,a=c;for(;;){if(0===a)return b;var
e=o.caml_mod(b,a),b=a,a=e;continue}}function
H(b){var
a=0<=b[2]?b:[0,-b[1]|0,-b[2]|0];if(0===a[1])return B;var
c=aE(a[1],a[2]),d=0<=c?c:-c|0,e=bz(a[2],d);return[0,bz(a[1],d),e]}function
aG(a){return H([0,-a[1]|0,a[2]])}function
al(b,a){return H([0,s(b[1],a[2])+s(a[1],b[2])|0,s(b[2],a[2])])}function
bN(b,a){return H([0,s(b[1],a[2])-s(a[1],b[2])|0,s(b[2],a[2])])}function
am(b,a){return H([0,s(b[1],a[1]),s(b[2],a[2])])}function
bO(a){return H([0,a[2],a[1]])}function
bP(b,a){return H([0,s(b[1],a[2]),s(b[2],a[1])])}function
ab(b,a){return s(b[1],a[2])<s(a[1],b[2])?1:0}function
aH(b,a){return s(b[1],a[2])<=s(a[1],b[2])?1:0}function
C(b,a){a[1]=[0,b,a[1]];return 0}function
aI(a){var
b=[0,0],d=[0,0],e=[0,0];function
f(a){var
c=a[1];if(c){var
f=c[1];return ab(f,B)?C(a,d):ab(B,f)?C(a,b):C(a,e)}throw[0,bK,bQ]}c(l[11],f,a);return[0,d[1],[0,e[1],[0,b[1],0]]]}function
aJ(d){var
b=[0,0],h=a(l[1],d);function
e(e){var
a=[0,0],f=(h-b[1]|0)-1|0,i=1;if(!(f<1)){var
d=i;for(;;){C(B,a);var
l=d+1|0;if(f!==d){var
d=l;continue}break}}C(aF,a);var
g=b[1],j=1;if(!(g<1)){var
c=j;for(;;){C(B,a);var
k=c+1|0;if(g!==c){var
c=k;continue}break}}b[1]=b[1]+1|0;return[0,e[1],a[1],e[2]]}return c(l[13],e,d)}function
aK(b,a){var
c=b[3],d=c||a[3],e=V(l[19],al,b[2],a[2]);return[0,V(l[19],al,b[1],a[1]),e,d]}function
an(b,a){var
d=a[3],e=a[2];function
f(a){return am(b,a)}var
g=c(l[13],f,e),h=a[1];function
i(a){return am(b,a)}return[0,c(l[13],i,h),g,d]}function
ao(b){var
c=b[3],d=b[2];return[0,a(l[4],b[1]),d,c]}function
ap(b){return a(l[3],b[1])}function
aL(b,d){var
a=[0,0];function
e(b){function
e(c){var
d=aG(ap(b)),e=ap(c),f=an(d,c);return C(ao(aK(an(e,b),f)),a)}return c(l[11],e,d)}c(l[11],e,b);return a[1]}function
aM(e){var
a=aI(e);if(a){var
b=a[2];if(b){var
d=b[2];if(d)if(!d[2]){var
f=aL(a[1],d[1]),g=c(l[13],ao,b[1]);return c(z[22],g,f)}}}throw[0,R,bR]}function
aN(c){var
i=a(l[3],c)[1],j=a(l[1],i),d=aJ(c),e=j-1|0,k=1;if(e<1)var
f=d;else{var
b=k,g=d;for(;;){var
h=aM(g),m=b+1|0;if(e!==b){var
b=m,g=h;continue}var
f=h;break}}return f}var
aq=[_,bS,W(0)],i=[0,bL,aE,B,aF,H,aG,al,bN,am,bO,bP,ab,aH,C,aI,aJ,aK,an,ao,ap,aL,aM,aN,aq,function(a){var
b=aN(a);function
d(a){var
b=a[1];if(b)if(!b[2]){var
c=a[3],d=b[1],f=ab(d,B),g=f?1-c:f;if(g)var
e=g;else
var
h=aH(d,B),e=h?c:h;if(e)throw[0,aq,[0,[0,d,c,a[2]],0]];return e}throw[0,R,bT]}try{c(l[11],d,b);var
e=0;return e}catch(a){a=A(a);if(a[1]===aq)return a[2];throw a}}];ak(aA,i,"Fourier_plugin.Fourier");var
r=a(bV[18],[0,p[136],p[151]]);function
t(c){var
b=i[3];return[0,a(r[1],50),b]}function
aP(b,a){try{var
d=c(r[7],b[1],a);return d}catch(a){a=A(a);if(a===bU)return i[3];throw a}}function
v(a,b,d){var
e=aP(a,b),f=c(i[7],e,d);V(r[9],a[1],b,f);return a}function
w(a,b){var
d=c(i[7],a[2],b);return[0,a[1],d]}function
aQ(b){var
a=i[4];return w(t(0),a)}function
aR(d,b){var
a=t(0),e=d[1];function
f(c,b){v(a,c,b);return 0}c(r[11],f,e);var
g=b[1];function
h(c,b){v(a,c,b);return 0}c(r[11],h,g);var
i=b[2];return w(w(a,d[2]),i)}function
D(e,d){var
b=t(0),f=e[1];function
g(c,a){v(b,c,a);return 0}c(r[11],g,f);var
h=d[1];function
j(d,c){v(b,d,a(i[6],c));return 0}c(r[11],j,h);var
k=a(i[6],d[2]);return w(w(b,e[2]),k)}function
aS(b,a){var
d=t(0),e=a[1];function
f(e,a){v(d,e,c(i[9],b,a));return 0}c(r[11],f,e);return w(d,c(i[9],b,a[2]))}function
N(d){var
b=a(M[aA],d),c=b[1];if(0===c[0])if(o.caml_equal(b[2],M[5][6]))if(o.caml_string_equal(a(M[5][8],c[1]),bZ))return a(M[6][5],b[3]);return b0}function
ad(d){var
c=d;for(;;){var
b=a(p[K],c);switch(b[0]){case
5:var
c=b[1];continue;case
10:return N(b[1][1]);default:return b1}}}var
E=[_,b2,W(0)];function
q(k){var
f=k;for(;;){var
e=a(p[K],f);switch(e[0]){case
5:var
f=e[1];continue;case
9:var
b=e[2],d=ad(e[1]);if(h(d,b3)){if(h(d,b4)){if(h(d,b5)){if(h(d,b6)){if(h(d,b7)){if(h(d,b8))throw E;var
l=q(j(b,1)[2]),m=q(j(b,0)[1]);return c(i[7],m,l)}var
n=q(j(b,0)[1]);return a(i[6],n)}var
o=q(j(b,1)[2]),r=q(j(b,0)[1]);return c(i[9],r,o)}var
s=q(j(b,1)[2]),t=q(j(b,0)[1]);return c(i[8],t,s)}var
u=q(j(b,0)[1]);return a(i[10],u)}var
v=q(j(b,1)[2]),w=q(j(b,0)[1]);return c(i[11],w,v);case
10:var
g=N(e[1][1]);if(h(g,b9)){if(h(g,b_))throw E;return i[4]}return i[3];default:throw E}}}var
S=[_,b$,W(0)];function
n(k){try{var
f=a(p[K],k);switch(f[0]){case
5:var
g=n(f[1]);break;case
9:var
b=f[2],e=ad(f[1]);if(h(e,ca))if(h(e,cb))if(h(e,cc))if(h(e,cd))if(h(e,ce)){if(h(e,cf))throw S;var
y=n(j(b,1)[2]),d=aR(n(j(b,0)[1]),y)}else
var
z=n(j(b,0)[1]),d=aS(a(i[6],i[4]),z);else
try{var
l=q(j(b,0)[1]);try{var
G=q(j(b,1)[2]),H=c(i[9],l,G),I=w(t(0),H),m=I}catch(a){a=A(a);if(a!==E)throw a;var
F=j(b,1)[2],m=v(t(0),F,l)}var
d=m}catch(a){a=A(a);if(a!==E)throw a;var
B=q(j(b,1)[2]),C=j(b,0)[1],d=v(t(0),C,B)}else
var
J=n(j(b,1)[2]),d=D(n(j(b,0)[1]),J);else
var
L=q(j(b,0)[1]),M=a(i[10],L),d=w(t(0),M);else{var
o=q(j(b,1)[2]);try{var
Q=q(j(b,0)[1]),R=c(i[11],Q,o),T=w(t(0),R),r=T}catch(c){c=A(c);if(c!==E)throw c;var
O=a(i[10],o),P=j(b,0)[1],r=v(t(0),P,O)}var
d=r}var
g=d;break;case
10:var
s=N(f[1][1]);if(h(s,cg)){if(h(s,ch))throw S;var
u=aQ(0)}else
var
u=t(0);var
g=u;break;default:throw S}return g}catch(a){a=A(a);if(a!==E)if(a!==S)throw a;var
x=i[4];return v(t(0),k,x)}}function
ci(b){var
a=[0,0];function
d(c,b){a[1]=[0,[0,b,c],a[1]];return 0}c(r[11],d,b);return a[1]}var
F=[_,cj,W(0)];function
aT(o){var
e=o[1],l=a(p[K],o[2]);if(9===l[0]){var
f=l[2],m=a(p[K],l[1]);switch(m[0]){case
10:if(2===f.length-1){var
b=j(f,0)[1],d=j(f,1)[2],g=N(m[1][1]);if(h(g,ck)){if(h(g,cl)){if(h(g,cm)){if(h(g,cn))throw F;var
s=n(d);return[0,[0,e,co,b,d,D(n(b),s),1],0]}var
t=n(d);return[0,[0,e,cp,b,d,D(n(b),t),0],0]}var
u=n(b);return[0,[0,e,cq,d,b,D(n(d),u),1],0]}var
v=n(b);return[0,[0,e,cr,d,b,D(n(d),v),0],0]}break;case
11:var
q=m[1][1];if(1-c(bW[5],[2,[0,q[1],q[2]]],I[30]))throw F;var
w=j(f,0)[1],i=j(f,1)[2],k=j(f,2)[3],r=a(p[K],w);if(10===r[0]){if(h(N(r[1][1]),cs))throw F;var
x=n(i),y=[0,[0,e,ct,k,i,D(n(k),x),0],0],z=n(k);return[0,[0,e,cu,i,k,D(n(i),z),0],y]}throw F}throw F}throw F}function
aU(e){var
b=[0,-1],d=a(r[1],50);function
f(a){var
e=a[5][1];function
f(a,f){var
e=1-c(r[10],d,a);return e?(b[1]=b[1]+1|0,V(r[5],d,a,b[1])):e}return c(r[11],f,e)}c(l[11],f,e);function
g(e){var
f=o.caml_make_vect(b[1]+1|0,i[3]),g=e[5][1];function
h(e,b){var
a=c(r[7],d,e);return j(f,a)[a+1]=b}c(r[11],h,g);var
k=e[6],l=[0,a(i[6],e[5][2]),0],m=a(ar[11],f);return[0,c(z[22],m,l),k]}var
h=c(l[13],g,e);return a(i[25],h)}function
d(b){var
c=o.caml_obj_tag(b);return 250===c?b[1]:e===c?a(bY[2],b):b}var
ae=a(I[4],cv),aV=[e,function(b){return a(I[43],0)}],aW=[e,function(b){return a(I[50],0)}],aX=[e,function(b){return a(I[53],0)}],cw=[e,function(b){return a(I[41],0)}],u=a(ae,cx),aY=[e,function(b){return a(u,cy)}],cA=[e,function(b){return a(u,cz)}],aZ=[e,function(b){return a(u,cB)}],cD=[e,function(b){return a(u,cC)}],cF=[e,function(b){return a(u,cE)}],a0=[e,function(b){return a(u,cG)}],O=[e,function(b){return a(u,cH)}],af=[e,function(b){return a(u,cI)}],a1=[e,function(b){return a(u,cJ)}],as=[e,function(b){return a(u,cK)}],a2=[e,function(b){return a(u,cL)}],T=[e,function(b){return a(u,cM)}],a3=[e,function(a){return c(ae,cO,cN)}],k=a(ae,cP),ag=[e,function(b){return a(k,cQ)}],ah=[e,function(b){return a(k,cR)}],a4=[e,function(b){return a(k,cS)}],a5=[e,function(b){return a(k,cT)}],a6=[e,function(b){return a(k,cU)}],a7=[e,function(b){return a(k,cV)}],a8=[e,function(b){return a(k,cW)}],a9=[e,function(b){return a(k,cX)}],a_=[e,function(b){return a(k,cY)}],a$=[e,function(b){return a(k,cZ)}],ba=[e,function(b){return a(k,c0)}],bb=[e,function(b){return a(k,c1)}],bc=[e,function(b){return a(k,c2)}],bd=[e,function(b){return a(k,c3)}],be=[e,function(b){return a(k,c4)}],bf=[e,function(b){return a(k,c5)}],bg=[e,function(b){return a(k,c6)}],bh=[e,function(b){return a(k,c7)}],bi=[e,function(b){return a(k,c8)}],bj=[e,function(b){return a(k,c9)}],bk=[e,function(b){return a(k,c_)}],bl=[e,function(b){return a(k,c$)}],bm=[e,function(b){return a(k,da)}],bn=[e,function(b){return a(k,db)}],bo=[e,function(b){return a(k,dc)}],bp=[e,function(b){return a(k,dd)}];function
de(a){return 1===a[2]?1:0}function
x(a){return[0,a[1],a[2]]}function
at(e){var
f=a(z[6],e);if(0===f)return d(a2);var
g=d(T),h=f-1|0,k=1;if(h<1)var
b=g;else{var
c=k,i=g;for(;;){var
m=[0,d(T),i],n=[0,d(af),m],j=a(p[Q],n),o=c+1|0;if(h!==c){var
c=o,i=j;continue}var
b=j;break}}if(0<=e)return b;var
l=[0,d(a1),[0,b]];return a(p[Q],l)}function
P(c){var
b=x(c),e=[0,at(b[2])],f=[0,d(as),e],g=a(p[Q],f),h=[0,at(b[1]),g],i=[0,d(O),h];return a(p[Q],i)}function
G(E,h){var
s=d(ag),i=a(f[85],s),t=d(ag),j=a(f[85],t),k=h[1]-1|0,u=1;if(k<1)var
l=i;else{var
e=u,q=i;for(;;){var
B=d(ah),C=a(f[85],B),r=c(g[70][3],C,q),D=e+1|0;if(k!==e){var
e=D,q=r;continue}var
l=r;break}}var
m=h[2]-1|0,v=1;if(m<1)var
n=j;else{var
b=v,o=j;for(;;){var
y=d(ah),z=a(f[85],y),p=c(g[70][3],z,o),A=b+1|0;if(m!==b){var
b=A,o=p;continue}var
n=p;break}}var
w=d(a5),x=a(f[85],w);return c(g[70][19],x,[0,l,[0,n,0]])}function
bq(G,i){var
j=i[1];if(0===j)var
t=d(a6),b=a(f[85],t);else
var
F=d(a7),b=a(f[85],F);var
u=d(ag),k=a(f[85],u),l=j-1|0,v=1;if(l<1)var
m=b;else{var
h=v,r=b;for(;;){var
C=d(a4),D=a(f[85],C),s=c(g[70][3],D,r),E=h+1|0;if(l!==h){var
h=E,r=s;continue}var
m=s;break}}var
n=i[2]-1|0,w=1;if(n<1)var
o=k;else{var
e=w,p=k;for(;;){var
z=d(ah),A=a(f[85],z),q=c(g[70][3],A,p),B=e+1|0;if(n!==e){var
e=B,p=q;continue}var
o=q;break}}var
x=d(a8),y=a(f[85],x);return c(g[70][19],y,[0,m,[0,o,0]])}function
br(h,b){var
e=b[1];if(0===e){var
i=d(a9);return a(f[85],i)}var
j=bq(h,[0,-e|0,b[2]]),k=d(a_),l=a(f[85],k);return c(g[70][3],l,j)}function
bs(e,b){var
h=G(e,[0,-b[1]|0,b[2]]),i=d(bp),j=a(f[85],i);return c(g[70][3],j,h)}var
bt=f[45];function
J(i){var
e=a(bt,i[1]),b=i[2];if(h(b,df)){if(h(b,dg)){if(h(b,dh))if(h(b,di)){if(h(b,dj)){if(h(b,dk))throw[0,R,dl];var
j=d(bc),k=a(f[85],j);return c(g[70][3],k,e)}var
l=d(bb),m=a(f[85],l);return c(g[70][3],m,e)}return e}var
n=d(a$),o=a(f[85],n);return c(g[70][3],o,e)}var
p=d(ba),q=a(f[85],p);return c(g[70][3],q,e)}function
bu(a){function
b(a){return 0===a[0]?[0,a[1],a[2]]:[0,a[1],a[3]]}return c(l[13],b,a)}function
y(c){var
b=a(ar[11],c),d=a(l[4],b),e=a(ar[12],d),f=[0,a(l[3],b),e];return a(p[Q],f)}var
ai=[_,dm,W(0)];function
U(e){var
b=[0,function(b){var
Z=a(L[62][3],b);a(I[11],dn);var
_=a(p[99],Z),n=a(M[1][5],dp);try{var
Y=a(p[K],_);if(9===Y[0]){var
u=ad(Y[1]);if(h(u,du))if(h(u,dv))if(h(u,dw)){if(h(u,dx))throw ai;var
by=U(0),bz=a(f[22],n),bA=d(bd),bB=a(f[85],bA),bC=c(g[70][3],bB,bz),v=c(g[70][3],bC,by)}else
var
bD=U(0),bF=a(f[22],n),bG=d(be),bH=a(f[85],bG),bI=c(g[70][3],bH,bF),v=c(g[70][3],bI,bD);else
var
bJ=U(0),bK=a(f[22],n),bL=d(bf),bM=a(f[85],bL),bN=c(g[70][3],bM,bK),v=c(g[70][3],bN,bJ);else
var
bO=U(0),bP=a(f[22],n),bQ=d(bg),bR=a(f[85],bQ),bS=c(g[70][3],bR,bP),v=c(g[70][3],bS,bO);return v}throw ai}catch(h){h=A(h);if(h===ai){var
$=bu(a(L[62][4],b)),aa=function(b){var
c=b[2];return[0,a(p[aA],b[1]),c]},m=[0,0],ab=c(l[13],aa,$),ae=function(a){try{var
b=m[1],d=aT(a);m[1]=c(z[22],d,b);var
e=0;return e}catch(a){a=A(a);if(a===F)return 0;throw a}};c(l[11],ae,ab);if(0===m[1])a(ac[6],dq);var
q=aU(m[1]),ag=a(L[13],0);if(0===q){a(ac[6],dr);var
H=ag}else{if(q)if(q[2])var
E=0;else{var
w=q[1],N=w[2],B=w[1],C=[0,0],ah=c(l[40],m[1],w[3]),aj=function(a){var
b=a[2],c=o.caml_notequal(b,i[3]),d=c?(C[1]=[0,[0,a[1],b],C[1]],0):c;return d};c(l[11],aj,ah);var
D=C[1];if(!D)throw[0,R,dt];var
S=D[2],V=D[1],r=V[2],j=V[1],k=[0,j[6]],ak=j[3],al=P(r),s=[0,y([0,d(O),al,ak])],am=j[4],an=P(r),t=[0,y([0,d(O),an,am])],ao=function(b){var
c=b[2],a=b[1],e=k[1],f=e||a[6];k[1]=f;var
g=a[3],h=P(c),i=y([0,d(O),h,g]),j=s[1];s[1]=y([0,d(af),j,i]);var
l=a[4],m=P(c),n=y([0,d(O),m,l]),o=t[1];t[1]=y([0,d(af),o,n]);return 0};c(l[11],ao,S);var
ap=t[1],aq=s[1],ar=k[1]?d(aY):d(aZ),W=y([0,ar,aq,ap]),at=P(B);if(j[6])var
au=[0,G(b,x(r)),0],av=[0,J(j),au],aw=d(bh),ax=a(f[85],aw),X=c(g[70][19],ax,av);else
var
bt=[0,G(b,x(r)),0],bv=[0,J(j),bt],bw=d(bi),bx=a(f[85],bw),X=c(g[70][19],bx,bv);var
e=[0,X];k[1]=j[6];var
ay=function(j){var
i=j[2],h=j[1];if(k[1])if(h[6]){var
l=[0,G(b,x(i)),0],m=[0,J(h),l],n=[0,e[1],m],o=d(bj),p=a(f[85],o);e[1]=c(g[70][19],p,n)}else{var
s=[0,G(b,x(i)),0],t=[0,J(h),s],u=[0,e[1],t],v=d(bk),w=a(f[85],v);e[1]=c(g[70][19],w,u)}else
if(h[6]){var
y=[0,G(b,x(i)),0],z=[0,J(h),y],A=[0,e[1],z],B=d(bl),C=a(f[85],B);e[1]=c(g[70][19],C,A)}else{var
D=[0,G(b,x(i)),0],E=[0,J(h),D],F=[0,e[1],E],H=d(bm),I=a(f[85],H);e[1]=c(g[70][19],I,F)}var
q=k[1],r=q||h[6];k[1]=r;return 0};c(l[11],ay,S);var
az=N?br(b,x(B)):bs(b,x(B)),aB=[0,e[1],0],aC=0,aD=0,aE=function(b){var
e=d(a3),h=a(f[85],e),i=a(f[85],b);return c(g[70][3],i,h)},aF=d(aV),aG=[0,c(g[70][57],aF,aE),aD],aH=a(L[13],0),aI=a(L[13],0),aJ=[0,c(g[70][12],aI,aH),aG],aK=d(T),aL=[0,d(T)],aM=[0,d(as),aL],aN=a(p[Q],aM),aP=c(aO[12],aN,aK),aQ=[0,az,[0,c(g[70][19],aP,aJ),aC]],aR=s[1],aS=t[1],a1=y([0,d(a0),aS,aR]),a2=c(aO[12],a1,at),a4=c(g[70][19],a2,aQ),a5=N?d(bn):d(bo),a6=a(f[85],a5),a7=c(g[70][3],a6,a4),a8=y([0,d(aX),W]),a9=a(f[52],a8),a_=[0,c(g[70][3],a9,a7),aB],a$=a(f[bE],W),ba=[0,c(g[70][19],a$,a_),0],bb=a(bX[2],0),bc=[0,c(g[70][3],f[16],bb),ba],bp=d(aW),bq=a(f[bE],bp),H=c(g[70][19],bq,bc),E=1}else
var
E=0;if(!E)throw[0,R,ds]}return H}throw h}}];return a(L[62][9],b)}var
au=[0,r,t,aP,v,w,aQ,aR,D,aS,N,ad,E,q,S,n,ci,F,aT,aU,d,ae,aV,aW,aX,cw,u,aY,cA,aZ,cD,cF,a0,O,af,a1,as,a2,T,a3,k,ag,ah,a4,a5,a6,a7,a8,a9,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,de,x,at,P,G,bq,br,bs,bt,J,bu,y,ai,U];ak(128,au,"Fourier_plugin.FourierR");a(bx[12],dA);function
dB(d){var
b=[28,[0,0,[31,dy[4],[0,[0,aj,dC],0],0]]],c=a(M[1][5],dD);return dO(bv[4],1,0,c,b)}try{var
dM=[0,function(c,b){return a(au[80],0)}];V(bv[9],0,[0,aj,dN],dM);c(bx[19],dB,aj)}catch(b){b=A(b);if(!a(ac[22],b))throw b;var
dE=c(ac[18],0,b),dH=c(z[16],dG,dF),dJ=c(z[16],dI,dH),dK=a(bw[1],dJ),dL=c(bw[13],dK,dE);a(dz[13],dL)}var
by=[0,aj];ak(134,by,"Fourier_plugin.G_fourier");ak(135,[0,i,au,by],"Fourier_plugin");return});
