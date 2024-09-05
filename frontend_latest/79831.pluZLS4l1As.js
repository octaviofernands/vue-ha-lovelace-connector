export const id=79831;export const ids=[79831];export const modules={79831:(e,i,o)=>{o.r(i);var a=o(36312),t=(o(16891),o(72606),o(67056),o(50289)),n=o(29818),s=o(34897),d=(o(10900),o(4169),o(71393),o(62807),o(51513),o(90431),o(81771)),l=o(55979),h=o(55321),c=o(84976);(0,a.A)([(0,n.EM)("ha-dialog-automation-mode")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_opened",value:()=>!1},{kind:"field",key:"_params",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_newMode",value:()=>d.EC},{kind:"field",decorators:[(0,n.wk)()],key:"_newMax",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._opened=!0,this._params=e,this._newMode=e.config.mode||d.EC,this._newMax=(0,l.Iq)(this._newMode)?e.config.max||d.bV:void 0}},{kind:"method",key:"closeDialog",value:function(){this._params.onClose(),this._opened&&(0,s.r)(this,"dialog-closed",{dialog:this.localName}),this._opened=!1}},{kind:"method",key:"render",value:function(){if(!this._opened)return t.s6;const e=this.hass.localize("ui.panel.config.automation.editor.change_mode");return t.qy` <ha-dialog open scrimClickAction @closed="${this.closeDialog}" .heading="${e}"> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${this.hass.localize("ui.common.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button> <div slot="title">${e}</div> <a href="${(0,c.o)(this.hass,"/docs/automation/modes/")}" slot="actionItems" target="_blank" rel="noopener noreferer"> <ha-icon-button .label="${this.hass.localize("ui.panel.config.automation.editor.modes.learn_more")}" .path="${"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}"></ha-icon-button> </a> </ha-dialog-header> <ha-list-new role="listbox" tabindex="0" aria-activedescendant="option-${this._newMode}" aria-label="${this.hass.localize("ui.panel.config.automation.editor.modes.label")}"> ${l.FN.map((e=>{const i=this.hass.localize(`ui.panel.config.automation.editor.modes.${e}`);return t.qy` <ha-list-item-new class="option" type="button" @click="${this._modeChanged}" .value="${e}" id="option-${e}" role="option" aria-label="${i}" aria-selected="${this._newMode===e}"> <div slot="start"> <ha-radio inert .checked="${this._newMode===e}" value="${e}" @change="${this._modeChanged}" name="mode"></ha-radio> </div> <div slot="headline"> ${this.hass.localize(`ui.panel.config.automation.editor.modes.${e}`)} </div> <div slot="supporting-text"> ${this.hass.localize(`ui.panel.config.automation.editor.modes.${e}_description`)} </div> </ha-list-item-new> `}))} </ha-list-new> ${(0,l.Iq)(this._newMode)?t.qy` <div class="options"> <ha-textfield .label="${this.hass.localize(`ui.panel.config.automation.editor.max.${this._newMode}`)}" type="number" name="max" .value="${this._newMax?.toString()??""}" @input="${this._valueChanged}" class="max"> </ha-textfield> </div> `:t.s6} <mwc-button @click="${this.closeDialog}" slot="secondaryAction"> ${this.hass.localize("ui.dialogs.generic.cancel")} </mwc-button> <mwc-button @click="${this._save}" slot="primaryAction"> ${this.hass.localize("ui.panel.config.automation.editor.change_mode")} </mwc-button> </ha-dialog> `}},{kind:"method",key:"_modeChanged",value:function(e){const i=e.currentTarget.value;this._newMode=i,(0,l.Iq)(i)?this._newMax||(this._newMax=d.bV):this._newMax=void 0}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();const i=e.target;"max"===i.name&&(this._newMax=Number(i.value))}},{kind:"method",key:"_save",value:function(){this._params.updateConfig({...this._params.config,mode:this._newMode,max:this._newMax}),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[h.RF,h.nA,t.AH`ha-textfield{display:block}ha-dialog{--dialog-content-padding:0}.options{padding:0 24px 24px 24px}ha-dialog-header a{color:inherit}`]}}]}}),t.WF)}};
//# sourceMappingURL=79831.pluZLS4l1As.js.map