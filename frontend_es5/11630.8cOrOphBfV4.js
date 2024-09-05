"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[11630,64741],{64741:function(t,e,n){var i=n(22858).A,r=n(33994).A;n.a(t,function(){var t=i(r().mark((function t(i,s){var a,c,o,u,l,f,m,h,d,_,v,b,y,p,g,w,k,j;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.r(e),n.d(e,{computeStateDisplay:function(){return k},computeStateDisplayFromEntityAttributes:function(){return j}}),a=n(81027),c=n(82386),o=n(79243),u=n(26098),l=n(36604),f=n(9883),m=n(45269),h=n(9449),d=n(57289),_=n(8581),v=n(41924),b=n(57636),y=n(40863),p=n(213),!(g=i([d,_,v,b])).then){t.next=30;break}return t.next=26,g;case 26:t.t1=t.sent,t.t0=(0,t.t1)(),t.next=31;break;case 30:t.t0=g;case 31:w=t.t0,d=w[0],_=w[1],v=w[2],b=w[3],k=function(t,e,n,i,r,s,a){var c=null==s?void 0:s[e.entity_id];return j(t,n,i,r,c,e.entity_id,e.attributes,void 0!==a?a:e.state)},j=function(t,e,n,i,r,s,a,c){if(c===f.HV||c===f.Hh)return t("state.default.".concat(c));var o=(0,p.m)(s);if((0,b.ty)(a,"sensor"===o?n:[])){if("duration"===a.device_class&&a.unit_of_measurement&&h.Z[a.unit_of_measurement])try{return(0,h.a)(c,a.unit_of_measurement)}catch(j){}if("monetary"===a.device_class)try{return(0,b.ZV)(c,e,Object.assign({style:"currency",currency:a.unit_of_measurement,minimumFractionDigits:2},(0,b.ZQ)({state:c,attributes:a},r)))}catch(j){}var u=(0,b.ZV)(c,e,(0,b.ZQ)({state:c,attributes:a},r)),l=a.unit_of_measurement;return l?"".concat(u).concat((0,y.A)(l,e)).concat(l):u}if("datetime"===o){var g=new Date(c);return(0,_.r6)(g,e,i)}if(["date","input_datetime","time"].includes(o))try{var w=c.split(" ");if(2===w.length)return(0,_.r6)(new Date(w.join("T")),Object.assign(Object.assign({},e),{},{time_zone:m.Wj.local}),i);if(1===w.length){if(c.includes("-"))return(0,d.Yq)(new Date("".concat(c,"T00:00")),Object.assign(Object.assign({},e),{},{time_zone:m.Wj.local}),i);if(c.includes(":")){var k=new Date;return(0,v.fU)(new Date("".concat(k.toISOString().split("T")[0],"T").concat(c)),Object.assign(Object.assign({},e),{},{time_zone:m.Wj.local}),i)}}return c}catch(O){return c}if("counter"===o||"number"===o||"input_number"===o)return(0,b.ZV)(c,e,(0,b.ZQ)({state:c,attributes:a},r));if(["button","conversation","event","image","input_button","notify","scene","stt","tag","tts","wake_word"].includes(o)||"sensor"===o&&"timestamp"===a.device_class)try{return(0,_.r6)(new Date(c),e,i)}catch(j){return c}return(null==r?void 0:r.translation_key)&&t("component.".concat(r.platform,".entity.").concat(o,".").concat(r.translation_key,".state.").concat(c))||a.device_class&&t("component.".concat(o,".entity_component.").concat(a.device_class,".state.").concat(c))||t("component.".concat(o,".entity_component._.state.").concat(c))||c},s(),t.next=44;break;case 41:t.prev=41,t.t2=t.catch(0),s(t.t2);case 44:case"end":return t.stop()}}),t,null,[[0,41]])})));return function(e,n){return t.apply(this,arguments)}}())},11630:function(t,e,n){var i=n(22858).A,r=n(33994).A;n.a(t,function(){var t=i(r().mark((function t(i,s){var a,c,o,u,l,f,m,h,d,_,v,b,y,p,g,w,k,j,O,H,S,A,D,T,x,Z,z,M,E,I,Q,V,F,W,q,C,J,U,Y,B,G,K,L,N,P,R,X,$,tt,et,nt,it,rt,st,at;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.d(e,{IQ:function(){return R},Jo:function(){return N},Mm:function(){return st},qc:function(){return at}}),a=n(41981),c=n(64782),o=n(71008),u=n(35806),l=n(81027),f=n(13025),m=n(44124),h=n(82386),d=n(95737),_=n(79243),v=n(97741),b=n(89655),y=n(33231),p=n(54774),g=n(26098),w=n(10507),k=n(39790),j=n(74268),O=n(24545),H=n(51855),S=n(82130),A=n(31743),D=n(22328),T=n(4959),x=n(62435),Z=n(36604),z=n(99019),M=n(253),E=n(2075),I=n(94438),Q=n(54846),V=n(16891),F=n(4525),W=n(66555),q=n(96858),C=n(213),J=n(64741),U=n(19244),!(Y=i([J])).then){t.next=79;break}return t.next=75,Y;case 75:t.t1=t.sent,t.t0=(0,t.t1)(),t.next=80;break;case 79:t.t0=Y;case 80:J=t.t0[0],B=["climate","humidifier","water_heater"],G=["climate","humidifier","input_datetime","thermostat","water_heater","person","device_tracker"],K=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode","action","current_humidity"],L=function(t,e){return!t.states[e]||G.includes((0,C.m)(e))},N=function(t,e,n,i,r){var s={type:"history/stream",entity_ids:r,start_time:n.toISOString(),end_time:i.toISOString(),minimal_response:!0,no_attributes:!r.some((function(e){return L(t,e)}))},a=new P(t);return t.connection.subscribeMessage((function(t){return e(a.processMessage(t))}),s)},P=function(){return(0,u.A)((function t(e,n){(0,o.A)(this,t),this.hass=void 0,this.hoursToShow=void 0,this.combinedHistory=void 0,this.hass=e,this.hoursToShow=n,this.combinedHistory={}}),[{key:"processMessage",value:function(t){if(!this.combinedHistory||!Object.keys(this.combinedHistory).length)return this.combinedHistory=t.states,this.combinedHistory;if(!Object.keys(t.states).length)return this.combinedHistory;for(var e=this.hoursToShow?((new Date).getTime()-3600*this.hoursToShow*1e3)/1e3:void 0,n={},i=0,r=Object.keys(this.combinedHistory);i<r.length;i++){n[r[i]]=[]}for(var s=0,a=Object.keys(t.states);s<a.length;s++){n[a[s]]=[]}for(var c=0,o=Object.keys(n);c<o.length;c++){var u=o[c];if(u in this.combinedHistory&&u in t.states){var l=this.combinedHistory[u],f=l[l.length-1];n[u]=l.concat(t.states[u]),t.states[u][0].lu<f.lu&&(n[u]=n[u].sort((function(t,e){return t.lu-e.lu})))}else u in this.combinedHistory?n[u]=this.combinedHistory[u]:n[u]=t.states[u];if(e&&u in this.combinedHistory){var m=n[u].filter((function(t){return t.lu<e}));if(!m.length)continue;if(n[u]=n[u].filter((function(t){return t.lu>=e})),n[u].length&&n[u][0].lu===e)continue;var h=m[m.length-1];h.lu=e,n[u].unshift(h)}}return this.combinedHistory=n,this.combinedHistory}}])}(),R=function(t,e,n,i){var r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],a=arguments.length>6?arguments[6]:void 0,c={type:"history/stream",entity_ids:i,start_time:new Date((new Date).getTime()-3600*n*1e3).toISOString(),minimal_response:r,significant_changes_only:s,no_attributes:null!=a?a:!i.some((function(e){return L(t,e)}))},o=new P(t,n);return t.connection.subscribeMessage((function(t){return e(o.processMessage(t))}),c)},X=function(t,e){return t.state===e.state&&(!t.attributes||!e.attributes||K.every((function(n){return t.attributes[n]===e.attributes[n]})))},$=function(t,e,n,i,r,s,a){var o,u=[],l=s[0],f=(0,c.A)(s);try{for(f.s();!(o=f.n()).done;){var m=o.value;if(!(u.length>0&&m.s===u[u.length-1].state)){var h={};null!=a&&a.attributes.device_class&&(h.device_class=null==a?void 0:a.attributes.device_class),u.push({state_localize:(0,J.computeStateDisplayFromEntityAttributes)(t,e,[],n,i[r],r,Object.assign(Object.assign({},m.a||l.a),h),m.s),state:m.s,last_changed:1e3*(m.lc?m.lc:m.lu)})}}}catch(d){f.e(d)}finally{f.f()}return{name:(0,U._)(r,(null==a?void 0:a.attributes)||l.a),entity_id:r,data:u}},tt=function(t,e,n,i){var r=[];return Object.keys(n).forEach((function(t){var e,s=n[t],a=s[0],o=(0,C.m)(t),u=[],l=(0,c.A)(s);try{for(l.s();!(e=l.n()).done;){var f=e.value,m=void 0;if(B.includes(o)){m={state:f.s,last_changed:1e3*f.lu,attributes:{}};for(var h=0,d=K;h<d.length;h++){var _=d[h];_ in f.a&&(m.attributes[_]=f.a[_])}}else m={state:f.s,last_changed:1e3*(f.lc?f.lc:f.lu),attributes:{}};u.length>1&&X(m,u[u.length-1])&&X(m,u[u.length-2])||u.push(m)}}catch(b){l.e(b)}finally{l.f()}var v=t in i?i[t].attributes:"friendly_name"in a.a?a.a:void 0;r.push({domain:o,name:(0,U._)(t,v||{}),entity_id:t,states:u})})),{unit:t,device_class:e,identifier:Object.keys(n).join(""),data:r}},et=["counter","input_number","number"],nt=function(t){return et.includes(t)},it=function(t){return"unit_of_measurement"in t||"state_class"in t},rt=function(t,e){return null!=t.attributes.device_class&&e.includes(t.attributes.device_class)},st=function(t,e,n,i,r){var s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6&&void 0!==arguments[6]&&arguments[6],o={},u=[],l={};return new Set([].concat((0,a.A)(n),(0,a.A)(Object.keys(e)))).forEach((function(n){n in e?l[n]=e[n]:t.states[n]&&(l[n]=[{s:t.states[n].state,a:t.states[n].attributes,lu:new Date(t.states[n].last_updated).getTime()/1e3}])})),l?(Object.keys(l).forEach((function(e){var n,f=l[e];if(0!==f.length){var m,h=(0,C.m)(e),d=e in t.states?t.states[e]:void 0,_=d||nt(h)?void 0:f.find((function(t){return t.a&&it(t.a)}));m=c||nt(h)||null!=d&&it(d.attributes)||null!=d&&"sensor"===h&&rt(d,r)||null!=_?(null==d?void 0:d.attributes.unit_of_measurement)||(null==_?void 0:_.a.unit_of_measurement)||" ":{zone:i("ui.dialogs.more_info_control.zone.graph_unit"),climate:t.config.unit_system.temperature,humidifier:"%",water_heater:t.config.unit_system.temperature}[h];var v={climate:"temperature",humidifier:"humidity",water_heater:"temperature"}[h]||(null===(n=(null==d?void 0:d.attributes)||(null==_?void 0:_.a))||void 0===n?void 0:n.device_class),b=at(m,v,s);if(m)if(b&&b in o&&e in o[b]){var y;(y=o[b][e]).push.apply(y,(0,a.A)(f))}else b&&(b in o||(o[b]={}),o[b][e]=f);else u.push($(i,t.locale,t.config,t.entities,e,f,d))}})),{line:Object.keys(o).map((function(e){var n=e.split("_"),i=n[0],r=n[1]||void 0;return tt(i,r,o[e],t.states)})),timeline:u}):{line:[],timeline:[]}},at=function(t,e,n){return n?"".concat(t,"_").concat(e||""):t},s(),t.next=105;break;case 102:t.prev=102,t.t2=t.catch(0),s(t.t2);case 105:case"end":return t.stop()}}),t,null,[[0,102]])})));return function(e,n){return t.apply(this,arguments)}}())}}]);
//# sourceMappingURL=11630.8cOrOphBfV4.js.map