export interface Guide {
  slug: string
  title: string
  description: string
  category?: string
  readTime: string
  published: string
}

export interface Industry {
  slug: string
  title: string
  description: string
  categories: string[]
}

export interface CompanySize {
  slug: string
  title: string
  description: string
  categories: string[]
}

export const guides: Guide[] = [
  { slug: "hva-er-en-bedriftsavtale", title: "Hva er en bedriftsavtale?", description: "En komplett innføring i hva bedriftsavtaler er, hvilke typer som finnes, og hvorfor det lønner seg med rammeavtaler.", readTime: "5 min", published: "2024-11-01" },
  { slug: "hvordan-sammenligne-bedriftsavtaler", title: "Slik sammenligner du bedriftsavtaler", description: "Steg-for-steg guide til hvordan du sammenligner tilbud, forstår priser og velger riktig leverandør.", readTime: "7 min", published: "2024-11-05" },
  { slug: "beste-bensinkort-for-bedrift", title: "Beste bensinkort for bedrift i 2026", description: "Hvilke bensinkort gir best rabatt, dekning og rapporteringsverktøy for norske bedrifter?", category: "drivstoffkort-bedrift", readTime: "8 min", published: "2024-11-10" },
  { slug: "hvordan-velge-hotellavtale-for-bedrift", title: "Slik velger du hotellavtale for bedrift", description: "Hva bør du se etter? Sammenlign Scandic, Nordic Choice, Thon og internasjonale kjeder.", category: "hotellavtale-bedrift", readTime: "6 min", published: "2024-11-12" },
  { slug: "stromavtale-for-bedrift", title: "Strømavtale for bedrift: komplett guide", description: "Spot, fastpris eller variabel? Forstå prismodellene og velg riktig for næringsvirksomhet.", category: "stromavtale-bedrift", readTime: "7 min", published: "2024-11-15" },
  { slug: "mobilabonnement-for-bedrift", title: "Mobilabonnement for bedrift: komplett guide", description: "Sammenlign Telenor, Telia og Ice for bedrift. Hva er viktigst å vurdere?", category: "mobilabonnement-bedrift", readTime: "9 min", published: "2024-11-18" },
  { slug: "nar-lonner-det-seg-med-firmabilavtale", title: "Når lønner det seg med firmabilavtale?", description: "Fordeler og ulemper med firmabil. Beskatning, leasing vs. kjøp og hva som er smart for ulike bedrifter.", category: "firmabilavtale", readTime: "8 min", published: "2024-11-20" },
  { slug: "hvordan-forhandle-bedriftsavtaler", title: "Slik forhandler du bedre bedriftsavtaler", description: "Taktikker og tips for å forhandle frem bedre vilkår, lavere priser og mer fleksible betingelser.", readTime: "6 min", published: "2024-11-22" },
  { slug: "viktigste-avtaler-sma-bedrifter", title: "De viktigste avtalene for små bedrifter", description: "Hvilke avtaler bør en bedrift med 1–10 ansatte prioritere?", readTime: "7 min", published: "2024-11-25" },
  { slug: "viktigste-avtaler-vekstselskaper", title: "Bedriftsavtaler for vekstselskaper", description: "Når bedriften vokser fra 10 til 50 ansatte, endres behovene raskt. Her er avtalene du bør ha på plass.", readTime: "8 min", published: "2024-11-28" },
]

