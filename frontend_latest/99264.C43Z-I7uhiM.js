export const id=99264;export const ids=[99264];export const modules={7127:(t,e,o)=>{o.d(e,{p:()=>s});const n=[" ",": "],s=(t,e)=>{const o=t.toLowerCase();for(const s of n){const n=`${e}${s}`;if(o.startsWith(n)){const e=t.substring(n.length);if(e.length)return r(e.substr(0,e.indexOf(" ")))?e:e[0].toUpperCase()+e.slice(1)}}},r=t=>t.toLowerCase()!==t},10469:(t,e,o)=>{o.d(e,{$:()=>n});o(89655);const n=(t,e)=>{const o={};for(const n of t){const t=e(n);t in o?o[t].push(n):o[t]=[n]}return o}},47076:(t,e,o)=>{o.a(t,(async(t,n)=>{try{o.d(e,{AN:()=>L,B2:()=>j,BV:()=>S,DR:()=>K,E$:()=>z,GW:()=>O,KJ:()=>U,Q4:()=>D,RB:()=>T,WN:()=>M,X4:()=>q,_d:()=>R,al:()=>I,bs:()=>P,c:()=>x,gv:()=>H,m7:()=>k,oU:()=>W,tb:()=>F,uh:()=>C,yM:()=>Y});o(89655),o(253),o(54846),o(16891);var s=o(31195),r=o(77301),i=o(91103),a=o(39902),c=o(72730),l=o(61310),u=o(31293),f=o(63165),y=o(60132),_=o(83324),g=o(84280),d=o(94100),p=o(78691),m=o(41924),h=o(10469),v=o(31265),b=o(4826),w=t([p,m]);[p,m]=w.then?(await w)():w;const E=[],k=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),T=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),C=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),D=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),W=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),x=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),O=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),S=t=>t.callWS({type:"energy/info"}),j=async t=>(await t.loadBackendTranslation("issues","energy"),t.callWS({type:"energy/validate"})),P=t=>t.callWS({type:"energy/get_prefs"}),M=async(t,e)=>{const o=t.callWS({type:"energy/save_prefs",...e});return V(t),o},$=async(t,e,o,n,s,r="hour")=>t.callWS({type:"energy/fossil_energy_consumption",start_time:e.toISOString(),end_time:s?.toISOString(),energy_statistic_ids:o,co2_statistic_id:n,period:r}),z=t=>(0,h.$)(t.energy_sources,(t=>t.type)),L=(t,e,o)=>{const n=[];for(const s of t.energy_sources)if(!o||o.includes(s.type))if("solar"!==s.type)if("gas"!==s.type&&"water"!==s.type)if("battery"!==s.type){for(const t of s.flow_from){n.push(t.stat_energy_from),t.stat_cost&&n.push(t.stat_cost);const o=e.cost_sensors[t.stat_energy_from];o&&n.push(o)}for(const t of s.flow_to){n.push(t.stat_energy_to),t.stat_compensation&&n.push(t.stat_compensation);const o=e.cost_sensors[t.stat_energy_to];o&&n.push(o)}}else n.push(s.stat_energy_from),n.push(s.stat_energy_to);else{n.push(s.stat_energy_from),s.stat_cost&&n.push(s.stat_cost);const t=e.cost_sensors[s.stat_energy_from];t&&n.push(t)}else n.push(s.stat_energy_from);return o&&!o.includes("device")||n.push(...t.device_consumption.map((t=>t.stat_consumption))),n},B=async(t,e,o,n,f)=>{const[y,_]=await Promise.all([(0,v.VN)(t,{domain:"co2signal"}),S(t)]),g=y.length?y[0]:void 0;let d;if(g)for(const e of Object.values(t.entities)){if("co2signal"!==e.platform)continue;const o=t.states[e.entity_id];if(o&&"%"===o.attributes.unit_of_measurement){d=o.entity_id;break}}const m=[];for(const t of e.energy_sources)if("grid"===t.type)for(const e of t.flow_from)m.push(e.stat_energy_from);const h=L(e,_,["grid","solar","battery","gas","device"]),w=L(e,_,["water"]),E=[...h,...w],k=(0,s.c)(n||new Date,o),T=k>35?"month":k>2?"day":"hour",C=t.config.unit_system.length||"",D={energy:"kWh",volume:"km"===C?"m³":"ft³"},W={volume:"km"===C?"L":"gal"},x=h.length?(0,b.sz)(t,o,n,h,T,D,["change"]):{},O=w.length?(0,b.sz)(t,o,n,w,T,W,["change"]):{};let j,P,M,z,B,V={},A={};f&&(P=(0,p.xo)(o,r.e,t.locale,t.config)&&(0,p.xo)(n||new Date,i.c,t.locale,t.config)?(0,p.ol)(o,a.P,t.locale,t.config,-(0,p.EO)(n||new Date,o,c.W,t.locale,t.config)-1):(0,p.ol)(o,l.f,t.locale,t.config,-1*(k+1)),M=(0,u.A)(o,-1),h.length&&(V=(0,b.sz)(t,P,M,h,T,D,["change"])),w.length&&(A=(0,b.sz)(t,P,M,w,T,W,["change"]))),void 0!==d&&(z=$(t,o,m,d,n,k>35?"month":k>2?"day":"hour"),f&&(B=$(t,P,m,d,M,k>35?"month":k>2?"day":"hour")));const F={},I=E.length?(0,b.Wr)(t,E):[],[N,R,U,Y,q,H,J]=await Promise.all([x,O,V,A,I,z,B]),K={...N,...R};f&&(j={...U,...Y}),E.length&&q.forEach((t=>{F[t.statistic_id]=t}));return{start:o,end:n,startCompare:P,endCompare:M,info:_,prefs:e,stats:K,statsMetadata:F,statsCompare:j,co2SignalConfigEntry:g,co2SignalEntity:d,fossilEnergyConsumption:H,fossilEnergyConsumptionCompare:J}},V=t=>{E.forEach((e=>{const o=F(t,{key:e});o.clearPrefs(),o._active&&o.refresh()}))},A=t=>{if(t._refreshTimeout&&clearTimeout(t._refreshTimeout),t._active&&(!t.end||t.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),t._refreshTimeout=window.setTimeout((()=>t.refresh()),e.getTime()-Date.now())}},F=(t,e={})=>{let o="_energy";if(e.key){if(!e.key.startsWith("energy_"))throw new Error("Key need to start with energy_");o=`_${e.key}`}if(t.connection[o])return t.connection[o];E.push(e.key);const n=(0,g.X)(t.connection,o,(async()=>(n.prefs||(n.prefs=await P(t)),A(n),B(t,n.prefs,n.start,n.end,n.compare)))),s=n.subscribe;n.subscribe=t=>{const e=s(t);return n._active++,void 0===n._refreshTimeout&&A(n),()=>{n._active--,n._active<1&&(clearTimeout(n._refreshTimeout),n._refreshTimeout=void 0),e()}},n._active=0,n.prefs=e.prefs;const r=new Date,i=(0,m.LW)(r,t.locale,t.config).split(":")[0];n.start=(0,p.ol)("0"===i?(0,l.f)(r,-1):r,f.o,t.locale,t.config),n.end=(0,p.ol)("0"===i?(0,l.f)(r,-1):r,y.D,t.locale,t.config);const a=()=>{n._updatePeriodTimeout=window.setTimeout((()=>{n.start=(0,p.ol)(new Date,f.o,t.locale,t.config),n.end=(0,p.ol)(new Date,y.D,t.locale,t.config),a()}),(0,_.L)((0,p.ol)(r,y.D,t.locale,t.config),1).getTime()-Date.now())};return a(),n.clearPrefs=()=>{n.prefs=void 0},n.setPeriod=(e,o)=>{n.start=e,n.end=o,n.start.getTime()!==(0,p.ol)(new Date,f.o,t.locale,t.config).getTime()||n.end?.getTime()!==(0,p.ol)(new Date,y.D,t.locale,t.config).getTime()||n._updatePeriodTimeout?n._updatePeriodTimeout&&(clearTimeout(n._updatePeriodTimeout),n._updatePeriodTimeout=void 0):a()},n.setCompare=t=>{n.compare=t},n},I=t=>t.callWS({type:"energy/solar_forecast"}),N=["volume","energy"],R=(t,e={},o)=>{for(const n of t.energy_sources){if("gas"!==n.type)continue;if(o&&o===n.stat_energy_from)continue;const t=e[n.stat_energy_from];if(N.includes(t?.unit_class))return t.unit_class}},U=(t,e,o={})=>{const n=R(e,o);if(void 0!==n)return"energy"===n?"kWh":"km"===t.config.unit_system.length?"m³":"ft³"},Y=t=>"km"===t.config.unit_system.length?"L":"gal",q="/docs/energy/faq/#troubleshooting-missing-entities",H=(0,d.A)((t=>({summedData:J(t),compareSummedData:t.statsCompare?J(t,!0):void 0}))),J=(t,e)=>{const o={};for(const e of t.prefs.energy_sources)if("solar"!==e.type)if("battery"!==e.type){if("grid"===e.type){for(const t of e.flow_from)o.from_grid?o.from_grid.push(t.stat_energy_from):o.from_grid=[t.stat_energy_from];for(const t of e.flow_to)o.to_grid?o.to_grid.push(t.stat_energy_to):o.to_grid=[t.stat_energy_to]}}else o.to_battery?(o.to_battery.push(e.stat_energy_to),o.from_battery.push(e.stat_energy_from)):(o.to_battery=[e.stat_energy_to],o.from_battery=[e.stat_energy_from]);else o.solar?o.solar.push(e.stat_energy_from):o.solar=[e.stat_energy_from];const n={};return Object.entries(o).forEach((([o,s])=>{const r={},i={};s.forEach((o=>{const n=e?t.statsCompare[o]:t.stats[o];if(!n)return;n.forEach((t=>{if(null===t.change||void 0===t.change)return;const e=t.change;r[t.start]=t.start in r?r[t.start]+e:e})),i[o]={}})),n[o]=r})),n},K=(0,d.A)(((t,e)=>({consumption:X(t),compareConsumption:e?X(e):void 0}))),X=t=>{const e={total:{}};return Object.keys(t).forEach((o=>{Object.keys(t[o]).forEach((o=>{if(void 0===e.total[o]){const n=(t.from_grid?.[o]||0)+(t.solar?.[o]||0)+(t.from_battery?.[o]||0)-(t.to_grid?.[o]||0)-(t.to_battery?.[o]||0);e.total[o]=n}}))})),e};n()}catch(t){n(t)}}))},45657:(t,e,o)=>{o.d(e,{KT:()=>m,Bi:()=>p,ZI:()=>d,Yp:()=>h});o(89655),o(54774),o(24545),o(51855),o(82130),o(31743),o(22328),o(4959),o(62435),o(253),o(2075),o(94438),o(54846),o(16891);var n=o(94872),s=o(213),r=o(65459),i=o(19244);var a=o(7127),c=o(2682),l=o(96915),u=o(46092),f=o(71443),y=o(57273);const _=new Set(["automation","configurator","device_tracker","event","geo_location","notify","persistent_notification","script","sun","tag","todo","zone",...n.gt]),g=new Set(["mobile_app"]),d=(t,e)=>({type:"grid",cards:t.map((t=>({type:"tile",entity:t,show_entity_picture:["camera","image","person"].includes((0,s.m)(t))||void 0}))),...e}),p=(t,e,o,r=!0)=>{const l=[],u=[],f=o.title?o.title.toLowerCase():void 0,y=[];for(const o of e){const e=t[o],n=(0,s.m)(o);if("alarm_control_panel"===n){const t={type:"alarm-panel",entity:o};l.push(t)}else if("camera"===n){const t={type:"picture-entity",entity:o};l.push(t)}else if("image"===n){const t={type:"picture",image_entity:o};l.push(t)}else if("climate"===n){const e={type:"thermostat",entity:o,features:(t[o]?.attributes?.hvac_modes?.length??0)>1?[{type:"climate-hvac-modes",hvac_modes:t[o]?.attributes?.hvac_modes}]:void 0};l.push(e)}else if("humidifier"===n){const t={type:"humidifier",entity:o,features:[{type:"humidifier-toggle"}]};l.push(t)}else if("media_player"===n){const t={type:"media-control",entity:o};l.push(t)}else if("plant"===n){const t={type:"plant-status",entity:o};l.push(t)}else if("weather"===n){const t={type:"weather-forecast",entity:o,show_forecast:!1};l.push(t)}else if(!r||"scene"!==n&&"script"!==n){let t;const n=f&&e&&(t=(0,a.p)((0,i.u)(e),f))?{entity:o,name:t}:o;u.push(n)}else{const t={entity:o,show_icon:!0,show_name:!0};let n;f&&e&&(n=(0,a.p)((0,i.u)(e),f))&&(t.name=n),y.push(t)}}if(u.sort(((e,o)=>{const r="string"==typeof e?e:e.entity,a="string"==typeof o?o:o.entity,l=n.JF.includes((0,s.m)(r))?"sensor":"control";return l!==(n.JF.includes((0,s.m)(a))?"sensor":"control")?"sensor"===l?1:-1:(0,c.x)("string"==typeof e?t[e]?(0,i.u)(t[e]):"":e.name||"","string"==typeof o?t[o]?(0,i.u)(t[o]):"":o.name||"")})),0===u.length&&y.length>0)return p(t,e,o,!1);if(u.length>0||y.length>0){const t={type:"entities",entities:u,...o};y.length>0&&(t.footer={type:"buttons",entities:y}),l.unshift(t)}return l.length<2?l:[{type:"grid",square:!1,columns:1,cards:l}]},m=(t,e)=>{const o=[];for(const t of e){const e={type:"entity",entity:t};o.push(e)}return o},h=(t,e,o,n,a,d,m,h,v)=>{const b=((t,e)=>{const o={},n=new Set(Object.values(e).filter((t=>t.entity_category||t.platform&&g.has(t.platform)||t.hidden)).map((t=>t.entity_id)));for(const e of Object.keys(t)){const s=t[e];_.has((0,r.t)(s))||n.has(s.entity_id)||(o[e]=t[e])}return o})(n,o),w={};for(const t of Object.keys(b)){const e=b[t];e.attributes.order&&(w[t]=e.attributes.order)}const E=((t,e,o,n)=>{const s={...n},r={},i={};for(const n of Object.values(o)){const o=n.area_id||n.device_id&&e[n.device_id]?.area_id;o&&o in t&&n.entity_id in s?(o in r||(r[o]=[]),r[o].push(s[n.entity_id]),delete s[n.entity_id]):n.device_id&&n.device_id in e&&n.entity_id in s&&(n.device_id in i||(i[n.device_id]=[]),i[n.device_id].push(s[n.entity_id]),delete s[n.entity_id])}for(const[t,e]of Object.entries(i))1===e.length&&(s[e[0].entity_id]=e[0],delete i[t]);return{areasWithEntities:r,devicesWithEntities:i,otherEntities:s}})(t,e,o,b);if(m?.hidden)for(const t of m.hidden)delete E.areasWithEntities[t];h&&(E.devicesWithEntities={},E.otherEntities={});const k=(t=>{const e=[],o={};return Object.keys(t).forEach((n=>{const r=t[n];"group"===(0,s.m)(n)?e.push(r):o[n]=r})),e.forEach((t=>t.attributes.entity_id.forEach((t=>{delete o[t]})))),{groups:e,ungrouped:o}})(E.otherEntities);k.groups.sort(((t,e)=>w[t.entity_id]-w[e.entity_id]));const T=[];for(const t of k.groups)T.push(...p(n,t.attributes.entity_id,{title:(0,i.u)(t),show_header_toggle:"hidden"!==t.attributes.control}));const C=((t,e,o,n,s)=>{const a={};for(const t of Object.keys(s)){const e=s[t],o=(0,r.t)(e);o in a||(a[o]=[]),a[o].push(e.entity_id)}const l=[];if("person"in a){const t=[];if(1===a.person.length)l.push({type:"entities",entities:a.person});else{let e,o="";for(const n of a.person){const r=s[n];let i=r.attributes.entity_picture;if(!i){if(void 0===e){const t=getComputedStyle(document.body);e=encodeURIComponent(t.getPropertyValue("--light-primary-color").trim()),o=encodeURIComponent((t.getPropertyValue("--text-light-primary-color")||t.getPropertyValue("--primary-text-color")).trim())}i=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50' height='50' style='background-color:${e}'%3E%3Cg%3E%3Ctext font-family='roboto' x='50%25' y='50%25' text-anchor='middle' stroke='${o}' font-size='1.3em' dy='.3em'%3E${(0,f._2)(r.attributes.friendly_name||"")}%3C/text%3E%3C/g%3E%3C/svg%3E`}t.push({type:"picture-entity",entity:n,aspect_ratio:"1",show_name:!1,image:i})}l.push({type:"grid",square:!0,columns:3,cards:t})}delete a.person}const _=[];for(const t of y.L)t in a&&(_.push(...a[t]),delete a[t]);const g={};for(const e of Object.keys(a))g[e]=(0,u.p$)(t,e);_.length&&(a._helpers=_,g._helpers=t("ui.panel.lovelace.strategy.original-states.helpers")),Object.keys(a).sort(((t,e)=>(0,c.x)(g[t],g[e]))).forEach((t=>{l.push(...p(s,a[t].sort(((t,e)=>(0,c.x)((0,i.u)(s[t]),(0,i.u)(s[e])))),{title:g[t]}))}));const d={path:e,title:o,cards:l};return n&&(d.icon=n),d})(a,"default_view","Home",undefined,k.ungrouped),D=[],W=Object.keys(E.areasWithEntities).sort((0,l.dj)(t,m?.order));for(const e of W){const o=E.areasWithEntities[e],s=t[e];D.push(...p(n,o.map((t=>t.entity_id)),{title:s.name}))}const x=[],O=Object.entries(E.devicesWithEntities).sort(((t,o)=>{const n=e[t[0]],s=e[o[0]];return(0,c.x)(n.name_by_user||n.name||"",s.name_by_user||s.name||"")}));for(const[t,o]of O){const s=e[t];x.push(...p(n,o.map((t=>t.entity_id)),{title:s.name_by_user||s.name||a("ui.panel.config.devices.unnamed_device",{type:a(`ui.panel.config.devices.type.${s.entry_type||"device"}`)})}))}let S;if(d&&!v){const t=d.energy_sources.find((t=>"grid"===t.type));t&&t.flow_from.length>0&&(S={title:a("ui.panel.lovelace.cards.energy.energy_distribution.title_today"),type:"energy-distribution",link_dashboard:!0})}return C.cards.unshift(...D,...T,...S?[S]:[]),C.cards.push(...x),C}},99264:(t,e,o)=>{o.a(t,(async(t,n)=>{try{o.r(e),o.d(e,{OriginalStatesViewStrategy:()=>y});var s=o(36312),r=(o(89655),o(54278)),i=o(50289),a=o(29818),c=o(33922),l=o(47076),u=o(45657),f=t([l]);l=(f.then?(await f)():f)[0];let y=(0,s.A)([(0,a.EM)("original-states-view-strategy")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"method",static:!0,key:"generate",value:async function(t,e){if(e.config.state===r.m2)return{cards:[{type:"starting"}]};if(e.config.recovery_mode)return{cards:[{type:"recovery-mode"}]};const[o,n]=await Promise.all([e.loadBackendTranslation("title"),(0,c.x)(e,"energy")?(0,l.bs)(e).catch((()=>{})):void 0]),s=(0,u.Yp)(e.areas,e.devices,e.entities,e.states,o,n,t.areas,t.hide_entities_without_area,t.hide_energy);return e.config.components.includes("geo_location")&&s&&s.cards&&s.cards.push({type:"map",geo_location_sources:["all"]}),0===s.cards.length&&s.cards.push({type:"empty-state"}),s}}]}}),i.mN);n()}catch(t){n(t)}}))},24226:(t,e,o)=>{o.d(e,{z:()=>s});var n=o(30429);function s(t,e){const o=(0,n.a)(t),s=(0,n.a)(e),r=o.getTime()-s.getTime();return r<0?-1:r>0?1:r}},72730:(t,e,o)=>{o.d(e,{W:()=>a});var n=o(24226),s=o(30429);function r(t,e){const o=(0,s.a)(t),n=(0,s.a)(e);return 12*(o.getFullYear()-n.getFullYear())+(o.getMonth()-n.getMonth())}var i=o(91103);function a(t,e){const o=(0,s.a)(t),a=(0,s.a)(e),c=(0,n.z)(o,a),l=Math.abs(r(o,a));let u;if(l<1)u=0;else{1===o.getMonth()&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-c*l);let e=(0,n.z)(o,a)===-c;(0,i.c)((0,s.a)(t))&&1===l&&1===(0,n.z)(t,a)&&(e=!1),u=c*(l-Number(e))}return 0===u?0:u}},77301:(t,e,o)=>{o.d(e,{e:()=>s});var n=o(30429);function s(t){return 1===(0,n.a)(t).getDate()}},91103:(t,e,o)=>{o.d(e,{c:()=>i});var n=o(60132),s=o(12152),r=o(30429);function i(t){const e=(0,r.a)(t);return+(0,n.D)(e)==+(0,s.p)(e)}}};
//# sourceMappingURL=99264.C43Z-I7uhiM.js.map