"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[94275],{94275:function(i,e,t){t.r(e),t.d(e,{HuiDialogEditSection:function(){return D}});var a,n,o,s,l,r,c,d,h,u,v,m=t(64599),g=t(33994),f=t(22858),p=t(35806),_=t(71008),y=t(62193),k=t(2816),b=t(27927),A=(t(81027),t(39805),t(97741),t(26098),t(36016),t(43037),t(50289)),w=t(29818),x=t(85323),M=t(34897),C=t(79051),L=(t(77372),t(26790),t(32885),t(29180),t(10900),t(4169),t(13830),t(57641),t(55321)),z=t(14182),T=(t(50693),t(94100)),q=((0,b.A)([(0,w.EM)("hui-section-settings-editor")],(function(i,e){var t=function(e){function t(){var e;(0,_.A)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=(0,y.A)(this,t,[].concat(n)),i(e),e}return(0,k.A)(t,e),(0,p.A)(t)}(e);return{F:t,d:[{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"config",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"viewConfig",value:void 0},{kind:"field",key:"_schema",value:function(){return(0,T.A)((function(i){return[{name:"title",selector:{text:{}}},{name:"column_span",selector:{number:{min:1,max:i,slider_ticks:!0}}}]}))}},{kind:"method",key:"render",value:function(){var i={title:this.config.title||"",column_span:this.config.column_span||1},e=this._schema(this.viewConfig.max_columns||4);return(0,A.qy)(a||(a=(0,m.A)([' <ha-form .hass="','" .data="','" .schema="','" .computeLabel="','" .computeHelper="','" @value-changed="','"></ha-form> '])),this.hass,i,e,this._computeLabel,this._computeHelper,this._valueChanged)}},{kind:"field",key:"_computeLabel",value:function(){var i=this;return function(e){return i.hass.localize("ui.panel.lovelace.editor.edit_section.settings.".concat(e.name))}}},{kind:"field",key:"_computeHelper",value:function(){var i=this;return function(e){return i.hass.localize("ui.panel.lovelace.editor.edit_section.settings.".concat(e.name,"_helper"))||""}}},{kind:"method",key:"_valueChanged",value:function(i){i.stopPropagation();var e=i.detail.value,t=Object.assign(Object.assign({},this.config),{},{title:e.title,column_span:e.column_span});t.title||delete t.title,(0,M.r)(this,"value-changed",{value:t})}}]}}),A.WF),t(13292),t(89053),(0,b.A)([(0,w.EM)("hui-section-visibility-editor")],(function(i,e){var t=function(e){function t(){var e;(0,_.A)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=(0,y.A)(this,t,[].concat(n)),i(e),e}return(0,k.A)(t,e),(0,p.A)(t)}(e);return{F:t,d:[{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"config",value:void 0},{kind:"method",key:"render",value:function(){var i,e=null!==(i=this.config.visibility)&&void 0!==i?i:[];return(0,A.qy)(n||(n=(0,m.A)([' <ha-alert alert-type="info"> ',' </ha-alert> <ha-card-conditions-editor .hass="','" .conditions="','" @value-changed="','"> </ha-card-conditions-editor> '])),this.hass.localize("ui.panel.lovelace.editor.edit_section.visibility.explanation"),this.hass,e,this._valueChanged)}},{kind:"method",key:"_valueChanged",value:function(i){var e;i.stopPropagation();var t=i.detail.value,a=Object.assign(Object.assign({},this.config),{},{visibility:t});0===(null===(e=a.visibility)||void 0===e?void 0:e.length)&&delete a.visibility,(0,M.r)(this,"value-changed",{value:a})}}]}}),A.WF),t(13618),t(34736),"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"),Z=["tab-settings","tab-visibility"],D=(0,b.A)([(0,w.EM)("hui-dialog-edit-section")],(function(i,e){var t,a,n,b=function(e){function t(){var e;(0,_.A)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=(0,y.A)(this,t,[].concat(n)),i(e),e}return(0,k.A)(t,e),(0,p.A)(t)}(e);return{F:b,d:[{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,w.wk)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,w.wk)()],key:"_viewConfig",value:void 0},{kind:"field",decorators:[(0,w.wk)()],key:"_yamlMode",value:function(){return!1}},{kind:"field",decorators:[(0,w.wk)()],key:"_currTab",value:function(){return Z[0]}},{kind:"field",decorators:[(0,w.P)("ha-yaml-editor")],key:"_editor",value:void 0},{kind:"method",key:"updated",value:function(i){if(this._yamlMode&&i.has("_yamlMode")){var e,t=Object.assign({},this._config);null===(e=this._editor)||void 0===e||e.setValue(t)}}},{kind:"method",key:"showDialog",value:(n=(0,f.A)((0,g.A)().mark((function i(e){return(0,g.A)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:this._params=e,this._config=(0,z.ys)(this._params.lovelaceConfig,[this._params.viewIndex,this._params.sectionIndex]),this._viewConfig=(0,z.ys)(this._params.lovelaceConfig,[this._params.viewIndex]);case 3:case"end":return i.stop()}}),i,this)}))),function(i){return n.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._yamlMode=!1,this._config=void 0,this._currTab=Z[0],(0,M.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var i=this;if(!this._params||!this._config)return A.s6;var e=this.hass.localize("ui.panel.lovelace.editor.edit_section.header"),t=A.s6;if(this._yamlMode)t=(0,A.qy)(o||(o=(0,m.A)([' <ha-yaml-editor .hass="','" dialogInitialFocus @value-changed="','"></ha-yaml-editor> '])),this.hass,this._viewYamlChanged);else switch(this._currTab){case"tab-settings":t=(0,A.qy)(s||(s=(0,m.A)([' <hui-section-settings-editor .hass="','" .config="','" .viewConfig="','" @value-changed="','"> </hui-section-settings-editor> '])),this.hass,this._config,this._viewConfig,this._configChanged);break;case"tab-visibility":t=(0,A.qy)(l||(l=(0,m.A)([' <hui-section-visibility-editor .hass="','" .config="','" @value-changed="','"> </hui-section-visibility-editor> '])),this.hass,this._config,this._configChanged)}return(0,A.qy)(r||(r=(0,m.A)([' <ha-dialog open scrimClickAction @keydown="','" @closed="','" .heading="','" class="','"> <ha-dialog-header show-border slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="','" .path="','"></ha-icon-button> <span slot="title">','</span> <ha-button-menu slot="actionItems" fixed corner="BOTTOM_END" menuCorner="END" @closed="','" @action="','"> <ha-icon-button slot="trigger" .label="','" .path="','"></ha-icon-button> <ha-list-item graphic="icon"> '," ",' </ha-list-item> <ha-list-item graphic="icon"> '," "," </ha-list-item> </ha-button-menu> "," </ha-dialog-header> ",' <ha-button slot="secondaryAction" @click="','"> ',' </ha-button> <ha-button slot="primaryAction" @click="','"> '," </ha-button> </ha-dialog> "])),this._ignoreKeydown,this._cancel,e,(0,x.H)({"yaml-mode":this._yamlMode}),this.hass.localize("ui.common.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",e,C.d,this._handleAction,this.hass.localize("ui.common.menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",this.hass.localize("ui.panel.lovelace.editor.edit_section.edit_ui"),this._yamlMode?"":(0,A.qy)(c||(c=(0,m.A)(['<ha-svg-icon class="selected_menu_item" slot="graphic" .path="','"></ha-svg-icon>'])),q),this.hass.localize("ui.panel.lovelace.editor.edit_section.edit_yaml"),this._yamlMode?(0,A.qy)(d||(d=(0,m.A)(['<ha-svg-icon class="selected_menu_item" slot="graphic" .path="','"></ha-svg-icon>'])),q):"",this._yamlMode?A.s6:(0,A.qy)(h||(h=(0,m.A)([' <mwc-tab-bar .activeIndex="','" @MDCTabBar:activated="','"> '," </mwc-tab-bar> "])),Z.indexOf(this._currTab),this._handleTabChanged,Z.map((function(e){return(0,A.qy)(u||(u=(0,m.A)([' <mwc-tab .label="','"> </mwc-tab> '])),i.hass.localize("ui.panel.lovelace.editor.edit_section.".concat(e.replace("-","_"))))}))),t,this._cancel,this.hass.localize("ui.common.cancel"),this._save,this.hass.localize("ui.common.save"))}},{kind:"method",key:"_configChanged",value:function(i){i.stopPropagation(),this._config=i.detail.value}},{kind:"method",key:"_handleTabChanged",value:function(i){var e=Z[i.detail.index];e!==this._currTab&&(this._currTab=e)}},{kind:"method",key:"_handleAction",value:(a=(0,f.A)((0,g.A)().mark((function i(e){return(0,g.A)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:e.stopPropagation(),e.preventDefault(),i.t0=e.detail.index,i.next=0===i.t0?5:1===i.t0?7:9;break;case 5:return this._yamlMode=!1,i.abrupt("break",9);case 7:return this._yamlMode=!0,i.abrupt("break",9);case 9:case"end":return i.stop()}}),i,this)}))),function(i){return a.apply(this,arguments)})},{kind:"method",key:"_viewYamlChanged",value:function(i){i.stopPropagation(),i.detail.isValid&&(this._config=i.detail.value)}},{kind:"method",key:"_ignoreKeydown",value:function(i){i.stopPropagation()}},{kind:"method",key:"_cancel",value:function(i){i&&i.stopPropagation(),this.closeDialog()}},{kind:"method",key:"_save",value:(t=(0,f.A)((0,g.A)().mark((function i(){var e;return(0,g.A)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(this._params&&this._config){i.next=2;break}return i.abrupt("return");case 2:e=(0,z.uZ)(this._params.lovelaceConfig,[this._params.viewIndex,this._params.sectionIndex],this._config),this._params.saveConfig(e),this.closeDialog();case 5:case"end":return i.stop()}}),i,this)}))),function(){return t.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[L.nA,(0,A.AH)(v||(v=(0,m.A)(["ha-dialog{--vertical-align-dialog:flex-start;--dialog-surface-margin-top:40px}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--dialog-surface-margin-top:0px}}ha-dialog.yaml-mode{--dialog-content-padding:0}mwc-tab-bar{color:var(--primary-text-color);text-transform:uppercase;padding:0 20px}.selected_menu_item{color:var(--primary-color)}@media all and (min-width:600px){ha-dialog{--mdc-dialog-min-width:600px}}"])))]}}]}}),A.WF)}}]);
//# sourceMappingURL=94275.31pNzrFSnvc.js.map