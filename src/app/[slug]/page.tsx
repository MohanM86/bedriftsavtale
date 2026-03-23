import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { ContactBox } from "@/components/ui/ContactBox"
import { categories, getCategoryBySlug } from "@/data/categories"
import { guides } from "@/data/content"

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) return {}
  return {
    title: `${cat.title} – Sammenlign og velg riktig`,
    description: `${cat.description} Les vår guide, forstå prismodeller og finn riktig leverandør for din bedrift.`,
    alternates: { canonical: `https://bedriftsavtale.no/${cat.slug}` },
    openGraph: { title: `${cat.title} | Bedriftsavtale.no`, description: cat.description },
  }
}

const catContent: Record<string, {
  quickAnswer: string
  sections: { heading: string; body: string }[]
  checklist: string[]
  mistakes: string[]
  faqs: { question: string; answer: string }[]
}> = {
  "mobilabonnement-bedrift": {
    quickAnswer: "Bedriftsmobilabonnement faktureres på org.nr. og gir deg en adminportal der du styrer alle linjer. De fleste operatører tilbyr delt data og volumrabatter fra 5+ abonnement. Telenor har best dekning, Telia gir best totalverdi for mellomstore flåter, Ice er billigst for større volum.",
    sections: [
      { heading: "Hva er bedriftsmobilabonnement?", body: "Bedriftsabonnement skiller seg fra privat ved at du faktureres på organisasjonsnummer og administrerer alle linjene fra én portal. Du kan sette datakvoter, se forbruk per ansatt og legge til eller fjerne abonnement uten å ringe kundeservice. Mange operatører tilbyr delt data – der alle ansatte trekker fra en felles pott." },
      { heading: "Hva bør du sammenligne?", body: "Pris per linje er det åpenbare, men husk bindingstid, oppsigelsesvilkår og om det koster noe å legge til/fjerne linjer underveis. Adminportalen er undervurdert: god styring sparer timer i administrasjon. Sjekk også dekning i de geografiske områdene dine ansatte jobber mest – ikke bare Oslo." },
      { heading: "Hva koster bedriftsmobil?", body: "Prisene varierer fra ca. 200–500 kr/mnd per linje avhengig av datamengde, operatør og volum. Med 10+ linjer hos Telia eller Telenor kan du forvente 15–25 % rabatt versus listeprisen. Ice tilbyr de laveste prisene men svakest dekning utenfor byene." },
    ],
    checklist: [
      "Kartlegg antall brukere og forventet dataforbruk per person",
      "Sjekk dekning i de geografiske områdene dere opererer i",
      "Hent inn tilbud fra minst Telenor, Telia og Ice",
      "Sammenlign adminportal og selvbetjeningsfunksjoner",
      "Les bindingstid og oppsigelsesvilkår nøye",
      "Spør om delt data-oppsett og hva som skjer ved overforbruk",
      "Sjekk om det er gebyrer for å legge til/fjerne linjer",
    ],
    mistakes: [
      "Inngå langvarig binding uten å teste dekning i arbeidsområdene",
      "Velge billigste alternativ uten å sjekke adminportalen",
      "Glemme å forhandle – det er alltid rom for bedre pris",
      "Ignorere delt data-muligheten ved varierende forbruk blant ansatte",
    ],
    faqs: [
      { question: "Kan jeg ta med mitt eksisterende nummer til bedriftsavtalen?", answer: "Ja. Nummerporten gir deg rett til å ta med eksisterende nummer til ny operatør. Prosessen tar normalt 1–3 virkedager og er gratis. Gjelder også ved overgang fra privat til bedriftsabonnement." },
      { question: "Hva er delt data og lønner det seg?", answer: "Delt data betyr at alle ansatte trekker fra én felles datapott i stedet for individuelle kvoter. Det lønner seg når forbruket varierer mye – noen bruker lite, andre mye. Da unngår du overbetaling for ubrukt data." },
      { question: "Hvor mange abonnement må jeg ha for bedriftsrabatt?", answer: "De fleste operatører gir bedriftsrabatter fra 1 linje, men de reelle stordriftsfordelene starter gjerne ved 5–10 abonnement. Ice krever minimum 3 linjer for sin bedriftsavtale." },
      { question: "Hva skjer hvis jeg vil si opp midt i bindingstiden?", answer: "Du betaler normalt resterende måneder eller et avtalefestet bruddgebyr. Les alltid vilkårene nøye. Spør leverandøren eksplisitt: 'Hva koster det å si opp ett år før bindingstiden utløper?'" },
    ],
  },
}

