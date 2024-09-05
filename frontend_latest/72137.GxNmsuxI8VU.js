export const id=72137;export const ids=[72137];export const modules={5965:(t,i,e)=>{var s=e(36312),a=(e(89655),e(253),e(2075),e(54846),e(50289)),n=e(29818),d=e(94100),o=e(21863),l=e(34897),c=e(2682),h=e(4826),r=e(84976),u=(e(85242),e(88400),e(12675),e(55792));(0,s.A)([(0,n.EM)("ha-statistic-picker")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"statistic-types"})],key:"statisticTypes",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Array})],key:"statisticIds",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Array,attribute:"include-statistics-unit-of-measurement"})],key:"includeStatisticsUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"include-unit-class"})],key:"includeUnitClass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"include-device-class"})],key:"includeDeviceClass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"entities-only"})],key:"entitiesOnly",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Array,attribute:"exclude-statistics"})],key:"excludeStatistics",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"helpMissingEntityUrl",value:()=>"/more-info/statistics/"},{kind:"field",decorators:[(0,n.wk)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,n.P)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_statistics",value:()=>[]},{kind:"field",decorators:[(0,n.wk)()],key:"_filteredItems",value(){}},{kind:"field",key:"_rowRenderer",value(){return t=>a.qy`<mwc-list-item graphic="avatar" twoline> ${t.state?a.qy`<state-badge slot="graphic" .stateObj="${t.state}" .hass="${this.hass}"></state-badge>`:""} <span>${t.name}</span> <span slot="secondary">${""===t.id||"__missing"===t.id?a.qy`<a target="_blank" rel="noopener noreferrer" href="${(0,r.o)(this.hass,this.helpMissingEntityUrl)}">${this.hass.localize("ui.components.statistic-picker.learn_more")}</a>`:t.id}</span> </mwc-list-item>`}},{kind:"field",key:"_getStatistics",value(){return(0,d.A)(((t,i,e,s,a,n,d)=>{if(!t.length)return[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_statistics"),strings:[]}];if(i){const e=(0,o.e)(i);t=t.filter((t=>e.includes(t.statistics_unit_of_measurement)))}if(e){const i=(0,o.e)(e);t=t.filter((t=>i.includes(t.unit_class)))}if(s){const i=(0,o.e)(s);t=t.filter((t=>{const e=this.hass.states[t.statistic_id];return!e||i.includes(e.attributes.device_class||"")}))}const l=[];return t.forEach((t=>{if(n&&t.statistic_id!==d&&n.includes(t.statistic_id))return;const i=this.hass.states[t.statistic_id];if(!i){if(!a){const i=t.statistic_id,e=(0,h.$O)(this.hass,t.statistic_id,t);l.push({id:i,name:e,strings:[i,e]})}return}const e=t.statistic_id,s=(0,h.$O)(this.hass,t.statistic_id,t);l.push({id:e,name:s,state:i,strings:[e,s]})})),l.length?(l.length>1&&l.sort(((t,i)=>(0,c.x)(t.name||"",i.name||"",this.hass.locale.language))),l.push({id:"__missing",name:this.hass.localize("ui.components.statistic-picker.missing_entity"),strings:[]}),l):[{id:"",name:this.hass.localize("ui.components.statistic-picker.no_match"),strings:[]}]}))}},{kind:"method",key:"open",value:function(){this.comboBox?.open()}},{kind:"method",key:"focus",value:function(){this.comboBox?.focus()}},{kind:"method",key:"willUpdate",value:function(t){(!this.hasUpdated&&!this.statisticIds||t.has("statisticTypes"))&&this._getStatisticIds(),(!this._init&&this.statisticIds||t.has("_opened")&&this._opened)&&(this._init=!0,this.hasUpdated?this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly,this.excludeStatistics,this.value):this.updateComplete.then((()=>{this._statistics=this._getStatistics(this.statisticIds,this.includeStatisticsUnitOfMeasurement,this.includeUnitClass,this.includeDeviceClass,this.entitiesOnly,this.excludeStatistics,this.value)})))}},{kind:"method",key:"render",value:function(){return 0===this._statistics.length?a.s6:a.qy` <ha-combo-box .hass="${this.hass}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.statistic-picker.statistic"):this.label}" .value="${this._value}" .renderer="${this._rowRenderer}" .disabled="${this.disabled}" .allowCustomValue="${this.allowCustomEntity}" .items="${this._statistics}" .filteredItems="${this._filteredItems??this._statistics}" item-value-path="id" item-id-path="id" item-label-path="name" @opened-changed="${this._openedChanged}" @value-changed="${this._statisticChanged}" @filter-changed="${this._filterChanged}"></ha-combo-box> `}},{kind:"method",key:"_getStatisticIds",value:async function(){this.statisticIds=await(0,h.p3)(this.hass,this.statisticTypes)}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_statisticChanged",value:function(t){t.stopPropagation();let i=t.detail.value;"__missing"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(t){this._opened=t.detail.value}},{kind:"method",key:"_filterChanged",value:function(t){const i=t.detail.value.toLowerCase();this._filteredItems=i.length?(0,u.H)(i,this._statistics):void 0}},{kind:"method",key:"_setValue",value:function(t){this.value=t,setTimeout((()=>{(0,l.r)(this,"value-changed",{value:t}),(0,l.r)(this,"change")}),0)}}]}}),a.WF)},72137:(t,i,e)=>{e.a(t,(async(t,s)=>{try{e.r(i),e.d(i,{DialogEnergyDeviceSettings:()=>_});var a=e(36312),n=(e(253),e(2075),e(16891),e(72606),e(50289)),d=e(29818),o=e(34897),l=(e(94548),e(5965),e(29180),e(24284),e(51513),e(47076)),c=e(96778),h=e(55321),r=t([l]);l=(r.then?(await r)():r)[0];const u="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z",v=["energy"];let _=(0,a.A)([(0,d.EM)("dialog-energy-device-settings")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,d.wk)()],key:"_device",value:void 0},{kind:"field",decorators:[(0,d.wk)()],key:"_energy_units",value:void 0},{kind:"field",decorators:[(0,d.wk)()],key:"_error",value:void 0},{kind:"field",key:"_excludeList",value:void 0},{kind:"method",key:"showDialog",value:async function(t){this._params=t,this._energy_units=(await(0,c.j4)(this.hass,"energy")).units,this._device=this._params.device,this._excludeList=this._params.device_consumptions.map((t=>t.stat_consumption)).filter((t=>t!==this._device?.stat_consumption))}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._device=void 0,this._error=void 0,this._excludeList=void 0,(0,o.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params)return n.s6;const t=this._energy_units?.join(", ")||"";return n.qy` <ha-dialog open .heading="${n.qy`<ha-svg-icon .path="${u}" style="--mdc-icon-size:32px"></ha-svg-icon> ${this.hass.localize("ui.panel.config.energy.device_consumption.dialog.header")}`}" @closed="${this.closeDialog}"> ${this._error?n.qy`<p class="error">${this._error}</p>`:""} <div> ${this.hass.localize("ui.panel.config.energy.device_consumption.dialog.selected_stat_intro",{unit:t})} </div> <ha-statistic-picker .hass="${this.hass}" .helpMissingEntityUrl="${l.X4}" .includeUnitClass="${v}" .value="${this._device?.stat_consumption}" .label="${this.hass.localize("ui.panel.config.energy.device_consumption.dialog.device_consumption_energy")}" .excludeStatistics="${this._excludeList}" @value-changed="${this._statisticChanged}" dialogInitialFocus></ha-statistic-picker> <ha-textfield .label="${this.hass.localize("ui.panel.config.energy.device_consumption.dialog.display_name")}" type="text" .disabled="${!this._device}" .value="${this._device?.name||""}" @input="${this._nameChanged}"> </ha-textfield> <mwc-button @click="${this.closeDialog}" slot="secondaryAction"> ${this.hass.localize("ui.common.cancel")} </mwc-button> <mwc-button @click="${this._save}" .disabled="${!this._device}" slot="primaryAction"> ${this.hass.localize("ui.common.save")} </mwc-button> </ha-dialog> `}},{kind:"method",key:"_statisticChanged",value:function(t){t.detail.value?this._device={stat_consumption:t.detail.value}:this._device=void 0}},{kind:"method",key:"_nameChanged",value:function(t){const i={...this._device,name:t.target.value};i.name||delete i.name,this._device=i}},{kind:"method",key:"_save",value:async function(){try{await this._params.saveCallback(this._device),this.closeDialog()}catch(t){this._error=t.message}}},{kind:"get",static:!0,key:"styles",value:function(){return[h.nA,n.AH`ha-statistic-picker{width:100%}ha-textfield{margin-top:16px;width:100%}`]}}]}}),n.WF);s()}catch(t){s(t)}}))}};
//# sourceMappingURL=72137.GxNmsuxI8VU.js.map