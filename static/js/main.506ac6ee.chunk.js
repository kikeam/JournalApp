(this["webpackJsonpreact-redux-journal-app"]=this["webpackJsonpreact-redux-journal-app"]||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(32),r=n.n(c),s=n(8),o=n(29),i=n(62),u="[Auth] Login",l="[Auth] Logout",d="[UI] Set Error",j="[UI] Remove Error",b="[UI] Start loading",p="[UI] Finish loading",m="[Notes] New note",O="[Notes] Set active note",h="[Notes] Load notes",f="[Notes] Updated note",x="[Notes] Delete note",_="[Notes] Logout Cleaning",v=n(4),g={loading:!1,msgError:null},y=n(43),N={notes:[],active:null},w="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,C=Object(o.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{uid:t.payload.uid,name:t.payload.displayName};case l:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(v.a)(Object(v.a)({},e),{},{msgError:t.payload});case j:return Object(v.a)(Object(v.a)({},e),{},{msgError:null});case b:return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case p:return Object(v.a)(Object(v.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(v.a)(Object(v.a)({},e),{},{active:Object(v.a)({},t.payload)});case m:return Object(v.a)(Object(v.a)({},e),{},{notes:[t.payload].concat(Object(y.a)(e.notes))});case h:return Object(v.a)(Object(v.a)({},e),{},{notes:Object(y.a)(t.payload)});case f:return Object(v.a)(Object(v.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case x:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case _:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:[]});default:return e}}}),E=Object(o.d)(C,w(Object(o.a)(i.a))),k=n(20),S=n(21),A=n(10),P=n(28),I=(n(173),n(75),Object({NODE_ENV:"production",PUBLIC_URL:"/JournalApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),T={apiKey:I.REACT_APP_apiKey,authDomain:I.REACT_APP_authDomain,projectId:I.REACT_APP_projectId,storageBucket:I.REACT_APP_storageBucket,messagingSenderId:I.REACT_APP_messagingSenderId,appId:I.REACT_APP_appId};P.a.initializeApp(T);var D=P.a.firestore(),R=new P.a.auth.GoogleAuthProvider,L=n(33),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(k.a)(t,2),c=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},o=function(e){var t=e.target;r(Object(v.a)(Object(v.a)({},c),{},Object(L.a)({},t.name,t.value)))};return[c,o,s]},W=n(9),F=n.n(W),B=n(15),K=n(22),z=n.n(K),H=function(e){return{type:d,payload:e}},G=function(){return{type:p}},J=function(){var e=Object(B.a)(F.a.mark((function e(t){var n,a,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dx0pryfzn/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dx0pryfzn/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),q=function(e,t){return{type:O,payload:Object(v.a)({id:e},t)}},V=function(e,t){return{type:m,payload:Object(v.a)({id:e},t)}},X=function(e){return function(){var t=Object(B.a)(F.a.mark((function t(n,a){var c,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(v.a)({},e)).id,t.next=6,D.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(M(e.id,r)),z.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},M=function(e,t){return{type:f,payload:{id:e,note:Object(v.a)({id:e},t)}}},Q=function(e){return{type:x,payload:e}},Y=function(e,t){return function(n){return n({type:b}),P.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(Z(t.uid,t.displayName)),n(G())})).catch((function(e){console.log(e),n(G()),z.a.fire("Error",e.message,"error")}))}},Z=function(e,t){return{type:u,payload:{uid:e,displayName:t}}},$=function(){return{type:l}},ee=n(1),te=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=U({email:"",password:""}),a=Object(k.a)(n,2),c=a[0],r=a[1],o=c.email,i=c.password;return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("h3",{className:"auth__title",children:"Login"}),Object(ee.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(Y(o,i))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(ee.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(ee.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:i,onChange:r}),Object(ee.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(ee.jsxs)("div",{className:"auth__social-networks",children:[Object(ee.jsx)("p",{children:"Login with social networks"}),Object(ee.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){P.a.auth().signInWithPopup(R).then((function(t){var n=t.user;e(Z(n.uid,n.displayName))}))}))},children:[Object(ee.jsx)("div",{className:"google-icon-wrapper",children:Object(ee.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(ee.jsx)("p",{className:"btn-text",children:Object(ee.jsx)("b",{children:"Sign in with google"})})]})]}),Object(ee.jsx)(S.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},ne=n(63),ae=n.n(ne),ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=U({name:"Hernando",email:"nando@gmail.com",password:"123456",password2:"123456"}),a=Object(k.a)(n,2),c=a[0],r=a[1],o=c.name,i=c.email,u=c.password,l=c.password2,d=function(){return 0===o.trim().length?(e(H("Name is required")),!1):ae.a.isEmail(i)?u!==l||u.length<5?(e(H("Password should be at least 6 characters and match each other")),!1):(e({type:j}),!0):(e(H("Email is not valid")),!1)};return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("h3",{className:"auth__title",children:"Register"}),Object(ee.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d()&&e(function(e,t,n){return function(a){P.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(B.a)(F.a.mark((function e(t){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(Z(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),z.a.fire("Error",e.message,"error")}))}}(i,u,o))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(ee.jsx)("div",{className:"auth__alert-error",children:t}),Object(ee.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(ee.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(ee.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:r}),Object(ee.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:l,onChange:r}),Object(ee.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(ee.jsx)(S.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},re=function(){return Object(ee.jsx)("div",{className:"auth__main",children:Object(ee.jsx)("div",{className:"auth__box-container",children:Object(ee.jsxs)(A.d,{children:[Object(ee.jsx)(A.b,{exact:!0,path:"/auth/login",component:te}),Object(ee.jsx)(A.b,{exact:!0,path:"/auth/register",component:ce}),Object(ee.jsx)(A.a,{to:"/auth/login"})]})})})},se=n(35),oe=["isAuthenticated","component"],ie=function(e){var t=e.isAuthenticated,n=e.component,a=Object(se.a)(e,oe);return Object(ee.jsx)(A.b,Object(v.a)(Object(v.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(v.a)({},e)):Object(ee.jsx)(A.a,{to:"/auth/login"})}}))},ue=n(64),le=n.n(ue),de=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,o=le()(n),i=Object(s.b)();return Object(ee.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){i(q(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(ee.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(ee.jsxs)("div",{className:"journal__entry-body",children:[Object(ee.jsx)("p",{className:"journal__entry-title",children:a}),Object(ee.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(ee.jsxs)("div",{className:"journal__entry-date-box",children:[Object(ee.jsxs)("span",{children:[" ",o.format("dddd")," "]}),Object(ee.jsxs)("h4",{children:[" ",o.format("Do")," "]})]})]})},je=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(ee.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(ee.jsx)(de,Object(v.a)({},e),e.id)}))})},be=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(ee.jsxs)("aside",{className:"journal__sidebar",children:[Object(ee.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(ee.jsxs)("h3",{className:"mt-5",children:[Object(ee.jsx)("i",{className:"far fa-moon"}),Object(ee.jsxs)("span",{children:[" ",t]})]}),Object(ee.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(B.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.auth().signOut();case 2:t($()),t({type:_});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(ee.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(B.a)(F.a.mark((function e(t,n){var a,c,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.prev=2,e.next=5,D.collection("".concat(a,"/journal/notes")).add(c);case 5:r=e.sent,t(q(r.id,c)),t(V(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(ee.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(ee.jsx)(je,{})]})},pe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(ee.jsxs)("div",{className:"notes__appbar",children:[Object(ee.jsx)("span",{children:"28 de agosto 2020"}),Object(ee.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(B.a)(F.a.mark((function t(n,a){var c,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,z.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){z.a.showLoading()}}),t.next=4,J(e);case 4:r=t.sent,c.url=r,n(X(c)),z.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(ee.jsx)("button",{className:"btn",onClick:function(){e(X(t))},children:"Save"})]})]})},me=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=U(t),c=Object(k.a)(n,3),r=c[0],o=c[1],i=c[2],u=r.body,l=r.title,d=r.id,j=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==j.current&&(i(t),j.current=t.id)}),[t,i]),Object(a.useEffect)((function(){e(q(r.id,Object(v.a)({},r)))}),[r,e]);return Object(ee.jsxs)("div",{className:"notes__main-content",children:[Object(ee.jsx)(pe,{}),Object(ee.jsxs)("div",{className:"notes__content",children:[Object(ee.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:l,onChange:o}),Object(ee.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:u,onChange:o}),t.url&&Object(ee.jsx)("div",{className:"notes__image",children:Object(ee.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(ee.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(B.a)(F.a.mark((function t(n,a){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,D.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(Q(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(d))},children:"Delete"})]})},Oe=function(){return Object(ee.jsxs)("div",{className:"nothing__main-content",children:[Object(ee.jsxs)("p",{children:["Select something",Object(ee.jsx)("br",{}),"pr create an entry!"]}),Object(ee.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},he=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(ee.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(ee.jsx)(be,{}),Object(ee.jsx)("main",{children:e?Object(ee.jsx)(me,{}):Object(ee.jsx)(Oe,{})})]})},fe=["isAuthenticated","component"],xe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(se.a)(e,fe);return Object(ee.jsx)(A.b,Object(v.a)(Object(v.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(A.a,{to:"/"}):Object(ee.jsx)(n,Object(v.a)({},e))}}))},_e=function(){Object(s.b)();var e=Object(a.useState)(!0),t=Object(k.a)(e,2),n=(t[0],t[1],Object(a.useState)(!1)),c=Object(k.a)(n,2),r=c[0];c[1];return Object(ee.jsx)(S.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(A.d,{children:[Object(ee.jsx)(xe,{path:"/auth",component:re,isAuthenticated:r}),Object(ee.jsx)(ie,{exact:!0,isAuthenticated:r,path:"/",component:he}),Object(ee.jsx)(A.a,{to:"/auth/login"})]})})})},ve=function(){return Object(ee.jsx)(s.a,{store:E,children:Object(ee.jsx)(_e,{})})};n(171);r.a.render(Object(ee.jsx)(ve,{}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.506ac6ee.chunk.js.map