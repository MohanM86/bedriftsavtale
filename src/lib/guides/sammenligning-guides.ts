import type { GuideArticle } from "./strom-leverandorer"

export const sammenligningGuides: Record<string, GuideArticle> = {

  "telenor-vs-telia-bedrift": {
    summary: "Telenor og Telia er de to dominerende mobiloperatørene i det norske bedriftsmarkedet. Telenor har best dekning men er dyrere. Telia er ti til femten prosent rimeligere og har god dekning i byene. For de fleste kontorbedrifter er Telia et utmerket valg. For bedrifter med ansatte i distriktene er Telenor tryggere.",
    sections: [
      {
        heading: "Nettdekning — den viktigste forskjellen",
        body: "Telenor har Norges best utbygde mobilnett og er overlegen Telia i dekning utenfor byene, langs fjordene, på fjellet og i distriktene. Telia har god dekning i alle norske byer og langs de fleste riksveiene, men er svakere enn Telenor i grisgrendte strøk. Start alltid med å sjekke begge operatørenes dekningskart for de adressene og rutene som er viktigst for bedriften."
      },
      {
        heading: "Pris — Telia er ti til femten prosent rimeligere",
        body: "For sammenlignbare pakker med lik datamengde er Telia typisk ti til femten prosent rimeligere enn Telenor. For en bedrift med tjue linjer til 300 kroner per linje per måned utgjør dette 600 til 900 kroner per måned eller 7 200 til 10 800 kroner per år. Ikke uviktig, men ikke avgjørende dersom dekning er kritisk.",
        list: [
          "Telia typisk 10-15% rimeligere enn Telenor",
          "Forskjellen øker med antall linjer",
          "Telenor-premium er begrunnet i best dekning",
          "Forhandle alltid — begge operatørene gir bedre pris ved volum"
        ]
      },
      {
        heading: "Adminportaler — begge er gode",
        body: "Telenors bedriftsportal er moden med mange år med utvikling bak seg. Telia Min Bedrift er solid og har blitt kraftig forbedret de siste to til tre årene. Begge gir deg mulighet til å legge til og fjerne linjer, sette datakvoter, se forbruk per linje og laste ned fakturaer. Ingen av dem er vesentlig bedre enn den andre."
      },
      {
        heading: "Kundeservice — jevnt gode",
        body: "Begge operatørene tilbyr dedikert bedriftskundeservice. Telenor har historisk hatt en fordel her, men Telia har investert kraftig i bedriftskundeservice de siste årene. For bedrifter med store avtaler tilbyr begge dedikert kundekontakt."
      },
      {
        heading: "5G-utbygging",
        body: "Begge operatørene bygger ut 5G i de norske byene, og dekningen er relativt jevn i tettbebygde strøk. Telenor leder fortsatt i 5G-dekning utenfor de store byene. For de fleste bedrifter er god 4G-dekning viktigere enn 5G i 2026."
      },
      {
        heading: "Vår anbefaling",
        body: "Velg Telia hvis alle ansatte primært jobber i byene og prisbesparelsen er viktig. Velg Telenor hvis ansatte opererer i felt, distriktene eller langs ruter med variabel dekning. Kjør alltid en test-periode med noen SIM-kort i de geografiske områdene som er viktigst for bedriften din."
      }
    ],
    faqs: [
      { question: "Kan vi bytte fra Telenor til Telia uten å miste nummer?", answer: "Ja. Nummerportabilitet gir deg rett til å beholde alle numre ved bytte. Prosessen tar normalt én til tre virkedager og er gratis. Den nye operatøren håndterer portabiliteten." },
      { question: "Hva skjer med avtalen ved ansatte som slutter?", answer: "Du sper linjen via adminportalen og betaler ikke mer fra den datoen. Sjekk oppsigelsestiden i din avtale — noen linjer har én måneds varsel, andre kan speres umiddelbart." },
      { question: "Kan vi ha forskjellige operatører for ulike ansatte?", answer: "Teknisk ja, men det anbefales ikke. To operatører betyr to adminportaler, to fakturaer og halvparten av volumet hos begge. Du mister forhandlingskraften og administrasjonsfordelene." },
      { question: "Hva er delt data og passer det for kontorbedrifter?", answer: "Delt data betyr at alle ansatte trekker fra en felles pott. For kontorbedrifter med variabelt forbruk er dette nesten alltid lønnsomt. En superbruker og en lavforbruker deler potten og trenger ikke store individuelle kvoter til alle." }
    ],
    relatedSlugs: ["telenor-bedriftsavtale", "telia-bedriftsavtale", "ice-bedriftsavtale"]
  },

  "hertz-vs-avis-bedrift": {
    summary: "Hertz og Avis er de to klart dominerende leiebilaktørene for norske bedrifter. Prisforskjellen er gjerne marginal, og valget bør baseres på dekning der dere reiser mest, portalens brukervennlighet og eventuelt eksisterende lojalitetsstatus. Hent alltid tilbud fra begge og sammenlign.",
    sections: [
      {
        heading: "Dekning og tilgjengelighet",
        body: "Hertz og Avis er begge tilgjengelige på alle norske flyplasser og i alle store norske byer. Hertz har noe flere hentesteder i de mellomstore norske byene. Avis er noe sterkere representert på europeiske destinasjoner som er populære for norske forretningsreisende."
      },
      {
        heading: "Priser — marginale forskjeller",
        body: "Prisdifferansen mellom Hertz og Avis for sammenlignbare biler på norske destinasjoner er typisk under ti prosent. Kampanjepriser kan midlertidig gjøre én av dem vesentlig billigere. Be alltid om tilbud fra begge basert på din forventede bruksprofil og sammenlign totalpris inkludert forsikring.",
        list: [
          "Prisforskjell normalt under 10%",
          "Kampanjepriser kan gi midlertidige utslag",
          "Forsikringsvalget påvirker totalprisen mer enn dagsprisen",
          "Bedriftskort med leiebildekning eliminerer forsikringskostnaden"
        ]
      },
      {
        heading: "Lojalitetsprogrammer",
        body: "Hertz Gold Plus Rewards og Avis Preferred er begge solide lojalitetsprogrammer med poengopptjening og express-fordeler. For bedrifter der enkeltansatte reiser mye er status i lojalitetsprogrammet en reell fordel som reduserer ventetid ved henting. Sjekk om noen ansatte allerede har status i det ene programmet."
      },
      {
        heading: "Flåte og kjøretøyutvalg",
        body: "Begge har bredt utvalg av personbiler fra kompakt til SUV. Hertz er noe sterkere på spesialvogner som elektriske kjøretøy i norske byer. Avis har tradisjonelt vært bedre på varebiler i noen markeder. Sjekk alltid tilgjengelighet på den spesifikke lokasjonen du trenger."
      },
      {
        heading: "Internasjonal dekning",
        body: "Hertz er tilgjengelig i over 150 land. Avis er del av Avis Budget Group og er tilgjengelig i over 165 land. Begge gir god global dekning for norske bedrifter med internasjonale reiser. For bestemmelsesland utenfor Europa er det verdt å verifisere lokale vilkår og priser."
      }
    ],
    faqs: [
      { question: "Kan vi tegne avtale med begge leiebilselskapene?", answer: "Ja, men det splitter volumet og reduserer rabattnivået hos begge. For de fleste SMB-bedrifter er det bedre å konsentrere volum hos én og forhandle frem bedre pris." },
      { question: "Er det verdt å betale for One Way-leiebil?", answer: "One Way er praktisk for reiser der du for eksempel flyr til Bergen og tar tog tilbake. Tillegget varierer mye mellom ruter og selskaper. Sammenlign alltid One Way-prisen mot å leie tur-retur fra ett sted." },
      { question: "Dekker bedriftskort alltid leiebilskader?", answer: "Mange premium business-kredittkort inkluderer CDW dekning for leiebil, men dekningen varierer. Ring kortets forsikringsselskap og få skriftlig bekreftelse på hva som dekkes før du takker nei til leiebilselskapets forsikringstilbud." },
      { question: "Hva er minimumsalder for å leie bil på bedriftsavtale?", answer: "Standard minimumsalder er 25 år hos begge selskapene. Sjåfører mellom 21 og 24 år kan normalt leie mot et tillegg. Noen kategorier krever høyere alder. Sjekk alltid vilkårene for den aktuelle bilen." }
    ],
    relatedSlugs: ["hertz-bedriftsavtale", "avis-bedriftsavtale", "reiseavtale-bedrift"]
  },

  "scandic-vs-nordic-choice": {
    summary: "Scandic og Nordic Choice er Nordens to største hotellkjeder og de mest brukte for norske bedriftsreisende. Scandic har noe bedre geografisk dekning i distrikts-Norge. Nordic Choice tilbyr tre prisklasser som gir mer fleksibilitet. For de fleste norske kontorbedrifter er begge gode valg.",
    sections: [
      {
        heading: "Geografisk dekning",
        body: "Scandic har over 280 hoteller i Norden og er noe sterkere enn Nordic Choice i geografisk spredning, spesielt i mellomstore norske byer. Nordic Choice er sterkest i storbyene og har tre merkevarer som dekker ulike prisklasser."
      },
      {
        heading: "Prisfleksibilitet — Nordic Choice vinner",
        body: "Nordic Choice sitt tredelte merkevaresystem gir mer prisfleksibilitet. Clarion for premium-møter og kunder, Quality for standard forretningsreiser og Comfort for budsjettbevisste reisende. Alt fakturert samlet. Scandic har én merkevare i mellom og øvre prissegment uten tilsvarende budsjett-alternativ.",
        list: [
          "Nordic Choice: Clarion, Quality og Comfort i én avtale",
          "Scandic: én merkevare, mellom til premium",
          "Nordic Choice gir mer prisfleksibilitet",
          "Scandic har bedre dekning i distrikts-Norge"
        ]
      },
      {
        heading: "Lojalitetsprogrammer",
        body: "Scandic Friends og Nordic Choice Club er begge velfungerende lojalitetsprogrammer. Scandic Friends er noe mer kjent blant norske forretningsreisende og er integrert i mange TMC-verktøy. Nordic Choice Club er tilsvarende godt men kanskje noe sterkere i Oslo og de største byene."
      },
      {
        heading: "Bærekraft og miljøprofil",
        body: "Scandic er blant Europas mest bærekraftige hotellkjeder og har tydelige klimamål og rapportering. Nordic Choice og Strawberry har også sterke bærekraftsprogrammer. For bedrifter med klimaregnskap er begge aktuelle og kan levere CO2-data per opphold."
      },
      {
        heading: "Konferansefasiliteter",
        body: "Clarion-hotellene i Nordic Choice-familien er markedsledende på konferansefasiliteter i de store norske byene. Clarion Hotel Post i Bergen og Clarion Hotel Oslo er blant Norges best utstyrte konferansehoteller. Scandic har god konferansekapasitet men matcher ikke Clarion på premium-segmentet."
      }
    ],
    faqs: [
      { question: "Kan vi ha avtale med både Scandic og Nordic Choice?", answer: "Ja. Mange bedrifter tegner avtale med begge for å dekke ulike destinasjoner og prisklasser. Merk at det splitter volumet og kan redusere rabattnivået hos begge." },
      { question: "Gjelder bedriftsavtalen i utlandet?", answer: "Scandic Business gjelder i alle Scandic-land i Norden og Europa. Nordic Choice Business gjelder i Norge, Sverige og Danmark. Sjekk alltid dekning på internasjonale destinasjoner du bruker mye." },
      { question: "Hva er kanselleringspolicy for bedriftsavtaler?", answer: "Standard bedriftsavtalepriser hos begge kjedene gir normalt gratis kansellering frem til kl. 18 ankomstdagen. Spesielle kampanje- og forhåndsbetalte priser kan ha strengere vilkår." },
      { question: "Er det dyrt å booke sent?", answer: "Siste-liten-priser er gjerne dyrere enn tidligbestillinger. Med bedriftsavtale er du garantert tilgjengelig rom og en forhåndsavtalt pris som er bedre enn ordinær listepris, men den beste prisen oppnår du alltid ved tidlig bestilling." }
    ],
    relatedSlugs: ["scandic-bedriftsavtale", "nordic-choice-bedriftsavtale", "thon-bedriftsavtale"]
  },

  "hvordan-forhandle-strom-bedrift": {
    summary: "Strøm er en av de få store bedriftsutgiftene der norske bedrifter forhandler direkte med leverandøren uten mellomledd. Operatørene forventer forhandling, og de første prisene du får er sjelden de beste. Her er en konkret fremgangsmåte som gir deg bedre pris og vilkår.",
    sections: [
      {
        heading: "Forberedelse — dette trenger du før du ringer",
        body: "Gode forhandlinger starter med god forberedelse. Samle følgende informasjon fra eksisterende avtale og fakturaer: totalt kWh-forbruk siste tolv måneder, forbruk fordelt på måneder om mulig, ditt prisområde, antall anleggspunkter og gjeldende avtalens utløpsdato og oppsigelsestid.",
        list: [
          "Totalt kWh-forbruk siste 12 måneder",
          "Forbruk per måned om mulig",
          "Prisområde (NO1 til NO5)",
          "Antall anleggspunkter",
          "Gjeldende avtalens utløpsdato"
        ]
      },
      {
        heading: "Innhent minimum tre tilbud skriftlig",
        body: "Ring Fjordkraft, Fortum og minst én tredje leverandør. Oppgi det samme forbruket til alle. Be om skriftlig tilbud med disse spesifikke tallene: påslag per kWh eksklusiv moms, månedlig fastbeløp, bindingstid og oppsigelsesvilkår og om elsertifikat er inkludert i påslaget eller faktureres separat."
      },
      {
        heading: "Bruk tilbudene aktivt i forhandlingen",
        body: "Etter å ha mottatt tre tilbud, ring den leverandøren du foretrekker og si at du har fått et bedre tilbud fra konkurrenten. Spør om de kan matche eller slå det. De fleste leverandørene har rom for å forbedre et tilbud når de vet at du aktivt innhenter konkurrerende tilbud. Gjør dette skriftlig for etterprøvbarhet."
      },
      {
        heading: "Hva kan du forhandle på?",
        body: "Påslaget per kWh er det viktigste forhandlingspunktet. Fastbeløpet per måned er neste. Bindingstid er forhandlingsbart, og kortere bindingstid gir deg fleksibilitet. Be om gjennomfakturering av nettleie uten tillegg. For større forbrukere kan du forhandle på rapporteringsverktøy og dedikert kundekontakt."
      },
      {
        heading: "Timing — ikke vent til siste liten",
        body: "Sett en kalenderavlesning tre måneder før din nåværende avtale utløper. Da har du god tid til å innhente tilbud og forhandle uten tidspress. Leverandørene vet at en bedrift med kort tid igjen av bindingstiden er mer desperat, og du mister forhandlingskort."
      },
      {
        heading: "Kalkuler totalprisen korrekt",
        body: "Et lavt påslag men høyt fastbeløp er ikke nødvendigvis billigst. For ditt faktiske forbruk: gang påslaget per kWh med ditt totale kWh-forbruk og legg til fastbeløpet ganger tolv. Det tallet er din faktiske leverandørkostnad per år eksklusiv spotpris og nettleie. Sammenlign alltid dette tallet, ikke bare påslaget isolert."
      }
    ],
    faqs: [
      { question: "Kan vi bruke en strøm-megler for å forhandle?", answer: "Ja. Strømmeglere som Vinst forhandler på vegne av bedrifter og kan gi tilgang til betingelser vanligvis reservert for store forbrukere. For bedrifter over 100 000 kWh per år er det verdt å vurdere. Sjekk hva megleren tar i honorar." },
      { question: "Hva er et godt påslag i 2026?", answer: "Et konkurransedyktig påslag på spotprisavtale for bedrift i 2026 er mellom tre og sju øre per kWh eksklusiv moms. Lavere er mulig for høye volumer. Vær skeptisk til negative påslag i kampanjeperioder da fastbeløpet ofte er høyt." },
      { question: "Kan vi forhandle på eksisterende avtale uten å vente til utløp?", answer: "Ja, men leverandøren har lite insentiv til å forbedre vilkårene mens du er bundet. Beste forhandlingssituasjon er ved fornyelse. Men ring gjerne og spør om de kan tilby noe bedre for å sikre fornying — noen leverandører gjør det." },
      { question: "Hva er oppsigelsestiden på en standard strømbedriftsavtale?", answer: "Spotprisavtaler uten binding kan normalt sies opp med to til fire ukers varsel. Fastprisavtaler med binding krever oppsigelse innen avtalens utløpsdato, og mange har seks til tolv ukers oppsigelsestid. Les alltid oppsigelsesvilkårene nøye." }
    ],
    relatedSlugs: ["stromavtale-for-bedrift", "spotpris-vs-fastpris-bedrift", "strom-bedriftsavtale-fjordkraft"]
  }
}
