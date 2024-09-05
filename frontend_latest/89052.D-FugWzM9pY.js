export const id=89052;export const ids=[89052,36185];export const modules={36185:(e,t,a)=>{var i=a(36312),n=a(68689),o=(a(253),a(54846),a(16891),a(50289)),r=a(29818),s=a(85920),l=a(34897);a(13292),a(9421);const c={boolean:()=>a.e(96292).then(a.bind(a,96292)),constant:()=>a.e(44354).then(a.bind(a,44354)),float:()=>a.e(80866).then(a.bind(a,80866)),grid:()=>a.e(21306).then(a.bind(a,21306)),expandable:()=>a.e(82178).then(a.bind(a,82178)),integer:()=>a.e(65622).then(a.bind(a,43241)),multi_select:()=>a.e(26964).then(a.bind(a,26964)),positive_time_period_dict:()=>a.e(24280).then(a.bind(a,24280)),select:()=>a.e(22038).then(a.bind(a,22038)),string:()=>a.e(38819).then(a.bind(a,38819))},d=(e,t)=>e?!t.name||t.flatten?e:e[t.name]:null;(0,i.A)([(0,r.EM)("ha-form")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"warning",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeError",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"method",key:"getFormProperties",value:function(){return{}}},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof o.mN&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{"selector"in e||c[e.type]?.()}))}},{kind:"method",key:"render",value:function(){return o.qy` <div class="root" part="root"> ${this.error&&this.error.base?o.qy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e),a=((e,t)=>e&&t.name?e[t.name]:null)(this.warning,e);return o.qy` ${t?o.qy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:a?o.qy` <ha-alert own-margin alert-type="warning"> ${this._computeWarning(a,e)} </ha-alert> `:""} ${"selector"in e?o.qy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${d(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,s._)(this.fieldElementName(e.type),{schema:e,data:d(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,localize:this.hass?.localize,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e),...this.getFormProperties()})} `}))} </div> `}},{kind:"method",key:"fieldElementName",value:function(e){return`ha-form-${e}`}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[a,i]of Object.entries(e.context))t[a]=this.data[i];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,n.A)(a,"createRenderRoot",this,3)([]);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema;if(e.target===this)return;const a=!t.name||"flatten"in t&&t.flatten?e.detail.value:{[t.name]:e.detail.value};this.data={...this.data,...a},(0,l.r)(this,"value-changed",{value:this.data})}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return Array.isArray(e)?o.qy`<ul> ${e.map((e=>o.qy`<li> ${this.computeError?this.computeError(e,t):e} </li>`))} </ul>`:this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return o.AH`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}}]}}),o.WF)},89052:(e,t,a)=>{a.r(t),a.d(t,{HuiStatisticCardEditor:()=>k});var i=a(36312),n=(a(253),a(54846),a(16891),a(50289)),o=a(29818),r=a(94100),s=a(66419),l=a(34897),c=a(16569),d=(a(36185),a(4826)),h=a(36343),u=a(56124);const m=(0,s.kp)(u.H,(0,s.Ik)({entity:(0,s.lq)((0,s.Yj)()),name:(0,s.lq)((0,s.Yj)()),icon:(0,s.lq)((0,s.Yj)()),unit:(0,s.lq)((0,s.Yj)()),stat_type:(0,s.lq)((0,s.Yj)()),period:(0,s.lq)((0,s.bz)()),theme:(0,s.lq)((0,s.Yj)()),footer:(0,s.lq)(h.zb)})),p=["mean","min","max","change"],f={mean:"mean",min:"min",max:"max",change:"sum"},y={today:{calendar:{period:"day"}},yesterday:{calendar:{period:"day",offset:-1}},this_week:{calendar:{period:"week"}},last_week:{calendar:{period:"week",offset:-1}},this_month:{calendar:{period:"month"}},last_month:{calendar:{period:"month",offset:-1}},this_year:{calendar:{period:"year"}},last_year:{calendar:{period:"year",offset:-1}}};let k=(0,i.A)([(0,o.EM)("hui-statistic-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_metadata",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,s.vA)(e,m),this._config=e,this._fetchMetadata()}},{kind:"method",key:"firstUpdated",value:function(){this._fetchMetadata().then((()=>{!this._config?.stat_type&&this._config?.entity&&(0,l.r)(this,"config-changed",{config:{...this._config,stat_type:this._metadata?.has_sum?"change":"mean"}})}))}},{kind:"field",key:"_data",value:()=>(0,r.A)((e=>{if(!e||!e.period)return e;for(const[t,a]of Object.entries(y))if((0,c.b)(a,e.period))return{...e,period:t};return e}))},{kind:"field",key:"_schema",value:()=>(0,r.A)(((e,t,a)=>[{name:"entity",required:!0,selector:{statistic:{}}},{name:"stat_type",required:!0,selector:{select:{multiple:!1,options:p.map((e=>({value:e,label:t(`ui.panel.lovelace.editor.card.statistic.stat_type_labels.${e}`),disabled:!a||!(0,d.nN)(a,f[e])})))}}},{name:"period",required:!0,selector:e&&Object.keys(y).includes(e)?{select:{multiple:!1,options:Object.keys(y).map((e=>({value:e,label:t(`ui.panel.lovelace.editor.card.statistic.periods.${e}`)||e})))}}:{object:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}},{name:"unit",selector:{text:{}}},{name:"theme",selector:{theme:{}}}]}]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return n.s6;const e=this._data(this._config),t=this._schema("string"==typeof e.period?e.period:void 0,this.hass.localize,this._metadata);return n.qy` <ha-form .hass="${this.hass}" .data="${e}" .schema="${t}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_fetchMetadata",value:async function(){this.hass&&this._config&&(this._metadata=(await(0,d.Wr)(this.hass,[this._config.entity]))[0])}},{kind:"method",key:"_valueChanged",value:async function(e){const t={...e.detail.value};if(Object.keys(t).forEach((e=>""===t[e]&&delete t[e])),"string"==typeof t.period){const e=y[t.period];e&&(t.period=e)}if(t.stat_type&&t.entity&&t.entity!==this._metadata?.statistic_id){const e=(await(0,d.Wr)(this.hass,[t.entity]))?.[0];e&&!e.has_sum&&"change"===t.stat_type&&(t.stat_type="mean"),e&&!e.has_mean&&"change"!==t.stat_type&&(t.stat_type="change")}if(!t.stat_type&&t.entity){const e=(await(0,d.Wr)(this.hass,[t.entity]))?.[0];t.stat_type=e?.has_sum?"change":"mean"}(0,l.r)(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"period"===e.name?this.hass.localize("ui.panel.lovelace.editor.card.statistic.period"):"theme"===e.name?`${this.hass.localize("ui.panel.lovelace.editor.card.generic.theme")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`:this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),n.WF)},76914:(e,t,a)=>{a.d(t,{k:()=>h});var i=a(66419);const n=(0,i.Ik)({user:(0,i.Yj)()}),o=(0,i.KC)([(0,i.zM)(),(0,i.Ik)({text:(0,i.lq)((0,i.Yj)()),excemptions:(0,i.lq)((0,i.YO)(n))})]),r=(0,i.Ik)({action:(0,i.eu)("url"),url_path:(0,i.Yj)(),confirmation:(0,i.lq)(o)}),s=(0,i.Ik)({action:(0,i.vP)(["call-service","perform-action"]),service:(0,i.lq)((0,i.Yj)()),perform_action:(0,i.lq)((0,i.Yj)()),service_data:(0,i.lq)((0,i.Ik)()),data:(0,i.lq)((0,i.Ik)()),target:(0,i.lq)((0,i.Ik)({entity_id:(0,i.lq)((0,i.KC)([(0,i.Yj)(),(0,i.YO)((0,i.Yj)())])),device_id:(0,i.lq)((0,i.KC)([(0,i.Yj)(),(0,i.YO)((0,i.Yj)())])),area_id:(0,i.lq)((0,i.KC)([(0,i.Yj)(),(0,i.YO)((0,i.Yj)())])),floor_id:(0,i.lq)((0,i.KC)([(0,i.Yj)(),(0,i.YO)((0,i.Yj)())])),label_id:(0,i.lq)((0,i.KC)([(0,i.Yj)(),(0,i.YO)((0,i.Yj)())]))})),confirmation:(0,i.lq)(o)}),l=(0,i.Ik)({action:(0,i.eu)("navigate"),navigation_path:(0,i.Yj)(),navigation_replace:(0,i.lq)((0,i.zM)()),confirmation:(0,i.lq)(o)}),c=(0,i.NW)({action:(0,i.eu)("assist"),pipeline_id:(0,i.lq)((0,i.Yj)()),start_listening:(0,i.lq)((0,i.zM)())}),d=(0,i.Ik)({action:(0,i.vP)(["none","toggle","more-info","call-service","perform-action","url","navigate","assist"]),confirmation:(0,i.lq)(o)}),h=(0,i.OR)((e=>{if(e&&"object"==typeof e&&"action"in e)switch(e.action){case"call-service":case"perform-action":return s;case"navigate":return l;case"url":return r;case"assist":return c}return d}))},56124:(e,t,a)=>{a.d(t,{H:()=>n});var i=a(66419);const n=(0,i.Ik)({type:(0,i.Yj)(),view_layout:(0,i.bz)(),layout_options:(0,i.bz)(),visibility:(0,i.bz)()})},1154:(e,t,a)=>{a.d(t,{J:()=>o});var i=a(66419),n=a(76914);const o=(0,i.Ik)({entity:(0,i.Yj)(),name:(0,i.lq)((0,i.Yj)()),icon:(0,i.lq)((0,i.Yj)()),image:(0,i.lq)((0,i.Yj)()),show_name:(0,i.lq)((0,i.zM)()),show_icon:(0,i.lq)((0,i.zM)()),tap_action:(0,i.lq)(n.k),hold_action:(0,i.lq)(n.k),double_tap_action:(0,i.lq)(n.k)})},36343:(e,t,a)=>{a.d(t,{oe:()=>l,zb:()=>c});var i=a(66419),n=a(76914),o=a(1154);const r=(0,i.Ik)({type:(0,i.Yj)(),image:(0,i.Yj)(),tap_action:(0,i.lq)(n.k),hold_action:(0,i.lq)(n.k),double_tap_action:(0,i.lq)(n.k),alt_text:(0,i.lq)((0,i.Yj)())}),s=(0,i.Ik)({type:(0,i.Yj)(),entities:(0,i.YO)(o.J)}),l=(0,i.Ik)({type:(0,i.Yj)(),entity:(0,i.Yj)(),detail:(0,i.lq)((0,i.ai)()),hours_to_show:(0,i.lq)((0,i.ai)())}),c=(0,i.OR)((e=>{if(e&&"object"==typeof e&&"type"in e)switch(e.type){case"buttons":return s;case"graph":return l;case"picture":return r}return(0,i.KC)([s,l,r])}))}};
//# sourceMappingURL=89052.D-FugWzM9pY.js.map