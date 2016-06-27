(function(F){"use strict";var
c=F.jsoo_runtime,d=c.caml_new_string,r=c.caml_register_global,D=c.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):c.caml_call_gen(a,[b])}function
h(a,b,d){return a.length==2?a(b,d):c.caml_call_gen(a,[b,d])}function
E(a,b,d,e,f){return a.length==4?a(b,d,e,f):c.caml_call_gen(a,[b,d,e,f])}var
b=c.caml_get_global_data(),m=d("nat_syntax_plugin"),f=b.Coqlib,l=b.Globnames,g=b.Bigint,e=b.Pp,k=b.Loc,t=b.Feedback,u=b.Errors,s=b.Notation;a(b.Mltop[12],m);var
n=a(g[3],5e3),v=d("limits and on the command executed)."),w=d("may vary from 5000 to 70000 depending on your system "),x=d("working with large numbers in nat (observed threshold "),y=d("Stack overflow or segmentation fault happens when "),z=d("Cannot interpret a negative number as a number of type nat"),A=d("nat_of_int"),B=d("Nat_syntax.Non_closed_number"),C=d("nat_scope");function
o(b,d){if(a(g[20],d)){if(h(g[16],n,d)){var
k=a(e[26],v),l=a(e[26],w),m=a(e[26],x),o=a(e[26],y),p=h(e[14],o,m),q=h(e[14],p,l),r=h(e[14],q,k);a(t[13],r)}var
j=[0,[0,b,f[23],0]],i=d,s=[0,[0,b,f[24],0]];for(;;){if(c.caml_notequal(i,g[5])){var
j=[4,b,s,[0,j,0]],i=a(g[10],i);continue}return j}}var
B=[0,b,A,a(e[1],z)];return a(u[8],B)}var
i=[248,B,c.caml_fresh_oo_id(0)];function
j(b){switch(b[0]){case
0:if(h(l[5],b[1][2],f[23]))return g[5];break;case
4:var
d=b[2];if(0===d[0]){var
c=b[3];if(c)if(!c[2])if(h(l[5],d[1][2],f[24])){var
e=j(c[1]);return a(g[9],e)}}break}throw i}function
p(a){try{var
b=[0,j(a)];return b}catch(a){a=D(a);if(a===i)return 0;throw a}}E(s[13],C,[0,f[19],f[18]],o,[0,[0,[0,[0,k[4],f[24],0]],[0,[0,[0,k[4],f[23],0]],0]],p,1]);var
q=[0,m,n,o,i,j,p];r(18,q,"Nat_syntax_plugin.Nat_syntax");r(19,[0,q],"Nat_syntax_plugin");return});
