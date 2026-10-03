function initCountdown(){
 const cd=$("#cd");
 function tick(){
  const t=CFG.weddingDateTime?new Date(CFG.weddingDateTime).getTime():NaN;
  let v=[0,0,0,0],note="";
  if(isNaN(t)){v=["--","--","--","--"];note="[WEDDING_DATE_TIME] — the countdown begins once the date is set."}
  else{let d=Math.max(0,t-Date.now());v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60].map(n=>String(n).padStart(2,"0"));if(d===0)note="Today is the day."}
  cd.innerHTML=["Days","Hours","Minutes","Seconds"].map((l,i)=>`<div class="cd"><b>${v[i]}</b><span>${l}</span></div>`).join("");
  $("#cdNote").textContent=note}
 tick();setInterval(tick,1000);
}
