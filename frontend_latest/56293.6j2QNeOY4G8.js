export const id=56293;export const ids=[56293];export const modules={56293:(e,t,i)=>{i.r(t),i.d(t,{HaTextSelector:()=>r});var s=i(36312),a=i(50289),l=i(29818),o=i(21863),d=i(34897);i(4169),i(54223),i(45920),i(90431);let r=(0,s.A)([(0,l.EM)("ha-selector-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"name",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,l.wk)()],key:"_unmaskedPassword",value:()=>!1},{kind:"method",key:"focus",value:async function(){await this.updateComplete,this.renderRoot.querySelector("ha-textarea, ha-textfield")?.focus()}},{kind:"method",key:"render",value:function(){return this.selector.text?.multiple?a.qy` <ha-multi-textfield .hass="${this.hass}" .value="${(0,o.e)(this.value??[])}" .disabled="${this.disabled}" .label="${this.label}" .inputType="${this.selector.text?.type}" .inputSuffix="${this.selector.text?.suffix}" .inputPrefix="${this.selector.text?.prefix}" .autocomplete="${this.selector.text?.autocomplete}" @value-changed="${this._handleChange}"> </ha-multi-textfield> `:this.selector.text?.multiline?a.qy`<ha-textarea .name="${this.name}" .label="${this.label}" .placeholder="${this.placeholder}" .value="${this.value||""}" .helper="${this.helper}" helperPersistent .disabled="${this.disabled}" @input="${this._handleChange}" autocapitalize="none" .autocomplete="${this.selector.text?.autocomplete}" spellcheck="false" .required="${this.required}" autogrow></ha-textarea>`:a.qy`<ha-textfield .name="${this.name}" .value="${this.value||""}" .placeholder="${this.placeholder||""}" .helper="${this.helper}" helperPersistent .disabled="${this.disabled}" .type="${this._unmaskedPassword?"text":this.selector.text?.type}" @input="${this._handleChange}" .label="${this.label||""}" .prefix="${this.selector.text?.prefix}" .suffix="${"password"===this.selector.text?.type?a.qy`<div style="width:24px"></div>`:this.selector.text?.suffix}" .required="${this.required}" .autocomplete="${this.selector.text?.autocomplete}"></ha-textfield> ${"password"===this.selector.text?.type?a.qy`<ha-icon-button toggles .label="${this.hass?.localize(this._unmaskedPassword?"ui.components.selectors.text.hide_password":"ui.components.selectors.text.show_password")||(this._unmaskedPassword?"Hide password":"Show password")}" @click="${this._toggleUnmaskedPassword}" .path="${this._unmaskedPassword?"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z":"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"}"></ha-icon-button>`:""}`}},{kind:"method",key:"_toggleUnmaskedPassword",value:function(){this._unmaskedPassword=!this._unmaskedPassword}},{kind:"method",key:"_handleChange",value:function(e){let t=e.detail?.value??e.target.value;this.value!==t&&((""===t||Array.isArray(t)&&0===t.length)&&!this.required&&(t=void 0),(0,d.r)(this,"value-changed",{value:t}))}},{kind:"get",static:!0,key:"styles",value:function(){return a.AH`:host{display:block;position:relative}ha-textarea,ha-textfield{width:100%}ha-icon-button{position:absolute;top:8px;right:8px;inset-inline-start:initial;inset-inline-end:8px;--mdc-icon-button-size:40px;--mdc-icon-size:20px;color:var(--secondary-text-color);direction:var(--direction)}`}}]}}),a.WF)}};
//# sourceMappingURL=56293.6j2QNeOY4G8.js.map