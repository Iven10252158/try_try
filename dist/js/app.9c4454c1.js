(function(e){function t(t){for(var n,r,c=t[0],l=t[1],i=t[2],d=0,s=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);v&&v(t);while(s.length)s.shift()();return u.push.apply(u,i||[]),a()}function a(){for(var e,t=0;t<u.length;t++){for(var a=u[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o={app:0},u=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"174aacdf","chunk-5dc8b4c6":"818ae1ba","chunk-6076ae1e":"3744788d"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-5dc8b4c6":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-5dc8b4c6":"df9a83cd","chunk-6076ae1e":"31d6cfe0"}[e]+".css",o=l.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){i=s[c],d=i.getAttribute("data-href");if(d===n||d===o)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete r[e],v.parentNode.removeChild(v),a(u)},v.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=u);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var s=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(v);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,a[1](s)}o[e]=void 0}};var v=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var v=d;u.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2851:function(e,t,a){"use strict";a("661a")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=a("bc3a"),o=a.n(r),u=a("2106"),c=a.n(u),l={id:"nav"},i=Object(n["f"])("Home"),d=Object(n["f"])(" | "),s=Object(n["f"])("About"),v=Object(n["f"])(" | "),p=Object(n["f"])("產品列表"),f=Object(n["f"])(" | "),b=Object(n["f"])("TRY");function h(e,t){var a=Object(n["A"])("router-link"),r=Object(n["A"])("router-view");return Object(n["t"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",l,[Object(n["g"])(a,{to:"/"},{default:Object(n["G"])((function(){return[i]})),_:1}),d,Object(n["g"])(a,{to:"/about"},{default:Object(n["G"])((function(){return[s]})),_:1}),v,Object(n["g"])(a,{to:"/products"},{default:Object(n["G"])((function(){return[p]})),_:1}),f,Object(n["g"])(a,{to:"/try"},{default:Object(n["G"])((function(){return[b]})),_:1})]),Object(n["g"])(r)],64)}a("2851");const g={};g.render=h;var m=g,j=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),O=a("cf05"),k=a.n(O),y={class:"home"},_=Object(n["g"])("img",{alt:"Vue logo",src:k.a},null,-1);function w(e,t,a,r,o,u){var c=Object(n["A"])("HelloWorld");return Object(n["t"])(),Object(n["d"])("div",y,[_,Object(n["g"])(c,{msg:"Welcome to Your Vue.js App"})])}var A=Object(n["I"])("data-v-5141a303");Object(n["w"])("data-v-5141a303");var C={class:"hello"},E=Object(n["e"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);Object(n["u"])();var P=A((function(e,t,a,r,o,u){return Object(n["t"])(),Object(n["d"])("div",C,[Object(n["g"])("h1",null,Object(n["C"])(a.msg),1),E])})),x={name:"HelloWorld",props:{msg:String}};a("65e4");x.render=P,x.__scopeId="data-v-5141a303";var S=x,T={name:"Home",components:{HelloWorld:S}};T.render=w;var H=T,L=[{path:"/",name:"Home",component:H},{path:"/products",component:function(){return a.e("chunk-6076ae1e").then(a.bind(null,"e6dc"))},children:[{path:"new",component:function(){return a.e("chunk-6076ae1e").then(a.bind(null,"e6dc"))}},{path:"test",component:function(){return a.e("chunk-6076ae1e").then(a.bind(null,"e6dc"))}}]},{path:"/try",component:function(){return a.e("chunk-5dc8b4c6").then(a.bind(null,"8a73"))}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],N=Object(j["a"])({history:Object(j["b"])(),routes:L}),I=N,G=Object(n["c"])(m);G.use(c.a,o.a),G.use(I),G.mount("#app")},"5e10":function(e,t,a){},"65e4":function(e,t,a){"use strict";a("5e10")},"661a":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.9c4454c1.js.map