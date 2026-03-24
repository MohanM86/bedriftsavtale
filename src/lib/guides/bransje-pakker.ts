import type { GuideArticle } from "./strom-leverandorer"

export const bransjePakker: Record<string, GuideArticle> = {

  "bedriftsavtaler-restaurant": {
    summary: "Restauranter og serveringssteder har et eget sett med kritiske bedriftsavtaler. Strøm, renhold, forsikring og kaffeavtale er kjernen. Riktig kombinasjon av disse avtalene kan spare en mellomstor restaurant 50 000 til 150 000 kroner per år.",
    sections: [
      {
        heading: "De viktigste bedriftsavtalene for restaurant",
        body: "En norsk restaurant trenger en annen portefølje av bedriftsavtaler enn en kontorbedrift. Strøm er den store variabelkostnaden. Renhold er en fast og stor kostnad. Forsikring dekker unike risikoer i bransjen. Kaffeavtale påvirker gjestetilfredshet. Betalingsløsning og kasse er egne kategorier.",
        list: [
          "Strøm — typisk 5-15% av driftskostnader",
          "Renhold — stor fast kostnad",
          "Forsikring — unike risikoer som avbrudd og produktansvar",
          "Kaffeavtale — gjesteopplevelse og ansattvelferd",
          "Drivstoffkort — kjøring og leveranser"
        ]
      },
      {
        heading: "Strøm for restaurant — fastpris eller spotpris?",
        body: "Strøm er en av de tre største kostnadene for norske restauranter. Med 80 000 til 200 000 kWh i årlig forbruk utgjør en prisforskjell på 20 øre per kWh 16 000 til 40 000 kroner per år. For restauranter med stram margin er fastprisavtale for ett til to år verdt å vurdere for å beskytte budsjettet mot prissjokk."
      },
      {
        heading: "Renhold for restaurant",
        body: "Daglig renhold er ikke valgfritt i restaurant-bransjen. Det er et myndighetskrav og avgjørende for matsikkerhet og gjesteopplevelse. En god renholdsavtale for restaurant spesifiserer rengjøringsfrekvens, dyptrengjøring av kjøkken, hygienerutiner og dokumentasjon. Sjekk alltid at renholdsfirmaet er registrert i Renholdsregisteret."
      },
      {
        heading: "Forsikring for restaurant",
        body: "En restaurant trenger utover yrkesskadeforsikring også ansvarsforsikring mot produktskader, avbruddsforsikring som dekker tapte inntekter ved stengning etter brann eller vannlekkasje og løsøreforsikring for kjøkkeninnredning og inventar. Avbruddsforsikring er spesielt viktig for restauranter der to ukers stengning kan koste mer enn hundretusenvis av kroner."
      },
      {
        heading: "Kaffeavtale for restaurant",
        body: "For restauranter er kaffemaskinvalget en del av produkttilbudet til gjestene, ikke bare ansattvelferd. En helautomatisk bønnemaskin av god kvalitet med profesjonell kaffe gir mersalg og bedre gjesteanmeldelser. En god kaffeavtale inkluderer service med rask responstid slik at maskinen aldri er nede i åpningstid."
      },
      {
        heading: "Betalingsløsning og kasse",
        body: "Betalingsløsning og kassesystem er egne kategorier med egne bedriftsavtaler. De viktigste aktørene for norske restauranter er Nets Epos-systemer, iZettle fra PayPal, Square og norske alternativer som Vipps Point of Sale. Forhandle alltid på transaksjonsgebyret, som typisk er mellom 0,8 og 2,5 prosent av omsetningen."
      }
    ],
    faqs: [
      { question: "Er strøm-mva fradragsberettiget for restaurant?", answer: "Ja. Strøm brukt i næringsvirksomhet er fullt fradragsberettiget for mva. Kontorer og kjøkken i restaurantlokaler dekkes fullt ut. Eventuelle boligdeler er unntatt." },
      { question: "Hva koster renhold for en typisk restaurant per måned?", answer: "En restaurant på 100 til 200 kvadratmeter med daglig renhold fem til seks dager per uke kan forvente en renholdsregning på 15 000 til 35 000 kroner per måned inkludert kjøkkenrenhold." },
      { question: "Trenger restaurant avbruddsforsikring?", answer: "Absolutt. For de fleste restauranter er avbrudd den mest kostbare forsikringshendelsen. En brann eller en alvorlig vannlekkasje som stenger restauranten i fire til åtte uker kan bety tap av inntekter på 200 000 til 500 000 kroner. Avbruddsforsikring er billig i forhold til risikoen." },
      { question: "Kan vi bruke en kaffe-leverandørs maskin på servering?", answer: "Ja. De fleste kaffeavtaler for bedrift inkluderer maskiner som er egnet for profesjonell restaurantbruk. Be spesifikt om en maskin dimensjonert for ditt antall kopper per dag, som for en aktiv restaurant gjerne er 50 til 200 kopper daglig." }
    ],
    relatedSlugs: ["strom-for-restaurant", "renholdsavtale-bedrift", "kaffeavtale-bedrift"]
  },

  "bedriftsavtaler-transport": {
    summary: "Transport og logistikkbedrifter har de høyeste drivstoffkostnadene av alle norske bransjer. Drivstoffkort, forsikring, leasing og mobilabonnement er kjernen i en god avtaleportefølje for transportbedrifter. Riktig drivstoffkortavtale alene kan spare en mellomstor transportbedrift 50 000 til 200 000 kroner per år.",
    sections: [
      {
        heading: "De viktigste avtalene for transportbedrifter",
        body: "For en norsk transportbedrift er drivstoffkostnaden den absolutt viktigste variabelen. Et effektivt drivstoffkort med gode rabatter er grunnmuren. I tillegg er forsikring for gods og kjøretøy, leasing eller finansiering av flåten og mobilabonnement med god dekning langs kjørerutene kritiske.",
        list: [
          "Drivstoffkort — nest dyreste variabelkostnad etter arbeidskraft",
          "Ladekort — for bedrifter som elektrifiserer flåten",
          "Forsikring — gods, kjøretøy og ansvar",
          "Leasing — fleksibel flåtefinansiering",
          "Mobilabonnement med Telenor-dekning"
        ]
      },
      {
        heading: "Drivstoffkort for transportbedrift",
        body: "For en transportbedrift med fem til tjue kjøretøy er drivstoffkortet den viktigste enkeltavtalen. Volumet gir reell forhandlingskraft. Circle K Business og Uno-X Bedrift er de sterkeste alternativene. Circle K er best på landsdekning, Uno-X er billigst per liter i de markedene de har stasjoner. Shell Card passer bedrifter med internasjonal trafikk."
      },
      {
        heading: "Elektrifisering av transportflåten",
        body: "Norsk transport er i rask elektrifisering. El-varebiler er i mange tilfeller lønnsomme allerede på tre til fire år for by-distribusjon. Ladekort fra Mer og Recharge kombinert med hjemme og depot-ladestasjoner gir kontroll over ladekostnadene. Sjekk Enova-støtte for næringstransport."
      },
      {
        heading: "Forsikring for transportbedrift",
        body: "Transportbedrifter trenger utover standardforsikring også godsforsikring som dekker skader på gods under transport, vognskadeforsikring for kjøretøyene, ansvarsforsikring for transportoppdrag og eventuelt CMR-forsikring for internasjonale transporter. Standard bilforsikring dekker ikke gods."
      },
      {
        heading: "Mobilabonnement for sjåfører",
        body: "Sjåfører trenger mobilabonnement med god dekning langs kjørerutene. For norske riksveier og europaveier er Telenor det sikreste valget. Telia er godt langs de mest trafikkerte motorveiene. Ice anbefales ikke for sjåfører som reiser utenfor tettbygde strøk."
      },
      {
        heading: "Leasing av transportkjøretøy",
        body: "Operasjonell leasing er populært i transportbransjen fordi det gir forutsigbare månedskostnader og eliminerer restverdirisikoen. For tyngre kjøretøy over 3,5 tonn finnes spesialiserte leasingaktører. MAN Financial Services, Volvo Financial Services og Scania Financial Services er ledende for lastebiler og busser."
      }
    ],
    faqs: [
      { question: "Hva er beste drivstoffkort for en transportbedrift med 10 biler?", answer: "Circle K Business anbefales for god landsdekning. Be om tilbud basert på månedlig literpris og sammenlign med Uno-X for de rutene dere kjører mest. Med ti biler og typisk 15 000 til 25 000 liter per måned har du reell forhandlingskraft." },
      { question: "Er det lønnsomt å elektrifisere transportflåten nå?", answer: "For by-distribusjon og kortere ruter under 150 km er el-varebiler lønnsomme for de fleste i 2026. For lange ruter og tunge laster er det fortsatt utfordringer med rekkevidde og ladeinfrastruktur. En grundig lønnsomhetsanalyse for din spesifikke ruteportefølje er nødvendig." },
      { question: "Trenger transportbedrifter separat godsforsikring?", answer: "Ja absolutt. Standard kjøretøyforsikring dekker ikke gods som transporteres. Godsforsikring og transportøransvarsforsikring er separate produkter som er obligatoriske for seriøse transportbedrifter." },
      { question: "Hva er CMR-forsikring?", answer: "CMR er en internasjonal konvensjon om godstransport på vei. CMR-forsikring dekker transportørens ansvar ved skade på eller tap av gods ved internasjonale transporter. Obligatorisk for bedrifter som transporterer gods over landegrenser." }
    ],
    relatedSlugs: ["drivstoffkort-bedrift", "ladekort-bedrift", "leasing-bedrift"]
  },

  "bedriftsavtaler-eiendom": {
    summary: "Eiendomsselskaper og forvaltere av næringsbygg har unike behov innen strøm, renhold, alarm og forsikring. Strøm er gjerne den største enkeltutgiften i et næringsbygg, og mange eiendomsselskaper undervurderer mulighetene for å redusere disse kostnadene gjennom bedre avtaler og energieffektivisering.",
    sections: [
      {
        heading: "De viktigste avtalene for eiendomsselskaper",
        body: "Eiendomsselskaper og forvaltere av næringsbygg bruker store beløp på strøm, renhold, vakthold og forsikring. En gjennomgang av disse fire avtalekategoriene er startpunktet for enhver eiendomsbedrift som vil optimalisere driftskostnadene.",
        list: [
          "Strøm — typisk 40-60% av energikostnadene i næringsbygg",
          "Renhold — stor, fast kostnad",
          "Alarm og sikkerhet — lovkrav og forsikringskrav",
          "Forsikring — bygning, innbo og ansvar"
        ]
      },
      {
        heading: "Strøm for næringsbygg",
        body: "Et typisk næringsbygg på 2 000 til 5 000 kvadratmeter bruker mellom 200 000 og 600 000 kWh per år. Dette er et volum der kraftforvaltning fra Fortum eller Fjordkraft er relevant. Eiendomsselskaper med flere bygg bør alltid samle volum i en felles rammeavtale for å maksimere forhandlingskraften."
      },
      {
        heading: "Energieffektivisering i næringsbygg",
        body: "Energieffektivisering er ofte mer lønnsomt enn å forhandle frem lavere strømpris. LED-belysning med bevegelsessensorer, behovsstyrt ventilasjon og varmegjenvinning, smart styring av oppvarming og kjøling og sjekk av isolasjon og vinduer er tiltak som kan redusere strømforbruket med 20 til 40 prosent."
      },
      {
        heading: "Renhold av næringsbygg",
        body: "Renhold av næringsbygg er en stor og fast kostnad. For et bygg med 2 000 kvadratmeter kontorflate er daglig renhold typisk 20 000 til 50 000 kroner per måned. Et tydelig renholdsprogram med konkrete krav i kontrakten er avgjørende for å sikre at du får det du betaler for."
      },
      {
        heading: "Alarm og adgangskontroll",
        body: "Adgangskontroll for næringsbygg med multiple leietakere er komplekst. Du trenger et system som håndterer ulike tilgangsnivåer for ulike leietakere, logging av inn og utgang og fjernkontroll via app. Systemer fra Nedap, ASSA Abloy og HID Global er ledende i det norske markedet for næringsbygg."
      }
    ],
    faqs: [
      { question: "Hvem betaler strøm i et næringsbygg — eier eller leietaker?", answer: "Det avhenger av leieavtalen. I noen avtaler betaler leietaker direkte for strøm via egne målere. I andre betaler eier og viderefakturerer til leietakere basert på areal eller forbruk. Avklar alltid dette i leiekontrakten." },
      { question: "Kan vi søke Enova-støtte for energieffektivisering av næringsbygg?", answer: "Ja. Enova gir tilskudd til energieffektiviseringstiltak i næringsbygg inkludert belysning, varmesystemer og automatisering. Sjekk enova.no for gjeldende ordninger. Store tiltak kan kvalifisere til vesentlige tilskudd." },
      { question: "Hva er passivhus og er det relevant for næringsbygg?", answer: "Passivhusstandard for næringsbygg (NS 3701) setter strenge krav til energibruk. Nyere næringsbygg bygges gjerne etter nær passivhus-standard. For eksisterende bygg kan oppgradering gi dramatisk reduksjon i strøm og varmekostnader." },
      { question: "Er det krav til ladeinfrastruktur i næringsbygg?", answer: "Ja. Fra 2023 er det krav om at nybygg og bygninger som renoveres med mer enn ti parkeringsplasser skal ha infrastruktur for elbillading. Sjekk gjeldende krav i plan og bygningsloven for din spesifikke situasjon." }
    ],
    relatedSlugs: ["stromavtale-for-bedrift", "renholdsavtale-bedrift", "alarm-bedrift"]
  },

  "slik-forhandle-bedriftsavtaler": {
    summary: "De fleste norske bedrifter betaler mer enn nødvendig for bedriftsavtalene sine fordi de ikke forhandler. Leverandørene forventer forhandling, og listeprisen er sjelden den beste prisen du kan oppnå. Her er en praktisk guide til å forhandle bedre betingelser på alle typer bedriftsavtaler.",
    sections: [
      {
        heading: "Hvorfor forhandler så få norske bedrifter?",
        body: "Mange bedriftseiere og innkjøpsansvarlige forhandler ikke fordi de ikke vet at det er mulig, de synes det er ubehagelig, de har ikke tid til å sette seg inn i det, eller de tror de er for små til at det utgjør noen forskjell. Alle fire grunner er feilaktige. Forhandling er forventet, ikke unntak, i B2B-salg."
      },
      {
        heading: "Grunnprinsippet: konkurranse er din beste venn",
        body: "Det viktigste forhandlingskortet du har er at leverandøren vet at du aktivt vurderer konkurrenter. Ingen leverandør vil miste en eksisterende kunde til en konkurrent uten å i det minste forsøke å matche tilbudet. Innhent alltid tilbud fra minst to til tre konkurrerende leverandører og gjør det kjent at du gjør det.",
        list: [
          "Innhent tre tilbud minimum",
          "Gjør det klart at du sammenligner",
          "Bruk konkurrentens tilbud aktivt",
          "Still spesifikt spørsmål: hva er din beste pris?"
        ]
      },
      {
        heading: "Timing — når er du sterkest?",
        body: "Tre måneder før en avtale utløper er din optimale forhandlingssituasjon. Du har tid til å bytte hvis ikke leverandøren kommer deg i møte, og leverandøren vet det. Forhandler du én uke før utløp har du mistet mye av kraften. Sett kalendervarsel tre til seks måneder før alle viktige avtaler fornyes."
      },
      {
        heading: "Hva kan du faktisk forhandle på?",
        body: "Nesten alt er forhandlingsbart. Pris per enhet, månedlig fastbeløp, bindingstid, oppsigelsestid, servicenivå, onboarding-kostnader, ekstra tjenester uten tillegg og prisjusteringsklausuler i avtaleperioden er alle elementer du kan og bør adressere."
      },
      {
        heading: "Volum som forhandlingskort",
        body: "Volum er det viktigste forhandlingskortet i de fleste B2B-kategorier. Jo mer du kjøper, jo mer er leverandøren villig til å gi. Hvis du kan samle innkjøp som tidligere var spredt over flere leverandører hos én, øker forhandlingskraften vesentlig."
      },
      {
        heading: "Skriftlig og etterprøvbart",
        body: "Be alltid om tilbud skriftlig. Muntlige løfter er vanskelige å etterprøve. Et skriftlig tilbud med spesifikke tall er også lettere å bruke som forhandlingskort overfor konkurrentene. Og når du aksepterer et tilbud, sørg for at alle betingelsene er dokumentert i kontrakten."
      }
    ],
    faqs: [
      { question: "Er det akseptabelt å lyve om konkurrentens tilbud?", answer: "Nei. Å oppgi et falskt konkurrenttilbud er uetisk og i ytterste konsekvens kan det skade bedriftens omdømme. Du trenger ikke lyve. Et ekte tilbud fra en konkurrent er nok til å åpne forhandlingen." },
      { question: "Hva gjør vi hvis leverandøren ikke vil forhandle?", answer: "Bytt. Ikke alle leverandører er villige til å forhandle på alle avtaletyper, men de fleste er. Hvis en leverandør kategorisk avviser forhandling uten saklig begrunnelse, er det et signal om kundeverdi og prioritering du bør ta alvorlig." },
      { question: "Bør vi bruke innkjøpskonsulent eller forhandle selv?", answer: "For enkle kategorier som strøm og mobilabonnement er det fullt mulig å forhandle selv med god forberedelse. For komplekse kategorier som IT-drift, større forsikringer og skreddersydde tjenester kan en innkjøpskonsulent gi merverdi." },
      { question: "Hva er BATNA og hvordan bruker vi det?", answer: "BATNA er Best Alternative to Negotiated Agreement — hva du gjør hvis forhandlingen ikke fører frem. Ditt beste alternativ er som regel å gå til konkurrenten. Jo bedre BATNA du har, jo sterkere forhandler. Sørg alltid for at du faktisk kan gjennomføre alternativet, ikke bare true med det." }
    ],
    relatedSlugs: ["hvordan-forhandle-strom-bedrift", "stromavtale-for-bedrift", "mobilabonnement-bedrift"]
  }
}
