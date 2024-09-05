export const id=93558;export const ids=[93558];export const modules={71177:(e,i,t)=>{t.r(i),t.d(i,{HaVoiceCommandDialog:()=>v});var s=t(36312),o=t(68689),a=(t(89655),t(99770),t(3443),t(42699),t(2452),t(86115),t(97152),t(16891),t(72606),t(50289)),n=t(29818),r=t(96979),d=t(34897),l=t(79051),h=(t(77372),t(26790),t(29180),t(10900),t(4169),t(13830),t(90431),t(79228)),c=t(55321),u=t(47287),p=t(84976),_=t(6121),m=t(42496),g=t(12103);let v=(0,s.A)([(0,n.EM)("ha-voice-command-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_conversation",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,r.I)({key:"AssistPipelineId",state:!0,subscribe:!1})],key:"_pipelineId",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_pipeline",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_showSendButton",value:()=>!1},{kind:"field",decorators:[(0,n.wk)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_preferredPipeline",value:void 0},{kind:"field",decorators:[(0,n.P)("#scroll-container")],key:"_scrollContainer",value:void 0},{kind:"field",decorators:[(0,n.P)("#message-input")],key:"_messageInput",value:void 0},{kind:"field",key:"_conversationId",value:()=>null},{kind:"field",key:"_audioRecorder",value:void 0},{kind:"field",key:"_audioBuffer",value:void 0},{kind:"field",key:"_audio",value:void 0},{kind:"field",key:"_stt_binary_handler_id",value:void 0},{kind:"field",key:"_pipelinePromise",value:void 0},{kind:"method",key:"showDialog",value:async function(e){"last_used"===e.pipeline_id||("preferred"===e.pipeline_id?(await this._loadPipelines(),this._pipelineId=this._preferredPipeline):this._pipelineId=e.pipeline_id),this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}],this._opened=!0,await this.updateComplete,this._scrollMessagesBottom(),await this._pipelinePromise,e?.start_listening&&this._pipeline?.stt_engine&&u.N.isSupported&&this._toggleListening()}},{kind:"method",key:"closeDialog",value:async function(){this._opened=!1,this._pipeline=void 0,this._pipelines=void 0,this._conversation=void 0,this._conversationId=null,this._audioRecorder?.close(),this._audioRecorder=void 0,this._audio?.pause(),(0,d.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._opened)return a.s6;const e=!!this._pipeline&&(!this.hass.states[this._pipeline?.conversation_engine]||(0,m.$)(this.hass.states[this._pipeline?.conversation_engine],g.ZE.CONTROL)),i=u.N.isSupported,t=this._pipeline?.stt_engine;return a.qy` <ha-dialog open @closed="${this.closeDialog}" .heading="${this.hass.localize("ui.dialogs.voice_command.title")}" flexContent> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${this.hass.localize("ui.common.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button> <div slot="title"> ${this.hass.localize("ui.dialogs.voice_command.title")} <ha-button-menu @opened="${this._loadPipelines}" @closed="${l.d}" activatable fixed> <ha-button slot="trigger"> ${this._pipeline?.name} <ha-svg-icon slot="trailingIcon" .path="${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}"></ha-svg-icon> </ha-button> ${this._pipelines?.map((e=>a.qy`<ha-list-item ?selected="${e.id===this._pipelineId||!this._pipelineId&&e.id===this._preferredPipeline}" .pipeline="${e.id}" @click="${this._selectPipeline}" .hasMeta="${e.id===this._preferredPipeline}"> ${e.name}${e.id===this._preferredPipeline?a.qy` <ha-svg-icon slot="meta" .path="${"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"}"></ha-svg-icon> `:a.s6} </ha-list-item>`))} ${this.hass.user?.is_admin?a.qy`<li divider role="separator"></li> <a href="/config/voice-assistants/assistants"><ha-list-item @click="${this.closeDialog}">${this.hass.localize("ui.dialogs.voice_command.manage_assistants")}</ha-list-item></a>`:a.s6} </ha-button-menu> </div> <a href="${(0,p.o)(this.hass,"/docs/assist/")}" slot="actionItems" target="_blank" rel="noopener noreferer"> <ha-icon-button .label="${this.hass.localize("ui.common.help")}" .path="${"M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"}"></ha-icon-button> </a> </ha-dialog-header> ${e?a.s6:a.qy` <ha-alert> ${this.hass.localize("ui.dialogs.voice_command.conversation_no_control")} </ha-alert> `} <div class="messages"> <div class="messages-container" id="scroll-container"> ${this._conversation.map((e=>a.qy` <div class="${this._computeMessageClasses(e)}">${e.text}</div> `))} </div> </div> <div class="input" slot="primaryAction"> <ha-textfield id="message-input" @keyup="${this._handleKeyUp}" @input="${this._handleInput}" .label="${this.hass.localize("ui.dialogs.voice_command.input_label")}" dialogInitialFocus iconTrailing> <span slot="trailingIcon"> ${this._showSendButton||!t?a.qy` <ha-icon-button class="listening-icon" .path="${"M2,21L23,12L2,3V10L17,12L2,14V21Z"}" @click="${this._handleSendMessage}" .label="${this.hass.localize("ui.dialogs.voice_command.send_text")}"> </ha-icon-button> `:a.qy` ${this._audioRecorder?.active?a.qy` <div class="bouncer"> <div class="double-bounce1"></div> <div class="double-bounce2"></div> </div> `:a.s6} <div class="listening-icon"> <ha-icon-button .path="${"M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"}" @click="${this._handleListeningButton}" .label="${this.hass.localize("ui.dialogs.voice_command.start_listening")}"> </ha-icon-button> ${i?null:a.qy` <ha-svg-icon .path="${"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}" class="unsupported"></ha-svg-icon> `} </div> `} </span> </ha-textfield> </div> </ha-dialog> `}},{kind:"method",key:"willUpdate",value:function(e){(e.has("_pipelineId")||e.has("_opened")&&!0===this._opened)&&this._getPipeline()}},{kind:"method",key:"_getPipeline",value:async function(){try{this._pipelinePromise=(0,h.mp)(this.hass,this._pipelineId),this._pipeline=await this._pipelinePromise}catch(e){"not_found"===e.code&&(this._pipelineId=void 0)}}},{kind:"method",key:"_loadPipelines",value:async function(){if(this._pipelines)return;const{pipelines:e,preferred_pipeline:i}=await(0,h.nx)(this.hass);this._pipelines=e,this._preferredPipeline=i||void 0}},{kind:"method",key:"_selectPipeline",value:async function(e){this._pipelineId=e.currentTarget.pipeline,this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}],await this.updateComplete,this._scrollMessagesBottom()}},{kind:"method",key:"updated",value:function(e){(0,o.A)(t,"updated",this,3)([e]),(e.has("_conversation")||e.has("results"))&&this._scrollMessagesBottom()}},{kind:"method",key:"_addMessage",value:function(e){this._conversation=[...this._conversation,e]}},{kind:"method",key:"_handleKeyUp",value:function(e){const i=e.target;"Enter"===e.key&&i.value&&(this._processText(i.value),i.value="",this._showSendButton=!1)}},{kind:"method",key:"_handleInput",value:function(e){const i=e.target.value;i&&!this._showSendButton?this._showSendButton=!0:!i&&this._showSendButton&&(this._showSendButton=!1)}},{kind:"method",key:"_handleSendMessage",value:function(){this._messageInput.value&&(this._processText(this._messageInput.value.trim()),this._messageInput.value="",this._showSendButton=!1)}},{kind:"method",key:"_processText",value:async function(e){this._audio?.pause(),this._addMessage({who:"user",text:e});const i={who:"hass",text:"…"};this._addMessage(i);try{const t=await(0,h.vU)(this.hass,(e=>{if("intent-end"===e.type){this._conversationId=e.data.intent_output.conversation_id;const s=e.data.intent_output.response.speech?.plain;s&&(i.text=s.speech),this.requestUpdate("_conversation"),t()}"error"===e.type&&(i.text=e.data.message,i.error=!0,this.requestUpdate("_conversation"),t())}),{start_stage:"intent",input:{text:e},end_stage:"intent",pipeline:this._pipeline?.id,conversation_id:this._conversationId})}catch{i.text=this.hass.localize("ui.dialogs.voice_command.error"),i.error=!0,this.requestUpdate("_conversation")}}},{kind:"method",key:"_handleListeningButton",value:function(e){e.stopPropagation(),e.preventDefault(),this._toggleListening()}},{kind:"method",key:"_toggleListening",value:function(){u.N.isSupported?this._audioRecorder?.active?this._stopListening():this._startListening():this._showNotSupportedMessage()}},{kind:"method",key:"_showNotSupportedMessage",value:async function(){this._addMessage({who:"hass",text:a.qy`${this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_browser")} ${this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_documentation",{documentation_link:a.qy`<a target="_blank" rel="noopener noreferrer" href="${(0,p.o)(this.hass,"/docs/configuration/securing/#remote-access")}">${this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_documentation_link")}</a>`})}`})}},{kind:"method",key:"_startListening",value:async function(){this._audio?.pause(),this._audioRecorder||(this._audioRecorder=new u.N((e=>{this._audioBuffer?this._audioBuffer.push(e):this._sendAudioChunk(e)}))),this._stt_binary_handler_id=void 0,this._audioBuffer=[];const e={who:"user",text:"…"};await this._audioRecorder.start(),this._addMessage(e),this.requestUpdate("_audioRecorder");const i={who:"hass",text:"…"};try{const t=await(0,h.vU)(this.hass,(s=>{if("run-start"===s.type&&(this._stt_binary_handler_id=s.data.runner_data.stt_binary_handler_id),"stt-start"===s.type&&this._audioBuffer){for(const e of this._audioBuffer)this._sendAudioChunk(e);this._audioBuffer=void 0}if("stt-end"===s.type&&(this._stt_binary_handler_id=void 0,this._stopListening(),e.text=s.data.stt_output.text,this.requestUpdate("_conversation"),this._addMessage(i)),"intent-end"===s.type){this._conversationId=s.data.intent_output.conversation_id;const e=s.data.intent_output.response.speech?.plain;e&&(i.text=e.speech),this.requestUpdate("_conversation")}if("tts-end"===s.type){const e=s.data.tts_output.url;this._audio=new Audio(e),this._audio.play(),this._audio.addEventListener("ended",this._unloadAudio),this._audio.addEventListener("pause",this._unloadAudio),this._audio.addEventListener("canplaythrough",this._playAudio),this._audio.addEventListener("error",this._audioError)}"run-end"===s.type&&(this._stt_binary_handler_id=void 0,t()),"error"===s.type&&(this._stt_binary_handler_id=void 0,"…"===e.text?(e.text=s.data.message,e.error=!0):(i.text=s.data.message,i.error=!0),this._stopListening(),this.requestUpdate("_conversation"),t())}),{start_stage:"stt",end_stage:this._pipeline?.tts_engine?"tts":"intent",input:{sample_rate:this._audioRecorder.sampleRate},pipeline:this._pipeline?.id,conversation_id:this._conversationId})}catch(e){await(0,_.showAlertDialog)(this,{title:"Error starting pipeline",text:e.message||e}),this._stopListening()}}},{kind:"method",key:"_stopListening",value:function(){if(this._audioRecorder?.stop(),this.requestUpdate("_audioRecorder"),this._stt_binary_handler_id){if(this._audioBuffer)for(const e of this._audioBuffer)this._sendAudioChunk(e);this._sendAudioChunk(new Int16Array),this._stt_binary_handler_id=void 0}this._audioBuffer=void 0}},{kind:"method",key:"_sendAudioChunk",value:function(e){if(this.hass.connection.socket.binaryType="arraybuffer",null==this._stt_binary_handler_id)return;const i=new Uint8Array(1+2*e.length);i[0]=this._stt_binary_handler_id,i.set(new Uint8Array(e.buffer),1),this.hass.connection.socket.send(i)}},{kind:"field",key:"_playAudio",value(){return()=>{this._audio?.play()}}},{kind:"field",key:"_audioError",value(){return()=>{(0,_.showAlertDialog)(this,{title:"Error playing audio."}),this._audio?.removeAttribute("src")}}},{kind:"field",key:"_unloadAudio",value(){return()=>{this._audio?.removeAttribute("src"),this._audio=void 0}}},{kind:"method",key:"_scrollMessagesBottom",value:function(){const e=this._scrollContainer;e&&e.scrollTo(0,99999)}},{kind:"method",key:"_computeMessageClasses",value:function(e){return`message ${e.who} ${e.error?" error":""}`}},{kind:"get",static:!0,key:"styles",value:function(){return[c.nA,a.AH`.listening-icon{position:relative;color:var(--secondary-text-color);margin-right:-24px;margin-inline-end:-24px;margin-inline-start:initial;direction:var(--direction)}.listening-icon[active]{color:var(--primary-color)}.unsupported{color:var(--error-color);position:absolute;--mdc-icon-size:16px;right:5px;inset-inline-end:5px;inset-inline-start:initial;top:0px}ha-dialog{--primary-action-button-flex:1;--secondary-action-button-flex:0;--mdc-dialog-max-width:500px;--mdc-dialog-max-height:500px;--dialog-content-padding:0}ha-dialog-header a{color:var(--primary-text-color)}div[slot=title]{display:flex;flex-direction:column;margin:-4px 0}ha-button-menu{--mdc-theme-on-primary:var(--text-primary-color);--mdc-theme-primary:var(--primary-color);margin-top:-8px;margin-bottom:0;margin-right:0;margin-inline-end:0;margin-left:-8px;margin-inline-start:-8px}ha-button-menu ha-button{--mdc-theme-primary:var(--secondary-text-color);--mdc-typography-button-text-transform:none;--mdc-typography-button-font-size:unset;--mdc-typography-button-font-weight:400;--mdc-typography-button-letter-spacing:var(
            --mdc-typography-headline6-letter-spacing,
            0.0125em
          );--mdc-typography-button-line-height:var(
            --mdc-typography-headline6-line-height,
            2rem
          );--button-height:auto}ha-button-menu ha-button ha-svg-icon{height:28px;margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;direction:var(--direction)}ha-list-item{--mdc-list-item-meta-size:16px}ha-list-item ha-svg-icon{margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;direction:var(--direction);display:block}ha-button-menu a{text-decoration:none}ha-textfield{display:block;overflow:hidden}a.button{text-decoration:none}a.button>mwc-button{width:100%}.side-by-side{display:flex;margin:8px 0}.side-by-side>*{flex:1 0;padding:4px}.messages{display:block;height:400px;box-sizing:border-box;position:relative}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-max-width:100%}.messages{height:100%;flex:1}}.messages-container{position:absolute;bottom:0px;right:0px;left:0px;padding:24px;box-sizing:border-box;overflow-y:auto;max-height:100%}.message{white-space:pre-line;font-size:18px;clear:both;margin:8px 0;padding:8px;border-radius:15px}.message p{margin:0}.message p:not(:last-child){margin-bottom:8px}.message.user{margin-left:24px;margin-inline-start:24px;margin-inline-end:initial;float:var(--float-end);text-align:right;border-bottom-right-radius:0px;background-color:var(--primary-color);color:var(--text-primary-color);direction:var(--direction)}.message.hass{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial;float:var(--float-start);border-bottom-left-radius:0px;background-color:var(--secondary-background-color);color:var(--primary-text-color);direction:var(--direction)}.message.user a{color:var(--text-primary-color)}.message.hass a{color:var(--primary-text-color)}.message img{width:100%;border-radius:10px}.message.error{background-color:var(--error-color);color:var(--text-primary-color)}.input{margin-left:0;margin-right:0}.bouncer{width:48px;height:48px;position:absolute}.double-bounce1,.double-bounce2{width:48px;height:48px;border-radius:50%;background-color:var(--primary-color);opacity:.2;position:absolute;top:0;left:0;-webkit-animation:sk-bounce 2s infinite ease-in-out;animation:sk-bounce 2s infinite ease-in-out}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}@media all and (max-width:450px),all and (max-height:500px){.message{font-size:16px}}`]}}]}}),a.WF)},47287:(e,i,t)=>{t.d(i,{N:()=>s});t(74860),t(71011),t(71174);class s{constructor(e){this._active=!1,this._callback=void 0,this._context=void 0,this._stream=void 0,this._source=void 0,this._recorder=void 0,this._callback=e}get active(){return this._active}get sampleRate(){return this._context?.sampleRate}static get isSupported(){return window.isSecureContext&&(window.AudioContext||window.webkitAudioContext)}async start(){if(this._context&&this._stream&&this._source&&this._recorder)this._stream.getTracks()[0].enabled=!0,await this._context.resume(),this._active=!0;else try{await this._createContext()}catch(e){console.error(e),this._active=!1}}async stop(){this._active=!1,this._stream&&(this._stream.getTracks()[0].enabled=!1),await(this._context?.suspend())}close(){this._active=!1,this._stream?.getTracks()[0].stop(),this._recorder&&(this._recorder.port.onmessage=null),this._source?.disconnect(),this._context?.close(),this._stream=void 0,this._source=void 0,this._recorder=void 0,this._context=void 0}async _createContext(){const e=new(AudioContext||webkitAudioContext);this._stream=await navigator.mediaDevices.getUserMedia({audio:!0}),await e.audioWorklet.addModule(new URL(t.p+t.u(99064),t.b),{type:"module"}),this._context=e,this._source=this._context.createMediaStreamSource(this._stream),this._recorder=new AudioWorkletNode(this._context,"recorder-worklet"),this._recorder.port.onmessage=e=>{this._active&&this._callback(e.data)},this._active=!0,this._source.connect(this._recorder)}}}};
//# sourceMappingURL=93558.xvfjrD5tjwQ.js.map