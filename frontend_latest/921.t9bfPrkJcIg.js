export const id=921;export const ids=[921];export const modules={79682:(t,e,a)=>{a.d(e,{f:()=>r});a(253),a(4525);var o=a(21863),i=a(33922);const r=(t,e)=>(l(e)||n(t,e))&&!d(t,e)&&s(t,e),n=(t,e)=>!e.component||(0,o.e)(e.component).some((e=>(0,i.x)(t,e))),s=(t,e)=>!e.not_component||!(0,o.e)(e.not_component).some((e=>(0,i.x)(t,e))),l=t=>t.core,d=(t,e)=>(t=>t.advancedOnly)(e)&&!(t=>t.userData?.showAdvanced)(t)},37456:(t,e,a)=>{a.d(e,{a:()=>i});const o=(0,a(58034).n)((t=>{history.replaceState({scrollPosition:t},"")}),300),i=t=>e=>({kind:"method",placement:"prototype",key:e.key,descriptor:{set(t){o(t),this[`__${String(e.key)}`]=t},get(){return this[`__${String(e.key)}`]||history.state?.scrollPosition},enumerable:!0,configurable:!0},finisher(a){const o=a.prototype.connectedCallback;a.prototype.connectedCallback=function(){o.call(this);const a=this[e.key];a&&this.updateComplete.then((()=>{const e=this.renderRoot.querySelector(t);e&&setTimeout((()=>{e.scrollTop=a}),0)}))}}})},921:(t,e,a)=>{var o=a(36312),i=a(68689),r=(a(253),a(2075),a(94438),a(16891),a(50289)),n=a(29818),s=a(85323),l=a(94100),d=a(37456),c=(a(45346),a(11804),a(88400),a(17081),a(55321)),h=a(79682);(0,o.A)([(0,n.EM)("hass-tabs-subpage")],(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"supervisor",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"localizeFunc",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"tabs",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,reflect:!0,attribute:"is-wide"})],key:"isWide",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"pane",value:()=>!1},{kind:"field",decorators:[(0,n.wk)()],key:"_activeTab",value:void 0},{kind:"field",decorators:[(0,d.a)(".content")],key:"_savedScrollPos",value:void 0},{kind:"field",key:"_getTabs",value(){return(0,l.A)(((t,e,a,o,i,n)=>{const s=t.filter((t=>(0,h.f)(this.hass,t)));if(s.length<2){if(1===s.length){const t=s[0];return[t.translationKey?n(t.translationKey):t.name]}return[""]}return s.map((t=>r.qy` <a href="${t.path}"> <ha-tab .hass="${this.hass}" .active="${t.path===e?.path}" .narrow="${this.narrow}" .name="${t.translationKey?n(t.translationKey):t.name}"> ${t.iconPath?r.qy`<ha-svg-icon slot="icon" .path="${t.iconPath}"></ha-svg-icon>`:""} </ha-tab> </a> `))}))}},{kind:"method",key:"willUpdate",value:function(t){t.has("route")&&(this._activeTab=this.tabs.find((t=>`${this.route.prefix}${this.route.path}`.includes(t.path)))),(0,i.A)(a,"willUpdate",this,3)([t])}},{kind:"method",key:"render",value:function(){const t=this._getTabs(this.tabs,this._activeTab,this.hass.config.components,this.hass.language,this.narrow,this.localizeFunc||this.hass.localize),e=t.length>1;return r.qy` <div class="toolbar"> <slot name="toolbar"> <div class="toolbar-content"> ${this.mainPage||!this.backPath&&history.state?.root?r.qy` <ha-menu-button .hassio="${this.supervisor}" .hass="${this.hass}" .narrow="${this.narrow}"></ha-menu-button> `:this.backPath?r.qy` <a href="${this.backPath}"> <ha-icon-button-arrow-prev .hass="${this.hass}"></ha-icon-button-arrow-prev> </a> `:r.qy` <ha-icon-button-arrow-prev .hass="${this.hass}" @click="${this._backTapped}"></ha-icon-button-arrow-prev> `} ${this.narrow||!e?r.qy`<div class="main-title"> <slot name="header">${e?"":t[0]}</slot> </div>`:""} ${e&&!this.narrow?r.qy`<div id="tabbar">${t}</div>`:""} <div id="toolbar-icon"> <slot name="toolbar-icon"></slot> </div> </div> </slot> ${e&&this.narrow?r.qy`<div id="tabbar" class="bottom-bar">${t}</div>`:""} </div> <div class="container"> ${this.pane?r.qy`<div class="pane"> <div class="shadow-container"></div> <div class="ha-scrollbar"> <slot name="pane"></slot> </div> </div>`:r.s6} <div class="content ha-scrollbar ${(0,s.H)({tabs:e})}" @scroll="${this._saveScrollPos}"> <slot></slot> </div> </div> <div id="fab" class="${(0,s.H)({tabs:e})}"> <slot name="fab"></slot> </div> `}},{kind:"method",decorators:[(0,n.Ls)({passive:!0})],key:"_saveScrollPos",value:function(t){this._savedScrollPos=t.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[c.dp,r.AH`:host{display:block;height:100%;background-color:var(--primary-background-color)}:host([narrow]){width:100%;position:fixed}.container{display:flex;height:calc(100% - var(--header-height))}:host([narrow]) .container{height:100%}ha-menu-button{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial}.toolbar{font-size:20px;height:var(--header-height);background-color:var(--sidebar-background-color);font-weight:400;border-bottom:1px solid var(--divider-color);box-sizing:border-box}.toolbar-content{padding:8px 12px;display:flex;align-items:center;height:100%;box-sizing:border-box}@media (max-width:599px){.toolbar-content{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}.bottom-bar a{width:25%}#tabbar{display:flex;font-size:14px;overflow:hidden}#tabbar>a{overflow:hidden;max-width:45%}#tabbar.bottom-bar{position:absolute;bottom:0;left:0;padding:0 16px;box-sizing:border-box;background-color:var(--sidebar-background-color);border-top:1px solid var(--divider-color);justify-content:space-around;z-index:2;font-size:12px;width:100%;padding-bottom:env(safe-area-inset-bottom)}#tabbar:not(.bottom-bar){flex:1;justify-content:center}:host(:not([narrow])) #toolbar-icon{min-width:40px}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{display:flex;flex-shrink:0;pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{flex:1;max-height:var(--header-height);line-height:20px;color:var(--sidebar-text-color);margin:var(--main-title-margin,var(--margin-title))}.content{position:relative;width:calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));margin-left:env(safe-area-inset-left);margin-right:env(safe-area-inset-right);margin-inline-start:env(safe-area-inset-left);margin-inline-end:env(safe-area-inset-right);overflow:auto;-webkit-overflow-scrolling:touch}:host([narrow]) .content.tabs{height:calc(100% - 2 * var(--header-height));height:calc(100% - 2 * var(--header-height) - env(safe-area-inset-bottom))}#fab{position:fixed;right:calc(16px + env(safe-area-inset-right));inset-inline-end:calc(16px + env(safe-area-inset-right));inset-inline-start:initial;bottom:calc(16px + env(safe-area-inset-bottom));z-index:1;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px;inset-inline-end:24px;inset-inline-start:initial}.pane{border-right:1px solid var(--divider-color);border-inline-end:1px solid var(--divider-color);border-inline-start:initial;box-sizing:border-box;display:flex;flex:0 0 var(--sidepane-width,250px);width:var(--sidepane-width,250px);flex-direction:column;position:relative}.pane .ha-scrollbar{flex:1}`]}}]}}),r.WF)}};
//# sourceMappingURL=921.t9bfPrkJcIg.js.map