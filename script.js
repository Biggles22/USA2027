const hotels=[
  {
    "id": "santa-monica",
    "date": "29–30 apr",
    "city": "Santa Monica",
    "name": "Sea Shore Motel",
    "room": "2 full beds",
    "price": "2 200–2 800 kr",
    "plan": 2500,
    "nights": 1,
    "dates": [
      "29 apr"
    ],
    "priority": "Tidig bokning",
    "address": "2637 Main St, Santa Monica, CA 90405",
    "lat": 34.00181,
    "lng": -118.48302,
    "image": "https://assets.simpleviewinc.com/simpleview/image/upload/crm/santamonica/_O5C60710-e6bbd78e5056b36_e6bbe64d-5056-b365-ab6821cfd565722c.jpg",
    "official": "https://www.seashoremotel.com/",
    "summary": "Klassiskt familjeägt motell nära stranden och Santa Monica Pier – en passande första natt precis vid Route 66:s västra slut.",
    "features": [
      "Ca 5 min promenad till stranden",
      "Fri parkering",
      "Nära restauranger på Main Street",
      "Klassisk motellkänsla"
    ],
    "tip": "Bra första natt efter LAX. Välj uttryckligen rum med två sängar för tre vuxna.",
    "photoCredit": "Visit Santa Monica"
  },
  {
    "id": "las-vegas",
    "date": "30 apr–2 maj",
    "city": "Las Vegas",
    "name": "Studio 6 Suites Las Vegas, NV – Tropicana",
    "room": "2 Full Beds – kontrollera plats för 3 vuxna",
    "price": "Budget uppskattad – verifiera bokningspris",
    "plan": 3600,
    "nights": 2,
    "dates": [
      "30 apr",
      "1 maj"
    ],
    "priority": "Normal",
    "address": "195 E Tropicana Ave, Las Vegas, NV 89109",
    "lat": 36.100439,
    "lng": -115.164469,
    "image": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%2314263a'/%3E%3Ctext x='400' y='195' fill='white' font-family='Arial' font-size='62' text-anchor='middle' font-weight='bold'%3ESTUDIO 6 SUITES%3C/text%3E%3Ctext x='400' y='270' fill='%23d9c59a' font-family='Arial' font-size='35' text-anchor='middle'%3ELAS VEGAS · TROPICANA%3C/text%3E%3C/svg%3E",
    "official": "https://www.studio6.com/property/motel-las-vegas-nv-nevada-us-294165/",
    "summary": "Prisvärt boende på East Tropicana Avenue, nära södra delen av The Strip och MGM Grand. Ett praktiskt basläger för två nätter i Las Vegas.",
    "features": [
      "Fri parkering enligt hotellets webbplats",
      "Utomhuspool",
      "Kylskåp och pentry enligt hotellets webbplats",
      "Nära södra delen av The Strip"
    ],
    "tip": "Incheckning från 15:00, utcheckning senast 11:00. Kontrollera rumskapacitet för tre vuxna, totalpris och eventuella tillägg vid bokning.",
    "photoCredit": "Illustration – inte hotellfoto"
  },
    {
    "id": "williams",
    "date": "2–4 maj",
    "city": "Williams",
    "name": "The Lodge on Route 66",
    "room": "2 Queen",
    "price": "3 200–4 200 kr",
    "plan": 3600,
    "nights": 2,
    "dates": [
      "2 maj",
      "3 maj"
    ],
    "priority": "Boka tidigt",
    "address": "200 E Route 66, Williams, AZ 86046",
    "lat": 35.251379,
    "lng": -112.185268,
    "image": "https://thelodgeonroute66.com/wp-content/uploads/2025/08/banner.jpg",
    "official": "https://thelodgeonroute66.com/",
    "summary": "Restaurerad familjeägd Route 66-pärla från 1938 mitt i Williams, perfekt bas för Grand Canyon.",
    "features": [
      "2 Queen-rum",
      "Frukost ingår",
      "Parkera utanför rummet",
      "2 kvarter från centrum",
      "Uteplats med eldstäder"
    ],
    "tip": "En av resans mest passande motellnätter. Två nätter gör att Grand Canyon-dagen blir lugnare.",
    "photoCredit": "The Lodge on Route 66"
  },
  {
    "id": "albuquerque",
    "date": "4–6 maj",
    "city": "Albuquerque",
    "name": "El Vado Motel",
    "room": "Double Queen",
    "price": "3 800–4 800 kr",
    "plan": 4200,
    "nights": 2,
    "dates": [
      "4 maj",
      "5 maj"
    ],
    "priority": "Boka tidigt",
    "address": "2500 Central Ave SW, Albuquerque, NM 87104",
    "lat": 35.09431,
    "lng": -106.6772,
    "image": "https://images.squarespace-cdn.com/content/v1/6509ca3fae0f042cf02d4ac2/0770b8c2-3558-451a-991b-7ce2d4705a44/El%2BVado%2BEvent%2BCenter_High%2BRes-14.jpg",
    "official": "https://www.elvadoabq.com/",
    "summary": "Historiskt Route 66-motell från 1937 som kombinerar den gamla motor-court-känslan med moderna rum, restauranger och taproom.",
    "features": [
      "Double Queen för upp till 4",
      "Fri parkering",
      "Restauranger på området",
      "Säsongsöppen pool",
      "Central Avenue / Route 66"
    ],
    "tip": "Mycket bra för två nätter eftersom både Old Town och Breaking Bad-rundan blir lättillgängliga.",
    "photoCredit": "El Vado"
  },
  {
    "id": "tucumcari",
    "date": "6–7 maj",
    "city": "Tucumcari",
    "name": "Blue Swallow Motel",
    "room": "Family Suite / rum för 3",
    "price": "1 800–2 300 kr",
    "plan": 2000,
    "nights": 1,
    "dates": [
      "6 maj"
    ],
    "priority": "BOKA FÖRST",
    "address": "815 E Route 66 Blvd, Tucumcari, NM 88401",
    "lat": 35.171866,
    "lng": -103.716421,
    "image": "https://blueswallowmotel.com/wp-content/uploads/2023/05/home-slide-show-scaled.jpg",
    "official": "https://blueswallowmotel.com/",
    "summary": "Ett av Route 66:s mest ikoniska motell. Familjeägt, original motor court från 1939 med restaurerade rum, garage och klassisk neon på kvällen.",
    "features": [
      "Family Suite finns",
      "Berömd neonskyltning",
      "Historiska garage",
      "National Register of Historic Places",
      "Äkta Route 66-upplevelse"
    ],
    "tip": "Boka först av alla. Under mars–oktober tas avbokningsavgift ut och incheckning behöver ske senast cirka 21:00.",
    "photoCredit": "Blue Swallow Motel"
  },
  {
    "id": "amarillo",
    "date": "7–8 maj",
    "city": "Amarillo",
    "name": "Big Texan Motel",
    "room": "2 beds",
    "price": "1 300–1 700 kr",
    "plan": 1500,
    "nights": 1,
    "dates": [
      "7 maj"
    ],
    "priority": "Normal",
    "address": "7701 Interstate 40 Access Rd, Amarillo, TX 79118",
    "lat": 35.19362,
    "lng": -101.75427,
    "image": "https://bigtexan.com/cdn/shop/files/Big-Texan-Airbnb-2-scaled.jpg?v=1752020117&width=2000",
    "official": "https://bigtexan.com/pages/motels",
    "summary": "Färgstarkt 54-rumsmotell i old-west-stil precis bredvid Big Texan Steak Ranch – kitschigt på precis rätt roadtrip-sätt.",
    "features": [
      "Old West-tema",
      "Bredvid Steak Ranch",
      "24 h reception",
      "Tvättmöjligheter",
      "Enkel access till I-40"
    ],
    "tip": "Inte det mest historiska motellet på rutten, men ett roligt stopp efter Cadillac Ranch och en stark roadtrip-kväll.",
    "photoCredit": "The Big Texan"
  },
  {
    "id": "okc",
    "date": "8–9 maj",
    "city": "Oklahoma City",
    "name": "Saddleback Inn",
    "room": "2 Queen",
    "price": "1 200–1 600 kr",
    "plan": 1400,
    "nights": 1,
    "dates": [
      "8 maj"
    ],
    "priority": "Normal",
    "address": "4300 SW 3rd St, Oklahoma City, OK 73108",
    "lat": 35.46224,
    "lng": -97.59764,
    "image": "https://media.iceportal.com/46494/photos/72287494_XXL.jpg",
    "official": "",
    "summary": "Stor motel-style-anläggning väster om centrala Oklahoma City med enkel bilaccess och gott om plats – vald främst för praktisk övernattning.",
    "features": [
      "2 Queen-rum",
      "Parkering",
      "Frukost har erbjudits",
      "Pool",
      "Nära I-40"
    ],
    "tip": "Fastighetens varumärke/status verkar ha ändrats i vissa aktuella register. Kontrollera att hotellet fortfarande drivs under rätt namn innan bokning.",
    "photoCredit": "ICE Portal"
  },
  {
    "id": "tulsa",
    "date": "9–10 maj",
    "city": "Tulsa",
    "name": "The Campbell Hotel",
    "room": "Double Queen / större rum",
    "price": "1 400–1 900 kr",
    "plan": 1700,
    "nights": 1,
    "dates": [
      "9 maj"
    ],
    "priority": "Normal",
    "address": "2636 E 11th St, Tulsa, OK 74104",
    "lat": 36.14755,
    "lng": -95.9521,
    "image": "https://www.routemagazine.us/assets/stories/miracle-on-11th-street/campbell-hotel-1.jpg",
    "official": "https://www.thecampbellhotel.com/",
    "summary": "Boutiquehotell i en historisk byggnad från 1927 direkt på gamla Route 66/11th Street, med individuellt inredda temarum.",
    "features": [
      "Historisk Route 66-adress",
      "26 individuella rum",
      "Boutique-känsla",
      "Restaurang/lounge",
      "Parkering"
    ],
    "tip": "Inte ett klassiskt motor court, men ett av de mer karaktärsfulla hotellen på resan. Bekräfta rum med två sängar för tre vuxna.",
    "photoCredit": "Route Magazine"
  },
  {
    "id": "springfield-mo",
    "date": "10–11 maj",
    "city": "Springfield MO",
    "name": "Rockwood Motor Court",
    "room": "Fill ’Er Up / Cottage",
    "price": "1 400–1 600 kr",
    "plan": 1500,
    "nights": 1,
    "dates": [
      "10 maj"
    ],
    "priority": "BOKA FÖRST",
    "address": "2200 W College St, Springfield, MO 65806",
    "lat": 37.2088,
    "lng": -93.3231,
    "image": "https://rockwoodcourt.com/wp-content/uploads/2025/02/Courtyard-full-MO-LIFE-AD-v2-redo.jpg",
    "official": "https://rockwoodcourt.com/",
    "summary": "Route 66-historia på riktigt: ett motor court från 1929, renoverat med vintageinredning och fortfarande byggt kring den klassiska gårdsformen.",
    "features": [
      "Sedan 1929",
      "Renoverat 2019",
      "Fri parkering och Wi-Fi",
      "Cottage för upp till 4",
      "Fill ’Er Up i gammal Shell-station"
    ],
    "tip": "Boka tidigt. För er tre är Cottage eller Fill ’Er Up de mest intressanta alternativen och en av resans starkaste motellupplevelser.",
    "photoCredit": "Rockwood Motor Court"
  },
  {
    "id": "st-louis",
    "date": "11–12 maj",
    "city": "St. Louis",
    "name": "Holiday Inn St Louis SW - Route 66",
    "room": "2 Queen",
    "price": "1 400–1 900 kr",
    "plan": 1700,
    "nights": 1,
    "dates": [
      "11 maj"
    ],
    "priority": "Normal",
    "address": "10709 Watson Rd, St. Louis, MO 63127",
    "lat": 38.55539,
    "lng": -90.40874,
    "image": "https://digital.ihg.com/is/image/ihg/holiday-inn-st.-louis-6320204920-4x3",
    "official": "https://www.ihg.com/holidayinn/hotels/us/en/st-louis/stlsw/hoteldetail",
    "summary": "Renoverat Holiday Inn på historiska Route 66 med bra bilaccess mot St. Louis och gott om gratis parkering.",
    "features": [
      "Gratis parkering",
      "Utomhuspool i säsong",
      "24/7 gym",
      "Restaurang på området",
      "Route 66-läge"
    ],
    "tip": "Praktiskt snarare än nostalgiskt – bra plats för en bekväm natt före den kortare körningen till Springfield, Illinois.",
    "photoCredit": "IHG"
  },
  {
    "id": "springfield-il",
    "date": "12–13 maj",
    "city": "Springfield IL",
    "name": "Comfort Suites near Route 66",
    "room": "2 Queen + sofa bed",
    "price": "1 500–1 700 kr",
    "plan": 1500,
    "nights": 1,
    "dates": [
      "12 maj"
    ],
    "priority": "Normal",
    "address": "2620 S Dirksen Pkwy, Springfield, IL 62703",
    "lat": 39.7687,
    "lng": -89.6088,
    "image": "https://images.trvl-media.com/lodging/1000000/30000/25300/25204/46f17a01.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    "official": "https://www.choicehotels.com/illinois/springfield/comfort-suites-hotels/il127",
    "summary": "Rymligt och praktiskt svithotell nära Route 66 – ett bra komfortstopp inför sista etappen mot Chicago.",
    "features": [
      "2 Queens + bäddsoffa",
      "Gratis varm frukost",
      "Gratis parkering och Wi-Fi",
      "Inomhuspool",
      "Kyl och mikro"
    ],
    "tip": "Bra val för tre eftersom ni får gott om sov- och bagageutrymme utan att behöva två rum.",
    "photoCredit": "Comfort Suites"
  },
  {
    "id": "chicago",
    "date": "13–14 maj",
    "city": "Chicago",
    "name": "Ohio House Motel",
    "room": "Rum med 2 sängar – bekräftas",
    "price": "2 500–3 300 kr",
    "plan": 2800,
    "nights": 1,
    "dates": [
      "13 maj"
    ],
    "priority": "Tidig bokning",
    "address": "600 N LaSalle Dr, Chicago, IL 60654",
    "lat": 41.89273,
    "lng": -87.63317,
    "image": "https://irp.cdn-website.com/e2c7fdbd/dms3rep/multi/opt/imgi_88_32_front3--694af8f569db5-1920w.jpg",
    "official": "https://www.ohiohousemotel.com/",
    "summary": "Ikoniskt downtown-motell från 1960 mitt i River North – ett ovanligt sätt att behålla motellkänslan ända in i centrala Chicago.",
    "features": [
      "River North",
      "Sedan 1960",
      "24/7 reception",
      "Gratis Wi-Fi",
      "Gångavstånd till mycket i centrum"
    ],
    "tip": "Bekräfta rumstyp med två sängar för tre vuxna. Parkeringen är begränsad och kostar extra, så kontrollera aktuell parkeringsavgift vid bokning.",
    "photoCredit": "Ohio House Motel"
  },
  {
    "id": "ohare",
    "date": "14–15 maj",
    "city": "O'Hare",
    "name": "Hampton Inn Chicago-O'Hare",
    "room": "2 Queen",
    "price": "1 600–2 000 kr",
    "plan": 1700,
    "nights": 1,
    "dates": [
      "14 maj"
    ],
    "priority": "Normal",
    "address": "3939 N Mannheim Rd, Schiller Park, IL 60176",
    "lat": 41.9495,
    "lng": -87.8855,
    "image": "https://res.cloudinary.com/lastminute/image/upload/q_auto/v1759227368/jutrxqc4b2wno4yiimft.jpg",
    "official": "https://www.hilton.com/en/hotels/chiaphx-hampton-chicago-ohare-international-airport/",
    "summary": "Sista natten är helt funktionell: nära O'Hare med flygplatstransfer så att hemresedagen blir enkel och stressfri.",
    "features": [
      "Gratis 24/7 flygplatsshuttle",
      "Gratis varm frukost",
      "Gratis parkering under vistelsen",
      "Inomhuspool",
      "Gratis Wi-Fi"
    ],
    "tip": "Perfekt sista natt. Planera bilreturen och shuttle-tiden så ni är på ORD i mycket god tid före 19:15-flyget.",
    "photoCredit": "Hampton by Hilton"
  }
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


const preTrip={date:'Före avresa',place:'ESTA + eSIM',hotel:0,food:0,car:0,fuel:0,parking:0,activity:0,misc:1800,note:'ESTA 1 200 kr + eSIM 600 kr'};
const dailyBudget=[
{date:'29 apr',place:'Santa Monica',hotel:2500,food:900,car:1050,fuel:50,parking:200,activity:0,misc:50},
{date:'30 apr',place:'Las Vegas',hotel:1800,food:1400,car:1050,fuel:550,parking:200,activity:100,misc:50},
{date:'1 maj',place:'Las Vegas',hotel:1800,food:1700,car:1050,fuel:50,parking:300,activity:200,misc:100},
{date:'2 maj',place:'Williams',hotel:1800,food:1400,car:1050,fuel:500,parking:100,activity:1090,misc:50},
{date:'3 maj',place:'Williams / Grand Canyon',hotel:1800,food:1400,car:1050,fuel:250,parking:0,activity:2480,misc:50},
{date:'4 maj',place:'Albuquerque',hotel:2100,food:1400,car:1050,fuel:700,parking:100,activity:100,misc:100},
{date:'5 maj',place:'Albuquerque',hotel:2100,food:1400,car:1050,fuel:50,parking:100,activity:100,misc:100},
{date:'6 maj',place:'Tucumcari',hotel:2000,food:1400,car:1050,fuel:350,parking:50,activity:100,misc:50},
{date:'7 maj',place:'Amarillo',hotel:1500,food:1400,car:1050,fuel:250,parking:50,activity:100,misc:50},
{date:'8 maj',place:'Oklahoma City',hotel:1400,food:1400,car:1050,fuel:550,parking:100,activity:400,misc:50},
{date:'9 maj',place:'Tulsa',hotel:1700,food:1400,car:1050,fuel:250,parking:50,activity:100,misc:50},
{date:'10 maj',place:'Springfield MO',hotel:1500,food:1400,car:1050,fuel:350,parking:100,activity:50,misc:50},
{date:'11 maj',place:'St. Louis',hotel:1700,food:1400,car:1050,fuel:450,parking:150,activity:500,misc:50},
{date:'12 maj',place:'Springfield IL',hotel:1500,food:1400,car:1050,fuel:200,parking:200,activity:0,misc:50},
{date:'13 maj',place:'Chicago',hotel:2800,food:1600,car:1050,fuel:400,parking:500,activity:50,misc:50},
{date:'14 maj',place:"Chicago / O'Hare",hotel:1700,food:2000,car:1050,fuel:50,parking:800,activity:50,misc:0},
{date:'15 maj',place:"O'Hare / hemresa",hotel:0,food:1000,car:1200,fuel:0,parking:0,activity:0,misc:0}
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
const get=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}},save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const money=n=>new Intl.NumberFormat('sv-SE').format(Math.round(n))+' kr';
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const defaults=Object.fromEntries(costs.map(c=>[c.key,c.value]));
const budget=get('usa2027-budget-v2',defaults);
const pageIds=[...$$('[data-page]')].map(b=>b.dataset.page);
function show(id,scroll=true){
  if(!pageIds.includes(id)) id='start';
  $$('.page').forEach(p=>{
    const active=p.id===id;
    p.classList.toggle('active',active);
    p.hidden=!active;
  });
  $$('[data-page]').forEach(b=>{
    const active=b.dataset.page===id;
    b.classList.toggle('active',active);
    b.setAttribute('aria-selected',String(active));
    b.tabIndex=active?0:-1;
    if(active){
      b.scrollIntoView({behavior:scroll?'smooth':'auto',block:'nearest',inline:'center'});
    }
  });
  if(id==='hotell') setTimeout(initHotelMap,80);
  if(scroll) window.scrollTo({top:0,behavior:'smooth'});
}
function navigate(id){
  if(location.hash==='#'+id) show(id);
  else location.hash=id;
}
$$('[data-page]').forEach(b=>b.onclick=()=>navigate(b.dataset.page));
$$('[data-jump]').forEach(b=>b.onclick=()=>navigate(b.dataset.jump));
$('#nav').addEventListener('keydown',e=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
  e.preventDefault();
  const current=pageIds.indexOf(document.activeElement.dataset.page);
  const next=e.key==='Home'?0:e.key==='End'?pageIds.length-1:(current+(e.key==='ArrowRight'?1:-1)+pageIds.length)%pageIds.length;
  const button=document.querySelector('[data-page="'+pageIds[next]+'"]');
  button.focus();
  navigate(button.dataset.page);
});
window.addEventListener('hashchange',()=>show(location.hash.slice(1)));
show(location.hash.slice(1)||'start',false);

