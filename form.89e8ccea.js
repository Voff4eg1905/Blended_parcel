const e=document.querySelector(".js-contact-form");!function(){let t=localStorage.getItem("userInfo");if(!t)return;t=JSON.parse(t),Object.entries(t).forEach((([t,r])=>{e.elements[t].value=r}))}();e.addEventListener("input",(e=>{const{name:t,value:r}=e.target;let o=localStorage.getItem("userInfo");o=o?JSON.parse(o):{},o[t]=r,localStorage.setItem("userInfo",JSON.stringify(o))})),e.addEventListener("submit",(e=>{e.preventDefault();const t={};new FormData(e.currentTarget).forEach(((e,r)=>{t[r]=e})),console.log(t),localStorage.removeItem("userInfo"),e.currentTarget.reset()}));
//# sourceMappingURL=form.89e8ccea.js.map
