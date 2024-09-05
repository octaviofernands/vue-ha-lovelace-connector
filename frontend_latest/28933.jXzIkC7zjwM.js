export const id=28933;export const ids=[28933,36185];export const modules={36185:(e,t,a)=>{var i=a(36312),n=a(68689),o=(a(253),a(54846),a(16891),a(50289)),r=a(29818),s=a(85920),d=a(34897);a(13292),a(9421);const l={boolean:()=>a.e(96292).then(a.bind(a,96292)),constant:()=>a.e(44354).then(a.bind(a,44354)),float:()=>a.e(80866).then(a.bind(a,80866)),grid:()=>a.e(21306).then(a.bind(a,21306)),expandable:()=>a.e(82178).then(a.bind(a,82178)),integer:()=>a.e(65622).then(a.bind(a,43241)),multi_select:()=>a.e(26964).then(a.bind(a,26964)),positive_time_period_dict:()=>a.e(24280).then(a.bind(a,24280)),select:()=>a.e(22038).then(a.bind(a,22038)),string:()=>a.e(38819).then(a.bind(a,38819))},h=(e,t)=>e?!t.name||t.flatten?e:e[t.name]:null;(0,i.A)([(0,r.EM)("ha-form")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"warning",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeError",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"method",key:"getFormProperties",value:function(){return{}}},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof o.mN&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{"selector"in e||l[e.type]?.()}))}},{kind:"method",key:"render",value:function(){return o.qy` <div class="root" part="root"> ${this.error&&this.error.base?o.qy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e),a=((e,t)=>e&&t.name?e[t.name]:null)(this.warning,e);return o.qy` ${t?o.qy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:a?o.qy` <ha-alert own-margin alert-type="warning"> ${this._computeWarning(a,e)} </ha-alert> `:""} ${"selector"in e?o.qy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${h(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,s._)(this.fieldElementName(e.type),{schema:e,data:h(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,localize:this.hass?.localize,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e),...this.getFormProperties()})} `}))} </div> `}},{kind:"method",key:"fieldElementName",value:function(e){return`ha-form-${e}`}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[a,i]of Object.entries(e.context))t[a]=this.data[i];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,n.A)(a,"createRenderRoot",this,3)([]);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema;if(e.target===this)return;const a=!t.name||"flatten"in t&&t.flatten?e.detail.value:{[t.name]:e.detail.value};this.data={...this.data,...a},(0,d.r)(this,"value-changed",{value:this.data})}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return Array.isArray(e)?o.qy`<ul> ${e.map((e=>o.qy`<li> ${this.computeError?this.computeError(e,t):e} </li>`))} </ul>`:this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return o.AH`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}}]}}),o.WF)},28933:(e,t,a)=>{var i=a(36312),n=(a(72606),a(50289)),o=a(29818),r=a(94100),s=a(34897);var d=a(29180),l=(a(36185),a(2982)),h=a(55321);let c=(0,i.A)(null,(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_submitting",value:()=>!1},{kind:"method",key:"showDialog",value:function(e){if(this._params=e,this._error=void 0,this._params.entry)this._data=this._params.entry;else{const e=(0,l.kg)();let t;e?.latitude&&e?.longitude||(t=((e,t,a)=>{const i=6378e3;return[e[0]+a/i*(180/Math.PI),e[1]+t/i*(180/Math.PI)/Math.cos(e[0]*Math.PI/180)]})([this.hass.config.latitude,this.hass.config.longitude],500*Math.random()*(Math.random()<.5?-1:1),500*Math.random()*(Math.random()<.5?-1:1))),this._data={latitude:e?.latitude||t[0],longitude:e?.longitude||t[1],name:e?.name||"",icon:e?.icon||"mdi:map-marker",passive:!1,radius:100}}}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._data=void 0,(0,s.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params||!this._data)return n.s6;const e=""===this._data.name.trim(),t=Boolean(this._data.icon&&!this._data.icon.trim().includes(":")),a=""===String(this._data.latitude),i=""===String(this._data.longitude),o=""===String(this._data.radius),r=!(e||t||a||i||o);return n.qy` <ha-dialog open @closed="${this.closeDialog}" scrimClickAction escapeKeyAction .heading="${(0,d.l)(this.hass,this._params.entry?this._params.entry.name:this.hass.localize("ui.panel.config.zone.detail.new_zone"))}"> <div> <ha-form .hass="${this.hass}" .schema="${this._schema(this._data.icon)}" .data="${this._formData(this._data)}" .error="${this._error}" .computeLabel="${this._computeLabel}" class="${this._data.passive?"passive":""}" @value-changed="${this._valueChanged}"></ha-form> </div> ${this._params.entry?n.qy` <mwc-button slot="secondaryAction" class="warning" @click="${this._deleteEntry}" .disabled="${this._submitting}"> ${this.hass.localize("ui.panel.config.zone.detail.delete")} </mwc-button> `:n.s6} <mwc-button slot="primaryAction" @click="${this._updateEntry}" .disabled="${!r||this._submitting}"> ${this._params.entry?this.hass.localize("ui.panel.config.zone.detail.update"):this.hass.localize("ui.panel.config.zone.detail.create")} </mwc-button> </ha-dialog> `}},{kind:"field",key:"_schema",value:()=>(0,r.A)((e=>[{name:"name",required:!0,selector:{text:{}}},{name:"icon",required:!1,selector:{icon:{}}},{name:"location",required:!0,selector:{location:{radius:!0,icon:e}}},{name:"passive_note",type:"constant"},{name:"passive",selector:{boolean:{}}}]))},{kind:"field",key:"_formData",value:()=>(0,r.A)((e=>({...e,location:{latitude:e.latitude,longitude:e.longitude,radius:e.radius}})))},{kind:"method",key:"_valueChanged",value:function(e){this._error=void 0;const t={...e.detail.value};t.latitude=t.location.latitude,t.longitude=t.location.longitude,t.radius=t.location.radius,delete t.location,t.icon||delete t.icon,this._data=t}},{kind:"field",key:"_computeLabel",value(){return e=>this.hass.localize(`ui.panel.config.zone.detail.${e.name}`)}},{kind:"method",key:"_updateEntry",value:async function(){this._submitting=!0;try{this._params.entry?await this._params.updateEntry(this._data):await this._params.createEntry(this._data),this.closeDialog()}catch(e){this._error={base:e?e.message:"Unknown error"}}finally{this._submitting=!1}}},{kind:"method",key:"_deleteEntry",value:async function(){this._submitting=!0;try{await this._params.removeEntry()&&(this._params=void 0)}finally{this._submitting=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return[h.nA,n.AH`ha-dialog{--mdc-dialog-min-width:min(600px, 95vw)}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-min-width:calc(
              100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
            )}}ha-form.passive{--zone-radius-color:var(--secondary-text-color)}`]}}]}}),n.WF);customElements.define("dialog-zone-detail",c)}};
//# sourceMappingURL=28933.jXzIkC7zjwM.js.map