function updateCountdown(){
  const target=new Date('2027-04-29T09:55:00+02:00').getTime();
  const now=Date.now();
  const diff=target-now;
  const box=$('#countdown');
  if(!box) return;
  if(diff<=0){
    box.className='countdown departed';
    box.innerHTML='✈ Nu börjar Route 66-resan!';
    return;
  }
  const days=Math.floor(diff/86400000);
  const hours=Math.floor((diff%86400000)/3600000);
  const minutes=Math.floor((diff%3600000)/60000);
  const seconds=Math.floor((diff%60000)/1000);
  $('#cdDays').textContent=days;
  $('#cdHours').textContent=String(hours).padStart(2,'0');
  $('#cdMinutes').textContent=String(minutes).padStart(2,'0');
  $('#cdSeconds').textContent=String(seconds).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);

let lightboxReturnFocus=null;
function openBreakingBadLightbox(e){
  if(e) e.preventDefault();
  const source=$('#bbMapImage');
  const modal=$('#bbModalImage');
  const box=$('#bbLightbox');
  if(!source || !source.src || !modal || !box) return;
  lightboxReturnFocus=document.activeElement;
  modal.src=source.src;
  box.hidden=false;
  document.body.classList.add('no-scroll');
  $('#bbLightboxClose').focus();
}
function closeBreakingBadLightbox(){
  const box=$('#bbLightbox');
  if(!box || box.hidden) return;
  box.hidden=true;
  document.body.classList.remove('no-scroll');
  if(lightboxReturnFocus) lightboxReturnFocus.focus();
}
const bbTextLink=$('#bbMapTextLink');
const bbImageLink=$('#bbMapLink');
const bbClose=$('#bbLightboxClose');
const bbBox=$('#bbLightbox');
if(bbTextLink) bbTextLink.addEventListener('click',openBreakingBadLightbox);
if(bbImageLink) bbImageLink.addEventListener('click',openBreakingBadLightbox);
if(bbClose) bbClose.addEventListener('click',closeBreakingBadLightbox);
if(bbBox) bbBox.addEventListener('click',function(e){if(e.target===bbBox) closeBreakingBadLightbox();});
document.addEventListener('keydown',function(e){
 if(e.key==='Escape') closeBreakingBadLightbox();
 if(e.key==='Tab'&&bbBox&&!bbBox.hidden){e.preventDefault();bbClose.focus();}
});



