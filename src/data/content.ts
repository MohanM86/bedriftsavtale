export interface Guide {
  slug: string
  title: string
  description: string
  category?: string
  readTime: string
  published: string
}

export interface Industry {
  slug: string
  title: string
  description: string
  categories: string[]
}

export interface CompanySize {
  slug: string
  title: string
  description: string
  categories: string[]
}

export const guides: Guide[] = [
  { slug: "hva-er-en-bedriftsavtale", title: "Hva er en bedriftsavtale?", description: "En komplett innføring i hva bedriftsavtaler er, hvilke typer som finnes, og hvorfor det lønner seg med rammeavtaler.", readTime: "5 min", published: "2024-11-01" },
  { slug: "hvordan-sammenligne-bedriftsavtaler", title: "Slik sammenligner du bedriftsavtaler", description: "Steg-for-steg guide til hvordan du sammenligner tilbud, forstår priser og velger riktig leverandør.", readTime: "7 min", published: "2024-11-05" },
  { slug: "beste-bensinkort-for-bedrift", title: "Beste bensinkort for bedrift i 2026", description: "Hvilke bensinkort gir best rabatt, dekning og rapporteringsverktøy for norske bedrifter?", category: "drivstoffkort-bedrift", readTime: "8 min", published: "2024-11-10" },
  { slug: "hvordan-velge-hotellavtale-for-bedrift", title: "Slik velger du hotellavtale for bedrift", description: "Hva bør du se etter? Sammenlign Scandic, Nordic Choice, Thon og internasjonale kjeder.", category: "hotellavtale-bedrift", readTime: "6 min", published: "2024-11-12" },
  { slug: "stromavtale-for-bedrift", title: "Strømavtale for bedrift: komplett guide", description: "Spot, fastpris eller variabel? Forstå prismodellene og velg riktig for næringsvirksomhet.", category: "stromavtale-bedrift", readTime: "7 min", published: "2024-11-15" },
  { slug: "mobilabonnement-for-bedrift", title: "Mobilabonnement for bedrift: komplett guide", description: "Sammenlign Telenor, Telia og Ice for bedrift. Hva er viktigst å vurdere?", category: "mobilabonnement-bedrift", readTime: "9 min", published: "2024-11-18" },
  { slug: "nar-lonner-det-seg-med-firmabilavtale", title: "Når lønner det seg med firmabilavtale?", description: "Fordeler og ulemper med firmabil. Beskatning, leasing vs. kjøp og hva som er smart for ulike bedrifter.", category: "firmabilavtale", readTime: "8 min", published: "2024-11-20" },
  { slug: "hvordan-forhandle-bedriftsavtaler", title: "Slik forhandler du bedre bedriftsavtaler", description: "Taktikker og tips for å forhandle frem bedre vilkår, lavere priser og mer fleksible betingelser.", readTime: "6 min", published: "2024-11-22" },
  { slug: "viktigste-avtaler-sma-bedrifter", title: "De viktigste avtalene for små bedrifter", description: "Hvilke avtaler bør en bedrift med 1–10 ansatte prioritere?", readTime: "7 min", published: "2024-11-25" },



  { slug: "telenor-vs-telia-bedrift", title: "Telenor vs Telia for bedrift 2026 – Hvem bør du velge?", description: "Grundig sammenligning av Telenor og Telia for bedrift. Dekning, pris og adminportal.", category: "mobilabonnement-bedrift", readTime: "7 min", published: "2026-03-06" },
  { slug: "hertz-vs-avis-bedrift", title: "Hertz vs Avis for bedrift 2026 – Sammenligning og guide", description: "Sammenligning av Hertz og Avis for bedrifter. Priser, dekning og lojalitetsprogrammer.", category: "firmabilavtale", readTime: "6 min", published: "2026-03-07" },
  { slug: "scandic-vs-nordic-choice", title: "Scandic vs Nordic Choice for bedrift – Hvem er best?", description: "Sammenligning av Scandic Business og Nordic Choice Business. Dekning, pris og fordeler.", category: "hotellavtale-bedrift", readTime: "7 min", published: "2026-03-08" },
  { slug: "hvordan-forhandle-strom-bedrift", title: "Slik forhandler du bedre strømpris for bedrift 2026", description: "Praktisk guide til å forhandle frem bedre strømbetingelser. Steg for steg.", category: "stromavtale-bedrift", readTime: "8 min", published: "2026-03-09" },
  { slug: "bedriftsavtaler-restaurant", title: "De viktigste bedriftsavtalene for restaurant 2026", description: "Strøm, renhold, forsikring og kaffe. Komplett guide til bedriftsavtaler for norske restauranter.", readTime: "8 min", published: "2026-03-10" },
  { slug: "bedriftsavtaler-transport", title: "Bedriftsavtaler for transport og logistikk 2026", description: "Drivstoffkort, forsikring og leasing. De viktigste avtalene for norske transportbedrifter.", readTime: "8 min", published: "2026-03-11" },
  { slug: "bedriftsavtaler-eiendom", title: "Bedriftsavtaler for eiendom og næringsbygg 2026", description: "Strøm, renhold og sikkerhet. Komplett guide til bedriftsavtaler for eiendomsselskaper.", readTime: "7 min", published: "2026-03-12" },
  { slug: "slik-forhandle-bedriftsavtaler", title: "Slik forhandler du bedre bedriftsavtaler – Komplett guide", description: "Praktisk guide til å forhandle frem bedre betingelser på alle typer bedriftsavtaler.", readTime: "9 min", published: "2026-03-13" },
  { slug: "strom-for-transport", title: "Strøm for transport og logistikk 2026", description: "Strømbehov, riktig avtale og energieffektivisering for norske transportbedrifter.", category: "stromavtale-bedrift", readTime: "6 min", published: "2026-03-14" },
  { slug: "strom-for-butikk", title: "Strøm for butikk og detaljhandel 2026 – Spar 30%", description: "LED, kjøling og riktig strømavtale for norske butikker. Komplett guide.", category: "stromavtale-bedrift", readTime: "6 min", published: "2026-03-15" },
  { slug: "scandic-bedriftsavtale", title: "Scandic bedriftsavtale 2026 – Nordens største hotellkjede", description: "Alt om Scandic Business-programmet. Priser, Friends-poeng og sammenligning mot Nordic Choice og Thon.", category: "hotellavtale-bedrift", readTime: "6 min", published: "2026-02-12" },
  { slug: "nordic-choice-bedriftsavtale", title: "Nordic Choice bedriftsavtale 2026 – Clarion, Quality og Comfort", description: "Guide til Nordic Choice Hotels bedriftsavtale. Tre merkevarer, ett program. Priser og fordeler.", category: "hotellavtale-bedrift", readTime: "6 min", published: "2026-02-15" },
  { slug: "thon-bedriftsavtale", title: "Thon Hotels bedriftsavtale 2026 – Best i distrikts-Norge", description: "Komplett guide til Thon Business. Norsk kjede med bred dekning i mellomstore byer.", category: "hotellavtale-bedrift", readTime: "5 min", published: "2026-02-18" },
  { slug: "avis-bedriftsavtale", title: "Avis bedriftsavtale leiebil 2026 – Guide og priser", description: "Alt om Avis Business. Priser, Avis Preferred og sammenligning mot Hertz og Europcar.", category: "firmabilavtale", readTime: "6 min", published: "2026-02-20" },
  { slug: "strom-bedriftsavtale-lyse", title: "Lyse bedriftsavtale strøm 2026 – Best på Sør-Vestlandet", description: "Guide til Lyse sin bedriftsavtale for strøm. Priser og fordeler for bedrifter i Rogaland.", category: "stromavtale-bedrift", readTime: "5 min", published: "2026-02-22" },
  { slug: "spotpris-vs-fastpris-bedrift", title: "Spotpris eller fastpris for bedrift? Komplett guide 2026", description: "Grundig gjennomgang av spotpris vs fastpris for bedrift. Hvem bør velge hva og hvorfor?", category: "stromavtale-bedrift", readTime: "8 min", published: "2026-02-25" },
  { slug: "strom-for-restaurant", title: "Strøm for restaurant 2026 – Spar på en av de største kostnadene", description: "Strøm er blant de største kostnadene for restaurant. Finn riktig avtale og spar penger.", category: "stromavtale-bedrift", readTime: "7 min", published: "2026-02-28" },
  { slug: "mobil-for-handverker", title: "Mobilabonnement for håndverker 2026 – Dekning er alt", description: "Hvilken mobilavtale passer best for håndverkere? Dekning, data og robuste enheter.", category: "mobilabonnement-bedrift", readTime: "6 min", published: "2026-03-01" },
  { slug: "strom-for-handverker", title: "Strøm for håndverk og byggbedrift 2026", description: "Riktig strømavtale for håndverkerbedrifter. Kontor, verksted og elbillading.", category: "stromavtale-bedrift", readTime: "5 min", published: "2026-03-03" },
  { slug: "bedriftsavtaler-for-kontor", title: "De viktigste bedriftsavtalene for kontorbedrift 2026", description: "Oversikt over de viktigste avtalene for kontorbedrifter og konsulentselskaper.", readTime: "8 min", published: "2026-03-05" },
  { slug: "strom-bedriftsavtale-fjordkraft", title: "Fjordkraft bedriftsavtale – Guide og erfaringer 2026", description: "Alt om Fjordkraft bedriftsavtale. Priser, erfaringer og sammenligning mot andre strømleverandører for bedrift.", category: "stromavtale-bedrift", readTime: "7 min", published: "2026-01-10" },
  { slug: "strom-bedriftsavtale-fortum", title: "Fortum bedriftsavtale strøm – Guide 2026", description: "Gjennomgang av Fortum sin bedriftsavtale for strøm. Spotpris, forvaltning og Fortum Online.", category: "stromavtale-bedrift", readTime: "6 min", published: "2026-01-12" },
  { slug: "strom-bedriftsavtale-tibber", title: "Tibber for bedrift – Passer timesprisstyring for din bedrift?", description: "Er Tibber et godt valg for bedrift? Se hva som skiller Tibber fra andre strømleverandører og hvem det passer for.", category: "stromavtale-bedrift", readTime: "6 min", published: "2026-01-15" },
  { slug: "sats-bedriftsavtale", title: "Sats bedriftsavtale 2026 – Alt du trenger å vite", description: "Komplett guide til Sats bedriftsavtale. Priser, hva som er inkludert og sammenligning mot andre treningssenter.", category: "bedriftsavtale-treningssenter", readTime: "7 min", published: "2026-01-18" },
  { slug: "elixia-bedriftsavtale", title: "Elixia bedriftsavtale 2026 – Priser og fordeler", description: "Guide til Elixia sin bedriftsavtale. Hva koster det, hva er inkludert og er det verdt det for din bedrift?", category: "bedriftsavtale-treningssenter", readTime: "6 min", published: "2026-01-20" },
  { slug: "bedriftsavtale-treningssenter", title: "Bedriftsavtale treningssenter 2026 – Sats, Elixia, 3T og Evo", description: "Sammenligning av treningssenter-bedriftsavtaler. Sats, Elixia, 3T og Evo. Hvem gir best pris og dekning?", category: "bedriftsavtale-treningssenter", readTime: "9 min", published: "2026-01-22" },
  { slug: "norwegian-bedriftsavtale", title: "Norwegian bedriftsavtale 2026 – Guide for forretningsreisende", description: "Alt om Norwegian sin bedriftsavtale. Priser, CashPoints og sammenligning mot SAS for bedrifter.", category: "reiseavtale-bedrift", readTime: "7 min", published: "2026-01-25" },
  { slug: "sas-bedriftsavtale", title: "SAS bedriftsavtale 2026 – EuroBonus og forretningsreiser", description: "Guide til SAS bedriftsavtale. EuroBonus Business, priser og sammenligning mot Norwegian for bedriftsreisende.", category: "reiseavtale-bedrift", readTime: "7 min", published: "2026-01-28" },
  { slug: "hertz-bedriftsavtale", title: "Hertz bedriftsavtale 2026 – Leiebil for bedrifter", description: "Komplett guide til Hertz bedriftsavtale. Priser, vilkår og sammenligning mot Avis og Europcar for bedrifter.", category: "firmabilavtale", readTime: "6 min", published: "2026-02-01" },
  { slug: "telenor-bedriftsavtale", title: "Telenor bedriftsavtale mobil 2026 – Priser og pakker", description: "Gjennomgang av Telenor sin bedriftsavtale for mobil. Pakker, priser og sammenligning mot Telia og Ice.", category: "mobilabonnement-bedrift", readTime: "7 min", published: "2026-02-05" },
  { slug: "telia-bedriftsavtale", title: "Telia bedriftsavtale mobil 2026 – Guide og priser", description: "Alt om Telia sin bedriftsavtale for mobil. Priser, datakvote og sammenligning mot Telenor og Ice.", category: "mobilabonnement-bedrift", readTime: "7 min", published: "2026-02-08" },
  { slug: "ice-bedriftsavtale", title: "Ice bedriftsavtale mobil 2026 – Billigste alternativ?", description: "Er Ice riktig for din bedrift? Gjennomgang av priser, dekning og begrensninger for Ice bedriftsavtale.", category: "mobilabonnement-bedrift", readTime: "6 min", published: "2026-02-10" },
  { slug: "viktigste-avtaler-vekstselskaper", title: "Bedriftsavtaler for vekstselskaper", description: "Når bedriften vokser fra 10 til 50 ansatte, endres behovene raskt. Her er avtalene du bør ha på plass.", readTime: "8 min", published: "2024-11-28" },
]

