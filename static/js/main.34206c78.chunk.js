(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports={link:"LanguageSwitcher_link__1Rhf0",selected:"LanguageSwitcher_selected__142Pv"}},29:function(e,n,t){e.exports=t(72)},34:function(e,n,t){},59:function(e,n,t){var a={"./cs/messages.js":[73,1],"./en/messages.js":[74,2]};function r(e){var n=a[e];return n?t.e(n[1]).then(function(){var e=n[0];return t.t(e,7)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}r.keys=function(){return Object.keys(a)},r.id=59,e.exports=r},72:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(25),c=t.n(l),o=(t(34),t(7)),u=t(8),s=t(10),i=t(9),m=t(11),p=t(28),E=t(75),h=t(78),d=t(76),g=t(77),f=t(2),v=t(16),b=t.n(v),w=t(26),y=t(15),T={en:"English",cs:"\u010cesky"},k=function(e){return new Promise(function(n){return setTimeout(n,e)})},j=function(){var e=Object(w.a)(b.a.mark(function e(n){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("ReactSnap"===navigator.userAgent){e.next=5;break}return console.log("start"),e.next=4,k(1e3);case 4:console.log("finish");case 5:return e.abrupt("return",t(59)("./".concat(n,"/messages.js")));case 6:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),O=Object(y.setupI18n)();O.willActivate(j);var x=function(e){return!!T[e]},C=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(r)))).state={value:""},t.onChange=function(e){return t.setState({value:e.target.value})},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{placeholder:this.props.label,value:e,onChange:this.onChange}),this.props.children(e||this.props.defaultValue))}}]),n}(r.a.Component),S=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(r)))).state={value:1},t.onChange=function(e){var n=e.target.value;t.setState({value:n})},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.state.value;return a.createElement(a.Fragment,null,a.createElement("input",{type:"range",imin:0,max:20,onChange:this.onChange,value:e}),a.createElement("input",{type:"number",min:0,max:20,value:e,onChange:this.onChange}),this.props.children(e))}}]),n}(a.Component),_=t(79),R=t(17),I=t.n(R),L=function(e){var n=e.locales;return r.a.createElement(E.a,{children:function(e){var t=e.match;return Object.keys(n).map(function(e){var a=t.url.replace(new RegExp("/".concat(t.params.locale,"($|/)")),"/".concat(e));return r.a.createElement(_.a,{key:e,to:a,activeClassName:I.a.selected,className:I.a.link},n[e])})}})},A=t(27),P=t.n(A),D=function(e){var n=e.locales;return r.a.createElement(E.a,{children:function(e){var t=e.match;return r.a.createElement(P.a,{htmlAttributes:{lang:t.params.locale},link:Object.keys(n).map(function(e){return{rel:"alternate",href:t.url.replace(new RegExp("/".concat(t.params.locale,"($|/)")),"/".concat(e)),hreflang:e}})})}})};function N(){var e="ReactSnap"===navigator.userAgent;return r.a.createElement("div",{key:e?"#dee8eb":"#fefee1",style:{padding:"20px 50px",background:e?"#dee8eb":"#fefee1"}},r.a.createElement(D,{locales:T}),r.a.createElement("p",null,r.a.createElement(f.Trans,{id:"Select language:"})," ",r.a.createElement(L,{locales:T})),r.a.createElement("h1",null,r.a.createElement(f.Trans,{id:"LinguiJS example"})),r.a.createElement("p",{className:"lead"},r.a.createElement(f.Trans,{id:"This is an example integration of LinguiJS with React apps."})),r.a.createElement("h2",null,r.a.createElement(f.Trans,{id:"Message formatting"})),r.a.createElement("p",null,r.a.createElement(f.Trans,{id:"All messages use ICU MessageFormat, but <0>Trans</0> macro generates this syntax from JSX.",components:[r.a.createElement("strong",null)]})),r.a.createElement("h3",null,r.a.createElement(f.Trans,{id:"Variables"})),r.a.createElement("p",null,r.a.createElement(f.Trans,{id:"Messages can include variables:"})),r.a.createElement(f.I18n,null,function(e){var n=e.i18n;return r.a.createElement(C,{defaultValue:n._({id:"World"}),label:n._({id:"Enter your name"})},function(e){return r.a.createElement("p",null,r.a.createElement(f.Trans,{id:"Hello {name}",values:{name:e}}))})}),r.a.createElement("h3",null,r.a.createElement(f.Trans,{id:"Components"})),r.a.createElement("p",null,r.a.createElement(f.Trans,{id:"<0>HTML</0> and <1>React components</1> works without extra configuration.",components:[r.a.createElement("strong",null),r.a.createElement("strong",null)]})),r.a.createElement("h3",null,r.a.createElement(f.Trans,{id:"Props and strings"})),r.a.createElement("p",null,r.a.createElement(f.Trans,{id:"React props and strings can be translated using <0>i18n</0> core:",components:[r.a.createElement("strong",null)]})," ",r.a.createElement(f.I18n,null,function(e){var n=e.i18n;return r.a.createElement("button",{onClick:function(){return alert(n._({id:"You're looking good!"}))}},r.a.createElement(f.Trans,{id:"Show motto of the day"}))})),r.a.createElement("h2",null,r.a.createElement(f.Trans,{id:"Formatting"})),r.a.createElement("h3",null,r.a.createElement(f.Trans,{id:"Plurals"})),r.a.createElement(S,null,function(e){return r.a.createElement(f.Trans,{id:"{count, plural, =0 {There're no books} one {There's one book} other {There're # books}}",values:{count:e}})}),r.a.createElement("h3",null,r.a.createElement(f.Trans,{id:"Dates"})),r.a.createElement("p",null,r.a.createElement(f.Trans,{id:"Today is {0,date}",values:{0:new Date}})),r.a.createElement("h3",null,r.a.createElement(f.Trans,{id:"Numbers"})),r.a.createElement("p",null,r.a.createElement(f.Trans,{id:"It costs {0,number,number0} which is {1,number,number1} of our income.",values:{0:2e3,1:.2},formats:{number0:{style:"currency",currency:"USD"},number1:{style:"percent"}}})))}var F=function(){return r.a.createElement("div",{style:{padding:"20px 50px"}},r.a.createElement("header",null,r.a.createElement("p",null,r.a.createElement(f.Trans,{id:"404: not found"}))))},J="/react-lingui-example",M=function(e){var n=e.match,t=n.params.locale;return x(t)?(O.activate(t),r.a.createElement(f.I18nProvider,{i18n:O},r.a.createElement(h.a,null,r.a.createElement(E.a,{path:"".concat(n.path,"/"),component:N,exact:!0}),r.a.createElement(E.a,{component:F})))):(O.activate(O.locale||"en"),r.a.createElement(f.I18nProvider,{i18n:O},r.a.createElement(E.a,{component:F})))},U=function(){var e=(navigator.language||navigator.browserLanguage||"en").split("-"),n=Object(p.a)(e,1)[0];return x(n)||(n="en"),r.a.createElement(d.a,{to:"".concat(J,"/").concat(n)})},V=function(e){function n(){return Object(o.a)(this,n),Object(s.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading..."),maxDuration:5e3},r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(E.a,{path:"".concat(J,"/"),component:U,exact:!0}),r.a.createElement(E.a,{path:"".concat(J,"/:locale"),component:M}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=document.getElementById("root");c.a.unstable_createRoot(W).render(r.a.createElement(V,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,4,3]]]);
//# sourceMappingURL=main.34206c78.chunk.js.map