"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[921],{79682:function(t,e,a){a.d(e,{f:function(){return o}});a(39790),a(253),a(4525);var i=a(21863),n=a(33922),o=function(t,e){return(l(e)||r(t,e))&&!c(t,e)&&s(t,e)},r=function(t,e){return!e.component||(0,i.e)(e.component).some((function(e){return(0,n.x)(t,e)}))},s=function(t,e){return!e.not_component||!(0,i.e)(e.not_component).some((function(e){return(0,n.x)(t,e)}))},l=function(t){return t.core},c=function(t,e){return function(t){return t.advancedOnly}(e)&&!function(t){var e;return null===(e=t.userData)||void 0===e?void 0:e.showAdvanced}(t)}},37456:function(t,e,a){a.d(e,{a:function(){return n}});var i=(0,a(58034).n)((function(t){history.replaceState({scrollPosition:t},"")}),300),n=function(t){return function(e){return{kind:"method",placement:"prototype",key:e.key,descriptor:{set:function(t){i(t),this["__".concat(String(e.key))]=t},get:function(){var t;return this["__".concat(String(e.key))]||(null===(t=history.state)||void 0===t?void 0:t.scrollPosition)},enumerable:!0,configurable:!0},finisher:function(a){var i=a.prototype.connectedCallback;a.prototype.connectedCallback=function(){var a=this;i.call(this);var n=this[e.key];n&&this.updateComplete.then((function(){var e=a.renderRoot.querySelector(t);e&&setTimeout((function(){e.scrollTop=n}),0)}))}}}}}},921:function(t,e,a){var i,n,o,r,s,l,c,d,h,u,v,b=a(64599),f=a(35806),p=a(71008),k=a(62193),g=a(2816),m=a(27927),y=a(35890),x=(a(81027),a(13025),a(44124),a(82386),a(97741),a(50693),a(39790),a(36604),a(253),a(2075),a(94438),a(16891),a(50289)),w=a(29818),A=a(85323),_=a(94100),P=a(37456),z=(a(45346),a(11804),a(88400),a(17081),a(55321)),M=a(79682);(0,m.A)([(0,w.EM)("hass-tabs-subpage")],(function(t,e){var a=function(e){function a(){var e;(0,p.A)(this,a);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=(0,k.A)(this,a,[].concat(n)),t(e),e}return(0,g.A)(a,e),(0,f.A)(a)}(e);return{F:a,d:[{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.MZ)({type:Boolean})],key:"supervisor",value:function(){return!1}},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[(0,w.MZ)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,w.MZ)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:function(){return!1}},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"tabs",value:void 0},{kind:"field",decorators:[(0,w.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,w.MZ)({type:Boolean,reflect:!0,attribute:"is-wide"})],key:"isWide",value:function(){return!1}},{kind:"field",decorators:[(0,w.MZ)({type:Boolean})],key:"pane",value:function(){return!1}},{kind:"field",decorators:[(0,w.wk)()],key:"_activeTab",value:void 0},{kind:"field",decorators:[(0,P.a)(".content")],key:"_savedScrollPos",value:void 0},{kind:"field",key:"_getTabs",value:function(){var t=this;return(0,_.A)((function(e,a,o,r,s,l){var c=e.filter((function(e){return(0,M.f)(t.hass,e)}));if(c.length<2){if(1===c.length){var d=c[0];return[d.translationKey?l(d.translationKey):d.name]}return[""]}return c.map((function(e){return(0,x.qy)(i||(i=(0,b.A)([' <a href="','"> <ha-tab .hass="','" .active="','" .narrow="','" .name="','"> '," </ha-tab> </a> "])),e.path,t.hass,e.path===(null==a?void 0:a.path),t.narrow,e.translationKey?l(e.translationKey):e.name,e.iconPath?(0,x.qy)(n||(n=(0,b.A)(['<ha-svg-icon slot="icon" .path="','"></ha-svg-icon>'])),e.iconPath):"")}))}))}},{kind:"method",key:"willUpdate",value:function(t){var e=this;t.has("route")&&(this._activeTab=this.tabs.find((function(t){return"".concat(e.route.prefix).concat(e.route.path).includes(t.path)}))),(0,y.A)(a,"willUpdate",this,3)([t])}},{kind:"method",key:"render",value:function(){var t,e=this._getTabs(this.tabs,this._activeTab,this.hass.config.components,this.hass.language,this.narrow,this.localizeFunc||this.hass.localize),a=e.length>1;return(0,x.qy)(o||(o=(0,b.A)([' <div class="toolbar"> <slot name="toolbar"> <div class="toolbar-content"> '," "," ",' <div id="toolbar-icon"> <slot name="toolbar-icon"></slot> </div> </div> </slot> ',' </div> <div class="container"> ',' <div class="content ha-scrollbar ','" @scroll="','"> <slot></slot> </div> </div> <div id="fab" class="','"> <slot name="fab"></slot> </div> '])),this.mainPage||!this.backPath&&null!==(t=history.state)&&void 0!==t&&t.root?(0,x.qy)(r||(r=(0,b.A)([' <ha-menu-button .hassio="','" .hass="','" .narrow="','"></ha-menu-button> '])),this.supervisor,this.hass,this.narrow):this.backPath?(0,x.qy)(s||(s=(0,b.A)([' <a href="','"> <ha-icon-button-arrow-prev .hass="','"></ha-icon-button-arrow-prev> </a> '])),this.backPath,this.hass):(0,x.qy)(l||(l=(0,b.A)([' <ha-icon-button-arrow-prev .hass="','" @click="','"></ha-icon-button-arrow-prev> '])),this.hass,this._backTapped),this.narrow||!a?(0,x.qy)(c||(c=(0,b.A)(['<div class="main-title"> <slot name="header">',"</slot> </div>"])),a?"":e[0]):"",a&&!this.narrow?(0,x.qy)(d||(d=(0,b.A)(['<div id="tabbar">',"</div>"])),e):"",a&&this.narrow?(0,x.qy)(h||(h=(0,b.A)(['<div id="tabbar" class="bottom-bar">',"</div>"])),e):"",this.pane?(0,x.qy)(u||(u=(0,b.A)(['<div class="pane"> <div class="shadow-container"></div> <div class="ha-scrollbar"> <slot name="pane"></slot> </div> </div>']))):x.s6,(0,A.H)({tabs:a}),this._saveScrollPos,(0,A.H)({tabs:a}))}},{kind:"method",decorators:[(0,w.Ls)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[z.dp,(0,x.AH)(v||(v=(0,b.A)([":host{display:block;height:100%;background-color:var(--primary-background-color)}:host([narrow]){width:100%;position:fixed}.container{display:flex;height:calc(100% - var(--header-height))}:host([narrow]) .container{height:100%}ha-menu-button{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial}.toolbar{font-size:20px;height:var(--header-height);background-color:var(--sidebar-background-color);font-weight:400;border-bottom:1px solid var(--divider-color);box-sizing:border-box}.toolbar-content{padding:8px 12px;display:flex;align-items:center;height:100%;box-sizing:border-box}@media (max-width:599px){.toolbar-content{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}.bottom-bar a{width:25%}#tabbar{display:flex;font-size:14px;overflow:hidden}#tabbar>a{overflow:hidden;max-width:45%}#tabbar.bottom-bar{position:absolute;bottom:0;left:0;padding:0 16px;box-sizing:border-box;background-color:var(--sidebar-background-color);border-top:1px solid var(--divider-color);justify-content:space-around;z-index:2;font-size:12px;width:100%;padding-bottom:env(safe-area-inset-bottom)}#tabbar:not(.bottom-bar){flex:1;justify-content:center}:host(:not([narrow])) #toolbar-icon{min-width:40px}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{display:flex;flex-shrink:0;pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{flex:1;max-height:var(--header-height);line-height:20px;color:var(--sidebar-text-color);margin:var(--main-title-margin,var(--margin-title))}.content{position:relative;width:calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));margin-left:env(safe-area-inset-left);margin-right:env(safe-area-inset-right);margin-inline-start:env(safe-area-inset-left);margin-inline-end:env(safe-area-inset-right);overflow:auto;-webkit-overflow-scrolling:touch}:host([narrow]) .content.tabs{height:calc(100% - 2 * var(--header-height));height:calc(100% - 2 * var(--header-height) - env(safe-area-inset-bottom))}#fab{position:fixed;right:calc(16px + env(safe-area-inset-right));inset-inline-end:calc(16px + env(safe-area-inset-right));inset-inline-start:initial;bottom:calc(16px + env(safe-area-inset-bottom));z-index:1;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px;inset-inline-end:24px;inset-inline-start:initial}.pane{border-right:1px solid var(--divider-color);border-inline-end:1px solid var(--divider-color);border-inline-start:initial;box-sizing:border-box;display:flex;flex:0 0 var(--sidepane-width,250px);width:var(--sidepane-width,250px);flex-direction:column;position:relative}.pane .ha-scrollbar{flex:1}"])))]}}]}}),x.WF)}}]);
//# sourceMappingURL=921.yjePHx2p0fk.js.map