const hotelBookings=get('usa2027-hotel-bookings',{});
function plannedHotel(h){
 const originalTotal=hotels.reduce((s,hotel)=>s+hotel.plan,0);
 return originalTotal?h.plan*Number(budget['Boende']||0)/originalTotal:0;
}
function varianceHtml(plan,actual){
 if(actual===null||actual===undefined||actual==='') return '<span class="variance neutral">–</span>';
 const diff=Number(actual)-plan, cls=diff<0?'good':(diff>0?'bad':'neutral'), sign=diff>0?'+':'';
 return '<span class="variance '+cls+'">'+sign+money(diff)+'</span>';
}
function renderHotels(){
 $('#hotels').innerHTML=hotels.map(h=>{
   const cls=h.priority==='BOKA FÖRST'?'priority':(h.priority==='Normal'?'normal':'');
   const actual=hotelBookings[h.id];
   const actualVal=(actual===undefined||actual===null||actual==='')?'':Number(actual);
   const currentPlan=plannedHotel(h);
   return '<tr><td>'+h.date+'</td><td>'+h.city+'</td><td><strong>'+h.name+'</strong></td><td>'+h.room+'</td>'+
     '<td class="plan-price"><strong>'+money(currentPlan)+'</strong><small>spann '+h.price+'</small></td>'+
     '<td><input class="booked-price" type="number" min="0" step="1" aria-label="Bokat pris för '+h.name+'" data-hotel-booked="'+h.id+'" value="'+actualVal+'" placeholder="0"></td>'+
     '<td data-hotel-var="'+h.id+'">'+varianceHtml(currentPlan,actualVal)+'</td>'+
     '<td><span class="status '+cls+'">'+h.priority+'</span></td></tr>';
 }).join('');
 $$('[data-hotel-booked]').forEach(e=>e.oninput=()=>{
   const v=e.value===''?'':Math.max(0,Number(e.value)||0);
   hotelBookings[e.dataset.hotelBooked]=v;
   save('usa2027-hotel-bookings',hotelBookings);
   updateBookingSummary();
   renderDailyBudget();
   const h=hotels.find(x=>x.id===e.dataset.hotelBooked);
   document.querySelector('[data-hotel-var="'+h.id+'"]').innerHTML=varianceHtml(plannedHotel(h),v);
 });
 updateBookingSummary();
}
function updateBookingSummary(){
 const booked=hotels.filter(h=>hotelBookings[h.id]!==undefined&&hotelBookings[h.id]!==null&&hotelBookings[h.id]!=='');
 const budgetBooked=booked.reduce((s,h)=>s+plannedHotel(h),0);
 const actual=booked.reduce((s,h)=>s+Number(hotelBookings[h.id]||0),0);
 const diff=actual-budgetBooked;
 $('#bookedCount').textContent=booked.length+' / '+hotels.length;
 $('#bookedBudget').textContent=money(budgetBooked);
 $('#bookedActual').textContent=money(actual);
 $('#bookedVariance').textContent=(diff>0?'+':'')+money(diff);
 $('#bookedVarianceText').textContent=booked.length===0?'ingen bokning ännu':(diff<0?'under budget':diff>0?'över budget':'exakt budget');
 $('#overviewHotels').textContent=booked.length+' / '+hotels.length;
 const card=$('#bookedVarianceCard'); card.classList.remove('good','bad');
 if(booked.length){ if(diff<0)card.classList.add('good'); if(diff>0)card.classList.add('bad'); }
}
renderHotels();

