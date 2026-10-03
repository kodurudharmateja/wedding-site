function initIntro(){
 document.body.classList.add("locked");
 $("#enter").onclick=()=>{
  $("#intro").classList.add("gone");
  document.body.classList.remove("locked");
  Music.set(true);
  setTimeout(()=>$("#intro").remove(),1600);
  scrollTo(0,0);
 };
}
