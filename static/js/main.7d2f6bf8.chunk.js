(this["webpackJsonpreact-firebase-bbs"]=this["webpackJsonpreact-firebase-bbs"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},43:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(28),i=c.n(s),j=(c(36),c(37),c(11)),r=c(4),b=c(2);var l=function(){return Object(b.jsxs)("header",{className:"main_header",children:[Object(b.jsx)("h1",{children:"REACT \xa0(\u2e1d\u2e1d\uff65\u1d17\uff65\u2e1d\u2e1d)\u0a6d\u02d2\u02d2"}),Object(b.jsx)("p",{children:" React & firebase BBS"})]})};var o=function(){return Object(b.jsx)("div",{className:"main_navBox",children:Object(b.jsxs)("ul",{className:"main_nav",children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{exact:!0,to:"/",activeClassName:"active_nav",children:"HOME"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{exact:!0,to:"/Write",activeClassName:"active_nav",children:"WRITE"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{exact:!0,to:"/login",activeClassName:"active_nav",children:"LOGIN"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{exact:!0,to:"/join",activeClassName:"active_nav",children:"JOIN"})})]})})},d=c(31),h=c(20),O=(c(43),c(16));c(44),c(47);O.a.apps.length||O.a.initializeApp({apiKey:"YOUR FIREBACE KEY",authDomain:"helloandroid-14f73.firebaseapp.com",databaseURL:"https://helloandroid-14f73-default-rtdb.firebaseio.com",projectId:"helloandroid-14f73",storageBucket:"helloandroid-14f73.appspot.com",messagingSenderId:"827656854837",appId:"1:827656854837:web:8f2aefa7489c336eb1c07c",measurementId:"G-TK5Z47JPDR"});O.a.database();var x=O.a.firestore();var u=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){x.collection("Bbs").get().then((function(e){e.forEach((function(e){var t=e.data();a([].concat(Object(d.a)(c),[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.b_date}),Object(b.jsx)("td",{children:t.b_time}),Object(b.jsx)("td",{children:t.b_writer}),Object(b.jsx)("td",{children:t.b_subject})]})]))}))}))}),[]),Object(b.jsx)("div",{className:"bbsMain_list",children:Object(b.jsxs)("table",{className:"bbs_list",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"DATA"}),Object(b.jsx)("th",{children:"TIME"}),Object(b.jsx)("th",{children:"WRITER"}),Object(b.jsx)("th",{children:"SUBJECT"})]})}),Object(b.jsx)("tbody",{children:c})]})})};var m=function(){return Object(b.jsx)("footer",{className:"footer_box",children:Object(b.jsx)("address",{children:" CopyRight \xa9 kimbyulook@naver.com"})})},f=c(19),v=c(17),p=c(25),_=c.n(p);c(49);var g=function(e){var t=e.history,c=Object(n.useState)({b_write:"",b_subject:"",b_content:""}),a=Object(h.a)(c,2),s=a[0],i=a[1],j=function(e){var t=e.target,c=t.value,n=t.name;i(Object(v.a)(Object(v.a)({},s),{},Object(f.a)({},n,c)))};return Object(b.jsxs)("div",{className:"write_box",children:[Object(b.jsxs)("div",{className:"input_box",children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{name:"b_writer",placeholder:"\uc791\uc131\uc790",onChange:j})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{name:"b_subject",placeholder:"\uc81c\ubaa9",onChange:j})}),Object(b.jsx)("div",{className:"input_content",children:Object(b.jsx)("input",{name:"b_content",placeholder:"\ub0b4\uc639",onChange:j,type:"text"})})]}),Object(b.jsx)("div",{className:"btn_box",children:Object(b.jsx)("button",{onClick:function(){var e=Object(v.a)(Object(v.a)({},s),{},{b_date:_()().format("YYYY[-]MM[-]DD"),b_time:_()().format("HH:mm:ss")});x.collection("Bbs").add(e).then((function(e){console.log(e),t.push("/")}))},children:"\uc62c\ub9ac\uae30"})})]})};var N=function(){return Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(l,{}),Object(b.jsx)(o,{}),Object(b.jsxs)("section",{className:"main_section",children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(b.jsx)(r.a,{exact:!0,path:"/Write",component:g})]}),Object(b.jsx)(m,{})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.7d2f6bf8.chunk.js.map