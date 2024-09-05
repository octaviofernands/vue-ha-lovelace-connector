export const id=93423;export const ids=[93423];export const modules={93423:(t,e,i)=>{i.a(t,(async(t,s)=>{try{i.r(e);var a=i(36312),o=(i(72606),i(35193)),d=i(50289),n=i(29818),h=i(94100),r=i(35638),l=i(34897),u=i(42496),c=(i(13292),i(88725),i(95589)),m=i(29180),_=(i(45920),i(90431),i(3316),i(38204)),p=i(6121),k=i(55321),v=t([o,r,c]);[o,r,c]=v.then?(await v)():v;(0,a.A)([(0,n.EM)("dialog-todo-item-editor")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_summary",value:()=>""},{kind:"field",decorators:[(0,n.wk)()],key:"_description",value:()=>""},{kind:"field",decorators:[(0,n.wk)()],key:"_due",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_checked",value:()=>!1},{kind:"field",decorators:[(0,n.wk)()],key:"_hasTime",value:()=>!1},{kind:"field",decorators:[(0,n.wk)()],key:"_submitting",value:()=>!1},{kind:"field",key:"_timeZone",value:void 0},{kind:"method",key:"showDialog",value:function(t){if(this._error=void 0,this._params=t,this._timeZone=(0,r.w)(this.hass.locale.time_zone,this.hass.config.time_zone),t.item){const e=t.item;this._checked=e.status===_.aO.Completed,this._summary=e.summary,this._description=e.description||"",this._hasTime=e.due?.includes("T")||!1,this._due=e.due?new Date(this._hasTime?e.due:`${e.due}T00:00:00`):void 0}else this._hasTime=!1,this._checked=!1,this._due=void 0}},{kind:"method",key:"closeDialog",value:function(){this._params&&(this._error=void 0,this._params=void 0,this._due=void 0,this._summary="",this._description="",this._hasTime=!1,(0,l.r)(this,"dialog-closed",{dialog:this.localName}))}},{kind:"method",key:"render",value:function(){if(!this._params)return d.s6;const t=void 0===this._params.item,{dueDate:e,dueTime:i}=this._getLocaleStrings(this._due),s=this._todoListSupportsFeature(_.Ed.UPDATE_TODO_ITEM);return d.qy` <ha-dialog open @closed="${this.closeDialog}" scrimClickAction .heading="${(0,m.l)(this.hass,this.hass.localize("ui.components.todo.item."+(t?"add":"edit")))}"> <div class="content"> ${this._error?d.qy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""} <div class="flex"> <ha-checkbox .checked="${this._checked}" @change="${this._checkedCanged}" .disabled="${t||!s}"></ha-checkbox> <ha-textfield class="summary" name="summary" .label="${this.hass.localize("ui.components.todo.item.summary")}" .value="${this._summary}" required @input="${this._handleSummaryChanged}" .validationMessage="${this.hass.localize("ui.common.error_required")}" dialogInitialFocus .disabled="${!s}"></ha-textfield> </div> ${this._todoListSupportsFeature(_.Ed.SET_DESCRIPTION_ON_ITEM)?d.qy`<ha-textarea class="description" name="description" .label="${this.hass.localize("ui.components.todo.item.description")}" .value="${this._description}" @input="${this._handleDescriptionChanged}" autogrow .disabled="${!s}"></ha-textarea>`:d.s6} ${this._todoListSupportsFeature(_.Ed.SET_DUE_DATE_ON_ITEM)||this._todoListSupportsFeature(_.Ed.SET_DUE_DATETIME_ON_ITEM)?d.qy`<div> <span class="label">${this.hass.localize("ui.components.todo.item.due")}:</span> <div class="flex"> <ha-date-input .value="${e}" .locale="${this.hass.locale}" .disabled="${!s}" @value-changed="${this._dueDateChanged}" canClear></ha-date-input> ${this._todoListSupportsFeature(_.Ed.SET_DUE_DATETIME_ON_ITEM)?d.qy`<ha-time-input .value="${i}" .locale="${this.hass.locale}" .disabled="${!s}" @value-changed="${this._dueTimeChanged}"></ha-time-input>`:d.s6} </div> </div>`:d.s6} </div> ${t?d.qy` <mwc-button slot="primaryAction" @click="${this._createItem}" .disabled="${this._submitting}"> ${this.hass.localize("ui.components.todo.item.add")} </mwc-button> `:d.qy` <mwc-button slot="primaryAction" @click="${this._saveItem}" .disabled="${!s||this._submitting}"> ${this.hass.localize("ui.components.todo.item.save")} </mwc-button> ${this._todoListSupportsFeature(_.Ed.DELETE_TODO_ITEM)?d.qy` <mwc-button slot="secondaryAction" class="warning" @click="${this._deleteItem}" .disabled="${this._submitting}"> ${this.hass.localize("ui.components.todo.item.delete")} </mwc-button> `:""} `} </ha-dialog> `}},{kind:"method",key:"_todoListSupportsFeature",value:function(t){if(!this._params?.entity)return!1;const e=this.hass.states[this._params?.entity];return e&&(0,u.$)(e,t)}},{kind:"field",key:"_getLocaleStrings",value(){return(0,h.A)((t=>({dueDate:t?this._formatDate(t):void 0,dueTime:t?this._formatTime(t):void 0})))}},{kind:"method",key:"_formatDate",value:function(t,e=this._timeZone){return(0,o.qD)(t,e,"yyyy-MM-dd")}},{kind:"method",key:"_formatTime",value:function(t,e=this._timeZone){return this._hasTime?(0,o.qD)(t,e,"HH:mm:ss"):void 0}},{kind:"method",key:"_parseDate",value:function(t){return(0,o.ay)(t,{timeZone:this._timeZone})}},{kind:"method",key:"_checkedCanged",value:function(t){this._checked=t.target.checked}},{kind:"method",key:"_handleSummaryChanged",value:function(t){this._summary=t.target.value}},{kind:"method",key:"_handleDescriptionChanged",value:function(t){this._description=t.target.value}},{kind:"method",key:"_dueDateChanged",value:function(t){if(!t.detail.value)return void(this._due=void 0);const e=this._due?this._formatTime(this._due):void 0;this._due=this._parseDate(`${t.detail.value}${e?`T${e}`:""}`)}},{kind:"method",key:"_dueTimeChanged",value:function(t){this._hasTime=!0,this._due=this._parseDate(`${this._formatDate(this._due||new Date)}T${t.detail.value}`)}},{kind:"method",key:"_createItem",value:async function(){if(this._summary){this._submitting=!0;try{await(0,_.wE)(this.hass,this._params.entity,{summary:this._summary,description:this._description,due:this._due?this._hasTime?this._due.toISOString():this._formatDate(this._due):void 0})}catch(t){return void(this._error=t?t.message:"Unknown error")}finally{this._submitting=!1}this.closeDialog()}else this._error=this.hass.localize("ui.components.todo.item.not_all_required_fields")}},{kind:"method",key:"_saveItem",value:async function(){if(!this._summary)return void(this._error=this.hass.localize("ui.components.todo.item.not_all_required_fields"));this._submitting=!0;const t=this._params.item;try{await(0,_.fk)(this.hass,this._params.entity,{...t,summary:this._summary,description:this._description||(this._todoListSupportsFeature(_.Ed.SET_DESCRIPTION_ON_ITEM)?null:void 0),due:this._due?this._hasTime?this._due.toISOString():this._formatDate(this._due):this._todoListSupportsFeature(_.Ed.SET_DUE_DATETIME_ON_ITEM)||this._todoListSupportsFeature(_.Ed.SET_DUE_DATE_ON_ITEM)?null:void 0,status:this._checked?_.aO.Completed:_.aO.NeedsAction})}catch(t){return void(this._error=t?t.message:"Unknown error")}finally{this._submitting=!1}this.closeDialog()}},{kind:"method",key:"_deleteItem",value:async function(){this._submitting=!0;const t=this._params.item;if(await(0,p.showConfirmationDialog)(this,{title:this.hass.localize("ui.components.todo.item.confirm_delete.delete"),text:this.hass.localize("ui.components.todo.item.confirm_delete.prompt"),destructive:!0,confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel")})){try{await(0,_.K1)(this.hass,this._params.entity,[t.uid])}catch(t){return void(this._error=t?t.message:"Unknown error")}finally{this._submitting=!1}this.closeDialog()}else this._submitting=!1}},{kind:"get",static:!0,key:"styles",value:function(){return[k.nA,d.AH`@media all and (min-width:450px) and (min-height:500px){ha-dialog{--mdc-dialog-min-width:min(600px, 95vw);--mdc-dialog-max-width:min(600px, 95vw)}}ha-alert{display:block;margin-bottom:16px}ha-textarea,ha-textfield{display:block;width:100%}ha-checkbox{margin-top:4px}ha-textarea{margin-bottom:16px}ha-date-input{flex-grow:1}ha-time-input{margin-left:16px;margin-inline-start:16px;margin-inline-end:initial}.flex{display:flex;justify-content:space-between}.label{font-size:12px;font-weight:500;color:var(--input-label-ink-color)}.date-range-details-content{display:inline-block}ha-svg-icon{width:40px;margin-right:8px;margin-inline-end:16px;margin-inline-start:initial;direction:var(--direction);vertical-align:top}.key{display:inline-block;vertical-align:top}.value{display:inline-block;vertical-align:top}`]}}]}}),d.WF);s()}catch(t){s(t)}}))}};
//# sourceMappingURL=93423.q_GfyD51Tdg.js.map