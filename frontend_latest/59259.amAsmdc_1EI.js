export const id=59259;export const ids=[59259];export const modules={51853:(e,t,a)=>{a.d(t,{A:()=>n});const i=e=>e<10?`0${e}`:e;function n(e){const t=Math.floor(e/3600),a=Math.floor(e%3600/60),n=Math.floor(e%3600%60);return t>0?`${t}:${i(a)}:${i(n)}`:a>0?`${a}:${i(n)}`:n>0?""+n:null}},10252:(e,t,a)=>{a.d(t,{n:()=>s,v:()=>o});a(89655),a(24545),a(51855),a(82130),a(31743),a(22328),a(4959),a(62435);var i=a(65459),n=a(9883);const o={alarm_control_panel:["armed_away","armed_custom_bypass","armed_home","armed_night","armed_vacation","arming","disarmed","disarming","pending","triggered"],automation:["on","off"],binary_sensor:["on","off"],button:[],calendar:["on","off"],camera:["idle","recording","streaming"],cover:["closed","closing","open","opening"],device_tracker:["home","not_home"],fan:["on","off"],humidifier:["on","off"],input_boolean:["on","off"],input_button:[],lawn_mower:["error","paused","mowing","returning","docked"],light:["on","off"],lock:["jammed","locked","locking","unlocked","unlocking","opening","open"],media_player:["off","on","idle","playing","paused","standby","buffering"],person:["home","not_home"],plant:["ok","problem"],remote:["on","off"],scene:[],schedule:["on","off"],script:["on","off"],siren:["on","off"],sun:["above_horizon","below_horizon"],switch:["on","off"],timer:["active","idle","paused"],update:["on","off"],vacuum:["cleaning","docked","error","idle","paused","returning"],valve:["closed","closing","open","opening"],weather:["clear-night","cloudy","exceptional","fog","hail","lightning-rainy","lightning","partlycloudy","pouring","rainy","snowy-rainy","snowy","sunny","windy-variant","windy"]},r={alarm_control_panel:{code_format:["number","text"]},binary_sensor:{device_class:["battery","battery_charging","co","cold","connectivity","door","garage_door","gas","heat","light","lock","moisture","motion","moving","occupancy","opening","plug","power","presence","problem","running","safety","smoke","sound","tamper","update","vibration","window"]},button:{device_class:["restart","update"]},camera:{frontend_stream_type:["hls","web_rtc"]},climate:{hvac_action:["off","idle","preheating","defrosting","heating","cooling","drying","fan"]},cover:{device_class:["awning","blind","curtain","damper","door","garage","gate","shade","shutter","window"]},device_tracker:{source_type:["bluetooth","bluetooth_le","gps","router"]},fan:{direction:["forward","reverse"]},humidifier:{device_class:["humidifier","dehumidifier"],action:["off","idle","humidifying","drying"]},media_player:{device_class:["tv","speaker","receiver"],media_content_type:["album","app","artist","channel","channels","composer","contibuting_artist","episode","game","genre","image","movie","music","playlist","podcast","season","track","tvshow","url","video"],repeat:["off","one","all"]},number:{device_class:["temperature"]},sensor:{device_class:["apparent_power","aqi","battery","carbon_dioxide","carbon_monoxide","current","date","duration","energy","frequency","gas","humidity","illuminance","monetary","nitrogen_dioxide","nitrogen_monoxide","nitrous_oxide","ozone","ph","pm1","pm10","pm25","power_factor","power","pressure","reactive_power","signal_strength","sulphur_dioxide","temperature","timestamp","volatile_organic_compounds","volatile_organic_compounds_parts","voltage","volume_flow_rate"],state_class:["measurement","total","total_increasing"]},switch:{device_class:["outlet","switch"]},update:{device_class:["firmware"]},water_heater:{away_mode:["on","off"]}},s=(e,t=void 0)=>{const a=(0,i.t)(e),s=[];switch(!t&&a in o?s.push(...o[a]):t&&a in r&&t in r[a]&&s.push(...r[a][t]),a){case"climate":t?"fan_mode"===t?s.push(...e.attributes.fan_modes):"preset_mode"===t?s.push(...e.attributes.preset_modes):"swing_mode"===t&&s.push(...e.attributes.swing_modes):s.push(...e.attributes.hvac_modes);break;case"device_tracker":case"person":t||s.push("home","not_home");break;case"event":"event_type"===t&&s.push(...e.attributes.event_types);break;case"fan":"preset_mode"===t&&s.push(...e.attributes.preset_modes);break;case"humidifier":"mode"===t&&s.push(...e.attributes.available_modes);break;case"input_select":case"select":t||s.push(...e.attributes.options);break;case"light":"effect"===t&&e.attributes.effect_list?s.push(...e.attributes.effect_list):"color_mode"===t&&e.attributes.supported_color_modes&&s.push(...e.attributes.supported_color_modes);break;case"media_player":"sound_mode"===t?s.push(...e.attributes.sound_mode_list):"source"===t&&s.push(...e.attributes.source_list);break;case"remote":"current_activity"===t&&s.push(...e.attributes.activity_list);break;case"sensor":t||"enum"!==e.attributes.device_class||s.push(...e.attributes.options);break;case"vacuum":"fan_speed"===t&&s.push(...e.attributes.fan_speed_list);break;case"water_heater":t&&"operation_mode"!==t||s.push(...e.attributes.operation_list)}return t||s.push(...n.s7),[...new Set(s)]}},35212:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var i=a(36312),n=a(68689),o=a(50289),r=a(29818),s=a(85323),l=a(99890),c=a(51853),d=a(65459),h=a(19244),u=a(10252),p=a(57636),g=a(9883),m=a(2851),b=(a(20366),a(70857),e([p]));p=(b.then?(await b)():b)[0];const _="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",f=["alarm_control_panel","device_tracker","person"],v=(e,t)=>(0,l.g)(f)(e)&&(0,l.g)(u.v[e])(t)?`${e}.${t}`:null;(0,i.A)([(0,r.EM)("ha-state-label-badge")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"name",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"image",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"showName",value:()=>!1},{kind:"field",decorators:[(0,r.wk)()],key:"_timerTimeRemaining",value:void 0},{kind:"field",key:"_connected",value:void 0},{kind:"field",key:"_updateRemaining",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,n.A)(a,"connectedCallback",this,3)([]),this._connected=!0,this.startInterval(this.state)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.A)(a,"disconnectedCallback",this,3)([]),this._connected=!1,this.clearInterval()}},{kind:"method",key:"render",value:function(){const e=this.state;if(!e)return o.qy` <ha-label-badge class="warning" label="${this.hass.localize("state_badge.default.error")}" description="${this.hass.localize("state_badge.default.entity_not_found")}"> <ha-svg-icon .path="${_}"></ha-svg-icon> </ha-label-badge> `;const t=(0,d.t)(e),a=this.hass?.entities[e.entity_id],i=this.icon||this._computeShowIcon(t,e,a),n=this.icon?"":this.image?this.image:e.attributes.entity_picture_local||e.attributes.entity_picture,r=n||i?void 0:this._computeValue(t,e,a);return o.qy` <ha-label-badge class="${(0,s.H)({[t]:!0,"has-unit_of_measurement":"unit_of_measurement"in e.attributes})}" .image="${n}" .label="${this._computeLabel(t,e,this._timerTimeRemaining)}" .description="${this.showName?this.name??(0,h.u)(e):void 0}"> ${!n&&i?o.qy`<ha-state-icon .icon="${this.icon}" .stateObj="${e}" .hass="${this.hass}"></ha-state-icon>`:""} ${!r||n||i?"":o.qy`<span class="${r&&r.length>4?"big":""}">${r}</span>`} </ha-label-badge> `}},{kind:"method",key:"updated",value:function(e){(0,n.A)(a,"updated",this,3)([e]),this._connected&&e.has("state")&&this.startInterval(this.state)}},{kind:"method",key:"_computeValue",value:function(e,t,a){switch(e){case"alarm_control_panel":case"binary_sensor":case"device_tracker":case"person":case"scene":case"sun":case"timer":return null;case"sensor":if("moon"===a?.platform)return null;default:return t.state===g.HV||t.state===g.Hh?"—":(0,p.x)(t)?(0,p.ZV)(t.state,this.hass.locale,(0,p.ZQ)(t,a)):this.hass.formatEntityState(t)}}},{kind:"method",key:"_computeShowIcon",value:function(e,t,a){if(t.state===g.Hh)return!1;switch(e){case"alarm_control_panel":case"binary_sensor":case"device_tracker":case"person":case"scene":case"sun":case"timer":return!0;case"sensor":return"moon"===a?.platform;default:return!1}}},{kind:"method",key:"_computeLabel",value:function(e,t,a=0){if((0,g.g0)(t.state))return this.hass.localize(`state_badge.default.${t.state}`);const i=v(e,t.state);return i?this.hass.localize(`state_badge.${i}`):"person"===e||"device_tracker"===e?t.state:"timer"===e?(0,c.A)(a):t.attributes.unit_of_measurement||null}},{kind:"method",key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=void 0)}))},{kind:"method",key:"startInterval",value:function(e){this.clearInterval(),e&&"timer"===(0,d.t)(e)&&(this.calculateTimerRemaining(e),"active"===e.state&&(this._updateRemaining=window.setInterval((()=>this.calculateTimerRemaining(this.state)),1e3)))}},{kind:"method",key:"calculateTimerRemaining",value:function(e){this._timerTimeRemaining=(0,m.ls)(e)}},{kind:"get",static:!0,key:"styles",value:function(){return o.AH`:host{cursor:pointer}.big{font-size:70%}ha-label-badge{--ha-label-badge-color:var(--label-badge-red)}ha-label-badge.has-unit_of_measurement{--ha-label-badge-label-text-transform:none}ha-label-badge.binary_sensor{--ha-label-badge-color:var(--label-badge-blue)}.red{--ha-label-badge-color:var(--label-badge-red)}.blue{--ha-label-badge-color:var(--label-badge-blue)}.green{--ha-label-badge-color:var(--label-badge-green)}.yellow{--ha-label-badge-color:var(--label-badge-yellow)}.grey{--ha-label-badge-color:var(--label-badge-grey)}.warning{--ha-label-badge-color:var(--label-badge-yellow)}`}}]}}),o.WF);t()}catch(e){t(e)}}))},2851:(e,t,a)=>{a.d(t,{PF:()=>c,CR:()=>o,pZ:()=>s,kL:()=>n,ls:()=>l,r9:()=>r});a(16891);var i=a(51853);const n=e=>e.callWS({type:"timer/list"}),o=(e,t)=>e.callWS({type:"timer/create",...t}),r=(e,t,a)=>e.callWS({type:"timer/update",timer_id:t,...a}),s=(e,t)=>e.callWS({type:"timer/delete",timer_id:t}),l=e=>{if(!e.attributes.remaining)return;let t=function(e){const t=e.split(":").map(Number);return 3600*t[0]+60*t[1]+t[2]}(e.attributes.remaining);if("active"===e.state){const a=(new Date).getTime(),i=new Date(e.last_changed).getTime();t=Math.max(t-(a-i)/1e3,0)}return t},c=(e,t,a)=>{if(!t)return null;if("idle"===t.state||0===a)return e.formatEntityState(t);let n=(0,i.A)(a||0)||"0";return"paused"===t.state&&(n=`${n} (${e.formatEntityState(t)})`),n}},8492:(e,t,a)=>{a.d(t,{P8:()=>x,PV:()=>w,rU:()=>k,x2:()=>$});var i=a(36312),n=a(50289),o=a(29818),r=a(85323),s=a(10977),l=a(55165),c=a(94100),d=a(86188),h=a(45253),u=a(213),p=a(65459),g=a(46875),m=a(95239),b=(a(23562),a(70857),a(88400),a(88800)),_=a(25319),f=a(18102),v=a(63582),y=a(562);const k=["minimal","standard","complete"],w={type:"entity",show_name:!1,show_state:!0,show_icon:!0},x=e=>{const t={...e};return e.display_type&&(void 0===e.show_name&&"complete"===e.display_type&&(t.show_name=!0),void 0===e.show_state&&"minimal"===e.display_type&&(t.show_state=!1),delete t.display_type),t};let $=(0,i.A)([(0,o.EM)("hui-entity-badge")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([a.e(89053),a.e(70612),a.e(9242),a.e(65979),a.e(75330)]).then(a.bind(a,75330)),document.createElement("hui-entity-badge-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,a){return{type:"entity",entity:(0,f.B)(e,1,t,a,["sensor","light","switch"])[0]||""}}},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.wk)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config={...w,...x(e)}}},{kind:"get",key:"hasAction",value:function(){return!this._config?.tap_action||(0,y.h)(this._config?.tap_action)||(0,y.h)(this._config?.hold_action)||(0,y.h)(this._config?.double_tap_action)}},{kind:"field",key:"_computeStateColor",value:()=>(0,c.A)(((e,t)=>{if(t)return(0,g.a)(e)?(0,d.M)(t):void 0;if("light"===(0,u.m)(e.entity_id)&&e.attributes.rgb_color){const t=(0,h.bi)(e.attributes.rgb_color);return t[1]<.4&&(t[1]<.1?t[2]=225:t[1]=.4),(0,h.v2)((0,h.hT)(t))}return(0,m.Se)(e)}))},{kind:"method",key:"_getImageUrl",value:function(e){const t=e.attributes.entity_picture_local||e.attributes.entity_picture;if(!t)return;let a=this.hass.hassUrl(t);return"camera"===(0,p.t)(e)&&(a=(0,b.su)(a,32,32)),a}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return n.s6;const e=this._config.entity,t=e?this.hass.states[e]:void 0;if(!t)return n.qy` <div class="badge error"> <ha-svg-icon .hass="${this.hass}" .path="${"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}"></ha-svg-icon> <span class="info"> <span class="label">${e}</span> <span class="content"> ${this.hass.localize("ui.badge.entity.not_found")} </span> </span> </div> `;const a=(0,g.a)(t),i={"--badge-color":this._computeStateColor(t,this._config.color)},o=n.qy` <state-display .stateObj="${t}" .hass="${this.hass}" .content="${this._config.state_content}" .name="${this._config.name}"> </state-display> `,c=this._config.name||t.attributes.friendly_name,d=this._config.show_state,h=this._config.show_name,u=this._config.show_icon,p=this._config.show_entity_picture?this._getImageUrl(t):void 0,m=d&&h?c:void 0,b=d?o:h?c:void 0;return n.qy` <div style="${(0,l.W)(i)}" class="badge ${(0,r.H)({active:a,"no-info":!d&&!h,"no-icon":!u})}" @action="${this._handleAction}" .actionHandler="${(0,_.T)({hasHold:(0,y.h)(this._config.hold_action),hasDoubleClick:(0,y.h)(this._config.double_tap_action)})}" role="${(0,s.J)(this.hasAction?"button":void 0)}" tabindex="${(0,s.J)(this.hasAction?"0":void 0)}"> <ha-ripple .disabled="${!this.hasAction}"></ha-ripple> ${u?p?n.qy`<img src="${p}" aria-hidden>`:n.qy` <ha-state-icon .hass="${this.hass}" .stateObj="${t}" .icon="${this._config.icon}"></ha-state-icon> `:n.s6} ${b?n.qy` <span class="info"> ${m?n.qy`<span class="label">${c}</span>`:n.s6} <span class="content">${b}</span> </span> `:n.s6} </div> `}},{kind:"method",key:"_handleAction",value:function(e){(0,v.$)(this,this.hass,this._config,e.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return n.AH`:host{--badge-color:var(--state-inactive-color);-webkit-tap-highlight-color:transparent}.badge.error{--badge-color:var(--red-color)}.badge{position:relative;--ha-ripple-color:var(--badge-color);--ha-ripple-hover-opacity:0.04;--ha-ripple-pressed-opacity:0.12;transition:box-shadow 180ms ease-in-out,border-color 180ms ease-in-out;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:8px;height:var(--ha-badge-size,36px);min-width:var(--ha-badge-size,36px);padding:0px 8px;box-sizing:border-box;width:auto;border-radius:var(--ha-badge-border-radius,calc(var(--ha-badge-size,36px)/ 2));background:var(--ha-card-background,var(--card-background-color,#fff));-webkit-backdrop-filter:var(--ha-card-backdrop-filter,none);backdrop-filter:var(--ha-card-backdrop-filter,none);border-width:var(--ha-card-border-width,1px);box-shadow:var(--ha-card-box-shadow,none);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));--mdc-icon-size:18px;text-align:center;font-family:Roboto}.badge:focus-visible{--shadow-default:var(--ha-card-box-shadow, 0 0 0 0 transparent);--shadow-focus:0 0 0 1px var(--badge-color);border-color:var(--badge-color);box-shadow:var(--shadow-default),var(--shadow-focus)}[role=button],button{cursor:pointer}[role=button]:focus,button:focus{outline:0}.badge.active{--badge-color:var(--primary-color)}.info{display:flex;flex-direction:column;align-items:flex-start;padding-right:4px;padding-inline-end:4px;padding-inline-start:initial}.label{font-size:10px;font-style:normal;font-weight:500;line-height:10px;letter-spacing:.1px;color:var(--secondary-text-color)}.content{font-size:12px;font-style:normal;font-weight:500;line-height:16px;letter-spacing:.1px;color:var(--primary-text-color)}ha-state-icon,ha-svg-icon{color:var(--badge-color);line-height:0}img{width:30px;height:30px;border-radius:50%;object-fit:cover;overflow:hidden}.badge.no-info{padding:0}.badge:not(.no-icon) img{margin-left:-6px;margin-inline-start:-6px;margin-inline-end:initial}.badge.no-icon .info{padding-right:4px;padding-left:4px;padding-inline-end:4px;padding-inline-start:4px}`}}]}}),n.WF)},34308:(e,t,a)=>{a.d(t,{YH:()=>s,hZ:()=>r,ww:()=>l});a(24545),a(51855),a(82130),a(31743),a(22328),a(4959),a(62435),a(8492);var i=a(95297);const n=new Set(["error","entity"]),o={"entity-filter":()=>a.e(56151).then(a.bind(a,56151)),"state-label":()=>a.e(75185).then(a.bind(a,19947))},r=e=>(0,i.Vd)("badge",e,n,o,void 0,"entity"),s=e=>(0,i.Ue)("badge",e,n,o,void 0,"entity"),l=e=>(0,i.gh)(e,"badge",n,o)}};
//# sourceMappingURL=59259.amAsmdc_1EI.js.map