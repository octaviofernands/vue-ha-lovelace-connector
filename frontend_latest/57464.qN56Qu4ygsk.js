export const id=57464;export const ids=[57464];export const modules={57464:(e,t,a)=>{a.r(t),a.d(t,{HaTemplateSelector:()=>d});var r=a(36312),l=a(50289),i=a(29818),s=a(34897),o=a(84976);a(31979),a(31511),a(13292);const n=["template:","sensor:","state:","platform: template"];let d=(0,r.A)([(0,i.EM)("ha-selector-template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,i.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,i.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,i.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,i.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,i.MZ)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,i.wk)()],key:"warn",value(){}},{kind:"method",key:"render",value:function(){return l.qy` ${this.warn?l.qy`<ha-alert alert-type="warning">${this.hass.localize("ui.components.selectors.template.yaml_warning",{string:this.warn})} <br> <a target="_blank" rel="noopener noreferrer" href="${(0,o.o)(this.hass,"/docs/configuration/templating/")}">${this.hass.localize("ui.components.selectors.template.learn_more")}</a></ha-alert>`:l.s6} ${this.label?l.qy`<p>${this.label}${this.required?"*":""}</p>`:l.s6} <ha-code-editor mode="jinja2" .hass="${this.hass}" .value="${this.value}" .readOnly="${this.disabled}" autofocus autocomplete-entities autocomplete-icons @value-changed="${this._handleChange}" dir="ltr" linewrap></ha-code-editor> ${this.helper?l.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:l.s6} `}},{kind:"method",key:"_handleChange",value:function(e){const t=e.target.value;this.value!==t&&(this.warn=n.find((e=>t.includes(e))),(0,s.r)(this,"value-changed",{value:t}))}},{kind:"get",static:!0,key:"styles",value:function(){return l.AH`p{margin-top:0}`}}]}}),l.WF)}};
//# sourceMappingURL=57464.qN56Qu4ygsk.js.map