"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[25552],{37456:function(t,e,n){n.d(e,{a:function(){return i}});var r=(0,n(58034).n)((function(t){history.replaceState({scrollPosition:t},"")}),300),i=function(t){return function(e){return{kind:"method",placement:"prototype",key:e.key,descriptor:{set:function(t){r(t),this["__".concat(String(e.key))]=t},get:function(){var t;return this["__".concat(String(e.key))]||(null===(t=history.state)||void 0===t?void 0:t.scrollPosition)},enumerable:!0,configurable:!0},finisher:function(n){var r=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){var n=this;r.call(this);var i=this[e.key];i&&this.updateComplete.then((function(){var e=n.renderRoot.querySelector(t);e&&setTimeout((function(){e.scrollTop=i}),0)}))}}}}}},96961:function(t,e,n){n.d(e,{JW:function(){return b},OW:function(){return f},PO:function(){return u},VN:function(){return s},XG:function(){return d},eB:function(){return p},gZ:function(){return h},hM:function(){return c},k2:function(){return a},lU:function(){return l},nc:function(){return v},vX:function(){return m},z1:function(){return o}});n(13025),n(44124),n(95737),n(97741),n(39790),n(9241),n(74268),n(24545),n(51855),n(82130),n(31743),n(22328),n(4959),n(62435),n(99019),n(253),n(2075),n(94438),n(16891),n(96858);var r=n(16312),i=n(10725),o=function(t){return t.THREAD="thread",t.WIFI="wifi",t.ETHERNET="ethernet",t.UNKNOWN="unknown",t}({}),a=function(t){var e;return null===(e=t.auth.external)||void 0===e?void 0:e.config.canCommissionMatter},s=function(t){return t.auth.external.fireMessage({type:"matter/commission"})},c=function(t,e){var n,o=(0,i.Ag)(t.connection,(function(t){if(n){var i=Object.values(t).filter((function(t){return t.identifiers.find((function(t){return"matter"===t[0]}))&&!n.has(t.id)}));i.length&&(o(),n=void 0,null==e||e(),(0,r.o)("/config/devices/device/".concat(i[0].id)))}else n=new Set(Object.values(t).filter((function(t){return t.identifiers.find((function(t){return"matter"===t[0]}))})).map((function(t){return t.id})))}));return function(){o(),n=void 0}},u=function(t,e){return t.callWS({type:"matter/commission",code:e})},d=function(t,e){return t.callWS({type:"matter/commission_on_network",pin:e})},l=function(t,e,n){return t.callWS({type:"matter/set_wifi_credentials",network_name:e,password:n})},h=function(t,e){return t.callWS({type:"matter/set_thread",thread_operation_dataset:e})},p=function(t,e){return t.callWS({type:"matter/node_diagnostics",device_id:e})},f=function(t,e){return t.callWS({type:"matter/ping_node",device_id:e})},v=function(t,e){return t.callWS({type:"matter/open_commissioning_window",device_id:e})},m=function(t,e,n){return t.callWS({type:"matter/remove_matter_fabric",device_id:e,fabric_index:n})},b=function(t,e){return t.callWS({type:"matter/interview_node",device_id:e})}},77980:function(t,e,n){var r,i,o,a,s,c=n(64599),u=n(35806),d=n(71008),l=n(62193),h=n(2816),p=n(27927),f=(n(81027),n(50289)),v=n(29818),m=n(37456),b=(n(45346),n(11804),n(55321));(0,p.A)([(0,v.EM)("hass-subpage")],(function(t,e){var n=function(e){function n(){var e;(0,d.A)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return e=(0,l.A)(this,n,[].concat(i)),t(e),e}return(0,h.A)(n,e),(0,u.A)(n)}(e);return{F:n,d:[{kind:"field",decorators:[(0,v.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.MZ)()],key:"header",value:void 0},{kind:"field",decorators:[(0,v.MZ)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,v.MZ)({attribute:!1})],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,v.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:Boolean})],key:"supervisor",value:function(){return!1}},{kind:"field",decorators:[(0,m.a)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"render",value:function(){var t;return(0,f.qy)(r||(r=(0,c.A)([' <div class="toolbar"> ',' <div class="main-title"><slot name="header">','</slot></div> <slot name="toolbar-icon"></slot> </div> <div class="content ha-scrollbar" @scroll="','"> <slot></slot> </div> <div id="fab"> <slot name="fab"></slot> </div> '])),this.mainPage||null!==(t=history.state)&&void 0!==t&&t.root?(0,f.qy)(i||(i=(0,c.A)([' <ha-menu-button .hassio="','" .hass="','" .narrow="','"></ha-menu-button> '])),this.supervisor,this.hass,this.narrow):this.backPath?(0,f.qy)(o||(o=(0,c.A)([' <a href="','"> <ha-icon-button-arrow-prev .hass="','"></ha-icon-button-arrow-prev> </a> '])),this.backPath,this.hass):(0,f.qy)(a||(a=(0,c.A)([' <ha-icon-button-arrow-prev .hass="','" @click="','"></ha-icon-button-arrow-prev> '])),this.hass,this._backTapped),this.header,this._saveScrollPos)}},{kind:"method",decorators:[(0,v.Ls)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[b.dp,(0,f.AH)(s||(s=(0,c.A)([":host{display:block;height:100%;background-color:var(--primary-background-color);overflow:hidden;position:relative}:host([narrow]){width:100%;position:fixed}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{margin:var(--margin-title);line-height:20px;flex-grow:1}.content{position:relative;width:100%;height:calc(100% - 1px - var(--header-height));overflow-y:auto;overflow:auto;-webkit-overflow-scrolling:touch}#fab{position:absolute;right:calc(16px + env(safe-area-inset-right));inset-inline-end:calc(16px + env(safe-area-inset-right));inset-inline-start:initial;bottom:calc(16px + env(safe-area-inset-bottom));z-index:1;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px;inset-inline-end:24px;inset-inline-start:initial}"])))]}}]}}),f.WF)},25552:function(t,e,n){n.r(e),n.d(e,{MatterConfigDashboard:function(){return x}});var r,i,o,a,s,c=n(33994),u=n(22858),d=n(64599),l=n(35806),h=n(71008),p=n(62193),f=n(2816),v=n(27927),m=n(35890),b=(n(81027),n(29193),n(72606),n(50289)),k=n(29818),y=n(33922),w=(n(13292),n(13082),n(96961)),g=n(6121),_=(n(77980),n(55321)),x=(0,v.A)([(0,k.EM)("matter-config-dashboard")],(function(t,e){var n,v,x,A,M=function(e){function n(){var e;(0,h.A)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return e=(0,p.A)(this,n,[].concat(i)),t(e),e}return(0,f.A)(n,e),(0,l.A)(n)}(e);return{F:M,d:[{kind:"field",decorators:[(0,k.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,k.wk)()],key:"_error",value:void 0},{kind:"field",key:"_unsub",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,m.A)(M,"disconnectedCallback",this,3)([]),this._stopRedirect()}},{kind:"method",key:"render",value:function(){return(0,b.qy)(r||(r=(0,d.A)([' <hass-subpage .narrow="','" .hass="','" header="Matter"> ',' <div class="content"> <ha-card header="Matter"> <ha-alert alert-type="warning">Matter is still in the early phase of development, it is not meant to be used in production. This panel is for development only.</ha-alert> <div class="card-content"> ',' You can add Matter devices by commissing them if they are not setup yet, or share them from another controller and enter the share code. </div> <div class="card-actions"> ',' <mwc-button @click="','">Commission device</mwc-button> <mwc-button @click="','">Add shared device</mwc-button> <mwc-button @click="','">Set WiFi Credentials</mwc-button> <mwc-button @click="','">Set Thread Credentials</mwc-button> </div> </ha-card> </div> </hass-subpage> '])),this.narrow,this.hass,(0,y.x)(this.hass,"otbr")?(0,b.qy)(i||(i=(0,d.A)([' <a href="/config/thread" slot="toolbar-icon"> <mwc-button>Visit Thread Panel</mwc-button> </a> ']))):"",this._error?(0,b.qy)(o||(o=(0,d.A)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",(0,w.k2)(this.hass)?(0,b.qy)(a||(a=(0,d.A)(['<mwc-button @click="','">Commission device with mobile app</mwc-button>'])),this._startMobileCommissioning):"",this._commission,this._acceptSharedDevice,this._setWifi,this._setThread)}},{kind:"method",key:"_redirectOnNewMatterDevice",value:function(){var t=this;this._unsub||(this._unsub=(0,w.hM)(this.hass,(function(){t._unsub=void 0})))}},{kind:"method",key:"_stopRedirect",value:function(){var t;null===(t=this._unsub)||void 0===t||t.call(this),this._unsub=void 0}},{kind:"method",key:"_startMobileCommissioning",value:function(){this._redirectOnNewMatterDevice(),(0,w.VN)(this.hass)}},{kind:"method",key:"_setWifi",value:(A=(0,u.A)((0,c.A)().mark((function t(){var e,n;return(0,c.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._error=void 0,t.next=3,(0,g.showPromptDialog)(this,{title:"Network name",inputLabel:"Network name",inputType:"string",confirmText:"Continue"});case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,(0,g.showPromptDialog)(this,{title:"Passcode",inputLabel:"Code",inputType:"password",confirmText:"Set Wifi"});case 8:if(n=t.sent){t.next=11;break}return t.abrupt("return");case 11:return t.prev=11,t.next=14,(0,w.lU)(this.hass,e,n);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(11),this._error=t.t0.message;case 19:case"end":return t.stop()}}),t,this,[[11,16]])}))),function(){return A.apply(this,arguments)})},{kind:"method",key:"_commission",value:(x=(0,u.A)((0,c.A)().mark((function t(){var e;return(0,c.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,g.showPromptDialog)(this,{title:"Commission device",inputLabel:"Code",inputType:"string",confirmText:"Commission"});case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:return this._error=void 0,this._redirectOnNewMatterDevice(),t.prev=7,t.next=10,(0,w.PO)(this.hass,e);case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(7),this._error=t.t0.message,this._stopRedirect();case 16:case"end":return t.stop()}}),t,this,[[7,12]])}))),function(){return x.apply(this,arguments)})},{kind:"method",key:"_acceptSharedDevice",value:(v=(0,u.A)((0,c.A)().mark((function t(){var e;return(0,c.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,g.showPromptDialog)(this,{title:"Add shared device",inputLabel:"Pin",inputType:"number",confirmText:"Accept device"});case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:return this._error=void 0,this._redirectOnNewMatterDevice(),t.prev=7,t.next=10,(0,w.XG)(this.hass,Number(e));case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(7),this._error=t.t0.message,this._stopRedirect();case 16:case"end":return t.stop()}}),t,this,[[7,12]])}))),function(){return v.apply(this,arguments)})},{kind:"method",key:"_setThread",value:(n=(0,u.A)((0,c.A)().mark((function t(){var e;return(0,c.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,g.showPromptDialog)(this,{title:"Set Thread operation",inputLabel:"Dataset",inputType:"string",confirmText:"Set Thread"});case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:return this._error=void 0,t.prev=6,t.next=9,(0,w.gZ)(this.hass,e);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),this._error=t.t0.message;case 14:case"end":return t.stop()}}),t,this,[[6,11]])}))),function(){return n.apply(this,arguments)})},{kind:"field",static:!0,key:"styles",value:function(){return[_.RF,(0,b.AH)(s||(s=(0,d.A)(["ha-alert[alert-type=warning]{position:relative;top:-16px}.content{padding:24px 0 32px;max-width:600px;margin:0 auto;direction:ltr}ha-card:first-child{margin-bottom:16px}a[slot=toolbar-icon]{text-decoration:none}"])))]}}]}}),b.WF)}}]);
//# sourceMappingURL=25552.4-tslduID7Y.js.map