"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3833],{3833:function(e,a,t){t.r(a),t.d(a,{TTSTryDialog:function(){return b}});var s,i,n,l,r=t(14842),o=t(33994),d=t(22858),u=t(64599),h=t(35806),c=t(71008),g=t(62193),p=t(2816),m=t(27927),v=(t(81027),t(26098),t(50289)),_=t(29818),f=t(96979),y=t(34897),k=(t(77372),t(29180)),A=(t(45920),t(12803)),x=t(6121),b=(t(32885),(0,m.A)([(0,_.EM)("dialog-tts-try")],(function(e,a){var t,m,b=function(a){function t(){var a;(0,c.A)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return a=(0,g.A)(this,t,[].concat(i)),e(a),a}return(0,p.A)(t,a),(0,h.A)(t)}(a);return{F:b,d:[{kind:"field",decorators:[(0,_.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,_.wk)()],key:"_loadingExample",value:function(){return!1}},{kind:"field",decorators:[(0,_.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,_.wk)()],key:"_valid",value:function(){return!1}},{kind:"field",decorators:[(0,_.P)("#message")],key:"_messageInput",value:void 0},{kind:"field",decorators:[(0,f.I)({key:"ttsTryMessages",state:!1,subscribe:!1})],key:"_messages",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._valid=Boolean(this._defaultMessage)}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,y.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"get",key:"_defaultMessage",value:function(){var e,a,t=null===(e=this._params.language)||void 0===e?void 0:e.substring(0,2),s=this.hass.locale.language.substring(0,2);return t&&null!==(a=this._messages)&&void 0!==a&&a[t]?this._messages[t]:t===s?this.hass.localize("ui.dialogs.tts-try.message_example"):""}},{kind:"method",key:"render",value:function(){return this._params?(0,v.qy)(s||(s=(0,u.A)([' <ha-dialog open @closed="','" .heading="','"> <ha-textarea autogrow id="message" .label="','" .placeholder="','" .value="','" @input="','" ?dialogInitialFocus="','"> </ha-textarea> '," </ha-dialog> "])),this.closeDialog,(0,k.l)(this.hass,this.hass.localize("ui.dialogs.tts-try.header")),this.hass.localize("ui.dialogs.tts-try.message"),this.hass.localize("ui.dialogs.tts-try.message_placeholder"),this._defaultMessage,this._inputChanged,!this._defaultMessage,this._loadingExample?(0,v.qy)(i||(i=(0,u.A)([' <ha-circular-progress size="small" indeterminate slot="primaryAction" class="loading"></ha-circular-progress> ']))):(0,v.qy)(n||(n=(0,u.A)([' <ha-button ?dialogInitialFocus="','" slot="primaryAction" .label="','" @click="','" .disabled="','"> <ha-svg-icon slot="icon" .path="','"></ha-svg-icon> </ha-button> '])),Boolean(this._defaultMessage),this.hass.localize("ui.dialogs.tts-try.play"),this._playExample,!this._valid,"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z")):v.s6}},{kind:"method",key:"_inputChanged",value:(m=(0,d.A)((0,o.A)().mark((function e(){var a;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._valid=Boolean(null===(a=this._messageInput)||void 0===a?void 0:a.value);case 1:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{kind:"method",key:"_playExample",value:(t=(0,d.A)((0,o.A)().mark((function e(){var a,t,s,i,n,l,d,u,h=this;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null===(a=this._messageInput)||void 0===a?void 0:a.value){e.next=3;break}return e.abrupt("return");case 3:return s=this._params.engine,i=this._params.language,n=this._params.voice,i&&(this._messages=Object.assign(Object.assign({},this._messages),{},(0,r.A)({},i.substring(0,2),t))),this._loadingExample=!0,(l=new Audio).play(),e.prev=10,e.next=13,(0,A.S_)(this.hass,{platform:s,message:t,language:i,options:{voice:n}});case 13:u=e.sent,d=u.path,e.next=22;break;case 17:return e.prev=17,e.t0=e.catch(10),this._loadingExample=!1,(0,x.showAlertDialog)(this,{text:"Unable to load example. ".concat(e.t0.error||e.t0.body||e.t0),warning:!0}),e.abrupt("return");case 22:l.src=d,l.addEventListener("canplaythrough",(function(){return l.play()})),l.addEventListener("playing",(function(){h._loadingExample=!1})),l.addEventListener("error",(function(){(0,x.showAlertDialog)(h,{title:"Error playing audio."}),h._loadingExample=!1}));case 26:case"end":return e.stop()}}),e,this,[[10,17]])}))),function(){return t.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,v.AH)(l||(l=(0,u.A)(["ha-dialog{--mdc-dialog-max-width:500px}ha-select,ha-textarea{width:100%}ha-select{margin-top:8px}.loading{height:36px}"])))}}]}}),v.WF))}}]);
//# sourceMappingURL=3833.bfFZS5VPlmE.js.map