(function(hn){"use strict";var
ca="Only identifiers are allowed here",co=123,r=140,bm=145,aO=112,cn="partial term ",cf="mk_tpattern_matcher with no upats_origin",aa="in",ce="do_once never called",cm="(",bl="ssrinstoftpat",$=173,bk="rpattern",al="In",cg="ssrpattern",cl="pattern",J=124,_=246,b$=111,bi="As",u=" in ",bq=120,b_="_ssrpat_",cd=113,ck="The ",aM="!! ",cc=122,ak="in ",bp="cpattern",aN=143,bo="lcpattern",cj="!! %-39s %10d %9.4f %9.4f %9.4f",b9="ssrpatternarg",ci="total",ac="plugins/ssrmatching/ssrmatching.ml4",aP="ssrmatching_plugin",ab=136,bn=248,ch="Qed",cb=" of ",bh=146,bj=" as ",o=hn.jsoo_runtime,Q=o.caml_check_bound,bg=o.caml_equal,aL=o.caml_fresh_oo_id,b7=o.caml_ml_string_length,d=o.caml_new_string,bf=o.caml_notequal,b8=o.caml_register_global,b5=o.caml_string_get,R=o.caml_string_notequal,t=o.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):o.caml_call_gen(a,[b])}function
b(a,b,c){return a.length==2?a(b,c):o.caml_call_gen(a,[b,c])}function
h(a,b,c,d){return a.length==3?a(b,c,d):o.caml_call_gen(a,[b,c,d])}function
m(a,b,c,d,e){return a.length==4?a(b,c,d,e):o.caml_call_gen(a,[b,c,d,e])}function
b6(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):o.caml_call_gen(a,[b,c,d,e,f])}function
P(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):o.caml_call_gen(a,[b,c,d,e,f,g])}var
f=o.caml_get_global_data(),hi=[0,4],hj=[0,1,9],hk=[0,1,9],hl=[0,4],hm=[0,1,9],aZ=d(aP),Z=[0,[0,0,0]],b3=[0,d(aP),d(cg)],s=f.Names,S=f.Assert_failure,aW=f.Loc,ao=f.Tacentries,ap=f.Proofview,k=f.Genarg,ad=f.Tacinterp,A=f.Pervasives,c=f.Pp,l=f.Tacmach,aS=f.Tacenv,aX=f.Global,e=f.Term,g=f.Evd,p=f.Geninterp,L=f.Ftactic,aT=f.Sigma,n=f.Errors,br=f.Typeclasses,H=f.Reductionops,bx=f.Evar,i=f.Util,K=f.Ppconstr,ae=f.Option,at=f.Context,am=f.Not_found,T=f.Evarutil,aQ=f.Vars,ar=f.Goal,as=f.Environ,bz=f.Constrexpr_ops,bA=f.Compat,bs=f.Termops,bt=f.Recordops,bw=f.Evarconv,aR=f.Unification,aB=f.Printf,an=f.Unix,E=f.Genintern,aq=f.Pptactic,aU=f.Printer,bv=f.Format,by=f.Constrintern,aY=f.Feedback,j=f.Pcoq,aV=f.Mltop,bu=f.Goptions,x=f.CLexer,cs=f.Tacticals,cr=f.Tactics,cz=f.Constrarg,ct=f.Tacsubst,cu=f.Tacintern,cB=f.CArray,cp=f.Failure,cw=f.Pretype_errors,cq=f.Invalid_argument,cx=f.Globnames,cv=f.Reduction,cy=f.Glob_ops,cA=f.CamlinternalLazy,cC=a(x[10],0);a(aV[12],d(aP));var
y=aW[4],M=a(n[7],d("ssrmatching")),hd=d("$arg"),hg=[0,d(ac),1,0],he=[0,d("ssrinstancesoftpat")],hf=d(bl),g_=d("Extension: cannot occur"),gW=d("matches:"),gX=d("instance:"),g0=d("Not supported"),gU=[0,1],gV=[0,1],gY=d("BEGIN INSTANCES"),gZ=d("END INSTANCES"),gR=d(cg),gL=d(cl),gK=d("selected"),gw=d("matching impacts evars"),gu=d(" does not match any subterm of the goal"),gv=d(cn),gs=[0,1],gp=[0,[0,1,0]],gq=[0,[0,0,[0,1,0]]],go=d("pattern without redex"),gn=[0,0],gj=[0,d(ac),1230,56],gf=d("in the pattern?"),gg=d('Does the variable bound by the "in" construct occur '),gh=d(" did not instantiate ?"),gi=d("Matching the pattern "),gl=[0,1],gm=[0,1],gk=[0,1],gd=d("typed as: "),gc=d("decoded as: "),gb=[0,d(ac),1156,54],f_=d(b_),f$=d(bi),ga=d(al),f9=[0,d(ac),1116,63],f8=d("bad encoding for pattern "),f7=d(" in ist: "),f6=d("interpreting: "),f5=d(":"),fh=d(ca),fg=d(b_),ff=d("globbing pattern: "),fi=d("( _ as _ )"),fj=d("( _ as _ in _ )"),fk=d("( _ in _ )"),fl=d("( _ in _ in _ )"),fm=d(al),fo=d(al),fp=d(al),fr=d(al),fq=d("where are we?"),fn=d(al),fs=d(bi),ft=d(bi),fc=d(cm),fd=d("@"),fa=[0,d(ac),976,12],e$=d(ca),ef=d(ak),eg=d(u),eh=d(u),ei=d(ak),ej=d(u),ek=d(u),el=d(u),em=d(bj),d9=d(ak),d_=d(u),d$=d(u),ea=d(ak),eb=d(u),ec=d(u),ed=d(u),ee=d(bj),d1=d(ak),d2=d(u),d3=d(u),d4=d(ak),d5=d(u),d6=d(u),d7=d(u),d8=d(bj),dZ=d("matches but type classes inference fails"),d0=d("does not match any subterm of the goal"),dY=d(cf),dW=d("are equal to the "),dX=d("all matches of "),dV=d("companion function never called"),dP=d("of "),dQ=d(" of the "),dU=d(" of"),dR=d(" occurence"),dS=d(" < "),dT=d("Only "),dK=d(cb),dL=d(ck),dI=d(cb),dJ=d(ck),dN=d("term "),dO=d(cn),dM=d(cf),dH=d(ce),dF=d(ce),dx=d("incomplete ise in match_upats_FO"),dy=d("IN FO"),dr=d(u),ds=d("indeterminate "),dt=d("indeterminate pattern"),dk=d("RHS"),dj=d("LHS"),dg=[0,1],db=[0,[11,d(aM),[2,[0,0,39],[12,32,[4,0,[0,1,10],0,[12,32,[8,0,[0,1,9],[0,4],[12,32,[8,0,[0,1,9],[0,4],[12,32,[8,0,hj,hi,0]]]]]]]]]],d(cj)],da=[0,d(ac),215,26],c4=[0,[11,d(aM),[2,[0,1,39],[11,d(" ---------- --------- --------- ---------"),0]]],d("!! %39s ---------- --------- --------- ---------")],c5=d("average"),c6=d("max"),c7=d(ci),c8=d("#calls"),c9=d("function"),c_=[0,[11,d(aM),[2,[0,0,39],[12,32,[2,[0,1,10],[12,32,[2,[0,1,9],[12,32,[2,[0,1,9],[12,32,[2,hk,0]]]]]]]]]],d("!! %-39s %10s %9s %9s %9s")],c1=[0,d(ac),208,26],cY=d(ci),cZ=[0,[11,d(aM),[2,[0,0,39],[12,32,[4,0,[0,1,10],0,[12,32,[8,0,[0,1,9],[0,4],[12,32,[8,0,[0,1,9],[0,4],[12,32,[8,0,hm,hl,0]]]]]]]]]],d(cj)],cR=d("have: mixed C-G constr"),cS=d("have: mixed G-C constr"),cQ=[0,0],cP=d("not a CRef"),cJ=d("$"),cH=d(")"),cI=d(cm),cD=d("SSR: "),hh=d("SSRMATCHINGDEBUG"),cE=[0,d("Debug"),[0,d("SsrMatching"),0]],cF=d("ssrmatching debugging"),cU=[0,d("SsrMatchingProfiling"),0],cV=d("ssrmatching profiling"),dc=d("Ssrmatching.NoProgress"),dd=d("unif_EQ_args"),di=d("Ssrmatching.NoMatch"),dn=d("_"),dv=d("Ssrmatching.FoundUnif"),dz=d("match_upats_FO"),dC=d("match_upats_HO"),eo=d("rpatternty"),eq=d(bk),ew=d(bk),eD=d(aa),eH=d(aa),eM=d(aa),eP=d(aa),eT=d(aa),eW=d(aa),e1=d(aa),e4=d("as"),e8=d(bk),fe=d("ssrtermkind"),fu=d(bp),fy=d(bp),fD=d(ch),fH=d(bp),fL=d(bo),fR=d(bo),fW=d(ch),f0=d(bo),gB=d(b9),gH=d(b9),gO=d(cl),gS=d(aP),hb=d(bl),g2=d(": "),g3=d(bl),g5=d("Exception in tactic extend ");function
bB(d,b){var
e=[0,d,b,a(c[1],b)];return a(n[8],e)}var
a0=aY[11],au=[0,function(a){return 0}];function
a1(d){var
e=o.caml_obj_tag(d),f=250===e?d[1]:_===e?a(cA[2],d):d,g=a(c[1],cD),h=b(c[14],g,f);return a(aY[15],h)}try{o.caml_sys_getenv(hh);au[1]=a1}catch(a){a=t(a);if(a!==am)throw a}function
bC(a){return a?(au[1]=a1,0):(au[1]=function(a){return 0},0)}var
cG=[0,0,0,cF,cE,function(a){return au[1]===a1?1:0},bC];a(bu[4],cG);function
af(b){return a(au[1],b)}function
bD(c){var
b=a(e[r],c);return 9===b[0]?[0,b[1],b[2]]:[0,c,[0]]}function
bE(f,e,d){var
a=b5(e,d);if(48<=a)var
c=61===a?1:co===a?1:0;else{var
b=40!==a?1:0;if(!b)return b;var
c=47<=a?1:0}return c?1:40===f?1:0}function
bF(m,f,e){var
n=a(f,e);b(c[63],bv[48],n);var
o=a(bv[49],0),g=b(A[16],o,cJ),d=0;for(;;){if(22<(b5(g,d)-10|0)>>>0){if(b(m,g,d)){var
h=a(c[1],cH),i=a(f,e),j=a(c[1],cI),k=b(c[14],j,i),l=b(c[14],k,h);return b(c[30],1,l)}return a(f,e)}var
d=d+1|0;continue}}var
aC=aU[5],cK=K[23],cL=K[22];function
cM(c){var
d=c[2];if(d)return a(cK,d[1]);var
f=c[1],e=a(aX[2],0);return b(aU[28],e,f)}function
cN(c){var
d=c[2];if(d)return a(cL,d[1]);var
f=c[1],e=a(aX[2],0);return b(aU[30],e,f)}function
a2(a){var
b=a[2],c=a[1];return bF(function(a,b){return bE(c,a,b)},cN,b)}function
q(a){var
b=a[2],c=a[1];return bF(function(a,b){return bE(c,a,b)},cM,b)}function
cO(e,g){var
c=a(k[2],e),f=a(p[1][1],e);function
h(b,a){return[0,b,a]}function
i(b,a){return a}function
j(c,b){return a(L[1],[0,f,b])}function
d(c,b,a){return g}b(E[5],c,h);b(E[6],c,i);b(p[6],c,j);b(p[3],c,[0,[0,f]]);m(aq[1],c,d,d,d);return c}function
a3(a){if(0===a[0])if(1===a[1][0])return 1;return 0}function
a4(a){return[12,a,0,0,0]}function
aD(c,b,a){return[16,c,b,[0,a]]}var
U=[13,[0,y,0,0,0]];function
av(b,a){return[14,y,b,[0,a]]}function
a5(e,d,m,l){var
f=e[2],g=f[2],i=e[1];if(g){var
j=d[2][2];if(j)return[0,i,[0,U,[0,b(m,g[1],j[1])]]];var
o=a(c[1],cR);return h(n[3],0,0,o)}var
k=d[2];if(k[2]){var
p=a(c[1],cS);return h(n[3],0,0,p)}return[0,i,[0,b(l,f[1],k[1]),0]]}function
V(d){var
b=d[2],c=b[2];return c?a(bz[6],c[1]):a(cy[14],b[1])}function
aw(b,a){return[0,b,[0,U,[0,a]]]}var
cT=32;function
v(a){return aw(cT,a)}var
a6=[0,0],a7=[0,0],aE=[0,0];function
a8(a){aE[1]=[0,a,aE[1]];return 0}function
bG(c){a6[1]=c;if(c){var
e=aE[1],f=function(b){return a(b[2],0)};b(i[17][11],f,e)}var
d=1-c;if(d){var
g=aE[1],h=function(b){return a(b[3],0)};return b(i[17][11],h,g)}return d}var
cW=[0,0,0,cV,cU,function(a){return a6[1]},bG];a(bu[4],cW);var
bH=[0,0];function
cX(f){var
b=a7[1];if(b){var
c=bH[1],d=a(an[87],0)-c,e=P(aB[4],cZ,cY,0,d,0,0);return a(A[38],e)}return b}function
c0(b){bH[1]=a(an[87],0);return 0}var
c2=[0,function(b,a){throw[0,S,c1]},c0,cX];function
c3(g){var
c=a7[1];if(c){var
d=b(i[15][1],39,45),e=b(aB[4],c4,d);a(A[38],e);var
f=P(aB[4],c_,c9,c8,c7,c6,c5);return a(A[38],f)}return c}function
c$(a){return 0}a8([0,function(b,a){throw[0,S,da]},c$,c3]);a8(c2);function
a9(f){var
c=[0,0],d=[0,0],b=[0,0];function
g(a){b[1]=0;d[1]=0;c[1]=0;return 0}function
h(h,g){if(a6[1]){var
i=a(an[87],0);try{d[1]++;var
j=a(h,g),f=a(an[87],0)-i;b[1]=b[1]+f;if(c[1]<f)c[1]=f;return j}catch(d){d=t(d);var
e=a(an[87],0)-i;b[1]=b[1]+e;if(c[1]<e)c[1]=e;throw d}}return a(h,g)}var
e=[0,h,g,function(h){var
e=0!==d[1]?1:0;if(e){a7[1]=1;var
g=P(aB[4],db,f,d[1],b[1],c[1],b[1]/d[1]);return a(A[38],g)}return e}];a8(e);return e}var
ag=[bn,dc,aL(0)];function
ax(e,b,d,c){var
f=a(g[144],b),h=[0,a(g[42],b),f];try{P(cv[12],0,0,e,[0,h],d,c);var
i=1;return i}catch(a){return 0}}var
de=a9(dd);function
W(d,c,b,a){return b6(bw[2],d,0,b,a,c)}function
bI(h,g,c,f,e){var
b=g,a=0,i=c.length-1;for(;;){if(a===i)return b;var
d=f+a|0,j=Q(e,d)[d+1],b=W(h,b,Q(c,a)[a+1],j),a=a+1|0;continue}}var
X=a(aR[4],0)[1].slice();X[1]=0;X[5]=s[61];X[11]=1;X[12]=1;var
df=[0,X,X,X,0,a(aR[4],0)[5]];function
a_(d,c,b,a){return P(aR[8],d,c,0,[0,df],b,a)}function
a$(j,d,k){var
c=[0,j];function
f(l){var
m=a(e[r],l);if(3===m[0]){var
k=m[1];try{var
q=f(b(g[40],d,k));return q}catch(l){var
j=k[1],n=b(i[19][15],f,k[2]);if(1-b(g[26],c[1],j)){var
o=b(g[23],d,j),p=b(T[39],d,o);c[1]=h(g[22],c[1],j,p)}return a(e[115],[0,j,n])}}return b(e[aN],f,l)}function
l(i,k,o){if(0===a(g[10],k)){var
l=b(g[23],d,i),e=a(g[10],l);if(e){var
m=c[1],n=f(e[1]);c[1]=h(g[31],i,n,m);var
j=0}else
var
j=e;return j}return 0}var
m=f(k);h(g[27],l,j,0);var
n=a(g[r],d);return[0,c[1],n,m]}function
aF(i,f,q,p,o){var
j=h(bw[6],i,0,q),c=a$(f,j,p),k=c[3],d=c[2],l=c[1],r=a(g[$],l),m=b(g[bh],r,d),n=P(br[29],0,0,0,dg,i,m);if(a(o,j)){if(n===m)return[0,l,d,k];var
e=a$(f,n,k),s=e[3],t=b(g[aO],d,e[2]);return[0,e[1],t,s]}throw ag}function
Y(d,c,f,a){var
h=W(d,c,f,a),e=aF(d,c,h,a,function(a){return 1});return b(g[bh],e[1],e[2])}function
dh(c,e,d){var
f=a(g[68],c),h=a(l[2],c),i=Y(a(l[8],c),h,e,d);return b(l[3],f,i)}function
bJ(c,k){var
d=a(e[r],k);switch(d[0]){case
3:return b(i[19][13],c,d[1][2]);case
5:a(c,d[1]);return a(c,d[3]);case
8:a(c,d[2]);a(c,d[3]);return a(c,d[4]);case
9:a(c,d[1]);return b(i[19][13],c,d[2]);case
13:a(c,d[3]);a(c,d[2]);return b(i[19][13],c,d[4]);case
6:case
7:a(c,d[2]);return a(c,d[3]);case
14:case
15:var
g=d[1][2],h=g[2],j=h.length-1-1|0,l=g[3],m=0;if(!(j<0)){var
f=m;for(;;){a(c,Q(h,f)[f+1]);a(c,Q(l,f)[f+1]);var
n=f+1|0;if(j!==f){var
f=n;continue}break}}return 0;default:return 0}}var
z=[bn,di,aL(0)];function
ah(b){return 0===b?a(c[1],dj):a(c[1],dk)}function
dl(a){return 0===a?1:0}function
I(b,a){return 1}function
dm(b){try{var
c=1+a(bt[4],[1,b])|0;return c}catch(a){return 0}}function
bK(b){switch(a(e[r],b)[0]){case
4:case
6:case
7:case
13:case
14:case
15:return 1;default:return 0}}aL(0);var
dp=a(s[69],dn),dq=a(e[cd],dp);function
B(d){function
c(d){return a(e[6],d)?dq:b(e[aN],c,d)}return a(aC,c(d))}function
bL(F,v,Y,E,D,X,W,V){var
w=D[1],Z=v?v[1]:v,G=b(H[29],w,V),d=G[2],f=G[1],p=a(e[r],f);switch(p[0]){case
3:var
K=p[1][1];if(b(g[26],E,K))var
s=[0,[0,K],f,d];else
if(0===d)if(F)var
L=F[1],$=B(L[2]),aa=a(c[1],dr),ab=ah(L[1]),ac=a(c[1],ds),ad=b(c[14],ac,ab),ae=b(c[14],ad,aa),s=a(M,b(c[14],ae,$));else
var
s=a(n[6],dt);else
var
s=[0,5,f,d];var
k=s,l=0;break;case
7:var
k=[0,3,f,d],l=0;break;case
8:var
af=a(e[aO],1);if(bf(p[4],af))var
k=[0,2,f,d],l=0;else
var
k=[0,5,p[2],d],l=0;break;case
10:var
N=p[1][1],z=dm(N);if(0===z)var
C=0;else
if(a(i[17][1],d)<z)var
C=0;else
var
P=b(i[17][99],z,d),ag=P[2],O=[0,[1,N],a(e[59],[0,f,P[1]]),ag],C=1;if(!C)var
O=[0,1,f,d];var
k=O,l=0;break;case
1:case
11:case
12:var
y=0,q=f,x=d,l=1;break;default:var
y=4,q=f,x=d,l=1}if(!l)var
y=k[1],q=k[2],x=k[3];var
I=a(i[19][12],x),u=[0,w],o=[0,w],_=a(e[J],[0,q,I]),R=Z?1:0,Q=a(as[9],Y),S=a(i[17][1],Q)+R|0;function
j(q){var
c=q;for(;;){var
f=a(e[r],c);if(3===f[0]){var
d=f[1],k=d[1];try{var
F=j(b(g[40],o[1],d));return F}catch(f){f=t(f);if(f===g[39]){if(b(g[26],E,k))return b(e[aN],j,c);var
l=b(g[23],o[1],k),s=a(g[7],l),v=b(A[5],0,d[2].length-1-S|0),w=b(i[17][104],v,s),x=function(c,b){var
d=c[2],f=c[1];if(0===b[0]){var
g=b[1],i=j(b[2]),k=h(e[52],g,i,d);return[0,[0,a(e[cd],g),f],k]}var
l=j(b[3]),n=j(b[2]);return[0,f,m(e[51],b[1],n,l,d)]},y=[0,0,j(l[1])],n=h(at[2][9],x,y,w),p=a(T[1],0);u[1]=m(g[95],p,n[2],0,u[1]);var
z=o[1],B=n[1],C=[0,a(e[114],p),B],D=a(e[59],C);o[1]=h(g[31],k,D,z);var
c=b(g[40],o[1],d);continue}throw f}}return b(e[aN],j,c)}}var
U=j(_);return[0,u[1],[0,y,U,q,I,D[2],W,X]]}function
bM(h,d,f){var
i=d[1],j=bD(h),k=j[1],l=a(e[r],k);switch(l[0]){case
3:var
m=l[1][1];if(b(g[34],i,m))throw z;var
c=[0,m];break;case
7:var
c=3;break;case
8:var
c=2;break;case
10:var
c=1;break;case
1:case
11:case
12:var
c=0;break;default:var
c=4}return[0,i,d[2],[0,c,h,k,j[2],d[3],f[6],f[7]]]}function
du(j,h,k){function
f(b){var
c=a(bt[8],[0,[1,j],b])[2][7];return a(i[17][1],c)}try{var
g=a(e[r],h);switch(g[0]){case
4:var
d=f([1,a(e[b$],g[1])]),c=1;break;case
6:var
d=f(0),c=1;break;case
10:if(b(s[17][13],g[1][1],j))var
d=a(e[37],k[3])[2].length-1,c=1;else
var
c=0;break;case
1:case
11:case
12:var
c=0;break;default:var
d=-1,c=1}if(!c)var
d=f([0,a(cx[16],h)]);return d}catch(a){a=t(a);if(a===am)return-1;throw a}}function
bN(d,c){var
b=a(e[r],c);return 3===b[0]?bg(d,b[1][1]):0}function
aG(d,c,b){if(0===c)return d;var
f=c===b.length-1?b:h(i[19][7],b,0,c);return a(e[J],[0,d,f])}function
ba(j){function
h(l,k){var
d=l,c=k;for(;;){var
f=a(e[r],d);switch(f[0]){case
3:try{var
m=h(b(g[40],j,f[1]),c);return m}catch(a){return[0,d,c]}case
5:var
d=f[1];continue;case
9:var
n=b(i[19][5],f[2],c),d=f[1],c=n;continue;default:return[0,d,c]}}}return function(b){var
c=a(e[r],b);switch(c[0]){case
9:return h(c[1],c[2]);case
3:case
5:return h(b,[0]);default:return[0,b,[0]]}}}var
ay=[bn,dv,aL(0)];function
bO(c){var
d=a(g[84],c);return function(a){function
c(c){try{b(g[24],a,c);var
d=1;return d}catch(a){a=t(a);if(a===am)return 0;throw a}}return b(bx[6][15],c,d)}}function
dw(q,k,A,j,f){var
B=bO(f);function
d(s){var
l=a(ba(j),s),m=l[2],f=l[1],g=[0,-1],o=m.length-1,u=0;function
v(i,j){var
k=a(e[r],i[2]),h=9===k[0]?k[2].length-1:0;if(o<h)return j;var
d=i[1];if(typeof
d==="number")switch(d){case
2:var
c=a(e[14],f);break;case
3:var
c=a(e[13],f);break;case
4:var
c=bK(f);break;case
5:g[1]=o;var
c=1;break;default:var
c=b(e[ab],i[3],f)}else
if(0===d[0])var
c=bN(d[1],f);else
var
l=a(e[125],d[1]),c=b(e[ab],f,l);if(c){if(g[1]<h)g[1]=h;return[0,[0,i,h],j]}return j}var
w=h(i[17][16],v,q,u);for(;;){if(0<=g[1]){var
p=g[1];g[1]=-1;var
x=aG(f,p,m),y=function(p,l){return function(u){var
o=u[2],d=u[1];if(p<=o)var
r=p<o?1:0;else
if(5===d[1]){g[1]=p-1|0;var
r=0}else{if(g[1]<o)g[1]=o;var
r=1}if(!r)if(a(aQ[2],l))try{var
s=d[1];if(typeof
s==="number")if(2===s){var
w=function(f){var
d=bD(f),c=a(e[36],d[1]),g=b(i[19][39],c[2],d[2]),h=[0,a(e[cc],[0,c[1],c[3],c[4]]),g];return a(e[J],h)},D=w(l);a_(k,j,w(d[2]),D);var
q=1}else
if(5<=s){var
y=function(b){return a(e[cc],[0,0,e[117],b])},H=y(l);a_(k,j,y(d[2]),H);var
q=1}else
var
q=0;else
var
q=0;if(!q)a_(k,j,d[2],l);var
E=a(e[J],[0,d[3],d[4]]);try{var
F=W(k,j,E,l)}catch(a){throw z}var
x=aG(f,p,m),G=a(d[7],x);throw[0,ay,bM(x,aF(k,A,F,d[5],G),d)]}catch(b){b=t(b);if(b[1]===ay)if(a(B,b[2][1]))throw b;var
v=b===am?1:0;if(v){var
C=a(c[1],dx);return h(n[3],0,0,C)}return v}return 0}}(p,x);b(i[17][11],y,w);continue}bJ(d,f);return b(i[19][13],d,m)}}try{var
l=d(f);return l}catch(b){b=t(b);if(b[1]===cq){var
g=a(c[1],dy);return h(n[3],0,0,g)}throw b}}var
dA=a9(dz);function
dB(e,d,c,b,a){function
f(a,b){return dw(e,d,c,a,b)}return h(dA[1],f,b,a)}var
dD=a9(dC);function
dE(I,j,g,f,d,c){function
k(k,c){var
s=[0,0],u=[0,0],y=bO(c);function
d(l,f,p,g,q){var
o=a(ba(g),q),k=o[2],c=o[1],j=[0,-1],m=k.length-1,r=0;function
v(i,k){var
g=i[4].length-1;if(m<g)return k;var
h=i[1];if(typeof
h==="number")switch(h){case
2:if(a(e[14],c))var
f=g,d=1;else
var
d=0;break;case
3:if(a(e[13],c))var
f=g,d=1;else
var
d=0;break;case
4:if(bK(c))var
f=g,d=1;else
var
d=0;break;case
5:var
f=g,d=1;break;default:if(b(e[ab],i[3],c))var
f=g,d=1;else
var
d=0}else
if(0===h[0])if(bN(h[1],c))var
f=g,d=1;else
var
d=0;else
var
l=g+du(h[1],c,i)|0,n=m<l?-1:l,f=n,d=1;if(!d)var
f=-1;if(f<g)return k;if(j[1]<f)j[1]=m;return[0,[0,i,f],k]}var
w=h(i[17][16],v,l,r);for(;;){if(0<=j[1]){var
x=j[1];j[1]=-1;var
z=function(h){return function(v){var
m=v[2],d=v[1];if(h<=m)var
q=h<m?1:0;else
if(5===d[1]){j[1]=h-1|0;var
q=0}else{if(j[1]<m)j[1]=m;var
q=1}if(q)return 0;try{var
r=d[1];if(typeof
r==="number")switch(r){case
2:var
o=a(e[36],c),x=a(e[36],d[3]),C=W(f,g,x[2],o[2]),D=o[4],E=x[4],l=W(b(as[20],[0,o[1],o[3]],f),C,E,D),i=1;break;case
5:var
i=0;break;case
3:case
4:var
l=W(f,g,d[3],c),i=1;break;default:var
l=g,i=1}else
if(0===r[0])var
G=a(e[42],d[3]),H=a(e[42],c)[2],l=bI(f,g,G[2],0,H),i=1;else
var
i=0;if(!i)var
F=aG(c,h-(d[4].length-1)|0,k),l=W(f,g,d[3],F);var
z=bI(f,l,d[4],h-(d[4].length-1)|0,k),w=aG(c,h,k),A=a(d[7],w),B=a(I,bM(w,aF(f,p,z,d[5],A),d));return B}catch(b){b=t(b);if(b[1]===ay)if(a(y,b[2][1]))throw b;if(b===ag){s[1]=1;return 0}if(b[1]===cw[1])if(18===b[4][0]){u[1]=1;return 0}if(a(n[22],b))return 0;throw b}}}(x);b(i[17][11],z,w);continue}bJ(function(a){return d(l,f,p,g,a)},c);var
A=function(a){return d(l,f,p,g,a)};return b(i[19][13],A,k)}}d(j,g,f,k,c);if(s[1])throw ag;return u[1]}return h(dD[1],k,d,c)}function
bb(b,c){return b[1]?0:(b[1]=[0,a(c,0)],0)}function
bc(d){var
b=d[1];if(b)return b[1];var
e=a(c[1],dF);return h(n[3],0,0,e)}function
dG(d){var
e=d[1];if(e){var
f=e[1],g=f[2],j=f[1];d[1]=[0,[0,j+1|0,g]];try{var
k=b(i[17][5],g,j);return k}catch(a){a=t(a);if(a[1]===cp)throw z;throw a}}var
l=a(c[1],dH);return h(n[3],0,0,l)}function
C(q,k,l,F,E,y){var
d=y[2],G=y[1],s=q?q[1]:q,C=k?k[1]:k,f=[0,0],u=[0,0];if(E){var
w=E[1];if(0===w[1])var
I=w[2],g=0!==I?1:0,j=I;else
var
P=w[2],g=0===P?1:0,j=P}else
var
g=0,j=0;var
p=h(i[17][16],A[5],j,0),K=o.caml_make_vect(p,1-g);function
R(b){var
a=b-1|0;return Q(K,a)[a+1]=g}b(i[17][11],R,j);if(0===p)u[1]=g;var
v=[0,0];function
L(b){return a(e[J],[0,b[3],b[4]])}function
D(R){if(l){var
i=l[1],j=i[2],k=i[1];if(d)if(!d[2]){var
w=a(c[6],0),x=B(L(d[1])),y=a(c[8],4),z=a(c[6],0),A=B(j),C=a(c[1],dK),D=ah(k),E=a(c[1],dL),F=b(c[14],E,D),G=b(c[14],F,C),H=b(c[14],G,A),I=b(c[14],H,z),J=b(c[14],I,y),K=b(c[14],J,x);return b(c[14],K,w)}var
o=a(c[17],0),p=B(j),q=a(c[1],dI),r=ah(k),s=a(c[1],dJ),t=b(c[14],s,r),u=b(c[14],t,q),v=b(c[14],u,p);return b(c[14],v,o)}if(d)if(!d[2]){var
e=d[1],N=a(c[17],0),O=B(L(e)),g=e[1];if(typeof
g==="number")if(5<=g)var
f=0;else
var
m=1-a(bs[38],e[5]),f=1;else
var
f=0;if(!f)var
m=0;var
P=m?a(c[1],dN):a(c[1],dO),Q=b(c[14],P,O);return b(c[14],Q,N)}var
M=a(c[1],dM);return h(n[3],0,0,M)}var
x=[0,0];function
N(a){return x[1]}function
S(a){if(s){x[1]=b(i[18],x[1],[0,a,0]);return 0}throw[0,ay,a]}function
O(c){if(c)var
d=c[1],f=d[3],g=d[1],l=b(H[17],g,f[5]),m=b(H[17],g,f[3]),k=f[4],n=a(H[17],g),o=b(i[19][15],n,k),p=function(f){var
c=f[3],d=f[1],n=b(H[17],d,c[5]),p=b(H[17],d,c[3]),q=c[4],r=a(H[17],d),s=b(i[19][15],r,q),g=b(e[ab],l,n);if(g)var
j=b(e[ab],m,p),k=j?h(cB[31],e[ab],o,s):j;else
var
k=g;return 1-k},j=[0,d,O(b(i[17][29],p,c[2]))];else
var
j=c;return j}function
T(Z){var
k=v[1];if(k)var
d=a(i[17][3],k[1][2]);else{if(C)throw z;var
Y=a(c[1],dV),d=h(n[3],0,0,Y)}var
g=d[3],j=a(e[J],[0,g[3],g[4]]);if(p<=f[1])return[0,j,g[6],[0,d[1],d[2],g[5]]];if(l)var
m=l[1],q=B(m[2]),r=a(c[1],dP),s=a(c[6],0),t=B(j),u=a(c[8],4),w=a(c[6],0),x=ah(m[1]),y=a(c[1],dQ),A=b(c[14],y,x),D=b(c[14],A,w),E=b(c[14],D,u),F=b(c[14],E,t),G=b(c[14],F,s),H=b(c[14],G,r),o=b(c[14],H,q);else
var
U=B(j),V=a(c[17],0),W=a(c[1],dU),X=b(c[14],W,V),o=b(c[14],X,U);var
I=b(i[15][38],f[1],dR),K=a(c[1],I),L=a(c[20],p),N=a(c[1],dS),O=a(c[20],f[1]),P=a(c[1],dT),Q=b(c[14],P,O),R=b(c[14],Q,N),S=b(c[14],R,L),T=b(c[14],S,K);return a(M,b(c[14],T,o))}return[0,function(j,x,U,T){bb(v,function(B){var
g=0;try{var
e=g;if(1-s)dB(d,j,F,G,x);var
e=dE(S,d,j,F,G,x);throw z}catch(d){d=t(d);if(d[1]===ay)return[0,0,[0,d[2],0]];var
A=d===z?0:d===ag?0:1;if(!A)if(s)if(0!==N(0))return[0,0,O(N(0))];if(d===z)if(!C){if(e){var
u=a(c[26],dZ),v=D(0);return a(M,b(c[14],v,u))}var
w=a(c[1],d0),y=D(0);return a(M,b(c[14],y,w))}if(d===ag){if(C)throw z;if(l)var
f=l[1][1];else
var
r=a(c[1],dY),f=h(n[3],0,0,r);var
i=ah(dl(f)),k=a(c[1],dW),m=D(0),o=a(c[1],dX),p=b(c[14],o,m),q=b(c[14],p,k);return a(M,b(c[14],q,i))}throw d}});if(s)var
E=dG(v);else
var
W=bc(v)[2],E=a(i[17][3],W);if(u[1])return x;var
k=E[3],y=k[4],o=E[1],H=k[1];if(typeof
H==="number")switch(H){case
2:var
w=a(e[36],k[3]),I=w[4],L=w[2],P=b(as[20],[0,w[1],w[3]],j),A=function(d){var
b=a(e[r],d);if(8===b[0]){var
c=ax(j,o,L,b[2]);return c?ax(P,o,I,b[4]):c}return 0},q=1;break;case
3:var
A=function(b){return 7===a(e[r],b)[0]?ax(j,o,k[3],b):0},q=1;break;case
0:case
1:var
A=a(e[ab],k[3]),q=1;break;default:var
q=0}else
var
q=0;if(!q)var
R=k[3],A=function(a){return ax(j,o,R,a)};var
V=y.length-1;function
B(c,l){if(u[1])return l;var
n=c[1],q=a(ba(o),l),d=q[2],h=q[1];if(V<=d.length-1)if(a(A,h)){var
v=function(g){var
a=0,e=y.length-1;for(;;){var
b=a===e?1:0;if(b)var
c=b;else{var
f=Q(g,a)[a+1],d=ax(n,o,Q(y,a)[a+1],f);if(d){var
a=a+1|0;continue}var
c=d}return c}};if(b(de[1],v,d)){var
r=b(i[19][50],y.length-1,d),s=a(e[J],[0,h,r[1]]);f[1]++;if(f[1]===p)u[1]=g;if(f[1]<=p)var
j=f[1]-1|0,t=Q(K,j)[j+1];else
var
t=1-g;var
w=t?m(T,n,k[5],s,c[2]):s,x=r[2],z=function(a){return B(c,a)},C=[0,w,b(i[19][56],z,x)];return a(e[J],C)}}function
D(a,c){var
d=0===a[0]?a:[0,a[1],a[3]],e=c[2]+1|0;return[0,b(as[20],d,c[1]),e]}var
E=m(bs[29],D,B,c,h);function
F(a){return B(c,a)}var
G=[0,E,b(i[19][56],F,d)];return a(e[J],G)}return B([0,j,U],x)},T]}function
ai(d){switch(d[0]){case
0:return q(d[1]);case
1:var
e=q(d[1]),f=a(c[1],d1);return b(c[14],f,e);case
2:var
g=q(d[2]),h=a(c[1],d2),i=q(d[1]),j=b(c[14],i,h);return b(c[14],j,g);case
3:var
k=q(d[2]),l=a(c[1],d3),m=q(d[1]),n=a(c[1],d4),o=b(c[14],n,m),p=b(c[14],o,l);return b(c[14],p,k);case
4:var
r=q(d[3]),s=a(c[1],d5),t=q(d[2]),u=a(c[1],d6),v=q(d[1]),w=b(c[14],v,u),x=b(c[14],w,t),y=b(c[14],x,s);return b(c[14],y,r);default:var
z=q(d[3]),A=a(c[1],d7),B=q(d[2]),C=a(c[1],d8),D=q(d[1]),E=b(c[14],D,C),F=b(c[14],E,B),G=b(c[14],F,A);return b(c[14],G,z)}}function
bP(d){switch(d[0]){case
0:return q(d[1]);case
1:var
e=q(d[1]),f=a(c[1],d9);return b(c[14],f,e);case
2:var
g=q(d[2]),h=a(c[1],d_),i=a(K[12],d[1]),j=b(c[14],i,h);return b(c[14],j,g);case
3:var
k=q(d[2]),l=a(c[1],d$),m=a(K[12],d[1]),n=a(c[1],ea),o=b(c[14],n,m),p=b(c[14],o,l);return b(c[14],p,k);case
4:var
r=q(d[3]),s=a(c[1],eb),t=a(K[12],d[2]),u=a(c[1],ec),v=q(d[1]),w=b(c[14],v,u),x=b(c[14],w,t),y=b(c[14],x,s);return b(c[14],y,r);default:var
z=q(d[3]),A=a(c[1],ed),B=a(K[12],d[2]),C=a(c[1],ee),D=q(d[1]),E=b(c[14],D,C),F=b(c[14],E,B),G=b(c[14],F,A);return b(c[14],G,z)}}function
en(f){var
g=f[1],d=f[2];function
e(b){var
c=a$(g,g,b);return B(a(i[9],c))}switch(d[0]){case
0:return e(d[1]);case
1:var
h=e(d[1]),j=a(c[1],ef);return b(c[14],j,h);case
2:var
k=e(d[2]),l=a(c[1],eg),m=e(d[1]),n=b(c[14],m,l);return b(c[14],n,k);case
3:var
o=e(d[2]),p=a(c[1],eh),q=e(d[1]),r=a(c[1],ei),s=b(c[14],r,q),t=b(c[14],s,p);return b(c[14],t,o);case
4:var
u=e(d[3]),v=a(c[1],ej),w=e(d[2]),x=a(c[1],ek),y=e(d[1]),z=b(c[14],y,x),A=b(c[14],z,w),C=b(c[14],A,v);return b(c[14],C,u);default:var
D=e(d[3]),E=a(c[1],el),F=e(d[2]),G=a(c[1],em),H=e(d[1]),I=b(c[14],H,G),J=b(c[14],I,F),K=b(c[14],J,E);return b(c[14],K,D)}}function
bd(c,b,a){return ai}var
bQ=cO(eo,ai);function
D(e,a){var
c=a[2][2];if(c){var
d=c[1],f=[0,b(cu[7],e,d)[1],[0,d]];return[0,a[1],f]}return a}function
bR(b,a){switch(a[0]){case
0:return[0,D(b,a[1])];case
1:return[1,D(b,a[1])];case
2:var
c=D(b,a[2]);return[2,a[1],c];case
3:var
d=D(b,a[2]);return[3,a[1],d];case
4:var
e=D(b,a[3]),f=a[2];return[4,D(b,a[1]),f,e];default:var
g=D(b,a[3]),h=a[2];return[5,D(b,a[1]),h,g]}}function
F(c,a){var
d=b(ct[3],c,a[2]);return[0,a[1],d]}function
ep(b,a){switch(a[0]){case
0:return[0,F(b,a[1])];case
1:return[1,F(b,a[1])];case
2:var
c=F(b,a[2]);return[2,a[1],c];case
3:var
d=F(b,a[2]);return[3,a[1],d];case
4:var
e=F(b,a[3]),f=a[2];return[4,F(b,a[1]),f,e];default:var
g=F(b,a[3]),h=a[2];return[5,F(b,a[1]),h,g]}}var
N=a(k[2],eq);function
er(a,b){return[0,a,bR(a,b)]}b(E[5],N,er);b(E[6],N,ep);function
es(d,c){var
e=a(k[5],bQ),f=b(k[7],e,c);return b(ad[9],d,f)}b(p[6],N,es);var
et=a(k[6],bQ),eu=[0,a(p[2],et)];b(p[3],N,eu);var
ev=a(k[4],N),az=h(j[13],j[9],ew,ev),ex=0,ey=0;function
ez(a,b){return[0,v(a)]}var
eA=[0,[0,[0,0,[6,j[15][3]]],ez],ey];function
eB(a,c,b){return[1,v(a)]}var
eC=[6,j[15][3]],eE=[0,[0,[0,[0,0,[0,a(x[15],eD)]],eC],eB],eA];function
eF(b,e,a,d){var
c=v(b);return[2,v(a),c]}var
eG=[6,j[15][3]],eI=[0,a(x[15],eH)],eJ=[0,[0,[0,[0,[0,0,[6,j[15][3]]],eI],eG],eF],eE];function
eK(b,f,a,e,d){var
c=v(b);return[3,v(a),c]}var
eL=[6,j[15][3]],eN=[0,a(x[15],eM)],eO=[6,j[15][3]],eQ=[0,[0,[0,[0,[0,[0,0,[0,a(x[15],eP)]],eO],eN],eL],eK],eJ];function
eR(c,h,b,g,a,f){var
d=v(c),e=v(b);return[4,v(a),e,d]}var
eS=[6,j[15][3]],eU=[0,a(x[15],eT)],eV=[6,j[15][3]],eX=[0,a(x[15],eW)],eY=[0,[0,[0,[0,[0,[0,[0,0,[6,j[15][3]]],eX],eV],eU],eS],eR],eQ];function
eZ(c,h,b,g,a,f){var
d=v(c),e=v(b);return[5,v(a),e,d]}var
e0=[6,j[15][3]],e2=[0,a(x[15],e1)],e3=[6,j[15][3]],e5=[0,a(x[15],e4)];h(j[23],az,0,[0,0,[0,[0,0,0,[0,[0,[0,[0,[0,[0,[0,0,[6,j[15][3]]],e5],e3],e2],e0],eZ],eY]],ex]]);m(aq[1],N,bd,bd,bd);var
e6=[0,az,0];function
e7(c){var
d=c[2],e=a(k[4],N);return[0,b(k[7],e,d)]}h(ao[5],e8,e7,e6);function
e9(a){return a[1]}function
e_(a){return a}function
aH(j){var
d=j[2],e=d[1],f=d[2];if(f){var
c=f[1];switch(c[0]){case
0:var
g=c[1];if(0===g[0])var
a=0;else
var
b=[0,g[1][2]],a=1;break;case
6:var
h=c[2][2];if(0===h[0])var
a=0;else
if(c[3])var
a=0;else
var
b=[0,h[1][2]],a=1;break;default:var
a=0}}else
if(0===e[0]){var
i=e[1][2];if(0===i[0])var
b=[0,i[1]],a=1;else
var
a=0}else
var
a=0;if(!a)var
b=0;return b?b[1]:bB(V(j),e$)}function
aI(m,k,j){var
d=j[2],n=a(l[8],k),c=d[2];if(c){var
e=s[1][9][1],f=m[1],g=function(c,d,a){return b(s[1][9][4],c,a)},i=h(s[1][10][11],g,f,e);return P(by[7],1,n,0,0,[0,[0,i,by[4][2]]],c[1])}return d[1]}function
aA(r,q,p){var
e=cz[10],s=p[2],l=a(k[5],e),m=b(k[7],l,s),c=[0,0],n=b(ad[9],r,m);function
f(b){c[1]=[0,b];return a(ap[13],0)}var
g=b(L[4],n,f),h=a(a(ap[66][8],g),q),d=c[1];if(d){var
i=d[1],j=h[2],o=a(k[6],e);return[0,j,b(ad[2][7],o,i)]}throw[0,S,fa]}function
aj(c,b,a){return a2}function
fb(e){var
f=b(i[23],0,e),c=a(bA[16],f);if(typeof
c!=="number"&&0===c[0]){var
d=c[1];if(!R(d,fc))return 40;if(!R(d,fd))return 64}return 32}var
bS=b(j[1][5][5],fe,fb);function
bT(p,i){af([_,function(f){var
d=a2(i),e=a(c[1],ff);return b(c[14],e,d)}]);function
e(a){return D(p,v(a))[2]}function
f(e,d,c){var
f=b(A[16],fg,d),g=[0,a(s[69],f)],h=0,i=0===c?U:[4,y,U,c];return[0,e,[0,av(U,[5,y,g,0,U,i]),h]]}function
k(f,k){if(0===f[0]){var
d=f[1];if(0===d[0])var
b=0;else
var
g=d[1][2],b=1}else
var
b=0;if(!b)var
i=a(c[1],cP),g=h(n[3],0,0,i);var
j=[4,y,[0,[0,[0,[0,y,[0,g]],0],cQ,a4(y)],0],k];return e(aD(y,a4(y),j))[1]}function
N(b){var
c=1-a3(b);return c?bB(a(bz[6],b),fh):c}var
O=i[2],P=O[2];if(P){var
g=P[1],d=i[1];if(bq===d)return D(p,[0,40,[0,O[1],[0,g]]]);if(17===g[0]){var
l=g[2];if(R(l,fi))if(R(l,fj))if(R(l,fk)){if(!R(l,fl)){var
q=g[3],r=q[1];if(r){var
u=r[2];if(u){var
w=u[2];if(w)if(!w[2])if(!q[2])if(!q[3]){var
Q=u[1];N(Q);var
W=[0,k(Q,w[1]),0];return f(d,fm,[0,e(r[1])[1],W])}}}}}else{var
x=g[3],z=x[1];if(z){var
B=z[2];if(B)if(!B[2])if(!x[2])if(!x[3]){var
C=B[1],j=z[1];try{var
S=e(j),m=e(C),E=S[1];if(S[2])if(m[2])var
T=m[1],X=a3(j)?f(d,fo,[0,E,[0,T,[0,k(j,C),0]]]):f(d,fp,[0,E,[0,T,0]]),F=X,o=1;else
var
o=0;else
if(m[2])var
o=0;else
var
F=f(d,fr,[0,E,[0,m[1],0]]),o=1;if(!o)var
Y=a(c[1],fq),F=h(n[3],0,0,Y);return F}catch(a){a=t(a);if(a3(j))return f(d,fn,[0,k(j,C),0]);throw a}}}}else{var
G=g[3],H=G[1];if(H){var
I=H[2];if(I){var
J=I[2];if(J)if(!J[2])if(!G[2])if(!G[3]){var
V=I[1];N(V);var
Z=[0,k(V,J[1]),0];return f(d,fs,[0,e(H[1])[1],Z])}}}}else{var
K=g[3],L=K[1];if(L){var
M=L[2];if(M)if(!M[2])if(!K[2])if(!K[3]){var
$=[0,e(M[1])[1],0];return f(d,ft,[0,e(L[1])[1],$])}}}}return D(p,i)}return i}function
bU(d,c,b){return[0,a(l[2],c),b]}var
w=a(k[2],fu);function
fv(a,b){return[0,a,bT(a,b)]}b(E[5],w,fv);b(E[6],w,F);function
fw(e,d){var
c=[0,function(f){function
g(a){return bU(e,a,d)}var
c=b(l[49][3],g,f),h=c[2],i=a(k[6],w),j=a(p[2],i),m=b(p[1][8],j,h),n=c[1],o=[0,a(L[1],m),n];return a(aT[21][5],o)}];return a(L[8],c)}b(p[6],w,fw);b(p[3],w,0);var
fx=a(k[4],w),aJ=h(j[13],j[9],fy,fx),fz=0,fA=0;function
fB(a,c,b){return v(a)}var
fC=[6,j[15][1]],fE=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,a(x[15],fD)]],fC],fB],fA]],fz]];h(j[23],aJ,0,fE);m(aq[1],w,aj,aj,aj);var
fF=[0,aJ,0];function
fG(c){var
d=c[2],e=a(k[4],w);return[0,b(k[7],e,d)]}h(ao[5],fH,fG,fF);var
bV=bA[3],fI=0,fJ=0;function
fK(c,b,e){var
d=aw(b,c),f=a(bV,e);if(bf(V(d),f))if(40===b)return aw(bq,c);return d}h(j[1][7],aJ,0,[0,[0,0,0,[0,[0,[0,[2,bS],[0,[2,j[15][1]],0]],fK],fJ]],fI]);var
O=a(k[2],fL);function
fM(a,b){return[0,a,bT(a,b)]}b(E[5],O,fM);b(E[6],O,F);function
fN(e,d){var
c=[0,function(f){function
g(a){return bU(e,a,d)}var
c=b(l[49][3],g,f),h=c[2],i=a(k[6],w),j=a(p[2],i),m=b(p[1][8],j,h),n=c[1],o=[0,a(L[1],m),n];return a(aT[21][5],o)}];return a(L[8],c)}b(p[6],O,fN);var
fO=a(k[6],w),fP=[0,a(p[2],fO)];b(p[3],O,fP);var
fQ=a(k[4],O),aK=h(j[13],j[9],fR,fQ),fS=0,fT=0;function
fU(a,c,b){return v(a)}var
fV=[6,j[15][3]],fX=[0,0,[0,[0,0,0,[0,[0,[0,[0,0,[0,a(x[15],fW)]],fV],fU],fT]],fS]];h(j[23],aK,0,fX);m(aq[1],O,aj,aj,aj);var
fY=[0,aK,0];function
fZ(c){var
d=c[2],e=a(k[4],O);return[0,b(k[7],e,d)]}h(ao[5],f0,fZ,fY);var
f1=0,f2=0;function
f3(c,b,e){var
d=aw(b,c),f=a(bV,e);if(bf(V(d),f))if(40===b)return aw(bq,c);return d}h(j[1][7],aK,0,[0,[0,0,0,[0,[0,[0,[2,bS],[0,[2,j[15][3]],0]],f3],f2]],f1]);function
f4(l,d,c){var
n=a(s[1][9][5],l),h=b(ar[4][1],d,c),o=b(ar[4][4],d,c),i=[0,a(g[98],d)];try{var
q=a(as[10],h),r=[0,b6(T[52],h,i,q,o,n)],e=r}catch(a){a=t(a);if(a[1]!==T[50])throw a;var
e=0}if(e){var
j=e[1],k=i[1],p=b(ar[4][5],k,c),f=m(ar[4][6],k,j[1],j[2],p);return m(ar[4][8],f[3],c,f[1],f[2])}return d}function
bW(F,m,j,E,D){af([_,function(f){var
d=ai(E),e=a(c[1],f6);return b(c[14],e,d)}]);af([_,function(i){var
d=a(s[1][10][17],m[1]);function
e(d){var
e=a(p[1][4],d[2][1]),f=a(c[1],f5),g=a(K[12],d[1]),h=b(c[14],g,f);return b(c[14],h,e)}var
f=h(c[54],c[17],e,d),g=a(c[1],f7);return b(c[14],g,f)}]);function
B(b,a){return[2,b,a]}function
al(b,a){return[3,b,a]}function
an(a){return[1,a]}function
q(a,b){var
c=a?a[1]:32;return[0,c,[0,b,0]]}function
w(h,g,p,u,o){try{var
e=aI(h,j,g);switch(e[0]){case
1:var
q=e[1][2];if(b(s[1][10][3],q,h[1]))if(a(ae[3],p))var
f=1;else
if(a(ae[3],F))var
f=1;else
var
v=b(s[1][10][22],q,h[1]),w=a(ae[7],F),x=a(k[6],w),y=b(ad[2][7],x,v),i=b(ae[7],p,y),c=1,f=0;else
var
f=1;if(f)var
c=0;break;case
14:if(13===e[2][0]){var
l=e[3];if(typeof
l==="number")var
d=1;else
if(0===l[0]){var
m=l[1];if(5===m[0]){var
r=m[2];if(r)var
i=b(u,r[1],[0,32,[0,m[5],0]]),c=1,d=0;else
var
c=0,d=0}else
var
c=0,d=0}else
var
d=1;if(d)var
c=0}else
var
c=0;break;default:var
c=0}if(!c)var
i=a(o,g);return i}catch(b){b=t(b);if(a(n[22],b))return a(o,g);throw b}}function
u(c,b,a){return w(m,q(0,c),0,b,a)}function
C(d,i){var
e=a(c[1],d),f=a(c[1],f8),g=b(c[14],f,e);return h(n[3],0,0,g)}function
G(u,k,s,c){var
m=a(e[r],u);if(3===m[0]){var
v=m[1][1],n=a(l[9],j),o=a(at[2][4],n),d=[0,0];try{b(at[2][5],k,n);var
z=function(m){var
e=0===d[1]?1:0;if(e){var
n=b(g[23],c,m),f=a(g[6],n),h=a(at[2][4],f),j=o<h?1:0;if(j){var
p=b(i[17][5],f,(h-o|0)-1|0);d[1]=[0,a(at[2][1][1],p)];var
k=0}else
var
k=j;var
l=k}else
var
l=e;return l},f=d,p=z}catch(a){a=t(a);if(a!==am)throw a;var
f=[0,[0,k]],p=function(a){return 0}}var
w=a(l[2],j),q=function(d,f){var
j=a(e[r],f);if(3===j[0]){var
c=j[1][1];if(!bg(c,v))if(!b(i[17][26],c,d))if(!b(g[26],w,c)){p(c);return[0,c,d]}return d}return h(e[142],q,d,f)},x=q(0,b(T[31],c,s)),y=function(c,d){if(b(g[34],c,d))return c;if(a(ae[3],f[1]))return c;var
e=a(ae[7],f[1]);af([_,function(b){return a(K[12],e)}]);return f4(e,c,d)};return h(i[17][15],y,c,x)}throw[0,S,f9]}function
H(v){var
b=v[2],f=v[1];switch(b[0]){case
0:var
x=b[1],y=x[2],g=y[1];if(14===g[0])if(13===g[2][0]){var
j=g[3];if(typeof
j==="number")var
d=0;else
if(0===j[0]){var
k=j[1];if(5===k[0]){var
z=k[2];if(z)if(y[2])var
d=1;else{var
e=k[5],A=z[1],D=a(s[68],A),E=8<b7(D)?1:0,J=E?o.caml_string_equal(h(i[15][4],D,0,8),f_):E;if(J){var
c=a(s[68],A),F=h(i[15][4],c,8,b7(c)-8|0);if(R(F,f$)){if(!R(F,ga))if(4===e[0]){var
l=e[3];if(l){var
m=l[2],n=l[1];if(!m)return u(n,B,function(a){return[0,a]});var
p=m[2],G=m[1];if(!p){var
N=function(a){return C(c,a)},O=q(0,n);return u(G,function(a,b){return[4,O,a,b]},N)}if(!p[2]){var
K=p[1],L=function(a){return u(K,B,function(a){throw[0,S,gb]})},M=q(0,n);return u(G,function(a,b){return[4,M,a,b]},L)}}}}else
if(4===e[0]){var
r=e[3];if(r){var
t=r[2];if(t)if(!t[2]){var
P=function(a){return C(c,a)},Q=q(0,r[1]),T=function(a,b){return[5,Q,a,b]};return u(t[1],T,P)}}}return C(c,0)}var
d=1}else
var
d=1}else
var
d=1}else
var
d=0}return w(f,x,[0,H],B,function(a){return[0,a]});case
1:return w(f,b[1],0,al,an);case
2:var
I=b[1],U=function(a){return[2,aH(I),a]},V=function(a,b){return[4,I,a,b]};return w(f,b[2],0,V,U);case
3:var
W=b[2];return[3,aH(b[1]),W];case
4:var
X=b[3],Y=aH(b[2]);return[4,b[1],Y,X];default:var
Z=b[3],_=aH(b[2]);return[5,b[1],_,Z]}}var
d=H([0,m,E]);af([_,function(g){var
e=bP(d),f=a(c[1],gc);return b(c[14],f,e)}]);if(D){var
x=[0,32,D[1]];switch(d[0]){case
0:var
I=d[1],ao=V(I),v=[0,a5(I,x,function(a,b){return aD(ao,a,b)},av)];break;case
2:var
ax=aI(m,j,x),ay=d[2],az=d[1],v=[5,q(0,av(U,ax)),az,ay];break;case
4:var
aj=d[3],aB=q(0,aI(m,j,x)),aC=d[2],aE=V(aj),aF=function(a,b){return aD(aE,a,b)},v=[4,a5(d[1],aB,aF,av),aC,aj];break;case
5:var
ak=d[3],aG=q(0,aI(m,j,x)),aJ=d[2],aK=V(ak),aL=function(a,b){return aD(aK,a,b)},v=[5,a5(d[1],aG,aL,av),aJ,ak];break;default:var
v=d}var
f=v}else
var
f=d;af([_,function(g){var
d=bP(f),e=a(c[1],gd);return b(c[14],e,d)}]);function
J(a,b,c){var
d=c[2],e=d[2],f=d[1],g=c[1];if(e){var
h=e[1];return[0,g,[0,f,[0,[5,a,[0,a,b],a4(a),h]]]]}return[0,g,[0,[7,a,b,[13,[0,a,[1,b],0,0]],f],0]]}switch(f[0]){case
0:var
L=aA(m,j,f[1]);return[0,L[1],[0,L[2]]];case
1:var
M=aA(m,j,f[1]);return[0,M[1],[1,M[2]]];case
2:case
3:var
N=f[1],O=aA(m,j,J(y,[0,N],f[2])),P=a(e[36],O[2]),Q=P[4],z=P[2],W=G(z,N,Q,O[1]),ap=b(T[31],W,Q),X=b(aQ[13],z,ap),aq=2===f[0]?[2,z,X]:[3,z,X];return[0,W,aq];default:var
Y=f[2],Z=aA(m,j,J(y,[0,Y],f[3])),$=a(e[36],Z[2]),aa=$[4],A=$[2],ab=G(A,Y,aa,Z[1]),ar=b(T[31],ab,aa),ac=b(aQ[13],A,ar),as=f[1],au=a(g[68],j),ag=aA(m,b(l[3],au,ab),as),ah=ag[2],aw=4===f[0]?[4,ah,A,ac]:[5,ah,A,ac];return[0,ag[1],aw]}}function
bX(d,c,b,a){return bW(0,d,c,[0,b],a)}function
ge(d){var
b=d[2];if(0===b[0]){var
c=a(e[r],b[1]);return 1===c[0]?[0,c[1]]:0}return 0}function
bY(v,i,j,o,n,q,p){function
f(c,a){return b(H[17],c,a)}function
w(e,d,l){var
f=b(g[23],e,d),i=f[3];if(i)var
j=i[1];else
var
n=a(c[1],gf),o=a(c[1],gg),p=a(c[17],0),q=a(bx[1],d),r=a(c[20],q),s=a(c[1],gh),t=a(aC,l),u=a(c[1],gi),v=b(c[14],u,t),w=b(c[14],v,s),x=b(c[14],w,r),y=b(c[14],x,p),z=b(c[14],y,o),j=a(M,b(c[14],z,n));var
k=f.slice();k[3]=0;var
m=b(g[25],e,d);return[0,h(g[22],m,d,k),j]}function
x(c){var
b=a(e[r],c);if(3===b[0])return b[1][1];throw[0,S,gj]}function
l(j,i,h,b,a,g){var
c=b[2],d=b[1],k=a?a[1]:c,e=bL(0,j,i,h,[0,d,k],g,0,f(d,c));return[0,e[1],[0,e[2],0]]}if(n){var
D=n[1],k=D[2],d=D[1];switch(k[0]){case
4:var
N=k[2],ad=f(d,k[1]),t=f(d,k[3]),ae=x(N),O=C(0,0,0,j,Z,l(gl,i,j,[0,d,t],0,I)),P=C(0,0,0,d,Z,l(0,i,d,[0,d,N],0,I)),af=P[1],Q=C(0,v,0,j,q,l(0,i,j,[0,d,ad],0,I)),ag=Q[1],ah=function(b,i,l,h){var
c=Y(b,a(g[$],d),i,t),e=w(c,ae,t),j=e[2];function
k(b,d,c,a){return m(ag,b,j,a,p)}return f(c,m(af,b,f(e[1],t),h,k))},ai=m(O[1],i,o,1,ah);a(Q[2],0);a(P[2],0);a(O[2],0);return ai;case
5:var
y=k[2],z=f(d,k[1]),u=f(d,k[3]),aj=x(y),R=Y(i,d,y,z),T=C(0,0,0,j,Z,l(gm,i,j,[0,R,f(R,u)],0,I)),U=C(0,0,0,d,q,l(0,i,d,[0,d,y],0,I)),ak=U[1],al=function(b,j,n,i){var
c=Y(b,a(g[$],d),j,u),e=w(c,aj,u),h=e[1],k=e[2];function
l(a,e,d,c){var
b=f(Y(a,h,k,z),z);return m(p,a,b,b,c)}return f(c,m(ak,b,f(h,u),i,l))},am=m(T[1],i,o,1,al);a(U[2],0);a(T[2],0);return am;case
0:case
1:var
V=f(d,k[1]),W=a(g[$],d);if(n)if(0===n[1][2][0])var
E=q,A=1;else
var
A=0;else
var
A=0;if(!A)var
E=Z;var
F=C(0,v,0,j,E,l(0,i,j,[0,W,V],0,I)),X=m(F[1],i,o,1,p);a(F[2],0);return X;default:var
G=k[1],s=f(d,k[2]);if(n)if(2===n[1][2][0])var
J=q,B=1;else
var
B=0;else
var
B=0;if(!B)var
J=Z;var
_=x(G),K=C(0,0,0,j,Z,l(gk,i,j,[0,d,s],0,I)),L=C(0,v,0,d,J,l(0,i,d,[0,d,G],0,I)),aa=L[1],ab=function(c,j,n,i){var
e=Y(c,a(g[$],d),j,s),h=w(e,_,s),k=h[2];function
l(a,c){return b(p,a,k)}return f(e,m(aa,c,f(h[1],s),i,l))},ac=m(K[1],i,o,1,ab);a(L[2],0);a(K[2],0);return ac}}return m(p,i,o,o,1)}function
bZ(d,l,e){var
f=e[2],i=e[1],m=d?d[1]:d;switch(f[0]){case
1:case
3:var
p=a(c[1],go),j=h(n[3],0,0,p);break;default:var
j=f[1]}var
k=m?P(br[29],0,0,0,gn,l,i):i,o=a(g[r],k);return[0,b(H[17],k,j),o]}function
b0(m,f,l,k,d,c,j){if(bg(c,gp))var
i=0,h=gq;else
var
i=1,h=c;var
b=[0,0],n=bY(m,f,l,k,[0,d],h,function(h,c,f,d){bb(b,function(a){return[0,c,g[b$]]});return i?a(e[aO],(d+j|0)-1|0):c}),o=0===b[1]?bZ(0,f,d):bc(b);return[0,o,n]}function
be(g,f,e,d,c,b,a){return bL(g,0,f,e,d,c,b,a)}function
gr(f,p,o,d,n,c,l,k){var
q=a(g[$],c[1]),h=be(0,f,d,[0,q,c[2]],l,0,n),i=C(0,gs,0,d,o,[0,h[1],[0,h[2],0]]);function
r(c,b,a){return e[aO]}var
s=m(i[1],f,p,k,r),j=a(i[2],0),b=j[3];return[0,b[1],b[2],b[3],s,j[1]]}function
gt(k,j,q,d,i){var
e=i[2],l=i[1];try{var
f=gr(k,j,q,d,e,[0,l,e],I,1),o=f[1];if(o!==d)var
p=a(n[6],gw);else
var
A=f[3],C=[0,b(g[bm],o,f[2]),A],p=[0,f[4],C];return p}catch(f){f=t(f);if(f===z)try{var
w=function(a){return 1},h=aF(k,d,a(g[$],l),e,w),m=h[1];if(m!==d)throw z;var
x=h[3],y=[0,j,[0,b(g[bm],m,h[2]),x]];return y}catch(d){var
r=a(c[1],gu),s=B(e),u=a(c[1],gv),v=b(c[14],u,s);return a(M,b(c[14],v,r))}throw f}}function
gx(b,e,d){var
f=a(l[2],b),g=a(l[8],b),c=gt(g,a(l[7],b),e,f,d);return[0,c[1],c[2][2]]}function
gy(a){return[0,32,[0,[0,[0,y,[0,a],0]],0]]}function
gz(c){var
a=c[2],b=a[2],d=b?12===b[1][0]?1:0:13===a[1][0]?1:0;return d?1:0}function
gA(d,c,b,a){return ai(a[2])}function
b1(d,c,b,a){return ai(a)}var
G=a(k[2],gB);function
gC(a,b){return[0,a,bR(a,b)]}b(E[5],G,gC);function
gD(b,a){return a}b(E[6],G,gD);function
gE(e,d){var
c=[0,function(f){function
g(b){return[0,a(l[2],b),[0,e,d]]}var
c=b(l[49][3],g,f),h=c[2],i=a(k[6],G),j=a(p[2],i),m=b(p[1][8],j,h),n=c[1],o=[0,a(L[1],m),n];return a(aT[21][5],o)}];return a(L[8],c)}b(p[6],G,gE);b(p[3],G,0);b(j[11],G,az);m(aq[1],G,b1,b1,gA);var
gF=[0,az,0];function
gG(c){var
d=c[2],e=a(k[4],G);return[0,b(k[7],e,d)]}h(ao[5],gH,gG,gF);function
gI(d,c){var
e=a(l[2],c),f=b(g[bm],e,d),h=a(g[68],c);return b(l[3],h,f)}function
gJ(d,c){var
e=a(l[2],c),f=b(g[bh],e,d),h=a(g[68],c);return b(l[3],h,f)}function
b2(c,b,a){return bW([0,G],c,b,a,0)}var
gM=[0,function(o,c){var
d=c[1],f=a(s[1][5],gL),i=b(s[1][10][22],f,d),m=a(k[6],G),j=b(ad[2][7],m,i);function
n(c){var
p=b2(j[1],c,j[2]),q=a(l[2],c),r=a(l[7],c),f=b0(0,a(aX[2],0),q,r,p,Z,1),i=f[1][1],d=b(l[16],c,i),k=d[2],m=d[1],n=a(g[68],c),o=b(l[3],n,m),t=f[2],u=[0,[0,a(s[69],gK)],i,k,t],v=a(e[co],u),w=h(cr[3],0,v,2);return b(ap[66][8],w,o)}return a(ap[66][1],n)}];h(aS[9],0,b3,gM);var
gN=[31,aW[4],[0,b3,0],0],gP=[28,[0,[0,[0,a(s[1][5],gO)],0],gN]];function
gQ(c){var
b=a(s[1][5],gR);return m(aS[4],1,0,b,gP)}b(aV[19],gQ,gS);function
gT(n,k,d){var
o=a(l[7],d),e=a(l[2],d),f=a(l[8],d),g=bX(n,d,k,0),h=g[2],i=0===h[0]?h[1]:a(M,a(c[1],g0)),p=0;function
q(a,b){return 1}var
j=be(0,f,e,[0,g[1],i],q,p,i),r=C(gV,gU,0,e,0,[0,j[1],[0,j[2],0]])[1];function
s(t,e,d,s){var
f=a(aC,d),g=a(c[17],0),h=a(c[1],gW),i=a(c[17],0),j=a(aC,e),k=a(c[17],0),l=a(c[1],gX),m=b(c[14],l,k),n=b(c[14],m,j),o=b(c[14],n,i),p=b(c[14],o,h),q=b(c[14],p,g),r=b(c[14],q,f);a(a0,b(c[30],1,r));return d}a(a0,a(c[1],gY));try{for(;;){m(r,f,o,1,s);continue}}catch(b){b=t(b);if(b===z){a(a0,a(c[1],gZ));return a(cs[1],d)}throw b}}try{var
g9=0,g$=[0,function(c){if(c)if(!c[2]){var
d=c[1],e=a(k[6],w),f=b(ad[2][7],e,d);return function(b){function
c(a){return gT(b,f,a)}return a(ap[66][1],c)}}return a(A[2],g_)},g9],ha=a(i[19][12],g$);h(aS[9],0,[0,aZ,hb],ha);var
hc=function(f){var
c=0,d=0,e=a(s[1][6],hd);if(0===w[0])return b(ao[4],[0,aZ,hf],[0,[0,he,[0,[1,aW[4],[5,[0,w[1]]],e],d]],c]);throw[0,S,hg]};b(aV[19],hc,aZ)}catch(d){d=t(d);if(!a(n[22],d))throw d;var
g1=b(n[18],0,d),g4=b(A[16],g3,g2),g6=b(A[16],g5,g4),g7=a(c[1],g6),g8=b(c[13],g7,g1);a(aY[13],g8)}a(x[11],cC);var
b4=[0,a2,aJ,w,aK,O,ai,az,N,z,ag,en,bZ,b2,bX,bY,b0,ah,be,C,gx,e_,bb,bc,Y,dh,e9,V,ge,gz,gy,B,gI,gJ,bC,bG];b8(255,b4,"Ssrmatching_plugin.Ssrmatching");b8(256,[0,b4],"Ssrmatching_plugin");return});
