const hotels=[
{date:'29–30 apr',city:'Santa Monica',name:'Sea Shore Motel',room:'2 full beds',price:'2 200–2 800 kr',priority:'Tidig bokning'},
{date:'30 apr–2 maj',city:'Las Vegas',name:'Ellis Island Casino & Hotel',room:'2 Queen',price:'3 000–4 200 kr',priority:'Normal'},
{date:'2–4 maj',city:'Williams',name:'The Lodge on Route 66',room:'2 Queen',price:'3 200–4 200 kr',priority:'Boka tidigt'},
{date:'4–6 maj',city:'Albuquerque',name:'El Vado Motel',room:'Double Queen',price:'3 800–4 800 kr',priority:'Boka tidigt'},
{date:'6–7 maj',city:'Tucumcari',name:'Blue Swallow Motel',room:'Family Suite / rum för 3',price:'1 800–2 300 kr',priority:'BOKA FÖRST'},
{date:'7–8 maj',city:'Amarillo',name:'Big Texan Motel',room:'2 beds',price:'1 300–1 700 kr',priority:'Normal'},
{date:'8–9 maj',city:'Oklahoma City',name:'Saddleback Inn',room:'2 Queen',price:'1 200–1 600 kr',priority:'Normal'},
{date:'9–10 maj',city:'Tulsa',name:'The Campbell Hotel',room:'Double Queen / större rum',price:'1 400–1 900 kr',priority:'Normal'},
{date:'10–11 maj',city:'Springfield MO',name:'Rockwood Motor Court',room:"Fill ’Er Up / Cottage",price:'1 400–1 600 kr',priority:'BOKA FÖRST'},
{date:'11–12 maj',city:'St. Louis',name:'Holiday Inn St Louis SW - Route 66',room:'2 Queen',price:'1 400–1 900 kr',priority:'Normal'},
{date:'12–13 maj',city:'Springfield IL',name:'Comfort Suites near Route 66',room:'2 Queen + sofa bed',price:'1 500–1 700 kr',priority:'Normal'},
{date:'13–14 maj',city:'Chicago',name:'Ohio House Motel',room:'2 full beds',price:'2 500–3 300 kr',priority:'Tidig bokning'},
{date:'14–15 maj',city:"O'Hare",name:"Hampton Inn Chicago-O'Hare",room:'2 Queen',price:'1 600–2 000 kr',priority:'Normal'}
];

