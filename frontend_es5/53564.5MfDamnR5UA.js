"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[53564],{37456:function(e,t,n){n.d(t,{a:function(){return a}});var i=(0,n(58034).n)((function(e){history.replaceState({scrollPosition:e},"")}),300),a=function(e){return function(t){return{kind:"method",placement:"prototype",key:t.key,descriptor:{set:function(e){i(e),this["__".concat(String(t.key))]=e},get:function(){var e;return this["__".concat(String(t.key))]||(null===(e=history.state)||void 0===e?void 0:e.scrollPosition)},enumerable:!0,configurable:!0},finisher:function(n){var i=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){var n=this;i.call(this);var a=this[t.key];a&&this.updateComplete.then((function(){var t=n.renderRoot.querySelector(e);t&&setTimeout((function(){t.scrollTop=a}),0)}))}}}}}},77980:function(e,t,n){var i,a,r,s,o,u=n(64599),d=n(35806),l=n(71008),c=n(62193),p=n(2816),h=n(27927),v=(n(81027),n(50289)),f=n(29818),_=n(37456),k=(n(45346),n(11804),n(55321));(0,h.A)([(0,f.EM)("hass-subpage")],(function(e,t){var n=function(t){function n(){var t;(0,l.A)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=(0,c.A)(this,n,[].concat(a)),e(t),t}return(0,p.A)(n,t),(0,d.A)(n)}(t);return{F:n,d:[{kind:"field",decorators:[(0,f.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.MZ)()],key:"header",value:void 0},{kind:"field",decorators:[(0,f.MZ)({type:Boolean,attribute:"main-page"})],key:"mainPage",value:function(){return!1}},{kind:"field",decorators:[(0,f.MZ)({type:String,attribute:"back-path"})],key:"backPath",value:void 0},{kind:"field",decorators:[(0,f.MZ)({attribute:!1})],key:"backCallback",value:void 0},{kind:"field",decorators:[(0,f.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,f.MZ)({type:Boolean})],key:"supervisor",value:function(){return!1}},{kind:"field",decorators:[(0,_.a)(".content")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"render",value:function(){var e;return(0,v.qy)(i||(i=(0,u.A)([' <div class="toolbar"> ',' <div class="main-title"><slot name="header">','</slot></div> <slot name="toolbar-icon"></slot> </div> <div class="content ha-scrollbar" @scroll="','"> <slot></slot> </div> <div id="fab"> <slot name="fab"></slot> </div> '])),this.mainPage||null!==(e=history.state)&&void 0!==e&&e.root?(0,v.qy)(a||(a=(0,u.A)([' <ha-menu-button .hassio="','" .hass="','" .narrow="','"></ha-menu-button> '])),this.supervisor,this.hass,this.narrow):this.backPath?(0,v.qy)(r||(r=(0,u.A)([' <a href="','"> <ha-icon-button-arrow-prev .hass="','"></ha-icon-button-arrow-prev> </a> '])),this.backPath,this.hass):(0,v.qy)(s||(s=(0,u.A)([' <ha-icon-button-arrow-prev .hass="','" @click="','"></ha-icon-button-arrow-prev> '])),this.hass,this._backTapped),this.header,this._saveScrollPos)}},{kind:"method",decorators:[(0,f.Ls)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",key:"_backTapped",value:function(){this.backCallback?this.backCallback():history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[k.dp,(0,v.AH)(o||(o=(0,u.A)([":host{display:block;height:100%;background-color:var(--primary-background-color);overflow:hidden;position:relative}:host([narrow]){width:100%;position:fixed}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}.toolbar a{color:var(--sidebar-text-color);text-decoration:none}::slotted([slot=toolbar-icon]),ha-icon-button-arrow-prev,ha-menu-button{pointer-events:auto;color:var(--sidebar-icon-color)}.main-title{margin:var(--margin-title);line-height:20px;flex-grow:1}.content{position:relative;width:100%;height:calc(100% - 1px - var(--header-height));overflow-y:auto;overflow:auto;-webkit-overflow-scrolling:touch}#fab{position:absolute;right:calc(16px + env(safe-area-inset-right));inset-inline-end:calc(16px + env(safe-area-inset-right));inset-inline-start:initial;bottom:calc(16px + env(safe-area-inset-bottom));z-index:1;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}:host([narrow]) #fab.tabs{bottom:calc(84px + env(safe-area-inset-bottom))}#fab[is-wide]{bottom:24px;right:24px;inset-inline-end:24px;inset-inline-start:initial}"])))]}}]}}),v.WF)},53564:function(e,t,n){var i=n(22858).A,a=n(33994).A;n.a(e,function(){var e=i(a().mark((function e(i,r){var s,o,u,d,l,c,p,h,v,f,_,k,g,b,y,x;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.r(t),n.d(t,{AssistDebug:function(){return x}}),s=n(64599),o=n(35806),u=n(71008),d=n(62193),l=n(2816),c=n(27927),p=n(81027),h=n(50289),v=n(29818),f=n(76083),_=n(6011),!(k=i([f,_])).then){e.next=23;break}return e.next=19,k;case 19:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=24;break;case 23:e.t0=k;case 24:g=e.t0,f=g[0],_=g[1],x=(0,c.A)([(0,v.EM)("assist-debug")],(function(e,t){var n=function(t){function n(){var t;(0,u.A)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=(0,d.A)(this,n,[].concat(a)),e(t),t}return(0,l.A)(n,t),(0,o.A)(n)}(t);return{F:n,d:[{kind:"field",decorators:[(0,v.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"method",key:"render",value:function(){var e=this.route.path.substring(1);return e?(0,h.qy)(b||(b=(0,s.A)(['<assist-pipeline-debug .hass="','" .narrow="','" .pipelineId="','"></assist-pipeline-debug>'])),this.hass,this.narrow,e):(0,h.qy)(y||(y=(0,s.A)(['<assist-pipeline-run-debug .hass="','" .narrow="','"></assist-pipeline-run-debug>'])),this.hass,this.narrow)}}]}}),h.WF),r(),e.next=34;break;case 31:e.prev=31,e.t2=e.catch(0),r(e.t2);case 34:case"end":return e.stop()}}),e,null,[[0,31]])})));return function(t,n){return e.apply(this,arguments)}}())},76083:function(e,t,n){var i=n(22858).A,a=n(33994).A;n.a(e,function(){var e=i(a().mark((function e(t,i){var r,s,o,u,d,l,c,p,h,v,f,_,k,g,b,y,x,w,A,m,R,C,q,I,E,M,P,T,z,B,Z,D,S;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=n(33994),s=n(22858),o=n(64599),u=n(35806),d=n(71008),l=n(62193),c=n(2816),p=n(27927),h=n(35890),v=n(81027),f=n(44124),_=n(88557),k=n(82386),g=n(53165),b=n(39790),y=n(253),x=n(94438),w=n(50289),A=n(29818),m=n(66066),R=n(8581),C=n(79228),q=n(6121),n(77980),I=n(55321),E=n(88362),!(M=t([R,E])).then){e.next=43;break}return e.next=39,M;case 39:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=44;break;case 43:e.t0=M;case 44:P=e.t0,R=P[0],E=P[1],(0,p.A)([(0,A.EM)("assist-pipeline-debug")],(function(e,t){var n,i,a=function(t){function n(){var t;(0,d.A)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=(0,l.A)(this,n,[].concat(a)),e(t),t}return(0,c.A)(n,t),(0,u.A)(n)}(t);return{F:a,d:[{kind:"field",decorators:[(0,A.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,A.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,A.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,A.MZ)()],key:"pipelineId",value:void 0},{kind:"field",decorators:[(0,A.wk)()],key:"_runId",value:void 0},{kind:"field",decorators:[(0,A.wk)()],key:"_runs",value:void 0},{kind:"field",decorators:[(0,A.wk)()],key:"_events",value:void 0},{kind:"field",key:"_unsubRefreshEventsID",value:void 0},{kind:"method",key:"render",value:function(){var e,t,n=this;return(0,w.qy)(T||(T=(0,o.A)(['<hass-subpage .narrow="','" .hass="','" .header="','"> <a href="/config/voice-assistants/debug?pipeline=','" slot="toolbar-icon"><ha-icon-button .path="','" .label="','"></ha-icon-button></a> <div class="toolbar"> '," </div> ",' <div class="content"> '," </div> </hass-subpage>"])),this.narrow,this.hass,this.hass.localize("ui.panel.config.voice_assistants.debug.header"),this.pipelineId,"M8,7A2,2 0 0,1 10,9V14A2,2 0 0,1 8,16A2,2 0 0,1 6,14V9A2,2 0 0,1 8,7M14,14C14,16.97 11.84,19.44 9,19.92V22H7V19.92C4.16,19.44 2,16.97 2,14H4A4,4 0 0,0 8,18A4,4 0 0,0 12,14H14M21.41,9.41L17.17,13.66L18.18,10H14A2,2 0 0,1 12,8V4A2,2 0 0,1 14,2H20A2,2 0 0,1 22,4V8C22,8.55 21.78,9.05 21.41,9.41Z",this.hass.localize("ui.panel.config.voice_assistants.debug.start_debug_run"),null!==(e=this._runs)&&void 0!==e&&e.length?(0,w.qy)(z||(z=(0,o.A)([' <ha-icon-button .disabled="','" .label="','" @click="','" .path="','"></ha-icon-button> <select .value="','" @change="','"> ',' </select> <ha-icon-button .disabled="','" .label="','" @click="','" .path="','"></ha-icon-button> '])),this._runs[this._runs.length-1].pipeline_run_id===this._runId,this.hass.localize("ui.panel.config.voice_assistants.debug.older_run"),this._pickOlderRun,"M1,12L5,16V13H17.17C17.58,14.17 18.69,15 20,15A3,3 0 0,0 23,12A3,3 0 0,0 20,9C18.69,9 17.58,9.83 17.17,11H5V8L1,12Z",this._runId,this._pickRun,(0,m.u)(this._runs,(function(e){return e.pipeline_run_id}),(function(e){return(0,w.qy)(B||(B=(0,o.A)(['<option value="','"> '," </option>"])),e.pipeline_run_id,(0,R.yg)(new Date(e.timestamp),n.hass.locale,n.hass.config))})),this._runs[0].pipeline_run_id===this._runId,this.hass.localize("ui.panel.config.voice_assistants.debug.newer_run"),this._pickNewerRun,"M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z"):"",0===(null===(t=this._runs)||void 0===t?void 0:t.length)?(0,w.qy)(Z||(Z=(0,o.A)(['<div class="container"> '," </div>"])),this.hass.localize("ui.panel.config.voice_assistants.debug.no_runs_found")):"",this._events?(0,w.qy)(D||(D=(0,o.A)(['<assist-render-pipeline-events .hass="','" .events="','"></assist-render-pipeline-events>'])),this.hass,this._events):"")}},{kind:"method",key:"willUpdate",value:function(e){var t=!1;e.has("pipelineId")&&(this._fetchRuns(),t=!0),e.has("_runId")&&(this._fetchEvents(),t=!0),t&&this._unsubRefreshEventsID&&(clearTimeout(this._unsubRefreshEventsID),this._unsubRefreshEventsID=void 0)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.A)(a,"disconnectedCallback",this,3)([]),this._unsubRefreshEventsID&&(clearTimeout(this._unsubRefreshEventsID),this._unsubRefreshEventsID=void 0)}},{kind:"method",key:"_fetchRuns",value:(i=(0,s.A)((0,r.A)().mark((function e(){var t=this;return(0,r.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.pipelineId){e.next=3;break}return this._runs=void 0,e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,C.Uc)(this.hass,this.pipelineId);case 6:this._runs=e.sent.pipeline_runs.reverse(),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),(0,q.showAlertDialog)(this,{title:"Failed to fetch pipeline runs",text:e.t0.message}),e.abrupt("return");case 13:if(this._runs.length){e.next=15;break}return e.abrupt("return");case 15:this._runId&&this._runs.find((function(e){return e.pipeline_run_id===t._runId}))||(this._runId=this._runs[0].pipeline_run_id,this._fetchEvents());case 16:case"end":return e.stop()}}),e,this,[[3,9]])}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"_fetchEvents",value:(n=(0,s.A)((0,r.A)().mark((function e(){var t,n=this;return(0,r.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._runId){e.next=3;break}return this._events=void 0,e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,C.hJ)(this.hass,this.pipelineId,this._runId);case 6:this._events=e.sent.events,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),(0,q.showAlertDialog)(this,{title:"Failed to fetch events",text:e.t0.message}),e.abrupt("return");case 13:null!==(t=this._events)&&void 0!==t&&t.length&&!["run-end","error"].includes(this._events[this._events.length-1].type)&&(this._unsubRefreshEventsID=window.setTimeout((function(){n._fetchEvents()}),2e3));case 14:case"end":return e.stop()}}),e,this,[[3,9]])}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"_pickOlderRun",value:function(){var e=this,t=this._runs.findIndex((function(t){return t.pipeline_run_id===e._runId}));this._runId=this._runs[t+1].pipeline_run_id}},{kind:"method",key:"_pickNewerRun",value:function(){var e=this,t=this._runs.findIndex((function(t){return t.pipeline_run_id===e._runId}));this._runId=this._runs[t-1].pipeline_run_id}},{kind:"method",key:"_pickRun",value:function(e){this._runId=e.target.value}},{kind:"field",static:!0,key:"styles",value:function(){return[I.RF,(0,w.AH)(S||(S=(0,o.A)([".toolbar{display:flex;align-items:center;justify-content:center;height:var(--header-height);background-color:var(--primary-background-color);color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}.content{padding:24px 0 32px;max-width:600px;margin:0 auto;direction:ltr}.container{padding:16px}assist-render-pipeline-run{padding-top:16px}"])))]}}]}}),w.WF),i(),e.next=57;break;case 54:e.prev=54,e.t2=e.catch(0),i(e.t2);case 57:case"end":return e.stop()}}),e,null,[[0,54]])})));return function(t,n){return e.apply(this,arguments)}}())},6011:function(e,t,n){var i=n(22858).A,a=n(33994).A;n.a(e,function(){var e=i(a().mark((function e(t,i){var r,s,o,u,d,l,c,p,h,v,f,_,k,g,b,y,x,w,A,m,R,C,q,I,E,M,P,T,z,B,Z,D,S,F,L,W,H,O,V,j,N,U,J,K,Q,G,X,Y,$,ee,te,ne,ie,ae,re,se,oe,ue,de,le,ce,pe,he,ve,fe,_e,ke,ge,be,ye,xe,we,Ae,me,Re,Ce,qe;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=n(41981),s=n(64782),o=n(33994),u=n(22858),d=n(64599),l=n(35806),c=n(71008),p=n(62193),h=n(2816),v=n(27927),f=n(81027),_=n(82386),k=n(95737),g=n(97741),b=n(89655),y=n(18193),x=n(96678),w=n(57308),A=n(99770),m=n(3443),R=n(42699),C=n(72735),q=n(26098),I=n(39790),E=n(70904),M=n(33026),P=n(809),T=n(1965),z=n(47185),B=n(96141),Z=n(40142),D=n(5255),S=n(854),F=n(95308),L=n(98333),W=n(12723),H=n(89593),O=n(55422),V=n(40866),j=n(24952),N=n(19363),U=n(9208),J=n(46182),K=n(88917),Q=n(16252),G=n(44514),X=n(73432),Y=n(50164),$=n(70800),ee=n(8691),te=n(14920),ne=n(2452),ie=n(86115),ae=n(89811),re=n(97152),se=n(16891),oe=n(50289),ue=n(29818),de=n(56932),le=n(12609),n(77372),n(88725),n(24284),n(90431),ce=n(79228),pe=n(6121),n(77980),he=n(55321),ve=n(47287),fe=n(30489),_e=n(87094),!(ke=t([le,_e])).then){e.next=126;break}return e.next=122,ke;case 122:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=127;break;case 126:e.t0=ke;case 127:ge=e.t0,le=ge[0],_e=ge[1],(0,v.A)([(0,ue.EM)("assist-pipeline-run-debug")],(function(e,t){var n,i,a,v,f=function(t){function n(){var t;(0,c.A)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=(0,p.A)(this,n,[].concat(a)),e(t),t}return(0,h.A)(n,t),(0,l.A)(n)}(t);return{F:f,d:[{kind:"field",decorators:[(0,ue.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,ue.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,ue.wk)()],key:"_pipelineRuns",value:function(){return[]}},{kind:"field",decorators:[(0,ue.P)("#continue-conversation")],key:"_continueConversationCheckbox",value:void 0},{kind:"field",decorators:[(0,ue.P)("#continue-conversation-text")],key:"_continueConversationTextField",value:void 0},{kind:"field",key:"_audioBuffer",value:void 0},{kind:"field",decorators:[(0,ue.wk)()],key:"_finished",value:function(){return!1}},{kind:"field",decorators:[(0,ue.wk)()],key:"_pipelineId",value:function(){return(0,de.p9)("pipeline")||void 0}},{kind:"method",key:"render",value:function(){var e=this;return(0,oe.qy)(be||(be=(0,d.A)([' <hass-subpage .narrow="','" .hass="','" .header="','"> ',' <div class="content"> <div class="start-row"> '," </div> "," </div> </hass-subpage> "])),this.narrow,this.hass,this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.header"),this._pipelineRuns.length>0?(0,oe.qy)(ye||(ye=(0,d.A)([' <ha-button slot="toolbar-icon" @click="','" .disabled="','"> ',' </ha-button> <ha-button slot="toolbar-icon" @click="','"> '," </ha-button> "])),this._clearConversation,!this._finished,this.hass.localize("ui.common.clear"),this._downloadConversation,this.hass.localize("ui.common.download")):"",0===this._pipelineRuns.length?(0,oe.qy)(xe||(xe=(0,d.A)([' <ha-assist-pipeline-picker .hass="','" .value="','" @value-changed="','"></ha-assist-pipeline-picker> <div class="start-buttons"> <ha-button raised @click="','"> ',' </ha-button> <ha-button raised @click="','" .disabled="','"> ',' </ha-button> <ha-button raised @click="','" .disabled="','"> '," </ha-button> </div> "])),this.hass,this._pipelineId,this._pipelinePicked,this._runTextPipeline,this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.run_text_pipeline"),this._runAudioPipeline,!window.isSecureContext||!(window.AudioContext||window.webkitAudioContext),this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.run_audio_pipeline"),this._runAudioWakeWordPipeline,!window.isSecureContext||!(window.AudioContext||window.webkitAudioContext),this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.run_audio_with_wake")):"intent"===this._pipelineRuns[0].init_options.start_stage?(0,oe.qy)(we||(we=(0,d.A)([' <ha-textfield id="continue-conversation-text" .label="','" .disabled="','" @keydown="','"></ha-textfield> <ha-button @click="','" .disabled="','"> '," </ha-button> "])),this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.response"),!this._finished,this._handleContinueKeyDown,this._runTextPipeline,!this._finished,this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.send")):this._finished?"wake_word"===this._pipelineRuns[0].init_options.start_stage?(0,oe.qy)(Ae||(Ae=(0,d.A)([' <ha-button @click="','"> '," </ha-button> "])),this._runAudioWakeWordPipeline,this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.continue_listening")):(0,oe.qy)(me||(me=(0,d.A)(['<ha-button @click="','"> '," </ha-button>"])),this._runAudioPipeline,this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.continue_talking")):(0,oe.qy)(Re||(Re=(0,d.A)([' <ha-formfield .label="','"> <ha-checkbox id="continue-conversation" checked="checked"></ha-checkbox> </ha-formfield> '])),this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.continue_conversation")),this._pipelineRuns.map((function(t){return null===t?"":(0,oe.qy)(Ce||(Ce=(0,d.A)([' <assist-render-pipeline-run .hass="','" .pipelineRun="','"></assist-render-pipeline-run> '])),e.hass,t)})))}},{kind:"get",key:"conversationId",value:function(){var e;return 0===this._pipelineRuns.length?null:(null===(e=this._pipelineRuns[0].intent)||void 0===e||null===(e=e.intent_output)||void 0===e?void 0:e.conversation_id)||null}},{kind:"method",key:"_runTextPipeline",value:(v=(0,u.A)((0,o.A)().mark((function e(){var t,n,i=this;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this._continueConversationTextField)){e.next=5;break}n=t.value,e.next=8;break;case 5:return e.next=7,(0,pe.showPromptDialog)(this,{title:this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.input_text"),confirmText:this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.run")});case 7:n=e.sent;case 8:if(n){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,this._doRunPipeline((function(e){["done","error"].includes(e.stage)&&(i._finished=!0,t&&(t.value=""))}),{start_stage:"intent",end_stage:"intent",input:{text:n}});case 12:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{kind:"method",key:"_runAudioWakeWordPipeline",value:(a=(0,u.A)((0,o.A)().mark((function e(){var t,n,i,a=this;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new ve.N((function(e){a._audioBuffer?a._audioBuffer.push(e):a._sendAudioChunk(e)})),this._audioBuffer=[],e.next=4,t.start();case 4:return i=function(){var e;if(i=void 0,t.close(),"stt"===(null===(e=n)||void 0===e?void 0:e.stage)&&!1===n.stt.done){if(a._audioBuffer){var r,o=(0,s.A)(a._audioBuffer);try{for(o.s();!(r=o.n()).done;){var u=r.value;a._sendAudioChunk(u)}}catch(d){o.e(d)}finally{o.f()}}a._sendAudioChunk(new Int16Array)}a._audioBuffer=void 0},e.next=7,this._doRunPipeline((function(e){if(n=e,"wake_word"===e.stage&&a._audioBuffer){var t,r=(0,s.A)(a._audioBuffer);try{for(r.s();!(t=r.n()).done;){var o=t.value;a._sendAudioChunk(o)}}catch(l){r.e(l)}finally{r.f()}a._audioBuffer=void 0}if(!["ready","wake_word","stt"].includes(e.stage)&&i&&i(),"done"!==e.stage||e.error)("done"===e.stage&&e.error||"error"===e.stage)&&(a._finished=!0);else{var u=e.tts.tts_output.url,d=new Audio(u);d.addEventListener("ended",(function(){a.isConnected&&a._continueConversationCheckbox.checked?a._runAudioWakeWordPipeline():a._finished=!0})),d.play()}}),{start_stage:"wake_word",end_stage:"tts",input:{sample_rate:t.sampleRate}});case 7:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"_runAudioPipeline",value:(i=(0,u.A)((0,o.A)().mark((function e(){var t,n,i,a=this;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new ve.N((function(e){a._audioBuffer?a._audioBuffer.push(e):a._sendAudioChunk(e)})),this._audioBuffer=[],e.next=4,t.start();case 4:return i=function(){var e;if(i=void 0,t.close(),"stt"===(null===(e=n)||void 0===e?void 0:e.stage)&&!1===n.stt.done){if(a._audioBuffer){var r,o=(0,s.A)(a._audioBuffer);try{for(o.s();!(r=o.n()).done;){var u=r.value;a._sendAudioChunk(u)}}catch(d){o.e(d)}finally{o.f()}}a._sendAudioChunk(new Int16Array)}a._audioBuffer=void 0},e.next=7,this._doRunPipeline((function(e){if(n=e,"stt"===e.stage&&a._audioBuffer){var t,r=(0,s.A)(a._audioBuffer);try{for(r.s();!(t=r.n()).done;){var o=t.value;a._sendAudioChunk(o)}}catch(l){r.e(l)}finally{r.f()}a._audioBuffer=void 0}if(!["ready","stt"].includes(e.stage)&&i&&i(),"done"===e.stage){var u=e.tts.tts_output.url,d=new Audio(u);d.addEventListener("ended",(function(){a.isConnected&&a._continueConversationCheckbox.checked?a._runAudioPipeline():a._finished=!0})),d.play()}else"error"===e.stage&&(a._finished=!0)}),{start_stage:"stt",end_stage:"tts",input:{sample_rate:t.sampleRate}});case 7:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"_doRunPipeline",value:(n=(0,u.A)((0,o.A)().mark((function e(t,n){var i,a=this;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._finished=!1,i=!1,e.prev=2,e.next=5,(0,ce.AH)(this.hass,(function(e){i?a._pipelineRuns=[e].concat((0,r.A)(a._pipelineRuns.slice(1))):(a._pipelineRuns=[e].concat((0,r.A)(a._pipelineRuns)),i=!0),t(e)}),Object.assign(Object.assign({},n),{},{pipeline:this._pipelineId,conversation_id:this.conversationId}));case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(2),e.next=11,(0,pe.showAlertDialog)(this,{title:this.hass.localize("ui.panel.config.voice_assistants.debug.pipeline.error_starting"),text:e.t0.message||e.t0});case 11:case"end":return e.stop()}}),e,this,[[2,7]])}))),function(e,t){return n.apply(this,arguments)})},{kind:"method",key:"_sendAudioChunk",value:function(e){this.hass.connection.socket.binaryType="arraybuffer";var t=new Uint8Array(1+2*e.length);t[0]=this._pipelineRuns[0].run.runner_data.stt_binary_handler_id,t.set(new Uint8Array(e.buffer),1),this.hass.connection.socket.send(t)}},{kind:"method",key:"_handleContinueKeyDown",value:function(e){"Enter"===e.key&&this._runTextPipeline()}},{kind:"method",key:"_clearConversation",value:function(){this._pipelineRuns=[]}},{kind:"method",key:"_downloadConversation",value:function(){(0,fe.R)("data:text/plain;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(this._pipelineRuns,null,2))),"conversation.json")}},{kind:"method",key:"_pipelinePicked",value:function(e){this._pipelineId=e.detail.value}},{kind:"field",static:!0,key:"styles",value:function(){return[he.RF,(0,oe.AH)(qe||(qe=(0,d.A)([".content{padding:24px 0 32px;max-width:600px;margin:0 auto;direction:ltr}.start-buttons{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center}.start-row{display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap;margin:0 16px 16px;direction:var(--direction)}ha-assist-pipeline-picker{display:block;width:100%;margin-bottom:16px}.start-row ha-textfield{flex:1}assist-render-pipeline-run{padding-top:16px}assist-render-pipeline-run+assist-render-pipeline-run{border-top:1px solid var(--divider-color)}"])))]}}]}}),oe.WF),i(),e.next=137;break;case 134:e.prev=134,e.t2=e.catch(0),i(e.t2);case 137:case"end":return e.stop()}}),e,null,[[0,134]])})));return function(t,n){return e.apply(this,arguments)}}())},88362:function(e,t,n){var i=n(22858).A,a=n(33994).A;n.a(e,function(){var e=i(a().mark((function e(t,i){var r,s,o,u,d,l,c,p,h,v,f,_,k,g,b,y,x,w,A,m,R;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=n(64599),s=n(35806),o=n(71008),u=n(62193),d=n(2816),l=n(27927),c=n(81027),p=n(72735),h=n(39790),v=n(253),f=n(54846),_=n(66555),k=n(50289),g=n(29818),b=n(94100),y=n(79228),x=n(87094),!(w=t([x])).then){e.next=32;break}return e.next=28,w;case 28:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=33;break;case 32:e.t0=w;case 33:x=e.t0[0],(0,l.A)([(0,g.EM)("assist-render-pipeline-events")],(function(e,t){var n=function(t){function n(){var t;(0,o.A)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=(0,u.A)(this,n,[].concat(a)),e(t),t}return(0,d.A)(n,t),(0,s.A)(n)}(t);return{F:n,d:[{kind:"field",decorators:[(0,g.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.MZ)({attribute:!1})],key:"events",value:void 0},{kind:"field",key:"_processEvents",value:function(){return(0,b.A)((function(e){var t;return e.forEach((function(e){t=(0,y.QC)(t,e)})),t}))}},{kind:"method",key:"render",value:function(){var e=this._processEvents(this.events);return e?(0,k.qy)(R||(R=(0,r.A)([' <assist-render-pipeline-run .hass="','" .pipelineRun="','"></assist-render-pipeline-run> '])),this.hass,e):this.events.length?(0,k.qy)(A||(A=(0,r.A)(['<ha-alert alert-type="error">Error showing run</ha-alert> <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <pre>',"</pre> </ha-expansion-panel> </ha-card>"])),JSON.stringify(this.events,null,2)):(0,k.qy)(m||(m=(0,r.A)(['<ha-alert alert-type="warning">There were no events in this run.</ha-alert>'])))}}]}}),k.WF),i(),e.next=41;break;case 38:e.prev=38,e.t2=e.catch(0),i(e.t2);case 41:case"end":return e.stop()}}),e,null,[[0,38]])})));return function(t,n){return e.apply(this,arguments)}}())},87094:function(e,t,n){var i=n(22858).A,a=n(33994).A;n.a(e,function(){var e=i(a().mark((function e(t,i){var r,s,o,u,d,l,c,p,h,v,f,_,k,g,b,y,x,w,A,m,R,C,q,I,E,M,P,T,z,B,Z,D,S,F,L,W,H,O,V,j,N,U,J,K,Q,G,X,Y,$,ee,te,ne,ie,ae,re;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=n(35806),s=n(71008),o=n(62193),u=n(2816),d=n(27927),l=n(658),c=n(64599),p=n(81027),h=n(44124),v=n(97741),f=n(89655),_=n(99471),k=n(39790),g=n(253),b=n(94438),y=n(16891),x=n(50289),w=n(29818),n(13082),n(13292),n(77372),n(32885),n(15720),A=n(57636),n(57641),m=n(6121),!(R=t([A])).then){e.next=44;break}return e.next=40,R;case 40:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=45;break;case 44:e.t0=R;case 45:A=e.t0[0],Q={pipeline:"Pipeline",language:"Language"},G={engine:"Engine"},X={engine:"Engine"},Y={engine:"Engine",language:"Language",intent_input:"Input"},$={engine:"Engine",language:"Language",voice:"Voice",tts_input:"Input"},ee={ready:0,wake_word:1,stt:2,intent:3,tts:4,done:5,error:6},te=function(e,t){return e.init_options?ee[e.init_options.start_stage]<=ee[t]&&ee[t]<=ee[e.init_options.end_stage]:t in e},ne=function(e,t,n){return"error"in e&&n===t?(0,x.qy)(C||(C=(0,c.A)([' <ha-alert alert-type="error"> '," (",") </ha-alert> "])),e.error.message,e.error.code):""},ie=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-start",a=t.events.find((function(e){return e.type==="".concat(n)+i})),r=t.events.find((function(e){return e.type==="".concat(n,"-end")}));if(!a)return"";if(!r)return"error"in t?(0,x.qy)(q||(q=(0,c.A)(["❌"]))):(0,x.qy)(I||(I=(0,c.A)([' <ha-circular-progress size="small" indeterminate></ha-circular-progress> '])));var s=new Date(r.timestamp).getTime()-new Date(a.timestamp).getTime(),o=(0,A.ZV)(s/1e3,e.locale,{maximumFractionDigits:2});return(0,x.qy)(E||(E=(0,c.A)(["","s ✅"])),o)},ae=function(e,t){return Object.entries(t).map((function(t){var n=(0,l.A)(t,2),i=n[0],a=n[1];return(0,x.qy)(M||(M=(0,c.A)([' <div class="row"> <div>',"</div> <div>","</div> </div> "])),a,e[i])}))},re=function(e,t){var n={},i=!1;for(var a in e)a in t||"done"===a||(i=!0,n[a]=e[a]);return i?(0,x.qy)(P||(P=(0,c.A)(['<ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor readOnly="readOnly" autoUpdate .value="','"></ha-yaml-editor> </ha-expansion-panel>'])),n):""},(0,d.A)([(0,w.EM)("assist-render-pipeline-run")],(function(e,t){var n=function(t){function n(){var t;(0,s.A)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=(0,o.A)(this,n,[].concat(a)),e(t),t}return(0,u.A)(n,t),(0,r.A)(n)}(t);return{F:n,d:[{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"pipelineRun",value:void 0},{kind:"method",key:"render",value:function(){var e,t,n,i,a=this,r=this.pipelineRun&&["tts","intent","stt","wake_word"].find((function(e){return e in a.pipelineRun}))||"ready",s=[],o=(this.pipelineRun.init_options&&"text"in this.pipelineRun.init_options.input?this.pipelineRun.init_options.input.text:void 0)||(null===(e=this.pipelineRun)||void 0===e||null===(e=e.stt)||void 0===e||null===(e=e.stt_output)||void 0===e?void 0:e.text)||(null===(t=this.pipelineRun)||void 0===t||null===(t=t.intent)||void 0===t?void 0:t.intent_input);return o&&s.push({from:"user",text:o}),null!==(n=this.pipelineRun)&&void 0!==n&&null!==(n=n.intent)&&void 0!==n&&null!==(n=n.intent_output)&&void 0!==n&&null!==(n=n.response)&&void 0!==n&&null!==(n=n.speech)&&void 0!==n&&null!==(n=n.plain)&&void 0!==n&&n.speech&&s.push({from:"hass",text:this.pipelineRun.intent.intent_output.response.speech.plain.speech}),(0,x.qy)(T||(T=(0,c.A)([' <ha-card> <div class="card-content"> <div class="row heading"> <div>Run</div> <div>',"</div> </div> "," "," </div> </ha-card> "," "," "," "," "," "," "," "," ",' <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor readOnly="readOnly" autoUpdate .value="','"></ha-yaml-editor> </ha-expansion-panel> </ha-card> '])),this.pipelineRun.stage,ae(this.pipelineRun.run,Q),s.length>0?(0,x.qy)(z||(z=(0,c.A)([' <div class="messages"> ',' </div> <div style="clear:both"></div> '])),s.map((function(e){var t=e.from,n=e.text;return(0,x.qy)(B||(B=(0,c.A)([' <div class="','">',"</div> "])),"message ".concat(t),n)}))):"",ne(this.pipelineRun,"ready",r),te(this.pipelineRun,"wake_word")?(0,x.qy)(Z||(Z=(0,c.A)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Wake word</span> '," </div> "," </div> </ha-card> "])),ie(this.hass,this.pipelineRun,"wake_word"),this.pipelineRun.wake_word?(0,x.qy)(D||(D=(0,c.A)([' <div class="card-content"> '," "," "," </div> "])),ae(this.pipelineRun.wake_word,X),this.pipelineRun.wake_word.wake_word_output?(0,x.qy)(S||(S=(0,c.A)(['<div class="row"> <div>Model</div> <div> ',' </div> </div> <div class="row"> <div>Timestamp</div> <div> '," </div> </div>"])),this.pipelineRun.wake_word.wake_word_output.ww_id,this.pipelineRun.wake_word.wake_word_output.timestamp):"",re(this.pipelineRun.wake_word,G)):""):"",ne(this.pipelineRun,"wake_word",r),te(this.pipelineRun,"stt")?(0,x.qy)(F||(F=(0,c.A)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Speech-to-text</span> '," </div> "," </div> </ha-card> "])),ie(this.hass,this.pipelineRun,"stt","-vad-end"),this.pipelineRun.stt?(0,x.qy)(L||(L=(0,c.A)([' <div class="card-content"> ',' <div class="row"> <div>Language</div> <div>',"</div> </div> "," "," </div> "])),ae(this.pipelineRun.stt,X),this.pipelineRun.stt.metadata.language,this.pipelineRun.stt.stt_output?(0,x.qy)(W||(W=(0,c.A)(['<div class="row"> <div>Output</div> <div>',"</div> </div>"])),this.pipelineRun.stt.stt_output.text):"",re(this.pipelineRun.stt,X)):""):"",ne(this.pipelineRun,"stt",r),te(this.pipelineRun,"intent")?(0,x.qy)(H||(H=(0,c.A)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Natural Language Processing</span> '," </div> "," </div> </ha-card> "])),ie(this.hass,this.pipelineRun,"intent"),this.pipelineRun.intent?(0,x.qy)(O||(O=(0,c.A)([' <div class="card-content"> '," "," "," </div> "])),ae(this.pipelineRun.intent,Y),this.pipelineRun.intent.intent_output?(0,x.qy)(V||(V=(0,c.A)(['<div class="row"> <div>Response type</div> <div> '," </div> </div> ",""])),this.pipelineRun.intent.intent_output.response.response_type,"error"===this.pipelineRun.intent.intent_output.response.response_type?(0,x.qy)(j||(j=(0,c.A)(['<div class="row"> <div>Error code</div> <div> '," </div> </div>"])),this.pipelineRun.intent.intent_output.response.data.code):""):"",re(this.pipelineRun.intent,Y)):""):"",ne(this.pipelineRun,"intent",r),te(this.pipelineRun,"tts")?(0,x.qy)(N||(N=(0,c.A)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Text-to-speech</span> '," </div> "," </div> "," </ha-card> "])),ie(this.hass,this.pipelineRun,"tts"),this.pipelineRun.tts?(0,x.qy)(U||(U=(0,c.A)([' <div class="card-content"> '," "," </div> "])),ae(this.pipelineRun.tts,$),re(this.pipelineRun.tts,$)):"",null!==(i=this.pipelineRun)&&void 0!==i&&null!==(i=i.tts)&&void 0!==i&&i.tts_output?(0,x.qy)(J||(J=(0,c.A)([' <div class="card-actions"> <ha-button @click="','"> Play Audio </ha-button> </div> '])),this._playTTS):""):"",ne(this.pipelineRun,"tts",r),this.pipelineRun)}},{kind:"method",key:"_playTTS",value:function(){var e=this,t=this.pipelineRun.tts.tts_output.url,n=new Audio(t);n.addEventListener("error",(function(){(0,m.showAlertDialog)(e,{title:"Error",text:"Error playing audio"})})),n.addEventListener("canplaythrough",(function(){n.play()}))}},{kind:"field",static:!0,key:"styles",value:function(){return(0,x.AH)(K||(K=(0,c.A)([":host{display:block}ha-alert,ha-card{display:block;margin-bottom:16px}.row{display:flex;justify-content:space-between}.row>div:last-child{text-align:right}ha-expansion-panel{padding-left:8px;padding-inline-start:8px;padding-inline-end:initial}.card-content ha-expansion-panel{padding-left:0px;padding-inline-start:0px;padding-inline-end:initial;--expansion-panel-summary-padding:0px;--expansion-panel-content-padding:0px}.heading{font-weight:500;margin-bottom:16px}.messages{margin-top:8px}.message{font-size:18px;margin:8px 0;padding:8px;border-radius:15px;clear:both}.message.user{margin-left:24px;margin-inline-start:24px;margin-inline-end:initial;float:var(--float-end);text-align:right;border-bottom-right-radius:0px;background-color:var(--light-primary-color);color:var(--text-light-primary-color,var(--primary-text-color));direction:var(--direction)}.message.hass{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial;float:var(--float-start);border-bottom-left-radius:0px;background-color:var(--primary-color);color:var(--text-primary-color);direction:var(--direction)}"])))}}]}}),x.WF),i(),e.next=64;break;case 61:e.prev=61,e.t2=e.catch(0),i(e.t2);case 64:case"end":return e.stop()}}),e,null,[[0,61]])})));return function(t,n){return e.apply(this,arguments)}}())},47287:function(e,t,n){n.d(t,{N:function(){return o}});var i=n(33994),a=n(22858),r=n(71008),s=n(35806),o=(n(95737),n(39790),n(99019),n(96858),n(84341),n(49365),n(38389),n(74860),n(71011),n(71174),function(){return(0,s.A)((function e(t){(0,r.A)(this,e),this._active=!1,this._callback=void 0,this._context=void 0,this._stream=void 0,this._source=void 0,this._recorder=void 0,this._callback=t}),[{key:"active",get:function(){return this._active}},{key:"sampleRate",get:function(){var e;return null===(e=this._context)||void 0===e?void 0:e.sampleRate}},{key:"start",value:(o=(0,a.A)((0,i.A)().mark((function e(){return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._context&&this._stream&&this._source&&this._recorder){e.next=12;break}return e.prev=1,e.next=4,this._createContext();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),this._active=!1;case 10:e.next=16;break;case 12:return this._stream.getTracks()[0].enabled=!0,e.next=15,this._context.resume();case 15:this._active=!0;case 16:case"end":return e.stop()}}),e,this,[[1,6]])}))),function(){return o.apply(this,arguments)})},{key:"stop",value:(t=(0,a.A)((0,i.A)().mark((function e(){var t;return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._active=!1,this._stream&&(this._stream.getTracks()[0].enabled=!1),e.next=4,null===(t=this._context)||void 0===t?void 0:t.suspend();case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"close",value:function(){var e,t,n;this._active=!1,null===(e=this._stream)||void 0===e||e.getTracks()[0].stop(),this._recorder&&(this._recorder.port.onmessage=null),null===(t=this._source)||void 0===t||t.disconnect(),null===(n=this._context)||void 0===n||n.close(),this._stream=void 0,this._source=void 0,this._recorder=void 0,this._context=void 0}},{key:"_createContext",value:(e=(0,a.A)((0,i.A)().mark((function e(){var t,a=this;return(0,i.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(AudioContext||webkitAudioContext),e.next=3,navigator.mediaDevices.getUserMedia({audio:!0});case 3:return this._stream=e.sent,e.next=6,t.audioWorklet.addModule(new URL(n.p+n.u(99064),n.b));case 6:this._context=t,this._source=this._context.createMediaStreamSource(this._stream),this._recorder=new AudioWorkletNode(this._context,"recorder-worklet"),this._recorder.port.onmessage=function(e){a._active&&a._callback(e.data)},this._active=!0,this._source.connect(this._recorder);case 12:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)})}],[{key:"isSupported",get:function(){return window.isSecureContext&&(window.AudioContext||window.webkitAudioContext)}}]);var e,t,o}())},30489:function(e,t,n){n.d(t,{R:function(){return i}});var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("a");n.target="_blank",n.href=e,n.download=t,document.body.appendChild(n),n.dispatchEvent(new MouseEvent("click")),document.body.removeChild(n)}},70904:function(e,t,n){n(76402)("Int16",(function(e){return function(t,n,i){return e(this,t,n,i)}}))}}]);
//# sourceMappingURL=53564.5MfDamnR5UA.js.map