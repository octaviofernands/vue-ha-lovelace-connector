export const id=58222;export const ids=[58222];export const modules={98041:(e,o,n)=>{n.d(o,{Al:()=>s,KY:()=>r,PN:()=>c,RM:()=>g,dG:()=>m,jm:()=>p,m7:()=>w,sR:()=>h,t1:()=>d,t2:()=>$,x:()=>u,yu:()=>_});var i=n(84280),t=n(18409),a=n(46092);const r=["bluetooth","dhcp","discovery","hardware","hassio","homekit","integration_discovery","mqtt","ssdp","unignore","usb","zeroconf"],s=["reauth"],l={"HA-Frontend-Base":`${location.protocol}//${location.host}`},d=(e,o,n)=>e.callApi("POST","config/config_entries/flow",{handler:o,show_advanced_options:Boolean(e.userData?.showAdvanced),entry_id:n},l),c=(e,o)=>e.callApi("GET",`config/config_entries/flow/${o}`,void 0,l),p=(e,o,n)=>e.callApi("POST",`config/config_entries/flow/${o}`,n,l),m=(e,o,n)=>e.callWS({type:"config_entries/ignore_flow",flow_id:o,title:n}),h=(e,o)=>e.callApi("DELETE",`config/config_entries/flow/${o}`),_=(e,o)=>e.callApi("GET","config/config_entries/flow_handlers"+(o?`?type=${o}`:"")),$=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),f=(e,o)=>e.subscribeEvents((0,t.s)((()=>$(e).then((e=>o.setState(e,!0)))),500,!0),"config_entry_discovered"),g=e=>(0,i.X)(e,"_configFlowProgress",$,f),u=(e,o)=>g(e.connection).subscribe(o),w=(e,o)=>o.context.title_placeholders&&0!==Object.keys(o.context.title_placeholders).length?e(`component.${o.handler}.config.flow_title`,o.context.title_placeholders)||("name"in o.context.title_placeholders?o.context.title_placeholders.name:(0,a.p$)(e,o.handler)):(0,a.p$)(e,o.handler)},30581:(e,o,n)=>{n.d(o,{W:()=>s});var i=n(50289),t=n(98041),a=n(46092),r=n(41572);const s=(e,o)=>(0,r.g)(e,o,{flowType:"config_flow",loadDevicesAndAreas:!0,createFlow:async(e,n)=>{const[i]=await Promise.all([(0,t.t1)(e,n,o.entryId),e.loadFragmentTranslation("config"),e.loadBackendTranslation("config",n),e.loadBackendTranslation("selector",n),e.loadBackendTranslation("title",n)]);return i},fetchFlow:async(e,o)=>{const n=await(0,t.PN)(e,o);return await e.loadFragmentTranslation("config"),await e.loadBackendTranslation("config",n.handler),await e.loadBackendTranslation("selector",n.handler),n},handleFlowStep:t.jm,deleteFlow:t.sR,renderAbortDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.abort.${o.reason}`,o.description_placeholders);return n?i.qy` <ha-markdown allowsvg breaks .content="${n}"></ha-markdown> `:o.reason},renderShowFormStepHeader:(e,o)=>e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.title`,o.description_placeholders)||e.localize(`component.${o.handler}.title`),renderShowFormStepDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.description`,o.description_placeholders);return n?i.qy` <ha-markdown allowsvg breaks .content="${n}"></ha-markdown> `:""},renderShowFormStepFieldLabel(e,o,n,i){if("expandable"===n.type)return e.localize(`component.${o.handler}.config.step.${o.step_id}.sections.${n.name}.name`);const t=i?.path?.[0]?`sections.${i.path[0]}`:"";return e.localize(`component.${o.handler}.config.step.${o.step_id}.${t}data.${n.name}`)||n.name},renderShowFormStepFieldHelper(e,o,n,t){if("expandable"===n.type)return e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.sections.${n.name}.description`);const a=t?.path?.[0]?`sections.${t.path[0]}.`:"",r=e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.${a}data_description.${n.name}`,o.description_placeholders);return r?i.qy`<ha-markdown breaks .content="${r}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,o,n)=>e.localize(`component.${o.translation_domain||o.translation_domain||o.handler}.config.error.${n}`,o.description_placeholders)||n,renderShowFormStepFieldLocalizeValue:(e,o,n)=>e.localize(`component.${o.handler}.selector.${n}`),renderShowFormStepSubmitButton:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===o.last_step?"next":"submit")),renderExternalStepHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`)||e.localize("ui.panel.config.integrations.config_flow.external_step.open_site"),renderExternalStepDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.${o.step_id}.description`,o.description_placeholders);return i.qy` <p> ${e.localize("ui.panel.config.integrations.config_flow.external_step.description")} </p> ${n?i.qy` <ha-markdown allowsvg breaks .content="${n}"></ha-markdown> `:""} `},renderCreateEntryDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.create_entry.${o.description||"default"}`,o.description_placeholders);return i.qy` ${n?i.qy` <ha-markdown allowsvg breaks .content="${n}"></ha-markdown> `:""} <p> ${e.localize("ui.panel.config.integrations.config_flow.created_config",{name:o.title})} </p> `},renderShowFormProgressHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`)||e.localize(`component.${o.handler}.title`),renderShowFormProgressDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.progress.${o.progress_action}`,o.description_placeholders);return n?i.qy` <ha-markdown allowsvg breaks .content="${n}"></ha-markdown> `:""},renderMenuHeader:(e,o)=>e.localize(`component.${o.handler}.config.step.${o.step_id}.title`)||e.localize(`component.${o.handler}.title`),renderMenuDescription(e,o){const n=e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.description`,o.description_placeholders);return n?i.qy` <ha-markdown allowsvg breaks .content="${n}"></ha-markdown> `:""},renderMenuOption:(e,o,n)=>e.localize(`component.${o.translation_domain||o.handler}.config.step.${o.step_id}.menu_options.${n}`,o.description_placeholders),renderLoadingDescription(e,o,n,i){if("loading_flow"!==o&&"loading_step"!==o)return"";const t=i?.handler||n;return e.localize(`ui.panel.config.integrations.config_flow.loading.${o}`,{integration:t?(0,a.p$)(e.localize,t):e.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}})},58222:(e,o,n)=>{n.a(e,(async(e,o)=>{try{var i=n(36312),t=(n(16891),n(63893),n(50289)),a=n(29818),r=n(30125),s=n(49281),l=(n(13292),n(13082),n(13830),n(88400),n(46092)),d=n(60724),c=n(51842),p=n(14256),m=n(5171),h=n(30581),_=e([r]);r=(_.then?(await _)():_)[0];(0,i.A)([(0,a.EM)("ha-config-repairs")],(function(e,o){return{F:class extends o{constructor(...o){super(...o),e(this)}},d:[{kind:"field",decorators:[(0,a.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({attribute:!1})],key:"repairsIssues",value:void 0},{kind:"field",decorators:[(0,a.MZ)({type:Number})],key:"total",value:void 0},{kind:"method",key:"render",value:function(){if(!this.repairsIssues?.length)return t.s6;const e=this.repairsIssues;return t.qy` <div class="title"> ${this.hass.localize("ui.panel.config.repairs.title",{count:this.total||this.repairsIssues.length})} </div> <mwc-list> ${e.map((e=>t.qy` <ha-list-item twoline graphic="medium" .hasMeta="${!this.narrow}" .issue="${e}" class="${e.ignored?"ignored":""}" @click="${this._openShowMoreDialog}"> <img alt="${(0,l.p$)(this.hass.localize,e.domain)}" loading="lazy" src="${(0,c.MR)({domain:e.issue_domain||e.domain,type:"icon",useFallback:!0,darkOptimized:this.hass.themes?.darkMode})}" .title="${(0,l.p$)(this.hass.localize,e.domain)}" crossorigin="anonymous" referrerpolicy="no-referrer" slot="graphic"> <span>${this.hass.localize(`component.${e.domain}.issues.${e.translation_key||e.issue_id}.title`,e.translation_placeholders||{})||`${e.domain}: ${e.translation_key||e.issue_id}`}</span> <span slot="secondary" class="secondary"> ${"critical"===e.severity||"error"===e.severity?t.qy`<span class="error">${this.hass.localize(`ui.panel.config.repairs.${e.severity}`)}</span>`:""} ${"critical"!==e.severity&&"error"!==e.severity||!e.created?"":" - "} ${e.created?(0,s.Z)((0,r.K)(new Date(e.created),this.hass.locale)):""} ${e.ignored?` - ${this.hass.localize("ui.panel.config.repairs.dialog.ignored_in_version_short",{version:e.dismissed_version})}`:""} </span> ${this.narrow?"":t.qy`<ha-icon-next slot="meta"></ha-icon-next>`} </ha-list-item> `))} </mwc-list> `}},{kind:"method",key:"_openShowMoreDialog",value:async function(e){const o=e.currentTarget.issue;if(o.is_fixable)(0,p.K)(this,o);else if("homeassistant"===o.domain&&"config_entry_reauth"===o.translation_key){const e=await(0,d.AU)(this.hass.connection,o.domain,o.issue_id);"flow_id"in e.issue_data&&(0,h.W)(this,{continueFlowId:e.issue_data.flow_id})}else(0,m.x)(this,{issue:o})}},{kind:"field",static:!0,key:"styles",value:()=>t.AH`:host{--mdc-list-vertical-padding:0}.title{font-size:16px;padding:16px;padding-bottom:0}.ignored{opacity:var(--light-secondary-opacity)}ha-list-item{--mdc-list-item-graphic-size:40px}button.show-more{color:var(--primary-color);text-align:left;cursor:pointer;background:0 0;border-width:initial;border-style:none;border-color:initial;border-image:initial;padding:16px;font:inherit}button.show-more:focus{outline:0;text-decoration:underline}ha-list-item{cursor:pointer;font-size:16px}.error{color:var(--error-color)}`}]}}),t.WF);o()}catch(e){o(e)}}))},14256:(e,o,n)=>{n.d(o,{K:()=>s});var i=n(50289),t=n(46092),a=n(60724),r=n(41572);const s=(e,o,n)=>(0,r.g)(e,{startFlowHandler:o.domain,domain:o.domain,dialogClosedCallback:n},{flowType:"repair_flow",loadDevicesAndAreas:!1,createFlow:async(e,n)=>{const[i]=await Promise.all([(0,a.vR)(e,n,o.issue_id),e.loadBackendTranslation("issues",o.domain),e.loadBackendTranslation("selector",o.domain)]);return i},fetchFlow:async(e,n)=>{const[i]=await Promise.all([(0,a.ZF)(e,n),e.loadBackendTranslation("issues",o.domain),e.loadBackendTranslation("selector",o.domain)]);return i},handleFlowStep:a.do,deleteFlow:a.UL,renderAbortDescription(e,n){const t=e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.abort.${n.reason}`,n.description_placeholders);return t?i.qy` <ha-markdown breaks allowsvg .content="${t}"></ha-markdown> `:n.reason},renderShowFormStepHeader:(e,n)=>e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.step.${n.step_id}.title`,n.description_placeholders)||e.localize("ui.dialogs.repair_flow.form.header"),renderShowFormStepDescription(e,n){const t=e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.step.${n.step_id}.description`,n.description_placeholders);return t?i.qy` <ha-markdown allowsvg breaks .content="${t}"></ha-markdown> `:""},renderShowFormStepFieldLabel:(e,n,i,t)=>e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.step.${n.step_id}.${t?.prefix?`section.${t.prefix[0]}.`:""}data.${i.name}`,n.description_placeholders),renderShowFormStepFieldHelper(e,n,t,a){const r=e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.step.${n.step_id}.${a?.prefix?`section.${a.prefix[0]}.`:""}data_description.${t.name}`,n.description_placeholders);return r?i.qy`<ha-markdown breaks .content="${r}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,n,i)=>e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.error.${i}`,n.description_placeholders),renderShowFormStepFieldLocalizeValue:(e,n,i)=>e.localize(`component.${o.domain}.selector.${i}`),renderShowFormStepSubmitButton:(e,n)=>e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.step.${n.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===n.last_step?"next":"submit")),renderExternalStepHeader:(e,o)=>"",renderExternalStepDescription:(e,o)=>"",renderCreateEntryDescription:(e,o)=>i.qy` <p>${e.localize("ui.dialogs.repair_flow.success.description")}</p> `,renderShowFormProgressHeader:(e,n)=>e.localize(`component.${o.domain}.issues.step.${o.translation_key||o.issue_id}.fix_flow.${n.step_id}.title`,n.description_placeholders)||e.localize(`component.${o.domain}.title`),renderShowFormProgressDescription(e,n){const t=e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.progress.${n.progress_action}`,n.description_placeholders);return t?i.qy` <ha-markdown allowsvg breaks .content="${t}"></ha-markdown> `:""},renderMenuHeader:(e,n)=>e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.step.${n.step_id}.title`,n.description_placeholders)||e.localize(`component.${o.domain}.title`),renderMenuDescription(e,n){const t=e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.step.${n.step_id}.description`,n.description_placeholders);return t?i.qy` <ha-markdown allowsvg breaks .content="${t}"></ha-markdown> `:""},renderMenuOption:(e,n,i)=>e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.step.${n.step_id}.menu_options.${i}`,n.description_placeholders),renderLoadingDescription:(e,n)=>e.localize(`component.${o.domain}.issues.${o.translation_key||o.issue_id}.fix_flow.loading`)||("loading_flow"===n||"loading_step"===n?e.localize(`ui.dialogs.repair_flow.loading.${n}`,{integration:(0,t.p$)(e.localize,o.domain)}):"")})},5171:(e,o,n)=>{n.d(o,{x:()=>a});var i=n(34897);const t=()=>n.e(40872).then(n.bind(n,40872)),a=(e,o)=>{(0,i.r)(e,"show-dialog",{dialogTag:"dialog-repairs-issue",dialogImport:t,dialogParams:o})}}};
//# sourceMappingURL=58222.uD6W5W7fW3Y.js.map