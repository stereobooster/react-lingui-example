(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,a,t){},153:function(e,a,t){var n={"./en/messages.js":[156,1]};function r(e){var a=n[e];return a?t.e(a[1]).then(function(){var e=a[0];return t.t(e,7)}):Promise.resolve().then(function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a})}r.keys=function(){return Object.keys(n)},r.id=153,e.exports=r},155:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(50),c=(t(81),t(27)),l=t(28),s=t(33),i=t(29),u=t(34),p=t(75),m=t(22),g=t(72),d=t.n(g),h=(t(149),t(159)),f=t(161),v=t(160),E=t(158),b=["en","de"],j=function(e){return-1!==b.indexOf(e)},O="en",w=t(51),k=t.n(w),y=t(30),N=t(73),x=t(74),A=function(e){function a(){var e,n;Object(c.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(o)))).state={catalogs:{}},n.loadCatalog=function(){var e=Object(x.a)(k.a.mark(function e(a){var r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(153)("./".concat(a,"/messages.js"));case 2:r=e.sent,n.setState(function(e){return{catalogs:Object(N.a)({},e.catalogs,Object(y.a)({},a,r))}});case 4:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),n}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadCatalog(this.props.language)}},{key:"shouldComponentUpdate",value:function(e,a){var t=e.language,n=a.catalogs;return!(t!==this.props.language&&!n[t])||(this.loadCatalog(t),!1)}},{key:"render",value:function(){var e=this.props,a=e.children,t=e.language,n=this.state.catalogs;return n[t]?r.a.createElement(m.I18nProvider,{language:t,catalogs:n},a):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component);console.log("2af3b28");var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,r.a.createElement(m.Trans,{id:"Edit <0>src/App.js</0> and save to reload.",components:[r.a.createElement("code",null)]})),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(m.Trans,{id:"Learn React"}))))},L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"404")))},D=function(e){e.match;var a=(navigator.language||navigator.browserLanguage||O).split("-"),t=Object(p.a)(a,1)[0];return j(t)||(t=O),r.a.createElement(h.a,{to:"/".concat(t)})},T=function(e){var a=e.match,t=a.params.language;return j(t)?r.a.createElement(A,{language:t},r.a.createElement(v.a,null,r.a.createElement(f.a,{path:"".concat(a.path,"/"),component:C,exact:!0}),r.a.createElement(f.a,{component:L}))):(t=O,r.a.createElement(A,{language:t},r.a.createElement(f.a,{component:L})))},U=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(f.a,{path:"/",component:D,exact:!0}),r.a.createElement(f.a,{path:"/:language",component:T})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=document.getElementById("root");_.hasChildNodes()?Object(o.hydrate)(r.a.createElement(U,null),_):Object(o.render)(r.a.createElement(U,null),_),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},76:function(e,a,t){e.exports=t(155)},81:function(e,a,t){}},[[76,3,2]]]);
//# sourceMappingURL=main.e0d895b4.chunk.js.map