"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[95423],{9755:function(t,i,e){e.d(i,{e:function(){return n}});e(81027);var n=function(t){return"/api/image_proxy/".concat(t.entity_id,"?token=").concat(t.attributes.access_token,"&state=").concat(t.state)}},95423:function(t,i,e){e.r(i),e.d(i,{HuiPictureCard:function(){return E}});var n,a,s,o=e(64599),c=e(33994),h=e(22858),r=e(35806),u=e(71008),d=e(62193),f=e(2816),_=e(27927),g=e(35890),l=(e(71499),e(81027),e(95737),e(39790),e(66457),e(99019),e(96858),e(50289)),m=e(29818),k=e(85323),y=e(10977),p=e(38962),v=e(213),b=(e(13082),e(9755)),A=e(25319),w=e(63582),C=e(562),x=e(7934),H=e(46645),E=(0,_.A)([(0,m.EM)("hui-picture-card")],(function(t,i){var _,E=function(i){function e(){var i;(0,u.A)(this,e);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return i=(0,d.A)(this,e,[].concat(a)),t(i),i}return(0,f.A)(e,i),(0,r.A)(e)}(i);return{F:E,d:[{kind:"method",static:!0,key:"getConfigElement",value:(_=(0,h.A)((0,c.A)().mark((function t(){return(0,c.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4792).then(e.bind(e,4792));case 2:return t.abrupt("return",document.createElement("hui-picture-card-editor"));case 3:case"end":return t.stop()}}),t)}))),function(){return _.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"picture",image:"https://demo.home-assistant.io/stub_config/t-shirt-promo.png"}}},{kind:"field",decorators:[(0,m.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.wk)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 5}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.image&&!t.image_entity)throw new Error("Image required");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){if(!this._config||(0,x.xP)(this,t))return!0;if(this._config.image_entity&&t.has("hass")){var i=t.get("hass");if(!i||i.states[this._config.image_entity]!==this.hass.states[this._config.image_entity])return!0}return!1}},{kind:"method",key:"updated",value:function(t){if((0,g.A)(E,"updated",this,3)([t]),this._config&&this.hass){var i=t.get("hass"),e=t.get("_config");i&&e&&i.themes===this.hass.themes&&e.theme===this._config.theme||(0,p.Q)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"render",value:function(){var t,i;if(!this._config||!this.hass)return l.s6;if(this._config.image_entity&&!(i=this.hass.states[this._config.image_entity]))return(0,l.qy)(n||(n=(0,o.A)(["<hui-warning> "," </hui-warning>"])),(0,H.j)(this.hass,this._config.image_entity));var e=this._config.image;if(this._config.image_entity)switch((0,v.m)(this._config.image_entity)){case"image":e=(0,b.e)(i);break;case"person":i.attributes.entity_picture&&(e=i.attributes.entity_picture)}return(0,l.qy)(a||(a=(0,o.A)([' <ha-card @action="','" .actionHandler="','" tabindex="','" class="','"> <img alt="','" src="','"> </ha-card> '])),this._handleAction,(0,A.T)({hasHold:(0,C.h)(this._config.hold_action),hasDoubleClick:(0,C.h)(this._config.double_tap_action)}),(0,y.J)((0,C.h)(this._config.tap_action)||this._config.image_entity?"0":void 0),(0,k.H)({clickable:Boolean(this._config.image_entity&&!this._config.tap_action||this._config.tap_action&&"none"!==this._config.tap_action.action||this._config.hold_action&&"none"!==this._config.hold_action.action||this._config.double_tap_action&&"none"!==this._config.double_tap_action.action)}),(0,y.J)(this._config.alt_text||(null===(t=i)||void 0===t?void 0:t.attributes.friendly_name)),this.hass.hassUrl(e))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,l.AH)(s||(s=(0,o.A)(["ha-card{overflow:hidden;height:100%}ha-card.clickable{cursor:pointer}img{display:block;width:100%}"])))}},{kind:"method",key:"_handleAction",value:function(t){(0,w.$)(this,this.hass,this._config,t.detail.action)}}]}}),l.WF)}}]);
//# sourceMappingURL=95423.lF18-k5MmpY.js.map