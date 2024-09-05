"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[93423],{93423:function(e,t,i){var a=i(22858).A,s=i(33994).A;i.a(e,function(){var e=a(s().mark((function e(a,n){var r,o,d,h,u,c,l,m,_,p,v,k,f,g,y,b,T,x,w,E,D,A,S,I,O,C,z,M,q,F,L,N,U,Z,j,H,P;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.r(t),r=i(33994),o=i(22858),d=i(64599),h=i(35806),u=i(71008),c=i(62193),l=i(2816),m=i(27927),_=i(42942),p=i(48062),v=i(81027),k=i(82386),f=i(26098),g=i(36604),i(72606),y=i(35193),b=i(50289),T=i(29818),x=i(94100),w=i(35638),E=i(34897),D=i(42496),i(13292),i(88725),A=i(95589),S=i(29180),i(45920),i(90431),i(3316),I=i(38204),O=i(6121),C=i(55321),!(z=a([y,A])).then){e.next=48;break}return e.next=44,z;case 44:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=49;break;case 48:e.t0=z;case 49:M=e.t0,y=M[0],A=M[1],(0,m.A)([(0,T.EM)("dialog-todo-item-editor")],(function(e,t){var i,a,s,n=function(t){function i(){var t;(0,u.A)(this,i);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return t=(0,c.A)(this,i,[].concat(s)),e(t),t}return(0,l.A)(i,t),(0,h.A)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,T.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,T.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,T.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,T.wk)()],key:"_summary",value:function(){return""}},{kind:"field",decorators:[(0,T.wk)()],key:"_description",value:function(){return""}},{kind:"field",decorators:[(0,T.wk)()],key:"_due",value:void 0},{kind:"field",decorators:[(0,T.wk)()],key:"_checked",value:function(){return!1}},{kind:"field",decorators:[(0,T.wk)()],key:"_hasTime",value:function(){return!1}},{kind:"field",decorators:[(0,T.wk)()],key:"_submitting",value:function(){return!1}},{kind:"field",key:"_timeZone",value:void 0},{kind:"method",key:"showDialog",value:function(e){if(this._error=void 0,this._params=e,this._timeZone=(0,w.w)(this.hass.locale.time_zone,this.hass.config.time_zone),e.item){var t,i=e.item;this._checked=i.status===I.aO.Completed,this._summary=i.summary,this._description=i.description||"",this._hasTime=(null===(t=i.due)||void 0===t?void 0:t.includes("T"))||!1,this._due=i.due?new Date(this._hasTime?i.due:"".concat(i.due,"T00:00:00")):void 0}else this._hasTime=!1,this._checked=!1,this._due=void 0}},{kind:"method",key:"closeDialog",value:function(){this._params&&(this._error=void 0,this._params=void 0,this._due=void 0,this._summary="",this._description="",this._hasTime=!1,(0,E.r)(this,"dialog-closed",{dialog:this.localName}))}},{kind:"method",key:"render",value:function(){if(!this._params)return b.s6;var e=void 0===this._params.item,t=this._getLocaleStrings(this._due),i=t.dueDate,a=t.dueTime,s=this._todoListSupportsFeature(I.Ed.UPDATE_TODO_ITEM);return(0,b.qy)(q||(q=(0,d.A)([' <ha-dialog open @closed="','" scrimClickAction .heading="','"> <div class="content"> ',' <div class="flex"> <ha-checkbox .checked="','" @change="','" .disabled="','"></ha-checkbox> <ha-textfield class="summary" name="summary" .label="','" .value="','" required @input="','" .validationMessage="','" dialogInitialFocus .disabled="','"></ha-textfield> </div> '," "," </div> "," </ha-dialog> "])),this.closeDialog,(0,S.l)(this.hass,this.hass.localize("ui.components.todo.item.".concat(e?"add":"edit"))),this._error?(0,b.qy)(F||(F=(0,d.A)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this._checked,this._checkedCanged,e||!s,this.hass.localize("ui.components.todo.item.summary"),this._summary,this._handleSummaryChanged,this.hass.localize("ui.common.error_required"),!s,this._todoListSupportsFeature(I.Ed.SET_DESCRIPTION_ON_ITEM)?(0,b.qy)(L||(L=(0,d.A)(['<ha-textarea class="description" name="description" .label="','" .value="','" @input="','" autogrow .disabled="','"></ha-textarea>'])),this.hass.localize("ui.components.todo.item.description"),this._description,this._handleDescriptionChanged,!s):b.s6,this._todoListSupportsFeature(I.Ed.SET_DUE_DATE_ON_ITEM)||this._todoListSupportsFeature(I.Ed.SET_DUE_DATETIME_ON_ITEM)?(0,b.qy)(N||(N=(0,d.A)(['<div> <span class="label">',':</span> <div class="flex"> <ha-date-input .value="','" .locale="','" .disabled="','" @value-changed="','" canClear></ha-date-input> '," </div> </div>"])),this.hass.localize("ui.components.todo.item.due"),i,this.hass.locale,!s,this._dueDateChanged,this._todoListSupportsFeature(I.Ed.SET_DUE_DATETIME_ON_ITEM)?(0,b.qy)(U||(U=(0,d.A)(['<ha-time-input .value="','" .locale="','" .disabled="','" @value-changed="','"></ha-time-input>'])),a,this.hass.locale,!s,this._dueTimeChanged):b.s6):b.s6,e?(0,b.qy)(Z||(Z=(0,d.A)([' <mwc-button slot="primaryAction" @click="','" .disabled="','"> '," </mwc-button> "])),this._createItem,this._submitting,this.hass.localize("ui.components.todo.item.add")):(0,b.qy)(j||(j=(0,d.A)([' <mwc-button slot="primaryAction" @click="','" .disabled="','"> '," </mwc-button> "," "])),this._saveItem,!s||this._submitting,this.hass.localize("ui.components.todo.item.save"),this._todoListSupportsFeature(I.Ed.DELETE_TODO_ITEM)?(0,b.qy)(H||(H=(0,d.A)([' <mwc-button slot="secondaryAction" class="warning" @click="','" .disabled="','"> '," </mwc-button> "])),this._deleteItem,this._submitting,this.hass.localize("ui.components.todo.item.delete")):""))}},{kind:"method",key:"_todoListSupportsFeature",value:function(e){var t,i;if(null===(t=this._params)||void 0===t||!t.entity)return!1;var a=this.hass.states[null===(i=this._params)||void 0===i?void 0:i.entity];return a&&(0,D.$)(a,e)}},{kind:"field",key:"_getLocaleStrings",value:function(){var e=this;return(0,x.A)((function(t){return{dueDate:t?e._formatDate(t):void 0,dueTime:t?e._formatTime(t):void 0}}))}},{kind:"method",key:"_formatDate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._timeZone;return(0,y.qD)(e,t,"yyyy-MM-dd")}},{kind:"method",key:"_formatTime",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._timeZone;return this._hasTime?(0,y.qD)(e,t,"HH:mm:ss"):void 0}},{kind:"method",key:"_parseDate",value:function(e){return(0,y.ay)(e,{timeZone:this._timeZone})}},{kind:"method",key:"_checkedCanged",value:function(e){this._checked=e.target.checked}},{kind:"method",key:"_handleSummaryChanged",value:function(e){this._summary=e.target.value}},{kind:"method",key:"_handleDescriptionChanged",value:function(e){this._description=e.target.value}},{kind:"method",key:"_dueDateChanged",value:function(e){if(e.detail.value){var t=this._due?this._formatTime(this._due):void 0;this._due=this._parseDate("".concat(e.detail.value).concat(t?"T".concat(t):""))}else this._due=void 0}},{kind:"method",key:"_dueTimeChanged",value:function(e){this._hasTime=!0,this._due=this._parseDate("".concat(this._formatDate(this._due||new Date),"T").concat(e.detail.value))}},{kind:"method",key:"_createItem",value:(s=(0,o.A)((0,r.A)().mark((function e(){return(0,r.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._summary){e.next=3;break}return this._error=this.hass.localize("ui.components.todo.item.not_all_required_fields"),e.abrupt("return");case 3:return this._submitting=!0,e.prev=4,e.next=7,(0,I.wE)(this.hass,this._params.entity,{summary:this._summary,description:this._description,due:this._due?this._hasTime?this._due.toISOString():this._formatDate(this._due):void 0});case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(4),this._error=e.t0?e.t0.message:"Unknown error",e.abrupt("return");case 13:return e.prev=13,this._submitting=!1,e.finish(13);case 16:this.closeDialog();case 17:case"end":return e.stop()}}),e,this,[[4,9,13,16]])}))),function(){return s.apply(this,arguments)})},{kind:"method",key:"_saveItem",value:(a=(0,o.A)((0,r.A)().mark((function e(){var t;return(0,r.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._summary){e.next=3;break}return this._error=this.hass.localize("ui.components.todo.item.not_all_required_fields"),e.abrupt("return");case 3:return this._submitting=!0,t=this._params.item,e.prev=5,e.next=8,(0,I.fk)(this.hass,this._params.entity,Object.assign(Object.assign({},t),{},{summary:this._summary,description:this._description||(this._todoListSupportsFeature(I.Ed.SET_DESCRIPTION_ON_ITEM)?null:void 0),due:this._due?this._hasTime?this._due.toISOString():this._formatDate(this._due):this._todoListSupportsFeature(I.Ed.SET_DUE_DATETIME_ON_ITEM)||this._todoListSupportsFeature(I.Ed.SET_DUE_DATE_ON_ITEM)?null:void 0,status:this._checked?I.aO.Completed:I.aO.NeedsAction}));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),this._error=e.t0?e.t0.message:"Unknown error",e.abrupt("return");case 14:return e.prev=14,this._submitting=!1,e.finish(14);case 17:this.closeDialog();case 18:case"end":return e.stop()}}),e,this,[[5,10,14,17]])}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"_deleteItem",value:(i=(0,o.A)((0,r.A)().mark((function e(){var t;return(0,r.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,t=this._params.item,e.next=4,(0,O.showConfirmationDialog)(this,{title:this.hass.localize("ui.components.todo.item.confirm_delete.delete"),text:this.hass.localize("ui.components.todo.item.confirm_delete.prompt"),destructive:!0,confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel")});case 4:if(e.sent){e.next=8;break}return this._submitting=!1,e.abrupt("return");case 8:return e.prev=8,e.next=11,(0,I.K1)(this.hass,this._params.entity,[t.uid]);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(8),this._error=e.t0?e.t0.message:"Unknown error",e.abrupt("return");case 17:return e.prev=17,this._submitting=!1,e.finish(17);case 20:this.closeDialog();case 21:case"end":return e.stop()}}),e,this,[[8,13,17,20]])}))),function(){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[C.nA,(0,b.AH)(P||(P=(0,d.A)(["@media all and (min-width:450px) and (min-height:500px){ha-dialog{--mdc-dialog-min-width:min(600px, 95vw);--mdc-dialog-max-width:min(600px, 95vw)}}ha-alert{display:block;margin-bottom:16px}ha-textarea,ha-textfield{display:block;width:100%}ha-checkbox{margin-top:4px}ha-textarea{margin-bottom:16px}ha-date-input{flex-grow:1}ha-time-input{margin-left:16px;margin-inline-start:16px;margin-inline-end:initial}.flex{display:flex;justify-content:space-between}.label{font-size:12px;font-weight:500;color:var(--input-label-ink-color)}.date-range-details-content{display:inline-block}ha-svg-icon{width:40px;margin-right:8px;margin-inline-end:16px;margin-inline-start:initial;direction:var(--direction);vertical-align:top}.key{display:inline-block;vertical-align:top}.value{display:inline-block;vertical-align:top}"])))]}}]}}),b.WF),n(),e.next=59;break;case 56:e.prev=56,e.t2=e.catch(0),n(e.t2);case 59:case"end":return e.stop()}}),e,null,[[0,56]])})));return function(t,i){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=93423.7mMsOhJ4aJ0.js.map