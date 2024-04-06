(function(){"use strict";var e={8504:function(e,t,n){var r=n(4548),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Navbar"),t("router-view")],1)},a=[],i=function(){var e=this,t=e._self._c;return t("div",[t("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[t("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t("b-navbar-brand",{attrs:{href:"#"}},[e._v("ANTGO "+e._s(e.project_type))]),t("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[t("b-navbar-nav",["LABEL"==e.project_type?t("b-nav-item",{attrs:{href:"/#/projects/"}},[e._v("Project /")]):e._e(),"BROWSER"==e.project_type?t("b-nav-item",{attrs:{href:"/#/browser/"}},[e._v("Project /")]):e._e(),"PREDICT"==e.project_type?t("b-nav-item",{attrs:{href:"/#/predict/"}},[e._v("Project /")]):e._e(),t("b-nav-item",{attrs:{href:"#",disabled:""}},[e._v(e._s(e.project_name))])],1),t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-navbar-nav",[t("b-button",{on:{click:function(t){return e.show_user_info()}}},[e._v(e._s(e.short_name))])],1)],1)],1)],1),t("b-card",{directives:[{name:"show",rawName:"v-show",value:e.is_show_info,expression:"is_show_info"}],attrs:{title:"用户信息","sub-title":""}},[t("b-card-text",[e._v(" "+e._s(e.full_name)+" ")]),t("b-card-text",[e._v(" "+e._s(e.statistic_info)+" ")]),t("b-button",{attrs:{variant:"primary"},on:{click:e.close}},[e._v("关闭")])],1)],1)},u=[],c=(n(3251),{name:"Navbar",data(){return{project_name:"",project_type:"",short_name:"",full_name:"",statistic_info:"",is_show_info:!1}},mounted:function(){var e=this;this.axios.get("/antgo/api/user/info/").then((function(t){e.project_name=t.data.content["task_name"],e.project_type=t.data.content["project_type"],e.short_name=t.data.content["short_name"],e.full_name=t.data.content["full_name"]})).catch((function(t){e.$router.push({path:"/Login/"})}))},methods:{show_user_info:function(){var e=this;this.axios.get("/antgo/api/user/info/").then((function(t){var n=t.data.content["statistic_info"];e.statistic_info=n,e.is_show_info=!0})).catch((function(e){}))},close:function(){this.is_show_info=!1}}}),s=c,f=n(4249),l=(0,f.Z)(s,i,u,!1,null,null,null),d=l.exports,p={name:"navbar",components:{Navbar:d}},h=p,v=(0,f.Z)(h,o,a,!1,null,null,null),m=v.exports,b=n(5146);const _=()=>n.e(854).then(n.bind(n,5854)),g=()=>Promise.all([n.e(244),n.e(741)]).then(n.bind(n,2741)),y=()=>n.e(576).then(n.bind(n,576)),w=()=>n.e(588).then(n.bind(n,6588)),j=()=>n.e(778).then(n.bind(n,778)),k=()=>n.e(125).then(n.bind(n,4125)),C=()=>Promise.all([n.e(244),n.e(945)]).then(n.bind(n,1945));r["default"].use(b.ZP);var O=new b.ZP({routes:[{path:"/",name:"Welcome",component:w},{path:"/projects",name:"Project",component:_},{path:"/project/:id?",name:"Label",component:g},{path:"/login",name:"Login",component:y},{path:"/browser",name:"Browser",component:j},{path:"/predict",name:"Predict",component:k},{path:"/demo/:name?",name:"Demo",component:C}]}),P=n(1755),x=n.n(P),E=n(5712),N=n(454);n(2905);x().defaults.withCredentials=!0,x().defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r["default"].prototype.axios=x(),r["default"].use(E.XG7),r["default"].use(N.A7),r["default"].config.productionTip=!1,new r["default"]({render:e=>e(m),router:O}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{125:"5c466f94",244:"98907cb4",576:"8006e30c",588:"b3b06b59",741:"413fcb04",778:"383647af",854:"f37a8651",945:"73dd0d67"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{125:"55bcea31",741:"e40ca25e",854:"8857d57d",945:"a920d9f2"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="antgo-web:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={125:1,741:1,854:1,945:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self["webpackChunkantgo_web"]=self["webpackChunkantgo_web"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8504)}));r=n.O(r)})();
//# sourceMappingURL=app.54f58b8f.js.map