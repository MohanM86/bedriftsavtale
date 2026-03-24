import type { GuideArticle } from "./strom-leverandorer"

export const stromIndustriGuides: Record<string, GuideArticle> = {

  "strom-for-helseklinikk": {
    summary: "Helseklinikker, legekontorer og tannlegeklinikker har moderate strømbehov men spesifikke krav til driftssikkerhet. Avbrudd i strøm er ikke akseptabelt i kliniske miljøer. En kombinasjon av god strømavtale, UPS-løsning og backup er viktigere for helseklinikker enn for de fleste andre bransjer.",
    sections: [
      {
        heading: "Strømbehov for norske helseklinikker",
        body: "En typisk norsk helseklinikk på 200 til 500 kvadratmeter bruker mellom 30 000 og 100 000 kWh per år, avhengig av utstyrspark og åpningstider. Medisinskteknisk utstyr, belysning, ventilasjon og oppvarming er de største forbrukerne."
      },
      {
        heading: "Driftssikkerhet er viktigere enn lavest mulig pris",
        body: "For helseklinikker er strømpålitelighet viktigere enn å spare noen øre per kWh. Avbrudd i strøm kan avbryte behandlinger, kompromittere medisinsk utstyr og i alvorlige tilfeller true pasientsikkerhet. En god strømleverandør med SLA og en lokal nettverksleverandør med god oppetidsgaranti er prioritert.",
        list: [
          "UPS (avbruddfri strøm) for kritisk utstyr",
          "Prioriter leverandørens kundeservice og responstid",
          "Backup-generatoring vurderes for klinikker med tyngre inngrep",
          "Jevnlig service på strømanlegg"
        ]
      },
      {
        heading: "Medisinskteknisk utstyr og strøm",
        body: "Røntgenapparat, tannlegestol, steriliseringsovn, kjøle og fryser for medisiner og vaksiner er eksempler på utstyr som stiller spesifikke krav til strøm. Sørg for at det elektriske anlegget er dimensjonert korrekt for utstyrsparken og at spenningskvaliteten er tilfredsstillende."
      },
      {
        heading: "Riktig strømavtale for helseklinikk",
        body: "De fleste helseklinikker gjør best i spotprisavtale. Forbruket er for lavt til at fastpris gir merkbar risikoreduksjon, og spotpris er historisk sett billigst over tid. Fokuser heller på å ha en leverandør med god kundeservice og gjennomfakturering for enkel regnskapsføring."
      },
      {
        heading: "Energieffektivisering for klinikk",
        body: "Belysning er det største forbruksområdet der energieffektivisering gir rask gevinst for helseklinikker. LED-oppgradering av alle behandlingsrom og fellesarealer reduserer belysningsforbruket med 50 til 70 prosent og betaler seg typisk på ett til to år."
      }
    ],
    faqs: [
      { question: "Trenger vi UPS for en vanlig legekontor?", answer: "For en allmennpraksis med databaserte pasientjournaler og digitalt utstyr er en enkel UPS for servere og arbeidsstasjoner anbefalt. Den sikrer at data ikke mistes ved strømbrudd og gir tid til kontrollert avslutning." },
      { question: "Hvem er ansvarlig for det elektriske anlegget i leide kliniokaler?", answer: "Normalt er utleier ansvarlig for det elektriske anlegget i bygget, mens leietaker er ansvarlig for utstyr og installasjoner de selv setter inn. Avklar ansvarsfordeling tydelig i leiekontrakten." },
      { question: "Er strøm til helseklinikk mva-pliktig?", answer: "Ja. Strøm til næringsvirksomhet er mva-pliktig og fullt fradragsberettiget. Helseklinikker faktureres eksklusiv moms fra leverandøren og trekker fra mva i mva-oppgjøret." },
      { question: "Kan vi søke Enova-støtte for LED-oppgradering?", answer: "Ja. Enova gir tilskudd til LED-oppgradering i næringsbygg inkludert helseklinikker. Sjekk gjeldende ordninger på enova.no. Søknaden er digital og prosessen er ikke spesielt komplisert." }
    ],
    relatedSlugs: ["stromavtale-for-bedrift", "bredband-bedrift", "forsikring-bedrift"]
  },

  "strom-for-industri": {
    summary: "Industribedrifter er blant Norges aller største strømforbrukere og har størst å hente på en gjennomtenkt strømstrategi. Med forbruk fra 500 000 kWh til hundrevis av millioner kWh per år er kraftforvaltning, effekttariffer og energieffektivisering kritiske tema for industrien.",
    sections: [
      {
        heading: "Industri og strøm — store summer",
        body: "Norsk industri er en av verdens mest strøm-intensive sektorer. Aluminiumproduksjon, kjemisk industri, treforedling og metallurgisk industri bruker enorme mengder strøm. Også mindre industribedrifter som mekaniske verksteder, plastprodusenter og næringsmiddelsprodusenter har et strømforbruk som gjør det lønnsomt å jobbe aktivt med strømbetingelsene."
      },
      {
        heading: "Kraftforvaltning for industribedrifter",
        body: "For industribedrifter med forbruk over 500 000 kWh per år er kraftforvaltning nesten alltid den riktige løsningen. En profesjonell forvalter handler strøm på vegne av bedriften etter en avtalt strategi, fordeler innkjøpene over tid og gir en gjennomsnittspris som typisk er lavere enn standard spotprisavtale over tid.",
        list: [
          "Kraftforvaltning relevant fra 500 000 kWh per år",
          "Professionell forvalter handler på bedriftens vegne",
          "Risikofordeling over tid",
          "Tilgang til terminkontrakter og finansielle instrumenter"
        ]
      },
      {
        heading: "Effekttariffer — en stor og undervurdert kostnad",
        body: "For store industribrukere er nettleien basert på effekttariffer der de høyeste belastningsnivåene koster mye mer. Et industrianlegg som kortvarig trekker 10 MW kan betale vesentlig mer i nettleie enn et anlegg med jevnt forbruk på 5 MW selv om totalt kWh-forbruk er det samme. Lastprofil-optimalisering er et eget fagområde."
      },
      {
        heading: "Energiledelsessystem — ISO 50001",
        body: "Store industribrukere bør vurdere et energiledelsessystem etter ISO 50001-standarden. Dette gir et systematisk rammeverk for å identifisere og gjennomføre energieffektiviseringstiltak. ISO 50001-sertifisering er et krav for å søke om fritak fra CO2-avgift for energiintensiv industri."
      },
      {
        heading: "Enova-støtte for industri",
        body: "Enova gir blant de største tilskuddene til industribedrifter for energieffektivisering og overgang til fornybar energi. Tilskudd til varmepumper, forbrenningsoptimalisering, prosesskjøp og oppgradering av produksjonsutstyr er aktuelle. Enova-søknader for industri er mer komplekse enn for bygg, og det anbefales å bruke en energikonsulent."
      }
    ],
    faqs: [
      { question: "Hva er kraftforvaltning og hvem tilbyr det?", answer: "Kraftforvaltning er en tjeneste der en strømleverandør handler kraft på industrikundens vegne etter en avtalt forvaltningsstrategi. Fortum, Fjordkraft, Lyse og noen spesialiserte kraftforvaltere tilbyr dette for store forbrukere." },
      { question: "Hva er laveste forbruksgrense for kraftforvaltning?", answer: "De fleste kraftforvaltere setter en nedre grense på 100 000 til 500 000 kWh per år. For de aller største forbrukerne finnes tilbud om full kraftportefølje-forvaltning inkludert terminmarkeder." },
      { question: "Kan industribedrifter påvirke nettleien?", answer: "Ja. Nettleien for store næringskunder er basert på effekttariffer som man kan redusere ved å jevne ut forbrukstoppene. En aktiv lastprofil-strategi der det mest energikrevende arbeidet legges til lavere belastningstimer er en vanlig tilnærming." },
      { question: "Er det skattefordeler for energiintensiv norsk industri?", answer: "Ja. Energiintensiv industri kan søke om fritak fra grunnavgift på elektrisk kraft og redusert sats på CO2-avgift. Betingelsene inkluderer blant annet deltakelse i EUs kvotehandelsystem (ETS) eller implementering av et energiledelsessystem." }
    ],
    relatedSlugs: ["stromavtale-for-bedrift", "spotpris-vs-fastpris-bedrift", "strom-bedriftsavtale-fortum"]
  },

  "strom-bedriftsavtale-agva": {
    summary: "Agva Kraft er en av Norges raskest voksende strømleverandører og er kjent for konkurransedyktige spotprisavtaler uten binding. Agva passer godt for bedrifter som vil ha lav pris og frihet til å bytte leverandør uten kostnad. Kundeservice er primært digital.",
    sections: [
      {
        heading: "Hvem er Agva Kraft?",
        body: "Agva Kraft ble etablert i 2017 og har vokst raskt i det norske privatmarkedet, men tilbyr også bedriftsavtaler. Agva er kjent for lave påslag, ingen binding og en enkel digital plattform. Selskapet har mottatt positive anmeldelser fra privatmarkedet og begynner nå å bygge tilstedeværelse i bedriftsmarkedet."
      },
      {
        heading: "Agvas bedriftsavtaler",
        body: "Agva tilbyr spotprisavtale uten binding. Bedriften registrerer seg digitalt, oppgir anleggsnummer og er i gang på noen virkedager. Fakturering skjer månedlig digitalt.",
        list: [
          "Spotprisavtale uten binding",
          "Lavt påslag som er et av markedets laveste",
          "Enkel digital onboarding",
          "Månedlig fakturering"
        ]
      },
      {
        heading: "Pris og påslag",
        body: "Agva er konsekvent blant de lavest priset strømleverandørene i Norge målt i påslag per kWh. For bedrifter som primært søker lavest mulig totalfaktura og ikke har behov for avanserte bedriftsportaler eller dedikert kundekontakt er Agva et sterkt alternativ."
      },
      {
        heading: "Hvem passer Agva for?",
        body: "Agva passer best for enkle bedrifter med ett til to anleggspunkter, lavt til moderat strømforbruk og et ønske om minimal administrasjon og lavest mulig pris. Enkeltpersonforetak, frilansere med kontorstrøm og små bedrifter er i kjernemålgruppen. For bedrifter som trenger dedikert kundekontakt, avansert rapportering eller forvaltning er Fjordkraft eller Fortum bedre alternativer."
      },
      {
        heading: "Begrensninger ved Agva for bedrift",
        body: "Agva har en enklere bedriftsportal enn de store aktørene og tilbyr ikke kraftforvaltning. Kundeservice er primært digital med e-post og chat, noe som kan oppleves som begrenset for bedrifter som har behov for rask telefonkontakt. For enkle behov er dette ingen ulempe."
      }
    ],
    faqs: [
      { question: "Er Agva pålitelig som strømleverandør?", answer: "Agva Kraft er en lisensiert norsk strømleverandør regulert av NVE og er ikke annerledes enn de større leverandørene i juridisk forstand. Du er på Norges strømnett uansett leverandør. Pålitelighet handler om kundeservice og fakturering, ikke om selve strømen." },
      { question: "Kan vi bytte til Agva fra en annen leverandør?", answer: "Ja. Bytte skjer digitalt på Agvas nettside. Prosessen tar normalt to til tre virkedager. Husk å sjekke om eksisterende avtale har binding eller oppsigelsestid." },
      { question: "Er Agva tilgjengelig i alle prisområder?", answer: "Ja. Agva leverer strøm i alle norske prisområder fra NO1 til NO5." },
      { question: "Hva er Agvas kundeservice?", answer: "Agva tilbyr kundeservice via e-post og chat. Det er ikke dedikert telefonsupport for bedriftskunder slik som hos Telenor og Telia i mobilmarkedet. For bedrifter som foretrekker telefonkontakt er Fjordkraft eller Fortum bedre alternativer." }
    ],
    relatedSlugs: ["strom-bedriftsavtale-fjordkraft", "strom-bedriftsavtale-tibber", "stromavtale-for-bedrift"]
  }
}
