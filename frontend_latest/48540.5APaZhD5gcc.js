export const id=48540;export const ids=[48540];export const modules={68009:(t,e,s)=>{s.d(e,{A:()=>i});s(253),s(54846),s(16891);function i(t){if(!t||"object"!=typeof t)return t;if("[object Date]"==Object.prototype.toString.call(t))return new Date(t.getTime());if(Array.isArray(t))return t.map(i);var e={};return Object.keys(t).forEach((function(s){e[s]=i(t[s])})),e}},24892:(t,e,s)=>{s(253),s(54846);var i=s(79192),o=s(50289),r=s(29818);class a extends o.WF{constructor(){super(),this.min=0,this.max=100,this.step=1,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.handleZoom=1.5,this.readonly=!1,this.disabled=!1,this.dragging=!1,this.rtl=!1,this.outside=!1,this._scale=1,this.dragEnd=this.dragEnd.bind(this),this.drag=this.drag.bind(this),this._keyStep=this._keyStep.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousemove",this.drag),document.addEventListener("touchmove",this.drag,{passive:!1}),document.addEventListener("keydown",this._keyStep)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousemove",this.drag),document.removeEventListener("touchmove",this.drag),document.removeEventListener("keydown",this._keyStep)}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _showHandle(){return!this.readonly&&(null!=this.value||null!=this.high&&null!=this.low)}_angleInside(t){let e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}_angle2xy(t){return this.rtl?{x:-Math.cos(t),y:Math.sin(t)}:{x:Math.cos(t),y:Math.sin(t)}}_xy2angle(t,e){return this.rtl&&(t=-t),(Math.atan2(e,t)-this._start+8*Math.PI)%(2*Math.PI)}_value2angle(t){const e=((t=Math.min(this.max,Math.max(this.min,t)))-this.min)/(this.max-this.min);return this._start+e*this._len}_angle2value(t){return Math.round((t/this._len*(this.max-this.min)+this.min)/this.step)*this.step}get _boundaries(){const t=this._angle2xy(this._start),e=this._angle2xy(this._end);let s=1;this._angleInside(270)||(s=Math.max(-t.y,-e.y));let i=1;this._angleInside(90)||(i=Math.max(t.y,e.y));let o=1;this._angleInside(180)||(o=Math.max(-t.x,-e.x));let r=1;return this._angleInside(0)||(r=Math.max(t.x,e.x)),{up:s,down:i,left:o,right:r,height:s+i,width:o+r}}_mouse2value(t){const e=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX,s=t.type.startsWith("touch")?t.touches[0].clientY:t.clientY,i=this.shadowRoot.querySelector("svg").getBoundingClientRect(),o=this._boundaries,r=e-(i.left+o.left*i.width/o.width),a=s-(i.top+o.up*i.height/o.height),n=this._xy2angle(r,a);return this._angle2value(n)}dragStart(t){if(!this._showHandle||this.disabled)return;let e,s=t.target;if(this._rotation&&"focus"!==this._rotation.type)return;if(s.classList.contains("shadowpath"))if("touchstart"===t.type&&(e=window.setTimeout((()=>{this._rotation&&(this._rotation.cooldown=void 0)}),200)),null==this.low)s=this.shadowRoot.querySelector("#value");else{const e=this._mouse2value(t);s=Math.abs(e-this.low)<Math.abs(e-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(s.classList.contains("overflow")&&(s=s.nextElementSibling),!s.classList.contains("handle"))return;s.setAttribute("stroke-width",String(2*this.handleSize*this.handleZoom*this._scale));const i="high"===s.id?this.low:this.min,o="low"===s.id?this.high:this.max;this._rotation={handle:s,min:i,max:o,start:this[s.id],type:t.type,cooldown:e},this.dragging=!0}_cleanupRotation(){const t=this._rotation.handle;t.setAttribute("stroke-width",String(2*this.handleSize*this._scale)),this._rotation=void 0,this.dragging=!1,t.blur()}dragEnd(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const e=this._rotation.handle;this._cleanupRotation();let s=new CustomEvent("value-changed",{detail:{[e.id]:this[e.id]},bubbles:!0,composed:!0});this.dispatchEvent(s),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;if(this._rotation.cooldown)return window.clearTimeout(this._rotation.cooldown),void this._cleanupRotation();if("focus"===this._rotation.type)return;t.preventDefault();const e=this._mouse2value(t);this._dragpos(e)}_dragpos(t){if(t<this._rotation.min||t>this._rotation.max)return;const e=this._rotation.handle;this[e.id]=t;let s=new CustomEvent("value-changing",{detail:{[e.id]:t},bubbles:!0,composed:!0});this.dispatchEvent(s)}_keyStep(t){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const e=this._rotation.handle;"ArrowLeft"!==t.key&&"ArrowDown"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]+this.step):this._dragpos(this[e.id]-this.step)),"ArrowRight"!==t.key&&"ArrowUp"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]-this.step):this._dragpos(this[e.id]+this.step)),"Home"===t.key&&(t.preventDefault(),this._dragpos(this.min)),"End"===t.key&&(t.preventDefault(),this._dragpos(this.max))}updated(t){if(this.shadowRoot.querySelector(".slider")){const t=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(t&&t.strokeWidth){const e=parseFloat(t.strokeWidth);if(e>this.handleSize*this.handleZoom){const t=this._boundaries,s=`\n          ${e/2*Math.abs(t.up)}px\n          ${e/2*Math.abs(t.right)}px\n          ${e/2*Math.abs(t.down)}px\n          ${e/2*Math.abs(t.left)}px`;this.shadowRoot.querySelector("svg").style.margin=s}}}if(this.shadowRoot.querySelector("svg")&&void 0===this.shadowRoot.querySelector("svg").style.vectorEffect){t.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach((t=>{if(t.getAttribute("stroke-width"))return;const e=parseFloat(getComputedStyle(t).getPropertyValue("stroke-width"));t.style.strokeWidth=e*this._scale+"px"}));const e=this.shadowRoot.querySelector("svg").getBoundingClientRect(),s=Math.max(e.width,e.height);this._scale=2/s}}_renderArc(t,e){const s=e-t,i=this._angle2xy(t),o=this._angle2xy(e+.001);return`\n      M ${i.x} ${i.y}\n      A 1 1,\n        0,\n        ${s>Math.PI?"1":"0"} ${this.rtl?"0":"1"},\n        ${o.x} ${o.y}\n    `}_renderHandle(t){const e=this._value2angle(this[t]),s=this._angle2xy(e),i={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[t]||"";return o.JW` <g class="${t} handle"> <path id="${t}" class="overflow" d="
          M ${s.x} ${s.y}
          L ${s.x+.001} ${s.y+.001}
          " vector-effect="non-scaling-stroke" stroke="rgba(0,0,0,0)" stroke-width="${4*this.handleSize*this._scale}"/> <path id="${t}" class="handle" d="
          M ${s.x} ${s.y}
          L ${s.x+.001} ${s.y+.001}
          " vector-effect="non-scaling-stroke" stroke-width="${2*this.handleSize*this._scale}" tabindex="0" @focus="${this.dragStart}" @blur="${this.dragEnd}" role="slider" aria-valuemin="${this.min}" aria-valuemax="${this.max}" aria-valuenow="${this[t]}" aria-disabled="${this.disabled}" aria-label="${i||""}"/> </g> `}render(){const t=this._boundaries;return o.qy` <svg @mousedown="${this.dragStart}" @touchstart="${this.dragStart}" xmln="http://www.w3.org/2000/svg" viewBox="${-t.left} ${-t.up} ${t.width} ${t.height}" style="margin:${this.handleSize*this.handleZoom}px" ?disabled="${this.disabled}" focusable="false"> <g class="slider"> <path class="path" d="${this._renderArc(this._start,this._end)}" vector-effect="non-scaling-stroke"/> <g class="bar"> ${null!=this.low&&null!=this.high&&this.outside?o.JW` <path class="bar low" vector-effect="non-scaling-stroke" d="${this._renderArc(this._value2angle(this.min),this._value2angle(this.low))}"/> <path class="bar high" vector-effect="non-scaling-stroke" d="${this._renderArc(this._value2angle(this.high),this._value2angle(this.max))}"/> `:o.JW` <path class="bar" vector-effect="non-scaling-stroke" d="${this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value))}"/> `} </g> <path class="shadowpath" d="${this._renderArc(this._start,this._end)}" vector-effect="non-scaling-stroke" stroke="rgba(0,0,0,0)" stroke-width="${3*this.handleSize*this._scale}" stroke-linecap="butt"/> </g> <g class="handles"> ${this._showHandle?null!=this.low?this._reverseOrder?o.JW`${this._renderHandle("high")} ${this._renderHandle("low")}`:o.JW`${this._renderHandle("low")} ${this._renderHandle("high")}`:o.JW`${this._renderHandle("value")}`:""} </g> </svg> `}static get styles(){return o.AH`:host{display:inline-block;width:100%}svg{overflow:visible;display:block}path{transition:stroke 1s ease-out,stroke-width .2s ease-out}.slider{fill:none;stroke-width:var(--round-slider-path-width,3);stroke-linecap:var(--round-slider-linecap,round)}.path{stroke:var(--round-slider-path-color,lightgray)}g.bar{stroke:var(--round-slider-bar-color,deepskyblue)}.bar.low{stroke:var(--round-slider-low-bar-color)}.bar.high{stroke:var(--round-slider-high-bar-color)}svg[disabled] .bar{stroke:var(--round-slider-disabled-bar-color,darkgray)}g.handles{stroke:var(--round-slider-handle-color,var(--round-slider-bar-color,deepskyblue));stroke-linecap:round;cursor:var(--round-slider-handle-cursor,pointer)}g.low.handle{stroke:var(--round-slider-low-handle-color)}g.high.handle{stroke:var(--round-slider-high-handle-color)}svg[disabled] g.handles{stroke:var(--round-slider-disabled-bar-color,darkgray)}.handle:focus{outline:unset}`}}(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"value",void 0),(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"high",void 0),(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"low",void 0),(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"min",void 0),(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"max",void 0),(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"step",void 0),(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"startAngle",void 0),(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"arcLength",void 0),(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"handleSize",void 0),(0,i.__decorate)([(0,r.MZ)({type:Number})],a.prototype,"handleZoom",void 0),(0,i.__decorate)([(0,r.MZ)({type:Boolean})],a.prototype,"readonly",void 0),(0,i.__decorate)([(0,r.MZ)({type:Boolean})],a.prototype,"disabled",void 0),(0,i.__decorate)([(0,r.MZ)({type:Boolean,reflect:!0})],a.prototype,"dragging",void 0),(0,i.__decorate)([(0,r.MZ)({type:Boolean})],a.prototype,"rtl",void 0),(0,i.__decorate)([(0,r.MZ)()],a.prototype,"valueLabel",void 0),(0,i.__decorate)([(0,r.MZ)()],a.prototype,"lowLabel",void 0),(0,i.__decorate)([(0,r.MZ)()],a.prototype,"highLabel",void 0),(0,i.__decorate)([(0,r.MZ)({type:Boolean})],a.prototype,"outside",void 0),(0,i.__decorate)([(0,r.wk)()],a.prototype,"_scale",void 0),customElements.define("round-slider",a)},24226:(t,e,s)=>{s.d(e,{z:()=>o});var i=s(30429);function o(t,e){const s=(0,i.a)(t),o=(0,i.a)(e),r=s.getTime()-o.getTime();return r<0?-1:r>0?1:r}},72730:(t,e,s)=>{s.d(e,{W:()=>n});var i=s(24226),o=s(30429);function r(t,e){const s=(0,o.a)(t),i=(0,o.a)(e);return 12*(s.getFullYear()-i.getFullYear())+(s.getMonth()-i.getMonth())}var a=s(91103);function n(t,e){const s=(0,o.a)(t),n=(0,o.a)(e),h=(0,i.z)(s,n),d=Math.abs(r(s,n));let l;if(d<1)l=0;else{1===s.getMonth()&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-h*d);let e=(0,i.z)(s,n)===-h;(0,a.c)((0,o.a)(t))&&1===d&&1===(0,i.z)(t,n)&&(e=!1),l=h*(d-Number(e))}return 0===l?0:l}},93094:(t,e,s)=>{s.d(e,{j:()=>o});var i=s(30429);function o(t){const e=(0,i.a)(t),s=e.getMonth(),o=s-s%3+3;return e.setMonth(o,0),e.setHours(23,59,59,999),e}},75697:(t,e,s)=>{s.d(e,{o:()=>o});var i=s(60132);function o(){return(0,i.D)(Date.now())}},77301:(t,e,s)=>{s.d(e,{e:()=>o});var i=s(30429);function o(t){return 1===(0,i.a)(t).getDate()}},91103:(t,e,s)=>{s.d(e,{c:()=>a});var i=s(60132),o=s(12152),r=s(30429);function a(t){const e=(0,r.a)(t);return+(0,i.D)(e)==+(0,o.p)(e)}},72519:(t,e,s)=>{s.d(e,{a:()=>o});var i=s(30429);function o(t){const e=(0,i.a)(t),s=e.getMonth(),o=s-s%3;return e.setMonth(o,1),e.setHours(0,0,0,0),e}},30745:(t,e,s)=>{s.d(e,{e:()=>o});var i=s(61310);function o(t,e){return(0,i.f)(t,-e)}}};
//# sourceMappingURL=48540.5APaZhD5gcc.js.map