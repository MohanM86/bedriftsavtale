import type { GuideArticle } from "./strom-leverandorer"

export const reiseOgTransportGuides: Record<string, GuideArticle> = {

  "norwegian-bedriftsavtale": {
    summary: "Norwegian tilbyr bedriftsavtale gjennom Norwegian Business-programmet som gir rabatter på innenriks- og europeiske ruter, CashPoints-opptjening og fakturering på organisasjonsnummer. Norwegian er spesielt konkurransedyktig på innenriksruter og kortbane-Europa.",
    sections: [
      {
        heading: "Norwegian Business — hva er det?",
        body: "Norwegian Business er Norwegians bedriftsprogram som gir registrerte bedrifter tilgang til avtalte priser, bedrifts-CashPoints og fakturering. Bedriften registrerer seg og får tilgang til Norwegian Business-portalen der reiser kan bestilles og administreres sentralt."
      },
      {
        heading: "CashPoints for bedrift",
        body: "Norwegian Business bruker CashPoints som lojalitetsvaluta. Bedriften opptjener CashPoints på alle reiser som bookes gjennom Norwegian Business-kontoen. CashPoints kan brukes til å betale for nye reiser. Det er bedriften, ikke den ansatte, som eier poengene ved bedriftsbestilling.",
        list: [
          "CashPoints på alle bedriftsreiser",
          "Poengene tilhører bedriften",
          "Brukes til betaling av nye reiser",
          "Ingen utløpsdato på poengene"
        ]
      },
      {
        heading: "Priser og rabatter",
        body: "Norwegian Business gir rabatter basert på reisevolum. For bedrifter med lavt volum er rabatten beskjeden, mens større bedrifter med over 200 reisesegmenter per år kan oppnå mer betydelige rabatter. Norwegian er typisk billigst på innenriksruter og de mest trafikkerte europeiske destinasjonene."
      },
      {
        heading: "Norwegian vs SAS for bedrift",
        body: "Norwegian er et sterkere alternativ enn SAS for bedrifter der ansatte primært reiser innenriks og til Sør- og Vest-Europa. SAS er bedre for bedrifter med mye langdistansereiser til Asia, Nord-Amerika og Afrika gjennom SAS og Starcalliansen. Prismessig er Norwegian oftest billigst på de rutene begge flyr."
      },
      {
        heading: "Norwegians bedriftsportal",
        body: "Norwegian Business-portalen lar deg bestille reiser, se historikk, laste ned fakturaer og administrere reisande. Portalen er enkel og intuitiv og lar ansatte booke selv innenfor bedriftens avtalte betingelser."
      },
      {
        heading: "Hvem passer Norwegian Business for?",
        body: "Norwegian Business passer best for norske SMB-bedrifter med jevnlig innenriks reiseaktivitet og reiser til europeiske destinasjoner. Bedrifter med lite internasjonale langdistansereiser vil ha størst nytte. For bedrifter med mye internasjonal reiseaktivitet bør SAS eller en TMC med tilgang til flere flyselskaper vurderes."
      }
    ],
    faqs: [
      { question: "Kan ansatte bruke sine private Reward-poeng på jobbreiser?", answer: "Norwegian Reward er det private lojalitetsprogrammet. Norwegian Business er bedriftsprogrammet. De kan kombineres slik at ansatte opptjener private Reward-poeng i tillegg til bedriftens Business-poeng på samme reise." },
      { question: "Er det minimumskrav for Norwegian Business?", answer: "Norwegian Business er tilgjengelig for alle bedrifter med organisasjonsnummer. Det er ingen minimumskrav til antall reiser, men rabattnivåene øker med reisevolum." },
      { question: "Dekker Norwegian Business bagasje?", answer: "Det avhenger av hvilken billettype som bestilles gjennom Norwegian Business. Les alltid hva som er inkludert i den spesifikke billetten. Bagasje er ikke alltid inkludert i de billigste Business-prisene." },
      { question: "Hva skjer ved forsinkelse eller kansellering?", answer: "Norwegian er underlagt EU-forordning 261/2004 om passasjerrettigheter. Ved forsinkelse over to timer eller kansellering har passasjerene rett til assistanse og eventuelt kompensasjon." }
    ],
    relatedSlugs: ["sas-bedriftsavtale", "hertz-bedriftsavtale", "hotellavtale-bedrift"]
  },

  "sas-bedriftsavtale": {
    summary: "SAS tilbyr bedriftsavtaler gjennom SAS for Business-programmet med EuroBonus-opptjening, lounge-tilgang for reisende med høy status og tilgang til Staralliance-nettverket med over 1 000 destinasjoner globalt. SAS er det beste valget for bedrifter med mye langdistansereiser.",
    sections: [
      {
        heading: "SAS for Business — programmet",
        body: "SAS for Business er SAS sitt bedriftsprogram som gir registrerte virksomheter avtalte bedriftspriser, EuroBonus-opptjening på bedriftsnivå og tilgang til en administrasjonsportal. Bedriften kan samle alle SAS-reiser under én konto og få samlet rapportering og fakturering."
      },
      {
        heading: "EuroBonus for bedrift",
        body: "EuroBonus er SAS sitt lojalitetsprogram. Bedrifter i SAS for Business-programmet opptjener EuroBonus-poeng på bedriftsnivå som kan brukes til bonusreiser. I tillegg har individuelle ansatte gjerne egne EuroBonus-kontoer der de opptjener personlige poeng.",
        list: [
          "EuroBonus-poeng på bedriftsnivå",
          "Ansatte opptjener egne poeng parallelt",
          "Poeng brukes til bonusreiser og upgrades",
          "Tilgang til SAS Lounge med EuroBonus Gold og Diamond"
        ]
      },
      {
        heading: "Staralliance og global dekning",
        body: "SAS er del av Staralliance, verdens største flyallianse med 26 medlemsflygselskaper og over 1 000 destinasjoner globalt. For bedrifter med reiseaktivitet til Asia, Nord-Amerika, Afrika og andre fjerne destinasjoner er dette en vesentlig fordel. EuroBonus-poeng opptjenes på Staralliance-partnere."
      },
      {
        heading: "Priser og billetter",
        body: "SAS tilbyr tre billettnivåer på de fleste ruter: Go, Plus og Business. Go er den rimeligste med begrenset fleksibilitet. Plus gir bedre vilkår med ombooking og refusjon. Business er businessklasse med lounge-tilgang, prioritert innsjekk og bedre komfort. For forretningsreisende er Plus eller Business standard."
      },
      {
        heading: "SAS vs Norwegian for bedrift",
        body: "SAS er dyrere enn Norwegian på de fleste ruter der begge flyr, men tilbyr større fleksibilitet på billettene og bedre global dekning. For bedrifter der reiseaktiviteten primært er innenriks og til Europa kan Norwegian være billigere. For bedrifter med mye langdistansereiser er SAS og Staralliance-nettverket det klart beste valget."
      },
      {
        heading: "Hvem passer SAS for Business for?",
        body: "SAS for Business passer best for mellomstore og større norske bedrifter med jevnlig internasjonal reiseaktivitet, spesielt til destinasjoner utenfor Europa. Konsulentselskaper, industriselskaper og bedrifter med internasjonale kundeforhold er typiske SAS-kunder."
      }
    ],
    faqs: [
      { question: "Kan vi kombinere SAS for Business med en TMC-avtale?", answer: "Ja. Mange bedrifter bruker en TMC som håndterer alle reisekjøp inkludert SAS-billetter. SAS for Business-rabattene kan gjerne kombineres med TMC-avtalen. Avklar dette med din TMC." },
      { question: "Gir SAS for Business tilgang til lounge?", answer: "Lounge-tilgang krever normalt EuroBonus Gold eller Diamond-status, eller billett i SAS Business/Plus-klasse. SAS for Business-registrering alene gir ikke lounge-tilgang." },
      { question: "Hva er Widerøe-dekning for bedrifter?", answer: "Widerøe er partner med SAS og flyr kortbane-ruter i hele Norge. Widerøe har egne bedriftsavtaleprogrammer. For bedrifter med reisebehov til distrikts-Norge er Widerøe uunnværlig." },
      { question: "Er det rabatt på businessklasse i SAS for Business?", answer: "Ja. Bedrifter med SAS for Business-avtale og høyt volum kan forhandle frem rabatter på businessklasse. Ta kontakt med SAS direkte for å diskutere mulighetene." }
    ],
    relatedSlugs: ["norwegian-bedriftsavtale", "hertz-bedriftsavtale", "hotellavtale-bedrift"]
  },

  "hertz-bedriftsavtale": {
    summary: "Hertz bedriftsavtale gir norske bedrifter forhåndsavtalte priser på leiebil, fakturering på organisasjonsnummer og Hertz Gold Plus Rewards-poeng. Hertz er en av de to dominerende leiebilaktørene i det norske bedriftsmarkedet og har god dekning på norske flyplasser og i bysentrum.",
    sections: [
      {
        heading: "Hertz bedriftsavtale — hva er det?",
        body: "Hertzbedrift er Hertz sin satsning mot bedriftsmarkedet i Norge og tilbyr rammeavtaler med forhåndsavtalte priser, samlet fakturering og en nettportal for bestilling og administrasjon. Hertz har et bredt utvalg av kjøretøy fra kompaktbiler til varebiler og SUV-er."
      },
      {
        heading: "Hertz Gold Plus Rewards for bedrift",
        body: "Hertz Gold Plus Rewards er Hertz sitt lojalitetsprogram. Bedriftskunder opptjener poeng på alle leier som kan brukes til gratis leiedager og upgrades. Gold-status gir i tillegg fordeler som raskere ekspedisjon ved henting.",
        list: [
          "Poengopptjening på alle leier",
          "Gratis leiedager ved innløsning",
          "Gold-status for raskere ekspedisjon",
          "Garantert bilkategori ved booking"
        ]
      },
      {
        heading: "Priser og forsikring",
        body: "Hertz priser bedriftsavtaler basert på forventet volum. En bedrift med ti til tjue leier per år oppnår moderate rabatter, mens bedrifter med hundre pluss leier per år kan forhandle frem vesentlig lavere dagspriser. Forsikring er en vesentlig tilleggskostnad. Bedriftskort med leiebildekning reduserer behovet for å kjøpe forsikring av Hertz, men sjekk kortets vilkår nøye."
      },
      {
        heading: "Hertz i Norge — dekning og tilgjengelighet",
        body: "Hertz har utleiesteder på alle norske flyplasser, i alle store norske byer og på noen utvalgte steder langs de mest trafikkerte riksveiene. Hertz er eid av et internasjonalt selskap og er tilgjengelig i over 150 land, relevant for bedrifter med internasjonale reiser."
      },
      {
        heading: "Hertz vs Avis og Europcar for bedrift",
        body: "Hertz og Avis er de to dominerende aktørene i det norske bedriftsmarkedet for leiebil. Prisforskjellen er gjerne liten, og valget bør baseres på dekning der dere reiser mest og på hvilken portal og administrasjonsverktøy som passer best. Europcar er et godt tredjealternativ, spesielt for reiser i Sør-Europa."
      },
      {
        heading: "Elbiler i Hertz-flåten",
        body: "Hertz har økt andelen elbiler i norske byer vesentlig de siste årene. For bedrifter med et ønske om å redusere reisenes CO2-fotavtrykk er det verdt å sjekke Hertz tilgjengelighet av elbiler på de destinasjonene du reiser til."
      }
    ],
    faqs: [
      { question: "Kan vi reservere bil på forhånd med garanti om tilgjengelighet?", answer: "Ja. Med bedriftsavtale og Gold-status garanterer Hertz tilgjengelig bil i bestilt kategori ved ankomst. Dette er en reell fordel fremfor å møte opp og håpe på det beste." },
      { question: "Dekker bedriftskort Hertz-forsikringen?", answer: "Mange business-kredittkort inkluderer leiebilskadedekning, men dekningen varierer. Sjekk kortets vilkår nøye. Noen dekker kun ansvarsdelen, andre dekker full kasko. Ring kortets forsikringsselskap og bekreft dekning før du takker nei til Hertz sine forsikringstilbud." },
      { question: "Kan vi bruke Hertz-avtalen i utlandet?", answer: "Ja. Hertz er tilgjengelig i over 150 land, og bedriftsavtalen gjelder internasjonalt. Sjekk om avtaleprisene gjelder eller om det er egne internasjonale priser." },
      { question: "Hva er One Way-leiemuligheter?", answer: "Hertz tilbyr One Way-leie der du henter bilen ett sted og leverer et annet. Det er et tillegg for dette, men er praktisk for reiser der flytur og leiebilavslutning er på ulike steder." }
    ],
    relatedSlugs: ["norwegian-bedriftsavtale", "sas-bedriftsavtale", "firmabilavtale"]
  },

  "telenor-bedriftsavtale": {
    summary: "Telenor er Norges klart største mobiloperatør og tilbyr bedriftsavtaler med best mobildekning i landet, en komplett adminportal og sterke produktpakker for bedrifter i alle størrelser. Telenor er spesielt viktig for bedrifter med ansatte i distriktene og utenfor byene.",
    sections: [
      {
        heading: "Telenor bedrift — markedsposisjon",
        body: "Telenor er Norges største og eldste mobiloperatør med over 40 prosent markedsandel i bedriftsmarkedet. Telenor drifter Norges best utbygde mobilnett og er den naturlige leverandøren for bedrifter der god dekning overalt i Norge er avgjørende."
      },
      {
        heading: "Telenors mobilpakker for bedrift",
        body: "Telenor tilbyr bedriftspakker i tre hovednivåer. Start er den grunnleggende pakken med definert data og standard dekning. Business er mellomklassen med mer data, roaming i EU og EØS og prioritert kundeservice. Premium er toppnivå med ubegrenset data, fortrinn i nettet og utvidet service.",
        list: [
          "Start — enkelt og rimelig grunnabonnement",
          "Business — god pakke for de fleste bedrifter",
          "Premium — ubegrenset data og prioritet",
          "Delt data tilgjengelig for team"
        ]
      },
      {
        heading: "Telenors adminportal for bedrift",
        body: "Telenors adminportal lar bedriftens administrator legge til og fjerne abonnement, se forbruk per linje, sette datakvoter og laste ned fakturaer. Portalen er moden og velfungerende med mange år med forbedringer bak seg."
      },
      {
        heading: "Priser og bindingstid",
        body: "Telenor er typisk priset noe høyere enn Telia og vesentlig høyere enn Ice for sammenlignbare pakker. Premien er godt begrunnet i landets beste mobildekning. For bedrifter der alle ansatte opererer i byene er prisforskjellen mot Ice stor uten tilsvarende verdi. For bedrifter med kjøreruter og arbeidssteder i hele landet er Telenors dekning verdt merkostnaden."
      },
      {
        heading: "Telenor vs Telia vs Ice for bedrift",
        body: "Telenor er best på dekning og passer bedrifter som opererer i hele landet. Telia er mer priskonkurrerende og har god dekning i byene. Ice er billigst men har svakest dekning utenfor tettbebygde strøk. Valg av operatør bør alltid starte med å verifisere dekningskartet for de geografiske områdene bedriften opererer i."
      }
    ],
    faqs: [
      { question: "Hvordan sjekker vi Telenors dekning i vårt arbeidsområde?", answer: "Telenors nettside har et interaktivt dekaningskart der du kan søke på spesifikke adresser og se 4G- og 5G-dekning. Test gjerne noen av dine viktigste adresser direkte i kartet." },
      { question: "Hva er delt data og passer det for vår bedrift?", answer: "Delt data betyr at alle ansatte trekker fra en felles datapott i stedet for individuelle kvoter. Det er gunstig når forbruket varierer mye mellom ansatte. En superbruker og en lavforbruker deler potten og trenger ikke kjøpe store individuelle kvoter til alle." },
      { question: "Kan vi få dedikert kundebehandler hos Telenor?", answer: "Ja. Bedrifter med mange linjer og stor verdi for Telenor tilbys dedikert kundebehandler. Ta kontakt med Telenor Bedrift og spør om betingelsene for dette." },
      { question: "Hva koster det å bytte fra Telenor til en annen operatør?", answer: "Bytte er mulig ved avtalens utløp uten ekstra kostnad. Nummer kan beholdes gjennom nummerportabilitet. Sjekk bindingstiden i din nåværende avtale." }
    ],
    relatedSlugs: ["telia-bedriftsavtale", "ice-bedriftsavtale", "bredband-bedrift"]
  },

  "telia-bedriftsavtale": {
    summary: "Telia er Norges nest største mobiloperatør og tilbyr konkurransedyktige bedriftsavtaler med god dekning i byene og langs riksveiene. Telia er spesielt sterk på løsninger for mellomstore bedrifter og er priset noe lavere enn Telenor for sammenlignbare pakker.",
    sections: [
      {
        heading: "Telia bedrift i Norge",
        body: "Telia er en svensk telekommunikasjonsoperatør med sterk norsk tilstedeværelse og Norges nest største mobilnettverk. Telia har investert kraftig i 5G-utbygging og er spesielt sterk i Oslo, Bergen, Trondheim og de mellomstore norske byene."
      },
      {
        heading: "Telias bedriftspakker",
        body: "Telia tilbyr bedriftspakker i ulike størrelser med definerte datakvoter og mulighet for delt data. Telia er kjent for god fleksibilitet i pakkesammensetning og konkurransedyktig prising, særlig for bedrifter med fem til femti linjer.",
        list: [
          "Fleksible datapakker",
          "Delt data tilgjengelig",
          "5G inkludert i nyere pakker",
          "Roaming i EU og EØS"
        ]
      },
      {
        heading: "Priser og sammenligning",
        body: "Telia er typisk priset ti til femten prosent lavere enn Telenor for sammenlignbare pakker. For bedrifter der alle ansatte opererer i byområder med god Telia-dekning er dette en reell og verdig besparelse. Differansen øker ved større antall linjer."
      },
      {
        heading: "Telias adminportal",
        body: "Telia Min Bedrift er adminportalen der bedriften administrerer alle abonnement. Portalen lar deg se forbruk, sette kvoter, aktivere og deaktivere linjer og laste ned fakturaer. Portalen er godt utbygget og har fått positive tilbakemeldinger fra bedriftskunder."
      },
      {
        heading: "Telia bredbånd for bedrift",
        body: "Telia tilbyr i tillegg til mobil også bredbånd for bedrift. Bedrifter som kan samle mobil og bredbånd hos Telia oppnår gjerne ekstra rabatter og en enklere leverandørsituasjon med én faktura og ett kontaktpunkt."
      }
    ],
    faqs: [
      { question: "Er Telia tilgjengelig i distriktene?", answer: "Telia har god dekning i byene og langs de fleste riksveiene, men er svakere enn Telenor i de mest avsidesliggende delene av Norge. Sjekk alltid Telias dekaningskart for de spesifikke adressene som er viktige for bedriften." },
      { question: "Kan vi bytte fra Telenor til Telia og beholde numrene?", answer: "Ja. Nummerportabilitet gir deg rett til å ta med nummeret ditt ved operatørbytte. Det tar normalt én til tre virkedager og er gratis." },
      { question: "Tilbyr Telia kombinert mobil og bredbåndsavtale?", answer: "Ja. Telia tilbyr kombinerte bedriftsavtaler for mobil og bredbånd med rabatter og én samlet faktura. Det er verdt å spørre om dette ved forhandling." },
      { question: "Hva er responstid ved feil hos Telia Bedrift?", answer: "Telia bedriftskundeservice er tilgjengelig i arbeidstiden med normalt kort ventetid. For bedriftskunder med mange linjer tilbys prioritert bedriftssupport." }
    ],
    relatedSlugs: ["telenor-bedriftsavtale", "ice-bedriftsavtale", "bredband-bedrift"]
  },

  "ice-bedriftsavtale": {
    summary: "Ice er Norges tredje og billigste mobiloperatør og tilbyr bedriftsavtaler til vesentlig lavere pris enn Telenor og Telia. Ice bruker egne basestasjoner i byene og leier Telenors nett som backup i svakere dekningsområder. Best for bedrifter der alle ansatte jobber i byene.",
    sections: [
      {
        heading: "Ice som mobiloperatør for bedrift",
        body: "Ice er Norges tredje mobiloperatør og har vokst kraftig de siste årene. Ice er kjent for sine lave priser og enkle abonnementsstruktur. I byene er Ice-dekningen god og sammenlignbar med Telia. Utenfor tettbebygde strøk leier Ice nett av Telenor, noe som gir dekning men kan gi noe redusert hastighet."
      },
      {
        heading: "Ice bedrift — priser og pakker",
        body: "Ice tilbyr enkle bedriftspakker til de laveste prisene i det norske markedet. En typisk Ice-bedriftspakke er tjue til tredve prosent billigere enn en sammenlignbar Telia-pakke og enda mer sammenlignet med Telenor. For kontorbedrifter der ansatte primært jobber i byer er dette en reell og signifikant besparelse.",
        list: [
          "Norges laveste priser per linje",
          "Enkle pakker uten mye valgfrihet",
          "God dekning i byene",
          "Telenors nett som backup i distriktene"
        ]
      },
      {
        heading: "Dekning — Ice sin begrensning",
        body: "Ice er klart svakest av de tre store mobiloperatørene på dekning i distriktene, på fjellet og langs mindre trafikkerte veier. Bedrifter med ansatte som jobber på byggeplasser, i skogen, langs fjorden eller i andre ikke-urbane omgivelser vil oppleve dårligere dekning enn hos Telenor og i noen grad Telia."
      },
      {
        heading: "Is Ice riktig for din bedrift?",
        body: "Ice er riktig for bedrifter der alle ansatte jobber i kontorbygg i by, aldri er i felt og sjelden reiser til avsidesliggende steder. Typiske gode Ice-kunder er kontorbedrifter, IT-selskaper og servicebedrifter i byene. Ice er ikke riktig for håndverkere, transportbedrifter, landbruk eller bedrifter med noe ansatte i distriktene."
      },
      {
        heading: "Adminportal og kundeservice",
        body: "Ice tilbyr en adminportal for bedriftskunder med standard funksjonalitet. Portalen er enklere enn Telenor og Telias løsninger men dekker de viktigste behovene. Kundeservice er primært digital og kan oppleves som tregere enn hos de to store for komplekse henvendelser."
      }
    ],
    faqs: [
      { question: "Bruker Ice Telenors nett?", answer: "Ice har eget nettverk i byene og leier Telenors nett som backup der Ice ikke har egne basestasjoner. Nettverket fungerer, men hastigheter kan varieres i svake dekningsområder der Ice-kunder trafikkerer Telenors nett." },
      { question: "Hva skjer hvis en Ice-bruker er utenfor Ice-dekning?", answer: "Ice-brukere kobles automatisk til Telenors nett der Ice ikke har egen dekning, som en roaming-løsning innenfor Norge. Telefonen bytter nettverk automatisk uten at du gjør noe." },
      { question: "Er Ice stabilt nok for en forretningskritisk bedrift?", answer: "For bedrifter med ansatte i byene er Ice stabil nok for de aller fleste formål. For bedrifter der god mobildekning er forretningskritisk og ansatte er mobile over hele landet, er Telenor tryggere." },
      { question: "Kan vi prøve Ice en periode uten binding?", answer: "Ice tilbyr noen avtaler uten binding. Sjekk de aktuelle pakker og be eksplisitt om en prøveperiode uten binding hvis dette er viktig. Med en prøveperiode kan du evaluere dekning og kvalitet i bedriftens faktiske bruksmønster." }
    ],
    relatedSlugs: ["telenor-bedriftsavtale", "telia-bedriftsavtale", "mobilabonnement-bedrift"]
  }
}
