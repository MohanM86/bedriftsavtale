export interface Category {
  slug: string
  title: string
  shortTitle: string
  description: string
  popular?: boolean
  group: string
}

export const categories: Category[] = [
  { slug: "mobilabonnement-bedrift", title: "Mobilabonnement for bedrift", shortTitle: "Mobilabonnement", description: "Finn riktig mobilavtale for hele bedriften. Sammenlign datapakker, bedriftsrabatter og fleksible avtaler fra Telenor, Telia og Ice.", popular: true, group: "Kommunikasjon" },
  { slug: "bredband-bedrift", title: "Bredbånd for bedrift", shortTitle: "Bredbånd", description: "Rask og stabil internettforbindelse er kritisk for de fleste bedrifter. Finn riktig bredbåndsavtale.", popular: true, group: "Kommunikasjon" },
  { slug: "stromavtale-bedrift", title: "Strømavtale for bedrift", shortTitle: "Strøm", description: "Spot, fastpris eller variabel – finn strømavtalen som passer din bedrift og driftsform.", popular: true, group: "Energi" },
  { slug: "forsikring-bedrift", title: "Forsikring for bedrift", shortTitle: "Forsikring", description: "Alt fra ansvarsforsikring til yrkesskadeforsikring. Forstå hvilke forsikringer din bedrift trenger.", popular: true, group: "Finans" },
  { slug: "regnskapstjenester-bedrift", title: "Regnskapstjenester", shortTitle: "Regnskap", description: "Ekstern regnskapsfører, byrå eller program? Finn riktig løsning for bedriftens økonomi.", popular: true, group: "Finans" },
  { slug: "bedriftskort", title: "Bedriftskort og firmakort", shortTitle: "Bedriftskort", description: "Sammenlign bedriftskort med bonusprogram, reisefordeler og utgiftsstyring.", popular: true, group: "Finans" },
  { slug: "drivstoffkort-bedrift", title: "Drivstoffkort for bedrift", shortTitle: "Drivstoffkort", description: "Effektiv kontroll over drivstoffutgifter med rabatter og rapporteringsverktøy.", popular: true, group: "Transport" },
  { slug: "ladekort-bedrift", title: "Ladekort for bedrift", shortTitle: "Ladekort", description: "Elbilflåte krever enkel lading. Finn ladekort med god dekning og enkel fakturering.", group: "Transport" },
  { slug: "bensinkort-bedrift", title: "Bensinkort for bedrift", shortTitle: "Bensinkort", description: "Bensinkort gir rabatt på drivstoff og samler alle utgifter på én faktura.", group: "Transport" },
  { slug: "leasing-bedrift", title: "Leasingavtaler for bedrift", shortTitle: "Leasing", description: "Finansiell og operasjonell leasing av biler, maskiner og utstyr.", group: "Transport" },
  { slug: "firmabilavtale", title: "Firmabilavtale", shortTitle: "Firmabil", description: "Alt om firmabilavtaler: beskatning, fordeler, leasing vs. kjøp og firmabilpolicy.", group: "Transport" },
  { slug: "reiseavtale-bedrift", title: "Reiseavtale for bedrift", shortTitle: "Reise", description: "Strukturer bedriftens reiseaktivitet med en god reiseavtale og TMC.", group: "Reise" },
  { slug: "hotellavtale-bedrift", title: "Hotellavtale for bedrift", shortTitle: "Hotell", description: "Bedriftsavtaler med hotellkjeder gir rabatter, bonuspoeng og enkel fakturering.", group: "Reise" },
  { slug: "it-drift-bedrift", title: "IT-drift og support", shortTitle: "IT-drift", description: "Outsource IT-drift eller finn supportavtale som passer din bedrift.", group: "Teknologi" },
  { slug: "hr-system-bedrift", title: "HR-system for bedrift", shortTitle: "HR-system", description: "Digitale HR-systemer for rekruttering, personaladministrasjon og medarbeideroppfølging.", group: "Teknologi" },
  { slug: "programvare-bedrift", title: "Programvareavtaler", shortTitle: "Programvare", description: "Volumlisenser, skyabonnement og bedriftsavtaler på programvare.", group: "Teknologi" },
  { slug: "alarm-bedrift", title: "Alarm og sikkerhet", shortTitle: "Alarm", description: "Beskyttelse av lokaler, data og ansatte. Sammenlign alarmsystemer og sikkerhetsavtaler.", group: "Lokaler" },
  { slug: "renholdsavtale-bedrift", title: "Renholdsavtale for bedrift", shortTitle: "Renhold", description: "Profesjonelt renhold av kontor og næringsbygg. Finn leverandør og avtalebetingelser.", group: "Lokaler" },
  { slug: "kaffeavtale-bedrift", title: "Kaffeavtale for bedrift", shortTitle: "Kaffe", description: "Fra kaffemaskiner til bønner og service – finn riktig kaffeavtale for kontoret.", group: "Lokaler" },
  { slug: "fraktavtale-bedrift", title: "Fraktavtale for bedrift", shortTitle: "Frakt", description: "Forhandle bedre fraktpriser med volumavtaler. Sammenlign budtjenester og logistikk.", group: "Logistikk" },
  { slug: "bedriftshelsetjeneste", title: "Bedriftshelsetjeneste", shortTitle: "BHT", description: "Lovpålagt for mange bedrifter. Finn godkjent bedriftshelsetjeneste og forstå avtalen.", group: "Personal" },
  { slug: "kontorrekvisita-bedrift", title: "Kontorrekvisita", shortTitle: "Kontorrekvisita", description: "Rammeavtaler for kontorrekvisita gir stabil forsyning og bedre priser.", group: "Lokaler" },
]

export const popularCategories = categories.filter(c => c.popular)

export const categoryGroups = [
  "Kommunikasjon", "Energi", "Finans", "Transport", "Reise", "Teknologi", "Lokaler", "Logistikk", "Personal",
]

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug)
}
