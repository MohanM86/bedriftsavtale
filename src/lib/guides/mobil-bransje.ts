import type { GuideArticle } from "./strom-leverandorer"

export const mobilBransjeGuides: Record<string, GuideArticle> = {

  "mobil-for-restaurant": {
    summary: "Restaurant og serveringsbransjen har spesifikke behov for mobilabonnement. Kommunikasjon mellom ansatte, digital ordremottak, leveringsapper og kundekontakt stiller krav til stabilitet og tilstrekkelig data. For de fleste restauranter er Telia et godt valg i byene, mens Telenor er sikrere for catering og leveringsbedrifter som dekker hele landet.",
    sections: [
      {
        heading: "Mobilbehov i restaurant og serveringsbransjen",
        body: "En typisk norsk restaurant med ti til tyve ansatte har behov for mobilabonnement primært til intern kommunikasjon mellom kjøkken og sal, kontakt med leverandører og samarbeidspartnere, håndtering av leveringsordrer via apper som Wolt og Foodora og kontakt med kunder ved booking og endringer."
      },
      {
        heading: "Apper og datakrav",
        body: "Moderne restaurantdrift er appavhengig. Kassasystem på nettbrett, bestillingsapper, Wolt og Foodora-apper for leveringer og interne kommunikasjonsapper som Slack og Teams bruker alle data kontinuerlig. Et minimumsabonnement på 15 til 20 GB per linje er anbefalt for ansatte som bruker telefon aktivt i jobben.",
        list: [
          "Wolt og Foodora-apper krever stabil internettforbindelse",
          "Kassasystemer på nettbrett trenger WiFi eller mobildata",
          "Intern kommunikasjon via meldingsapper",
          "15-20 GB per linje anbefalt minimum"
        ]
      },
      {
        heading: "Telenor vs Telia for restaurant",
        body: "For restauranter i byer er Telia et utmerket og prisgode alternativ. Dekningen i byene er god og prisen er ti til femten prosent lavere enn Telenor. For cateringbedrifter og restauranter med leveringsservice som dekker et større geografisk område er Telenor sikrere for sjåfører og leveransepersonell."
      },
      {
        heading: "Administrasjon av mobilabonnement i restaurant",
        body: "Restaurant-bransjen har gjerne høy ansatt-turnover, noe som stiller krav til enkel administrasjon av mobilabonnement. En adminportal der du raskt kan legge til og fjerne linjer uten å ringe kundeservice er viktig. Telenor og Telia begge leverer dette. Sjekk om det er gebyr per endring."
      },
      {
        heading: "Viktig: skillelinje privat og jobb",
        body: "For restaurantansatte som bruker privattelefon til jobbrelatert kommunikasjon er det skattemessige implikasjoner. Vurdér om bedriften skal utstede bedriftstelefoner eller om refusjon av privat abonnement er enklere. Avklar med regnskapsfører hva som er mest fordelaktig."
      }
    ],
    faqs: [
      { question: "Trenger alle restaurantansatte bedriftsmobil?", answer: "Ikke nødvendigvis. Kjøkkenansatte uten behov for kommunikasjon med kunder trenger det normalt ikke. Daglig leder, bestillingsansvarlig og leveringspersonell er de som typisk har størst behov." },
      { question: "Hva koster mobilabonnement for en restaurant med 10 linjer?", answer: "Med Telia Business og ti linjer på 20 GB per stykk kan du forvente rundt 2 000 til 3 000 kroner per måned totalt eksklusiv moms. Med Telenor tilsvarende 2 200 til 3 500 kroner." },
      { question: "Kan vi bruke bedriftsmobil til å administrere Wolt og Foodora?", answer: "Ja. Partnernettbrett fra Wolt og Foodora kan kobles til bedriftens mobildata via hotspot eller en dedikert SIM-kortslot. Sjekk at datakvoter er tilstrekkelige for å håndtere leveringsordrer i rushtiden." },
      { question: "Hva er oppsigelsestiden på en bedriftsmobilavtale?", answer: "Vanligvis en måneds varsel per linje for løpende avtaler. Avtal med binding har gjerne tolv til tjuefire måneder bindingstid. Les alltid betingelsene nøye ved tegning." }
    ],
    relatedSlugs: ["telia-bedriftsavtale", "telenor-bedriftsavtale", "mobilabonnement-bedrift"]
  },

  "mobil-for-transport": {
    summary: "Transportbedrifter er blant de mest krevende kundene for mobiloperatørene. Sjåfører trenger dekning langs kjøreruter som strekker seg gjennom hele landet, i tunneler, langs fjordveier og i industriområder. For transportbedrifter er Telenor nesten alltid det eneste riktige valget.",
    sections: [
      {
        heading: "Dekning er alfa og omega for transport",
        body: "En sjåfør som mister dekning midt på en leveringsrute kan ikke kontakte lageret, oppdatere leveringsstatus eller nå disponenten. For transportbedrifter er mobildekning en forretningskritisk infrastruktur. Telenor er det eneste mobilnettverket som gir tilstrekkelig dekning for transport som dekker hele Norge."
      },
      {
        heading: "GPS og sporingssystemer",
        body: "De fleste norske transportbedrifter bruker GPS-baserte sporingssystemer for flåtestyring. Disse systemene sender kontinuerlige posisjonsdata over mobilnettet. Telenor-dekning sikrer at sporingen fungerer selv på de mest avsidesliggende leveringsrutene.",
        list: [
          "GPS-sporing krever kontinuerlig mobilforbindelse",
          "Ruting og navigasjonsapper bruker data konstant",
          "Digital fraktdokumentasjon krever dataforbindelse",
          "Sjåfør-app for ordremottak og kvittering"
        ]
      },
      {
        heading: "Digitale fraktdokumenter og CMR",
        body: "Papirbaserte fraktdokumenter erstattes av digitale løsninger. E-CMR og digitale leveringskvitteringer krever stabil mobilforbindelse ved overlevering av gods. En sjåfør uten dekning kan ikke kvittere ut leveransen digitalt, noe som skaper forsinkelser i systemet."
      },
      {
        heading: "Datakvoter for sjåfører",
        body: "En sjåfør med aktiv GPS-sporing, navigasjonsapp, sjåfør-app og sporadisk bruk av kommunikasjonsapper bruker typisk 10 til 20 GB per måned. For sjåfører med tunge kjøretøy der maskindata og telematiksystemer også sendes over mobilnettet kan behovet være høyere."
      },
      {
        heading: "Flåtedatakort vs sjåfør-SIM",
        body: "Transportbedrifter trenger typisk to typer SIM-løsninger: sjåfør-SIM for kommunikasjon og personlig bruk, og flåte-SIM for kjøretøyets telematiksystem. Disse kan bestilles som del av en samlet bedriftsavtale med Telenor."
      }
    ],
    faqs: [
      { question: "Kan vi bruke Telia i stedet for Telenor for transport?", answer: "Telia er et godt alternativ for bylogistikk der alle kjøreruter er innenfor byens grenser. For transport utenfor byene og langs distriktsveier er Telenor vesentlig sikrere. Vurder å teste med noen SIM-kort i de mest utfordrende rutene." },
      { question: "Finnes det GPS-sporing som fungerer uten mobilnett?", answer: "Satellittbaserte GPS-systemer kan spore posisjon uten mobilnett men kan ikke sende dataen i sanntid. For norsk nærtransport er mobilnettbasert sporing standard. For internasjonale ruter med mange grenser finnes hybridløsninger." },
      { question: "Hva koster et fullstendig mobilprogram for ti sjåfører hos Telenor?", answer: "Med Telenor Business-pakker på 20 til 30 GB per linje kan du forvente å betale 3 000 til 5 000 kroner per måned for ti linjer, eksklusiv moms. Hent konkret tilbud basert på faktisk behov." },
      { question: "Er det spesielle løsninger for tunge kjøretøy?", answer: "Ja. Telenor tilbyr IoT-SIM og M2M-SIM-løsninger spesielt for kjøretøytelemati og flåtestyring. Disse prises separat fra vanlige mobilabonnement og er optimalisert for lav dataforsendelse og lang batterilevetid i IoT-enheter." }
    ],
    relatedSlugs: ["telenor-bedriftsavtale", "mobilabonnement-bedrift", "drivstoffkort-bedrift"]
  },

  "mobil-for-eiendom": {
    summary: "Eiendomsselskaper og forvaltere av næringsbygg trenger mobilabonnement for meglere, driftsansatte og eiendomsforvaltere. Behovene varierer mye mellom meglerkontor med mye kundemøter og driftsavdelinger med feltarbeid. For feltarbeidere i eiendomsdrift gjelder samme dekning-krav som for håndverkere.",
    sections: [
      {
        heading: "Mobilbehov i eiendomsbransjen",
        body: "Eiendomsbransjen favner vidt: fra eiendomsmeglere som trenger elegant kommunikasjonsløsning for kundekontakt, til driftsteknikere som trenger robust dekning i kjellere og tekniske rom. Behovet for mobilabonnement er svært ulikt mellom disse gruppene."
      },
      {
        heading: "Eiendomsmeglere — representasjon og kundekontakt",
        body: "Eiendomsmeglere bruker mobilen primært til kundekontakt, visningspåminnelser og kommunikasjon med kjøpere og selgere. God dekning i de geografiske markedene de opererer i er viktigst. Telia er et utmerket og prisgode valg for meglere som primært opererer i byene.",
        list: [
          "Kundekontakt og kommunikasjon krever god dekning",
          "Visningsapper og digitale signeringssystemer",
          "Bilder fra eiendommer krever tilstrekkelig data",
          "Profesjonelt utseende på kommunikasjonsverktøy"
        ]
      },
      {
        heading: "Driftsteknikere og vaktmestere",
        body: "Driftsteknikere jobber i og rundt næringsbygg, i kjellere, tekniske rom og utendørs. De bruker mobilen til rapporteringsapper, ordre og avvikssystemer, og kommunikasjon med vaktsentral. God inomhusdekning er viktig. Telenor er sikrere for feltarbeidere som beveger seg i ulike bygg og ulike byer."
      },
      {
        heading: "IoT og bygningsdrift",
        body: "Moderne næringsbygg bruker sensorbaserte systemer for temperatur, energistyring, adgangskontroll og brannvarsling. Disse systemene kommuniserer via mobilnett eller WiFi. For IoT-SIM til bygningsdrift tilbyr Telenor og Telia begge dedikerte IoT-løsninger."
      }
    ],
    faqs: [
      { question: "Trenger eiendomsmeglere bedriftsmobil?", answer: "Dedikert bedriftsmobil gir klar skille mellom privat og jobb og enklere utgiftshåndtering. For meglere som bruker privat telefon til jobbkontakt er alternativet et refusjonsopplegg, men dette er mer komplekst skattemessig." },
      { question: "Hva er typisk databruk for en eiendomsmegler?", answer: "En aktiv eiendomsmegler bruker 5 til 15 GB per måned, primært til e-post, apper og bilder. 20 GB er tilstrekkelig for de aller fleste." },
      { question: "Er det spesielle krav til kommunikasjon ved visninger?", answer: "Ikke formelle krav, men profesjonell kommunikasjon med interessenter og budgivere krever god og stabil mobilforbindelse. Mange meglere bruker iPad med SIM i tillegg til telefon for visningshåndtering." },
      { question: "Kan vi bruke ett bedriftsabonnement for både meglere og driftsteknikere?", answer: "Ja. Én bedriftsavtale med ulike pakker for ulike brukergrupper er standard. Meglere på 20 GB og driftsteknikere på 30 GB kan inngå i samme bedriftsavtale med Telenor eller Telia." }
    ],
    relatedSlugs: ["telenor-bedriftsavtale", "telia-bedriftsavtale", "alarm-bedrift"]
  }
}
