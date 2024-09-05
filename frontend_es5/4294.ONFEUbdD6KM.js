"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4294],{23469:function(a,t,e){e.d(t,{g:function(){return s}});e(79641);var l=e(45253),c=e(92164);function s(a,t,e,s,d,r){var o=a.getPropertyValue(d+"-"+r).trim(),_=o.length>0?o:a.getPropertyValue(d).trim(),n=(0,l.RQ)(_);return 0===o.length&&r&&(n=(0,l.v2)((0,l.BE)(t?(0,c.T)((0,l.Nc)((0,l.xp)(n)),r):(0,c.d)((0,l.Nc)((0,l.xp)(n)),r)))),s?n+=e?"32":"7F":e&&(n+="7F"),n}},4294:function(a,t,e){var l=e(22858).A,c=e(33994).A;e.a(a,function(){var a=l(c().mark((function a(l,s){var d,r,o,_,n,i,m,u,h,y,b,g,v,f,p,k,A,q,w,V,Z,M,C,$,W,j,x,z,O,H,I,Q,E,S,F,P,T,B,N,R,J,K,U,D,G,L,X,Y,aa,ta,ea,la,ca,sa,da,ra,oa,_a,na,ia,ma,ua,ha,ya,ba,ga,va,fa,pa,ka,Aa,qa,wa,Va,Za,Ma,Ca,$a,Wa,ja,xa,za,Oa,Ha,Ia,Qa,Ea;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,e.r(t),e.d(t,{HuiEnergySourcesTableCard:function(){return Ea}}),d=e(64599),r=e(35806),o=e(71008),_=e(62193),n=e(2816),i=e(27927),m=e(81027),u=e(13025),h=e(97741),y=e(39790),b=e(253),g=e(2075),v=e(16891),f=e(4525),p=e(68560),k=e(50289),A=e(29818),q=e(85323),w=e(55165),V=e(57636),Z=e(23469),e(13082),M=e(47076),C=e(4826),$=e(20712),W=e(7934),j=e(34897),!(x=l([V,M])).then){a.next=46;break}return a.next=42,x;case 42:a.t1=a.sent,a.t0=(0,a.t1)(),a.next=47;break;case 46:a.t0=x;case 47:z=a.t0,V=z[0],M=z[1],Qa={grid_return:"--energy-grid-return-color",grid_consumption:"--energy-grid-consumption-color",battery_in:"--energy-battery-in-color",battery_out:"--energy-battery-out-color",solar:"--energy-solar-color",gas:"--energy-gas-color",water:"--energy-water-color"},Ea=(0,i.A)([(0,A.EM)("hui-energy-sources-table-card")],(function(a,t){var e=function(t){function e(){var t;(0,o.A)(this,e);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return t=(0,_.A)(this,e,[].concat(c)),a(t),t}return(0,n.A)(e,t),(0,r.A)(e)}(t);return{F:e,d:[{kind:"field",decorators:[(0,A.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,A.wk)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,A.wk)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var a,t=this;return[(0,M.tb)(this.hass,{key:null===(a=this._config)||void 0===a?void 0:a.collection_key}).subscribe((function(a){t._data=a}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(a){this._config=a}},{kind:"method",key:"shouldUpdate",value:function(a){return(0,W.xP)(this,a)||a.size>1||!a.has("hass")}},{kind:"method",key:"render",value:function(){var a,t,e,l,c,s,r,o,_,n,i,m=this;if(!this.hass||!this._config)return k.s6;if(!this._data)return(0,k.qy)(O||(O=(0,d.A)(["",""])),this.hass.localize("ui.panel.lovelace.cards.energy.loading"));var u=0,h=0,y=0,b=0,g=0,v=0,f=0,p=0,A=!1,$=!1,W=!1,j=0,x=0,z=0,Ia=0,Ea=0,Sa=0,Fa=0,Pa=0,Ta=(0,M.E$)(this._data.prefs),Ba=getComputedStyle(this),Na=(null===(a=Ta.grid)||void 0===a?void 0:a[0].flow_from.some((function(a){return a.stat_cost||a.entity_energy_price||a.number_energy_price})))||(null===(t=Ta.grid)||void 0===t?void 0:t[0].flow_to.some((function(a){return a.stat_compensation||a.entity_energy_price||a.number_energy_price})))||(null===(e=Ta.gas)||void 0===e?void 0:e.some((function(a){return a.stat_cost||a.entity_energy_price||a.number_energy_price})))||(null===(l=Ta.water)||void 0===l?void 0:l.some((function(a){return a.stat_cost||a.entity_energy_price||a.number_energy_price}))),Ra=(0,M.KJ)(this.hass,this._data.prefs,this._data.statsMetadata)||"",Ja=(0,M.yM)(this.hass)||"m³",Ka=void 0!==this._data.statsCompare;return(0,k.qy)(H||(H=(0,d.A)([" <ha-card> ",' <div class="mdc-data-table"> <div class="mdc-data-table__table-container"> <table class="mdc-data-table__table" aria-label="Energy sources"> <thead> <tr class="mdc-data-table__header-row"> <th class="mdc-data-table__header-cell"></th> <th class="mdc-data-table__header-cell" role="columnheader" scope="col"> '," </th> ",' <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col"> '," </th> ",' </tr> </thead> <tbody class="mdc-data-table__content"> '," "," "," "," "," "," "," "," "," "," "," </tbody> </table> </div> </div> </ha-card>"])),this._config.title?(0,k.qy)(I||(I=(0,d.A)(['<h1 class="card-header">',"</h1>"])),this._config.title):"",this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.source"),Ka?(0,k.qy)(Q||(Q=(0,d.A)(['<th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col"> '," </th> ",""])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_energy"),Na?(0,k.qy)(E||(E=(0,d.A)(['<th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col"> '," </th>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.previous_cost")):""):"",this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.energy"),Na?(0,k.qy)(S||(S=(0,d.A)([' <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col"> '," </th>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.cost")):"",null===(c=Ta.solar)||void 0===c?void 0:c.map((function(a,t){var e,l=(0,C.$j)(m._data.stats[a.stat_energy_from])||0;y+=l;var c=Ka&&(0,C.$j)(m._data.statsCompare[a.stat_energy_from])||0;return z+=c,(0,k.qy)(F||(F=(0,d.A)(['<tr class="mdc-data-table__row ','" @click="','" .entity="','"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="','"></div> </td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> "," </tr>"])),(0,q.H)({clickable:!(0,C.OQ)(a.stat_energy_from)}),m._handleMoreInfo,a.stat_energy_from,(0,w.W)({borderColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!1,!1,Qa.solar,t),backgroundColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!0,!1,Qa.solar,t)}),(0,C.$O)(m.hass,a.stat_energy_from,null===(e=m._data)||void 0===e?void 0:e.statsMetadata[a.stat_energy_from]),Ka?(0,k.qy)(P||(P=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> ",""])),(0,V.ZV)(c,m.hass.locale),Na?(0,k.qy)(T||(T=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):""):"",(0,V.ZV)(l,m.hass.locale),Na?(0,k.qy)(B||(B=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):"")})),Ta.solar?(0,k.qy)(N||(N=(0,d.A)(['<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> "," </tr>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.solar_total"),Ka?(0,k.qy)(R||(R=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> ",""])),(0,V.ZV)(z,this.hass.locale),Na?(0,k.qy)(J||(J=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):""):"",(0,V.ZV)(y,this.hass.locale),Na?(0,k.qy)(K||(K=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):""):"",null===(s=Ta.battery)||void 0===s?void 0:s.map((function(a,t){var e,l,c=(0,C.$j)(m._data.stats[a.stat_energy_from])||0,s=(0,C.$j)(m._data.stats[a.stat_energy_to])||0;b+=c-s;var r=Ka&&(0,C.$j)(m._data.statsCompare[a.stat_energy_from])||0,o=Ka&&(0,C.$j)(m._data.statsCompare[a.stat_energy_to])||0;return Ia+=r-o,(0,k.qy)(U||(U=(0,d.A)(['<tr class="mdc-data-table__row ','" @click="','" .entity="','"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="','"></div> </td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> ",' </tr> <tr class="mdc-data-table__row ','" @click="','" .entity="','"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="','"></div> </td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> "," </tr>"])),(0,q.H)({clickable:!(0,C.OQ)(a.stat_energy_from)}),m._handleMoreInfo,a.stat_energy_from,(0,w.W)({borderColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!1,!1,Qa.battery_out,t),backgroundColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!0,!1,Qa.battery_out,t)}),(0,C.$O)(m.hass,a.stat_energy_from,null===(e=m._data)||void 0===e?void 0:e.statsMetadata[a.stat_energy_from]),Ka?(0,k.qy)(D||(D=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> ",""])),(0,V.ZV)(r,m.hass.locale),Na?(0,k.qy)(G||(G=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):""):"",(0,V.ZV)(c,m.hass.locale),Na?(0,k.qy)(L||(L=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):"",(0,q.H)({clickable:!(0,C.OQ)(a.stat_energy_to)}),m._handleMoreInfo,a.stat_energy_to,(0,w.W)({borderColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!1,!1,Qa.battery_in,t),backgroundColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!0,!1,Qa.battery_in,t)}),(0,C.$O)(m.hass,a.stat_energy_to,null===(l=m._data)||void 0===l?void 0:l.statsMetadata[a.stat_energy_to]),Ka?(0,k.qy)(X||(X=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> ",""])),(0,V.ZV)(-1*o,m.hass.locale),Na?(0,k.qy)(Y||(Y=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):""):"",(0,V.ZV)(-1*s,m.hass.locale),Na?(0,k.qy)(aa||(aa=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):"")})),Ta.battery?(0,k.qy)(ta||(ta=(0,d.A)(['<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> "," </tr>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.battery_total"),Ka?(0,k.qy)(ea||(ea=(0,d.A)([' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> ",""])),(0,V.ZV)(Ia,this.hass.locale),Na?(0,k.qy)(la||(la=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):""):"",(0,V.ZV)(b,this.hass.locale),Na?(0,k.qy)(ca||(ca=(0,d.A)(['<td class="mdc-data-table__cell"></td>']))):""):"",null===(r=Ta.grid)||void 0===r?void 0:r.map((function(a){return(0,k.qy)(sa||(sa=(0,d.A)([""," ",""])),a.flow_from.map((function(a,t){var e,l=(0,C.$j)(m._data.stats[a.stat_energy_from])||0;u+=l;var c=Ka&&(0,C.$j)(m._data.statsCompare[a.stat_energy_from])||0;j+=c;var s=a.stat_cost||m._data.info.cost_sensors[a.stat_energy_from],r=s?(0,C.$j)(m._data.stats[s])||0:null;null!==r&&(A=!0,h+=r);var o=Ka&&s?(0,C.$j)(m._data.statsCompare[s])||0:null;return null!==o&&(x+=o),(0,k.qy)(da||(da=(0,d.A)(['<tr class="mdc-data-table__row ','" @click="','" .entity="','"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="','"></div> </td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> "," </tr>"])),(0,q.H)({clickable:!(0,C.OQ)(a.stat_energy_from)}),m._handleMoreInfo,a.stat_energy_from,(0,w.W)({borderColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!1,!1,Qa.grid_consumption,t),backgroundColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!0,!1,Qa.grid_consumption,t)}),(0,C.$O)(m.hass,a.stat_energy_from,null===(e=m._data)||void 0===e?void 0:e.statsMetadata[a.stat_energy_from]),Ka?(0,k.qy)(ra||(ra=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> ",""])),(0,V.ZV)(c,m.hass.locale),Na?(0,k.qy)(oa||(oa=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),null!==o?(0,V.ZV)(o,m.hass.locale,{style:"currency",currency:m.hass.config.currency}):""):""):"",(0,V.ZV)(l,m.hass.locale),Na?(0,k.qy)(_a||(_a=(0,d.A)([' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),null!==r?(0,V.ZV)(r,m.hass.locale,{style:"currency",currency:m.hass.config.currency}):""):"")})),a.flow_to.map((function(a,t){var e,l=-1*((0,C.$j)(m._data.stats[a.stat_energy_to])||0);u+=l;var c=a.stat_compensation||m._data.info.cost_sensors[a.stat_energy_to],s=c?-1*((0,C.$j)(m._data.stats[c])||0):null;null!==s&&(A=!0,h+=s);var r=-1*(Ka&&(0,C.$j)(m._data.statsCompare[a.stat_energy_to])||0);j+=r;var o=Ka&&c?-1*((0,C.$j)(m._data.statsCompare[c])||0):null;return null!==o&&(x+=o),(0,k.qy)(na||(na=(0,d.A)(['<tr class="mdc-data-table__row ','" @click="','" .entity="','"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="','"></div> </td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> "," </tr>"])),(0,q.H)({clickable:!(0,C.OQ)(a.stat_energy_to)}),m._handleMoreInfo,a.stat_energy_to,(0,w.W)({borderColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!1,!1,Qa.grid_return,t),backgroundColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!0,!1,Qa.grid_return,t)}),(0,C.$O)(m.hass,a.stat_energy_to,null===(e=m._data)||void 0===e?void 0:e.statsMetadata[a.stat_energy_to]),Ka?(0,k.qy)(ia||(ia=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> ",""])),(0,V.ZV)(r,m.hass.locale),Na?(0,k.qy)(ma||(ma=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),null!==o?(0,V.ZV)(o,m.hass.locale,{style:"currency",currency:m.hass.config.currency}):""):""):"",(0,V.ZV)(l,m.hass.locale),Na?(0,k.qy)(ua||(ua=(0,d.A)([' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),null!==s?(0,V.ZV)(s,m.hass.locale,{style:"currency",currency:m.hass.config.currency}):""):"")})))})),Ta.grid&&(null!==(o=Ta.grid)&&void 0!==o&&null!==(o=o[0].flow_from)&&void 0!==o&&o.length||null!==(_=Ta.grid)&&void 0!==_&&null!==(_=_[0].flow_to)&&void 0!==_&&_.length)?(0,k.qy)(ha||(ha=(0,d.A)([' <tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> "," </tr>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.grid_total"),Ka?(0,k.qy)(ya||(ya=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," kWh </td> ",""])),(0,V.ZV)(j,this.hass.locale),Na?(0,k.qy)(ba||(ba=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),A?(0,V.ZV)(x,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,V.ZV)(u,this.hass.locale),Na?(0,k.qy)(ga||(ga=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),A?(0,V.ZV)(h,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",null===(n=Ta.gas)||void 0===n?void 0:n.map((function(a,t){var e,l=(0,C.$j)(m._data.stats[a.stat_energy_from])||0;g+=l;var c=Ka&&(0,C.$j)(m._data.statsCompare[a.stat_energy_from])||0;Ea+=c;var s=a.stat_cost||m._data.info.cost_sensors[a.stat_energy_from],r=s?(0,C.$j)(m._data.stats[s])||0:null;null!==r&&($=!0,v+=r);var o=Ka&&s?(0,C.$j)(m._data.statsCompare[s])||0:null;return null!==o&&(Sa+=o),(0,k.qy)(va||(va=(0,d.A)(['<tr class="mdc-data-table__row ','" @click="','" .entity="','"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="','"></div> </td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," "," </td> "," </tr>"])),(0,q.H)({clickable:!(0,C.OQ)(a.stat_energy_from)}),m._handleMoreInfo,a.stat_energy_from,(0,w.W)({borderColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!1,!1,Qa.gas,t),backgroundColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!0,!1,Qa.gas,t)}),(0,C.$O)(m.hass,a.stat_energy_from,null===(e=m._data)||void 0===e?void 0:e.statsMetadata[a.stat_energy_from]),Ka?(0,k.qy)(fa||(fa=(0,d.A)([' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," "," </td> ",""])),(0,V.ZV)(c,m.hass.locale),Ra,Na?(0,k.qy)(pa||(pa=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),null!==o?(0,V.ZV)(o,m.hass.locale,{style:"currency",currency:m.hass.config.currency}):""):""):"",(0,V.ZV)(l,m.hass.locale),Ra,Na?(0,k.qy)(ka||(ka=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),null!==r?(0,V.ZV)(r,m.hass.locale,{style:"currency",currency:m.hass.config.currency}):""):"")})),Ta.gas?(0,k.qy)(Aa||(Aa=(0,d.A)(['<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," "," </td> "," </tr>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.gas_total"),Ka?(0,k.qy)(qa||(qa=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," "," </td> ",""])),(0,V.ZV)(Ea,this.hass.locale),Ra,Na?(0,k.qy)(wa||(wa=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),$?(0,V.ZV)(Sa,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,V.ZV)(g,this.hass.locale),Ra,Na?(0,k.qy)(Va||(Va=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),$?(0,V.ZV)(v,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",null===(i=Ta.water)||void 0===i?void 0:i.map((function(a,t){var e,l=(0,C.$j)(m._data.stats[a.stat_energy_from])||0;f+=l;var c=Ka&&(0,C.$j)(m._data.statsCompare[a.stat_energy_from])||0;Fa+=c;var s=a.stat_cost||m._data.info.cost_sensors[a.stat_energy_from],r=s?(0,C.$j)(m._data.stats[s])||0:null;null!==r&&(W=!0,p+=r);var o=Ka&&s?(0,C.$j)(m._data.statsCompare[s])||0:null;return null!==o&&(Pa+=o),(0,k.qy)(Za||(Za=(0,d.A)(['<tr class="mdc-data-table__row ','" @click="','" .entity="','"> <td class="mdc-data-table__cell cell-bullet"> <div class="bullet" style="','"></div> </td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," "," </td> "," </tr>"])),(0,q.H)({clickable:!(0,C.OQ)(a.stat_energy_from)}),m._handleMoreInfo,a.stat_energy_from,(0,w.W)({borderColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!1,!1,Qa.water,t),backgroundColor:(0,Z.g)(Ba,m.hass.themes.darkMode,!0,!1,Qa.water,t)}),(0,C.$O)(m.hass,a.stat_energy_from,null===(e=m._data)||void 0===e?void 0:e.statsMetadata[a.stat_energy_from]),Ka?(0,k.qy)(Ma||(Ma=(0,d.A)([' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," "," </td> ",""])),(0,V.ZV)(c,m.hass.locale),Ja,Na?(0,k.qy)(Ca||(Ca=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),null!==o?(0,V.ZV)(o,m.hass.locale,{style:"currency",currency:m.hass.config.currency}):""):""):"",(0,V.ZV)(l,m.hass.locale),Ja,Na?(0,k.qy)($a||($a=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),null!==r?(0,V.ZV)(r,m.hass.locale,{style:"currency",currency:m.hass.config.currency}):""):"")})),Ta.water?(0,k.qy)(Wa||(Wa=(0,d.A)(['<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," "," </td> "," </tr>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.water_total"),Ka?(0,k.qy)(ja||(ja=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," "," </td> ",""])),(0,V.ZV)(Fa,this.hass.locale),Ja,Na?(0,k.qy)(xa||(xa=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),W?(0,V.ZV)(Pa,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",(0,V.ZV)(f,this.hass.locale),Ja,Na?(0,k.qy)(za||(za=(0,d.A)(['<td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),W?(0,V.ZV)(p,this.hass.locale,{style:"currency",currency:this.hass.config.currency}):""):""):"",[$,W,A].filter(Boolean).length>1?(0,k.qy)(Oa||(Oa=(0,d.A)(['<tr class="mdc-data-table__row total"> <td class="mdc-data-table__cell"></td> <th class="mdc-data-table__cell" scope="row"> '," </th> ",' <td class="mdc-data-table__cell"></td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td> </tr>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_sources_table.total_costs"),Ka?(0,k.qy)(Ha||(Ha=(0,d.A)(['<td class="mdc-data-table__cell"></td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric"> '," </td>"])),(0,V.ZV)(Sa+x+Pa,this.hass.locale,{style:"currency",currency:this.hass.config.currency})):"",(0,V.ZV)(v+h+p,this.hass.locale,{style:"currency",currency:this.hass.config.currency})):"")}},{kind:"method",key:"_handleMoreInfo",value:function(a){var t,e=null===(t=a.currentTarget)||void 0===t?void 0:t.entity;e&&!(0,C.OQ)(e)&&(0,j.r)(this,"hass-more-info",{entityId:e})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,k.AH)(Ia||(Ia=(0,d.A)([""," .mdc-data-table{width:100%;border:0}.mdc-data-table__cell,.mdc-data-table__header-cell{color:var(--primary-text-color);border-bottom-color:var(--divider-color);text-align:var(--float-start)}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:rgba(var(--rgb-primary-text-color),.04)}.clickable{cursor:pointer}.total{--mdc-typography-body2-font-weight:500}.total .mdc-data-table__cell{border-top:1px solid var(--divider-color)}ha-card{height:100%;overflow:hidden}.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}.cell-bullet{width:32px;padding-right:0;padding-inline-end:0;padding-inline-start:16px;direction:var(--direction)}.bullet{border-width:1px;border-style:solid;border-radius:4px;height:16px;width:32px}.mdc-data-table__cell--numeric{direction:ltr}"])),(0,k.iz)(p))}}]}}),(0,$.E)(k.WF)),s(),a.next=58;break;case 55:a.prev=55,a.t2=a.catch(0),s(a.t2);case 58:case"end":return a.stop()}}),a,null,[[0,55]])})));return function(t,e){return a.apply(this,arguments)}}())}}]);
//# sourceMappingURL=4294.ONFEUbdD6KM.js.map