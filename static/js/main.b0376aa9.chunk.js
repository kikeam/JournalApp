(this["webpackJsonpreact-redux-journal-app"]=this["webpackJsonpreact-redux-journal-app"]||[]).push([[0],{171:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);a(2);var n=a(32),o=a.n(n),r=a(8),c=a(29),i=a(62),d="[Auth] Login",u="[Auth] Logout",s="[UI] Set Error",l="[UI] Remove Error",O="[UI] Start loading",p="[UI] Finish loading",j="[Notes] New note",b="[Notes] Set active note",_="[Notes] Load notes",g="[Notes] Updated note",h="[Notes] Delete note",E="[Notes] Logout Cleaning",v=a(4),A={loading:!1,msgError:null},y=a(43),P={notes:[],active:null},S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,f=Object(c.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{uid:t.payload.uid,name:t.payload.displayName};case u:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(v.a)(Object(v.a)({},e),{},{msgError:t.payload});case l:return Object(v.a)(Object(v.a)({},e),{},{msgError:null});case O:return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case p:return Object(v.a)(Object(v.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(v.a)(Object(v.a)({},e),{},{active:Object(v.a)({},t.payload)});case j:return Object(v.a)(Object(v.a)({},e),{},{notes:[t.payload].concat(Object(y.a)(e.notes))});case _:return Object(v.a)(Object(v.a)({},e),{},{notes:Object(y.a)(t.payload)});case g:return Object(v.a)(Object(v.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case h:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case E:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:[]});default:return e}}}),T=Object(c.d)(f,S(Object(c.a)(i.a))),m=(a(9),a(14),a(20),a(21),a(10),a(28)),I=(a(173),a(76),Object({NODE_ENV:"production",PUBLIC_URL:"/JournalApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),w={apiKey:I.REACT_APP_apiKey,authDomain:I.REACT_APP_authDomain,projectId:I.REACT_APP_projectId,storageBucket:I.REACT_APP_storageBucket,messagingSenderId:I.REACT_APP_messagingSenderId,appId:I.REACT_APP_appId};m.a.initializeApp(w);m.a.firestore(),new m.a.auth.GoogleAuthProvider,a(33),a(22);var C=a(1),N=(a(63),a(35),a(64),function(){return Object(C.jsx)(r.a,{store:T,children:Object(C.jsx)("h1",{children:"hello world"})})});a(171);o.a.render(Object(C.jsx)(N,{}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.b0376aa9.chunk.js.map