"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[59024],{68010:function(e,t,n){n.d(t,{MV:function(){return l},VR:function(){return o},d8:function(){return r},jJ:function(){return s},l3:function(){return c}});var i=n(33994),a=n(22858),r=function(){var e=(0,a.A)((0,i.A)().mark((function e(t){return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/config"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.A)((0,i.A)().mark((function e(t,n){return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/config_entry",config_entry_id:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.A)((0,i.A)().mark((function e(t){return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/list"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.A)((0,i.A)().mark((function e(t,n,a,r,c){return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/create",domain:n,client_id:a,client_secret:r,name:c}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,i,a,r){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.A)((0,i.A)().mark((function e(t,n){return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"application_credentials/delete",application_credentials_id:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},59024:function(e,t,n){var i=n(22858).A,a=n(33994).A;n.a(e,function(){var e=i(a().mark((function e(i,r){var c,o,l,s,d,u,p,h,f,m,v,k,b,_,g,y,A,x,w,C,S,z,H,V,T,M,j,O,W,Z,D,I,q,B,F,J,P;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.r(t),n.d(t,{HaConfigApplicationCredentials:function(){return P}}),c=n(41981),o=n(33994),l=n(22858),s=n(64599),d=n(35806),u=n(71008),p=n(62193),h=n(2816),f=n(27927),m=n(35890),v=n(81027),k=n(95737),b=n(97741),_=n(26098),g=n(39790),y=n(66457),A=n(99019),x=n(16891),w=n(96858),C=n(50289),S=n(29818),z=n(94100),n(74808),n(77661),n(88400),n(16850),H=n(68010),V=n(46092),T=n(6121),M=n(35579),j=n(25473),O=n(50299),W=n(96979),!(Z=i([M])).then){e.next=53;break}return e.next=49,Z;case 49:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=54;break;case 53:e.t0=Z;case 54:M=e.t0[0],J="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",P=(0,f.A)([(0,S.EM)("ha-config-application-credentials")],(function(e,t){var n,i,a=function(t){function n(){var t;(0,u.A)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=(0,p.A)(this,n,[].concat(a)),e(t),t}return(0,h.A)(n,t),(0,d.A)(n)}(t);return{F:a,d:[{kind:"field",decorators:[(0,S.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,S.wk)()],key:"_applicationCredentials",value:function(){return[]}},{kind:"field",decorators:[(0,S.MZ)({type:Boolean})],key:"isWide",value:function(){return!1}},{kind:"field",decorators:[(0,S.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,S.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,S.wk)()],key:"_selected",value:function(){return[]}},{kind:"field",decorators:[(0,S.P)("hass-tabs-subpage-data-table",!0)],key:"_dataTable",value:void 0},{kind:"field",decorators:[(0,W.I)({key:"application-credentials-table-sort",state:!1,subscribe:!1})],key:"_activeSorting",value:void 0},{kind:"field",decorators:[(0,W.I)({key:"application-credentials-table-column-order",state:!1,subscribe:!1})],key:"_activeColumnOrder",value:void 0},{kind:"field",decorators:[(0,W.I)({key:"application-credentials-table-hidden-columns",state:!1,subscribe:!1})],key:"_activeHiddenColumns",value:void 0},{kind:"field",decorators:[(0,W.I)({storage:"sessionStorage",key:"application-credentials-table-search",state:!0,subscribe:!1})],key:"_filter",value:function(){return""}},{kind:"field",key:"_columns",value:function(){var e=this;return(0,z.A)((function(t){return{name:{title:t("ui.panel.config.application_credentials.picker.headers.name"),main:!0,sortable:!0,filterable:!0,direction:"asc",flex:2},client_id:{title:t("ui.panel.config.application_credentials.picker.headers.client_id"),filterable:!0},localizedDomain:{title:t("ui.panel.config.application_credentials.picker.headers.application"),sortable:!0,filterable:!0,direction:"asc"},actions:{title:"",type:"overflow-menu",showNarrow:!0,hideable:!1,moveable:!1,template:function(t){return(0,C.qy)(D||(D=(0,s.A)([' <ha-icon-overflow-menu .hass="','" narrow .items="','"> </ha-icon-overflow-menu> '])),e.hass,[{path:J,warning:!0,label:e.hass.localize("ui.common.delete"),action:function(){return e._deleteCredential(t)}}])}}}}))}},{kind:"field",key:"_getApplicationCredentials",value:function(){return(0,z.A)((function(e,t){return e.map((function(e){return Object.assign(Object.assign({},e),{},{localizedDomain:(0,V.p$)(t,e.domain)})}))}))}},{kind:"method",key:"firstUpdated",value:function(e){(0,m.A)(a,"firstUpdated",this,3)([e]),this._loadTranslations(),this._fetchApplicationCredentials()}},{kind:"method",key:"render",value:function(){return(0,C.qy)(I||(I=(0,s.A)([' <hass-tabs-subpage-data-table .hass="','" .narrow="','" .route="','" back-path="/config" .tabs="','" .columns="','" .data="','" hasFab selectable .selected="','" @selection-changed="','" .initialSorting="','" .columnOrder="','" .hiddenColumns="','" @columns-changed="','" @sorting-changed="','" .filter="','" @search-changed="','"> <div class="header-btns" slot="selection-bar"> ',' </div> <ha-fab slot="fab" .label="','" extended @click="','"> <ha-svg-icon slot="icon" .path="','"></ha-svg-icon> </ha-fab> </hass-tabs-subpage-data-table> '])),this.hass,this.narrow,this.route,j.configSections.devices,this._columns(this.hass.localize),this._getApplicationCredentials(this._applicationCredentials,this.hass.localize),this._selected.length,this._handleSelectionChanged,this._activeSorting,this._activeColumnOrder,this._activeHiddenColumns,this._handleColumnsChanged,this._handleSortingChanged,this._filter,this._handleSearchChange,this.narrow?(0,C.qy)(B||(B=(0,s.A)([' <ha-icon-button class="warning" id="remove-btn" @click="','" .path="','" .label="','"></ha-icon-button> <ha-help-tooltip .label="','"> </ha-help-tooltip> '])),this._deleteSelected,J,this.hass.localize("ui.common.remove"),this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.button")):(0,C.qy)(q||(q=(0,s.A)([' <mwc-button @click="','" class="warning">',"</mwc-button> "])),this._deleteSelected,this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.button")),this.hass.localize("ui.panel.config.application_credentials.picker.add_application_credential"),this._addApplicationCredential,"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z")}},{kind:"method",key:"_handleSelectionChanged",value:function(e){this._selected=e.detail.value}},{kind:"field",key:"_deleteCredential",value:function(){var e=this;return function(){var t=(0,l.A)((0,o.A)().mark((function t(n){return(0,o.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.showConfirmationDialog)(e,{title:e.hass.localize("ui.panel.config.application_credentials.picker.remove.confirm_title"),text:e.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.confirm_text"),confirmText:e.hass.localize("ui.common.delete"),dismissText:e.hass.localize("ui.common.cancel"),destructive:!0});case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,(0,H.jJ)(e.hass,n.id);case 7:return t.next=9,e._fetchApplicationCredentials();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},{kind:"method",key:"_deleteSelected",value:function(){var e,t=this;(0,T.showConfirmationDialog)(this,{title:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.confirm_title",{number:this._selected.length}),text:this.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.confirm_text"),confirmText:this.hass.localize("ui.common.delete"),dismissText:this.hass.localize("ui.common.cancel"),destructive:!0,confirm:(e=(0,l.A)((0,o.A)().mark((function e(){return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(t._selected.map(function(){var e=(0,l.A)((0,o.A)().mark((function e(n){return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,H.jJ)(t.hass,n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),(0,T.showAlertDialog)(t,{title:t.hass.localize("ui.panel.config.application_credentials.picker.remove_selected.error_title"),text:e.t0.message}),e.abrupt("return");case 9:return t._dataTable.clearSelection(),e.next=12,t._fetchApplicationCredentials();case 12:case"end":return e.stop()}}),e,null,[[0,5]])}))),function(){return e.apply(this,arguments)})})}},{kind:"method",key:"_loadTranslations",value:(i=(0,l.A)((0,o.A)().mark((function e(){return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.hass.loadBackendTranslation("title",void 0,!0);case 2:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"_fetchApplicationCredentials",value:(n=(0,l.A)((0,o.A)().mark((function e(){return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,H.VR)(this.hass);case 2:this._applicationCredentials=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"_addApplicationCredential",value:function(){var e,t=this;(0,O.a)(this,{applicationCredentialAddedCallback:(e=(0,l.A)((0,o.A)().mark((function e(n){return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(t._applicationCredentials=[].concat((0,c.A)(t._applicationCredentials),[n]));case 1:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})})}},{kind:"method",key:"_handleSortingChanged",value:function(e){this._activeSorting=e.detail}},{kind:"method",key:"_handleColumnsChanged",value:function(e){this._activeColumnOrder=e.detail.columnOrder,this._activeHiddenColumns=e.detail.hiddenColumns}},{kind:"method",key:"_handleSearchChange",value:function(e){this._filter=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return(0,C.AH)(F||(F=(0,s.A)([".table-header{display:flex;justify-content:space-between;align-items:center;height:56px;background-color:var(--mdc-text-field-fill-color,#f5f5f5);border-bottom:1px solid var(--mdc-text-field-idle-line-color,rgba(0,0,0,.42));box-sizing:border-box}.header-toolbar{display:flex;justify-content:space-between;align-items:center;color:var(--secondary-text-color);position:relative;top:-4px}.selected-txt{font-weight:700;padding-left:16px;padding-inline-start:16px;direction:var(--direction)}.table-header .selected-txt{margin-top:20px}.header-toolbar .selected-txt{font-size:16px}.header-toolbar .header-btns{margin-right:-12px;margin-inline-end:-12px;margin-inline-start:initial}.header-btns{display:flex}.header-btns>ha-icon-button,.header-btns>mwc-button{margin:8px}ha-button-menu{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial}.warning{--mdc-theme-primary:var(--error-color)}"])))}}]}}),C.WF),r(),e.next=64;break;case 61:e.prev=61,e.t2=e.catch(0),r(e.t2);case 64:case"end":return e.stop()}}),e,null,[[0,61]])})));return function(t,n){return e.apply(this,arguments)}}())},50299:function(e,t,n){n.d(t,{a:function(){return r}});n(95737),n(39790),n(66457),n(99019),n(96858);var i=n(34897),a=function(){return n.e(34489).then(n.bind(n,34489))},r=function(e,t){(0,i.r)(e,"show-dialog",{dialogTag:"dialog-add-application-credential",dialogImport:a,dialogParams:t})}}}]);
//# sourceMappingURL=59024.MQJaTugy26E.js.map