import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as o}from"./assets/vendor-651d7991.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".form");t.addEventListener("submit",async n=>{n.preventDefault();const i=t.elements.delay,e=parseInt(i.value),r=t.elements.state.value;try{const s=await new Promise((a,c)=>{setTimeout(r==="fulfilled"?()=>{a(e)}:()=>{c(e)},e)});o.success({title:"Success",message:`✅ Fulfilled promise in ${s}ms`,position:"topRight"})}catch(s){o.error({title:"Error",message:`❌ Rejected promise in ${s}ms`,position:"topRight"})}})});
//# sourceMappingURL=commonHelpers2.js.map