const itinerary=[
{date:'29 apr',title:'LAX → Santa Monica',km:'≈20 km',night:'Santa Monica',text:'Landning i Los Angeles. Hämta SUV på LAX och kör direkt till Sea Shore Motel. Om ork finns: kvällspromenad vid Santa Monica Pier och Route 66-skylten.'},
{date:'30 apr',title:'Santa Monica → Barstow → Las Vegas',km:'≈470 km',night:'Las Vegas',text:'Tidig start, gärna runt 07:00. Santa Monica → Pasadena/San Bernardino → Victorville → Barstow. Därefter avstickare från Route 66 till Las Vegas.'},
{date:'1 maj',title:'Las Vegas',km:'lokalt',night:'Las Vegas',text:'Vilodag. Strip, Fremont Street eller bara lugn dag. Ingen längre transportkörning.'},
{date:'2 maj',title:'Las Vegas → Hoover Dam → Williams',km:'≈400 km',night:'Williams',text:'Hoover Dam → Kingman → Hackberry → Peach Springs → Seligman → Williams. Prioritera den gamla Route 66-sträckan mellan Kingman och Seligman.'},
{date:'3 maj',title:'Grand Canyon South Rim',km:'≈220 km',night:'Williams',text:'Williams → Grand Canyon South Rim → Williams. Lämna Williams cirka 07:00 för att få en hel dag vid South Rim.'},
{date:'4 maj',title:'Williams → Albuquerque',km:'≈600 km',night:'Albuquerque',text:'Flagstaff → Winslow → Holbrook → Petrified Forest → Gallup → Albuquerque. Resans längsta kördag, men med många naturliga stopp.'},
{date:'5 maj',title:'Albuquerque',km:'lokalt',night:'Albuquerque',text:'Old Town, Central Avenue och gamla Route 66. Bra dag för vila, tvätt och shopping.'},
{date:'6 maj',title:'Albuquerque → Tucumcari',km:'≈285 km',night:'Tucumcari',text:'Via Santa Rosa och gamla Route 66. Kort dag för att komma fram till Blue Swallow före skymningen och se neonskyltarna tändas.'},
{date:'7 maj',title:'Tucumcari → Amarillo',km:'≈220 km',night:'Amarillo',text:'Adrian och Route 66 Midpoint → Cadillac Ranch → Amarillo. Lugn dag med gott om tid för stopp.'},
{date:'8 maj',title:'Amarillo → Oklahoma City',km:'≈440 km',night:'Oklahoma City',text:'Shamrock och U-Drop Inn → Elk City → Clinton och Oklahoma Route 66 Museum → Oklahoma City.'},
{date:'9 maj',title:'Oklahoma City → Tulsa',km:'≈220 km',night:'Tulsa',text:'Arcadia → Chandler → Stroud → Tulsa. Kör så mycket som möjligt av gamla Route 66 i stället för Interstate.'},
{date:'10 maj',title:'Tulsa → Springfield, Missouri',km:'≈300 km',night:'Springfield MO',text:'Catoosa → Miami → Commerce → Baxter Springs → Galena → Joplin → Springfield. Här kör ni även Route 66 genom Kansas.'},
{date:'11 maj',title:'Springfield MO → St. Louis',km:'≈370 km',night:'St. Louis',text:"Lebanon → Devil’s Elbow → Cuba → St. Louis. Ta tid för klassiska motell, gamla bensinstationer och Wagon Wheel i Cuba."},
{date:'12 maj',title:'St. Louis → Springfield, Illinois',km:'≈180 km',night:'Springfield IL',text:'Kortare dag. Tid i St. Louis på morgonen och Route 66-stopp via Litchfield på väg mot Springfield.'},
{date:'13 maj',title:'Springfield IL → Chicago',km:'≈330 km',night:'Chicago',text:'Atlanta → Pontiac → Joliet → Chicago. Avsluta den historiska Route 66-sträckan i Chicago och bo centralt på Ohio House Motel.'},
{date:'14 maj',title:"Chicago → O'Hare",km:'lokalt',night:"O'Hare",text:"Heldag i Chicago utan långkörning. På eftermiddagen/kvällen kör ni ut mot O'Hare för sista natten nära flygplatsen."},
{date:'15 maj',title:'ORD → hemresa',km:'10–20 km',night:'Hemresa',text:'Tanka bilen, lämna SUV:n vid O’Hare och flyg hem. Ingen annan sightseeing planerad denna dag.'}
];

const costs=[
{key:'Boende',value:29700,note:'16 nätter, 1 rum för 3 där det fungerar'},
{key:'Hyrbil',value:15000,note:'Midsize SUV LAX → ORD'},
{key:'Hyrbilsförsäkring',value:3000,note:'Marginal för CDW/LDW, zero excess m.m.'},
{key:'Bensin',value:5000,note:'Cirka 4 300–4 600 km'},
{key:'Mat & dryck',value:24000,note:'3 personer × 17 dagar'},
{key:'Parkering & vägtullar',value:3000,note:'LA, Vegas, Chicago och mindre avgifter'},
{key:'Nationalparkspass',value:2480,note:'America the Beautiful non-resident pass'},
{key:'Hoover Dam',value:990,note:'Guidad tur + parkering för 3'},
{key:'Gateway Arch',value:450,note:'Tram ride för 3'},
{key:'Route 66 Museum',value:300,note:'Clinton, Oklahoma'},
{key:'Övriga attraktioner',value:1200,note:'Mindre museer och stopp'},
{key:'ESTA',value:1200,note:'3 personer'},
{key:'eSIM, tvätt & småutgifter',value:1500,note:'Gemensam marginal'}
];

