function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var a=r("jkMrE"),s=r("g6yUq"),o=r("gMe87"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){d.default(e,t),t.add(e)};var c,d=(c=r("7K24o"))&&c.__esModule?c:{default:c};var h=r("iQIUW"),f=new WeakMap,w=new WeakMap,v=new WeakMap,p=new WeakMap,y=new WeakMap,M=new WeakSet,g=new WeakSet,b=new WeakSet,k=new WeakSet;function _(e){return{days:Math.floor(e/1e3/60/60/24),hours:Math.floor(e/1e3/60/60)%24,minutes:Math.floor(e/1e3/60)%60,seconds:Math.floor(e/1e3)%60}}function m(e){return String(e).padStart(2,0)}function S(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}function W(t,i){if(0===t)return;const n=e(a)(this,p).canvasArray[t].getContext("2d");n.clearRect(0,0,200,200),n.beginPath(),n.strokeStyle="red",n.lineWidth=4;let r=30;1===t&&(r=12),n.arc(100,100,98,Math.PI/r*(i-r/2),Math.PI/r*(2*r-r/2-.01),!0),n.stroke()}const x=new class{start(){if(console.log(e(a)(this,f)),e(a)(this,f)<Date.now())return h.Notify.failure("Selected date is in past");this.getRefs(),e(o)(this,v,setInterval((()=>{const t=e(a)(this,f)-Date.now();if(t<=0)return h.Notify.success("Time is up!"),void clearInterval(e(a)(this,v));const i=e(l)(this,M,_).call(this,t);Object.entries(i).forEach((([t,i],n)=>{const r=e(a)(this,p).fields[n];r.textContent=e(l)(this,g,m).call(this,i),r.dataset.title=e(l)(this,b,S).call(this,i,e(a)(this,y)[t]),e(l)(this,k,W).call(this,n,i)}))}),1e3))}getRefs(){e(a)(this,p).fields=document.querySelectorAll(`${e(a)(this,w)} .timer__item`),e(a)(this,p).canvasArray=document.querySelectorAll(`${e(a)(this,w)} canvas`)}constructor(t,i){e(u)(this,M),e(u)(this,g),e(u)(this,b),e(u)(this,k),e(s)(this,f,{writable:!0,value:void 0}),e(s)(this,w,{writable:!0,value:void 0}),e(s)(this,v,{writable:!0,value:null}),e(s)(this,p,{writable:!0,value:{}}),e(s)(this,y,{writable:!0,value:{days:["день","дня","днів"],hours:["година","години","годин"],minutes:["хвилина","хвилини","хвилин"],seconds:["секунда","секунди","секунд"]}}),e(o)(this,f,i),e(o)(this,w,t)}}(".timer",new Date("2023-03-14"));document.querySelector(".start").addEventListener("click",(()=>{x.start()}));
//# sourceMappingURL=timer.4bd546a6.js.map
