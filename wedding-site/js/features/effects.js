/* Scroll reveals, sticky nav, hero parallax, invitation-card tilt.
   MUST run after every render*() so dynamically created .rv elements are observed. */
function initEffects(){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
 $$(".rv").forEach(e=>io.observe(e));

 const nav=$("#nav"),pb=$("#parBg");
 addEventListener("scroll",()=>{nav.classList.toggle("solid",scrollY>60);if(!rm&&scrollY<innerHeight)pb.style.transform=`translateY(${scrollY*.25}px)`},{passive:true});

 const card=$("#card");
 if(!rm&&matchMedia("(hover:hover)").matches)card.parentElement.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateY(${x*8}deg) rotateX(${-y*8}deg)`});
 card.parentElement.addEventListener("mouseleave",()=>card.style.transform="");
}
