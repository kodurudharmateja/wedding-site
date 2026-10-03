/* Gallery grid + lightbox (keyboard + swipe) */
function initGallery(){
 const g=$("#gal"),lb=$("#lb");let cur=0;
 g.innerHTML=GAL.map((p,i)=>`<button class="ph s-${p.type==="pol"?"s":p.type} ${p.type==="pol"?"pol":""} rv" data-i="${i}" aria-label="Open photo ${i+1}"></button>`).join("");
 $$("button.ph",g).forEach(b=>{const p=GAL[b.dataset.i];photo(b,p.image,p.caption);b.setAttribute("role","button");b.onclick=()=>openLb(+b.dataset.i)});

 function show(){const p=GAL[cur],st=$("#lbStage");st.innerHTML='<div class="ph"></div>';photo($(".ph",st),p.image,p.caption);$("#lbCap").textContent=p.caption+"  ·  "+(cur+1)+"/"+GAL.length}
 function openLb(i){cur=i;show();lb.classList.add("open");document.body.classList.add("locked");$(".x",lb).focus()}
 function closeLb(){lb.classList.remove("open");document.body.classList.remove("locked");g.querySelector(`[data-i="${cur}"]`).focus()}
 const step=d=>{cur=(cur+d+GAL.length)%GAL.length;show()};

 $(".x",lb).onclick=closeLb;$(".pv",lb).onclick=()=>step(-1);$(".nx",lb).onclick=()=>step(1);
 lb.onclick=e=>{if(e.target===lb)closeLb()};
 addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")closeLb();if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)});
 let tx=0;
 lb.addEventListener("touchstart",e=>tx=e.touches[0].clientX,{passive:true});
 lb.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)step(d<0?1:-1)});
}
