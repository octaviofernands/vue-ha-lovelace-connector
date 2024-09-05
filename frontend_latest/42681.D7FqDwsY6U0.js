export const id=42681;export const ids=[42681,57540];export const modules={10469:(e,t,n)=>{n.d(t,{$:()=>o});n(89655);const o=(e,t)=>{const n={};for(const o of e){const e=t(o);e in n?n[e].push(o):n[e]=[o]}return n}},47076:(e,t,n)=>{n.a(e,(async(e,o)=>{try{n.d(t,{AN:()=>P,B2:()=>A,BV:()=>S,DR:()=>R,E$:()=>N,GW:()=>M,KJ:()=>I,Q4:()=>D,RB:()=>$,WN:()=>C,X4:()=>X,_d:()=>U,al:()=>L,bs:()=>W,c:()=>z,gv:()=>Z,m7:()=>x,oU:()=>E,tb:()=>q,uh:()=>T,yM:()=>V});n(89655),n(253),n(54846),n(16891);var i=n(31195),s=n(77301),r=n(91103),a=n(39902),c=n(72730),l=n(61310),u=n(31293),g=n(63165),f=n(60132),_=n(83324),h=n(84280),d=n(94100),y=n(78691),m=n(41924),p=n(10469),v=n(31265),k=n(4826),b=e([y,m]);[y,m]=b.then?(await b)():b;const w=[],x=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),$=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),T=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),D=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),E=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),z=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),M=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),S=e=>e.callWS({type:"energy/info"}),A=async e=>(await e.loadBackendTranslation("issues","energy"),e.callWS({type:"energy/validate"})),W=e=>e.callWS({type:"energy/get_prefs"}),C=async(e,t)=>{const n=e.callWS({type:"energy/save_prefs",...t});return O(e),n},H=async(e,t,n,o,i,s="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:i?.toISOString(),energy_statistic_ids:n,co2_statistic_id:o,period:s}),N=e=>(0,p.$)(e.energy_sources,(e=>e.type)),P=(e,t,n)=>{const o=[];for(const i of e.energy_sources)if(!n||n.includes(i.type))if("solar"!==i.type)if("gas"!==i.type&&"water"!==i.type)if("battery"!==i.type){for(const e of i.flow_from){o.push(e.stat_energy_from),e.stat_cost&&o.push(e.stat_cost);const n=t.cost_sensors[e.stat_energy_from];n&&o.push(n)}for(const e of i.flow_to){o.push(e.stat_energy_to),e.stat_compensation&&o.push(e.stat_compensation);const n=t.cost_sensors[e.stat_energy_to];n&&o.push(n)}}else o.push(i.stat_energy_from),o.push(i.stat_energy_to);else{o.push(i.stat_energy_from),i.stat_cost&&o.push(i.stat_cost);const e=t.cost_sensors[i.stat_energy_from];e&&o.push(e)}else o.push(i.stat_energy_from);return n&&!n.includes("device")||o.push(...e.device_consumption.map((e=>e.stat_consumption))),o},F=async(e,t,n,o,g)=>{const[f,_]=await Promise.all([(0,v.VN)(e,{domain:"co2signal"}),S(e)]),h=f.length?f[0]:void 0;let d;if(h)for(const t of Object.values(e.entities)){if("co2signal"!==t.platform)continue;const n=e.states[t.entity_id];if(n&&"%"===n.attributes.unit_of_measurement){d=n.entity_id;break}}const m=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)m.push(t.stat_energy_from);const p=P(t,_,["grid","solar","battery","gas","device"]),b=P(t,_,["water"]),w=[...p,...b],x=(0,i.c)(o||new Date,n),$=x>35?"month":x>2?"day":"hour",T=e.config.unit_system.length||"",D={energy:"kWh",volume:"km"===T?"m³":"ft³"},E={volume:"km"===T?"L":"gal"},z=p.length?(0,k.sz)(e,n,o,p,$,D,["change"]):{},M=b.length?(0,k.sz)(e,n,o,b,$,E,["change"]):{};let A,W,C,N,F,O={},j={};g&&(W=(0,y.xo)(n,s.e,e.locale,e.config)&&(0,y.xo)(o||new Date,r.c,e.locale,e.config)?(0,y.ol)(n,a.P,e.locale,e.config,-(0,y.EO)(o||new Date,n,c.W,e.locale,e.config)-1):(0,y.ol)(n,l.f,e.locale,e.config,-1*(x+1)),C=(0,u.A)(n,-1),p.length&&(O=(0,k.sz)(e,W,C,p,$,D,["change"])),b.length&&(j=(0,k.sz)(e,W,C,b,$,E,["change"]))),void 0!==d&&(N=H(e,n,m,d,o,x>35?"month":x>2?"day":"hour"),g&&(F=H(e,W,m,d,C,x>35?"month":x>2?"day":"hour")));const q={},L=w.length?(0,k.Wr)(e,w):[],[B,U,I,V,X,Z,Q]=await Promise.all([z,M,O,j,L,N,F]),R={...B,...U};g&&(A={...I,...V}),w.length&&X.forEach((e=>{q[e.statistic_id]=e}));return{start:n,end:o,startCompare:W,endCompare:C,info:_,prefs:t,stats:R,statsMetadata:q,statsCompare:A,co2SignalConfigEntry:h,co2SignalEntity:d,fossilEnergyConsumption:Z,fossilEnergyConsumptionCompare:Q}},O=e=>{w.forEach((t=>{const n=q(e,{key:t});n.clearPrefs(),n._active&&n.refresh()}))},j=e=>{if(e._refreshTimeout&&clearTimeout(e._refreshTimeout),e._active&&(!e.end||e.end>new Date)){const t=new Date;t.getMinutes()>=20&&t.setHours(t.getHours()+1),t.setMinutes(20,0,0),e._refreshTimeout=window.setTimeout((()=>e.refresh()),t.getTime()-Date.now())}},q=(e,t={})=>{let n="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");n=`_${t.key}`}if(e.connection[n])return e.connection[n];w.push(t.key);const o=(0,h.X)(e.connection,n,(async()=>(o.prefs||(o.prefs=await W(e)),j(o),F(e,o.prefs,o.start,o.end,o.compare)))),i=o.subscribe;o.subscribe=e=>{const t=i(e);return o._active++,void 0===o._refreshTimeout&&j(o),()=>{o._active--,o._active<1&&(clearTimeout(o._refreshTimeout),o._refreshTimeout=void 0),t()}},o._active=0,o.prefs=t.prefs;const s=new Date,r=(0,m.LW)(s,e.locale,e.config).split(":")[0];o.start=(0,y.ol)("0"===r?(0,l.f)(s,-1):s,g.o,e.locale,e.config),o.end=(0,y.ol)("0"===r?(0,l.f)(s,-1):s,f.D,e.locale,e.config);const a=()=>{o._updatePeriodTimeout=window.setTimeout((()=>{o.start=(0,y.ol)(new Date,g.o,e.locale,e.config),o.end=(0,y.ol)(new Date,f.D,e.locale,e.config),a()}),(0,_.L)((0,y.ol)(s,f.D,e.locale,e.config),1).getTime()-Date.now())};return a(),o.clearPrefs=()=>{o.prefs=void 0},o.setPeriod=(t,n)=>{o.start=t,o.end=n,o.start.getTime()!==(0,y.ol)(new Date,g.o,e.locale,e.config).getTime()||o.end?.getTime()!==(0,y.ol)(new Date,f.D,e.locale,e.config).getTime()||o._updatePeriodTimeout?o._updatePeriodTimeout&&(clearTimeout(o._updatePeriodTimeout),o._updatePeriodTimeout=void 0):a()},o.setCompare=e=>{o.compare=e},o},L=e=>e.callWS({type:"energy/solar_forecast"}),B=["volume","energy"],U=(e,t={},n)=>{for(const o of e.energy_sources){if("gas"!==o.type)continue;if(n&&n===o.stat_energy_from)continue;const e=t[o.stat_energy_from];if(B.includes(e?.unit_class))return e.unit_class}},I=(e,t,n={})=>{const o=U(t,n);if(void 0!==o)return"energy"===o?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},V=e=>"km"===e.config.unit_system.length?"L":"gal",X="/docs/energy/faq/#troubleshooting-missing-entities",Z=(0,d.A)((e=>({summedData:Q(e),compareSummedData:e.statsCompare?Q(e,!0):void 0}))),Q=(e,t)=>{const n={};for(const t of e.prefs.energy_sources)if("solar"!==t.type)if("battery"!==t.type){if("grid"===t.type){for(const e of t.flow_from)n.from_grid?n.from_grid.push(e.stat_energy_from):n.from_grid=[e.stat_energy_from];for(const e of t.flow_to)n.to_grid?n.to_grid.push(e.stat_energy_to):n.to_grid=[e.stat_energy_to]}}else n.to_battery?(n.to_battery.push(t.stat_energy_to),n.from_battery.push(t.stat_energy_from)):(n.to_battery=[t.stat_energy_to],n.from_battery=[t.stat_energy_from]);else n.solar?n.solar.push(t.stat_energy_from):n.solar=[t.stat_energy_from];const o={};return Object.entries(n).forEach((([n,i])=>{const s={},r={};i.forEach((n=>{const o=t?e.statsCompare[n]:e.stats[n];if(!o)return;o.forEach((e=>{if(null===e.change||void 0===e.change)return;const t=e.change;s[e.start]=e.start in s?s[e.start]+t:t})),r[n]={}})),o[n]=s})),o},R=(0,d.A)(((e,t)=>({consumption:J(e),compareConsumption:t?J(t):void 0}))),J=e=>{const t={total:{}};return Object.keys(e).forEach((n=>{Object.keys(e[n]).forEach((n=>{if(void 0===t.total[n]){const o=(e.from_grid?.[n]||0)+(e.solar?.[n]||0)+(e.from_battery?.[n]||0)-(e.to_grid?.[n]||0)-(e.to_battery?.[n]||0);t.total[n]=o}}))})),t};o()}catch(e){o(e)}}))},42681:(e,t,n)=>{n.a(e,(async(e,o)=>{try{n.r(t);var i=n(36312),s=(n(16891),n(7986),n(50289)),r=n(29818),a=n(55165),c=(n(13082),n(43106)),l=(n(88400),n(47076)),u=n(4826),g=n(20712),f=n(57540),_=n(7934),h=e([c,l,f]);[c,l,f]=h.then?(await h)():h;const d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",y={maximumFractionDigits:0};(0,i.A)([(0,r.EM)("hui-energy-solar-consumed-gauge-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){return[(0,l.tb)(this.hass,{key:this._config?.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,_.xP)(this,e)||e.size>1||!e.has("hass")}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return s.s6;if(!this._data)return s.qy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;const e=this._data.prefs,t=(0,l.E$)(e);if(!t.solar)return s.s6;const n=(0,u.gF)(this._data.stats,t.solar.map((e=>e.stat_energy_from)))||0,o=(0,u.gF)(this._data.stats,t.grid[0].flow_to.map((e=>e.stat_energy_to)));let i;if(null!==o&&n){i=Math.max(0,n-o)/n*100}return s.qy` <ha-card> ${void 0!==i?s.qy` <ha-svg-icon id="info" .path="${d}"></ha-svg-icon> <simple-tooltip animation-delay="0" for="info" position="left"> <span> ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used")} <br><br> ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used_charge_home_bat")} </span> </simple-tooltip> <ha-gauge min="0" max="100" .value="${i}" label="%" .formatOptions="${y}" .locale="${this.hass.locale}" style="${(0,a.W)({"--gauge-color":this._computeSeverity(i)})}"></ha-gauge> <div class="name"> ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_energy")} </div> `:0===n?this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.not_produced_solar_energy"):this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_could_not_calc")} </ha-card> `}},{kind:"method",key:"_computeSeverity",value:function(e){return e>75?f.severityMap.green:e<50?f.severityMap.yellow:f.severityMap.normal}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`ha-card{height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-gauge{width:100%;max-width:250px;direction:ltr}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}ha-svg-icon{position:absolute;right:4px;inset-inline-end:4px;inset-inline-start:initial;top:4px;color:var(--secondary-text-color)}simple-tooltip>span{font-size:12px;line-height:12px}simple-tooltip{width:80%;max-width:250px;top:8px!important}`}}]}}),(0,g.E)(s.WF));o()}catch(e){o(e)}}))},57540:(e,t,n)=>{n.a(e,(async(e,o)=>{try{n.r(t),n.d(t,{DEFAULT_MAX:()=>T,DEFAULT_MIN:()=>$,severityMap:()=>D});var i=n(36312),s=n(68689),r=(n(16891),n(50289)),a=n(29818),c=n(10977),l=n(85323),u=n(55165),g=n(38962),f=n(19244),_=n(26175),h=n(57636),d=(n(13082),n(43106)),y=n(9883),m=n(25319),p=n(18102),v=n(63582),k=n(562),b=n(7934),w=n(46645),x=e([h,d]);[h,d]=x.then?(await x)():x;const $=0,T=100,D={red:"var(--error-color)",green:"var(--success-color)",yellow:"var(--warning-color)",normal:"var(--info-color)"};(0,i.A)([(0,a.EM)("hui-gauge-card")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await n.e(59149).then(n.bind(n,59149)),document.createElement("hui-gauge-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{type:"gauge",entity:(0,p.B)(e,1,t,n,["counter","input_number","number","sensor"],(e=>!isNaN(Number(e.state))))[0]||""}}},{kind:"field",decorators:[(0,a.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.wk)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");if(!(0,_.n)(e.entity))throw new Error("Invalid entity");this._config={min:$,max:T,...e}}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return r.s6;const e=this.hass.states[this._config.entity];if(!e)return r.qy` <hui-warning> ${(0,w.j)(this.hass,this._config.entity)} </hui-warning> `;const t=Number(e.state);if(e.state===y.Hh)return r.qy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_unavailable",{entity:this._config.entity})}</hui-warning> `;if(isNaN(t))return r.qy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric",{entity:this._config.entity})}</hui-warning> `;const n=this._config.name??(0,f.u)(e);return r.qy` <ha-card class="${(0,l.H)({action:(0,k.A)(this._config)})}" @action="${this._handleAction}" .actionHandler="${(0,m.T)({hasHold:(0,k.h)(this._config.hold_action),hasDoubleClick:(0,k.h)(this._config.double_tap_action)})}" tabindex="${(0,c.J)(!this._config.tap_action||(0,k.h)(this._config.tap_action)?"0":void 0)}"> <ha-gauge .min="${this._config.min}" .max="${this._config.max}" .value="${e.state}" .formatOptions="${(0,h.ZQ)(e,this.hass.entities[e.entity_id])}" .locale="${this.hass.locale}" .label="${this._config.unit||this.hass?.states[this._config.entity].attributes.unit_of_measurement||""}" style="${(0,u.W)({"--gauge-color":this._computeSeverity(t)})}" .needle="${this._config.needle}" .levels="${this._config.needle?this._severityLevels():void 0}"></ha-gauge> <div class="name" .title="${n}">${n}</div> </ha-card> `}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,b.LX)(this,e)}},{kind:"method",key:"updated",value:function(e){if((0,s.A)(o,"updated",this,3)([e]),!this._config||!this.hass)return;const t=e.get("hass"),n=e.get("_config");t&&n&&t.themes===this.hass.themes&&n.theme===this._config.theme||(0,g.Q)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_computeSeverity",value:function(e){if(this._config.needle)return;let t=this._config.segments;if(t){t=[...t].sort(((e,t)=>e.from-t.from));for(let n=0;n<t.length;n++){const o=t[n];if(o&&e>=o.from&&(n+1===t.length||e<t[n+1]?.from))return o.color}return D.normal}const n=this._config.severity;if(!n)return D.normal;const o=Object.keys(n).map((e=>[e,n[e]]));for(const e of o)if(null==D[e[0]]||isNaN(e[1]))return D.normal;return o.sort(((e,t)=>e[1]-t[1])),e>=o[0][1]&&e<o[1][1]?D[o[0][0]]:e>=o[1][1]&&e<o[2][1]?D[o[1][0]]:e>=o[2][1]?D[o[2][0]]:D.normal}},{kind:"method",key:"_severityLevels",value:function(){const e=this._config.segments;if(e)return e.map((e=>({level:e?.from,stroke:e?.color,label:e?.label})));const t=this._config.severity;if(!t)return[{level:0,stroke:D.normal}];return Object.keys(t).map((e=>({level:t[e],stroke:D[e]})))}},{kind:"method",key:"_handleAction",value:function(e){(0,v.$)(this,this.hass,this._config,e.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return r.AH`ha-card{height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-card.action{cursor:pointer}ha-card:focus{outline:0}ha-gauge{width:100%;max-width:250px}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}`}}]}}),r.WF);o()}catch(e){o(e)}}))},24226:(e,t,n)=>{n.d(t,{z:()=>i});var o=n(30429);function i(e,t){const n=(0,o.a)(e),i=(0,o.a)(t),s=n.getTime()-i.getTime();return s<0?-1:s>0?1:s}},72730:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(24226),i=n(30429);function s(e,t){const n=(0,i.a)(e),o=(0,i.a)(t);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}var r=n(91103);function a(e,t){const n=(0,i.a)(e),a=(0,i.a)(t),c=(0,o.z)(n,a),l=Math.abs(s(n,a));let u;if(l<1)u=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-c*l);let t=(0,o.z)(n,a)===-c;(0,r.c)((0,i.a)(e))&&1===l&&1===(0,o.z)(e,a)&&(t=!1),u=c*(l-Number(t))}return 0===u?0:u}},77301:(e,t,n)=>{n.d(t,{e:()=>i});var o=n(30429);function i(e){return 1===(0,o.a)(e).getDate()}},91103:(e,t,n)=>{n.d(t,{c:()=>r});var o=n(60132),i=n(12152),s=n(30429);function r(e){const t=(0,s.a)(e);return+(0,o.D)(t)==+(0,i.p)(t)}}};
//# sourceMappingURL=42681.D7FqDwsY6U0.js.map