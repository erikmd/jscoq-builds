(function(fy){"use strict";var
b6=125,bi=131,aR=".",O=140,G=112,cc="cc",ch="$l",b5="  [",b2=3901498,b3=" : ",cg=-431191102,cb="$n",bh=-912009552,N=250,V="Init",A=124,F=246,aV="congruence",ca="[",aX=115,am=130,aU="plugins/cc/g_congruence.ml4",aQ=111,b1="cc_plugin",b4=151,aS="Extension: cannot occur",b0="A",$=113,ag=122,b$="X",cf="with",aW="]",b_=139,bZ=915186972,bf=116,b9=888453194,U="Logic",b7="Congruence",b8=" and ",aT=109,bY=-318868643,ah=126,ce=121,cd="Heq",aP="f_equal",aO=15500,bX=129,bg=1e3,v=fy.jsoo_runtime,q=v.caml_check_bound,aw=v.caml_int_compare,aN=v.caml_make_vect,d=v.caml_new_string,M=v.caml_obj_tag,ax=v.caml_register_global,r=v.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):v.caml_call_gen(a,[b])}function
b(a,b,c){return a.length==2?a(b,c):v.caml_call_gen(a,[b,c])}function
l(a,b,c,d){return a.length==3?a(b,c,d):v.caml_call_gen(a,[b,c,d])}function
E(a,b,c,d,e){return a.length==4?a(b,c,d,e):v.caml_call_gen(a,[b,c,d,e])}function
bW(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):v.caml_call_gen(a,[b,c,d,e,f])}function
fx(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):v.caml_call_gen(a,[b,c,d,e,f,g])}function
fw(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):v.caml_call_gen(a,[b,c,d,e,f,g,h])}var
h=v.caml_get_global_data(),af=d(b1),e=h.Term,k=h.Names,ai=h.Hashset,bk=h.Sorts,i=h.Util,s=h.Not_found,ay=h.Global,ap=h.Environ,j=h.Tacmach,g=h.Int,t=h.Queue,c=h.Pp,aZ=h.Control,B=h.Errors,H=h.Pervasives,bj=h.Vars,bl=h.Goal,an=h.Assert_failure,P=h.Termops,aY=h.Feedback,ao=h.Hashtbl,K=h.CamlinternalLazy,at=h.Globnames,D=h.Tactics,p=h.Tacticals,o=h.Proofview,as=h.Typing,a$=h.Refiner,bb=h.Coqlib,bI=h.Universes,ba=h.Evd,Y=h.Closure,av=h.Loc,bd=h.Tacenv,aM=h.Constrarg,aL=h.Stdarg,al=h.Genarg,aK=h.Tacinterp,be=h.Mltop,a0=[0,0],dN=d("Out of depth ... "),dM=d("Out of instances ... "),dO=d("First run was incomplete, completing ... "),dL=d("Executing ... "),dK=d("Running E-matching algorithm ... "),dJ=d("paf_of_patt: pattern is trivial"),dH=d("wrong incomplete class"),dB=d(" ... "),dC=d(" = "),dD=d("Checking if "),dA=d("Yes"),dE=d("No"),dx=d(aR),dy=d("Processing mark for term "),du=d("weird error in injection subterms merge"),dv=[0,d("add_pacs")],ds=d(aR),dt=d("Updating term "),dp=d(aR),dq=d(b8),dr=d("Merging "),dk=d(aR),dl=d(b8),dm=d("Linking "),dj=[0,d("plugins/cc/ccalgo.ml"),651,2],dc=d(aW),dd=d(" <> "),de=d(b3),df=d(b5),dg=d("Adding new disequality, depth="),c9=d(aW),c_=d(" == "),c$=d(b3),da=d(b5),db=d("Adding new equality, depth="),c8=d("discarding redundant (dis)equality"),c4=d(aW),c5=d(ca),c1=d(aW),c2=d(":="),c3=d(ca),c0=d("incomplete matching"),cQ=d("not a node"),cR=[0,d("subterms")],cH=d("not a constructor"),cI=[0,d("get_constructor")],cD=d("not a representative"),cE=[0,d("get_representative")],ct=d("signature already entered"),cu=[0,d("enter")],cl=[0,d(b7),[0,d("Verbose"),0]],cm=d("Congruence Verbose"),cN=d("Ccalgo.Discriminable"),cT=d(b0),cV=d(b0),dF=d("_eps_"),dP=d("invalid cc transitivity"),dQ=d("not enough args"),dR=[0,d("nth_arg")],dS=[0,1,20],dT=d("equal_proof "),dU=[0,1,20],dV=d("edge_proof "),dW=[0,1,20],dX=d("constr_proof "),dZ=d(","),dY=d("}"),d0=d("{"),d1=[0,1,20],d2=d("path_proof "),d3=[0,1,20],d4=d("congr_proof "),d5=[0,1,20],d6=d("ind_proof "),ez=d("f"),eA=d("I don't know how to handle dependent equality"),eX=[0,0],eU=d("congruence failed."),eV=d(b7),eO=d("("),eP=d(")"),eK=d("Goal solved, generating proof ..."),eJ=d("Computation completed."),eI=d("Problem built, solving ..."),eH=d("Reading subgoal ..."),eL=d("Goal is solvable by congruence but some arguments are missing."),eM=d("  replacing metavariables by arbitrary terms."),eN=d(')",'),eQ=d('"congruence with ('),eR=d("  Try "),eS=d("Incomplete"),eT=d("congruence failed"),eF=d(b$),eG=d(cd),eE=d("H"),eC=d("e"),eD=d(b$),eB=d(cd),ex=d("t"),eb=d("CC"),ec=d(aP),ed=[0,d(V),[0,d(U),0]],ee=d("eq_rect"),ef=[0,d(V),[0,d(U),0]],eg=d("eq_refl"),eh=[0,d(V),[0,d(U),0]],ei=d("eq_sym"),ej=[0,d(V),[0,d(U),0]],el=d("eq_trans"),em=[0,d(V),[0,d(U),0]],en=d("eq"),eo=[0,d(V),[0,d(U),0]],ep=d("False"),eq=[0,d(V),[0,d(U),0]],er=d("True"),es=[0,d(V),[0,d(U),0]],et=d("I"),eu=[0,d(V),[0,d(U),0]],fs=d(aP),ft=d(aP),fc=d(ch),fq=[0,d(aU),1,0],fd=[0,d(cf)],fe=d(cb),fp=[0,d(aU),1,0],ff=[0,d(aV)],fg=d(ch),fo=[0,d(aU),1,0],fh=[0,d(cf)],fi=[0,d(aV)],fj=d(cb),fn=[0,d(aU),1,0],fk=[0,d(aV)],fl=[0,[0,d(aV)],0],fm=d(cc),e9=d(aS),e7=d(aS),e5=d(aS),e3=d(aS),e1=d(b1),fa=d(cc),fv=d(aP),ci=h.Typeops,cj=h.Goptions,d8=h.Inductiveops,d7=h.Type_errors,d_=h.Evarsolve,d$=h.Equality,ea=h.Context,d9=h.Evarutil,eZ=h.Tacentries,e0=h.Array,aa=5;function
x(d){var
c=a0[1];if(c){var
e=a(d,0);return b(aY[15],0,e)}return c}function
ck(a){a0[1]=a;return 0}var
cn=[0,1,0,cm,cl,function(a){return a0[1]},ck];a(cj[4],cn);var
co=g[1],cp=[0,function(b,a){return b===a?1:0},co],az=a(ao[18],cp);function
cq(b,a){var
c=b[1]===a[1]?1:0,d=c?b[2]===a[2]?1:0:c;return d}var
cr=[0,cq,function(c){var
d=a(g[1],c[2]),e=a(g[1],c[1]);return b(ai[2][1],e,d)}],aq=a(ao[18],cr);function
cs(f,e,d){if(b(aq[10],d[1],e)){var
g=a(c[1],ct);l(B[3],0,cu,g)}else
l(aq[9],d[1],e,f);return l(az[9],d[2],f,e)}function
cv(c,a){return b(aq[7],a[1],c)}function
cw(a,c){try{var
d=b(az[7],a[2],c);b(aq[6],a[1],d);var
e=b(az[6],a[2],c);return e}catch(a){a=r(a);if(a===s)return 0;throw a}}function
cx(c,a){function
d(a){return cw(c,a)}return b(g[2][13],d,a)}var
cy=[0,function(b,a){var
c=aw(b[1],a[1]);if(0===c){var
d=aw(b[2],a[2]);return 0===d?l(i[17][45],aw,b[3],a[3]):d}return c}],cz=[0,function(b,a){var
c=aw(b[1],a[1]);return 0===c?aw(b[2],a[2]):c}],n=a(i[21][1],cy),m=a(i[21][1],cz);function
bm(b,a){var
c=0===b[0]?0===b[1]?0===a[0]?0===a[1]?1:0:0:0===a[0]?0===a[1]?0:1:0:0===a[0]?0:1;return c?1:0}function
a1(n,m){var
c=n,a=m;for(;;){switch(c[0]){case
0:if(0===a[0])return b(e[b_],c[1],a[1]);break;case
1:if(1===a[0]){var
g=bm(c[1],a[1]);return g?bm(c[2],a[2]):g}break;case
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
f=a(e[b4],c[1]);return b(ai[2][1],1,f);case
1:var
g=a(bk[6],c[2]),h=a(bk[6],c[1]);return l(ai[2][3],2,h,g);case
2:var
i=a(k[1][3],c[1]);return b(ai[2][1],3,i);case
3:var
j=a2(c[2]),m=a2(c[1]);return l(ai[2][3],4,m,j);default:var
d=c[1],n=d[3],o=d[2],p=a(k[50],d[1][1]);return E(ai[2][4],5,p,o,n)}}var
I=a(ao[18],[0,e[b_],e[b4]]),ab=a(ao[18],[0,a1,a2]),a3=a(ao[18],[0,k[1][1],k[1][3]]),cA=[0,a(e[G],H[8])],bn=[0,[1,H[8],[0,H[8],H[8],0]],H[8],n[1],0,cA];function
bo(c){var
b=a(ab[1],aa);return[0,aa,0,aN(5,bn),a(I[1],aa),0,b]}function
cB(e,d){var
f=a(I[1],aa),h=a(a3[1],aa),i=g[2][1],j=a(t[2],0),k=a(t[2],0),l=g[2][1],b=a(az[1],aa),c=[0,a(aq[1],aa),b];return[0,bo(0),c,l,k,j,0,0,i,h,e,0,f,d]}function
cC(a){return a[1]}function
w(e,g){var
c=0,a=g;for(;;){var
d=q(e[3],a)[a+1][2];if(0<=d){var
c=[0,a,c],a=d;continue}var
f=function(b){q(e[3],b)[b+1][2]=a;return 0};b(i[17][11],f,c);return a}}function
Q(e,b){var
d=q(e[3],b)[b+1][1];if(0===d[0])return d[1];var
f=a(c[1],cD);return l(B[3],0,cE,f)}function
a4(b,a){return q(b[3],a)[a+1][3]}function
cF(d,c,a){var
e=a4(d,c);return b(n[22],a,e)}function
cG(c,f,e){var
a=f;for(;;)try{var
g=a4(c,a),h=b(n[22],e,g);return h}catch(b){b=r(b);if(b===s){var
d=q(c[3],a)[a+1][1];if(0===d[0])throw s;var
a=d[1];continue}throw b}}function
bp(e,b){var
d=q(e[3],b)[b+1][5];if(4===d[0])return d[1];var
f=a(c[1],cH);return l(B[3],0,cI,f)}function
bq(b,a){return Q(b,a)[1]}function
cJ(a){return a[4]}function
cK(a){return a[5]}function
cL(e,d,c){var
a=Q(e,d);a[1]=a[1]+1|0;a[2]=b(g[2][4],c,a[2]);a[3]=b(g[2][4],c,a[3]);return 0}function
cM(e,d,c){var
a=Q(e,d);a[1]=a[1]+1|0;a[3]=b(g[2][4],c,a[3]);return 0}var
br=[248,cN,v.caml_fresh_oo_id(0)];function
cO(b){var
c=a(i[17][4],b[3]);return[0,b[1],b[2]+1|0,c]}function
cP(a,c,e){try{var
i=b(m[22],c,a[6]),d=i}catch(a){a=r(a);if(a!==s)throw a;var
d=g[2][1]}var
f=a[6],h=b(g[2][4],e,d);a[6]=l(m[4],c,h,f);return 0}function
aj(b,a){return q(b[3],a)[a+1][5]}function
a5(f,b){var
d=q(f[3],b)[b+1][4];if(d){var
e=d[1];return[0,e[1],e[2]]}var
g=a(c[1],cQ);return l(B[3],0,cR,g)}function
bs(a,c){var
b=a5(a,c),d=w(a,b[2]);return[0,w(a,b[1]),d]}function
cS(a){var
b=a[2],c=b+1|0;if(c===a[1]){var
d=((a[1]*3|0)/2|0)+1|0,e=aN(d,bn);a[1]=d;bW(i[19][10],a[3],0,e,0,b);a[3]=e}a[2]=c;return b}function
aA(a){return[0,0,g[2][1],g[2][1],0,a,m[1]]}var
cU=[0,a(k[1][5],cT)],cW=[0,a(k[1][5],cV)],cX=a(e[G],2),cY=[0,0,a(e[G],2),cX],cZ=a(e[ce],cY);function
J(c){switch(c[0]){case
0:return bt(c[1],0);case
1:var
j=c[1],g=[0,cW,a(e[bf],c[2]),cZ],h=a(e[ag],g),i=[0,cU,a(e[bf],j),h];return a(e[ag],i);case
2:return a(e[$],c[1]);case
3:var
k=c[1],f=[0,J(c[2]),0],d=k;for(;;){if(3===d[0]){var
l=d[1],f=[0,J(d[2]),f],d=l;continue}if(0===d[0])return bt(d[1],f);var
m=J(d);return b(e[60],m,f)}default:return a(e[bi],c[1][1])}}function
bt(g,c){var
h=a(e[O],g);if(10===h[0]){var
d=h[1],i=a(ay[2],0);if(b(ap[63],d[1],i)){var
f=b(k[aT][1],d[1],0);if(c){var
j=c[2],l=a(e[ah],[0,f,c[1]]);return b(e[60],l,j)}var
m=a(ay[2],0),n=b(ci[26],m,d),o=a(ay[2],0),p=b(ap[62],f,o),q=b(e[85],p[2]+1|0,n[1])[1],r=[0,f,a(e[G],1)],s=a(e[ah],r);return b(e[69],s,q)}}return b(e[60],g,c)}function
C(d){var
c=a(e[O],d);switch(c[0]){case
6:var
n=C(c[3]),o=C(c[2]);return a(e[ce],[0,c[1],o,n]);case
7:var
p=C(c[3]),q=C(c[2]);return a(e[ag],[0,c[1],q,p]);case
8:var
r=C(c[4]),s=C(c[3]),t=C(c[2]);return a(e[123],[0,c[1],t,s,r]);case
9:var
u=b(i[19][51],C,c[2]),v=[0,C(c[1]),u];return a(e[A],v);case
10:var
f=c[1],w=a(k[aX],f[1]),x=a(k[aQ],w);return a(e[bX],[0,x,f[2]]);case
11:var
g=c[1],h=g[1],y=a(k[am],h[1]),z=a(k[ah],y);return a(e[am],[0,[0,z,h[2]],g[2]]);case
12:var
j=c[1],l=j[1],m=l[1],B=a(k[am],m[1]),D=a(k[ah],B);return a(e[bi],[0,[0,[0,D,m[2]],l[2]],j[2]]);case
16:var
E=c[1],F=function(b){var
c=a(k[aX],b);return a(k[aQ],c)},G=b(k[aT][10],F,E),H=[0,G,C(c[2])];return a(e[ah],H);default:return d}}function
a6(b,a){if(0===a[0]){var
d=a[1],e=a[2],f=function(c,a){return[3,a,a6(b,c)]};return l(i[17][16],f,e,d)}var
c=a[1]-1|0;return q(b,c)[c+1]}function
R(e,d){var
f=a(c[1],c1),g=J(aj(e,d)),h=a(P[5],g),i=a(c[1],c2),j=a(c[20],d),k=a(c[1],c3),l=b(c[14],k,j),m=b(c[14],l,i),n=b(c[14],m,h);return b(c[14],n,f)}function
aB(d){var
e=a(c[1],c4),f=J(d),g=a(P[5],f),h=a(c[1],c5),i=b(c[14],h,g);return b(c[14],i,e)}function
W(d,c){var
e=d[1];try{var
h=b(ab[7],e[6],c);return h}catch(h){h=r(h);if(h===s){var
a=cS(e),p=J(c),f=C(b(j[15],d[13],p));switch(c[0]){case
2:var
y=n[1],i=[0,[0,aA(f)],-1,y,0,c];break;case
3:var
m=W(d,c[1]),o=W(d,c[2]);cL(e,w(e,m),a);cM(e,w(e,o),a);d[3]=b(g[2][4],a,d[3]);var
z=n[1],i=[0,[0,aA(f)],-1,z,[0,[0,m,o]],c];break;case
4:b(t[3],[0,a,[0,[0,a,0]]],d[5]);b(t[3],[0,a,[1,[0,a,c[1][2],0]]],d[5]);var
A=n[1],i=[0,[0,aA(f)],-1,A,0,c];break;default:b(t[3],[0,a,[0,[0,a,0]]],d[5]);var
u=n[1],i=[0,[0,aA(f)],-1,u,0,c]}q(e[3],a)[a+1]=i;l(ab[5],e[6],c,a);try{var
x=b(I[7],d[12],f),k=x}catch(a){a=r(a);if(a!==s)throw a;var
k=g[2][1]}var
v=b(g[2][4],a,k);l(I[9],d[12],f,v);return a}throw h}}function
bu(a,e,d,c){var
f=W(a,d),g=W(a,c);b(t[3],[0,f,g,[0,e,0]],a[4]);return l(I[5],a[1][4],e,[0,d,c])}function
bv(a,d,c,b){var
e=W(a,c),f=W(a,b);a[6]=[0,[0,e,f,d],a[6]];return 0}function
c6(b,d,c,a){b[7]=[0,[0,d,c,a[1],a[3],a[2],a[5],a[4]],b[7]];return 0}function
c7(a,d,c){try{var
e=a[1],f=function(a){return w(e,a)},g=b(i[19][15],f,c),h=b(a3[8],a[9],d),j=function(b){function
c(c,b){return c===w(a[1],b)?1:0}return l(i[19][31],c,g,b)},k=b(i[17][23],j,h);return k}catch(a){a=r(a);if(a===s)return 0;throw a}}function
dh(e,b,a,d){var
c=q(e[3],b)[b+1];c[1]=[1,a,d];c[2]=a;return 0}function
bw(g,f,e){var
a=f,b=e;for(;;){var
c=q(g[3],a)[a+1][1];if(0===c[0])return b;var
d=c[1],h=[0,[0,[0,a,d],c[2]],b],a=d,b=h;continue}}function
di(c,i,h){var
k=w(c,h);if(w(c,i)===k){var
l=bw(c,h,0),a=[0,bw(c,i,0),l];for(;;){var
b=a[1];if(b){var
d=a[2];if(d){var
f=d[1][1],g=b[1][1],e=g[1]===f[1]?1:0,j=e?g[2]===f[2]?1:0:e;if(j){var
a=[0,b[2],d[2]];continue}return a}return[0,b,0]}return[0,0,a[2]]}}throw[0,an,dj]}function
bx(d,h,j,w){x(function(o){var
e=a(c[1],dk),f=R(d[1],j),g=a(c[1],dl),i=R(d[1],h),k=a(c[1],dm),l=b(c[14],k,i),m=b(c[14],l,g),n=b(c[14],m,f);return b(c[14],n,e)});var
i=Q(d[1],h),e=Q(d[1],j);dh(d[1],h,j,w);try{var
D=b(I[7],d[12],i[5]),p=D}catch(a){a=r(a);if(a!==s)throw a;var
p=g[2][1]}var
y=b(g[2][6],h,p);l(I[9],d[12],i[5],y);var
u=b(g[2][7],i[3],e[3]);e[1]=a(g[2][19],u);e[3]=u;e[2]=b(g[2][7],i[2],e[2]);cx(d[2],i[3]);d[3]=b(g[2][7],d[3],i[3]);var
z=q(d[1][3],h)[h+1][3];function
A(c,a){return b(t[3],[0,a,[1,c]],d[5])}b(n[10],A,z);var
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
dn(e,f){x(function(n){var
d=a(c[1],dp),g=R(f[1],e[2]),h=a(c[1],dq),i=R(f[1],e[1]),j=a(c[1],dr),k=b(c[14],j,i),l=b(c[14],k,h),m=b(c[14],l,g);return b(c[14],m,d)});var
g=f[1],h=w(g,e[1]),i=w(g,e[2]),j=1-(h===i?1:0);if(j){var
l=bq(g,i);if(bq(g,h)<l)return bx(f,h,i,e);var
d=e[3],k=typeof
d==="number"?0:0===d[0]?[0,d[1],1-d[2]]:[1,d[3],d[4],d[1],d[2],d[5]];return bx(f,i,h,[0,e[2],e[1],k])}return j}function
dw(f,s,d){x(function(j){var
e=a(c[1],dx),g=R(d[1],f),h=a(c[1],dy),i=b(c[14],h,g);return b(c[14],i,e)});var
p=w(d[1],f),h=Q(d[1],p);if(0===s[0]){cP(h,s[1],f);d[3]=b(g[2][7],h[2],d[3]);return 0}var
e=s[1],r=q(d[1][3],p)[p+1];if(1-b(n[3],e,r[3]))r[3]=l(n[4],e,f,r[3]);var
i=h[4];if(typeof
i==="number"){if(0===i)return 0===e[2]?(h[4]=[1,[0,f,e]],0):(d[3]=b(g[2][7],h[2],d[3]),h[4]=[0,e],d[8]=b(g[2][4],p,d[8]),0)}else
if(1===i[0]){var
u=i[1],j=u[2],v=u[1];if(e[1]===j[1]){var
z=bp(d[1],e[1]),o=z[3],m=j[3],k=e[3];for(;;){var
y=0<o?1:0;if(y){if(m)if(k){b(t[3],[0,m[1],k[1],[1,v,j,f,e,o]],d[4]);var
o=o-1|0,m=m[2],k=k[2];continue}var
A=a(c[1],du);return l(B[3],0,dv,A)}return y}}throw[0,br,v,j,f,e]}d[3]=b(g[2][7],h[2],d[3]);return 0}function
dz(e){var
g=e[1];function
h(f){if(f){var
d=f[1],l=w(g,d[2]);if(w(g,d[1])===l)var
j=a(c[1],dA),i=[0,d];else
var
m=h(f[2]),j=a(c[1],dE),i=m;x(function(p){var
f=a(c[1],dB),g=R(e[1],d[2]),h=a(c[1],dC),i=R(e[1],d[1]),k=a(c[1],dD),l=b(c[14],k,i),m=b(c[14],l,h),n=b(c[14],m,g),o=b(c[14],n,f);return b(c[14],o,j)});var
k=i}else
var
k=f;return k}return h(e[6])}var
dG=a(k[1][5],dF);function
dI(d){var
f=d[8];function
h(q){var
h=Q(d[1],q)[4];if(typeof
h!=="number"&&0===h[0]){var
f=h[1],v=J(aj(d[1],f[1])),w=b(j[15],d[13],v),x=f[3],y=function(a){return J(aj(d[1],a))},z=b(i[17][12],y,x),A=a(i[17][6],z),C=b(e[76],w,A),D=f[2],m=aj(d[1],q),o=C,k=D;for(;;){if(0<k){var
p=a(e[34],o),s=p[2],g=b(j[20],dG,d[13]),n=d[13];d[13]=l(bl[4][12],n[2],n[1],[0,[0,g,s],0]);var
t=p[3],u=[0,a(e[$],g),0],m=[3,m,[2,g]],o=b(bj[12],u,t),k=k-1|0;continue}d[1][5]=[0,f,d[1][5]];W(d,m);return 0}}var
r=a(c[1],dH);return l(B[3],0,0,r)}return b(g[2][13],h,f)}function
by(c){var
a=[0,m[1]],f=c[1],d=c[1][3];function
e(c,h){var
d=c<f[2]?1:0;if(d){var
e=h[1];if(0===e[0]){var
i=e[1][6],j=function(d,j){try{var
i=b(m[22],d,a[1]),e=i}catch(a){a=r(a);if(a!==s)throw a;var
e=g[2][1]}var
f=a[1],h=b(g[2][4],c,e);a[1]=l(m[4],d,h,f);return 0};return b(m[10],j,i)}return 0}return d}b(i[19][14],e,d);return a[1]}function
bz(t,p,d){var
c=a(i[22][9],d),l=c[3];if(l){var
e=l[2],u=l[1],f=u[2],h=u[1],j=t[1];if(0===h[0]){var
k=h[2],n=h[1];if(k){var
B=k[2],C=k[1];try{var
D=b(ab[7],j[6],n),E=[0,D,a(i[17][1],k)],F=Q(j,f)[6],G=b(m[22],E,F),H=function(g){var
f=bs(t[1],g),h=[0,[0,[0,n,B],f[1]],[0,[0,C,f[2]],e]],j=c[2],k=[0,a(i[19][8],c[1]),j,h];return b(i[22][3],k,d)},I=b(g[2][13],H,G);return I}catch(a){a=r(a);if(a===s)return 0;throw a}}try{var
v=w(j,b(ab[7],j[6],n))===f?1:0,J=v?b(i[22][3],[0,c[1],c[2],e],d):v;return J}catch(a){a=r(a);if(a===s)return 0;throw a}}var
o=h[1],x=o-1|0;if(0<=q(c[1],x)[x+1]){var
y=o-1|0,z=q(c[1],y)[y+1]===f?1:0;return z?b(i[22][3],[0,c[1],c[2],e],d):z}var
A=o-1|0;q(c[1],A)[A+1]=f;return b(i[22][3],[0,c[1],c[2],e],d)}p[1]=[0,[0,c[2],c[1]],p[1]];return 0}function
a7(d,c){if(0===c[0]){var
e=a(i[17][1],c[2]);return[0,b(ab[7],d,c[1]),e]}return a(H[1],dJ)}function
bA(c){var
k=c[1][6],f=a(i[22][2],0),l=by(c);function
d(a){var
h=a[5];if(typeof
h==="number")if(0===h)try{var
u=a7(k,a[4]),v=b(m[22],u,l),d=v}catch(a){a=r(a);if(a!==s)throw a;var
d=g[2][1]}else
var
d=g[2][1];else
try{var
w=b(I[7],c[12],h[1]),d=w}catch(a){a=r(a);if(a!==s)throw a;var
d=g[2][1]}function
n(c){return b(i[22][3],[0,aN(a[3],-1),a,[0,[0,a[4],c],0]],f)}b(g[2][13],n,d);var
j=a[7];if(typeof
j==="number")if(0===j)try{var
p=a7(k,a[6]),q=b(m[22],p,l),e=q}catch(a){a=r(a);if(a!==s)throw a;var
e=g[2][1]}else
var
e=g[2][1];else
try{var
t=b(I[7],c[12],j[1]),e=t}catch(a){a=r(a);if(a!==s)throw a;var
e=g[2][1]}function
o(c){return b(i[22][3],[0,aN(a[3],-1),a,[0,[0,a[6],c],0]],f)}return b(g[2][13],o,e)}b(i[17][11],d,c[7]);return f}function
bB(b){var
d=[0,0],e=bA(b);x(function(b){return a(c[1],dK)});try{for(;;){a(aZ[2],0);bz(b,d,e);continue}}catch(a){a=r(a);if(a===i[22][1])return d[1];throw a}}function
a8(h,d){x(function(b){return a(c[1],dL)});try{for(;;){a(aZ[2],0);try{dn(a(t[5],d[4]),d);var
I=1,j=I}catch(e){e=r(e);if(e!==t[1])throw e;try{var
v=a(t[5],d[5]);dw(v[1],v[2],d);var
H=1,j=H}catch(e){e=r(e);if(e!==t[1])throw e;try{var
f=a(g[2][23],d[3]);d[3]=b(g[2][6],f,d[3]);x(function(i){return function(j){var
e=a(c[1],ds),f=R(d[1],i),g=a(c[1],dt),h=b(c[14],g,f);return b(c[14],h,e)}}(f));var
o=bs(d[1],f),p=o[1],y=a5(d[1],f)[2],q=Q(d[1],p),u=q[4],S=typeof
u==="number"?0:0===u[0]?(q[4]=1,d[8]=b(g[2][6],p,d[8]),1):0,z=a4(d[1],p),C=function(c,e){return function(a,f){return b(t[3],[0,e,[1,[0,a[1],a[2]-1|0,[0,c,a[3]]]]],d[5])}}(y,f);b(n[10],C,z);var
D=q[6],E=function(c){return function(a,e){return b(t[3],[0,c,[0,[0,a[1],a[2]+1|0]]],d[5])}}(f);b(m[10],E,D);try{var
F=cv(o,d[2]);b(t[3],[0,f,F,0],d[4])}catch(a){a=r(a);if(a!==s)throw a;cs(f,o,d[2])}var
G=1,j=G}catch(a){a=r(a);if(a!==s)throw a;var
j=0}}}if(j)continue;var
w=dz(d);if(w)var
L=h?[1,w[1]]:h,k=[0,L];else
if(a(g[2][2],d[8]))if(0<d[10]){var
M=bB(d),N=function(p){var
m=p[2],f=p[1];a(aZ[2],0);var
n=0<d[10]?1:0;if(n){if(c7(d,f[1],m))return x(function(b){return a(c[1],c8)});l(a3[5],d[9],f[1],m);var
s=d[1],q=function(b){try{var
e=aj(s,b);return e}catch(b){b=r(b);if(a(B[22],b)){var
d=a(c[1],c0);return l(B[3],0,0,d)}throw b}},k=b(i[19][15],q,m),t=a(e[$],f[1]),o=b(i[19][15],J,k);a(i[19][40],o);var
g=a(e[A],[0,t,o]),h=a6(k,f[4]),j=a6(k,f[6]);d[11]=1;d[10]=d[10]-1|0;return f[2]?(x(function(z){var
e=a(c[1],c9),f=aB(j),i=a(c[1],c_),k=aB(h),l=a(c[1],c$),m=a(P[5],g),n=a(c[1],da),o=b(c[14],n,m),p=b(c[14],o,l),q=b(c[14],p,k),r=b(c[14],q,i),s=b(c[14],r,f),t=b(c[14],s,e),u=a(c[6],0),v=a(c[20],d[10]),w=a(c[1],db),x=b(c[14],w,v),y=b(c[14],x,u);return b(c[14],y,t)}),bu(d,g,h,j)):(x(function(z){var
e=a(c[1],dc),f=aB(j),i=a(c[1],dd),k=aB(h),l=a(c[1],de),m=a(P[5],g),n=a(c[1],df),o=b(c[14],n,m),p=b(c[14],o,l),q=b(c[14],p,k),r=b(c[14],q,i),s=b(c[14],r,f),t=b(c[14],s,e),u=a(c[6],0),v=a(c[20],d[10]),w=a(c[1],dg),x=b(c[14],w,v),y=b(c[14],x,u);return b(c[14],y,t)}),bv(d,[0,g],h,j))}return n};b(i[17][11],N,M);var
O=d[11]?(d[11]=0,a8(1,d)):(x(function(b){return a(c[1],dM)}),0),k=O}else{x(function(b){return a(c[1],dN)});var
k=0}else{x(function(b){return a(c[1],dO)});dI(d);var
k=a8(0,d)}return k}}catch(a){a=r(a);if(a[1]===br){var
K=h?[0,[0,a[2],a[3],a[4],a[5]]]:h;return[0,K]}throw a}}var
f=[0,[0,m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15],m[16],m[17],m[18],m[19],m[20],m[21],m[22],m[23],m[24]],[0,n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8],n[9],n[10],n[11],n[12],n[13],n[14],n[15],n[16],n[17],n[18],n[19],n[20],n[21],n[22],n[23],n[24]],I,ab,a1,J,x,cC,cJ,cK,cB,W,bu,bv,c6,cO,w,cF,cG,aj,bp,a5,di,by,bz,bA,a7,bB,a8,R,bo];ax(167,f,"Cc_plugin.Ccalgo");function
ar(a){return[0,a,a,[2,a]]}function
ak(b,a){var
c=b[3],d=a[3];if(2===c[0])if(2===d[0])return ar([3,c[1],d[1]]);return[0,[3,b[1],a[1]],[3,b[2],a[2]],[4,b,a]]}function
y(o,n){var
e=o,d=n;for(;;){var
g=e[3],h=d[3];switch(g[0]){case
2:return d;case
4:var
k=g[2],m=g[1];switch(h[0]){case
2:var
i=0;break;case
3:var
j=h[1][3];if(4===j[0]){var
r=h[2],s=y(k,j[2]),e=ak(y(m,j[1]),s),d=r;continue}var
i=1;break;case
4:var
t=y(k,h[2]);return ak(y(m,h[1]),t);default:var
i=1}break;default:var
i=0}if(!i){if(2===h[0])return e;if(3===g[0]){var
q=y(g[2],d),e=g[1],d=q;continue}}if(b(f[5],e[2],d[1]))return[0,e[1],d[2],[3,e,d]];var
p=a(c[1],dP);return l(B[3],0,0,p)}}function
S(b){var
a=b[3];switch(a[0]){case
0:return[0,b[2],b[1],[1,a[1]]];case
1:return[0,b[2],b[1],[0,a[1]]];case
2:return b;case
3:var
c=S(a[1]);return y(S(a[2]),c);case
4:var
d=S(a[2]);return ak(S(a[1]),d);default:var
e=a[4],f=a[3],g=a[2],h=[5,S(a[1]),g,f,e];return[0,b[2],b[1],h]}}function
bC(d,a){var
c=b(f[3][7],d,a);return[0,c[1],c[2],[0,a]]}function
bD(d,a){var
c=b(f[3][7],d,a);return[0,c[2],c[1],[1,a]]}function
bE(f,e){var
b=f,d=e;for(;;){if(3===b[0]){if(0<d){var
b=b[1],d=d-1|0;continue}return b[2]}var
g=a(c[1],dQ);return l(B[3],0,dR,g)}}function
bF(c,d,b,a){var
e=bE(c[2],b-a|0);return[0,bE(c[1],b-a|0),e,[5,c,d,b,a]]}function
X(d,e,g){function
i(n){var
h=b(f[30],d,g),i=a(c[3],dS),j=b(f[30],d,e),k=a(c[1],dT),l=b(c[14],k,j),m=b(c[14],l,i);return b(c[14],m,h)}a(f[7],i);if(e===g)return ar(b(f[20],d,e));var
h=l(f[23],d,e,g),j=S(aC(d,g,h[2]));return y(aC(d,e,h[1]),j)}function
bG(d,i){var
g=i[2],j=i[1],k=j[2],l=j[1];function
p(n){var
e=b(f[30],d,k),g=a(c[3],dU),h=b(f[30],d,l),i=a(c[1],dV),j=b(c[14],i,h),m=b(c[14],j,g);return b(c[14],m,e)}a(f[7],p);var
q=X(d,l,g[1]),r=S(X(d,k,g[2])),e=g[3];if(typeof
e==="number")var
h=bH(d,g[1],g[2]);else
if(0===e[0])var
m=e[1],s=e[2]?bD(a(f[9],d),m):bC(a(f[9],d),m),h=s;else
var
n=e[2],t=a_(d,e[1],n,e[3],e[4]),o=b(f[21],d,n[1]),h=bF(t,o[1],o[3],e[5]);return y(y(q,h),r)}function
a9(d,g,e){function
k(k){var
e=a(c[3],dW),h=b(f[30],d,g),i=a(c[1],dX),j=b(c[14],i,h);return b(c[14],j,e)}a(f[7],k);var
h=l(f[19],d,g,e),i=X(d,g,h);if(0===e[3])return i;var
m=a(f[16],e),j=b(f[22],d,h),n=b(f[20],d,j[2]),o=a9(d,j[1],m);return y(i,ak(o,ar(n)))}function
aC(e,g,d){function
i(u){var
h=a(c[1],dY);function
i(b){return a(c[20],b[1][2])}function
j(b){return a(c[1],dZ)}var
k=l(c[54],j,i,d),m=a(c[1],d0),n=a(c[3],d1),o=b(f[30],e,g),p=a(c[1],d2),q=b(c[14],p,o),r=b(c[14],q,n),s=b(c[14],r,m),t=b(c[14],s,k);return b(c[14],t,h)}a(f[7],i);if(d){var
h=d[1],j=bG(e,h);return y(aC(e,h[1][2],d[2]),j)}return ar(b(f[20],e,g))}function
bH(d,g,e){function
j(n){var
h=b(f[30],d,e),i=a(c[3],d3),j=b(f[30],d,g),k=a(c[1],d4),l=b(c[14],k,j),m=b(c[14],l,i);return b(c[14],m,h)}a(f[7],j);var
h=b(f[22],d,g),i=b(f[22],d,e),k=X(d,h[2],i[2]);return ak(X(d,h[1],i[1]),k)}function
a_(d,g,i,e,h){function
j(n){var
h=b(f[30],d,e),i=a(c[3],d5),j=b(f[30],d,g),k=a(c[1],d6),l=b(c[14],k,j),m=b(c[14],l,i);return b(c[14],m,h)}a(f[7],j);var
k=X(d,g,e),l=a9(d,g,i),m=y(k,a9(d,e,h));return y(S(l),m)}var
aD=[0,ar,ak,y,S,bC,bD,bF,X,bG,aC,bH,a_,function(c,b){if(bY<=b[1]){var
a=b[2];return a_(c,a[1],a[2],a[3],a[4])}var
d=b[2];return X(c,d[1],d[2])}];ax(168,aD,"Cc_plugin.Ccproof");function
T(b,a){return[F,function(c){return l(bb[5],eb,b,a)}]}var
aE=T(ed,ec),bJ=T(ef,ee),bK=T(eh,eg),ek=T(ej,ei),bL=T(em,el),u=T(eo,en),Z=T(eq,ep),aF=T(es,er),aG=T(eu,et);function
bM(c){var
d=l(Y[42],0,Y[14],c);return function(c){var
e=a(Y[36],c);return b(Y[47],d,e)}}function
aH(c){var
d=l(Y[42],0,Y[9],c);return function(c){var
e=a(Y[36],c);return b(Y[47],d,e)}}function
aI(c,b,a){return l(as[4],c,[0,b],a)}function
z(d,f,g){var
x=a(bM(d),g),c=a(e[O],x);switch(c[0]){case
6:var
j=c[3],m=c[2],y=a(e[G],1);if(!b(P[45],y,j)){var
n=a(P[55],j),A=aI(d,f,n),B=aI(d,f,m),C=z(d,f,n);return[3,[3,[1,B,A],z(d,f,m)],C]}break;case
9:var
D=z(d,f,c[1]),E=c[2],F=function(a){return z(d,f,a)},H=b(i[19][15],F,E),I=function(b,a){return[3,b,a]};return l(i[19][17],I,D,H);case
10:var
o=c[1],J=a(k[aX],o[1]),K=a(k[aQ],J);return[0,a(e[bX],[0,K,o[2]])];case
11:var
p=c[1],q=p[1],L=a(k[am],q[1]),M=a(k[ah],L);return[0,a(e[am],[0,[0,M,q[2]],p[2]])];case
12:var
r=c[1],t=r[1],u=t[2],v=t[1],N=a(k[am],v[1]),Q=a(k[ah],N),h=[0,Q,v[2]],R=a(ay[26],h),w=b(d8[44],d,[0,h,u]);return[4,[0,[0,[0,h,u],r[2]],w,w-R[1][6]|0]];case
16:var
S=function(b){var
c=a(k[aX],b);return a(k[aQ],c)},T=b(k[aT][10],S,c[1]),U=z(d,f,c[2]),V=a(k[aT][3],T);return[3,[0,a(e[b6],V)],U]}if(a(bj[2],g))return[0,g];throw s}function
bc(c,d,g){var
j=a(aH(c),g),h=a(e[O],j);if(9===h[0]){var
f=h[2],i=M(u),k=h[1],l=N===i?u[1]:F===i?a(K[2],u):u;if(b(at[11],l,k))if(3===f.length-1){var
m=z(c,d,q(f,2)[3]),n=z(c,d,q(f,1)[2]);return[0,aO,[0,q(f,0)[1],n,m]]}return[0,bh,z(c,d,g)]}return[0,bh,z(c,d,g)]}function
au(c,d,h){var
r=a(bM(c),h),f=a(e[O],r);switch(f[0]){case
0:var
j=f[1];return[0,[1,j],a(g[2][5],j)];case
6:var
k=f[3],m=f[2],t=a(e[G],1);if(!b(P[45],t,k)){var
n=a(P[55],k),o=au(c,d,m),p=au(c,d,n),u=aI(c,d,n),v=aI(c,d,m),w=b(g[2][7],o[2],p[2]);return[0,[0,[1,v,u],[0,o[1],[0,p[1],0]]],w]}break;case
9:var
x=z(c,d,f[1]),y=f[2],A=function(a){return au(c,d,a)},B=b(i[19][48],A,y),q=a(i[17][38],B),C=l(i[17][15],g[2][7],g[2][1],q[2]);return[0,[0,x,a(i[17][6],q[1])],C]}var
s=z(c,d,h);return[0,[0,s,0],g[2][1]]}function
bN(a){return 0===a[0]?1:0}function
bO(f,h,d,t){try{var
v=a(aH(f),t),i=a(e[37],v)}catch(a){a=r(a);if(a===e[28])throw s;throw a}var
c=i[2],j=M(u),w=i[1],x=N===j?u[1]:F===j?a(K[2],u):u;if(b(at[11],x,w))if(3===c.length-1){var
k=au(f,h,q(c,1)[2]),l=k[1],m=au(f,h,q(c,2)[3]),n=m[1],o=a(g[2][19],k[2])===d?bN(l)?0:[0,q(c,0)[1]]:1,p=a(g[2][19],m[2])===d?bN(n)?0:[0,q(c,0)[1]]:1;if(1===o)if(1===p)throw s;return[0,d,o,l,p,n]}throw s}function
ev(n,h,m,l){var
c=n,d=m,g=l;for(;;){var
o=a(aH(c),g),f=a(e[O],o);if(6===f[0]){var
i=f[3],j=f[2],k=M(Z),p=N===k?Z[1]:F===k?a(K[2],Z):Z;if(b(at[11],p,i))return[0,b9,bO(c,h,d,j)];var
c=b(ap[20],[0,f[1],j],c),d=d+1|0,g=i;continue}return[0,bZ,bO(c,h,d,g)]}}function
ew(c,d,g){var
m=a(aH(c),g),f=a(e[O],m);if(6===f[0]){var
j=f[3],k=f[2],l=M(Z),n=N===l?Z[1]:F===l?a(K[2],Z):Z;if(b(at[11],n,j)){var
h=bc(c,d,k);if(aO<=h[1]){var
i=h[2];return[0,b2,[0,i[1],i[2],i[3]]]}return[0,cg,h[2]]}try{var
o=ev(b(ap[20],[0,f[1],k],c),d,1,j);return o}catch(a){a=r(a);if(a===s)return[0,bh,z(c,d,g)];throw a}}return bc(c,d,g)}function
bP(d,h,g,f,c){var
i=h[1][2],l=a(e[G],1),m=a(j[2],c),n=a(j[8],c),o=fw(d$[38],n,m,i,l,d,g,f),p=a(k[1][5],ex),q=[0,[0,b(j[20],p,c)],d,o];return a(e[ag],q)}var
_=e[114];function
ac(c,g,f){var
d=M(c);function
h(b){return a(f,a(e[A],[0,b,g]))}var
i=N===d?c[1]:F===d?a(K[2],c):c;return b(p[67],i,h)}function
ad(c,g,f){var
d=M(c);function
h(b){return a(f,a(e[A],[0,b,g]))}var
i=N===d?c[1]:F===d?a(K[2],c):c;return b(p[70][57],i,h)}function
ey(b){var
c=a(j[45],b);return a(o[66][1],c)}function
aJ(d,c){var
e=[0,function(e){function
f(a){return b(as[2],0,a)}var
g=l(j[49][1],f,e,c),h=b(D[138],d,c),i=a(a$[11],g[1]),k=a(o[66][1],i);return b(p[70][3],k,h)}];return a(o[62][10],e)}function
L(l){var
d=[0,function(q){function
g(a){return b(j[49][7],q,a)}try{var
d=l[3];switch(d[0]){case
0:var
h=a(D[45],d[1]);break;case
1:var
x=a(f[6],l[1]),J=a(f[6],l[2]),K=g(x),h=ad(ek,[0,K,J,x,d[1]],D[45]);break;case
2:var
y=d[1],M=g(a(f[6],y)),N=D[45],h=ad(bK,[0,M,a(f[6],y)],N);break;case
3:var
z=d[2],s=d[1],O=a(f[6],s[1]),B=a(f[6],s[2]),P=a(f[6],z[2]),Q=g(B),R=a(_,2),S=[0,Q,O,B,P,a(_,1),R],T=function(a){return ad(bL,S,a)},U=[0,L(z),0],V=[0,L(s),U],W=T(ey),h=b(p[70][19],W,V);break;case
4:var
t=d[2],u=d[1],m=a(f[6],u[1]),i=a(f[6],t[1]),n=a(f[6],u[2]),C=a(f[6],t[2]),E=g(m),X=g(i),v=g(a(e[A],[0,m,[0,i]])),Y=function(c){var
d=a(k[1][5],ez);return b(j[20],d,c)},Z=b(j[49][3],Y,q),$=[0,a(e[G],1),[0,i]],aa=[0,[0,Z],E,a(e[A],$)],ab=a(e[ag],aa),ae=[0,E,v,ab,m,n,a(_,1)],af=function(a){return ac(aE,ae,a)},ah=[0,X,v,n,i,C,a(_,1)],ai=function(a){return ac(aE,ah,a)},aj=a(_,3),ak=a(_,2),al=a(e[A],[0,n,[0,C]]),am=a(e[A],[0,n,[0,i]]),an=[0,v,a(e[A],[0,m,[0,i]]),am,al,ak,aj],ao=function(a){return ac(bL,an,a)},ap=a(c[1],eA),aq=[0,b(p[70][5],0,ap),0],ar=[0,D[A],aq],as=L(t),at=ai(j[45]),au=a(o[66][1],at),av=[0,b(p[70][3],au,as),ar],aw=[0,a(p[70][23],av),0],ax=L(u),ay=af(j[45]),az=a(o[66][1],ay),aA=[0,b(p[70][3],az,ax),aw],aB=ao(j[45]),aC=a(o[66][1],aB),h=b(p[70][19],aC,aA);break;default:var
w=d[1],F=a(f[6],w[1]),aD=a(f[6],w[2]),H=a(f[6],l[1]),I=g(F),aF=g(H),aG=a(e[G],(1+d[3]|0)-d[4]|0),aH=d[2],aI=function(a){return bP(I,aH,aG,H,a)},aJ=b(j[49][3],aI,q),aK=[0,I,aF,aJ,F,aD,a(_,1)],aL=function(a){return ac(aE,aK,a)},aM=L(w),aN=aL(j[45]),aO=a(o[66][1],aN),h=b(p[70][3],aO,aM)}return h}catch(c){c=r(c);if(a(o[66][10],c))return b(o[18],0,c);throw c}}];return a(o[62][9],d)}function
bQ(d,c){function
e(a){return b(as[2],0,a)}var
f=l(j[23],e,c,d),g=a(D[45],d),h=a(o[66][8],g),i=a(a$[11],f[1]);return l(p[5],i,h,c)}function
bR(q,n,m,l){var
c=[0,function(c){var
h=a(f[6],n),d=a(f[6],m);function
r(a){return b(j[15],a,d)}var
g=b(j[49][3],r,c),t=a(k[1][5],eC),v=a(j[20],t),i=b(j[49][3],v,c),w=a(k[1][5],eD),x=a(j[20],w),y=b(j[49][3],x,c),z=[0,[0,y],g,a(e[G],1)],A=a(e[ag],z),E=ac(bJ,[0,g,h,A,q,d,a(e[$],i)],bQ),B=[0,a(o[66][1],E),0],s=[0,g,h,d],C=[0,L(l),B],D=[0,i],F=ad(u,s,function(a){return aJ(D,a)});return b(p[70][19],F,C)}];return a(o[62][9],c)}function
bS(O,J){var
d=[0,function(v){a(bb[11],bb[14]);function
Q(b){return a(c[1],eH)}a(f[7],Q);function
R(d){var
m=a(j[8],d),k=a(ba[69],d),c=b(f[11],O,d),l=[0,0],n=[0,0];function
o(a){var
d=z(m,k,a);b(f[12],c,d);return 0}b(i[17][11],o,J);var
p=b(bl[4][3],d[2],d[1]),q=a(ap[26],p);function
r(t){var
o=a(ea[2][1][17],t),j=o[1],g=a(e[$],j),d=ew(m,k,o[3]),h=d[1];if(aO<=h){if(b9<=h)return bZ<=h?E(f[15],c,j,1,d[2]):E(f[15],c,j,0,d[2]);if(b2<=h){var
p=d[2];return E(f[14],c,[0,g],p[2],p[3])}var
q=d[2];return E(f[13],c,g,q[2],q[3])}if(cg<=h){var
r=d[2],u=l[1],v=function(a){return E(f[14],c,[2,a[1],g],a[2],r)};b(i[17][11],v,u);n[1]=[0,[0,g,r],n[1]];return 0}var
s=d[2],w=n[1];function
x(a){return E(f[14],c,[2,g,a[1]],s,a[2])}b(i[17][11],x,w);l[1]=[0,[0,g,s],l[1]];return 0}b(i[17][11],r,q);var
s=a(j[7],d),g=bc(m,k,b(d9[31],k,s));if(aO<=g[1]){var
h=g[2];E(f[14],c,0,h[2],h[3])}else{var
t=g[2],u=l[1],v=function(a){return E(f[14],c,[1,a[1]],a[2],t)};b(i[17][11],v,u)}return c}var
w=b(j[49][3],R,v);function
S(b){return a(c[1],eI)}a(f[7],S);var
x=b(f[29],1,w);function
T(b){return a(c[1],eJ)}a(f[7],T);var
d=a(f[8],w);if(x){var
m=x[1],U=function(b){return a(c[1],eK)};a(f[7],U);if(typeof
m==="number"){var
y=[0,0],V=a(o[62][5],v),W=function(b){y[1]++;return a(_,y[1])},X=a(f[10],d),Y=function(c){var
g=b(f[21],d,c[1]),h=c[3];function
j(c){var
e=b(f[20],d,c);return a(f[6],e)}var
k=b(i[17][12],j,h),l=b(i[17][48],c[2],W),m=a(i[17][6],l),n=b(i[17][8],k,m),o=a(e[bi],g[1]);return b(e[60],o,n)},Z=b(i[17][12],Y,X),aa=a(c[1],eL);b(aY[11],0,aa);var
ab=a(c[1],eM),ae=a(c[1],eN),af=a(P[6],V),ah=function(h){var
d=a(c[1],eO),e=a(c[17],0),f=a(c[1],eP),g=b(c[14],f,e);return b(c[14],g,d)},ai=l(c[54],ah,af,Z),aj=a(c[1],eQ),ak=b(c[14],aj,ai),al=b(c[14],ak,ae),am=b(c[30],8,al),an=a(c[1],eR),ao=b(c[14],an,am),aq=b(c[14],ao,ab);b(aY[11],0,aq);var
ar=a(c[1],eS);return b(p[70][4],0,ar)}else{if(0===m[0]){var
n=m[1],B=n[2],s=b(aD[13],d,[0,bY,[0,n[1],B,n[3],n[4]]]),as=b(f[21],d,B[1])[1],I=[0,function(c){var
d=a(f[6],s[1]),i=a(f[6],s[2]);function
v(a){return b(j[15],a,d)}var
g=b(j[49][3],v,c),l=a(o[62][3],c),w=a(k[1][5],eF),x=a(j[20],w),m=M(aG),y=b(j[49][3],x,c),z=N===m?aG[1]:F===m?a(K[2],aG):aG,n=M(aF),A=a(bI[48],z),B=N===n?aF[1]:F===n?a(K[2],aF):aF,q=a(bI[48],B),C=a(j[49][4],c),r=bW(ba[b6],0,0,0,ba[105],C),h=a(e[bf],r[2]),D=[0,[0,y],h,a(e[G],1)],E=a(e[ag],D),H=a(k[1][5],eG),I=a(j[20],H),t=b(j[49][3],I,c);function
J(a){return bP(g,as,q,l,a)}var
O=b(j[49][3],J,c),P=[0,g,h,O,d,i,a(e[$],t)],Q=[0,g,d,i],R=0,Y=ac(aE,P,function(a){return ac(bJ,[0,h,q,E,A,l,a],bQ)}),S=[0,a(o[66][1],Y),R],T=[0,L(s),S],U=[0,t],X=ad(u,Q,function(a){return aJ(U,a)}),V=b(p[70][19],X,T),W=a(o[60][1],r[1]);return b(p[70][3],W,V)}];return a(o[62][9],I)}var
h=m[1],q=b(aD[13],d,[0,-608347012,[0,h[1],h[2]]]),t=b(f[20],d,h[1]),r=b(f[20],d,h[2]),g=h[3];if(typeof
g==="number")return L(q);else
switch(g[0]){case
0:var
at=g[1],C=[0,function(c){var
d=a(f[6],t),h=a(f[6],r);function
i(a){return b(j[15],a,d)}var
l=[0,b(j[49][3],i,c),d,h],m=a(k[1][5],eB),n=a(j[20],m),g=b(j[49][3],n,c),o=[0,at,[0,a(e[$],g)]],s=a(e[A],o),v=[0,a(D[99],s),0],w=[0,L(q),v],x=[0,g],y=ad(u,l,function(a){return aJ(x,a)});return b(p[70][19],y,w)}];return a(o[62][9],C);case
1:return bR(g[1],t,r,q);default:var
au=g[2],av=g[1],H=[0,function(d){var
g=a(f[6],r),h=a(k[1][5],eE),i=a(j[20],h),c=b(j[49][3],i,d),l=[0,au,[0,a(e[$],c)]],m=a(e[A],l),n=[0,a(D[99],m),0],o=[0,bR(av,t,r,q),n],s=aJ([0,c],g);return b(p[70][19],s,o)}];return a(o[62][9],H)}}}var
aw=a(c[1],eT);return b(p[70][4],0,aw)}];return a(o[62][9],d)}function
bT(e){var
d=a(c[1],eU);return b(B[7],eV,d)}function
bU(d,c){var
e=a(o[66][1],bT),f=bS(d,c),g=a(p[70][28],D[17]),h=b(p[70][3],g,f);return b(p[70][12],h,e)}function
eW(c,d,k,i){var
f=M(c);function
g(m){var
c=[0,function(c){function
n(a){return b(as[2],0,a)}var
f=l(j[49][1],n,c,d),q=f[2],r=f[1],s=a(j[49][5],c),g=fx(d_[4],0,0,eX,s,r,q),h=a(e[A],[0,m,[0,g[2],d,k]]),t=g[1],u=a(j[49][5],c),v=E(as[2],0,u,t,h),w=a(i,h),x=a(a$[11],v[1]),y=a(o[66][1],x);return b(p[70][3],y,w)}];return a(o[62][10],c)}var
h=N===f?c[1]:F===f?a(K[2],c):c;return b(p[70][57],h,g)}var
eY=[0,function(t){var
v=a(o[62][3],t);function
w(d,c){try{var
e=ad(bK,[0],D[85]),f=[0,a(p[70][22],e),0],g=[0,a(o[13],0),f],h=eW(u,d,c,D[145]),i=b(p[70][19],h,g);return i}catch(c){c=r(c);if(a(o[66][10],c))return b(o[18],0,c);throw c}}function
x(c){var
d=c[1];return d[1]===d7[1]?a(o[13],0):b(o[18],[0,c[2]],d)}var
f=a(e[O],v);if(9===f[0]){var
g=f[2];if(3===g.length-1){var
j=M(u),y=g[2],z=g[3],A=f[1],B=N===j?u[1]:F===j?a(K[2],u):u;if(b(at[11],B,A)){var
k=a(e[O],y),l=a(e[O],z);if(9===k[0])if(9===l[0]){var
n=l[2],h=k[2];if(h.length-1===n.length-1)var
s=function(c){if(0<=c){var
d=s(c-1|0),e=q(n,c)[c+1],f=w(q(h,c)[c+1],e);return b(p[70][16],f,d)}var
g=bU(bg,0);return a(p[70][22],g)},m=s(h.length-1-1|0),d=1;else
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
i=a(o[13],0);return b(o[20],i,x)}],ae=[0,L,bS,bT,bU,a(o[62][9],eY)];ax(186,ae,"Cc_plugin.Cctac");a(be[12],e1);var
e2=0,e4=[0,function(c){if(c){var
d=c[2];if(d)if(!d[2]){var
e=c[1],f=a(al[6],aL[6]),g=b(aK[2][7],f,e),h=d[1],i=a(al[17],aM[8]),j=a(al[6],i),k=b(aK[2][7],j,h);return function(a){return b(ae[4],g,k)}}}return a(H[2],e3)},e2],e6=[0,function(c){if(c)if(!c[2]){var
d=c[1],e=a(al[17],aM[8]),f=a(al[6],e),g=b(aK[2][7],f,d);return function(a){return b(ae[4],bg,g)}}return a(H[2],e5)},e4],e8=[0,function(c){if(c)if(!c[2]){var
d=c[1],e=a(al[6],aL[6]),f=b(aK[2][7],e,d);return function(a){return b(ae[4],f,0)}}return a(H[2],e7)},e6],e_=[0,function(c){return c?a(H[2],e9):function(a){return b(ae[4],bg,0)}},e8],e$=a(e0[12],e_);l(bd[9],0,[0,af,fa],e$);function
fb(s){var
i=a(k[1][6],fc),c=aM[8],g=0,h=0;if(0===c[0]){var
j=[0,fd,[0,[1,av[4],[0,[5,[0,c[1]]]],i],h]],l=a(k[1][6],fe),d=aL[6];if(0===d[0]){var
m=[0,[0,ff,[0,[1,av[4],[5,[0,d[1]]],l],j]],g],o=a(k[1][6],fg),e=aM[8],n=0;if(0===e[0]){var
p=[0,[0,fi,[0,fh,[0,[1,av[4],[0,[5,[0,e[1]]]],o],n]]],m],r=a(k[1][6],fj),f=aL[6],q=0;if(0===f[0])return b(eZ[4],[0,af,fm],[0,fl,[0,[0,fk,[0,[1,av[4],[5,[0,f[1]]],r],q]],p]]);throw[0,an,fn]}throw[0,an,fo]}throw[0,an,fp]}throw[0,an,fq]}b(be[19],fb,af);function
fr(d){var
b=[28,[0,0,[31,av[4],[0,[0,af,fs],0],0]]],c=a(k[1][5],ft);return E(bd[4],1,0,c,b)}var
fu=[0,function(b,a){return ae[5]}];l(bd[9],0,[0,af,fv],fu);b(be[19],fr,af);var
bV=[0,af];ax(196,bV,"Cc_plugin.G_congruence");ax(197,[0,f,aD,ae,bV],"Cc_plugin");return});
