webpackJsonp([3],{"+nwc":function(e,t){},0:function(e,t,n){e.exports=n("nplA")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3Puz":function(e,t){},4:function(e,t){},"4Th3":function(e,t){},JsEP:function(e,t){},MGDR:function(e,t,n){e.exports=n.p+"img/trackit.4dbf2ed.png"},N12Q:function(e,t){},R58i:function(e,t){},nplA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),o=n.n(i),a=(n("30VO"),n("/5sW")),s=n("7109");a.default.use(s.W,{components:{QLayout:s.t,QLayoutDrawer:s.u,QPageContainer:s.A,QPage:s.z,QToolbar:s.N,QToolbarTitle:s.O,QBtn:s.g,QIcon:s.m,QList:s.v,QListHeader:s.w,QItem:s.o,QItemMain:s.p,QItemSide:s.q,QItemTile:s.r,QTooltip:s.P,QResizeObservable:s.E,QModal:s.x,QSelect:s.G,QInput:s.n,QKnob:s.s,QCheckbox:s.h,QModalLayout:s.y,QAlert:s.f,QTabs:s.L,QTab:s.J,QTabPane:s.K,QToggle:s.M,QPopover:s.B,QProgress:s.C,QSpinnerGears:s.I,QWindowResizeObservable:s.Q,QDatetime:s.k,QSearch:s.F,QSlider:s.H,QField:s.l,QRange:s.D,QChip:s.i,QColorPicker:s.j},directives:{TouchPan:s.S,TouchHold:s.R},plugins:{Notify:s.e,Loading:s.c,LocalStorage:s.d,Cookies:s.a,Dialog:s.b}});n("L4dm"),n("hAPP"),n("59Iv"),n("3Puz"),n("N12Q");var r={name:"offline",data:function(){return{intervalId:0}},created:function(){var e=this;this.intervalId=setInterval(function(){e.$store.dispatch("checkConnection")},5e3)}},c=n("XyMi");var u=function(e){n("4Th3")},l={name:"App",components:{Offline:Object(c.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.state.offline||e.$store.state.socketOffline?n("div",{staticClass:"offline-page window-height window-width bg-light column items-center no-wrap"},[n("div",{staticClass:"offline-back"},[n("div",{staticClass:"offline-code"}),e._v(" "),n("div",{staticClass:"offline-line"},e._l(Array(20),function(t){return n("span",{key:t},[e._v("offline")])}))])]):e._e()},[],!1,u,null,null).exports}};var f=function(e){n("tHqv")},d=Object(c.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view"),this._v(" "),t("offline",{attrs:{logo:"../statics/trackit.png"}})],1)},[],!1,f,null,null).exports,p=n("/ocq"),v=[{path:"/",component:function(){return n.e(0).then(n.bind(null,"yoYR"))},children:[{path:"devices/:devices",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}}]},{path:"/login",component:function(){return n.e(1).then(n.bind(null,"P7ry"))}},{path:"/login/:token",component:function(){return n.e(1).then(n.bind(null,"P7ry"))}},{path:"/login/:token/devices/:devices",component:function(){return n.e(0).then(n.bind(null,"yoYR"))}},{path:"*",component:function(){return n.e(2).then(n.bind(null,"c5Mg"))}}];a.default.use(p.a);var h,g,m,k,D,w=new p.a({mode:"hash",base:"/",scrollBehavior:function(){return{y:0}},routes:v}),b=n("NYxO"),Q=n("Gu7T"),I=n.n(Q),y=n("Xxa5"),x=n.n(y),T=n("exGp"),P=n.n(T),O=(h=P()(x.a.mark(function e(t){var n,i=this,o=t.state,s=t.commit;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s("reqStart"),e.prev=1,!o.token){e.next=7;break}return e.next=5,a.default.connector.poolDevices(function(e){s("setDevices",e)},function(e,t){s("updateDevices",{type:e,device:t})});case 5:return n=e.sent,e.abrupt("return",P()(x.a.mark(function e(){return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.default.connector.poolDevicesStop(n);case 2:case"end":return e.stop()}},e,i)})));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s("reqFailed",e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])})),function(e){return h.apply(this,arguments)}),C=(g=P()(x.a.mark(function e(t,n){t.state;var i,o,s=t.commit,r=n.data,c=n.id;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s("reqStart"),e.prev=1,e.next=4,a.default.connector.gw.postDevicesMessages(c,r);case 4:i=e.sent,(o=i.data).errors&&o.errors.forEach(function(e){s("addError",e.reason)}),s("reqSuccessful",{type:"postMessage",payload:o}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),s("reqFailed",e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])})),function(e,t){return g.apply(this,arguments)}),L=(m=P()(x.a.mark(function e(t){var n=t.state,i=t.commit;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.default.connector.http.external.get("./statics/icons/favicon-16x16.png?_="+(new Date).getTime());case 3:200===e.sent.status&&n.offline&&i("setOfflineFlag",!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n.offline||i("setOfflineFlag",!0);case 11:case"end":return e.stop()}},e,this,[[0,7]])})),function(e){return m.apply(this,arguments)}),M=(k=P()(x.a.mark(function e(t,n){var i,o,s,r,c=t.commit,u=t.state;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=n||u.activeDevicesID.join(","))){e.next=11;break}return e.next=4,a.default.connector.gw.getDevices(i,{fields:"id,telemetry"});case 4:return o=e.sent,(s=o.data).errors&&C.errors.forEach(function(e){c("addError",e.reason)}),r=Math.max.apply(Math,I()(s.result.reduce(function(e,t){return e.push(t.telemetry&&t.telemetry["position.latitude"]?Math.floor(1e3*t.telemetry["position.latitude"].ts):0),e.push(t.telemetry&&t.telemetry["position.longitude"]?Math.floor(1e3*t.telemetry["position.longitude"].ts):0),e},[]))),e.abrupt("return",r-r%864e5);case 11:return e.abrupt("return",Date.now());case 12:case"end":return e.stop()}},e,this)})),function(e,t){return k.apply(this,arguments)}),S=(D=P()(x.a.mark(function e(t){var n,i,o=t.commit;t.state;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.default.connector.http.auth.oauth.providers.get();case 3:n=e.sent,(i=n.data.result[0]).email="https://flespi.io/#/login/",o("setLoginProviders",i),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),o("reqFailed",e.t0);case 13:case"end":return e.stop()}},e,this,[[0,9]])})),function(e){return D.apply(this,arguments)}),F={poolDevices:O,postMessage:C,checkConnection:L,getLastUpdatePosition:M,getLoginProviders:S},q=n("woOf"),A=n.n(q),E=n("mvHQ"),_=n.n(E);function N(e,t){a.default.set(e,"offline",t)}function R(e){var t=s.a.get("X-Flespi-Token"),n=s.d.get.item("X-Flespi-Token");t&&n&&t===n&&s.a.remove("X-Flespi-Token"),s.d.remove("X-Flespi-Token"),a.default.connector.token="",a.default.set(e,"token","")}function X(e,t){e.hasDevicesInit&&!e.devices.filter(function(e){return e.id===t})[0].messages_ttl||(e.activeDevicesID.push(t),s.d.set("TrackIt Active Devices",e.activeDevicesID),e.hasDevicesInit&&w.push("/devices/"+e.activeDevicesID.join(",")))}function j(e,t){var n=e.activeDevicesID.indexOf(t);e.activeDevicesID.splice(n,1),s.d.set("TrackIt Active Devices",e.activeDevicesID),e.activeDevicesID.length?w.push("/devices/"+e.activeDevicesID.join(",")):w.push("/")}function z(e){e.hasDevicesInit=!0}function G(e){e.hasDevicesInit=!1,a.default.set(e,"devices",[]),a.default.set(e,"activeDevicesID",[])}function H(e,t){s.e.create({type:"negative",icon:"warning",message:""+t,timeout:1e3}),e.newNotificationCounter++,e.errors.push(t)}var $={reqStart:function(e){},reqSuccessful:function(e,t){var n=t.type,i=t.payload.result;switch(n){case"postMessage":s.e.create({message:"Post message to devices with IDs "+i+" success",type:"positive",icon:"alarm_add",timeout:2500,bgColor:"white"});break;default:_()(e[n])!==_()(i)&&a.default.set(e,n,i)}},reqFailed:function(e,t){if(t.response&&t.response.status)switch(t.response.status){case 0:N(e,!0),G(e),a.default.set(e,"token","");break;case 401:R(e);break;default:t.response.data&&t.response.data.errors&&t.response.data.errors.length&&t.response.data.errors.forEach(function(t){H(e,t.reason)})}else H(e,t.message)},setToken:function(e,t){var n=t.replace("FlespiToken ","");t&&n.match(/^[a-z0-9]+$/i)?(a.default.connector.token="FlespiToken "+n,s.d.set("X-Flespi-Token",n)):(n="",a.default.connector.token="",R(e)),a.default.set(e,"token",n)},clearToken:R,setActiveDevice:X,unsetActiveDevice:j,setDevicesInit:z,unsetDevicesInit:G,setOfflineFlag:N,updateDevices:function(e,t){switch(t.type){case"created":e.devices.push(t.device);break;case"updated":e.devices.some(function(n,i){return n.id===t.device.id&&(e.devices[i]=A()(e.devices[i],t.device),!0)});break;case"deleted":e.devices.some(function(n,i){return n.id===t.device.id&&(e.devices.splice(i,1),!0)})}},setDevices:function(e,t){if(_()(e.devices)!==_()(t.data.result)&&a.default.set(e,"devices",t.data.result),!e.hasDevicesInit)if(e.activeDevicesID.length)e.activeDevicesID.forEach(function(n){t.data.result.filter(function(e){return e.id===n}).length||j(e,n)}),z(e);else{z(e);var n=s.d.get.item("TrackIt Active Devices");n&&n.length&&n.forEach(function(n){t.data.result.filter(function(e){return e.id===n}).length&&X(e,n)})}},setSocketOffline:function(e,t){a.default.set(e,"socketOffline",t)},clearNotificationCounter:function(e){e.newNotificationCounter=0},addError:H,setLoginProviders:function(e,t){a.default.set(e,"providers",t)}},V={messages:{namespaced:!0}};a.default.use(b.a);var Y=new b.a.Store({state:{providers:{},token:"",devices:[],activeDevicesID:[],hasDevicesInit:!1,offline:!1,socketOffline:!1,isLoading:!1,newNotificationCounter:0,errors:[]},actions:F,mutations:$,getters:{},modules:V}),B=n("TXmL"),J={en:{failed:"Action failed",success:"Action was successful"}},W=n("LarL"),K=n.n(W),U={socketConfig:{clientId:"trackit-"+Math.random().toString(16).substr(2,8)}};-1===window.location.host.indexOf("localhost:9004")&&-1===window.location.host.indexOf("localhost:9005")&&-1===window.location.host.indexOf("localhost:7004")||(U={httpConfig:{server:"https://localhost",port:9005},socketConfig:{server:"wss://localhost:9017",clientId:"trackit-dev-"+Math.random().toString(16).substr(2,8)}});var Z=n("wvfG"),ee=n.n(Z),te=n("v5o6"),ne=n.n(te);a.default.config.productionTip=!1;var ie=o()({el:"#q-app",router:w,store:Y},d),oe=[];oe.push(function(e){var t=e.app;e.Vue.use(B.a),t.i18n=new B.a({locale:"en",fallbackLocale:"en",messages:J})}),oe.push(function(e){var t=e.Vue;t.config.productionTip=!1,t.use(K.a,U)}),oe.push(function(e){e.Vue.use(ee.a)}),oe.forEach(function(e){return e({app:ie,router:w,store:Y,Vue:a.default})}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){ne.a.attach(document.body)},!1),new a.default(ie)},tHqv:function(e,t){}},[0]);