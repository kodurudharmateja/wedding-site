/* Photo loader: tries the real image, falls back to a labelled placeholder.
   Folder is chosen from the name prefix: COUPLE_ -> couple/, EVENT_ -> events/, VENUE_ -> venue/ */
const PHOTO_DIRS={COUPLE:"couple/",EVENT:"events/",VENUE:"venue/"};
const photoSrc=name=>CFG.photoPath+(PHOTO_DIRS[name.split("_")[0]]||"")+name+".jpg";
function photo(el,name,alt){
 el.setAttribute("role","img");el.setAttribute("aria-label",alt||name);
 el.innerHTML=`<div class="ph-label">[${name}]</div>`;
 const im=new Image();im.alt=alt||name;im.loading="lazy";im.decoding="async";
 im.onload=()=>{el.innerHTML="";el.appendChild(im)};
 im.src=photoSrc(name);
}
