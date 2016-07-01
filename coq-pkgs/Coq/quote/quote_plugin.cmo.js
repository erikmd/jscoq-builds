(function(bP){"use strict";var
B=140,p="plugins/quote/g_quote.ml4",aA="in",A=250,av="quote_plugin",q=124,au="$k",at="[",n=246,az="$c",S="Extension: cannot occur",s="quote",ay="]",as="$lc",r="Quote",R="$f",ar="plugins/quote/quote.ml",ax=136,aw="using",m=bP.jsoo_runtime,aq=m.caml_check_bound,b=m.caml_new_string,z=m.caml_obj_tag,ab=m.caml_register_global,$=m.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):m.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):m.caml_call_gen(a,[b,c])}function
i(a,b,c,d){return a.length==3?a(b,c,d):m.caml_call_gen(a,[b,c,d])}function
aa(a,b,c,d,e){return a.length==4?a(b,c,d,e):m.caml_call_gen(a,[b,c,d,e])}var
e=m.caml_get_global_data(),Q=b(av),d=e.Term,f=e.Util,u=e.Tacmach,j=e.Assert_failure,K=e.Proofview,ac=e.Tactics,T=e.Evd,L=e.Global,ah=e.Constr_matching,h=e.Names,C=e.Termops,af=e.Errors,ag=e.Coqlib,w=e.CamlinternalLazy,ae=e.Option,ad=e.Patternops,v=e.Pervasives,g=e.Constrarg,o=e.Loc,l=e.Genarg,k=e.Tacinterp,ao=e.Mltop,a0=[0,b(ar),473,11],aZ=[0,b(ar),458,13],aX=b("invalid inversion scheme for quote"),aW=[0,b("Coq"),[0,b(s),[0,b(r),0]]],aV=b("M"),aU=b("Quote: not a simple fixpoint"),aS=b("End_idx"),aT=[0,b(r),0],aQ=b("Left_idx"),aR=[0,b(r),0],aO=b("Right_idx"),aP=[0,b(r),0],aM=b("varmap_find"),aN=[0,b(r),0],aK=b("Node_vm"),aL=[0,b(r),0],aI=b("Empty_vm"),aJ=[0,b(r),0],aG=b(s),aH=b(r),bi=b(au),bO=[0,b(p),1,0],bj=[0,b(aw)],bk=b(az),bN=[0,b(p),1,0],bl=[0,b(aA)],bm=[0,b(ay)],bn=b(as),bM=[0,b(p),1,0],bo=[0,b(at)],bp=b(R),bL=[0,b(p),1,0],bq=[0,b(s)],br=b(au),bK=[0,b(p),1,0],bs=[0,b(aw)],bt=b(az),bJ=[0,b(p),1,0],bu=[0,b(aA)],bv=b(R),bI=[0,b(p),1,0],bw=[0,b(s)],bx=[0,[0,b(ay)],0],by=b(as),bH=[0,b(p),1,0],bz=[0,b(at)],bA=b(R),bG=[0,b(p),1,0],bB=[0,b(s)],bC=b(R),bF=[0,b(p),1,0],bD=[0,b(s)],bE=b(s),bd=b(S),bb=b(S),a$=b(S),a9=b(S),a5=b(av),a6=b("cont"),a7=b("x"),bg=b(s),aB=e.Not_found,aD=e.Pp,aF=e.Environ,aC=e.Reductionops,aE=e.Hashtbl,a2=e.Tacentries,a3=e.Geninterp,a1=e.Tacenv,a4=e.Array;function
t(b,a){return i(ag[4],aH,[0,aG,b],a)}var
D=[n,function(a){return t(aJ,aI)}],E=[n,function(a){return t(aL,aK)}],F=[n,function(a){return t(aN,aM)}],G=[n,function(a){return t(aP,aO)}],H=[n,function(a){return t(aR,aQ)}],I=[n,function(a){return t(aT,aS)}],M=a(f[20][1],[0,d[141]]);function
x(b){return a(af[6],aU)}function
U(b){var
c=a(d[99],b);return a(d[B],c)}function
ai(c){var
b=a(h[1][7],c);return m.caml_int_of_string(i(f[15][4],b,1,m.caml_ml_string_length(b)-1|0))}function
aj(b){var
d=a(v[20],b),e=c(v[16],aV,d);return a(h[1][5],e)}function
N(j,i,b){var
e=a(d[B],j);if(11===e[0]){var
g=e[1],h=g[1];if(0===h[2]){var
k=function(c){return a(d[114],b-c|0)},l=c(f[19][2],b,k),m=[0,a(d[131],[0,[0,[0,h[1],0],i+1|0],g[2]]),l];return a(d[q],m)}}return x(0)}function
ak(b,k){function
h(l){var
e=l;for(;;){var
b=a(d[B],e);switch(b[0]){case
5:var
e=b[1];continue;case
9:var
j=b[2],g=b[1];if(a(d[1],g))if(a(d[29],g)===k){var
o=a(f[19][38],j);return[11,[0,aj(a(d[29],o))]]}var
p=c(f[19][15],h,j),q=T[16],r=a(L[2],0);return[4,i(ad[7],r,q,g),p];default:var
m=T[16],n=a(L[2],0);return i(ad[7],n,m,e)}}}return h(b)}function
V(E,D,l){try{var
X=a(d[41],E),m=X}catch(a){a=$(a);if(a!==d[28])throw a;var
m=x(0)}var
G=a(L[2],0),o=U(c(aF[59],G,m));if(14===o[0]){var
p=o[1],q=p[1];if(1===q[1].length-1)if(0===q[2]){var
e=p[2];if(1===e[1].length-1)if(1===e[2].length-1){var
r=e[3];if(1===r.length-1){var
s=a(d[80],r[1]),b=s[1],H=a(f[17][1],b),I=a(K[62][5],l),J=a(u[49][4],l),O=i(aC[75],0,I,J),g=U(s[2]);if(13===g[0]){var
t=g[2],h=[0,0],j=[0,0],k=[0,0],P=g[4],Q=function(i,t){var
o=a(d[80],t),e=o[2],g=a(f[17][1],o[1]);if(a(d[1],e))if(1===a(d[29],e)){k[1]=[0,N(a(f[17][3],b)[2],i,g)];return 0}var
p=a(d[39],e),q=p[2];if(q){var
r=q[2];if(r){var
l=r[2];if(l){var
m=l[2];if(m)if(!m[2])if(a(d[1],l[1]))if(a(d[1],m[1])){var
s=z(F),x=A===s?F[1]:n===s?a(w[2],F):F;if(c(O,p[1],x)){j[1]=[0,N(a(f[17][3],b)[2],i,g)];return 0}}}}}var
u=h[1],v=ak(e,(H+g|0)+1|0);h[1]=[0,[0,N(a(f[17][3],b)[2],i,g),v],u];return 0};c(f[19][14],Q,P);var
v=a(ae[3],k[1]),R=v?a(ae[3],j[1]):v;if(R)x(0);var
y=a(d[B],t),S=7===y[0]?a(C[55],y[3]):t,T=k[1],V=i(f[17][16],M[4],D,M[1]),W=j[1];return[0,a(f[17][6],h[1]),W,S,V,T]}return x(0)}}}}return x(0)}function
O(e,j){var
g=j;for(;;){var
h=c(M[3],g,e);if(h)return h;var
b=a(d[B],g);switch(b[0]){case
5:var
g=b[1];continue;case
9:var
i=O(e,b[1]);if(i){var
k=b[2],l=function(a){return O(e,a)};return c(f[19][30],l,k)}return i;default:return 0}}}function
al(e,c){var
h=e.length-1,b=z(E),l=h>>>1|0,i=A===b?E[1]:n===b?a(w[2],E):E,j=z(D),k=[0,c],m=A===j?D[1]:n===j?a(w[2],D):D,f=a(d[q],[0,m,k]);function
g(b){if(h<b)return f;if(l<b){var
j=b-1|0,m=[0,i,[0,c,aq(e,j)[j+1],f,f]];return a(d[q],m)}var
n=g((2*b|0)+1|0),k=b-1|0,o=g(2*b|0),p=[0,i,[0,c,aq(e,k)[k+1],o,n]];return a(d[q],p)}return g(1)}function
am(e){function
b(a){return 1===a?0:[0,1===(a%2|0)?1:0,b(a>>>1|0)]}var
c=z(I),g=A===c?I[1]:n===c?a(w[2],I):I,h=b(e),j=a(f[17][6],h);function
k(g,f){var
h=[0,f];if(g)var
b=z(G),i=A===b?G[1]:n===b?a(w[2],G):G,c=i;else
var
e=z(H),j=A===e?H[1]:n===e?a(w[2],H):H,c=j;return a(d[q],[0,c,h])}return i(f[17][16],k,j,g)}function
W(h,k,g){var
b=k;for(;;){var
j=i(u[36],h,b,g);if(j)return j;var
e=a(d[B],b);switch(e[0]){case
5:var
b=e[1];continue;case
9:var
l=e[2],m=function(a){return W(h,a,g)};return c(f[19][28],m,l);default:return 0}}}function
an(f,a){function
g(a,b){if(b){var
h=b[2],e=b[1];return c(d[ax],a,e)?b:W(f,a,e)?[0,a,[0,e,h]]:[0,e,g(a,h)]}return[0,a,0]}if(a){var
b=an(f,a[2]);return g(a[1],b)}return a}var
P=a(aE[18],[0,d[ax],d[151]]);function
X(d,b){a(ag[11],aW);var
j=a(P[1],17),g=[0,0],k=[0,1];function
l(b){function
e(r){var
e=r;for(;;){if(e){var
m=e[1];try{var
s=m[2],t=T[16],u=a(L[2],0),v=aa(ah[3],u,t,s,b),w=a(h[1][10][17],v),x=function(a){var
b=l(a[2]);return[0,ai(a[1]),b]},y=c(f[17][12],x,w),z=c(C[54],y,m[1]);return z}catch(a){a=$(a);if(a===ah[1]){var
e=e[2];continue}throw a}}var
n=d[2];if(n){var
o=d[5];if(o)if(O(d[4],b))return c(C[54],[0,[0,1,b],0],o[1]);try{var
D=c(P[7],j,b);return D}catch(a){a=$(a);if(a===aB){var
A=n[1],B=[0,[0,1,am(k[1])],0],p=c(C[54],B,A);k[1]++;g[1]=[0,b,g[1]];i(P[5],j,b,p);return p}throw a}}var
q=d[5];if(q)return c(C[54],[0,[0,1,b],0],q[1]);var
E=a(aD[1],aX);return i(af[3],0,0,E)}}return e(d[1])}var
e=c(f[17][12],l,b),m=d[3],n=a(f[17][6],g[1]);return[0,e,al(a(f[19][12],n),m)]}function
aY(n,m){var
b=[0,function(b){var
e=c(u[49][2],n,b);function
o(a){return c(u[49][2],a,b)}var
h=V(e,c(f[17][12],o,m),b),k=X(h,[0,a(K[62][3],b),0]),g=k[1];if(g)if(!g[2]){var
l=g[1];if(h[2]){var
p=a(d[q],[0,e,[0,k[2],l]]);return i(ac[3],0,p,2)}var
r=a(d[q],[0,e,[0,l]]);return i(ac[3],0,r,2)}throw[0,j,aZ]}];return a(K[62][9],b)}var
y=[0,t,D,E,F,G,H,I,M,x,U,ai,aj,N,ak,V,O,al,am,W,an,P,X,aY,function(h,o,n,m){var
b=[0,function(b){var
e=c(u[49][2],n,b);function
p(a){return c(u[49][2],a,b)}var
i=V(e,c(f[17][12],p,m),b),k=X(i,[0,o,0]),g=k[1];if(g)if(!g[2]){var
l=g[1];return i[2]?a(h,a(d[q],[0,e,[0,k[2],l]])):a(h,a(d[q],[0,e,[0,l]]))}throw[0,j,a0]}];return a(K[62][9],b)}];ab(84,y,"Quote_plugin.Quote");a(ao[12],a5);var
J=o[4],Y=a(h[1][5],a6),Z=a(h[1][5],a7);function
_(d,b){var
e=a(k[2][1],b),f=a3[4][1],g=c(h[1][10][5],Z,e),j=[0,i(h[1][10][4],Y,d,g),f];return c(k[18],j,[29,[0,J,[3,J,[1,[0,J,Y]],[0,[2,[1,[0,J,Z]]],0]]]])}var
a8=0,a_=[0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e){var
f=e[2];if(f)if(!f[2]){var
h=b[1],i=a(l[6],g[4]),j=c(k[2][7],i,h),m=d[1],n=a(l[17],g[4]),o=a(l[6],n),p=c(k[2][7],o,m),q=e[1],r=a(l[6],g[8]),s=c(k[2][7],r,q),t=f[1],u=a(l[6],g[14]),w=c(k[2][7],u,t);return function(b){function
a(a){return _(w,a)}return aa(y[24],a,s,j,p)}}}}}return a(v[2],a9)},a8],ba=[0,function(b){if(b){var
d=b[2];if(d){var
e=d[2];if(e)if(!e[2]){var
f=b[1],h=a(l[6],g[4]),i=c(k[2][7],h,f),j=d[1],m=a(l[6],g[8]),n=c(k[2][7],m,j),o=e[1],p=a(l[6],g[14]),q=c(k[2][7],p,o);return function(c){var
a=0;function
b(a){return _(q,a)}return aa(y[24],b,n,i,a)}}}}return a(v[2],a$)},a_],bc=[0,function(b){if(b){var
d=b[2];if(d)if(!d[2]){var
e=b[1],f=a(l[6],g[4]),h=c(k[2][7],f,e),i=d[1],j=a(l[17],g[4]),m=a(l[6],j),n=c(k[2][7],m,i);return function(a){return c(y[23],h,n)}}}return a(v[2],bb)},ba],be=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(l[6],g[4]),f=c(k[2][7],e,d);return function(a){return c(y[23],f,0)}}return a(v[2],bd)},bc],bf=a(a4[12],be);i(a1[9],0,[0,Q,bg],bf);function
bh(N){var
s=a(h[1][6],bi),b=g[14],q=0,r=0;if(0===b[0]){var
t=[0,bj,[0,[1,o[4],[5,[0,b[1]]],s],r]],u=a(h[1][6],bk),d=g[8];if(0===d[0]){var
v=[0,bm,[0,bl,[0,[1,o[4],[5,[0,d[1]]],u],t]]],w=a(h[1][6],bn),e=g[4];if(0===e[0]){var
x=[0,bo,[0,[1,o[4],[0,[5,[0,e[1]]]],w],v]],y=a(h[1][6],bp),f=g[4];if(0===f[0]){var
z=[0,[0,bq,[0,[1,o[4],[5,[0,f[1]]],y],x]],q],B=a(h[1][6],br),i=g[14],A=0;if(0===i[0]){var
C=[0,bs,[0,[1,o[4],[5,[0,i[1]]],B],A]],D=a(h[1][6],bt),k=g[8];if(0===k[0]){var
E=[0,bu,[0,[1,o[4],[5,[0,k[1]]],D],C]],F=a(h[1][6],bv),l=g[4];if(0===l[0]){var
G=[0,[0,bw,[0,[1,o[4],[5,[0,l[1]]],F],E]],z],H=a(h[1][6],by),m=g[4];if(0===m[0]){var
I=[0,bz,[0,[1,o[4],[0,[5,[0,m[1]]]],H],bx]],J=a(h[1][6],bA),n=g[4];if(0===n[0]){var
K=[0,[0,bB,[0,[1,o[4],[5,[0,n[1]]],J],I]],G],M=a(h[1][6],bC),p=g[4],L=0;if(0===p[0])return c(a2[4],[0,Q,bE],[0,[0,bD,[0,[1,o[4],[5,[0,p[1]]],M],L]],K]);throw[0,j,bF]}throw[0,j,bG]}throw[0,j,bH]}throw[0,j,bI]}throw[0,j,bJ]}throw[0,j,bK]}throw[0,j,bL]}throw[0,j,bM]}throw[0,j,bN]}throw[0,j,bO]}c(ao[19],bh,Q);var
ap=[0,Q,J,Y,Z,_];ab(94,ap,"Quote_plugin.G_quote");ab(95,[0,y,ap],"Quote_plugin");return});
