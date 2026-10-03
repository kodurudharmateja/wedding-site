function initPetals(){
 const cv=$("#petals"),cx=cv.getContext("2d");const P=[];
 const sizeC=()=>{cv.width=innerWidth;cv.height=innerHeight};sizeC();addEventListener("resize",sizeC);
 const N=rm?0:(innerWidth<700?14:26);
 for(let i=0;i<N;i++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:3+Math.random()*4,s:.3+Math.random()*.6,w:Math.random()*6,c:Math.random()<.6?"#e8892e":"#d9a441"});
 (function loop(){cx.clearRect(0,0,cv.width,cv.height);
  P.forEach(p=>{p.y+=p.s;p.w+=.015;p.x+=Math.sin(p.w)*.5;if(p.y>cv.height+10){p.y=-10;p.x=Math.random()*cv.width}
   cx.save();cx.translate(p.x,p.y);cx.rotate(p.w);cx.globalAlpha=.55;cx.fillStyle=p.c;cx.beginPath();cx.ellipse(0,0,p.r,p.r*.55,0,0,7);cx.fill();cx.restore()});
  requestAnimationFrame(loop)})();
}
