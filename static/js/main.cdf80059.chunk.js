(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],{12:function(e,s,a){},13:function(e,s,a){},14:function(e,s,a){"use strict";a.r(s);var r=a(0),t=a(1),n=a.n(t),c=a(6),i=a.n(c),o=(a(12),a(2)),l=a(3),d=a(5),m=function(e,s){var a=Object(t.useState)({username:"",email:"",password:"",password2:""}),r=Object(o.a)(a,2),n=r[0],c=r[1],i=Object(t.useState)({}),m=Object(o.a)(i,2),u=m[0],j=m[1],b=Object(t.useState)(!1),p=Object(o.a)(b,2),h=p[0],O=p[1];return Object(t.useEffect)((function(){0===Object.keys(u).length&&h&&e()})),{handleChange:function(e){var s=e.target,a=s.name,r=s.value;c(Object(d.a)(Object(d.a)({},n),{},Object(l.a)({},a,r)))},values:n,handleSubmit:function(e){e.preventDefault(),j(s(n)),O(!0)},errors:u}};function u(e){var s={};return e.username.trim()||(s.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email="Email address is invalid"):s.email="Email required",e.password?e.password.length<6&&(s.password="Password requries 6 characters or more"):s.password="Password required",e.password2?e.password2!==e.password&&(s.password2="Passwords do not match"):s.password2="Password is required",s}a(13);var j=function(e){var s=e.submitForm,a=m(s,u),t=a.handleChange,n=a.values,c=a.handleSubmit,i=a.errors;return Object(r.jsx)("div",{className:".form-content-right",children:Object(r.jsxs)("form",{className:"form",onSubmit:c,children:[Object(r.jsx)("h1",{children:"Get started with us today!"}),Object(r.jsx)("hr",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"username",className:"form-label",id:"usernameID",children:"Username"}),Object(r.jsx)("input",{id:"username",type:"text",name:"username",className:"form-input",placeholder:"Enter your username",value:n.username,onChange:t}),i.username&&Object(r.jsx)("p",{children:i.username})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(r.jsx)("input",{id:"email",type:"text",name:"email",className:"form-input",placeholder:"Enter your email",value:n.email,onChange:t}),i.email&&Object(r.jsx)("p",{children:i.email})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(r.jsx)("input",{id:"password",type:"password",name:"password",className:"form-input",placeholder:"Enter your password",value:n.password,onChange:t}),i.password&&Object(r.jsx)("p",{children:i.password})]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("label",{htmlFor:"password2",className:"form-label",children:"Confirm Password"}),Object(r.jsx)("input",{id:"password2",type:"password",name:"password2",className:"form-input",placeholder:"Enter your password again",value:n.password2,onChange:t}),i.password2&&Object(r.jsx)("p",{children:i.password2})]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"form-input-btn",type:"button-submit",children:"Sign me up!"}),Object(r.jsxs)("p",{className:"form-input-login",children:["Already have an Account? Login ",Object(r.jsx)("a",{href:"#",children:"here"})]})]})})},b=function(){return Object(r.jsx)("div",{className:"form-content-right",children:Object(r.jsx)("div",{className:"form-success",children:"Success! We have received your request."})})},p=function(){var e=Object(t.useState)(!1),s=Object(o.a)(e,2),a=s[0],n=s[1];return Object(r.jsx)("div",{children:a?Object(r.jsx)(b,{}):Object(r.jsx)(j,{submitForm:function(){n(!0)}})})};var h=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(p,{})})})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cdf80059.chunk.js.map