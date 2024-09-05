export const id=90337;export const ids=[90337];export const modules={90337:(t,e,i)=>{i.r(e),i.d(e,{HuiEntityFilterCard:()=>u});var s=i(36312),n=i(68689),r=(i(253),i(5186),i(2075),i(16891),i(4525),i(50289)),o=i(29818),a=i(34897),h=i(42183),d=i(9627),l=i(18102),c=i(62241),f=i(32689);let u=(0,s.A)([(0,o.EM)("hui-entity-filter-card")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){const s=(0,l.B)(t,3,e,i,["light","switch","sensor"]);return{type:"entity-filter",entities:s,conditions:s[0]?[{condition:"state",state:t.states[s[0]].state}]:[],card:{type:"entities"}}}},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"layout",value:void 0},{kind:"field",decorators:[(0,o.MZ)({type:Boolean})],key:"preview",value:()=>!1},{kind:"field",decorators:[(0,o.wk)()],key:"_config",value:void 0},{kind:"field",key:"_element",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"_baseCardConfig",value:void 0},{kind:"field",key:"_oldEntities",value:void 0},{kind:"method",key:"getCardSize",value:function(){return this._element?(0,h.Z)(this._element):1}},{kind:"method",key:"setConfig",value:function(t){if(!t.entities||!t.entities.length||!Array.isArray(t.entities))throw new Error("Entities must be specified");if(!(t.conditions&&Array.isArray(t.conditions)||t.state_filter&&Array.isArray(t.state_filter)||t.entities.every((t=>"object"==typeof t&&t.state_filter&&Array.isArray(t.state_filter)))))throw new Error("Incorrect filter config");this._configEntities=(0,c.L)(t.entities),this._config=t,this._baseCardConfig={type:"entities",entities:[],...this._config.card},this.lastChild&&this.removeChild(this.lastChild),this._element=this._createCardElement(this._baseCardConfig)}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"shouldUpdate",value:function(t){return this._element&&(this._element.hass=this.hass,this._element.preview=this.preview,this._element.layout=this.layout),!!t.has("_config")||!!t.has("hass")&&this._haveEntitiesChanged(t.get("hass"))}},{kind:"method",key:"update",value:function(t){if((0,n.A)(i,"update",this,3)([t]),!(this.hass&&this._config&&this._configEntities&&this._element))return;const e=this._configEntities.filter((t=>{const e=this.hass.states[t.entity];if(!e)return!1;const i=t.conditions??this._config.conditions;if(i){const e=i.map((e=>(0,f.lB)(e,t.entity)));return(0,f.XH)(e,this.hass)}const s=t.state_filter??this._config.state_filter;return!!s&&s.some((t=>(0,d.J)(e,t)))}));if(0!==e.length||!1!==this._config.show_empty){if(this.lastChild){this._oldEntities&&e.length===this._oldEntities.length&&e.every(((t,e)=>t===this._oldEntities[e]))||(this._oldEntities=e,this._element.config={...this._baseCardConfig,entities:e})}else this._element.config={...this._baseCardConfig,entities:e},this._oldEntities=e;this.lastChild||this.appendChild(this._element),this.hidden&&(this.style.display="block",this.toggleAttribute("hidden",!1),(0,a.r)(this,"card-visibility-changed",{value:!0}))}else this.hidden||(this.style.display="none",this.toggleAttribute("hidden",!0),(0,a.r)(this,"card-visibility-changed",{value:!1}))}},{kind:"method",key:"_haveEntitiesChanged",value:function(t){if(!this.hass||!t)return!0;if(!this._configEntities)return!0;if(this.hass.localize!==t.localize)return!0;for(const e of this._configEntities){if(this.hass.states[e.entity]!==t.states[e.entity])return!0;if(e.conditions){const i=(0,f.Wx)(e.conditions);for(const e of i)if(this.hass.states[e]!==t.states[e])return!0}}if(this._config?.conditions){const e=(0,f.Wx)(this._config?.conditions);for(const i of e)if(this.hass.states[i]!==t.states[i])return!0}return!1}},{kind:"method",key:"_createCardElement",value:function(t){const e=document.createElement("hui-card");return e.hass=this.hass,e.preview=this.preview,e.config=t,e.load(),e}}]}}),r.mN)},9627:(t,e,i)=>{i.d(e,{J:()=>s});i(16891);const s=(t,e)=>{let i,s,n;if("object"==typeof e?(i=e.operator,s=e.value,n=e.attribute?t.attributes[e.attribute]:t.state):(i="==",s=e,n=t.state),"=="===i||"!="===i){const t="number"==typeof s||"string"==typeof s&&s.trim()&&!isNaN(Number(s)),e="number"==typeof n||"string"==typeof n&&n.trim()&&!isNaN(Number(n));t&&e&&(s=Number(s),n=Number(n))}switch(i){case"==":return n===s;case"<=":return n<=s;case"<":return n<s;case">=":return n>=s;case">":return n>s;case"!=":return n!==s;case"in":return!(!Array.isArray(s)&&"string"!=typeof s)&&(Array.isArray(s)&&(s=s.map((t=>`${t}`))),s.includes(n));case"not in":return!(!Array.isArray(s)&&"string"!=typeof s)&&(Array.isArray(s)&&(s=s.map((t=>`${t}`))),!s.includes(n));case"regex":return"string"==typeof s&&(null!==n&&"object"==typeof n?RegExp(s).test(JSON.stringify(n)):RegExp(s).test(n));default:return!1}}}};
//# sourceMappingURL=90337.r4ekkT1sJ0Y.js.map