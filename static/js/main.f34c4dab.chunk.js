(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports={link:"LanguageSwitcher_link__1Rhf0",selected:"LanguageSwitcher_selected__142Pv"}},30:function(e,a,t){e.exports=t(74)},35:function(e,a,t){},60:function(e,a,t){var i={"./cs/messages.js":[75,1],"./en/messages.js":[76,2]};function n(e){var a=i[e];return a?t.e(a[1]).then(function(){var e=a[0];return t.t(e,7)}):Promise.resolve().then(function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a})}n.keys=function(){return Object.keys(i)},n.id=60,e.exports=n},74:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(25),u=t.n(r),s=(t(35),t(7)),o=t(8),m=t(10),l=t(9),c=t(11),d=t(29),p=t(77),v=t(80),h=t(78),f=t(79),b=t(2),g=t(16),E=t.n(g),q=t(26),x=t(15),T={en:"English",cs:"\u010cesky"},w=function(e){return new Promise(function(a){return setTimeout(a,e)})},y=function(){var e=Object(q.a)(E.a.mark(function e(a){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("ReactSnap"===navigator.userAgent){e.next=5;break}return console.log("start"),e.next=4,w(4e3);case 4:console.log("finish");case 5:return e.abrupt("return",t(60)("./".concat(a,"/messages.js")));case 6:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),k=Object(x.setupI18n)();k.willActivate(y);var O=function(e){return!!T[e]},j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={value:""},t.onChange=function(e){return t.setState({value:e.target.value})},t}return Object(c.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.value;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{placeholder:this.props.label,value:e,onChange:this.onChange}),this.props.children(e||this.props.defaultValue))}}]),a}(n.a.Component),C=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={value:1},t.onChange=function(e){var a=e.target.value;t.setState({value:a})},t}return Object(c.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.value;return i.createElement(i.Fragment,null,i.createElement("input",{type:"range",imin:0,max:20,onChange:this.onChange,value:e}),i.createElement("input",{type:"number",min:0,max:20,value:e,onChange:this.onChange}),this.props.children(e))}}]),a}(i.Component),N=t(81),A=t(17),P=t.n(A),S=function(e){var a=e.locales;return n.a.createElement(p.a,{children:function(e){var t=e.match;return Object.keys(a).map(function(e){var i=t.url.replace(new RegExp("/".concat(t.params.locale,"($|/)")),"/".concat(e));return n.a.createElement(N.a,{key:e,to:i,activeClassName:P.a.selected,className:P.a.link},a[e])})}})},I=t(27),M=t.n(I),H=function(e){var a=e.locales;return n.a.createElement(p.a,{children:function(e){var t=e.match;return n.a.createElement(M.a,{htmlAttributes:{lang:t.params.locale},link:Object.keys(a).map(function(e){return{rel:"alternate",href:t.url.replace(new RegExp("/".concat(t.params.locale,"($|/)")),"/".concat(e)),hreflang:e}})})}})},V=t(28);function D(){return n.a.createElement("div",{style:{padding:"20px 50px"}},n.a.createElement(H,{locales:T}),n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"Select language:"})," ",n.a.createElement(S,{locales:T})),n.a.createElement("h1",null,n.a.createElement(b.Trans,{id:"LinguiJS example"})),n.a.createElement("p",{className:"lead"},n.a.createElement(b.Trans,{id:"This is an example integration of LinguiJS with React apps."})),n.a.createElement("h2",null,n.a.createElement(b.Trans,{id:"Message formatting"})),n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"All messages use ICU MessageFormat, but <0>Trans</0> macro generates this syntax from JSX.",components:[n.a.createElement("strong",null)]})),n.a.createElement("h3",null,n.a.createElement(b.Trans,{id:"Variables"})),n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"Messages can include variables:"})),n.a.createElement(b.I18n,null,function(e){var a=e.i18n;return n.a.createElement(j,{defaultValue:a._({id:"World"}),label:a._({id:"Enter your name"})},function(e){return n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"Hello {name}",values:{name:e}}))})}),n.a.createElement("h3",null,n.a.createElement(b.Trans,{id:"Components"})),n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"<0>HTML</0> and <1>React components</1> works without extra configuration.",components:[n.a.createElement("strong",null),n.a.createElement("strong",null)]})),n.a.createElement("h3",null,n.a.createElement(b.Trans,{id:"Props and strings"})),n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"React props and strings can be translated using <0>i18n</0> core:",components:[n.a.createElement("strong",null)]})," ",n.a.createElement(b.I18n,null,function(e){var a=e.i18n;return n.a.createElement("button",{onClick:function(){return alert(a._({id:"You're looking good!"}))}},n.a.createElement(b.Trans,{id:"Show motto of the day"}))})),n.a.createElement("h2",null,n.a.createElement(b.Trans,{id:"Formatting"})),n.a.createElement("h3",null,n.a.createElement(b.Trans,{id:"Plurals"})),n.a.createElement(C,null,function(e){return n.a.createElement(b.Trans,{id:"{count, plural, =0 {There're no books} one {There's one book} other {There're # books}}",values:{count:e}})}),n.a.createElement("h3",null,n.a.createElement(b.Trans,{id:"Dates"})),n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"Today is {0,date}",values:{0:new Date}})),n.a.createElement("h3",null,n.a.createElement(b.Trans,{id:"Numbers"})),n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"It costs {0,number,number0} which is {1,number,number1} of our income.",values:{0:2e3,1:.2},formats:{number0:{style:"currency",currency:"USD"},number1:{style:"percent"}}})),n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"Lorem ipsum dolor sit amet, cu odio minimum eos. Ferri dictas pri te, putant rationibus sed ex, movet referrentur at sed. Et ullum nostro dissentiet mei. Cum ad consul omittam. Porro scripta ut vis. Nostrum fastidii incorrupte usu et, per eu altera repudiandae. Possit adversarium sit ei, vix invidunt efficiantur eu, elitr numquam delectus duo et. Ius soluta praesent ea. Dolores gloriatur te mel, et ceteros periculis eam, per quod ullamcorper no. Insolens nominati vix et, ei eum sumo ipsum voluptaria. At per inani numquam labores, qui quem unum cotidieque ad. Doctus intellegam te mel, eum eu dicta scripta constituto, eos at summo error virtute. Minim nominati nec ea. Tota explicari nec an, stet praesent no cum. In augue alienum volutpat quo, affert oporteat liberavisse eu eam, possit temporibus signiferumque vel no. Nobis laboramus usu ei. Pro an dicat animal voluptatum. Te cum stet atqui. Ei his singulis oportere laboramus, ne mel alia vituperatoribus. Alia dicta similique id nec, offendit convenire cu sea. Ius id postea menandri reprehendunt, cibo mollis eum id, ut alienum facilisis rationibus eos. Sint legendos delicata cum no. Postea aeterno ne per, sit vivendo fabellas accusata et. Nibh lorem aliquip ad mel. Vel option explicari urbanitas cu, euismod impedit has ex. Pri hendrerit interesset ea, ne mea enim consul accusamus. No tamquam fuisset est, ius ei feugiat praesent explicari, laoreet recteque eum eu. Diam nominati suavitate eam cu. Ei sed wisi volumus. Pro at quando eligendi suavitate, oratio expetendis qui ei. Et alia dolorum tibique nam. Has at mucius appareat sapientem, eu ceteros mediocrem nam. Sea te esse explicari. Esse eligendi qui et, at mea harum paulo, soleat nominati no est. Nam suas dissentiunt ex, ex legere ridens constituto his, sed id quodsi delenit. Vero vocent adipisci has ei, at sit tempor iisque ponderum. Tacimates efficiantur consectetuer eam cu. Et wisi equidem scripserit sea, erat nemore commune sed in. Eu intellegam persequeris reprehendunt vim. Magna nobis sit at, adhuc dictas est ei. Ut est legimus copiosae conclusionemque. Eos no alia omittam efficiendi. Pri an facer veniam. At eos dicta possit intellegebat. Vis no case laudem dolorum, per amet audiam reprimique id. Modo voluptaria eum ad. Per assentior gloriatur no, purto soleat cu eum. Nemore persius efficiendi eam id, id has dicunt possim probatus, cum et periculis intellegebat. Odio offendit in his, elit aliquid scribentur in vim. His ferri verterem at, per nibh appellantur at. Error persius equidem vim ex. An vim everti deterruisset, solum soluta ut vel, te facilisi omittantur complectitur vis. Nec scripta tamquam et, te vis quando constituam."})),n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"Lorem ipsum dolor sit amet, no duo aeque iudico libris, eirmod laboramus forensibus in eam. Cu ferri vidisse nam, vidisse adversarium eu eum, has ei ipsum error. Ad stet mollis pertinacia pro, ex viderer sanctus ullamcorper mea. Mea causae sapientem ad. Ne tantas legimus quo. Constituam liberavisse no sed, solum dictas reprehendunt nec te. Purto veri constituam vel an, fabellas platonem cu ius. Et labore postulant vel, dolorem admodum persequeris ut sit, ea persecuti posidonium elaboraret mel. At sit dicat temporibus, nam quem persius eligendi ea. Has vivendum mandamus te. Id est saepe reformidans. Ut vim purto rebum integre, accumsan assentior sea ei. Justo dicit equidem nam ea, sed voluptua lobortis inciderint at, eu qui alia magna nostrum. Ea dicam quodsi deleniti ius, pro quem causae eirmod no. Solet denique eum no, eu sonet graecis honestatis vel, at est fabellas eloquentiam. Bonorum consetetur liberavisse te est. Et qui homero sententiae philosophia, quo no error exerci petentium, ius ut magna aliquip. Eu liber convenire sea. Vim ad ponderum imperdiet. In novum mentitum temporibus pri, sit fugit molestiae id. Quo clita corrumpit splendide ei. No sed movet discere meliore, euismod nostrum repudiare cu usu. Id vix dolorem menandri consequuntur, diam epicuri patrioque cu has, mazim constituto assueverit at pro. Forensibus referrentur nam ne, sed phaedrum suscipiantur ne. Quo cu regione maiestatis. Est veri mediocritatem ea, ne putant causae electram his. Ad eam vivendum sadipscing ullamcorper, mazim vituperatoribus duo ad, eos in purto omnium suscipit. Has te assum liber propriae, cu eros elit incorrupte mel. Ei elit melius doctus vix. Ad zril molestie adipisci mei, inani efficiendi sea at. Nam mazim erant eu, commodo vivendo te nam. No consul dissentiet eam, sea option temporibus deterruisset ei. Munere interesset in mei, est summo aliquando appellantur ne, in his utinam labores corpora. Et qui ipsum invenire electram, tempor laoreet facilisi ex has. Probo aperiri eam in, ne sed probo constituam consectetuer. Sed habemus similique ne, ut mei dolorem placerat. Aliquam sententiae definitionem quo ne, id fuisset contentiones mei. Has an case nostrud, vel te tation invidunt sadipscing. Audiam aliquip adversarium pro eu, vel ex alienum apeirian efficiendi. Dolor consequat ullamcorper no cum. Modus meliore scripserit ea eam. Putant iisque dissentiet et has. Mea ne modo dicunt iudicabit. Mei et quas everti. In integre ancillae qui, paulo cetero eleifend an est, graeci suscipit ei vis. Et vis velit tamquam, novum verterem voluptatum id per. No soluta pertinax repudiare eum, mel eu melius eleifend, vis nonumy assueverit at. Mel noster invidunt ex. Sale munere tritani mei ei, ne est wisi conclusionemque. Pro quis oratio antiopam id. Cu reformidans intellegebat quo, ad quem clita percipit mea. Qui et nullam phaedrum, ea noster euismod definiebas has. Has propriae dissentias mediocritatem ne, ludus officiis quo id, cum in doctus repudiare. Sea in euismod quaestio. Aperiri omnesque ex has. No volumus assueverit his, qui no novum semper maiorum, mei debet possim ad. Augue molestie intellegebat id eam, et labitur inimicus praesent vel. Graece tibique phaedrum per ad, an mei noster fierent molestie. His te erat adhuc aperiam. Usu malis regione cu, iriure postulant quo et. Cu dolorum complectitur his, sumo voluptaria interpretaris id has, ne sensibus accommodare vix. Aliquam adversarium id has. Ad postea discere propriae duo, vix ea quot vulputate, ea pri atqui nulla verterem. Laudem recteque eos et, impetus splendide at per. Ei quo noluisse officiis qualisque, mei splendide scripserit te. Ius ad modo soleat intellegat, sint omittam maiestatis vis in. At qui vidisse nusquam salutatus, sed ad rebum equidem erroribus. Nulla ridens nam ex, no animal officiis voluptaria eos. Nec ut tamquam vivendum, iusto timeam his an, aliquam placerat deserunt vel ea. An duo senserit salutandi, mei eu graeci oporteat assueverit. Cu pro stet exerci tacimates, ei mea utamur noluisse. Impetus conceptam mei eu, te quo nostro suscipit, eu atqui dicant dolores pro. Mel cu labores salutandi, quidam nostrud mediocrem eu quo, mazim timeam latine sea in. Ex prompta labores est, per te agam singulis recusabo. Cu mel postea apeirian facilisi, summo efficiantur nam ei, ei adipiscing appellantur philosophia vel. Vel novum deserunt id. Vel homero consul suavitate at, at usu novum voluptatum. Ne mundi simul mel. Nibh ubique inermis quo cu. Ad vix unum maiestatis theophrastus, placerat ullamcorper mel an, ea molestiae abhorreant definitionem vis. Vim enim graeci impetus et, cu his aperiri nominavi. Ex ignota iuvaret adversarium mei. Eam no discere dignissim forensibus, in summo quidam malorum per. Vim cu causae indoctum, sea erat ancillae cu, nam nonumy forensibus no. Ei mea elit cetero periculis, ut saepe scaevola adipiscing eos. His omnium mandamus et, ridens bonorum intellegebat et nec. Tantas vidisse intellegat pro at, etiam aperiam vis ad. Ei solum ocurreret nam, cu quo ceteros tibique quaestio, nibh liber voluptaria ius cu. Et consul percipit accusata est, has enim eirmod te. Suscipit copiosae electram mel ex, eirmod tritani viderer eum te. Quo persius noluisse at. Cum accumsan petentium ea, vim ad reformidans comprehensam. Elit urbanitas te eam. Sea eu sint euismod, sapientem elaboraret pri eu, an his odio populo. Has legimus praesent recteque ne, quo no fuisset persequeris. Vim eu soleat constituam, at mei legendos oportere adversarium. Sed in omnes sententiae, est legere voluptua argumentum no, tritani sensibus suscipiantur per ad. Scripta iracundia referrentur qui cu, nam unum contentiones cu, illum postea ea mea. Paulo nihil periculis no pri, nam id nobis probatus, eum ad alia apeirian incorrupte. Probo tractatos at quo, cibo habemus persequeris cum ad. His et sale aeterno. Eu vis commodo concludaturque, nobis aliquip at nec."})),"x".repeat(1e3).split("").map(function(e,a){return n.a.createElement("p",{key:a},a)}))}t.n(V)()("20111031","YYYYMMDD").fromNow();var _=function(){return n.a.createElement("div",{style:{padding:"20px 50px"}},n.a.createElement("header",null,n.a.createElement("p",null,n.a.createElement(b.Trans,{id:"404: not found"}))))},L="/react-lingui-example",F=function(e){var a=e.match,t=a.params.locale;return O(t)?(k.activate(t),n.a.createElement(b.I18nProvider,{i18n:k},n.a.createElement(v.a,null,n.a.createElement(p.a,{path:"".concat(a.path,"/"),component:D,exact:!0}),n.a.createElement(p.a,{component:_})))):(k.activate(k.locale||"en"),n.a.createElement(b.I18nProvider,{i18n:k},n.a.createElement(p.a,{component:_})))},R=function(){var e=(navigator.language||navigator.browserLanguage||"en").split("-"),a=Object(d.a)(e,1)[0];return O(a)||(a="en"),n.a.createElement(h.a,{to:"".concat(L,"/").concat(a)})},U=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(f.a,null,n.a.createElement(v.a,null,n.a.createElement(p.a,{path:"".concat(L,"/"),component:R,exact:!0}),n.a.createElement(p.a,{path:"".concat(L,"/:locale"),component:F})))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,4,3]]]);
//# sourceMappingURL=main.f34c4dab.chunk.js.map