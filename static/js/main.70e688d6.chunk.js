(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var d=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(a.useState)(0),o=Object(r.a)(c,2),u=o[0],d=o[1],h=function(t,e){var n=e.sortType,s=e.isReversed,c=Object(i.a)(t);return c.sort((function(t,e){switch(n){case 1:return t.localeCompare(e);case 2:return t.length-e.length;default:return 0}})),s&&c.reverse(),console.log(n,s),c}(j,{isReversed:n,sortType:u}),p=n||0!==u;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":1!==u}),onClick:function(){return d(1)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":2!==u}),onClick:function(){return d(2)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!n}),onClick:function(){return s(!n)},children:"Reverse"}),p&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return d(0),void s(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:h.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.70e688d6.chunk.js.map