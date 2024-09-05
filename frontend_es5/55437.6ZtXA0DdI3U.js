"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[55437],{55437:function(e,i,r){r.r(i),r.d(i,{CloudRegister:function(){return v}});var a,t,s,o=r(33994),n=r(22858),l=r(64599),c=r(35806),u=r(71008),d=r(62193),h=r(2816),f=r(27927),p=(r(81027),r(50289)),g=r(29818),k=r(34897),m=(r(68690),r(13292),r(13082),r(90431),r(86127)),_=(r(77980),r(55321)),v=(r(71622),(0,f.A)([(0,g.EM)("cloud-register")],(function(e,i){var r,f,v=function(i){function r(){var i;(0,u.A)(this,r);for(var a=arguments.length,t=new Array(a),s=0;s<a;s++)t[s]=arguments[s];return i=(0,d.A)(this,r,[].concat(t)),e(i),i}return(0,h.A)(r,i),(0,c.A)(r)}(i);return{F:v,d:[{kind:"field",decorators:[(0,g.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.MZ)({type:Boolean})],key:"isWide",value:function(){return!1}},{kind:"field",decorators:[(0,g.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,g.MZ)()],key:"email",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_requestInProgress",value:function(){return!1}},{kind:"field",decorators:[(0,g.wk)()],key:"_password",value:function(){return""}},{kind:"field",decorators:[(0,g.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,g.P)("#email",!0)],key:"_emailField",value:void 0},{kind:"field",decorators:[(0,g.P)("#password",!0)],key:"_passwordField",value:void 0},{kind:"method",key:"render",value:function(){return(0,p.qy)(a||(a=(0,l.A)([' <hass-subpage .hass="','" .narrow="','" .header="','"> <div class="content"> <ha-config-section .isWide="','"> <span slot="header">','</span> <div slot="introduction"> <p> '," </p> <p> "," </p> <ul> <li> "," </li> <li> "," </li> <li> "," </li> <li> "," </li> </ul> <p> ",' <a href="https://www.nabucasa.com" target="_blank">Nabu Casa, Inc</a> '," </p> <p> ",' </p> <ul> <li> <a href="https://www.nabucasa.com/tos/" target="_blank" rel="noreferrer"> ',' </a> </li> <li> <a href="https://www.nabucasa.com/privacy_policy/" target="_blank" rel="noreferrer"> ',' </a> </li> </ul> </div> <ha-card outlined .header="','"><div class="card-content register-form"> ',' <ha-textfield autofocus id="email" name="email" .label="','" type="email" autocomplete="email" required .value="','" @keydown="','" validationMessage="','"></ha-textfield> <ha-textfield id="password" name="password" .label="','" .value="','" type="password" autocomplete="new-password" minlength="8" required @keydown="','" validationMessage="','"></ha-textfield> </div> <div class="card-actions"> <ha-progress-button @click="','" .progress="','">','</ha-progress-button> <button class="link" .disabled="','" @click="','"> '," </button> </div> </ha-card> </ha-config-section> </div> </hass-subpage> "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.cloud.register.title"),this.isWide,this.hass.localize("ui.panel.config.cloud.register.headline"),this.hass.localize("ui.panel.config.cloud.register.information"),this.hass.localize("ui.panel.config.cloud.register.information2"),this.hass.localize("ui.panel.config.cloud.register.feature_remote_control"),this.hass.localize("ui.panel.config.cloud.register.feature_google_home"),this.hass.localize("ui.panel.config.cloud.register.feature_amazon_alexa"),this.hass.localize("ui.panel.config.cloud.register.feature_webhook_apps"),this.hass.localize("ui.panel.config.cloud.register.information3"),this.hass.localize("ui.panel.config.cloud.register.information3a"),this.hass.localize("ui.panel.config.cloud.register.information4"),this.hass.localize("ui.panel.config.cloud.register.link_terms_conditions"),this.hass.localize("ui.panel.config.cloud.register.link_privacy_policy"),this.hass.localize("ui.panel.config.cloud.register.create_account"),this._error?(0,p.qy)(t||(t=(0,l.A)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this.hass.localize("ui.panel.config.cloud.register.email_address"),this.email,this._keyDown,this.hass.localize("ui.panel.config.cloud.register.email_error_msg"),this.hass.localize("ui.panel.config.cloud.register.password"),this._password,this._keyDown,this.hass.localize("ui.panel.config.cloud.register.password_error_msg"),this._handleRegister,this._requestInProgress,this.hass.localize("ui.panel.config.cloud.register.start_trial"),this._requestInProgress,this._handleResendVerifyEmail,this.hass.localize("ui.panel.config.cloud.register.resend_confirm_email"))}},{kind:"method",key:"_keyDown",value:function(e){"Enter"===e.key&&this._handleRegister()}},{kind:"method",key:"_handleRegister",value:(f=(0,n.A)((0,o.A)().mark((function e(){var i,r,a,t;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this._emailField,r=this._passwordField,a=i.value,t=r.value,i.reportValidity()){e.next=8;break}return r.reportValidity(),i.focus(),e.abrupt("return");case 8:if(r.reportValidity()){e.next=11;break}return r.focus(),e.abrupt("return");case 11:return this._requestInProgress=!0,e.prev=12,e.next=15,(0,m.vO)(this.hass,a,t);case 15:this._verificationEmailSent(a),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(12),this._password="",this._requestInProgress=!1,this._error=e.t0&&e.t0.body&&e.t0.body.message?e.t0.body.message:"Unknown error";case 23:case"end":return e.stop()}}),e,this,[[12,18]])}))),function(){return f.apply(this,arguments)})},{kind:"method",key:"_handleResendVerifyEmail",value:(r=(0,n.A)((0,o.A)().mark((function e(){var i,r;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this._emailField,r=i.value,i.reportValidity()){e.next=5;break}return i.focus(),e.abrupt("return");case 5:return e.prev=5,e.next=8,(0,m.q3)(this.hass,r);case 8:this._verificationEmailSent(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),this._error=e.t0&&e.t0.body&&e.t0.body.message?e.t0.body.message:"Unknown error";case 14:case"end":return e.stop()}}),e,this,[[5,11]])}))),function(){return r.apply(this,arguments)})},{kind:"method",key:"_verificationEmailSent",value:function(e){this._requestInProgress=!1,this._password="",(0,k.r)(this,"email-changed",{value:e}),(0,k.r)(this,"cloud-done",{flashMessage:this.hass.localize("ui.panel.config.cloud.register.account_created")})}},{kind:"get",static:!0,key:"styles",value:function(){return[_.RF,(0,p.AH)(s||(s=(0,l.A)(["[slot=introduction]{margin:-1em 0}[slot=introduction] a{color:var(--primary-color)}a{color:var(--primary-color)}h1{margin:0}.register-form{display:flex;flex-direction:column}.card-actions{display:flex;justify-content:space-between;align-items:center}"])))]}}]}}),p.WF))}}]);
//# sourceMappingURL=55437.6ZtXA0DdI3U.js.map