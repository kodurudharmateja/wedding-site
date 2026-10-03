/* Tiny DOM helpers shared by every feature */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const fill=(k,v)=>$$(`[data-${k}]`).forEach(e=>e.textContent=v);
