"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[62787],{54098:function(e,t,i){i.d(t,{$6:function(){return v},EC:function(){return _},ET:function(){return y},H1:function(){return m},HN:function(){return b},QI:function(){return w},Un:function(){return g},Xm:function(){return A},ce:function(){return H},ie:function(){return k},mm:function(){return f},vj:function(){return p}});i(39805),i(89655),i(18193),i(26098),i(36016),i(79977),i(64498),i(43037),i(92765);var a=i(42496),r=i(46875),n=i(9883),s=i(12803),o="M11,14C12,14 13.05,14.16 14.2,14.44C13.39,15.31 13,16.33 13,17.5C13,18.39 13.25,19.23 13.78,20H3V18C3,16.81 3.91,15.85 5.74,15.12C7.57,14.38 9.33,14 11,14M11,12C9.92,12 9,11.61 8.18,10.83C7.38,10.05 7,9.11 7,8C7,6.92 7.38,6 8.18,5.18C9,4.38 9.92,4 11,4C12.11,4 13.05,4.38 13.83,5.18C14.61,6 15,6.92 15,8C15,9.11 14.61,10.05 13.83,10.83C13.05,11.61 12.11,12 11,12M18.5,10H20L22,10V12H20V17.5A2.5,2.5 0 0,1 17.5,20A2.5,2.5 0 0,1 15,17.5A2.5,2.5 0 0,1 17.5,15C17.86,15 18.19,15.07 18.5,15.21V10Z",d="M14,19H18V5H14M6,19H10V5H6V19Z",l="M8,5.14V19.14L19,12.14L8,5.14Z",u="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",c="M18,18H6V6H18V18Z",h="M8.16,3L6.75,4.41L9.34,7H4C2.89,7 2,7.89 2,9V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V9C22,7.89 21.11,7 20,7H14.66L17.25,4.41L15.84,3L12,6.84L8.16,3M4,9H17V19H4V9M19.5,9A1,1 0 0,1 20.5,10A1,1 0 0,1 19.5,11A1,1 0 0,1 18.5,10A1,1 0 0,1 19.5,9M19.5,12A1,1 0 0,1 20.5,13A1,1 0 0,1 19.5,14A1,1 0 0,1 18.5,13A1,1 0 0,1 19.5,12Z",p=function(e){return e[e.PAUSE=1]="PAUSE",e[e.SEEK=2]="SEEK",e[e.VOLUME_SET=4]="VOLUME_SET",e[e.VOLUME_MUTE=8]="VOLUME_MUTE",e[e.PREVIOUS_TRACK=16]="PREVIOUS_TRACK",e[e.NEXT_TRACK=32]="NEXT_TRACK",e[e.TURN_ON=128]="TURN_ON",e[e.TURN_OFF=256]="TURN_OFF",e[e.PLAY_MEDIA=512]="PLAY_MEDIA",e[e.VOLUME_STEP=1024]="VOLUME_STEP",e[e.SELECT_SOURCE=2048]="SELECT_SOURCE",e[e.STOP=4096]="STOP",e[e.CLEAR_PLAYLIST=8192]="CLEAR_PLAYLIST",e[e.PLAY=16384]="PLAY",e[e.SHUFFLE_SET=32768]="SHUFFLE_SET",e[e.SELECT_SOUND_MODE=65536]="SELECT_SOUND_MODE",e[e.BROWSE_MEDIA=131072]="BROWSE_MEDIA",e[e.REPEAT_SET=262144]="REPEAT_SET",e[e.GROUPING=524288]="GROUPING",e}({}),m="browser",_={album:{icon:"M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12,16.5C9.5,16.5 7.5,14.5 7.5,12C7.5,9.5 9.5,7.5 12,7.5C14.5,7.5 16.5,9.5 16.5,12C16.5,14.5 14.5,16.5 12,16.5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",layout:"grid"},app:{icon:"M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 7H3V4H21V7Z",layout:"grid",show_list_images:!0},artist:{icon:o,layout:"grid",show_list_images:!0},channel:{icon:h,thumbnail_ratio:"portrait",layout:"grid",show_list_images:!0},composer:{icon:"M11,4A4,4 0 0,1 15,8A4,4 0 0,1 11,12A4,4 0 0,1 7,8A4,4 0 0,1 11,4M11,6A2,2 0 0,0 9,8A2,2 0 0,0 11,10A2,2 0 0,0 13,8A2,2 0 0,0 11,6M11,13C12.1,13 13.66,13.23 15.11,13.69C14.5,14.07 14,14.6 13.61,15.23C12.79,15.03 11.89,14.9 11,14.9C8.03,14.9 4.9,16.36 4.9,17V18.1H13.04C13.13,18.8 13.38,19.44 13.76,20H3V17C3,14.34 8.33,13 11,13M18.5,10H20L22,10V12H20V17.5A2.5,2.5 0 0,1 17.5,20A2.5,2.5 0 0,1 15,17.5A2.5,2.5 0 0,1 17.5,15C17.86,15 18.19,15.07 18.5,15.21V10Z",layout:"grid",show_list_images:!0},contributing_artist:{icon:o,layout:"grid",show_list_images:!0},directory:{icon:"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",layout:"grid",show_list_images:!0},episode:{icon:h,layout:"grid",thumbnail_ratio:"portrait",show_list_images:!0},game:{icon:"M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z",layout:"grid",thumbnail_ratio:"portrait"},genre:{icon:"M8.11,19.45C5.94,18.65 4.22,16.78 3.71,14.35L2.05,6.54C1.81,5.46 2.5,4.4 3.58,4.17L13.35,2.1L13.38,2.09C14.45,1.88 15.5,2.57 15.72,3.63L16.07,5.3L20.42,6.23H20.45C21.5,6.47 22.18,7.53 21.96,8.59L20.3,16.41C19.5,20.18 15.78,22.6 12,21.79C10.42,21.46 9.08,20.61 8.11,19.45V19.45M20,8.18L10.23,6.1L8.57,13.92V13.95C8,16.63 9.73,19.27 12.42,19.84C15.11,20.41 17.77,18.69 18.34,16L20,8.18M16,16.5C15.37,17.57 14.11,18.16 12.83,17.89C11.56,17.62 10.65,16.57 10.5,15.34L16,16.5M8.47,5.17L4,6.13L5.66,13.94L5.67,13.97C5.82,14.68 6.12,15.32 6.53,15.87C6.43,15.1 6.45,14.3 6.62,13.5L7.05,11.5C6.6,11.42 6.21,11.17 6,10.81C6.06,10.2 6.56,9.66 7.25,9.5C7.33,9.5 7.4,9.5 7.5,9.5L8.28,5.69C8.32,5.5 8.38,5.33 8.47,5.17M15.03,12.23C15.35,11.7 16.03,11.42 16.72,11.57C17.41,11.71 17.91,12.24 18,12.86C17.67,13.38 17,13.66 16.3,13.5C15.61,13.37 15.11,12.84 15.03,12.23M10.15,11.19C10.47,10.66 11.14,10.38 11.83,10.53C12.5,10.67 13.03,11.21 13.11,11.82C12.78,12.34 12.11,12.63 11.42,12.5C10.73,12.33 10.23,11.8 10.15,11.19M11.97,4.43L13.93,4.85L13.77,4.05L11.97,4.43Z",layout:"grid",show_list_images:!0},image:{icon:"M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",layout:"grid",show_list_images:!0},movie:{icon:"M18,4L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4H18Z",thumbnail_ratio:"portrait",layout:"grid",show_list_images:!0},music:{icon:"M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z",show_list_images:!0},playlist:{icon:"M15,6H3V8H15V6M15,10H3V12H15V10M3,16H11V14H3V16M17,6V14.18C16.69,14.07 16.35,14 16,14A3,3 0 0,0 13,17A3,3 0 0,0 16,20A3,3 0 0,0 19,17V8H22V6H17Z",layout:"grid",show_list_images:!0},podcast:{icon:"M17,18.25V21.5H7V18.25C7,16.87 9.24,15.75 12,15.75C14.76,15.75 17,16.87 17,18.25M12,5.5A6.5,6.5 0 0,1 18.5,12C18.5,13.25 18.15,14.42 17.54,15.41L16,14.04C16.32,13.43 16.5,12.73 16.5,12C16.5,9.5 14.5,7.5 12,7.5C9.5,7.5 7.5,9.5 7.5,12C7.5,12.73 7.68,13.43 8,14.04L6.46,15.41C5.85,14.42 5.5,13.25 5.5,12A6.5,6.5 0 0,1 12,5.5M12,1.5A10.5,10.5 0 0,1 22.5,12C22.5,14.28 21.77,16.39 20.54,18.11L19.04,16.76C19.96,15.4 20.5,13.76 20.5,12A8.5,8.5 0 0,0 12,3.5A8.5,8.5 0 0,0 3.5,12C3.5,13.76 4.04,15.4 4.96,16.76L3.46,18.11C2.23,16.39 1.5,14.28 1.5,12A10.5,10.5 0 0,1 12,1.5M12,9.5A2.5,2.5 0 0,1 14.5,12A2.5,2.5 0 0,1 12,14.5A2.5,2.5 0 0,1 9.5,12A2.5,2.5 0 0,1 12,9.5Z",layout:"grid"},season:{icon:h,layout:"grid",thumbnail_ratio:"portrait",show_list_images:!0},track:{icon:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,13H11V18A2,2 0 0,1 9,20A2,2 0 0,1 7,18A2,2 0 0,1 9,16C9.4,16 9.7,16.1 10,16.3V11H13V13M13,9V3.5L18.5,9H13Z"},tv_show:{icon:h,layout:"grid",thumbnail_ratio:"portrait"},url:{icon:"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"},video:{icon:"M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z",layout:"grid",show_list_images:!0}},y=function(e,t,i,a){return e.callWS({type:"media_player/browse_media",entity_id:t,media_content_id:i,media_content_type:a})},v=function(e){var t=e.attributes.media_position;return"playing"!==e.state?t:(t+=(Date.now()-new Date(e.attributes.media_position_updated_at).getTime())/1e3)<0?0:t},f=function(e){var t;switch(e.attributes.media_content_type){case"music":case"image":t=e.attributes.media_artist;break;case"playlist":t=e.attributes.media_playlist;break;case"tvshow":t=e.attributes.media_series_title,e.attributes.media_season&&(t+=" S"+e.attributes.media_season,e.attributes.media_episode&&(t+="E"+e.attributes.media_episode));break;case"channel":t=e.attributes.media_channel;break;default:t=e.attributes.app_name||""}return t},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var i=e.state;if(!(0,n.g0)(i)){if(!(0,r.a)(e))return(0,a.$)(e,p.TURN_ON)?[{icon:u,action:"turn_on"}]:void 0;var s=[];(0,a.$)(e,p.TURN_OFF)&&s.push({icon:u,action:"turn_off"});var o=!0===e.attributes.assumed_state,h=e.attributes;return("playing"===i||"paused"===i||o)&&(0,a.$)(e,p.SHUFFLE_SET)&&t&&s.push({icon:!0===h.shuffle?"M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z":"M16,4.5V7H5V9H16V11.5L19.5,8M16,12.5V15H5V17H16V19.5L19.5,16",action:"shuffle_set"}),("playing"===i||"paused"===i||o)&&(0,a.$)(e,p.PREVIOUS_TRACK)&&s.push({icon:"M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z",action:"media_previous_track"}),!o&&("playing"===i&&((0,a.$)(e,p.PAUSE)||(0,a.$)(e,p.STOP))||("paused"===i||"idle"===i)&&(0,a.$)(e,p.PLAY)||"on"===i&&((0,a.$)(e,p.PLAY)||(0,a.$)(e,p.PAUSE)))&&s.push({icon:"on"===i?"M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5":"playing"!==i?l:(0,a.$)(e,p.PAUSE)?d:c,action:"playing"!==i?"media_play":(0,a.$)(e,p.PAUSE)?"media_pause":"media_stop"}),o&&(0,a.$)(e,p.PLAY)&&s.push({icon:l,action:"media_play"}),o&&(0,a.$)(e,p.PAUSE)&&s.push({icon:d,action:"media_pause"}),o&&(0,a.$)(e,p.STOP)&&s.push({icon:c,action:"media_stop"}),("playing"===i||"paused"===i||o)&&(0,a.$)(e,p.NEXT_TRACK)&&s.push({icon:"M16,18H18V6H16M6,18L14.5,12L6,6V18Z",action:"media_next_track"}),("playing"===i||"paused"===i||o)&&(0,a.$)(e,p.REPEAT_SET)&&t&&s.push({icon:"all"===h.repeat?"M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z":"one"===h.repeat?"M13,15V9H12L10,10V11H11.5V15M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z":"M2,5.27L3.28,4L20,20.72L18.73,22L15.73,19H7V22L3,18L7,14V17H13.73L7,10.27V11H5V8.27L2,5.27M17,13H19V17.18L17,15.18V13M17,5V2L21,6L17,10V7H8.82L6.82,5H17Z",action:"repeat_set"}),s.length>0?s:void 0}}},A=function(e){if(void 0===e||e===1/0)return"";var t=new Date(1e3*e).toISOString();return(t=e>3600?t.substring(11,16):t.substring(14,19)).replace(/^0+/,"").padStart(4,"0")},b=function(e){if(e){var t=e.indexOf("?authSig="),i=t>0?e.slice(0,t):e;return i.startsWith("http")&&(i=decodeURIComponent(i.split("/").pop())),i}},w=function(e,t,i){return e.callService("media_player","volume_set",{entity_id:t,volume_level:i})},H=function(e,t,i){return e.callService("media_player",i,"shuffle_set"===i?{entity_id:t.entity_id,shuffle:!t.attributes.shuffle}:"repeat_set"===i?{entity_id:t.entity_id,repeat:"all"===t.attributes.repeat?"one":"off"===t.attributes.repeat?"all":"off"}:{entity_id:t.entity_id})},k=function(e,t,i,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return!r.enqueue&&void 0===r.announce&&(0,s.ni)(i)&&(r.announce=!0),e.callService("media_player","play_media",Object.assign({entity_id:t,media_content_id:i,media_content_type:a},r))}},8553:function(e,t,i){var a,r,n,s=i(64599),o=i(35806),d=i(71008),l=i(62193),u=i(2816),c=i(27927),h=i(35890),p=(i(81027),i(50289)),m=i(29818);(0,c.A)([(0,m.EM)("hui-marquee")],(function(e,t){var i=function(t){function i(){var t;(0,d.A)(this,i);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t=(0,l.A)(this,i,[].concat(r)),e(t),t}return(0,u.A)(i,t),(0,o.A)(i)}(t);return{F:i,d:[{kind:"field",decorators:[(0,m.MZ)()],key:"text",value:void 0},{kind:"field",decorators:[(0,m.MZ)({type:Boolean})],key:"active",value:function(){return!1}},{kind:"field",decorators:[(0,m.MZ)({reflect:!0,type:Boolean})],key:"animating",value:function(){return!1}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,h.A)(i,"firstUpdated",this,3)([e]),this.addEventListener("mouseover",(function(){return t.classList.add("hovering")}),{capture:!0}),this.addEventListener("mouseout",(function(){return t.classList.remove("hovering")}))}},{kind:"method",key:"updated",value:function(e){(0,h.A)(i,"updated",this,3)([e]),e.has("text")&&this.animating&&(this.animating=!1),e.has("active")&&this.active&&this.offsetWidth<this.scrollWidth&&(this.animating=!0)}},{kind:"method",key:"render",value:function(){return this.text?(0,p.qy)(a||(a=(0,s.A)([' <div class="marquee-inner" @animationiteration="','"> <span>',"</span> "," </div> "])),this._onIteration,this.text,this.animating?(0,p.qy)(r||(r=(0,s.A)([" <span>","</span> "])),this.text):""):p.s6}},{kind:"method",key:"_onIteration",value:function(){this.active||(this.animating=!1)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.AH)(n||(n=(0,s.A)([":host{display:flex;position:relative;align-items:center;height:1.2em;contain:strict}.marquee-inner{position:absolute;left:0;right:0;text-overflow:ellipsis;overflow:hidden}:host(.hovering) .marquee-inner{text-overflow:initial;overflow:initial}:host([animating]) .marquee-inner{left:initial;right:initial;animation:marquee 10s linear infinite}:host([animating]) .marquee-inner span{padding-right:16px;padding-inline-end:16px;padding-inline-start:initial}@keyframes marquee{0%{transform:translateX(0%)}100%{transform:translateX(-50%)}}"])))}}]}}),p.WF)},30718:function(e,t,i){i.d(t,{A:function(){return o},B:function(){return s}});var a=i(71008),r=i(35806),n=(i(71499),i(54098)),s="Unsupported Media",o=function(){function e(t,i,r,n,o){var d=this;(0,a.A)(this,e),this.hass=t,this.item=i,this.resolved=r,this.onChange=o,this.player=void 0,this.buffering=!0,this._removed=!1,this._handleChange=function(){d._removed||d.onChange()};var l=new Audio(this.resolved.url);if(""===l.canPlayType(r.mime_type))throw new Error(s);l.autoplay=!0,l.volume=n,l.addEventListener("play",this._handleChange),l.addEventListener("playing",(function(){d.buffering=!1,d._handleChange()})),l.addEventListener("pause",this._handleChange),l.addEventListener("ended",this._handleChange),l.addEventListener("canplaythrough",this._handleChange),this.player=l}return(0,r.A)(e,[{key:"pause",value:function(){this.buffering=!1,this.player.pause()}},{key:"play",value:function(){this.player.play()}},{key:"setVolume",value:function(e){this.player.volume=e,this.onChange()}},{key:"remove",value:function(){this._removed=!0,this.onChange=void 0,this.player&&this.player.pause()}},{key:"toStateObj",value:function(){var t=e.idleStateObj();return t.state=this.buffering?"buffering":this.player.paused||this.player.ended?"paused":"playing",t.attributes={media_title:this.item.title,entity_picture:this.item.thumbnail,volume_level:this.player.volume,supported_features:n.vj.PLAY|n.vj.PAUSE|n.vj.VOLUME_SET},this.player.duration&&(t.attributes.media_duration=this.player.duration,t.attributes.media_position=this.player.currentTime,t.attributes.media_position_updated_at=t.last_updated),t}}],[{key:"idleStateObj",value:function(){var e=(new Date).toISOString();return{state:"idle",entity_id:n.H1,last_changed:e,last_updated:e,attributes:{},context:{id:"",user_id:null,parent_id:null}}}}])}()},12563:function(e,t,i){var a=i(22858).A,r=i(33994).A;i.a(e,function(){var e=a(r().mark((function e(t,a){var n,s,o,d,l,u,c,h,p,m,_,y,v,f,g,A,b,w,H,k,V,M,C,L,x,P,E,I,S,O,T,U,q,Z,R,j,B,$,N,D,F,z,Y,W,K,X,G,Q,J,ee,te,ie,ae,re,ne;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=i(33994),s=i(22858),o=i(64599),d=i(35806),l=i(71008),u=i(62193),c=i(2816),h=i(27927),p=i(35890),m=i(71499),_=i(81027),y=i(13025),v=i(97741),f=i(29193),g=i(39790),A=i(9241),b=i(66457),w=i(253),H=i(2075),k=i(16891),V=i(46072),M=i(50289),C=i(29818),L=i(85323),x=i(10296),P=i(34897),E=i(213),I=i(65459),S=i(19244),O=i(42496),T=i(18409),i(77372),i(26790),i(32885),i(59400),i(4169),i(13830),i(70857),i(88400),U=i(9883),q=i(54098),Z=i(6121),R=i(20712),i(8553),j=i(30718),!(B=t([V])).then){e.next=65;break}return e.next=61,B;case 61:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=66;break;case 65:e.t0=B;case 66:V=e.t0[0],(0,h.A)([(0,C.EM)("ha-bar-media-player")],(function(e,t){var i,a=function(t){function i(){var t;(0,l.A)(this,i);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t=(0,u.A)(this,i,[].concat(r)),e(t),t}return(0,c.A)(i,t),(0,d.A)(i)}(t);return{F:a,d:[{kind:"field",decorators:[(0,C.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,C.MZ)({attribute:!1})],key:"entityId",value:void 0},{kind:"field",decorators:[(0,C.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,C.P)("mwc-linear-progress")],key:"_progressBar",value:void 0},{kind:"field",decorators:[(0,C.P)("#CurrentProgress")],key:"_currentProgress",value:void 0},{kind:"field",decorators:[(0,C.wk)()],key:"_marqueeActive",value:function(){return!1}},{kind:"field",decorators:[(0,C.wk)()],key:"_newMediaExpected",value:function(){return!1}},{kind:"field",decorators:[(0,C.wk)()],key:"_browserPlayer",value:void 0},{kind:"field",key:"_progressInterval",value:void 0},{kind:"field",key:"_browserPlayerVolume",value:function(){return.8}},{kind:"method",key:"connectedCallback",value:function(){var e=this;(0,p.A)(a,"connectedCallback",this,3)([]);var t=this._stateObj;t&&!this._progressInterval&&this._showProgressBar&&"playing"===t.state&&(this._progressInterval=window.setInterval((function(){return e._updateProgressBar()}),1e3))}},{kind:"method",key:"disconnectedCallback",value:function(){(0,p.A)(a,"disconnectedCallback",this,3)([]),this._progressInterval&&(clearInterval(this._progressInterval),this._progressInterval=void 0),this._tearDownBrowserPlayer()}},{kind:"method",key:"showResolvingNewMediaPicked",value:function(){this._tearDownBrowserPlayer(),this._newMediaExpected=!0,this._debouncedResetMediaExpected()}},{kind:"field",key:"_debouncedResetMediaExpected",value:function(){var e=this;return(0,T.s)((function(){e._newMediaExpected=!1}),2e3)}},{kind:"method",key:"hideResolvingNewMediaPicked",value:function(){this._newMediaExpected=!1}},{kind:"method",key:"playItem",value:function(e,t){var i=this;if(this.entityId!==q.H1)throw Error("Only browser supported");this._tearDownBrowserPlayer();try{this._browserPlayer=new j.A(this.hass,e,t,this._browserPlayerVolume,(function(){return i.requestUpdate("_browserPlayer")}))}catch(a){if(a.message!==j.B)throw a;(0,Z.showAlertDialog)(this,{text:this.hass.localize("ui.components.media-browser.media_not_supported")})}this._newMediaExpected=!1}},{kind:"method",key:"render",value:function(){var e,t=this;if(this._newMediaExpected)return(0,M.qy)($||($=(0,o.A)([' <div class="controls-progress buffering"> '," </div> "])),(0,x.T)(new Promise((function(e){setTimeout(e,500)})).then((function(){return(0,M.qy)(N||(N=(0,o.A)(["<ha-circular-progress indeterminate></ha-circular-progress>"])))}))));var i=this.entityId===q.H1,a=this._stateObj;if(!a)return this._renderChoosePlayer(a);var r=this.narrow?"playing"===a.state&&((0,O.$)(a,q.vj.PAUSE)||(0,O.$)(a,q.vj.STOP))||("paused"===a.state||"idle"===a.state)&&(0,O.$)(a,q.vj.PLAY)||"on"===a.state&&((0,O.$)(a,q.vj.PLAY)||(0,O.$)(a,q.vj.PAUSE))?[{icon:"on"===a.state?"M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5":"playing"!==a.state?"M8,5.14V19.14L19,12.14L8,5.14Z":(0,O.$)(a,q.vj.PAUSE)?"M14,19H18V5H14M6,19H10V5H6V19Z":"M18,18H6V6H18V18Z",action:"playing"!==a.state?"media_play":(0,O.$)(a,q.vj.PAUSE)?"media_pause":"media_stop"}]:void 0:(0,q.Un)(a,!0),n=(0,q.mm)(a),s=(0,q.Xm)(a.attributes.media_duration),d=(0,q.HN)(a.attributes.media_title||a.attributes.media_content_id),l=a.attributes.entity_picture_local||a.attributes.entity_picture;return(0,M.qy)(D||(D=(0,o.A)([' <div class="','" @click="','"> ',' <div class="media-info"> <hui-marquee .text="','" .active="','" @mouseover="','" @mouseleave="','"></hui-marquee> <span class="secondary"> ',' </span> </div> </div> <div class="controls-progress ','"> '," </div> "," "])),(0,L.H)({info:!0,pointer:!i,app:"app"===(null===(e=this._browserPlayer)||void 0===e?void 0:e.item.media_class)}),this._openMoreInfo,l?(0,M.qy)(F||(F=(0,o.A)(['<img alt="" src="','">'])),this.hass.hassUrl(l)):"",d||n||("playing"!==a.state&&"on"!==a.state?this.hass.localize("ui.card.media_player.nothing_playing"):""),this._marqueeActive,this._marqueeMouseOver,this._marqueeMouseLeave,d?n:"","buffering"===a.state?"buffering":"","buffering"===a.state?(0,M.qy)(z||(z=(0,o.A)(["<ha-circular-progress indeterminate></ha-circular-progress> "]))):(0,M.qy)(Y||(Y=(0,o.A)([' <div class="controls"> '," </div> "," "])),void 0===r?"":r.map((function(e){return(0,M.qy)(W||(W=(0,o.A)([' <ha-icon-button .label="','" .path="','" action="','" @click="','"> </ha-icon-button> '])),t.hass.localize("ui.card.media_player.".concat(e.action)),e.icon,e.action,t._handleControlClick)})),a.attributes.media_duration===1/0?M.s6:this.narrow?(0,M.qy)(K||(K=(0,o.A)(["<mwc-linear-progress></mwc-linear-progress>"]))):(0,M.qy)(X||(X=(0,o.A)([' <div class="progress"> <div id="CurrentProgress"></div> <mwc-linear-progress wide></mwc-linear-progress> <div>',"</div> </div> "])),s)),this._renderChoosePlayer(a))}},{kind:"method",key:"_renderChoosePlayer",value:function(e){var t=this,i=this.entityId===q.H1;return(0,M.qy)(G||(G=(0,o.A)([' <div class="choose-player ','"> '," <ha-button-menu> ",' <ha-list-item .player="','" ?selected="','" @click="','"> '," </ha-list-item> "," </ha-button-menu> </div> "])),i?"browser":"",!this.narrow&&e&&(0,O.$)(e,q.vj.VOLUME_SET)?(0,M.qy)(Q||(Q=(0,o.A)([' <ha-button-menu y="0" x="76"> <ha-icon-button slot="trigger" .path="','"></ha-icon-button> <ha-slider labeled min="0" max="100" step="1" .value="','" @change="','"> </ha-slider> </ha-button-menu> '])),"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z",100*e.attributes.volume_level,this._handleVolumeChange):"",this.narrow?(0,M.qy)(J||(J=(0,o.A)([' <ha-icon-button slot="trigger"> '," </ha-icon-button> "])),this._renderIcon(i,e)):(0,M.qy)(ee||(ee=(0,o.A)([' <ha-button slot="trigger" .label="','"> <span slot="icon"> ',' </span> <ha-svg-icon slot="trailingIcon" .path="','"></ha-svg-icon> </ha-button> '])),this.narrow?M.s6:"".concat(e?(0,S.u)(e):this.entityId,"\n                "),this._renderIcon(i,e),"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"),q.H1,i,this._selectPlayer,this.hass.localize("ui.components.media-browser.web-browser"),this._mediaPlayerEntities.map((function(e){return(0,M.qy)(te||(te=(0,o.A)([' <ha-list-item ?selected="','" .disabled="','" .player="','" @click="','"> '," </ha-list-item> "])),e.entity_id===t.entityId,e.state===U.Hh,e.entity_id,t._selectPlayer,(0,S.u)(e))})))}},{kind:"method",key:"_renderIcon",value:function(e,t){return e?(0,M.qy)(ie||(ie=(0,o.A)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),"M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"):t?(0,M.qy)(ae||(ae=(0,o.A)([' <ha-state-icon .hass="','" .stateObj="','"></ha-state-icon> '])),this.hass,t):(0,M.qy)(re||(re=(0,o.A)([' <ha-domain-icon .hass="','" .domain="','"></ha-domain-icon> '])),this.hass,(0,E.m)(this.entityId))}},{kind:"method",key:"willUpdate",value:function(e){if((0,p.A)(a,"willUpdate",this,3)([e]),e.has("entityId")&&this._tearDownBrowserPlayer(),e.has("hass")&&this.entityId!==q.H1){var t=e.get("hass");t&&t.states[this.entityId]===this.hass.states[this.entityId]||(this._newMediaExpected=!1)}}},{kind:"method",key:"updated",value:function(e){var t=this;if((0,p.A)(a,"updated",this,3)([e]),this.entityId===q.H1){if(!e.has("_browserPlayer"))return}else{var i=e.get("hass");if(i&&i.states[this.entityId]===this._stateObj)return}var r=this._stateObj;this._updateProgressBar(),!this._progressInterval&&this._showProgressBar&&"playing"===(null==r?void 0:r.state)?this._progressInterval=window.setInterval((function(){return t._updateProgressBar()}),1e3):!this._progressInterval||this._showProgressBar&&"playing"===(null==r?void 0:r.state)||(clearInterval(this._progressInterval),this._progressInterval=void 0)}},{kind:"get",key:"_stateObj",value:function(){return this.entityId===q.H1?this._browserPlayer?this._browserPlayer.toStateObj():j.A.idleStateObj():this.hass.states[this.entityId]}},{kind:"method",key:"_tearDownBrowserPlayer",value:function(){this._browserPlayer&&(this._browserPlayer.remove(),this._browserPlayer=void 0)}},{kind:"method",key:"_openMoreInfo",value:function(){this._browserPlayer||(0,P.r)(this,"hass-more-info",{entityId:this.entityId})}},{kind:"get",key:"_showProgressBar",value:function(){if(!this.hass)return!1;var e=this._stateObj;return e&&("playing"===e.state||"paused"===e.state)&&"media_duration"in e.attributes&&"media_position"in e.attributes}},{kind:"get",key:"_mediaPlayerEntities",value:function(){var e=this;return Object.values(this.hass.states).filter((function(t){var i;return"media_player"===(0,I.t)(t)&&(0,O.$)(t,q.vj.BROWSE_MEDIA)&&!(null!==(i=e.hass.entities[t.entity_id])&&void 0!==i&&i.hidden)}))}},{kind:"method",key:"_updateProgressBar",value:function(){var e=this._stateObj;if(this._progressBar&&this._currentProgress&&e){if(!e.attributes.media_duration)return this._progressBar.progress=0,void(this._currentProgress.innerHTML="");var t=(0,q.$6)(e);this._progressBar.progress=t/e.attributes.media_duration,this._currentProgress&&(this._currentProgress.innerHTML=(0,q.Xm)(t))}}},{kind:"method",key:"_handleControlClick",value:function(e){var t=e.currentTarget.getAttribute("action");this._browserPlayer?"media_pause"===t?this._browserPlayer.pause():"media_play"===t&&this._browserPlayer.play():(0,q.ce)(this.hass,this._stateObj,e.currentTarget.getAttribute("action"))}},{kind:"method",key:"_marqueeMouseOver",value:function(){this._marqueeActive||(this._marqueeActive=!0)}},{kind:"method",key:"_marqueeMouseLeave",value:function(){this._marqueeActive&&(this._marqueeActive=!1)}},{kind:"method",key:"_selectPlayer",value:function(e){var t=e.currentTarget.player;(0,P.r)(this,"player-picked",{entityId:t})}},{kind:"method",key:"_handleVolumeChange",value:(i=(0,s.A)((0,n.A)().mark((function e(t){var i;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),i=Number(t.target.value)/100,!this._browserPlayer){e.next=7;break}this._browserPlayerVolume=i,this._browserPlayer.setVolume(i),e.next=9;break;case 7:return e.next=9,(0,q.QI)(this.hass,this.entityId,i);case 9:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,M.AH)(ne||(ne=(0,o.A)([":host{display:flex;height:100px;box-sizing:border-box;background:var(--ha-card-background,var(--card-background-color,#fff));border-top:1px solid var(--divider-color);padding-bottom:env(safe-area-inset-bottom)}mwc-linear-progress{width:100%;padding:0 4px;--mdc-theme-primary:var(--secondary-text-color)}ha-button-menu ha-button[slot=trigger]{line-height:1;--mdc-theme-primary:var(--primary-text-color);--mdc-icon-size:16px}.info{flex:1;display:flex;align-items:center;width:100%;margin-right:16px;margin-inline-end:16px;margin-inline-start:initial;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.pointer{cursor:pointer}.progress,.secondary{color:var(--secondary-text-color)}.choose-player{flex:1;display:flex;justify-content:flex-end;align-items:center;padding:16px}.controls{height:48px;padding-bottom:4px}.controls-progress{flex:2;display:flex;align-items:center;justify-content:center;flex-direction:column;direction:ltr}.progress{display:flex;width:100%;align-items:center}mwc-linear-progress[wide]{margin:0 4px}.media-info{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-left:16px;padding-inline-start:16px;padding-inline-end:initial;width:100%}hui-marquee{font-size:1.2em;margin:0px 0 4px}img{height:100%}.app img{height:68px;margin:16px 0 16px 16px}:host([narrow]){height:57px}:host([narrow]) .controls-progress{flex:unset;min-width:48px}:host([narrow]) .controls-progress.buffering{flex:1}:host([narrow]) .media-info{padding-left:8px;padding-inline-start:8px;padding-inline-end:initial}:host([narrow]) .controls{display:flex;padding-bottom:0;--mdc-icon-size:30px}:host([narrow]) .choose-player{padding-left:0;padding-right:8px;padding-inline-start:0;padding-inline-end:8px;min-width:48px;flex:unset;justify-content:center}:host([narrow]) .choose-player.browser{justify-content:flex-end}:host([narrow]) mwc-linear-progress{padding:0;position:absolute;top:-4px;left:0}ha-list-item[selected]{font-weight:700}span[slot=icon]{display:flex;align-items:center}ha-svg-icon[slot=trailingIcon]{margin-inline-start:8px!important;margin-inline-end:0px!important;direction:var(--direction)}"])))}}]}}),(0,R.E)(M.WF)),a(),e.next=81;break;case 78:e.prev=78,e.t2=e.catch(0),a(e.t2);case 81:case"end":return e.stop()}}),e,null,[[0,78]])})));return function(t,i){return e.apply(this,arguments)}}())},62787:function(e,t,i){var a=i(22858).A,r=i(33994).A;i.a(e,function(){var e=a(r().mark((function e(a,n){var s,o,d,l,u,c,h,p,m,_,y,v,f,g,A,b,w,H,k,V,M,C,L,x,P,E,I,S,O,T,U,q,Z,R,j,B,$,N,D,F;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.r(t),s=i(41981),o=i(43532),d=i(33994),l=i(22858),u=i(64599),c=i(35806),h=i(71008),p=i(62193),m=i(2816),_=i(27927),y=i(35890),v=i(64782),f=i(81027),g=i(39805),A=i(97741),b=i(18193),w=i(36016),H=i(43037),k=i(92765),V=i(16891),i(72606),M=i(50289),C=i(29818),L=i(96979),x=i(34897),P=i(16312),i(11804),i(4169),i(45346),E=i(70308),i(95248),I=i(54098),S=i(19216),O=i(55321),T=i(12563),U=i(710),q=i(6121),Z=i(88800),i(94110),!(R=a([E,T])).then){e.next=57;break}return e.next=53,R;case 53:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=58;break;case 57:e.t0=R;case 58:j=e.t0,E=j[0],T=j[1],F=function(e,t){var i,a="/media-browser/".concat(e),r=(0,v.A)(t.slice(1));try{for(r.s();!(i=r.n()).done;){var n=i.value;a+="/"+encodeURIComponent("".concat(n.media_content_type,",").concat(n.media_content_id))}}catch(s){r.e(s)}finally{r.f()}return a},(0,_.A)([(0,C.EM)("ha-panel-media-browser")],(function(e,t){var i,a,r=function(t){function i(){var t;(0,h.A)(this,i);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t=(0,p.A)(this,i,[].concat(r)),e(t),t}return(0,m.A)(i,t),(0,c.A)(i)}(t);return{F:r,d:[{kind:"field",decorators:[(0,C.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,C.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,C.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,C.wk)()],key:"_currentItem",value:void 0},{kind:"field",decorators:[(0,C.wk)()],key:"_preferredLayout",value:function(){return"auto"}},{kind:"field",key:"_navigateIds",value:function(){return[{media_content_id:void 0,media_content_type:void 0}]}},{kind:"field",decorators:[(0,L.I)({key:"mediaBrowseEntityId",state:!0,subscribe:!1})],key:"_entityId",value:function(){return I.H1}},{kind:"field",decorators:[(0,C.P)("ha-media-player-browse")],key:"_browser",value:void 0},{kind:"field",decorators:[(0,C.P)("ha-bar-media-player")],key:"_player",value:void 0},{kind:"method",key:"render",value:function(){return(0,M.qy)(B||(B=(0,u.A)([" <ha-top-app-bar-fixed> ",' <div slot="title"> ',' </div> <ha-media-manage-button slot="actionItems" .hass="','" .currentItem="','" @media-refresh="','"></ha-media-manage-button> <ha-button-menu slot="actionItems" @action="','"> <ha-icon-button slot="trigger" .label="','" .path="','"></ha-icon-button> <mwc-list-item graphic="icon"> ',' <ha-svg-icon class="','" slot="graphic" .path="','"></ha-svg-icon> </mwc-list-item> <mwc-list-item graphic="icon"> ',' <ha-svg-icon class="','" slot="graphic" .path="','"></ha-svg-icon> </mwc-list-item> <mwc-list-item graphic="icon"> ',' <ha-svg-icon slot="graphic" class="','" .path="','"></ha-svg-icon> </mwc-list-item> </ha-button-menu> <ha-media-player-browse .hass="','" .entityId="','" .navigateIds="','" .preferredLayout="','" @media-picked="','" @media-browsed="','"></ha-media-player-browse> </ha-top-app-bar-fixed> <ha-bar-media-player .hass="','" .entityId="','" .narrow="','" @player-picked="','"></ha-bar-media-player> '])),this._navigateIds.length>1?(0,M.qy)($||($=(0,u.A)([' <ha-icon-button-arrow-prev slot="navigationIcon" .path="','" @click="','"></ha-icon-button-arrow-prev> '])),"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",this._goBack):(0,M.qy)(N||(N=(0,u.A)([' <ha-menu-button slot="navigationIcon" .hass="','" .narrow="','"></ha-menu-button> '])),this.hass,this.narrow),this._currentItem?this._currentItem.title:this.hass.localize("ui.components.media-browser.media-player-browser"),this.hass,this._currentItem,this._refreshMedia,this._handleMenuAction,this.hass.localize("ui.common.menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",this.hass.localize("ui.components.media-browser.auto"),"auto"===this._preferredLayout?"selected_menu_item":"","M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11Z",this.hass.localize("ui.components.media-browser.grid"),"grid"===this._preferredLayout?"selected_menu_item":"","M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z",this.hass.localize("ui.components.media-browser.list"),"list"===this._preferredLayout?"selected_menu_item":"","M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z",this.hass,this._entityId,this._navigateIds,this._preferredLayout,this._mediaPicked,this._mediaBrowsed,this.hass,this._entityId,this.narrow,this._playerPicked)}},{kind:"method",key:"_handleMenuAction",value:(a=(0,l.A)((0,d.A)().mark((function e(t){return(0,d.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.detail.index,e.next=0===e.t0?3:1===e.t0?5:2===e.t0?7:9;break;case 3:return this._preferredLayout="auto",e.abrupt("break",9);case 5:return this._preferredLayout="grid",e.abrupt("break",9);case 7:return this._preferredLayout="list",e.abrupt("break",9);case 9:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{kind:"method",key:"willUpdate",value:function(e){if((0,y.A)(r,"willUpdate",this,3)([e]),e.has("route"))if(""!==this.route.path){var t=this.route.path.substring(1).split("/"),i=(0,o.A)(t),a=i[0],n=i.slice(1);if(a!==this._entityId){if(a!==I.H1&&void 0===this.hass.states[a])return(0,P.o)("/media-browser/".concat(I.H1),{replace:!0}),void(0,q.showAlertDialog)(this,{text:this.hass.localize("ui.panel.media-browser.error.player_not_exist",{name:a})});this._entityId=a}this._navigateIds=[{media_content_type:void 0,media_content_id:void 0}].concat((0,s.A)(n.map((function(e){var t=decodeURIComponent(e),i=t.indexOf(",");return{media_content_type:t.substring(0,i),media_content_id:t.substring(i+1)}})))),this._currentItem=void 0}else(0,P.o)("/media-browser/".concat(this._entityId),{replace:!0})}},{kind:"method",key:"_goBack",value:function(){(0,P.o)(F(this._entityId,this._navigateIds.slice(0,-1)))}},{kind:"method",key:"_mediaBrowsed",value:function(e){e.detail.ids!==this._navigateIds?(0,P.o)(F(this._entityId,e.detail.ids),{replace:e.detail.replace}):this._currentItem=e.detail.current}},{kind:"method",key:"_mediaPicked",value:(i=(0,l.A)((0,d.A)().mark((function e(t){var i,a;return(0,d.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.detail.item,this._entityId===I.H1){e.next=12;break}return this._player.showResolvingNewMediaPicked(),e.prev=3,e.next=6,(0,I.ie)(this.hass,this._entityId,i.media_content_id,i.media_content_type);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),this._player.hideResolvingNewMediaPicked();case 11:return e.abrupt("return");case 12:if(!(0,Z.j4)(i.media_content_id)){e.next=15;break}return(0,x.r)(this,"hass-more-info",{entityId:(0,Z.vc)(i.media_content_id)}),e.abrupt("return");case 15:return this._player.showResolvingNewMediaPicked(),e.prev=16,e.next=19,(0,S.A1)(this.hass,i.media_content_id);case 19:a=e.sent,e.next=27;break;case 22:return e.prev=22,e.t1=e.catch(16),(0,q.showAlertDialog)(this,{title:this.hass.localize("ui.components.media-browser.media_browsing_error"),text:e.t1.message}),this._player.hideResolvingNewMediaPicked(),e.abrupt("return");case 27:if(!a.mime_type.startsWith("audio/")){e.next=30;break}return this._player.playItem(i,a),e.abrupt("return");case 30:(0,U.M)(this,{sourceUrl:a.url,sourceType:a.mime_type,title:i.title,can_play:i.can_play}),this._player.hideResolvingNewMediaPicked();case 32:case"end":return e.stop()}}),e,this,[[3,8],[16,22]])}))),function(e){return i.apply(this,arguments)})},{kind:"method",key:"_playerPicked",value:function(e){var t=e.detail.entityId;t!==this._entityId&&(0,P.o)(F(t,this._navigateIds))}},{kind:"method",key:"_refreshMedia",value:function(){this._browser.refresh()}},{kind:"get",static:!0,key:"styles",value:function(){return[O.RF,(0,M.AH)(D||(D=(0,u.A)(["ha-media-manage-button{--mdc-theme-primary:var(--app-header-text-color)}ha-media-player-browse{height:calc(100vh - (100px + var(--header-height)))}:host([narrow]) ha-media-player-browse{height:calc(100vh - (57px + var(--header-height)))}.selected_menu_item{color:var(--primary-color)}ha-bar-media-player{position:fixed;width:var(--mdc-top-app-bar-width,100%)}"])))]}}]}}),M.WF),n(),e.next=74;break;case 71:e.prev=71,e.t2=e.catch(0),n(e.t2);case 74:case"end":return e.stop()}}),e,null,[[0,71]])})));return function(t,i){return e.apply(this,arguments)}}())},710:function(e,t,i){i.d(t,{M:function(){return r}});i(95737),i(39790),i(66457),i(99019),i(96858);var a=i(34897),r=function(e,t){(0,a.r)(e,"show-dialog",{dialogTag:"hui-dialog-web-browser-play-media",dialogImport:function(){return i.e(57446).then(i.bind(i,57446))},dialogParams:t})}}}]);
//# sourceMappingURL=62787.Ygkt6W17puw.js.map