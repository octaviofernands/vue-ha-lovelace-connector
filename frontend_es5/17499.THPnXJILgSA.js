"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[17499,36185],{36185:function(e,t,a){var r,n,i,o,s,u,l,c,d,h=a(14842),p=a(658),m=a(64599),v=a(33994),f=a(64782),k=a(22858),b=a(35806),_=a(71008),y=a(62193),g=a(2816),A=a(27927),w=a(35890),x=(a(81027),a(95737),a(97741),a(50693),a(26098),a(99471),a(39790),a(66457),a(99019),a(253),a(54846),a(16891),a(66555),a(96858),a(50289)),q=a(29818),L=a(85920),E=a(34897),R=(a(13292),a(9421),{boolean:function(){return a.e(96292).then(a.bind(a,96292))},constant:function(){return a.e(44354).then(a.bind(a,44354))},float:function(){return a.e(80866).then(a.bind(a,80866))},grid:function(){return a.e(21306).then(a.bind(a,21306))},expandable:function(){return a.e(82178).then(a.bind(a,82178))},integer:function(){return a.e(65622).then(a.bind(a,43241))},multi_select:function(){return a.e(26964).then(a.bind(a,26964))},positive_time_period_dict:function(){return a.e(24280).then(a.bind(a,24280))},select:function(){return a.e(22038).then(a.bind(a,22038))},string:function(){return a.e(38819).then(a.bind(a,38819))}}),z=function(e,t){return e?!t.name||t.flatten?e:e[t.name]:null};(0,A.A)([(0,q.EM)("ha-form")],(function(e,t){var a,A=function(t){function a(){var t;(0,_.A)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=(0,y.A)(this,a,[].concat(n)),e(t),t}return(0,g.A)(a,t),(0,b.A)(a)}(t);return{F:A,d:[{kind:"field",decorators:[(0,q.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,q.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,q.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,q.MZ)({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[(0,q.MZ)({attribute:!1})],key:"warning",value:void 0},{kind:"field",decorators:[(0,q.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,q.MZ)({attribute:!1})],key:"computeError",value:void 0},{kind:"field",decorators:[(0,q.MZ)({attribute:!1})],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,q.MZ)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,q.MZ)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"method",key:"getFormProperties",value:function(){return{}}},{kind:"method",key:"focus",value:(a=(0,k.A)((0,v.A)().mark((function e(){var t,a,r,n;return(0,v.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:if(t=this.renderRoot.querySelector(".root")){e.next=5;break}return e.abrupt("return");case 5:a=(0,f.A)(t.children),e.prev=6,a.s();case 8:if((r=a.n()).done){e.next=18;break}if("HA-ALERT"===(n=r.value).tagName){e.next=16;break}if(!(n instanceof x.mN)){e.next=14;break}return e.next=14,n.updateComplete;case 14:return n.focus(),e.abrupt("break",18);case 16:e.next=8;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),a.e(e.t0);case 23:return e.prev=23,a.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((function(e){var t;"selector"in e||null===(t=R[e.type])||void 0===t||t.call(R)}))}},{kind:"method",key:"render",value:function(){var e=this;return(0,x.qy)(r||(r=(0,m.A)([' <div class="root" part="root"> '," "," </div> "])),this.error&&this.error.base?(0,x.qy)(n||(n=(0,m.A)([' <ha-alert alert-type="error"> '," </ha-alert> "])),this._computeError(this.error.base,this.schema)):"",this.schema.map((function(t){var a,r=function(e,t){return e&&t.name?e[t.name]:null}(e.error,t),n=function(e,t){return e&&t.name?e[t.name]:null}(e.warning,t);return(0,x.qy)(i||(i=(0,m.A)([" "," "," "])),r?(0,x.qy)(o||(o=(0,m.A)([' <ha-alert own-margin alert-type="error"> '," </ha-alert> "])),e._computeError(r,t)):n?(0,x.qy)(s||(s=(0,m.A)([' <ha-alert own-margin alert-type="warning"> '," </ha-alert> "])),e._computeWarning(n,t)):"","selector"in t?(0,x.qy)(u||(u=(0,m.A)(['<ha-selector .schema="','" .hass="','" .name="','" .selector="','" .value="','" .label="','" .disabled="','" .placeholder="','" .helper="','" .required="','" .context="','"></ha-selector>'])),t,e.hass,t.name,t.selector,z(e.data,t),e._computeLabel(t,e.data),t.disabled||e.disabled||!1,t.required?"":t.default,e._computeHelper(t),t.required||!1,e._generateContext(t)):(0,L._)(e.fieldElementName(t.type),Object.assign({schema:t,data:z(e.data,t),label:e._computeLabel(t,e.data),helper:e._computeHelper(t),disabled:e.disabled||t.disabled||!1,hass:e.hass,localize:null===(a=e.hass)||void 0===a?void 0:a.localize,computeLabel:e.computeLabel,computeHelper:e.computeHelper,context:e._generateContext(t)},e.getFormProperties())))})))}},{kind:"method",key:"fieldElementName",value:function(e){return"ha-form-".concat(e)}},{kind:"method",key:"_generateContext",value:function(e){if(e.context){for(var t={},a=0,r=Object.entries(e.context);a<r.length;a++){var n=(0,p.A)(r[a],2),i=n[0],o=n[1];t[i]=this.data[o]}return t}}},{kind:"method",key:"createRenderRoot",value:function(){var e=(0,w.A)(A,"createRenderRoot",this,3)([]);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){var t=this;e.addEventListener("value-changed",(function(e){e.stopPropagation();var a=e.target.schema;if(e.target!==t){var r=!a.name||"flatten"in a&&a.flatten?e.detail.value:(0,h.A)({},a.name,e.detail.value);t.data=Object.assign(Object.assign({},t.data),r),(0,E.r)(t,"value-changed",{value:t.data})}}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){var a=this;return Array.isArray(e)?(0,x.qy)(l||(l=(0,m.A)(["<ul> "," </ul>"])),e.map((function(e){return(0,x.qy)(c||(c=(0,m.A)(["<li> "," </li>"])),a.computeError?a.computeError(e,t):e)}))):this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.AH)(d||(d=(0,m.A)([".root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}"])))}}]}}),x.WF)},17499:function(e,t,a){a.r(t),a.d(t,{DialogLovelaceResourceDetail:function(){return y}});var r,n,i=a(33994),o=a(22858),s=a(41981),u=a(64599),l=a(35806),c=a(71008),d=a(62193),h=a(2816),p=a(27927),m=(a(81027),a(50693),a(26098),a(79641),a(72606),a(50289)),v=a(29818),f=a(94100),k=a(34897),b=a(29180),_=(a(36185),a(55321)),y=(0,p.A)([(0,v.EM)("dialog-lovelace-resource-detail")],(function(e,t){var a,p,y=function(t){function a(){var t;(0,c.A)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=(0,d.A)(this,a,[].concat(n)),e(t),t}return(0,h.A)(a,t),(0,l.A)(a)}(t);return{F:y,d:[{kind:"field",decorators:[(0,v.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,v.wk)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,v.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,v.wk)()],key:"_submitting",value:function(){return!1}},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._error=void 0,this._params.resource?this._data={url:this._params.resource.url,res_type:this._params.resource.type}:this._data={url:""}}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,k.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,t;if(!this._params)return m.s6;var a=!(null!==(e=this._data)&&void 0!==e&&e.url)||""===this._data.url.trim();return(0,m.qy)(r||(r=(0,u.A)([' <ha-dialog open @closed="','" scrimClickAction escapeKeyAction .heading="','"> <div> <ha-alert alert-type="warning" .title="','"> ',' </ha-alert> <ha-form .schema="','" .data="','" .hass="','" .error="','" .computeLabel="','" @value-changed="','"></ha-form> </div> ',' <mwc-button slot="primaryAction" @click="','" .disabled="','"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,(0,b.l)(this.hass,this._params.resource?this._params.resource.url:this.hass.localize("ui.panel.config.lovelace.resources.detail.new_resource")),this.hass.localize("ui.panel.config.lovelace.resources.detail.warning_header"),this.hass.localize("ui.panel.config.lovelace.resources.detail.warning_text"),this._schema(this._data),this._data,this.hass,this._error,this._computeLabel,this._valueChanged,this._params.resource?(0,m.qy)(n||(n=(0,u.A)([' <mwc-button slot="secondaryAction" class="warning" @click="','" .disabled="','"> '," </mwc-button> "])),this._deleteResource,this._submitting,this.hass.localize("ui.panel.config.lovelace.resources.detail.delete")):m.s6,this._updateResource,a||!(null!==(t=this._data)&&void 0!==t&&t.res_type)||this._submitting,this._params.resource?this.hass.localize("ui.panel.config.lovelace.resources.detail.update"):this.hass.localize("ui.panel.config.lovelace.resources.detail.create"))}},{kind:"field",key:"_schema",value:function(){var e=this;return(0,f.A)((function(t){return[{name:"url",required:!0,selector:{text:{}}},{name:"res_type",required:!0,selector:{select:{options:[{value:"module",label:e.hass.localize("ui.panel.config.lovelace.resources.types.module")},{value:"css",label:e.hass.localize("ui.panel.config.lovelace.resources.types.css")}].concat((0,s.A)("js"===t.type?[{value:"js",label:e.hass.localize("ui.panel.config.lovelace.resources.types.js")}]:[]),(0,s.A)("html"===t.type?[{value:"html",label:e.hass.localize("ui.panel.config.lovelace.resources.types.html")}]:[]))}}}]}))}},{kind:"field",key:"_computeLabel",value:function(){var e=this;return function(t){return e.hass.localize("ui.panel.config.lovelace.resources.detail.".concat("res_type"===t.name?"type":t.name))}}},{kind:"method",key:"_valueChanged",value:function(e){if(this._data=e.detail.value,!this._data.res_type){var t=function(e){if(e){var t=e.split(".").pop()||"";return"css"===t?"css":"js"===t?"module":void 0}}(this._data.url);if(!t)return;this._data=Object.assign(Object.assign({},this._data),{},{res_type:t})}}},{kind:"method",key:"_updateResource",value:(p=(0,o.A)((0,i.A)().mark((function e(){var t;return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=this._data)&&void 0!==t&&t.res_type){e.next=2;break}return e.abrupt("return");case 2:if(this._submitting=!0,e.prev=3,!this._params.resource){e.next=9;break}return e.next=7,this._params.updateResource(this._data);case 7:e.next=11;break;case 9:return e.next=11,this._params.createResource(this._data);case 11:this._params=void 0,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),this._error={base:(null===e.t0||void 0===e.t0?void 0:e.t0.message)||"Unknown error"};case 17:return e.prev=17,this._submitting=!1,e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[3,14,17,20]])}))),function(){return p.apply(this,arguments)})},{kind:"method",key:"_deleteResource",value:(a=(0,o.A)((0,i.A)().mark((function e(){return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,e.prev=1,e.next=4,this._params.removeResource();case 4:if(!e.sent){e.next=6;break}this.closeDialog();case 6:return e.prev=6,this._submitting=!1,e.finish(6);case 9:case"end":return e.stop()}}),e,this,[[1,,6,9]])}))),function(){return a.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return _.nA}}]}}),m.WF)}}]);
//# sourceMappingURL=17499.THPnXJILgSA.js.map