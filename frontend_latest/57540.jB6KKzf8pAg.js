export const id=57540;export const ids=[57540];export const modules={57540:(t,e,i)=>{i.a(t,(async(t,n)=>{try{i.r(e),i.d(e,{DEFAULT_MAX:()=>A,DEFAULT_MIN:()=>$,severityMap:()=>N});var o=i(36312),s=i(68689),a=(i(16891),i(50289)),r=i(29818),c=i(10977),h=i(85323),l=i(55165),u=i(38962),d=i(19244),f=i(26175),g=i(57636),m=(i(13082),i(43106)),y=i(9883),_=i(25319),v=i(18102),k=i(63582),p=i(562),b=i(7934),w=i(46645),x=t([g,m]);[g,m]=x.then?(await x)():x;const $=0,A=100,N={red:"var(--error-color)",green:"var(--success-color)",yellow:"var(--warning-color)",normal:"var(--info-color)"};(0,o.A)([(0,r.EM)("hui-gauge-card")],(function(t,e){class n extends e{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await i.e(59149).then(i.bind(i,59149)),document.createElement("hui-gauge-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){return{type:"gauge",entity:(0,v.B)(t,1,e,i,["counter","input_number","number","sensor"],(t=>!isNaN(Number(t.state))))[0]||""}}},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(t){if(!t.entity)throw new Error("Entity must be specified");if(!(0,f.n)(t.entity))throw new Error("Invalid entity");this._config={min:$,max:A,...t}}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return a.s6;const t=this.hass.states[this._config.entity];if(!t)return a.qy` <hui-warning> ${(0,w.j)(this.hass,this._config.entity)} </hui-warning> `;const e=Number(t.state);if(t.state===y.Hh)return a.qy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_unavailable",{entity:this._config.entity})}</hui-warning> `;if(isNaN(e))return a.qy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric",{entity:this._config.entity})}</hui-warning> `;const i=this._config.name??(0,d.u)(t);return a.qy` <ha-card class="${(0,h.H)({action:(0,p.A)(this._config)})}" @action="${this._handleAction}" .actionHandler="${(0,_.T)({hasHold:(0,p.h)(this._config.hold_action),hasDoubleClick:(0,p.h)(this._config.double_tap_action)})}" tabindex="${(0,c.J)(!this._config.tap_action||(0,p.h)(this._config.tap_action)?"0":void 0)}"> <ha-gauge .min="${this._config.min}" .max="${this._config.max}" .value="${t.state}" .formatOptions="${(0,g.ZQ)(t,this.hass.entities[t.entity_id])}" .locale="${this.hass.locale}" .label="${this._config.unit||this.hass?.states[this._config.entity].attributes.unit_of_measurement||""}" style="${(0,l.W)({"--gauge-color":this._computeSeverity(e)})}" .needle="${this._config.needle}" .levels="${this._config.needle?this._severityLevels():void 0}"></ha-gauge> <div class="name" .title="${i}">${i}</div> </ha-card> `}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,b.LX)(this,t)}},{kind:"method",key:"updated",value:function(t){if((0,s.A)(n,"updated",this,3)([t]),!this._config||!this.hass)return;const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||(0,u.Q)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_computeSeverity",value:function(t){if(this._config.needle)return;let e=this._config.segments;if(e){e=[...e].sort(((t,e)=>t.from-e.from));for(let i=0;i<e.length;i++){const n=e[i];if(n&&t>=n.from&&(i+1===e.length||t<e[i+1]?.from))return n.color}return N.normal}const i=this._config.severity;if(!i)return N.normal;const n=Object.keys(i).map((t=>[t,i[t]]));for(const t of n)if(null==N[t[0]]||isNaN(t[1]))return N.normal;return n.sort(((t,e)=>t[1]-e[1])),t>=n[0][1]&&t<n[1][1]?N[n[0][0]]:t>=n[1][1]&&t<n[2][1]?N[n[1][0]]:t>=n[2][1]?N[n[2][0]]:N.normal}},{kind:"method",key:"_severityLevels",value:function(){const t=this._config.segments;if(t)return t.map((t=>({level:t?.from,stroke:t?.color,label:t?.label})));const e=this._config.severity;if(!e)return[{level:0,stroke:N.normal}];return Object.keys(e).map((t=>({level:e[t],stroke:N[t]})))}},{kind:"method",key:"_handleAction",value:function(t){(0,k.$)(this,this.hass,this._config,t.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return a.AH`ha-card{height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-card.action{cursor:pointer}ha-card:focus{outline:0}ha-gauge{width:100%;max-width:250px}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}`}}]}}),a.WF);n()}catch(t){n(t)}}))}};
//# sourceMappingURL=57540.jB6KKzf8pAg.js.map