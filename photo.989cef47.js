!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),i.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var o={form:document.querySelector(".js-search-form"),list:document.querySelector(".js-gallery"),spinner:document.querySelector(".spinner"),backdrop:document.querySelector(".backdrop"),loadMoreBtn:document.querySelector(".load-more")},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){var n=l.default(e,t,"get");return u.default(e,n)};var l=d(i("1UHsN")),u=d(i("ffZzF"));function d(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,n){p.default(e,t),t.set(e,n)};var f,p=(f=i("5k7tO"))&&f.__esModule?f:{default:f};var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){var r=v.default(e,t,"set");return y.default(e,r,n),n};var v=m(i("1UHsN")),y=m(i("jdVyQ"));function m(e){return e&&e.__esModule?e:{default:e}}var g={};function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,n){t&&w(e.prototype,t);n&&w(e,n);return e};var b=new WeakMap,M=new WeakMap,x=new WeakMap,_=new WeakMap,k=new WeakMap,P=function(){"use strict";function t(){e(a)(this,t),e(c)(this,b,{writable:!0,value:"https://api.unsplash.com/search/photos"}),e(c)(this,M,{writable:!0,value:"LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc"}),e(c)(this,x,{writable:!0,value:""}),e(c)(this,_,{writable:!0,value:1}),e(c)(this,k,{writable:!0,value:0})}return e(g)(t,[{key:"getPhotos",value:function(){var t="".concat(e(s)(this,b),"?page=").concat(e(s)(this,_),"&query=").concat(e(s)(this,x),"&client_id=").concat(e(s)(this,M),"&per_page=15&color=black");return fetch(t).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}},{key:"query",get:function(){return e(s)(this,x)},set:function(t){e(h)(this,x,t)}},{key:"setTotal",value:function(t){e(h)(this,k,t)}},{key:"hasMorePhotos",value:function(){return e(s)(this,_)<Math.ceil(e(s)(this,k)/15)}},{key:"incrementPage",value:function(){e(h)(this,_,e(s)(this,_)+1)}},{key:"resetPage",value:function(){e(h)(this,_,1)}}]),t}(),j=i("h6c0i");function O(e){return e.map((function(e){var t=e.urls,n=e.alt_description;return'<li class="gallery__item">\n    <img src="'.concat(t.small,'" alt="').concat(n,'" class="gallery-img" loading="lazy">\n</li>')})).join("")}var N,T,q,E,L={};N=L,T="Spinner",q=function(){return I},E=function(e){return I=e},Object.defineProperty(N,T,{get:q,set:E,enumerable:!0,configurable:!0});var z=function(){return z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},z.apply(this,arguments)},C={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},I=function(){function e(e){void 0===e&&(e={}),this.opts=z(z({},C),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),S(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",r="none";!0===t.shadow?r="0 2px 4px #000":"string"==typeof t.shadow&&(r=t.shadow);for(var i=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],r=0,i=e.split(",");r<i.length;r++){var o=i[r].match(t);if(null!==o){var a=+o[2],s=+o[5],l=o[4],u=o[7];0!==a||l||(l=u),0!==s||u||(u=l),l===u&&n.push({prefix:o[1]||"",x:a,y:s,xUnits:l,yUnits:u,end:o[8]})}}return n}(r),o=0;o<t.lines;o++){var a=~~(360/t.lines*o+t.rotate),s=S(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:U(t.fadeColor,o),borderRadius:n,transformOrigin:"left",transform:"rotate("+a+"deg) translateX("+t.radius+"px)"}),l=o*t.direction/t.lines/t.speed;l-=1/t.speed;var u=S(document.createElement("div"),{width:"100%",height:"100%",background:U(t.color,o),borderRadius:n,boxShadow:A(i,a),animation:1/t.speed+"s linear "+l+"s infinite "+t.animation});s.appendChild(u),e.appendChild(s)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function S(e,t){for(var n in t)e.style[n]=t[n];return e}function U(e,t){return"string"==typeof e?e:e[t%e.length]}function A(e,t){for(var n=[],r=0,i=e;r<i.length;r++){var o=i[r],a=B(o.x,o.y,t);n.push(o.prefix+a[0]+o.xUnits+" "+a[1]+o.yUnits+o.end)}return n.join(", ")}function B(e,t,n){var r=n*Math.PI/180,i=Math.sin(r),o=Math.cos(r);return[Math.round(1e3*(e*o+t*i))/1e3,Math.round(1e3*(-e*i+t*o))/1e3]}var W=new(0,L.Spinner)({lines:10,length:0,width:22,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"}),Z=function(){W.spin(o.spinner),o.backdrop.classList.remove("is-hidden")},F=function(){W.stop(),o.backdrop.classList.add("is-hidden")},H=new P;o.loadMoreBtn.addEventListener("click",(function(){H.incrementPage(),Z(),H.getPhotos().then((function(e){var t=O(e.results);o.list.insertAdjacentHTML("beforeend",t),H.hasMorePhotos()||o.loadMoreBtn.classList.add("is-hidden")})).catch((function(e){j.Notify.failure(e.message),o.loadMoreBtn.classList.add("is-hidden")})).finally(setTimeout((function(){F()}),1e3))})),o.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.query.value;t?(H.query=t,H.resetPage(),e.currentTarget.reset(),Z(),o.loadMoreBtn.classList.add("is-hidden"),H.getPhotos().then((function(e){var t=e.results,n=e.total,r=O(t);o.list.innerHTML=r,H.setTotal(n),H.hasMorePhotos()&&o.loadMoreBtn.classList.remove("is-hidden")})).catch((function(e){j.Notify.failure(e.message)})).finally(setTimeout((function(){F()}),1e3))):j.Notify.failure("Nothing")}))}();
//# sourceMappingURL=photo.989cef47.js.map
