"use strict";(self.webpackChunkegret_angular_latest_test=self.webpackChunkegret_angular_latest_test||[]).push([[83],{10083:(ve,y,a)=>{a.r(y),a.d(y,{SessionsModule:()=>me});var P=a(62769),v=a(36895),n=a(24006),p=a(19132),B=a(56852),q=a(69814),D=a(13081),Y=a(5104),m=a(99818),M=a(2362),e=a(94650),h=a(18455),S=a(29203),_=a(28377),g=a(1576);function G(o,l){1&o&&(e.TgZ(0,"small",17),e._uU(1," Password is required "),e.qZA())}let H=(()=>{class o{constructor(){this.lockscreenData={password:""}}ngOnInit(){}unlock(){console.log(this.lockscreenData),this.submitButton.disabled=!0,this.progressBar.mode="indeterminate"}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-lockscreen"]],viewQuery:function(t,i){if(1&t&&(e.Gf(M.eI,5),e.Gf(m.eB,5)),2&t){let r;e.iGM(r=e.CRH())&&(i.progressBar=r.first),e.iGM(r=e.CRH())&&(i.submitButton=r.first)}},decls:23,vars:4,consts:[[1,"page-wrap","h-full","mat-bg-default"],[1,"session-form-hold","session-lockscreen"],["mode","determinate",1,"session-progress"],["fxFlex","column","fxFlexWrap","wrap"],["fxFlexWrap","wrap",1,"lockscreen-user"],["src","assets/images/face-3.jpg","alt","",1,"lockscreen-face"],[1,"m-0","font-normal"],[1,"text-muted"],[3,"ngSubmit"],["lockscreenForm","ngForm"],[1,""],[1,"full-width"],["type","password","name","password","required","","matInput","","placeholder","Password",3,"ngModel","ngModelChange"],["password","ngModel"],["class","form-error-msg",4,"ngIf"],["mat-raised-button","",1,"mat-primary","full-width","mb-8",3,"disabled"],["mat-raised-button","","color","accent",1,"mat-primary","full-width",3,"routerLink"],[1,"form-error-msg"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"mat-progress-bar",2),e.TgZ(3,"mat-card")(4,"mat-card-content")(5,"div",3)(6,"div",4),e._UZ(7,"img",5),e.TgZ(8,"h5",6),e._uU(9,"John Doe"),e.qZA(),e.TgZ(10,"small",7),e._uU(11,"Last seen 1 hour ago"),e.qZA()(),e.TgZ(12,"form",8,9),e.NdJ("ngSubmit",function(){return i.unlock()}),e.TgZ(14,"div",10)(15,"mat-form-field",11)(16,"input",12,13),e.NdJ("ngModelChange",function(s){return i.lockscreenData.password=s}),e.qZA()(),e.YNc(18,G,2,0,"small",14),e.qZA(),e.TgZ(19,"button",15),e._uU(20,"Unlock"),e.qZA(),e.TgZ(21,"button",16),e._uU(22,"It's not me!"),e.qZA()()()()()()()),2&t){const r=e.MAs(13),s=e.MAs(17);e.xp6(16),e.Q6J("ngModel",i.lockscreenData.password),e.xp6(2),e.Q6J("ngIf",s.errors&&(s.dirty||s.touched)&&(null==s||null==s.errors?null:s.errors.required)),e.xp6(1),e.Q6J("disabled",r.invalid),e.xp6(2),e.Q6J("routerLink","/sessions/signin")}},dependencies:[v.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.On,n.F,m.eB,h.v_,S.k0,_.S$,_.Qi,M.eI,g.yH,p.rH]}),o})();var E=a(15861),R=a(38863),J=a(73175),x=a(4859),N=a(73162),C=a(77579),W=a(31126);class Z{constructor(l,t,i,r,s,c,d,w){this.username=l,this.password=t,this.nombre=i,this.apellido=r,this.email=s,this.telefono=c,this.celular=d,this.tpparticipe=w}}var U=a(97800),k=a(77009),I=a(17009),z=a(23497),$=a(99645),K=a(21218),V=a(27756),L=a(24404),j=a(24363),F=a(85208),O=a(44850),Q=a(94466);function X(o,l){if(1&o&&(e.TgZ(0,"mat-option",17),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.idparticipe),e.xp6(1),e.hij(" ",t.descripcion," ")}}const ee=function(){return{}};let te=(()=>{class o{constructor(t,i,r,s,c,d,w,f,b,u){this.fb=t,this.jwtAuth=i,this.egretLoader=r,this.router=s,this.route=c,this._snackBar=d,this.menuService=w,this.auditoriaService=f,this.navigationService=b,this.keycloak=u,this.isLogueado=!1,this.perfilUsuario=null,this.messageChange=new C.x,this.errorMsg="",this.tipoparticipe=[{idparticipe:"1",descripcion:"Individual"},{idparticipe:"2",descripcion:"Copropiedad"},{idparticipe:"3",descripcion:"Sucesi\xf3n"}],this.getMenuData=[],this.validaPass=0,this.isAuth=!1,this._unsubscribeAll=new C.x,this.validaPass=0}ejecuto(t){this.idtipoparticipeSelected=t.value}iniciarSession(){this.keycloak.login()}cerrarSession(){this.keycloak.logout()}ngOnInit(){var t=this;return(0,E.Z)(function*(){t.isLogueado=yield t.keycloak.isLoggedIn(),t.isLogueado&&(t.perfilUsuario=yield t.keycloak.loadUserProfile()),t.signinForm=new n.nJ({username:new n.p4(t.username,n.kI.required),password:new n.p4(t.password,n.kI.required),rememberMe:new n.p4(!0),idtipoparticipeSelected:new n.p4(t.idtipoparticipeSelected,n.kI.required)})})()}ngAfterViewInit(){}ngOnDestroy(){this._unsubscribeAll.next(1),this._unsubscribeAll.complete()}signin(){this.signinForm.invalid||(this.usuario=new Z(this.username,"","","","","","",this.idtipoparticipeSelected),this.jwtAuth.listapermiso(this.usuario).subscribe(i=>{console.log(i),this.validaPass=i,this.validaPass.valueOf()<3?this.jwtAuth.signin(this.username,this.password,this.idtipoparticipeSelected).subscribe(r=>{const s=new J.N0;let c=JSON.stringify(r);sessionStorage.setItem(this.jwtAuth.JWT_TOKEN,c);let d=JSON.parse(sessionStorage.getItem(this.jwtAuth.JWT_TOKEN));s.decodeToken(d.access_token),this.menuUsuario=new R.q(this.username,this.idtipoparticipeSelected),this.menuService.lista(this.menuUsuario).subscribe(f=>{this.getMenuData=f;let b=JSON.stringify(f),u=JSON.parse(b);this.infousu=u[0].usuario.nombre+" "+u[0].usuario.apellido,this.jwtAuth.user={id:"5b700c45639d2c0c54b354ba",displayName:this.infousu,role:u[0].usuario.roles[0].name,username:u[0].usuario.username,cparticipe:u[0].usuario.cparticipe,usuario_id:u[0].usuario.usuario_id,idtipoparticipe:this.idtipoparticipeSelected,correo:u[0].usuario.email,pass:this.password},this.jwtAuth.user.username=u[0].usuario.username,this.jwtAuth.user.cparticipe=u[0].usuario.cparticipe,this.jwtAuth.user.role=u[0].usuario.roles[0].name,this.jwtAuth.user.usuario_id=u[0].usuario.usuario_id,this.jwtAuth.user.idtipoparticipe=this.idtipoparticipeSelected,this.jwtAuth.user.correo=u[0].usuario.email,this.jwtAuth.user.pass=this.password,this.cparticipe=u[0].usuario.cparticipe,this.usuario_id=u[0].usuario.usuario_id,localStorage.getItem(this.jwtAuth.JWT_TOKEN),this.jwtAuth.traerIP().subscribe(T=>{let he=new Date,fe=JSON.stringify(T.ip);this.miip=fe,this.auditoria=new W.p(this.miip,this.usuario_id,this.username,"logueandose",this.idtipoparticipeSelected,this.cparticipe,he),this.auditoriaService.insertar(this.auditoria).subscribe()}),this.navigationService.sendObjectSource(f);const ge=this.tipoparticipe.find(T=>T.idparticipe==this.idtipoparticipeSelected);this.jwtAuth.idtipoparticipe=this.idtipoparticipeSelected,this.jwtAuth.descripcion=ge.descripcion,this.isLogueado=!0,this.jwtAuth.isLoggedIn(!0),this._snackBar.open("Accediendo","INFO",{duration:1e3,horizontalPosition:"right",verticalPosition:"top"}),this.router.navigate(["/reporte/resumen"])})},r=>{this.validaPass=this.validaPass.valueOf()+1,this.isLogueado=!1,this.usuario=new Z(this.username,"","","","","","",this.idtipoparticipeSelected),this.jwtAuth.permisousu(this.usuario).subscribe(s=>{console.log(s)}),this._snackBar.open("Verificar datos","INFO",{duration:2e3,horizontalPosition:"right",verticalPosition:"top"})}):(this.usuario=new Z(this.username,"","","","","","",this.idtipoparticipeSelected),this.jwtAuth.permisobloq(this.usuario).subscribe(),this.isLogueado=!1,this._snackBar.open("Clave esta bloqueada","INFO",{duration:2e3,horizontalPosition:"right",verticalPosition:"top"}))}))}olvidoClave(){this.validaPass.valueOf()<3?this.router.navigate(["/sessions/forgot-password"]):this._snackBar.open("Clave esta bloqueada"+this.validaPass,"INFO",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}autoSignIn(){"/"!==this.jwtAuth.return&&(this.egretLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0,20)}...`,{width:"320px"}),setTimeout(()=>{this.signin(),this.egretLoader.close()},2e3))}openSnackBar(t,i){this._snackBar.open(t,i)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(n.QS),e.Y36(U.t),e.Y36(k.P),e.Y36(p.F0),e.Y36(p.gz),e.Y36(I.ux),e.Y36(z.h),e.Y36($.I),e.Y36(K.f),e.Y36(V.MZ))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-signin"]],viewQuery:function(t,i){if(1&t&&(e.Gf(N.pW,5),e.Gf(x.lW,5)),2&t){let r;e.iGM(r=e.CRH())&&(i.progressBar=r.first),e.iGM(r=e.CRH())&&(i.submitButton=r.first)}},decls:32,vars:9,consts:[[1,"seciton-left"],[1,"form-holder","h-full-screen","mat-bg-card","mat-elevation-z4",3,"perfectScrollbar"],["fxLayout","column",1,"signup-form",3,"formGroup","ngSubmit"],[1,"form-headline","text-center","mb-32"],[1,"font-weight-light"],["fxLayout","row wrap","fxLayoutAlign","center center",1,"mb-48"],["width","600px","src","assets/Logo.jpg","alt",""],[1,"full-width"],["placeholder","seleccionar tipoparticipe","formControlName","idtipoparticipeSelected",3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"full-width"],["matInput","","formControlName","username","type","username","name","username","placeholder","username",3,"ngModel","ngModelChange"],["matInput","","formControlName","password","type","password","name","password","placeholder","********",3,"ngModel","ngModelChange"],["name","rememberMe",3,"formControl"],["mat-raised-button","","color","primary"],[1,"my-32"],[1,"mat-color-primary","colortexto","text-center","full-width",3,"click"],[3,"value"]],template:function(t,i){1&t&&(e._UZ(0,"div",0),e.TgZ(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return i.signin()}),e.TgZ(3,"div",3)(4,"h1",4),e._uU(5,"BIENVENIDO"),e.qZA()(),e.TgZ(6,"div",5),e._UZ(7,"img",6),e.qZA(),e.TgZ(8,"mat-form-field",7)(9,"mat-select",8),e.NdJ("selectionChange",function(s){return i.ejecuto(s)})("ngModelChange",function(s){return i.idtipoparticipeSelected=s}),e.YNc(10,X,2,2,"mat-option",9),e.qZA()(),e.TgZ(11,"DIV")(12,"mat-form-field",10)(13,"mat-label"),e._uU(14,"DNI"),e.qZA(),e.TgZ(15,"input",11),e.NdJ("ngModelChange",function(s){return i.username=s}),e.qZA()(),e.TgZ(16,"mat-form-field",10)(17,"mat-label"),e._uU(18,"Password"),e.qZA(),e.TgZ(19,"input",12),e.NdJ("ngModelChange",function(s){return i.password=s}),e.qZA()(),e._UZ(20,"br"),e.qZA(),e._UZ(21,"br")(22,"br"),e.TgZ(23,"mat-checkbox",13),e._uU(24,"Recuerdame en este dispositivo"),e.qZA(),e.TgZ(25,"mat-label"),e._uU(26),e.qZA(),e.TgZ(27,"button",14),e._uU(28," Ingresar "),e.qZA(),e._UZ(29,"mat-divider",15),e.TgZ(30,"a",16),e.NdJ("click",function(){return i.olvidoClave()}),e._uU(31,"Olvido su contrase\xf1a"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("perfectScrollbar",e.DdM(8,ee)),e.xp6(1),e.Q6J("formGroup",i.signinForm),e.xp6(7),e.Q6J("ngModel",i.idtipoparticipeSelected),e.xp6(1),e.Q6J("ngForOf",i.tipoparticipe),e.xp6(5),e.Q6J("ngModel",i.username),e.xp6(4),e.Q6J("ngModel",i.password),e.xp6(4),e.Q6J("formControl",i.signinForm.controls.rememberMe),e.xp6(3),e.Oqu(i.errorMsg))},dependencies:[v.sg,n._Y,n.Fj,n.JJ,n.JL,n.oH,n.sg,n.u,L.FC,m.eB,h.v_,h.$V,S.k0,j.CK,F.x8,O.d,g.xw,g.Wh,Q.$],styles:[".colortexto[_ngcontent-%COMP%]{color:#00f;text-decoration:underline}"]}),o})();function ie(o,l){if(1&o&&(e.TgZ(0,"mat-option",24),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.idparticipe),e.xp6(1),e.hij(" ",t.descripcion," ")}}const oe=function(){return{}};let ne=(()=>{class o{constructor(t,i,r,s,c,d){this.fb=t,this.jwtAuth=i,this.egretLoader=r,this.router=s,this.route=c,this._snackBar=d,this.messageChange=new C.x,this.errorMsg="",this.telefono="9999",this.celular="9999",this.tipoparticipe=[{idparticipe:"1",descripcion:"Individual"},{idparticipe:"2",descripcion:"Copropiedad"},{idparticipe:"3",descripcion:"Sucesi\xf3n"}],this._unsubscribeAll=new C.x}ejecuto(t){this.idtipoparticipeSelected=t.value}ngOnInit(){this.signupForm=new n.nJ({username:new n.p4(this.username,n.kI.required),password:new n.p4(this.password,n.kI.required),nombre:new n.p4(this.nombre,n.kI.required),apellido:new n.p4(this.apellido,n.kI.required),email:new n.p4(this.email,n.kI.required),agreed:new n.p4(!0),idtipoparticipeSelected:new n.p4(this.idtipoparticipeSelected,n.kI.required)})}ngAfterViewInit(){}ngOnDestroy(){this._unsubscribeAll.next(1),this._unsubscribeAll.complete()}signAdd(){this.signupForm.invalid||(console.log(this.nombre+this.apellido),this.usuario=new Z(this.username,this.password,this.nombre,this.apellido,this.email,this.telefono,this.celular,this.idtipoparticipeSelected),this.jwtAuth.signadd(this.usuario).subscribe(i=>{const r=new J.N0;console.log(i);let s=JSON.stringify(i);sessionStorage.setItem(this.jwtAuth.JWT_TOKEN,s);let c=JSON.parse(sessionStorage.getItem(this.jwtAuth.JWT_TOKEN));r.decodeToken(c.jwtToken),this.jwtAuth.JWT_TOKEN=c.jwtToken,this.jwtAuth.user={id:"5b700c45639d2c0c54b354ba",displayName:this.username,role:"SA",usuario_id:0},this._snackBar.open("Accediendo","INFO",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"}),this.router.navigate(["/sessions/signin"])},i=>{this._snackBar.open("Verificar datos","INFO",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}))}autoSignIn(){"/"!==this.jwtAuth.return&&(this.egretLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0,20)}...`,{width:"320px"}),setTimeout(()=>{this.signAdd(),this.egretLoader.close()},2e3))}openSnackBar(t,i){this._snackBar.open(t,i)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(n.QS),e.Y36(U.t),e.Y36(k.P),e.Y36(p.F0),e.Y36(p.gz),e.Y36(I.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-signup"]],viewQuery:function(t,i){if(1&t&&(e.Gf(N.pW,5),e.Gf(x.lW,5)),2&t){let r;e.iGM(r=e.CRH())&&(i.progressBar=r.first),e.iGM(r=e.CRH())&&(i.submitButton=r.first)}},decls:41,vars:11,consts:[[1,"seciton-left"],[1,"section-left-content"],[1,"form-holder","h-full-screen","mat-elevation-z4","mat-bg-card",3,"perfectScrollbar"],["fxLayout","column","fxLayoutAlign","start",1,"signup-form",3,"formGroup","ngSubmit"],[1,"form-headline","text-center","mb-16"],[1,"text-muted"],["fxLayout","row wrap","fxLayoutAlign","center center",1,"mb-32"],["width","300px","src","assets/Logo.jpg","alt",""],["fxLayout","row wrap","fxLayoutGap.md","16px","fxLayoutGap.lg","16px"],[1,"full-width"],["placeholder","seleccionar tipoparticipe","formControlName","idtipoparticipeSelected",3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","1 1 0%","appearance","outline"],["formControlName","nombre","matInput","","type","text","name","Last_name","placeholder","nombre",3,"ngModel","ngModelChange"],["formControlName","apellido","matInput","","type","text","name","apellido","placeholder","Last name",3,"ngModel","ngModelChange"],["appearance","outline",1,"full-width"],["matInput","","formControlName","username","type","text","name","username","placeholder","Username",3,"ngModel","ngModelChange"],["matInput","","formControlName","email","type","email","name","email","placeholder","Email",3,"ngModel","ngModelChange"],["matInput","","formControlName","password","type","password","name","password","placeholder","********",3,"ngModel","ngModelChange"],["formControlName","agreed",1,"mb-24"],["mat-raised-button","","color","primary"],[1,"my-32"],[1,"text-center"],[1,"mat-color-primary","text-center","full-width",3,"routerLink"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA(),e.TgZ(2,"div",2)(3,"form",3),e.NdJ("ngSubmit",function(){return i.signAdd()}),e.TgZ(4,"div",4)(5,"p",5),e._uU(6,"Registrar cuenta de acceso"),e.qZA()(),e.TgZ(7,"div",6),e._UZ(8,"img",7),e.qZA(),e.TgZ(9,"div",8)(10,"mat-form-field",9)(11,"mat-select",10),e.NdJ("selectionChange",function(s){return i.ejecuto(s)})("ngModelChange",function(s){return i.idtipoparticipeSelected=s}),e.YNc(12,ie,2,2,"mat-option",11),e.qZA()(),e.TgZ(13,"mat-form-field",12)(14,"mat-label"),e._uU(15,"Nombre"),e.qZA(),e.TgZ(16,"input",13),e.NdJ("ngModelChange",function(s){return i.nombre=s}),e.qZA()()(),e.TgZ(17,"mat-form-field",12)(18,"mat-label"),e._uU(19,"Apellido"),e.qZA(),e.TgZ(20,"input",14),e.NdJ("ngModelChange",function(s){return i.apellido=s}),e.qZA()(),e.TgZ(21,"mat-form-field",15)(22,"mat-label"),e._uU(23,"Username"),e.qZA(),e.TgZ(24,"input",16),e.NdJ("ngModelChange",function(s){return i.username=s}),e.qZA()(),e.TgZ(25,"mat-form-field",15)(26,"mat-label"),e._uU(27,"Email"),e.qZA(),e.TgZ(28,"input",17),e.NdJ("ngModelChange",function(s){return i.email=s}),e.qZA()(),e.TgZ(29,"mat-form-field",15)(30,"mat-label"),e._uU(31,"Password"),e.qZA(),e.TgZ(32,"input",18),e.NdJ("ngModelChange",function(s){return i.password=s}),e.qZA()(),e.TgZ(33,"mat-checkbox",19),e._uU(34,"I agree with terms and condtions"),e.qZA(),e.TgZ(35,"button",20),e._uU(36,"Signup"),e.qZA(),e._UZ(37,"mat-divider",21),e.TgZ(38,"div",22)(39,"a",23),e._uU(40,"Sign in with an existing account"),e.qZA()()()()),2&t&&(e.xp6(2),e.Q6J("perfectScrollbar",e.DdM(10,oe)),e.xp6(1),e.Q6J("formGroup",i.signupForm),e.xp6(8),e.Q6J("ngModel",i.idtipoparticipeSelected),e.xp6(1),e.Q6J("ngForOf",i.tipoparticipe),e.xp6(4),e.Q6J("ngModel",i.nombre),e.xp6(4),e.Q6J("ngModel",i.apellido),e.xp6(4),e.Q6J("ngModel",i.username),e.xp6(4),e.Q6J("ngModel",i.email),e.xp6(4),e.Q6J("ngModel",i.password),e.xp6(7),e.Q6J("routerLink","/sessions/signin"))},dependencies:[v.sg,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,L.FC,m.eB,h.v_,h.$V,S.k0,j.CK,F.x8,O.d,g.xw,g.SQ,g.Wh,g.yH,Q.$,p.rH]}),o})();var A=a(97392);const re=function(){return["/"]};let se=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-not-found"]],decls:15,vars:2,consts:[[1,"d-flex","align-items-center","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),e._uU(4,"error"),e.qZA(),e.TgZ(5,"div",4)(6,"h1",5),e._uU(7,"404"),e.qZA(),e.TgZ(8,"div",6),e._uU(9,"Page Not Found!"),e.qZA()()(),e.TgZ(10,"div",7)(11,"button",8),e._uU(12,"Back to Dashboard"),e.qZA(),e.TgZ(13,"button",9),e._uU(14,"Report this Problem"),e.qZA()()()()),2&t&&(e.xp6(11),e.Q6J("routerLink",e.DdM(1,re)))},dependencies:[m.eB,A.Hw,p.rH]}),o})();const ae=function(){return["/"]};let le=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-error"]],decls:15,vars:2,consts:[[1,"page-wrap","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),e._uU(4,"warning"),e.qZA(),e.TgZ(5,"div",4)(6,"h1",5),e._uU(7,"500"),e.qZA(),e.TgZ(8,"div",6),e._uU(9,"Server Error!"),e.qZA()()(),e.TgZ(10,"div",7)(11,"button",8),e._uU(12,"Back to Dashboard"),e.qZA(),e.TgZ(13,"button",9),e._uU(14,"Report this Problem"),e.qZA()()()()),2&t&&(e.xp6(11),e.Q6J("routerLink",e.DdM(1,ae)))},dependencies:[m.eB,A.Hw,p.rH]}),o})();const ue=function(){return["/"]};let pe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-contacto-soporte"]],decls:12,vars:2,consts:[[1,"page-wrap","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-24","mr-8",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),e._uU(4,"warning"),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"h1",5),e.TgZ(7,"div",6),e._uU(8," Pongase en contacto con el administrador "),e.qZA()()(),e.TgZ(9,"div",7)(10,"button",8),e._uU(11," Regresar al Login "),e.qZA()()()()),2&t&&(e.xp6(10),e.Q6J("routerLink",e.DdM(1,ue)))},dependencies:[m.eB,A.Hw,p.rH]}),o})();var ce=a(39379);const de=[{path:"",children:[{path:"signup",component:ne,data:{title:"Signup"}},{path:"signin",component:te,data:{title:"Signin"}},{path:"forgot-password",component:Y.o,data:{title:"Forgot password"}},{path:"password",component:ce.I,data:{title:"password"}},{path:"lockscreen",component:H,data:{title:"Lockscreen"}},{path:"404",component:se,data:{title:"Not Found"}},{path:"error",component:le,data:{title:"Error"}},{path:"contacto",component:pe,data:{title:"Contacto"}}]}];let me=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[v.ez,n.u5,D.aw,n.UX,B.m,q.o9,P.Xd,p.Bz.forChild(de)]}),o})()}}]);