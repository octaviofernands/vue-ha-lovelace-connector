export const id=48565;export const ids=[48565,36185];export const modules={36185:(e,t,i)=>{var a=i(36312),o=i(68689),n=(i(253),i(54846),i(16891),i(50289)),d=i(29818),r=i(85920),s=i(34897);i(13292),i(9421);const l={boolean:()=>i.e(96292).then(i.bind(i,96292)),constant:()=>i.e(44354).then(i.bind(i,44354)),float:()=>i.e(80866).then(i.bind(i,80866)),grid:()=>i.e(21306).then(i.bind(i,21306)),expandable:()=>i.e(82178).then(i.bind(i,82178)),integer:()=>i.e(65622).then(i.bind(i,43241)),multi_select:()=>i.e(26964).then(i.bind(i,26964)),positive_time_period_dict:()=>i.e(24280).then(i.bind(i,24280)),select:()=>i.e(22038).then(i.bind(i,22038)),string:()=>i.e(38819).then(i.bind(i,38819))},u=(e,t)=>e?!t.name||t.flatten?e:e[t.name]:null;(0,a.A)([(0,d.EM)("ha-form")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"error",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"warning",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"computeError",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"computeHelper",value:void 0},{kind:"method",key:"getFormProperties",value:function(){return{}}},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof n.mN&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{"selector"in e||l[e.type]?.()}))}},{kind:"method",key:"render",value:function(){return n.qy` <div class="root" part="root"> ${this.error&&this.error.base?n.qy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e),i=((e,t)=>e&&t.name?e[t.name]:null)(this.warning,e);return n.qy` ${t?n.qy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:i?n.qy` <ha-alert own-margin alert-type="warning"> ${this._computeWarning(i,e)} </ha-alert> `:""} ${"selector"in e?n.qy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${u(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,r._)(this.fieldElementName(e.type),{schema:e,data:u(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,localize:this.hass?.localize,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e),...this.getFormProperties()})} `}))} </div> `}},{kind:"method",key:"fieldElementName",value:function(e){return`ha-form-${e}`}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[i,a]of Object.entries(e.context))t[i]=this.data[a];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,o.A)(i,"createRenderRoot",this,3)([]);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema;if(e.target===this)return;const i=!t.name||"flatten"in t&&t.flatten?e.detail.value:{[t.name]:e.detail.value};this.data={...this.data,...i},(0,s.r)(this,"value-changed",{value:this.data})}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return Array.isArray(e)?n.qy`<ul> ${e.map((e=>n.qy`<li> ${this.computeError?this.computeError(e,t):e} </li>`))} </ul>`:this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return n.AH`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}}]}}),n.WF)},48565:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t),i.d(t,{HaLocationSelector:()=>c});var o=i(36312),n=i(50289),d=i(29818),r=i(94100),s=i(34897),l=i(88219),u=(i(36185),e([l]));l=(u.then?(await u)():u)[0];let c=(0,o.A)([(0,d.EM)("ha-selector-location")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Object})],key:"value",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",key:"_schema",value:()=>(0,r.A)(((e,t)=>[{name:"",type:"grid",schema:[{name:"latitude",required:!0,selector:{number:{step:"any"}}},{name:"longitude",required:!0,selector:{number:{step:"any"}}}]},...e?[{name:"radius",required:!0,default:1e3,disabled:!!t,selector:{number:{min:0,step:1,mode:"box"}}}]:[]]))},{kind:"method",key:"willUpdate",value:function(){this.value||(this.value={latitude:this.hass.config.latitude,longitude:this.hass.config.longitude,radius:this.selector.location?.radius?1e3:void 0})}},{kind:"method",key:"render",value:function(){return n.qy` <p>${this.label?this.label:""}</p> <ha-locations-editor class="flex" .hass="${this.hass}" .helper="${this.helper}" .locations="${this._location(this.selector,this.value)}" @location-updated="${this._locationChanged}" @radius-updated="${this._radiusChanged}"></ha-locations-editor> <ha-form .hass="${this.hass}" .schema="${this._schema(this.selector.location?.radius,this.selector.location?.radius_readonly)}" .data="${this.value}" .computeLabel="${this._computeLabel}" .disabled="${this.disabled}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"field",key:"_location",value(){return(0,r.A)(((e,t)=>{const i=getComputedStyle(this),a=e.location?.radius?i.getPropertyValue("--zone-radius-color")||i.getPropertyValue("--accent-color"):void 0;return[{id:"location",latitude:!t||isNaN(t.latitude)?this.hass.config.latitude:t.latitude,longitude:!t||isNaN(t.longitude)?this.hass.config.longitude:t.longitude,radius:e.location?.radius?t?.radius||1e3:void 0,radius_color:a,icon:e.location?.icon||e.location?.radius?"mdi:map-marker-radius":"mdi:map-marker",location_editable:!0,radius_editable:!!e.location?.radius&&!e.location?.radius_readonly}]}))}},{kind:"method",key:"_locationChanged",value:function(e){const[t,i]=e.detail.location;(0,s.r)(this,"value-changed",{value:{...this.value,latitude:t,longitude:i}})}},{kind:"method",key:"_radiusChanged",value:function(e){const t=Math.round(e.detail.radius);(0,s.r)(this,"value-changed",{value:{...this.value,radius:t}})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const t=e.detail.value,i=Math.round(e.detail.value.radius);(0,s.r)(this,"value-changed",{value:{latitude:t.latitude,longitude:t.longitude,...this.selector.location?.radius&&!this.selector.location?.radius_readonly?{radius:i}:{}}})}},{kind:"field",key:"_computeLabel",value(){return e=>e.name?this.hass.localize(`ui.components.selectors.location.${e.name}`):""}},{kind:"field",static:!0,key:"styles",value:()=>n.AH`ha-locations-editor{display:block;height:400px;margin-bottom:16px}p{margin-top:0}`}]}}),n.WF);a()}catch(e){a(e)}}))},88219:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(36312),o=i(68689),n=(i(89655),i(253),i(54846),i(16891),i(50289)),d=i(29818),r=i(94100),s=i(34897),l=(i(31511),i(4712)),u=e([l]);l=(u.then?(await u)():u)[0];(0,a.A)([(0,d.EM)("ha-locations-editor")],(function(e,t){class a extends t{constructor(){super(),e(this),this._loadPromise=i.e(44066).then(i.t.bind(i,44066,23)).then((e=>i.e(3874).then(i.t.bind(i,3874,23)).then((()=>(this.Leaflet=e.default,this._updateMarkers(),this.updateComplete.then((()=>this.fitMap())))))))}}return{F:a,d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"locations",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Number})],key:"zoom",value:()=>16},{kind:"field",decorators:[(0,d.MZ)({attribute:"theme-mode",type:String})],key:"themeMode",value:()=>"auto"},{kind:"field",decorators:[(0,d.wk)()],key:"_locationMarkers",value:void 0},{kind:"field",decorators:[(0,d.wk)()],key:"_circles",value:()=>({})},{kind:"field",decorators:[(0,d.P)("ha-map",!0)],key:"map",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_loadPromise",value:void 0},{kind:"method",key:"fitMap",value:function(e){this.map.fitMap(e)}},{kind:"method",key:"fitBounds",value:function(e,t){this.map.fitBounds(e,t)}},{kind:"method",key:"fitMarker",value:async function(e,t){if(this.Leaflet||await this._loadPromise,!this.map.leafletMap||!this._locationMarkers)return;const i=this._locationMarkers[e];if(i)if("getBounds"in i)this.map.leafletMap.fitBounds(i.getBounds()),i.bringToFront();else{const a=this._circles[e];a?this.map.leafletMap.fitBounds(a.getBounds()):this.map.leafletMap.setView(i.getLatLng(),t?.zoom||this.zoom)}}},{kind:"method",key:"render",value:function(){return n.qy` <ha-map .hass="${this.hass}" .layers="${this._getLayers(this._circles,this._locationMarkers)}" .zoom="${this.zoom}" .autoFit="${this.autoFit}" .themeMode="${this.themeMode}"></ha-map> ${this.helper?n.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"field",key:"_getLayers",value:()=>(0,r.A)(((e,t)=>{const i=[];return Array.prototype.push.apply(i,Object.values(e)),t&&Array.prototype.push.apply(i,Object.values(t)),i}))},{kind:"method",key:"willUpdate",value:function(e){(0,o.A)(a,"willUpdate",this,3)([e]),this.Leaflet&&e.has("locations")&&this._updateMarkers()}},{kind:"method",key:"updated",value:function(e){if(this.Leaflet&&e.has("locations")){const t=e.get("locations"),i=this.locations?.filter(((e,i)=>!t[i]||(e.latitude!==t[i].latitude||e.longitude!==t[i].longitude)&&this.map.leafletMap?.getBounds().contains({lat:t[i].latitude,lng:t[i].longitude})&&!this.map.leafletMap?.getBounds().contains({lat:e.latitude,lng:e.longitude})));1===i?.length&&this.map.leafletMap?.panTo({lat:i[0].latitude,lng:i[0].longitude})}}},{kind:"method",key:"_updateLocation",value:function(e){const t=e.target,i=t.getLatLng();let a=i.lng;Math.abs(a)>180&&(a=(a%360+540)%360-180);const o=[i.lat,a];(0,s.r)(this,"location-updated",{id:t.id,location:o},{bubbles:!1})}},{kind:"method",key:"_updateRadius",value:function(e){const t=e.target,i=this._locationMarkers[t.id];(0,s.r)(this,"radius-updated",{id:t.id,radius:i.getRadius()},{bubbles:!1})}},{kind:"method",key:"_markerClicked",value:function(e){const t=e.target;(0,s.r)(this,"marker-clicked",{id:t.id},{bubbles:!1})}},{kind:"method",key:"_updateMarkers",value:function(){if(!this.locations||!this.locations.length)return this._circles={},void(this._locationMarkers=void 0);const e={},t={},i=getComputedStyle(this).getPropertyValue("--accent-color");this.locations.forEach((a=>{let o;if(a.icon||a.iconPath){const e=document.createElement("div");let t;e.className="named-icon",void 0!==a.name&&(e.innerText=a.name),a.icon?(t=document.createElement("ha-icon"),t.setAttribute("icon",a.icon)):(t=document.createElement("ha-svg-icon"),t.setAttribute("path",a.iconPath)),e.prepend(t),o=this.Leaflet.divIcon({html:e.outerHTML,iconSize:[24,24],className:"light"})}if(a.radius){const n=this.Leaflet.circle([a.latitude,a.longitude],{color:a.radius_color||i,radius:a.radius});a.radius_editable||a.location_editable?(n.editing.enable(),n.addEventListener("add",(()=>{const e=n.editing._moveMarker,t=n.editing._resizeMarkers[0];o&&e.setIcon(o),t.id=e.id=a.id,e.addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e))),a.radius_editable?t.addEventListener("dragend",(e=>this._updateRadius(e))):t.remove()})),e[a.id]=n):t[a.id]=n}if(!a.radius||!a.radius_editable&&!a.location_editable){const t={title:a.name,draggable:a.location_editable};o&&(t.icon=o);const i=this.Leaflet.marker([a.latitude,a.longitude],t).addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e)));i.id=a.id,e[a.id]=i}})),this._circles=t,this._locationMarkers=e,(0,s.r)(this,"markers-updated")}},{kind:"get",static:!0,key:"styles",value:function(){return n.AH`ha-map{display:block;height:100%}`}}]}}),n.WF);t()}catch(e){t(e)}}))}};
//# sourceMappingURL=48565.zP3hwMW3M1c.js.map