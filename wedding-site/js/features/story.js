function renderStory(){
 $("#tl").innerHTML=STORY.map((m,i)=>`<div class="ms rv"><div class="ph" data-img="COUPLE_PHOTO_0${i+1}"></div><div class="tx"><time>${m[0]}</time><h3>${m[1]}</h3></div></div>`).join("");
 $$("#tl [data-img]").forEach(e=>photo(e,e.dataset.img,"Couple photo"));
}
