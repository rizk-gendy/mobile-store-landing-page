(this["webpackJsonpmobile-store-landing-page"]=this["webpackJsonpmobile-store-landing-page"]||[]).push([[0],{10:function(e,n,c){},12:function(e,n,c){"use strict";c.r(n);var t=c(1),s=c.n(t),a=c(5),r=c.n(a),i=(c(10),c(2)),l=c(3),o=c(0),b=[{page:"categories",links:[{label:"Smart Phones",icon:Object(o.jsx)(i.d,{}),url:"/products"},{label:"Tablets",icon:Object(o.jsx)(i.d,{}),url:"/products"},{label:"Accessories",icon:Object(o.jsx)(i.d,{}),url:"/products"}]},{page:"services",links:[{label:"maintenance",icon:Object(o.jsx)(i.b,{}),url:"/products"},{label:"contact us",icon:Object(o.jsx)(i.b,{}),url:"/products"},{label:"help",icon:Object(o.jsx)(i.b,{}),url:"/products"},{label:"online paying",icon:Object(o.jsx)(i.b,{}),url:"/products"}]},{page:"company",links:[{label:"about",icon:Object(o.jsx)(i.c,{}),url:"/products"},{label:"our vision",icon:Object(o.jsx)(i.c,{}),url:"/products"}]}],j=s.a.createContext(),u=function(e){var n=e.children,c=Object(t.useState)(!1),s=Object(l.a)(c,2),a=s[0],r=s[1],i=Object(t.useState)(!1),u=Object(l.a)(i,2),d=u[0],O=u[1],h=Object(t.useState)({}),p=Object(l.a)(h,2),x=p[0],m=p[1],g=Object(t.useState)({page:"",links:[]}),v=Object(l.a)(g,2),f=v[0],S=v[1];return Object(o.jsx)(j.Provider,{value:{isSidebarOpen:a,openSidebar:function(){r(!0)},closeSidebar:function(){r(!1)},isSubmenuOpen:d,openSubmenu:function(e,n){var c=b.find((function(n){return n.page===e}));S(c),m(n),O(!0)},closeSubmenu:function(){O(!1)},location:x,page:f},children:n})},d=function(){return Object(t.useContext)(j)},O=function(){var e=d(),n=e.openSidebar,c=e.openSubmenu,t=e.closeSubmenu,s=function(e){var n=e.target.textContent,t=e.target.getBoundingClientRect(),s=(t.left+t.right)/2,a=t.bottom-3;console.log(n),console.log(t),c(n,{center:s,bottom:a})};return Object(o.jsx)("nav",{className:"nav",onMouseOver:function(e){e.target.classList.contains("link-btn")||t()},children:Object(o.jsxs)("div",{className:"nav-center",children:[Object(o.jsxs)("div",{className:"nav-header",children:[Object(o.jsx)("h3",{style:{color:"white"},children:"Mobile Store"}),Object(o.jsx)("button",{className:"btn toggle-btn",onClick:n,children:Object(o.jsx)(i.a,{})})]}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:" link-btn",onMouseOver:s,children:"categories"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:" link-btn",onMouseOver:s,children:"services"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:" link-btn",onMouseOver:s,children:"company"})})]}),Object(o.jsx)("button",{className:"btn Signin-btn",children:"Sign in"})]})})},h=c.p+"static/media/phone.1dc254a6.png",p=function(){var e=d().closeSubmenu;return Object(o.jsx)("section",{className:"hero",onMouseOver:e,children:Object(o.jsxs)("div",{className:"hero-center",children:[Object(o.jsxs)("article",{className:"hero-info",children:[Object(o.jsx)("h1",{children:"Enjoy the Shopping Experience"}),Object(o.jsx)("p",{children:"Start shopping now , Shop all you want and repay in small bits of cash every month up to 48 months!"}),Object(o.jsx)("button",{className:"btn",children:"Shop now"})]}),Object(o.jsx)("article",{className:"hero-images",children:Object(o.jsx)("img",{src:h,className:"phone-img",alt:"phone"})})]})})},x=function(){var e=d(),n=e.isSidebarOpen,c=e.closeSidebar;return Object(o.jsx)("aside",{className:"".concat(n?"sidebar-wrapper show":"sidebar-wrapper"),children:Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsx)("button",{className:"close-btn",onClick:c,children:Object(o.jsx)(i.e,{})}),Object(o.jsx)("div",{className:"sidebar-links",children:b.map((function(e,n){var c=e.links,t=e.page;return Object(o.jsxs)("article",{children:[Object(o.jsx)("h4",{children:t}),Object(o.jsx)("div",{className:"sidebar-sublinks",children:c.map((function(e,n){var c=e.url,t=e.icon,s=e.label;return Object(o.jsxs)("a",{href:c,children:[t,s]},n)}))})]},n)}))})]})})},m=function(){var e=d(),n=e.isSubmenuOpen,c=e.location,s=e.page,a=s.page,r=s.links,i=Object(t.useRef)(null),b=Object(t.useState)("col-2"),j=Object(l.a)(b,2),u=j[0],O=j[1];return Object(t.useEffect)((function(){O("col-2");var e=i.current,n=c.center,t=c.bottom;e.style.left="".concat(n,"px"),e.style.top="".concat(t,"px"),3===r.length&&O("col-3"),r.length>3&&O("col-4")}),[c]),Object(o.jsxs)("aside",{className:"".concat(n?"submenu show":"submenu"),ref:i,children:[Object(o.jsx)("h4",{children:a}),Object(o.jsx)("div",{className:"submenu-center ".concat(u),children:r.map((function(e,n){var c=e.label,t=e.icon,s=e.url;return Object(o.jsxs)("a",{href:s,children:[t,c]},n)}))})]})};var g=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(O,{}),Object(o.jsx)(x,{}),Object(o.jsx)(p,{}),Object(o.jsx)(m,{})]})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{children:Object(o.jsx)(g,{})})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.b8c98ac9.chunk.js.map