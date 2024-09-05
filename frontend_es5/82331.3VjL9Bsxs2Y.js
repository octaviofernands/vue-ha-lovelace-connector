"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[82331],{47814:function(t,e,a){a.d(e,{H:function(){return n}});var i=a(33994),r=a(22858),n=(a(71499),a(95737),a(97741),a(39790),a(66457),a(99019),a(16891),a(96858),function(){var t=(0,r.A)((0,i.A)().mark((function t(e){var r,n,s,l;return(0,i.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.parentNode){t.next=2;break}throw new Error("Cannot setup Leaflet map on disconnected element");case 2:return t.next=4,a.e(44066).then(a.t.bind(a,44066,23));case 4:return(r=t.sent.default).Icon.Default.imagePath="/static/images/leaflet/images/",n=r.map(e),(s=document.createElement("link")).setAttribute("href","/static/images/leaflet/leaflet.css"),s.setAttribute("rel","stylesheet"),e.parentNode.appendChild(s),n.setView([52.3731339,4.8903147],13),l=o(r).addTo(n),t.abrupt("return",[n,r,l]);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o=function(t){return t.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}".concat(t.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})}},63861:function(t,e,a){var i,r,n,o=a(64599),s=a(35806),l=a(71008),c=a(62193),d=a(2816),u=a(27927),h=(a(81027),a(50289)),f=a(29818),p=a(55165),m=a(34897),v=(0,u.A)(null,(function(t,e){var a=function(e){function a(){var e;(0,l.A)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=(0,c.A)(this,a,[].concat(r)),t(e),e}return(0,d.A)(a,e),(0,s.A)(a)}(e);return{F:a,d:[{kind:"field",decorators:[(0,f.MZ)({attribute:"entity-id"})],key:"entityId",value:void 0},{kind:"field",decorators:[(0,f.MZ)({attribute:"entity-name"})],key:"entityName",value:void 0},{kind:"field",decorators:[(0,f.MZ)({attribute:"entity-picture"})],key:"entityPicture",value:void 0},{kind:"field",decorators:[(0,f.MZ)({attribute:"entity-color"})],key:"entityColor",value:void 0},{kind:"method",key:"render",value:function(){return(0,h.qy)(i||(i=(0,o.A)([' <div class="marker ','" style="','" @click="','"> '," </div> "])),this.entityPicture?"picture":"",(0,p.W)({"border-color":this.entityColor}),this._badgeTap,this.entityPicture?(0,h.qy)(r||(r=(0,o.A)(['<div class="entity-picture" style="','"></div>'])),(0,p.W)({"background-image":"url(".concat(this.entityPicture,")")})):this.entityName)}},{kind:"method",key:"_badgeTap",value:function(t){t.stopPropagation(),this.entityId&&(0,m.r)(this,"hass-more-info",{entityId:this.entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.AH)(n||(n=(0,o.A)([".marker{display:flex;justify-content:center;align-items:center;box-sizing:border-box;width:48px;height:48px;font-size:var(--ha-marker-font-size, 1.5em);border-radius:var(--ha-marker-border-radius,50%);border:1px solid var(--ha-marker-color,var(--primary-color));color:var(--primary-text-color);background-color:var(--card-background-color)}.marker.picture{overflow:hidden}.entity-picture{background-size:cover;height:100%;width:100%}"])))}}]}}),h.WF);customElements.define("ha-entity-marker",v)},4712:function(t,e,a){var i=a(22858).A,r=a(33994).A;a.a(t,function(){var t=i(r().mark((function t(e,i){var n,o,s,l,c,d,u,h,f,p,m,v,y,k,g,b,_,M,w,A,x,L,z,Z,P,E,I,O,B,C,S,T,F,N,H,V;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=a(64599),o=a(33994),s=a(658),l=a(22858),c=a(64782),d=a(35806),u=a(71008),h=a(62193),f=a(2816),p=a(27927),m=a(35890),a(64017),v=a(34597),y=a(81027),k=a(79243),g=a(97741),b=a(89655),_=a(50693),M=a(29193),w=a(39790),A=a(253),x=a(54846),L=a(16891),z=a(66555),Z=a(5343),P=a(50289),E=a(29818),I=a(8581),O=a(41924),B=a(47814),C=a(65459),S=a(19244),T=a(44164),a(4169),a(63861),!(F=e([v,I,O])).then){t.next=55;break}return t.next=51,F;case 51:t.t1=t.sent,t.t0=(0,t.t1)(),t.next=56;break;case 55:t.t0=F;case 56:N=t.t0,v=N[0],I=N[1],O=N[2],V=function(t){return"string"==typeof t?t:t.entity_id},(0,p.A)([(0,E.EM)("ha-map")],(function(t,e){var a,i,r=function(e){function a(){var e;(0,u.A)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=(0,h.A)(this,a,[].concat(r)),t(e),e}return(0,f.A)(a,e),(0,d.A)(a)}(e);return{F:r,d:[{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"paths",value:void 0},{kind:"field",decorators:[(0,E.MZ)({attribute:!1})],key:"layers",value:void 0},{kind:"field",decorators:[(0,E.MZ)({type:Boolean})],key:"autoFit",value:function(){return!1}},{kind:"field",decorators:[(0,E.MZ)({type:Boolean})],key:"renderPassive",value:function(){return!1}},{kind:"field",decorators:[(0,E.MZ)({type:Boolean})],key:"interactiveZones",value:function(){return!1}},{kind:"field",decorators:[(0,E.MZ)({type:Boolean})],key:"fitZones",value:function(){return!1}},{kind:"field",decorators:[(0,E.MZ)({attribute:"theme-mode",type:String})],key:"themeMode",value:function(){return"auto"}},{kind:"field",decorators:[(0,E.MZ)({type:Number})],key:"zoom",value:function(){return 14}},{kind:"field",decorators:[(0,E.wk)()],key:"_loaded",value:function(){return!1}},{kind:"field",key:"leafletMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_mapItems",value:function(){return[]}},{kind:"field",key:"_mapFocusItems",value:function(){return[]}},{kind:"field",key:"_mapZones",value:function(){return[]}},{kind:"field",key:"_mapPaths",value:function(){return[]}},{kind:"method",key:"connectedCallback",value:function(){(0,m.A)(r,"connectedCallback",this,3)([]),this._loadMap(),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,m.A)(r,"disconnectedCallback",this,3)([]),this.leafletMap&&(this.leafletMap.remove(),this.leafletMap=void 0,this.Leaflet=void 0),this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}},{kind:"method",key:"update",value:function(t){var e,a;if((0,m.A)(r,"update",this,3)([t]),this._loaded){var i=!1,n=t.get("hass");if(t.has("_loaded")||t.has("entities"))this._drawEntities(),i=!0;else if(this._loaded&&n&&this.entities){var o,s=(0,c.A)(this.entities);try{for(s.s();!(o=s.n()).done;){var l=o.value;if(n.states[V(l)]!==this.hass.states[V(l)]){this._drawEntities(),i=!0;break}}}catch(d){s.e(d)}finally{s.f()}}(t.has("_loaded")||t.has("paths"))&&this._drawPaths(),(t.has("_loaded")||t.has("layers"))&&(this._drawLayers(t.get("layers")),i=!0),(t.has("_loaded")||this.autoFit&&i)&&this.fitMap(),t.has("zoom")&&this.leafletMap.setZoom(this.zoom),(t.has("themeMode")||t.has("hass")&&(!n||(null===(e=n.themes)||void 0===e?void 0:e.darkMode)!==(null===(a=this.hass.themes)||void 0===a?void 0:a.darkMode)))&&this._updateMapStyle()}}},{kind:"get",key:"_darkMode",value:function(){return"dark"===this.themeMode||"auto"===this.themeMode&&Boolean(this.hass.themes.darkMode)}},{kind:"method",key:"_updateMapStyle",value:function(){var t=this.renderRoot.querySelector("#map");t.classList.toggle("dark",this._darkMode),t.classList.toggle("forced-dark","dark"===this.themeMode),t.classList.toggle("forced-light","light"===this.themeMode)}},{kind:"field",key:"_loading",value:function(){return!1}},{kind:"method",key:"_loadMap",value:(i=(0,l.A)((0,o.A)().mark((function t(){var e,a,i;return(0,o.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._loading){t.next=2;break}return t.abrupt("return");case 2:return(e=this.shadowRoot.getElementById("map"))||((e=document.createElement("div")).id="map",this.shadowRoot.append(e)),this._loading=!0,t.prev=5,t.next=8,(0,B.H)(e);case 8:a=t.sent,i=(0,s.A)(a,2),this.leafletMap=i[0],this.Leaflet=i[1],this._updateMapStyle(),this._loaded=!0;case 14:return t.prev=14,this._loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[5,,14,17]])}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"fitMap",value:function(t){var e,a,i;if(this.leafletMap&&this.Leaflet&&this.hass)if(this._mapFocusItems.length||null!==(e=this.layers)&&void 0!==e&&e.length){var r,n=this.Leaflet.latLngBounds(this._mapFocusItems?this._mapFocusItems.map((function(t){return t.getLatLng()})):[]);if(this.fitZones)null===(r=this._mapZones)||void 0===r||r.forEach((function(t){n.extend("getBounds"in t?t.getBounds():t.getLatLng())}));null===(a=this.layers)||void 0===a||a.forEach((function(t){n.extend("getBounds"in t?t.getBounds():t.getLatLng())})),n=n.pad(null!==(i=null==t?void 0:t.pad)&&void 0!==i?i:.5),this.leafletMap.fitBounds(n,{maxZoom:(null==t?void 0:t.zoom)||this.zoom})}else this.leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),(null==t?void 0:t.zoom)||this.zoom)}},{kind:"method",key:"fitBounds",value:function(t,e){var a;if(this.leafletMap&&this.Leaflet&&this.hass){var i=this.Leaflet.latLngBounds(t).pad(null!==(a=null==e?void 0:e.pad)&&void 0!==a?a:.5);this.leafletMap.fitBounds(i,{maxZoom:(null==e?void 0:e.zoom)||this.zoom})}}},{kind:"method",key:"_drawLayers",value:function(t){if(t&&t.forEach((function(t){return t.remove()})),this.layers){var e=this.leafletMap;this.layers.forEach((function(t){e.addLayer(t)}))}}},{kind:"method",key:"_computePathTooltip",value:function(t,e){var a;return a=t.fullDatetime?(0,I.r6)(e.timestamp,this.hass.locale,this.hass.config):(0,Z.c)(e.timestamp)?(0,O.ie)(e.timestamp,this.hass.locale,this.hass.config):(0,O.Xs)(e.timestamp,this.hass.locale,this.hass.config),"".concat(t.name,"<br>").concat(a)}},{kind:"method",key:"_drawPaths",value:function(){var t=this,e=this.hass,a=this.leafletMap,i=this.Leaflet;if(e&&a&&i&&(this._mapPaths.length&&(this._mapPaths.forEach((function(t){return t.remove()})),this._mapPaths=[]),this.paths)){var r=getComputedStyle(this).getPropertyValue("--dark-primary-color");this.paths.forEach((function(e){var n,o;e.gradualOpacity&&(n=e.gradualOpacity/(e.points.length-2),o=1-e.gradualOpacity);for(var s=0;s<e.points.length-1;s++){var l=e.gradualOpacity?o+s*n:void 0;t._mapPaths.push(i.circleMarker(e.points[s].point,{radius:T.C?8:3,color:e.color||r,opacity:l,fillOpacity:l,interactive:!0}).bindTooltip(t._computePathTooltip(e,e.points[s]),{direction:"top"})),t._mapPaths.push(i.polyline([e.points[s].point,e.points[s+1].point],{color:e.color||r,opacity:l,interactive:!1}))}var c=e.points.length-1;if(c>=0){var d=e.gradualOpacity?o+c*n:void 0;t._mapPaths.push(i.circleMarker(e.points[c].point,{radius:T.C?8:3,color:e.color||r,opacity:d,fillOpacity:d,interactive:!0}).bindTooltip(t._computePathTooltip(e,e.points[c]),{direction:"top"}))}t._mapPaths.forEach((function(t){return a.addLayer(t)}))}))}}},{kind:"method",key:"_drawEntities",value:function(){var t=this.hass,e=this.leafletMap,a=this.Leaflet;if(t&&e&&a&&(this._mapItems.length&&(this._mapItems.forEach((function(t){return t.remove()})),this._mapItems=[],this._mapFocusItems=[]),this._mapZones.length&&(this._mapZones.forEach((function(t){return t.remove()})),this._mapZones=[]),this.entities)){var i,r=getComputedStyle(this),n=r.getPropertyValue("--accent-color"),o=r.getPropertyValue("--secondary-text-color"),s=r.getPropertyValue("--dark-primary-color"),l=this._darkMode?"dark":"light",d=(0,c.A)(this.entities);try{for(d.s();!(i=d.n()).done;){var u=i.value,h=t.states[V(u)];if(h){var f="string"!=typeof u?u.name:void 0,p=null!=f?f:(0,S.u)(h),m=h.attributes,v=m.latitude,y=m.longitude,k=m.passive,g=m.icon,b=m.radius,_=m.entity_picture,M=m.gps_accuracy;if(v&&y)if("zone"!==(0,C.t)(h)){var w="string"!=typeof u&&"state"===u.label_mode?this.hass.formatEntityState(h):null!=f?f:p.split(" ").map((function(t){return t[0]})).join("").substr(0,3),A=a.marker([v,y],{icon:a.divIcon({html:'\n              <ha-entity-marker\n                entity-id="'.concat(V(u),'"\n                entity-name="').concat(w,'"\n                entity-picture="').concat(_?this.hass.hassUrl(_):"",'"\n                ').concat("string"!=typeof u?'entity-color="'.concat(u.color,'"'):"","\n              ></ha-entity-marker>\n            "),iconSize:[48,48],className:""}),title:p});this._mapItems.push(A),"string"!=typeof u&&!1===u.focus||this._mapFocusItems.push(A),M&&this._mapItems.push(a.circle([v,y],{interactive:!1,color:s,radius:M}))}else{if(k&&!this.renderPassive)continue;var x="";if(g){var L=document.createElement("ha-icon");L.setAttribute("icon",g),x=L.outerHTML}else{var z=document.createElement("span");z.innerHTML=p,x=z.outerHTML}this._mapZones.push(a.marker([v,y],{icon:a.divIcon({html:x,iconSize:[24,24],className:l}),interactive:this.interactiveZones,title:p})),this._mapZones.push(a.circle([v,y],{interactive:!1,color:k?o:n,radius:b}))}}}}catch(Z){d.e(Z)}finally{d.f()}this._mapItems.forEach((function(t){return e.addLayer(t)})),this._mapZones.forEach((function(t){return e.addLayer(t)}))}}},{kind:"method",key:"_attachObserver",value:(a=(0,l.A)((0,o.A)().mark((function t(){var e=this;return(0,o.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this._resizeObserver||(this._resizeObserver=new ResizeObserver((function(){var t;null===(t=e.leafletMap)||void 0===t||t.invalidateSize({debounceMoveend:!0})}))),this._resizeObserver.observe(this);case 2:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return(0,P.AH)(H||(H=(0,n.A)([":host{display:block;height:300px}#map{height:100%}#map.dark{background:#090909}#map.forced-dark{color:#fff;--map-filter:invert(0.9) hue-rotate(170deg) brightness(1.5) contrast(1.2) saturate(0.3)}#map.forced-light{background:#fff;color:#000;--map-filter:invert(0)}#map:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.leaflet-tile-pane{filter:var(--map-filter)}.dark .leaflet-bar a{background-color:#1c1c1c;color:#fff}.dark .leaflet-bar a:hover{background-color:#313131}.leaflet-marker-draggable{cursor:move!important}.leaflet-edit-resize{border-radius:50%;cursor:nesw-resize!important}.named-icon{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--primary-text-color)}.leaflet-pane{z-index:0!important}.leaflet-bottom,.leaflet-control,.leaflet-top{z-index:1!important}.leaflet-tooltip{padding:8px;font-size:90%;background:rgba(80,80,80,.9)!important;color:#fff!important;border-radius:4px;box-shadow:none!important;text-align:center}"])))}}]}}),P.mN),i(),t.next=68;break;case 65:t.prev=65,t.t2=t.catch(0),i(t.t2);case 68:case"end":return t.stop()}}),t,null,[[0,65]])})));return function(e,a){return t.apply(this,arguments)}}())},5343:function(t,e,a){a.d(e,{c:function(){return o}});var i=a(59613);function r(t){return(0,i.w)(t,Date.now())}var n=a(9854);function o(t){return(0,n.r)(t,r(t))}}}]);
//# sourceMappingURL=82331.3VjL9Bsxs2Y.js.map