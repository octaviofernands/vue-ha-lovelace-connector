"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[92313],{63516:function(t,e,r){r.d(e,{s:function(){return s}});var s=function(t){return!(!t.detail.selected||"property"!==t.detail.source)&&(t.currentTarget.selected=!1,!0)}},37266:function(t,e,r){r.d(e,{He:function(){return h},Ku:function(){return o},PB:function(){return c},hu:function(){return u},mZ:function(){return l},v9:function(){return d},xY:function(){return p}});var s=r(33994),a=r(22858),i=r(95266),n=r(26025),o=function(){var t=(0,a.A)((0,s.A)().mark((function t(e){var r;return(0,s.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.v)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/host/info",method:"get"}));case 2:return t.next=4,e.callApi("GET","hassio/host/info");case 4:return r=t.sent,t.abrupt("return",(0,n.PS)(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,a.A)((0,s.A)().mark((function t(e){return(0,s.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.v)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/os/info",method:"get"}));case 2:return t.t0=n.PS,t.next=5,e.callApi("GET","hassio/os/info");case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.A)((0,s.A)().mark((function t(e){return(0,s.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.v)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/host/reboot",method:"post",timeout:null}));case 2:return t.abrupt("return",e.callApi("POST","hassio/host/reboot"));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,a.A)((0,s.A)().mark((function t(e){return(0,s.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.v)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/host/shutdown",method:"post",timeout:null}));case 2:return t.abrupt("return",e.callApi("POST","hassio/host/shutdown"));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.A)((0,s.A)().mark((function t(e,r){return(0,s.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.v)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/host/options",method:"post",data:r}));case 2:return t.abrupt("return",e.callApi("POST","hassio/host/options",r));case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.A)((0,s.A)().mark((function t(e,r){return(0,s.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.v)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/os/datadisk/move",method:"post",timeout:null,data:{device:r}}));case 2:return t.abrupt("return",e.callApi("POST","hassio/os/datadisk/move"));case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.A)((0,s.A)().mark((function t(e){return(0,s.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,i.v)(e.config.version,2021,2,4)){t.next=2;break}return t.abrupt("return",e.callWS({type:"supervisor/api",endpoint:"/os/datadisk/list",method:"get",timeout:null}));case 2:return t.t0=n.PS,t.next=5,e.callApi("GET","/os/datadisk/list");case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},92313:function(t,e,r){r.r(e);var s,a,i,n,o,c,l=r(64599),u=r(33994),h=r(22858),d=r(35806),p=r(71008),f=r(62193),g=r(2816),v=r(27927),m=(r(81027),r(63893),r(50289)),A=r(29818),k=r(33922),x=r(34897),b=r(63516),w=(r(32885),r(29180)),y=(r(15720),r(13830),r(26025)),_=r(37266),L=r(55321),z=r(18589),C=r(6121);(0,v.A)([(0,A.EM)("dialog-restart")],(function(t,e){var r,v,M,S,D,H,T,I,P=function(e){function r(){var e;(0,p.A)(this,r);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return e=(0,f.A)(this,r,[].concat(a)),t(e),e}return(0,g.A)(r,e),(0,d.A)(r)}(e);return{F:P,d:[{kind:"field",decorators:[(0,A.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,A.wk)()],key:"_open",value:function(){return!1}},{kind:"field",decorators:[(0,A.wk)()],key:"_loadingHostInfo",value:function(){return!1}},{kind:"field",decorators:[(0,A.wk)()],key:"_hostInfo",value:void 0},{kind:"method",key:"showDialog",value:(I=(0,h.A)((0,u.A)().mark((function t(){var e;return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(0,k.x)(this.hass,"hassio"),this._open=!0,!e||this._hostInfo){t.next=15;break}return this._loadingHostInfo=!0,t.prev=4,t.next=7,(0,_.Ku)(this.hass);case 7:this._hostInfo=t.sent,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(4);case 12:return t.prev=12,this._loadingHostInfo=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[4,10,12,15]])}))),function(){return I.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._open=!1,this._loadingHostInfo=!1,(0,x.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var t;if(!this._open)return m.s6;var e=null===(t=this.hass.userData)||void 0===t?void 0:t.showAdvanced,r=!!this._hostInfo;return(0,m.qy)(s||(s=(0,l.A)([' <ha-dialog open @closed="','" hideActions .heading="','"> '," </ha-dialog> "])),this.closeDialog,this._loadingHostInfo?void 0:(0,w.l)(this.hass,this.hass.localize("ui.dialogs.restart.heading")),this._loadingHostInfo?(0,m.qy)(a||(a=(0,l.A)([' <div class="loader"> <ha-circular-progress indeterminate></ha-circular-progress> </div> ']))):(0,m.qy)(i||(i=(0,l.A)([" <mwc-list dialogInitialFocus> ",' <ha-list-item graphic="avatar" twoline multiline-secondary @request-selected="','"> <div slot="graphic" class="icon-background restart"> <ha-svg-icon .path="','"></ha-svg-icon> </div> <span> ',' </span> <span slot="secondary"> ',' </span> </ha-list-item> </mwc-list> <ha-expansion-panel .header="','"> <mwc-list> ',' <ha-list-item graphic="avatar" twoline multiline-secondary hasMeta @request-selected="','"> <div slot="graphic" class="icon-background restart-safe-mode"> <ha-svg-icon .path="','"></ha-svg-icon> </div> <span> ',' </span> <span slot="secondary"> '," </span> </ha-list-item> </mwc-list> </ha-expansion-panel> "])),e?(0,m.qy)(n||(n=(0,l.A)([' <ha-list-item graphic="avatar" twoline multiline-secondary @request-selected="','"> <div slot="graphic" class="icon-background reload"> <ha-svg-icon .path="','"></ha-svg-icon> </div> <span> ',' </span> <span slot="secondary"> '," </span> </ha-list-item> "])),this._reload,"M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z",this.hass.localize("ui.dialogs.restart.reload.title"),this.hass.localize("ui.dialogs.restart.reload.description")):m.s6,this._restart,"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",this.hass.localize("ui.dialogs.restart.restart.title"),this.hass.localize("ui.dialogs.restart.restart.description"),this.hass.localize("ui.dialogs.restart.advanced_options"),r?(0,m.qy)(o||(o=(0,l.A)([' <ha-list-item graphic="avatar" twoline multiline-secondary hasMeta @request-selected="','"> <div slot="graphic" class="icon-background reboot"> <ha-svg-icon .path="','"></ha-svg-icon> </div> <span> ',' </span> <span slot="secondary"> ',' </span> </ha-list-item> <ha-list-item graphic="avatar" twoline multiline-secondary hasMeta @request-selected="','"> <div slot="graphic" class="icon-background shutdown"> <ha-svg-icon .path="','"></ha-svg-icon> </div> <span> ',' </span> <span slot="secondary"> '," </span> </ha-list-item> "])),this._hostReboot,"M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19M13,17H11V7H13V17Z",this.hass.localize("ui.dialogs.restart.reboot.title"),this.hass.localize("ui.dialogs.restart.reboot.description"),this._hostShutdown,"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",this.hass.localize("ui.dialogs.restart.shutdown.title"),this.hass.localize("ui.dialogs.restart.shutdown.description")):m.s6,this._restartSafeMode,"M19.79,15.41C20.74,13.24 20.74,10.75 19.79,8.59L17.05,9.83C17.65,11.21 17.65,12.78 17.06,14.17L19.79,15.41M15.42,4.21C13.25,3.26 10.76,3.26 8.59,4.21L9.83,6.94C11.22,6.35 12.79,6.35 14.18,6.95L15.42,4.21M4.21,8.58C3.26,10.76 3.26,13.24 4.21,15.42L6.95,14.17C6.35,12.79 6.35,11.21 6.95,9.82L4.21,8.58M8.59,19.79C10.76,20.74 13.25,20.74 15.42,19.78L14.18,17.05C12.8,17.65 11.22,17.65 9.84,17.06L8.59,19.79M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",this.hass.localize("ui.dialogs.restart.restart-safe-mode.title"),this.hass.localize("ui.dialogs.restart.restart-safe-mode.description")))}},{kind:"method",key:"_reload",value:(T=(0,h.A)((0,u.A)().mark((function t(e){return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,b.s)(e)){t.next=2;break}return t.abrupt("return");case 2:return this.closeDialog(),(0,z.P)(this,{message:this.hass.localize("ui.dialogs.restart.reload.reloading"),duration:1e3}),t.prev=4,t.next=7,this.hass.callService("homeassistant","reload_all");case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(4),(0,C.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.reload.failed"),text:t.t0.message});case 12:case"end":return t.stop()}}),t,this,[[4,9]])}))),function(t){return T.apply(this,arguments)})},{kind:"method",key:"_restart",value:(H=(0,h.A)((0,u.A)().mark((function t(e){return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,b.s)(e)){t.next=2;break}return t.abrupt("return");case 2:this._showRestartDialog();case 3:case"end":return t.stop()}}),t,this)}))),function(t){return H.apply(this,arguments)})},{kind:"method",key:"_showRestartDialog",value:(D=(0,h.A)((0,u.A)().mark((function t(){return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,C.showConfirmationDialog)(this,{title:this.hass.localize("ui.dialogs.restart.restart.confirm_title"),text:this.hass.localize("ui.dialogs.restart.restart.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.restart.confirm_action"),destructive:!0});case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return this.closeDialog(),t.prev=6,t.next=9,this.hass.callService("homeassistant","restart");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),(0,C.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.restart.failed"),text:t.t0.message});case 14:case"end":return t.stop()}}),t,this,[[6,11]])}))),function(){return D.apply(this,arguments)})},{kind:"method",key:"_restartSafeMode",value:(S=(0,h.A)((0,u.A)().mark((function t(e){return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,b.s)(e)){t.next=2;break}return t.abrupt("return");case 2:this._showRestartSafeModeDialog();case 3:case"end":return t.stop()}}),t,this)}))),function(t){return S.apply(this,arguments)})},{kind:"method",key:"_showRestartSafeModeDialog",value:(M=(0,h.A)((0,u.A)().mark((function t(){return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,C.showConfirmationDialog)(this,{title:this.hass.localize("ui.dialogs.restart.restart-safe-mode.confirm_title"),text:this.hass.localize("ui.dialogs.restart.restart-safe-mode.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.restart-safe-mode.confirm_action"),destructive:!0});case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return this.closeDialog(),t.prev=6,t.next=9,this.hass.callService("homeassistant","restart",{safe_mode:!0});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),(0,C.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.restart-safe-mode.failed"),text:t.t0.message});case 14:case"end":return t.stop()}}),t,this,[[6,11]])}))),function(){return M.apply(this,arguments)})},{kind:"method",key:"_hostReboot",value:(v=(0,h.A)((0,u.A)().mark((function t(e){return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,b.s)(e)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,(0,C.showConfirmationDialog)(this,{title:this.hass.localize("ui.dialogs.restart.reboot.confirm_title"),text:this.hass.localize("ui.dialogs.restart.reboot.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.reboot.confirm_action"),destructive:!0});case 4:if(t.sent){t.next=7;break}return t.abrupt("return");case 7:return this.closeDialog(),(0,z.P)(this,{message:this.hass.localize("ui.dialogs.restart.reboot.rebooting"),duration:-1}),t.prev=9,t.next=12,(0,_.mZ)(this.hass);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(9),this.hass.connection.connected&&!(0,y.Tv)(t.t0)&&(0,C.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.reboot.failed"),text:(0,y.VR)(t.t0)});case 17:case"end":return t.stop()}}),t,this,[[9,14]])}))),function(t){return v.apply(this,arguments)})},{kind:"method",key:"_hostShutdown",value:(r=(0,h.A)((0,u.A)().mark((function t(e){return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,b.s)(e)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,(0,C.showConfirmationDialog)(this,{title:this.hass.localize("ui.dialogs.restart.shutdown.confirm_title"),text:this.hass.localize("ui.dialogs.restart.shutdown.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.shutdown.confirm_action"),destructive:!0});case 4:if(t.sent){t.next=7;break}return t.abrupt("return");case 7:return this.closeDialog(),(0,z.P)(this,{message:this.hass.localize("ui.dialogs.restart.shutdown.shutting_down"),duration:-1}),t.prev=9,t.next=12,(0,_.hu)(this.hass);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(9),this.hass.connection.connected&&!(0,y.Tv)(t.t0)&&(0,C.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.shutdown.failed"),text:(0,y.VR)(t.t0)});case 17:case"end":return t.stop()}}),t,this,[[9,14]])}))),function(t){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[L.RF,L.nA,(0,m.AH)(c||(c=(0,l.A)(["ha-dialog{--dialog-content-padding:0}@media all and (min-width:550px){ha-dialog{--mdc-dialog-min-width:500px;--mdc-dialog-max-width:500px}}ha-expansion-panel{border-top:1px solid var(--divider-color);margin-bottom:10px;box-shadow:none;--expansion-panel-content-padding:0;--expansion-panel-summary-padding:0 var(--mdc-list-side-padding, 20px);--ha-card-border-radius:0}.icon-background{border-radius:50%;color:#fff;display:flex}.reload{background-color:#5f8a49}.restart{background-color:#ffd500;color:#650}.reboot{background-color:#ba1b1b;color:#fff}.shutdown{background-color:#0b1d29;color:#fff}.restart-safe-mode{background-color:#e48629;color:#fff}.divider{height:1px;background-color:var(--divider-color)}.section{font-weight:500;font-size:14px;line-height:20px;margin:8px 0 4px 0;padding-left:var(--mdc-list-side-padding,20px);padding-right:var(--mdc-list-side-padding,20px);padding-inline-start:var(--mdc-list-side-padding,20px);padding-inline-end:var(--mdc-list-side-padding,20px)}.loader{display:flex;align-items:center;justify-content:center;padding:24px}"])))]}}]}}),m.WF)}}]);
//# sourceMappingURL=92313.H9SXriQczNs.js.map