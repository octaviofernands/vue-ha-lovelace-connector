export const id=92313;export const ids=[92313];export const modules={63516:(t,s,i)=>{i.d(s,{s:()=>a});const a=t=>!(!t.detail.selected||"property"!==t.detail.source)&&(t.currentTarget.selected=!1,!0)},37266:(t,s,i)=>{i.d(s,{He:()=>d,Ku:()=>e,PB:()=>l,hu:()=>n,mZ:()=>r,v9:()=>c,xY:()=>h});var a=i(95266),o=i(26025);const e=async t=>{if((0,a.v)(t.config.version,2021,2,4))return t.callWS({type:"supervisor/api",endpoint:"/host/info",method:"get"});const s=await t.callApi("GET","hassio/host/info");return(0,o.PS)(s)},l=async t=>(0,a.v)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/os/info",method:"get"}):(0,o.PS)(await t.callApi("GET","hassio/os/info")),r=async t=>(0,a.v)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/host/reboot",method:"post",timeout:null}):t.callApi("POST","hassio/host/reboot"),n=async t=>(0,a.v)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/host/shutdown",method:"post",timeout:null}):t.callApi("POST","hassio/host/shutdown"),d=async(t,s)=>(0,a.v)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/host/options",method:"post",data:s}):t.callApi("POST","hassio/host/options",s),c=async(t,s)=>(0,a.v)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/os/datadisk/move",method:"post",timeout:null,data:{device:s}}):t.callApi("POST","hassio/os/datadisk/move"),h=async t=>(0,a.v)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/os/datadisk/list",method:"get",timeout:null}):(0,o.PS)(await t.callApi("GET","/os/datadisk/list"))},92313:(t,s,i)=>{i.r(s);var a=i(36312),o=(i(63893),i(50289)),e=i(29818),l=i(33922),r=i(34897),n=i(63516),d=(i(32885),i(29180)),c=(i(15720),i(13830),i(26025)),h=i(37266),g=i(55321),u=i(18589),p=i(6121);(0,a.A)([(0,e.EM)("dialog-restart")],(function(t,s){return{F:class extends s{constructor(...s){super(...s),t(this)}},d:[{kind:"field",decorators:[(0,e.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,e.wk)()],key:"_open",value:()=>!1},{kind:"field",decorators:[(0,e.wk)()],key:"_loadingHostInfo",value:()=>!1},{kind:"field",decorators:[(0,e.wk)()],key:"_hostInfo",value:void 0},{kind:"method",key:"showDialog",value:async function(){const t=(0,l.x)(this.hass,"hassio");if(this._open=!0,t&&!this._hostInfo){this._loadingHostInfo=!0;try{this._hostInfo=await(0,h.Ku)(this.hass)}catch(t){}finally{this._loadingHostInfo=!1}}}},{kind:"method",key:"closeDialog",value:function(){this._open=!1,this._loadingHostInfo=!1,(0,r.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._open)return o.s6;const t=this.hass.userData?.showAdvanced,s=!!this._hostInfo;return o.qy` <ha-dialog open @closed="${this.closeDialog}" hideActions .heading="${this._loadingHostInfo?void 0:(0,d.l)(this.hass,this.hass.localize("ui.dialogs.restart.heading"))}"> ${this._loadingHostInfo?o.qy` <div class="loader"> <ha-circular-progress indeterminate></ha-circular-progress> </div> `:o.qy` <mwc-list dialogInitialFocus> ${t?o.qy` <ha-list-item graphic="avatar" twoline multiline-secondary @request-selected="${this._reload}"> <div slot="graphic" class="icon-background reload"> <ha-svg-icon .path="${"M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z"}"></ha-svg-icon> </div> <span> ${this.hass.localize("ui.dialogs.restart.reload.title")} </span> <span slot="secondary"> ${this.hass.localize("ui.dialogs.restart.reload.description")} </span> </ha-list-item> `:o.s6} <ha-list-item graphic="avatar" twoline multiline-secondary @request-selected="${this._restart}"> <div slot="graphic" class="icon-background restart"> <ha-svg-icon .path="${"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}"></ha-svg-icon> </div> <span> ${this.hass.localize("ui.dialogs.restart.restart.title")} </span> <span slot="secondary"> ${this.hass.localize("ui.dialogs.restart.restart.description")} </span> </ha-list-item> </mwc-list> <ha-expansion-panel .header="${this.hass.localize("ui.dialogs.restart.advanced_options")}"> <mwc-list> ${s?o.qy` <ha-list-item graphic="avatar" twoline multiline-secondary hasMeta @request-selected="${this._hostReboot}"> <div slot="graphic" class="icon-background reboot"> <ha-svg-icon .path="${"M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19M13,17H11V7H13V17Z"}"></ha-svg-icon> </div> <span> ${this.hass.localize("ui.dialogs.restart.reboot.title")} </span> <span slot="secondary"> ${this.hass.localize("ui.dialogs.restart.reboot.description")} </span> </ha-list-item> <ha-list-item graphic="avatar" twoline multiline-secondary hasMeta @request-selected="${this._hostShutdown}"> <div slot="graphic" class="icon-background shutdown"> <ha-svg-icon .path="${"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"}"></ha-svg-icon> </div> <span> ${this.hass.localize("ui.dialogs.restart.shutdown.title")} </span> <span slot="secondary"> ${this.hass.localize("ui.dialogs.restart.shutdown.description")} </span> </ha-list-item> `:o.s6} <ha-list-item graphic="avatar" twoline multiline-secondary hasMeta @request-selected="${this._restartSafeMode}"> <div slot="graphic" class="icon-background restart-safe-mode"> <ha-svg-icon .path="${"M19.79,15.41C20.74,13.24 20.74,10.75 19.79,8.59L17.05,9.83C17.65,11.21 17.65,12.78 17.06,14.17L19.79,15.41M15.42,4.21C13.25,3.26 10.76,3.26 8.59,4.21L9.83,6.94C11.22,6.35 12.79,6.35 14.18,6.95L15.42,4.21M4.21,8.58C3.26,10.76 3.26,13.24 4.21,15.42L6.95,14.17C6.35,12.79 6.35,11.21 6.95,9.82L4.21,8.58M8.59,19.79C10.76,20.74 13.25,20.74 15.42,19.78L14.18,17.05C12.8,17.65 11.22,17.65 9.84,17.06L8.59,19.79M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"}"></ha-svg-icon> </div> <span> ${this.hass.localize("ui.dialogs.restart.restart-safe-mode.title")} </span> <span slot="secondary"> ${this.hass.localize("ui.dialogs.restart.restart-safe-mode.description")} </span> </ha-list-item> </mwc-list> </ha-expansion-panel> `} </ha-dialog> `}},{kind:"method",key:"_reload",value:async function(t){if((0,n.s)(t)){this.closeDialog(),(0,u.P)(this,{message:this.hass.localize("ui.dialogs.restart.reload.reloading"),duration:1e3});try{await this.hass.callService("homeassistant","reload_all")}catch(t){(0,p.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.reload.failed"),text:t.message})}}}},{kind:"method",key:"_restart",value:async function(t){(0,n.s)(t)&&this._showRestartDialog()}},{kind:"method",key:"_showRestartDialog",value:async function(){if(await(0,p.showConfirmationDialog)(this,{title:this.hass.localize("ui.dialogs.restart.restart.confirm_title"),text:this.hass.localize("ui.dialogs.restart.restart.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.restart.confirm_action"),destructive:!0})){this.closeDialog();try{await this.hass.callService("homeassistant","restart")}catch(t){(0,p.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.restart.failed"),text:t.message})}}}},{kind:"method",key:"_restartSafeMode",value:async function(t){(0,n.s)(t)&&this._showRestartSafeModeDialog()}},{kind:"method",key:"_showRestartSafeModeDialog",value:async function(){if(await(0,p.showConfirmationDialog)(this,{title:this.hass.localize("ui.dialogs.restart.restart-safe-mode.confirm_title"),text:this.hass.localize("ui.dialogs.restart.restart-safe-mode.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.restart-safe-mode.confirm_action"),destructive:!0})){this.closeDialog();try{await this.hass.callService("homeassistant","restart",{safe_mode:!0})}catch(t){(0,p.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.restart-safe-mode.failed"),text:t.message})}}}},{kind:"method",key:"_hostReboot",value:async function(t){if(!(0,n.s)(t))return;if(await(0,p.showConfirmationDialog)(this,{title:this.hass.localize("ui.dialogs.restart.reboot.confirm_title"),text:this.hass.localize("ui.dialogs.restart.reboot.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.reboot.confirm_action"),destructive:!0})){this.closeDialog(),(0,u.P)(this,{message:this.hass.localize("ui.dialogs.restart.reboot.rebooting"),duration:-1});try{await(0,h.mZ)(this.hass)}catch(t){this.hass.connection.connected&&!(0,c.Tv)(t)&&(0,p.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.reboot.failed"),text:(0,c.VR)(t)})}}}},{kind:"method",key:"_hostShutdown",value:async function(t){if(!(0,n.s)(t))return;if(await(0,p.showConfirmationDialog)(this,{title:this.hass.localize("ui.dialogs.restart.shutdown.confirm_title"),text:this.hass.localize("ui.dialogs.restart.shutdown.confirm_description"),confirmText:this.hass.localize("ui.dialogs.restart.shutdown.confirm_action"),destructive:!0})){this.closeDialog(),(0,u.P)(this,{message:this.hass.localize("ui.dialogs.restart.shutdown.shutting_down"),duration:-1});try{await(0,h.hu)(this.hass)}catch(t){this.hass.connection.connected&&!(0,c.Tv)(t)&&(0,p.showAlertDialog)(this,{title:this.hass.localize("ui.dialogs.restart.shutdown.failed"),text:(0,c.VR)(t)})}}}},{kind:"get",static:!0,key:"styles",value:function(){return[g.RF,g.nA,o.AH`ha-dialog{--dialog-content-padding:0}@media all and (min-width:550px){ha-dialog{--mdc-dialog-min-width:500px;--mdc-dialog-max-width:500px}}ha-expansion-panel{border-top:1px solid var(--divider-color);margin-bottom:10px;box-shadow:none;--expansion-panel-content-padding:0;--expansion-panel-summary-padding:0 var(--mdc-list-side-padding, 20px);--ha-card-border-radius:0}.icon-background{border-radius:50%;color:#fff;display:flex}.reload{background-color:#5f8a49}.restart{background-color:#ffd500;color:#650}.reboot{background-color:#ba1b1b;color:#fff}.shutdown{background-color:#0b1d29;color:#fff}.restart-safe-mode{background-color:#e48629;color:#fff}.divider{height:1px;background-color:var(--divider-color)}.section{font-weight:500;font-size:14px;line-height:20px;margin:8px 0 4px 0;padding-left:var(--mdc-list-side-padding,20px);padding-right:var(--mdc-list-side-padding,20px);padding-inline-start:var(--mdc-list-side-padding,20px);padding-inline-end:var(--mdc-list-side-padding,20px)}.loader{display:flex;align-items:center;justify-content:center;padding:24px}`]}}]}}),o.WF)}};
//# sourceMappingURL=92313.Wb99YGr5Z04.js.map