export const industries: Industry[] = [
  { slug: "handverker", title: "Håndverker og byggebransjen", description: "Avtaler for rørleggere, elektrikere, malere, snekkere og andre håndverkere.", categories: ["drivstoffkort-bedrift", "forsikring-bedrift", "mobilabonnement-bedrift", "firmabilavtale", "bedriftshelsetjeneste", "regnskapstjenester-bedrift"] },
  { slug: "restaurant", title: "Restaurant og serveringsbransjen", description: "Avtaler tilpasset kafeer, restauranter, catering og serveringssteder.", categories: ["stromavtale-bedrift", "forsikring-bedrift", "kaffeavtale-bedrift", "renholdsavtale-bedrift", "regnskapstjenester-bedrift", "bedriftshelsetjeneste"] },
  { slug: "transport", title: "Transport og logistikk", description: "Avtaler for transportbedrifter, budselskaper og logistikkfirmaer.", categories: ["drivstoffkort-bedrift", "ladekort-bedrift", "firmabilavtale", "forsikring-bedrift", "mobilabonnement-bedrift", "leasing-bedrift"] },
  { slug: "kontor", title: "Kontorbedrift og konsulenter", description: "Avtaler for konsulentselskaper, advokater og andre kontorintensive virksomheter.", categories: ["bredband-bedrift", "mobilabonnement-bedrift", "it-drift-bedrift", "programvare-bedrift", "bedriftskort", "reiseavtale-bedrift"] },
  { slug: "eiendom", title: "Eiendom og forvaltning", description: "Avtaler for eiendomsselskaper, utleiere og forvaltere av næringsbygg.", categories: ["stromavtale-bedrift", "renholdsavtale-bedrift", "alarm-bedrift", "forsikring-bedrift"] },
  { slug: "butikk", title: "Butikk og detaljhandel", description: "Avtaler for dagligvarebutikker, spesialforretninger og nettbutikker.", categories: ["stromavtale-bedrift", "forsikring-bedrift", "alarm-bedrift", "bedriftskort", "fraktavtale-bedrift"] },
  { slug: "hotell", title: "Hotell og overnatting", description: "Avtaler for hoteller, leilighetshoteller og overnattingssteder.", categories: ["stromavtale-bedrift", "renholdsavtale-bedrift", "bredband-bedrift", "kaffeavtale-bedrift", "forsikring-bedrift"] },
  { slug: "helseklinikk", title: "Helse og klinikk", description: "Avtaler for legekontorer, tannlegepraksiser og fysioterapeuter.", categories: ["it-drift-bedrift", "programvare-bedrift", "forsikring-bedrift", "bredband-bedrift", "alarm-bedrift"] },
]

export const companySizes: CompanySize[] = [
  { slug: "enkeltpersonforetak", title: "Enkeltpersonforetak", description: "Soloselvstendige og frilansere. Enkle, kostnadseffektive avtaler uten bindinger.", categories: ["mobilabonnement-bedrift", "regnskapstjenester-bedrift", "forsikring-bedrift", "bedriftskort", "bredband-bedrift"] },
  { slug: "sma-bedrifter", title: "Små bedrifter (1–10 ansatte)", description: "Bedrifter i oppstartsfasen. Prioriterer fleksibilitet og lave faste kostnader.", categories: ["mobilabonnement-bedrift", "bredband-bedrift", "regnskapstjenester-bedrift", "forsikring-bedrift", "bedriftskort"] },
  { slug: "mellomstore-bedrifter", title: "Mellomstore bedrifter (10–100 ansatte)", description: "Etablerte bedrifter som begynner å trenge strukturerte rammeavtaler.", categories: ["mobilabonnement-bedrift", "bredband-bedrift", "stromavtale-bedrift", "reiseavtale-bedrift", "it-drift-bedrift", "hr-system-bedrift"] },
  { slug: "startups", title: "Startups og vekstselskaper", description: "Teknologibedrifter med høy endringstakt. Foretrekker skybaserte løsninger.", categories: ["bredband-bedrift", "programvare-bedrift", "it-drift-bedrift", "hr-system-bedrift", "mobilabonnement-bedrift", "bedriftskort"] },
]

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug)
}
export function getIndustryBySlug(slug: string) {
  return industries.find(i => i.slug === slug)
}
export function getCompanySizeBySlug(slug: string) {
  return companySizes.find(c => c.slug === slug)
}
