/* Music: optional audio file (CFG.music) or synthesized tanpura drone + temple bell. Off until the guest enters. */
const Music=(()=>{
 let ac,master,audio,drone=[],bellT,playing=false,mb;
 function startSynth(){
  ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();
  master=ac.createGain();master.gain.value=0;master.connect(ac.destination);master.gain.linearRampToValueAtTime(.12,ac.currentTime+3);
  [130.81,196,261.63,261.63*1.003].forEach((f,i)=>{const o=ac.createOscillator(),gn=ac.createGain();o.type="triangle";o.frequency.value=f;gn.gain.value=i<2?.5:.25;
   const l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=.15+i*.07;lg.gain.value=.15;l.connect(lg);lg.connect(gn.gain);l.start();
   o.connect(gn);gn.connect(master);o.start();drone.push(o,l)});
  const bell=()=>{if(!playing)return;const o=ac.createOscillator(),gn=ac.createGain();o.type="sine";o.frequency.value=[784,880,1046][Math.floor(Math.random()*3)];
   gn.gain.setValueAtTime(.0001,ac.currentTime);gn.gain.exponentialRampToValueAtTime(.12,ac.currentTime+.02);gn.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+4);
   o.connect(gn);gn.connect(master);o.start();o.stop(ac.currentTime+4.2);bellT=setTimeout(bell,6000+Math.random()*6000)};
  bellT=setTimeout(bell,2500)}
 function stopSynth(){clearTimeout(bellT);if(master){master.gain.cancelScheduledValues(ac.currentTime);master.gain.linearRampToValueAtTime(0,ac.currentTime+.8)}
  const d=drone;drone=[];setTimeout(()=>d.forEach(o=>{try{o.stop()}catch(e){}}),900)}
 function set(on){playing=on;mb.classList.toggle("on",on);mb.setAttribute("aria-pressed",on);
  if(CFG.music){audio=audio||Object.assign(new Audio(CFG.music),{loop:true,volume:.4});on?audio.play().catch(()=>{}):audio.pause()}
  else on?startSynth():stopSynth()}
 function init(){mb=$("#music");mb.onclick=()=>set(!playing)}
 return {init,set};
})();