function hotelMapsUrl(h){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(h.address);}
function hotelPopupHtml(h,i){
  const official=h.official?'<a class="hotel-popup-btn primary" href="'+h.official+'" target="_blank" rel="noopener">Webbplats</a>':'';
  const features=h.features.slice(0,4).map(f=>'<li>'+f+'</li>').join('');
  return '<article class="hotel-popup-card">'+
    '<div class="hotel-popup-photo"><img src="'+h.image+'" alt="'+h.name+' i '+h.city+'" loading="lazy" referrerpolicy="no-referrer"><span>Bild: '+h.photoCredit+'</span></div>'+
    '<div class="hotel-popup-body"><div class="hotel-popup-top"><span class="hotel-popup-number">'+String(i+1).padStart(2,'0')+'</span><span class="status '+(h.priority==='BOKA FÖRST'?'priority':h.priority==='Normal'?'normal':'')+'">'+h.priority+'</span></div>'+
    '<small>'+h.date+' · '+h.city+'</small><h4>'+h.name+'</h4><p>'+h.summary+'</p>'+
    '<dl><div><dt>Rum</dt><dd>'+h.room+'</dd></div><div><dt>Planpris</dt><dd>'+h.price+'</dd></div><div><dt>Nätter</dt><dd>'+h.nights+'</dd></div><div><dt>Adress</dt><dd>'+h.address+'</dd></div></dl>'+
    '<ul>'+features+'</ul><div class="hotel-popup-tip"><b>Vårt tips:</b> '+h.tip+'</div>'+
    '<div class="hotel-popup-actions">'+official+'<a class="hotel-popup-btn" href="'+hotelMapsUrl(h)+'" target="_blank" rel="noopener">Google Maps</a></div></div></article>';
}
function renderHotelDetails(){
  const target=$('#hotelDetails'); if(!target) return;
  target.innerHTML=hotels.map((h,i)=>{
    const cls=h.priority==='BOKA FÖRST'?'priority':(h.priority==='Normal'?'normal':'');
    const official=h.official?'<a class="hotel-btn primary-hotel" href="'+h.official+'" target="_blank" rel="noopener">Webbplats →</a>':'';
    const features=h.features.map(f=>'<li>'+f+'</li>').join('');
    return '<article class="hotel-detail-card">'+
      '<div class="hotel-photo"><img src="'+h.image+'" alt="'+h.name+' i '+h.city+'" loading="lazy" referrerpolicy="no-referrer"><span class="hotel-photo-credit">Bild: '+h.photoCredit+'</span></div>'+
      '<div class="hotel-detail-body"><div class="hotel-card-top"><span class="hotel-order">'+String(i+1).padStart(2,'0')+'</span><span class="status '+cls+'">'+h.priority+'</span></div>'+
      '<small class="hotel-date">'+h.date+' · '+h.city+'</small><h4>'+h.name+'</h4><p class="hotel-summary">'+h.summary+'</p>'+
      '<div class="hotel-facts"><div><b>Adress</b><span>'+h.address+'</span></div><div><b>Rum för er</b><span>'+h.room+'</span></div><div><b>Planpris</b><span>'+h.price+'</span></div></div>'+
      '<ul class="hotel-features">'+features+'</ul>'+
      '<div class="hotel-tip"><b>Vårt tips</b><span>'+h.tip+'</span></div>'+
      '<div class="hotel-actions">'+official+'<a class="hotel-btn" href="'+hotelMapsUrl(h)+'" target="_blank" rel="noopener">Google Maps →</a></div></div></article>';
  }).join('');
}
renderHotelDetails();

