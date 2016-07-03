(function(lU){"use strict";var
ez="*",eH=123,ad=145,a7=112,a9=140,eO=" 0\n",eS="Z.lt",eW="Z.le",c1="Equation E",c0=" and E",dp=": ",cE=".\n",f=250,ey="Z.succ",eD="omega_plugin",eG="(",eM="Z.pred",eN="not a number",eL="ZArith",ex="+ ",eC="- ",l=124,et="------------------------\n\n",d=246,ew="Z.sub",es="tag_hypothesis",aM="omega",eB="Inequation E",dq="Z",eK="Extension: cannot occur",o=113,eJ=")",eR="N",eV="State",a6=122,eF="with",eA="omega'",eQ="X%d",ds=" E",ao="Omega",eP=" states ",u=136,aX=248,ev="positive",dn=-18,eu="Equations E",dr="nat",eT=121,eU="Omega: Can't solve a goal with non-linear products",cZ=-16,eI="Z.ge",eE="Z.gt",a8="Coq",R=lU.jsoo_runtime,an=R.caml_check_bound,er=R.caml_equal,aW=R.caml_fresh_oo_id,b=R.caml_new_string,cX=R.caml_notequal,h=R.caml_obj_tag,cY=R.caml_register_global,cD=R.caml_string_notequal,w=R.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):R.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):R.caml_call_gen(a,[b,c])}function
v(a,b,c,d){return a.length==3?a(b,c,d):R.caml_call_gen(a,[b,c,d])}function
cC(a,b,c,d,e){return a.length==4?a(b,c,d,e):R.caml_call_gen(a,[b,c,d,e])}function
lT(a,b,c,d,e,f,g,h,i,j){return a.length==9?a(b,c,d,e,f,g,h,i,j):R.caml_call_gen(a,[b,c,d,e,f,g,h,i,j])}var
s=R.caml_get_global_data(),lS=[11,b(" + "),[2,0,[12,32,[2,0,[11,b(ds),[4,0,0,0,[11,b(cE),0]]]]]]],ee=[0,[0,2],[0,1,0]],dL=[0,b(a8),[0,b("Logic"),[0,b("Decidable"),0]]],aV=b(eD),r=s.List,B=s.Printf,n=s.Pervasives,q=s.Util,L=s.Not_found,aN=s.Int,y=s.Hashtbl,dt=s.Assert_failure,H=s.Names,g=s.CamlinternalLazy,e=s.Term,I=s.Bigint,ae=s.CErrors,p=s.Proofview,aP=s.Logic,D=s.Tacmach,C=s.Coqlib,i=s.Tactics,j=s.Tacticals,c7=s.Context,a_=s.Nameops,c4=s.Pp,c3=s.Universes,c5=s.Nametab,c6=s.Libnames,cF=s.Goptions,ep=s.Constrarg,en=s.Loc,eo=s.Genarg,em=s.Tacinterp,cV=s.Tacenv,dm=s.Mltop,aO=[0,0],fh=[0,[11,b(eB),[4,0,0,0,[11,b(" is divided by "),[2,0,[11,b(" and the constant coefficient is rounded by substracting "),[2,0,[11,b(cE),0]]]]]]],b("Inequation E%d is divided by %s and the constant coefficient is rounded by substracting %s.\n")],fi=[0,[11,b("Constant in equation E"),[4,0,0,0,[11,b(" is not divisible by the pgcd "),[2,0,[11,b(" of its other coefficients.\n"),0]]]]],b("Constant in equation E%d is not divisible by the pgcd %s of its other coefficients.\n")],fj=[0,[12,69,[4,0,0,0,[11,b(" is trivially satisfiable.\n"),0]]],b("E%d is trivially satisfiable.\n")],fk=[0,[11,b(c1),[4,0,0,0,[11,b(" is divided by the pgcd "),[2,0,[11,b(" of its coefficients.\n"),0]]]]],b("Equation E%d is divided by the pgcd %s of its coefficients.\n")],fl=[0,[11,b("We state "),[2,0,[11,b(ds),[4,0,0,0,[11,b(" = "),[2,0,[12,32,[2,0,[11,b(ds),[4,0,0,0,lS]]]]]]]]]],b("We state %s E%d = %s %s E%d + %s %s E%d.\n")],fm=[0,[11,b("We define a new equation E"),[4,0,0,0,[11,b(dp),0]]],b("We define a new equation E%d: ")],fn=b(" 0"),fo=[0,[11,b("We define E"),[4,0,0,0,[11,b(dp),0]]],b("We define E%d: ")],fp=b(eO),fr=[0,[11,b(eu),[4,0,0,0,[11,b(c0),[4,0,0,0,[11,b(" imply a contradiction on their constant factors.\n"),0]]]]],b("Equations E%d and E%d imply a contradiction on their constant factors.\n")],fs=[0,[11,b(eu),[4,0,0,0,[11,b(c0),[4,0,0,0,[11,b(" state that their body is at the same time equal and different\n"),0]]]]],b("Equations E%d and E%d state that their body is at the same time equal and different\n")],ft=[0,[12,69,[4,0,0,0,[11,b(c0),[4,0,0,0,[11,b(" can be merged into E"),[4,0,0,0,[11,b(cE),0]]]]]]],b("E%d and E%d can be merged into E%d.\n")],fu=[0,[11,b(c1),[4,0,0,0,[11,b(eP),[2,0,[11,b(" = 0.\n"),0]]]]],b("Equation E%d states %s = 0.\n")],fv=[0,[11,b(eB),[4,0,0,0,[11,b(" states 0 != 0.\n"),0]]],b("Inequation E%d states 0 != 0.\n")],fw=[0,[11,b(c1),[4,0,0,0,[11,b(eP),[2,0,[11,b(" >= 0.\n"),0]]]]],b("Equation E%d states %s >= 0.\n")],fx=[0,[11,b(c1),[4,0,0,0,[11,b(" is split in E"),[4,0,0,0,[11,b(c0),[4,0,0,0,[11,b("\n\n"),0]]]]]]],b("Equation E%d is split in E%d and E%d\n\n")],fy=[0,[11,b("To ensure a solution in the dark shadow the equation E"),[4,0,0,0,[11,b(" is weakened by "),[2,0,[11,b(cE),0]]]]],b("To ensure a solution in the dark shadow the equation E%d is weakened by %s.\n")],fq=[0,[12,69,[4,0,0,0,[11,b(" subsumes E"),[4,0,0,0,[11,b(cE),0]]]]],b("E%d subsumes E%d.\n")],fJ=b("depend"),fN=b("solve"),fL=[0,b("plugins/omega/omega.ml"),602,15],fK=b("no contradiction"),fI=b("disequation in simplify"),fH=b("Product dardk"),fG=[0,0,0,0],fD=b("tl"),fE=b("TL"),fC=b("eliminate_with_in"),fz=[0,[12,88,[4,0,0,0,0]],b(eQ)],ff=b(">= 0\n"),fg=b(et),fc=[0,[12,69,[4,0,0,0,[11,b(dp),0]]],b("E%d: ")],fd=[0,[2,0,[11,b(eO),0]],b("%s 0\n")],fe=b(et),e$=b("equation"),fa=b("inequation"),fb=b("disequation"),e8=b("="),e9=b(">="),e_=b("!="),e1=b(eC),e4=b(ex),e5=b(""),e2=[0,[2,0,[12,32,0]],b("%s ")],e3=[0,[2,0,[12,32,[2,0,[12,32,0]]]],b("%s %s ")],e6=[0,[11,b(ex),[2,0,[12,32,0]]],b("+ %s ")],e7=[0,[11,b(eC),[2,0,[12,32,0]]],b("- %s ")],eY=b("pgcd_l"),eZ=b("Omega.MakeOmegaSolver(I).UNSOLVABLE"),e0=b("Omega.MakeOmegaSolver(I).NO_CONTRADICTION"),fA=b("Omega.MakeOmegaSolver(I).FACTOR1"),fB=b("Omega.MakeOmegaSolver(I).CHOPVAR"),fF=b("Omega.MakeOmegaSolver(I).SOLVED_SYSTEM"),fM=b("Omega.MakeOmegaSolver(I).FULL_SOLUTION"),iZ=b(eG),i0=b("+"),i1=b(eJ),i2=b("~"),i3=b(eG),i4=b(ez),i5=b(eJ),i6=b("?"),i7=b("weight"),jd=[0,2],je=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jf=[0,[0,[0,1],0],[0,[0,[0,2],0],0]],i$=[0,2],ja=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jb=[0,2],jc=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],jg=[0,2],jh=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],ji=[0,[0,[0,1],0],[0,[0,[0,2],0],0]],jJ=[0,[0,[0,1],[0,[0,1],[0,[0,1],0]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,2],0]],[0,[0,[0,1],[0,[0,1],[0,[0,2],[0,[0,1],0]]]],0]]]],jK=[0,1],jL=[0,2],jM=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jN=[0,2],jO=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],jP=b(eU),jQ=[0,2],jR=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jY=[0,1],jZ=[0,2],j0=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],0]],j1=[0,[0,[0,1],[0,[0,1],0]],0],j2=b(eU),j3=[0,2],j4=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],0]],j5=[0,[0,[0,1],0],0],j6=[0,1],j7=[0,2],j8=[0,1],j9=[0,2],j_=[0,[0,[0,1],0],[0,[0,[0,2],0],0]],j$=[0,1],kq=[0,0,0],kn=[0,1],ko=[0,2],kj=[0,1],kk=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],kl=[0,1],km=[0,2],kp=[0,1],ks=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],kr=[0,2],li=[0,b(a8),[0,b(aM),[0,b(ao),0]]],ld=b("_left"),le=b("_right"),k0=[0,1],kT=[0,2],kU=[0,1],kV=[0,2],kW=[0,1],kX=[0,2],kY=[0,1],kZ=[0,1],k1=[0,[0,3],[0,1,0]],k2=[0,[0,2],[0,1,0]],k3=[0,[0,2],[0,1,0]],k4=[0,[0,1],[0,1,0]],k5=[0,[0,2],[0,1,0]],k6=[0,[0,1],[0,1,0]],k7=[0,[0,2],[0,1,0]],k8=[0,[0,1],[0,1,0]],k9=[0,[0,2],[0,1,0]],k_=[0,[0,1],[0,1,0]],k$=[0,[0,2],[0,1,0]],la=[0,[0,1],[0,1,0]],kQ=[0,0,0],kR=b("Omega can't solve this system"),kP=b(eV),kO=[0,1,0],kw=[0,[0,3],0],kx=[0,[0,2],0],ky=[0,[0,3],0],kz=[0,[0,3],0],kA=[0,[0,1],[0,1,0]],kB=[0,[0,2],[0,1,0]],kC=[0,[0,2],[0,1,0]],kD=[0,[0,[0,1],0],0],kE=[0,2],kF=[0,1],kG=[0,1],kH=[0,[0,2],[0,1,0]],kI=[0,[0,1],[0,1,0]],kJ=[0,[0,3],0],kK=[0,[0,[0,1],0],0],kL=[0,[0,3],0],kM=[0,[0,2],[0,1,0]],kN=[0,[0,2],[0,1,0]],kt=b("auxiliary"),ku=b("auxiliary_1"),kv=b("auxiliary_2"),kg=b("condense.1"),kh=[0,2],ki=[0,0,0],kf=b("reduce_factor.1"),kb=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],kc=[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]],kd=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,2],0]],0]],ke=[0,[0,[0,1],0],0],ka=b("shrink.1"),jW=[0,2],jX=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]]]]],jU=[0,2],jV=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jS=[0,2],jT=[0,[0,[0,1],[0,[0,1],[0,[0,1],0]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]]],jw=[0,[0,[0,1],[0,[0,1],[0,[0,1],0]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]]],jx=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],jy=[0,2],jz=[0,1],jA=[0,2],jB=[0,2],jC=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jD=[0,2],jE=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jF=[0,2],jG=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jH=[0,2],jI=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jj=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,2],0]],0]]]]]]],jk=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],jl=[0,2],jm=[0,1],jn=[0,2],jo=[0,2],jp=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]]]]],jq=[0,2],jr=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],js=[0,2],jt=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]]]]],ju=[0,2],jv=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],i9=b("H"),i_=b("P"),i8=b("compile_equation"),iY=b("x"),iX=b("occurrence "),iW=b("abstract_path "),iU=b(eN),iV=b(eN),iT=b("Omega: Not a quantifier-free goal"),iP=b("not"),iN=b(eS),iL=b(eI),iK=b(eE),iJ=b(eW),iI=b(ew),iH=b(eM),iG=b(ey),iE=b(" is not an evaluable constant"),iF=[0,b("Coq_omega")],iD=b("iff"),iC=b("imp_simp"),iB=b("not_not"),iA=b("not_iff"),iz=b("not_imp"),iy=b("not_and"),ix=b("not_or"),iw=b("dec_True"),iv=b("dec_not_not"),iu=b("dec_False"),it=b("dec_not"),is=b("dec_iff"),ir=b("dec_imp"),iq=b("dec_and"),ip=b("dec_or"),io=b("eq_ind_r"),im=b("not_gt"),il=b("not_ge"),ik=b("not_lt"),ij=b("not_le"),ii=b("not_eq"),ih=b("dec_gt"),ig=b("dec_ge"),ie=b("dec_lt"),id=b("dec_le"),ic=b("dec_eq_nat"),ib=b("le_gt_dec"),ia=b("pred_of_minus"),h$=b("O"),h_=b("S"),h9=b(dr),h8=b("Nat.pred"),h7=b("Nat.mul"),h6=b("Nat.add"),h5=b("Nat.sub"),h4=b("gt"),h3=b("ge"),h2=b("lt"),h1=b("le"),h0=b(eS),hZ=b(eI),hY=b(eE),hX=b(eW),hW=b("Zne"),hV=b("neq"),hU=b("Znot_gt_le"),hT=b("Znot_ge_lt"),hS=b("Znot_lt_ge"),hR=b("Znot_le_gt"),hQ=b("not_Zne"),hP=b("not_Zeq"),hO=b("dec_Zge"),hN=b("dec_Zgt"),hM=b("Z.lt_decidable"),hL=b("Z.le_decidable"),hK=b("dec_Zne"),hJ=b("Z.eq_decidable"),hI=b("intro_Z"),hH=b("new_var"),hG=b("Zle_left"),hF=b("Zgt_left"),hE=b("Zge_left"),hD=b("Zlt_left"),hC=b("Zne_left"),hB=b("Zegal_left"),hA=b("fast_Zopp_involutive"),hz=b("fast_Zopp_eq_mult_neg_1"),hy=b("fast_Zopp_mult_distr_r"),hx=b("fast_Zopp_plus_distr"),hw=b("fast_Zmult_opp_comm"),hv=b("fast_Zmult_plus_distr_l"),hu=b("fast_Zred_factor6"),ht=b("fast_Zred_factor5"),hs=b("fast_Zred_factor4"),hr=b("fast_Zred_factor3"),hq=b("fast_Zred_factor2"),hp=b("fast_Zred_factor1"),ho=b("fast_Zred_factor0"),hn=b("OMEGA20"),hm=b("OMEGA19"),hl=b("OMEGA18"),hk=b("OMEGA17"),hj=b("fast_OMEGA16"),hi=b("fast_OMEGA15"),hh=b("fast_OMEGA14"),hg=b("fast_OMEGA13"),hf=b("fast_OMEGA12"),he=b("fast_OMEGA11"),hd=b("fast_OMEGA10"),hc=b("OMEGA9"),hb=b("OMEGA8"),ha=b("OMEGA7"),g$=b("OMEGA6"),g_=b("OMEGA5"),g9=b("OMEGA4"),g8=b("OMEGA3"),g7=b("OMEGA2"),g6=b("OMEGA1"),g5=b("Zmult_le_approx"),g4=b("fast_Zmult_comm"),g3=b("fast_Zplus_comm"),g2=b("fast_Zplus_permute"),g1=b("fast_Zmult_assoc_reverse"),g0=b("fast_Zplus_assoc"),gZ=b("fast_Zplus_assoc_reverse"),gY=b("inj_eq"),gX=b("inj_neq"),gW=b("Znat.inj_gt"),gV=b("Znat.inj_ge"),gU=b("Znat.inj_lt"),gT=b("Znat.inj_le"),gS=b("Nat2Z.inj_succ"),gR=b("inj_minus2"),gQ=b("Nat2Z.inj_sub"),gP=b("Nat2Z.inj_mul"),gO=b("Nat2Z.inj_add"),gN=b("Z.of_nat"),gM=b(eM),gL=b(ey),gK=b(ew),gJ=b("Z.opp"),gI=b("Z.mul"),gH=b("Z.add"),gG=b("Gt"),gF=b("comparison"),gE=b(dq),gD=b("Zneg"),gC=b("Zpos"),gB=b("Z0"),gA=b("xI"),gz=b("xO"),gy=b("xH"),gn=b("find_contr"),gm=b(es),gk=b(es),gi=[0,1],gh=[0,[12,88,[4,0,0,0,0]],b(eQ)],gg=b("WW"),gf=b("Zvar"),ge=b(eV),gc=b(ao),fZ=[0,b(ao),[0,b("System"),0]],f0=b("Omega system time displaying flag"),f3=[0,b(ao),[0,b("Action"),0]],f4=b("Omega action display flag"),f7=[0,b(ao),[0,b("OldStyle"),0]],f8=b("Omega old style flag"),f$=[0,b("Stable"),[0,b(ao),0]],ga=b("Omega automatic reset of generated names"),go=[0,[0,b(a8),[0,b(aM),[0,b("OmegaLemmas"),0]]],0],gs=b(ao),gt=b(ao),gu=[0,[0,b(a8),[0,b(eL),0]],0],gv=b(ao),gw=[0,[0,b(a8),[0,b(eL),[0,b("BinInt"),0]]],0],gx=b(ao),lc=b("Coq_omega.Undecidable"),lM=[0,[0,[0,b(aM)],[0,[0,b(eF)],[0,[0,b(ez)],0]]],0],lN=b("$l"),lR=[0,b("plugins/omega/g_omega.ml4"),1,0],lO=[0,b(eF)],lP=[0,b(aM)],lQ=b(eA),lH=b(eK),lF=[0,b(dr),[0,b(ev),[0,b(eR),[0,b(dq),0]]]],lE=b(eK),lz=b(aM),lA=b(aM),lp=b(eR),lq=b(dq),lr=b(dr),ls=b(ev),lu=b("zify_positive"),lv=b("zify_nat"),lw=b("zify_op"),lx=b("zify_N"),lt=b("No Omega knowledge base for type "),lo=[0,b("PreOmega"),[0,b(aM),[0,b(a8),0]]],ln=b(eD),lC=b(aM),lK=b(eA),eX=s.Failure,fP=s.Reductionops,fU=s.Contradiction,fT=s.Equality,fS=s.Evarutil,fQ=s.Globnames,fR=s.Global,fO=s.Tacred,lk=s.Tacentries,ll=s.String,lm=s.Array,c2=[0,aO,function(f){var
j=f[1],s=f[2];function
ar(b,a){var
d=c(f[2],b,a),e=d||er(b,a);return e}function
A(b,a){return c(f[2],a,b)}function
Q(b,a){var
d=c(f[2],a,b),e=d||er(b,a);return e}var
h=f[3],l=f[4],i=f[5];function
u(b,a){return c(f[6],b,a)[1]}function
R(b,a){return c(f[6],b,a)[2]}var
d=f[8],e=f[9],x=c(h,e,e),ae=a(f[7],e);function
m(b){return c(f[2],b,d)?a(f[7],b):b}var
g=f[10],t=f[7];function
as(b,a){return b<a?1:0}function
at(b,a){return a<b?1:0}function
au(b,a){return b<=a?1:0}function
av(b,a){return a<=b?1:0}function
aw(b){a(n[29],b);a(n[32],0);return a(n[46],n[24])}function
F(b,a){a[1]=[0,b,a[1]];return 0}function
af(f,e){var
b=f,a=e;for(;;){if(c(j,a,d))return b;var
g=R(b,a),b=a,a=g;continue}}function
ag(b){return b?v(r[16],af,b[1],b[2]):a(n[2],eY)}function
G(b,a){var
g=Q(b,d),f=A(a,d);return 0===g?0===f?u(b,a):c(l,u(c(h,b,e),a),e):0===f?c(l,u(c(l,b,e),a),e):u(b,a)}var
k=[aX,eZ,aW(0)],ah=[aX,e0,aW(0)];function
H(h,f){var
b=f[2],k=f[1],l=0;function
o(i,b){var
k=c(s,b[1],d)?e1:i?e4:e5;a(n[27],k);var
f=m(b[1]);if(c(j,f,e)){var
l=a(h,b[2]);c(B[2],e2,l)}else{var
o=a(h,b[2]),p=a(g,f);v(B[2],e3,p,o)}return 1}v(r[16],o,l,k);if(A(b,d)){var
p=a(g,b);return c(B[2],e6,p)}var
i=c(s,b,d);if(i){var
q=a(g,m(b));return c(B[2],e7,q)}return i}function
X(a){function
b(b,a){if(15===a[0]){var
d=X(a[3][2]),f=X(a[2][2]);return c(h,c(h,c(h,b,e),f),d)}return c(h,b,e)}return v(r[16],b,d,a)}function
S(a){switch(a){case
0:return e8;case
1:return e9;default:return e_}}function
T(a){switch(a){case
0:return e$;case
1:return fa;default:return fb}}function
z(d,b){function
e(a){c(B[2],fc,a[1]);H(d,[0,a[3],a[4]]);var
b=S(a[2]);return c(B[2],fd,b)}c(r[11],e,b);return a(n[27],fe)}function
ax(d,b){function
e(b){H(d,b);return a(n[27],ff)}c(r[11],e,b);return a(n[27],fg)}function
I(d,p){var
e=p;for(;;){if(e){var
b=e[1];switch(b[0]){case
0:var
q=a(g,b[4]),r=a(g,b[3]);cC(B[2],fh,b[1][1],r,q);break;case
1:var
s=a(g,b[2]);v(B[2],fi,b[1][1],s);break;case
2:c(B[2],fj,b[1]);break;case
3:var
t=a(g,b[2]);v(B[2],fk,b[1][1],t);break;case
4:var
j=b[3],k=j[2],l=b[2],i=l[2],u=k[1],w=T(k[2]),x=a(g,j[1]),y=i[1],z=T(i[2]),A=a(g,l[1]),C=b[1],D=T(i[2]);lT(B[2],fl,D,C,A,z,y,x,w,u);break;case
5:var
f=b[1][1];c(B[2],fm,f[1]);H(d,[0,f[3],f[4]]);var
E=S(f[2]);a(n[27],E);a(n[27],fn);break;case
6:var
h=b[1];c(B[2],fo,h[1]);H(d,[0,h[3],h[4]]);var
F=S(h[2]);a(n[27],F);a(n[27],fp);break;case
9:v(B[2],fr,b[1][1],b[2][1]);break;case
10:v(B[2],fs,b[1][1],b[2][1]);break;case
11:cC(B[2],ft,b[2][1],b[3],b[1]);break;case
12:var
G=a(g,b[2]);v(B[2],fu,b[1],G);break;case
13:c(B[2],fv,b[1]);break;case
14:var
J=a(g,b[2]);v(B[2],fw,b[1],J);break;case
15:var
m=b[3],o=b[2];cC(B[2],fx,b[1][1],o[1],m[1]);I(d,o[2]);a(n[32],0);I(d,m[2]);a(n[32],0);break;case
16:var
K=a(g,b[2]);v(B[2],fy,b[1],K);break;default:v(B[2],fq,b[1],b[2])}var
e=e[2];continue}return a(n[46],n[24])}}function
ai(a){return c(B[4],fz,a)}var
Y=[0,0];function
U(a){Y[1]=0;return 0}function
J(a){return Y[1]}function
b(a){if(aO[1])I(ai,[0,a,0]);return F(a,Y)}function
ay(b,a){return a[2]-b[2]|0}var
aj=a(r[41],ay);function
az(b){var
c=b[2],d=c[2],e=[0,a(aj,c[1]),d];return[0,b[1],e]}function
C(k){function
e(l){var
b=l;for(;;){if(b){var
f=b[2],g=b[1],h=a(k,g[1]);if(c(j,h,d)){var
b=f;continue}var
m=e(f),i=[0,[0,h,g[2]],m]}else
var
i=b;return i}}return e}function
D(c,b){var
d=a(c,b[4]),e=b[3],f=a(C(c),e);return[0,b[1],b[2],f,d]}function
aA(b){return a(t,b)}function
K(a){return D(aA,a)}function
M(m,l){var
b=m,a=l;for(;;){if(b){if(a){var
g=a[2],f=a[1],i=b[2],e=b[1];if(e[2]===f[2]){var
k=c(h,e[1],f[1]);if(c(j,k,d)){var
b=i,a=g;continue}var
n=M(i,g);return[0,[0,k,e[2]],n]}return f[2]<e[2]?[0,e,M(i,a)]:[0,f,M(b,g)]}return b}return a}}function
Z(e,b,d){var
f=c(h,b[4],d[4]),g=M(b[3],d[3]),i=b[2];return[0,a(e,0),i,g,f]}var
_=[aX,fA,aW(0)];function
$(a){if(a){var
d=a[2],b=a[1];if(c(j,m(b[1]),e))return[0,b,d];var
f=$(d);return[0,f[1],[0,b,f[2]]]}throw _}var
V=[aX,fB,aW(0)];function
N(c,a){if(a){var
d=a[2],b=a[1];if(b[2]===c)return[0,b,d];var
e=N(c,d);return[0,e[1],[0,b,e[2]]]}throw V}function
p(f){var
g=f[4],p=f[3],n=f[2],o=f[1];if(0===p)switch(n){case
0:if(c(j,g,d))return 0;b([12,o,g]);throw k;case
1:if(Q(g,d))return 0;b([14,o,g]);throw k;default:if(cX(g,d))return 0;b([13,o]);throw k}function
w(a){return m(a[1])}var
h=ag(c(r[13],w,p));if(0===n)if(cX(R(g,h),d)){b([1,f,h]);throw k}if(2===n)if(cX(R(g,h),d)){b([2,f[1]]);return 0}if(cX(h,e)){var
s=G(g,h),x=c(l,g,c(i,s,h)),t=[0,o,n,a(C(function(a){return u(a,h)}),p),s];if(0===n)var
q=0;else
if(2===n)var
q=0;else
var
v=[0,f,t,h,x],q=1;if(!q)var
v=[3,f,h];b(v);return[0,t,0]}return[0,f,0]}function
E(o,g,f,d){var
h=g[1];try{var
k=N(g[2],d[3])[1],l=c(j,h,e)?a(t,k[1]):c(j,h,ae)?k[1]:a(n[2],fC),m=Z(o,d,D(function(a){return c(i,a,l)},f));b([4,m[1],[0,e,d],[0,l,f]]);return m}catch(a){a=w(a);if(a===V)return d;throw a}}function
aa(b,a){var
d=c(i,x,a);return c(l,b,c(i,a,G(c(h,c(i,x,b),a),d)))}function
ak(k,f,K,J){var
g=k[1],l=f[3],F=a(k[2],0);try{var
$=a(r[4],l),ab=a(r[3],l)[2],ac=[0,m(a(r[3],l)[1]),ab],ad=function(b,a){var
c=b[1];if(A(c,m(a[1]))){var
d=a[2];return[0,m(a[1]),d]}return[0,c,b[2]]},ae=v(r[16],ad,ac,$),s=ae}catch(b){b=w(b);if(b[1]===eX)if(cD(b[2],fD))var
B=0;else{z(k[3],[0,f,0]);var
s=a(n[2],fE),B=1}else
var
B=0;if(!B)throw b}var
d=c(h,s[1],e),L=aa(f[4],d),M=f[3],O=a(C(function(a){return aa(a,d)}),M),P=[0,[0,a(t,d),F],O],H=[0,a(g,0),0,P,L],Q=c(i,x,d),R=a(t,G(c(h,c(i,x,f[4]),d),Q)),S=f[3],T=a(C(function(b){var
e=c(i,x,d);return a(t,G(c(h,c(i,x,b),d),e))}),S);b([5,[0,H,[0,a(g,0),0,T,R],f,d,F]]);var
U=p(H),j=a(r[3],U),y=N(s[2],j[3])[1];function
V(a){return p(E(g,y,j,a))}var
W=c(q[17][o],V,K);function
X(a){return p(E(g,y,j,a))}var
Y=c(q[17][o],X,J),I=E(g,y,j,f),Z=D(function(a){return u(a,d)},I);b([3,I,d]);var
_=p(Z);return[0,a(r[3],_),W,Y]}function
al(d,i){var
b=i;for(;;){var
f=b[3],e=b[2],a=b[1],g=d[1];if(aO[1])z(d[3],[0,a,e]);try{var
h=$(a[3])[1],j=function(b,c,d){return function(a){return p(E(c,d,b,a))}}(a,g,h),k=c(q[17][o],j,f),l=function(b,c,d){return function(a){return p(E(c,d,b,a))}}(a,g,h),m=[0,c(q[17][o],l,e),k];return m}catch(c){c=w(c);if(c===_){var
b=ak(d,a,e,f);continue}throw c}}}function
ab(l,p){var
f=p;for(;;){var
g=f[2],h=f[1],n=function(a){if(a){var
d=a[2],b=a[1],g=b[3],h=function(a){return c(j,m(a[1]),e)};if(c(r[24],h,g))return[0,b,d];var
f=n(d);return[0,f[1],[0,b,f[2]]]}throw L};if(h){try{var
o=n(h),q=o[1],s=o[2],a=q,i=s}catch(b){b=w(b);if(b!==L)throw b;var
a=h[1],i=h[2]}if(0===a[3]){if(c(j,a[4],d)){b([2,a[1]]);var
f=[0,i,g];continue}b([12,a[1],a[4]]);throw k}var
f=al(l,[0,a,i,g]);continue}if(aO[1])z(l[3],g);return g}}function
O(n,e){function
x(a){var
b=a[3];if(b)if(c(s,b[1][1],d))return[0,K(a),0];return[0,a,1]}var
f=c(y[1],0,7);function
h(z){var
m=x(z),n=m[2],a=m[1],g=a[3];if(0===g){if(c(s,a[4],d)){b([14,a[1],a[4]]);throw k}return b([2,a[1]])}try{var
o=c(y[6],f,g),i=o[2],j=o[1];if(1===n)if(j)var
l=j[1],C=c(s,l[4],a[4])?(b([7,l[1],a[1]]),l):(b([7,a[1],l[1]]),a),e=[0,[0,C],i];else
var
e=[0,[0,a],i];else
if(i){var
h=i[1];if(A(h[4],a[4]))b([8,h[1],a[1]]);else
b([8,a[1],h[1]]);var
E=A(h[4],a[4])?h:a,e=[0,j,[0,E]]}else
var
e=[0,j,[0,a]];var
p=e[1];if(p){var
q=e[2];if(q){var
r=q[1],t=p[1];if(c(s,t[4],r[4])){b([9,t,K(r)]);throw k}var
u=1}else
var
u=0}else
var
u=0;c(y[9],f,g);var
D=v(y[5],f,g,e);return D}catch(b){b=w(b);if(b===L){var
B=1===n?[0,[0,a],0]:[0,0,[0,a]];return v(y[5],f,g,B)}throw b}}c(r[11],h,e);var
i=[0,0],g=[0,0];function
l(o,f){var
d=f[1];if(d){var
k=f[2];if(k){var
l=k[1],e=d[1];if(c(j,e[4],l[4])){var
m=a(n,0);b([11,m,e,l[1]]);return F([0,m,0,e[3],e[4]],i)}}}var
h=f[2];if(d)F(d[1],g);return h?F(K(h[1]),g):h}c(y[11],l,f);return[0,i[1],g[1]]}var
W=[aX,fF,aW(0)];function
am(g){var
b=c(y[1],0,7);function
h(e,d){try{var
a=c(y[6],b,e),g=m(d);a[1]=c(n[5],a[1],g);var
h=0;return h}catch(a){a=w(a);if(a===L){var
f=[0,m(d)];return v(y[5],b,e,f)}throw a}}function
i(a){var
b=a[3];function
d(a){return h(a[2],a[1])}return c(r[11],d,b)}c(r[11],i,g);var
e=[0,d],a=[0,-1],f=[0,0];function
j(h,g){var
b=g[1];f[1]++;var
i=c(s,b,e[1]),d=i||(-1===a[1]?1:0),j=d?(a[1]=h,e[1]=b,0):d;return j}c(y[11],j,b);if(f[1]<1)throw W;return a[1]}function
an(i,b){function
c(c,b){var
e=c[3],f=c[2],g=c[1];try{var
h=N(i,b[3])[1],j=Q(h[1],d)?[0,g,[0,[0,h[1],b],f],e]:[0,g,f,[0,[0,a(t,h[1]),b],e]];return j}catch(a){a=w(a);if(a===V)return[0,[0,b,g],f,e];throw a}}return v(r[16],c,fG,b)}function
ao(u,t,d,g){var
f=0;function
h(h,d){var
j=d[2],f=d[1];function
k(m,k){var
o=k[2],g=k[1],v=D(function(a){return c(i,a,f)},o),q=Z(u,D(function(a){return c(i,a,g)},j),v);b([4,q[1],[0,g,j],[0,f,o]]);var
h=p(q);if(h){var
d=h[1];if(h[2])return a(n[2],fH);if(t){var
w=c(l,g,e),r=c(i,c(l,f,e),w);b([16,d[1],r]);var
x=c(l,d[4],r),s=[0,d[1],1,d[3],x]}else
var
s=d;return[0,s,m]}return m}return v(r[16],k,h,g)}return v(r[16],h,f,d)}function
ac(d,f,b){var
a=an(am(b),b),g=ao(d[1],f,a[2],a[3]),e=c(n[22],a[1],g);if(aO[1])z(d[3],e);return e}function
ap(d,l,e){var
f=d[1],m=d[3];function
s(a){return 2===a[2]?1:0}if(c(r[24],s,e))a(n[2],fI);U(0);function
t(a){return b([6,a])}c(r[11],t,e);var
u=c(q[17][o],p,e);function
v(a){return 0===a[2]?1:0}var
g=c(r[32],v,u),h=O(f,g[2]),x=h[2],y=[0,c(n[22],g[1],h[1]),x];function
i(a){return j(ab(d,a))}function
j(d){var
a=O(f,d),b=a[2],c=a[1];return 0===c?b:i([0,c,b])}function
k(b){try{var
a=k(j(ac(d,l,b)));return a}catch(a){a=w(a);if(a===W){if(aO[1])z(m,b);return b}throw a}}return k(i(y))}function
P(k,j,i){var
d=k,f=j,e=i;for(;;){if(e){var
g=e[2],b=e[1];switch(b[0]){case
1:var
d=[0,b[1][1],d],f=[0,b,f],e=g;continue;case
4:if(c(aN[4][1],b[1],d)){var
d=[0,b[2][2][1],[0,b[3][2][1],d]],f=[0,b,f],e=g;continue}var
e=g;continue;case
5:var
h=b[1];if(c(aN[4][1],h[1][1],d)){var
d=[0,h[3][1],d],f=[0,b,f],e=g;continue}var
e=g;continue;case
11:if(c(aN[4][1],b[1],d)){var
d=[0,b[2][1],[0,b[3],d]],f=[0,b,f],e=g;continue}var
e=g;continue;case
15:return a(n[2],fJ);case
16:if(c(aN[4][1],b[1],d)){var
f=[0,b,f],e=g;continue}var
e=g;continue;case
9:case
10:var
d=[0,b[1][1],[0,b[2][1],d]],f=[0,b,f],e=g;continue;case
2:case
7:case
8:var
e=g;continue;case
0:case
3:case
6:if(c(aN[4][1],b[1][1],d)){var
f=[0,b,f],e=g;continue}var
e=g;continue;default:var
d=[0,b[1],d],f=[0,b,f],e=g;continue}}return[0,d,f]}}function
aB(b,c){try{ap(b[1],0,c);var
e=a(n[2],fK);return e}catch(a){a=w(a);if(a===k){var
d=P(0,0,J(0))[2];return I(b[3],d)}throw a}}function
aq(a){var
g=a[2];function
h(a){return 2===a[2]?1:0}var
i=c(r[32],h,g);function
e(a){var
b=a[3];if(b)if(c(s,b[1][1],d))return[0,K(a),0];return[0,a,1]}var
f=c(y[1],0,7),j=i[1];function
l(a){var
b=e(a),c=b[1];return v(y[5],f,[0,c[3],c[4]],[0,b[2],a])}c(r[11],l,j);var
m=a[1];function
n(a){if(0===a[2]){var
d=e(a),g=d[1];try{var
h=c(y[6],f,[0,g[3],g[4]]);b([10,a,h[2],d[2]===h[1]?1:0]);throw k}catch(a){a=w(a);if(a===L)return 0;throw a}}throw[0,dt,fL]}return c(r[11],n,m)}var
ad=[aX,fM,aW(0)];return[0,j,s,ar,A,Q,h,l,i,u,R,d,e,x,ae,m,g,t,as,at,au,av,aw,F,af,ag,G,k,ah,H,X,S,T,z,ax,g,I,ai,b,J,U,aj,az,C,D,K,M,Z,_,$,V,N,p,E,aa,ak,al,ab,O,W,am,an,ao,ac,ap,P,aB,aq,ad,function(d,h){var
f=d[1],E=d[3];U(0);function
F(a){return b([6,a])}c(r[11],F,h);function
i(a){aq(a);return j(ab(d,a))}function
j(h){function
j(a){return 2===a[2]?1:0}var
a=c(r[32],j,h),b=a[1],d=O(f,a[2]),e=d[2],g=d[1];return 0===g?c(n[22],b,e):i([0,g,c(n[22],b,e)])}function
m(b){try{var
a=m(j(ac(d,0,b)));return a}catch(a){a=w(a);if(a===W){if(aO[1])z(E,b);return b}throw a}}function
G(k){var
d=k;for(;;){var
g=d[1];if(g){var
j=d[2],b=g[1],h=a(f,0),i=a(f,0),m=c(l,b[4],e),o=[0,h,1,b[3],m],p=c(l,a(t,b[4]),e),q=b[3],s=[0,i,1,a(C(t),q),p],u=function(b,c,d){return function(a){return[0,[0,[0,b[1],c,0],a[1]],[0,d,a[2]]]}}(b,i,s),v=c(r[13],u,j),w=function(b,c,d){return function(a){return[0,[0,[0,b[1],c,1],a[1]],[0,d,a[2]]]}}(b,h,o),x=c(r[13],w,j),y=c(n[22],x,v),d=[0,g[2],y,[0,[0,b[1],[0,b,h,i]],d[3]]];continue}return[0,d[2],d[3]]}}try{var
H=c(q[17][o],p,h),I=function(a){return 0===a[2]?1:0},s=c(r[32],I,H),K=s[2],M=function(a){return 2===a[2]?1:0},u=c(r[32],M,K),x=O(f,u[2]),N=c(n[22],x[2],u[1]),Q=i([0,c(n[22],s[1],x[1]),N]),R=function(a){return 2===a[2]?1:0},A=c(r[32],R,Q),S=J(0),B=G([0,A[1],[0,[0,0,A[2]],0],0]),T=B[2],V=B[1],X=function(a){var
b=a[1];U(0);try{m(a[2]);throw ah}catch(a){a=w(a);if(a===k){var
d=P(0,0,J(0)),e=d[1],f=function(a){return c(aN[4][1],a[2],e)},g=c(r[32],f,b)[1],h=function(a){return a[1]},i=c(r[13],h,g);return[0,i,e,b,d[2]]}throw a}},Y=c(r[13],X,V),Z=function(e){var
b=c(y[1],0,7),a=[0,-1],d=[0,0];function
f(d){try{c(y[6],b,d)[1]++;var
a=0;return a}catch(a){a=w(a);if(a===L)return v(y[5],b,d,[0,1]);throw a}}function
g(a){var
b=a[1];if(b)return c(r[11],f,b);throw[0,ad,a[4],a[2]]}c(r[11],g,e);function
h(e,b){var
c=d[1]<b[1]?1:0,f=c?(a[1]=e,d[1]=b[1],0):c;return f}c(y[11],h,b);return a[1]},g=function(e){try{var
d=Z(e),l=function(e){var
b=e[3];for(;;){if(b){var
c=b[1];if(d===c[1])return c[3];var
b=b[2];continue}return a(n[2],fN)}},f=c(r[32],l,e),h=function(a){var
b=a[4],c=a[3],e=a[2],f=a[1];function
g(b,a){return b===a?1:0}return[0,v(q[17][87],g,d,f),e,c,b]},m=c(r[13],h,f[1]),o=c(r[13],h,f[2]),i=g(m),j=g(o),b=c(aN[4][2],d,T),k=b[1],p=j[2],s=i[2],t=function(b,a){return b===a?1:0},u=v(q[17][53],t,s,p),x=[0,[0,[15,k,[0,b[2],i[1]],[0,b[3],j[1]]],0],[0,k[1],u]];return x}catch(a){a=w(a);if(a[1]===ad)return[0,a[2],a[3]];throw a}},D=g(Y),_=P(D[2],D[1],S)[2];return _}catch(a){a=w(a);if(a===k)return P(0,0,J(0))[2];throw a}}]}];cY(407,c2,"Omega_plugin.Omega");var
m=a(c2[2],[0,I[17],I[16],I[12],I[13],I[14],I[15],I[22],I[5],I[6],I[2]]);function
aQ(b){var
d=[0,function(d){var
e=c(D[49][2],b,d);return a(i[99],e)}];return a(p[62][9],d)}function
a$(d,b){var
e=c(D[14],b,d),f=a(i[85],e);return c(p[66][8],f,b)}var
cG=[0,0],ba=[0,0],bb=[0,0],cH=[0,1];function
fV(d,c,b){return a(c,b)}var
fW=[0,0];function
fX(a,b){return a[1]}function
bc(b,a){b[1]=a;return 0}function
fY(a){return bc(cG,a)}var
f1=[0,0,0,f0,fZ,function(a){return cG[1]},fY];a(cF[4],f1);function
f2(a){return bc(ba,a)}var
f5=[0,0,0,f4,f3,function(a){return ba[1]},f2];a(cF[4],f5);function
f6(a){return bc(bb,a)}var
f9=[0,0,0,f8,f7,function(a){return bb[1]},f6];a(cF[4],f9);function
f_(a){return bc(cH,a)}var
gb=[0,1,1,ga,f$,function(a){return cH[1]},f_];a(cF[4],gb);var
c8=[0,0];function
du(d){var
a=c8[1];function
b(a){a[1][1]=a[2];return 0}return c(q[17][11],b,a)}function
aR(a){var
b=[0,a];c8[1]=[0,[0,b,a],c8[1]];return b}var
dv=aR(0);function
ah(e){var
b=a(n[20],dv[1]),d=c(n[16],gc,b);dv[1]++;return a(H[1][5],d)}var
dw=aR(0);function
gd(b){var
a=c(a_[3],ge,[0,dw[1]]);dw[1]++;return a}var
dx=aR(0);function
dy(e){var
b=a(n[20],dx[1]),d=c(n[16],gf,b);dx[1]++;return a(H[1][5],d)}var
dz=aR(0);function
bd(a){dz[1]++;return dz[1]}var
dA=aR(1e3);function
c9(a){dA[1]++;return dA[1]}var
dB=aR(0);function
dC(a){dB[1]++;return c(a_[3],gg,[0,dB[1]])}function
aY(a){return c(B[4],gh,a)}var
c_=[0,0],cI=c(y[1],0,7),c$=c(y[1],0,7);function
dD(b){c_[1]=0;return a(y[2],cI)}function
da(b){try{var
a=c(y[6],c$,b);return a}catch(a){a=w(a);if(a===L){var
d=dC(0);v(y[5],cI,d,b);v(y[5],c$,b,d);return d}throw a}}function
cJ(b){try{var
a=c(y[6],cI,b);return a}catch(a){a=w(a);if(a===L){var
d=c_[1];v(y[5],cI,b,d);v(y[5],c$,d,b);c_[1]++;return d}throw a}}var
T=j[7];function
dE(a){return cC(i[110],0,gi,1,[0,[0,a,0]])}function
x(b){return a(i[148],b)}function
gj(b){return a(i[99],b)}function
db(b){return a(D[45],b)}function
Q(b){var
c=h(b),e=0,j=f===c?b[1]:d===c?a(g[2],b):b;return a(i[67],[0,[0,0,j],e])}function
dF(c){return function(d){var
a=d;for(;;){if(a){var
b=a[1];if(c===b[2])return b[1];var
a=a[2];continue}throw L}}}var
be=[0,0];function
dG(a){be[1]=0;return 0}function
M(b){try{var
c=be[1],d=a(dF(b),c);return d}catch(b){b=w(b);if(b===L)return a(n[2],gk);throw b}}function
gl(b){try{var
d=c(H[1][12][3],b,be[1]);return d}catch(b){b=w(b);if(b===L)return a(n[2],gm);throw b}}function
aG(b,a){be[1]=[0,[0,b,a],be[1]];return 0}var
bf=[0,0];function
dH(a){return bf[1]}function
dc(a){bf[1]=0;return 0}function
dI(b){try{var
c=v(q[17][119],e[139],b,bf[1]);return c}catch(b){b=w(b);if(b===L)return a(n[2],gn);throw b}}function
dJ(d,c,b,a){bf[1]=[0,[0,d,[0,c,b,a]],bf[1]];return 0}function
dK(b){var
a=cH[1];return a?(du(0),dD(0),dG(0),dc(0)):a}var
gp=c(q[18],C[9],go),gq=c(q[18],[0,dL,0],gp),gr=c(q[18],C[8],gq),dM=c(q[18],C[10],gr),aa=c(C[6],gs,C[10]),k=c(C[6],gt,dM),af=c(C[6],gv,gu),S=c(C[6],gx,gw),ap=[d,function(b){return a(k,gy)}],aq=[d,function(b){return a(k,gz)}],ar=[d,function(b){return a(k,gA)}],U=[d,function(b){return a(k,gB)}],V=[d,function(b){return a(k,gC)}],W=[d,function(b){return a(k,gD)}],z=[d,function(b){return a(k,gE)}],as=[d,function(b){return a(k,gF)}],at=[d,function(b){return a(k,gG)}],A=[d,function(b){return a(S,gH)}],N=[d,function(b){return a(S,gI)}],F=[d,function(b){return a(S,gJ)}],ai=[d,function(b){return a(S,gK)}],aj=[d,function(b){return a(S,gL)}],aZ=[d,function(b){return a(S,gM)}],au=[d,function(b){return a(S,gN)}],bg=[d,function(b){return a(af,gO)}],bh=[d,function(b){return a(af,gP)}],bi=[d,function(b){return a(af,gQ)}],bj=[d,function(b){return a(k,gR)}],bk=[d,function(b){return a(af,gS)}],bl=[d,function(b){return a(af,gT)}],bm=[d,function(b){return a(af,gU)}],bn=[d,function(b){return a(af,gV)}],bo=[d,function(b){return a(af,gW)}],bp=[d,function(b){return a(af,gX)}],bq=[d,function(b){return a(af,gY)}],G=[d,function(b){return a(k,gZ)}],br=[d,function(b){return a(k,g0)}],bs=[d,function(b){return a(k,g1)}],av=[d,function(b){return a(k,g2)}],aw=[d,function(b){return a(k,g3)}],bt=[d,function(b){return a(k,g4)}],bu=[d,function(b){return a(k,g5)}],bv=[d,function(b){return a(k,g6)}],bw=[d,function(b){return a(k,g7)}],bx=[d,function(b){return a(k,g8)}],by=[d,function(b){return a(k,g9)}],bz=[d,function(b){return a(k,g_)}],bA=[d,function(b){return a(k,g$)}],bB=[d,function(b){return a(k,ha)}],bC=[d,function(b){return a(k,hb)}],bD=[d,function(b){return a(k,hc)}],bE=[d,function(b){return a(k,hd)}],X=[d,function(b){return a(k,he)}],O=[d,function(b){return a(k,hf)}],bF=[d,function(b){return a(k,hg)}],bG=[d,function(b){return a(k,hh)}],bH=[d,function(b){return a(k,hi)}],bI=[d,function(b){return a(k,hj)}],bJ=[d,function(b){return a(k,hk)}],bK=[d,function(b){return a(k,hl)}],bL=[d,function(b){return a(k,hm)}],bM=[d,function(b){return a(k,hn)}],bN=[d,function(b){return a(k,ho)}],bO=[d,function(b){return a(k,hp)}],bP=[d,function(b){return a(k,hq)}],bQ=[d,function(b){return a(k,hr)}],bR=[d,function(b){return a(k,hs)}],Y=[d,function(b){return a(k,ht)}],bS=[d,function(b){return a(k,hu)}],bT=[d,function(b){return a(k,hv)}],bU=[d,function(b){return a(k,hw)}],bV=[d,function(b){return a(k,hx)}],bW=[d,function(b){return a(k,hy)}],Z=[d,function(b){return a(k,hz)}],bX=[d,function(b){return a(k,hA)}],bY=[d,function(b){return a(k,hB)}],bZ=[d,function(b){return a(k,hC)}],b0=[d,function(b){return a(k,hD)}],b1=[d,function(b){return a(k,hE)}],b2=[d,function(b){return a(k,hF)}],b3=[d,function(b){return a(k,hG)}],b4=[d,function(b){return a(k,hH)}],b5=[d,function(b){return a(k,hI)}],b6=[d,function(b){return a(S,hJ)}],dN=[d,function(b){return a(k,hK)}],dO=[d,function(b){return a(S,hL)}],dP=[d,function(b){return a(S,hM)}],dQ=[d,function(b){return a(k,hN)}],dR=[d,function(b){return a(k,hO)}],b7=[d,function(b){return a(k,hP)}],dS=[d,function(b){return a(k,hQ)}],dT=[d,function(b){return a(k,hR)}],dU=[d,function(b){return a(k,hS)}],dV=[d,function(b){return a(k,hT)}],dW=[d,function(b){return a(k,hU)}],ax=[d,function(b){return a(k,hV)}],ay=[d,function(b){return a(k,hW)}],ak=[d,function(b){return a(S,hX)}],al=[d,function(b){return a(S,hY)}],a0=[d,function(b){return a(S,hZ)}],a1=[d,function(b){return a(S,h0)}],az=[d,function(b){return a(aa,h1)}],b8=[d,function(b){return a(aa,h2)}],b9=[d,function(b){return a(aa,h3)}],aA=[d,function(b){return a(aa,h4)}],aB=[d,function(b){return a(aa,h5)}],b_=[d,function(b){return a(aa,h6)}],b$=[d,function(b){return a(aa,h7)}],ca=[d,function(b){return a(aa,h8)}],_=[d,function(b){return a(aa,h9)}],aC=[d,function(b){return a(aa,h_)}],aD=[d,function(b){return a(aa,h$)}],cb=[d,function(b){return a(k,ia)}],cc=[d,function(b){return a(k,ib)}],cd=[d,function(b){return a(k,ic)}],dX=[d,function(b){return a(k,id)}],dY=[d,function(b){return a(k,ie)}],dZ=[d,function(b){return a(k,ig)}],d0=[d,function(b){return a(k,ih)}],ce=[d,function(b){return a(k,ii)}],d1=[d,function(b){return a(k,ij)}],d2=[d,function(b){return a(k,ik)}],d3=[d,function(b){return a(k,il)}],d4=[d,function(b){return a(k,im)}],cf=[d,function(b){return a(k,io)}],cg=[d,function(b){return a(k,ip)}],ch=[d,function(b){return a(k,iq)}],ci=[d,function(b){return a(k,ir)}],cj=[d,function(b){return a(k,is)}],ck=[d,function(b){return a(k,it)}],cl=[d,function(b){return a(k,iu)}],cm=[d,function(b){return a(k,iv)}],cn=[d,function(b){return a(k,iw)}],co=[d,function(b){return a(k,ix)}],cp=[d,function(b){return a(k,iy)}],cq=[d,function(b){return a(k,iz)}],cr=[d,function(b){return a(k,iA)}],cs=[d,function(b){return a(k,iB)}],ct=[d,function(b){return a(k,iC)}],cu=[d,function(b){return a(k,iD)}];function
aE(l,b){var
i=h(b),m=f===i?b[1]:d===i?a(g[2],b):b,j=a(e[a9],m);if(10===j[0]){var
k=j[1][1],q=a(fR[2],0);if(c(fO[2],q,[1,k]))return[1,k]}var
o=c(n[16],l,iE),p=a(c4[1],o);return v(ae[3],0,iF,p)}var
d5=[d,function(a){return aE(iG,aj)}],d6=[d,function(a){return aE(iH,aZ)}],d7=[d,function(a){return aE(iI,ai)}],dd=[d,function(a){return aE(iJ,ak)}],aH=[d,function(a){return aE(iK,al)}],iM=[d,function(a){return aE(iL,a0)}],iO=[d,function(a){return aE(iN,a1)}],cK=[d,function(b){return aE(iP,[d,function(b){return a(C[53],0)}])}];function
iQ(b){var
c=a(H[1][5],b);return a(e[o],c)}function
ag(i,c){var
b=h(A),j=[0,i,c],k=f===b?A[1]:d===b?a(g[2],A):A;return a(e[l],[0,k,j])}function
cL(i,c){var
b=h(N),j=[0,i,c],k=f===b?N[1]:d===b?a(g[2],N):N;return a(e[l],[0,k,j])}function
d8(i,c){var
b=h(ai),j=[0,i,c],k=f===b?ai[1]:d===b?a(g[2],ai):ai;return a(e[l],[0,k,j])}function
cv(i,c){var
b=h(z),j=f===b?z[1]:d===b?a(g[2],z):z,k=a(C[41],0),m=[0,a(c3[48],k),[0,j,i,c]];return a(e[l],m)}function
iR(i,c){var
b=h(ak),j=[0,i,c],k=f===b?ak[1]:d===b?a(g[2],ak):ak;return a(e[l],[0,k,j])}function
aI(i,c){var
b=h(al),j=[0,i,c],k=f===b?al[1]:d===b?a(g[2],al):al;return a(e[l],[0,k,j])}function
aJ(c){var
b=h(F),i=[0,c],j=f===b?F[1]:d===b?a(g[2],F):F;return a(e[l],[0,j,i])}function
cw(c,b){var
d=[0,a(C[54],0),[0,c,b]];return a(e[l],d)}function
cM(c,b){var
d=[0,a(C[59],0),[0,c,b]];return a(e[l],d)}function
aF(b){var
c=[0,a(C[53],0),[0,b]];return a(e[l],c)}function
iS(i,c){var
b=h(as),j=f===b?as[1]:d===b?a(g[2],as):as,k=a(C[41],0),m=[0,a(c3[48],k),[0,j,i,c]];return a(e[l],m)}function
aK(c){var
b=h(au),i=[0,c],j=f===b?au[1]:d===b?a(g[2],au):au;return a(e[l],[0,j,i])}function
J(b){function
i(b){if(c(m[1],b,m[12])){var
j=h(ap);return f===j?ap[1]:d===j?a(g[2],ap):ap}var
p=[0,i(c(m[9],b,m[13]))],q=m[11],r=c(m[10],b,m[13]);if(c(m[1],r,q))var
k=h(aq),s=f===k?aq[1]:d===k?a(g[2],aq):aq,n=s;else
var
o=h(ar),t=f===o?ar[1]:d===o?a(g[2],ar):ar,n=t;return a(e[l],[0,n,p])}if(c(m[1],b,m[11])){var
j=h(U);return f===j?U[1]:d===j?a(g[2],U):U}var
p=[0,i(a(m[15],b))];if(c(m[4],b,m[11]))var
k=h(V),q=f===k?V[1]:d===k?a(g[2],V):V,n=q;else
var
o=h(W),r=f===o?W[1]:d===o?a(g[2],W):W,n=r;return a(e[l],[0,n,p])}function
aS(z){var
k=a(e[39],z),b=k[2],i=k[1],j=a(e[a9],i);if(b){var
l=b[2];if(l){var
m=l[2];if(m){if(!m[2]){var
E=a(C[41],0);if(c(fQ[11],E,i))return[1,16,b]}}else{var
n=h(ax),F=f===n?ax[1]:d===n?a(g[2],ax):ax;if(c(e[u],i,F))return[1,17,b];var
o=h(ay),G=f===o?ay[1]:d===o?a(g[2],ay):ay;if(c(e[u],i,G))return[1,18,b];var
p=h(ak),H=f===p?ak[1]:d===p?a(g[2],ak):ak;if(c(e[u],i,H))return[1,19,b];var
q=h(a1),I=f===q?a1[1]:d===q?a(g[2],a1):a1;if(c(e[u],i,I))return[1,20,b];var
r=h(a0),J=f===r?a0[1]:d===r?a(g[2],a0):a0;if(c(e[u],i,J))return[1,21,b];var
s=h(al),K=f===s?al[1]:d===s?a(g[2],al):al;if(c(e[u],i,K))return[1,22,b];var
L=a(C[54],0);if(c(e[u],i,L))return[1,25,b];var
M=a(C[59],0);if(c(e[u],i,M))return[1,26,b];var
t=h(cu),N=f===t?cu[1]:d===t?a(g[2],cu):cu;if(c(e[u],i,N))return[1,30,b];var
v=h(az),O=f===v?az[1]:d===v?a(g[2],az):az;if(c(e[u],i,O))return[1,31,b];var
w=h(b8),P=f===w?b8[1]:d===w?a(g[2],b8):b8;if(c(e[u],i,P))return[1,32,b];var
x=h(b9),Q=f===x?b9[1]:d===x?a(g[2],b9):b9;if(c(e[u],i,Q))return[1,33,b];var
y=h(aA),R=f===y?aA[1]:d===y?a(g[2],aA):aA;if(c(e[u],i,R))return[1,34,b]}}else{var
S=a(C[53],0);if(c(e[u],i,S))return[1,29,b]}}else{var
T=a(C[50],0);if(c(e[u],i,T))return[1,27,b];var
U=a(C[51],0);if(c(e[u],i,U))return[1,28,b]}switch(j[0]){case
1:if(!b)return[0,j[1]];break;case
6:if(j[1]){if(!b)return a(ae[6],iT)}else
if(!b)return[2,j[2],j[3]];break;case
10:var
A=a(c5[37],[1,j[1][1]]);return[1,[0,a(c6[22],A)],b];case
11:var
B=a(c5[37],[2,j[1][1]]);return[1,[0,a(c6[22],B)],b];case
12:var
D=a(c5[37],[3,j[1][1]]);return[1,[0,a(c6[22],D)],b]}return 0}function
cx(m){var
j=a(e[39],m),b=j[2],i=j[1];a(e[a9],i);if(!b){var
k=h(z),n=f===k?z[1]:d===k?a(g[2],z):z;if(c(e[u],i,n))return[1,23,b];var
l=h(_),o=f===l?_[1]:d===l?a(g[2],_):_;if(c(e[u],i,o))return[1,24,b]}return 0}function
cy(E){var
j=a(e[39],E),b=j[2],i=j[1],k=a(e[a9],i);if(b){var
l=b[2];if(l){if(!l[2]){var
m=h(A),G=f===m?A[1]:d===m?a(g[2],A):A;if(c(e[u],i,G))return[1,0,b];var
n=h(N),H=f===n?N[1]:d===n?a(g[2],N):N;if(c(e[u],i,H))return[1,1,b];var
o=h(ai),I=f===o?ai[1]:d===o?a(g[2],ai):ai;if(c(e[u],i,I))return[1,2,b];var
p=h(b_),J=f===p?b_[1]:d===p?a(g[2],b_):b_;if(c(e[u],i,J))return[1,6,b];var
q=h(b$),K=f===q?b$[1]:d===q?a(g[2],b$):b$;if(c(e[u],i,K))return[1,7,b];var
r=h(aB),L=f===r?aB[1]:d===r?a(g[2],aB):aB;if(c(e[u],i,L))return[1,8,b]}}else{var
s=h(aj),M=f===s?aj[1]:d===s?a(g[2],aj):aj;if(c(e[u],i,M))return[1,3,b];var
t=h(aZ),O=f===t?aZ[1]:d===t?a(g[2],aZ):aZ;if(c(e[u],i,O))return[1,5,b];var
v=h(F),P=f===v?F[1]:d===v?a(g[2],F):F;if(c(e[u],i,P))return[1,4,b];var
w=h(ca),Q=f===w?ca[1]:d===w?a(g[2],ca):ca;if(c(e[u],i,Q))return[1,9,b];var
x=h(aC),R=f===x?aC[1]:d===x?a(g[2],aC):aC;if(c(e[u],i,R))return[1,10,b];var
y=h(V),S=f===y?V[1]:d===y?a(g[2],V):V;if(c(e[u],i,S))return[1,13,b];var
z=h(W),T=f===z?W[1]:d===z?a(g[2],W):W;if(c(e[u],i,T))return[1,12,b];var
B=h(au),X=f===B?au[1]:d===B?a(g[2],au):au;if(c(e[u],i,X))return[1,15,b]}}else{var
C=h(aD),Y=f===C?aD[1]:d===C?a(g[2],aD):aD;if(c(e[u],i,Y))return[1,11,b];var
D=h(U),Z=f===D?U[1]:d===D?a(g[2],U):U;if(c(e[u],i,Z))return[1,14,b];if(1===k[0])return[0,k[1]]}return 0}function
d9(r){function
b(r){var
k=a(e[39],r),i=k[2],j=k[1];if(i){if(!i[2]){var
l=i[1],o=h(ar),s=f===o?ar[1]:d===o?a(g[2],ar):ar;if(c(e[u],j,s)){var
t=b(l),v=c(m[8],m[13],t);return c(m[6],m[12],v)}var
p=h(aq),w=f===p?aq[1]:d===p?a(g[2],aq):aq;if(c(e[u],j,w)){var
x=b(l);return c(m[8],m[13],x)}}}else{var
q=h(ap),y=f===q?ap[1]:d===q?a(g[2],ap):ap;if(c(e[u],j,y))return m[12]}return a(n[2],iU)}var
k=a(e[39],r),i=k[2],j=k[1];if(i){if(!i[2]){var
l=i[1],o=h(V),s=f===o?V[1]:d===o?a(g[2],V):V;if(c(e[u],j,s))return b(l);var
p=h(W),t=f===p?W[1]:d===p?a(g[2],W):W;if(c(e[u],j,t)){var
v=b(l);return a(m[17],v)}}}else{var
q=h(U),w=f===q?U[1]:d===q?a(g[2],U):U;if(c(e[u],j,w))return m[11]}return a(n[2],iV)}function
de(C,f,b){function
d(f,h,v){var
b=a(e[a9],v);if(5===b[0]){var
W=b[3],X=b[2],Y=[0,d(f,h,b[1]),X,W];return a(e[120],Y)}if(h){var
i=h[1];if(typeof
i==="number")switch(i){case
0:var
k=h[2];switch(b[0]){case
6:var
G=d(f+1|0,k,b[3]);return a(e[eT],[0,b[1],b[2],G]);case
7:var
H=d(f+1|0,k,b[3]);return a(e[a6],[0,b[1],b[2],H]);case
8:var
I=d(f+1|0,k,b[4]);return a(e[eH],[0,b[1],b[2],b[3],I]);case
14:var
g=0;break;default:var
g=1}break;case
1:var
p=h[2];switch(b[0]){case
6:var
K=b[3],L=d(f,p,b[2]);return a(e[eT],[0,b[1],L,K]);case
7:var
M=b[3],N=d(f,p,b[2]);return a(e[a6],[0,b[1],N,M]);case
8:var
O=b[4],P=d(f,p,b[3]);return a(e[eH],[0,b[1],b[2],P,O]);case
14:var
g=0;break;default:var
g=1}break;case
2:switch(b[0]){case
9:var
Q=b[2],R=[0,d(f,h[2],b[1]),Q];return a(e[61],R);case
14:var
g=0;break;default:var
g=1}break;default:switch(b[0]){case
9:var
r=a(q[19][8],b[2]),S=an(r,0)[1];r[1]=d(f,h[2],S);return a(e[l],[0,b[1],r]);case
14:var
g=0;break;default:var
g=1}}else
if(0===i[0]){var
z=i[1];switch(b[0]){case
9:var
s=a(q[19][8],b[2]),A=z-1|0,T=an(s,A)[A+1],B=z-1|0,U=d(f,h[2],T);an(s,B)[B+1]=U;return a(e[l],[0,b[1],s]);case
14:var
g=0;break;default:var
g=1}}else{var
t=i[1];switch(b[0]){case
13:var
u=a(q[19][8],b[4]),V=an(u,t)[t+1];u[t+1]=d(f,h[2],V);return a(e[133],[0,b[1],b[2],b[3],u]);case
14:var
g=0;break;default:var
g=1}}if(g){var
D=a(q[17][1],h),E=a(n[20],D),F=c(n[16],iW,E);return a(n[2],F)}var
w=b[1],m=w[2],o=m[3],x=w[1],j=x[2],y=a(q[19][8],o),J=d(f+(o.length-1)|0,h,an(o,j)[j+1]);an(y,j)[j+1]=J;return a(e[134],[0,x,[0,m[1],m[2],y]])}return c(C,f,v)}return d(1,f,b)}function
d_(r,p){var
b=r,f=p;for(;;){var
d=a(e[a9],f);if(5===d[0]){var
f=d[1];continue}if(b){var
h=b[1];if(typeof
h==="number")switch(h){case
0:var
i=b[2];switch(d[0]){case
8:var
b=i,f=d[4];continue;case
14:var
g=0;break;case
6:case
7:var
b=i,f=d[3];continue;default:var
g=1}break;case
1:var
l=b[2];switch(d[0]){case
8:var
b=l,f=d[3];continue;case
14:var
g=0;break;case
6:case
7:var
b=l,f=d[2];continue;default:var
g=1}break;case
2:switch(d[0]){case
9:var
b=b[2],f=d[1];continue;case
14:var
g=0;break;default:var
g=1}break;default:switch(d[0]){case
9:var
v=an(d[2],0)[1],b=b[2],f=v;continue;case
14:var
g=0;break;default:var
g=1}}else
if(0===h[0])switch(d[0]){case
9:var
m=h[1]-1|0,w=an(d[2],m)[m+1],b=b[2],f=w;continue;case
14:var
g=0;break;default:var
g=1}else
switch(d[0]){case
13:var
o=h[1],x=an(d[4],o)[o+1],b=b[2],f=x;continue;case
14:var
g=0;break;default:var
g=1}if(g){var
s=a(q[17][1],b),t=a(n[20],s),u=c(n[16],iX,t);return a(n[2],u)}var
j=d[1],k=j[1][2],f=an(j[2][3],k)[k+1];continue}return f}}function
df(f,d,c){var
b=[0,a(e[a7],0)],g=de(function(d,c){b[1]=c;return a(e[a7],d)},d,c),h=b[1],i=[0,[0,a(H[1][5],iY)],f,g];return[0,a(e[a6],i),h]}function
K(h){return function(b){var
d=a(D[7],b),e=a(q[17][6],h),f=de(function(d,a){return c(D[29],b,a)},e,d),g=c(i[5],f,2);return c(p[66][8],g,b)}}function
aL(c){var
b=c;for(;;)switch(b[0]){case
0:a(n[27],iZ);aL(b[1]);a(n[27],i0);aL(b[2]);return a(n[27],i1);case
1:a(n[27],i2);var
b=b[1];continue;case
2:a(n[27],i3);aL(b[1]);a(n[27],i4);aL(b[2]);return a(n[27],i5);case
3:var
d=a(H[1][7],b[1]);return a(n[27],d);case
4:var
e=a(m[16],b[1]);return a(n[27],e);default:return a(n[27],i6)}}function
$(c){var
b=c;for(;;)switch(b[0]){case
0:return a(n[2],i7);case
3:return cJ(b[1]);case
1:case
2:var
b=b[1];continue;default:return-1}}function
E(b){switch(b[0]){case
0:var
k=E(b[2]),c=h(A),m=[0,E(b[1]),k],n=f===c?A[1]:d===c?a(g[2],A):A;return a(e[l],[0,n,m]);case
1:var
i=h(F),p=[0,E(b[1])],q=f===i?F[1]:d===i?a(g[2],F):F;return a(e[l],[0,q,p]);case
2:var
r=E(b[2]),j=h(N),s=[0,E(b[1]),r],t=f===j?N[1]:d===j?a(g[2],N):N;return a(e[l],[0,t,s]);case
3:return a(e[o],b[1]);case
4:return J(b[1]);default:return b[1]}}function
d$(i,h){var
n=0;return function(o){var
c=n,b=o;for(;;){switch(b[0]){case
0:var
d=b[1];if(2===d[0]){var
e=d[1];if(3===e[0]){var
f=d[2];if(4===f[0]){var
k=b[2],l=cJ(e[1]),c=[0,[0,f[1],l],c],b=k;continue}}}break;case
4:var
g=bd(0);aG(i,g);var
m=b[1];return[0,g,h,a(q[17][6],c),m]}var
j=a(c4[1],i8);return v(ae[3],0,0,j)}}}function
P(b){function
c(a){if(a){var
d=a[1],e=c(a[2]),f=[4,d[1]];return[0,[2,[3,da(d[2])],f],e]}return[4,b[4]]}return c(b[3])}function
cN(c){var
b=a(fS[1],0);return a(e[114],b)}function
dg(b,o,j,n,i){var
p=a(D[7],i),k=df(b,a(q[17][6],o),p),r=[0,k[1],0],s=k[2],t=a(e[a7],1),m=h(cf),u=[0,b,j,a(e[a7],2),t,s,n],v=f===m?cf[1]:d===m?a(g[2],cf):cf,w=a(e[l],[0,v,u]),x=[0,a(e[a7],1),[0,j,0]],y=a(e[59],x),z=[0,[0,a(H[1][5],i9)],y,w],A=a(e[a6],z),B=c(e[49],b,e[117]),C=[0,[0,a(H[1][5],i_)],B,A],E=[0,a(e[a6],C),r],F=a(e[59],E),G=[0,F,[0,cN(0),0]];return a(db(a(e[59],G)),i)}function
cO(j,i,e,c){var
b=h(z),k=f===b?z[1]:d===b?a(g[2],z):z;return dg(k,j,i,e,c)}function
ea(j,i,e,c){var
b=h(_),k=f===b?_[1]:d===b?a(g[2],_):_;return dg(k,j,i,e,c)}function
a2(d,c,b){var
f=a(e[59],[0,b[1],b[2]]);return function(a){return cO(d,c,f,a)}}function
eb(d,c,b){var
f=a(e[59],[0,b[1],b[2]]);return function(a){return ea(d,c,f,a)}}function
t(m,l,k,b){var
n=a(D[7],b),i=h(z),o=a(q[17][6],m),p=f===i?z[1]:d===i?a(g[2],z):z,j=df(p,o,n),r=j[2];function
s(a){return d_(a,r)}var
t=c(q[17][12],s,l),u=[0,k,c(q[18],t,[0,j[1],0])],v=a(e[59],u),w=[0,v,[0,cN(0),0]];return a(db(a(e[59],w)),b)}function
a3(i,l){var
b=l[2],e=l[1];switch(e[0]){case
0:var
n=e[2],j=e[1];if(0===b[0]){var
o=b[1],B=$(o),C=$(j);if(c(m[19],C,B)){var
p=a3([0,i$,i],[0,n,b]),q=h(G),D=[0,j,p[2]],E=p[1],F=f===q?G[1]:d===q?a(g[2],G):G;return[0,[0,function(a){return t(i,ja,F,a)},E],D]}var
r=a3([0,jb,i],[0,e,b[2]]),s=h(av),H=[0,o,r[2]],J=r[1],L=f===s?av[1]:d===s?a(g[2],av):av;return[0,[0,function(a){return t(i,jc,L,a)},J],H]}var
M=$(b),N=$(j);if(c(m[19],N,M)){var
u=a3([0,jd,i],[0,n,b]),v=h(G),O=[0,j,u[2]],P=u[1],Q=f===v?G[1]:d===v?a(g[2],G):G;return[0,[0,function(a){return t(i,je,Q,a)},P],O]}var
w=h(aw),R=[0,b,e],S=0,T=f===w?aw[1]:d===w?a(g[2],aw):aw;return[0,[0,function(a){return t(i,jf,T,a)},S],R];case
4:switch(b[0]){case
4:var
ad=[4,c(I[12],e[1],b[1])];return[0,[0,K(i),0],ad];case
0:var
k=0;break;default:var
k=1}break;default:var
k=0}if(!k)if(0===b[0]){var
x=b[1],U=$(e),V=$(x);if(c(m[19],V,U)){var
y=a3([0,jg,i],[0,e,b[2]]),z=h(av),W=[0,x,y[2]],X=y[1],Y=f===z?av[1]:d===z?a(g[2],av):av;return[0,[0,function(a){return t(i,jh,Y,a)},X],W]}return[0,0,[0,e,b]]}var
Z=$(b),_=$(e);if(c(m[18],_,Z)){var
A=h(aw),aa=[0,b,e],ab=0,ac=f===A?aw[1]:d===A?a(g[2],aw):aw;return[0,[0,function(a){return t(i,ji,ac,a)},ab],aa]}return[0,0,[0,e,b]]}function
ec(o,D,i,C,b){function
e(b,l){var
i=l[1];if(i){var
j=l[2],k=i[2],p=i[1],q=p[2];if(j){var
n=j[2],r=j[1],s=r[2];if(q===s){var
u=h(bE),E=f===u?bE[1]:d===u?a(g[2],bE):bE,v=function(a){return t(b,jj,E,a)},F=m[11],G=c(I[14],C,r[1]),H=c(I[14],D,p[1]),J=c(I[12],H,G);if(c(m[1],J,F)){var
w=h(Y),L=f===w?Y[1]:d===w?a(g[2],Y):Y,M=function(a){return t(b,jk,L,a)},N=[0,M,e(b,[0,k,n])];return[0,v,[0,K([0,jm,[0,jl,b]]),N]]}return[0,v,e([0,jn,b],[0,k,n])]}if(c(m[19],q,s)){var
x=h(X),P=e([0,jo,b],[0,k,j]),Q=f===x?X[1]:d===x?a(g[2],X):X;return[0,function(a){return t(b,jp,Q,a)},P]}var
y=h(O),R=e([0,jq,b],[0,i,n]),S=f===y?O[1]:d===y?a(g[2],O):O;return[0,function(a){return t(b,jr,S,a)},R]}var
z=h(X),T=e([0,js,b],[0,k,0]),U=f===z?X[1]:d===z?a(g[2],X):X;return[0,function(a){return t(b,jt,U,a)},T]}var
A=l[2];if(A){var
B=h(O),V=e([0,ju,b],[0,0,A[2]]),W=f===B?O[1]:d===B?a(g[2],O):O;return[0,function(a){return t(b,jv,W,a)},V]}return[0,K(o),0]}return e(o,[0,i,b])}function
cP(o,i,C,b){function
e(b,l){var
i=l[1];if(i){var
j=l[2],k=i[2],p=i[1],q=p[2];if(j){var
n=j[2],r=j[1],s=r[2];if(q===s){var
u=h(bH),D=f===u?bH[1]:d===u?a(g[2],bH):bH,v=function(a){return t(b,jw,D,a)},E=m[11],F=c(I[14],C,r[1]),H=c(I[12],p[1],F);if(c(m[1],H,E)){var
w=h(Y),J=f===w?Y[1]:d===w?a(g[2],Y):Y,L=function(a){return t(b,jx,J,a)},M=[0,L,e(b,[0,k,n])];return[0,v,[0,K([0,jz,[0,jy,b]]),M]]}return[0,v,e([0,jA,b],[0,k,n])]}if(c(m[19],q,s)){var
x=h(G),N=e([0,jB,b],[0,k,j]),P=f===x?G[1]:d===x?a(g[2],G):G;return[0,function(a){return t(b,jC,P,a)},N]}var
y=h(O),Q=e([0,jD,b],[0,i,n]),R=f===y?O[1]:d===y?a(g[2],O):O;return[0,function(a){return t(b,jE,R,a)},Q]}var
z=h(G),S=e([0,jF,b],[0,k,0]),T=f===z?G[1]:d===z?a(g[2],G):G;return[0,function(a){return t(b,jG,T,a)},S]}var
A=l[2];if(A){var
B=h(O),U=e([0,jH,b],[0,0,A[2]]),V=f===B?O[1]:d===B?a(g[2],O):O;return[0,function(a){return t(b,jI,V,a)},U]}return[0,K(o),0]}return e(o,[0,i,b])}function
dh(e,b){if(b){if(c(m[4],b[1][1],m[11]))var
i=h(bF),l=f===i?bF[1]:d===i?a(g[2],bF):bF,j=l;else
var
k=h(bG),o=f===k?bG[1]:d===k?a(g[2],bG):bG,j=o;var
n=function(a){return t(e,jJ,j,a)};return[0,n,dh(e,b[2])]}return[0,K(e),0]}function
cz(i,j,b){switch(b[0]){case
0:var
k=cz([0,jK,i],j,b[1]),n=cz([0,jL,i],j,b[2]),v=[0,k[2],n[2]],o=h(bT),w=c(q[18],k[1],n[1]),x=f===o?bT[1]:d===o?a(g[2],bT):bT;return[0,[0,function(a){return t(i,jM,x,a)},w],v];case
1:var
y=[4,a(m[17],j)],z=[2,b[1],y],p=h(bU),A=[0,K([0,jN,i]),0],B=f===p?bU[1]:d===p?a(g[2],bU):bU;return[0,[0,function(a){return t(i,jO,B,a)},A],z];case
2:var
r=b[2];if(4===r[0]){var
C=[4,c(m[8],j,r[1])],D=[2,b[1],C],s=h(bs),E=[0,K([0,jQ,i]),0],F=f===s?bs[1]:d===s?a(g[2],bs):bs;return[0,[0,function(a){return t(i,jR,F,a)},E],D]}return a(ae[6],jP);case
3:return[0,0,[2,b,[4,j]]];case
4:var
G=[4,c(m[8],j,b[1])];return[0,[0,K(i),0],G];default:var
H=b[1],u=h(N),I=[0,J(j),H],L=f===u?N[1]:d===u?a(g[2],N):N;return[0,0,[5,a(e[l],[0,L,I])]]}}function
cQ(b){function
c(i,e){if(e){var
j=h(bI),k=c([0,jS,i],e[2]),l=f===j?bI[1]:d===j?a(g[2],bI):bI;return[0,function(a){return t(i,jT,l,a)},k]}return[0,K(b),0]}return function(a){return c(b,a)}}function
ed(b){function
c(i,e){if(e){var
j=h(G),k=c([0,jU,i],e[2]),l=f===j?G[1]:d===j?a(g[2],G):G;return[0,function(a){return t(i,jV,l,a)},k]}return[0,K(b),0]}return function(a){return c(b,a)}}function
cR(b){function
c(i,e){if(e){var
j=h(X),k=c([0,jW,i],e[2]),l=f===j?X[1]:d===j?a(g[2],X):X;return[0,function(a){return t(i,jX,l,a)},k]}return[0,K(b),0]}return function(a){return c(b,a)}}function
cS(i,b){switch(b[0]){case
0:var
j=cS([0,jY,i],b[1]),k=cS([0,jZ,i],b[2]),v=[0,j[2],k[2]],n=h(bV),w=c(q[18],j[1],k[1]),x=f===n?bV[1]:d===n?a(g[2],bV):bV;return[0,[0,function(a){return t(i,j0,x,a)},w],v];case
1:var
o=h(bX),y=b[1],z=0,A=f===o?bX[1]:d===o?a(g[2],bX):bX;return[0,[0,function(a){return t(i,j1,A,a)},z],y];case
2:var
p=b[2];if(4===p[0]){var
B=[4,a(m[17],p[1])],C=[2,b[1],B],r=h(bW),D=[0,K([0,j3,i]),0],E=f===r?bW[1]:d===r?a(g[2],bW):bW;return[0,[0,function(a){return t(i,j4,E,a)},D],C]}return a(ae[6],j2);case
3:var
s=h(Z),G=[2,b,[4,m[14]]],H=0,I=f===s?Z[1]:d===s?a(g[2],Z):Z;return[0,[0,function(a){return t(i,j5,I,a)},H],G];case
4:var
J=[4,a(m[17],b[1])];return[0,[0,K(i),0],J];default:var
u=h(F),L=[0,b[1]],M=f===u?F[1]:d===u?a(g[2],F):F;return[0,0,[5,a(e[l],[0,M,L])]]}}function
am(j,r){function
s(h,d){try{var
b=dI(d),g=b[1],q=a(e[o],b[2]),n=[3,g],p=0,r=a(e[o],g),s=[0,[0,function(a){return cO(j,r,q,a)},p],n];return s}catch(b){b=w(b);if(a(ae[22],b)){var
c=dy(0),f=ah(0);dJ(d,c,f,h);var
l=a(e[o],f),i=[3,c],k=0,m=a(e[o],c);return[0,[0,function(a){return cO(j,m,l,a)},k],i]}throw b}}try{var
k=cy(r);if(typeof
k==="number")var
i=0;else
switch(k[0]){case
0:var
u=[0,0,[3,k[1]]],i=1;break;case
1:var
v=k[1];if(typeof
v==="number")if(16<=v)var
i=0;else{switch(v){case
0:var
x=k[2];if(x){var
y=x[2];if(y)if(y[2])var
i=0,b=0;else
var
N=am([0,j6,j],x[1]),O=am([0,j7,j],y[1]),P=a3(j,[0,N[2],O[2]]),ag=P[2],ai=c(q[18],O[1],P[1]),n=[0,c(q[18],N[1],ai),ag],b=1;else
var
i=0,b=0}else
var
i=0,b=0;break;case
1:var
z=k[2];if(z){var
B=z[2];if(B)if(B[2])var
i=0,b=0;else{var
R=am([0,j8,j],z[1]),C=R[2],S=R[1],T=am([0,j9,j],B[1]),D=T[2],U=T[1];if(4===D[0])var
X=cz(j,D[1],C),ao=X[2],ap=c(q[18],U,X[1]),E=[0,c(q[18],S,ap),ao];else
if(4===C[0])var
V=h(bt),aj=f===V?bt[1]:d===V?a(g[2],bt):bt,ak=function(a){return t(j,j_,aj,a)},W=cz(j,C[1],D),al=W[2],an=c(q[18],U,[0,ak,W[1]]),E=[0,c(q[18],S,an),al];else
var
E=s(0,r);var
n=E,b=1}else
var
i=0,b=0}else
var
i=0,b=0;break;case
2:var
G=k[2];if(G){var
H=G[2];if(H)if(H[2])var
i=0,b=0;else
var
Y=h(F),aq=[0,H[1]],ar=f===Y?F[1]:d===Y?a(g[2],F):F,as=a(e[l],[0,ar,aq]),Z=h(A),at=[0,G[1],as],au=f===Z?A[1]:d===Z?a(g[2],A):A,_=am(j,a(e[l],[0,au,at])),av=_[2],aw=_[1],ax=Q(d7),n=[0,[0,a(p[66][8],ax),aw],av],b=1;else
var
i=0,b=0}else
var
i=0,b=0;break;case
3:var
I=k[2];if(I)if(I[2])var
i=0,b=0;else
var
ay=J(m[12]),$=h(A),az=[0,I[1],ay],aA=f===$?A[1]:d===$?a(g[2],A):A,aa=am(j,a(e[l],[0,aA,az])),aB=aa[2],aC=aa[1],aD=Q(d5),n=[0,[0,a(p[66][8],aD),aC],aB],b=1;else
var
i=0,b=0;break;case
4:var
K=k[2];if(K)if(K[2])var
i=0,b=0;else
var
ab=am([0,j$,j],K[1]),ac=cS(j,ab[2]),aE=ac[2],n=[0,c(q[18],ab[1],ac[1]),aE],b=1;else
var
i=0,b=0;break;case
5:var
L=k[2];if(L)if(L[2])var
i=0,b=0;else
var
aF=J(m[14]),ad=h(A),aG=[0,L[1],aF],aH=f===ad?A[1]:d===ad?a(g[2],A):A,af=am(j,a(e[l],[0,aH,aG])),aI=af[2],aJ=af[1],aK=Q(d6),n=[0,[0,a(p[66][8],aK),aJ],aI],b=1;else
var
i=0,b=0;break;case
15:var
M=k[2];if(M)if(M[2])var
i=0,b=0;else
var
n=s(1,M[1]),b=1;else
var
i=0,b=0;break;case
12:case
13:case
14:try{var
aL=[0,0,[4,d9(r)]],n=aL,b=1}catch(c){c=w(c);if(!a(ae[22],c))throw c;var
n=s(0,r),b=1}break;default:var
i=0,b=0}if(b)var
u=n,i=1}else
var
i=0;break;default:var
i=0}if(!i)var
u=s(0,r);return u}catch(b){b=w(b);if(a(aP[4],b))return s(0,r);throw b}}function
di(e,c,b){switch(c[0]){case
2:var
i=c[1];switch(b[0]){case
2:if(3===i[0]){var
j=h(bR),q=[2,[3,i[1]],[0,c[2],b[2]]],r=f===j?bR[1]:d===j?a(g[2],bR):bR;return[0,function(a){return t(e,kb,r,a)},q]}break;case
3:var
k=h(bQ),s=[2,[3,b[1]],[0,c[2],[4,m[12]]]],u=f===k?bQ[1]:d===k?a(g[2],bQ):bQ;return[0,function(a){return t(e,kc,u,a)},s]}break;case
3:var
l=c[1];switch(b[0]){case
2:var
o=h(bP),v=[2,[3,l],[0,b[2],[4,m[12]]]],w=f===o?bP[1]:d===o?a(g[2],bP):bP;return[0,function(a){return t(e,kd,w,a)},v];case
3:var
p=h(bO),x=[2,[3,l],[4,m[13]]],y=f===p?bO[1]:d===p?a(g[2],bO):bO;return[0,function(a){return t(e,ke,y,a)},x]}break}aL(c);a(n[32],0);aL(b);a(n[32],0);a(n[46],n[24]);return a(ae[6],ka)}function
cA(i,b){switch(b[0]){case
2:var
j=b[1];if(3===j[0]){var
k=b[2];if(4===k[0])return[0,0,b];var
e=function(b){switch(b[0]){case
0:var
d=e(b[2]),f=e(b[1]);return c(I[12],f,d);case
4:return b[1];default:return a(ae[6],kg)}},n=[4,e(k)],o=[2,[3,j[1]],n];return[0,[0,K([0,kh,i]),0],o]}break;case
3:var
l=h(bN),p=[2,[3,b[1]],[4,m[12]]],q=0,r=f===l?bN[1]:d===l?a(g[2],bN):bN;return[0,[0,function(a){return t(i,ki,r,a)},q],p]}aL(b);return a(ae[6],kf)}function
a4(b,j){switch(j[0]){case
0:var
e=j[2],i=j[1];switch(e[0]){case
0:var
k=e[1],A=$(k);if($(i)===A){var
l=di([0,kj,b],i,k),n=h(br),B=f===n?br[1]:d===n?a(g[2],br):br,C=function(a){return t(b,kk,B,a)},o=a4(b,[0,l[2],e[2]]);return[0,[0,C,[0,l[1],o[1]]],o[2]]}var
p=cA([0,kl,b],i),r=a4([0,km,b],e),D=[0,p[2],r[2]];return[0,c(q[18],p[1],r[1]),D];case
4:var
x=cA([0,kp,b],i);return[0,x[1],[0,x[2],[4,e[1]]]];default:var
E=$(e);if($(i)===E){var
s=di(b,i,e),u=a4(b,s[2]);return[0,[0,s[1],u[1]],u[2]]}var
v=cA([0,kn,b],i),w=a4([0,ko,b],e),F=[0,v[2],w[2]];return[0,c(q[18],v[1],w[1]),F]}case
4:return[0,0,j];default:var
y=cA(b,j),z=h(bS),G=[0,y[2],[4,m[11]]],H=f===z?bS[1]:d===z?a(g[2],bS):bS,I=[0,function(a){return t(b,kq,H,a)},0];return[0,c(q[18],y[1],I),G]}}function
cT(i,b){if(0===b[0]){var
e=b[1];if(2===e[0])if(3===e[1][0]){var
k=e[2];if(4===k[0])if(c(m[1],k[1],m[11])){var
l=h(Y),o=f===l?Y[1]:d===l?a(g[2],Y):Y,p=function(a){return t(i,ks,o,a)},n=cT(i,b[2]);return[0,[0,p,n[1]],n[2]]}}var
j=cT([0,kr,i],b[2]);return[0,j[1],[0,e,j[2]]]}return[0,0,b]}function
dj(bo){var
k=a(H[1][5],kt),n=a(H[1][5],ku),q=a(H[1][5],kv),A=J(m[11]);function
r(bp){var
s=bp;for(;;){if(s){var
b=s[1];switch(b[0]){case
0:var
al=b[2],am=b[1],u=M(am[1]),an=E(P(am)),ao=E(P(al)),F=J(b[3]),V=J(b[4]),ap=ag(cL(ao,F),V),bq=cv(an,ap),br=al[3],bs=a(cR(kw),br),bt=i[l],bE=a(T,bs),bF=a(p[66][1],bE),bG=[0,c(j[70][3],bF,bt),0],bH=[0,i[60],[0,i[l],0]],bI=[0,Q(aH),bH],bN=[0,a(j[70][20],bI),0],bO=[0,i[60],[0,i[l],0]],bP=[0,Q(aH),bO],bQ=[0,a(j[70][20],bP),0],bR=[0,r(s[2]),0],bS=[0,a(i[25],[0,u,0]),bR],bT=[0,a(i[74],[0,n,[0,q,[0,u,0]]]),bS],bV=a(e[o],u),bW=a(e[o],q),aq=h(bu),bU=0,bX=[0,F,ao,V,a(e[o],n),bW,bV],bY=f===aq?bu[1]:d===aq?a(g[2],bu):bu,bZ=[0,x([0,a(e[l],[0,bY,bX]),bU]),bT],b0=[0,a(i[25],[0,n,[0,q,0]]),bZ],b1=[0,a(j[70][20],b0),bQ],b2=aI(F,A),b3=a(i[ad],b2),b4=[0,c(j[70][19],b3,b1),bN],b5=aI(F,V),b6=[0,a(i[ad],b5),0],b7=[0,a(i[25],[0,u,0]),b6],b8=[0,a(i[74],[0,k,[0,u,0]]),b7],b_=a(e[o],u),ar=h(bv),b9=0,b$=[0,an,ap,a(e[o],k),b_],ca=f===ar?bv[1]:d===ar?a(g[2],bv):bv,cb=[0,x([0,a(e[l],[0,ca,b$]),b9]),b8],cc=[0,a(i[25],[0,k,0]),cb],cd=a(j[70][20],cc),ce=[0,c(j[70][19],cd,b4),bG],cf=a(i[ad],bq);return c(j[70][19],cf,ce);case
1:var
G=b[2],K=b[1],au=c(m[26],K[4],G),cg=c(I[14],au,G),ch=c(I[13],K[4],cg),ci=K[3],cj=function(a){return c(m[9],a,G)},ck=c(m[43],cj,ci),av=[0,K[1],0,ck,au],cl=E(P(av)),aw=J(G),W=J(ch),cm=av[3],cn=a(cR(kx),cm),co=[0,i[60],[0,i[l],0]],cp=[0,Q(aH),co],cq=[0,a(j[70][20],cp),0],cr=[0,i[60],[0,i[l],0]],cs=[0,Q(aH),cr],ct=[0,a(j[70][20],cs),0],cu=[0,i[41],0],cw=a(T,cn),cx=[0,a(p[66][1],cw),cu],cy=function(a){return a$(k,a)},cz=[0,a(p[66][1],cy),cx],cA=[0,a(i[25],[0,k,0]),cz],cB=[0,Q(cK),cA],cC=[0,a(i[74],[0,n,[0,q,0]]),cB],cE=a(e[o],q),ax=h(by),cD=0,cF=[0,W,aw,cl,a(e[o],n),cE],cG=f===ax?by[1]:d===ax?a(g[2],by):by,cH=[0,x([0,a(e[l],[0,cG,cF]),cD]),cC],cI=[0,a(i[25],[0,q,[0,n,0]]),cH],cJ=[0,a(j[70][20],cI),ct],cM=aI(aw,W),cN=a(i[ad],cM),cO=[0,c(j[70][19],cN,cJ),cq],cS=aI(W,A),cT=a(i[ad],cS);return c(j[70][19],cT,cO);case
3:var
ay=s[2],az=b[2],N=b[1],v=M(N[1]),cU=function(a){return c(m[9],a,az)},X=c(m[44],cU,N),Y=E(P(N)),_=E(P(X)),O=J(az),aA=cv(Y,cL(_,O));if(2===N[2]){var
cV=X[3],cW=a(cQ(ky),cV),cX=i[l],cY=a(T,cW),cZ=a(p[66][1],cY),c0=[0,c(j[70][3],cZ,cX),0],c1=[0,r(ay),0],c2=[0,a(i[25],[0,v,0]),c1],c4=[0,a(i[74],[0,n,[0,v,0]]),c2],c6=a(e[o],v),aB=h(bK),c5=0,c7=[0,Y,_,O,a(e[o],n),c6],c8=f===aB?bK[1]:d===aB?a(g[2],bK):bK,c9=[0,x([0,a(e[l],[0,c8,c7]),c5]),c4],c_=[0,a(i[25],[0,n,0]),c9],c$=[0,a(j[70][20],c_),c0],db=a(i[ad],aA);return c(j[70][19],db,c$)}var
dc=X[3],de=a(cQ(kz),dc),df=i[l],dg=a(T,de),di=a(p[66][1],dg),dj=[0,c(j[70][3],di,df),0],dk=[0,i[60],[0,i[l],0]],dl=[0,Q(aH),dk],dm=[0,a(j[70][20],dl),0],dn=[0,r(ay),0],dp=[0,a(i[25],[0,v,0]),dn],dq=[0,a(i[74],[0,n,[0,q,[0,v,0]]]),dp],ds=a(e[o],v),dt=a(e[o],n),aC=h(bx),dr=0,du=[0,Y,_,O,a(e[o],q),dt,ds],dv=f===aC?bx[1]:d===aC?a(g[2],bx):bx,dw=[0,x([0,a(e[l],[0,dv,du]),dr]),dq],dx=[0,a(i[25],[0,q,[0,n,0]]),dw],dy=[0,a(j[70][20],dx),dm],dz=aI(O,A),dA=a(i[ad],dz),dB=[0,c(j[70][19],dA,dy),dj],dC=a(i[ad],aA);return c(j[70][19],dC,dB);case
4:var
aD=s[2],aE=b[3],B=aE[2],R=aE[1],aF=b[2],y=aF[2],$=aF[1],aa=ah(0);aG(aa,b[1]);var
aK=M(y[1]),aL=M(B[1]),aM=E(P(y)),aN=E(P(B));if(c(m[1],$,m[12]))if(0===B[2]){switch(y[2]){case
0:var
aO=h(bz),dD=f===aO?bz[1]:d===aO?a(g[2],bz):bz,ab=dD;break;case
1:var
aP=h(bA),dP=f===aP?bA[1]:d===aP?a(g[2],bA):bA,ab=dP;break;default:var
aR=h(bM),dQ=f===aR?bM[1]:d===aR?a(g[2],bM):bM,ab=dQ}var
dF=J(R),dG=2===y[2]?kA:kB,dH=cP(dG,y[3],R,B[3]),dI=[0,r(aD),0],dJ=[0,a(i[25],[0,aa,0]),dI],dK=a(T,dH),dL=[0,a(p[66][1],dK),dJ],dM=a(e[o],aL),dN=[0,ab,[0,aM,aN,dF,a(e[o],aK),dM]],dO=[0,x([0,a(e[l],dN),0]),dL];return a(j[70][20],dO)}var
aS=J($),aT=J(R),dR=ec(kC,$,y[3],R,B[3]),dS=[0,i[60],[0,i[l],0]],dT=[0,Q(aH),dS],dU=[0,a(j[70][20],dT),0],dV=[0,i[60],[0,i[l],0]],dW=[0,Q(aH),dV],dX=[0,a(j[70][20],dW),0],dY=[0,r(aD),0],dZ=[0,a(i[25],[0,aa,0]),dY],d0=a(T,dR),d1=[0,a(p[66][1],d0),dZ],d2=[0,a(i[74],[0,n,[0,q,0]]),d1],d4=a(e[o],aL),d5=a(e[o],aK),d6=a(e[o],q),aU=h(bB),d3=0,d7=[0,aM,aN,aS,aT,a(e[o],n),d6,d5,d4],d8=f===aU?bB[1]:d===aU?a(g[2],bB):bB,d9=[0,x([0,a(e[l],[0,d8,d7]),d3]),d2],d_=[0,a(i[25],[0,q,[0,n,0]]),d9],d$=[0,a(j[70][20],d_),dX],ea=aI(aT,A),eb=a(i[ad],ea),ef=[0,c(j[70][19],eb,d$),dU],eg=aI(aS,A),eh=a(i[ad],eg);return c(j[70][19],eh,ef);case
5:var
D=b[1],aV=D[5],aW=D[4],ac=D[3],aX=D[2],aY=ah(0),ei=M(ac[1]);aG(aY,D[1][1]);var
ae=E(P(aX)),ej=E(P(ac)),af=da(aV),aZ=h(z),ek=cv(a(e[a7],1),ae),el=f===aZ?z[1]:d===aZ?a(g[2],z):z,a0=h(z),em=a(e[a6],[0,[0,af],el,ek]),en=f===a0?z[1]:d===a0?a(g[2],z):z,eo=[0,a(C[60],0),[0,en,em]],ep=a(e[l],eo),eq=J(aW),a1=h(Z),er=cP(ee,ac[3],aW,[0,[0,m[14],aV],aX[3]]),es=f===a1?Z[1]:d===a1?a(g[2],Z):Z,et=[0,kG,[0,kF,[0,kE,ee]]],eu=[0,function(a){return t(et,kD,es,a)},er],ev=i[l],ew=dE(ae),ex=[0,c(j[70][3],ew,ev),0],ey=[0,r(s[2]),0],ez=[0,a(i[25],[0,aY,0]),ey],eA=[0,a(i[74],[0,k,0]),ez],eB=a(T,eu),eC=[0,a(p[66][1],eB),eA],eE=a(e[o],k),eF=a(e[o],ei),a2=h(bD),eD=0,eG=[0,a(e[o],af),ej,ae,eq,eF,eE],eH=f===a2?bD[1]:d===a2?a(g[2],bD):bD,eI=[0,x([0,a(e[l],[0,eH,eG]),eD]),eC],eJ=[0,a(i[25],[0,af,[0,k,0]]),eI],eK=[0,a(i[74],[0,k,0]),eJ],eL=[0,aQ(k),eK],eM=[0,a(i[25],[0,k,0]),eL],eN=[0,a(j[70][20],eM),ex],eO=a(i[ad],ep);return c(j[70][19],eO,eN);case
6:var
a3=s[2];try{var
eP=r(a3),eQ=M(b[1][1]),eR=c(H[1][12][3],eQ,bo),eS=c(j[70][3],eR,eP);return eS}catch(a){a=w(a);if(a===L){var
s=a3;continue}throw a}case
9:var
a4=b[2],ai=b[1],eT=P(ai),eU=P(a4),a5=h(at),eV=dh(kH,ai[3]),eW=f===a5?at[1]:d===a5?a(g[2],at):at,a8=h(at),eX=f===a8?at[1]:d===a8?a(g[2],at):at,a9=h(as),eY=f===a9?as[1]:d===a9?a(g[2],as):as,eZ=a(C[41],0),e0=[0,a(c3[48],eZ),[0,eY,eX,eW]],e1=a(e[l],e0),e2=[0,i[41],[0,i[l],0]],e3=[0,a(fU[1],e1),0],e4=[0,i[60],[0,i[16],e3]],e5=[0,Q(dd),e4],e6=a(j[70][20],e5),e7=c(j[70][19],e6,e2),e8=M(a4[1]),e9=a(e[o],e8),e_=M(ai[1]),e$=a(e[o],e_),fa=E(eU),a_=h(bw),fb=[0,E(eT),fa,e$,e9],fc=f===a_?bw[1]:d===a_?a(g[2],bw):bw,fd=a(e[l],[0,fc,fb]),fe=a(T,eV),ff=x([0,fd,0]),fg=a(p[66][8],ff),fh=c(j[5],fg,fe),fi=a(p[66][1],fh);return c(p[15],fi,e7);case
10:var
aj=b[2],ak=b[1],fj=P(aj),fk=P(ak),fl=M(aj[1]),fm=M(ak[1]),ba=b[3]?m[14]:m[12],fn=cP(kI,aj[3],ba,ak[3]),fo=[0,i[l],0],fp=function(a){return a$(k,a)},fq=[0,a(p[66][1],fp),fo],fr=[0,a(i[25],[0,k,0]),fq],fs=a(T,fn),ft=[0,a(p[66][1],fs),fr],fv=a(e[o],fm),fw=a(e[o],fl),fx=J(ba),fy=E(fk),bb=h(bJ),fu=0,fz=[0,E(fj),fy,fx,fw,fv],fA=f===bb?bJ[1]:d===bb?a(g[2],bJ):bJ,fB=[0,x([0,a(e[l],[0,fA,fz]),fu]),ft];return a(j[70][20],fB);case
11:var
S=b[2],bc=ah(0);aG(bc,b[1]);var
bd=M(S[1]),be=M(b[3]),bf=E(P(S)),bg=E(P(a(m[45],S))),fC=S[3],bh=h(Z),fD=a(cQ(kJ),fC),fE=f===bh?Z[1]:d===bh?a(g[2],Z):Z,fF=[0,function(a){return t(kL,kK,fE,a)},fD],fG=i[l],fH=a(T,fF),fI=a(p[66][1],fH),fJ=[0,c(j[70][3],fI,fG),0],fK=[0,r(s[2]),0],fL=[0,a(i[25],[0,bc,0]),fK],fM=[0,a(i[74],[0,bd,[0,be,[0,k,0]]]),fL],fO=a(e[o],k),fP=a(e[o],be),bi=h(bC),fN=0,fQ=[0,bf,bg,a(e[o],bd),fP,fO],fR=f===bi?bC[1]:d===bi?a(g[2],bC):bC,fS=[0,x([0,a(e[l],[0,fR,fQ]),fN]),fM],fV=[0,a(i[25],[0,k,0]),fS],fW=[0,a(j[70][20],fV),fJ],fX=cv(bf,aJ(bg)),fY=a(i[ad],fX);return c(j[70][19],fY,fW);case
12:var
fZ=fT[15],f0=M(b[1]),f1=x([0,a(e[o],f0),0]);return c(j[70][3],f1,fZ);case
13:var
f2=i[l],f3=M(b[1]),f4=function(a){return a$(f3,a)},f5=a(p[66][1],f4);return c(j[70][3],f5,f2);case
14:var
f6=[0,i[l],0],f7=function(a){return a$(k,a)},f8=[0,a(p[66][1],f7),f6],f9=[0,a(i[25],[0,k,0]),f8],f_=[0,Q(cK),f9],f$=[0,i[60],f_],ga=[0,Q(dd),f$],gb=M(b[1]),gc=[0,x([0,a(e[o],gb),0]),ga];return a(j[70][20],gc);case
15:var
bj=b[3],bk=b[2],U=b[1],bl=ah(0),bm=ah(0);aG(bl,bk[1]);aG(bm,bj[1]);var
gd=M(U[1]),ge=U[3],gf=a(ed(kM),ge),gg=U[3],gh=a(cR(kN),gg),gi=E(P(U)),gj=[0,r(bj[2]),0],gk=[0,a(i[25],[0,bm,0]),gj],gl=a(T,gh),gm=[0,a(p[66][1],gl),gk],gn=[0,a(j[70][20],gm),0],go=[0,r(bk[2]),0],gp=[0,a(i[25],[0,bl,0]),go],gq=a(T,gf),gr=[0,a(p[66][1],gq),gp],gs=[0,a(j[70][20],gr),gn],bn=h(bL),gt=[0,gi,[0,a(e[o],gd),0]],gu=f===bn?bL[1]:d===bn?a(g[2],bL):bL,gv=a(e[59],[0,gu,gt]),gw=a(i[99],gv);return c(j[70][19],gw,gs)}}return a(p[13],0)}}return r}function
ef(a,f){var
b=am(a,f),d=a4(a,b[2]),e=cT(a,d[2]),g=e[2],h=c(q[18],d[1],e[1]);return[0,c(q[18],b[1],h),g]}function
aT(f,v,u,t,s,r,n,d){var
g=d[2],h=d[1],k=ef([0,[0,t],kO],s),m=k[1],w=a(i[74],[0,f,0]),y=a(p[66][8],w),z=a(j[21],y),A=[0,u,[0,r,n,a(e[o],f)]],B=x([0,a(e[l],A),0]),C=a(p[66][8],B),D=c(j[5],C,z);if(a(q[17][47],m))return[0,h,g];var
b=ah(0),E=k[2],F=[0,a(d$(b,v),E),g],G=[0,a(i[25],[0,b,0]),0],H=a(T,m),I=[0,a(p[66][1],H),G],J=[0,a(p[66][1],D),I];return[0,[0,[0,b,a(j[70][20],J)],h],F]}function
eg(ab,i,F){var
k=F[1];if(R.caml_string_equal(a(a_[5],k),kP))return i;try{var
j=aS(F[2]);if(typeof
j==="number")var
e=0;else
if(1===j[0]){var
p=j[1];if(typeof
p==="number")if(16<=p){switch(p+cZ|0){case
0:var
q=j[2];if(q){var
r=q[2];if(r){var
s=r[2];if(s)if(s[2])var
e=0,b=0;else{var
H=s[1],I=r[1],o=cx(c(D[29],ab,q[1]));if(typeof
o==="number")var
n=0;else
if(1===o[0]){var
M=o[1];if(typeof
M==="number")if(23===M)if(o[2])var
n=0;else
var
K=1,n=1;else
var
n=0;else
var
n=0}else
var
n=0;if(!n)var
K=0;if(K)var
L=h(bY),ac=ag(I,aJ(H)),ad=2,ae=f===L?bY[1]:d===L?a(g[2],bY):bY,l=aT(k,0,ae,ad,ac,I,H,i),b=1;else
var
e=0,b=0}else
var
e=0,b=0}else
var
e=0,b=0}else
var
e=0,b=0;break;case
2:var
t=j[2];if(t){var
u=t[2];if(u)if(u[2])var
e=0,b=0;else
var
N=u[1],O=t[1],P=h(bZ),af=ag(O,aJ(N)),ah=1,ai=f===P?bZ[1]:d===P?a(g[2],bZ):bZ,l=aT(k,2,ai,ah,af,O,N,i),b=1;else
var
e=0,b=0}else
var
e=0,b=0;break;case
3:var
v=j[2];if(v){var
x=v[2];if(x)if(x[2])var
e=0,b=0;else
var
Q=x[1],S=v[1],T=h(b3),aj=ag(Q,aJ(S)),ak=2,al=f===T?b3[1]:d===T?a(g[2],b3):b3,l=aT(k,1,al,ak,aj,S,Q,i),b=1;else
var
e=0,b=0}else
var
e=0,b=0;break;case
4:var
y=j[2];if(y){var
z=y[2];if(z)if(z[2])var
e=0,b=0;else
var
U=z[1],V=y[1],am=aJ(V),W=h(b0),an=ag(ag(U,J(m[14])),am),ao=2,ap=f===W?b0[1]:d===W?a(g[2],b0):b0,l=aT(k,1,ap,ao,an,V,U,i),b=1;else
var
e=0,b=0}else
var
e=0,b=0;break;case
5:var
A=j[2];if(A){var
B=A[2];if(B)if(B[2])var
e=0,b=0;else
var
X=B[1],Y=A[1],Z=h(b1),aq=ag(Y,aJ(X)),ar=2,as=f===Z?b1[1]:d===Z?a(g[2],b1):b1,l=aT(k,1,as,ar,aq,Y,X,i),b=1;else
var
e=0,b=0}else
var
e=0,b=0;break;case
6:var
C=j[2];if(C){var
E=C[2];if(E)if(E[2])var
e=0,b=0;else
var
_=E[1],$=C[1],at=aJ(_),aa=h(b2),au=ag(ag($,J(m[14])),at),av=2,aw=f===aa?b2[1]:d===aa?a(g[2],b2):b2,l=aT(k,1,aw,av,au,$,_,i),b=1;else
var
e=0,b=0}else
var
e=0,b=0;break;default:var
e=0,b=0}if(b)var
G=l,e=1}else
var
e=0;else
var
e=0}else
var
e=0;if(!e)var
G=i;return G}catch(b){b=w(b);if(a(aP[4],b))return i;throw b}}function
aU(b){var
d=a(i[22],b),e=a(i[74],[0,b,0]),f=a(j[70][22],e);return c(j[70][3],f,d)}var
kS=[0,function(k){dc(0);var
u=a(D[49][12],k),x=c(D[49][3],eg,k),l=v(q[17][15],x,kQ,u),n=l[1],y=dH(0),z=[0,a(p[13],0),0];function
A(n,l){var
c=l[2],o=c[2],k=c[1],p=l[1],q=n[2],r=n[1];if(c[3]){var
b=ah(0),s=bd(0);aG(b,s);var
v=m[11],w=cJ(k),x=[0,[0,s,1,[0,[0,m[12],w],0],v],q],y=[0,a(i[25],[0,o,[0,b,0]]),[0,r,0]],z=[0,a(i[74],[0,b,0]),y],A=[0,aQ(b),z],t=h(b5),B=[0,a(i[25],[0,k,[0,b,0]]),A],C=[0,p,0],D=f===t?b5[1]:d===t?a(g[2],b5):b5,E=a(e[59],[0,D,C]),F=[0,a(i[99],E),B];return[0,a(j[70][20],F),x]}var
u=h(b4),G=[0,a(i[25],[0,k,[0,o,0]]),[0,r,0]],H=[0,p,0],I=f===u?b4[1]:d===u?a(g[2],b4):b4,J=a(e[59],[0,I,H]),K=[0,a(i[99],J),G];return[0,a(j[70][20],K),q]}var
o=v(q[17][15],A,z,y),r=o[1],b=c(q[18],l[2],o[2]);if(cG[1])c(m[33],aY,b);if(bb[1])try{v(m[64],[0,bd,c9,aY],0,b);var
E=a(p[13],0);return E}catch(b){b=w(b);if(b===m[27]){var
B=a(m[39],0),s=v(m[65],0,0,B)[2];if(ba[1])c(m[36],aY,s);var
C=a(dj(n),s);return c(j[70][3],r,C)}throw b}try{var
t=c(m[69],[0,bd,c9,aY],b);if(ba[1])c(m[36],aY,t);var
G=a(dj(n),t),H=c(j[70][3],r,G);return H}catch(b){b=w(b);if(b===m[28]){var
F=a(c4[1],kR);return c(j[70][5],0,F)}throw b}}],eh=a(p[62][9],kS),lb=[0,function(b){function
n(a){return c(fP[75],0,a)}var
af=c(D[49][1],n,b);function
k(q,N){try{var
s=cy(N);if(typeof
s==="number")var
n=0;else
if(1===s[0]){var
y=s[1];if(typeof
y==="number")if(12<=y)var
n=0;else{switch(y){case
6:var
z=s[2];if(z){var
A=z[2];if(A)if(A[2])var
n=0,b=0;else
var
B=A[1],C=z[1],ad=[0,k([0,kT,q],B),0],P=h(bg),ae=[0,k([0,kU,q],C),ad],af=[0,C,[0,B,0]],ai=f===P?bg[1]:d===P?a(g[2],bg):bg,ak=aK(B),al=a2(q,ag(aK(C),ak),[0,ai,af]),am=[0,a(p[66][1],al),ae],v=a(j[70][20],am),b=1;else
var
n=0,b=0}else
var
n=0,b=0;break;case
7:var
D=s[2];if(D){var
E=D[2];if(E)if(E[2])var
n=0,b=0;else
var
F=E[1],G=D[1],an=[0,k([0,kV,q],F),0],Q=h(bh),ao=[0,k([0,kW,q],G),an],ap=[0,G,[0,F,0]],aq=f===Q?bh[1]:d===Q?a(g[2],bh):bh,ar=aK(F),as=a2(q,cL(aK(G),ar),[0,aq,ap]),at=[0,a(p[66][1],as),ao],v=a(j[70][20],at),b=1;else
var
n=0,b=0}else
var
n=0,b=0;break;case
8:var
H=s[2];if(H){var
I=H[2];if(I)if(I[2])var
n=0,b=0;else
var
t=I[1],u=H[1],x=ah(0),R=h(aA),au=0,av=0,aw=[0,t,u],ax=f===R?aA[1]:d===R?a(g[2],aA):aA,ay=r([0,[0,x,a(e[l],[0,ax,aw])],av]),S=h(bj),aE=[0,u,[0,t,[0,a(e[o],x),0]]],aF=f===S?bj[1]:d===S?a(g[2],bj):bj,aG=a2(q,J(m[11]),[0,aF,aE]),aH=a(p[66][1],aG),aI=[0,c(j[70][3],aH,ay),au],aJ=[0,k([0,kX,q],t),0],T=h(az),aL=[0,k([0,kY,q],u),aJ],aM=0,aN=[0,t,u],aO=f===T?az[1]:d===T?a(g[2],az):az,aQ=[0,r([0,[0,x,a(e[l],[0,aO,aN])],aM]),aL],U=h(bi),aR=[0,u,[0,t,[0,a(e[o],x),0]]],aS=f===U?bi[1]:d===U?a(g[2],bi):bi,aT=aK(t),aU=a2(q,d8(aK(u),aT),[0,aS,aR]),aV=[0,a(p[66][1],aU),aQ],aW=[0,a(j[70][20],aV),aI],V=h(cc),aX=a(i[25],[0,x,0]),aY=[0,t,[0,u,0]],aZ=f===V?cc[1]:d===V?a(g[2],cc):cc,a0=a(e[59],[0,aZ,aY]),a1=a(i[99],a0),a3=c(j[70][3],a1,aX),v=c(j[70][19],a3,aW),b=1;else
var
n=0,b=0}else
var
n=0,b=0;break;case
9:var
L=s[2];if(L)if(L[2])var
n=0,b=0;else
var
W=L[1],X=h(aD),a4=f===X?aD[1]:d===X?a(g[2],aD):aD,Y=h(aC),a5=[0,a4],a6=f===Y?aC[1]:d===Y?a(g[2],aC):aC,Z=h(aB),a7=[0,W,a(e[l],[0,a6,a5])],a8=f===Z?aB[1]:d===Z?a(g[2],aB):aB,_=a(e[l],[0,a8,a7]),$=h(cb),a9=k(q,_),a_=[0,W,0],a$=f===$?cb[1]:d===$?a(g[2],cb):cb,ba=eb([0,kZ,q],_,[0,a$,a_]),bb=a(p[66][1],ba),v=c(j[70][3],bb,a9),b=1;else
var
n=0,b=0;break;case
10:var
M=s[2];if(M)if(M[2])var
n=0,b=0;else{var
aa=function(i){try{var
d=cy(i);if(typeof
d==="number")var
b=0;else
if(1===d[0]){var
e=d[1];if(typeof
e==="number"){if(10===e){var
f=d[2];if(f)if(f[2])var
b=0,c=0;else
var
h=aa(f[1]),c=1;else
var
b=0,c=0}else
if(11===e)if(d[2])var
b=0,c=0;else
var
h=1,c=1;else
var
b=0,c=0;if(c)var
g=h,b=1}else
var
b=0}else
var
b=0;if(!b)var
g=0;return g}catch(b){b=w(b);if(a(aP[4],b))return 0;throw b}},ab=function(i,n){try{var
m=cy(n);if(typeof
m==="number")var
b=0;else
if(1===m[0]){var
s=m[1];if(typeof
s==="number")if(10===s){var
o=m[2];if(o)if(o[2])var
b=0;else
var
q=o[1],t=h(bk),v=ab([0,k0,i],q),x=[0,q,0],y=f===t?bk[1]:d===t?a(g[2],bk):bk,u=h(aj),z=[0,y,x],A=[0,aK(q)],B=f===u?aj[1]:d===u?a(g[2],aj):aj,C=a2(i,a(e[l],[0,B,A]),z),D=a(p[66][1],C),r=c(j[70][3],D,v),b=1;else
var
b=0}else
var
b=0;else
var
b=0}else
var
b=0;if(!b)var
r=k(i,n);return r}catch(b){b=w(b);if(a(aP[4],b))return k(i,n);throw b}};if(aa(M[1]))var
bc=K(q),ac=a(p[66][1],bc);else
var
ac=ab(q,N);var
v=ac,b=1}else
var
n=0,b=0;break;case
11:if(s[2])var
n=0,b=0;else
var
bd=K(q),v=a(p[66][1],bd),b=1;break;default:var
n=0,b=0}if(b)var
O=v,n=1}else
var
n=0}else
var
n=0;if(!n)var
O=a(p[13],0);return O}catch(b){b=w(b);if(a(aP[4],b))return a(p[13],0);throw b}}function
r(ag){var
t=ag;for(;;){if(t){var
n=t[2],K=t[1],m=K[1];try{var
q=aS(K[2]);if(typeof
q==="number")var
i=0;else
if(1===q[0]){var
u=q[1];if(typeof
u==="number")if(16<=u){switch(u+cZ|0){case
0:var
v=q[2];if(v){var
y=v[2];if(y){var
z=y[2];if(z)if(z[2])var
i=0,b=0;else{var
M=z[1],N=y[1],O=h(_),ah=f===O?_[1]:d===O?a(g[2],_):_;if(c(af,v[1],ah))var
ai=[0,r(n),0],aj=[0,aU(m),ai],ak=[0,k(k1,M),aj],al=[0,k(k2,N),ak],P=h(bq),am=0,an=[0,N,M,a(e[o],m)],ao=f===P?bq[1]:d===P?a(g[2],bq):bq,ap=[0,x([0,a(e[l],[0,ao,an]),am]),al],Q=a(j[70][20],ap);else
var
Q=r(n);var
s=Q,b=1}else
var
i=0,b=0}else
var
i=0,b=0}else
var
i=0,b=0;break;case
1:var
A=q[2];if(A){var
B=A[2];if(B)if(B[2])var
i=0,b=0;else
var
R=B[1],S=A[1],aq=[0,r(n),0],ar=[0,aU(m),aq],as=[0,k(k3,R),ar],at=[0,k(k4,S),as],T=h(bp),au=0,av=[0,S,R,a(e[o],m)],aw=f===T?bp[1]:d===T?a(g[2],bp):bp,ax=[0,x([0,a(e[l],[0,aw,av]),au]),at],s=a(j[70][20],ax),b=1;else
var
i=0,b=0}else
var
i=0,b=0;break;case
15:var
C=q[2];if(C){var
D=C[2];if(D)if(D[2])var
i=0,b=0;else
var
U=D[1],V=C[1],ay=[0,r(n),0],az=[0,aU(m),ay],aA=[0,k(k5,U),az],aB=[0,k(k6,V),aA],W=h(bl),aC=0,aD=[0,V,U,a(e[o],m)],aE=f===W?bl[1]:d===W?a(g[2],bl):bl,aF=[0,x([0,a(e[l],[0,aE,aD]),aC]),aB],s=a(j[70][20],aF),b=1;else
var
i=0,b=0}else
var
i=0,b=0;break;case
16:var
E=q[2];if(E){var
F=E[2];if(F)if(F[2])var
i=0,b=0;else
var
X=F[1],Y=E[1],aG=[0,r(n),0],aH=[0,aU(m),aG],aI=[0,k(k7,X),aH],aJ=[0,k(k8,Y),aI],Z=h(bm),aK=0,aL=[0,Y,X,a(e[o],m)],aM=f===Z?bm[1]:d===Z?a(g[2],bm):bm,aN=[0,x([0,a(e[l],[0,aM,aL]),aK]),aJ],s=a(j[70][20],aN),b=1;else
var
i=0,b=0}else
var
i=0,b=0;break;case
17:var
G=q[2];if(G){var
H=G[2];if(H)if(H[2])var
i=0,b=0;else
var
$=H[1],aa=G[1],aO=[0,r(n),0],aQ=[0,aU(m),aO],aR=[0,k(k9,$),aQ],aT=[0,k(k_,aa),aR],ab=h(bn),aV=0,aW=[0,aa,$,a(e[o],m)],aX=f===ab?bn[1]:d===ab?a(g[2],bn):bn,aY=[0,x([0,a(e[l],[0,aX,aW]),aV]),aT],s=a(j[70][20],aY),b=1;else
var
i=0,b=0}else
var
i=0,b=0;break;case
18:var
I=q[2];if(I){var
J=I[2];if(J)if(J[2])var
i=0,b=0;else
var
ac=J[1],ad=I[1],aZ=[0,r(n),0],a0=[0,aU(m),aZ],a1=[0,k(k$,ac),a0],a2=[0,k(la,ad),a1],ae=h(bo),a3=0,a4=[0,ad,ac,a(e[o],m)],a5=f===ae?bo[1]:d===ae?a(g[2],bo):bo,a6=[0,x([0,a(e[l],[0,a5,a4]),a3]),a2],s=a(j[70][20],a6),b=1;else
var
i=0,b=0}else
var
i=0,b=0;break;default:var
i=0,b=0}if(b)var
L=s,i=1}else
var
i=0;else
var
i=0}else
var
i=0;if(!i)var
L=r(n);return L}catch(b){b=w(b);if(a(aP[4],b)){var
t=n;continue}throw b}}return a(p[13],0)}}var
s=a(D[49][12],b);return r(a(q[17][6],s))}],ei=a(p[62][9],lb);function
ej(a){if(typeof
a==="number")if(18<=a)switch(a+dn|0){case
0:return dN;case
1:return dO;case
2:return dP;case
3:return dR;case
4:return dQ;case
13:return dX;case
14:return dY;case
15:return dZ;case
16:return d0}throw L}function
ek(a){if(typeof
a==="number")if(18<=a)switch(a+dn|0){case
0:return dS;case
1:return dT;case
2:return dU;case
3:return dV;case
4:return dW;case
13:return d1;case
14:return d2;case
15:return d3;case
16:return d4}throw L}var
a5=[aX,lc,aW(0)];function
ab(j,Z){var
i=aS(Z);if(typeof
i!=="number")switch(i[0]){case
1:var
m=i[1];if(typeof
m==="number")if(16<=m)switch(m+cZ|0){case
0:var
o=i[2];if(o){var
p=o[2];if(p){var
q=p[2];if(q){if(!q[2]){var
C=q[1],E=p[1],k=cx(c(D[29],j,o[1]));if(typeof
k!=="number"&&1===k[0]){var
r=k[1];if(typeof
r==="number")if(23===r){if(!k[2]){var
F=h(b6),_=[0,E,C],$=f===F?b6[1]:d===F?a(g[2],b6):b6;return a(e[l],[0,$,_])}}else
if(24===r)if(!k[2]){var
G=h(cd),aa=[0,E,C],ac=f===G?cd[1]:d===G?a(g[2],cd):cd;return a(e[l],[0,ac,aa])}}throw a5}var
b=1}else
var
b=0}else
var
b=1}else
var
b=1;break;case
9:var
u=i[2];if(u){var
v=u[2];if(v){if(!v[2]){var
I=v[1],J=u[1],ag=ab(j,I),K=h(ch),ah=[0,J,I,ab(j,J),ag],ai=f===K?ch[1]:d===K?a(g[2],ch):ch;return a(e[l],[0,ai,ah])}var
b=1}else
var
b=1}else
var
b=1;break;case
10:var
x=i[2];if(x){var
y=x[2];if(y){if(!y[2]){var
M=y[1],N=x[1],aj=ab(j,M),O=h(cg),ak=[0,N,M,ab(j,N),aj],al=f===O?cg[1]:d===O?a(g[2],cg):cg;return a(e[l],[0,al,ak])}var
b=1}else
var
b=1}else
var
b=1;break;case
11:if(!i[2]){var
P=h(cl);return f===P?cl[1]:d===P?a(g[2],cl):cl}var
b=0;break;case
12:if(!i[2]){var
Q=h(cn);return f===Q?cn[1]:d===Q?a(g[2],cn):cn}var
b=0;break;case
13:var
z=i[2];if(z){if(!z[2]){var
R=z[1],S=h(ck),am=[0,R,ab(j,R)],an=f===S?ck[1]:d===S?a(g[2],ck):ck;return a(e[l],[0,an,am])}var
b=0}else
var
b=1;break;case
14:var
A=i[2];if(A){var
B=A[2];if(B){if(!B[2]){var
T=B[1],U=A[1],ao=ab(j,T),V=h(cj),ap=[0,U,T,ab(j,U),ao],aq=f===V?cj[1]:d===V?a(g[2],cj):cj;return a(e[l],[0,aq,ap])}var
b=1}else
var
b=1}else
var
b=1;break;default:var
b=0}else
var
b=0;else
var
b=0;if(!b){var
s=i[2];if(s){var
t=s[2];if(t)if(!t[2])try{var
ad=[0,s[1],t[1]],n=ej(m),H=h(n),ae=f===H?n[1]:d===H?a(g[2],n):n,af=a(e[l],[0,ae,ad]);return af}catch(a){a=w(a);if(a===L)throw a5;throw a}}}break;case
2:var
W=i[2],X=i[1],ar=ab(j,W),Y=h(ci),as=[0,X,W,ab(j,X),ar],at=f===Y?ci[1]:d===Y?a(g[2],ci):ci;return a(e[l],[0,at,as])}throw a5}function
ac(b,e){var
d=[0,function(f){var
g=c(i[14],0,b),d=c(D[49][3],g,f),h=a(e,d),k=c(i[2],0,d);return c(j[70][3],k,h)}],f=a(p[62][9],d),g=a(i[74],[0,b,0]),h=a(j[70][22],g);return c(j[70][3],h,f)}function
dk(b,g){var
d=[0,function(d){var
h=c(a_[7],b,ld),k=c(i[14],0,h),e=c(D[49][3],k,d),l=c(a_[7],b,le),m=c(i[14],0,l),f=c(D[49][3],m,d),n=[0,c(g,e,f),0],o=[0,c(i[2],0,f),n],p=[0,c(i[2],0,e),o];return a(j[70][20],p)}],e=a(p[62][9],d),f=a(i[74],[0,b,0]),h=a(j[70][22],f);return c(j[70][3],h,e)}var
lf=[0,function(b){var
aY=a(D[49][7],b),u=c(D[49][3],ab,b),ar=c(D[49][3],D[29],b);function
m(aZ){var
A=aZ;for(;;){if(A){var
k=A[2],H=A[1],as=a(c7[2][1][17],H),b=as[1];try{var
s=aS(as[3]);if(typeof
s==="number")var
p=0;else
switch(s[0]){case
1:var
J=s[1];if(typeof
J==="number")if(18<=J){switch(J+dn|0){case
7:var
K=s[2];if(K){var
M=K[2];if(M)if(M[2])var
p=0,q=0;else
var
a0=M[1],a1=K[1],a2=dk(b,function(c,d,e){return function(b,a){return m([0,[0,b,e],[0,[0,a,d],c]])}}(k,a0,a1)),a3=aQ(b),v=c(j[70][3],a3,a2),q=1;else
var
p=0,q=0}else
var
p=0,q=0;break;case
8:var
N=s[2];if(N){var
O=N[2];if(O)if(O[2])var
p=0,q=0;else
var
a4=O[1],a6=N[1],a7=0,a8=[0,ac(b,function(b,c){return function(a){return m([0,[0,a,c],b])}}(k,a4)),a7],a9=[0,ac(b,function(b,c){return function(a){return m([0,[0,a,c],b])}}(k,a6)),a8],a_=aQ(b),v=c(j[70][19],a_,a9),q=1;else
var
p=0,q=0}else
var
p=0,q=0;break;case
9:if(s[2])var
p=0,q=0;else
var
v=aQ(b),q=1;break;case
11:var
P=s[2];if(P)if(P[2])var
p=0,q=0;else{var
t=aS(P[1]);if(typeof
t==="number")var
r=0;else
switch(t[0]){case
1:var
D=t[1];if(typeof
D==="number")if(16<=D)switch(D+cZ|0){case
0:var
R=t[2];if(R){var
S=R[2];if(S){var
T=S[2];if(T)if(T[2])var
r=0,n=0;else{var
E=T[1],F=S[1],av=R[1];if(bb[1]){var
U=cx(a(ar,av));if(typeof
U==="number")var
B=0;else
if(1===U[0]){var
V=U[1];if(typeof
V==="number"){if(23===V)var
a$=0,ba=[0,ac(b,function(a){return function(b){return m(a)}}(k)),a$],aA=h(b7),bc=[0,F,E,a(e[o],b)],bd=f===aA?b7[1]:d===aA?a(g[2],b7):b7,be=a(e[l],[0,bd,bc]),bf=[0,a(i[99],be),ba],aB=a(j[70][20],bf),ap=1;else
if(24===V)var
bg=0,bh=[0,ac(b,function(a){return function(b){return m(a)}}(k)),bg],aC=h(ce),bi=[0,F,E,a(e[o],b)],bj=f===aC?ce[1]:d===aC?a(g[2],ce):ce,bk=a(e[l],[0,bj,bi]),bl=[0,a(i[99],bk),bh],aB=a(j[70][20],bl),ap=1;else
var
B=0,ap=0;if(ap)var
aw=aB,B=1}else
var
B=0}else
var
B=0;if(!B)var
aw=m(k);var
az=aw}else{var
W=cx(a(ar,av));if(typeof
W==="number")var
C=0;else
if(1===W[0]){var
X=W[1];if(typeof
X==="number"){if(23===X)var
aE=h(ay),bm=m(k),bn=[0,F,E],bo=f===aE?ay[1]:d===aE?a(g[2],ay):ay,bp=a(e[l],[0,bo,bn]),bq=c(c7[2][1][5],bp,H),br=a(i[6],bq),aG=c(j[70][3],br,bm),aq=1;else
if(24===X)var
aH=h(ax),bs=m(k),bt=[0,F,E],bu=f===aH?ax[1]:d===aH?a(g[2],ax):ax,bv=a(e[l],[0,bu,bt]),bw=c(c7[2][1][5],bv,H),bx=a(i[6],bw),aG=c(j[70][3],bx,bs),aq=1;else
var
C=0,aq=0;if(aq)var
aD=aG,C=1}else
var
C=0}else
var
C=0;if(!C)var
aD=m(k);var
az=aD}var
y=az,n=2}else
var
n=1}else
var
r=0,n=0}else
var
r=0,n=0;break;case
9:var
_=t[2];if(_){var
$=_[2];if($)if($[2])var
r=0,n=0;else
var
aK=$[1],aa=_[1],bG=a(u,aa),bH=0,bI=[0,ac(b,function(c,d,e){return function(a){var
b=aF(d);return m([0,[0,a,cM(aF(e),b)],c])}}(k,aK,aa)),bH],aL=h(cp),bJ=0,bK=[0,aa,aK,bG,a(e[o],b)],bL=f===aL?cp[1]:d===aL?a(g[2],cp):cp,bM=[0,x([0,a(e[l],[0,bL,bK]),bJ]),bI],y=a(j[70][20],bM),n=2;else
var
r=0,n=0}else
var
r=0,n=0;break;case
10:var
ab=t[2];if(ab){var
ad=ab[2];if(ad)if(ad[2])var
r=0,n=0;else
var
aM=ad[1],aN=ab[1],bN=0,bO=[0,ac(b,function(c,d,e){return function(a){var
b=aF(d);return m([0,[0,a,cw(aF(e),b)],c])}}(k,aM,aN)),bN],aO=h(co),bP=0,bQ=[0,aN,aM,a(e[o],b)],bR=f===aO?co[1]:d===aO?a(g[2],co):co,bS=[0,x([0,a(e[l],[0,bR,bQ]),bP]),bO],y=a(j[70][20],bS),n=2;else
var
r=0,n=0}else
var
r=0,n=0;break;case
13:var
ae=t[2];if(ae)if(ae[2])var
n=1;else
var
af=ae[1],bT=a(u,af),bU=0,bV=[0,ac(b,function(b,c){return function(a){return m([0,[0,a,c],b])}}(k,af)),bU],aR=h(cs),bW=0,bX=[0,af,bT,a(e[o],b)],bY=f===aR?cs[1]:d===aR?a(g[2],cs):cs,bZ=[0,x([0,a(e[l],[0,bY,bX]),bW]),bV],y=a(j[70][20],bZ),n=2;else
var
r=0,n=0;break;case
14:var
ag=t[2];if(ag){var
ah=ag[2];if(ah)if(ah[2])var
r=0,n=0;else
var
ai=ah[1],aj=ag[1],b0=a(u,aj),b1=a(u,ai),b2=0,b3=[0,ac(b,function(e,a,b){return function(c){var
d=cw(aF(b),a);return m([0,[0,c,cM(cw(b,aF(a)),d)],e])}}(k,ai,aj)),b2],aT=h(cr),b4=0,b5=[0,aj,ai,b0,b1,a(e[o],b)],b6=f===aT?cr[1]:d===aT?a(g[2],cr):cr,b8=[0,x([0,a(e[l],[0,b6,b5]),b4]),b3],y=a(j[70][20],b8),n=2;else
var
r=0,n=0}else
var
r=0,n=0;break;default:var
n=1}else
var
n=1;else
var
n=1;switch(n){case
0:var
z=0;break;case
1:var
Y=t[2];if(Y){var
Z=Y[2];if(Z)if(Z[2])var
r=0,z=0;else{try{var
G=ek(D),by=0,bz=[0,ac(b,function(a){return function(b){return m(a)}}(k)),by],bB=a(e[o],b),aJ=h(G),bA=0,bC=[0,Y[1],Z[1],bB],bD=f===aJ?G[1]:d===aJ?a(g[2],G):G,bE=[0,x([0,a(e[l],[0,bD,bC]),bA]),bz],bF=a(j[70][20],bE),aI=bF}catch(a){a=w(a);if(a!==L)throw a;var
aI=m(k)}var
y=aI,z=1}else
var
r=0,z=0}else
var
r=0,z=0;break;default:var
z=1}if(z)var
Q=y,r=1;break;case
2:var
aU=t[2],ak=t[1],b9=a(u,ak),b_=0,b$=[0,ac(b,function(b,c,d){return function(a){return m([0,[0,a,cw(d,aF(c))],b])}}(k,aU,ak)),b_],aV=h(cq),ca=0,cb=[0,ak,aU,b9,a(e[o],b)],cc=f===aV?cq[1]:d===aV?a(g[2],cq):cq,cd=[0,x([0,a(e[l],[0,cc,cb]),ca]),b$],Q=a(j[70][20],cd),r=1;break;default:var
r=0}if(!r)var
Q=m(k);var
v=Q,q=1}else
var
p=0,q=0;break;case
12:var
al=s[2];if(al){var
am=al[2];if(am)if(am[2])var
p=0,q=0;else
var
cf=am[1],cg=al[1],ch=dk(b,function(h,a,b){return function(f,d){var
g=[0,[0,d,c(e[49],a,b)],h];return m([0,[0,f,c(e[49],b,a)],g])}}(k,cf,cg)),ci=aQ(b),v=c(j[70][3],ci,ch),q=1;else
var
p=0,q=0}else
var
p=0,q=0;break;case
0:case
1:case
2:case
3:case
4:var
at=s[2];if(at){var
au=at[2];if(au)if(au[2])var
p=0,q=0;else
var
v=m(k),q=1;else
var
p=0,q=0}else
var
p=0,q=0;break;default:var
p=0,q=0}if(q)var
I=v,p=1}else
var
p=0;else
var
p=0;break;case
2:var
an=s[2],ao=s[1],cj=a(aY,an);if(a(e[22],cj))var
ck=a(u,ao),cl=0,cm=[0,ac(b,function(b,c,d){return function(a){return m([0,[0,a,cM(aF(d),c)],b])}}(k,an,ao)),cl],aW=h(ct),cn=0,cu=[0,ao,an,ck,a(e[o],b)],cv=f===aW?ct[1]:d===aW?a(g[2],ct):ct,cy=[0,x([0,a(e[l],[0,cv,cu]),cn]),cm],aX=a(j[70][20],cy);else
var
aX=m(k);var
I=aX,p=1;break;default:var
p=0}if(!p)var
I=m(k);return I}catch(b){b=w(b);if(b===a5){var
A=k;continue}if(a(aP[4],b)){var
A=k;continue}throw b}}return c(j[70][3],ei,eh)}}return m(a(p[62][4],b))}],cU=a(p[62][9],lf),lg=[0,function(b){var
k=a(p[62][3],b),t=c(D[49][3],ab,b);function
m(k){var
b=aS(k);if(typeof
b!=="number")switch(b[0]){case
1:var
q=b[1];if(typeof
q==="number"){var
r=q-27|0;if(!(2<r>>>0))switch(r){case
0:if(!b[2])return cU;break;case
1:break;default:var
s=b[2];if(s)if(!s[2]){var
G=i[16],H=Q(cK),I=c(j[70][3],H,G);return c(j[70][3],I,cU)}}}break;case
2:var
J=m(b[2]);return c(j[70][3],i[16],J)}try{var
v=a(t,k),x=i[16],o=h(cm),y=[0,k,v,cN(0)],z=f===o?cm[1]:d===o?a(g[2],cm):cm,A=a(e[l],[0,z,y]),B=a(D[45],A),E=a(p[66][1],B),F=c(j[70][3],E,x),n=F}catch(b){b=w(b);if(b!==a5)throw b;var
u=a(C[50],0),n=a(i[109],u)}return c(j[70][3],n,cU)}return m(k)}],el=a(p[62][9],lg);function
lh(b){a(C[11],li);dK(0);return el}var
lj=a(p[13],0),dl=[0,m,aQ,a$,fV,fW,cG,ba,bb,cH,fX,bc,aR,du,ah,gd,dy,bd,c9,dC,aY,cJ,da,dD,T,dE,x,gj,db,Q,dF,aG,gl,M,dG,dJ,dI,dc,dH,dK,dL,dM,aa,k,af,S,ap,aq,ar,U,V,W,z,as,at,A,N,F,ai,aj,aZ,au,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,G,br,bs,av,aw,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,X,O,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,Y,bS,bT,bU,bV,bW,Z,bX,bY,bZ,b0,b1,b2,b3,b4,b5,b6,dN,dO,dP,dQ,dR,b7,dS,dT,dU,dV,dW,ax,ay,ak,al,a0,a1,az,b8,b9,aA,aB,b_,b$,ca,_,aC,aD,cb,cc,cd,dX,dY,dZ,d0,ce,d1,d2,d3,d4,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,aE,d5,d6,d7,dd,aH,iM,iO,cK,iQ,ag,cL,d8,cv,iR,aI,aJ,cw,cM,aF,iS,aK,J,aS,cx,cy,d9,de,d_,df,K,aL,$,E,d$,P,cN,dg,cO,ea,a2,eb,t,a3,ec,cP,dh,cz,cQ,ed,cR,cS,am,di,cA,a4,cT,dj,ef,aT,eg,aU,eh,ei,ej,ek,a5,ab,ac,dk,cU,el,c(p[67][1],lj,lh)];cY(433,dl,"Omega_plugin.Coq_omega");a(dm[12],ln);function
cB(b){var
d=c(r[13],H[1][5],lo),e=a(H[5][4],d),f=a(H[6][4],b),g=c(H[13][2],[0,e],f),h=a(cV[6],g);return a(em[17],h)}function
cW(b){var
d=c(q[17][96],ll[29],b);function
e(b){if(cD(b,lp)){if(cD(b,lq)){if(cD(b,lr)){if(cD(b,ls)){var
d=c(n[16],lt,b);return a(ae[6],d)}return cB(lu)}return cB(lv)}return cB(lw)}return cB(lx)}var
g=c(r[13],e,d),h=dl[f],i=a(j[70][20],g),k=a(j[70][28],i);return c(j[70][3],k,h)}function
ly(d){var
b=[28,[0,0,[31,en[4],[0,[0,aV,lz],0],0]]],c=a(H[1][5],lA);return cC(cV[4],1,0,c,b)}var
lB=[0,function(b,a){return cW(0)}];v(cV[9],0,[0,aV,lC],lB);c(dm[19],ly,aV);var
lD=0,lG=[0,function(b){return b?a(n[2],lE):function(a){return cW(lF)}},lD],lI=[0,function(b){if(b)if(!b[2]){var
d=b[1],e=a(eo[17],ep[4]),f=a(eo[6],e),g=c(em[2][7],f,d);return function(a){return cW(c(r[13],H[1][7],g))}}return a(n[2],lH)},lG],lJ=a(lm[12],lI);v(cV[9],0,[0,aV,lK],lJ);function
lL(f){var
e=a(H[1][6],lN),b=ep[4],d=0;if(0===b[0])return c(lk[4],[0,aV,lQ],[0,[0,lP,[0,lO,[0,[1,en[4],[0,[5,[0,b[1]]]],e],d]]],lM]);throw[0,dt,lR]}c(dm[19],lL,aV);var
eq=[0,aV,cB,cW];cY(443,eq,"Omega_plugin.G_omega");cY(444,[0,c2,dl,eq],"Omega_plugin");return});
