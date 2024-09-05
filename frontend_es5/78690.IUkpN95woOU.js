"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[78690],{78690:function(e,i,a){var t=a(22858).A,s=a(33994).A;a.a(e,function(){var e=t(s().mark((function e(t,r){var n,d,l,o,c,h,u,v,_,y,k,p,m,g,b,f,w,A,x,B,z,C,I;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a.r(i),n=a(64599),d=a(33994),l=a(22858),o=a(35806),c=a(71008),h=a(62193),u=a(2816),v=a(27927),_=a(81027),y=a(50693),k=a(79641),a(72606),p=a(50289),m=a(29818),g=a(34897),a(13292),b=a(25756),a(29180),f=a(74994),a(90431),w=a(10725),A=a(55321),!(x=t([b,f])).then){e.next=35;break}return e.next=31,x;case 31:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=36;break;case 35:e.t0=x;case 36:B=e.t0,b=B[0],f=B[1],(0,v.A)([(0,m.EM)("dialog-device-registry-detail")],(function(e,i){var a,t,s=function(i){function a(){var i;(0,c.A)(this,a);for(var t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return i=(0,h.A)(this,a,[].concat(s)),e(i),i}return(0,u.A)(a,i),(0,o.A)(a)}(i);return{F:s,d:[{kind:"field",decorators:[(0,m.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.wk)()],key:"_nameByUser",value:void 0},{kind:"field",decorators:[(0,m.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,m.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,m.wk)()],key:"_areaId",value:void 0},{kind:"field",decorators:[(0,m.wk)()],key:"_labels",value:void 0},{kind:"field",decorators:[(0,m.wk)()],key:"_disabledBy",value:void 0},{kind:"field",decorators:[(0,m.wk)()],key:"_submitting",value:function(){return!1}},{kind:"method",key:"showDialog",value:(t=(0,l.A)((0,d.A)().mark((function e(i){return(0,d.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._params=i,this._error=void 0,this._nameByUser=this._params.device.name_by_user||"",this._areaId=this._params.device.area_id||"",this._labels=this._params.device.labels||[],this._disabledBy=this._params.device.disabled_by,e.next=8,this.updateComplete;case 8:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._error="",this._params=void 0,(0,g.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params)return p.s6;var e=this._params.device;return(0,p.qy)(z||(z=(0,n.A)([' <ha-dialog open @closed="','" .heading="','"> <div> ',' <div class="form"> <ha-textfield .value="','" @input="','" .label="','" .placeholder="','" .disabled="','" dialogInitialFocus></ha-textfield> <ha-area-picker .hass="','" .value="','" @value-changed="','"></ha-area-picker> <ha-labels-picker .hass="','" .value="','" @value-changed="','"></ha-labels-picker> <div class="row"> <ha-switch .checked="','" .disabled="','" @change="','"> </ha-switch> <div> <div> ',' </div> <div class="secondary"> '," ",' </div> </div> </div> </div> </div> <mwc-button slot="secondaryAction" @click="','" .disabled="','"> ',' </mwc-button> <mwc-button slot="primaryAction" @click="','" .disabled="','"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,(0,w.xn)(e,this.hass),this._error?(0,p.qy)(C||(C=(0,n.A)(['<ha-alert alert-type="error">',"</ha-alert> "])),this._error):"",this._nameByUser,this._nameChanged,this.hass.localize("ui.dialogs.device-registry-detail.name"),e.name||"",this._submitting,this.hass,this._areaId,this._areaPicked,this.hass,this._labels,this._labelsChanged,!this._disabledBy,"config_entry"===this._params.device.disabled_by,this._disabledByChanged,this.hass.localize("ui.dialogs.device-registry-detail.enabled_label",{type:this.hass.localize("ui.dialogs.device-registry-detail.type.".concat(e.entry_type||"device"))}),this._disabledBy&&"user"!==this._disabledBy?this.hass.localize("ui.dialogs.device-registry-detail.enabled_cause",{type:this.hass.localize("ui.dialogs.device-registry-detail.type.".concat(e.entry_type||"device")),cause:this.hass.localize("config_entry.disabled_by.".concat(this._disabledBy))}):"",this.hass.localize("ui.dialogs.device-registry-detail.enabled_description"),this.closeDialog,this._submitting,this.hass.localize("ui.common.cancel"),this._updateEntry,this._submitting,this.hass.localize("ui.dialogs.device-registry-detail.update"))}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._nameByUser=e.target.value}},{kind:"method",key:"_areaPicked",value:function(e){this._areaId=e.detail.value}},{kind:"method",key:"_labelsChanged",value:function(e){this._labels=e.detail.value}},{kind:"method",key:"_disabledByChanged",value:function(e){this._disabledBy=e.target.checked?null:"user"}},{kind:"method",key:"_updateEntry",value:(a=(0,l.A)((0,d.A)().mark((function e(){return(0,d.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,e.prev=1,e.next=4,this._params.updateEntry({name_by_user:this._nameByUser.trim()||null,area_id:this._areaId||null,labels:this._labels||null,disabled_by:this._disabledBy||null});case 4:this.closeDialog(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this._error=e.t0.message||this.hass.localize("ui.dialogs.device-registry-detail.unknown_error");case 10:return e.prev=10,this._submitting=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[1,7,10,13]])}))),function(){return a.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[A.RF,A.nA,(0,p.AH)(I||(I=(0,n.A)(["mwc-button.warning{margin-right:auto;margin-inline-end:auto;margin-inline-start:initial}ha-area-picker,ha-labels-picker,ha-textfield{display:block;margin-bottom:16px}ha-switch{margin-right:16px;margin-inline-end:16px;margin-inline-start:initial;direction:var(--direction)}.row{margin-top:8px;color:var(--primary-text-color);display:flex;align-items:center}"])))]}}]}}),p.WF),r(),e.next=46;break;case 43:e.prev=43,e.t2=e.catch(0),r(e.t2);case 46:case"end":return e.stop()}}),e,null,[[0,43]])})));return function(i,a){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=78690.IUkpN95woOU.js.map