let hotelMapInstance=null;
function initHotelMap(){
  const el=$('#hotelMap');
  if(!el || typeof L==='undefined') return;
  if(hotelMapInstance){hotelMapInstance.invalidateSize();return;}
  hotelMapInstance=L.map(el,{scrollWheelZoom:false,zoomControl:true});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(hotelMapInstance);
  const points=[];
  hotels.forEach((h,i)=>{
    const p=[h.lat,h.lng]; points.push(p);
    const icon=L.divIcon({className:'hotel-marker-shell',html:'<span class="hotel-marker"><b>'+(i+1)+'</b></span>',iconSize:[34,42],iconAnchor:[17,40],popupAnchor:[0,-36]});
    const marker=L.marker(p,{icon}).addTo(hotelMapInstance);
    marker.bindPopup(hotelPopupHtml(h,i),{maxWidth:360,minWidth:300,className:'hotel-rich-popup'});
  });
  L.polyline(points,{color:'#b86e32',weight:4,opacity:.78,dashArray:'9 7'}).addTo(hotelMapInstance);
  hotelMapInstance.fitBounds(points,{padding:[28,28]});
}

const routeDetails=[
 {drive:'≈35 min',depart:'Efter bilhämtning',origin:'Los Angeles International Airport',destination:'Santa Monica Pier'},
 {drive:'≈5 tim 15 min',depart:'07:00',origin:'Santa Monica',destination:'Las Vegas'},
 {drive:'Lokalt',depart:'Flexibelt',origin:'Las Vegas',destination:'Fremont Street Las Vegas'},
 {drive:'≈4 tim 45 min',depart:'08:00',origin:'Las Vegas',destination:'Williams Arizona'},
 {drive:'≈3 tim tur/retur',depart:'07:00',origin:'Williams Arizona',destination:'Grand Canyon South Rim'},
 {drive:'≈6 tim 15 min',depart:'07:00',origin:'Williams Arizona',destination:'Albuquerque',long:true},
 {drive:'Lokalt',depart:'Flexibelt',origin:'Albuquerque Old Town',destination:'Central Avenue Albuquerque'},
 {drive:'≈2 tim 45 min',depart:'09:00',origin:'Albuquerque',destination:'Tucumcari'},
 {drive:'≈2 tim 15 min',depart:'09:00',origin:'Tucumcari',destination:'Amarillo'},
 {drive:'≈4 tim 15 min',depart:'08:00',origin:'Amarillo',destination:'Oklahoma City'},
 {drive:'≈2 tim 15 min',depart:'09:00',origin:'Oklahoma City',destination:'Tulsa'},
 {drive:'≈3 tim 30 min',depart:'08:30',origin:'Tulsa',destination:'Springfield Missouri'},
 {drive:'≈4 tim',depart:'08:00',origin:'Springfield Missouri',destination:'St. Louis'},
 {drive:'≈2 tim',depart:'Förmiddag',origin:'St. Louis',destination:'Springfield Illinois'},
 {drive:'≈3 tim 30 min',depart:'08:30',origin:'Springfield Illinois',destination:'Chicago'},
 {drive:'≈45 min',depart:'Eftermiddag',origin:'Downtown Chicago',destination:"Chicago O'Hare International Airport"},
 {drive:'10–20 min',depart:'Enligt flygtid',origin:"Chicago O'Hare hotel",destination:"Chicago O'Hare International Airport"}
];
const routeDone=get('usa2027-route-done',{});
const routeNotes=get('usa2027-route-notes',{});
function mapsUrl(detail){return 'https://www.google.com/maps/dir/?api=1&travelmode=driving&origin='+encodeURIComponent(detail.origin)+'&destination='+encodeURIComponent(detail.destination)}
function updateRouteProgress(){
 const done=itinerary.filter((_,i)=>routeDone[i]).length;
 $('#routeProgress').textContent=done+' / '+itinerary.length;
 $('#routeProgressBar').style.width=(done/itinerary.length*100)+'%';
 $('#overviewDays').textContent=done+' / '+itinerary.length;
}
$('#stops').innerHTML=itinerary.map((s,i)=>{
 const detail=routeDetails[i];
 return '<article class="stop '+(detail.long?'long-day':'')+'" data-date="'+s.date+'">'+
  '<div class="day">Dag '+(i+1)+'<small>'+s.date+'</small></div>'+
  '<div class="stop-content"><div class="stop-heading"><h3>'+s.title+'</h3>'+(detail.long?'<span class="status priority">LÅNG KÖRDAG</span>':'')+'</div><p>'+s.text+'</p>'+
  '<div class="stop-tools"><span>⏱ '+detail.drive+'</span><span>Start: '+detail.depart+'</span><a href="'+mapsUrl(detail)+'" target="_blank" rel="noopener">Öppna i Google Maps ↗</a></div>'+
  '<details><summary>Dagens anteckning</summary><textarea rows="3" data-route-note="'+i+'" aria-label="Anteckning för '+s.date+'" placeholder="Stopp, tider eller minnen...">'+escapeHtml(routeNotes[i]||'')+'</textarea></details></div>'+
  '<div class="meta"><strong>'+s.km+'</strong><span>natt: '+s.night+'</span><label class="day-done"><input type="checkbox" data-route-done="'+i+'" '+(routeDone[i]?'checked':'')+'> Klar</label></div></article>';
}).join('');
$$('[data-route-done]').forEach(input=>input.onchange=()=>{routeDone[input.dataset.routeDone]=input.checked;save('usa2027-route-done',routeDone);updateRouteProgress()});
$$('[data-route-note]').forEach(input=>input.oninput=()=>{routeNotes[input.dataset.routeNote]=input.value;save('usa2027-route-notes',routeNotes)});
updateRouteProgress();
const bbFeature=$('.breaking-bad-feature');
const abqDay=document.querySelector('.stop[data-date="5 maj"]');
if(bbFeature&&abqDay) abqDay.insertAdjacentElement('afterend',bbFeature);

