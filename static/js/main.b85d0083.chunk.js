(this["webpackJsonpmeteo-app"]=this["webpackJsonpmeteo-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(5),a=n.n(s),r=(n(11),n(3)),j=n.n(r),l=n(6),u=n(4),d=(n(13),n.p+"static/media/cold.730f90f9.gif"),b=n.p+"static/media/warm.45518947.gif",o=n(0);function p(){var e=Object(c.useState)(void 0),t=Object(u.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),a=Object(u.a)(s,2),r=a[0],p=a[1],m=Object(c.useRef)(),h=Object(c.useRef)();function x(e){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(j.a.mark((function e(t){var n,c,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=m.current.value,c="http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&appid=200b01d1422a0be035b2231349dd26ae"),e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:a=e.sent,s.ok?i(a):alert("Unknown City :("),m.current.value="";case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(n),n?Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{onSubmit:x,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"city",children:"Enter a City"}),Object(o.jsx)("input",{onChange:function(e){return p(e.target.value)},type:"text",placeholder:"Bejaia",ref:m})]}),Object(o.jsx)("button",{disabled:!r,type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(o.jsxs)("section",{className:"display1",children:[Object(o.jsxs)("h2",{children:["Weather For ",n.name]}),Object(o.jsxs)("div",{className:"display",children:[Object(o.jsxs)("article",{children:[Object(o.jsxs)("p",{children:["Temperature : ",Object(o.jsx)("span",{children:Math.round(n.main.temp)})," ","celsius"]}),Object(o.jsxs)("p",{children:["Minimal temp : ",Object(o.jsx)("span",{children:Math.round(n.main.temp_min)})," ","celsius"," "]}),Object(o.jsxs)("p",{children:["Maximal temp : ",Object(o.jsx)("span",{children:Math.round(n.main.temp_max)})," ","celsius"," "]}),Object(o.jsxs)("p",{children:["feel temp : ",Object(o.jsx)("span",{children:Math.round(n.main.feels_like)})," ","celsius"," "]}),Object(o.jsxs)("p",{children:["Humidity : ",Object(o.jsx)("span",{children:n.main.humidity})," %"," "]})]}),Object(o.jsx)("div",{className:"images",children:Object(o.jsx)("img",{src:n.main.temp>12?b:d,alt:""})})]})]})]}):Object(o.jsxs)("form",{onSubmit:x,children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"city",children:"Enter a City"}),Object(o.jsx)("input",{onChange:function(e){return p(e.target.value)},type:"text",placeholder:"Bejaia",ref:m})]}),Object(o.jsx)("button",{disabled:!r,ref:h,type:"submit",className:"btn btn-primary",children:"Submit"})]})}var m=function(){return Object(o.jsx)("div",{className:"App container",children:Object(o.jsx)("main",{children:Object(o.jsx)(p,{})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.b85d0083.chunk.js.map