const tasks=[
{title:'Boka Blue Swallow Motel · 6 maj',note:'Högsta prioritet. Få rum och ett av resans viktigaste klassiska Route 66-motell.'},
{title:"Boka Rockwood Motor Court · 10 maj",note:"Försök få Fill ’Er Up eller Rockwood Cottage för tre personer."},
{title:'Boka El Vado · 4–6 maj',note:'Double Queen. Två nätter i Albuquerque.'},
{title:'Boka The Lodge on Route 66 · 2–4 maj',note:'2 Queen Room för tre personer, två nätter i Williams.'},
{title:'Boka Sea Shore Motel · 29 april',note:'En natt efter landning innan tidig avfärd mot Las Vegas.'},
{title:'Boka övriga boenden',note:'Las Vegas, Amarillo, Oklahoma City, Tulsa, St. Louis, Springfield IL, Chicago och O’Hare.'},
{title:'Boka midsize SUV LAX → ORD',note:'Kontrollera fria mil, envägsavgift, försäkring, extra förare och deposition.'},
{title:'Kontrollera pass och ESTA',note:'Tre resenärer. Kontrollera även att passen gäller för hela vistelsen.'},
{title:'Kontrollera reseförsäkring och kreditkortsskydd',note:'Särskilt hyrbil, sjukvård, bagage och avbokning.'},
{title:'Köp nationalparkspass',note:'America the Beautiful Non-Resident Pass om 2027-reglerna fortfarande är desamma.'},
{title:'Ordna eSIM och offlinekartor',note:'Ladda ner kartor för Route 66, Grand Canyon och sträckor med sämre täckning.'},
{title:'Väderkontroll veckan före avresa',note:'Extra fokus på Grand Canyon samt kraftiga våråskväder i Oklahoma/Missouri.'}
];

const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
function show(id){$$('.page').forEach(p=>p.classList.toggle('active',p.id===id));$$('nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===id));window.scrollTo({top:0,behavior:'smooth'})}
$$('[data-page]').forEach(b=>b.onclick=()=>show(b.dataset.page));$$('[data-jump]').forEach(b=>b.onclick=()=>show(b.dataset.jump));

$('#hotels').innerHTML=hotels.map(h=>{
 const cls=h.priority==='BOKA FÖRST'?'priority':(h.priority==='Normal'?'normal':'');
 return '<tr><td>'+h.date+'</td><td>'+h.city+'</td><td><strong>'+h.name+'</strong></td><td>'+h.room+'</td><td><strong>'+h.price+'</strong></td><td><span class="status '+cls+'">'+h.priority+'</span></td></tr>'
}).join('');

$('#stops').innerHTML=itinerary.map((s,i)=>'<article class="stop"><div class="day">Dag '+(i+1)+'<small>'+s.date+'</small></div><div><h3>'+s.title+'</h3><p>'+s.text+'</p></div><div class="meta"><strong>'+s.km+'</strong>natt: '+s.night+'</div></article>').join('');

const get=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}},save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const defaults=Object.fromEntries(costs.map(c=>[c.key,c.value]));
const budget=get('usa2027-budget-v2',defaults);
$('#budget').innerHTML=costs.map((c,i)=>'<label for="c'+i+'">'+c.key+'<small>'+c.note+'</small><input id="c'+i+'" type="number" min="0" step="50" data-cost="'+c.key+'" value="'+(Number(budget[c.key]??c.value))+'"></label>').join('');
function sum(){let t=0;$$('[data-cost]').forEach(e=>{const n=Math.max(0,Number(e.value)||0);budget[e.dataset.cost]=n;t+=n});const r=Math.round(t*1.10);$('#total').textContent=new Intl.NumberFormat('sv-SE').format(t)+' kr';$('#recommended').textContent=new Intl.NumberFormat('sv-SE').format(r)+' kr';$('#perPerson').textContent=new Intl.NumberFormat('sv-SE').format(Math.round(r/3))+' kr';save('usa2027-budget-v2',budget)}
$$('[data-cost]').forEach(e=>e.oninput=sum);sum();

const checked=get('usa2027-checks-v2',{});
$('#checks').innerHTML=tasks.map((t,i)=>'<label><input type="checkbox" data-check="'+i+'" '+(checked[i]?'checked':'')+'><span><b>'+t.title+'</b><small>'+t.note+'</small></span></label>').join('');
$$('[data-check]').forEach(e=>e.onchange=()=>{checked[e.dataset.check]=e.checked;save('usa2027-checks-v2',checked)});

$('#diary').value=get('usa2027-diary','');
$('#diary').oninput=e=>save('usa2027-diary',e.target.value);
$('#export').onclick=()=>{const blob=new Blob([$('#diary').value],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='USA2027-dagbok.txt';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};