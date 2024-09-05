"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4449,36185],{36185:function(e,t,n){var r,a,i,o,s,u,d,l,c,h=n(14842),m=n(658),f=n(64599),p=n(33994),v=n(64782),k=n(22858),b=n(35806),y=n(71008),_=n(62193),g=n(2816),A=n(27927),x=n(35890),w=(n(81027),n(95737),n(97741),n(50693),n(26098),n(99471),n(39790),n(66457),n(99019),n(253),n(54846),n(16891),n(66555),n(96858),n(50289)),E=n(29818),C=n(85920),L=n(34897),M=(n(13292),n(9421),{boolean:function(){return n.e(96292).then(n.bind(n,96292))},constant:function(){return n.e(44354).then(n.bind(n,44354))},float:function(){return n.e(80866).then(n.bind(n,80866))},grid:function(){return n.e(21306).then(n.bind(n,21306))},expandable:function(){return n.e(82178).then(n.bind(n,82178))},integer:function(){return n.e(65622).then(n.bind(n,43241))},multi_select:function(){return n.e(26964).then(n.bind(n,26964))},positive_time_period_dict:function(){return n.e(24280).then(n.bind(n,24280))},select:function(){return n.e(22038).then(n.bind(n,22038))},string:function(){return n.e(38819).then(n.bind(n,38819))}}),q=function(e,t){return e?!t.name||t.flatten?e:e[t.name]:null};(0,A.A)([(0,E.EM)("ha-form")],(function(e,t){var n,A=function(t){function n(){var t;(0,y.A)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=(0,_.A)(this,n,[].concat(a)),e(t),t}return(0,g.A)(n,t),(0,b.A)(n)}(t);return{F:A,d:[{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"warning",value:void 0},{kind:"field",decorators:[(0,E.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"computeError",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"method",key:"getFormProperties",value:function(){return{}}},{kind:"method",key:"focus",value:(n=(0,k.A)((0,p.A)().mark((function e(){var t,n,r,a;return(0,p.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:if(t=this.renderRoot.querySelector(".root")){e.next=5;break}return e.abrupt("return");case 5:n=(0,v.A)(t.children),e.prev=6,n.s();case 8:if((r=n.n()).done){e.next=18;break}if("HA-ALERT"===(a=r.value).tagName){e.next=16;break}if(!(a instanceof w.mN)){e.next=14;break}return e.next=14,a.updateComplete;case 14:return a.focus(),e.abrupt("break",18);case 16:e.next=8;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((function(e){var t;"selector"in e||null===(t=M[e.type])||void 0===t||t.call(M)}))}},{kind:"method",key:"render",value:function(){var e=this;return(0,w.qy)(r||(r=(0,f.A)([' <div class="root" part="root"> '," "," </div> "])),this.error&&this.error.base?(0,w.qy)(a||(a=(0,f.A)([' <ha-alert alert-type="error"> '," </ha-alert> "])),this._computeError(this.error.base,this.schema)):"",this.schema.map((function(t){var n,r=function(e,t){return e&&t.name?e[t.name]:null}(e.error,t),a=function(e,t){return e&&t.name?e[t.name]:null}(e.warning,t);return(0,w.qy)(i||(i=(0,f.A)([" "," "," "])),r?(0,w.qy)(o||(o=(0,f.A)([' <ha-alert own-margin alert-type="error"> '," </ha-alert> "])),e._computeError(r,t)):a?(0,w.qy)(s||(s=(0,f.A)([' <ha-alert own-margin alert-type="warning"> '," </ha-alert> "])),e._computeWarning(a,t)):"","selector"in t?(0,w.qy)(u||(u=(0,f.A)(['<ha-selector .schema="','" .hass="','" .name="','" .selector="','" .value="','" .label="','" .disabled="','" .placeholder="','" .helper="','" .required="','" .context="','"></ha-selector>'])),t,e.hass,t.name,t.selector,q(e.data,t),e._computeLabel(t,e.data),t.disabled||e.disabled||!1,t.required?"":t.default,e._computeHelper(t),t.required||!1,e._generateContext(t)):(0,C._)(e.fieldElementName(t.type),Object.assign({schema:t,data:q(e.data,t),label:e._computeLabel(t,e.data),helper:e._computeHelper(t),disabled:e.disabled||t.disabled||!1,hass:e.hass,localize:null===(n=e.hass)||void 0===n?void 0:n.localize,computeLabel:e.computeLabel,computeHelper:e.computeHelper,context:e._generateContext(t)},e.getFormProperties())))})))}},{kind:"method",key:"fieldElementName",value:function(e){return"ha-form-".concat(e)}},{kind:"method",key:"_generateContext",value:function(e){if(e.context){for(var t={},n=0,r=Object.entries(e.context);n<r.length;n++){var a=(0,m.A)(r[n],2),i=a[0],o=a[1];t[i]=this.data[o]}return t}}},{kind:"method",key:"createRenderRoot",value:function(){var e=(0,x.A)(A,"createRenderRoot",this,3)([]);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){var t=this;e.addEventListener("value-changed",(function(e){e.stopPropagation();var n=e.target.schema;if(e.target!==t){var r=!n.name||"flatten"in n&&n.flatten?e.detail.value:(0,h.A)({},n.name,e.detail.value);t.data=Object.assign(Object.assign({},t.data),r),(0,L.r)(t,"value-changed",{value:t.data})}}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){var n=this;return Array.isArray(e)?(0,w.qy)(d||(d=(0,f.A)(["<ul> "," </ul>"])),e.map((function(e){return(0,w.qy)(l||(l=(0,f.A)(["<li> "," </li>"])),n.computeError?n.computeError(e,t):e)}))):this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return(0,w.AH)(c||(c=(0,f.A)([".root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}"])))}}]}}),w.WF)},4449:function(e,t,n){n.r(t),n.d(t,{HuiFanPresetModesCardFeatureEditor:function(){return k}});var r,a=n(50281),i=n(64599),o=n(41981),s=n(35806),u=n(71008),d=n(62193),l=n(2816),c=n(27927),h=(n(81027),n(97741),n(50693),n(26098),n(16891),n(50289)),m=n(29818),f=n(94100),p=n(34897),v=(n(36185),["customize_modes"]),k=(0,c.A)([(0,m.EM)("hui-fan-preset-modes-card-feature-editor")],(function(e,t){var n=function(t){function n(){var t;(0,u.A)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=(0,d.A)(this,n,[].concat(a)),e(t),t}return(0,l.A)(n,t),(0,s.A)(n)}(t);return{F:n,d:[{kind:"field",decorators:[(0,m.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.MZ)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,m.wk)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_schema",value:function(){return(0,f.A)((function(e,t,n,r){var a;return[{name:"style",selector:{select:{multiple:!1,mode:"list",options:["dropdown","icons"].map((function(t){return{value:t,label:e("ui.panel.lovelace.editor.features.types.fan-preset-modes.style_list.".concat(t))}}))}}},{name:"customize_modes",selector:{boolean:{}}}].concat((0,o.A)(r?[{name:"preset_modes",selector:{select:{reorder:!0,multiple:!0,options:(null==n||null===(a=n.attributes.preset_modes)||void 0===a?void 0:a.map((function(e){return{value:e,label:t(n,"preset_mode",e)}})))||[]}}}]:[]))}))}},{kind:"method",key:"render",value:function(){var e,t;if(!this.hass||!this._config)return h.s6;var n=null!==(e=this.context)&&void 0!==e&&e.entity_id?this.hass.states[null===(t=this.context)||void 0===t?void 0:t.entity_id]:void 0,a=Object.assign(Object.assign({style:"dropdown"},this._config),{},{customize_modes:void 0!==this._config.preset_modes}),o=this._schema(this.hass.localize,this.hass.formatEntityAttributeValue,n,a.customize_modes);return(0,h.qy)(r||(r=(0,i.A)([' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" @value-changed="','"></ha-form> '])),this.hass,a,o,this._computeLabelCallback,this._valueChanged)}},{kind:"method",key:"_valueChanged",value:function(e){var t,n,r=e.detail.value,i=r.customize_modes,o=(0,a.A)(r,v),s=null!==(t=this.context)&&void 0!==t&&t.entity_id?this.hass.states[null===(n=this.context)||void 0===n?void 0:n.entity_id]:void 0;i&&!o.preset_modes&&(o.preset_modes=(null==s?void 0:s.attributes.preset_modes)||[]),!i&&o.preset_modes&&delete o.preset_modes,(0,p.r)(this,"config-changed",{config:o})}},{kind:"field",key:"_computeLabelCallback",value:function(){var e=this;return function(t){switch(t.name){case"style":case"preset_modes":case"customize_modes":return e.hass.localize("ui.panel.lovelace.editor.features.types.fan-preset-modes.".concat(t.name));default:return""}}}}]}}),h.WF)}}]);
//# sourceMappingURL=4449.QaLs5sTWo9g.js.map