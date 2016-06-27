(function(ac){"use strict";var
L="Rdefinitions",J="R",K="Reals",I="Coq",j=ac.jsoo_runtime,d=j.caml_new_string,H=j.caml_register_global,aa=j.caml_wrap_exception;function
e(a,b){return a.length==1?a(b):j.caml_call_gen(a,[b])}function
a(a,b,c){return a.length==2?a(b,c):j.caml_call_gen(a,[b,c])}function
ab(a,b,c,d,e){return a.length==4?a(b,c,d,e):j.caml_call_gen(a,[b,c,d,e])}var
i=j.caml_get_global_data(),w=d("r_syntax_plugin"),b=i.Bigint,c=i.Globnames,p=i.Names,v=i.Util,N=i.Loc,O=i.Libnames,M=i.Notation;e(i.Mltop[12],w);var
m=[248,d("R_syntax.Non_closed_number"),j.caml_fresh_oo_id(0)],P=[0,d(I),[0,d(K),[0,d(L),0]]],R=d(J),S=d(J),U=d("R1"),V=d("R0"),W=d("Ropp"),X=d("Rplus"),Y=d("Rmult"),_=[0,d(I),[0,d(K),[0,d(L),0]]],$=d("R_scope");function
x(b){var
c=a(v[17][14],p[1][5],b);return e(p[5][4],c)}var
g=x(P),Q=e(p[1][5],R),y=a(O[17],g,Q);function
k(d,b){var
f=e(p[1][5],b);return a(c[27],d,f)}var
z=k(g,S),f=[1,k(g,U)],q=[1,k(g,V)],r=[1,k(g,W)],h=[1,k(g,X)],n=[1,k(g,Y)],l=e(b[11],b[6]),A=e(b[9],l),B=e(b[11],l),T=[1,z];function
s(c,d){return a(b[17],b[6],d)?[0,[0,c,f,0]]:[4,c,[0,[0,c,h,0]],[0,[0,[0,c,f,0]],[0,s(c,e(b[10],d)),0]]]}function
t(c,d){var
j=[0,[0,c,f,0]],k=s(c,l);function
g(d){if(a(b[16],d,B))return s(c,d);var
f=e(b[8],d),i=[4,c,[0,[0,c,n,0]],[0,k,[0,g(f[1]),0]]];return f[2]?[4,c,[0,[0,c,h,0]],[0,j,[0,i,0]]]:i}return a(b[17],d,b[5])?[0,[0,c,q,0]]:g(d)}function
C(a,c){return e(b[19],c)?[4,a,[0,[0,a,r,0]],[0,t(a,e(b[22],c)),0]]:t(a,c)}function
o(q){if(4===q[0]){var
x=q[2];if(0===x[0]){var
g=q[3];if(g){var
i=g[1],j=x[1][2];if(0===i[0]){var
k=g[2];if(k){var
p=k[1],y=i[1][2];switch(p[0]){case
0:if(k[2])var
d=1;else{if(a(c[5],j,h))if(a(c[5],y,f))if(a(c[5],p[1][2],f))return l;var
d=0}break;case
4:var
B=p[2];if(0===B[0]){var
v=p[3];if(v){var
C=v[1];if(0===C[0]){var
w=v[2];if(w){var
D=w[1];if(0===D[0])if(w[2])var
d=0;else
if(k[2])var
d=1;else{if(a(c[5],j,h))if(a(c[5],B[1][2],h))if(a(c[5],y,f))if(a(c[5],C[1][2],f))if(a(c[5],D[1][2],f))return A;var
d=0}else
var
d=0}else
var
d=0}else
var
d=0}else
var
d=0}else
var
d=0;break;default:var
d=0}}else
var
d=1}else
var
d=0;if(!d){var
r=g[2];if(r)if(!r[2]){if(a(c[5],j,n)){var
E=o(i);if(1-a(b[17],E,l))throw m;var
F=o(r[1]);return e(b[11],F)}if(0===i[0]){var
s=g[2][1];if(4===s[0]){var
z=s[2];if(0===z[0]){var
t=s[3];if(t){var
u=t[2];if(u)if(!u[2])if(a(c[5],j,h))if(a(c[5],z[1][2],n))if(a(c[5],i[1][2],f)){var
G=o(t[1]);if(1-a(b[17],G,l))throw m;var
H=o(u[1]),I=e(b[11],H);return e(b[9],I)}}}}}}}}}}throw m}function
u(d){if(0===d[0]){var
e=d[1][2];if(a(c[5],e,q))return b[5];if(a(c[5],e,f))return b[6]}return o(d)}function
D(d){if(4===d[0]){var
g=d[2];if(0===g[0]){var
f=d[3];if(f)if(!f[2])if(a(c[5],g[1][2],r)){var
h=u(f[1]);if(a(b[17],h,b[5]))throw m;return e(b[22],h)}}}return u(d)}function
E(a){try{var
b=[0,D(a)];return b}catch(a){a=aa(a);if(a===m)return 0;throw a}}function
F(a){return[0,[0,N[4],a,0]]}var
Z=[0,a(v[17][12],F,[0,r,[0,q,[0,h,[0,n,[0,f,0]]]]]),E,0];ab(M[13],$,[0,y,_],C,Z);var
G=[0,w,m,x,g,y,k,z,T,f,q,r,h,n,l,A,B,s,t,C,u,D,E,F];H(20,G,"R_syntax_plugin.R_syntax");H(21,[0,G],"R_syntax_plugin");return});
