(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports={link:"LanguageSwitcher_link__1C96R",selected:"LanguageSwitcher_selected__2adr6"}},35:function(e,n,t){e.exports=t(80)},40:function(e,n,t){},64:function(e,n,t){var a={"./cs/messages.js":[81,1],"./en/messages.js":[82,2]};function r(e){var n=a[e];return n?t.e(n[1]).then(function(){var e=n[0];return t.t(e,7)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}r.keys=function(){return Object.keys(a)},r.id=64,e.exports=r},80:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(29),c=t.n(l),o=(t(40),t(7)),u=t(8),i=t(11),s=t(9),m=t(12),p=t(34),E=t(10),h=t(14),d=t(1),g=t(17),v=t.n(g),f=t(30),b=t(16),w={en:"English",cs:"\u010cesky"},T=function(e){return new Promise(function(n){return setTimeout(n,e)})},y=function(){var e=Object(f.a)(v.a.mark(function e(n){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("ReactSnap"===navigator.userAgent){e.next=3;break}return e.next=3,T(1e3);case 3:return e.abrupt("return",t(64)("./".concat(n,"/messages.js")));case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),k=Object(b.setupI18n)();k.willActivate(y);var j=function(e){return!!w[e]},O=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={value:""},t.onChange=function(e){return t.setState({value:e.target.value})},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{placeholder:this.props.label,value:e,onChange:this.onChange}),this.props.children(e||this.props.defaultValue))}}]),n}(r.a.Component),x=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={value:1},t.onChange=function(e){var n=e.target.value;t.setState({value:n})},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.state.value;return a.createElement(a.Fragment,null,a.createElement("input",{type:"range",imin:0,max:20,onChange:this.onChange,value:e}),a.createElement("input",{type:"number",min:0,max:20,value:e,onChange:this.onChange}),this.props.children(e))}}]),n}(a.Component),C=t(18),S=t.n(C),_=function(e){var n=e.locales;return r.a.createElement(E.b,{children:function(e){var t=e.match;return Object.keys(n).map(function(e){var a=t.url.replace(new RegExp("/".concat(t.params.locale,"($|/)")),"/".concat(e));return r.a.createElement(h.b,{key:e,to:a,activeClassName:S.a.selected,className:S.a.link},n[e])})}})},R=t(33),I=t.n(R),L=function(e){var n=e.locales;return r.a.createElement(E.b,{children:function(e){var t=e.match;return r.a.createElement(I.a,{htmlAttributes:{lang:t.params.locale},link:Object.keys(n).map(function(e){return{rel:"alternate",href:t.url.replace(new RegExp("/".concat(t.params.locale,"($|/)")),"/".concat(e)),hreflang:e}})})}})};function A(){var e="ReactSnap"===navigator.userAgent;return r.a.createElement("div",{style:{padding:"20px 50px",background:e?"#dee8eb":"#fefee1"}},"v3.0",r.a.createElement(L,{locales:w}),r.a.createElement("p",null,r.a.createElement(d.Trans,{id:"Select language:"})," ",r.a.createElement(_,{locales:w})),r.a.createElement("h1",null,r.a.createElement(d.Trans,{id:"LinguiJS example"})),r.a.createElement("p",{className:"lead"},r.a.createElement(d.Trans,{id:"This is an example integration of LinguiJS with React apps."})),r.a.createElement("h2",null,r.a.createElement(d.Trans,{id:"Message formatting"})),r.a.createElement("p",null,r.a.createElement(d.Trans,{id:"All messages use ICU MessageFormat, but <0>Trans</0> macro generates this syntax from JSX.",components:[r.a.createElement("strong",null)]})),r.a.createElement("h3",null,r.a.createElement(d.Trans,{id:"Variables"})),r.a.createElement("p",null,r.a.createElement(d.Trans,{id:"Messages can include variables:"})),r.a.createElement(d.I18n,null,function(e){var n=e.i18n;return r.a.createElement(O,{defaultValue:n._({id:"World"}),label:n._({id:"Enter your name"})},function(e){return r.a.createElement("p",null,r.a.createElement(d.Trans,{id:"Hello {name}",values:{name:e}}))})}),r.a.createElement("h3",null,r.a.createElement(d.Trans,{id:"Components"})),r.a.createElement("p",null,r.a.createElement(d.Trans,{id:"<0>HTML</0> and <1>React components</1> works without extra configuration.",components:[r.a.createElement("strong",null),r.a.createElement("strong",null)]})),r.a.createElement("h3",null,r.a.createElement(d.Trans,{id:"Props and strings"})),r.a.createElement("p",null,r.a.createElement(d.Trans,{id:"React props and strings can be translated using <0>i18n</0> core:",components:[r.a.createElement("strong",null)]})," ",r.a.createElement(d.I18n,null,function(e){var n=e.i18n;return r.a.createElement("button",{onClick:function(){return alert(n._({id:"You're looking good!"}))}},r.a.createElement(d.Trans,{id:"Show motto of the day"}))})),r.a.createElement("h2",null,r.a.createElement(d.Trans,{id:"Formatting"})),r.a.createElement("h3",null,r.a.createElement(d.Trans,{id:"Plurals"})),r.a.createElement(x,null,function(e){return r.a.createElement(d.Trans,{id:"{count, plural, =0 {There're no books} one {There's one book} other {There're # books}}",values:{count:e}})}),r.a.createElement("h3",null,r.a.createElement(d.Trans,{id:"Dates"})),r.a.createElement("p",null,r.a.createElement(d.Trans,{id:"Today is {0,date}",values:{0:new Date}})),r.a.createElement("h3",null,r.a.createElement(d.Trans,{id:"Numbers"})),r.a.createElement("p",null,r.a.createElement(d.Trans,{id:"It costs {0,number,number0} which is {1,number,number1} of our income.",values:{0:2e3,1:.2},formats:{number0:{style:"currency",currency:"USD"},number1:{style:"percent"}}})))}var D=function(){return r.a.createElement("div",{style:{padding:"20px 50px"}},r.a.createElement("header",null,r.a.createElement("p",null,r.a.createElement(d.Trans,{id:"404: not found"}))))},M="/react-lingui-example",N=function(e){var n=e.match,t=n.params.locale;return j(t)?(k.activate(t),r.a.createElement(d.I18nProvider,{i18n:k},r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"".concat(n.path,"/"),component:A,exact:!0}),r.a.createElement(E.b,{component:D})))):(k.activate(k.locale||"en"),r.a.createElement(d.I18nProvider,{i18n:k},r.a.createElement(E.b,{component:D})))},P=function(){var e=(navigator.language||navigator.browserLanguage||"en").split("-"),n=Object(p.a)(e,1)[0];return j(n)||(n="en"),r.a.createElement(E.a,{to:"".concat(M,"/").concat(n)})},F=function(e){function n(){return Object(o.a)(this,n),Object(i.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"".concat(M,"/"),component:P,exact:!0}),r.a.createElement(E.b,{path:"".concat(M,"/:locale"),component:N})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=document.getElementById("root"),U=r.a.unstable_ConcurrentMode,V=r.a.createElement(U,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading..."),maxDuration:5e3},r.a.createElement(F,null)));c.a.unstable_createRoot(J).render(V),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,4,3]]]);
//# sourceMappingURL=main.3223f7ba.chunk.js.map