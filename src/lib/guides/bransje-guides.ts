import type { GuideArticle } from "./strom-leverandorer"

export const bransjeGuides: Record<string, GuideArticle> = {

  "mobil-for-handverker": {
    summary: "Håndverkere og byggbedrifter har andre behov for mobilabonnement enn kontorbedrifter. God dekning i felt er avgjørende, robuste enheter er viktigere enn premium-telefoner og delt data passer dårlig når alle har høyt og variabelt forbruk. Telenor er dominerende i denne bransjen på grunn av best dekning.",
    sections: [
      {
        heading: "Hva er viktigst for håndverkere i en mobilavtale?",
        body: "For håndverkere er dekning det absolutt viktigste. Det hjelper ikke med lav pris hvis du ikke har signal på byggeplassen i Hallingdal, i kjelleren av et industribygg eller på et landbrug utenfor tettbygd strøk. Telenor er nesten alltid det tryggeste valget for håndverkere fordi de har Norges best utbygde mobilnett utenfor byene."
      },
      {
        heading: "Datakvoter for håndverkere",
        body: "Håndverkere bruker mer data enn gjennomsnittskontorarbeider. Digital ordrehåndtering, bilder fra byggeplassen til FDV-systemet, videokonferanse med kunder og GPS-navigasjon trekker data kontinuerlig. En kvote på 20 til 30 GB per linje er minimum, og delt data fungerer sjelden godt fordi alle har høyt forbruk.",
        list: [
          "30 GB eller mer per linje anbefalt",
          "Delt data passer sjelden for håndverkere",
          "GPS og kartapper bruker mye bakgrunnsdata",
          "4K-bilder fra byggeplass er datakrevende"
        ]
      },
      {
        heading: "Robusthet og enheter",
        body: "Mobiltelefoner for håndverkere bør tåle støv, støt og fukt. IP68-klassifisering betyr at telefonen tåler nedsenking i vann. Mange håndverkere foretrekker Android-telefoner med rugged-design som Samsung Galaxy XCover-serien eller Motorola Defy. Bedriften bør ha en klar policy på om de anskaffer telefoner eller refunderer privat innkjøp."
      },
      {
        heading: "Telenor vs Telia for håndverk",
        body: "Telenor er standard for de fleste håndverksbedrifter fordi dekningen er overlegen utenfor byene. Telia er et godt alternativ for håndverkere som primært jobber i Oslo og de store byene. Ice anbefales ikke for håndverkere som opererer utenfor tettbebygde strøk."
      },
      {
        heading: "Administrasjon av firmamobil for håndverk",
        body: "For håndverksbedrifter med fem til tjue ansatte er en enkel adminportal som lar deg legge til linjer ved nyansettelse og fjerne dem ved avgang det viktigste. Telenors portal dekker dette greit. Drivstoffkort og firmamobil administrert samlet via ett bedriftskort forenkler regnskapet ytterligere."
      }
    ],
    faqs: [
      { question: "Bør vi gi ansatte bedriftstelefon eller refundere privat?", answer: "Bedriftstelefon er enklere å administrere, gi en klar skatt- og regnskapsbehandling og sikrer at bedriften eier enheten. Refusjon av privat innkjøp er mer fleksibelt men skaper uklarhet rundt privat vs jobbbruk og er mer komplekst skattemessig." },
      { question: "Hva er beste mobil for håndverkere?", answer: "Samsung Galaxy XCover-serien og Motorola Defy er spesialbygde for tøff behandling. Galaxy S-serien med IP68 er et godt kompromiss mellom robusthet og brukervennlighet. Unngå enheter uten IP-klassifisering i bransjer med mye støv og fukt." },
      { question: "Trenger håndverkere 5G?", answer: "5G gir raskere dataoverføring men er ikke kritisk for de fleste håndverkeres bruksmønster. God 4G-dekning er viktigere enn 5G-tilgang. Prioriter alltid dekning over 5G-merkelappen." },
      { question: "Kan vi sette datagrenser for ansatte?", answer: "Ja. Alle de store operatørene lar deg sette grenser per linje i adminportalen. Du kan for eksempel sette en advarsel ved 80 prosent forbruk og automatisk begrense hastigheten eller sperre ekstra datakjøp ved 100 prosent." }
    ],
    relatedSlugs: ["telenor-bedriftsavtale", "telia-bedriftsavtale", "mobilabonnement-bedrift"]
  },

  "strom-for-handverker": {
    summary: "Håndverkere og byggbedrifter bruker strøm i kontoret, verkstedet og på arbeidsplasser de ikke eier. Strøm er sjelden en stor kostnad for håndverksbedrifter, men god administrasjon av kontorstrøm og eventuell verkstedstrøm gir penger tilbake.",
    sections: [
      {
        heading: "Håndverkerens strømbehov",
        body: "For de fleste håndverksbedrifter er strøm en relativt liten kostnad sammenlignet med arbeidskraft og materiell. Kontoret bruker typisk 15 000 til 40 000 kWh per år. Verkstedet avhengig av størrelse og utstyr kan bruke 50 000 til 200 000 kWh."
      },
      {
        heading: "Strøm på andres byggeplasser",
        body: "Håndverkere bruker ofte strøm på byggeplasser de ikke eier. Byggherren dekker normalt strøm på arbeidsstedet. Sjekk alltid hvem som betaler for strøm i din entreprisekontrakt for å unngå uventede kostnader."
      },
      {
        heading: "Riktig strømavtale for håndverksbedrift",
        body: "For et lite håndverkerkontor med lavt forbruk er spotprisavtale nesten alltid riktig valg. Forbruket er for lavt til at fastpris gir merkbar risikodekning, og den historiske forventede besparelsen med spotpris over tid er gyldig uavhengig av bransje.",
        list: [
          "Spotprisavtale anbefalt for kontor under 50 000 kWh per år",
          "Verksted over 100 000 kWh kan vurdere fastpris",
          "Sammenlign alltid minst tre leverandører",
          "Gjennomfakturering forenkler regnskapet"
        ]
      },
      {
        heading: "Elbil-lading for håndverkerbiler",
        body: "Mange håndverkerbedrifter elektrifiserer nå flåten. Lading hjemme, på kontoret og på arbeidsplassene gir nye strømbehov. Ladekort for bedrift gir oversikt og kontroll over ladekostnadene."
      }
    ],
    faqs: [
      { question: "Kan vi trekke fra mva på strøm brukt i næringsvirksomhet?", answer: "Ja. Strøm brukt i næringsvirksomhet er mva-pliktig og fullt fradragsberettiget. Ha kontroll på at strøm til kontorer og verksteder er på separate målere fra eventuelt privat bolig for korrekt mva-håndtering." },
      { question: "Hva koster strøm for et typisk rørlegger- eller elektrikerkontor?", answer: "Et lite håndverkerkontor på 100 til 200 kvadratmeter bruker typisk 15 000 til 30 000 kWh per år. Med gjennomsnittspris på 80 til 120 øre per kWh inkludert nettleie er dette 12 000 til 36 000 kroner per år." },
      { question: "Bør vi ha strøm og bredbånd hos samme leverandør?", answer: "Det er praktisk for enklere administrasjon og kan gi rabatter. Sjekk om leverandøren du vurderer tilbyr begge og hva kombinasjonsrabatten eventuelt utgjør." },
      { question: "Kan vi søke Enova-støtte for ladestasjoner til firmabiler?", answer: "Ja. Enova gir tilskudd til ladeinfrastruktur for næringsbygg og bedrifter. Sjekk enova.no for gjeldende støtteordninger for el-varebiler og ladestasjoner." }
    ],
    relatedSlugs: ["stromavtale-for-bedrift", "ladekort-bedrift", "drivstoffkort-bedrift"]
  },

  "bedriftsavtaler-for-kontor": {
    summary: "Kontorbedrifter og konsulentselskaper har et eget sett med prioriterte bedriftsavtaler. Mobil, bredbånd, Microsoft 365 og reiseavtaler er kjernen. Strøm er en liten kostnad, men firmabil, bedriftskort og IT-drift er viktige for de fleste. Her er en gjennomgang av hva som er viktigst.",
    sections: [
      {
        heading: "De viktigste bedriftsavtalene for kontorbedrifter",
        body: "For et typisk norsk konsulentselskap eller kontorbedrift er det fem til syv bedriftsavtaler som utgjør det meste av den potensielle verdien. Mobilabonnement, bredbånd, IT-drift, programvare, reise og bedriftskort er kjernen.",
        list: [
          "Mobilabonnement — alle ansatte, stor besparelse ved volum",
          "Bredbånd med SLA — kritisk infrastruktur",
          "Microsoft 365 — kontorpakke for alle",
          "IT-drift (MSP) — tar hånd om det tekniske",
          "Bedriftskort — samler alle utgifter",
          "Reiseavtale — fly og hotell til avtalte priser"
        ]
      },
      {
        heading: "Strøm for kontorbedrift",
        body: "Strøm er gjerne to til fem prosent av driftskostnadene for en kontorbedrift. Det er lite nok til at det ikke er kritisk å ha den absolutt beste strømavtalen, men stort nok til at en enkel spotprisavtale med konkurransedyktig leverandør er verdt å ha."
      },
      {
        heading: "IT er kjerneinfrastruktur for kontorbedriften",
        body: "For de fleste kontorbedrifter er IT den viktigste infrastrukturen. Microsoft 365-abonnement til riktig pris, god internet-forbindelse med SLA og en pålitelig IT-driftsleverandør som håndterer problemer raskt er grunnmuren. Mange kontorbedrifter undervurderer verdien av en god MSP."
      },
      {
        heading: "Reiseavtaler for konsulentselskaper",
        body: "Konsulentselskaper med mye kundebesøk og reiseaktivitet har mye å hente på gode reiseavtaler. Norwegian eller SAS for fly, Scandic eller Nordic Choice for hotell og Hertz eller Avis for leiebil gir samlet forutsigbare priser og god kostnadsrapportering."
      },
      {
        heading: "Firmabil og bedriftskort for kontorbedrift",
        body: "Firmabil er en etterspurt personalfordel i konsulentbransjen. Elektrisk firmabil på operasjonell leasing er det mest populære i 2026. Bedriftskort samler alle utgifter og gir bonuspoeng på reisene."
      }
    ],
    faqs: [
      { question: "Hva er de viktigste avtalene for et nystartet konsulentselskap?", answer: "Start med mobilabonnement på organisasjonsnummer, Microsoft 365 Business Standard, et enkelt regnskapsprogram som Fiken eller Tripletex og en bedriftsforsikring med ansvarsforsikring. Det holder for de første ett til to år." },
      { question: "Når bør vi tegne reiseavtale?", answer: "Når bedriften har over 50 reisesegmenter per år er det verdt å kontakte Norwegian Business og Scandic Business. Under dette volumet er prisen du oppnår gjennom avtalene ikke vesentlig forskjellig fra å booke ordinært." },
      { question: "Hva er riktig mobil-datamengde for kontorarbeidere?", answer: "Kontorarbeidere med laptop på kontoret har gjerne lavere databehov på mobil enn feltarbeidere. 10 til 20 GB per linje er tilstrekkelig for de fleste. Delt data fungerer godt i denne gruppen fordi forbruket varierer." },
      { question: "Bør vi ha IT-drift internt eller outsource?", answer: "For bedrifter under 30 ansatte er outsourcing til en MSP nesten alltid mer kostnadseffektivt enn å ansette egne IT-folk. Fra 30 til 100 ansatte er hybrid-modellen vanligst." }
    ],
    relatedSlugs: ["mobilabonnement-bedrift", "bredband-bedrift", "it-drift-bedrift"]
  }
}