const defaultContent = {
  quickAnswer: "En god bedriftsavtale gir lavere pris per enhet ved volum, enklere fakturering på org.nr. og dedikert kundeservice. Start med å definere behovet ditt, hent inn minst tre tilbud og sammenlign totalprisen over hele bindingsperioden.",
  sections: [
    { heading: "Hva er denne avtaletypen?", body: "En bedriftsavtale innen denne kategorien er tilpasset virksomheter og gir bedre betingelser enn tilsvarende privatavtale. Du faktureres på organisasjonsnummer, og avtalene er typisk strukturert rundt volum, SLA og administrasjonsverktøy." },
    { heading: "Hvem passer dette for?", body: "Alle norske virksomheter, fra enkeltpersonforetak til store konserner, kan dra nytte av dedikerte bedriftsavtaler. Behovet og de beste alternativene varierer mellom bransjer og størrelser." },
    { heading: "Hva bør du sammenligne?", body: "Totalprisen over hele avtaleperioden er det viktigste – ikke bare månedsprisen. Inkluder etableringsgebyr, bindingstid, oppsigelseskostnader og prisreguleringsklausuler. Sammenlign også servicenivå og rapporteringsverktøy." },
  ],
  checklist: [
    "Definer behovet ditt presist – volum, antall brukere, krav til service",
    "Hent inn minst tre tilbud fra ulike leverandører",
    "Sammenlign totalprisen, ikke bare månedsprisen",
    "Sjekk bindingstid og oppsigelsesvilkår nøye",
    "Les prisreguleringsklausuler",
    "Be om referanser fra lignende bedrifter",
    "Sørg for at avtalen skalerer ved endringer i bedriften",
  ],
  mistakes: [
    "Signere uten å sammenligne minst tre tilbud",
    "Undervurdere bindingstid og oppsigelseskrav",
    "Fokusere kun på månedspris, ikke totalkostnad",
    "Glemme å forhandle – det er nesten alltid mulig",
  ],
  faqs: [
    { question: "Kan jeg forhandle vilkårene?", answer: "Ja. I de fleste tilfeller er det mulig å forhandle pris, bindingstid og servicenivå. Jo større volum du representerer, jo mer forhandlingskraft har du. Start alltid med å be om beste pris." },
    { question: "Hva er normal bindingstid?", answer: "Varierer mye etter bransje og kategori. Fra ingen binding (strøm) til 12–36 måneder (IT-tjenester). Du kan alltid forhandle om kortere bindingstid, gjerne mot noe høyere pris." },
    { question: "Kan enkeltpersonforetak tegne bedriftsavtaler?", answer: "Ja. De aller fleste leverandører tilbyr bedriftsavtaler til enkeltpersonforetak. Du trenger et organisasjonsnummer. Fordelen er at du holder privat og jobb adskilt." },
  ],
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) notFound()

  const content = catContent[params.slug] || defaultContent
  const related = categories.filter(c => c.slug !== cat.slug && c.group === cat.group).slice(0, 5)
  const otherRelated = categories.filter(c => c.slug !== cat.slug && c.group !== cat.group).slice(0, 4)
  const relatedGuides = guides.filter(g => g.category === cat.slug).slice(0, 2)

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: cat.title,
    description: cat.description,
    url: `https://bedriftsavtale.no/${cat.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Kategorier", href: "/kategorier" }, { label: cat.shortTitle }]} />
          <div className="mt-5 flex items-start gap-4">
            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 hidden sm:flex">
              {cat.icon}
            </div>
            <div>
              {cat.popular && (
                <span className="inline-block bg-teal-50 text-teal-600 text-[9px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full mb-2">
                  ★ Populær kategori
                </span>
              )}
              <h1 className="text-2xl font-extrabold text-[var(--text)] tracking-tight mb-2">{cat.title}</h1>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-2xl">{cat.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-site py-10">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Quick answer */}
            <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-5">
              <p className="text-[9px] font-bold tracking-[.12em] uppercase text-teal-500 mb-2">Kort svar</p>
              <p className="text-sm text-[var(--text)] leading-relaxed">{content.quickAnswer}</p>
            </div>

            {/* Sections */}
            <div className="prose-portal space-y-6">
              {content.sections.map((sec, i) => (
                <div key={i}>
                  <h2>{sec.heading}</h2>
                  <p>{sec.body}</p>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                <span>✅</span> Sjekkliste før du signerer
              </h3>
              <ul className="space-y-2">
                {content.checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-green-900">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 8 8" fill="none">
                        <polyline points="1.5,4 3,5.5 6.5,2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mistakes */}
            <div>
              <h2 className="text-lg font-bold text-[var(--text)] mb-3">Vanlige feil bedrifter gjør</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {content.mistakes.map((m, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-red-50 border border-red-100 rounded-xl p-4">
                    <span className="text-red-400 flex-shrink-0 mt-0.5 text-sm">⚠</span>
                    <p className="text-sm text-[var(--muted)]">{m}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related guides */}
            {relatedGuides.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-[var(--text)] mb-3">Relaterte guider</h2>
                <div className="space-y-2">
                  {relatedGuides.map(g => (
                    <Link key={g.slug} href={`/guide/${g.slug}`} className="card card-hover flex items-center gap-3 p-4">
                      <div className="text-xl">📄</div>
                      <div>
                        <div className="text-sm font-bold text-[var(--text)]">{g.title}</div>
                        <div className="text-xs text-[var(--light)] mt-0.5">{g.readTime} lesetid</div>
                      </div>
                      <span className="ml-auto text-teal-500 text-sm">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            <ContactBox title={`Be om tilbud på ${cat.shortTitle.toLowerCase()}`} />

            {/* Related same group */}
            {related.length > 0 && (
              <div className="card overflow-hidden">
                <div className="bg-[var(--bg)] px-4 py-3 border-b border-[var(--border)]">
                  <span className="section-label">Relaterte kategorier</span>
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {related.map(c => (
                    <Link key={c.slug} href={`/${c.slug}`} className="flex items-center gap-2.5 px-4 py-3 hover:bg-[var(--bg)] transition-colors group">
                      <span className="text-base">{c.icon}</span>
                      <span className="text-xs font-semibold text-[var(--text)] group-hover:text-teal-600 transition-colors">{c.shortTitle}</span>
                      <span className="ml-auto text-[var(--light)] text-xs">›</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other cats */}
            <div className="card overflow-hidden">
              <div className="bg-[var(--bg)] px-4 py-3 border-b border-[var(--border)]">
                <span className="section-label">Andre avtaletyper</span>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {otherRelated.map(c => (
                  <Link key={c.slug} href={`/${c.slug}`} className="flex items-center gap-2.5 px-4 py-3 hover:bg-[var(--bg)] transition-colors group">
                    <span className="text-base">{c.icon}</span>
                    <span className="text-xs font-semibold text-[var(--text)] group-hover:text-teal-600 transition-colors">{c.shortTitle}</span>
                    <span className="ml-auto text-[var(--light)] text-xs">›</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQAccordion faqs={content.faqs} title={`Spørsmål og svar om ${cat.shortTitle.toLowerCase()}`} />
    </>
  )
}
