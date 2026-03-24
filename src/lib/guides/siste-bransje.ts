import type { GuideArticle } from "./strom-leverandorer"

export const sisteBransjeGuides: Record<string, GuideArticle> = {

  "bedriftsavtaler-butikk": {
    summary: "Butikker og detaljhandel har en distinkt portefølje av bedriftsavtaler. Strøm, alarm, forsikring og betalingsløsning er kjernen. Nettbutikker og bedrifter med lagerdrift trenger i tillegg gode fraktavtaler. Her er en komplett oversikt over de viktigste avtalene for norske butikker.",
    sections: [
      {
        heading: "De viktigste avtalene for norske butikker",
        body: "En norsk detaljhandelsbutikk trenger typisk seks til åtte ulike bedriftsavtaler for å drifte effektivt. Strøm til belysning og kjøling, alarm og tyverisikring, forsikring, betalingsløsning og for nettbutikker en god fraktavtale er de kritiske.",
        list: [
          "Strøm — belysning og kjøl/frys er de store forbrukerne",
          "Alarm — tyverisikring er kritisk",
          "Forsikring — varelager, ansvar og avbrudd",
          "Betalingsløsning — kortterminaler og mobilbetaling",
          "Fraktavtale — for nettbutikker essensielt"
        ]
      },
      {
        heading: "Strøm for butikk",
        body: "Strøm er en av de tre største kostnadene for norske butikker. LED-belysning og energieffektiv kjøling er de to tiltakene som gir raskest og høyest avkastning. En god spotprisavtale med en konkurrerende leverandør og aktiv energieffektivisering er den riktige kombinasjonen for de fleste butikker."
      },
      {
        heading: "Alarm og tyverisikring for butikk",
        body: "Butikker er særlig utsatt for innbrudd og butikktyveri. Et fullstendig alarmsystem med innbruddsalarm og vaktutrykning er nødvendig. For butikker med dyre varer er kamera-overvåking og EAS-system (elektronisk artikelsikring) tillegg som reduserer svinn."
      },
      {
        heading: "Betalingsløsning for butikk",
        body: "Kasseløsning og kortterminaler er en teknisk bedriftsavtale de fleste tenker lite på. Transaksjonsgebyret på 0,8 til 2,5 prosent av omsetningen utgjør store beløp over et år. Forhandle alltid på transaksjonsgebyret. Tilbydere som Nets, Vipps Point of Sale, iZettle og Stripe tilbyr ulike løsninger til ulike priser."
      },
      {
        heading: "Fraktavtale for nettbutikk",
        body: "For nettbutikker er fraktavtalen en av de viktigste kostnadsdriverne. Bring er dominerende i norsk netthandel, men PostNord, DHL og Helthjem er gode alternativer. Med fraktvolum over 100 pakker per måned har du god forhandlingskraft og bør alltid ha skriftlig tilbud fra minst to leverandører."
      }
    ],
    faqs: [
      { question: "Hva er EAS og trenger min butikk det?", answer: "EAS er elektronisk artikelsikring, vanligvis de magnetiske etikett-systemene du ser i klesbutikker og elektronikkforretninger. EAS er relevant for butikker med varer som er lette å stjele og har verdi over et visst beløp per enhet." },
      { question: "Er det krav til alarm i leide butikklokaler?", answer: "Utleier krever ofte alarm som del av leievilkårene. Forsikringen til butikken kan også stille minimumskrav til sikring. Sjekk begge deler nøye." },
      { question: "Hva koster betalingsløsning for en liten butikk?", answer: "Løsninger som iZettle og SumUp tar typisk 1,5 til 2,5 prosent per transaksjon uten fast månedspris. Nets og Verifone tilbyr terminaler med fast månedspris og lavere transaksjonsprosent fra 0,8 til 1,5 prosent. Det rimeligste valget avhenger av omsetninga." },
      { question: "Kan vi bruke Vipps som eneste betalingsløsning?", answer: "Nei. Forbrukerrettigheter i Norge gir kunder rett til å betale med kort. Vipps kan brukes som et supplement til kortbetaling men kan ikke erstatte det." }
    ],
    relatedSlugs: ["strom-for-butikk", "alarm-bedrift", "fraktavtale-bedrift"]
  },

  "bedriftsavtaler-helseklinikk": {
    summary: "Helseklinikker, legekontorer og tannlegeklinikker har spesifikke behov som skiller seg fra andre bransjer. IT-systemer for pasientjournaler, forsikring med profesjonsansvar og strømsikkerhet for medisinsk utstyr er kjernen i en god avtaleportefølje for helsesektoren.",
    sections: [
      {
        heading: "De viktigste avtalene for helseklinikker",
        body: "En norsk helseklinikk trenger bedriftsavtaler innen IT, forsikring, strøm og renhold som alle adresserer spesifikke kliniske krav. GDPR-kravene til pasientdata er strengere enn for de fleste andre næringer og stiller krav til IT-drift og databehandleravtaler.",
        list: [
          "IT-drift med GDPR-kompetanse",
          "Forsikring med profesjonsansvar og yrkesskadeforsikring",
          "Strøm med fokus på driftssikkerhet",
          "Renhold etter hygienestandarder for kliniske rom"
        ]
      },
      {
        heading: "IT-drift for helseklinikk",
        body: "Pasientjournalsystemet er klinikkens livsnerve og stiller strenge krav til IT-infrastruktur, datasikkerhet og GDPR-etterlevelse. En IT-driftsleverandør med erfaring fra helsesektoren er mye verdt. De forstår kravene til journalsystemene, databehandleravtaler og sikker sletting av pasientdata."
      },
      {
        heading: "Forsikring for helseklinikk",
        body: "Helsepersonell trenger profesjonsansvarsforsikring som dekker erstatningskrav fra pasienter som mener de har blitt feilbehandlet. For privatpraktiserende lege og tannlege er dette et absolutt must. Yrkesskadeforsikring for ansatte og ansvarsforsikring for klinikkens lokaler og virksomhet er i tillegg.",
        list: [
          "Profesjonsansvarsforsikring — erstatningskrav fra pasienter",
          "Yrkesskadeforsikring — lovpålagt for ansatte",
          "Ansvarsforsikring — skader i lokalene",
          "Utstyrs og instrumentforsikring"
        ]
      },
      {
        heading: "Renhold for helseklinikk",
        body: "Renhold i kliniske rom stiller strengere krav enn standard kontorrenhold. Desinfeksjon av behandlingsstol og medisinsk utstyr, renhold av venterom og toaletter med klinisk hygienekrav og korrekt avfallshåndtering for klinisk avfall er blant kravene. Renholdsfirmaet bør ha erfaring med helsemiljøer."
      },
      {
        heading: "Bredbånd for helseklinikk",
        body: "Pasientjournalsystemer og PACS-systemer for røntgenbilder er datakrevende og krever stabil internettforbindelse. En bedriftsbredbåndsavtale med SLA og garantert oppetid er viktigere for en helseklinikk enn for en kontorbedrift. Vurder backup-linje via 4G for kritiske systemer."
      }
    ],
    faqs: [
      { question: "Hva er pasientskadeerstatning og er det obligatorisk?", answer: "Norsk Pasientskadeerstatning (NPE) er statens ordning for erstatning til pasienter skadet i offentlig helsevesen. Privatpraktiserende helsepersonell må ha egen profesjonsansvarsforsikring. Sjekk kravene for din spesifikke profesjon og praksisform." },
      { question: "Hvem er databehandler for pasientjournaler?", answer: "Klinikken er behandlingsansvarlig for pasientdata. IT-leverandøren og journalsystemleverandøren er databehandlere og må ha en signert databehandleravtale med klinikken. Dette er et krav under GDPR og helseregisterloven." },
      { question: "Hva er GDPR-kravene for helseklinikker?", answer: "Helseopplysninger er særlig sensitive personopplysninger under GDPR. Klinikker må ha rettslig grunnlag for all behandling, ha datasikkerhetsrutiner, inngå databehandleravtaler med leverandører og ha prosedyrer for avvikshåndtering og sletting." },
      { question: "Trenger vi spesielt renhold for behandlingsrommene?", answer: "Ja. Behandlingsrom i helseklinikker krever rengjøring og desinfeksjon etter kliniske standarder, normalt etter hver pasient. Dette er mer ressurskrevende enn standard kontorrenhold og bør spesifiseres tydelig i renholdsavtalen." }
    ],
    relatedSlugs: ["it-drift-bedrift", "forsikring-bedrift", "bedriftshelsetjeneste"]
  },

  "widerøe-bedriftsavtale": {
    summary: "Widerøe er Norges regionale flyselskap med det tetteste nettverket av kortbaneflyplasser i landet. For bedrifter med reiseaktivitet til distrikts-Norge er Widerøe uunnværlig, og en bedriftsavtale med Widerøe gir rabatter og opptjening i WiderøeEXTRA-programmet.",
    sections: [
      {
        heading: "Widerøe — distrikts-Norges flyselskap",
        body: "Widerøe flyr til over 40 destinasjoner i Norge og er det eneste flyselskapets som når de aller fleste kortbaneflyplasser langs norgeskysten. For bedrifter med kunder, leverandører eller ansatte i distrikts-Norge er Widerøe en uunnværlig del av reiseporteføljen."
      },
      {
        heading: "Widerøe Business — bedriftsprogrammet",
        body: "Widerøe Business gir registrerte bedrifter tilgang til avtalte priser, WiderøeEXTRA-opptjening og samlet fakturering.",
        list: [
          "Avtalte priser på Widerøes ruter",
          "WiderøeEXTRA-poeng til bedriften",
          "Fakturering på organisasjonsnummer",
          "Tilgang til alle Widerøes 40+ destinasjoner"
        ]
      },
      {
        heading: "Kombinasjonen med Norwegian og SAS",
        body: "Widerøe-avtalen bør ses som et supplement til Norwegian og SAS for de fleste bedrifter. Norwegian og SAS tar seg av de store byene og internasjonale ruter, mens Widerøe dekker de destinasjonene de andre ikke når. En komplett reiseavtalepakke inkluderer typisk alle tre."
      },
      {
        heading: "Priser og billettyper",
        body: "Widerøe tilbyr flex-billetter med full refusjon og ombooking, og rimeligere minipris-billetter med begrensninger. For bedriftsreisende med skiftende planer er flex-billetter nesten alltid verdt prisforskjellen. Med en bedriftsavtale oppnår du bedre betingelser på flex-billettnivå."
      },
      {
        heading: "Widerøes bagasjevilkår",
        body: "Widerøe har egne bagasjevilkår som varierer med billettype. De minste kortbaneflyene som Dash 8 har begrenset bagasjekapasitet og stillegods-begrensninger. Sjekk alltid bagasjevilkårene ved booking til kortbaneflyplasser."
      }
    ],
    faqs: [
      { question: "Kan vi kombinere Widerøe og SAS i en reiseavtale?", answer: "Ja. De fleste TMC-er og reisebooking-systemer håndterer begge. SAS og Widerøe samarbeider på visse ruter og har code share-avtaler. For reiser via Oslo til kortbaneflyplasser er det gjerne mulig å booke ett sammenhengende billett via SAS." },
      { question: "Er Widerøe del av en flyallianse?", answer: "Widerøe er ikke del av noen av de tre store flyalliansene (Oneworld, Star Alliance, SkyTeam). De har partneravtaler med SAS og noen andre europeiske flyselskaper." },
      { question: "Hva er WiderøeEXTRA?", answer: "WiderøeEXTRA er Widerøes lojalitetsprogram med poengopptjening per reise. Poengene kan brukes til fribilletter og oppgraderinger. Bedriften kan opptjene poeng på bedriftskontoen." },
      { question: "Har Widerøe ruter utenfor Norge?", answer: "Widerøe flyr primært innenriks i Norge og noen europeiske ruter fra de største norske flyplassene. For internasjonale reiser utover dette er Norwegian og SAS bedre alternativer." }
    ],
    relatedSlugs: ["norwegian-bedriftsavtale", "sas-bedriftsavtale", "reiseavtale-bedrift"]
  },

  "fjordkraft-vs-fortum": {
    summary: "Fjordkraft og Fortum er de to mest brukte strømleverandørene for norske mellomstore bedrifter. Begge er solide valg, men de skiller seg på noen viktige punkter. Fortum er sterkere på digitale verktøy og kraftforvaltning, Fjordkraft er sterkere på kundeservice og enkel administrasjon.",
    sections: [
      {
        heading: "Hvem er størst — Fjordkraft eller Fortum?",
        body: "Fjordkraft er norskeid og børsnotert, med over 200 000 bedriftskunder i Norge. Fortum er finsk og en av Europas største energiaktører med sterk norsk tilstedeværelse. Begge er veletablerte og pålitelige. Størrelse er ikke avgjørende for valget."
      },
      {
        heading: "Portalen og digitale verktøy",
        body: "Fortum Online er markedets mest avanserte energiportal for bedriftskunder med avansert forbruksanalyse, budsjettverktøy og rapport-eksport. Fjordkrafts portal er solid og dekker alle standardbehov. For bedrifter som aktivt vil bruke data til energistyring er Fortum Online en reell fordel.",
        list: [
          "Fortum Online: avansert, budsjett og analyse",
          "Fjordkraft: solid, enkel, dekker alle standardbehov",
          "Begge har app for forbruksoversikt",
          "Fortum vinner på digitaliseringsgrad"
        ]
      },
      {
        heading: "Kundeservice",
        body: "Fjordkraft er konsistent rangert høyt på kundeservice i norske undersøkelser og er kjent for vennlig og kompetent bedriftskundestøtte. Fortum leverer god service men skårer noe lavere enn Fjordkraft i kundetilfredshet i noen undersøkelser."
      },
      {
        heading: "Kraftforvaltning",
        body: "Begge tilbyr kraftforvaltning for større forbrukere. Fortum har noe bredere erfaring fra de største industrikundene. For SMB-bedrifter er forskjellen liten."
      },
      {
        heading: "Pris",
        body: "Prisene hos Fjordkraft og Fortum er svært like for standard spotprisavtaler. Begge er konkurransedyktige og prises på linje med markedet. Hent tilbud fra begge og velg basert på servicebehov og portalpreferanser snarere enn marginale prisforskjeller."
      }
    ],
    faqs: [
      { question: "Er det stor prisforskjell mellom Fjordkraft og Fortum?", answer: "Nei. For standard spotprisavtaler er prisene svært like. Begge er godt priset og konkurrerer aktivt. Prisforskjellen er sjelden avgjørende. Velg basert på servicekvalitet og portalpreferanser." },
      { question: "Kan vi bruke Fortum Online uten å ha strøm hos Fortum?", answer: "Nei. Fortum Online er eksklusivt for Fortum-kunder. Det er en fordel ved å velge Fortum som leverandør, ikke en separat tjeneste." },
      { question: "Hvem passer best for en restaurant?", answer: "For en restaurant som ønsker god kundeservice og enkel administrasjon er Fjordkraft gjerne et bedre valg. For en restaurant som aktivt vil overvåke energiforbruk og bruke data er Fortum Online en fordel." },
      { question: "Tilbyr begge grønne strømprodukter?", answer: "Ja. Begge tilbyr opprinnelsesgarantier som bekrefter fornybar strøm. Relevansen avhenger av om bedriften har klimaregnskap eller bærekraftsrapportering." }
    ],
    relatedSlugs: ["strom-bedriftsavtale-fjordkraft", "strom-bedriftsavtale-fortum", "stromavtale-for-bedrift"]
  }
}
