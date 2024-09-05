"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[90701],{90701:function(t,e,i){i.d(e,{p:function(){return U}});var a,n,d,o,s,r,l,h,c,u=i(41981),p=i(33994),v=i(22858),g=i(14842),f=i(64599),k=i(35806),b=i(71008),y=i(62193),_=i(2816),x=i(27927),m=i(35890),C=(i(81027),i(95737),i(79243),i(97741),i(33231),i(29193),i(26098),i(39790),i(66457),i(74268),i(24545),i(51855),i(82130),i(31743),i(22328),i(4959),i(62435),i(99019),i(253),i(54846),i(16891),i(4525),i(66555),i(96858),i(50289)),w=i(29818),A=i(85323),D=i(55165),O=i(34897),H=i(69678),T=i(18409),U=3e5;(0,x.A)([(0,w.EM)("ha-chart-base")],(function(t,e){var x,U=function(e){function i(){var e;(0,b.A)(this,i);for(var a=arguments.length,n=new Array(a),d=0;d<a;d++)n[d]=arguments[d];return e=(0,y.A)(this,i,[].concat(n)),t(e),e}return(0,_.A)(i,e),(0,k.A)(i)}(e);return{F:U,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:"chart-type",reflect:!0})],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"data",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"extraData",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,w.MZ)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,w.MZ)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,w.MZ)({type:Number})],key:"paddingYAxis",value:function(){return 0}},{kind:"field",decorators:[(0,w.MZ)({type:Boolean})],key:"externalHidden",value:function(){return!1}},{kind:"field",decorators:[(0,w.wk)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,w.wk)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,w.wk)()],key:"_hiddenDatasets",value:function(){return new Set}},{kind:"field",key:"_paddingUpdateCount",value:function(){return 0}},{kind:"field",key:"_paddingUpdateLock",value:function(){return!1}},{kind:"field",key:"_paddingYAxisInternal",value:function(){return 0}},{kind:"field",key:"_datasetOrder",value:function(){return[]}},{kind:"method",key:"disconnectedCallback",value:function(){(0,m.A)(U,"disconnectedCallback",this,3)([]),this._releaseCanvas()}},{kind:"method",key:"connectedCallback",value:function(){(0,m.A)(U,"connectedCallback",this,3)([]),this.hasUpdated&&(this._releaseCanvas(),this._setupChart())}},{kind:"field",key:"updateChart",value:function(){var t=this;return function(e){var i;null===(i=t.chart)||void 0===i||i.update(e)}}},{kind:"field",key:"resize",value:function(){var t=this;return function(e){var i,a,n,d;if(null!=e&&e.aspectRatio&&!e.height)e.height=Math.round((null!==(d=e.width)&&void 0!==d?d:t.clientWidth)/e.aspectRatio);else if(null!=e&&e.aspectRatio&&!e.width){var o;e.width=Math.round((null!==(o=e.height)&&void 0!==o?o:t.clientHeight)*e.aspectRatio)}null===(i=t.chart)||void 0===i||i.resize(null!==(a=null==e?void 0:e.width)&&void 0!==a?a:t.clientWidth,null!==(n=null==e?void 0:e.height)&&void 0!==n?n:t.clientHeight)}}},{kind:"method",key:"firstUpdated",value:function(){var t=this;this._setupChart(),this.data.datasets.forEach((function(e,i){e.hidden&&t._hiddenDatasets.add(i)}))}},{kind:"method",key:"shouldUpdate",value:function(t){return!this._paddingUpdateLock||1!==t.size||!t.has("paddingYAxis")}},{kind:"field",key:"_debouncedClearUpdates",value:function(){var t=this;return(0,T.s)((function(){t._paddingUpdateCount=0}),2e3,!1)}},{kind:"method",key:"willUpdate",value:function(t){var e,i,a=this;((0,m.A)(U,"willUpdate",this,3)([t]),this._paddingUpdateLock||(this._paddingYAxisInternal=this.paddingYAxis,1===t.size&&t.has("paddingYAxis")&&(this._paddingUpdateCount++,this._paddingUpdateCount>300?(this._paddingUpdateLock=!0,console.error("Detected excessive chart padding updates, possibly an infinite loop. Disabling axis padding.")):this._debouncedClearUpdates())),t.has("data"))&&(this._datasetOrder=this.data.datasets.map((function(t,e){return e})),null!==(e=this.data)&&void 0!==e&&e.datasets.some((function(t){return t.order}))&&this._datasetOrder.sort((function(t,e){return(a.data.datasets[t].order||0)-(a.data.datasets[e].order||0)})),this.externalHidden&&(this._hiddenDatasets=new Set,null!==(i=this.data)&&void 0!==i&&i.datasets&&this.data.datasets.forEach((function(t,e){t.hidden&&a._hiddenDatasets.add(e)}))));if(this.hasUpdated&&this.chart){if(t.has("plugins")||t.has("chartType"))return this._releaseCanvas(),void this._setupChart();t.has("data")&&(this._hiddenDatasets.size&&!this.externalHidden&&this.data.datasets.forEach((function(t,e){t.hidden=a._hiddenDatasets.has(e)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i,c=this;return(0,C.qy)(a||(a=(0,f.A)([" ",' <div class="animationContainer" style="','"> <div class="chartContainer" style="','"> <canvas></canvas> '," </div> </div> "])),!0===(null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t||null===(t=t.legend)||void 0===t?void 0:t.display)?(0,C.qy)(n||(n=(0,f.A)(['<div class="chartLegend"> <ul> '," </ul> </div>"])),this._datasetOrder.map((function(t){var e,i,a,n,o,s=c.data.datasets[t];return!1===(null===(e=c.extraData)||void 0===e||null===(e=e[t])||void 0===e?void 0:e.show_legend)?C.s6:(0,C.qy)(d||(d=(0,f.A)(['<li .datasetIndex="','" @click="','" class="','" .title="','"> <div class="bullet" style="','"></div> <div class="label"> '," </div> </li>"])),t,c._legendClick,(0,A.H)({hidden:c._hiddenDatasets.has(t)}),null!==(i=null===(a=c.extraData)||void 0===a||null===(a=a[t])||void 0===a?void 0:a.legend_label)&&void 0!==i?i:s.label,(0,D.W)({backgroundColor:s.backgroundColor,borderColor:s.borderColor}),null!==(n=null===(o=c.extraData)||void 0===o||null===(o=o[t])||void 0===o?void 0:o.legend_label)&&void 0!==n?n:s.label)}))):"",(0,D.W)({height:"".concat(this.height||this._chartHeight||0,"px"),overflow:this._chartHeight?"initial":"hidden"}),(0,D.W)({height:"".concat(null!==(e=null!==(i=this.height)&&void 0!==i?i:this._chartHeight)&&void 0!==e?e:this.clientWidth/2,"px"),"padding-left":"".concat(this._paddingYAxisInternal,"px"),"padding-right":0,"padding-inline-start":"".concat(this._paddingYAxisInternal,"px"),"padding-inline-end":0}),this._tooltip?(0,C.qy)(o||(o=(0,f.A)(['<div class="chartTooltip ','" style="','"> <div class="title">',"</div> "," <div> <ul> "," </ul> </div> "," </div>"])),(0,A.H)((0,g.A)({},this._tooltip.yAlign,!0)),(0,D.W)({top:this._tooltip.top,left:this._tooltip.left}),this._tooltip.title,this._tooltip.beforeBody?(0,C.qy)(s||(s=(0,f.A)(['<div class="beforeBody"> '," </div>"])),this._tooltip.beforeBody):"",this._tooltip.body.map((function(t,e){return(0,C.qy)(r||(r=(0,f.A)(['<li> <div class="bullet" style="','"></div> '," </li>"])),(0,D.W)({backgroundColor:c._tooltip.labelColors[e].backgroundColor,borderColor:c._tooltip.labelColors[e].borderColor}),t.lines.join("\n"))})),this._tooltip.footer.length?(0,C.qy)(l||(l=(0,f.A)(['<div class="footer"> '," </div>"])),this._tooltip.footer.map((function(t){return(0,C.qy)(h||(h=(0,f.A)(["","<br>"])),t)}))):""):"")}},{kind:"field",key:"_loading",value:function(){return!1}},{kind:"method",key:"_setupChart",value:(x=(0,v.A)((0,p.A)().mark((function t(){var e,a,n;return(0,p.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._loading){t.next=2;break}return t.abrupt("return");case 2:return e=this.renderRoot.querySelector("canvas").getContext("2d"),this._loading=!0,t.prev=4,t.next=7,Promise.all([i.e(20288),i.e(19112),i.e(21200)]).then(i.bind(i,21200));case 7:a=t.sent.Chart,n=getComputedStyle(this),a.defaults.borderColor=n.getPropertyValue("--divider-color"),a.defaults.color=n.getPropertyValue("--secondary-text-color"),a.defaults.font.family=n.getPropertyValue("--mdc-typography-body1-font-family")||n.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new a(e,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()});case 13:return t.prev=13,this._loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[4,,13,16]])}))),function(){return x.apply(this,arguments)})},{kind:"method",key:"_createOptions",value:function(){var t,e,i,a=this;return Object.assign(Object.assign({maintainAspectRatio:!1},this.options),{},{plugins:Object.assign(Object.assign({},null===(t=this.options)||void 0===t?void 0:t.plugins),{},{tooltip:Object.assign(Object.assign({},null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e?void 0:e.tooltip),{},{enabled:!1,external:function(t){return a._handleTooltip(t)}}),legend:Object.assign(Object.assign({},null===(i=this.options)||void 0===i||null===(i=i.plugins)||void 0===i?void 0:i.legend),{},{display:!1})})})}},{kind:"method",key:"_createPlugins",value:function(){var t,e=this;return[].concat((0,u.A)(this.plugins||[]),[{id:"resizeHook",resize:function(t){var i,a=t.height-(null!==(i=e._chartHeight)&&void 0!==i?i:0);(!e._chartHeight||a>12||a<-12)&&(e._chartHeight=t.height)},legend:Object.assign(Object.assign({},null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t?void 0:t.legend),{},{display:!1})}])}},{kind:"method",key:"_legendClick",value:function(t){if(this.chart){var e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e),this.externalHidden&&(0,O.r)(this,"dataset-hidden",{index:e})):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e),this.externalHidden&&(0,O.r)(this,"dataset-unhidden",{index:e})),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip=Object.assign(Object.assign({},t.tooltip),{},{top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,H.q)(t.tooltip.caretX,100,this.clientWidth-100-this._paddingYAxisInternal)-100+"px"}):this._tooltip=void 0}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"get",static:!0,key:"styles",value:function(){return(0,C.AH)(c||(c=(0,f.A)([":host{display:block;position:var(--chart-base-position,relative)}.animationContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4, 0, .2, 1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;width:200px;box-sizing:border-box;direction:var(--direction)}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;word-break:break-word;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;word-break:break-word;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}"])))}}]}}),C.WF)}}]);
//# sourceMappingURL=90701.k5Qk1oGeUXk.js.map