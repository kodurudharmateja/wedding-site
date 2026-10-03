function renderEvents(){
 $("#evs").innerHTML=EVENTS.map(e=>`<article class="ev rv ${e.name==="Marriage"?"big":""}" style="--c:${e.color}"><div class="ph" data-img="${e.image}"></div><div><p class="te" lang="te">${e.te}</p><h3>${e.name}</h3><p class="meta">${e.date} · ${e.time}<br>${e.venue}</p><p>${e.desc}</p></div></article>`).join("");
 $$("#evs [data-img]").forEach(e=>photo(e,e.dataset.img,"Event photo"));
}
