'use strict';mix_d("P13NSCCards__p13n-desktop-carousel:p13n-desktop-carousel__EfamCM2g","exports tslib @c/aui-carousel @c/remote-operations @c/scoped-dom @p/A @c/logger".split(" "),function(r,d,v,w,x,y,z){function e(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var A=e(v),B=e(w),k=e(x),h=e(y),l=e(z),t=/(?=[ \-\/])|(?=[\u3105-\u312F])|(?=[\u31A0-\u31BA])|(?=[\u4E00-\u9FD5])|(?=[\u3400-\u4DB5])|(?=[\uF900-\uFAFF])|(?=[\u3040-\u309F])|(?=[\u30A0-\u30FF])|(?=[\u3190-\u319F])/,u=/[^\/\-\[\]():\s]/,
C=function(a){var c=h["default"].$("<div>")[0];c.classList.add("p13n-sc-offscreen-truncate");var b=parseInt(a.getAttribute("data-rows")||"2",10),d=function(){var c=a.innerHTML;a.innerHTML="&hellip;";var b=a.clientHeight;a.innerHTML=c;return b}();if(b){if(d){var m=function(a){c.innerHTML=a;return Math.round(c.clientHeight/d)<=b},e=function(b,d){b=b.split(d);var f=Math.floor(a.clientWidth/12),p=function(g){c.classList.add("p13n-sc-offscreen-truncate");c.style.overflow="hidden";c.textContent=g;a.appendChild(c);
g=a.clientWidth>=a.scrollWidth;a.removeChild(c);return g},e=function(a){var c=a.length-f;a.trim().length>f&&!p(a)&&Array.prototype.slice.call(a).map(function(a,b){return b>f&&b<=c&&u.test(a)?"&shy;"+a:a});return a};return b.map(function(a){return e(a)}).join("")};return{truncate:function(){var b=a.innerHTML.trim(),d=a.textContent||"";b=e(b,t);a.appendChild(c);if(m(b))a.removeChild(c),a.innerHTML=b;else{var f=b.split(t);for(var h=1,q=f.length,g,k,n=0;h!==q;)if(g=Math.floor((q+h)/2),k=f.slice(0,g).join("")+
"&hellip;",m(k)){if(1>=q-g){for(n=g;0<n&&!u.test(f[n-1]);)n--;break}h=g}else q=g;f=0===n?void 0:f.slice(0,n).join("")+"&hellip;";f?(a.innerHTML=f,a.setAttribute("title",d)):(l["default"].log("Unable to successfully truncate line "+b,"ERROR"),a.removeChild(c))}}}}l["default"].log("Truncation element does not have a line height or it is zero","ERROR")}else l["default"].log("Truncation element missing necessary line number data","ERROR")},D=function(a){a=a.getElementsByClassName("p13n-sc-truncate");
Array.prototype.slice.call(a).map(function(a){var b=C(a);b&&(b.truncate(),a.classList.add("p13n-sc-truncated"),a.classList.remove("p13n-sc-truncate"),a.className=a.className.replace(/p13n-sc-line-clamp-\d/g,""))})},E={initCarousel:function(){return d.__awaiter(void 0,void 0,void 0,function(){var a,c,b,e,m,l;return d.__generator(this,function(p){switch(p.label){case 0:return a=k["default"].cardRoot.classList.contains("p13n-sc-carousel")?k["default"].cardRoot:k["default"].cardRoot.getElementsByClassName("p13n-sc-carousel")[0],
c=a.getAttribute("data-name"),b=function(){h["default"].loadDynamicImage("[data-name]='"+c+"' .p13n-sc-dynamic-image");D(a)},e=B["default"].setup(["getCarouselItems"]),m=A["default"].getCarousel(a),l=a.dataset||{},[4,m.initialized];case 1:return p.sent(),h["default"].on("a:carousel:"+c+":change:pageSize",b),h["default"].on("a:carousel:"+c+":change:loading",b),h["default"].on("a:carousel:"+c+":change:animating",b),b(),m.attachRemoteOperation(function(a){var b=a.indexes;a=a.ids;return e.getCarouselItems(d.__assign(d.__assign({},
l),{ids:a,indexes:b,offset:String(b[0]||0)}))}),[2]}})})}};r._operationNames=["getCarouselItems"];r.card=function(){return d.__awaiter(void 0,void 0,void 0,function(){return d.__generator(this,function(a){switch(a.label){case 0:return[4,E.initCarousel()];case 1:return a.sent(),[2]}})})}});
