(function(e7){"use strict";var
aZ="Firstorder",Z=140,_=145,ak=112,aY="$l",bC="already done",aV="firstorder_using",bN=",",bE=250,bF=105,aw="$t",aQ="gintuition",U=148,L=124,aU=246,bM=115,P="Extension: cannot occur",av=113,bD=122,bL="with",bB="Depth",aj="firstorder",aX="ground_plugin",aT="Firstorder_Print_Solver",aS=100,bK="Solver",Q="plugins/firstorder/g_ground.ml4",bJ=248,aP="Firstorder_Set_Solver",aR="using",bI="-----",aW="using ",T=114,bH=121,bG="reversible in 1st order mode",t=e7.jsoo_runtime,K=t.caml_check_bound,by=t.caml_fresh_oo_id,c=t.caml_new_string,bz=t.caml_obj_tag,O=t.caml_register_global,u=t.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):t.caml_call_gen(a,[b])}function
b(a,b,c){return a.length==2?a(b,c):t.caml_call_gen(a,[b,c])}function
h(a,b,c,d){return a.length==3?a(b,c,d):t.caml_call_gen(a,[b,c,d])}function
q(a,b,c,d,e){return a.length==4?a(b,c,d,e):t.caml_call_gen(a,[b,c,d,e])}function
F(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):t.caml_call_gen(a,[b,c,d,e,f])}function
aO(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):t.caml_call_gen(a,[b,c,d,e,f,g])}function
bA(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):t.caml_call_gen(a,[b,c,d,e,f,g,h])}function
e6(a,b,c,d,e,f,g,h,i){return a.length==8?a(b,c,d,e,f,g,h,i):t.caml_call_gen(a,[b,c,d,e,f,g,h,i])}var
e=t.caml_get_global_data(),S=c(aX),bo=[0,c(aX),c("auto_with")],f=e.Term,k=e.Util,$=e.Context,C=e.Vars,w=e.Termops,am=e.Hipattern,ax=e.Global,al=e.Inductiveops,G=e.CClosure,r=e.Tacmach,x=e.Names,ab=e.Int,I=e.Not_found,B=e.Queue,ac=e.Evd,aA=e.Reductionops,H=e.Assert_failure,j=e.Pp,a4=e.Ppconstr,aq=e.Printer,aC=e.Hints,y=e.Pervasives,af=e.CErrors,ae=e.Globnames,ad=e.Option,aD=e.Heap,a7=e.CamlinternalLazy,i=e.Tactics,g=e.Proofview,d=e.Tacticals,a_=e.Refiner,a9=e.Sigma,z=e.Tacinterp,bd=e.Feedback,bc=e.List,be=e.Classops,bl=e.Cc_plugin,bm=e.Auto,s=e.Constrarg,E=e.Loc,aI=e.Tacentries,l=e.Genarg,au=e.Stdarg,bg=e.Tacintern,bk=e.Egramml,at=e.Vernac_classifier,bf=e.Vernacinterp,bh=e.Locality,aH=e.Tacenv,D=e.Pcoq,aJ=e.Mltop,bi=e.Goptions,aK=e.Geninterp,bj=e.Genintern,W=e.CList,ah=e.CLexer,bn=e.Array,a0=[0,1],ay=[0,G[14]],bQ=c("Formula.Is_atom"),bS=[0,0,[0,0,0]],bT=c("_"),bV=c("Unify.UFAIL"),ce=c(" : "),cf=c("| "),cg=c(bI),ch=c(bI),cb=c(" : No such Hint database"),cc=c("Firstorder: "),cF=c("iff"),cG=c("not"),cD=[0,c("Init"),[0,c("Logic"),0]],cE=c("User"),cA=c(bG),cq=c("No link"),co=c("No axiom link"),cm=[0,c("plugins/firstorder/rules.ml"),52,7],ck=c("Not the expected number of hyps"),cU=c("not implemented ... yet"),cS=c("Untypable instance, maybe higher-order non-prenex quantification"),cR=c(bC),cT=c(bC),cO=c("can't happen"),cP=c("x"),cV=[0,0],cW=c(bG),e0=c(aw),e3=[0,c(Q),1,0],e1=[0,c(aQ)],e2=c(aQ),eV=c(P),eA=c("$l'"),eT=[0,c(Q),1,0],eB=[0,c(bL)],eC=c(aY),eS=[0,c(Q),1,0],eD=c(aw),eR=[0,c(Q),1,0],eE=[0,c(aj)],eF=c(aY),eQ=[0,c(Q),1,0],eG=[0,c(bL)],eH=c(aw),eP=[0,c(Q),1,0],eI=[0,c(aj)],eJ=c(aY),eO=[0,c(Q),1,0],eK=c(aw),eN=[0,c(Q),1,0],eL=[0,c(aj)],eM=c(aj),ev=c(P),et=c(P),er=c(P),dR=c('Deprecated syntax; use "," as separator'),dP=c(aW),dO=c(aW),dN=c(aW),dJ=c(aT),dG=c(aT),dD=c(P),dB=c(aT),dy=c("Firstorder solver tactic is "),dx=c(P),dv=c(aP),dm=c(aP),dj=c(P),dh=c(aP),de=c(P),c3=c(aX),c5=[0,c(aZ),[0,c(bB),0]],c6=c("Firstorder Depth"),c9=[0,c("Congruence"),[0,c(bB),0]],c_=c("Congruence Depth"),dc=c("Firstorder default solver"),dq=[0,c(bK)],dr=[0,c(aZ)],ds=[0,c("Set")],dH=[0,[0,[0,c("Print")],[0,[0,c(aZ)],[0,[0,c(bK)],0]]],0],dK=c("GTauto failed"),dS=c("deprecated"),dT=c("firstorder-deprecated-syntax"),dU=c(aV),d2=c(aV),d7=c(aR),d_=c(bN),eb=c(bN),ee=c(aR),ek=c(aR),ep=c(aV),ey=c(aj),eY=c(aQ),bZ=e.Constrextern,ci=e.Coqlib,cj=e.Control,cI=e.Typing,cJ=e.Evarutil,cK=e.Environ,cY=e.Tacsubst,c0=e.Libnames,cX=e.Tactic_option,cZ=e.Pptactic,c1=e.Decl_mode_plugin,c2=e.CWarnings;function
bO(h,g,f,e,d,c){var
a=b(h,f,e);return 0===a?b(g,d,c):a}function
bP(j,i,h,g,f,e,d,c){var
a=q(j,h,g,f,e);return 0===a?b(i,d,c):a}var
aa=[bJ,bQ,by(0)];function
a1(h,g){var
b=h,c=g;for(;;){var
d=a(f[Z],c);if(6===d[0]){var
e=d[3];if(0<b){var
b=b-1|0,c=e;continue}return 1+a1(0,e)|0}return 0}}function
bR(c,d){var
e=a(ax[26],c[1])[1][6],f=a(r[8],d),g=b(al[4],f,c);function
h(a){return a1(e,a)}return b(k[19][15],h,g)}function
an(g,e,d,c){var
h=a(r[8],c),i=b(al[4],h,e);function
j(c){var
e=b(f[76],c,d),h=b(f[85],g,e)[2];return a(f[83],h)[1]}return b(k[19][15],j,i)}function
az(c){var
d=a(r[8],c),e=h(G[42],0,ay[1],d);return function(c){var
d=a(G[36],c);return b(G[46],e,d)}}function
ao(m,D){var
E=az(m),A=a(r[8],m),B=h(G[42],0,ay[1],A),C=a(G[36],D),c=b(G[47],B,C),n=a(am[23],c);if(n){var
o=n[1],F=a(w[55],o[2]);return[0,o[1],F]}var
p=a(am[21],c);if(p){var
q=p[1];return[5,q[2],q[3]]}var
s=a(am[27],c);if(s){var
e=s[1],g=e[2],t=a(f[43],e[1]),i=t[2],d=t[1],u=a(ax[26],d),j=u[2],v=u[1],x=j[4].length-1;if(0===x)return[1,[0,d,i],g];var
H=0<e[3]?1:0,I=function(b){var
c=v[6];return a(w[70],b)===c?1:0},l=b(k[19][28],I,j[9]);if(!a(al[19],[0,d,v,j])){var
K=H?l?1:0:1;if(K)return 1===x?[2,[0,d,i],g,l]:[3,[0,d,i],g,l]}return[6,c]}var
y=a(am[29],c);if(y){var
z=y[1],J=z[2];return[4,a(f[43],z[1]),J]}return[6,a(E,c)]}var
bU=[0,a(x[1][5],bT)];function
a2(l,o,e,c){var
m=[0,0],i=[0,0],j=[0,0],y=az(l);function
g(A,d,z){var
e=A,n=z;for(;;){var
c=ao(l,n);switch(c[0]){case
0:g(e,1-d,c[1]);var
n=c[2];continue;case
1:var
r=1-d,B=r?(m[1]=1,0):r;return B;case
4:var
v=c[2],G=a(o,1),H=a(f[T],G),I=K(an(1,c[1],v,l),0)[1],J=function(f,i,c){var
h=a($[1][1][3],c);return g([0,H,e],d,b(C[8],f,h))},L=2-a(k[17][1],v)|0;return q(k[17][83],J,L,0,I);case
5:var
M=a(o,1),N=a(f[T],M),e=[0,N,e],n=c[2];continue;case
6:var
p=h(C[11],e,0,c[1]),w=1-a(f[7],p);if(w){if(d){i[1]=[0,p,i[1]];return 0}j[1]=[0,p,j[1]];var
x=0}else
var
x=w;return x;default:if(c[3]){var
s=a(y,h(C[11],e,0,n));if(d)i[1]=[0,s,i[1]];else
j[1]=[0,s,j[1]]}var
t=an(0,c[1],c[2],l),D=function(f,i,c){var
h=a($[1][1][3],c);return g(e,d,b(C[8],f,h))},E=function(b){var
c=1-a(k[17][1],b)|0;return q(k[17][83],D,c,0,b)};if(d)var
F=function(a){return a?0:1},u=b(k[19][28],F,t);else
var
u=d;if(u)m[1]=1;return b(k[19][13],E,t)}}}switch(e){case
0:g(0,0,c);break;case
1:g(0,1,c);break;default:var
d=a(f[79],c),n=d[1],p=function(c){var
b=a(o,1);return a(f[T],b)},r=b(k[17][14],p,n);g(r,0,d[2]);m[1]=0}return[0,m[1],[0,i[1],j[1]]]}var
n=[0,a0,ay,bO,bP,bR,an,bU,a2,function(n,s,f,e,m){var
i=az(e);try{var
o=a(m,0)+1|0,p=a0[1]?a2(e,m,n,f):bS,q=p[1];if(1===n){var
j=ao(e,f);switch(j[0]){case
0:var
g=0;break;case
1:var
g=3;break;case
2:var
g=1;break;case
3:var
g=2;break;case
4:var
w=K(an(0,j[1],j[2],e),0)[1],x=a(k[17][bF],w),g=[0,o,a($[1][1][3],x),q];break;case
5:var
g=4;break;default:throw[0,aa,j[1]]}var
r=[1,g]}else{var
c=ao(e,f);switch(c[0]){case
0:var
l=c[1],y=a(i,l),b=ao(e,l);switch(b[0]){case
0:var
d=[5,b[1],b[2],c[2]];break;case
1:var
d=[0,b[1],b[2]];break;case
2:var
d=[1,b[1],b[2]];break;case
3:var
d=[2,b[1],b[2]];break;case
4:var
d=[4,b[1],b[2]];break;case
5:var
d=[3,l];break;default:var
d=0}var
h=[4,y,d];break;case
1:var
h=0;break;case
2:if(c[3])throw[0,aa,a(i,f)];var
h=[0,c[1]];break;case
3:if(c[3])throw[0,aa,a(i,f)];var
h=[1,c[1]];break;case
4:var
h=[3,c[1]];break;case
5:var
h=[2,o,c[1],q];break;default:throw[0,aa,c[1]]}var
r=[0,h]}var
t=p[2],v=[0,[0,s,a(i,f),r,t]];return v}catch(a){a=u(a);if(a[1]===aa)return[1,a[2]];throw a}}];O(109,n,"Ground_plugin.Formula");var
M=[bJ,bV,by(0)];function
aB(U,S){var
g=a(B[2],0),n=[0,0];function
q(c,a){var
d=n[1];function
e(d){var
e=b(w[54],[0,[0,c,a],0],d[2]);return[0,d[1],e]}n[1]=[0,[0,c,a],b(k[17][12],e,d)];return 0}function
r(c){var
d=a(f[Z],c);if(2===d[0])try{var
e=r(b(ab[4][2],d[1],n[1]));return e}catch(a){a=u(a);if(a===I)return c;throw a}return c}b(B[3],[0,U,S],g);try{for(;;){var
y=a(B[5],g),h=r(b(aA[22],ac[16],y[1])),i=r(b(aA[22],ac[16],y[2])),e=a(f[Z],h),c=a(f[Z],i);switch(e[0]){case
2:var
o=e[1];if(2===c[0]){var
v=c[1];if(1-(o===v?1:0))if(o<v)q(v,h);else
q(o,i)}else{var
t=b(w[54],n[1],i),_=a(w[44],t);if(a(ab[2][2],_))var
$=a(f[T],o),Q=b(w[53],$,t)?0:(q(o,t),1);else
var
Q=0;if(!Q)throw[0,M,h,i]}var
d=3;break;case
6:switch(c[0]){case
6:var
E=c[3],D=c[2],C=e[3],A=e[2],d=4;break;case
2:var
d=0;break;case
5:var
d=1;break;default:var
d=2}break;case
7:switch(c[0]){case
7:var
E=c[3],D=c[2],C=e[3],A=e[2],d=4;break;case
2:var
d=0;break;case
5:var
d=1;break;default:var
d=2}break;case
9:var
F=e[2];switch(c[0]){case
2:var
d=0;break;case
5:var
d=1;break;case
9:var
G=c[2];b(B[3],[0,e[1],c[1]],g);var
H=F.length-1;if(H!==G.length-1)throw[0,M,h,i];var
J=H-1|0,ae=0;if(!(J<0)){var
j=ae;for(;;){var
af=K(G,j)[j+1],ag=[0,K(F,j)[j+1],af];b(B[3],ag,g);var
ah=j+1|0;if(J!==j){var
j=ah;continue}break}}var
d=3;break;default:var
d=2}break;case
13:var
L=e[4];switch(c[0]){case
2:var
d=0;break;case
5:var
d=1;break;case
13:var
N=c[4];b(B[3],[0,e[2],c[2]],g);b(B[3],[0,e[3],c[3]],g);var
O=L.length-1;if(O!==N.length-1)throw[0,M,h,i];var
P=O-1|0,ai=0;if(!(P<0)){var
l=ai;for(;;){var
aj=K(N,l)[l+1],ak=[0,K(L,l)[l+1],aj];b(B[3],ak,g);var
al=l+1|0;if(P!==l){var
l=al;continue}break}}var
d=3;break;default:var
d=2}break;default:var
d=0}switch(d){case
0:if(2===c[0]){var
z=c[1],s=b(w[54],n[1],h),X=a(w[44],s);if(a(ab[2][2],X)){var
Y=a(f[T],z);if(b(w[53],Y,s))var
x=1;else{q(z,s);var
m=2,x=0}}else
var
x=1;if(x)throw[0,M,h,i]}else
if(5===e[0]){var
W=[0,a(f[99],h),i];b(B[3],W,g);var
m=2}else
var
m=0;break;case
1:var
m=0;break;case
2:var
m=1;break;case
3:var
m=2;break;default:b(B[3],[0,A,D],g);var
aa=a(w[55],E),ad=[0,a(w[55],C),aa];b(B[3],ad,g);var
m=3}switch(m){case
0:if(5===c[0]){var
V=[0,h,a(f[99],i)];b(B[3],V,g);var
p=1}else
var
p=0;break;case
1:var
p=0;break;case
2:var
p=1;break;default:var
p=2}switch(p){case
0:if(1-b(f[139],h,i))throw[0,M,h,i];var
R=0;break;case
1:var
R=0;break;default:var
R=1}continue}}catch(a){a=u(a);if(a===B[1])return n[1];throw a}}function
bW(e,b){function
c(b){if(a(f[7],b))if(a(f[30],b)===e)return 0;function
g(a,d){var
b=c(d);return 0<=a?0<=b?a+b|0:a:b}var
d=h(f[142],g,-1,b);return 0<=d?d+1|0:-1}return c(b)}function
bX(e){var
c=[0,1],d=[0,0];function
g(e,h){var
i=a(f[Z],h);if(2===i[0]){var
j=i[1];try{var
m=e+b(ab[4][2],j,d[1])|0,n=a(f[ak],m);return n}catch(b){b=u(b);if(b===I){var
k=c[1];c[1]++;d[1]=[0,[0,j,k],d[1]];return a(f[ak],k+e|0)}throw b}}function
l(a){return a+1|0}return q(f[144],l,g,e,h)}var
h=g(0,e);return[0,c[1]-1|0,h]}function
bY(e,d,c,i){try{var
j=aB(c,i),g=b(ab[4][2],e,j);if(a(f[7],g))var
h=[0,[1,d]];else
var
k=bW(e,c),h=[0,[0,bX(g),k]];return h}catch(a){a=u(a);if(a[1]===M)return 0;if(a===I)return[0,[1,d]];throw a}}function
a3(e,d,c){function
g(b){return a(f[T],e+b|0)}var
h=b(k[17][48],d,g);return b(C[12],h,c)}var
ap=[0,M,aB,bY,function(e,d){var
c=e[1],g=a3(0,c,e[2]),h=a3(c,d[1],d[2]);try{var
i=aB(g,h),j=function(b){var
d=b[1]<c?1:0;return d?d:a(f[7],b[2])},l=b(k[17][22],j,i);return l}catch(a){a=u(a);if(a[1]===M)return 0;throw a}}];O(116,ap,"Ground_plugin.Unify");function
a5(a){if(0===a[0]){var
b=a[1];if(typeof
b==="number")return 999;else
switch(b[0]){case
0:return 90;case
1:return 40;case
2:return-30;case
3:return 60;default:var
c=b[2];if(typeof
c==="number")return 0;else
switch(c[0]){case
0:return aS;case
1:return 80;case
2:return 70;case
3:return-20;case
4:return 50;default:return-10}}}var
d=a[1];if(typeof
d==="number")switch(d){case
1:return 40;case
2:return-15;case
3:return-50;default:return aS}return-29}var
b0=[0,function(b,a){var
c=a5(a[3]);return a5(b[3])-c|0}],aE=[0,f[141]],b1=[0,function(c,a){var
d=b(ae[18][1],c[1],a[1]);if(0===d){var
e=function(c,a){var
d=t.caml_int_compare(c[1],a[1]);return 0===d?b(aE[1],c[2],a[2]):d};return h(ad[5],e,c[2],a[2])}return d}],m=a(k[21][1],aE),ag=a(k[20][1],b1);function
ar(d,e,c){try{var
a=[0,e,b(m[22],d,c)],f=h(m[4],d,a,c);return f}catch(a){a=u(a);if(a===I)return h(m[4],d,[0,e,0],c);throw a}}function
a6(c,e,a){try{var
f=b(m[22],c,a),g=function(a){return 1-b(ae[5],a,e)},d=b(k[17][29],g,f),i=d?h(m[4],c,d,a):b(m[6],c,a);return i}catch(b){b=u(b);if(b===I)return a;throw b}}var
R=a(aD[2],b0);function
b2(a){var
b=a.slice();b[8]=a[8]-1|0;return b}function
b3(d,a){var
c=a.slice();c[7]=b(ag[4],d,a[7]);return c}function
b4(a,d){var
e=b(ag[3],a,d[7]);if(e)var
f=e;else{var
c=a[2];if(c){var
g=c[1],j=g[1],k=a[1],h=function(c){var
a=c[2];if(a){var
d=a[1],e=b(ae[5],k,c[1]);if(e){var
f=j<d[1]?1:0;if(f)return b(ap[4],d,g);var
h=f}else
var
h=e;var
i=h}else
var
i=a;return i};return b(ag[16],h,d[7])}var
f=c}return f}function
aF(f,e,l,a,k){var
g=F(n[9],f,e,l,k,a[6]);if(0===g[0]){var
c=g[1];if(1===f){var
m=a[8],o=a[7],p=a[6],q=c[2],r=a[3],s=a[2];return[0,b(R[2],c,a[1]),s,r,q,0,p,o,m]}var
h=a.slice();h[1]=b(R[2],c,a[1]);h[2]=ar(c[2],e,a[2]);return h}var
d=g[1];if(1===f){var
i=a.slice();i[4]=d;i[5]=[0,d];return i}var
j=a.slice();j[2]=ar(d,e,a[2]);j[3]=[0,d,a[3]];return j}function
b5(c,a){function
d(a,b){return a[1]===n[7]?b:ar(a[2],a[1],b)}var
b=a.slice();b[1]=h(k[17][16],R[2],c,a[1]);b[2]=h(k[17][16],d,c,a[2]);return b}function
b6(d,c){var
e=b(m[22],d,c[2]);return a(k[17][3],e)}function
b7(g){var
b=g;for(;;){var
c=a(R[3],b[1]),f=a(R[4],b[1]);if(c[1]===n[7]){var
d=b.slice();d[1]=f;if(b[4]===c[2])return[0,c,d];var
b=d;continue}var
e=b.slice();e[1]=f;e[2]=a6(c[2],c[1],b[2]);return[0,c,e]}}function
b8(d){var
b=[0,-1],e=ag[1];function
c(a){if(a)b[1]++;return b[1]}var
g=a(f[T],1);return[0,R[1],m[1],0,g,0,c,e,d]}function
b9(c){if(2===c[0]){var
d=c[1],e=function(a){return[3,[0,d,a+1|0]]},f=a(al[21],d);return b(k[17][48],f,e)}return[0,c,0]}var
b_=a(k[17][av],b9);function
b$(e,d,c){var
f=a(b_,e);function
g(d,c){var
f=c[2];function
g(a){return q(ac[160],0,0,0,a)}var
e=h(r[24],g,f,d),a=e[1],i=b(r[15],a,e[2]);return[0,aF(0,d,i,c[1],a),a]}return h(k[17][16],g,f,[0,d,c])}function
ca(f,e,c){var
d=[0,e];function
g(g){var
e=a(aC[25],g[5]);switch(e[0]){case
1:case
4:case
5:return 0;default:var
f=e[1][1][1];try{var
h=a(ae[16],f),i=b(r[15],c,f);d[1]=aF(2,h,i,d[1],c);var
j=0;return j}catch(a){a=u(a);if(a===I)return 0;throw a}}}function
h(d,c,a){return b(k[17][11],g,a)}function
i(d){try{var
c=a(aC[10],d),e=c}catch(c){c=u(c);if(c!==I)throw c;var
f=b(y[16],d,cb),g=b(y[16],cc,f),e=a(af[6],g)}return b(aC[9][12],h,e)}b(k[17][11],i,f);return[0,d[1],c]}function
cd(c){function
d(e,d,c){var
f=ac[16],g=a(ax[2],0),h=F(bZ[6],0,0,g,f,e),i=a(j[18],0),k=a(a4[22],h),l=a(j[1],ce),m=b(j[52],aq[42],d),n=a(j[1],cf),o=b(j[14],n,m),p=b(j[14],o,l),q=b(j[14],p,k),r=b(j[14],q,i);return b(j[14],r,c)}var
e=a(j[1],cg),f=a(j[9],0),g=h(m[11],d,c,f),i=a(j[18],0),k=a(j[1],ch),l=b(j[14],k,i),n=b(j[14],l,g),o=b(j[14],n,e);return b(j[28],0,o)}var
o=[0,aE,[0,m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15],m[16],m[17],m[18],m[19],m[20],m[21],m[22],m[23],m[24]],ag,ar,a6,R,b2,b3,b4,aF,b5,b6,b7,b8,b$,ca,cd];O(127,o,"Ground_plugin.Sequent");function
v(i,g,f,p,c){a(cj[2],0);var
q=a(r[9],c),l=a(r[8],c);function
m(t,s,q){var
f=t,e=s,d=q;for(;;){if(0<f){if(e){var
n=e[2],g=e[1],i=a($[2][1][1],g),u=a(r[7],c);if(!h(w[41],l,i,u)){var
v=b(w[42],l,i);if(!b(k[17][23],v,d)){var
x=m(f-1|0,n,[0,g,d]),y=a($[2][1][3],g);return F(o[10],0,[0,i],y,x,c)}}var
f=f-1|0,e=n,d=[0,g,d];continue}var
z=a(j[1],ck);return h(af[3],0,0,z)}return p}}var
d=m(i,q,0);if(g)var
s=a(r[7],c),e=F(o[10],1,n[7],s,d,c);else
var
e=d;return b(f,e,c)}function
cl(a){if(0===a[0])return a[1];throw[0,H,cm]}function
J(b){if(0===b[0]){var
c=a(i[74],[0,b[1],0]);return a(g[66][8],c)}return d[1]}function
cn(e,c){try{var
h=function(b){var
c=a(i[42],b);return a(g[66][8],c)},k=b(o[12],e,c),l=b(d[67],k,h);return l}catch(c){c=u(c);if(c===I){var
f=a(j[1],co);return b(d[24],0,f)}throw c}}function
cp(n,m,e,l,c){var
p=0,q=1;function
r(a){return v(q,p,l,c,a)}try{var
t=[0,a(g[66][8],i[16]),0],w=[0,J(e),t],x=function(c){function
h(b){var
d=[0,a(f[L],[0,b,[0,c]]),0],e=a(i[U],d);return a(g[66][8],e)}return b(d[67],e,h)},y=b(o[12],n,c),z=[0,b(d[67],y,x),w],A=a(d[7],z),k=A}catch(c){c=u(c);if(c!==I)throw c;var
s=a(j[1],cq),k=b(d[24],0,s)}return h(d[33],k,r,m)}function
cr(e,c,b){var
f=1,j=0;function
k(a){return v(j,f,c,b,a)}var
l=a(g[66][8],i[bH]);return h(d[33],l,k,e)}function
cs(f,e,c){var
h=1,j=0;function
k(a){return v(j,h,e,c,a)}var
l=a(d[22],k),m=[0,a(g[66][1],l)],n=b(i[111],0,m),o=a(g[66][8],n);return b(d[4],o,f)}function
ct(f,e,c){var
j=1,k=1;function
l(a){return v(k,j,e,c,a)}var
m=a(d[22],l),n=a(g[66][8],i[17]),o=b(d[5],n,m),p=b(d[4],o,f),q=1,r=1;function
s(a){return v(r,q,e,c,a)}var
t=a(g[66][8],i[16]);return h(d[33],t,s,p)}function
cu(l,k,e,j,h,c){var
f=K(b(n[5],l,c),0)[1],m=0;function
o(a){return v(f,m,j,h,a)}var
p=a(g[66][8],i[16]),r=[0,b(d[26],f,p),0],s=[0,J(e),r],t=b(d[70][57],e,i[99]),u=[0,a(g[66][8],t),s],w=a(d[7],u);return q(d[33],w,o,k,c)}function
cv(l,j,e,h,f,c){var
m=b(n[5],l,c);function
o(c){var
j=0,k=0,l=[0,function(a){return v(c,k,h,f,a)},j],m=a(g[66][8],i[16]),n=[0,b(d[26],c,m),l],o=[0,J(e),n];return a(d[7],o)}var
p=b(k[19][15],o,m),r=b(d[70][57],e,i[99]),s=a(g[66][8],r);return q(d[35],s,p,j,c)}function
cw(c){var
e=b(d[70][57],c,i[99]);return a(g[66][8],e)}function
cx(c,l,r,j,p,o,h){var
s=c[2],t=c[1],m=q(n[6],0,c,l,h),e=m.length-1,u=a(k[19][12],l),x=0;function
y(a){return v(e,x,p,o,a)}var
z=a(g[66][8],i[16]),A=[0,b(d[26],e,z),0],B=[0,J(j),A];function
D(q){function
c(d){var
e=K(m,d)[d+1],c=a(k[17][1],e),g=[0,a(f[131],[0,[0,t,d+1|0],s]),u],h=a(f[L],g);function
i(b){return a(f[ak],c-b|0)}var
j=b(k[19][2],c,i),l=[0,b(C[8],c,h),j],n=[0,a(f[L],l)],o=[0,b(C[8],c,q),n],p=a(f[L],o);return b(w[23],p,e)}var
d=b(k[17][48],e,c),h=a(i[U],d);return a(g[66][8],h)}var
E=[0,b(d[67],j,D),B],F=a(d[7],E);return q(d[33],F,y,r,h)}function
cy(k,j,m,l,c,h,e){var
n=[0,0,k,b(C[8],1,j)],o=a(f[bH],n),p=0,q=0,r=0,s=1,t=2;function
u(a){return v(t,s,h,e,a)}var
w=[0,a(d[22],u),r],x=[0,a(g[66][8],i[17]),w],y=[0,a(g[66][8],i[17]),x],z=[0,J(c),y];function
A(l){var
c=a(f[ak],2),d=[0,0,b(C[8],1,k),c],e=[0,l,[0,a(f[bD],d)]],h=[0,0,j,a(f[L],e)],m=[0,a(f[bD],h),0],n=a(i[U],m);return a(g[66][8],n)}var
B=[0,b(d[67],c,A),z],D=[0,a(d[7],B),q];function
E(b){var
c=a(i[42],b);return a(g[66][8],c)}var
F=[0,b(d[67],c,E),D],G=a(i[_],o),H=a(g[66][8],G),I=[0,b(d[11],H,F),p],K=0,M=0,N=1,O=[0,function(a){return v(N,M,h,e,a)},K],P=[0,J(c),O],Q=[0,a(g[66][8],i[17]),P],R=[0,a(d[7],Q),I],S=a(i[_],m),T=a(g[66][8],S),V=b(d[11],T,R);return b(d[4],V,l)}function
cz(f,e,c){if(n[1][1])var
l=a(j[1],cA),k=b(d[24],0,l);else
var
k=f;var
m=1,o=0;function
p(a){return v(o,m,e,c,a)}var
q=a(d[22],p),r=a(g[66][8],i[17]),s=b(d[5],r,q),t=b(d[4],s,f),u=1,w=0;function
x(a){return v(w,u,e,c,a)}var
y=a(g[66][8],i[16]),z=h(d[33],y,x,t);return b(d[4],z,k)}function
cB(l,k,e,j,h,c){var
f=K(b(n[5],l,c),0)[1],m=0,o=0,p=f-1|0,r=[0,function(a){return v(p,o,j,h,a)},m],s=a(g[66][8],i[16]),t=[0,b(d[26],f,s),r],u=[0,J(e),t],w=a(d[7],u),x=b(d[70][57],e,i[99]),y=a(g[66][8],x);return q(d[33],y,w,k,c)}function
cC(l,k,j,e,c){var
m=0,n=a(o[7],c),p=1,q=0;function
s(a){return v(q,p,e,n,a)}var
t=[0,a(d[22],s),m],u=0,w=a(o[7],c),x=0,y=1;function
z(a){return v(y,x,e,w,a)}var
A=[0,a(d[22],z),u],B=[0,a(g[66][8],i[16]),A],C=[0,J(j),B];function
D(j,c){var
e=b(r[11],c,1),k=[0,j,[0,a(f[av],e)]],l=a(f[L],k),m=a(i[74],[0,e,0]),n=a(g[66][8],m),o=a(i[U],[0,l,0]),p=a(g[66][8],o);return h(d[5],p,n,c)}var
E=[0,b(d[67],j,D),C],F=[0,a(g[66][8],i[16]),E],G=[0,a(d[7],F),t],H=a(i[_],l),I=a(g[66][8],H),K=b(d[11],I,G);return b(d[4],K,k)}function
a8(a){return h(ci[4],cE,cD,a)}var
N=[aU,function(e){var
b=a8(cF),c=[0,[0,0,[1,a(f[41],b)[1]]],0],d=a8(cG);return[0,[0,0,[1,a(f[41],d)[1]]],c]}];function
cH(c){if(c){var
d=bz(N),f=[0,c[1],1],h=bE===d?N[1]:aU===d?a(a7[2],N):N,j=b(i[68],h,f);return a(g[66][8],j)}var
e=bz(N),k=bE===e?N[1]:aU===e?a(a7[2],N):N,l=a(i[67],k);return a(g[66][8],l)}var
p=[0,v,cl,J,cn,cp,cr,cs,ct,cu,cv,cw,cx,cy,cz,cB,cC,a(d[56],cH)];O(134,p,"Ground_plugin.Rules");function
cL(c,a){if(0===c[0]){var
d=c[1],e=d[1];if(0===a[0]){var
f=a[1],g=f[2],h=d[2],i=a[2],j=c[2],k=f[1],l=o[1][1],m=function(b,a){return b-a|0},p=function(b,a){return b-a|0},q=b(n[3],p,m);return e6(n[4],q,l,k,e,j,i,h,g)}return 0===e?1:-1}return 0===a[0]?0===a[1][1]?-1:1:b(o[1][1],c[1],a[1])}function
cM(c,a){return c===a?0:c===n[7]?1:a===n[7]?-1:b(ae[18][1],c,a)}var
cN=[0,function(b,a){return aO(n[3],cL,cM,a[1],b[1],a[2],b[2])}],as=a(k[20][1],cN);function
a$(c,n){var
d=[0,as[1]];function
e(f){var
l=f[3];if(0===l[0]){var
c=l[1];if(typeof
c==="number")var
p=1;else
if(2===c[0])var
x=c[3],m=c[2],w=c[1],g=1,p=0;else
var
p=1;if(p)var
g=0}else{var
e=l[1];if(typeof
e==="number")var
g=0;else
var
x=e[3],m=e[2],w=e[1],g=1}if(g){var
y=f[4],r=[0,1],s=[0,x],D=f[1],t=function(c,a){function
e(f,e){var
a=q(ap[3],w,m,f,e);if(a){var
c=a[1];return 0===c[0]?(r[1]=0,d[1]=b(as[4],[0,c,D],d[1]),0):(s[1]=1,0)}return a}var
f=c[1];function
g(c){var
d=a[2];function
f(a){return e(c,a)}return b(k[17][11],f,d)}b(k[17][11],g,f);var
h=c[2];function
i(c){var
d=a[1];function
f(a){return e(c,a)}return b(k[17][11],f,d)}return b(k[17][11],i,h)},A=n[1],B=function(a){return t(y,a[4])};b(o[6][5],B,A);var
i=n[5],z=i?[0,i[1],0]:i;t(y,[0,z,n[3]]);var
u=r[1],v=u?s[1]:u,E=v?(d[1]=b(as[4],[0,[1,m],f[1]],d[1]),0):v;return E}var
C=a(j[1],cO);return h(af[3],0,0,C)}b(k[17][11],e,c);return a(as[20],d[1])}function
ba(b){try{var
d=a(o[13],b),e=d[1],c=e[3];if(0===c[0])var
f=c[1],i=typeof
f==="number"?0:2===f[0]?1:0;else
var
i=typeof
c[1]==="number"?0:1;if(i)var
h=ba(d[2]),g=[0,[0,e,h[1]],h[2]];else
var
g=[0,0,b];return g}catch(a){a=u(a);if(a===aD[1])return[0,0,b];throw a}}var
bb=a(x[1][5],cP);function
cQ(y,x,c,d,w){var
o=a(r[8],c),p=a(a_[2],c);if(y===n[7])var
q=bb;else
var
F=b(r[15],c,x),G=h(aA[23],o,p,F),v=a(f[34],G)[1],H=v?v[1]:bb,q=H;function
z(b){return a(f[ak],d-b|0)}var
A=b(k[17][48],d,z),m=d,l=0,j=o,g=p,e=0,B=b(C[12],A,w);for(;;){if(0===m)return[0,g,e,B];var
s=h(i[14],l,q,c),D=a(a9[21][2],g),t=bA(cJ[7],j,D,0,0,0,0,ac[bF]),E=a(a9[6],t[2]),u=[0,[0,s],t[1][1]],m=m-1|0,l=[0,s,l],j=b(cK[20],u,j),g=E,e=[0,u,e];continue}}var
V=[0,ba,a$,function(s,l,m,e,c){var
t=a$(s,e);function
v(k){if(k[2]===n[7])var
c=k[1],l=function(h,k){if(0===c[0]){var
e=c[1];if(0===e[1]){var
l=a(o[7],k),m=[0,q(p[1],0,1,h,l),0],n=a(d[20],m),s=a(i[bM],[0,[0,e[2],0]]),t=a(g[66][8],s);return b(d[5],t,n)}var
u=a(j[1],cU);return b(d[24],0,u)}var
v=a(g[66][8],i[41]),w=[0,a(d[21],v),0],x=a(o[7],k),y=[0,q(p[1],0,1,h,x),0],z=[0,a(d[20],y),0],A=[0,function(c){var
d=b(r[11],c,1),e=[0,[0,a(f[av],d),0]],h=a(i[bM],e);return b(g[66][8],h,c)},z],B=[0,a(g[66][8],i[17]),A],C=[0,a(d[7],B),w],D=a(i[_],c[1]),E=a(g[66][8],D);return b(d[11],E,C)};else
var
l=function(v,l){var
c=k[2],m=k[1];if(0===m[0]){var
e=m[1],n=e[2],s=e[1];if(b(o[9],[0,c,[0,e]],l)){var
x=a(j[1],cR);return b(d[24],0,x)}if(0<s)var
y=function(k,e){var
j=cQ(c,k,e,s,n),o=j[2],p=a(f[L],[0,k,[0,j[3]]]),l=b(w[23],p,o);try{var
y=j[1],z=a(r[8],e),A=q(cI[2],0,z,y,l),m=A}catch(b){b=u(b);if(!a(af[22],b))throw b;var
m=a(af[6],cS)}var
t=a(i[U],[0,l,0]),v=a(g[66][8],t),x=a(a_[11],m[1]);return h(d[5],x,v,e)},t=b(d[67],c,y);else
var
E=function(b){var
c=[0,a(f[L],[0,b,[0,n]]),0],d=a(i[U],c);return a(g[66][8],d)},t=b(d[67],c,E);var
z=b(o[8],[0,c,[0,e]],l),A=a(o[7],z),B=[0,q(p[1],1,0,v,A),0],C=[0,a(d[20],B),0],D=[0,t,[0,a(g[66][8],i[17]),C]];return a(d[7],D)}if(b(o[9],[0,c,0],l)){var
F=a(j[1],cT);return b(d[24],0,F)}var
G=a(g[66][8],i[41]),H=[0,a(d[21],G),0],I=b(o[8],[0,c,0],l),J=a(o[7],I),K=[0,q(p[1],1,0,v,J),0],M=[0,a(d[20],K),0],N=[0,a(g[66][8],i[17]),M];function
O(d,c){var
e=b(r[11],c,1),h=[0,d,[0,a(f[av],e)]],j=[0,a(f[L],h),0],k=a(i[U],j);return b(g[66][8],k,c)}var
P=[0,b(d[67],c,O),N],Q=[0,a(g[66][8],i[17]),P],R=[0,a(d[7],Q),H],S=a(i[_],m[1]),T=a(g[66][8],S);return b(d[11],T,R)};return l(m,e)}var
x=b(k[17][12],v,t),y=a(d[19],x);return h(d[4],y,l,c)}];O(Z,V,"Ground_plugin.Instances");var
aG=[0,function(T,s,e){var
c=[0,x[18][1]];function
i(d){try{var
e=a(be[23],d),g=a(f[41],e)[1];c[1]=b(x[18][7],g,c[1]);var
h=0;return h}catch(a){a=u(a);if(a===f[28])return 0;throw a}}var
k=a(be[26],0);b(bc[11],i,k);var
l=a(x[18][12],c[1]),m=b(G[8][13],G[14],[0,x[1][11][2],l]);n[2][1]=m;function
w(x,k,E){if(t.caml_equal(a(z[8],0),cV)){var
U=a(aq[66],E);b(bd[15],0,U)}try{var
H=a(o[13],k),g=H[2],i=H[1],e=function(a){return b(o[11],x,a)},X=0,f=function(a,b){return w(X,a,b)},c=function(a){return w([0,i,x],g,a)},A=i[3];if(0===A[0]){var
m=A[1];if(typeof
m==="number")var
r=a(p[11],i[1]);else
switch(m[0]){case
0:var
Y=e(g),r=F(p[9],m[1],c,i[1],f,Y);break;case
1:var
Z=e(g),r=F(p[10],m[1],c,i[1],f,Z);break;case
2:var
J=a(V[1],k),K=J[1],_=J[2],$=b(y[22],K,x),L=function(a){return w($,_,a)};if(n[1][1])if(0<k[8])var
aa=e(k),M=q(V[3],K,L,f,aa),B=1;else
var
B=0;else
var
B=0;if(!B)var
M=L;var
r=M;break;case
3:if(n[1][1])var
ab=e(g),r=F(p[15],m[1],c,i[1],f,ab);else
var
r=c;break;default:var
l=m[2];if(typeof
l==="number")var
s=c;else
switch(l[0]){case
3:if(0<k[8])if(n[1][1])var
ae=e(g),s=F(p[16],l[1],c,i[1],f,ae),C=1;else
var
C=0;else
var
C=0;if(!C)var
s=c;break;case
4:if(n[1][1])var
af=e(g),s=aO(p[12],l[1],l[2],c,i[1],f,af);else
var
s=c;break;case
5:var
ag=e(g),s=bA(p[13],l[1],l[2],l[3],c,i[1],f,ag);break;default:var
ad=e(g),s=aO(p[12],l[1],l[2],c,i[1],f,ad)}var
ac=e(g),r=F(p[5],m[1],s,i[1],f,ac)}var
I=r}else{var
N=A[1];if(typeof
N==="number")switch(N){case
0:var
ah=e(g),v=h(p[8],c,f,ah);break;case
1:var
ai=e(g),v=h(p[6],c,f,ai);break;case
2:var
aj=e(g),v=h(p[7],c,f,aj);break;case
3:var
v=c;break;default:if(n[1][1])var
ak=a(j[1],cW),O=b(d[24],0,ak);else
var
O=c;var
al=e(g),v=h(p[14],O,f,al)}else{var
P=a(V[1],k),Q=P[1],am=P[2],an=b(y[22],Q,x),R=function(a){return w(an,am,a)};if(n[1][1])if(0<k[8])var
ao=e(k),S=q(V[3],Q,R,f,ao),D=1;else
var
D=0;else
var
D=0;if(!D)var
S=R;var
v=S}var
I=v}var
G=I}catch(a){a=u(a);if(a!==aD[1])throw a;var
G=T}var
W=b(p[4],k[4],k);return h(d[4],W,G,E)}var
g=a(s,e),v=g[2],A=g[1],B=0;function
C(a,b){return w(B,a,b)}var
D=a(r[9],e),E=a(bc[1],D);return F(p[1],E,1,C,A,v)}];O(_,aG,"Ground_plugin.Ground");a(aJ[12],c3);var
ai=[0,3];function
c4(a){return a?(ai[1]=b(y[5],a[1],0),0):(ai[1]=3,0)}var
c7=[0,1,0,c6,c5,function(a){return[0,ai[1]]},c4];a(bi[3],c7);var
X=[0,aS];function
c8(a){return a?(X[1]=b(y[5],a[1],0),0):(X[1]=0,0)}var
c$=[0,1,0,c_,c9,function(a){return[0,X[1]]},c8];a(bi[3],c$);var
da=[0,bo,0],db=[0,function(b,a){return q(bm[14],0,0,0,0)}];h(aH[9],0,bo,db);var
bp=[31,E[4],da,0],aL=b(cX[1],[0,bp],dc),bq=aL[3],aM=aL[2],br=aL[1],dd=0,df=[0,[0,0,function(c){if(c)if(!c[2]){var
d=c[1],e=a(l[4],s[14]),f=b(l[8],e,d);return function(e){var
c=a(bg[3],f),d=a(bh[10][2],0);return b(br,a(bh[6],d),c)}}return a(y[2],de)}],dd];function
dg(b,a){return h(bf[1],a[1],[0,dh,b],a[2])}b(W[80],dg,df);var
di=0,dk=[0,function(b){if(b)if(!b[2])return function(a){return at[6]};return a(y[2],dj)},di];function
dl(c,a){return b(at[3],[0,dm,c],a)}b(W[80],dl,dk);var
dn=[6,a(D[12],s[14])],dp=a(l[4],s[14]),dt=[0,[0,ds,[0,dr,[0,dq,[0,[1,E[4],dp,dn],0]]]],0];function
du(b,a){return h(bk[1],[0,dv,b],0,a)}b(W[80],du,dt);var
dw=0,dz=[0,[0,0,function(c){return c?a(y[2],dx):function(f){var
c=a(bq,0),d=a(j[1],dy),e=b(j[14],d,c);return b(bd[11],0,e)}}],dw];function
dA(b,a){return h(bf[1],a[1],[0,dB,b],a[2])}b(W[80],dA,dz);var
dC=0,dE=[0,function(b){return b?a(y[2],dD):function(a){return at[5]}},dC];function
dF(c,a){return b(at[3],[0,dG,c],a)}b(W[80],dF,dE);function
dI(b,a){return h(bk[1],[0,dJ,b],0,a)}b(W[80],dI,dH);var
dL=a(j[1],dK),dM=b(d[24],0,dL);function
Y(i,b,f,e,d){var
c=n[1][1];try{n[1][1]=i;var
j=b?b[1]:a(aM,0)[2],k=function(c){var
d=a(o[14],ai[1]),b=h(o[15],f,d,c);return h(o[16],e,b[1],b[2])},l=a(g[66][8],j),m=h(aG[1],l,k,d);n[1][1]=c;return m}catch(a){a=u(a);n[1][1]=c;throw a}}function
bs(i,g,f,c){var
d=h(j[54],j[44],c0[41],c),e=a(j[1],dN);return b(j[14],e,d)}function
bt(l,k,i,c){function
d(b){return a(aq[42],b[2])}var
e=a(a4[6],d),f=h(j[54],j[44],e,c),g=a(j[1],dO);return b(j[14],g,f)}function
bu(i,g,f,c){var
d=h(j[54],j[44],aq[42],c),e=a(j[1],dP);return b(j[14],e,d)}function
dQ(b){return a(j[26],dR)}var
bv=q(c2[2],dT,dS,0,dQ),A=a(l[2],dU);function
dV(c,d){var
e=a(l[17],s[18]),f=a(l[4],e),g=b(l[7],f,d),h=b(bg[10],c,g),i=a(l[17],s[18]),j=a(l[5],i);return[0,c,b(l[8],j,h)]}b(bj[5],A,dV);function
dW(d,c){var
e=a(l[17],s[18]),f=a(l[5],e),g=b(l[7],f,c),h=b(cY[2],d,g),i=a(l[17],s[18]),j=a(l[5],i);return b(l[8],j,h)}b(bj[6],A,dW);function
dX(d,c){var
e=a(l[17],s[18]),f=a(l[5],e),g=b(l[7],f,c);return b(z[9],d,g)}b(aK[6],A,dX);var
dY=a(l[17],s[18]),dZ=a(l[6],dY),d0=[0,a(aK[2],dZ)];b(aK[3],A,d0);var
d1=a(l[4],A),aN=h(D[13],D[9],d2,d1),d3=0,d4=0;function
d5(a,c,b){return[0,a,0]}var
d6=[6,D[14][16]],d8=[0,[0,[0,[0,0,[0,a(ah[15],d7)]],d6],d5],d4];function
d9(b,e,a,d,c){return[0,a,b]}var
d$=[0,a(ah[15],d_)],ea=[2,[6,D[14][16]],d$],ec=[0,a(ah[15],eb)],ed=[6,D[14][16]],ef=[0,[0,[0,[0,[0,[0,0,[0,a(ah[15],ee)]],ed],ec],ea],d9],d8];function
eg(d,c,a,f,e){b(bv,0,0);return[0,a,[0,c,d]]}var
eh=[3,[6,D[14][16]]],ei=[6,D[14][16]],ej=[6,D[14][16]],el=[0,[0,[0,[0,[0,[0,0,[0,a(ah[15],ek)]],ej],ei],eh],eg],ef],em=[0,0,[0,[0,0,0,[0,[0,0,function(a){return 0}],el]],d3]];h(D[23],aN,0,em);q(cZ[1],A,bs,bt,bu);var
en=[0,aN,0];function
eo(c){var
d=c[2],e=a(l[4],A);return[0,b(l[7],e,d)]}h(aI[5],ep,eo,en);var
eq=0,es=[0,function(c){if(c){var
d=c[2];if(d){var
e=d[2];if(e)if(!e[2]){var
f=c[1],h=a(l[18],s[14]),i=a(l[6],h),j=b(z[2][7],i,f),k=d[1],m=a(l[6],A),n=b(z[2][7],m,k),o=e[1],p=a(l[17],au[7]),q=a(l[6],p),r=b(z[2][7],q,o);return function(c){var
d=a(z[19],c),e=b(ad[15],d,j),f=1;function
h(a){return Y(f,e,n,r,a)}return a(g[66][1],h)}}}}return a(y[2],er)},eq],eu=[0,function(c){if(c){var
d=c[2];if(d)if(!d[2]){var
e=c[1],f=a(l[18],s[14]),h=a(l[6],f),i=b(z[2][7],h,e),j=d[1],k=a(l[17],au[7]),m=a(l[6],k),n=b(z[2][7],m,j);return function(c){var
e=a(z[19],c),d=0,f=b(ad[15],e,i),h=1;function
j(a){return Y(h,f,d,n,a)}return a(g[66][1],j)}}}return a(y[2],et)},es],ew=[0,function(c){if(c){var
d=c[2];if(d)if(!d[2]){var
e=c[1],f=a(l[18],s[14]),h=a(l[6],f),i=b(z[2][7],h,e),j=d[1],k=a(l[6],A),m=b(z[2][7],k,j);return function(c){var
e=a(z[19],c),d=0,f=b(ad[15],e,i),h=1;function
j(a){return Y(h,f,m,d,a)}return a(g[66][1],j)}}}return a(y[2],ev)},eu],ex=a(bn[12],ew);h(aH[9],0,[0,S,ey],ex);function
ez(B){var
j=a(x[1][6],eA),c=au[7],h=0,i=0;if(0===c[0]){var
k=[0,eB,[0,[1,E[4],[0,[5,[0,c[1]]]],j],i]],l=a(x[1][6],eC);if(0===A[0]){var
m=[0,[1,E[4],[5,[0,A[1]]],l],k],n=a(x[1][6],eD),d=s[14];if(0===d[0]){var
o=[0,[0,eE,[0,[1,E[4],[4,[5,[0,d[1]]]],n],m]],h],q=a(x[1][6],eF),e=au[7],p=0;if(0===e[0]){var
r=[0,eG,[0,[1,E[4],[0,[5,[0,e[1]]]],q],p]],t=a(x[1][6],eH),f=s[14];if(0===f[0]){var
u=[0,[0,eI,[0,[1,E[4],[4,[5,[0,f[1]]]],t],r]],o],v=0,w=a(x[1][6],eJ);if(0===A[0]){var
y=[0,[1,E[4],[5,[0,A[1]]],w],v],z=a(x[1][6],eK),g=s[14];if(0===g[0])return b(aI[4],[0,S,eM],[0,[0,eL,[0,[1,E[4],[4,[5,[0,g[1]]]],z],y]],u]);throw[0,H,eN]}throw[0,H,eO]}throw[0,H,eP]}throw[0,H,eQ]}throw[0,H,eR]}throw[0,H,eS]}throw[0,H,eT]}b(aJ[19],ez,S);var
eU=0,eW=[0,function(c){if(c)if(!c[2]){var
d=c[1],e=a(l[18],s[14]),f=a(l[6],e),h=b(z[2][7],f,d);return function(c){var
f=a(z[19],c),d=0,e=0,i=b(ad[15],f,h),j=0;function
k(a){return Y(j,i,e,d,a)}return a(g[66][1],k)}}return a(y[2],eV)},eU],eX=a(bn[12],eW);h(aH[9],0,[0,S,eY],eX);function
eZ(g){var
f=a(x[1][6],e0),c=s[14],d=0,e=0;if(0===c[0])return b(aI[4],[0,S,e2],[0,[0,e1,[0,[1,E[4],[4,[5,[0,c[1]]]],f],e]],d]);throw[0,H,e3]}b(aJ[19],eZ,S);function
e4(q){var
f=b(bl[3][4],X[1],0),i=a(aM,0)[2],c=0,e=0,j=[0,b(d[70][3],i,f)],k=1;function
l(a){return Y(k,j,e,c,a)}var
m=a(g[66][1],l),n=b(bl[3][4],X[1],0),o=h(bm[18],0,0,0),p=b(d[70][12],o,n);return b(d[70][12],p,m)}var
e5=a(g[13],0),bw=b(g[67][1],e5,e4);a(c1[3][3],bw);var
bx=[0,S,ai,X,bp,br,aM,bq,dM,Y,bs,bt,bu,bv,A,aN,bw];O(173,bx,"Ground_plugin.G_ground");O(174,[0,n,ap,o,p,V,aG,bx],"Ground_plugin");return});
