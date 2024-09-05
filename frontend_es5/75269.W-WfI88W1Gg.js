"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[75269],{75269:function(e,t,i){var a=i(22858).A,n=i(33994).A;i.a(e,function(){var e=a(n().mark((function e(a,r){var s,o,l,c,h,d,u,p,_,m,k,v,f,y,g,b,w,A,x,E,z,C,V,q;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.r(t),s=i(33994),o=i(22858),l=i(64599),c=i(35806),h=i(71008),d=i(62193),u=i(2816),p=i(27927),_=i(42942),m=i(48062),k=i(81027),v=i(50693),f=i(79641),i(72606),y=i(50289),g=i(29818),b=i(34897),i(13292),w=i(29180),i(24284),i(60203),i(90431),i(45920),A=i(85288),i(27536),x=i(55321),!(E=a([A])).then){e.next=41;break}return e.next=37,E;case 37:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=42;break;case 41:e.t0=E;case 42:A=e.t0[0],(0,p.A)([(0,g.EM)("dialog-label-detail")],(function(e,t){var i,a,n=function(t){function i(){var t;(0,h.A)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=(0,d.A)(this,i,[].concat(n)),e(t),t}return(0,u.A)(i,t),(0,c.A)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,g.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_icon",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_color",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_description",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_submitting",value:function(){return!1}},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._error=void 0,this._params.entry?(this._name=this._params.entry.name||"",this._icon=this._params.entry.icon||"",this._color=this._params.entry.color||"",this._description=this._params.entry.description||""):(this._name=this._params.suggestedName||"",this._icon="",this._color="",this._description=""),document.body.addEventListener("keydown",this._handleKeyPress)}},{kind:"field",key:"_handleKeyPress",value:function(){return function(e){"Escape"===e.key&&e.stopPropagation()}}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,b.r)(this,"dialog-closed",{dialog:this.localName}),document.body.removeEventListener("keydown",this._handleKeyPress)}},{kind:"method",key:"render",value:function(){return this._params?(0,y.qy)(z||(z=(0,l.A)([' <ha-dialog open @closed="','" scrimClickAction escapeKeyAction .heading="','"> <div> ',' <div class="form"> <ha-textfield dialogInitialFocus .value="','" .configValue="','" @input="','" .label="','" .validationMessage="','" required></ha-textfield> <ha-icon-picker .value="','" .hass="','" .configValue="','" @value-changed="','" .label="','"></ha-icon-picker> <ha-color-picker .value="','" .configValue="','" .hass="','" @value-changed="','" .label="','"></ha-color-picker> <ha-textarea .value="','" .configValue="','" @input="','" .label="','"></ha-textarea> </div> </div> ',' <mwc-button slot="primaryAction" @click="','" .disabled="','"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,(0,w.l)(this.hass,this._params.entry?this._params.entry.name||this._params.entry.label_id:this.hass.localize("ui.panel.config.labels.detail.new_label")),this._error?(0,y.qy)(C||(C=(0,l.A)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this._name,"name",this._input,this.hass.localize("ui.panel.config.labels.detail.name"),this.hass.localize("ui.panel.config.labels.detail.required_error_msg"),this._icon,this.hass,"icon",this._valueChanged,this.hass.localize("ui.panel.config.labels.detail.icon"),this._color,"color",this.hass,this._valueChanged,this.hass.localize("ui.panel.config.labels.detail.color"),this._description,"description",this._input,this.hass.localize("ui.panel.config.labels.detail.description"),this._params.entry&&this._params.removeEntry?(0,y.qy)(V||(V=(0,l.A)([' <mwc-button slot="secondaryAction" class="warning" @click="','" .disabled="','"> '," </mwc-button> "])),this._deleteEntry,this._submitting,this.hass.localize("ui.panel.config.labels.detail.delete")):y.s6,this._updateEntry,this._submitting||!this._name,this._params.entry?this.hass.localize("ui.panel.config.labels.detail.update"):this.hass.localize("ui.panel.config.labels.detail.create")):y.s6}},{kind:"method",key:"_input",value:function(e){var t=e.target,i=t.configValue;this._error=void 0,this["_".concat(i)]=t.value}},{kind:"method",key:"_valueChanged",value:function(e){var t=e.target.configValue;this._error=void 0,this["_".concat(t)]=e.detail.value||""}},{kind:"method",key:"_updateEntry",value:(a=(0,o.A)((0,s.A)().mark((function e(){var t,i;return(0,s.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._submitting=!0,e.prev=1,i={name:this._name.trim(),icon:this._icon.trim()||null,color:this._color.trim()||null,description:this._description.trim()||null},!this._params.entry){e.next=9;break}return e.next=6,this._params.updateEntry(i);case 6:t=e.sent,e.next=12;break;case 9:return e.next=11,this._params.createEntry(i);case 11:t=e.sent;case 12:this.closeDialog(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),this._error=e.t0?e.t0.message:"Unknown error";case 18:return e.prev=18,this._submitting=!1,e.finish(18);case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e,this,[[1,15,18,21]])}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"_deleteEntry",value:(i=(0,o.A)((0,s.A)().mark((function e(){return(0,s.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,e.prev=1,e.next=4,this._params.removeEntry();case 4:if(!e.sent){e.next=6;break}this._params=void 0;case 6:return e.prev=6,this._submitting=!1,e.finish(6);case 9:case"end":return e.stop()}}),e,this,[[1,,6,9]])}))),function(){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[x.nA,(0,y.AH)(q||(q=(0,l.A)(["a{color:var(--primary-color)}ha-color-picker,ha-icon-picker,ha-textarea,ha-textfield{display:block}ha-color-picker,ha-textarea{margin-top:16px}"])))]}}]}}),y.WF),r(),e.next=50;break;case 47:e.prev=47,e.t2=e.catch(0),r(e.t2);case 50:case"end":return e.stop()}}),e,null,[[0,47]])})));return function(t,i){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=75269.W-WfI88W1Gg.js.map