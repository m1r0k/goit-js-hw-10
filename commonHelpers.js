import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as i,i as l}from"./assets/vendor-651d7991.js";const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0],r=new Date;t<r?(l.error({title:"Error",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):document.querySelector("[data-start]").disabled=!1}};i("#datetime-picker",f);document.querySelector("[data-start]").addEventListener("click",y);function y(){const e=i.parseDate(document.getElementById("datetime-picker").value),t=new Date;if(e<=t){l.error({title:"Error",message:"Please choose a date in the future"});return}document.querySelector("[data-start]").disabled=!0,setInterval(h,1e3,e)}function h(e,t){const r=new Date,n=e-r;if(n<=0){clearInterval(t),d(0,0,0,0);return}const{days:u,hours:a,minutes:s,seconds:c}=D(n);d(u,a,s,c)}function d(e,t,r,n){document.querySelector("[data-days]").textContent=o(e),document.querySelector("[data-hours]").textContent=o(t),document.querySelector("[data-minutes]").textContent=o(r),document.querySelector("[data-seconds]").textContent=o(n)}function o(e){return e.toString().padStart(2,"0")}function D(e){const a=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:c,seconds:m}}
//# sourceMappingURL=commonHelpers.js.map