export const industries: Industry[] = [
  { slug: "handverker", title: "Håndverker og byggebransjen", description: "Avtaler for rørleggere, elektrikere, malere, snekkere og andre håndverkere.", categories: ["drivstoffkort-bedrift", "forsikring-bedrift", "mobilabonnement-bedrift", "firmabilavtale", "bedriftshelsetjeneste", "regnskapstjenester-bedrift"] },
  { slug: "restaurant", title: "Restaurant og serveringsbransjen", description: "Avtaler tilpasset kafeer, restauranter, catering og serveringssteder.", categories: ["stromavtale-bedrift", "forsikring-bedrift", "kaffeavtale-bedrift", "renholdsavtale-bedrift", "regnskapstjenester-bedrift", "bedriftshelsetjeneste"] },
  { slug: "transport", title: "Transport og logistikk", description: "Avtaler for transportbedrifter, budselskaper og logistikkfirmaer.", categories: ["drivstoffkort-bedrift", "ladekort-bedrift", "firmabilavtale", "forsikring-bedrift", "mobilabonnement-bedrift", "leasing-bedrift"] },
  { slug: "kontor", title: "Kontorbedrift og konsulenter", description: "Avtaler for konsulentselskaper, advokater og andre kontorintensive virksomheter.", categories: ["bredband-bedrift", "mobilabonnement-bedrift", "it-drift-bedrift", "programvare-bedrift", "bedriftskort", "reiseavtale-bedrift"] },
  { slug: "eiendom", title: "Eiendom og forvaltning", description: "Avtaler for eiendomsselskaper, utleiere og forvaltere av næringsbygg.", categories: ["stromavtale-bedrift", "renholdsavtale-bedrift", "alarm-bedrift", "forsikring-bedrift"] },
  { slug: "butikk", title: "Butikk og detaljhandel", description: "Avtaler for dagligvarebutikker, spesialforretninger og nettbutikker.", categories: ["stromavtale-bedrift", "forsikring-bedrift", "alarm-bedrift", "bedriftskort", "fraktavtale-bedrift"] },
  { slug: "hotell", title: "Hotell og overnatting", description: "Avtaler for hoteller, leilighetshoteller og overnattingssteder.", categories: ["stromavtale-bedrift", "renholdsavtale-bedrift", "bredband-bedrift", "kaffeavtale-bedrift", "forsikring-bedrift"] },
  { slug: "helseklinikk", title: "Helse og klinikk", description: "Avtaler for legekontorer, tannlegepraksiser og fysioterapeuter.", categories: ["it-drift-bedrift", "programvare-bedrift", "forsikring-bedrift", "bredband-bedrift", "alarm-bedrift"] },
]

