"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[40821],{40821:function(e,s,t){t.r(s);var i,a,n,r,o,h,l,c,d,u,p,g=t(658),_=t(64599),m=t(33994),f=t(22858),v=t(35806),y=t(71008),k=t(62193),w=t(2816),A=t(27927),b=(t(81027),t(44124),t(82386),t(97741),t(50693),t(26098),t(39790),t(36604),t(79641),t(253),t(94438),t(16891),t(50289)),x=t(29818),z=(t(13292),t(77372),t(29180)),C=(t(24284),t(4169),t(27120),t(24640),t(88400),t(60203),t(90431),t(94526)),O=t(71443),q=t(6121),E=t(55321),L=t(50070),j="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";(0,A.A)([(0,x.EM)("dialog-user-detail")],(function(e,s){var t,A,D,M,H,P=function(s){function t(){var s;(0,y.A)(this,t);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return s=(0,k.A)(this,t,[].concat(a)),e(s),s}return(0,w.A)(t,s),(0,v.A)(t)}(s);return{F:P,d:[{kind:"field",decorators:[(0,x.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.wk)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,x.wk)()],key:"_isAdmin",value:void 0},{kind:"field",decorators:[(0,x.wk)()],key:"_localOnly",value:void 0},{kind:"field",decorators:[(0,x.wk)()],key:"_isActive",value:void 0},{kind:"field",decorators:[(0,x.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,x.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,x.wk)()],key:"_submitting",value:function(){return!1}},{kind:"method",key:"showDialog",value:(H=(0,f.A)((0,m.A)().mark((function e(s){return(0,m.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._params=s,this._error=void 0,this._name=s.entry.name||"",this._isAdmin=s.entry.group_ids.includes(O.wj),this._localOnly=s.entry.local_only,this._isActive=s.entry.is_active,e.next=8,this.updateComplete;case 8:case"end":return e.stop()}}),e,this)}))),function(e){return H.apply(this,arguments)})},{kind:"method",key:"render",value:function(){var e,s,t;if(!this._params)return b.s6;var p=this._params.entry,m=(0,O.xg)(this.hass,p,!0);return(0,b.qy)(i||(i=(0,_.A)([' <ha-dialog open @closed="','" scrimClickAction escapeKeyAction .heading="','"> <div> ',' <div class="secondary"> ',": ","<br> </div> ",' <div class="form"> '," ",' <ha-settings-row> <span slot="heading"> ',' </span> <span slot="description"> ',' </span> <ha-switch .disabled="','" .checked="','" @change="','"> </ha-switch> </ha-settings-row> <ha-settings-row> <span slot="heading"> ',' </span> <span slot="description"> ',' </span> <ha-switch .disabled="','" .checked="','" @change="','"> </ha-switch> </ha-settings-row> <ha-settings-row> <span slot="heading"> ',' </span> <span slot="description"> ',' </span> <ha-switch .disabled="','" .checked="','" @change="','"> </ha-switch> </ha-settings-row> '," </div> ",' </div> <div slot="secondaryAction"> <ha-button class="warning" @click="','" .disabled="','"> ',' </ha-button> </div> <div slot="primaryAction"> <ha-button @click="','" .disabled="','"> '," </ha-button> </div> </ha-dialog> "])),this._close,(0,z.l)(this.hass,p.name),this._error?(0,b.qy)(a||(a=(0,_.A)(['<div class="error">',"</div>"])),this._error):b.s6,this.hass.localize("ui.panel.config.users.editor.id"),p.id,0===m.length?b.s6:(0,b.qy)(n||(n=(0,_.A)([' <div class="badge-container"> '," </div> "])),m.map((function(e){var s=(0,g.A)(e,2),t=s[0],i=s[1];return(0,b.qy)(r||(r=(0,_.A)([' <ha-label> <ha-svg-icon slot="icon" .path="','"></ha-svg-icon> '," </ha-label> "])),t,i)}))),p.system_generated?b.s6:(0,b.qy)(o||(o=(0,_.A)([' <ha-textfield dialogInitialFocus .value="','" @input="','" .label="','"></ha-textfield> <ha-settings-row> <span slot="heading"> ',' </span> <span slot="description">',"</span> "," </ha-settings-row> "])),this._name,this._nameChanged,this.hass.localize("ui.panel.config.users.editor.name"),this.hass.localize("ui.panel.config.users.editor.username"),p.username,null!==(e=this.hass.user)&&void 0!==e&&e.is_owner?(0,b.qy)(h||(h=(0,_.A)([' <ha-icon-button .path="','" @click="','" .label="','"> </ha-icon-button> '])),j,this._changeUsername,this.hass.localize("ui.panel.config.users.editor.change_username")):b.s6),!p.system_generated&&null!==(s=this.hass.user)&&void 0!==s&&s.is_owner?(0,b.qy)(l||(l=(0,_.A)([' <ha-settings-row> <span slot="heading"> ',' </span> <span slot="description">************</span> '," </ha-settings-row> "])),this.hass.localize("ui.panel.config.users.editor.password"),null!==(t=this.hass.user)&&void 0!==t&&t.is_owner?(0,b.qy)(c||(c=(0,_.A)([' <ha-icon-button .path="','" @click="','" .label="','"> </ha-icon-button> '])),j,this._changePassword,this.hass.localize("ui.panel.config.users.editor.change_password")):b.s6):b.s6,this.hass.localize("ui.panel.config.users.editor.active"),this.hass.localize("ui.panel.config.users.editor.active_description"),p.system_generated||p.is_owner,this._isActive,this._activeChanged,this.hass.localize("ui.panel.config.users.editor.local_access_only"),this.hass.localize("ui.panel.config.users.editor.local_access_only_description"),p.system_generated,this._localOnly,this._localOnlyChanged,this.hass.localize("ui.panel.config.users.editor.admin"),this.hass.localize("ui.panel.config.users.editor.admin_description"),p.system_generated||p.is_owner,this._isAdmin,this._adminChanged,this._isAdmin||p.system_generated?b.s6:(0,b.qy)(d||(d=(0,_.A)([' <ha-alert alert-type="info"> '," </ha-alert> "])),this.hass.localize("ui.panel.config.users.users_privileges_note")),p.system_generated?(0,b.qy)(u||(u=(0,_.A)([' <ha-alert alert-type="info"> '," </ha-alert> "])),this.hass.localize("ui.panel.config.users.editor.system_generated_read_only_users")):b.s6,this._deleteEntry,this._submitting||p.system_generated||p.is_owner,this.hass.localize("ui.panel.config.users.editor.delete_user"),this._updateEntry,!this._name||this._submitting||p.system_generated,this.hass.localize("ui.panel.config.users.editor.update_user"))}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._name=e.target.value}},{kind:"method",key:"_adminChanged",value:function(e){this._isAdmin=e.target.checked}},{kind:"method",key:"_localOnlyChanged",value:function(e){this._localOnly=e.target.checked}},{kind:"method",key:"_activeChanged",value:function(e){this._isActive=e.target.checked}},{kind:"method",key:"_updateEntry",value:(M=(0,f.A)((0,m.A)().mark((function e(){return(0,m.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,e.prev=1,e.next=4,this._params.updateEntry({name:this._name.trim(),is_active:this._isActive,group_ids:[this._isAdmin?O.wj:O.eR],local_only:this._localOnly});case 4:this._close(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this._error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||"Unknown error";case 10:return e.prev=10,this._submitting=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[1,7,10,13]])}))),function(){return M.apply(this,arguments)})},{kind:"method",key:"_deleteEntry",value:(D=(0,f.A)((0,m.A)().mark((function e(){return(0,m.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,e.prev=1,e.next=4,this._params.removeEntry();case 4:if(!e.sent){e.next=6;break}this._params=void 0;case 6:return e.prev=6,this._submitting=!1,e.finish(6);case 9:case"end":return e.stop()}}),e,this,[[1,,6,9]])}))),function(){return D.apply(this,arguments)})},{kind:"method",key:"_changeUsername",value:(A=(0,f.A)((0,m.A)().mark((function e(){var s,t;return(0,m.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(s=this._params)||void 0===s?void 0:s.entry.credentials.find((function(e){return"homeassistant"===e.type}))){e.next=4;break}return(0,q.showAlertDialog)(this,{title:"No Home Assistant credentials found."}),e.abrupt("return");case 4:return e.next=6,(0,q.showPromptDialog)(this,{inputLabel:this.hass.localize("ui.panel.config.users.change_username.new_username"),confirmText:this.hass.localize("ui.panel.config.users.change_username.change"),title:this.hass.localize("ui.panel.config.users.change_username.caption"),defaultValue:this._params.entry.username});case 6:if(!(t=e.sent)){e.next=19;break}return e.prev=8,e.next=11,(0,C.Gk)(this.hass,this._params.entry.id,t);case 11:this._params=Object.assign(Object.assign({},this._params),{},{entry:Object.assign(Object.assign({},this._params.entry),{},{username:t})}),this._params.replaceEntry(this._params.entry),(0,q.showAlertDialog)(this,{text:this.hass.localize("ui.panel.config.users.change_username.username_changed")}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),(0,q.showAlertDialog)(this,{title:this.hass.localize("ui.panel.config.users.change_username.failed"),text:e.t0.message});case 19:case"end":return e.stop()}}),e,this,[[8,16]])}))),function(){return A.apply(this,arguments)})},{kind:"method",key:"_changePassword",value:(t=(0,f.A)((0,m.A)().mark((function e(){var s;return(0,m.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(s=this._params)||void 0===s?void 0:s.entry.credentials.find((function(e){return"homeassistant"===e.type}))){e.next=4;break}return(0,q.showAlertDialog)(this,{title:"No Home Assistant credentials found."}),e.abrupt("return");case 4:(0,L.M)(this,{userId:this._params.entry.id});case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{kind:"method",key:"_close",value:function(){this._params=void 0}},{kind:"get",static:!0,key:"styles",value:function(){return[E.nA,(0,b.AH)(p||(p=(0,_.A)(["ha-dialog{--mdc-dialog-max-width:500px}.form{padding-top:16px}.secondary{color:var(--secondary-text-color)}ha-textfield{display:block}.badge-container{margin-top:4px}.badge-container>*{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:0;margin-inline-end:4px;margin-inline-start:0}ha-settings-row{padding:0}"])))]}}]}}),b.WF)},50070:function(e,s,t){t.d(s,{M:function(){return n}});t(95737),t(39790),t(66457),t(99019),t(96858);var i=t(34897),a=function(){return t.e(16442).then(t.bind(t,16442))},n=function(e,s){(0,i.r)(e,"show-dialog",{dialogTag:"dialog-admin-change-password",dialogImport:a,dialogParams:s})}}}]);
//# sourceMappingURL=40821.es9JZNw3kSQ.js.map