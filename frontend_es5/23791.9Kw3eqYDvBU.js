"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[23791],{45537:function(e,t,n){n.d(t,{Vw:function(){return o},kG:function(){return a},y6:function(){return i}});n(39790),n(66457);var r=function(e,t,n){return new Promise((function(r,i){var a=document.createElement(e),o="src",l="body";switch(a.onload=function(){return r(t)},a.onerror=function(){return i(t)},e){case"script":a.async=!0,n&&(a.type=n);break;case"link":a.type="text/css",a.rel="stylesheet",o="href",l="head"}a[o]=t,document[l].appendChild(a)}))},i=function(e){return r("link",e)},a=function(e){return r("script",e)},o=function(e){return r("script",e,"module")}},23791:function(e,t,n){n.r(t),n.d(t,{HaPanelCustom:function(){return y}});var r=n(64782),i=n(35806),a=n(71008),o=n(62193),l=n(2816),s=n(27927),u=n(35890),c=(n(81027),n(82386),n(95737),n(50693),n(39790),n(36604),n(79641),n(96858),n(50289)),d=n(29818),h=n(16312),f=n(16569),m=(n(66457),n(45537)),p={},k=function(e){return e.html_url?{type:"html",url:e.html_url}:e.module_url&&e.js_url?{type:"js",url:e.js_url}:e.module_url?{type:"module",url:e.module_url}:{type:"js",url:e.js_url}},v=(n(10507),n(253),n(54846),n(66555),function(e,t){"setProperties"in e?e.setProperties(t):Object.keys(t).forEach((function(n){e[n]=t[n]}))}),y=(0,s.A)(null,(function(e,t){var n=function(t){function n(){var t;(0,a.A)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return t=(0,o.A)(this,n,[].concat(i)),e(t),t}return(0,l.A)(n,t),(0,i.A)(n)}(t);return{F:n,d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"panel",value:void 0},{kind:"field",key:"_setProperties",value:void 0},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"field",key:"navigate",value:function(){return function(e,t){return(0,h.o)(e,t)}}},{kind:"method",key:"registerIframe",value:function(e,t){e(this.panel,{hass:this.hass,narrow:this.narrow,route:this.route}),this._setProperties=t}},{kind:"method",key:"disconnectedCallback",value:function(){(0,u.A)(n,"disconnectedCallback",this,3)([]),this._cleanupPanel()}},{kind:"method",key:"update",value:function(e){if((0,u.A)(n,"update",this,3)([e]),e.has("panel")){var t=e.get("panel");if(!(0,f.b)(t,this.panel))return t&&this._cleanupPanel(),void this._createPanel(this.panel)}if(this._setProperties){var i,a={},o=(0,r.A)(e.keys());try{for(o.s();!(i=o.n()).done;){var l=i.value;a[l]=this[l]}}catch(s){o.e(s)}finally{o.f()}this._setProperties(a)}}},{kind:"method",key:"_cleanupPanel",value:function(){for(delete window.customPanel,this._setProperties=void 0;this.lastChild;)this.removeChild(this.lastChild)}},{kind:"method",key:"_createPanel",value:function(e){var t=this,n=e.config._panel_custom,r=k(n),i=document.createElement("a");if(i.href=r.url,n.trust_external||["localhost","127.0.0.1",location.hostname].includes(i.hostname)||confirm("".concat(this.hass.localize("ui.panel.custom.external_panel.question_trust",{name:n.name,link:i.href}),"\n\n           ").concat(this.hass.localize("ui.panel.custom.external_panel.complete_access"),"\n\n           (").concat(this.hass.localize("ui.panel.custom.external_panel.hide_message"),")")))if(n.embed_iframe){var a,o;window.customPanel=this;var l=this.panel.title?'title="'.concat(this.panel.title,'"'):"";this.innerHTML="\n      <style>\n        iframe {\n          border: 0;\n          width: 100%;\n          height: 100%;\n          display: block;\n          background-color: var(--primary-background-color);\n        }\n      </style>\n      <iframe ".concat(l,"></iframe>").trim();var s=this.querySelector("iframe").contentWindow.document;s.open(),s.write("<!doctype html><script src='".concat(window.customPanelJS,"'><\/script>")),s.close()}else(a=n,o=k(a),"js"===o.type?(o.url in p||(p[o.url]=(0,m.kG)(o.url)),p[o.url]):"module"===o.type?(0,m.Vw)(o.url):Promise.reject("No valid url found in panel config.")).then((function(){var r=function(e){var t="html_url"in e?"ha-panel-".concat(e.name):e.name;return document.createElement(t)}(n);t._setProperties=function(e){return v(r,e)},v(r,{panel:e,hass:t.hass,narrow:t.narrow,route:t.route}),t.appendChild(r)}),(function(){alert("Unable to load custom panel from ".concat(i.href))}))}}]}}),c.mN);customElements.define("ha-panel-custom",y)}}]);
//# sourceMappingURL=23791.9Kw3eqYDvBU.js.map