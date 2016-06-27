(function(fQ){"use strict";var
b7=125,bj=131,aS=".",O=140,H=112,bi="cc",cj="$l",b6="  [",b3=3901498,b4=" : ",ci=-431191102,ce="$n",bh=-912009552,N=250,cd=": ",V="Init",C=124,G=246,aW="congruence",cc="[",aY=115,am=130,aV="plugins/cc/g_congruence.ml4",aR=111,b2="cc_plugin",b5=151,aT="Extension: cannot occur",b1="A",$=113,ag=122,cb="X",ch="with",aX="]",ca=139,b0=915186972,bf=116,b$=888453194,U="Logic",b9="Congruence",b_=" and ",aU=109,b8="Exception in tactic extend ",bZ=-318868643,ah=126,cg=121,cf="Heq",az="f_equal",aQ=15500,bY=129,bg=1e3,v=fQ.jsoo_runtime,r=v.caml_check_bound,ax=v.caml_int_compare,aP=v.caml_make_vect,d=v.caml_new_string,M=v.caml_obj_tag,ay=v.caml_register_global,q=v.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):v.caml_call_gen(a,[b])}function
b(a,b,c){return a.length==2?a(b,c):v.caml_call_gen(a,[b,c])}function
l(a,b,c,d){return a.length==3?a(b,c,d):v.caml_call_gen(a,[b,c,d])}function
F(a,b,c,d,e){return a.length==4?a(b,c,d,e):v.caml_call_gen(a,[b,c,d,e])}function
bX(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):v.caml_call_gen(a,[b,c,d,e,f])}function
fP(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):v.caml_call_gen(a,[b,c,d,e,f,g])}function
fO(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):v.caml_call_gen(a,[b,c,d,e,f,g,h])}var
h=v.caml_get_global_data(),af=d(b2),e=h.Term,k=h.Names,ai=h.Hashset,bl=h.Sorts,i=h.Util,s=h.Not_found,aA=h.Global,aq=h.Environ,j=h.Tacmach,g=h.Int,t=h.Queue,c=h.Pp,aZ=h.Control,w=h.Errors,y=h.Pervasives,bk=h.Vars,bm=h.Goal,an=h.Assert_failure,P=h.Termops,ap=h.Feedback,ao=h.Hashtbl,K=h.CamlinternalLazy,au=h.Globnames,E=h.Tactics,p=h.Tacticals,o=h.Proofview,at=h.Typing,a$=h.Refiner,bb=h.Coqlib,bJ=h.Universes,ba=h.Evd,Y=h.Closure,aw=h.Loc,bd=h.Tacenv,aO=h.Constrarg,aN=h.Stdarg,al=h.Genarg,aM=h.Tacinterp,be=h.Mltop,a0=[0,0],dP=d("Out of depth ... "),dO=d("Out of instances ... "),dQ=d("First run was incomplete, completing ... "),dN=d("Executing ... "),dM=d("Running E-matching algorithm ... "),dL=d("paf_of_patt: pattern is trivial"),dJ=d("wrong incomplete class"),dD=d(" ... "),dE=d(" = "),dF=d("Checking if "),dC=d("Yes"),dG=d("No"),dz=d(aS),dA=d("Processing mark for term "),dw=d("weird error in injection subterms merge"),dx=[0,d("add_pacs")],du=d(aS),dv=d("Updating term "),dr=d(aS),ds=d(b_),dt=d("Merging "),dm=d(aS),dn=d(b_),dp=d("Linking "),dl=[0,d("plugins/cc/ccalgo.ml"),651,2],de=d(aX),df=d(" <> "),dg=d(b4),dh=d(b6),di=d("Adding new disequality, depth="),c$=d(aX),da=d(" == "),db=d(b4),dc=d(b6),dd=d("Adding new equality, depth="),c_=d("discarding redundant (dis)equality"),c6=d(aX),c7=d(cc),c3=d(aX),c4=d(":="),c5=d(cc),c2=d("incomplete matching"),cS=d("not a node"),cT=[0,d("subterms")],cJ=d("not a constructor"),cK=[0,d("get_constructor")],cF=d("not a representative"),cG=[0,d("get_representative")],cv=d("signature already entered"),cw=[0,d("enter")],cn=[0,d(b9),[0,d("Verbose"),0]],co=d("Congruence Verbose"),cP=d("Ccalgo.Discriminable"),cV=d(b1),cX=d(b1),dH=d("_eps_"),dR=d("invalid cc transitivity"),dS=d("not enough args"),dT=[0,d("nth_arg")],dU=[0,1,20],dV=d("equal_proof "),dW=[0,1,20],dX=d("edge_proof "),dY=[0,1,20],dZ=d("constr_proof "),d1=d(","),d0=d("}"),d2=d("{"),d3=[0,1,20],d4=d("path_proof "),d5=[0,1,20],d6=d("congr_proof "),d7=[0,1,20],d8=d("ind_proof "),eB=d("f"),eC=d("I don't know how to handle dependent equality"),eZ=[0,0],eW=d("congruence failed."),eX=d(b9),eQ=d("("),eR=d(")"),eM=d("Goal solved, generating proof ..."),eL=d("Computation completed."),eK=d("Problem built, solving ..."),eJ=d("Reading subgoal ..."),eN=d("Goal is solvable by congruence but some arguments are missing."),eO=d("  replacing metavariables by arbitrary terms."),eP=d(')",'),eS=d('"congruence with ('),eT=d("  Try "),eU=d("Incomplete"),eV=d("congruence failed"),eH=d(cb),eI=d(cf),eG=d("H"),eE=d("e"),eF=d(cb),eD=d(cf),ez=d("t"),ed=d("CC"),ee=d(az),ef=[0,d(V),[0,d(U),0]],eg=d("eq_rect"),eh=[0,d(V),[0,d(U),0]],ei=d("eq_refl"),ej=[0,d(V),[0,d(U),0]],ek=d("eq_sym"),el=[0,d(V),[0,d(U),0]],en=d("eq_trans"),eo=[0,d(V),[0,d(U),0]],ep=d("eq"),eq=[0,d(V),[0,d(U),0]],er=d("False"),es=[0,d(V),[0,d(U),0]],et=d("True"),eu=[0,d(V),[0,d(U),0]],ev=d("I"),ew=[0,d(V),[0,d(U),0]],fb=d(az),fc=d(az),fz=d(cj),fN=[0,d(aV),1,0],fA=[0,d(ch)],fB=d(ce),fM=[0,d(aV),1,0],fC=[0,d(aW)],fD=d(cj),fL=[0,d(aV),1,0],fE=[0,d(ch)],fF=[0,d(aW)],fG=d(ce),fK=[0,d(aV),1,0],fH=[0,d(aW)],fI=[0,[0,d(aW)],0],fJ=d(bi),fu=d(aT),fs=d(aT),fq=d(aT),fo=d(aT),e3=d(b2),fx=d(bi),e5=d(cd),e6=d(bi),e8=d(b8),fm=d(az),fe=d(cd),ff=d(az),fh=d(b8),ck=h.Typeops,cl=h.Goptions,d_=h.Inductiveops,d9=h.Type_errors,ea=h.Evarsolve,eb=h.Equality,ec=h.Context,d$=h.Evarutil,e1=h.Tacentries,e2=h.Array,aa=5;function
z(c){var
b=a0[1];if(b){var
d=a(c,0);return a(ap[15],d)}return b}function
cm(a){a0[1]=a;return 0}var
cp=[0,1,0,co,cn,function(a){return a0[1]},cm];a(cl[4],cp);var
cq=g[1],cr=[0,function(b,a){return b===a?1:0},cq],aB=a(ao[18],cr);function
cs(b,a){var
c=b[1]===a[1]?1:0,d=c?b[2]===a[2]?1:0:c;return d}var
ct=[0,cs,function(c){var
d=a(g[1],c[2]),e=a(g[1],c[1]);return b(ai[2][1],e,d)}],ar=a(ao[18],ct);function
cu(f,e,d){if(b(ar[10],d[1],e)){var
g=a(c[1],cv);l(w[3],0,cw,g)}else
l(ar[9],d[1],e,f);return l(aB[9],d[2],f,e)}function
cx(c,a){return b(ar[7],a[1],c)}function
cy(a,c){try{var
d=b(aB[7],a[2],c);b(ar[6],a[1],d);var
e=b(aB[6],a[2],c);return e}catch(a){a=q(a);if(a===s)return 0;throw a}}function
cz(c,a){function
d(a){return cy(c,a)}return b(g[2][13],d,a)}var
cA=[0,function(b,a){var
c=ax(b[1],a[1]);if(0===c){var
d=ax(b[2],a[2]);return 0===d?l(i[17][45],ax,b[3],a[3]):d}return c}],cB=[0,function(b,a){var
c=ax(b[1],a[1]);return 0===c?ax(b[2],a[2]):c}],n=a(i[21][1],cA),m=a(i[21][1],cB);function
bn(b,a){var
c=0===b[0]?0===b[1]?0===a[0]?0===a[1]?1:0:0:0===a[0]?0===a[1]?0:1:0:0===a[0]?0:1;return c?1:0}function
a1(n,m){var
c=n,a=m;for(;;){switch(c[0]){case
0:if(0===a[0])return b(e[ca],c[1],a[1]);break;case
1:if(1===a[0]){var
g=bn(c[1],a[1]);return g?bn(c[2],a[2]):g}break;case
2:if(2===a[0])return b(k[1][1],c[1],a[1]);break;case
3:if(3===a[0]){var
h=a1(c[1],a[1]);if(h){var
c=c[2],a=a[2];continue}return h}break;default:if(4===a[0]){var
d=a[1],f=c[1],i=f[2]===d[2]?1:0;if(i){var
j=f[3]===d[3]?1:0;if(j)return b(k[46],f[1][1],d[1][1]);var
l=j}else
var
l=i;return l}}return 0}}function
a2(c){switch(c[0]){case
0:var
f=a(e[b5],c[1]);return b(ai[2][1],1,f);case
1:var
g=a(bl[6],c[2]),h=a(bl[6],c[1]);return l(ai[2][3],2,h,g);case
2:var
i=a(k[1][3],c[1]);return b(ai[2][1],3,i);case
3:var
j=a2(c[2]),m=a2(c[1]);return l(ai[2][3],4,m,j);default:var
d=c[1],n=d[3],o=d[2],p=a(k[50],d[1][1]);return F(ai[2][4],5,p,o,n)}}var
I=a(ao[18],[0,e[ca],e[b5]]),ab=a(ao[18],[0,a1,a2]),a3=a(ao[18],[0,k[1][1],k[1][3]]),cC=[0,a(e[H],y[8])],bo=[0,[1,y[8],[0,y[8],y[8],0]],y[8],n[1],0,cC];function
bp(c){var
b=a(ab[1],aa);return[0,aa,0,aP(5,bo),a(I[1],aa),0,b]}function
cD(e,d){var
f=a(I[1],aa),h=a(a3[1],aa),i=g[2][1],j=a(t[2],0),k=a(t[2],0),l=g[2][1],b=a(aB[1],aa),c=[0,a(ar[1],aa),b];return[0,bp(0),c,l,k,j,0,0,i,h,e,0,f,d]}function
cE(a){return a[1]}function
x(e,g){var
c=0,a=g;for(;;){var
d=r(e[3],a)[a+1][2];if(0<=d){var
c=[0,a,c],a=d;continue}var
f=function(b){r(e[3],b)[b+1][2]=a;return 0};b(i[17][11],f,c);return a}}function
Q(e,b){var
d=r(e[3],b)[b+1][1];if(0===d[0])return d[1];var
f=a(c[1],cF);return l(w[3],0,cG,f)}function
a4(b,a){return r(b[3],a)[a+1][3]}function
cH(d,c,a){var
e=a4(d,c);return b(n[22],a,e)}function
cI(c,f,e){var
a=f;for(;;)try{var
g=a4(c,a),h=b(n[22],e,g);return h}catch(b){b=q(b);if(b===s){var
d=r(c[3],a)[a+1][1];if(0===d[0])throw s;var
a=d[1];continue}throw b}}function
bq(e,b){var
d=r(e[3],b)[b+1][5];if(4===d[0])return d[1];var
f=a(c[1],cJ);return l(w[3],0,cK,f)}function
br(b,a){return Q(b,a)[1]}function
cL(a){return a[4]}function
cM(a){return a[5]}function
cN(e,d,c){var
a=Q(e,d);a[1]=a[1]+1|0;a[2]=b(g[2][4],c,a[2]);a[3]=b(g[2][4],c,a[3]);return 0}function
cO(e,d,c){var
a=Q(e,d);a[1]=a[1]+1|0;a[3]=b(g[2][4],c,a[3]);return 0}var
bs=[248,cP,v.caml_fresh_oo_id(0)];function
cQ(b){var
c=a(i[17][4],b[3]);return[0,b[1],b[2]+1|0,c]}function
cR(a,c,e){try{var
i=b(m[22],c,a[6]),d=i}catch(a){a=q(a);if(a!==s)throw a;var
d=g[2][1]}var
f=a[6],h=b(g[2][4],e,d);a[6]=l(m[4],c,h,f);return 0}function
aj(b,a){return r(b[3],a)[a+1][5]}function
a5(f,b){var
d=r(f[3],b)[b+1][4];if(d){var
e=d[1];return[0,e[1],e[2]]}var
g=a(c[1],cS);return l(w[3],0,cT,g)}function
bt(a,c){var
b=a5(a,c),d=x(a,b[2]);return[0,x(a,b[1]),d]}function
cU(a){var
b=a[2],c=b+1|0;if(c===a[1]){var
d=((a[1]*3|0)/2|0)+1|0,e=aP(d,bo);a[1]=d;bX(i[19][10],a[3],0,e,0,b);a[3]=e}a[2]=c;return b}function
aC(a){return[0,0,g[2][1],g[2][1],0,a,m[1]]}var
cW=[0,a(k[1][5],cV)],cY=[0,a(k[1][5],cX)],cZ=a(e[H],2),c0=[0,0,a(e[H],2),cZ],c1=a(e[cg],c0);function
J(c){switch(c[0]){case
0:return bu(c[1],0);case
1:var
j=c[1],g=[0,cY,a(e[bf],c[2]),c1],h=a(e[ag],g),i=[0,cW,a(e[bf],j),h];return a(e[ag],i);case
2:return a(e[$],c[1]);case
3:var
k=c[1],f=[0,J(c[2]),0],d=k;for(;;){if(3===d[0]){var
l=d[1],f=[0,J(d[2]),f],d=l;continue}if(0===d[0])return bu(d[1],f);var
m=J(d);return b(e[60],m,f)}default:return a(e[bj],c[1][1])}}function
bu(g,c){var
h=a(e[O],g);if(10===h[0]){var
d=h[1],i=a(aA[2],0);if(b(aq[63],d[1],i)){var
f=b(k[aU][1],d[1],0);if(c){var
j=c[2],l=a(e[ah],[0,f,c[1]]);return b(e[60],l,j)}var
m=a(aA[2],0),n=b(ck[26],m,d),o=a(aA[2],0),p=b(aq[62],f,o),q=b(e[85],p[2]+1|0,n[1])[1],r=[0,f,a(e[H],1)],s=a(e[ah],r);return b(e[69],s,q)}}return b(e[60],g,c)}function
D(d){var
c=a(e[O],d);switch(c[0]){case
6:var
n=D(c[3]),o=D(c[2]);return a(e[cg],[0,c[1],o,n]);case
7:var
p=D(c[3]),q=D(c[2]);return a(e[ag],[0,c[1],q,p]);case
8:var
r=D(c[4]),s=D(c[3]),t=D(c[2]);return a(e[123],[0,c[1],t,s,r]);case
9:var
u=b(i[19][51],D,c[2]),v=[0,D(c[1]),u];return a(e[C],v);case
10:var
f=c[1],w=a(k[aY],f[1]),x=a(k[aR],w);return a(e[bY],[0,x,f[2]]);case
11:var
g=c[1],h=g[1],y=a(k[am],h[1]),z=a(k[ah],y);return a(e[am],[0,[0,z,h[2]],g[2]]);case
12:var
j=c[1],l=j[1],m=l[1],A=a(k[am],m[1]),B=a(k[ah],A);return a(e[bj],[0,[0,[0,B,m[2]],l[2]],j[2]]);case
16:var
E=c[1],F=function(b){var
c=a(k[aY],b);return a(k[aR],c)},G=b(k[aU][10],F,E),H=[0,G,D(c[2])];return a(e[ah],H);default:return d}}function
a6(b,a){if(0===a[0]){var
d=a[1],e=a[2],f=function(c,a){return[3,a,a6(b,c)]};return l(i[17][16],f,e,d)}var
c=a[1]-1|0;return r(b,c)[c+1]}function
R(e,d){var
f=a(c[1],c3),g=J(aj(e,d)),h=a(P[5],g),i=a(c[1],c4),j=a(c[20],d),k=a(c[1],c5),l=b(c[14],k,j),m=b(c[14],l,i),n=b(c[14],m,h);return b(c[14],n,f)}function
aD(d){var
e=a(c[1],c6),f=J(d),g=a(P[5],f),h=a(c[1],c7),i=b(c[14],h,g);return b(c[14],i,e)}function
W(d,c){var
e=d[1];try{var
h=b(ab[7],e[6],c);return h}catch(h){h=q(h);if(h===s){var
a=cU(e),p=J(c),f=D(b(j[15],d[13],p));switch(c[0]){case
2:var
y=n[1],i=[0,[0,aC(f)],-1,y,0,c];break;case
3:var
m=W(d,c[1]),o=W(d,c[2]);cN(e,x(e,m),a);cO(e,x(e,o),a);d[3]=b(g[2][4],a,d[3]);var
z=n[1],i=[0,[0,aC(f)],-1,z,[0,[0,m,o]],c];break;case
4:b(t[3],[0,a,[0,[0,a,0]]],d[5]);b(t[3],[0,a,[1,[0,a,c[1][2],0]]],d[5]);var
A=n[1],i=[0,[0,aC(f)],-1,A,0,c];break;default:b(t[3],[0,a,[0,[0,a,0]]],d[5]);var
u=n[1],i=[0,[0,aC(f)],-1,u,0,c]}r(e[3],a)[a+1]=i;l(ab[5],e[6],c,a);try{var
w=b(I[7],d[12],f),k=w}catch(a){a=q(a);if(a!==s)throw a;var
k=g[2][1]}var
v=b(g[2][4],a,k);l(I[9],d[12],f,v);return a}throw h}}function
bv(a,e,d,c){var
f=W(a,d),g=W(a,c);b(t[3],[0,f,g,[0,e,0]],a[4]);return l(I[5],a[1][4],e,[0,d,c])}function
bw(a,d,c,b){var
e=W(a,c),f=W(a,b);a[6]=[0,[0,e,f,d],a[6]];return 0}function
c8(b,d,c,a){b[7]=[0,[0,d,c,a[1],a[3],a[2],a[5],a[4]],b[7]];return 0}function
c9(a,d,c){try{var
e=a[1],f=function(a){return x(e,a)},g=b(i[19][15],f,c),h=b(a3[8],a[9],d),j=function(b){function
c(c,b){return c===x(a[1],b)?1:0}return l(i[19][31],c,g,b)},k=b(i[17][23],j,h);return k}catch(a){a=q(a);if(a===s)return 0;throw a}}function
dj(e,b,a,d){var
c=r(e[3],b)[b+1];c[1]=[1,a,d];c[2]=a;return 0}function
bx(g,f,e){var
a=f,b=e;for(;;){var
c=r(g[3],a)[a+1][1];if(0===c[0])return b;var
d=c[1],h=[0,[0,[0,a,d],c[2]],b],a=d,b=h;continue}}function
dk(c,i,h){var
k=x(c,h);if(x(c,i)===k){var
l=bx(c,h,0),a=[0,bx(c,i,0),l];for(;;){var
b=a[1];if(b){var
d=a[2];if(d){var
f=d[1][1],g=b[1][1],e=g[1]===f[1]?1:0,j=e?g[2]===f[2]?1:0:e;if(j){var
a=[0,b[2],d[2]];continue}return a}return[0,b,0]}return[0,0,a[2]]}}throw[0,an,dl]}function
by(d,h,j,w){z(function(o){var
e=a(c[1],dm),f=R(d[1],j),g=a(c[1],dn),i=R(d[1],h),k=a(c[1],dp),l=b(c[14],k,i),m=b(c[14],l,g),n=b(c[14],m,f);return b(c[14],n,e)});var
i=Q(d[1],h),e=Q(d[1],j);dj(d[1],h,j,w);try{var
D=b(I[7],d[12],i[5]),p=D}catch(a){a=q(a);if(a!==s)throw a;var
p=g[2][1]}var
x=b(g[2][6],h,p);l(I[9],d[12],i[5],x);var
u=b(g[2][7],i[3],e[3]);e[1]=a(g[2][19],u);e[3]=u;e[2]=b(g[2][7],i[2],e[2]);cz(d[2],i[3]);d[3]=b(g[2][7],d[3],i[3]);var
y=r(d[1][3],h)[h+1][3];function
A(c,a){return b(t[3],[0,a,[1,c]],d[5])}b(n[10],A,y);var
B=i[6];function
C(c){function
e(a){return b(t[3],[0,a,[0,c]],d[5])}return a(g[2][13],e)}b(m[10],C,B);var
k=i[4],f=e[4];if(typeof
k==="number"){if(0===k)return 0;if(typeof
f==="number"){if(0===f){e[4]=1;return 0}}else
if(0===f[0]){d[8]=b(g[2][6],j,d[8]);e[4]=1;return 0}}else
if(0===k[0]){if(typeof
f==="number"){if(0===f){e[4]=[0,k[1]];d[8]=b(g[2][6],h,d[8]);d[8]=b(g[2][4],j,d[8]);return 0}var
v=0}else
var
v=0===f[0]?0:1;if(!v){d[8]=b(g[2][6],h,d[8]);return 0}}else{var
o=k[1];if(typeof
f==="number"){if(0===f){e[4]=[1,o];return 0}}else
if(0!==f[0])return b(t[3],[0,o[1],[1,o[2]]],d[5])}return 0}function
dq(e,f){z(function(n){var
d=a(c[1],dr),g=R(f[1],e[2]),h=a(c[1],ds),i=R(f[1],e[1]),j=a(c[1],dt),k=b(c[14],j,i),l=b(c[14],k,h),m=b(c[14],l,g);return b(c[14],m,d)});var
g=f[1],h=x(g,e[1]),i=x(g,e[2]),j=1-(h===i?1:0);if(j){var
l=br(g,i);if(br(g,h)<l)return by(f,h,i,e);var
d=e[3],k=typeof
d==="number"?0:0===d[0]?[0,d[1],1-d[2]]:[1,d[3],d[4],d[1],d[2],d[5]];return by(f,i,h,[0,e[2],e[1],k])}return j}function
dy(f,s,d){z(function(j){var
e=a(c[1],dz),g=R(d[1],f),h=a(c[1],dA),i=b(c[14],h,g);return b(c[14],i,e)});var
p=x(d[1],f),h=Q(d[1],p);if(0===s[0]){cR(h,s[1],f);d[3]=b(g[2][7],h[2],d[3]);return 0}var
e=s[1],q=r(d[1][3],p)[p+1];if(1-b(n[3],e,q[3]))q[3]=l(n[4],e,f,q[3]);var
i=h[4];if(typeof
i==="number"){if(0===i)return 0===e[2]?(h[4]=[1,[0,f,e]],0):(d[3]=b(g[2][7],h[2],d[3]),h[4]=[0,e],d[8]=b(g[2][4],p,d[8]),0)}else
if(1===i[0]){var
u=i[1],j=u[2],v=u[1];if(e[1]===j[1]){var
A=bq(d[1],e[1]),o=A[3],m=j[3],k=e[3];for(;;){var
y=0<o?1:0;if(y){if(m)if(k){b(t[3],[0,m[1],k[1],[1,v,j,f,e,o]],d[4]);var
o=o-1|0,m=m[2],k=k[2];continue}var
B=a(c[1],dw);return l(w[3],0,dx,B)}return y}}throw[0,bs,v,j,f,e]}d[3]=b(g[2][7],h[2],d[3]);return 0}function
dB(e){var
g=e[1];function
h(f){if(f){var
d=f[1],l=x(g,d[2]);if(x(g,d[1])===l)var
j=a(c[1],dC),i=[0,d];else
var
m=h(f[2]),j=a(c[1],dG),i=m;z(function(p){var
f=a(c[1],dD),g=R(e[1],d[2]),h=a(c[1],dE),i=R(e[1],d[1]),k=a(c[1],dF),l=b(c[14],k,i),m=b(c[14],l,h),n=b(c[14],m,g),o=b(c[14],n,f);return b(c[14],o,j)});var
k=i}else
var
k=f;return k}return h(e[6])}var
dI=a(k[1][5],dH);function
dK(d){var
f=d[8];function
h(q){var
h=Q(d[1],q)[4];if(typeof
h!=="number"&&0===h[0]){var
f=h[1],v=J(aj(d[1],f[1])),x=b(j[15],d[13],v),y=f[3],z=function(a){return J(aj(d[1],a))},A=b(i[17][12],z,y),B=a(i[17][6],A),C=b(e[76],x,B),D=f[2],m=aj(d[1],q),o=C,k=D;for(;;){if(0<k){var
p=a(e[34],o),s=p[2],g=b(j[20],dI,d[13]),n=d[13];d[13]=l(bm[4][12],n[2],n[1],[0,[0,g,s],0]);var
t=p[3],u=[0,a(e[$],g),0],m=[3,m,[2,g]],o=b(bk[12],u,t),k=k-1|0;continue}d[1][5]=[0,f,d[1][5]];W(d,m);return 0}}var
r=a(c[1],dJ);return l(w[3],0,0,r)}return b(g[2][13],h,f)}function
bz(c){var
a=[0,m[1]],f=c[1],d=c[1][3];function
e(c,h){var
d=c<f[2]?1:0;if(d){var
e=h[1];if(0===e[0]){var
i=e[1][6],j=function(d,j){try{var
i=b(m[22],d,a[1]),e=i}catch(a){a=q(a);if(a!==s)throw a;var
e=g[2][1]}var
f=a[1],h=b(g[2][4],c,e);a[1]=l(m[4],d,h,f);return 0};return b(m[10],j,i)}return 0}return d}b(i[19][14],e,d);return a[1]}function
bA(t,p,d){var
c=a(i[22][9],d),l=c[3];if(l){var
e=l[2],u=l[1],f=u[2],h=u[1],j=t[1];if(0===h[0]){var
k=h[2],n=h[1];if(k){var
B=k[2],C=k[1];try{var
D=b(ab[7],j[6],n),E=[0,D,a(i[17][1],k)],F=Q(j,f)[6],G=b(m[22],E,F),H=function(g){var
f=bt(t[1],g),h=[0,[0,[0,n,B],f[1]],[0,[0,C,f[2]],e]],j=c[2],k=[0,a(i[19][8],c[1]),j,h];return b(i[22][3],k,d)},I=b(g[2][13],H,G);return I}catch(a){a=q(a);if(a===s)return 0;throw a}}try{var
v=x(j,b(ab[7],j[6],n))===f?1:0,J=v?b(i[22][3],[0,c[1],c[2],e],d):v;return J}catch(a){a=q(a);if(a===s)return 0;throw a}}var
o=h[1],w=o-1|0;if(0<=r(c[1],w)[w+1]){var
y=o-1|0,z=r(c[1],y)[y+1]===f?1:0;return z?b(i[22][3],[0,c[1],c[2],e],d):z}var
A=o-1|0;r(c[1],A)[A+1]=f;return b(i[22][3],[0,c[1],c[2],e],d)}p[1]=[0,[0,c[2],c[1]],p[1]];return 0}function
a7(d,c){if(0===c[0]){var
e=a(i[17][1],c[2]);return[0,b(ab[7],d,c[1]),e]}return a(y[1],dL)}function
bB(c){var
k=c[1][6],f=a(i[22][2],0),l=bz(c);function
d(a){var
h=a[5];if(typeof
h==="number")if(0===h)try{var
u=a7(k,a[4]),v=b(m[22],u,l),d=v}catch(a){a=q(a);if(a!==s)throw a;var
d=g[2][1]}else
var
d=g[2][1];else
try{var
w=b(I[7],c[12],h[1]),d=w}catch(a){a=q(a);if(a!==s)throw a;var
d=g[2][1]}function
n(c){return b(i[22][3],[0,aP(a[3],-1),a,[0,[0,a[4],c],0]],f)}b(g[2][13],n,d);var
j=a[7];if(typeof
j==="number")if(0===j)try{var
p=a7(k,a[6]),r=b(m[22],p,l),e=r}catch(a){a=q(a);if(a!==s)throw a;var
e=g[2][1]}else
var
e=g[2][1];else
try{var
t=b(I[7],c[12],j[1]),e=t}catch(a){a=q(a);if(a!==s)throw a;var
e=g[2][1]}function
o(c){return b(i[22][3],[0,aP(a[3],-1),a,[0,[0,a[6],c],0]],f)}return b(g[2][13],o,e)}b(i[17][11],d,c[7]);return f}function
bC(b){var
d=[0,0],e=bB(b);z(function(b){return a(c[1],dM)});try{for(;;){a(aZ[2],0);bA(b,d,e);continue}}catch(a){a=q(a);if(a===i[22][1])return d[1];throw a}}function
a8(h,d){z(function(b){return a(c[1],dN)});try{for(;;){a(aZ[2],0);try{dq(a(t[5],d[4]),d);var
I=1,j=I}catch(e){e=q(e);if(e!==t[1])throw e;try{var
v=a(t[5],d[5]);dy(v[1],v[2],d);var
H=1,j=H}catch(e){e=q(e);if(e!==t[1])throw e;try{var
f=a(g[2][23],d[3]);d[3]=b(g[2][6],f,d[3]);z(function(i){return function(j){var
e=a(c[1],du),f=R(d[1],i),g=a(c[1],dv),h=b(c[14],g,f);return b(c[14],h,e)}}(f));var
o=bt(d[1],f),p=o[1],y=a5(d[1],f)[2],r=Q(d[1],p),u=r[4],S=typeof
u==="number"?0:0===u[0]?(r[4]=1,d[8]=b(g[2][6],p,d[8]),1):0,A=a4(d[1],p),B=function(c,e){return function(a,f){return b(t[3],[0,e,[1,[0,a[1],a[2]-1|0,[0,c,a[3]]]]],d[5])}}(y,f);b(n[10],B,A);var
D=r[6],E=function(c){return function(a,e){return b(t[3],[0,c,[0,[0,a[1],a[2]+1|0]]],d[5])}}(f);b(m[10],E,D);try{var
F=cx(o,d[2]);b(t[3],[0,f,F,0],d[4])}catch(a){a=q(a);if(a!==s)throw a;cu(f,o,d[2])}var
G=1,j=G}catch(a){a=q(a);if(a!==s)throw a;var
j=0}}}if(j)continue;var
x=dB(d);if(x)var
L=h?[1,x[1]]:h,k=[0,L];else
if(a(g[2][2],d[8]))if(0<d[10]){var
M=bC(d),N=function(p){var
m=p[2],f=p[1];a(aZ[2],0);var
n=0<d[10]?1:0;if(n){if(c9(d,f[1],m))return z(function(b){return a(c[1],c_)});l(a3[5],d[9],f[1],m);var
s=d[1],r=function(b){try{var
e=aj(s,b);return e}catch(b){b=q(b);if(a(w[22],b)){var
d=a(c[1],c2);return l(w[3],0,0,d)}throw b}},k=b(i[19][15],r,m),t=a(e[$],f[1]),o=b(i[19][15],J,k);a(i[19][40],o);var
g=a(e[C],[0,t,o]),h=a6(k,f[4]),j=a6(k,f[6]);d[11]=1;d[10]=d[10]-1|0;return f[2]?(z(function(z){var
e=a(c[1],c$),f=aD(j),i=a(c[1],da),k=aD(h),l=a(c[1],db),m=a(P[5],g),n=a(c[1],dc),o=b(c[14],n,m),p=b(c[14],o,l),q=b(c[14],p,k),r=b(c[14],q,i),s=b(c[14],r,f),t=b(c[14],s,e),u=a(c[6],0),v=a(c[20],d[10]),w=a(c[1],dd),x=b(c[14],w,v),y=b(c[14],x,u);return b(c[14],y,t)}),bv(d,g,h,j)):(z(function(z){var
e=a(c[1],de),f=aD(j),i=a(c[1],df),k=aD(h),l=a(c[1],dg),m=a(P[5],g),n=a(c[1],dh),o=b(c[14],n,m),p=b(c[14],o,l),q=b(c[14],p,k),r=b(c[14],q,i),s=b(c[14],r,f),t=b(c[14],s,e),u=a(c[6],0),v=a(c[20],d[10]),w=a(c[1],di),x=b(c[14],w,v),y=b(c[14],x,u);return b(c[14],y,t)}),bw(d,[0,g],h,j))}return n};b(i[17][11],N,M);var
O=d[11]?(d[11]=0,a8(1,d)):(z(function(b){return a(c[1],dO)}),0),k=O}else{z(function(b){return a(c[1],dP)});var
k=0}else{z(function(b){return a(c[1],dQ)});dK(d);var
k=a8(0,d)}return k}}catch(a){a=q(a);if(a[1]===bs){var
K=h?[0,[0,a[2],a[3],a[4],a[5]]]:h;return[0,K]}throw a}}var
f=[0,[0,m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15],m[16],m[17],m[18],m[19],m[20],m[21],m[22],m[23],m[24]],[0,n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8],n[9],n[10],n[11],n[12],n[13],n[14],n[15],n[16],n[17],n[18],n[19],n[20],n[21],n[22],n[23],n[24]],I,ab,a1,J,z,cE,cL,cM,cD,W,bv,bw,c8,cQ,x,cH,cI,aj,bq,a5,dk,bz,bA,bB,a7,bC,a8,R,bp];ay(173,f,"Cc_plugin.Ccalgo");function
as(a){return[0,a,a,[2,a]]}function
ak(b,a){var
c=b[3],d=a[3];if(2===c[0])if(2===d[0])return as([3,c[1],d[1]]);return[0,[3,b[1],a[1]],[3,b[2],a[2]],[4,b,a]]}function
A(o,n){var
e=o,d=n;for(;;){var
g=e[3],h=d[3];switch(g[0]){case
2:return d;case
4:var
k=g[2],m=g[1];switch(h[0]){case
2:var
i=0;break;case
3:var
j=h[1][3];if(4===j[0]){var
r=h[2],s=A(k,j[2]),e=ak(A(m,j[1]),s),d=r;continue}var
i=1;break;case
4:var
t=A(k,h[2]);return ak(A(m,h[1]),t);default:var
i=1}break;default:var
i=0}if(!i){if(2===h[0])return e;if(3===g[0]){var
q=A(g[2],d),e=g[1],d=q;continue}}if(b(f[5],e[2],d[1]))return[0,e[1],d[2],[3,e,d]];var
p=a(c[1],dR);return l(w[3],0,0,p)}}function
S(b){var
a=b[3];switch(a[0]){case
0:return[0,b[2],b[1],[1,a[1]]];case
1:return[0,b[2],b[1],[0,a[1]]];case
2:return b;case
3:var
c=S(a[1]);return A(S(a[2]),c);case
4:var
d=S(a[2]);return ak(S(a[1]),d);default:var
e=a[4],f=a[3],g=a[2],h=[5,S(a[1]),g,f,e];return[0,b[2],b[1],h]}}function
bD(d,a){var
c=b(f[3][7],d,a);return[0,c[1],c[2],[0,a]]}function
bE(d,a){var
c=b(f[3][7],d,a);return[0,c[2],c[1],[1,a]]}function
bF(f,e){var
b=f,d=e;for(;;){if(3===b[0]){if(0<d){var
b=b[1],d=d-1|0;continue}return b[2]}var
g=a(c[1],dS);return l(w[3],0,dT,g)}}function
bG(c,d,b,a){var
e=bF(c[2],b-a|0);return[0,bF(c[1],b-a|0),e,[5,c,d,b,a]]}function
X(d,e,g){function
i(n){var
h=b(f[30],d,g),i=a(c[3],dU),j=b(f[30],d,e),k=a(c[1],dV),l=b(c[14],k,j),m=b(c[14],l,i);return b(c[14],m,h)}a(f[7],i);if(e===g)return as(b(f[20],d,e));var
h=l(f[23],d,e,g),j=S(aE(d,g,h[2]));return A(aE(d,e,h[1]),j)}function
bH(d,i){var
g=i[2],j=i[1],k=j[2],l=j[1];function
p(n){var
e=b(f[30],d,k),g=a(c[3],dW),h=b(f[30],d,l),i=a(c[1],dX),j=b(c[14],i,h),m=b(c[14],j,g);return b(c[14],m,e)}a(f[7],p);var
q=X(d,l,g[1]),r=S(X(d,k,g[2])),e=g[3];if(typeof
e==="number")var
h=bI(d,g[1],g[2]);else
if(0===e[0])var
m=e[1],s=e[2]?bE(a(f[9],d),m):bD(a(f[9],d),m),h=s;else
var
n=e[2],t=a_(d,e[1],n,e[3],e[4]),o=b(f[21],d,n[1]),h=bG(t,o[1],o[3],e[5]);return A(A(q,h),r)}function
a9(d,g,e){function
k(k){var
e=a(c[3],dY),h=b(f[30],d,g),i=a(c[1],dZ),j=b(c[14],i,h);return b(c[14],j,e)}a(f[7],k);var
h=l(f[19],d,g,e),i=X(d,g,h);if(0===e[3])return i;var
m=a(f[16],e),j=b(f[22],d,h),n=b(f[20],d,j[2]),o=a9(d,j[1],m);return A(i,ak(o,as(n)))}function
aE(e,g,d){function
i(u){var
h=a(c[1],d0);function
i(b){return a(c[20],b[1][2])}function
j(b){return a(c[1],d1)}var
k=l(c[54],j,i,d),m=a(c[1],d2),n=a(c[3],d3),o=b(f[30],e,g),p=a(c[1],d4),q=b(c[14],p,o),r=b(c[14],q,n),s=b(c[14],r,m),t=b(c[14],s,k);return b(c[14],t,h)}a(f[7],i);if(d){var
h=d[1],j=bH(e,h);return A(aE(e,h[1][2],d[2]),j)}return as(b(f[20],e,g))}function
bI(d,g,e){function
j(n){var
h=b(f[30],d,e),i=a(c[3],d5),j=b(f[30],d,g),k=a(c[1],d6),l=b(c[14],k,j),m=b(c[14],l,i);return b(c[14],m,h)}a(f[7],j);var
h=b(f[22],d,g),i=b(f[22],d,e),k=X(d,h[2],i[2]);return ak(X(d,h[1],i[1]),k)}function
a_(d,g,i,e,h){function
j(n){var
h=b(f[30],d,e),i=a(c[3],d7),j=b(f[30],d,g),k=a(c[1],d8),l=b(c[14],k,j),m=b(c[14],l,i);return b(c[14],m,h)}a(f[7],j);var
k=X(d,g,e),l=a9(d,g,i),m=A(k,a9(d,e,h));return A(S(l),m)}var
aF=[0,as,ak,A,S,bD,bE,bG,X,bH,aE,bI,a_,function(c,b){if(bZ<=b[1]){var
a=b[2];return a_(c,a[1],a[2],a[3],a[4])}var
d=b[2];return X(c,d[1],d[2])}];ay(174,aF,"Cc_plugin.Ccproof");function
T(b,a){return[G,function(c){return l(bb[5],ed,b,a)}]}var
aG=T(ef,ee),bK=T(eh,eg),bL=T(ej,ei),em=T(el,ek),bM=T(eo,en),u=T(eq,ep),Z=T(es,er),aH=T(eu,et),aI=T(ew,ev);function
bN(c){var
d=l(Y[37],0,Y[12],c);return function(c){var
e=a(Y[31],c);return b(Y[42],d,e)}}function
aJ(c){var
d=l(Y[37],0,Y[11],c);return function(c){var
e=a(Y[31],c);return b(Y[42],d,e)}}function
aK(c,b,a){return l(at[4],c,[0,b],a)}function
B(d,f,g){var
x=a(bN(d),g),c=a(e[O],x);switch(c[0]){case
6:var
j=c[3],m=c[2],y=a(e[H],1);if(!b(P[45],y,j)){var
n=a(P[55],j),z=aK(d,f,n),A=aK(d,f,m),C=B(d,f,n);return[3,[3,[1,A,z],B(d,f,m)],C]}break;case
9:var
D=B(d,f,c[1]),E=c[2],F=function(a){return B(d,f,a)},G=b(i[19][15],F,E),I=function(b,a){return[3,b,a]};return l(i[19][17],I,D,G);case
10:var
o=c[1],J=a(k[aY],o[1]),K=a(k[aR],J);return[0,a(e[bY],[0,K,o[2]])];case
11:var
p=c[1],q=p[1],L=a(k[am],q[1]),M=a(k[ah],L);return[0,a(e[am],[0,[0,M,q[2]],p[2]])];case
12:var
r=c[1],t=r[1],u=t[2],v=t[1],N=a(k[am],v[1]),Q=a(k[ah],N),h=[0,Q,v[2]],R=a(aA[26],h),w=b(d_[44],d,[0,h,u]);return[4,[0,[0,[0,h,u],r[2]],w,w-R[1][6]|0]];case
16:var
S=function(b){var
c=a(k[aY],b);return a(k[aR],c)},T=b(k[aU][10],S,c[1]),U=B(d,f,c[2]),V=a(k[aU][3],T);return[3,[0,a(e[b7],V)],U]}if(a(bk[2],g))return[0,g];throw s}function
bc(c,d,g){var
j=a(aJ(c),g),h=a(e[O],j);if(9===h[0]){var
f=h[2],i=M(u),k=h[1],l=N===i?u[1]:G===i?a(K[2],u):u;if(b(au[11],l,k))if(3===f.length-1){var
m=B(c,d,r(f,2)[3]),n=B(c,d,r(f,1)[2]);return[0,aQ,[0,r(f,0)[1],n,m]]}return[0,bh,B(c,d,g)]}return[0,bh,B(c,d,g)]}function
av(c,d,h){var
r=a(bN(c),h),f=a(e[O],r);switch(f[0]){case
0:var
j=f[1];return[0,[1,j],a(g[2][5],j)];case
6:var
k=f[3],m=f[2],t=a(e[H],1);if(!b(P[45],t,k)){var
n=a(P[55],k),o=av(c,d,m),p=av(c,d,n),u=aK(c,d,n),v=aK(c,d,m),w=b(g[2][7],o[2],p[2]);return[0,[0,[1,v,u],[0,o[1],[0,p[1],0]]],w]}break;case
9:var
x=B(c,d,f[1]),y=f[2],z=function(a){return av(c,d,a)},A=b(i[19][48],z,y),q=a(i[17][38],A),C=l(i[17][15],g[2][7],g[2][1],q[2]);return[0,[0,x,a(i[17][6],q[1])],C]}var
s=B(c,d,h);return[0,[0,s,0],g[2][1]]}function
bO(a){return 0===a[0]?1:0}function
bP(f,h,d,t){try{var
v=a(aJ(f),t),i=a(e[37],v)}catch(a){a=q(a);if(a===e[28])throw s;throw a}var
c=i[2],j=M(u),w=i[1],x=N===j?u[1]:G===j?a(K[2],u):u;if(b(au[11],x,w))if(3===c.length-1){var
k=av(f,h,r(c,1)[2]),l=k[1],m=av(f,h,r(c,2)[3]),n=m[1],o=a(g[2][19],k[2])===d?bO(l)?0:[0,r(c,0)[1]]:1,p=a(g[2][19],m[2])===d?bO(n)?0:[0,r(c,0)[1]]:1;if(1===o)if(1===p)throw s;return[0,d,o,l,p,n]}throw s}function
ex(n,h,m,l){var
c=n,d=m,g=l;for(;;){var
o=a(aJ(c),g),f=a(e[O],o);if(6===f[0]){var
i=f[3],j=f[2],k=M(Z),p=N===k?Z[1]:G===k?a(K[2],Z):Z;if(b(au[11],p,i))return[0,b$,bP(c,h,d,j)];var
c=b(aq[20],[0,f[1],j],c),d=d+1|0,g=i;continue}return[0,b0,bP(c,h,d,g)]}}function
ey(c,d,g){var
m=a(aJ(c),g),f=a(e[O],m);if(6===f[0]){var
j=f[3],k=f[2],l=M(Z),n=N===l?Z[1]:G===l?a(K[2],Z):Z;if(b(au[11],n,j)){var
h=bc(c,d,k);if(aQ<=h[1]){var
i=h[2];return[0,b3,[0,i[1],i[2],i[3]]]}return[0,ci,h[2]]}try{var
o=ex(b(aq[20],[0,f[1],k],c),d,1,j);return o}catch(a){a=q(a);if(a===s)return[0,bh,B(c,d,g)];throw a}}return bc(c,d,g)}function
bQ(d,h,g,f,c){var
i=h[1][2],l=a(e[H],1),m=a(j[2],c),n=a(j[8],c),o=fO(eb[38],n,m,i,l,d,g,f),p=a(k[1][5],ez),q=[0,[0,b(j[20],p,c)],d,o];return a(e[ag],q)}var
_=e[114];function
ac(c,g,f){var
d=M(c);function
h(b){return a(f,a(e[C],[0,b,g]))}var
i=N===d?c[1]:G===d?a(K[2],c):c;return b(p[67],i,h)}function
ad(c,g,f){var
d=M(c);function
h(b){return a(f,a(e[C],[0,b,g]))}var
i=N===d?c[1]:G===d?a(K[2],c):c;return b(p[70][57],i,h)}function
eA(b){var
c=a(j[45],b);return a(o[66][1],c)}function
aL(d,c){var
e=[0,function(e){function
f(a){return b(at[2],0,a)}var
g=l(j[49][1],f,e,c),h=b(E[138],d,c),i=a(a$[11],g[1]),k=a(o[66][1],i);return b(p[70][3],k,h)}];return a(o[62][10],e)}function
L(l){var
d=[0,function(r){function
g(a){return b(j[49][7],r,a)}try{var
d=l[3];switch(d[0]){case
0:var
h=a(E[45],d[1]);break;case
1:var
x=a(f[6],l[1]),J=a(f[6],l[2]),K=g(x),h=ad(em,[0,K,J,x,d[1]],E[45]);break;case
2:var
y=d[1],M=g(a(f[6],y)),N=E[45],h=ad(bL,[0,M,a(f[6],y)],N);break;case
3:var
z=d[2],s=d[1],O=a(f[6],s[1]),A=a(f[6],s[2]),P=a(f[6],z[2]),Q=g(A),R=a(_,2),S=[0,Q,O,A,P,a(_,1),R],T=function(a){return ad(bM,S,a)},U=[0,L(z),0],V=[0,L(s),U],W=T(eA),h=b(p[70][19],W,V);break;case
4:var
t=d[2],u=d[1],m=a(f[6],u[1]),i=a(f[6],t[1]),n=a(f[6],u[2]),B=a(f[6],t[2]),D=g(m),X=g(i),v=g(a(e[C],[0,m,[0,i]])),Y=function(c){var
d=a(k[1][5],eB);return b(j[20],d,c)},Z=b(j[49][3],Y,r),$=[0,a(e[H],1),[0,i]],aa=[0,[0,Z],D,a(e[C],$)],ab=a(e[ag],aa),ae=[0,D,v,ab,m,n,a(_,1)],af=function(a){return ac(aG,ae,a)},ah=[0,X,v,n,i,B,a(_,1)],ai=function(a){return ac(aG,ah,a)},aj=a(_,3),ak=a(_,2),al=a(e[C],[0,n,[0,B]]),am=a(e[C],[0,n,[0,i]]),an=[0,v,a(e[C],[0,m,[0,i]]),am,al,ak,aj],ao=function(a){return ac(bM,an,a)},ap=a(c[1],eC),aq=[0,b(p[70][5],0,ap),0],ar=[0,E[C],aq],as=L(t),at=ai(j[45]),au=a(o[66][1],at),av=[0,b(p[70][3],au,as),ar],aw=[0,a(p[70][23],av),0],ax=L(u),ay=af(j[45]),az=a(o[66][1],ay),aA=[0,b(p[70][3],az,ax),aw],aB=ao(j[45]),aC=a(o[66][1],aB),h=b(p[70][19],aC,aA);break;default:var
w=d[1],F=a(f[6],w[1]),aD=a(f[6],w[2]),G=a(f[6],l[1]),I=g(F),aE=g(G),aF=a(e[H],(1+d[3]|0)-d[4]|0),aH=d[2],aI=function(a){return bQ(I,aH,aF,G,a)},aJ=b(j[49][3],aI,r),aK=[0,I,aE,aJ,F,aD,a(_,1)],aL=function(a){return ac(aG,aK,a)},aM=L(w),aN=aL(j[45]),aO=a(o[66][1],aN),h=b(p[70][3],aO,aM)}return h}catch(c){c=q(c);if(a(o[66][10],c))return b(o[18],0,c);throw c}}];return a(o[62][9],d)}function
bR(d,c){function
e(a){return b(at[2],0,a)}var
f=l(j[23],e,c,d),g=a(E[45],d),h=a(o[66][8],g),i=a(a$[11],f[1]);return l(p[5],i,h,c)}function
bS(q,n,m,l){var
c=[0,function(c){var
h=a(f[6],n),d=a(f[6],m);function
r(a){return b(j[15],a,d)}var
g=b(j[49][3],r,c),t=a(k[1][5],eE),v=a(j[20],t),i=b(j[49][3],v,c),w=a(k[1][5],eF),x=a(j[20],w),y=b(j[49][3],x,c),z=[0,[0,y],g,a(e[H],1)],A=a(e[ag],z),E=ac(bK,[0,g,h,A,q,d,a(e[$],i)],bR),B=[0,a(o[66][1],E),0],s=[0,g,h,d],C=[0,L(l),B],D=[0,i],F=ad(u,s,function(a){return aL(D,a)});return b(p[70][19],F,C)}];return a(o[62][9],c)}function
bT(O,J){var
d=[0,function(v){a(bb[11],bb[14]);function
Q(b){return a(c[1],eJ)}a(f[7],Q);function
R(d){var
m=a(j[8],d),k=a(ba[69],d),c=b(f[11],O,d),l=[0,0],n=[0,0];function
o(a){var
d=B(m,k,a);b(f[12],c,d);return 0}b(i[17][11],o,J);var
p=b(bm[4][3],d[2],d[1]),q=a(aq[26],p);function
r(t){var
o=a(ec[2][1][17],t),j=o[1],g=a(e[$],j),d=ey(m,k,o[3]),h=d[1];if(aQ<=h){if(b$<=h)return b0<=h?F(f[15],c,j,1,d[2]):F(f[15],c,j,0,d[2]);if(b3<=h){var
p=d[2];return F(f[14],c,[0,g],p[2],p[3])}var
q=d[2];return F(f[13],c,g,q[2],q[3])}if(ci<=h){var
r=d[2],u=l[1],v=function(a){return F(f[14],c,[2,a[1],g],a[2],r)};b(i[17][11],v,u);n[1]=[0,[0,g,r],n[1]];return 0}var
s=d[2],w=n[1];function
x(a){return F(f[14],c,[2,g,a[1]],s,a[2])}b(i[17][11],x,w);l[1]=[0,[0,g,s],l[1]];return 0}b(i[17][11],r,q);var
s=a(j[7],d),g=bc(m,k,b(d$[31],k,s));if(aQ<=g[1]){var
h=g[2];F(f[14],c,0,h[2],h[3])}else{var
t=g[2],u=l[1],v=function(a){return F(f[14],c,[1,a[1]],a[2],t)};b(i[17][11],v,u)}return c}var
w=b(j[49][3],R,v);function
S(b){return a(c[1],eK)}a(f[7],S);var
x=b(f[29],1,w);function
T(b){return a(c[1],eL)}a(f[7],T);var
d=a(f[8],w);if(x){var
m=x[1],U=function(b){return a(c[1],eM)};a(f[7],U);if(typeof
m==="number"){var
y=[0,0],V=a(o[62][5],v),W=function(b){y[1]++;return a(_,y[1])},X=a(f[10],d),Y=function(c){var
g=b(f[21],d,c[1]),h=c[3];function
j(c){var
e=b(f[20],d,c);return a(f[6],e)}var
k=b(i[17][12],j,h),l=b(i[17][48],c[2],W),m=a(i[17][6],l),n=b(i[17][8],k,m),o=a(e[bj],g[1]);return b(e[60],o,n)},Z=b(i[17][12],Y,X),aa=a(c[1],eN);a(ap[11],aa);var
ab=a(c[1],eO),ae=a(c[1],eP),af=a(P[6],V),ah=function(h){var
d=a(c[1],eQ),e=a(c[17],0),f=a(c[1],eR),g=b(c[14],f,e);return b(c[14],g,d)},ai=l(c[54],ah,af,Z),aj=a(c[1],eS),ak=b(c[14],aj,ai),al=b(c[14],ak,ae),am=b(c[30],8,al),an=a(c[1],eT),ao=b(c[14],an,am),ar=b(c[14],ao,ab);a(ap[11],ar);var
as=a(c[1],eU);return b(p[70][4],0,as)}else{if(0===m[0]){var
n=m[1],z=n[2],s=b(aF[13],d,[0,bZ,[0,n[1],z,n[3],n[4]]]),at=b(f[21],d,z[1])[1],I=[0,function(c){var
d=a(f[6],s[1]),i=a(f[6],s[2]);function
v(a){return b(j[15],a,d)}var
g=b(j[49][3],v,c),l=a(o[62][3],c),w=a(k[1][5],eH),x=a(j[20],w),m=M(aI),y=b(j[49][3],x,c),z=N===m?aI[1]:G===m?a(K[2],aI):aI,n=M(aH),A=a(bJ[48],z),B=N===n?aH[1]:G===n?a(K[2],aH):aH,q=a(bJ[48],B),C=a(j[49][4],c),r=bX(ba[b7],0,0,0,ba[105],C),h=a(e[bf],r[2]),D=[0,[0,y],h,a(e[H],1)],E=a(e[ag],D),F=a(k[1][5],eI),I=a(j[20],F),t=b(j[49][3],I,c);function
J(a){return bQ(g,at,q,l,a)}var
O=b(j[49][3],J,c),P=[0,g,h,O,d,i,a(e[$],t)],Q=[0,g,d,i],R=0,Y=ac(aG,P,function(a){return ac(bK,[0,h,q,E,A,l,a],bR)}),S=[0,a(o[66][1],Y),R],T=[0,L(s),S],U=[0,t],X=ad(u,Q,function(a){return aL(U,a)}),V=b(p[70][19],X,T),W=a(o[60][1],r[1]);return b(p[70][3],W,V)}];return a(o[62][9],I)}var
h=m[1],q=b(aF[13],d,[0,-608347012,[0,h[1],h[2]]]),t=b(f[20],d,h[1]),r=b(f[20],d,h[2]),g=h[3];if(typeof
g==="number")return L(q);else
switch(g[0]){case
0:var
au=g[1],A=[0,function(c){var
d=a(f[6],t),h=a(f[6],r);function
i(a){return b(j[15],a,d)}var
l=[0,b(j[49][3],i,c),d,h],m=a(k[1][5],eD),n=a(j[20],m),g=b(j[49][3],n,c),o=[0,au,[0,a(e[$],g)]],s=a(e[C],o),v=[0,a(E[99],s),0],w=[0,L(q),v],x=[0,g],y=ad(u,l,function(a){return aL(x,a)});return b(p[70][19],y,w)}];return a(o[62][9],A);case
1:return bS(g[1],t,r,q);default:var
av=g[2],aw=g[1],D=[0,function(d){var
g=a(f[6],r),h=a(k[1][5],eG),i=a(j[20],h),c=b(j[49][3],i,d),l=[0,av,[0,a(e[$],c)]],m=a(e[C],l),n=[0,a(E[99],m),0],o=[0,bS(aw,t,r,q),n],s=aL([0,c],g);return b(p[70][19],s,o)}];return a(o[62][9],D)}}}var
ax=a(c[1],eV);return b(p[70][4],0,ax)}];return a(o[62][9],d)}function
bU(e){var
d=a(c[1],eW);return b(w[7],eX,d)}function
bV(d,c){var
e=a(o[66][1],bU),f=bT(d,c),g=a(p[70][28],E[17]),h=b(p[70][3],g,f);return b(p[70][12],h,e)}function
eY(c,d,k,i){var
f=M(c);function
g(m){var
c=[0,function(c){function
n(a){return b(at[2],0,a)}var
f=l(j[49][1],n,c,d),q=f[2],r=f[1],s=a(j[49][5],c),g=fP(ea[4],0,0,eZ,s,r,q),h=a(e[C],[0,m,[0,g[2],d,k]]),t=g[1],u=a(j[49][5],c),v=F(at[2],0,u,t,h),w=a(i,h),x=a(a$[11],v[1]),y=a(o[66][1],x);return b(p[70][3],y,w)}];return a(o[62][10],c)}var
h=N===f?c[1]:G===f?a(K[2],c):c;return b(p[70][57],h,g)}var
e0=[0,function(t){var
v=a(o[62][3],t);function
w(d,c){try{var
e=ad(bL,[0],E[85]),f=[0,a(p[70][22],e),0],g=[0,a(o[13],0),f],h=eY(u,d,c,E[145]),i=b(p[70][19],h,g);return i}catch(c){c=q(c);if(a(o[66][10],c))return b(o[18],0,c);throw c}}function
x(c){var
d=c[1];return d[1]===d9[1]?a(o[13],0):b(o[18],[0,c[2]],d)}var
f=a(e[O],v);if(9===f[0]){var
g=f[2];if(3===g.length-1){var
j=M(u),y=g[2],z=g[3],A=f[1],B=N===j?u[1]:G===j?a(K[2],u):u;if(b(au[11],B,A)){var
k=a(e[O],y),l=a(e[O],z);if(9===k[0])if(9===l[0]){var
n=l[2],h=k[2];if(h.length-1===n.length-1)var
s=function(c){if(0<=c){var
d=s(c-1|0),e=r(n,c)[c+1],f=w(r(h,c)[c+1],e);return b(p[70][16],f,d)}var
g=bV(bg,0);return a(p[70][22],g)},m=s(h.length-1-1|0),d=1;else
var
d=0}else
var
d=0;else
var
d=0;if(!d)var
m=a(o[13],0);var
i=m,c=1}else
var
c=0}else
var
c=0}else
var
c=0;if(!c)var
i=a(o[13],0);return b(o[20],i,x)}],ae=[0,L,bT,bU,bV,a(o[62][9],e0)];ay(192,ae,"Cc_plugin.Cctac");a(be[12],e3);try{var
fn=0,fp=[0,function(c){if(c){var
d=c[2];if(d)if(!d[2]){var
e=c[1],f=a(al[6],aN[6]),g=b(aM[2][7],f,e),h=d[1],i=a(al[17],aO[8]),j=a(al[6],i),k=b(aM[2][7],j,h);return function(a){return b(ae[4],g,k)}}}return a(y[2],fo)},fn],fr=[0,function(c){if(c)if(!c[2]){var
d=c[1],e=a(al[17],aO[8]),f=a(al[6],e),g=b(aM[2][7],f,d);return function(a){return b(ae[4],bg,g)}}return a(y[2],fq)},fp],ft=[0,function(c){if(c)if(!c[2]){var
d=c[1],e=a(al[6],aN[6]),f=b(aM[2][7],e,d);return function(a){return b(ae[4],f,0)}}return a(y[2],fs)},fr],fv=[0,function(c){return c?a(y[2],fu):function(a){return b(ae[4],bg,0)}},ft],fw=a(e2[12],fv);l(bd[9],0,[0,af,fx],fw);var
fy=function(s){var
i=a(k[1][6],fz),c=aO[8],g=0,h=0;if(0===c[0]){var
j=[0,fA,[0,[1,aw[4],[0,[5,[0,c[1]]]],i],h]],l=a(k[1][6],fB),d=aN[6];if(0===d[0]){var
m=[0,[0,fC,[0,[1,aw[4],[5,[0,d[1]]],l],j]],g],o=a(k[1][6],fD),e=aO[8],n=0;if(0===e[0]){var
p=[0,[0,fF,[0,fE,[0,[1,aw[4],[0,[5,[0,e[1]]]],o],n]]],m],r=a(k[1][6],fG),f=aN[6],q=0;if(0===f[0])return b(e1[4],[0,af,fJ],[0,fI,[0,[0,fH,[0,[1,aw[4],[5,[0,f[1]]],r],q]],p]]);throw[0,an,fK]}throw[0,an,fL]}throw[0,an,fM]}throw[0,an,fN]};b(be[19],fy,af)}catch(d){d=q(d);if(!a(w[22],d))throw d;var
e4=b(w[18],0,d),e7=b(y[16],e6,e5),e9=b(y[16],e8,e7),e_=a(c[1],e9),e$=b(c[13],e_,e4);a(ap[13],e$)}function
fa(d){var
b=[28,[0,0,[31,aw[4],[0,[0,af,fb],0],0]]],c=a(k[1][5],fc);return F(bd[4],1,0,c,b)}try{var
fl=[0,function(b,a){return ae[5]}];l(bd[9],0,[0,af,fm],fl);b(be[19],fa,af)}catch(d){d=q(d);if(!a(w[22],d))throw d;var
fd=b(w[18],0,d),fg=b(y[16],ff,fe),fi=b(y[16],fh,fg),fj=a(c[1],fi),fk=b(c[13],fj,fd);a(ap[13],fk)}var
bW=[0,af];ay(202,bW,"Cc_plugin.G_congruence");ay(203,[0,f,aF,ae,bW],"Cc_plugin");return});
