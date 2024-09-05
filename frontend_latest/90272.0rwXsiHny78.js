export const id=90272;export const ids=[90272,36185];export const modules={36185:(e,t,i)=>{var o=i(36312),a=i(68689),n=(i(253),i(54846),i(16891),i(50289)),r=i(29818),s=i(85920),d=i(34897);i(13292),i(9421);const l={boolean:()=>i.e(96292).then(i.bind(i,96292)),constant:()=>i.e(44354).then(i.bind(i,44354)),float:()=>i.e(80866).then(i.bind(i,80866)),grid:()=>i.e(21306).then(i.bind(i,21306)),expandable:()=>i.e(82178).then(i.bind(i,82178)),integer:()=>i.e(65622).then(i.bind(i,43241)),multi_select:()=>i.e(26964).then(i.bind(i,26964)),positive_time_period_dict:()=>i.e(24280).then(i.bind(i,24280)),select:()=>i.e(22038).then(i.bind(i,22038)),string:()=>i.e(38819).then(i.bind(i,38819))},c=(e,t)=>e?!t.name||t.flatten?e:e[t.name]:null;(0,o.A)([(0,r.EM)("ha-form")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"warning",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeError",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"method",key:"getFormProperties",value:function(){return{}}},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof n.mN&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{"selector"in e||l[e.type]?.()}))}},{kind:"method",key:"render",value:function(){return n.qy` <div class="root" part="root"> ${this.error&&this.error.base?n.qy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e),i=((e,t)=>e&&t.name?e[t.name]:null)(this.warning,e);return n.qy` ${t?n.qy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:i?n.qy` <ha-alert own-margin alert-type="warning"> ${this._computeWarning(i,e)} </ha-alert> `:""} ${"selector"in e?n.qy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${c(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,s._)(this.fieldElementName(e.type),{schema:e,data:c(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,localize:this.hass?.localize,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e),...this.getFormProperties()})} `}))} </div> `}},{kind:"method",key:"fieldElementName",value:function(e){return`ha-form-${e}`}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[i,o]of Object.entries(e.context))t[i]=this.data[o];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,a.A)(i,"createRenderRoot",this,3)([]);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema;if(e.target===this)return;const i=!t.name||"flatten"in t&&t.flatten?e.detail.value:{[t.name]:e.detail.value};this.data={...this.data,...i},(0,d.r)(this,"value-changed",{value:this.data})}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return Array.isArray(e)?n.qy`<ul> ${e.map((e=>n.qy`<li> ${this.computeError?this.computeError(e,t):e} </li>`))} </ul>`:this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return n.AH`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}}]}}),n.WF)},90272:(e,t,i)=>{i.r(t),i.d(t,{HuiSelectOptionsCardFeatureEditor:()=>d});var o=i(36312),a=i(50289),n=i(29818),r=i(94100),s=i(34897);i(36185);let d=(0,o.A)([(0,n.EM)("hui-select-options-card-feature-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_schema",value:()=>(0,r.A)(((e,t,i)=>[{name:"customize_options",selector:{boolean:{}}},...i?[{name:"options",selector:{select:{multiple:!0,reorder:!0,options:t?.attributes.options?.map((i=>({value:i,label:e(t,i)})))||[]}}}]:[]]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return a.s6;const e=this.context?.entity_id?this.hass.states[this.context?.entity_id]:void 0,t={...this._config,customize_options:void 0!==this._config.options},i=this._schema(this.hass.formatEntityState,e,t.customize_options);return a.qy` <ha-form .hass="${this.hass}" .data="${t}" .schema="${i}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){const{customize_options:t,...i}=e.detail.value,o=this.context?.entity_id?this.hass.states[this.context?.entity_id]:void 0;t&&!i.options&&(i.options=o?.attributes.options||[]),!t&&i.options&&delete i.options,(0,s.r)(this,"config-changed",{config:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"options":case"customize_options":return this.hass.localize(`ui.panel.lovelace.editor.features.types.select-options.${e.name}`);default:return""}}}}]}}),a.WF)}};
//# sourceMappingURL=90272.0rwXsiHny78.js.map