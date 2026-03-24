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
    summary: "Fjordkraft er en av Norges største strømleverandører for bedrifter og tilbyr både spotprisavtaler og fastpris. De er kjent for god kundeservice, en velfungerende bedriftsportal og tydelig prisstruktur. Passer godt for bedrifter som ønsker en etablert og pålitelig leverandør.",
    sections: [
      {
        heading: "Hvem er Fjordkraft?",
        body: "Fjordkraft ble etablert i 2001 og er i dag en av Norges fem største strømleverandører målt i antall bedriftskunder. Selskapet er notert på Oslo Børs og leverer strøm til over 200 000 norske virksomheter. Fjordkraft leverer strøm i alle norske prisområder og har særlig sterk tilstedeværelse på Vestlandet og i Midt-Norge."
      },
      {
        heading: "Fjordkrafts bedriftsavtaler",
        body: "Fjordkraft tilbyr tre primære avtaletyper for bedrifter. Spotprisavtalen følger Nord Pool-prisen time for time med et fast påslag per kWh og et månedlig fastbeløp. Fastprisavtalen låser prisen per kWh for ett til tre år og passer bedrifter som ønsker forutsigbarhet. Variabel prisavtale er en mellomting der prisen justeres månedlig basert på markedsforventningene.",
        list: [
          "Spotprisavtale med transparent påslag",
          "Fastprisavtale for 1 til 3 år",
          "Variabel månedsprisavtale",
          "Forvaltningsavtale for bedrifter over 300 000 kWh per år"
        ]
      },
      {
        heading: "Fjordkraft bedriftsportal",
        body: "Fjordkrafts bedriftsportal lar deg se forbruk per anleggspunkt, laste ned fakturaer og administrere kontaktinformasjon. Portalen er velfungerende og oppdateres løpende. For bedrifter med flere anlegg på ulike steder er samlet oversikt i én portal en reell tidsbesparelse."
      },
      {
        heading: "Priser og påslag",
        body: "Fjordkrafts påslag på spotprisavtaler for bedrift er konkurransedyktig og ligger typisk mellom tre og seks øre per kWh eksklusiv moms i 2026, avhengig av forbruksvolum og avtaleform. Månedlig fastbeløp er normalt mellom 49 og 149 kroner. For det mest nøyaktige tilbudet bør du alltid kontakte Fjordkraft direkte med ditt faktiske forbruk."
      },
      {
        heading: "Sammenligning mot andre leverandører",
        body: "Fjordkraft er sammenlignbart med Fortum og Lyse på pris for de fleste avtaletyper. Der Fjordkraft skiller seg ut positivt er på kundeservice og bedriftsportalen. Tibber er rimeligere for bedrifter som aktivt styrer forbruket sitt, men krever mer engasjement. For bedrifter som ønsker en etablert leverandør uten komplikasjoner er Fjordkraft et trygt valg."
      },
      {
        heading: "Hvem passer Fjordkraft bedriftsavtale for?",
        body: "Fjordkraft passer best for kontorbedrifter og servicebedrifter med moderat strømforbruk mellom 20 000 og 500 000 kWh per år som ønsker en stabil og pålitelig leverandør. Bedrifter som verdsetter god kundeservice og en velfungerende portal over å jakte på lavest mulig påslag vil være godt fornøyd med Fjordkraft."
      }
    ],
    faqs: [
      { question: "Er Fjordkraft tilgjengelig i hele Norge?", answer: "Ja. Fjordkraft leverer strøm i alle norske prisområder fra NO1 i Sørøst til NO5 i Nordvest. Strømprisene varierer mellom prisområdene, men Fjordkraft er tilgjengelig uansett lokasjon." },
      { question: "Kan jeg bytte til Fjordkraft midt i en annen avtales bindingstid?", answer: "Du kan tegne ny avtale med Fjordkraft, men du kan fremdeles ha oppsigelsesforpliktelser overfor din nåværende leverandør. Sjekk oppsigelsesvilkårene i eksisterende avtale før bytte." },
      { question: "Tilbyr Fjordkraft gjennomfakturering av nettleie?", answer: "Ja. Fjordkraft tilbyr gjennomfakturering der nettleien faktureres samlet med strømmen. Dette forenkler regnskapet og reduserer antall fakturaer bedriften må håndtere." },
      { question: "Hva skjer med avtalen ved konkurs eller avvikling av bedriften?", answer: "Kontakt Fjordkraft umiddelbart. Normalt avvikles avtalen mot oppgjør for faktisk forbruk frem til avviklingsdatoen. Les oppsigelsesvilkårene i kontrakten din." }
    ],
    relatedSlugs: ["strom-bedriftsavtale-fortum", "strom-bedriftsavtale-tibber", "stromavtale-for-bedrift"]
  },

  "strom-bedriftsavtale-fortum": {
    summary: "Fortum er en av de ledende strømleverandørene for norske bedrifter og er spesielt kjent for kraftforvaltning, digitale energiverktøy og skreddersydde løsninger for mellomstore og større virksomheter. Fortum Online er markedets mest avanserte energiportal for bedriftskunder.",
    sections: [
      {
        heading: "Hvem er Fortum?",
        body: "Fortum er et finsk energiselskap med sterk tilstedeværelse i Norden. I Norge leverer de strøm til over 150 000 bedriftskunder og er en av de fem største aktørene i bedriftsmarkedet. Fortum er særlig kjent for sine digitale energiløsninger og kompetanse innen kraftforvaltning."
      },
      {
        heading: "Fortums bedriftsavtaler",
        body: "Fortum tilbyr spotprisavtaler, fastprisavtaler og kraftforvaltning. Spotprisavtalen er standard med et fast påslag per kWh. Fastpris tilbys for ett til syv år, noe som er lengre enn de fleste konkurrentene og passer virksomheter med lang tidshorisont og behov for prisforutsigbarhet.",
        list: [
          "Spotpris med konkurransedyktig påslag",
          "Fastpris opp til 7 år",
          "Kraftforvaltning for forbruk over 100 000 kWh per år",
          "Grønne opprinnelsesgarantier som tilvalg"
        ]
      },
      {
        heading: "Fortum Online — det beste energistyringsverktøyet?",
        body: "Fortum Online er Fortums digitale portal for bedriftskunder og anses av mange som markedets mest avanserte energistyringsverktøy. Du kan se forbruk per time og per anlegg, sette opp budsjettvarslinger, ta ut energirapporter og analysere effekttopper. For bedrifter med energi som en vesentlig kostnad er dette en reell fordel."
      },
      {
        heading: "Priser og påslag for Fortum bedrift",
        body: "Fortum er priskonkurrerende og ligger på linje med Fjordkraft for de fleste avtaletyper. Påslaget på spotprisavtaler for bedrift er typisk mellom tre og sju øre per kWh eksklusiv moms avhengig av volum. Fortum tilbyr også Fortum Entreprenør-programmet der du kan kombinere privat- og bedriftsavtale med 50 prosent rabatt på fastbeløpet."
      },
      {
        heading: "Kraftforvaltning for større bedrifter",
        body: "For bedrifter med et forbruk over 100 000 kWh per år tilbyr Fortum kraftforvaltning der strøm handles på dine vegne etter en avtalt strategi. Forvaltningen fordeler innkjøpene over tid for å redusere prisrisiko. Dette er en premiumtjeneste som ikke er offentlig priset — ta kontakt med Fortum for et tilpasset tilbud."
      },
      {
        heading: "Hvem passer Fortum bedriftsavtale for?",
        body: "Fortum passer best for bedrifter der energi er en vesentlig kostnad og der data og rapportering har verdi. Restauranter, industribedrifter, serverparker og bedrifter med mange anlegg vil ha størst nytte av Fortum Online og de avanserte rapporteringsfunksjonene. For en liten kontorbedrift med lavt forbruk er Fortum bra men kanskje overkill."
      }
    ],
    faqs: [
      { question: "Hva er Fortum Online og er det gratis?", answer: "Fortum Online er Fortums digitale energiportal for bedriftskunder. Grunnversjonen er inkludert i alle bedriftsavtaler. Fortum Online Pluss med mer avansert funksjonalitet er gratis for bedrifter med forvaltningsavtale." },
      { question: "Kan vi kombinere privat og bedriftsavtale hos Fortum?", answer: "Ja. Fortum Entreprenør-programmet gir 50 prosent rabatt på fastbeløpet ved bedriftsavtalen når du har både privat og bedriftsavtale hos Fortum. Relevant for enkeltpersonforetak og bedriftseiere." },
      { question: "Tilbyr Fortum grønne strømavtaler?", answer: "Ja. Fortum tilbyr opprinnelsesgarantier som bekrefter at tilsvarende mengde strøm er produsert fra fornybare kilder. Dette er relevant for bedrifter med klimaregnskap og bærekraftsrapportering." },
      { question: "Hva skjer ved bytte fra Fortum til annen leverandør?", answer: "Bytte kan skje ved utløp av bindingstid. For spotprisavtaler uten binding er oppsigelsestiden normalt to til fire uker. Les kontrakten din for eksakte vilkår." }
    ],
    relatedSlugs: ["strom-bedriftsavtale-fjordkraft", "strom-bedriftsavtale-tibber", "stromavtale-for-bedrift"]
  },

  "strom-bedriftsavtale-tibber": {
    summary: "Tibber skiller seg fra tradisjonelle strømleverandører ved å fokusere på timesprisstyring, smarte ladere og digital energioptimalisering. For bedrifter med fleksibelt strømforbruk og evne til å flytte forbruk til billige timer kan Tibber gi vesentlige besparelser. For bedrifter uten denne fleksibiliteten er fordelene begrenset.",
    sections: [
      {
        heading: "Hva er Tibber og hva gjør dem annerledes?",
        body: "Tibber er et norsk teknologiselskap som ble grunnlagt i 2016 og har vokst raskt i det norske og europeiske strømmarkedet. Der tradisjonelle strømleverandører tilbyr en standard spotprisavtale med påslag, er Tibbers kjerneprodukt en plattform for aktivt strømstyring basert på spotprisen time for time."
      },
      {
        heading: "Tibber for bedrift — hva tilbyr de?",
        body: "Tibber tilbyr spotprisavtale uten påslag, men tar i stedet et månedlig abonnementsgebyr. I tillegg selger de smarte ladere, strømstyringssystemer og tilbyr integrasjoner mot solcelleanlegg og batterilagring.",
        list: [
          "Spotpris uten påslag per kWh",
          "Fast månedlig abonnementsgebyr",
          "Tibber Pulse for sanntids strømmåling",
          "Tibber-appen med forbruksvisualisering og prisvarsler",
          "Integrasjon mot smarte ladere og hjemmeautomasjon"
        ]
      },
      {
        heading: "Tibbers prismodell for bedrift",
        body: "Tibbers prismodell er annerledes enn tradisjonelle leverandørers. Du betaler Nord Pool spotpris direkte uten påslag per kWh, men betaler i stedet et månedlig abonnementsgebyr. For bedrifter med høyt forbruk er dette typisk billigere enn en standard spotprisavtale med påslag. For bedrifter med lavt forbruk kan abonnementsgebyret gjøre Tibber dyrere enn alternativer."
      },
      {
        heading: "Timesprisstyring — hvem drar nytte av det?",
        body: "Tibbers store fordel er for bedrifter som kan flytte strømkrevende aktiviteter til timer med lav spotpris. Elbillading, ventilasjon, oppvarming og kjøling er eksempler på belastninger som kan tidsplanlegges. En kontorbedrift der strømforbruket styres av ansattes tilstedeværelse har liten nytte av timesprisstyring. Et kjølelager eller en industribedrift med fleksibel produksjon kan spare vesentlig."
      },
      {
        heading: "Begrensninger ved Tibber for bedrift",
        body: "Tibber er ikke riktig for alle bedrifter. Kraftforvaltning for store forbrukere tilbys ikke. Kundeservice er primært digital og passer bedrifter som er komfortable med selvbetjening. For bedrifter som foretrekker en tradisjonell kundekontakt med dedikert kundebehandler er Fjordkraft eller Fortum bedre alternativer."
      },
      {
        heading: "Hvem passer Tibber for bedrift best for?",
        body: "Tibber passer best for teknologiorienterte bedrifter med fleksibelt strømforbruk, elbiler som lades på bedriften, og ansatte som er interessert i å optimalisere energibruken. Konsulentselskaper, tech-bedrifter og bedrifter med elbilflåte er typiske gode kunder. Tradisjonelle industribedrifter og bedrifter med stivt forbruksmønster har gjerne mer å hente hos Fortum eller Fjordkraft."
      }
    ],
    faqs: [
      { question: "Har Tibber bedre priser enn andre strømleverandører?", answer: "Tibber har null påslag per kWh men tar et månedlig abonnementsgebyr. For høyforbruksbedrifter er dette gjerne billigere totalt. For bedrifter med lavt forbruk kan abonnementsgebyret gjøre Tibber dyrere. Beregn alltid totalkostnad basert på ditt faktiske forbruk." },
      { question: "Krever Tibber spesielt utstyr?", answer: "Tibber Pulse er en enhet som kobles til AMS-måleren og sender forbruksdata i sanntid. Det er ikke et krav for å ha Tibber-avtale, men det gir deg full utnyttelse av plattformen. De smarte laderne er også valgfrie tilleggsprodukter." },
      { question: "Er Tibber tilgjengelig i hele Norge?", answer: "Ja. Tibber leverer strøm i alle norske prisområder. Appen og plattformen fungerer over hele landet." },
      { question: "Kan vi teste Tibber uten binding?", answer: "Tibbers standardavtaler har normalt ingen bindingstid. Du kan si opp med kort varsel. Sjekk de oppdaterte vilkårene på Tibbers nettsider." }
    ],
    relatedSlugs: ["strom-bedriftsavtale-fjordkraft", "strom-bedriftsavtale-fortum", "stromavtale-for-bedrift"]
  }
}
