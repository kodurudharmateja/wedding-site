/* Inline SVG artwork: temple silhouette (intro + hero) and Rama & Sita arch placeholder */
function templeSVG(){let s='<defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a2a14"/><stop offset="1" stop-color="#1b0c08"/></linearGradient></defs><g fill="url(#tg)" stroke="#d9a441" stroke-opacity=".35">';
 s+='<path d="M0 360V300h140v-40h80v40h40V250h60v50h60V200h60v-30h100v30h60v100h60v-50h60v50h40v-40h80v40h120v60z"/>';
 s+='<path d="M300 360V220h300v140zM330 220V190h240v30zM360 190V160h180v30zM390 160V132h120v28zM410 132V108h80v24zM428 108V90h44v18zM440 90V72h20v18zM446 72V56h8v16z"/>';
 s+='<circle cx="450" cy="50" r="4" fill="#d9a441"/></g><g stroke="#d9a441" stroke-opacity=".5" fill="none">';
 for(let i=0;i<7;i++)s+=`<rect x="${316+i*40}" y="250" width="22" height="110" rx="3"/>`;
 s+='</g><path d="M420 360v-60a30 30 0 0 1 60 0v60z" fill="#ffb347" fill-opacity=".55"/>';
 return s}

function initArt(){
 $("#introTemple").innerHTML=templeSVG();
 $("#homeTemple").innerHTML=templeSVG();
 /* replace with commissioned illustration later */
 $("#arch").innerHTML=`<g fill="none" stroke="#b8301f" stroke-width="1.5"><path d="M30 400V160a120 130 0 0 1 240 0v240"/><path d="M50 400V165a100 110 0 0 1 200 0v235" stroke="#d9a441"/></g>
<g fill="#8a3a1c"><circle cx="118" cy="190" r="14"/><path d="M96 330c0-60 8-125 22-125s22 65 22 125z"/><circle cx="184" cy="195" r="13" fill="#b8301f"/><path d="M164 330c0-55 6-118 20-118s22 63 22 118z" fill="#b8301f"/></g>
<g stroke="#d9a441" fill="none"><path d="M96 175q22-24 44 0M163 180q21-22 42 0"/><circle cx="150" cy="70" r="20"/><path d="M150 40v60M120 70h60"/></g>
<text x="150" y="372" text-anchor="middle" font-family="serif" font-style="italic" font-size="13" fill="#5a1220">[RAMA_SITA_ARTWORK]</text>`;
}
