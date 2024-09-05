export const id=10619;export const ids=[10619];export const modules={63516:(i,t,e)=>{e.d(t,{s:()=>n});const n=i=>!(!i.detail.selected||"property"!==i.detail.source)&&(i.currentTarget.selected=!1,!0)},10619:(i,t,e)=>{var n=e(36312),a=e(68689),s=(e(89655),e(253),e(2075),e(54846),e(16891),e(72606),e(63893),e(94366)),o=e(50289),r=e(29818),d=e(10977),l=e(55165),h=e(94100),c=e(33922),g=e(34897),p=e(44721),m=e(16312),_=e(2682),u=e(29180),f=(e(40462),e(72829),e(98041)),y=e(46092),v=e(19611),k=e(30581),w=e(6121),$=e(55321),x=e(28884),b=e(63516),z=e(51842),P=e(30116),M=e(43389),B=e(85323);(0,n.A)([(0,r.EM)("ha-integration-list-item")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"integration",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:String,reflect:!0})],key:"graphic",value:()=>"medium"},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"hasMeta",value:()=>!0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"brand",value:()=>!1},{kind:"method",key:"renderSingleLine",value:function(){return this.integration?o.qy`${this.integration.name||(0,y.p$)(this.hass.localize,this.integration.domain)} ${this.integration.is_helper?" (helper)":""}`:o.s6}},{kind:"method",key:"renderGraphic",value:function(){if(!this.integration)return o.s6;const i={multi:this.multipleGraphics};return o.qy` <span class="mdc-deprecated-list-item__graphic material-icons ${(0,B.H)(i)}"> <img alt="" loading="lazy" src="${(0,z.MR)({domain:this.integration.domain,type:"icon",useFallback:!0,darkOptimized:this.hass.themes?.darkMode,brand:this.brand})}" crossorigin="anonymous" referrerpolicy="no-referrer"> </span>`}},{kind:"method",key:"renderMeta",value:function(){return this.integration?o.qy`<span class="mdc-deprecated-list-item__meta material-icons"> ${this.integration.cloud?o.qy`<span><ha-svg-icon .path="${"M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20M6.5 18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 8.93 15.54 7.46 14.08 6 12 6 9.93 6 8.46 7.46 7 8.93 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18M12 12Z"}"></ha-svg-icon><simple-tooltip animation-delay="0" position="left">${this.hass.localize("ui.panel.config.integrations.config_entry.depends_on_cloud")}</simple-tooltip></span>`:""} ${this.integration.is_built_in?"":o.qy`<span><ha-svg-icon .path="${"M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"}"></ha-svg-icon><simple-tooltip animation-delay="0" position="left">${this.hass.localize("ui.panel.config.integrations.config_entry.custom_integration")}</simple-tooltip></span>`} ${this.integration.config_flow||this.integration.integrations||this.integration.iot_standards?o.qy`<ha-icon-next></ha-icon-next>`:o.qy`<span><simple-tooltip animation-delay="0" position="left">${this.hass.localize("ui.panel.config.integrations.config_entry.yaml_only")}</simple-tooltip><ha-svg-icon .path="${"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}" class="open-in-new"></ha-svg-icon></span>`} </span>`:o.s6}},{kind:"get",static:!0,key:"styles",value:function(){return[M.R,o.AH`:host{--mdc-list-side-padding:24px;--mdc-list-item-graphic-size:40px}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}img{width:40px;height:40px}.mdc-deprecated-list-item__meta{width:auto;white-space:nowrap}.mdc-deprecated-list-item__meta>*{margin-right:8px;margin-inline-end:8px;margin-inline-start:initial}.mdc-deprecated-list-item__meta>:last-child{margin-right:0px;margin-inline-end:0px;margin-inline-start:initial}ha-icon-next{margin-right:8px;margin-inline-end:8px;margin-inline-start:initial}.open-in-new{--mdc-icon-size:22px;padding:1px}`]}}]}}),P.J);var F=e(49029);const I={zigbee:"zha",zwave:"zwave_js"};(0,n.A)([(0,r.EM)("ha-domain-integrations")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"domain",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"integration",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"flowsInProgress",value:void 0},{kind:"method",key:"render",value:function(){return o.qy`<mwc-list> ${this.flowsInProgress?.length?o.qy`<h3> ${this.hass.localize("ui.panel.config.integrations.discovered")} </h3> ${this.flowsInProgress.map((i=>o.qy`<mwc-list-item graphic="medium" .flow="${i}" @request-selected="${this._flowInProgressPicked}" hasMeta> <img alt="" slot="graphic" loading="lazy" src="${(0,z.MR)({domain:i.handler,type:"icon",useFallback:!0,darkOptimized:this.hass.themes?.darkMode})}" crossorigin="anonymous" referrerpolicy="no-referrer"> <span>${(0,f.m7)(this.hass.localize,i)}</span> <ha-icon-next slot="meta"></ha-icon-next> </mwc-list-item>`))} <li divider role="separator"></li> ${this.integration&&"integrations"in this.integration&&this.integration.integrations?o.qy`<h3> ${this.hass.localize("ui.panel.config.integrations.available_integrations")} </h3>`:""}`:""} ${this.integration?.iot_standards?this.integration.iot_standards.filter((i=>p.x.includes(I[i]||i))).map((i=>{const t=I[i]||i;return o.qy`<mwc-list-item graphic="medium" .domain="${t}" @request-selected="${this._standardPicked}" hasMeta> <img slot="graphic" loading="lazy" alt="" src="${(0,z.MR)({domain:t,type:"icon",useFallback:!0,darkOptimized:this.hass.themes?.darkMode})}" crossorigin="anonymous" referrerpolicy="no-referrer"> <span>${this.hass.localize(`ui.panel.config.integrations.add_${t}_device`)}</span> <ha-icon-next slot="meta"></ha-icon-next> </mwc-list-item>`})):""} ${this.integration&&"integrations"in this.integration&&this.integration.integrations?Object.entries(this.integration.integrations).sort(((i,t)=>i[1].config_flow&&!t[1].config_flow?-1:t[1].config_flow&&!i[1].config_flow?0:(0,_.S)(i[1].name||(0,y.p$)(this.hass.localize,i[0]),t[1].name||(0,y.p$)(this.hass.localize,t[0]),this.hass.locale.language))).map((([i,t])=>o.qy`<ha-integration-list-item .hass="${this.hass}" .domain="${i}" .integration="${{...t,domain:i,name:t.name||(0,y.p$)(this.hass.localize,i),is_built_in:!1!==t.is_built_in,cloud:t.iot_class?.startsWith("cloud_")}}" @request-selected="${this._integrationPicked}"> </ha-integration-list-item>`)):""} ${p.x.includes(this.domain)?o.qy`<mwc-list-item graphic="medium" .domain="${this.domain}" @request-selected="${this._standardPicked}" hasMeta> <img slot="graphic" loading="lazy" alt="" src="${(0,z.MR)({domain:this.domain,type:"icon",useFallback:!0,darkOptimized:this.hass.themes?.darkMode})}" crossorigin="anonymous" referrerpolicy="no-referrer"> <span>${this.hass.localize(`ui.panel.config.integrations.add_${this.domain}_device`)}</span> <ha-icon-next slot="meta"></ha-icon-next> </mwc-list-item>`:""} ${this.integration&&"config_flow"in this.integration&&this.integration.config_flow?o.qy`${this.flowsInProgress?.length?o.qy`<mwc-list-item .domain="${this.domain}" @request-selected="${this._integrationPicked}" .integration="${{...this.integration,domain:this.domain,name:this.integration.name||(0,y.p$)(this.hass.localize,this.domain),is_built_in:!1!==this.integration.is_built_in,cloud:this.integration.iot_class?.startsWith("cloud_")}}" hasMeta> ${this.hass.localize("ui.panel.config.integrations.new_flow",{integration:this.integration.name||(0,y.p$)(this.hass.localize,this.domain)})} <ha-icon-next slot="meta"></ha-icon-next> </mwc-list-item>`:o.qy`<ha-integration-list-item .hass="${this.hass}" .domain="${this.domain}" .integration="${{...this.integration,domain:this.domain,name:this.integration.name||(0,y.p$)(this.hass.localize,this.domain),is_built_in:!1!==this.integration.is_built_in,cloud:this.integration.iot_class?.startsWith("cloud_")}}" @request-selected="${this._integrationPicked}"> </ha-integration-list-item>`}`:""} </mwc-list> `}},{kind:"method",key:"_integrationPicked",value:async function(i){if(!(0,b.s)(i))return;const t=i.currentTarget.domain;if(["cloud","google_assistant","alexa"].includes(t)&&(0,c.x)(this.hass,"cloud"))return(0,g.r)(this,"close-dialog"),void(0,m.o)("/config/cloud");const e=i.currentTarget.integration;if(e.supported_by)return void(0,g.r)(this,"supported-by",{integration:e});if(e.iot_standards)return void(0,g.r)(this,"select-brand",{brand:e.domain});if(t===this.domain&&("integration_type"in this.integration&&!this.integration.config_flow||!("integration_type"in this.integration)&&(!this.integration.integrations||!(t in this.integration.integrations)))||!("integration_type"in this.integration)&&!this.integration.integrations?.[t]?.config_flow){const i=await(0,y.QC)(this.hass,t);return void(0,F.n)(this,{manifest:i})}const n=this.getRootNode();(0,k.W)(n instanceof ShadowRoot?n.host:this,{startFlowHandler:t,showAdvanced:this.hass.userData?.showAdvanced,manifest:await(0,y.QC)(this.hass,t)}),(0,g.r)(this,"close-dialog")}},{kind:"method",key:"_flowInProgressPicked",value:async function(i){if(!(0,b.s)(i))return;const t=i.currentTarget.flow,e=this.getRootNode();(0,k.W)(e instanceof ShadowRoot?e.host:this,{continueFlowId:t.flow_id,showAdvanced:this.hass.userData?.showAdvanced,manifest:await(0,y.QC)(this.hass,t.handler)}),(0,g.r)(this,"close-dialog")}},{kind:"method",key:"_standardPicked",value:function(i){if(!(0,b.s)(i))return;const t=i.currentTarget.domain,e=this.getRootNode();(0,g.r)(this,"close-dialog"),(0,p.P)(e instanceof ShadowRoot?e.host:this,this.hass,t,{brand:this.domain})}},{kind:"field",static:!0,key:"styles",value:()=>[$.RF,o.AH`:host{display:block;--mdc-list-item-graphic-size:40px;--mdc-list-side-padding:24px}h3{margin:8px 24px 0;color:var(--secondary-text-color);font-size:14px;font-weight:500}h3:first-of-type{margin-top:0}img{width:40px;height:40px}li[divider]{margin-top:8px}`]}]}}),o.WF);var q=e(31265),A=e(57115),C=e(54629);(0,n.A)([(0,r.EM)("dialog-add-integration")],(function(i,t){class e extends t{constructor(...t){super(...t),i(this)}}return{F:e,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_integrations",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_helpers",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_initialFilter",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_filter",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_pickedBrand",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_prevPickedBrand",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_flowsInProgress",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_open",value:()=>!1},{kind:"field",decorators:[(0,r.wk)()],key:"_narrow",value:()=>!1},{kind:"field",key:"_width",value:void 0},{kind:"field",key:"_height",value:void 0},{kind:"method",key:"showDialog",value:async function(i){const t=this._load();if(this._open=!0,this._pickedBrand=i?.brand,this._initialFilter=i?.initialFilter,this._narrow=matchMedia("all and (max-width: 450px), all and (max-height: 500px)").matches,i?.domain&&this._createFlow(i.domain),i?.brand){await t;const e=this._integrations?.[i.brand];e&&"integrations"in e&&e.integrations&&this._fetchFlowsInProgress(Object.keys(e.integrations))}}},{kind:"method",key:"closeDialog",value:function(){this._open=!1,this._integrations=void 0,this._helpers=void 0,this._pickedBrand=void 0,this._prevPickedBrand=void 0,this._flowsInProgress=void 0,this._filter=void 0,this._width=void 0,this._height=void 0,(0,g.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"willUpdate",value:function(i){if((0,a.A)(e,"willUpdate",this,3)([i]),this.hasUpdated||(0,x.i)(),void 0===this._filter&&void 0!==this._initialFilter&&(this._filter=this._initialFilter),void 0!==this._initialFilter&&""===this._filter)this._initialFilter=void 0,this._filter=void 0,this._width=void 0,this._height=void 0;else if(this.hasUpdated&&i.has("_filter")&&!i.has("_open")&&(!this._width||!this._height)){const i=this.shadowRoot.querySelector("mwc-list")?.getBoundingClientRect();this._width=i?.width,this._height=i?.height}}},{kind:"field",key:"_filterIntegrations",value(){return(0,h.A)(((i,t,e,n,a)=>{const o=p.x.filter((i=>e.includes(i))).map((i=>({name:n(`ui.panel.config.integrations.add_${i}_device`),domain:i,config_flow:!0,is_built_in:!0,is_add:!0}))).sort(((i,t)=>(0,_.S)(i.name,t.name,this.hass.locale.language))),r=[],d=[];if(Object.entries(i).forEach((([i,t])=>{if("integration_type"in t&&(t.config_flow||t.iot_standards||t.supported_by)){const e=t.supported_by?(0,v.s)(this._integrations,t.supported_by):t;if(!e)return;r.push({domain:i,name:t.name||(0,y.p$)(n,i),config_flow:e.config_flow,iot_standards:e.iot_standards,supported_by:t.supported_by,is_built_in:!1!==e.is_built_in,cloud:e.iot_class?.startsWith("cloud_"),single_config_entry:t.single_config_entry})}else"integration_type"in t||!("iot_standards"in t)&&!("integrations"in t)?a&&"integration_type"in t&&d.push({domain:i,name:t.name||(0,y.p$)(n,i),config_flow:t.config_flow,is_built_in:!1!==t.is_built_in,cloud:t.iot_class?.startsWith("cloud_")}):r.push({domain:i,name:t.name||(0,y.p$)(n,i),iot_standards:t.iot_standards,integrations:t.integrations?Object.entries(t.integrations).map((([i,t])=>t.name||(0,y.p$)(n,i))):void 0,domains:t.integrations?Object.keys(t.integrations):void 0,is_built_in:!1!==t.is_built_in})})),a){const i={keys:[{name:"name",weight:5},{name:"domain",weight:5},{name:"integrations",weight:2},"supported_by","iot_standards"],isCaseSensitive:!1,minMatchCharLength:Math.min(a.length,2),threshold:.2,getFn:C.i},e=Object.entries(t).map((([i,t])=>({domain:i,name:t.name||(0,y.p$)(n,i),config_flow:t.config_flow,is_helper:!0,is_built_in:!1!==t.is_built_in,cloud:t.iot_class?.startsWith("cloud_")}))),o=(0,A.s)(a);return[...new s.A(r,i).search(o).map((i=>i.item)),...new s.A(d,i).search(o).map((i=>i.item)),...new s.A(e,i).search(o).map((i=>i.item))]}return[...o,...r.sort(((i,t)=>(0,_.S)(i.name||"",t.name||"",this.hass.locale.language)))]}))}},{kind:"method",key:"_getIntegrations",value:function(){return this._filterIntegrations(this._integrations,this._helpers,this.hass.config.components,this.hass.localize,this._filter)}},{kind:"method",key:"render",value:function(){if(!this._open)return o.s6;const i=this._integrations?this._getIntegrations():void 0,t=this._pickedBrand?this._integrations?.[this._pickedBrand]||(0,v.s)(this._integrations,this._pickedBrand):void 0;return o.qy`<ha-dialog open @closed="${this.closeDialog}" scrimClickAction escapeKeyAction hideActions .heading="${(0,u.l)(this.hass,this.hass.localize("ui.panel.config.integrations.new"))}"> ${!this._pickedBrand||this._integrations&&!t?this._renderAll(i):o.qy`<div slot="heading"> <ha-icon-button-prev @click="${this._prevClicked}"></ha-icon-button-prev> <h2 class="mdc-dialog__title"> ${this._calculateBrandHeading(t)} </h2> </div> ${this._renderIntegration(t)}`} </ha-dialog>`}},{kind:"method",key:"_calculateBrandHeading",value:function(i){return!i?.iot_standards||"integrations"in i||this._flowsInProgress?.length?i&&!i?.iot_standards&&!("integrations"in i)&&this._flowsInProgress?.length?this.hass.localize("ui.panel.config.integrations.confirm_add_discovered"):this.hass.localize("ui.panel.config.integrations.what_to_add"):this.hass.localize("ui.panel.config.integrations.what_device_type")}},{kind:"method",key:"_renderIntegration",value:function(i){return o.qy`<ha-domain-integrations .hass="${this.hass}" .domain="${this._pickedBrand}" .integration="${i}" .flowsInProgress="${this._flowsInProgress}" style="${(0,l.W)({minWidth:`${this._width}px`,minHeight:"581px"})}" @close-dialog="${this.closeDialog}" @supported-by="${this._handleSupportedByEvent}" @select-brand="${this._handleSelectBrandEvent}"></ha-domain-integrations>`}},{kind:"method",key:"_handleSelectBrandEvent",value:function(i){this._prevPickedBrand=this._pickedBrand,this._pickedBrand=i.detail.brand}},{kind:"method",key:"_handleSupportedByEvent",value:function(i){this._supportedBy(i.detail.integration)}},{kind:"method",key:"_supportedBy",value:function(i){const t=(0,v.s)(this._integrations,i.supported_by);(0,w.showConfirmationDialog)(this,{text:this.hass.localize("ui.panel.config.integrations.config_flow.supported_brand_flow",{supported_brand:i.name||(0,y.p$)(this.hass.localize,i.domain),flow_domain_name:t?.name||(0,y.p$)(this.hass.localize,i.supported_by)}),confirm:()=>{this.closeDialog(),p.x.includes(i.supported_by)?(0,p.P)(this,this.hass,i.supported_by):t?this._handleIntegrationPicked({domain:i.supported_by,name:t.name||(0,y.p$)(this.hass.localize,i.supported_by),config_flow:t.config_flow,iot_standards:t.iot_standards}):(0,w.showAlertDialog)(this,{text:"Integration not found",warning:!0})}})}},{kind:"method",key:"_renderAll",value:function(i){return o.qy`<search-input .hass="${this.hass}" dialogInitialFocus="${(0,d.J)(this._narrow?void 0:"")}" .filter="${this._filter}" @value-changed="${this._filterChanged}" .label="${this.hass.localize("ui.panel.config.integrations.search_brand")}" @keypress="${this._maybeSubmit}"></search-input> ${i?o.qy`<mwc-list dialogInitialFocus="${(0,d.J)(this._narrow?"":void 0)}"> <lit-virtualizer scroller class="ha-scrollbar" style="${(0,l.W)({width:`${this._width}px`,height:this._narrow?"calc(100vh - 184px)":"500px"})}" @click="${this._integrationPicked}" .items="${i}" .keyFunction="${this._keyFunction}" .renderItem="${this._renderRow}"> </lit-virtualizer> </mwc-list>`:o.qy`<div class="flex center"> <ha-circular-progress indeterminate></ha-circular-progress> </div>`} `}},{kind:"field",key:"_keyFunction",value:()=>i=>i.domain},{kind:"field",key:"_renderRow",value(){return i=>i?o.qy` <ha-integration-list-item brand .hass="${this.hass}" .integration="${i}"> </ha-integration-list-item> `:o.s6}},{kind:"method",key:"_load",value:async function(){const i=await(0,v.O)(this.hass);for(const t in i.custom.integration)Object.prototype.hasOwnProperty.call(i.custom.integration,t)&&(i.custom.integration[t].is_built_in=!1);this._integrations={...i.core.integration,...i.custom.integration};for(const t in i.custom.helper)Object.prototype.hasOwnProperty.call(i.custom.helper,t)&&(i.custom.helper[t].is_built_in=!1);this._helpers={...i.core.helper,...i.custom.helper},this.hass.loadBackendTranslation("title",i.core.translated_name,!0)}},{kind:"method",key:"_filterChanged",value:async function(i){this._filter=i.detail.value}},{kind:"method",key:"_integrationPicked",value:function(i){const t=i.target.closest("ha-integration-list-item");t&&this._handleIntegrationPicked(t.integration)}},{kind:"method",key:"_handleIntegrationPicked",value:async function(i){if(i.supported_by)return void this._supportedBy(i);if(i.is_add)return(0,p.P)(this,this.hass,i.domain),void this.closeDialog();if(i.is_helper)return this.closeDialog(),void(0,m.o)(`/config/helpers/add?domain=${i.domain}`);if(i.integrations){let t=i.domains||[];return"apple"===i.domain&&(t=t.filter((i=>"homekit_controller"!==i))),this._fetchFlowsInProgress(t),void(this._pickedBrand=i.domain)}if(p.x.includes(i.domain)&&(0,c.x)(this.hass,i.domain))return void(this._pickedBrand=i.domain);if(i.iot_standards)return void(this._pickedBrand=i.domain);if(i.single_config_entry){if((await(0,q.VN)(this.hass,{domain:i.domain})).length>0)return this.closeDialog(),void(0,w.showAlertDialog)(this,{title:this.hass.localize("ui.panel.config.integrations.config_flow.single_config_entry_title"),text:this.hass.localize("ui.panel.config.integrations.config_flow.single_config_entry",{integration_name:i.name})})}if(i.config_flow)return void this._createFlow(i.domain);if("cloud"===i.domain&&(0,c.x)(this.hass,"cloud"))return this.closeDialog(),void(0,m.o)("/config/cloud");if(["google_assistant","alexa"].includes(i.domain)&&(0,c.x)(this.hass,"cloud"))return this.closeDialog(),void(0,m.o)("/config/voice-assistants/assistants");const t=await(0,y.QC)(this.hass,i.domain);(0,F.n)(this,{manifest:t})}},{kind:"method",key:"_createFlow",value:async function(i){const t=await this._fetchFlowsInProgress([i]);if(t?.length)return void(this._pickedBrand=i);const e=await(0,y.QC)(this.hass,i);this.closeDialog(),(0,k.W)(this,{startFlowHandler:i,showAdvanced:this.hass.userData?.showAdvanced,manifest:e})}},{kind:"method",key:"_fetchFlowsInProgress",value:async function(i){const t=(await(0,f.t2)(this.hass.connection)).filter((t=>i.includes(t.handler)||"alternative_domain"in t.context&&i.includes(t.context.alternative_domain)));return t.length&&(this._flowsInProgress=t),t}},{kind:"method",key:"_maybeSubmit",value:function(i){if("Enter"!==i.key)return;const t=this._getIntegrations();t.length>0&&this._handleIntegrationPicked(t[0])}},{kind:"method",key:"_prevClicked",value:function(){this._pickedBrand=this._prevPickedBrand,this._prevPickedBrand||(this._flowsInProgress=void 0),this._prevPickedBrand=void 0}},{kind:"field",static:!0,key:"styles",value:()=>[$.dp,$.nA,o.AH`@media all and (min-width:550px){ha-dialog{--mdc-dialog-min-width:500px}}ha-dialog{--dialog-content-padding:0}search-input{display:block;margin:16px 16px 0}.divider{border-bottom-color:var(--divider-color)}h2{padding-inline-end:66px;direction:var(--direction)}p{text-align:center;padding:16px;margin:0}p>a{color:var(--primary-color)}.flex.center{display:flex;justify-content:center;align-items:center}ha-circular-progress{margin:24px 0}mwc-list{position:relative}lit-virtualizer{contain:size layout!important}ha-integration-list-item{width:100%}ha-icon-button-prev{color:var(--secondary-text-color);position:absolute;left:16px;top:14px;inset-inline-end:initial;inset-inline-start:16px;direction:var(--direction)}.mdc-dialog__title{margin:0;margin-bottom:8px;margin-left:48px;margin-inline-start:48px;margin-inline-end:initial;padding:24px 24px 0 24px;color:var(--mdc-dialog-heading-ink-color,rgba(0,0,0,.87));font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:var(--mdc-typography-headline6-font-weight,500);letter-spacing:var(
          --mdc-typography-headline6-letter-spacing,
          .0125em
        );text-decoration:var(--mdc-typography-headline6-text-decoration,inherit);text-transform:var(--mdc-typography-headline6-text-transform,inherit)}`]}]}}),o.WF)},54629:(i,t,e)=>{e.d(t,{i:()=>s});e(16891);var n=e(94366),a=e(57115);const s=(i,t)=>{const e=n.A.config.getFn(i,t);return Array.isArray(e)?e.map((i=>(0,a.s)(i??""))):(0,a.s)(e??"")}}};
//# sourceMappingURL=10619.yOex059JM-g.js.map