"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[33869],{33869:function(e,t,a){var i=a(22858).A,o=a(33994).A;a.a(e,function(){var e=i(o().mark((function e(i,r){var n,s,l,c,d,h,u,v,f,p,m,_,w,k,g,b,x,y,A,z,C,E,L,D,M,W;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a.r(t),n=a(33994),s=a(22858),l=a(64599),c=a(35806),d=a(71008),h=a(62193),u=a(2816),v=a(27927),f=a(35890),p=a(81027),m=a(96087),a(72606),_=a(51431),w=a(50289),k=a(29818),g=a(85323),b=a(66419),x=a(16569),a(32885),a(31979),a(4169),y=a(6121),A=a(55321),z=a(18589),a(94110),C=a(50118),!(E=i([m])).then){e.next=37;break}return e.next=33,E;case 33:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=38;break;case 37:e.t0=E;case 38:m=e.t0[0],M=(0,b.NW)({title:(0,b.lq)((0,b.Yj)()),views:(0,b.YO)((0,b.Ik)())}),W=(0,b.NW)({strategy:(0,b.NW)({type:(0,b.Yj)()})}),(0,v.A)([(0,k.EM)("hui-editor")],(function(e,t){var a,i,o,r=function(t){function a(){var t;(0,d.A)(this,a);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return t=(0,h.A)(this,a,[].concat(o)),e(t),t}return(0,u.A)(a,t),(0,c.A)(a)}(t);return{F:r,d:[{kind:"field",decorators:[(0,k.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.MZ)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,k.MZ)({attribute:!1})],key:"closeEditor",value:void 0},{kind:"field",decorators:[(0,k.wk)()],key:"_saving",value:void 0},{kind:"field",decorators:[(0,k.wk)()],key:"_changed",value:void 0},{kind:"method",key:"render",value:function(){return(0,w.qy)(L||(L=(0,l.A)([' <ha-top-app-bar-fixed> <ha-icon-button slot="navigationIcon" .path="','" @click="','" .label="','"></ha-icon-button> <div slot="title"> ',' </div> <div slot="actionItems" class="save-button ','"> ',' </div> <mwc-button raised slot="actionItems" @click="','" .disabled="','">','</mwc-button> <div class="content"> <ha-code-editor mode="yaml" autofocus autocomplete-entities autocomplete-icons .hass="','" @value-changed="','" @editor-save="','" dir="ltr"> </ha-code-editor> </div> </ha-top-app-bar-fixed> '])),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._closeEditor,this.hass.localize("ui.common.close"),this.hass.localize("ui.panel.lovelace.editor.raw_editor.header"),(0,g.H)({saved:!1===this._saving||!0===this._changed}),this._changed?this.hass.localize("ui.panel.lovelace.editor.raw_editor.unsaved_changes"):this.hass.localize("ui.panel.lovelace.editor.raw_editor.saved"),this._handleSave,!this._changed,this.hass.localize("ui.panel.lovelace.editor.raw_editor.save"),this.hass,this._yamlChanged,this._handleSave)}},{kind:"method",key:"firstUpdated",value:function(e){(0,f.A)(r,"firstUpdated",this,3)([e]),this.yamlEditor.value=(0,_.dump)(this.lovelace.rawConfig)}},{kind:"method",key:"updated",value:function(e){var t=this,a=e.get("lovelace");!this._saving&&a&&this.lovelace&&a.rawConfig!==this.lovelace.rawConfig&&!(0,x.b)(a.rawConfig,this.lovelace.rawConfig)&&(0,z.P)(this,{message:this.hass.localize("ui.panel.lovelace.editor.raw_editor.lovelace_changed"),action:{action:function(){t.yamlEditor.value=(0,_.dump)(t.lovelace.rawConfig)},text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.reload")},duration:-1,dismissable:!1})}},{kind:"get",static:!0,key:"styles",value:function(){return[A.RF,(0,w.AH)(D||(D=(0,l.A)([":host{--code-mirror-height:100%;--app-header-background-color:var(\n            --app-header-edit-background-color,\n            #455a64\n          );--app-header-text-color:var(--app-header-edit-text-color, #fff)}mwc-button[disabled]{background-color:var(--mdc-theme-on-primary);border-radius:4px}.content{height:calc(100vh - var(--header-height))}.comments{font-size:16px}.save-button{opacity:0;font-size:14px;padding:0px 10px}.saved{opacity:1}"])))]}},{kind:"method",key:"_yamlChanged",value:function(){this._changed=(0,m.mk)(this.yamlEditor.codemirror.state)>0,this._changed&&!window.onbeforeunload?window.onbeforeunload=function(){return!0}:!this._changed&&window.onbeforeunload&&(window.onbeforeunload=null)}},{kind:"method",key:"_closeEditor",value:(o=(0,s.A)((0,n.A)().mark((function e(){return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this._changed,!e.t0){e.next=5;break}return e.next=4,(0,y.showConfirmationDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_changes"),dismissText:this.hass.localize("ui.common.stay"),confirmText:this.hass.localize("ui.common.leave")});case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:window.onbeforeunload=null,this.closeEditor&&this.closeEditor();case 9:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{kind:"method",key:"_removeConfig",value:(i=(0,s.A)((0,n.A)().mark((function e(){return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.lovelace.deleteConfig();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,y.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_remove",{error:e.t0})});case 8:window.onbeforeunload=null,this.closeEditor&&this.closeEditor();case 10:case"end":return e.stop()}}),e,this,[[0,5]])}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"_handleSave",value:(a=(0,s.A)((0,n.A)().mark((function e(){var t,a,i=this;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._saving=!0,t=this.yamlEditor.value){e.next=5;break}return(0,y.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_delete_config_title"),text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_delete_config_text"),confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel"),confirm:function(){return i._removeConfig()},destructive:!0}),e.abrupt("return");case 5:if(!this.yamlEditor.hasComments){e.next=8;break}if(confirm(this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_comments"))){e.next=8;break}return e.abrupt("return");case 8:e.prev=8,a=(0,_.load)(t),e.next=17;break;case 12:return e.prev=12,e.t0=e.catch(8),(0,y.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_parse_yaml",{error:e.t0})}),this._saving=!1,e.abrupt("return");case 17:e.prev=17,(0,C.Wu)(a)?(0,b.vA)(a,W):(0,b.vA)(a,M),e.next=25;break;case 21:return e.prev=21,e.t1=e.catch(17),(0,y.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_invalid_config",{error:e.t1})}),e.abrupt("return");case 25:return a.resources&&(0,y.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.resources_moved")}),e.prev=26,e.next=29,this.lovelace.saveConfig(a);case 29:e.next=34;break;case 31:e.prev=31,e.t2=e.catch(26),(0,y.showAlertDialog)(this,{text:this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_save_yaml",{error:e.t2})});case 34:window.onbeforeunload=null,this._changed=!1,this._saving=!1;case 37:case"end":return e.stop()}}),e,this,[[8,12],[17,21],[26,31]])}))),function(){return a.apply(this,arguments)})},{kind:"get",key:"yamlEditor",value:function(){return this.shadowRoot.querySelector("ha-code-editor")}}]}}),w.WF),r(),e.next=49;break;case 46:e.prev=46,e.t2=e.catch(0),r(e.t2);case 49:case"end":return e.stop()}}),e,null,[[0,46]])})));return function(t,a){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=33869.tAH3VFvl8Vg.js.map