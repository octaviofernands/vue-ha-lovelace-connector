export const id=4449;export const ids=[4449,36185];export const modules={36185:(e,t,a)=>{var i=a(36312),o=a(68689),r=(a(253),a(54846),a(16891),a(50289)),s=a(29818),n=a(85920),d=a(34897);a(13292),a(9421);const l={boolean:()=>a.e(96292).then(a.bind(a,96292)),constant:()=>a.e(44354).then(a.bind(a,44354)),float:()=>a.e(80866).then(a.bind(a,80866)),grid:()=>a.e(21306).then(a.bind(a,21306)),expandable:()=>a.e(82178).then(a.bind(a,82178)),integer:()=>a.e(65622).then(a.bind(a,43241)),multi_select:()=>a.e(26964).then(a.bind(a,26964)),positive_time_period_dict:()=>a.e(24280).then(a.bind(a,24280)),select:()=>a.e(22038).then(a.bind(a,22038)),string:()=>a.e(38819).then(a.bind(a,38819))},u=(e,t)=>e?!t.name||t.flatten?e:e[t.name]:null;(0,i.A)([(0,s.EM)("ha-form")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"warning",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"computeError",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"method",key:"getFormProperties",value:function(){return{}}},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof r.mN&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{"selector"in e||l[e.type]?.()}))}},{kind:"method",key:"render",value:function(){return r.qy` <div class="root" part="root"> ${this.error&&this.error.base?r.qy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e),a=((e,t)=>e&&t.name?e[t.name]:null)(this.warning,e);return r.qy` ${t?r.qy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:a?r.qy` <ha-alert own-margin alert-type="warning"> ${this._computeWarning(a,e)} </ha-alert> `:""} ${"selector"in e?r.qy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${u(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,n._)(this.fieldElementName(e.type),{schema:e,data:u(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,localize:this.hass?.localize,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e),...this.getFormProperties()})} `}))} </div> `}},{kind:"method",key:"fieldElementName",value:function(e){return`ha-form-${e}`}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[a,i]of Object.entries(e.context))t[a]=this.data[i];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,o.A)(a,"createRenderRoot",this,3)([]);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema;if(e.target===this)return;const a=!t.name||"flatten"in t&&t.flatten?e.detail.value:{[t.name]:e.detail.value};this.data={...this.data,...a},(0,d.r)(this,"value-changed",{value:this.data})}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return Array.isArray(e)?r.qy`<ul> ${e.map((e=>r.qy`<li> ${this.computeError?this.computeError(e,t):e} </li>`))} </ul>`:this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return r.AH`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}}]}}),r.WF)},4449:(e,t,a)=>{a.r(t),a.d(t,{HuiFanPresetModesCardFeatureEditor:()=>d});var i=a(36312),o=a(50289),r=a(29818),s=a(94100),n=a(34897);a(36185);let d=(0,i.A)([(0,r.EM)("hui-fan-preset-modes-card-feature-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_schema",value:()=>(0,s.A)(((e,t,a,i)=>[{name:"style",selector:{select:{multiple:!1,mode:"list",options:["dropdown","icons"].map((t=>({value:t,label:e(`ui.panel.lovelace.editor.features.types.fan-preset-modes.style_list.${t}`)})))}}},{name:"customize_modes",selector:{boolean:{}}},...i?[{name:"preset_modes",selector:{select:{reorder:!0,multiple:!0,options:a?.attributes.preset_modes?.map((e=>({value:e,label:t(a,"preset_mode",e)})))||[]}}}]:[]]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return o.s6;const e=this.context?.entity_id?this.hass.states[this.context?.entity_id]:void 0,t={style:"dropdown",...this._config,customize_modes:void 0!==this._config.preset_modes},a=this._schema(this.hass.localize,this.hass.formatEntityAttributeValue,e,t.customize_modes);return o.qy` <ha-form .hass="${this.hass}" .data="${t}" .schema="${a}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){const{customize_modes:t,...a}=e.detail.value,i=this.context?.entity_id?this.hass.states[this.context?.entity_id]:void 0;t&&!a.preset_modes&&(a.preset_modes=i?.attributes.preset_modes||[]),!t&&a.preset_modes&&delete a.preset_modes,(0,n.r)(this,"config-changed",{config:a})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"style":case"preset_modes":case"customize_modes":return this.hass.localize(`ui.panel.lovelace.editor.features.types.fan-preset-modes.${e.name}`);default:return""}}}}]}}),o.WF)}};
//# sourceMappingURL=4449.ivufjhXT13Y.js.map