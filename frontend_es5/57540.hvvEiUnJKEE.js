"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[57540],{57540:function(t,e,n){var i=n(22858).A,r=n(33994).A;n.a(t,function(){var t=i(r().mark((function t(i,a){var o,s,u,c,h,l,f,d,g,v,m,y,_,p,k,b,w,A,x,N,E,C,j,z,H,L,M,q,F,O,S,D,T,U,I,Q,W,X,Z,B,J,$,G,K,P,R,V,Y,tt,et,nt,it;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.r(e),n.d(e,{DEFAULT_MAX:function(){return nt},DEFAULT_MIN:function(){return et},severityMap:function(){return it}}),o=n(64782),s=n(41981),u=n(64599),c=n(33994),h=n(22858),l=n(35806),f=n(71008),d=n(62193),g=n(2816),v=n(27927),m=n(35890),y=n(71499),_=n(81027),p=n(95737),k=n(97741),b=n(33231),w=n(50693),A=n(29193),x=n(26098),N=n(10507),E=n(39790),C=n(66457),j=n(99019),z=n(16891),H=n(96858),L=n(50289),M=n(29818),q=n(10977),F=n(85323),O=n(55165),S=n(38962),D=n(19244),T=n(26175),U=n(57636),n(13082),I=n(43106),Q=n(9883),W=n(25319),X=n(18102),Z=n(63582),B=n(562),J=n(7934),$=n(46645),!(G=i([U,I])).then){t.next=68;break}return t.next=64,G;case 64:t.t1=t.sent,t.t0=(0,t.t1)(),t.next=69;break;case 68:t.t0=G;case 69:K=t.t0,U=K[0],I=K[1],et=0,nt=100,it={red:"var(--error-color)",green:"var(--success-color)",yellow:"var(--warning-color)",normal:"var(--info-color)"},(0,v.A)([(0,M.EM)("hui-gauge-card")],(function(t,e){var i,r=function(e){function n(){var e;(0,f.A)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=(0,d.A)(this,n,[].concat(r)),t(e),e}return(0,g.A)(n,e),(0,l.A)(n)}(e);return{F:r,d:[{kind:"method",static:!0,key:"getConfigElement",value:(i=(0,h.A)((0,c.A)().mark((function t(){return(0,c.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(59149).then(n.bind(n,59149));case 2:return t.abrupt("return",document.createElement("hui-gauge-card-editor"));case 3:case"end":return t.stop()}}),t)}))),function(){return i.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,n){return{type:"gauge",entity:(0,X.B)(t,1,e,n,["counter","input_number","number","sensor"],(function(t){return!isNaN(Number(t.state))}))[0]||""}}},{kind:"field",decorators:[(0,M.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,M.wk)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(t){if(!t.entity)throw new Error("Entity must be specified");if(!(0,T.n)(t.entity))throw new Error("Invalid entity");this._config=Object.assign({min:et,max:nt},t)}},{kind:"method",key:"render",value:function(){var t,e;if(!this._config||!this.hass)return L.s6;var n=this.hass.states[this._config.entity];if(!n)return(0,L.qy)(P||(P=(0,u.A)([" <hui-warning> "," </hui-warning> "])),(0,$.j)(this.hass,this._config.entity));var i=Number(n.state);if(n.state===Q.Hh)return(0,L.qy)(R||(R=(0,u.A)([" <hui-warning>","</hui-warning> "])),this.hass.localize("ui.panel.lovelace.warning.entity_unavailable",{entity:this._config.entity}));if(isNaN(i))return(0,L.qy)(V||(V=(0,u.A)([" <hui-warning>","</hui-warning> "])),this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric",{entity:this._config.entity}));var r=null!==(t=this._config.name)&&void 0!==t?t:(0,D.u)(n);return(0,L.qy)(Y||(Y=(0,u.A)([' <ha-card class="','" @action="','" .actionHandler="','" tabindex="','"> <ha-gauge .min="','" .max="','" .value="','" .formatOptions="','" .locale="','" .label="','" style="','" .needle="','" .levels="','"></ha-gauge> <div class="name" .title="','">',"</div> </ha-card> "])),(0,F.H)({action:(0,B.A)(this._config)}),this._handleAction,(0,W.T)({hasHold:(0,B.h)(this._config.hold_action),hasDoubleClick:(0,B.h)(this._config.double_tap_action)}),(0,q.J)(!this._config.tap_action||(0,B.h)(this._config.tap_action)?"0":void 0),this._config.min,this._config.max,n.state,(0,U.ZQ)(n,this.hass.entities[n.entity_id]),this.hass.locale,this._config.unit||(null===(e=this.hass)||void 0===e?void 0:e.states[this._config.entity].attributes.unit_of_measurement)||"",(0,O.W)({"--gauge-color":this._computeSeverity(i)}),this._config.needle,this._config.needle?this._severityLevels():void 0,r,r)}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,J.LX)(this,t)}},{kind:"method",key:"updated",value:function(t){if((0,m.A)(r,"updated",this,3)([t]),this._config&&this.hass){var e=t.get("hass"),n=t.get("_config");e&&n&&e.themes===this.hass.themes&&n.theme===this._config.theme||(0,S.Q)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"_computeSeverity",value:function(t){if(!this._config.needle){var e=this._config.segments;if(e){e=(0,s.A)(e).sort((function(t,e){return t.from-e.from}));for(var n=0;n<e.length;n++){var i,r=e[n];if(r&&t>=r.from&&(n+1===e.length||t<(null===(i=e[n+1])||void 0===i?void 0:i.from)))return r.color}return it.normal}var a=this._config.severity;if(!a)return it.normal;var u,c=Object.keys(a).map((function(t){return[t,a[t]]})),h=(0,o.A)(c);try{for(h.s();!(u=h.n()).done;){var l=u.value;if(null==it[l[0]]||isNaN(l[1]))return it.normal}}catch(f){h.e(f)}finally{h.f()}return c.sort((function(t,e){return t[1]-e[1]})),t>=c[0][1]&&t<c[1][1]?it[c[0][0]]:t>=c[1][1]&&t<c[2][1]?it[c[1][0]]:t>=c[2][1]?it[c[2][0]]:it.normal}}},{kind:"method",key:"_severityLevels",value:function(){var t=this._config.segments;if(t)return t.map((function(t){return{level:null==t?void 0:t.from,stroke:null==t?void 0:t.color,label:null==t?void 0:t.label}}));var e=this._config.severity;return e?Object.keys(e).map((function(t){return{level:e[t],stroke:it[t]}})):[{level:0,stroke:it.normal}]}},{kind:"method",key:"_handleAction",value:function(t){(0,Z.$)(this,this.hass,this._config,t.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,L.AH)(tt||(tt=(0,u.A)(["ha-card{height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-card.action{cursor:pointer}ha-card:focus{outline:0}ha-gauge{width:100%;max-width:250px}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}"])))}}]}}),L.WF),a(),t.next=82;break;case 79:t.prev=79,t.t2=t.catch(0),a(t.t2);case 82:case"end":return t.stop()}}),t,null,[[0,79]])})));return function(e,n){return t.apply(this,arguments)}}())}}]);
//# sourceMappingURL=57540.hvvEiUnJKEE.js.map