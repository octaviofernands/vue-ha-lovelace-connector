export const id=94233;export const ids=[94233];export const modules={51853:(e,t,a)=>{a.d(t,{A:()=>n});const i=e=>e<10?`0${e}`:e;function n(e){const t=Math.floor(e/3600),a=Math.floor(e%3600/60),n=Math.floor(e%3600%60);return t>0?`${t}:${i(a)}:${i(n)}`:a>0?`${a}:${i(n)}`:n>0?""+n:null}},10252:(e,t,a)=>{a.d(t,{n:()=>r,v:()=>o});a(89655),a(24545),a(51855),a(82130),a(31743),a(22328),a(4959),a(62435);var i=a(65459),n=a(9883);const o={alarm_control_panel:["armed_away","armed_custom_bypass","armed_home","armed_night","armed_vacation","arming","disarmed","disarming","pending","triggered"],automation:["on","off"],binary_sensor:["on","off"],button:[],calendar:["on","off"],camera:["idle","recording","streaming"],cover:["closed","closing","open","opening"],device_tracker:["home","not_home"],fan:["on","off"],humidifier:["on","off"],input_boolean:["on","off"],input_button:[],lawn_mower:["error","paused","mowing","returning","docked"],light:["on","off"],lock:["jammed","locked","locking","unlocked","unlocking","opening","open"],media_player:["off","on","idle","playing","paused","standby","buffering"],person:["home","not_home"],plant:["ok","problem"],remote:["on","off"],scene:[],schedule:["on","off"],script:["on","off"],siren:["on","off"],sun:["above_horizon","below_horizon"],switch:["on","off"],timer:["active","idle","paused"],update:["on","off"],vacuum:["cleaning","docked","error","idle","paused","returning"],valve:["closed","closing","open","opening"],weather:["clear-night","cloudy","exceptional","fog","hail","lightning-rainy","lightning","partlycloudy","pouring","rainy","snowy-rainy","snowy","sunny","windy-variant","windy"]},s={alarm_control_panel:{code_format:["number","text"]},binary_sensor:{device_class:["battery","battery_charging","co","cold","connectivity","door","garage_door","gas","heat","light","lock","moisture","motion","moving","occupancy","opening","plug","power","presence","problem","running","safety","smoke","sound","tamper","update","vibration","window"]},button:{device_class:["restart","update"]},camera:{frontend_stream_type:["hls","web_rtc"]},climate:{hvac_action:["off","idle","preheating","defrosting","heating","cooling","drying","fan"]},cover:{device_class:["awning","blind","curtain","damper","door","garage","gate","shade","shutter","window"]},device_tracker:{source_type:["bluetooth","bluetooth_le","gps","router"]},fan:{direction:["forward","reverse"]},humidifier:{device_class:["humidifier","dehumidifier"],action:["off","idle","humidifying","drying"]},media_player:{device_class:["tv","speaker","receiver"],media_content_type:["album","app","artist","channel","channels","composer","contibuting_artist","episode","game","genre","image","movie","music","playlist","podcast","season","track","tvshow","url","video"],repeat:["off","one","all"]},number:{device_class:["temperature"]},sensor:{device_class:["apparent_power","aqi","battery","carbon_dioxide","carbon_monoxide","current","date","duration","energy","frequency","gas","humidity","illuminance","monetary","nitrogen_dioxide","nitrogen_monoxide","nitrous_oxide","ozone","ph","pm1","pm10","pm25","power_factor","power","pressure","reactive_power","signal_strength","sulphur_dioxide","temperature","timestamp","volatile_organic_compounds","volatile_organic_compounds_parts","voltage","volume_flow_rate"],state_class:["measurement","total","total_increasing"]},switch:{device_class:["outlet","switch"]},update:{device_class:["firmware"]},water_heater:{away_mode:["on","off"]}},r=(e,t=void 0)=>{const a=(0,i.t)(e),r=[];switch(!t&&a in o?r.push(...o[a]):t&&a in s&&t in s[a]&&r.push(...s[a][t]),a){case"climate":t?"fan_mode"===t?r.push(...e.attributes.fan_modes):"preset_mode"===t?r.push(...e.attributes.preset_modes):"swing_mode"===t&&r.push(...e.attributes.swing_modes):r.push(...e.attributes.hvac_modes);break;case"device_tracker":case"person":t||r.push("home","not_home");break;case"event":"event_type"===t&&r.push(...e.attributes.event_types);break;case"fan":"preset_mode"===t&&r.push(...e.attributes.preset_modes);break;case"humidifier":"mode"===t&&r.push(...e.attributes.available_modes);break;case"input_select":case"select":t||r.push(...e.attributes.options);break;case"light":"effect"===t&&e.attributes.effect_list?r.push(...e.attributes.effect_list):"color_mode"===t&&e.attributes.supported_color_modes&&r.push(...e.attributes.supported_color_modes);break;case"media_player":"sound_mode"===t?r.push(...e.attributes.sound_mode_list):"source"===t&&r.push(...e.attributes.source_list);break;case"remote":"current_activity"===t&&r.push(...e.attributes.activity_list);break;case"sensor":t||"enum"!==e.attributes.device_class||r.push(...e.attributes.options);break;case"vacuum":"fan_speed"===t&&r.push(...e.attributes.fan_speed_list);break;case"water_heater":t&&"operation_mode"!==t||r.push(...e.attributes.operation_list)}return t||r.push(...n.s7),[...new Set(r)]}},35212:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var i=a(36312),n=a(68689),o=a(50289),s=a(29818),r=a(85323),l=a(99890),c=a(51853),d=a(65459),u=a(19244),h=a(10252),m=a(57636),_=a(9883),f=a(2851),g=(a(20366),a(70857),e([m]));m=(g.then?(await g)():g)[0];const p="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",b=["alarm_control_panel","device_tracker","person"],v=(e,t)=>(0,l.g)(b)(e)&&(0,l.g)(h.v[e])(t)?`${e}.${t}`:null;(0,i.A)([(0,s.EM)("ha-state-label-badge")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"name",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"image",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"showName",value:()=>!1},{kind:"field",decorators:[(0,s.wk)()],key:"_timerTimeRemaining",value:void 0},{kind:"field",key:"_connected",value:void 0},{kind:"field",key:"_updateRemaining",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,n.A)(a,"connectedCallback",this,3)([]),this._connected=!0,this.startInterval(this.state)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.A)(a,"disconnectedCallback",this,3)([]),this._connected=!1,this.clearInterval()}},{kind:"method",key:"render",value:function(){const e=this.state;if(!e)return o.qy` <ha-label-badge class="warning" label="${this.hass.localize("state_badge.default.error")}" description="${this.hass.localize("state_badge.default.entity_not_found")}"> <ha-svg-icon .path="${p}"></ha-svg-icon> </ha-label-badge> `;const t=(0,d.t)(e),a=this.hass?.entities[e.entity_id],i=this.icon||this._computeShowIcon(t,e,a),n=this.icon?"":this.image?this.image:e.attributes.entity_picture_local||e.attributes.entity_picture,s=n||i?void 0:this._computeValue(t,e,a);return o.qy` <ha-label-badge class="${(0,r.H)({[t]:!0,"has-unit_of_measurement":"unit_of_measurement"in e.attributes})}" .image="${n}" .label="${this._computeLabel(t,e,this._timerTimeRemaining)}" .description="${this.showName?this.name??(0,u.u)(e):void 0}"> ${!n&&i?o.qy`<ha-state-icon .icon="${this.icon}" .stateObj="${e}" .hass="${this.hass}"></ha-state-icon>`:""} ${!s||n||i?"":o.qy`<span class="${s&&s.length>4?"big":""}">${s}</span>`} </ha-label-badge> `}},{kind:"method",key:"updated",value:function(e){(0,n.A)(a,"updated",this,3)([e]),this._connected&&e.has("state")&&this.startInterval(this.state)}},{kind:"method",key:"_computeValue",value:function(e,t,a){switch(e){case"alarm_control_panel":case"binary_sensor":case"device_tracker":case"person":case"scene":case"sun":case"timer":return null;case"sensor":if("moon"===a?.platform)return null;default:return t.state===_.HV||t.state===_.Hh?"—":(0,m.x)(t)?(0,m.ZV)(t.state,this.hass.locale,(0,m.ZQ)(t,a)):this.hass.formatEntityState(t)}}},{kind:"method",key:"_computeShowIcon",value:function(e,t,a){if(t.state===_.Hh)return!1;switch(e){case"alarm_control_panel":case"binary_sensor":case"device_tracker":case"person":case"scene":case"sun":case"timer":return!0;case"sensor":return"moon"===a?.platform;default:return!1}}},{kind:"method",key:"_computeLabel",value:function(e,t,a=0){if((0,_.g0)(t.state))return this.hass.localize(`state_badge.default.${t.state}`);const i=v(e,t.state);return i?this.hass.localize(`state_badge.${i}`):"person"===e||"device_tracker"===e?t.state:"timer"===e?(0,c.A)(a):t.attributes.unit_of_measurement||null}},{kind:"method",key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=void 0)}))},{kind:"method",key:"startInterval",value:function(e){this.clearInterval(),e&&"timer"===(0,d.t)(e)&&(this.calculateTimerRemaining(e),"active"===e.state&&(this._updateRemaining=window.setInterval((()=>this.calculateTimerRemaining(this.state)),1e3)))}},{kind:"method",key:"calculateTimerRemaining",value:function(e){this._timerTimeRemaining=(0,f.ls)(e)}},{kind:"get",static:!0,key:"styles",value:function(){return o.AH`:host{cursor:pointer}.big{font-size:70%}ha-label-badge{--ha-label-badge-color:var(--label-badge-red)}ha-label-badge.has-unit_of_measurement{--ha-label-badge-label-text-transform:none}ha-label-badge.binary_sensor{--ha-label-badge-color:var(--label-badge-blue)}.red{--ha-label-badge-color:var(--label-badge-red)}.blue{--ha-label-badge-color:var(--label-badge-blue)}.green{--ha-label-badge-color:var(--label-badge-green)}.yellow{--ha-label-badge-color:var(--label-badge-yellow)}.grey{--ha-label-badge-color:var(--label-badge-grey)}.warning{--ha-label-badge-color:var(--label-badge-yellow)}`}}]}}),o.WF);t()}catch(e){t(e)}}))},2851:(e,t,a)=>{a.d(t,{PF:()=>c,CR:()=>o,pZ:()=>r,kL:()=>n,ls:()=>l,r9:()=>s});a(16891);var i=a(51853);const n=e=>e.callWS({type:"timer/list"}),o=(e,t)=>e.callWS({type:"timer/create",...t}),s=(e,t,a)=>e.callWS({type:"timer/update",timer_id:t,...a}),r=(e,t)=>e.callWS({type:"timer/delete",timer_id:t}),l=e=>{if(!e.attributes.remaining)return;let t=function(e){const t=e.split(":").map(Number);return 3600*t[0]+60*t[1]+t[2]}(e.attributes.remaining);if("active"===e.state){const a=(new Date).getTime(),i=new Date(e.last_changed).getTime();t=Math.max(t-(a-i)/1e3,0)}return t},c=(e,t,a)=>{if(!t)return null;if("idle"===t.state||0===a)return e.formatEntityState(t);let n=(0,i.A)(a||0)||"0";return"paused"===t.state&&(n=`${n} (${e.formatEntityState(t)})`),n}},58258:(e,t,a)=>{a.a(e,(async(e,i)=>{try{a.r(t),a.d(t,{HuiHumidifierCardEditor:()=>p});var n=a(36312),o=a(50289),s=a(29818),r=a(94100),l=a(66419),c=a(34897),d=(a(36185),a(54581)),u=a(56124),h=a(75495),m=e([d,h]);[d,h]=m.then?(await m)():m;const _=["humidifier-modes","humidifier-toggle"],f=(0,l.kp)(u.H,(0,l.Ik)({entity:(0,l.lq)((0,l.Yj)()),name:(0,l.lq)((0,l.Yj)()),theme:(0,l.lq)((0,l.Yj)()),show_current_as_primary:(0,l.lq)((0,l.zM)()),features:(0,l.lq)((0,l.YO)((0,l.bz)()))})),g=[{name:"entity",required:!0,selector:{entity:{domain:"humidifier"}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"theme",selector:{theme:{}}}]},{name:"show_current_as_primary",selector:{boolean:{}}}];let p=(0,n.A)([(0,s.EM)("hui-humidifier-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.wk)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,s.wk)()],key:"_subElementEditorConfig",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,l.vA)(e,f),this._config=e}},{kind:"field",key:"_context",value:()=>(0,r.A)((e=>({entity_id:e})))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return o.s6;const e=this._config.entity?this.hass.states[this._config.entity]:void 0;return this._subElementEditorConfig?o.qy` <hui-sub-element-editor .hass="${this.hass}" .config="${this._subElementEditorConfig}" .context="${this._context(this._config.entity)}" @go-back="${this._goBack}" @config-changed="${this.subElementChanged}"> </hui-sub-element-editor> `:o.qy` <ha-form .hass="${this.hass}" .data="${this._config}" .schema="${g}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> <hui-card-features-editor .hass="${this.hass}" .stateObj="${e}" .featuresTypes="${_}" .features="${this._config.features??[]}" @features-changed="${this._featuresChanged}" @edit-detail-element="${this._editDetailElement}"></hui-card-features-editor> `}},{kind:"method",key:"_valueChanged",value:function(e){(0,c.r)(this,"config-changed",{config:e.detail.value})}},{kind:"method",key:"_featuresChanged",value:function(e){if(e.stopPropagation(),!this._config||!this.hass)return;const t=e.detail.features,a={...this._config,features:t};0===t.length&&delete a.features,(0,c.r)(this,"config-changed",{config:a})}},{kind:"method",key:"subElementChanged",value:function(e){if(e.stopPropagation(),!this._config||!this.hass)return;const t=e.detail.config,a=this._config.features?[...this._config.features]:[];t?a[this._subElementEditorConfig.index]=t:(a.splice(this._subElementEditorConfig.index,1),this._goBack()),this._config={...this._config,features:a},this._subElementEditorConfig={...this._subElementEditorConfig,elementConfig:t},(0,c.r)(this,"config-changed",{config:this._config})}},{kind:"method",key:"_editDetailElement",value:function(e){this._subElementEditorConfig=e.detail.subElementConfig}},{kind:"method",key:"_goBack",value:function(){this._subElementEditorConfig=void 0}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"show_current_as_primary"===e.name?this.hass.localize("ui.panel.lovelace.editor.card.humidifier.show_current_as_primary"):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}},{kind:"get",static:!0,key:"styles",value:function(){return o.AH`ha-form{display:block;margin-bottom:24px}`}}]}}),o.WF);i()}catch(e){i(e)}}))},56124:(e,t,a)=>{a.d(t,{H:()=>n});var i=a(66419);const n=(0,i.Ik)({type:(0,i.Yj)(),view_layout:(0,i.bz)(),layout_options:(0,i.bz)(),visibility:(0,i.bz)()})}};
//# sourceMappingURL=94233.3Fa0SBRhN1g.js.map