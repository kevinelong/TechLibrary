(function(e){function o(o){for(var n,i,a=o[0],c=o[1],l=o[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(o);while(f.length)f.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,o=0;o<u.length;o++){for(var t=u[o],n=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(n=!1)}n&&(u.splice(o--,1),e=a(a.s=t[0]))}return e}var n={},r={app:0},u=[];function i(e){return a.p+"js/"+({"Book~BookEdit~Home":"Book~BookEdit~Home",Book:"Book",BookEdit:"BookEdit",Home:"Home"}[e]||e)+"."+{"Book~BookEdit~Home":"ed8e5480",Book:"a07b9aca",BookEdit:"37482e02",Home:"80b3cd2f"}[e]+".js"}function a(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var o=[],t=r[e];if(0!==t)if(t)o.push(t[2]);else{var n=new Promise((function(o,n){t=r[e]=[o,n]}));o.push(t[2]=n);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=i(e);var l=new Error;u=function(o){c.onerror=c.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var n=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",l.name="ChunkLoadError",l.type=n,l.request=u,t[1](l)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(o)},a.m=e,a.c=n,a.d=function(e,o,t){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)a.d(t,n,function(o){return e[o]}.bind(null,n));return t},a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=o,c=c.slice();for(var d=0;d<c.length;d++)o(c[d]);var p=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("b-container",[t("router-view")],1)],1)},u=[],i={name:"app"},a=i,c=t("2877"),l=Object(c["a"])(a,r,u,!1,null,null,null),d=l.exports,p=t("5f5b"),f=t("b1e0"),s=(t("f9e3"),t("2dd8"),t("d3b7"),t("8c4f"));n["default"].use(s["a"]);var m=function(){return Promise.all([t.e("Book~BookEdit~Home"),t.e("Home")]).then(t.bind(null,"57da"))},b=function(){return Promise.all([t.e("Book~BookEdit~Home"),t.e("Book")]).then(t.bind(null,"c71c"))},h=function(){return Promise.all([t.e("Book~BookEdit~Home"),t.e("BookEdit")]).then(t.bind(null,"6217"))},v=new s["a"]({routes:[{path:"/",component:m},{name:"book_view",path:"/book/:id",component:b,props:!0},{name:"book_edit",path:"/book/:id/edit",component:h,props:!0}]}),k=v;n["default"].use(p["a"]),n["default"].use(f["a"]),n["default"].config.productionTip=!1,new n["default"]({router:k,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.e25c97a4.js.map