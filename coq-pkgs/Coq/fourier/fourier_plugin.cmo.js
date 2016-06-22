(function(a){"use strict";var
bK=617,bF=145,bG="eqTLR",az="Rmult",L=140,aD="R0",aE="Ropp",_="Rle",aC="Rminus",bE="fourier_plugin",R=124,bD="eqTRL",Z="Rlt",f=246,bJ="Fourier",Y="fourier",ab="Rge",bC="plugins/fourier/fourier.ml",aB=113,ay="plugins/fourier/fourierR.ml",aa="Rgt",ax="Rplus",$=248,aw="Rinv",bB="R",bI="Reals",aA="R1",bH="Rdiv",p=a.jsoo_runtime,k=p.caml_check_bound,bA=p.caml_div,X=p.caml_fresh_oo_id,t=p.caml_mul,b=p.caml_new_string,al=p.caml_register_global,i=p.caml_string_notequal,B=p.caml_wrap_exception;function
c(a,b){return a.length==1?a(b):p.caml_call_gen(a,[b])}function
d(a,b,c){return a.length==2?a(b,c):p.caml_call_gen(a,[b,c])}function
W(a,b,c,d){return a.length==3?a(b,c,d):p.caml_call_gen(a,[b,c,d])}function
dP(a,b,c,d,e){return a.length==4?a(b,c,d,e):p.caml_call_gen(a,[b,c,d,e])}var
n=p.caml_get_global_data(),C=[0,0,1],aG=[0,1,1],ak=b(bE),S=n.Assert_failure,m=n.List,A=n.Pervasives,q=n.Term,g=n.Tactics,h=n.Tacticals,M=n.Proofview,J=n.Coqlib,N=n.Names,ad=n.Errors,aP=n.Equality,as=n.Array,bw=n.Tacenv,bx=n.Pp,by=n.Mltop,bU=[0,b(bC),176,9],bS=[0,b(bC),147,9],bR=b("empty ineq"),bN=b("/"),bT=b("Fourier.Contradiction"),b2=b("not_of_constant"),b4=b(bH),b5=b(aw),b6=b(aC),b7=b(az),b8=b(aE),b9=b(ax),b_=b(aD),b$=b(aA),cb=b(bH),cc=b(aw),cd=b(aC),ce=b(az),cf=b(aE),cg=b(ax),ch=b(aD),ci=b(aA),dp=[0,b("Coq"),[0,b(Y),[0,b(bJ),0]]],dq=b("new_hyp_for_fourier"),dv=b(ab),dw=b(aa),dx=b(_),dy=b(Z),dr=b("No inequalities"),ds=b("fourier failed"),du=[0,b(ay),bK,11],dt=[0,b(ay),bK,30],dg=b(ab),dh=b(aa),di=b(_),dj=b(Z),dk=b(bG),dl=b(bD),dm=[0,b(ay),426,6],de=b("Rlt_not_le_frac_opp"),dd=b("Rnot_le_le"),dc=b("Rnot_lt_lt"),db=b("Rfourier_le_le"),da=b("Rfourier_le_lt"),c$=b("Rfourier_lt_le"),c_=b("Rfourier_lt_lt"),c9=b("Rfourier_le"),c8=b("Rfourier_lt"),c7=b("Rfourier_not_lt_ge"),c6=b("Rfourier_not_le_gt"),c5=b("Rfourier_not_gt_le"),c4=b("Rfourier_not_ge_lt"),c3=b("Rfourier_eqRL_to_le"),c2=b("Rfourier_eqLR_to_le"),c1=b("Rfourier_ge_to_le"),c0=b("Rfourier_gt_to_lt"),cZ=b("Rle_not_lt"),cY=b("Rnot_lt0"),cX=b("Rle_mult_inv_pos"),cW=b("Rle_zero_1"),cV=b("Rle_zero_zero"),cU=b("Rlt_mult_inv_pos"),cT=b("Rle_zero_pos_plus1"),cS=b("Rlt_zero_pos_plus1"),cR=b("Rlt_zero_1"),cO=b("Rinv_1"),cP=[0,b(bI),[0,b("RIneq"),0]],cN=b(aA),cM=b(aD),cL=b(aw),cK=b(aE),cJ=b(ax),cI=b(az),cH=b(aC),cF=b(bB),cD=b(ab),cC=b(_),cA=b(aa),cz=b(Z),cl=b(ab),cm=b(aa),cn=b(_),co=b(Z),cp=b(Z),cq=b(_),cr=b(aa),cs=b(ab),ct=b(bB),cu=b(bD),cv=b(bG),b0=b("Coq.Reals.Rdefinitions"),b1=b("constant_not_of_R"),b3=b("FourierR.NoRational"),ca=b("FourierR.NoLinear"),ck=b("FourierR.NoIneq"),cw=b(bJ),cy=[0,b(bI),[0,b("Rdefinitions"),0]],cQ=[0,b(Y),[0,b("Fourier_util"),0]],dn=b("FourierR.GoalDone"),dD=b(Y),dE=b("fourierz"),dB=b(bE),dO=b(Y),dG=b(": "),dH=b(Y),dJ=b("Exception in tactic extend "),bL=n.Failure,bY=n.Contradiction,bZ=n.CamlinternalLazy,bX=n.Globnames,bV=n.Not_found,bW=n.Hashtbl,dz=n.Loc,dA=n.Feedback;function
bM(a){c(A[29],a[1]);c(A[27],bN);return c(A[29],a[2])}function
aF(a,b){var
d=a,c=b;for(;;){if(0===c)return d;var
e=p.caml_mod(d,c),d=c,c=e;continue}}function
I(a){var
b=0<=a[2]?a:[0,-a[1]|0,-a[2]|0];if(0===b[1])return C;var
c=aF(b[1],b[2]),d=0<=c?c:-c|0,e=bA(b[2],d);return[0,bA(b[1],d),e]}function
aH(a){return I([0,-a[1]|0,a[2]])}function
am(a,b){return I([0,t(a[1],b[2])+t(b[1],a[2])|0,t(a[2],b[2])])}function
bO(a,b){return I([0,t(a[1],b[2])-t(b[1],a[2])|0,t(a[2],b[2])])}function
an(a,b){return I([0,t(a[1],b[1]),t(a[2],b[2])])}function
bP(a){return I([0,a[2],a[1]])}function
bQ(a,b){return I([0,t(a[1],b[2]),t(a[2],b[1])])}function
ac(a,b){return t(a[1],b[2])<t(b[1],a[2])?1:0}function
aI(a,b){return t(a[1],b[2])<=t(b[1],a[2])?1:0}function
D(a,b){b[1]=[0,a,b[1]];return 0}function
aJ(a){var
b=[0,0],c=[0,0],e=[0,0];function
f(a){var
d=a[1];if(d){var
f=d[1];return ac(f,C)?D(a,c):ac(C,f)?D(a,b):D(a,e)}throw[0,bL,bR]}d(m[11],f,a);return[0,c[1],[0,e[1],[0,b[1],0]]]}function
aK(a){var
b=[0,0],h=c(m[1],a);function
e(a){var
c=[0,0],f=(h-b[1]|0)-1|0,i=1;if(!(f<1)){var
e=i;for(;;){D(C,c);var
l=e+1|0;if(f!==e){var
e=l;continue}break}}D(aG,c);var
g=b[1],j=1;if(!(g<1)){var
d=j;for(;;){D(C,c);var
k=d+1|0;if(g!==d){var
d=k;continue}break}}b[1]=b[1]+1|0;return[0,a[1],c[1],a[2]]}return d(m[13],e,a)}function
aL(a,b){var
c=a[3],d=c||b[3],e=W(m[19],am,a[2],b[2]);return[0,W(m[19],am,a[1],b[1]),e,d]}function
ao(c,b){var
a=b[3],e=b[2];function
f(a){return an(c,a)}var
g=d(m[13],f,e),h=b[1];function
i(a){return an(c,a)}return[0,d(m[13],i,h),g,a]}function
ap(a){var
b=a[3],d=a[2];return[0,c(m[4],a[1]),d,b]}function
aq(a){return c(m[3],a[1])}function
aM(a,b){var
c=[0,0];function
e(e){function
a(a){var
b=aH(aq(e)),d=aq(a),f=ao(b,a);return D(ap(aL(ao(d,e),f)),c)}return d(m[11],a,b)}d(m[11],e,a);return c[1]}function
aN(a){var
b=aJ(a);if(b){var
c=b[2];if(c){var
e=c[2];if(e)if(!e[2]){var
f=aM(b[1],e[1]),g=d(m[13],ap,c[1]);return d(A[22],g,f)}}}throw[0,S,bS]}function
aO(a){var
i=c(m[3],a)[1],j=c(m[1],i),d=aK(a),e=j-1|0,k=1;if(e<1)var
f=d;else{var
b=k,g=d;for(;;){var
h=aN(g),l=b+1|0;if(e!==b){var
b=l,g=h;continue}var
f=h;break}}return f}var
ar=[$,bT,X(0)],j=[0,bM,aF,C,aG,I,aH,am,bO,an,bP,bQ,ac,aI,D,aJ,aK,aL,ao,ap,aq,aM,aN,aO,ar,function(a){var
b=aO(a);function
c(a){var
b=a[1];if(b)if(!b[2]){var
c=a[3],d=b[1],f=ac(d,C),g=f?1-c:f;if(g)var
e=g;else
var
h=aI(d,C),e=h?c:h;if(e)throw[0,ar,[0,[0,d,c,a[2]],0]];return e}throw[0,S,bU]}try{d(m[11],c,b);var
e=0;return e}catch(f){f=B(f);if(f[1]===ar)return f[2];throw f}}];al(aB,j,"Fourier_plugin.Fourier");var
s=c(bW[18],[0,q[136],q[151]]);function
u(a){var
b=j[3];return[0,c(s[1],50),b]}function
aQ(a,b){try{var
c=d(s[7],a[1],b);return c}catch(f){f=B(f);if(f===bV)return j[3];throw f}}function
w(a,b,c){var
e=aQ(a,b),f=d(j[7],e,c);W(s[9],a[1],b,f);return a}function
x(a,b){var
c=d(j[7],a[2],b);return[0,a[1],c]}function
aR(a){var
b=j[4];return x(u(0),b)}function
aS(a,b){var
c=u(0),e=a[1];function
f(a,b){w(c,a,b);return 0}d(s[11],f,e);var
g=b[1];function
h(a,b){w(c,a,b);return 0}d(s[11],h,g);var
i=b[2];return x(x(c,a[2]),i)}function
E(a,b){var
e=u(0),f=a[1];function
g(a,b){w(e,a,b);return 0}d(s[11],g,f);var
h=b[1];function
i(a,b){w(e,a,c(j[6],b));return 0}d(s[11],i,h);var
k=c(j[6],b[2]);return x(x(e,a[2]),k)}function
aT(c,b){var
e=u(0),a=b[1];function
f(a,b){w(e,a,d(j[9],c,b));return 0}d(s[11],f,a);return x(e,d(j[9],c,b[2]))}function
O(a){var
b=c(N[aB],a),d=b[1];if(0===d[0])if(p.caml_equal(b[2],N[5][6]))if(p.caml_string_equal(c(N[5][8],d[1]),b0))return c(N[6][5],b[3]);return b1}function
ae(a){var
d=a;for(;;){var
b=c(q[L],d);switch(b[0]){case
5:var
d=b[1];continue;case
10:return O(b[1][1]);default:return b2}}}var
F=[$,b3,X(0)];function
r(a){var
g=a;for(;;){var
f=c(q[L],g);switch(f[0]){case
5:var
g=f[1];continue;case
9:var
b=f[2],e=ae(f[1]);if(i(e,b4)){if(i(e,b5)){if(i(e,b6)){if(i(e,b7)){if(i(e,b8)){if(i(e,b9))throw F;var
l=r(k(b,1)[2]),m=r(k(b,0)[1]);return d(j[7],m,l)}var
n=r(k(b,0)[1]);return c(j[6],n)}var
o=r(k(b,1)[2]),p=r(k(b,0)[1]);return d(j[9],p,o)}var
s=r(k(b,1)[2]),t=r(k(b,0)[1]);return d(j[8],t,s)}var
u=r(k(b,0)[1]);return c(j[10],u)}var
v=r(k(b,1)[2]),w=r(k(b,0)[1]);return d(j[11],w,v);case
10:var
h=O(f[1][1]);if(i(h,b_)){if(i(h,b$))throw F;return j[4]}return j[3];default:throw F}}}var
T=[$,ca,X(0)];function
o(a){try{var
g=c(q[L],a);switch(g[0]){case
5:var
h=o(g[1]);break;case
9:var
b=g[2],f=ae(g[1]);if(i(f,cb))if(i(f,cc))if(i(f,cd))if(i(f,ce))if(i(f,cf)){if(i(f,cg))throw T;var
y=o(k(b,1)[2]),e=aS(o(k(b,0)[1]),y)}else
var
z=o(k(b,0)[1]),e=aT(c(j[6],j[4]),z);else
try{var
l=r(k(b,0)[1]);try{var
G=r(k(b,1)[2]),H=d(j[9],l,G),I=x(u(0),H),m=I}catch(f){f=B(f);if(f!==F)throw f;var
D=k(b,1)[2],m=w(u(0),D,l)}var
e=m}catch(f){f=B(f);if(f!==F)throw f;var
A=r(k(b,1)[2]),C=k(b,0)[1],e=w(u(0),C,A)}else
var
J=o(k(b,1)[2]),e=E(o(k(b,0)[1]),J);else
var
K=r(k(b,0)[1]),M=c(j[10],K),e=x(u(0),M);else{var
n=r(k(b,1)[2]);try{var
Q=r(k(b,0)[1]),R=d(j[11],Q,n),S=x(u(0),R),p=S}catch(f){f=B(f);if(f!==F)throw f;var
N=c(j[10],n),P=k(b,0)[1],p=w(u(0),P,N)}var
e=p}var
h=e;break;case
10:var
s=O(g[1][1]);if(i(s,ch)){if(i(s,ci))throw T;var
t=aR(0)}else
var
t=u(0);var
h=t;break;default:throw T}return h}catch(f){f=B(f);if(f!==F)if(f!==T)throw f;var
v=j[4];return w(u(0),a,v)}}function
cj(a){var
c=[0,0];function
b(a,b){c[1]=[0,[0,b,a],c[1]];return 0}d(s[11],b,a);return c[1]}var
G=[$,ck,X(0)];function
aU(a){var
f=a[1],m=c(q[L],a[2]);if(9===m[0]){var
g=m[2],n=c(q[L],m[1]);switch(n[0]){case
10:if(2===g.length-1){var
b=k(g,0)[1],e=k(g,1)[2],h=O(n[1][1]);if(i(h,cl)){if(i(h,cm)){if(i(h,cn)){if(i(h,co))throw G;var
s=o(e);return[0,[0,f,cp,b,e,E(o(b),s),1],0]}var
t=o(e);return[0,[0,f,cq,b,e,E(o(b),t),0],0]}var
u=o(b);return[0,[0,f,cr,e,b,E(o(e),u),1],0]}var
v=o(b);return[0,[0,f,cs,e,b,E(o(e),v),0],0]}break;case
11:var
p=n[1][1];if(1-d(bX[5],[2,[0,p[1],p[2]]],J[30]))throw G;var
w=k(g,0)[1],j=k(g,1)[2],l=k(g,2)[3],r=c(q[L],w);if(10===r[0]){if(i(O(r[1][1]),ct))throw G;var
x=o(j),y=[0,[0,f,cu,l,j,E(o(l),x),0],0],z=o(l);return[0,[0,f,cv,j,l,E(o(j),z),0],y]}throw G}throw G}throw G}function
aV(a){var
e=[0,-1],f=c(s[1],50);function
b(a){var
b=a[5][1];function
c(a,b){var
c=1-d(s[10],f,a);return c?(e[1]=e[1]+1|0,W(s[5],f,a,e[1])):c}return d(s[11],c,b)}d(m[11],b,a);function
g(a){var
g=p.caml_make_vect(e[1]+1|0,j[3]),b=a[5][1];function
h(a,b){var
c=d(s[7],f,a);return k(g,c)[c+1]=b}d(s[11],h,b);var
i=a[6],l=[0,c(j[6],a[5][2]),0],m=c(as[11],g);return[0,d(A[22],m,l),i]}var
h=d(m[13],g,a);return c(j[25],h)}function
e(a){var
b=p.caml_obj_tag(a);return 250===b?a[1]:f===b?c(bZ[2],a):a}var
af=c(J[4],cw),aW=[f,function(a){return c(J[43],0)}],aX=[f,function(a){return c(J[50],0)}],aY=[f,function(a){return c(J[53],0)}],cx=[f,function(a){return c(J[41],0)}],v=c(af,cy),aZ=[f,function(a){return c(v,cz)}],cB=[f,function(a){return c(v,cA)}],a0=[f,function(a){return c(v,cC)}],cE=[f,function(a){return c(v,cD)}],cG=[f,function(a){return c(v,cF)}],a1=[f,function(a){return c(v,cH)}],P=[f,function(a){return c(v,cI)}],ag=[f,function(a){return c(v,cJ)}],a2=[f,function(a){return c(v,cK)}],at=[f,function(a){return c(v,cL)}],a3=[f,function(a){return c(v,cM)}],U=[f,function(a){return c(v,cN)}],a4=[f,function(a){return d(af,cP,cO)}],l=c(af,cQ),ah=[f,function(a){return c(l,cR)}],ai=[f,function(a){return c(l,cS)}],a5=[f,function(a){return c(l,cT)}],a6=[f,function(a){return c(l,cU)}],a7=[f,function(a){return c(l,cV)}],a8=[f,function(a){return c(l,cW)}],a9=[f,function(a){return c(l,cX)}],a_=[f,function(a){return c(l,cY)}],a$=[f,function(a){return c(l,cZ)}],ba=[f,function(a){return c(l,c0)}],bb=[f,function(a){return c(l,c1)}],bc=[f,function(a){return c(l,c2)}],bd=[f,function(a){return c(l,c3)}],be=[f,function(a){return c(l,c4)}],bf=[f,function(a){return c(l,c5)}],bg=[f,function(a){return c(l,c6)}],bh=[f,function(a){return c(l,c7)}],bi=[f,function(a){return c(l,c8)}],bj=[f,function(a){return c(l,c9)}],bk=[f,function(a){return c(l,c_)}],bl=[f,function(a){return c(l,c$)}],bm=[f,function(a){return c(l,da)}],bn=[f,function(a){return c(l,db)}],bo=[f,function(a){return c(l,dc)}],bp=[f,function(a){return c(l,dd)}],bq=[f,function(a){return c(l,de)}];function
df(a){return 1===a[2]?1:0}function
y(a){return[0,a[1],a[2]]}function
au(a){var
f=c(A[6],a);if(0===f)return e(a3);var
g=e(U),h=f-1|0,k=1;if(h<1)var
b=g;else{var
d=k,i=g;for(;;){var
m=[0,e(U),i],n=[0,e(ag),m],j=c(q[R],n),o=d+1|0;if(h!==d){var
d=o,i=j;continue}var
b=j;break}}if(0<=a)return b;var
l=[0,e(a2),[0,b]];return c(q[R],l)}function
Q(a){var
b=y(a),d=[0,au(b[2])],f=[0,e(at),d],g=c(q[R],f),h=[0,au(b[1]),g],i=[0,e(P),h];return c(q[R],i)}function
H(a,b){var
t=e(ah),j=c(g[85],t),u=e(ah),k=c(g[85],u),l=b[1]-1|0,v=1;if(l<1)var
m=j;else{var
i=v,r=j;for(;;){var
C=e(ai),D=c(g[85],C),s=d(h[70][3],D,r),E=i+1|0;if(l!==i){var
i=E,r=s;continue}var
m=s;break}}var
n=b[2]-1|0,w=1;if(n<1)var
o=k;else{var
f=w,p=k;for(;;){var
z=e(ai),A=c(g[85],z),q=d(h[70][3],A,p),B=f+1|0;if(n!==f){var
f=B,p=q;continue}var
o=q;break}}var
x=e(a6),y=c(g[85],x);return d(h[70][19],y,[0,m,[0,o,0]])}function
br(a,b){var
k=b[1];if(0===k)var
u=e(a7),f=c(g[85],u);else
var
G=e(a8),f=c(g[85],G);var
v=e(ah),l=c(g[85],v),m=k-1|0,w=1;if(m<1)var
n=f;else{var
j=w,s=f;for(;;){var
D=e(a5),E=c(g[85],D),t=d(h[70][3],E,s),F=j+1|0;if(m!==j){var
j=F,s=t;continue}var
n=t;break}}var
o=b[2]-1|0,x=1;if(o<1)var
p=l;else{var
i=x,q=l;for(;;){var
A=e(ai),B=c(g[85],A),r=d(h[70][3],B,q),C=i+1|0;if(o!==i){var
i=C,q=r;continue}var
p=r;break}}var
y=e(a9),z=c(g[85],y);return d(h[70][19],z,[0,n,[0,p,0]])}function
bs(a,b){var
f=b[1];if(0===f){var
i=e(a_);return c(g[85],i)}var
j=br(a,[0,-f|0,b[2]]),k=e(a$),l=c(g[85],k);return d(h[70][3],l,j)}function
bt(a,b){var
f=H(a,[0,-b[1]|0,b[2]]),i=e(bq),j=c(g[85],i);return d(h[70][3],j,f)}var
bu=g[45];function
K(a){var
f=c(bu,a[1]),b=a[2];if(i(b,dg)){if(i(b,dh)){if(i(b,di))if(i(b,dj)){if(i(b,dk)){if(i(b,dl))throw[0,S,dm];var
j=e(bd),k=c(g[85],j);return d(h[70][3],k,f)}var
l=e(bc),m=c(g[85],l);return d(h[70][3],m,f)}return f}var
n=e(ba),o=c(g[85],n);return d(h[70][3],o,f)}var
p=e(bb),q=c(g[85],p);return d(h[70][3],q,f)}function
bv(a){function
b(a){return 0===a[0]?[0,a[1],a[2]]:[0,a[1],a[3]]}return d(m[13],b,a)}function
z(a){var
b=c(as[11],a),d=c(m[4],b),e=c(as[12],d),f=[0,c(m[3],b),e];return c(q[R],f)}var
aj=[$,dn,X(0)];function
V(a){var
b=[0,function(b){var
Z=c(M[62][3],b);c(J[11],dp);var
_=c(q[99],Z),f=c(N[1][5],dq);try{var
Y=c(q[L],_);if(9===Y[0]){var
u=ae(Y[1]);if(i(u,dv))if(i(u,dw))if(i(u,dx)){if(i(u,dy))throw aj;var
by=V(0),bz=c(g[22],f),bA=e(be),bB=c(g[85],bA),bC=d(h[70][3],bB,bz),v=d(h[70][3],bC,by)}else
var
bD=V(0),bE=c(g[22],f),bG=e(bf),bH=c(g[85],bG),bI=d(h[70][3],bH,bE),v=d(h[70][3],bI,bD);else
var
bJ=V(0),bK=c(g[22],f),bL=e(bg),bM=c(g[85],bL),bN=d(h[70][3],bM,bK),v=d(h[70][3],bN,bJ);else
var
bO=V(0),bP=c(g[22],f),bQ=e(bh),bR=c(g[85],bQ),bS=d(h[70][3],bR,bP),v=d(h[70][3],bS,bO);return v}throw aj}catch(f){f=B(f);if(f===aj){var
$=bv(c(M[62][4],b)),aa=function(a){var
b=a[2];return[0,c(q[aB],a[1]),b]},n=[0,0],ab=d(m[13],aa,$),ac=function(a){try{var
b=n[1],c=aU(a);n[1]=d(A[22],c,b);var
e=0;return e}catch(f){f=B(f);if(f===G)return 0;throw f}};d(m[11],ac,ab);if(0===n[1])c(ad[6],dr);var
o=aV(n[1]),af=c(M[13],0);if(0===o){c(ad[6],ds);var
F=af}else{if(o)if(o[2])var
E=0;else{var
w=o[1],I=w[2],x=w[1],C=[0,0],ah=d(m[40],n[1],w[3]),ai=function(a){var
b=a[2],c=p.caml_notequal(b,j[3]),d=c?(C[1]=[0,[0,a[1],b],C[1]],0):c;return d};d(m[11],ai,ah);var
D=C[1];if(!D)throw[0,S,du];var
O=D[2],T=D[1],r=T[2],a=T[1],l=[0,a[6]],ak=a[3],al=Q(r),s=[0,z([0,e(P),al,ak])],am=a[4],an=Q(r),t=[0,z([0,e(P),an,am])],ao=function(a){var
c=a[2],b=a[1],d=l[1],f=d||b[6];l[1]=f;var
g=b[3],h=Q(c),i=z([0,e(P),h,g]),j=s[1];s[1]=z([0,e(ag),j,i]);var
k=b[4],m=Q(c),n=z([0,e(P),m,k]),o=t[1];t[1]=z([0,e(ag),o,n]);return 0};d(m[11],ao,O);var
ap=t[1],aq=s[1],ar=l[1]?e(aZ):e(a0),W=z([0,ar,aq,ap]),as=Q(x);if(a[6])var
au=[0,H(b,y(r)),0],av=[0,K(a),au],aw=e(bi),ax=c(g[85],aw),X=d(h[70][19],ax,av);else
var
br=[0,H(b,y(r)),0],bu=[0,K(a),br],bw=e(bj),bx=c(g[85],bw),X=d(h[70][19],bx,bu);var
k=[0,X];l[1]=a[6];var
ay=function(a){var
i=a[2],f=a[1];if(l[1])if(f[6]){var
j=[0,H(b,y(i)),0],m=[0,K(f),j],n=[0,k[1],m],o=e(bk),p=c(g[85],o);k[1]=d(h[70][19],p,n)}else{var
s=[0,H(b,y(i)),0],t=[0,K(f),s],u=[0,k[1],t],v=e(bl),w=c(g[85],v);k[1]=d(h[70][19],w,u)}else
if(f[6]){var
x=[0,H(b,y(i)),0],z=[0,K(f),x],A=[0,k[1],z],B=e(bm),C=c(g[85],B);k[1]=d(h[70][19],C,A)}else{var
D=[0,H(b,y(i)),0],E=[0,K(f),D],F=[0,k[1],E],G=e(bn),I=c(g[85],G);k[1]=d(h[70][19],I,F)}var
q=l[1],r=q||f[6];l[1]=r;return 0};d(m[11],ay,O);var
az=I?bs(b,y(x)):bt(b,y(x)),aA=[0,k[1],0],aC=0,aD=0,aE=function(a){var
b=e(a4),f=c(g[85],b),i=c(g[85],a);return d(h[70][3],i,f)},aF=e(aW),aG=[0,d(h[70][57],aF,aE),aD],aH=c(M[13],0),aI=c(M[13],0),aJ=[0,d(h[70][12],aI,aH),aG],aK=e(U),aL=[0,e(U)],aM=[0,e(at),aL],aN=c(q[R],aM),aO=d(aP[12],aN,aK),aQ=[0,az,[0,d(h[70][19],aO,aJ),aC]],aR=s[1],aS=t[1],aT=z([0,e(a1),aS,aR]),a2=d(aP[12],aT,as),a3=d(h[70][19],a2,aQ),a5=I?e(bo):e(bp),a6=c(g[85],a5),a7=d(h[70][3],a6,a3),a8=z([0,e(aY),W]),a9=c(g[52],a8),a_=[0,d(h[70][3],a9,a7),aA],a$=c(g[bF],W),ba=[0,d(h[70][19],a$,a_),0],bb=c(bY[2],0),bc=[0,d(h[70][3],g[16],bb),ba],bd=e(aX),bq=c(g[bF],bd),F=d(h[70][19],bq,bc),E=1}else
var
E=0;if(!E)throw[0,S,dt]}return F}throw f}}];return c(M[62][9],b)}var
av=[0,s,u,aQ,w,x,aR,aS,E,aT,O,ae,F,r,T,o,cj,G,aU,aV,e,af,aW,aX,aY,cx,v,aZ,cB,a0,cE,cG,a1,P,ag,a2,at,a3,U,a4,l,ah,ai,a5,a6,a7,a8,a9,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,df,y,au,Q,H,br,bs,bt,bu,K,bv,z,aj,V];al(128,av,"Fourier_plugin.FourierR");c(by[12],dB);function
dC(a){var
b=[28,[0,0,[31,dz[4],[0,[0,ak,dD],0],0]]],d=c(N[1][5],dE);return dP(bw[4],1,0,d,b)}try{var
dN=[0,function(a,b){return c(av[80],0)}];W(bw[9],0,[0,ak,dO],dN);d(by[19],dC,ak)}catch(f){f=B(f);if(!c(ad[22],f))throw f;var
dF=d(ad[18],0,f),dI=d(A[16],dH,dG),dK=d(A[16],dJ,dI),dL=c(bx[1],dK),dM=d(bx[13],dL,dF);c(dA[13],dM)}var
bz=[0,ak];al(134,bz,"Fourier_plugin.G_fourier");al(135,[0,j,av,bz],"Fourier_plugin");return});