$('#budget').innerHTML=costs.map((c,i)=>'<label for="c'+i+'">'+c.key+'<small>'+c.note+'</small><input id="c'+i+'" type="number" min="0" step="50" data-cost="'+c.key+'" value="'+(Number(budget[c.key]??c.value))+'"></label>').join('');
function sum(){
  $$('[data-cost]').forEach(e=>budget[e.dataset.cost]=Math.max(0,Number(e.value)||0));
  save('usa2027-budget-v2',budget);
  renderHotels();
  renderDailyBudget();
}
$$('[data-cost]').forEach(e=>e.oninput=sum);


function bookedHotelShare(date){
 const h=hotels.find(x=>x.dates.includes(date));
 if(!h) return null;
 const actual=hotelBookings[h.id];
 if(actual===undefined||actual===null||actual==='') return null;
 return Number(actual)/h.nights;
}
const sourceTotals={
 hotel:dailyBudget.reduce((s,d)=>s+d.hotel,0),
 food:dailyBudget.reduce((s,d)=>s+d.food,0),
 car:dailyBudget.reduce((s,d)=>s+d.car,0),
 fuel:dailyBudget.reduce((s,d)=>s+d.fuel,0),
 parking:dailyBudget.reduce((s,d)=>s+d.parking,0),
 activity:dailyBudget.reduce((s,d)=>s+d.activity,0),
 misc:preTrip.misc+dailyBudget.reduce((s,d)=>s+d.misc,0)
};
function scale(value,source,target){return source?value*target/source:0}
function currentTargets(){
 return {
  hotel:Number(budget['Boende']||0),
  food:Number(budget['Mat & dryck']||0),
  car:Number(budget['Hyrbil']||0)+Number(budget['Hyrbilsförsäkring']||0),
  fuel:Number(budget['Bensin']||0),
  parking:Number(budget['Parkering & vägtullar']||0),
  activity:Number(budget['Nationalparkspass']||0)+Number(budget['Hoover Dam']||0)+Number(budget['Gateway Arch']||0)+Number(budget['Route 66 Museum']||0)+Number(budget['Övriga attraktioner']||0),
  misc:Number(budget['ESTA']||0)+Number(budget['eSIM, tvätt & småutgifter']||0)
 };
}
function renderDailyBudget(){
const targets=currentTargets();
const preMisc=scale(preTrip.misc,sourceTotals.misc,targets.misc);
let running=preMisc;
const preRow='<tr class="pretrip"><td>'+preTrip.date+'</td><td>'+preTrip.place+'</td><td>–</td><td>–</td><td>–</td><td>–</td><td>–</td><td>–</td><td>–</td><td>–</td><td>'+money(preMisc)+'</td><td class="total-day">'+money(preMisc)+'</td><td class="running">'+money(running)+'</td></tr>';
const dayRows=dailyBudget.map(d=>{
  const plannedHotel=scale(d.hotel,sourceTotals.hotel,targets.hotel);
  const actualHotel=bookedHotelShare(d.date);
  const hotelDiff=actualHotel===null?null:actualHotel-plannedHotel;
  const food=scale(d.food,sourceTotals.food,targets.food);
  const car=scale(d.car,sourceTotals.car,targets.car);
  const fuel=scale(d.fuel,sourceTotals.fuel,targets.fuel);
  const parking=scale(d.parking,sourceTotals.parking,targets.parking);
  const activity=scale(d.activity,sourceTotals.activity,targets.activity);
  const misc=scale(d.misc,sourceTotals.misc,targets.misc);
  const total=(actualHotel===null?plannedHotel:actualHotel)+food+car+fuel+parking+activity+misc;
  running+=total;
  const actualHtml=actualHotel===null?'<span class="actual-empty">–</span>':money(actualHotel);
  const diffHtml=hotelDiff===null?'<span class="variance neutral">–</span>':'<span class="variance '+(hotelDiff<0?'good':hotelDiff>0?'bad':'neutral')+'">'+(hotelDiff>0?'+':'')+money(hotelDiff)+'</span>';
  return '<tr><td>'+d.date+'</td><td>'+d.place+'</td><td>'+money(plannedHotel)+'</td><td>'+actualHtml+'</td><td>'+diffHtml+'</td><td>'+money(food)+'</td><td>'+money(car)+'</td><td>'+money(fuel)+'</td><td>'+money(parking)+'</td><td>'+money(activity)+'</td><td>'+money(misc)+'</td><td class="total-day">'+money(total)+'</td><td class="running">'+money(running)+'</td></tr>';
}).join('');
$('#dailyBudget').innerHTML=preRow+dayRows;
const dayBase=running;
const tripDaysTotal=dayBase-preMisc;
const dayPlan=Math.round(dayBase*1.10);
$('#preTripTotal').textContent=money(preMisc);
$('#tripDaysTotal').textContent=money(tripDaysTotal);
$('#dailyBaseTotal').textContent=money(dayBase);
$('#dailyPlanTotal').textContent=money(dayPlan);
$('#dailyPerPerson').textContent=money(Math.round(dayPlan/3))+'/person';
$('#total').textContent=money(dayBase);
$('#recommended').textContent=money(dayPlan);
$('#perPerson').textContent=money(Math.round(dayPlan/3));
$('#overviewPerPerson').textContent=money(Math.round(dayPlan/3));
$('#overviewBudgetCompact').textContent='≈'+Math.round(dayPlan/1000)+'k';
$('#overviewBudgetText').textContent='Aktuell gruppbudget '+money(dayPlan)+' exklusive flyg, inklusive ungefär 10 % reserv.';
}
renderDailyBudget();

