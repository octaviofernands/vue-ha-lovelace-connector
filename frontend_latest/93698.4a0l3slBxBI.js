export const id=93698;export const ids=[93698,36185];export const modules={63516:(e,t,i)=>{i.d(t,{s:()=>a});const a=e=>!(!e.detail.selected||"property"!==e.detail.source)&&(e.currentTarget.selected=!1,!0)},36185:(e,t,i)=>{var a=i(36312),s=i(68689),n=(i(253),i(54846),i(16891),i(50289)),o=i(29818),r=i(85920),d=i(34897);i(13292),i(9421);const l={boolean:()=>i.e(96292).then(i.bind(i,96292)),constant:()=>i.e(44354).then(i.bind(i,44354)),float:()=>i.e(80866).then(i.bind(i,80866)),grid:()=>i.e(21306).then(i.bind(i,21306)),expandable:()=>i.e(82178).then(i.bind(i,82178)),integer:()=>i.e(65622).then(i.bind(i,43241)),multi_select:()=>i.e(26964).then(i.bind(i,26964)),positive_time_period_dict:()=>i.e(24280).then(i.bind(i,24280)),select:()=>i.e(22038).then(i.bind(i,22038)),string:()=>i.e(38819).then(i.bind(i,38819))},p=(e,t)=>e?!t.name||t.flatten?e:e[t.name]:null;(0,a.A)([(0,o.EM)("ha-form")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"warning",value:void 0},{kind:"field",decorators:[(0,o.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"computeError",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"method",key:"getFormProperties",value:function(){return{}}},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof n.mN&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{"selector"in e||l[e.type]?.()}))}},{kind:"method",key:"render",value:function(){return n.qy` <div class="root" part="root"> ${this.error&&this.error.base?n.qy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e),i=((e,t)=>e&&t.name?e[t.name]:null)(this.warning,e);return n.qy` ${t?n.qy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:i?n.qy` <ha-alert own-margin alert-type="warning"> ${this._computeWarning(i,e)} </ha-alert> `:""} ${"selector"in e?n.qy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${p(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,r._)(this.fieldElementName(e.type),{schema:e,data:p(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,localize:this.hass?.localize,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e),...this.getFormProperties()})} `}))} </div> `}},{kind:"method",key:"fieldElementName",value:function(e){return`ha-form-${e}`}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[i,a]of Object.entries(e.context))t[i]=this.data[a];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,s.A)(i,"createRenderRoot",this,3)([]);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema;if(e.target===this)return;const i=!t.name||"flatten"in t&&t.flatten?e.detail.value:{[t.name]:e.detail.value};this.data={...this.data,...i},(0,d.r)(this,"value-changed",{value:this.data})}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return Array.isArray(e)?n.qy`<ul> ${e.map((e=>n.qy`<li> ${this.computeError?this.computeError(e,t):e} </li>`))} </ul>`:this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return n.AH`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}}]}}),n.WF)},2499:(e,t,i)=>{var a=i(36312),s=i(50289),n=i(29818),o=i(94100);i(36185);(0,a.A)([(0,n.EM)("assist-pipeline-detail-config")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Array})],key:"supportedLanguages",value:void 0},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot?.querySelector("ha-form");e?.focus()}},{kind:"field",key:"_schema",value:()=>(0,o.A)((e=>[{name:"",type:"grid",schema:[{name:"name",required:!0,selector:{text:{}}},e?{name:"language",required:!0,selector:{language:{languages:e}}}:{name:"",type:"constant"}]}]))},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"method",key:"render",value:function(){return s.qy` <div class="section"> <div class="intro"> <h3> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.config.title")} </h3> <p> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.config.description")} </p> </div> <ha-form .schema="${this._schema(this.supportedLanguages)}" .data="${this.data}" .hass="${this.hass}" .computeLabel="${this._computeLabel}"></ha-form> </div> `}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`.section{border:1px solid var(--divider-color);border-radius:8px;box-sizing:border-box;padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}`}}]}}),s.WF)},12914:(e,t,i)=>{var a=i(36312),s=i(50289),n=i(29818),o=i(94100),r=(i(36185),i(34897));(0,a.A)([(0,n.EM)("assist-pipeline-detail-conversation")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_supportedLanguages",value:void 0},{kind:"field",key:"_schema",value:()=>(0,o.A)(((e,t)=>[{name:"",type:"grid",schema:[{name:"conversation_engine",required:!0,selector:{conversation_agent:{language:e}}},"*"!==t&&t?.length?{name:"conversation_language",required:!0,selector:{language:{languages:t,no_sort:!0}}}:{name:"",type:"constant"}]}]))},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"method",key:"render",value:function(){return s.qy` <div class="section"> <div class="intro"> <h3> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.conversation.title")} </h3> <p> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.conversation.description")} </p> </div> <ha-form .schema="${this._schema(this.data?.language,this._supportedLanguages)}" .data="${this.data}" .hass="${this.hass}" .computeLabel="${this._computeLabel}" @supported-languages-changed="${this._supportedLanguagesChanged}"></ha-form> </div> `}},{kind:"method",key:"_supportedLanguagesChanged",value:function(e){"*"===e.detail.value&&setTimeout((()=>{const e={...this.data};e.conversation_language="*",(0,r.r)(this,"value-changed",{value:e})}),0),this._supportedLanguages=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`.section{border:1px solid var(--divider-color);border-radius:8px;box-sizing:border-box;padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}`}}]}}),s.WF)},84116:(e,t,i)=>{var a=i(36312),s=i(50289),n=i(29818),o=i(94100);i(36185);(0,a.A)([(0,n.EM)("assist-pipeline-detail-stt")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_supportedLanguages",value:void 0},{kind:"field",key:"_schema",value:()=>(0,o.A)(((e,t)=>[{name:"",type:"grid",schema:[{name:"stt_engine",selector:{stt:{language:e}}},t?.length?{name:"stt_language",required:!0,selector:{language:{languages:t,no_sort:!0}}}:{name:"",type:"constant"}]}]))},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"method",key:"render",value:function(){return s.qy` <div class="section"> <div class="intro"> <h3> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.stt.title")} </h3> <p> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.stt.description")} </p> </div> <ha-form .schema="${this._schema(this.data?.language,this._supportedLanguages)}" .data="${this.data}" .hass="${this.hass}" .computeLabel="${this._computeLabel}" @supported-languages-changed="${this._supportedLanguagesChanged}"></ha-form> </div> `}},{kind:"method",key:"_supportedLanguagesChanged",value:function(e){this._supportedLanguages=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`.section{border:1px solid var(--divider-color);border-radius:8px;box-sizing:border-box;padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}`}}]}}),s.WF)},8136:(e,t,i)=>{var a=i(36312),s=i(50289),n=i(29818),o=i(94100),r=(i(77372),i(36185),i(34897));const d=()=>i.e(3833).then(i.bind(i,3833));(0,a.A)([(0,n.EM)("assist-pipeline-detail-tts")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_supportedLanguages",value:void 0},{kind:"field",key:"_schema",value:()=>(0,o.A)(((e,t)=>[{name:"",type:"grid",schema:[{name:"tts_engine",selector:{tts:{language:e}}},t?.length?{name:"tts_language",required:!0,selector:{language:{languages:t,no_sort:!0}}}:{name:"",type:"constant"},{name:"tts_voice",selector:{tts_voice:{}},context:{language:"tts_language",engineId:"tts_engine"},required:!0}]}]))},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"method",key:"render",value:function(){return s.qy` <div class="section"> <div class="content"> <div class="intro"> <h3> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.tts.title")} </h3> <p> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.tts.description")} </p> </div> <ha-form .schema="${this._schema(this.data?.language,this._supportedLanguages)}" .data="${this.data}" .hass="${this.hass}" .computeLabel="${this._computeLabel}" @supported-languages-changed="${this._supportedLanguagesChanged}"></ha-form> </div> ${this.data?.tts_engine?s.qy`<div class="footer"> <ha-button .label="${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.try_tts")}" @click="${this._preview}"> </ha-button> </div>`:s.s6} </div> `}},{kind:"method",key:"_preview",value:async function(){if(!this.data)return;const e=this.data.tts_engine,t=this.data.tts_language||void 0,i=this.data.tts_voice||void 0;var a,s;e&&(a=this,s={engine:e,language:t,voice:i},(0,r.r)(a,"show-dialog",{addHistory:!1,dialogTag:"dialog-tts-try",dialogImport:d,dialogParams:s}))}},{kind:"method",key:"_supportedLanguagesChanged",value:function(e){this._supportedLanguages=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`.section{border:1px solid var(--divider-color);border-radius:8px}.content{padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}.footer{border-top:1px solid var(--divider-color);padding:8px 16px}`}}]}}),s.WF)},10694:(e,t,i)=>{var a=i(36312),s=(i(253),i(16891),i(4525),i(50289)),n=i(29818),o=i(94100);i(36185);var r=i(84976),d=i(34897);(0,a.A)([(0,n.EM)("assist-pipeline-detail-wakeword")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_wakeWords",value:void 0},{kind:"field",key:"_schema",value:()=>(0,o.A)((e=>[{name:"",type:"grid",schema:[{name:"wake_word_entity",selector:{entity:{domain:"wake_word"}}},e?.length?{name:"wake_word_id",required:!0,selector:{select:{mode:"dropdown",sort:!0,options:e.map((e=>({value:e.id,label:e.name})))}}}:{name:"",type:"constant"}]}]))},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.panel.config.voice_assistants.assistants.pipeline.detail.form.${e.name}`):""}},{kind:"method",key:"willUpdate",value:function(e){e.has("data")&&e.get("data")?.wake_word_entity!==this.data?.wake_word_entity&&(e.get("data")?.wake_word_entity&&this.data?.wake_word_id&&(0,d.r)(this,"value-changed",{value:{...this.data,wake_word_id:void 0}}),this._fetchWakeWords())}},{kind:"field",key:"_hasWakeWorkEntities",value:()=>(0,o.A)((e=>Object.keys(e).some((e=>e.startsWith("wake_word.")))))},{kind:"method",key:"render",value:function(){const e=this._hasWakeWorkEntities(this.hass.states);return s.qy` <div class="section"> <div class="content"> <div class="intro"> <h3> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.wakeword.title")} </h3> <p> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.wakeword.description")} </p> </div> ${e?s.s6:s.qy`${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.wakeword.no_wake_words")} <a href="${(0,r.o)(this.hass,"/voice_control/install_wake_word_add_on/")}" target="_blank" rel="noreferrer noopener">${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.steps.wakeword.no_wake_words_link")}</a>`} <ha-form .schema="${this._schema(this._wakeWords)}" .data="${this.data}" .hass="${this.hass}" .computeLabel="${this._computeLabel}" .disabled="${!e}"></ha-form> </div> </div> `}},{kind:"method",key:"_fetchWakeWords",value:async function(){if(this._wakeWords=void 0,!this.data?.wake_word_entity)return;const e=this.data.wake_word_entity,t=await(i=this.hass,a=e,i.callWS({type:"wake_word/info",entity_id:a}));var i,a;this.data.wake_word_entity===e&&(this._wakeWords=t.wake_words,!this.data||this.data?.wake_word_id&&this._wakeWords.some((e=>e.id===this.data.wake_word_id))||(0,d.r)(this,"value-changed",{value:{...this.data,wake_word_id:this._wakeWords[0]?.id}}))}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`.section{border:1px solid var(--divider-color);border-radius:8px}.content{padding:16px}.intro{margin-bottom:16px}h3{font-weight:400;font-size:22px;line-height:28px;margin-top:0;margin-bottom:4px}p{color:var(--secondary-text-color);font-size:var(--mdc-typography-body2-font-size, .875rem);margin-top:0;margin-bottom:0}a{color:var(--primary-color)}`}}]}}),s.WF)},88362:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(36312),s=(i(253),i(54846),i(50289)),n=i(29818),o=i(94100),r=i(79228),d=i(87094),l=e([d]);d=(l.then?(await l)():l)[0];(0,a.A)([(0,n.EM)("assist-render-pipeline-events")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"events",value:void 0},{kind:"field",key:"_processEvents",value:()=>(0,o.A)((e=>{let t;return e.forEach((e=>{t=(0,r.QC)(t,e)})),t}))},{kind:"method",key:"render",value:function(){const e=this._processEvents(this.events);return e?s.qy` <assist-render-pipeline-run .hass="${this.hass}" .pipelineRun="${e}"></assist-render-pipeline-run> `:this.events.length?s.qy`<ha-alert alert-type="error">Error showing run</ha-alert> <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <pre>${JSON.stringify(this.events,null,2)}</pre> </ha-expansion-panel> </ha-card>`:s.qy`<ha-alert alert-type="warning">There were no events in this run.</ha-alert>`}}]}}),s.WF);t()}catch(e){t(e)}}))},87094:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(36312),s=(i(89655),i(253),i(94438),i(16891),i(50289)),n=i(29818),o=(i(13082),i(13292),i(77372),i(32885),i(15720),i(57636)),r=(i(57641),i(6121)),d=e([o]);o=(d.then?(await d)():d)[0];const l={pipeline:"Pipeline",language:"Language"},p={engine:"Engine"},c={engine:"Engine"},h={engine:"Engine",language:"Language",intent_input:"Input"},u={engine:"Engine",language:"Language",voice:"Voice",tts_input:"Input"},g={ready:0,wake_word:1,stt:2,intent:3,tts:4,done:5,error:6},v=(e,t)=>e.init_options?g[e.init_options.start_stage]<=g[t]&&g[t]<=g[e.init_options.end_stage]:t in e,m=(e,t,i)=>"error"in e&&i===t?s.qy` <ha-alert alert-type="error"> ${e.error.message} (${e.error.code}) </ha-alert> `:"",_=(e,t,i,a="-start")=>{const n=t.events.find((e=>e.type===`${i}`+a)),r=t.events.find((e=>e.type===`${i}-end`));if(!n)return"";if(!r)return"error"in t?s.qy`❌`:s.qy` <ha-circular-progress size="small" indeterminate></ha-circular-progress> `;const d=new Date(r.timestamp).getTime()-new Date(n.timestamp).getTime(),l=(0,o.ZV)(d/1e3,e.locale,{maximumFractionDigits:2});return s.qy`${l}s ✅`},k=(e,t)=>Object.entries(t).map((([t,i])=>s.qy` <div class="row"> <div>${i}</div> <div>${e[t]}</div> </div> `)),y=(e,t)=>{const i={};let a=!1;for(const s in e)s in t||"done"===s||(a=!0,i[s]=e[s]);return a?s.qy`<ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor readOnly="readOnly" autoUpdate .value="${i}"></ha-yaml-editor> </ha-expansion-panel>`:""};(0,a.A)([(0,n.EM)("assist-render-pipeline-run")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"pipelineRun",value:void 0},{kind:"method",key:"render",value:function(){const e=this.pipelineRun&&["tts","intent","stt","wake_word"].find((e=>e in this.pipelineRun))||"ready",t=[],i=(this.pipelineRun.init_options&&"text"in this.pipelineRun.init_options.input?this.pipelineRun.init_options.input.text:void 0)||this.pipelineRun?.stt?.stt_output?.text||this.pipelineRun?.intent?.intent_input;return i&&t.push({from:"user",text:i}),this.pipelineRun?.intent?.intent_output?.response?.speech?.plain?.speech&&t.push({from:"hass",text:this.pipelineRun.intent.intent_output.response.speech.plain.speech}),s.qy` <ha-card> <div class="card-content"> <div class="row heading"> <div>Run</div> <div>${this.pipelineRun.stage}</div> </div> ${k(this.pipelineRun.run,l)} ${t.length>0?s.qy` <div class="messages"> ${t.map((({from:e,text:t})=>s.qy` <div class="${`message ${e}`}">${t}</div> `))} </div> <div style="clear:both"></div> `:""} </div> </ha-card> ${m(this.pipelineRun,"ready",e)} ${v(this.pipelineRun,"wake_word")?s.qy` <ha-card> <div class="card-content"> <div class="row heading"> <span>Wake word</span> ${_(this.hass,this.pipelineRun,"wake_word")} </div> ${this.pipelineRun.wake_word?s.qy` <div class="card-content"> ${k(this.pipelineRun.wake_word,c)} ${this.pipelineRun.wake_word.wake_word_output?s.qy`<div class="row"> <div>Model</div> <div> ${this.pipelineRun.wake_word.wake_word_output.ww_id} </div> </div> <div class="row"> <div>Timestamp</div> <div> ${this.pipelineRun.wake_word.wake_word_output.timestamp} </div> </div>`:""} ${y(this.pipelineRun.wake_word,p)} </div> `:""} </div> </ha-card> `:""} ${m(this.pipelineRun,"wake_word",e)} ${v(this.pipelineRun,"stt")?s.qy` <ha-card> <div class="card-content"> <div class="row heading"> <span>Speech-to-text</span> ${_(this.hass,this.pipelineRun,"stt","-vad-end")} </div> ${this.pipelineRun.stt?s.qy` <div class="card-content"> ${k(this.pipelineRun.stt,c)} <div class="row"> <div>Language</div> <div>${this.pipelineRun.stt.metadata.language}</div> </div> ${this.pipelineRun.stt.stt_output?s.qy`<div class="row"> <div>Output</div> <div>${this.pipelineRun.stt.stt_output.text}</div> </div>`:""} ${y(this.pipelineRun.stt,c)} </div> `:""} </div> </ha-card> `:""} ${m(this.pipelineRun,"stt",e)} ${v(this.pipelineRun,"intent")?s.qy` <ha-card> <div class="card-content"> <div class="row heading"> <span>Natural Language Processing</span> ${_(this.hass,this.pipelineRun,"intent")} </div> ${this.pipelineRun.intent?s.qy` <div class="card-content"> ${k(this.pipelineRun.intent,h)} ${this.pipelineRun.intent.intent_output?s.qy`<div class="row"> <div>Response type</div> <div> ${this.pipelineRun.intent.intent_output.response.response_type} </div> </div> ${"error"===this.pipelineRun.intent.intent_output.response.response_type?s.qy`<div class="row"> <div>Error code</div> <div> ${this.pipelineRun.intent.intent_output.response.data.code} </div> </div>`:""}`:""} ${y(this.pipelineRun.intent,h)} </div> `:""} </div> </ha-card> `:""} ${m(this.pipelineRun,"intent",e)} ${v(this.pipelineRun,"tts")?s.qy` <ha-card> <div class="card-content"> <div class="row heading"> <span>Text-to-speech</span> ${_(this.hass,this.pipelineRun,"tts")} </div> ${this.pipelineRun.tts?s.qy` <div class="card-content"> ${k(this.pipelineRun.tts,u)} ${y(this.pipelineRun.tts,u)} </div> `:""} </div> ${this.pipelineRun?.tts?.tts_output?s.qy` <div class="card-actions"> <ha-button @click="${this._playTTS}"> Play Audio </ha-button> </div> `:""} </ha-card> `:""} ${m(this.pipelineRun,"tts",e)} <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor readOnly="readOnly" autoUpdate .value="${this.pipelineRun}"></ha-yaml-editor> </ha-expansion-panel> </ha-card> `}},{kind:"method",key:"_playTTS",value:function(){const e=this.pipelineRun.tts.tts_output.url,t=new Audio(e);t.addEventListener("error",(()=>{(0,r.showAlertDialog)(this,{title:"Error",text:"Error playing audio"})})),t.addEventListener("canplaythrough",(()=>{t.play()}))}},{kind:"field",static:!0,key:"styles",value:()=>s.AH`:host{display:block}ha-alert,ha-card{display:block;margin-bottom:16px}.row{display:flex;justify-content:space-between}.row>div:last-child{text-align:right}ha-expansion-panel{padding-left:8px;padding-inline-start:8px;padding-inline-end:initial}.card-content ha-expansion-panel{padding-left:0px;padding-inline-start:0px;padding-inline-end:initial;--expansion-panel-summary-padding:0px;--expansion-panel-content-padding:0px}.heading{font-weight:500;margin-bottom:16px}.messages{margin-top:8px}.message{font-size:18px;margin:8px 0;padding:8px;border-radius:15px;clear:both}.message.user{margin-left:24px;margin-inline-start:24px;margin-inline-end:initial;float:var(--float-end);text-align:right;border-bottom-right-radius:0px;background-color:var(--light-primary-color);color:var(--text-light-primary-color,var(--primary-text-color));direction:var(--direction)}.message.hass{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial;float:var(--float-start);border-bottom-left-radius:0px;background-color:var(--primary-color);color:var(--text-primary-color);direction:var(--direction)}`}]}}),s.WF);t()}catch(e){t(e)}}))},93698:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t),i.d(t,{DialogVoiceAssistantPipelineDetail:()=>b});var s=i(36312),n=(i(253),i(54846),i(50289)),o=i(29818),r=i(34897),d=i(79051),l=i(63516),p=i(16312),c=(i(77372),i(10900),i(36185),i(79228)),h=i(55321),u=(i(2499),i(12914),i(84116),i(8136),i(10694),i(88362)),g=i(213),v=e([u]);u=(v.then?(await v)():v)[0];const m="M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z",_="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",k="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",y="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",f="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";let b=(0,s.A)([(0,o.EM)("dialog-voice-assistant-pipeline-detail")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_preferred",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_cloudActive",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_submitting",value:()=>!1},{kind:"field",decorators:[(0,o.wk)()],key:"_supportedLanguages",value:void 0},{kind:"method",key:"showDialog",value:function(e){if(this._params=e,this._error=void 0,this._cloudActive=this._params.cloudActiveSubscription,this._params.pipeline)return this._data=this._params.pipeline,void(this._preferred=this._params.preferred);let t,i;if(this._cloudActive)for(const e of Object.values(this.hass.entities))if("cloud"===e.platform)if("stt"===(0,g.m)(e.entity_id)){if(t=e.entity_id,i)break}else if("tts"===(0,g.m)(e.entity_id)&&(i=e.entity_id,t))break;this._data={language:(this.hass.config.language||this.hass.locale.language).substring(0,2),stt_engine:t,tts_engine:i}}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._data=void 0,(0,r.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"firstUpdated",value:function(){this._getSupportedLanguages()}},{kind:"method",key:"_getSupportedLanguages",value:async function(){const{languages:e}=await(0,c.ds)(this.hass);this._supportedLanguages=e}},{kind:"method",key:"render",value:function(){if(!this._params||!this._data)return n.s6;const e=this._params.pipeline?.id?this._params.pipeline.name:this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.add_assistant_title");return n.qy` <ha-dialog open @closed="${this.closeDialog}" scrimClickAction escapeKeyAction .heading="${e}"> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${this.hass.localize("ui.common.close")}" .path="${_}"></ha-icon-button> <span slot="title" .title="${e}">${e}</span> ${this._params.pipeline?.id?n.qy` <ha-icon-button slot="actionItems" .label="${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.set_as_preferred")}" .path="${this._preferred?y:f}" @click="${this._setPreferred}" .disabled="${Boolean(this._preferred)}"></ha-icon-button> <ha-button-menu corner="BOTTOM_END" menuCorner="END" slot="actionItems" @closed="${d.d}" fixed> <ha-icon-button slot="trigger" .label="${this.hass.localize("ui.common.menu")}" .path="${k}"></ha-icon-button> <ha-list-item graphic="icon" @request-selected="${this._debug}"> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.debug")} <ha-svg-icon slot="graphic" .path="${m}"></ha-svg-icon> </ha-list-item> </ha-button-menu> `:n.s6} </ha-dialog-header> <div class="content"> ${this._error?n.qy`<ha-alert alert-type="error">${this._error}</ha-alert>`:n.s6} <assist-pipeline-detail-config .hass="${this.hass}" .data="${this._data}" .supportedLanguages="${this._supportedLanguages}" keys="name,language" @value-changed="${this._valueChanged}" dialogInitialFocus></assist-pipeline-detail-config> <assist-pipeline-detail-conversation .hass="${this.hass}" .data="${this._data}" keys="conversation_engine,conversation_language" @value-changed="${this._valueChanged}"></assist-pipeline-detail-conversation> ${this._cloudActive||"cloud"!==this._data.tts_engine&&"cloud"!==this._data.stt_engine?n.s6:n.qy` <ha-alert alert-type="warning"> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.no_cloud_message")} <a href="/config/cloud" slot="action" @click="${this.closeDialog}"> <ha-button> ${this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.no_cloud_action")} </ha-button> </a> </ha-alert> `} <assist-pipeline-detail-stt .hass="${this.hass}" .data="${this._data}" keys="stt_engine,stt_language" @value-changed="${this._valueChanged}"></assist-pipeline-detail-stt> <assist-pipeline-detail-tts .hass="${this.hass}" .data="${this._data}" keys="tts_engine,tts_language,tts_voice" @value-changed="${this._valueChanged}"></assist-pipeline-detail-tts> <assist-pipeline-detail-wakeword .hass="${this.hass}" .data="${this._data}" keys="wake_word_entity,wake_word_id" @value-changed="${this._valueChanged}"></assist-pipeline-detail-wakeword> </div> ${this._params.pipeline?.id?n.qy` <ha-button slot="secondaryAction" class="warning" .disabled="${this._preferred||this._submitting}" @click="${this._deletePipeline}"> ${this.hass.localize("ui.common.delete")} </ha-button> `:n.s6} <ha-button slot="primaryAction" @click="${this._updatePipeline}" .disabled="${this._submitting}" dialogInitialFocus> ${this._params.pipeline?.id?this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.update_assistant_action"):this.hass.localize("ui.panel.config.voice_assistants.assistants.pipeline.detail.add_assistant_action")} </ha-button> </ha-dialog> `}},{kind:"method",key:"_valueChanged",value:function(e){this._error=void 0;const t={};e.currentTarget.getAttribute("keys").split(",").forEach((i=>{t[i]=e.detail.value[i]})),this._data={...this._data,...t}}},{kind:"method",key:"_updatePipeline",value:async function(){this._submitting=!0;try{const e=this._data,t={name:e.name,language:e.language,conversation_engine:e.conversation_engine,conversation_language:e.conversation_language??null,stt_engine:e.stt_engine??null,stt_language:e.stt_language??null,tts_engine:e.tts_engine??null,tts_language:e.tts_language??null,tts_voice:e.tts_voice??null,wake_word_entity:e.wake_word_entity??null,wake_word_id:e.wake_word_id??null};this._params.pipeline?.id?await this._params.updatePipeline(t):await this._params.createPipeline(t),this.closeDialog()}catch(e){this._error=e?.message||"Unknown error"}finally{this._submitting=!1}}},{kind:"method",key:"_setPreferred",value:async function(){this._submitting=!0;try{await this._params.setPipelinePreferred(),this._preferred=!0}catch(e){this._error=e?.message||"Unknown error"}finally{this._submitting=!1}}},{kind:"method",key:"_debug",value:function(e){(0,l.s)(e)&&((0,p.o)(`/config/voice-assistants/debug/${this._params.pipeline.id}`),this.closeDialog())}},{kind:"method",key:"_deletePipeline",value:async function(){this._submitting=!0;try{await this._params.deletePipeline()&&this.closeDialog()}catch(e){this._error=e?.message||"Unknown error"}finally{this._submitting=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return[h.nA,n.AH`.content>:not(:last-child){margin-bottom:16px;display:block}ha-alert{margin-bottom:16px;display:block}a{text-decoration:none}`]}}]}}),n.WF);a()}catch(e){a(e)}}))}};
//# sourceMappingURL=93698.4a0l3slBxBI.js.map