export const companySizes: CompanySize[] = [
  { slug: "enkeltpersonforetak", title: "Enkeltpersonforetak", description: "Soloselvstendige og frilansere. Enkle, kostnadseffektive avtaler uten bindinger.", categories: ["mobilabonnement-bedrift", "regnskapstjenester-bedrift", "forsikring-bedrift", "bedriftskort", "bredband-bedrift"] },
  { slug: "sma-bedrifter", title: "Små bedrifter (1–10 ansatte)", description: "Bedrifter i oppstartsfasen. Prioriterer fleksibilitet og lave faste kostnader.", categories: ["mobilabonnement-bedrift", "bredband-bedrift", "regnskapstjenester-bedrift", "forsikring-bedrift", "bedriftskort"] },
  { slug: "mellomstore-bedrifter", title: "Mellomstore bedrifter (10–100 ansatte)", description: "Etablerte bedrifter som begynner å trenge strukturerte rammeavtaler.", categories: ["mobilabonnement-bedrift", "bredband-bedrift", "stromavtale-bedrift", "reiseavtale-bedrift", "it-drift-bedrift", "hr-system-bedrift"] },
  { slug: "startups", title: "Startups og vekstselskaper", description: "Teknologibedrifter med høy endringstakt. Foretrekker skybaserte løsninger.", categories: ["bredband-bedrift", "programvare-bedrift", "it-drift-bedrift", "hr-system-bedrift", "mobilabonnement-bedrift", "bedriftskort"] },
]

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug)
}
export function getIndustryBySlug(slug: string) {
  return industries.find(i => i.slug === slug)
}
export function getCompanySizeBySlug(slug: string) {
  return companySizes.find(c => c.slug === slug)
}
