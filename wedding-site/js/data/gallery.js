/* Gallery: 20 photos, assets/images/couple/COUPLE_PHOTO_01.jpg ... 20
   Tile shapes: w=wide p=portrait s=small h=half f=full pol=polaroid */
const SHAPES="w p s h s p w s p h s p pol w s p h s f p".split(" ");
const GAL=SHAPES.map((t,i)=>({
 image:"COUPLE_PHOTO_"+String(i+1).padStart(2,"0"),
 caption:"[CAPTION_"+String(i+1).padStart(2,"0")+"]",
 type:t
}));
