(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,n,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},16:function(e,n,t){e.exports=t(26)},21:function(e,n,t){},22:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),r=t(9),c=t.n(r),s=(t(21),t(10)),i=t.n(s),l=(t(22),t(6)),u=t.n(l),p=t(7),d=t(11),g=t(12),m=t(14),f=t(15),v=t(13),h=(t(27),v.initializeApp({apiKey:"AIzaSyDvdQzQokGNEwS_OYMSNKbZp1lzOCivm9A",authDomain:"apd-tts.firebaseapp.com",databaseURL:"https://apd-tts.firebaseio.com",projectId:"apd-tts",storageBucket:"apd-tts.appspot.com",messagingSenderId:"713127444861",appId:"1:713127444861:web:b86d2d41e2a5d336e5cc14",measurementId:"G-HE5VWR73TX"}).messaging());h.usePublicVapidKey("BAWf0uwbIbXttAI4mXq5YZjqX7tlkWN7bDkfxYM7wRYp_KcN_jtMzybVerVu_31drVA30ZKBywjjtN15WBhqgiM");var k=function(e){Object(f.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(d.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).handleClick=function(){console.log("click")},e.sendTokenToServer=function(e){console.log(1111,e)},e.setTokenSentToServer=function(e){return console.log(2222,"ERROR"),!1},e.receivedMessage=function(e){console.log("data: ",e.data),console.log("noti: ",e.notification)},e}return Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this,h.requestPermission().then(Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.getToken().then((function(e){n.sendTokenToServer(e)})).catch((function(e){console.log("An error occurred while retrieving token. ",e),console.log("Error retrieving Instance ID token. ",e),n.setTokenSentToServer(!1)}));case 2:case"end":return e.stop()}}),e)})))).catch((function(e){console.log("Unable to get permission to notify.",e)})),navigator.serviceWorker.addEventListener("message",(function(e){})),h.onMessage((function(e){return n.receivedMessage(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{className:"js-push-button",onClick:this.handleClick},"Enable Push Messages"))}}]),t}(a.a.Component);var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),a.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&navigator.serviceWorker.register("./firebase-messaging-sw.js").then((function(e){console.log("Registration successful, scope is:",e.scope),console.log(e)})).catch((function(e){console.log("Service worker registration failed, error:",e)})),c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.238d629e.chunk.js.map