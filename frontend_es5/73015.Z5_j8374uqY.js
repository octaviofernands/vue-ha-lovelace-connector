"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[73015],{73015:function(e,t,i){var r=i(22858).A,n=i(33994).A;i.a(e,function(){var e=r(n().mark((function e(r,a){var s,o,u,l,c,d,v,h,f,k,y,p,_,b,A,g,m,w,S,E,M,q,x,Z,F,I,j;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.r(t),i.d(t,{HaAreaSelector:function(){return j}}),s=i(64599),o=i(35806),u=i(71008),l=i(62193),c=i(2816),d=i(27927),v=i(81027),h=i(39790),f=i(9241),k=i(253),y=i(4525),p=i(50289),_=i(29818),b=i(94100),A=i(21863),g=i(10725),m=i(34897),w=i(74229),S=i(31265),E=i(29829),M=i(25756),q=i(16311),!(x=r([M,q])).then){e.next=38;break}return e.next=34,x;case 34:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=39;break;case 38:e.t0=x;case 39:Z=e.t0,M=Z[0],q=Z[1],j=(0,d.A)([(0,_.EM)("ha-selector-area")],(function(e,t){var i=function(t){function i(){var t;(0,u.A)(this,i);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=(0,l.A)(this,i,[].concat(n)),e(t),t}return(0,c.A)(i,t),(0,o.A)(i)}(t);return{F:i,d:[{kind:"field",decorators:[(0,_.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,_.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,_.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,_.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,_.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,_.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,_.MZ)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"field",decorators:[(0,_.wk)()],key:"_entitySources",value:void 0},{kind:"field",decorators:[(0,_.wk)()],key:"_configEntries",value:void 0},{kind:"field",key:"_deviceIntegrationLookup",value:function(){return(0,b.A)(g.fk)}},{kind:"method",key:"_hasIntegration",value:function(e){var t,i;return(null===(t=e.area)||void 0===t?void 0:t.entity)&&(0,A.e)(e.area.entity).some((function(e){return e.integration}))||(null===(i=e.area)||void 0===i?void 0:i.device)&&(0,A.e)(e.area.device).some((function(e){return e.integration}))}},{kind:"method",key:"willUpdate",value:function(e){var t,i;e.has("selector")&&void 0!==this.value&&(null!==(t=this.selector.area)&&void 0!==t&&t.multiple&&!Array.isArray(this.value)?(this.value=[this.value],(0,m.r)(this,"value-changed",{value:this.value})):null!==(i=this.selector.area)&&void 0!==i&&i.multiple||!Array.isArray(this.value)||(this.value=this.value[0],(0,m.r)(this,"value-changed",{value:this.value})))}},{kind:"method",key:"updated",value:function(e){var t=this;e.has("selector")&&this._hasIntegration(this.selector)&&!this._entitySources&&(0,w.c)(this.hass).then((function(e){t._entitySources=e})),!this._configEntries&&this._hasIntegration(this.selector)&&(this._configEntries=[],(0,S.VN)(this.hass).then((function(e){t._configEntries=e})))}},{kind:"method",key:"render",value:function(){var e,t,i,r,n;return this._hasIntegration(this.selector)&&!this._entitySources?p.s6:null!==(e=this.selector.area)&&void 0!==e&&e.multiple?(0,p.qy)(I||(I=(0,s.A)([' <ha-areas-picker .hass="','" .value="','" .helper="','" .pickAreaLabel="','" no-add .deviceFilter="','" .entityFilter="','" .disabled="','" .required="','"></ha-areas-picker> '])),this.hass,this.value,this.helper,this.label,null!==(t=this.selector.area)&&void 0!==t&&t.device?this._filterDevices:void 0,null!==(i=this.selector.area)&&void 0!==i&&i.entity?this._filterEntities:void 0,this.disabled,this.required):(0,p.qy)(F||(F=(0,s.A)([' <ha-area-picker .hass="','" .value="','" .label="','" .helper="','" no-add .deviceFilter="','" .entityFilter="','" .disabled="','" .required="','"></ha-area-picker> '])),this.hass,this.value,this.label,this.helper,null!==(r=this.selector.area)&&void 0!==r&&r.device?this._filterDevices:void 0,null!==(n=this.selector.area)&&void 0!==n&&n.entity?this._filterEntities:void 0,this.disabled,this.required)}},{kind:"field",key:"_filterEntities",value:function(){var e=this;return function(t){var i;return null===(i=e.selector.area)||void 0===i||!i.entity||(0,A.e)(e.selector.area.entity).some((function(i){return(0,E.Ru)(i,t,e._entitySources)}))}}},{kind:"field",key:"_filterDevices",value:function(){var e=this;return function(t){var i;if(null===(i=e.selector.area)||void 0===i||!i.device)return!0;var r=e._entitySources?e._deviceIntegrationLookup(e._entitySources,Object.values(e.hass.entities),Object.values(e.hass.devices),e._configEntries):void 0;return(0,A.e)(e.selector.area.device).some((function(e){return(0,E.vX)(e,t,r)}))}}}]}}),p.WF),a(),e.next=49;break;case 46:e.prev=46,e.t2=e.catch(0),a(e.t2);case 49:case"end":return e.stop()}}),e,null,[[0,46]])})));return function(t,i){return e.apply(this,arguments)}}())},74229:function(e,t,i){i.d(t,{c:function(){return o}});i(10507);var r=i(33994),n=i(22858),a=(i(81027),i(39790),i(66457),function(){var e=(0,n.A)((0,r.A)().mark((function e(t,i,n,s,o){var u,l,c,d,v,h,f,k=arguments;return(0,r.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(u=k.length,l=new Array(u>5?u-5:0),c=5;c<u;c++)l[c-5]=k[c];if(v=(d=o)[t],h=function(e){return s&&s(o,e.result)!==e.cacheKey?(d[t]=void 0,a.apply(void 0,[t,i,n,s,o].concat(l))):e.result},!v){e.next=6;break}return e.abrupt("return",v instanceof Promise?v.then(h):h(v));case 6:return f=n.apply(void 0,[o].concat(l)),d[t]=f,f.then((function(e){d[t]={result:e,cacheKey:null==s?void 0:s(o,e)},setTimeout((function(){d[t]=void 0}),i)}),(function(){d[t]=void 0})),e.abrupt("return",f);case 10:case"end":return e.stop()}}),e)})));return function(t,i,r,n,a){return e.apply(this,arguments)}}()),s=function(e){return e.callWS({type:"entity/source"})},o=function(e){return a("_entitySources",3e4,s,(function(e){return Object.keys(e.states).length}),e)}}}]);
//# sourceMappingURL=73015.Z5_j8374uqY.js.map