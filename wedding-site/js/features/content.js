/* Pushes CFG values into every [data-*] hook in index.html + wires external links */
function initContent(){
 fill("bride",CFG.brideName);fill("groom",CFG.groomName);fill("date",CFG.weddingDate);fill("time",CFG.weddingTime);
 fill("venue",CFG.venueName);fill("addr",CFG.venueAddress);fill("city",CFG.city);fill("state",CFG.state);fill("vdesc",CFG.venueDescription);
 fill("vcontact",CFG.venueContact);fill("contact",CFG.contactNumber);fill("msg",CFG.message);fill("blessing",CFG.blessing);fill("finalte",CFG.finalTelugu);
 fill("storyintro",CFG.storyIntro);fill("extended",CFG.extended);fill("bfam",CFG.brideFamily);fill("gfam",CFG.groomFamily);
 fill("initials",CFG.brideName.replace(/[\[\]_]/g,"").charAt(0)+" & "+CFG.groomName.replace(/[\[\]_]/g,"").charAt(0));
 $("#bp").innerHTML=CFG.brideParents.map(p=>`<div>${p}</div>`).join("");
 $("#gp").innerHTML=CFG.groomParents.map(p=>`<div>${p}</div>`).join("");

 $$("[data-maps]").forEach(a=>{a.href=CFG.googleMapsLink||"#";if(!CFG.googleMapsLink)a.onclick=e=>{e.preventDefault();alert("Add googleMapsLink in js/config/site.config.js")}});
 const waUrl=CFG.whatsappNumber?`https://wa.me/${CFG.whatsappNumber.replace(/\D/g,"")}?text=${encodeURIComponent("Hello! Writing about the wedding of "+CFG.brideName+" & "+CFG.groomName)}`:"#";
 $$("[data-wa]").forEach(a=>{a.href=waUrl;if(!CFG.whatsappNumber)a.onclick=e=>{e.preventDefault();alert("Add whatsappNumber in js/config/site.config.js")}});
 $$("[data-insta]").forEach(a=>{if(CFG.instagram)a.href=CFG.instagram;else a.style.display="none"});

 $$("#venue [data-img]").forEach(e=>photo(e,e.dataset.img,"Venue"));
}