const checked=get('usa2027-checks-v2',{});
$('#checks').innerHTML=tasks.map((t,i)=>'<label><input type="checkbox" data-check="'+i+'" '+(checked[i]?'checked':'')+'><span><b>'+t.title+'</b><small>'+t.note+'</small></span></label>').join('');
function updateTaskStatus(){$('#overviewTasks').textContent=tasks.filter((_,i)=>!checked[i]).length+' kvar'}
$$('[data-check]').forEach(e=>e.onchange=()=>{checked[e.dataset.check]=e.checked;save('usa2027-checks-v2',checked);updateTaskStatus()});
updateTaskStatus();

$('#diary').value=get('usa2027-diary','');
$('#diary').oninput=e=>save('usa2027-diary',e.target.value);
function download(name,data,type){const blob=new Blob([data],{type});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
$('#exportDiary').onclick=()=>download('USA2027-dagbok.txt',$('#diary').value,'text/plain;charset=utf-8');
$('#exportPlan').onclick=()=>{
 const data={version:1,exportedAt:new Date().toISOString(),hotelBookings,budget,checks:checked,diary:$('#diary').value,routeDone,routeNotes};
 download('USA2027-reseplan.json',JSON.stringify(data,null,2),'application/json;charset=utf-8');
};
$('#importPlan').onchange=async e=>{
 const status=$('#importStatus');
 try{
  const data=JSON.parse(await e.target.files[0].text());
  if(!data||data.version!==1) throw new Error('Felaktigt filformat');
  if(data.hotelBookings) save('usa2027-hotel-bookings',data.hotelBookings);
  if(data.budget) save('usa2027-budget-v2',data.budget);
  if(data.checks) save('usa2027-checks-v2',data.checks);
  if(typeof data.diary==='string') save('usa2027-diary',data.diary);
  if(data.routeDone) save('usa2027-route-done',data.routeDone);
  if(data.routeNotes) save('usa2027-route-notes',data.routeNotes);
  status.textContent='Reseplanen importerades. Sidan uppdateras…';
  setTimeout(()=>location.reload(),700);
 }catch(error){status.textContent='Kunde inte importera filen. Kontrollera att det är en export från USA2027.'}
};

const safety=[['Los Angeles / Santa Monica','Extra uppmärksamhet','Välj välbelyst hotellparkering och lämna inget bagage i bilen.'],['Barstow / Needles','Normal försiktighet','Välj etablerade motell och upplysta parkeringar.'],['Kingman / Seligman','Normal försiktighet','Ta med värdesaker även vid korta stopp.'],['Flagstaff / Holbrook','Normal försiktighet','Läs färska hotellrecensioner om parkering.'],['Gallup / Albuquerque','Extra uppmärksamhet','Kontrollera hotellets exakta kvarter och parkering.'],['Tucumcari / Amarillo','Normal försiktighet','Undvik obevakad bil med packning vid stopp.'],['Oklahoma City / Tulsa','Områdesberoende','Välj hotell efter läge, recensioner och parkering.'],['Joplin / Springfield','Normal försiktighet','Vanliga försiktighetsåtgärder och upplyst parkering.'],['St. Louis','Extra uppmärksamhet','Kontrollera adress i polisens brottskarta innan bokning.'],['Chicago','Extra uppmärksamhet','Välj garage eller bevakad hotellparkering; återlämna hyrbilen när den inte behövs.']];if($('#safetyRows')) $('#safetyRows').innerHTML=safety.map(s=>'<tr><td>'+s[0]+'</td><td>'+s[1]+'</td><td>'+s[2]+'</td></tr>').join('');

const foodStops=[
{place:"Santa Monica, Kalifornien",name:"Mel's Drive-In",meal:"frukost",note:"Klassisk 50-talskänsla, pannkakor och ägg. Bra start den 30 april före avfärd.",address:"1670 Lincoln Blvd, Santa Monica, CA 90404"},
{place:"Yermo, Kalifornien",name:"Peggy Sue's 50's Diner",meal:"lunch",note:"Retro-diner från 1950-talet, milkshakes och hamburgare. Avstickare via I-15 – endast om rutten passar.",address:"35654 Yermo Rd, Yermo, CA 92398"},
{place:"Kingman, Arizona",name:"Mr D'z Route 66 Diner",meal:"lunch",note:"En Route 66-klassiker med hamburgare, milkshakes och hemgjord root beer.",address:"105 E Andy Devine Ave, Kingman, AZ 86401"},
{place:"Albuquerque, New Mexico",name:"66 Diner",meal:"lunch",note:"1950-talsmiljö, green chile cheeseburger och stora milkshakes. Öppnar normalt först vid lunch.",address:"1405 Central Ave NE, Albuquerque, NM 87106"},
{place:"Tucumcari, New Mexico",name:"SideKix on 66",meal:"frukost",note:"Tidig frukost med burritos, pannkakor och New Mexico-smaker.",address:"321 E Route 66 Blvd, Tucumcari, NM 88401"},
{place:"Stroud, Oklahoma",name:"Rock Cafe",meal:"frukost",note:"Historisk diner från Route 66 med koppling till filmen Cars. Kontrollera veckodag – normalt stängt söndag.",address:"114 W Main St, Stroud, OK 74079"},
{place:"Stroud, Oklahoma",name:"Rock Cafe",meal:"lunch",note:"Hamburgare och klassisk amerikansk husmanskost på historisk Route 66.",address:"114 W Main St, Stroud, OK 74079"},
{place:"Springfield, Illinois",name:"Cozy Dog Drive In",meal:"lunch",note:"Berömd för sin Cozy Dog, en friterad korv på pinne. Normalt stängt söndag.",address:"2935 S 6th St, Springfield, IL 62703"},
{place:"Chicago, Illinois",name:"Lou Mitchell's",meal:"frukost",note:"Historisk diner nära Route 66:s östra slut. Pannkakor, omelett och kaffe. Normalt stängt måndag–tisdag.",address:"565 W Jackson Blvd, Chicago, IL 60661"},
{place:"Chicago, Illinois",name:"Lou Mitchell's",meal:"lunch",note:"Klassiskt lunchstopp för att fira målgången i Chicago. Stänger normalt kl. 14.",address:"565 W Jackson Blvd, Chicago, IL 60661"}];
function renderFood(filter){const arr=foodStops.filter(s=>filter==='alla'||s.meal===filter);$('#foodList').innerHTML=arr.map((s,i)=>'<article class="stop"><b>'+(s.meal==='frukost'?'☕':'🍔')+'</b><div><small style="color:#a46d35;font-weight:700;text-transform:uppercase">'+s.place+' · '+s.meal+'</small><h3>'+s.name+'</h3><p>'+s.note+'</p><p style="margin-top:9px"><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(s.address)+'">Visa på karta ↗</a></p></div></article>').join('')}
renderFood('alla');$$('[data-meal]').forEach(b=>b.addEventListener('click',()=>{$$('[data-meal]').forEach(x=>x.classList.remove('primary'));b.classList.add('primary');renderFood(b.dataset.meal)}));
