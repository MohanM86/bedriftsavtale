export type GuideSection = { heading: string; body: string; list?: string[] }
export type GuideFAQ = { question: string; answer: string }
export type GuideArticle = {
  summary: string
  sections: GuideSection[]
  faqs: GuideFAQ[]
  relatedSlugs?: string[]
}

export const stromLeverandorGuides: Record<string, GuideArticle> = {
  "strom-bedriftsavtale-fjordkraft": {
    summary: "Fjordkraft er en av Norges største strømleverandører for bedrifter og tilbyr både spotprisavtaler og fastpris. De er kjent for god kundeservice, en velfungerende bedriftsportal og tydelig prisstruktur.",
    sections: [
      { heading: "Hvem er Fjordkraft?", body: "Fjordkraft ble etablert i 2001 og er i dag en av Norges fem største strømleverandører målt i antall bedriftskunder. Fjordkraft leverer strøm i alle norske prisområder og har særlig sterk tilstedeværelse på Vestlandet og i Midt-Norge." },
      { heading: "Fjordkrafts bedriftsavtaler", body: "Fjordkraft tilbyr spotprisavtaler, fastprisavtaler og variabel prisavtale for bedrifter.", list: ["Spotprisavtale med transparent påslag", "Fastprisavtale for 1 til 3 år", "Variabel månedsprisavtale", "Forvaltningsavtale for store forbrukere"] },
      { heading: "Priser og påslag", body: "Fjordkrafts påslag på spotprisavtaler for bedrift er konkurransedyktig og ligger typisk mellom tre og seks øre per kWh eksklusiv moms i 2026." },
    ],
    faqs: [
      { question: "Er Fjordkraft tilgjengelig i hele Norge?", answer: "Ja. Fjordkraft leverer strøm i alle norske prisområder fra NO1 til NO5." },
      { question: "Tilbyr Fjordkraft gjennomfakturering av nettleie?", answer: "Ja. Fjordkraft tilbyr gjennomfakturering der nettleien faktureres samlet med strømmen." },
    ],
  },
  "strom-bedriftsavtale-fortum": {
    summary: "Fortum er en av de ledende strømleverandørene for norske bedrifter og er spesielt kjent for kraftforvaltning og digitale energiverktøy. Fortum Online er markedets mest avanserte energiportal for bedriftskunder.",
    sections: [
      { heading: "Hvem er Fortum?", body: "Fortum er et finsk energiselskap med sterk tilstedeværelse i Norden. I Norge er de en av de fem største aktørene i bedriftsmarkedet." },
      { heading: "Fortum Online", body: "Fortum Online er Fortums digitale portal for bedriftskunder med avansert forbruksanalyse, budsjettverktøy og rapport-eksport.", list: ["Spotpris med konkurransedyktig påslag", "Fastpris opp til 7 år", "Kraftforvaltning fra 100 000 kWh per år", "Grønne opprinnelsesgarantier"] },
    ],
    faqs: [
      { question: "Hva er Fortum Online?", answer: "Fortum Online er Fortums digitale energiportal for bedriftskunder. Grunnversjonen er inkludert i alle bedriftsavtaler." },
      { question: "Tilbyr Fortum grønne strømavtaler?", answer: "Ja. Fortum tilbyr opprinnelsesgarantier som bekrefter fornybar strømproduksjon." },
    ],
  },
  "strom-bedriftsavtale-tibber": {
    summary: "Tibber skiller seg fra tradisjonelle strømleverandører ved å fokusere på timesprisstyring og digital energioptimalisering. Passer for bedrifter med fleksibelt strømforbruk.",
    sections: [
      { heading: "Hva er Tibber?", body: "Tibber er et norsk teknologiselskap med fokus på aktiv strømstyring basert på spotprisen time for time." },
      { heading: "Tibbers prismodell", body: "Du betaler Nord Pool spotpris direkte uten påslag per kWh, men betaler et månedlig abonnementsgebyr.", list: ["Spotpris uten påslag per kWh", "Fast månedlig abonnementsgebyr", "Tibber Pulse for sanntids måling", "App med prisvarsler"] },
    ],
    faqs: [
      { question: "Er Tibber tilgjengelig i hele Norge?", answer: "Ja. Tibber leverer strøm i alle norske prisområder." },
      { question: "Passer Tibber for alle bedrifter?", answer: "Tibber passer best for teknologiorienterte bedrifter med fleksibelt strømforbruk og elbillading på bedriften." },
    ],
  },
}
