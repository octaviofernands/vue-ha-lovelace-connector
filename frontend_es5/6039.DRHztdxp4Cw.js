"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6039],{37456:function(t,e,i){i.d(e,{a:function(){return a}});var o=(0,i(58034).n)((function(t){history.replaceState({scrollPosition:t},"")}),300),a=function(t){return function(e){return{kind:"method",placement:"prototype",key:e.key,descriptor:{set:function(t){o(t),this["__".concat(String(e.key))]=t},get:function(){var t;return this["__".concat(String(e.key))]||(null===(t=history.state)||void 0===t?void 0:t.scrollPosition)},enumerable:!0,configurable:!0},finisher:function(i){var o=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){var i=this;o.call(this);var a=this[e.key];a&&this.updateComplete.then((function(){var e=i.renderRoot.querySelector(t);e&&setTimeout((function(){e.scrollTop=a}),0)}))}}}}}},63516:function(t,e,i){i.d(e,{s:function(){return o}});var o=function(t){return!(!t.detail.selected||"property"!==t.detail.source)&&(t.currentTarget.selected=!1,!0)}},77980:function(t,e,i){var o,a,n,r,s,c=i(64599),l=i(35806),d=i(71008),u=i(62193),h=i(2816),f=i(27927),p=(i(81027),i(50289)),v=i(29818),g=i(37456),k=(i(45346),i(11804),i(55321));(0,f.A)([(0,v.EM)("hass-subpage")],(function(t,e){var i=function(e){function i(){var e;(0,d.A)(this,i);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return e=(0,u.A)(this,i,[].concat(a)),t(e),e}return(0,h.A)(i,e),(0,l.A)(i)}(e);return{F:i,d:[{kind:"field",decorators:[(0,v.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.MZ)()],key:"header",value:void 0},{kind:"field",decorators:[(0,v.MZ)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,v.MZ)({attribute:!1})],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,v.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:Boolean})],key:"supervisor",value:function(){return!1}},{kind:"field",decorators:[(0,g.a)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"render",value:function(){var t;return(0,p.qy)(o||(o=(0,c.A)([' <div class="toolbar"> ',' <div class="main-title"><slot name="header">','</slot></div> <slot name="toolbar-icon"></slot> </div> <div class="content ha-scrollbar" @scroll="','"> <slot></slot> </div> <div id="fab"> <slot name="fab"></slot> </div> '])),this.mainPage||null!==(t=history.state)&&void 0!==t&&t.root?(0,p.qy)(a||(a=(0,c.A)([' <ha-menu-button .hassio="','" .hass="','" .narrow="','"></ha-menu-button> '])),this.supervisor,this.hass,this.narrow):this.backPath?(0,p.qy)(n||(n=(0,c.A)([' <a href="','"> <ha-icon-button-arrow-prev .hass="','"></ha-icon-button-arrow-prev> </a> '])),this.backPath,this.hass):(0,p.qy)(r||(r=(0,c.A)([' <ha-icon-button-arrow-prev .hass="','" @click="','"></ha-icon-button-arrow-prev> '])),this.hass,this._backTapped),this.header,this._saveScrollPos)}},{kind:"method",decorators:[(0,v.Ls)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[k.dp,(0,p.AH)(s||(s=(0,c.A)([":host{display:block;height:100%;background-color:var(--primary-background-color);overflow:hidden;position:relative}:host([narrow]){width:100%;position:fixed}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{margin:var(--margin-title);line-height:20px;flex-grow:1}.content{position:relative;width:100%;height:calc(100% - 1px - var(--header-height));overflow-y:auto;overflow:auto;-webkit-overflow-scrolling:touch}#fab{position:absolute;right:calc(16px + env(safe-area-inset-right));inset-inline-end:calc(16px + env(safe-area-inset-right));inset-inline-start:initial;bottom:calc(16px + env(safe-area-inset-bottom));z-index:1;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px;inset-inline-end:24px;inset-inline-start:initial}"])))]}}]}}),p.WF)},6039:function(t,e,i){var o=i(22858).A,a=i(33994).A;i.a(t,function(){var t=o(a().mark((function t(o,n){var r,s,c,l,d,u,h,f,p,v,g,k,b,m,y,w,x,A,_,I,S,M,P,q,C,T,Z,z,F,B,D,j,E,R,H,Q,W,L,G,J,K,N,O,U;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,i.r(e),r=i(64599),s=i(41981),c=i(64782),l=i(35806),d=i(71008),u=i(62193),h=i(2816),f=i(27927),p=i(35890),v=i(81027),g=i(13025),k=i(95737),b=i(33231),m=i(39790),y=i(74268),w=i(24545),x=i(51855),A=i(82130),_=i(31743),I=i(22328),S=i(4959),M=i(62435),P=i(99019),q=i(253),C=i(2075),T=i(96858),Z=i(50289),z=i(29818),F=i(94100),B=i(33922),D=i(63516),j=i(16312),E=i(56932),i(13082),i(35619),R=i(60724),i(77980),H=i(20712),Q=i(58222),W=i(58856),L=i(52856),!(G=o([Q])).then){t.next=68;break}return t.next=64,G;case 64:t.t1=t.sent,t.t0=(0,t.t1)(),t.next=69;break;case 68:t.t0=G;case 69:Q=t.t0[0],(0,f.A)([(0,z.EM)("ha-config-repairs-dashboard")],(function(t,e){var i=function(e){function i(){var e;(0,d.A)(this,i);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return e=(0,u.A)(this,i,[].concat(a)),t(e),e}return(0,h.A)(i,e),(0,l.A)(i)}(e);return{F:i,d:[{kind:"field",decorators:[(0,z.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,z.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,z.wk)()],key:"_repairsIssues",value:function(){return[]}},{kind:"field",decorators:[(0,z.wk)()],key:"_showIgnored",value:function(){return!1}},{kind:"field",key:"_getFilteredIssues",value:function(){return(0,F.A)((function(t,e){return t?e:e.filter((function(t){return!t.ignored}))}))}},{kind:"method",key:"connectedCallback",value:function(){(0,p.A)(i,"connectedCallback",this,3)([]),"system-health"===(0,E.p9)("dialog")&&((0,j.o)("/config/repairs",{replace:!0}),(0,L.h)(this))}},{kind:"method",key:"hassSubscribe",value:function(){var t=this;return[(0,R.TP)(this.hass.connection,(function(e){t._repairsIssues=e.issues.sort((function(t,e){return R.Qk[t.severity]-R.Qk[e.severity]}));var i,o=new Set,a=(0,c.A)(t._repairsIssues);try{for(a.s();!(i=a.n()).done;){var n=i.value;o.add(n.domain)}}catch(r){a.e(r)}finally{a.f()}t.hass.loadBackendTranslation("issues",(0,s.A)(o))}))]}},{kind:"method",key:"render",value:function(){var t=this._getFilteredIssues(this._showIgnored,this._repairsIssues);return(0,Z.qy)(J||(J=(0,r.A)([' <hass-subpage back-path="/config/system" .hass="','" .narrow="','" .header="','"> <div slot="toolbar-icon"> <ha-button-menu multi> <ha-icon-button slot="trigger" .label="','" .path="','"></ha-icon-button> <ha-check-list-item left @request-selected="','" .selected="','"> ',' </ha-check-list-item> <li divider role="separator"></li> ',' <mwc-list-item @request-selected="','"> ',' </mwc-list-item> </ha-button-menu> </div> <div class="content"> <ha-card outlined> <div class="card-content"> '," </div> </ha-card> </div> </hass-subpage> "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.repairs.caption"),this.hass.localize("ui.common.menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",this._toggleIgnored,this._showIgnored,this.hass.localize("ui.panel.config.repairs.show_ignored"),(0,B.x)(this.hass,"system_health")||(0,B.x)(this.hass,"hassio")?(0,Z.qy)(K||(K=(0,r.A)([' <mwc-list-item @request-selected="','"> '," </mwc-list-item> "])),this._showSystemInformationDialog,this.hass.localize("ui.panel.config.repairs.system_information")):"",this._showIntegrationStartupDialog,this.hass.localize("ui.panel.config.repairs.integration_startup_time"),t.length?(0,Z.qy)(N||(N=(0,r.A)([' <ha-config-repairs .hass="','" .narrow="','" .repairsIssues="','"></ha-config-repairs> '])),this.hass,this.narrow,t):(0,Z.qy)(O||(O=(0,r.A)([' <div class="no-repairs"> '," </div> "])),this.hass.localize("ui.panel.config.repairs.no_repairs")))}},{kind:"method",key:"_showSystemInformationDialog",value:function(t){(0,D.s)(t)&&(0,L.h)(this)}},{kind:"method",key:"_showIntegrationStartupDialog",value:function(t){(0,D.s)(t)&&(0,W.R)(this)}},{kind:"method",key:"_toggleIgnored",value:function(t){"property"===t.detail.source&&(this._showIgnored=!this._showIgnored)}},{kind:"field",static:!0,key:"styles",value:function(){return(0,Z.AH)(U||(U=(0,r.A)([".content{padding:28px 20px 0;max-width:1040px;margin:0 auto}ha-card{max-width:600px;margin:0 auto;height:100%;justify-content:space-between;flex-direction:column;display:flex;margin-bottom:max(24px,env(safe-area-inset-bottom))}.card-content{display:flex;justify-content:space-between;flex-direction:column;padding:0}.no-repairs{padding:16px}li[divider]{border-bottom-color:var(--divider-color)}"])))}}]}}),(0,H.E)(Z.WF)),n(),t.next=78;break;case 75:t.prev=75,t.t2=t.catch(0),n(t.t2);case 78:case"end":return t.stop()}}),t,null,[[0,75]])})));return function(e,i){return t.apply(this,arguments)}}())},58856:function(t,e,i){i.d(e,{R:function(){return n}});i(95737),i(39790),i(66457),i(99019),i(96858);var o=i(34897),a=function(){return i.e(61429).then(i.bind(i,61429))},n=function(t){(0,o.r)(t,"show-dialog",{dialogTag:"dialog-integration-startup",dialogImport:a,dialogParams:{}})}},52856:function(t,e,i){i.d(e,{h:function(){return n}});i(95737),i(39790),i(66457),i(99019),i(96858);var o=i(34897),a=function(){return i.e(57764).then(i.bind(i,57764))},n=function(t){(0,o.r)(t,"show-dialog",{dialogTag:"dialog-system-information",dialogImport:a,dialogParams:void 0})}}}]);
//# sourceMappingURL=6039.DRHztdxp4Cw.js.map