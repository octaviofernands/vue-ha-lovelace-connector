export const id=92806;export const ids=[92806];export const modules={5965:(t,i,e)=>{var s=e(36312),a=(e(89655),e(253),e(2075),e(54846),e(50289)),n=e(29818),o=e(94100),r=e(21863),c=e(34897),l=e(2682),d=e(4826),h=e(84976),u=(e(85242),e(88400),e(12675),e(55792));(0,s.A)([(0,n.EM)("ha-statistic-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Array,attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Array,attribute:"exclude-statistics"})],key:"excludeStatistics",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"helpMissingEntityUrl",value:()=>"/more-info/statistics/"},{kind:"field",decorators:[(0,n.wk)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,n.P)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_statistics",value:()=>[]},{kind:"field",decorators:[(0,n.wk)()],key:"_filteredItems",value(){}},{kind:"field",key:"_rowRenderer",value(){return t=>a.qy`<mwc-list-item graphic="avatar" twoline> ${t.state?a.qy`<state-badge slot="graphic" .stateObj="${t.state}" .hass="${this.hass}"></state-badge>`:""} <span>${t.name}</span> <span slot="secondary">${""===t.id||"__missing"===t.id?a.qy`<a target="_blank" rel="noopener noreferrer" href="${(0,h.o)(this.hass,this.helpMissingEntityUrl)}">${this.hass.localize("ui.components.statistic-picker.learn_more")}</a>`:t.id}</span> </mwc-list-item>`}},{kind:"field",key:"_getStatistics",value(){return(0,o.A)(((t,i,e,s,a,n,o)=>{if(!t.length)return[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_statistics"),strings:[]}];if(i){const e=(0,r.e)(i);t=t.filter((t=>e.includes(t.statistics_unit_of_measurement)))}if(e){const i=(0,r.e)(e);t=t.filter((t=>i.includes(t.unit_class)))}if(s){const i=(0,r.e)(s);t=t.filter((t=>{const e=this.hass.states[t.statistic_id];return!e||i.includes(e.attributes.device_class||"")}))}const c=[];return t.forEach((t=>{if(n&&t.statistic_id!==o&&n.includes(t.statistic_id))return;const i=this.hass.states[t.statistic_id];if(!i){if(!a){const i=t.statistic_id,e=(0,d.$O)(this.hass,t.statistic_id,t);c.push({id:i,name:e,strings:[i,e]})}return}const e=t.statistic_id,s=(0,d.$O)(this.hass,t.statistic_id,t);c.push({id:e,name:s,state:i,strings:[e,s]})})),c.length?(c.length>1&&c.sort(((t,i)=>(0,l.x)(t.name||"",i.name||"",this.hass.locale.language))),c.push({id:"__missing",name:this.hass.localize("ui.components.statistic-picker.missing_entity"),strings:[]}),c):[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_match"),strings:[]}]}))}},{kind:"method",key:"open",value:function(){this.comboBox?.open()}},{kind:"method",key:"focus",value:function(){this.comboBox?.focus()}},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated&&!this.statisticIds||t.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||t.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly,this.excludeStatistics,this.value):this.updateComplete.then((()=>{this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly,this.excludeStatistics,this.value)})))}},{kind:"method",key:"render",value:function(){return 0===this._statistics.length?a.s6:a.qy` <ha-combo-box .hass="${this.hass}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label}" .value="${this._value}" .renderer="${this._rowRenderer}" .disabled="${this.disabled}" .allowCustomValue="${this.allowCustomEntity}" .items="${this._statistics}" .filteredItems="${this._filteredItems??this._statistics}" item-value-path="id" item-id-path="id" item-label-path="name" @opened-changed="${this._openedChanged}" @value-changed="${this._statisticChanged}" @filter-changed="${this._filterChanged}"></ha-combo-box> `}},{kind:"method",key:"_getStatisticIds",value:async function(){this.statisticIds=await(0,d.p3)(this.hass,this.statisticTypes)}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();let i=t.detail.value;"__missing"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(t){this._opened=t.detail.value}},{kind:"method",key:"_filterChanged",value:function(t){const i=t.detail.value.toLowerCase();this._filteredItems=i.length?(0,u.H)(i,this._statistics):void 0}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{(0,c.r)(this,"value-changed",{value:t}),(0,c.r)(this,"change")}),0)}}]}}),a.WF)},92806:(t,i,e)=>{e.a(t,(async(t,s)=>{try{e.r(i),e.d(i,{DialogEnergyGridFlowSettings:()=>g});var a=e(36312),n=(e(253),e(2075),e(72606),e(50289)),o=e(29818),r=e(34897),c=(e(94548),e(5965),e(29180),e(24284),e(51513),e(47076)),l=e(4826),d=e(96778),h=e(55321),u=t([c]);c=(u.then?(await u)():u)[0];const _="M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z",p=["energy"];let g=(0,a.A)([(0,o.EM)("dialog-energy-grid-flow-settings")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_source",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_costs",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_pickedDisplayUnit",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_energy_units",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_error",value:void 0},{kind:"field",key:"_excludeList",value:void 0},{kind:"method",key:"showDialog",value:async function(t){this._params=t,this._source=t.source?{...t.source}:"from"===t.direction?(0,c.m7)():(0,c.RB)(),this._costs=this._source.entity_energy_price?"entity":this._source.number_energy_price?"number":this._source["from"===t.direction?"stat_cost":"stat_compensation"]?"statistic":"no-costs";const i=this._source["from"===this._params.direction?"stat_energy_from":"stat_energy_to"];this._pickedDisplayUnit=(0,l.JE)(this.hass,i,t.metadata),this._energy_units=(await(0,d.j4)(this.hass,"energy")).units,this._excludeList=[...this._params.grid_source?.flow_from?.map((t=>t.stat_energy_from))||[],...this._params.grid_source?.flow_to?.map((t=>t.stat_energy_to))||[]].filter((t=>t!==i))}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._source=void 0,this._pickedDisplayUnit=void 0,this._error=void 0,this._excludeList=void 0,(0,r.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params||!this._source)return n.s6;const t=this._energy_units?.join(", ")||"",i=this._pickedDisplayUnit?`${this.hass.config.currency}/${this._pickedDisplayUnit}`:void 0,e=`${this.hass.config.currency}/kWh`,s=this._source["from"===this._params.direction?"stat_energy_from":"stat_energy_to"]&&(0,l.OQ)(this._source["from"===this._params.direction?"stat_energy_from":"stat_energy_to"]);return n.qy` <ha-dialog open .heading="${n.qy`<ha-svg-icon .path="${_}" style="--mdc-icon-size:32px"></ha-svg-icon>${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.header`)}`}" @closed="${this.closeDialog}"> ${this._error?n.qy`<p class="error">${this._error}</p>`:""} <div> <p> ${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.paragraph`)} </p> <p> ${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.entity_para`,{unit:t})} </p> </div> <ha-statistic-picker .hass="${this.hass}" .helpMissingEntityUrl="${c.X4}" .includeUnitClass="${p}" .value="${this._source["from"===this._params.direction?"stat_energy_from":"stat_energy_to"]}" .label="${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.energy_stat`)}" .excludeStatistics="${this._excludeList}" @value-changed="${this._statisticChanged}" dialogInitialFocus></ha-statistic-picker> <p> ${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.cost_para`)} </p> <ha-formfield .label="${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.no_cost`)}"> <ha-radio value="no-costs" name="costs" .checked="${"no-costs"===this._costs}" @change="${this._handleCostChanged}"></ha-radio> </ha-formfield> <ha-formfield .label="${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.cost_stat`)}"> <ha-radio value="statistic" name="costs" .checked="${"statistic"===this._costs}" @change="${this._handleCostChanged}"></ha-radio> </ha-formfield> ${"statistic"===this._costs?n.qy`<ha-statistic-picker class="price-options" .hass="${this.hass}" statistic-types="sum" .value="${this._source["from"===this._params.direction?"stat_cost":"stat_compensation"]}" .label="${`${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.cost_stat_input`)} (${this.hass.config.currency})`}" @value-changed="${this._priceStatChanged}"></ha-statistic-picker>`:""} <ha-formfield .label="${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.cost_entity`)}"> <ha-radio value="entity" name="costs" .checked="${"entity"===this._costs}" .disabled="${s}" @change="${this._handleCostChanged}"></ha-radio> </ha-formfield> ${"entity"===this._costs?n.qy`<ha-entity-picker class="price-options" .hass="${this.hass}" include-domains='["sensor", "input_number"]' .value="${this._source.entity_energy_price}" .label="${`${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.cost_entity_input`)} ${i?` (${i})`:""}`}" @value-changed="${this._priceEntityChanged}"></ha-entity-picker>`:""} <ha-formfield .label="${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.cost_number`)}"> <ha-radio value="number" name="costs" .checked="${"number"===this._costs}" .disabled="${s}" @change="${this._handleCostChanged}"></ha-radio> </ha-formfield> ${"number"===this._costs?n.qy`<ha-textfield .label="${`${this.hass.localize(`ui.panel.config.energy.grid.flow_dialog.${this._params.direction}.cost_number_input`)} (${e})`}" class="price-options" step="any" type="number" .value="${this._source.number_energy_price}" .suffix="${e}" @change="${this._numberPriceChanged}"> </ha-textfield>`:""} <mwc-button @click="${this.closeDialog}" slot="secondaryAction"> ${this.hass.localize("ui.common.cancel")} </mwc-button> <mwc-button @click="${this._save}" .disabled="${!this._source["from"===this._params.direction?"stat_energy_from":"stat_energy_to"]}" slot="primaryAction"> ${this.hass.localize("ui.common.save")} </mwc-button> </ha-dialog> `}},{kind:"method",key:"_handleCostChanged",value:function(t){const i=t.currentTarget;this._costs=i.value}},{kind:"set",key:"_costStat",value:function(t){this._source["from"===this._params.direction?"stat_cost":"stat_compensation"]=t}},{kind:"method",key:"_numberPriceChanged",value:function(t){this._costStat=null,this._source={...this._source,number_energy_price:Number(t.target.value),entity_energy_price:null}}},{kind:"method",key:"_priceStatChanged",value:function(t){this._costStat=t.detail.value,this._source={...this._source,entity_energy_price:null,number_energy_price:null}}},{kind:"method",key:"_priceEntityChanged",value:function(t){this._costStat=null,this._source={...this._source,entity_energy_price:t.detail.value,number_energy_price:null}}},{kind:"method",key:"_statisticChanged",value:async function(t){if(t.detail.value){const i=await(0,l.Wr)(this.hass,[t.detail.value]);this._pickedDisplayUnit=(0,l.JE)(this.hass,t.detail.value,i[0])}else this._pickedDisplayUnit=void 0;this._source={...this._source,["from"===this._params.direction?"stat_energy_from":"stat_energy_to"]:t.detail.value}}},{kind:"method",key:"_save",value:async function(){try{"no-costs"===this._costs&&(this._source.entity_energy_price=null,this._source.number_energy_price=null,this._costStat=null),await this._params.saveCallback(this._source),this.closeDialog()}catch(t){this._error=t.message}}},{kind:"get",static:!0,key:"styles",value:function(){return[h.nA,n.AH`ha-dialog{--mdc-dialog-max-width:430px}ha-formfield{display:block}.price-options{display:block;padding-left:52px;padding-inline-start:52px;padding-inline-end:initial;margin-top:-8px}`]}}]}}),n.WF);s()}catch(t){s(t)}}))}};
//# sourceMappingURL=92806.yUv9nhCMus0.js.map