export const id=80866;export const ids=[80866];export const modules={80866:(e,t,i)=>{i.r(t),i.d(t,{HaFormFloat:()=>s});var a=i(36312),d=i(50289),o=i(29818),l=i(34897);i(90431);let s=(0,a.A)([(0,o.EM)("ha-form-float")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"localize",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,o.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,o.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.P)("ha-textfield")],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return d.qy` <ha-textfield type="numeric" inputMode="decimal" .label="${this.label}" .helper="${this.helper}" helperPersistent .value="${void 0!==this.data?this.data:""}" .disabled="${this.disabled}" .required="${this.schema.required}" .autoValidate="${this.schema.required}" .suffix="${this.schema.description?.suffix}" .validationMessage="${this.schema.required?this.localize?.("ui.common.error_required"):void 0}" @input="${this._valueChanged}"></ha-textfield> `}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!!this.schema.required)}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.target,i=t.value.replace(",",".");let a;if(!i.endsWith(".")&&"-"!==i)if(""!==i&&(a=parseFloat(i),isNaN(a)&&(a=void 0)),this.data!==a)(0,l.r)(this,"value-changed",{value:a});else{const e=void 0===a?"":String(a);t.value!==e&&(t.value=e)}}},{kind:"field",static:!0,key:"styles",value:()=>d.AH`:host([own-margin]){margin-bottom:5px}ha-textfield{display:block}`}]}}),d.WF)}};
//# sourceMappingURL=80866.eY_JTJ7yuy0.js.map