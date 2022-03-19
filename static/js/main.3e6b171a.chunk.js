(this["webpackJsonpreact-redux-journal-app"]=this["webpackJsonpreact-redux-journal-app"]||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(32),r=n.n(c),s=n(8),o=n(29),i=n(62),u="[Auth] Login",l="[Auth] Logout",d="[UI] Set Error",j="[UI] Remove Error",b="[UI] Start loading",p="[UI] Finish loading",h="[Notes] New note",m="[Notes] Set active note",f="[Notes] Load notes",O="[Notes] Updated note",x="[Notes] Delete note",_="[Notes] Logout Cleaning",v=n(4),g={loading:!1,msgError:null},y=n(43),N={notes:[],active:null},w="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,C=Object(o.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{uid:t.payload.uid,name:t.payload.displayName};case l:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(v.a)(Object(v.a)({},e),{},{msgError:t.payload});case j:return Object(v.a)(Object(v.a)({},e),{},{msgError:null});case b:return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case p:return Object(v.a)(Object(v.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(v.a)(Object(v.a)({},e),{},{active:Object(v.a)({},t.payload)});case h:return Object(v.a)(Object(v.a)({},e),{},{notes:[t.payload].concat(Object(y.a)(e.notes))});case f:return Object(v.a)(Object(v.a)({},e),{},{notes:Object(y.a)(t.payload)});case O:return Object(v.a)(Object(v.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case x:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case _:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:[]});default:return e}}}),E=Object(o.d)(C,w(Object(o.a)(i.a))),A=n(9),P=n.n(A),k=n(14),S=n(20),I=n(21),R=n(10),T=n(28),D=(n(173),n(76),Object({NODE_ENV:"production",PUBLIC_URL:"/JournalApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_apiKey:"AIzaSyC72lidJDeTzxDWSMmjgcQ6sC4RlmR_bRs",REACT_APP_authDomain:"react-curso-fh-81d13.firebaseapp.com",REACT_APP_projectId:"react-curso-fh-81d13",REACT_APP_storageBucket:"react-curso-fh-81d13.appspot.com",REACT_APP_messagingSenderId:"336359780620",REACT_APP_appId:"1:336359780620:web:e2e2fc76c91cb6dc099929"})),L={apiKey:D.REACT_APP_apiKey,authDomain:D.REACT_APP_authDomain,projectId:D.REACT_APP_projectId,storageBucket:D.REACT_APP_storageBucket,messagingSenderId:D.REACT_APP_messagingSenderId,appId:D.REACT_APP_appId};T.a.initializeApp(L);var U=T.a.firestore(),W=new T.a.auth.GoogleAuthProvider,z=n(33),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(S.a)(t,2),c=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},o=function(e){var t=e.target;r(Object(v.a)(Object(v.a)({},c),{},Object(z.a)({},t.name,t.value)))};return[c,o,s]},F=n(22),K=n.n(F),H=function(e){return{type:d,payload:e}},J=function(){return{type:p}},G=function(){var e=Object(k.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(v.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(k.a)(P.a.mark((function e(t){var n,a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dx0pryfzn/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dx0pryfzn/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),M=function(e,t){return{type:m,payload:Object(v.a)({id:e},t)}},V=function(e,t){return{type:h,payload:Object(v.a)({id:e},t)}},X=function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){var a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(e);case 2:a=t.sent,n(Q(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Q=function(e){return{type:f,payload:e}},Y=function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n,a){var c,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(v.a)({},e)).id,t.next=6,U.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(Z(e.id,r)),K.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Z=function(e,t){return{type:O,payload:{id:e,note:Object(v.a)({id:e},t)}}},$=function(e){return{type:x,payload:e}},ee=function(e,t){return function(n){return n({type:b}),T.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(te(t.uid,t.displayName)),n(J())})).catch((function(e){console.log(e),n(J()),K.a.fire("Error",e.message,"error")}))}},te=function(e,t){return{type:u,payload:{uid:e,displayName:t}}},ne=function(){return{type:l}},ae=n(1),ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=B({email:"",password:""}),a=Object(S.a)(n,2),c=a[0],r=a[1],o=c.email,i=c.password;return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)("h3",{className:"auth__title",children:"Login"}),Object(ae.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(ee(o,i))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(ae.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(ae.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:i,onChange:r}),Object(ae.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(ae.jsxs)("div",{className:"auth__social-networks",children:[Object(ae.jsx)("p",{children:"Login with social networks"}),Object(ae.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){T.a.auth().signInWithPopup(W).then((function(t){var n=t.user;e(te(n.uid,n.displayName))}))}))},children:[Object(ae.jsx)("div",{className:"google-icon-wrapper",children:Object(ae.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(ae.jsx)("p",{className:"btn-text",children:Object(ae.jsx)("b",{children:"Sign in with google"})})]})]}),Object(ae.jsx)(I.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},re=n(63),se=n.n(re),oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=B({name:"Hernando",email:"nando@gmail.com",password:"123456",password2:"123456"}),a=Object(S.a)(n,2),c=a[0],r=a[1],o=c.name,i=c.email,u=c.password,l=c.password2,d=function(){return 0===o.trim().length?(e(H("Name is required")),!1):se.a.isEmail(i)?u!==l||u.length<5?(e(H("Password should be at least 6 characters and match each other")),!1):(e({type:j}),!0):(e(H("Email is not valid")),!1)};return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)("h3",{className:"auth__title",children:"Register"}),Object(ae.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d()&&e(function(e,t,n){return function(a){T.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(k.a)(P.a.mark((function e(t){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(te(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),K.a.fire("Error",e.message,"error")}))}}(i,u,o))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(ae.jsx)("div",{className:"auth__alert-error",children:t}),Object(ae.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(ae.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(ae.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:r}),Object(ae.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:l,onChange:r}),Object(ae.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(ae.jsx)(I.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},ie=function(){return Object(ae.jsx)("div",{className:"auth__main",children:Object(ae.jsx)("div",{className:"auth__box-container",children:Object(ae.jsxs)(R.d,{children:[Object(ae.jsx)(R.b,{exact:!0,path:"/auth/login",component:ce}),Object(ae.jsx)(R.b,{exact:!0,path:"/auth/register",component:oe}),Object(ae.jsx)(R.a,{to:"/auth/login"})]})})})},ue=n(35),le=["isAuthenticated","component"],de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,le);return Object(ae.jsx)(R.b,Object(v.a)(Object(v.a)({},a),{},{component:function(e){return t?Object(ae.jsx)(n,Object(v.a)({},e)):Object(ae.jsx)(R.a,{to:"/auth/login"})}}))},je=n(64),be=n.n(je),pe=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,o=be()(n),i=Object(s.b)();return Object(ae.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){i(M(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(ae.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(ae.jsxs)("div",{className:"journal__entry-body",children:[Object(ae.jsx)("p",{className:"journal__entry-title",children:a}),Object(ae.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(ae.jsxs)("div",{className:"journal__entry-date-box",children:[Object(ae.jsxs)("span",{children:[" ",o.format("dddd")," "]}),Object(ae.jsxs)("h4",{children:[" ",o.format("Do")," "]})]})]})},he=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(ae.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(ae.jsx)(pe,Object(v.a)({},e),e.id)}))})},me=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(ae.jsxs)("aside",{className:"journal__sidebar",children:[Object(ae.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(ae.jsxs)("h3",{className:"mt-5",children:[Object(ae.jsx)("i",{className:"far fa-moon"}),Object(ae.jsxs)("span",{children:[" ",t]})]}),Object(ae.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(k.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.auth().signOut();case 2:t(ne()),t({type:_});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(ae.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(k.a)(P.a.mark((function e(t,n){var a,c,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.prev=2,e.next=5,U.collection("".concat(a,"/journal/notes")).add(c);case 5:r=e.sent,t(M(r.id,c)),t(V(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ae.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(ae.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(ae.jsx)(he,{})]})},fe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(ae.jsxs)("div",{className:"notes__appbar",children:[Object(ae.jsx)("span",{children:"28 de agosto 2020"}),Object(ae.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n,a){var c,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,K.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){K.a.showLoading()}}),t.next=4,q(e);case 4:r=t.sent,c.url=r,n(Y(c)),K.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(ae.jsxs)("div",{children:[Object(ae.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(ae.jsx)("button",{className:"btn",onClick:function(){e(Y(t))},children:"Save"})]})]})},Oe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=B(t),c=Object(S.a)(n,3),r=c[0],o=c[1],i=c[2],u=r.body,l=r.title,d=r.id,j=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==j.current&&(i(t),j.current=t.id)}),[t,i]),Object(a.useEffect)((function(){e(M(r.id,Object(v.a)({},r)))}),[r,e]);return Object(ae.jsxs)("div",{className:"notes__main-content",children:[Object(ae.jsx)(fe,{}),Object(ae.jsxs)("div",{className:"notes__content",children:[Object(ae.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:l,onChange:o}),Object(ae.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:u,onChange:o}),t.url&&Object(ae.jsx)("div",{className:"notes__image",children:Object(ae.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(ae.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n,a){var c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,U.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n($(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(d))},children:"Delete"})]})},xe=function(){return Object(ae.jsxs)("div",{className:"nothing__main-content",children:[Object(ae.jsxs)("p",{children:["Select something",Object(ae.jsx)("br",{}),"pr create an entry!"]}),Object(ae.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},_e=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(ae.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(ae.jsx)(me,{}),Object(ae.jsx)("main",{children:e?Object(ae.jsx)(Oe,{}):Object(ae.jsx)(xe,{})})]})},ve=["isAuthenticated","component"],ge=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,ve);return Object(ae.jsx)(R.b,Object(v.a)(Object(v.a)({},a),{},{component:function(e){return t?Object(ae.jsx)(R.a,{to:"/"}):Object(ae.jsx)(n,Object(v.a)({},e))}}))},ye=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(S.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),i=Object(S.a)(o,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){T.a.auth().onAuthStateChanged(function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(te(n.uid,n.displayName)),l(!0),e(X(n.uid))):l(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,l]),c?Object(ae.jsx)("h1",{children:"Wait..."}):Object(ae.jsx)(I.a,{children:Object(ae.jsx)("div",{children:Object(ae.jsxs)(R.d,{children:[Object(ae.jsx)(ge,{path:"/auth",component:ie,isAuthenticated:u}),Object(ae.jsx)(de,{exact:!0,isAuthenticated:u,path:"/",component:_e}),Object(ae.jsx)(R.a,{to:"/auth/login"})]})})})},Ne=function(){return Object(ae.jsx)(s.a,{store:E,children:Object(ae.jsx)(ye,{})})};n(171);r.a.render(Object(ae.jsx)(Ne,{}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.3e6b171a.chunk.js.map