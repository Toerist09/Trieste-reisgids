const P=[
["sanmarco","Antico Caffè San Marco","eten","☕","Via Cesare Battisti","Historisch literair café met klassieke Triëstse sfeer; fijn voor koffie en iets kleins.",["Koffie","Historisch"],"Antico Caffè San Marco Trieste"],
["pepi","Buffet da Pepi","eten","🍽️","Centrum","Bekend traditioneel buffet voor een stevige lokale hap, levendig en zonder veel poespas.",["Lokaal","Traditioneel"],"Buffet da Pepi Trieste"],
["tommaseo","Caffè Tommaseo","eten","🥐","Piazza Tommaseo","Elegant historisch koffiehuis voor espresso en een rustige pauze.",["Koffie","Klassiek"],"Caffè Tommaseo Trieste"],
["osmiza","Een osmiza op het Karstplateau","eten","🍷","Karst / omgeving","Lokale boerderijplek waar producenten op bepaalde momenten eigen wijn en eenvoudige hapjes serveren; open wanneer aangegeven.",["Lokaal","Seizoensgebonden"],"osmiza near Trieste"],
["revoltella","Museo Revoltella","cultuur","🖼️","Via Diaz","Kunstmuseum in een historisch stadspaleis, met moderne en hedendaagse kunst.",["Kunst","Binnen"],"Museo Revoltella Trieste"],
["henriquez","Museo Diego de Henriquez","cultuur","🏛️","Via Cumano","Museumcollecties over oorlog en vrede. Controleer openingstijden en tentoonstellingen vooraf.",["Geschiedenis","Museum"],"Museo Diego de Henriquez Trieste"],
["miramare","Castello di Miramare","zien","🏰","Aan zee, noordwestelijk van centrum","Wit kasteel aan het water met park en uitzicht over de Golf van Triëst.",["Kasteel","Zeezicht"],"Castello di Miramare Trieste"],
["piazza","Piazza Unità d’Italia","zien","🌊","Waterfront","Indrukwekkend groot plein dat direct uitkijkt over zee; mooi bij avondlicht.",["Uitzicht","Centrum"],"Piazza Unità d'Italia Trieste"],
["canal","Canal Grande","zien","⛵","Borgo Teresiano","Fotogeniek kanaal met bruggetjes, cafés en uitzicht op Sant’Antonio Nuovo.",["Wandeling","Foto"],"Canal Grande Trieste"],
["san-giusto","Castello e Cattedrale di San Giusto","zien","⛪","Boven de oude stad","Historische heuvel met kathedraal, kasteel en uitzicht over stad en haven; reken op een klim.",["Geschiedenis","Panorama"],"Castello di San Giusto Trieste"],
["barcola","Barcola promenade","fiets","🚲","Kust ten noordwesten van centrum","Populaire kuststrook voor een fietstocht of pauze aan zee. Volg de lokale verkeers- en fietsborden.",["Kust","Buiten"],"Barcola Trieste"],
["rosandra","Val Rosandra","fiets","🌿","Karst, oostelijk van Triëst","Natuurgebied met wandel- en fietsopties; sommige routes zijn onverhard of technisch, dus controleer het traject.",["Natuur","Controleer route"],"Val Rosandra Trieste"]
];
const Z=[
["Buongiorno!","Goedendag!","bwon-djor-no"],["Buonasera!","Goedenavond!","bwo-na-se-ra"],["Per favore.","Alstublieft.","per fa-vo-re"],["Grazie mille!","Heel erg bedankt!","gra-tsje mil-le"],["Prego.","Graag gedaan / gaat uw gang.","pre-go"],["Mi scusi.","Pardon / excuseert u.","mie skoe-zie"],["Parla inglese?","Spreekt u Engels?","par-la in-gle-ze"],["Non parlo bene italiano.","Ik spreek niet goed Italiaans.","non par-lo be-ne ie-ta-lja-no"],["Può parlare più lentamente?","Kunt u wat langzamer spreken?","pwo par-la-re pjoe len-ta-men-te"],["Un tavolo per due, per favore.","Een tafel voor twee, alstublieft.","oen ta-vo-lo per doe-e"],["Posso vedere il menù?","Mag ik de menukaart zien?","pos-so ve-de-re il me-noe"],["Che cosa mi consiglia?","Wat raadt u mij aan?","ke ko-za mie kon-sil-ja"],["Vorrei un caffè, per favore.","Ik zou graag een koffie willen, alstublieft.","vor-rei oen kaf-fe"],["Il conto, per favore.","De rekening, alstublieft.","il kon-to per fa-vo-re"],["Dov’è il bagno?","Waar is het toilet?","do-vee il ban-jo"],["Quanto costa?","Hoeveel kost het?","kwan-to kos-ta"],["Dov’è la fermata dell’autobus?","Waar is de bushalte?","do-vee la fer-ma-ta del-lau-to-boes"],["Mi può aiutare?","Kunt u mij helpen?","mie pwo a-joe-ta-re"],["È molto bello qui.","Het is hier heel mooi.","e mol-to bel-lo kwie"],["Arrivederci, buona giornata!","Tot ziens, een fijne dag!","ar-rie-ve-der-tsjie bwo-na djor-na-ta"]
];
const K={f:"triest_favs_v1",c:"triest_custom_v1"},get=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));let fav=get(K.f,[]),custom=get(K.c,[]);
const L={eten:"Eten & koffie",cultuur:"Musea & cultuur",zien:"Bezienswaardigheden",fiets:"Fietsen",notitie:"Notitie"},esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function places(){return [...P.map(x=>({id:x[0],name:x[1],type:x[2],emoji:x[3],area:x[4],summary:x[5],tags:x[6],query:x[7]})),...custom]}
function card(p){let url=p.query?"https://www.openstreetmap.org/search?query="+encodeURIComponent(p.query):"";return `<article class="card"><h3>${esc(p.emoji||"📌")} ${esc(p.name)}</h3><div class="meta">${esc(L[p.type]||"Eigen plek")} · ${esc(p.area||"")}</div><p>${esc(p.summary||"")}</p><div class="pills">${(p.tags||[]).map(t=>`<span class="pill">${esc(t)}</span>`).join("")}</div><div class="actions">${url?`<a class="btn primary" target="_blank" rel="noopener" href="${url}">Kaart ↗</a>`:""}<button class="btn" data-f="${esc(p.id)}">${fav.includes(p.id)?"♥ Favoriet":"♡ Bewaar"}</button>${p.custom?`<button class="btn" data-d="${esc(p.id)}">Verwijder</button>`:""}</div></article>`}
function bind(){document.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{let id=b.dataset.f;fav=fav.includes(id)?fav.filter(x=>x!==id):[...fav,id];save(K.f,fav);render()});document.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{custom=custom.filter(x=>x.id!==b.dataset.d);save(K.c,custom);render()})}
function render(){let q=document.querySelector("#q").value.toLowerCase(),cat=document.querySelector("#cat").value;let arr=places().filter(p=>(cat==="alles"||p.type===cat)&&[p.name,p.summary,p.area].join(" ").toLowerCase().includes(q));document.querySelector("#places").innerHTML=arr.map(card).join("")||"<p>Geen resultaten.</p>";document.querySelector("#favs").innerHTML=places().filter(p=>fav.includes(p.id)).map(card).join("")||'<p class="muted">Nog geen favorieten. Bewaar een plek bij Ontdek.</p>';document.querySelector("#mine").innerHTML=custom.map(card).join("")||'<p class="muted">Je eigen plekken verschijnen hier.</p>';bind()}
function phrases(){let q=document.querySelector("#pq").value.toLowerCase();document.querySelector("#phrases").innerHTML=Z.filter(p=>p.join(" ").toLowerCase().includes(q)).map(p=>`<div class="phrase"><div><div class="it">${esc(p[0])}</div><div class="nl">${esc(p[1])}</div><div class="muted small">Uitspraak: ${esc(p[2])}</div></div><button data-copy="${esc(p[0])}">⧉</button></div>`).join("");document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=()=>{let s=b.dataset.copy;if(navigator.clipboard?.writeText)navigator.clipboard.writeText(s).then(()=>alert("Gekopieerd: "+s)).catch(()=>alert(s));else alert(s)})}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===b));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("hidden",x.id!==b.dataset.tab));if(b.dataset.tab==="favorieten")render();if(b.dataset.tab==="mijn")render();scrollTo(0,0)});
document.querySelector("#q").oninput=render;document.querySelector("#cat").onchange=render;document.querySelector("#pq").oninput=phrases;
document.querySelector("#form").onsubmit=e=>{e.preventDefault();custom.push({id:"custom-"+Date.now(),name:document.querySelector("#name").value.trim(),type:document.querySelector("#type").value,summary:document.querySelector("#text").value.trim(),emoji:"📌",tags:["Eigen plek"],custom:true});save(K.c,custom);e.target.reset();render();alert("Bewaard in de lokale opslag van deze browser.")};
document.querySelector("#export").onclick=()=>{let blob=new Blob([JSON.stringify({format:"triest-backup-v1",favorites:fav,customPlaces:custom},null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="mijn-triest-reisgids.json";a.click();URL.revokeObjectURL(a.href)};
document.querySelector("#import").onchange=async e=>{try{let d=JSON.parse(await e.target.files[0].text());if(!Array.isArray(d.favorites)||!Array.isArray(d.customPlaces))throw 0;fav=d.favorites;custom=d.customPlaces;save(K.f,fav);save(K.c,custom);render();alert("Back-up lokaal geïmporteerd.")}catch{alert("Geen geldige reisgidsback-up.")}e.target.value=""};
document.querySelector("#clear").onclick=()=>{if(confirm("Alle eigen plekken, notities en favorieten op dit toestel wissen?")){fav=[];custom=[];save(K.f,fav);save(K.c,custom);render();alert("Lokale gegevens gewist.")}};
render();phrases();if("serviceWorker"in navigator&&location.protocol.startsWith("http"))addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));

const routeStorageKey = "triest_route_stops_v1";
let routeStops = [];

try {
  routeStops = JSON.parse(localStorage.getItem(routeStorageKey) || "[]");
  if (!Array.isArray(routeStops)) routeStops = [];
} catch {
  routeStops = [];
}

function showRouteStops() {
  const list = document.querySelector("#routeStops");
  if (!list) return;

  list.innerHTML = "";

  routeStops.forEach((name, index) => {
    const item = document.createElement("li");
    item.textContent = name + " ";

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Verwijder";
    remove.onclick = () => {
      routeStops.splice(index, 1);
      saveRouteStops();
    };

    item.appendChild(remove);
    list.appendChild(item);
  });
}

function saveRouteStops() {
  localStorage.setItem(routeStorageKey, JSON.stringify(routeStops));
  showRouteStops();
}

document.querySelector("#addRouteStop")?.addEventListener("click", () => {
  const input = document.querySelector("#routeStop");
  const name = input?.value.trim();

  if (!name) {
    alert("Vul eerst de naam van een plek in.");
    return;
  }

  routeStops.push(name);
  saveRouteStops();
  input.value = "";
  input.focus();
});

document.querySelector("#clearRoute")?.addEventListener("click", () => {
  if (confirm("Wil je alle tussenstops uit je route verwijderen?")) {
    routeStops = [];
    saveRouteStops();
    const result = document.querySelector("#routeResult");
    if (result) result.innerHTML = "";
  }
});

showRouteStops();

let routeMap = null;
let routeMapLayer = null;

function initRouteMap() {
  const mapElement = document.getElementById("routeMap");

  if (!mapElement || typeof window.L === "undefined") return;

  if (!routeMap) {
   routeMap = window.L.map("routeMap").setView([45.6495, 13.7768], 13); 

   window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap-bijdragers",
      maxZoom: 19
    }).addTo(routeMap);

    routeMapLayer = window.L.layerGroup().addTo(routeMap);
  }

  setTimeout(() => routeMap.invalidateSize(), 200);
}

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.tab === "routeplanner") {
      initRouteMap();
    }
  });
});

if (document.getElementById("routeplanner")) {
  initRouteMap();
}
