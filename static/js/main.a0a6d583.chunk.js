(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(8),s=c.n(n),a=c(4),i=(c(13),c(1)),b=c(0),r=c(2),j=function(){return Object(r.jsx)("h1",{className:"app__home",children:"Home page"})},l=(c(15),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),o=function(){var t=Object(i.h)().tabId,e=Object(i.g)(),c=l.find((function(e){return e.id===t}));return Object(b.useEffect)((function(){!c&&l.length&&e("/tabs/".concat(l[0].id))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("ul",{className:"list",children:l.map((function(t){return Object(r.jsx)("li",{className:"list__item",children:Object(r.jsx)(a.b,{to:"/tabs/".concat(t.id),children:t.title})},t.id)}))}),c&&Object(r.jsx)("p",{className:"Tab__content",children:c.content})]})},d=function(){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsxs)("nav",{className:"app__nav",children:[Object(r.jsx)(a.c,{to:"/",className:"nav__link",style:function(t){var e=t.isActive;return{color:e?"#fff":"#545e6f",background:e?"#7600dc":"#f0f0f0"}},children:"Home"}),Object(r.jsx)(a.c,{to:"/tabs",className:"nav__link",style:function(t){var e=t.isActive;return{color:e?"#fff":"#545e6f",background:e?"#7600dc":"#f0f0f0"}},children:"Tabs"})]}),Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(j,{})}),Object(r.jsx)(i.b,{path:"/tabs/",element:Object(r.jsx)(o,{}),children:Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(o,{})})}),Object(r.jsx)(i.b,{path:"/home",element:Object(r.jsx)(i.a,{replace:!0,to:"/"})})]})]})};s.a.render(Object(r.jsx)(a.a,{children:Object(r.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a0a6d583.chunk.js.map