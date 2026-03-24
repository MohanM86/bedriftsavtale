import type { GuideArticle } from "./strom-leverandorer"

export const stromBransjeGuides: Record<string, GuideArticle> = {

  "strom-for-transport": {
    summary: "Transportbedrifter og logistikkselskaper er blant de høyeste strømforbrukerne innen norsk næringsliv. Med store lager, kjølelager, porthus og nå ladeinfrastruktur for el-kjøretøy er strøm en kritisk og dyr driftskostnad som fortjener aktiv oppfølging.",
    sections: [
      {
        heading: "Strømbehov for transportbedrifter",
        body: "En mellomstor norsk transportbedrift med lager og depot bruker typisk 150 000 til 500 000 kWh per år avhengig av lagerstørrelse, kjøle og frysekapasitet og antall ladepunkter for el-kjøretøy. Dette er et volum der kraftforvaltning fra Fortum eller Fjordkraft er en relevant og lønnsom løsning."
      },
      {
        heading: "Kjølelager og fryselager",
        body: "Kjøle og fryseanlegg er ofte den største enkeltforbrukeren i et transportdepot. Disse anleggene bruker strøm kontinuerlig og er sensitive for strømprissvingninger. For bedrifter med store kjøle og fryseanlegg er fastprisavtale eller kraftforvaltning verdt å vurdere for å beskytte mot prissjokk.",
        list: [
          "Kjølelager bruker strøm 24/7 — stort fast forbruk",
          "Fryselager er enda mer strømkrevende",
          "Fastpris eller forvaltning anbefales for store volumer",
          "Energieffektivisering av kjøleanlegg gir varig effekt"
        ]
      },
      {
        heading: "Ladeinfrastruktur for el-flåte",
        body: "Transportbedrifter som elektrifiserer flåten trenger solid ladeinfrastruktur på depotet. Hurtiglading på 50 til 150 kW for varebiler og lastebiler krever god strøm og kapasitet. Sjekk om nettilknytningen til depotet håndterer den økte effektbelastningen. Nettselskapet kan bistå med kapasitetsvurdering."
      },
      {
        heading: "Effekttariffer for transportbedrift",
        body: "Nettleien for store næringsbrukere er ofte basert på effekttariffer der de høyeste forbrukstoppene koster ekstra. For transportdepoter med mange kjøretøy som lades på samme tid kan effekttoppene bli svært kostbare. Smarte ladesystemer som fordeler ladebelastningen over tid kan redusere nettleien vesentlig."
      }
    ],
    faqs: [
      { question: "Hva er en god strømpris for et transportdepot med høyt forbruk?", answer: "For et depot med 300 000 pluss kWh per år bør du oppnå påslag på to til fire øre per kWh på spotprisavtale. Be om tilbud fra Fjordkraft, Fortum og minst én til basert på faktisk forbruksstatistikk." },
      { question: "Kan vi få kraftforvaltning med 300 000 kWh per år?", answer: "Ja. De fleste kraftforvaltere setter nedre grense ved 100 000 til 200 000 kWh per år. Med 300 000 kWh er du i kjernesegmentet for forvaltning. Fortum og Fjordkraft tilbyr begge dette." },
      { question: "Hva er Enova-støtte for transportbedrifter?", answer: "Enova gir tilskudd til elbil og el-lastebil for næring, ladeinfrastruktur for fleet-operasjoner og energieffektivisering av bygg og kjølelager. Sjekk enova.no for gjeldende satser og krav." },
      { question: "Må vi varsle nettselskapet om økt strømbehov fra lading?", answer: "Ja. Økt effektbehov fra store ladeinstallasjoner krever dialog med nettselskapet. Nettilknytningskapasiteten må verifiseres, og i noen tilfeller er det nødvendig med oppgradering av tilknytningspunktet." }
    ],
    relatedSlugs: ["stromavtale-for-bedrift", "ladekort-bedrift", "spotpris-vs-fastpris-bedrift"]
  },

  "strom-for-butikk": {
    summary: "Norske butikker og detaljhandelsvirksomheter har ulike strømbehov avhengig av størrelse og type. Belysning og kjøling er de to dominerende forbrukerne. En god strømavtale kombinert med energieffektiviseringstiltak kan redusere strøm-kostnaden i en dagligvarebutikk med 30 til 40 prosent.",
    sections: [
      {
        heading: "Strømbehov for norske butikker",
        body: "En liten spesialforretning på 100 til 200 kvadratmeter bruker typisk 30 000 til 80 000 kWh per år. En mellomstor dagligvarebutikk på 500 til 1 000 kvadratmeter bruker 200 000 til 500 000 kWh. Belysning og kjøle og fryseanlegg for matvarer er de to desidert største forbrukerne."
      },
      {
        heading: "LED-belysning — enkleste og beste investeringen",
        body: "Bytte fra eldre HF-lysrør og halogenarmaturer til moderne LED-belysning er den enkeltinvesteringen som gir best avkastning i de aller fleste norske butikker. Reduksjon i belysningsforbruk på 50 til 70 prosent er realistisk, og investeringen betaler seg typisk på ett til tre år. Enova gir tilskudd til LED-oppgradering i næringsbygg."
      },
      {
        heading: "Kjøleanlegg i dagligvare og kiosk",
        body: "For dagligvarebutikker og kiosker med ferskvaredisker og kjøleskap er kjøling en stor og konstant strømkostnad. Moderne kjøleanlegg med bedre isolasjon og mer energieffektive kompressorer kan redusere kjøleforbruket med 20 til 30 prosent. Sjekk om de eksisterende kjølediskene er energimerket.",
        list: [
          "Kjøling typisk 30-50% av butikkens totale strømforbruk",
          "Nyere anlegg er vesentlig mer effektive",
          "Nattdeksel på kjøledisker reduserer forbruket",
          "Enova gir tilskudd til kjølesystemoppgradering"
        ]
      },
      {
        heading: "Riktig strømavtale for butikk",
        body: "For en liten butikk med 30 000 til 80 000 kWh per år er spotprisavtale nesten alltid riktig. Forbruket er for lavt til at fastpris gir merkbar risikodekning over tid. For en større dagligvarebutikk med 200 000 pluss kWh kan fastpris for ett år vurderes i perioder med lave fastprisnivåer."
      },
      {
        heading: "Åpningstider og forbruksstyring",
        body: "Butikker med lange åpningstider har høyt strømforbruk store deler av dagen. Smarte styringssystemer som slår av lys og reduserer varme og kjøling utenfor åpningstid gir gevinst. For kjølevarebedrifter er nattdeksel på kjøledisker en enkel tiltak som reduserer kjøleforbruket med 15 til 25 prosent om natten."
      }
    ],
    faqs: [
      { question: "Hvor mye sparer vi på LED-oppgradering?", answer: "En typisk norsk butikk som bytter fra eldre lysrør til LED sparer 50 til 70 prosent av belysningsforbruket. For en butikk der belysning utgjør 40 prosent av totalt strømforbruk betyr det 20 til 28 prosent reduksjon i totalt forbruk." },
      { question: "Kan vi søke om Enova-støtte for LED og kjøl?", answer: "Ja. Enova gir tilskudd til LED-oppgradering og kjølesystemforbedringer i næringsbygg. Søknadsprosessen er digital via enova.no. Krav og satser endres, så sjekk alltid gjeldende ordninger." },
      { question: "Hva er grunnlaget for nettleieberegning i butikk?", answer: "Nettleie beregnes dels basert på forbruk i kWh og dels på effekttopper i kW. For butikker med høy belastning ved åpning (alle lys og kjøl starter) kan en bevisst oppstart-rutine der man fordeler oppstarten over 10 til 15 minutter redusere nettleien." },
      { question: "Er strøm i butikklokale fullt fradragsberettiget?", answer: "Ja. Strøm brukt i næringsvirksomhet er fullt fradragsberettiget for mva og skattemessig fradragsberettiget som driftskostnad." }
    ],
    relatedSlugs: ["stromavtale-for-bedrift", "spotpris-vs-fastpris-bedrift", "forsikring-bedrift"]
  }
}
