(function(t){function o(o){for(var r,n,i=o[0],s=o[1],l=o[2],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(o);while(p.length)p.shift()();return c.push.apply(c,l||[]),e()}function e(){for(var t,o=0;o<c.length;o++){for(var e=c[o],r=!0,n=1;n<e.length;n++){var s=e[n];0!==a[s]&&(r=!1)}r&&(c.splice(o--,1),t=i(i.s=e[0]))}return t}var r={},a={app:0},c=[];function n(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d3b45fb4"}[t]+".js"}function i(o){if(r[o])return r[o].exports;var e=r[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var o=[],e=a[t];if(0!==e)if(e)o.push(e[2]);else{var r=new Promise((function(o,r){e=a[t]=[o,r]}));o.push(e[2]=r);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=n(t);var l=new Error;c=function(o){s.onerror=s.onload=null,clearTimeout(u);var e=a[t];if(0!==e){if(e){var r=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,e[1](l)}a[t]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(o)},i.m=t,i.c=r,i.d=function(t,o,e){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)i.d(e,r,function(o){return t[o]}.bind(null,r));return e},i.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="/palette-2/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=o,s=s.slice();for(var u=0;u<s.length;u++)o(s[u]);var d=l;c.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var r=e("85ec"),a=e.n(r);a.a},"4af9":function(t,o,e){},5224:function(t,o,e){"use strict";var r=e("ad59"),a=e.n(r);a.a},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),e("router-link",{attrs:{to:"/test"}},[t._v("Test")])],1),e("router-view")],1)},c=[],n=(e("034f"),e("2877")),i={},s=Object(n["a"])(i,a,c,!1,null,null,null),l=s.exports,u=(e("d3b7"),e("8c4f")),d=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"home"},[e("FormatDropDown"),e("Palette")],1)},p=[],f=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"hello"},[e("div",{staticClass:"container"},[e("div",{staticClass:"color",staticStyle:{background:"#2F80ED"},attrs:{id:"#2F80ED"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#219653"},attrs:{id:"#219653"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#EB5757"},attrs:{id:"#EB5757"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#828282"},attrs:{id:"#828282"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#F2C94C"},attrs:{id:"#F2C94C"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#2980b9"},attrs:{id:"#2980b9"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#d35400"},attrs:{id:"#d35400"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#16a085"},attrs:{id:"#16a085"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#8e44ad"},attrs:{id:"#8e44ad"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#2c3e50"},attrs:{id:"#2c3e50"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#2F80ED"},attrs:{id:"#2F80ED"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#219653"},attrs:{id:"#219653"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#EB5757"},attrs:{id:"#EB5757"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#828282"},attrs:{id:"#828282"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#F2C94C"},attrs:{id:"#F2C94C"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#2980b9"},attrs:{id:"#2980b9"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#d35400"},attrs:{id:"#d35400"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#16a085"},attrs:{id:"#16a085"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#8e44ad"},attrs:{id:"#8e44ad"},on:{click:t.copyColor}}),e("div",{staticClass:"color",staticStyle:{background:"#2c3e50"},attrs:{id:"#2c3e50"},on:{click:t.copyColor}})])])},v=[],y={name:"Palette",methods:{copyColor:function(t){var o=t.target.id;console.log(o),document.execCommand("copy",o)}}},b=y,C=(e("c722"),Object(n["a"])(b,f,v,!1,null,"96caf9f0",null)),k=C.exports,m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"container"},[e("vue-dropdown",{staticClass:"vue-dropdown",attrs:{config:t.config}},[t._v("THIS IS THE TITLE")]),e("input",{staticClass:"input",attrs:{type:"text"}})],1)])},g=[],h=e("c32e"),S={name:"FormatDropDown",components:{VueDropdown:h["a"]},config:{options:[{value:"option 11"},{value:"option 22"},{value:"option 33"}]}},w=S,_=(e("5224"),Object(n["a"])(w,m,g,!1,null,"05224a40",null)),E=_.exports,j={name:"home",components:{Palette:k,FormatDropDown:E}},O=j,x=Object(n["a"])(O,d,p,!1,null,null,null),P=x.exports;r["a"].use(u["a"]);var D=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/test",name:"test",component:function(){return e.e("about").then(e.bind(null,"78c1"))}}],F=new u["a"]({mode:"history",base:"/palette-2/",routes:D}),T=F,$=e("2f62");r["a"].use($["a"]);var B=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:T,store:B,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,o,e){},ad59:function(t,o,e){},c722:function(t,o,e){"use strict";var r=e("4af9"),a=e.n(r);a.a}});
//# sourceMappingURL=app.01a9ea75.js.map