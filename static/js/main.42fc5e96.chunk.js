(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={contactList:"Contacts_contactList__3ry3Z",item:"Contacts_item__1K2vs",contactItem:"Contacts_contactItem__2MJkr"}},function(t,e,n){t.exports={form:"form_form__3Meps",input:"form_input__23G7r"}},,function(t,e,n){t.exports={input:"Filter_input__rxDHU",filter:"Filter_filter__1qgZ1"}},,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),s=n(9),o=n.n(s),i=(n(16),n(10)),u=n(2),l=n(20),b=(n(17),n(5)),j=n.n(b);var f=function(t){var e=t.contacts,n=t.onDelete;return Object(c.jsx)("ul",{className:j.a.contactList,children:e.map((function(t){return Object(c.jsx)("li",{className:j.a.item,children:Object(c.jsxs)("p",{className:j.a.contactItem,children:[Object(c.jsxs)("span",{children:[Object(c.jsxs)("strong",{children:[t.name,":"]})," ",t.number]}),Object(c.jsx)("button",{className:"btn",onClick:function(){return n(t.id)},children:"Delete"})]})},t.id)}))})},m=n(8),O=n.n(m);var h=function(t){var e=t.onChange,n=t.value;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("label",{className:O.a.filter,children:[Object(c.jsx)("span",{children:"Filter:"}),Object(c.jsx)("input",{className:O.a.input,type:"text",name:"filter",onChange:e,value:n})]})})},d=n(6),p=n.n(d);var x=function(t){var e=t.onSubmit,n=Object(a.useState)(""),r=Object(u.a)(n,2),s=r[0],o=r[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),b=l[0],j=l[1],f=function(){o(""),j("")},m=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":j(c);break;default:return}};return Object(c.jsxs)("form",{className:p.a.form,onSubmit:function(t){t.preventDefault(),e(s,b),f()},children:[Object(c.jsxs)("label",{className:p.a.input,children:["Name:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",onChange:m,value:s,name:"name"})]}),Object(c.jsxs)("label",{className:p.a.input,children:["Number:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"number",onChange:m,value:b})]}),Object(c.jsx)("input",{className:"btn",type:"submit",value:"Add contact"})]})},v="contacts";var g=function(){var t=Object(a.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],s=Object(a.useState)([]),o=Object(u.a)(s,2),b=o[0],j=o[1];return Object(a.useEffect)((function(){var t=localStorage.getItem(v),e=JSON.parse(t);j(e||[])}),[]),Object(a.useEffect)((function(){localStorage.setItem(v,JSON.stringify(b))}),[b]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(x,{onSubmit:function(t,e){var n=t.toLowerCase();if(b.find((function(t){return t.name.toLowerCase()===n})))window.alert("".concat(t," is alredy in contacts"));else{var c={name:t,number:e,id:Object(l.a)()};j((function(t){return[c].concat(Object(i.a)(t))}))}}}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(h,{onChange:function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"filter":r(c);break;default:return}}}),Object(c.jsx)(f,{contacts:function(){var t=n.toLowerCase();return b.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),value:n,onDelete:function(t){j((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),_()}],[[18,1,2]]]);
//# sourceMappingURL=main.42fc5e96.chunk.js.map