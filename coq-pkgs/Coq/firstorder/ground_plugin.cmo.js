(function(fB){"use strict";var
a1="Firstorder",aj=140,ak=145,al=112,a0="$l",bC="already done",aX="firstorder_using",bQ=",",bE=250,aB=": ",bG=105,aA="$t",ax="gintuition",W=148,bP="Exception in vernac extend ",M=124,aW=246,bO=115,Q="Extension: cannot occur",az=113,bN=144,bD=122,bM="with",bB="Depth",$="firstorder",aZ="ground_plugin",ay="Firstorder_Print_Solver",aV=100,bL="Solver",R="plugins/firstorder/g_ground.ml4",bF="Exception in tactic extend ",bK=248,aw="Firstorder_Set_Solver",aU="using",bJ="-----",aY="using ",V=114,bI=121,bH="reversible in 1st order mode",v=fB.jsoo_runtime,L=v.caml_check_bound,by=v.caml_fresh_oo_id,c=v.caml_new_string,bz=v.caml_obj_tag,P=v.caml_register_global,r=v.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):v.caml_call_gen(a,[b])}function
b(a,b,c){return a.length==2?a(b,c):v.caml_call_gen(a,[b,c])}function
i(a,b,c,d){return a.length==3?a(b,c,d):v.caml_call_gen(a,[b,c,d])}function
s(a,b,c,d,e){return a.length==4?a(b,c,d,e):v.caml_call_gen(a,[b,c,d,e])}function
G(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):v.caml_call_gen(a,[b,c,d,e,f])}function
aT(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):v.caml_call_gen(a,[b,c,d,e,f,g])}function
bA(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):v.caml_call_gen(a,[b,c,d,e,f,g,h])}function
fA(a,b,c,d,e,f,g,h,i){return a.length==8?a(b,c,d,e,f,g,h,i):v.caml_call_gen(a,[b,c,d,e,f,g,h,i])}var
e=v.caml_get_global_data(),U=c(aZ),bp=[0,c(aZ),c("auto_with")],f=e.Term,k=e.Util,aa=e.Context,D=e.Vars,x=e.Termops,an=e.Hipattern,aC=e.Global,am=e.Inductiveops,H=e.Closure,t=e.Tacmach,y=e.Names,ac=e.Int,J=e.Not_found,B=e.Queue,ad=e.Evd,aF=e.Reductionops,I=e.Assert_failure,h=e.Pp,a6=e.Ppconstr,ar=e.Printer,aH=e.Hints,p=e.Pervasives,C=e.Errors,af=e.Globnames,ae=e.Option,aI=e.Heap,a9=e.CamlinternalLazy,j=e.Tactics,g=e.Proofview,d=e.Tacticals,ba=e.Refiner,a$=e.Sigma,z=e.Tacinterp,T=e.Feedback,be=e.List,bf=e.Classops,bm=e.Cc_plugin,bn=e.Auto,u=e.Constrarg,F=e.Loc,aN=e.Tacentries,l=e.Genarg,av=e.Stdarg,bh=e.Tacintern,bl=e.Egramml,au=e.Vernac_classifier,bg=e.Vernacinterp,bi=e.Locality,aM=e.Tacenv,E=e.Pcoq,aO=e.Mltop,bj=e.Goptions,aP=e.Geninterp,bk=e.Genintern,Y=e.CList,ah=e.CLexer,bo=e.Array,a2=[0,1],aD=[0,H[12]],bT=c("Formula.Is_atom"),bV=[0,0,[0,0,0]],bW=c("_"),bY=c("Unify.UFAIL"),ch=c(" : "),ci=c("| "),cj=c(bJ),ck=c(bJ),ce=c(" : No such Hint database"),cf=c("Firstorder: "),cI=c("iff"),cJ=c("not"),cG=[0,c("Init"),[0,c("Logic"),0]],cH=c("User"),cD=c(bH),ct=c("No link"),cr=c("No axiom link"),cp=[0,c("plugins/firstorder/rules.ml"),52,7],cn=c("Not the expected number of hyps"),cX=c("not implemented ... yet"),cV=c("Untypable instance, maybe higher-order non-prenex quantification"),cU=c(bC),cW=c(bC),cR=c("can't happen"),cS=c("x"),cY=[0,0],cZ=c(bH),eJ=c(aA),eM=[0,c(R),1,0],eK=[0,c(ax)],eL=c(ax),eE=c(Q),eX=c("$l'"),fe=[0,c(R),1,0],eY=[0,c(bM)],eZ=c(a0),fd=[0,c(R),1,0],e0=c(aA),fc=[0,c(R),1,0],e1=[0,c($)],e2=c(a0),fb=[0,c(R),1,0],e3=[0,c(bM)],e4=c(aA),fa=[0,c(R),1,0],e5=[0,c($)],e6=c(a0),e$=[0,c(R),1,0],e7=c(aA),e_=[0,c(R),1,0],e8=[0,c($)],e9=c($),eS=c(Q),eQ=c(Q),eO=c(Q),eb=c('Deprecated syntax; use "," as separator'),dN=c(aY),dM=c(aY),dL=c(aY),dH=c(ay),fp=c(ay),fm=c(Q),fk=c(ay),fh=c("Firstorder solver tactic is "),fg=c(Q),dw=c(aw),fz=c(aw),fw=c(Q),fu=c(aw),fr=c(Q),c6=c(aZ),c8=[0,c(a1),[0,c(bB),0]],c9=c("Firstorder Depth"),da=[0,c("Congruence"),[0,c(bB),0]],db=c("Congruence Depth"),df=c("Firstorder default solver"),dh=c(aB),di=c(aw),dk=c(bP),dr=[0,c(bL)],ds=[0,c(a1)],dt=[0,c("Set")],dy=c(aB),dz=c(ay),dB=c(bP),dF=[0,[0,[0,c("Print")],[0,[0,c(a1)],[0,[0,c(bL)],0]]],0],dI=c("GTauto failed"),dO=c(aX),dW=c(aX),d1=c(aU),d4=c(bQ),d7=c(bQ),d_=c(aU),ef=c(aU),ek=c(aX),eV=c($),em=c(aB),en=c($),ep=c(bF),eH=c(ax),eu=c(aB),ev=c(ax),ex=c(bF),b2=e.Constrextern,cl=e.Coqlib,cm=e.Control,cL=e.Typing,cM=e.Evarutil,cN=e.Environ,c4=e.Flags,c1=e.Tacsubst,c3=e.Libnames,c0=e.Tactic_option,c2=e.Pptactic,c5=e.Decl_mode_plugin;function
bR(h,g,f,e,d,c){var
a=b(h,f,e);return 0===a?b(g,d,c):a}function
bS(j,i,h,g,f,e,d,c){var
a=s(j,h,g,f,e);return 0===a?b(i,d,c):a}var
ab=[bK,bT,by(0)];function
a3(h,g){var
b=h,c=g;for(;;){var
d=a(f[aj],c);if(6===d[0]){var
e=d[3];if(0<b){var
b=b-1|0,c=e;continue}return 1+a3(0,e)|0}return 0}}function
bU(c,d){var
e=a(aC[26],c[1])[1][6],f=a(t[8],d),g=b(am[4],f,c);function
h(a){return a3(e,a)}return b(k[19][15],h,g)}function
ao(g,e,d,c){var
h=a(t[8],c),i=b(am[4],h,e);function
j(c){var
e=b(f[76],c,d),h=b(f[85],g,e)[2];return a(f[83],h)[1]}return b(k[19][15],j,i)}function
aE(c){var
d=a(t[8],c),e=i(H[37],0,aD[1],d);return function(c){var
d=a(H[31],c);return b(H[41],e,d)}}function
ap(m,D){var
E=aE(m),A=a(t[8],m),B=i(H[37],0,aD[1],A),C=a(H[31],D),c=b(H[42],B,C),n=a(an[23],c);if(n){var
o=n[1],F=a(x[55],o[2]);return[0,o[1],F]}var
p=a(an[21],c);if(p){var
q=p[1];return[5,q[2],q[3]]}var
r=a(an[27],c);if(r){var
e=r[1],g=e[2],s=a(f[43],e[1]),h=s[2],d=s[1],u=a(aC[26],d),j=u[2],v=u[1],w=j[4].length-1;if(0===w)return[1,[0,d,h],g];var
G=0<e[3]?1:0,I=function(b){var
c=v[6];return a(x[70],b)===c?1:0},l=b(k[19][28],I,j[9]);if(!a(am[19],[0,d,v,j])){var
K=G?l?1:0:1;if(K)return 1===w?[2,[0,d,h],g,l]:[3,[0,d,h],g,l]}return[6,c]}var
y=a(an[29],c);if(y){var
z=y[1],J=z[2];return[4,a(f[43],z[1]),J]}return[6,a(E,c)]}var
bX=[0,a(y[1][5],bW)];function
a4(l,o,e,c){var
m=[0,0],h=[0,0],j=[0,0],y=aE(l);function
g(A,d,z){var
e=A,n=z;for(;;){var
c=ap(l,n);switch(c[0]){case
0:g(e,1-d,c[1]);var
n=c[2];continue;case
1:var
q=1-d,B=q?(m[1]=1,0):q;return B;case
4:var
v=c[2],G=a(o,1),H=a(f[V],G),I=L(ao(1,c[1],v,l),0)[1],J=function(f,i,c){var
h=a(aa[1][1][3],c);return g([0,H,e],d,b(D[8],f,h))},K=2-a(k[17][1],v)|0;return s(k[17][83],J,K,0,I);case
5:var
M=a(o,1),N=a(f[V],M),e=[0,N,e],n=c[2];continue;case
6:var
p=i(D[11],e,0,c[1]),w=1-a(f[7],p);if(w){if(d){h[1]=[0,p,h[1]];return 0}j[1]=[0,p,j[1]];var
x=0}else
var
x=w;return x;default:if(c[3]){var
r=a(y,i(D[11],e,0,n));if(d)h[1]=[0,r,h[1]];else
j[1]=[0,r,j[1]]}var
t=ao(0,c[1],c[2],l),C=function(f,i,c){var
h=a(aa[1][1][3],c);return g(e,d,b(D[8],f,h))},E=function(b){var
c=1-a(k[17][1],b)|0;return s(k[17][83],C,c,0,b)};if(d)var
F=function(a){return a?0:1},u=b(k[19][28],F,t);else
var
u=d;if(u)m[1]=1;return b(k[19][13],E,t)}}}switch(e){case
0:g(0,0,c);break;case
1:g(0,1,c);break;default:var
d=a(f[79],c),n=d[1],p=function(c){var
b=a(o,1);return a(f[V],b)},q=b(k[17][14],p,n);g(q,0,d[2]);m[1]=0}return[0,m[1],[0,h[1],j[1]]]}var
n=[0,a2,aD,bR,bS,bU,ao,bX,a4,function(n,t,f,e,m){var
i=aE(e);try{var
o=a(m,0)+1|0,p=a2[1]?a4(e,m,n,f):bV,q=p[1];if(1===n){var
j=ap(e,f);switch(j[0]){case
0:var
g=0;break;case
1:var
g=3;break;case
2:var
g=1;break;case
3:var
g=2;break;case
4:var
w=L(ao(0,j[1],j[2],e),0)[1],x=a(k[17][bG],w),g=[0,o,a(aa[1][1][3],x),q];break;case
5:var
g=4;break;default:throw[0,ab,j[1]]}var
s=[1,g]}else{var
c=ap(e,f);switch(c[0]){case
0:var
l=c[1],y=a(i,l),b=ap(e,l);switch(b[0]){case
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
2:if(c[3])throw[0,ab,a(i,f)];var
h=[0,c[1]];break;case
3:if(c[3])throw[0,ab,a(i,f)];var
h=[1,c[1]];break;case
4:var
h=[3,c[1]];break;case
5:var
h=[2,o,c[1],q];break;default:throw[0,ab,c[1]]}var
s=[0,h]}var
u=p[2],v=[0,[0,t,a(i,f),s,u]];return v}catch(a){a=r(a);if(a[1]===ab)return[1,a[2]];throw a}}];P(119,n,"Ground_plugin.Formula");var
N=[bK,bY,by(0)];function
aG(T,S){var
g=a(B[2],0),n=[0,0];function
q(c,a){var
d=n[1];function
e(d){var
e=b(x[54],[0,[0,c,a],0],d[2]);return[0,d[1],e]}n[1]=[0,[0,c,a],b(k[17][12],e,d)];return 0}function
s(c){var
d=a(f[aj],c);if(2===d[0])try{var
e=s(b(ac[4][2],d[1],n[1]));return e}catch(a){a=r(a);if(a===J)return c;throw a}return c}b(B[3],[0,T,S],g);try{for(;;){var
y=a(B[5],g),h=s(b(aF[22],ad[16],y[1])),i=s(b(aF[22],ad[16],y[2])),e=a(f[aj],h),c=a(f[aj],i);switch(e[0]){case
2:var
o=e[1];if(2===c[0]){var
v=c[1];if(1-(o===v?1:0))if(o<v)q(v,h);else
q(o,i)}else{var
u=b(x[54],n[1],i),Z=a(x[44],u);if(a(ac[2][2],Z))var
_=a(f[V],o),Q=b(x[53],_,u)?0:(q(o,u),1);else
var
Q=0;if(!Q)throw[0,N,h,i]}var
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
H=F.length-1;if(H!==G.length-1)throw[0,N,h,i];var
I=H-1|0,ab=0;if(!(I<0)){var
j=ab;for(;;){var
ae=L(G,j)[j+1],af=[0,L(F,j)[j+1],ae];b(B[3],af,g);var
ag=j+1|0;if(I!==j){var
j=ag;continue}break}}var
d=3;break;default:var
d=2}break;case
13:var
K=e[4];switch(c[0]){case
2:var
d=0;break;case
5:var
d=1;break;case
13:var
M=c[4];b(B[3],[0,e[2],c[2]],g);b(B[3],[0,e[3],c[3]],g);var
O=K.length-1;if(O!==M.length-1)throw[0,N,h,i];var
P=O-1|0,ah=0;if(!(P<0)){var
l=ah;for(;;){var
ai=L(M,l)[l+1],ak=[0,L(K,l)[l+1],ai];b(B[3],ak,g);var
al=l+1|0;if(P!==l){var
l=al;continue}break}}var
d=3;break;default:var
d=2}break;default:var
d=0}switch(d){case
0:if(2===c[0]){var
z=c[1],t=b(x[54],n[1],h),X=a(x[44],t);if(a(ac[2][2],X)){var
Y=a(f[V],z);if(b(x[53],Y,t))var
w=1;else{q(z,t);var
m=2,w=0}}else
var
w=1;if(w)throw[0,N,h,i]}else
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
$=a(x[55],E),aa=[0,a(x[55],C),$];b(B[3],aa,g);var
m=3}switch(m){case
0:if(5===c[0]){var
U=[0,h,a(f[99],i)];b(B[3],U,g);var
p=1}else
var
p=0;break;case
1:var
p=0;break;case
2:var
p=1;break;default:var
p=2}switch(p){case
0:if(1-b(f[139],h,i))throw[0,N,h,i];var
R=0;break;case
1:var
R=0;break;default:var
R=1}continue}}catch(a){a=r(a);if(a===B[1])return n[1];throw a}}function
bZ(e,b){function
c(b){if(a(f[7],b))if(a(f[30],b)===e)return 0;function
g(a,d){var
b=c(d);return 0<=a?0<=b?a+b|0:a:b}var
d=i(f[142],g,-1,b);return 0<=d?d+1|0:-1}return c(b)}function
b0(e){var
c=[0,1],d=[0,0];function
g(e,h){var
i=a(f[aj],h);if(2===i[0]){var
j=i[1];try{var
m=e+b(ac[4][2],j,d[1])|0,n=a(f[al],m);return n}catch(b){b=r(b);if(b===J){var
k=c[1];c[1]++;d[1]=[0,[0,j,k],d[1]];return a(f[al],k+e|0)}throw b}}function
l(a){return a+1|0}return s(f[bN],l,g,e,h)}var
h=g(0,e);return[0,c[1]-1|0,h]}function
b1(e,d,c,i){try{var
j=aG(c,i),g=b(ac[4][2],e,j);if(a(f[7],g))var
h=[0,[1,d]];else
var
k=bZ(e,c),h=[0,[0,b0(g),k]];return h}catch(a){a=r(a);if(a[1]===N)return 0;if(a===J)return[0,[1,d]];throw a}}function
a5(e,d,c){function
g(b){return a(f[V],e+b|0)}var
h=b(k[17][48],d,g);return b(D[12],h,c)}var
aq=[0,N,aG,b1,function(e,d){var
c=e[1],g=a5(0,c,e[2]),h=a5(c,d[1],d[2]);try{var
i=aG(g,h),j=function(b){var
d=b[1]<c?1:0;return d?d:a(f[7],b[2])},l=b(k[17][22],j,i);return l}catch(a){a=r(a);if(a[1]===N)return 0;throw a}}];P(126,aq,"Ground_plugin.Unify");function
a7(a){if(0===a[0]){var
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
0:return aV;case
1:return 80;case
2:return 70;case
3:return-20;case
4:return 50;default:return-10}}}var
d=a[1];if(typeof
d==="number")switch(d){case
1:return 40;case
2:return-15;case
3:return-50;default:return aV}return-29}var
b3=[0,function(b,a){var
c=a7(a[3]);return a7(b[3])-c|0}],aJ=[0,f[141]],b4=[0,function(c,a){var
d=b(af[18][1],c[1],a[1]);if(0===d){var
e=function(c,a){var
d=v.caml_int_compare(c[1],a[1]);return 0===d?b(aJ[1],c[2],a[2]):d};return i(ae[5],e,c[2],a[2])}return d}],m=a(k[21][1],aJ),ag=a(k[20][1],b4);function
as(d,e,c){try{var
a=[0,e,b(m[22],d,c)],f=i(m[4],d,a,c);return f}catch(a){a=r(a);if(a===J)return i(m[4],d,[0,e,0],c);throw a}}function
a8(c,e,a){try{var
f=b(m[22],c,a),g=function(a){return 1-b(af[5],a,e)},d=b(k[17][29],g,f),h=d?i(m[4],c,d,a):b(m[6],c,a);return h}catch(b){b=r(b);if(b===J)return a;throw b}}var
S=a(aI[2],b3);function
b5(a){var
b=a.slice();b[8]=a[8]-1|0;return b}function
b6(d,a){var
c=a.slice();c[7]=b(ag[4],d,a[7]);return c}function
b7(a,d){var
e=b(ag[3],a,d[7]);if(e)var
f=e;else{var
c=a[2];if(c){var
g=c[1],j=g[1],k=a[1],h=function(c){var
a=c[2];if(a){var
d=a[1],e=b(af[5],k,c[1]);if(e){var
f=j<d[1]?1:0;if(f)return b(aq[4],d,g);var
h=f}else
var
h=e;var
i=h}else
var
i=a;return i};return b(ag[16],h,d[7])}var
f=c}return f}function
aK(f,e,l,a,k){var
g=G(n[9],f,e,l,k,a[6]);if(0===g[0]){var
c=g[1];if(1===f){var
m=a[8],o=a[7],p=a[6],q=c[2],r=a[3],s=a[2];return[0,b(S[2],c,a[1]),s,r,q,0,p,o,m]}var
h=a.slice();h[1]=b(S[2],c,a[1]);h[2]=as(c[2],e,a[2]);return h}var
d=g[1];if(1===f){var
i=a.slice();i[4]=d;i[5]=[0,d];return i}var
j=a.slice();j[2]=as(d,e,a[2]);j[3]=[0,d,a[3]];return j}function
b8(c,a){function
d(a,b){return a[1]===n[7]?b:as(a[2],a[1],b)}var
b=a.slice();b[1]=i(k[17][16],S[2],c,a[1]);b[2]=i(k[17][16],d,c,a[2]);return b}function
b9(d,c){var
e=b(m[22],d,c[2]);return a(k[17][3],e)}function
b_(g){var
b=g;for(;;){var
c=a(S[3],b[1]),f=a(S[4],b[1]);if(c[1]===n[7]){var
d=b.slice();d[1]=f;if(b[4]===c[2])return[0,c,d];var
b=d;continue}var
e=b.slice();e[1]=f;e[2]=a8(c[2],c[1],b[2]);return[0,c,e]}}function
b$(d){var
b=[0,-1],e=ag[1];function
c(a){if(a)b[1]++;return b[1]}var
g=a(f[V],1);return[0,S[1],m[1],0,g,0,c,e,d]}function
ca(c){if(2===c[0]){var
d=c[1],e=function(a){return[3,[0,d,a+1|0]]},f=a(am[21],d);return b(k[17][48],f,e)}return[0,c,0]}var
cb=a(k[17][az],ca);function
cc(e,d,c){var
f=a(cb,e);function
g(d,c){var
f=c[2];function
g(a){return s(ad[160],0,0,0,a)}var
e=i(t[24],g,f,d),a=e[1],h=b(t[15],a,e[2]);return[0,aK(0,d,h,c[1],a),a]}return i(k[17][16],g,f,[0,d,c])}function
cd(f,e,c){var
d=[0,e];function
g(g){var
e=a(aH[25],g[5]);switch(e[0]){case
1:case
4:case
5:return 0;default:var
f=e[1][1][1];try{var
h=a(af[16],f),i=b(t[15],c,f);d[1]=aK(2,h,i,d[1],c);var
j=0;return j}catch(a){a=r(a);if(a===J)return 0;throw a}}}function
h(d,c,a){return b(k[17][11],g,a)}function
i(d){try{var
c=a(aH[10],d),e=c}catch(c){c=r(c);if(c!==J)throw c;var
f=b(p[16],d,ce),g=b(p[16],cf,f),e=a(C[6],g)}return b(aH[9][12],h,e)}b(k[17][11],i,f);return[0,d[1],c]}function
cg(c){function
d(e,d,c){var
f=ad[16],g=a(aC[2],0),i=G(b2[6],0,0,g,f,e),j=a(h[18],0),k=a(a6[22],i),l=a(h[1],ch),m=b(h[52],ar[42],d),n=a(h[1],ci),o=b(h[14],n,m),p=b(h[14],o,l),q=b(h[14],p,k),r=b(h[14],q,j);return b(h[14],r,c)}var
e=a(h[1],cj),f=a(h[9],0),g=i(m[11],d,c,f),j=a(h[18],0),k=a(h[1],ck),l=b(h[14],k,j),n=b(h[14],l,g),o=b(h[14],n,e);return b(h[28],0,o)}var
o=[0,aJ,[0,m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15],m[16],m[17],m[18],m[19],m[20],m[21],m[22],m[23],m[24]],ag,as,a8,S,b5,b6,b7,aK,b8,b9,b_,b$,cc,cd,cg];P(137,o,"Ground_plugin.Sequent");function
w(j,g,f,p,c){a(cm[2],0);var
q=a(t[9],c),l=a(t[8],c);function
m(s,r,q){var
f=s,e=r,d=q;for(;;){if(0<f){if(e){var
n=e[2],g=e[1],j=a(aa[2][1][1],g),u=a(t[7],c);if(!i(x[41],l,j,u)){var
v=b(x[42],l,j);if(!b(k[17][23],v,d)){var
w=m(f-1|0,n,[0,g,d]),y=a(aa[2][1][3],g);return G(o[10],0,[0,j],y,w,c)}}var
f=f-1|0,e=n,d=[0,g,d];continue}var
z=a(h[1],cn);return i(C[3],0,0,z)}return p}}var
d=m(j,q,0);if(g)var
r=a(t[7],c),e=G(o[10],1,n[7],r,d,c);else
var
e=d;return b(f,e,c)}function
co(a){if(0===a[0])return a[1];throw[0,I,cp]}function
K(b){if(0===b[0]){var
c=a(j[74],[0,b[1],0]);return a(g[66][8],c)}return d[1]}function
cq(e,c){try{var
i=function(b){var
c=a(j[42],b);return a(g[66][8],c)},k=b(o[12],e,c),l=b(d[67],k,i);return l}catch(c){c=r(c);if(c===J){var
f=a(h[1],cr);return b(d[24],0,f)}throw c}}function
cs(n,m,e,l,c){var
p=0,q=1;function
s(a){return w(q,p,l,c,a)}try{var
u=[0,a(g[66][8],j[16]),0],v=[0,K(e),u],x=function(c){function
h(b){var
d=[0,a(f[M],[0,b,[0,c]]),0],e=a(j[W],d);return a(g[66][8],e)}return b(d[67],e,h)},y=b(o[12],n,c),z=[0,b(d[67],y,x),v],A=a(d[7],z),k=A}catch(c){c=r(c);if(c!==J)throw c;var
t=a(h[1],ct),k=b(d[24],0,t)}return i(d[33],k,s,m)}function
cu(e,c,b){var
f=1,h=0;function
k(a){return w(h,f,c,b,a)}var
l=a(g[66][8],j[bI]);return i(d[33],l,k,e)}function
cv(f,e,c){var
h=1,i=0;function
k(a){return w(i,h,e,c,a)}var
l=a(d[22],k),m=[0,a(g[66][1],l)],n=b(j[111],0,m),o=a(g[66][8],n);return b(d[4],o,f)}function
cw(f,e,c){var
h=1,k=1;function
l(a){return w(k,h,e,c,a)}var
m=a(d[22],l),n=a(g[66][8],j[17]),o=b(d[5],n,m),p=b(d[4],o,f),q=1,r=1;function
s(a){return w(r,q,e,c,a)}var
t=a(g[66][8],j[16]);return i(d[33],t,s,p)}function
cx(l,k,e,i,h,c){var
f=L(b(n[5],l,c),0)[1],m=0;function
o(a){return w(f,m,i,h,a)}var
p=a(g[66][8],j[16]),q=[0,b(d[26],f,p),0],r=[0,K(e),q],t=b(d[70][57],e,j[99]),u=[0,a(g[66][8],t),r],v=a(d[7],u);return s(d[33],v,o,k,c)}function
cy(l,i,e,h,f,c){var
m=b(n[5],l,c);function
o(c){var
i=0,k=0,l=[0,function(a){return w(c,k,h,f,a)},i],m=a(g[66][8],j[16]),n=[0,b(d[26],c,m),l],o=[0,K(e),n];return a(d[7],o)}var
p=b(k[19][15],o,m),q=b(d[70][57],e,j[99]),r=a(g[66][8],q);return s(d[35],r,p,i,c)}function
cz(c){var
e=b(d[70][57],c,j[99]);return a(g[66][8],e)}function
cA(c,l,q,i,p,o,h){var
r=c[2],t=c[1],m=s(n[6],0,c,l,h),e=m.length-1,u=a(k[19][12],l),v=0;function
y(a){return w(e,v,p,o,a)}var
z=a(g[66][8],j[16]),A=[0,b(d[26],e,z),0],B=[0,K(i),A];function
C(q){function
c(d){var
e=L(m,d)[d+1],c=a(k[17][1],e),g=[0,a(f[131],[0,[0,t,d+1|0],r]),u],h=a(f[M],g);function
i(b){return a(f[al],c-b|0)}var
j=b(k[19][2],c,i),l=[0,b(D[8],c,h),j],n=[0,a(f[M],l)],o=[0,b(D[8],c,q),n],p=a(f[M],o);return b(x[23],p,e)}var
d=b(k[17][48],e,c),h=a(j[W],d);return a(g[66][8],h)}var
E=[0,b(d[67],i,C),B],F=a(d[7],E);return s(d[33],F,y,q,h)}function
cB(k,i,m,l,c,h,e){var
n=[0,0,k,b(D[8],1,i)],o=a(f[bI],n),p=0,q=0,r=0,s=1,t=2;function
u(a){return w(t,s,h,e,a)}var
v=[0,a(d[22],u),r],x=[0,a(g[66][8],j[17]),v],y=[0,a(g[66][8],j[17]),x],z=[0,K(c),y];function
A(l){var
c=a(f[al],2),d=[0,0,b(D[8],1,k),c],e=[0,l,[0,a(f[bD],d)]],h=[0,0,i,a(f[M],e)],m=[0,a(f[bD],h),0],n=a(j[W],m);return a(g[66][8],n)}var
B=[0,b(d[67],c,A),z],C=[0,a(d[7],B),q];function
E(b){var
c=a(j[42],b);return a(g[66][8],c)}var
F=[0,b(d[67],c,E),C],G=a(j[ak],o),H=a(g[66][8],G),I=[0,b(d[11],H,F),p],J=0,L=0,N=1,O=[0,function(a){return w(N,L,h,e,a)},J],P=[0,K(c),O],Q=[0,a(g[66][8],j[17]),P],R=[0,a(d[7],Q),I],S=a(j[ak],m),T=a(g[66][8],S),U=b(d[11],T,R);return b(d[4],U,l)}function
cC(f,e,c){if(n[1][1])var
l=a(h[1],cD),k=b(d[24],0,l);else
var
k=f;var
m=1,o=0;function
p(a){return w(o,m,e,c,a)}var
q=a(d[22],p),r=a(g[66][8],j[17]),s=b(d[5],r,q),t=b(d[4],s,f),u=1,v=0;function
x(a){return w(v,u,e,c,a)}var
y=a(g[66][8],j[16]),z=i(d[33],y,x,t);return b(d[4],z,k)}function
cE(l,k,e,i,h,c){var
f=L(b(n[5],l,c),0)[1],m=0,o=0,p=f-1|0,q=[0,function(a){return w(p,o,i,h,a)},m],r=a(g[66][8],j[16]),t=[0,b(d[26],f,r),q],u=[0,K(e),t],v=a(d[7],u),x=b(d[70][57],e,j[99]),y=a(g[66][8],x);return s(d[33],y,v,k,c)}function
cF(l,k,h,e,c){var
m=0,n=a(o[7],c),p=1,q=0;function
r(a){return w(q,p,e,n,a)}var
s=[0,a(d[22],r),m],u=0,v=a(o[7],c),x=0,y=1;function
z(a){return w(y,x,e,v,a)}var
A=[0,a(d[22],z),u],B=[0,a(g[66][8],j[16]),A],C=[0,K(h),B];function
D(h,c){var
e=b(t[11],c,1),k=[0,h,[0,a(f[az],e)]],l=a(f[M],k),m=a(j[74],[0,e,0]),n=a(g[66][8],m),o=a(j[W],[0,l,0]),p=a(g[66][8],o);return i(d[5],p,n,c)}var
E=[0,b(d[67],h,D),C],F=[0,a(g[66][8],j[16]),E],G=[0,a(d[7],F),s],H=a(j[ak],l),I=a(g[66][8],H),J=b(d[11],I,G);return b(d[4],J,k)}function
a_(a){return i(cl[4],cH,cG,a)}var
O=[aW,function(e){var
b=a_(cI),c=[0,[0,0,[1,a(f[41],b)[1]]],0],d=a_(cJ);return[0,[0,0,[1,a(f[41],d)[1]]],c]}];function
cK(c){if(c){var
d=bz(O),f=[0,c[1],1],h=bE===d?O[1]:aW===d?a(a9[2],O):O,i=b(j[68],h,f);return a(g[66][8],i)}var
e=bz(O),k=bE===e?O[1]:aW===e?a(a9[2],O):O,l=a(j[67],k);return a(g[66][8],l)}var
q=[0,w,co,K,cq,cs,cu,cv,cw,cx,cy,cz,cA,cB,cC,cE,cF,a(d[56],cK)];P(bN,q,"Ground_plugin.Rules");function
cO(c,a){if(0===c[0]){var
d=c[1],e=d[1];if(0===a[0]){var
f=a[1],g=f[2],h=d[2],i=a[2],j=c[2],k=f[1],l=o[1][1],m=function(b,a){return b-a|0},p=function(b,a){return b-a|0},q=b(n[3],p,m);return fA(n[4],q,l,k,e,j,i,h,g)}return 0===e?1:-1}return 0===a[0]?0===a[1][1]?-1:1:b(o[1][1],c[1],a[1])}function
cP(c,a){return c===a?0:c===n[7]?1:a===n[7]?-1:b(af[18][1],c,a)}var
cQ=[0,function(b,a){return aT(n[3],cO,cP,a[1],b[1],a[2],b[2])}],at=a(k[20][1],cQ);function
bb(c,n){var
d=[0,at[1]];function
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
y=f[4],q=[0,1],r=[0,x],E=f[1],t=function(c,a){function
e(f,e){var
a=s(aq[3],w,m,f,e);if(a){var
c=a[1];return 0===c[0]?(q[1]=0,d[1]=b(at[4],[0,c,E],d[1]),0):(r[1]=1,0)}return a}var
f=c[1];function
g(c){var
d=a[2];function
f(a){return e(c,a)}return b(k[17][11],f,d)}b(k[17][11],g,f);var
h=c[2];function
i(c){var
d=a[1];function
f(a){return e(c,a)}return b(k[17][11],f,d)}return b(k[17][11],i,h)},A=n[1],B=function(a){return t(y,a[4])};b(o[6][5],B,A);var
j=n[5],z=j?[0,j[1],0]:j;t(y,[0,z,n[3]]);var
u=q[1],v=u?r[1]:u,F=v?(d[1]=b(at[4],[0,[1,m],f[1]],d[1]),0):v;return F}var
D=a(h[1],cR);return i(C[3],0,0,D)}b(k[17][11],e,c);return a(at[20],d[1])}function
bc(b){try{var
d=a(o[13],b),e=d[1],c=e[3];if(0===c[0])var
f=c[1],i=typeof
f==="number"?0:2===f[0]?1:0;else
var
i=typeof
c[1]==="number"?0:1;if(i)var
h=bc(d[2]),g=[0,[0,e,h[1]],h[2]];else
var
g=[0,0,b];return g}catch(a){a=r(a);if(a===aI[1])return[0,0,b];throw a}}var
bd=a(y[1][5],cS);function
cT(y,x,c,d,w){var
o=a(t[8],c),p=a(ba[2],c);if(y===n[7])var
q=bd;else
var
F=b(t[15],c,x),G=i(aF[23],o,p,F),v=a(f[34],G)[1],H=v?v[1]:bd,q=H;function
z(b){return a(f[al],d-b|0)}var
A=b(k[17][48],d,z),m=d,l=0,h=o,g=p,e=0,B=b(D[12],A,w);for(;;){if(0===m)return[0,g,e,B];var
r=i(j[14],l,q,c),C=a(a$[21][2],g),s=bA(cM[7],h,C,0,0,0,0,ad[bG]),E=a(a$[6],s[2]),u=[0,[0,r],s[1][1]],m=m-1|0,l=[0,r,l],h=b(cN[20],u,h),g=E,e=[0,u,e];continue}}var
X=[0,bc,bb,function(p,l,m,e,c){var
u=bb(p,e);function
v(k){if(k[2]===n[7])var
c=k[1],l=function(i,k){if(0===c[0]){var
e=c[1];if(0===e[1]){var
l=a(o[7],k),m=[0,s(q[1],0,1,i,l),0],n=a(d[20],m),p=a(j[bO],[0,[0,e[2],0]]),r=a(g[66][8],p);return b(d[5],r,n)}var
u=a(h[1],cX);return b(d[24],0,u)}var
v=a(g[66][8],j[41]),w=[0,a(d[21],v),0],x=a(o[7],k),y=[0,s(q[1],0,1,i,x),0],z=[0,a(d[20],y),0],A=[0,function(c){var
d=b(t[11],c,1),e=[0,[0,a(f[az],d),0]],h=a(j[bO],e);return b(g[66][8],h,c)},z],B=[0,a(g[66][8],j[17]),A],C=[0,a(d[7],B),w],D=a(j[ak],c[1]),E=a(g[66][8],D);return b(d[11],E,C)};else
var
l=function(v,l){var
c=k[2],m=k[1];if(0===m[0]){var
e=m[1],n=e[2],p=e[1];if(b(o[9],[0,c,[0,e]],l)){var
w=a(h[1],cU);return b(d[24],0,w)}if(0<p)var
y=function(k,e){var
h=cT(c,k,e,p,n),o=h[2],q=a(f[M],[0,k,[0,h[3]]]),l=b(x[23],q,o);try{var
y=h[1],z=a(t[8],e),A=s(cL[2],0,z,y,l),m=A}catch(b){b=r(b);if(!a(C[22],b))throw b;var
m=a(C[6],cV)}var
u=a(j[W],[0,l,0]),v=a(g[66][8],u),w=a(ba[11],m[1]);return i(d[5],w,v,e)},u=b(d[67],c,y);else
var
F=function(b){var
c=[0,a(f[M],[0,b,[0,n]]),0],d=a(j[W],c);return a(g[66][8],d)},u=b(d[67],c,F);var
z=b(o[8],[0,c,[0,e]],l),A=a(o[7],z),B=[0,s(q[1],1,0,v,A),0],D=[0,a(d[20],B),0],E=[0,u,[0,a(g[66][8],j[17]),D]];return a(d[7],E)}if(b(o[9],[0,c,0],l)){var
G=a(h[1],cW);return b(d[24],0,G)}var
H=a(g[66][8],j[41]),I=[0,a(d[21],H),0],J=b(o[8],[0,c,0],l),K=a(o[7],J),L=[0,s(q[1],1,0,v,K),0],N=[0,a(d[20],L),0],O=[0,a(g[66][8],j[17]),N];function
P(d,c){var
e=b(t[11],c,1),h=[0,d,[0,a(f[az],e)]],i=[0,a(f[M],h),0],k=a(j[W],i);return b(g[66][8],k,c)}var
Q=[0,b(d[67],c,P),O],R=[0,a(g[66][8],j[17]),Q],S=[0,a(d[7],R),I],T=a(j[ak],m[1]),U=a(g[66][8],T);return b(d[11],U,S)};return l(m,e)}var
w=b(k[17][12],v,u),y=a(d[19],w);return i(d[4],y,l,c)}];P(150,X,"Ground_plugin.Instances");var
aL=[0,function(U,u,e){var
c=[0,y[18][1]];function
j(d){try{var
e=a(bf[23],d),g=a(f[41],e)[1];c[1]=b(y[18][7],g,c[1]);var
h=0;return h}catch(a){a=r(a);if(a===f[28])return 0;throw a}}var
k=a(bf[26],0);b(be[11],j,k);var
l=a(y[18][12],c[1]),m=b(H[8][11],H[12],[0,y[1][11][2],l]);n[2][1]=m;function
x(y,k,E){if(v.caml_equal(a(z[8],0),cY)){var
V=a(ar[66],E);a(T[15],V)}try{var
H=a(o[13],k),g=H[2],j=H[1],e=function(a){return b(o[11],y,a)},Y=0,f=function(a,b){return x(Y,a,b)},c=function(a){return x([0,j,y],g,a)},A=j[3];if(0===A[0]){var
m=A[1];if(typeof
m==="number")var
t=a(q[11],j[1]);else
switch(m[0]){case
0:var
Z=e(g),t=G(q[9],m[1],c,j[1],f,Z);break;case
1:var
_=e(g),t=G(q[10],m[1],c,j[1],f,_);break;case
2:var
J=a(X[1],k),K=J[1],$=J[2],aa=b(p[22],K,y),L=function(a){return x(aa,$,a)};if(n[1][1])if(0<k[8])var
ab=e(k),M=s(X[3],K,L,f,ab),B=1;else
var
B=0;else
var
B=0;if(!B)var
M=L;var
t=M;break;case
3:if(n[1][1])var
ac=e(g),t=G(q[15],m[1],c,j[1],f,ac);else
var
t=c;break;default:var
l=m[2];if(typeof
l==="number")var
u=c;else
switch(l[0]){case
3:if(0<k[8])if(n[1][1])var
af=e(g),u=G(q[16],l[1],c,j[1],f,af),C=1;else
var
C=0;else
var
C=0;if(!C)var
u=c;break;case
4:if(n[1][1])var
ag=e(g),u=aT(q[12],l[1],l[2],c,j[1],f,ag);else
var
u=c;break;case
5:var
ah=e(g),u=bA(q[13],l[1],l[2],l[3],c,j[1],f,ah);break;default:var
ae=e(g),u=aT(q[12],l[1],l[2],c,j[1],f,ae)}var
ad=e(g),t=G(q[5],m[1],u,j[1],f,ad)}var
I=t}else{var
N=A[1];if(typeof
N==="number")switch(N){case
0:var
ai=e(g),w=i(q[8],c,f,ai);break;case
1:var
aj=e(g),w=i(q[6],c,f,aj);break;case
2:var
ak=e(g),w=i(q[7],c,f,ak);break;case
3:var
w=c;break;default:if(n[1][1])var
al=a(h[1],cZ),O=b(d[24],0,al);else
var
O=c;var
am=e(g),w=i(q[14],O,f,am)}else{var
P=a(X[1],k),Q=P[1],an=P[2],ao=b(p[22],Q,y),R=function(a){return x(ao,an,a)};if(n[1][1])if(0<k[8])var
ap=e(k),S=s(X[3],Q,R,f,ap),D=1;else
var
D=0;else
var
D=0;if(!D)var
S=R;var
w=S}var
I=w}var
F=I}catch(a){a=r(a);if(a!==aI[1])throw a;var
F=U}var
W=b(q[4],k[4],k);return i(d[4],W,F,E)}var
g=a(u,e),w=g[2],A=g[1],B=0;function
C(a,b){return x(B,a,b)}var
D=a(t[9],e),E=a(be[1],D);return G(q[1],E,1,C,A,w)}];P(155,aL,"Ground_plugin.Ground");a(aO[12],c6);var
ai=[0,3];function
c7(a){return a?(ai[1]=b(p[5],a[1],0),0):(ai[1]=3,0)}var
c_=[0,1,0,c9,c8,function(a){return[0,ai[1]]},c7];a(bj[3],c_);var
Z=[0,aV];function
c$(a){return a?(Z[1]=b(p[5],a[1],0),0):(Z[1]=0,0)}var
dc=[0,1,0,db,da,function(a){return[0,Z[1]]},c$];a(bj[3],dc);var
dd=[0,bp,0],de=[0,function(b,a){return s(bn[14],0,0,0,0)}];i(aM[9],0,bp,de);var
bq=[31,F[4],dd,0],aQ=b(c0[1],[0,bq],df),br=aQ[3],aR=aQ[2],bs=aQ[1];try{var
fq=0,fs=[0,[0,0,function(c){if(c)if(!c[2]){var
d=c[1],e=a(l[4],u[14]),f=b(l[8],e,d);return function(e){var
c=a(bh[3],f),d=a(bi[10][2],0);return b(bs,a(bi[6],d),c)}}return a(p[2],fr)}],fq],ft=function(b,a){return i(bg[1],a[1],[0,fu,b],a[2])};b(Y[80],ft,fs);var
fv=0,fx=[0,function(b){if(b)if(!b[2])return function(a){return au[6]};return a(p[2],fw)},fv],fy=function(c,a){return b(au[3],[0,fz,c],a)};b(Y[80],fy,fx)}catch(c){c=r(c);if(!a(C[22],c))throw c;var
dg=b(C[18],0,c),dj=b(p[16],di,dh),dl=b(p[16],dk,dj),dm=a(h[1],dl),dn=b(h[13],dm,dg);a(T[13],dn)}var
dp=[6,a(E[12],u[14])],dq=a(l[4],u[14]),du=[0,[0,dt,[0,ds,[0,dr,[0,[1,F[4],dq,dp],0]]]],0];function
dv(b,a){return i(bl[1],[0,dw,b],0,a)}b(Y[80],dv,du);try{var
ff=0,fi=[0,[0,0,function(c){return c?a(p[2],fg):function(f){var
c=a(br,0),d=a(h[1],fh),e=b(h[14],d,c);return a(T[11],e)}}],ff],fj=function(b,a){return i(bg[1],a[1],[0,fk,b],a[2])};b(Y[80],fj,fi);var
fl=0,fn=[0,function(b){return b?a(p[2],fm):function(a){return au[5]}},fl],fo=function(c,a){return b(au[3],[0,fp,c],a)};b(Y[80],fo,fn)}catch(c){c=r(c);if(!a(C[22],c))throw c;var
dx=b(C[18],0,c),dA=b(p[16],dz,dy),dC=b(p[16],dB,dA),dD=a(h[1],dC),dE=b(h[13],dD,dx);a(T[13],dE)}function
dG(b,a){return i(bl[1],[0,dH,b],0,a)}b(Y[80],dG,dF);var
dJ=a(h[1],dI),dK=b(d[24],0,dJ);function
_(h,b,f,e,d){var
c=n[1][1];try{n[1][1]=h;var
j=b?b[1]:a(aR,0)[2],k=function(c){var
d=a(o[14],ai[1]),b=i(o[15],f,d,c);return i(o[16],e,b[1],b[2])},l=a(g[66][8],j),m=i(aL[1],l,k,d);n[1][1]=c;return m}catch(a){a=r(a);n[1][1]=c;throw a}}function
bt(j,g,f,c){var
d=i(h[54],h[44],c3[41],c),e=a(h[1],dL);return b(h[14],e,d)}function
bu(l,k,j,c){function
d(b){return a(ar[42],b[2])}var
e=a(a6[6],d),f=i(h[54],h[44],e,c),g=a(h[1],dM);return b(h[14],g,f)}function
bv(j,g,f,c){var
d=i(h[54],h[44],ar[42],c),e=a(h[1],dN);return b(h[14],e,d)}var
A=a(l[2],dO);function
dP(c,d){var
e=a(l[17],u[18]),f=a(l[4],e),g=b(l[7],f,d),h=b(bh[10],c,g),i=a(l[17],u[18]),j=a(l[5],i);return[0,c,b(l[8],j,h)]}b(bk[5],A,dP);function
dQ(d,c){var
e=a(l[17],u[18]),f=a(l[5],e),g=b(l[7],f,c),h=b(c1[2],d,g),i=a(l[17],u[18]),j=a(l[5],i);return b(l[8],j,h)}b(bk[6],A,dQ);function
dR(d,c){var
e=a(l[17],u[18]),f=a(l[5],e),g=b(l[7],f,c);return b(z[9],d,g)}b(aP[6],A,dR);var
dS=a(l[17],u[18]),dT=a(l[6],dS),dU=[0,a(aP[2],dT)];b(aP[3],A,dU);var
dV=a(l[4],A),aS=i(E[13],E[9],dW,dV),dX=0,dY=0;function
dZ(a,c,b){return[0,a,0]}var
d0=[6,E[14][16]],d2=[0,[0,[0,[0,0,[0,a(ah[15],d1)]],d0],dZ],dY];function
d3(b,e,a,d,c){return[0,a,b]}var
d5=[0,a(ah[15],d4)],d6=[2,[6,E[14][16]],d5],d8=[0,a(ah[15],d7)],d9=[6,E[14][16]],d$=[0,[0,[0,[0,[0,[0,0,[0,a(ah[15],d_)]],d9],d8],d6],d3],d2];function
ea(e,d,c,i,g){var
f=a(h[1],eb);b(c4[52],T[13],f);return[0,c,[0,d,e]]}var
ec=[3,[6,E[14][16]]],ed=[6,E[14][16]],ee=[6,E[14][16]],eg=[0,[0,[0,[0,[0,[0,0,[0,a(ah[15],ef)]],ee],ed],ec],ea],d$],eh=[0,0,[0,[0,0,0,[0,[0,0,function(a){return 0}],eg]],dX]];i(E[23],aS,0,eh);s(c2[1],A,bt,bu,bv);var
ei=[0,aS,0];function
ej(c){var
d=c[2],e=a(l[4],A);return[0,b(l[7],e,d)]}i(aN[5],ek,ej,ei);try{var
eN=0,eP=[0,function(c){if(c){var
d=c[2];if(d){var
e=d[2];if(e)if(!e[2]){var
f=c[1],h=a(l[18],u[14]),i=a(l[6],h),j=b(z[2][7],i,f),k=d[1],m=a(l[6],A),n=b(z[2][7],m,k),o=e[1],q=a(l[17],av[7]),r=a(l[6],q),s=b(z[2][7],r,o);return function(c){var
d=a(z[19],c),e=b(ae[15],d,j),f=1;function
h(a){return _(f,e,n,s,a)}return a(g[66][1],h)}}}}return a(p[2],eO)},eN],eR=[0,function(c){if(c){var
d=c[2];if(d)if(!d[2]){var
e=c[1],f=a(l[18],u[14]),h=a(l[6],f),i=b(z[2][7],h,e),j=d[1],k=a(l[17],av[7]),m=a(l[6],k),n=b(z[2][7],m,j);return function(c){var
e=a(z[19],c),d=0,f=b(ae[15],e,i),h=1;function
j(a){return _(h,f,d,n,a)}return a(g[66][1],j)}}}return a(p[2],eQ)},eP],eT=[0,function(c){if(c){var
d=c[2];if(d)if(!d[2]){var
e=c[1],f=a(l[18],u[14]),h=a(l[6],f),i=b(z[2][7],h,e),j=d[1],k=a(l[6],A),m=b(z[2][7],k,j);return function(c){var
e=a(z[19],c),d=0,f=b(ae[15],e,i),h=1;function
j(a){return _(h,f,m,d,a)}return a(g[66][1],j)}}}return a(p[2],eS)},eR],eU=a(bo[12],eT);i(aM[9],0,[0,U,eV],eU);var
eW=function(B){var
j=a(y[1][6],eX),c=av[7],h=0,i=0;if(0===c[0]){var
k=[0,eY,[0,[1,F[4],[0,[5,[0,c[1]]]],j],i]],l=a(y[1][6],eZ);if(0===A[0]){var
m=[0,[1,F[4],[5,[0,A[1]]],l],k],n=a(y[1][6],e0),d=u[14];if(0===d[0]){var
o=[0,[0,e1,[0,[1,F[4],[4,[5,[0,d[1]]]],n],m]],h],q=a(y[1][6],e2),e=av[7],p=0;if(0===e[0]){var
r=[0,e3,[0,[1,F[4],[0,[5,[0,e[1]]]],q],p]],s=a(y[1][6],e4),f=u[14];if(0===f[0]){var
t=[0,[0,e5,[0,[1,F[4],[4,[5,[0,f[1]]]],s],r]],o],v=0,w=a(y[1][6],e6);if(0===A[0]){var
x=[0,[1,F[4],[5,[0,A[1]]],w],v],z=a(y[1][6],e7),g=u[14];if(0===g[0])return b(aN[4],[0,U,e9],[0,[0,e8,[0,[1,F[4],[4,[5,[0,g[1]]]],z],x]],t]);throw[0,I,e_]}throw[0,I,e$]}throw[0,I,fa]}throw[0,I,fb]}throw[0,I,fc]}throw[0,I,fd]}throw[0,I,fe]};b(aO[19],eW,U)}catch(c){c=r(c);if(!a(C[22],c))throw c;var
el=b(C[18],0,c),eo=b(p[16],en,em),eq=b(p[16],ep,eo),er=a(h[1],eq),es=b(h[13],er,el);a(T[13],es)}try{var
eD=0,eF=[0,function(c){if(c)if(!c[2]){var
d=c[1],e=a(l[18],u[14]),f=a(l[6],e),h=b(z[2][7],f,d);return function(c){var
f=a(z[19],c),d=0,e=0,i=b(ae[15],f,h),j=0;function
k(a){return _(j,i,e,d,a)}return a(g[66][1],k)}}return a(p[2],eE)},eD],eG=a(bo[12],eF);i(aM[9],0,[0,U,eH],eG);var
eI=function(g){var
f=a(y[1][6],eJ),c=u[14],d=0,e=0;if(0===c[0])return b(aN[4],[0,U,eL],[0,[0,eK,[0,[1,F[4],[4,[5,[0,c[1]]]],f],e]],d]);throw[0,I,eM]};b(aO[19],eI,U)}catch(c){c=r(c);if(!a(C[22],c))throw c;var
et=b(C[18],0,c),ew=b(p[16],ev,eu),ey=b(p[16],ex,ew),ez=a(h[1],ey),eA=b(h[13],ez,et);a(T[13],eA)}function
eB(q){var
f=b(bm[3][4],Z[1],0),h=a(aR,0)[2],c=0,e=0,j=[0,b(d[70][3],h,f)],k=1;function
l(a){return _(k,j,e,c,a)}var
m=a(g[66][1],l),n=b(bm[3][4],Z[1],0),o=i(bn[18],0,0,0),p=b(d[70][12],o,n);return b(d[70][12],p,m)}var
eC=a(g[13],0),bw=b(g[67][1],eC,eB);a(c5[3][3],bw);var
bx=[0,U,ai,Z,bq,bs,aR,br,dK,_,bt,bu,bv,A,aS,bw];P(183,bx,"Ground_plugin.G_ground");P(184,[0,n,aq,o,q,X,aL,bx],"Ground_plugin");return});
