function initNav(){
 $("#menu").innerHTML=NAV.map(n=>`<li><a href="#${n[1]}">${n[0]}</a></li>`).join("");
 const burger=$("#burger"),menu=$("#menu");
 burger.onclick=()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
 $$("#menu a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");burger.setAttribute("aria-expanded",false)}));
}
