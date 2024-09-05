"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1513],{1513:function(t,e,a){a.r(e);var i,n,r,s,o,l,c,h,d,u=a(33994),p=a(22858),m=a(64599),_=a(35806),g=a(71008),f=a(62193),v=a(2816),y=a(27927),k=(a(81027),a(50693),a(79641),a(72606),a(50289)),b=a(29818),A=a(34897),w=(a(13292),a(29180)),x=(a(24284),a(33209),a(60203),a(90431),a(55321));(0,y.A)([(0,b.EM)("dialog-tag-detail")],(function(t,e){var a,y,q,z=function(e){function a(){var e;(0,g.A)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return e=(0,f.A)(this,a,[].concat(n)),t(e),e}return(0,v.A)(a,e),(0,_.A)(a)}(e);return{F:z,d:[{kind:"field",decorators:[(0,b.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_id",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_submitting",value:function(){return!1}},{kind:"method",key:"showDialog",value:function(t){this._params=t,this._error=void 0,this._params.entry?this._name=this._params.entry.name||"":(this._id="",this._name="")}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,A.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params?(0,k.qy)(i||(i=(0,m.A)([' <ha-dialog open @closed="','" scrimClickAction escapeKeyAction .heading="','"> <div> ',' <div class="form"> ',' <ha-textfield dialogInitialFocus .value="','" .configValue="','" @input="','" .label="','" .validationMessage="','" required></ha-textfield> '," </div> "," </div> ",' <mwc-button slot="primaryAction" @click="','" .disabled="','"> '," </mwc-button> "," </ha-dialog> "])),this.closeDialog,(0,w.l)(this.hass,this._params.entry?this._params.entry.name||this._params.entry.id:this.hass.localize("ui.panel.config.tag.detail.new_tag")),this._error?(0,k.qy)(n||(n=(0,m.A)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this._params.entry?(0,k.qy)(r||(r=(0,m.A)(["",": ",""])),this.hass.localize("ui.panel.config.tag.detail.tag_id"),this._params.entry.id):"",this._name,"name",this._valueChanged,this.hass.localize("ui.panel.config.tag.detail.name"),this.hass.localize("ui.panel.config.tag.detail.required_error_msg"),this._params.entry?"":(0,k.qy)(s||(s=(0,m.A)(['<ha-textfield .value="','" .configValue="','" @input="','" .label="','" .placeholder="','"></ha-textfield>'])),this._id||"","id",this._valueChanged,this.hass.localize("ui.panel.config.tag.detail.tag_id"),this.hass.localize("ui.panel.config.tag.detail.tag_id_placeholder")),this._params.entry?(0,k.qy)(o||(o=(0,m.A)([" <div> <p> ",' </p> </div> <div id="qr"> <ha-qr-code .data="','" center-image="/static/icons/favicon-192x192.png" error-correction-level="quartile" scale="5"> </ha-qr-code> </div> '])),this.hass.localize("ui.panel.config.tag.detail.usage",{companion_link:(0,k.qy)(l||(l=(0,m.A)(['<a href="https://companion.home-assistant.io/" target="_blank" rel="noreferrer">',"</a>"])),this.hass.localize("ui.panel.config.tag.detail.companion_apps"))}),"".concat("https://www.home-assistant.io/tag/").concat(this._params.entry.id)):"",this._params.entry?(0,k.qy)(c||(c=(0,m.A)([' <mwc-button slot="secondaryAction" class="warning" @click="','" .disabled="','"> '," </mwc-button> "])),this._deleteEntry,this._submitting,this.hass.localize("ui.panel.config.tag.detail.delete")):k.s6,this._updateEntry,this._submitting||!this._name,this._params.entry?this.hass.localize("ui.panel.config.tag.detail.update"):this.hass.localize("ui.panel.config.tag.detail.create"),this._params.openWrite&&!this._params.entry?(0,k.qy)(h||(h=(0,m.A)(['<mwc-button slot="primaryAction" @click="','" .disabled="','"> '," </mwc-button>"])),this._updateWriteEntry,this._submitting||!this._name,this.hass.localize("ui.panel.config.tag.detail.create_and_write")):""):k.s6}},{kind:"method",key:"_valueChanged",value:function(t){var e=t.target,a=e.configValue;this._error=void 0,this["_".concat(a)]=e.value}},{kind:"method",key:"_updateEntry",value:(q=(0,p.A)((0,u.A)().mark((function t(){var e,a;return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._submitting=!0,t.prev=1,a={name:this._name.trim()},!this._params.entry){t.next=9;break}return t.next=6,this._params.updateEntry(a);case 6:e=t.sent,t.next=12;break;case 9:return t.next=11,this._params.createEntry(a,this._id);case 11:e=t.sent;case 12:this.closeDialog(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),this._error=t.t0?t.t0.message:"Unknown error";case 18:return t.prev=18,this._submitting=!1,t.finish(18);case 21:return t.abrupt("return",e);case 22:case"end":return t.stop()}}),t,this,[[1,15,18,21]])}))),function(){return q.apply(this,arguments)})},{kind:"method",key:"_updateWriteEntry",value:(y=(0,p.A)((0,u.A)().mark((function t(){var e,a,i;return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=null===(e=this._params)||void 0===e?void 0:e.openWrite,t.next=3,this._updateEntry();case 3:if((i=t.sent)&&a){t.next=6;break}return t.abrupt("return");case 6:a(i);case 7:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})},{kind:"method",key:"_deleteEntry",value:(a=(0,p.A)((0,u.A)().mark((function t(){return(0,u.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._submitting=!0,t.prev=1,t.next=4,this._params.removeEntry();case 4:if(!t.sent){t.next=6;break}this._params=void 0;case 6:return t.prev=6,this._submitting=!1,t.finish(6);case 9:case"end":return t.stop()}}),t,this,[[1,,6,9]])}))),function(){return a.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[x.nA,(0,k.AH)(d||(d=(0,m.A)(["a{color:var(--primary-color)}#qr{text-align:center}ha-textfield{display:block;margin:8px 0}::slotted(img){height:100%}"])))]}}]}}),k.WF)}}]);
//# sourceMappingURL=1513.mFpqE8p-AY4.js.map