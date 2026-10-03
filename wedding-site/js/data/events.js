/* Celebrations: [name, Telugu title, accent colour]. Date/time/venue/desc are filled per event below.
   Photos: assets/images/events/EVENT_PHOTO_01.jpg ... (by row order)
   The event named exactly "Marriage" renders as the large featured card. */
const EVENTS=[
 ["Engagement","నిశ్చితార్థం","#b8301f"],
 ["Haldi","హల్దీ","#e8b12e"],
 ["Mehendi","మెహందీ","#6b7a3a"],
 ["Sangeet","సంగీత్","#c0623c"],
 ["Pellikuthuru / Pellikoduku","పెళ్లి కూతురు","#b8301f"],
 ["Jeelakarra Bellam","జీలకర్ర బెల్లం","#8a3a1c"],
 ["Marriage","వివాహం","#d9a441"],
 ["Reception","రిసెప్షన్","#5a1220"]
].map((e,i)=>({
 name:e[0],te:e[1],color:e[2],
 date:"[DATE]",time:"[TIME]",venue:"[VENUE]",desc:"[DESCRIPTION]",
 image:"EVENT_PHOTO_0"+(i+1)
}));
