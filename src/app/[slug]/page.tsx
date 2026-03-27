import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { ContactBox } from "@/components/ui/ContactBox"
import { CategoryIcon } from "@/components/ui/icons/CategoryIcons"
import { categories, getCategoryBySlug } from "@/data/categories"
import { guides } from "@/data/content"
import { mobilabonnementContent } from "@/lib/content/mobilabonnement-bedrift"

interface Props { params: { slug: string } }

// ─── INNHOLDSREGISTER ────────────────────────────────────────────────────────
// Legg til ny content-fil her når du bygger en ny underside

const richContent: Record<string, typeof mobilabonnementContent> = {
  "mobilabonnement-bedrift": mobilabonnementContent,
}

// ─── STATIC PARAMS ───────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }))
}

// ─── METADATA ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) return {}

  const rich = richContent[params.slug]
  if (rich) {
    return {
      title: rich.seo.metaTitle,
      description: rich.seo.metaDescription,
      keywords: rich.seo.keywords.join(", "),
      alternates: { canonical: `https://bedriftsavtale.no/${cat.slug}` },
      openGraph: {
        title: rich.seo.metaTitle,
        description: rich.seo.metaDescription,
        url: `https://bedriftsavtale.no/${cat.slug}`,
        siteName: "Bedriftsavtale.no",
        locale: "nb_NO",
        type: "article",
      },
    }
  }

  return {
    title: `${cat.title} – Sammenlign og velg riktig`,
    description: `${cat.description} Les vår guide, forstå prismodeller og finn riktig leverandør for din bedrift.`,
    alternates: { canonical: `https://bedriftsavtale.no/${cat.slug}` },
    openGraph: { title: `${cat.title} | Bedriftsavtale.no`, description: cat.description },
  }
}

// ─── DEFAULT FALLBACK-INNHOLD ─────────────────────────────────────────────────

const defaultContent = {
  quickAnswer: "En god bedriftsavtale gir lavere pris ved volum, enklere fakturering på organisasjonsnummer og dedikert kundeservice. Start med å definere behovet, hent inn minst tre tilbud og sammenlign totalprisen over hele bindingsperioden.",
  sections: [
    { id: "hva-er", h2: "Hva er denne avtaletypen?", body: "En bedriftsavtale innen denne kategorien er tilpasset virksomheter og gir bedre betingelser enn tilsvarende privatavtale. Du faktureres på organisasjonsnummer, og avtalene er typisk strukturert rundt volum, servicenivå og administrasjonsverktøy." },
    { id: "hvem-passer", h2: "Hvem passer dette for?", body: "Alle norske virksomheter, fra enkeltpersonforetak til større konserner, kan dra nytte av dedikerte bedriftsavtaler. Behovet og de beste alternativene varierer mellom bransjer og størrelser." },
    { id: "hva-se-etter", h2: "Hva bør du se etter?", body: "Totalprisen over hele avtaleperioden er det viktigste, ikke bare månedsprisen. Inkluder etableringsgebyr, bindingstid, oppsigelseskostnader og prisreguleringsklausuler. Sammenlign også servicenivå og rapporteringsverktøy." },
  ],
  faq: [
    { question: "Kan jeg forhandle vilkårene?", answer: "Ja. I de fleste tilfeller er det mulig å forhandle pris, bindingstid og servicenivå. Jo større volum du representerer, jo mer forhandlingskraft har du. Start alltid med å be om beste pris." },
    { question: "Hva er normal bindingstid?", answer: "Varierer mye etter bransje og kategori. Fra ingen binding til 12 til 36 måneder. Du kan alltid forsøke å forhandle om kortere bindingstid, gjerne mot noe høyere pris." },
  ],
  cta: { primary: "Sammenlign alternativer", secondary: "Få hjelp til å velge" },
}

// ─── SVG-IKONER ──────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="#16a34a" />
    <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="#dc2626" />
    <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z"
      fill="#ca8a04" stroke="#ca8a04" strokeWidth="0.5" strokeLinejoin="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const InfoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="8.25" stroke="#2563eb" strokeWidth="1.5" />
    <path d="M9 8v5M9 6v.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// ─── SIDE-KOMPONENT ───────────────────────────────────────────────────────────

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) notFound()

  const rich = richContent[params.slug]
  const related = categories.filter(c => c.slug !== cat.slug && c.group === cat.group).slice(0, 5)
  const otherRelated = categories.filter(c => c.slug !== cat.slug && c.group !== cat.group).slice(0, 4)
  const relatedGuides = guides.filter(g => g.category === cat.slug).slice(0, 2)

  // ── RIKT INNHOLD ─────────────────────────────────────────────────────────────
  if (rich) {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hjem", item: "https://bedriftsavtale.no" },
          { "@type": "ListItem", position: 2, name: cat.title, item: `https://bedriftsavtale.no/${cat.slug}` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: rich.seo.metaTitle,
        description: rich.seo.metaDescription,
        datePublished: "2025-01-01",
        dateModified: "2026-03-27",
        lastReviewed: "2026-03-27",
        url: `https://bedriftsavtale.no/${cat.slug}`,
        publisher: {
          "@type": "Organization",
          name: "Bedriftsavtale.no",
          url: "https://bedriftsavtale.no",
          logo: { "@type": "ImageObject", url: "https://bedriftsavtale.no/icon.svg" },
        },
        author: { "@type": "Organization", name: "Redaksjonen, Bedriftsavtale.no" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: rich.faq.map(item => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: rich.buyingGuide.heading,
        description: rich.buyingGuide.intro,
        step: rich.buyingGuide.steps.map(step => ({
          "@type": "HowToStep",
          position: step.stepNumber,
          name: step.title,
          text: step.body,
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Bedriftsavtale.no",
        url: "https://bedriftsavtale.no",
        logo: { "@type": "ImageObject", url: "https://bedriftsavtale.no/icon.svg" },
        description: "Nøytral rådgivningsportal for bedriftsavtaler i Norge.",
        sameAs: ["https://it-firma.no"],
      },
    ]

    const tocItems = [
      { href: "#raskt-svar", label: "Hva koster det?" },
      { href: "#toppvalg", label: "Våre anbefalinger" },
      { href: "#sammenligning", label: "Sammenligningstabell" },
      { href: "#operatorer", label: "Gjennomgang per operatør" },
      { href: "#priser", label: "Priser etter bedriftsstørrelse" },
      { href: "#velg-riktig", label: "Slik velger du riktig" },
      { href: "#bransje", label: "Anbefaling per bransje" },
      { href: "#unngaa", label: "Vanlige feil" },
      { href: "#faq", label: "Ofte stilte spørsmål" },
    ]

    return (
      <>
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}

        <div className="bg-[var(--bg)] border-b border-[var(--border)]">
          <div className="container-site py-8">
            <Breadcrumbs items={[{ label: "Kategorier", href: "/kategorier" }, { label: cat.shortTitle }]} />
            <div className="mt-5 flex items-start gap-4">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl items-center justify-center flex-shrink-0 hidden sm:flex">
                <CategoryIcon slug={cat.slug} size={28} />
              </div>
              <div className="flex-1">
                <span className="inline-block text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1 mb-3">
                  Oppdatert {rich.lastUpdated}
                </span>
                <h1 className="text-3xl font-extrabold text-[var(--text)] tracking-tight mb-3">{rich.hero.heading}</h1>
                <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl mb-6">{rich.hero.subheading}</p>
                <nav aria-label="Innhold på denne siden">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--light)] mb-3">På denne siden</p>
                  <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                    {tocItems.map(item => (
                      <li key={item.href}>
                        <a href={item.href} className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-800 group">
                          <ArrowIcon />
                          <span className="group-hover:underline">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="container-site py-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 space-y-14">

              <section id="raskt-svar">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <InfoIcon />
                    <div>
                      <h2 className="text-base font-semibold text-blue-900 mb-2">{rich.shortAnswer.question}</h2>
                      <p className="text-blue-800 leading-relaxed">{rich.shortAnswer.answer}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="toppvalg">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Våre anbefalinger for mars 2026</h2>
                <p className="text-[var(--muted)] mb-6">Basert på pris, dekning og kundetilfredshet er dette våre toppvalg for norske bedrifter.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {rich.topPicks.map(pick => (
                    <div key={pick.name} className="border-2 border-amber-200 bg-amber-50 rounded-2xl p-5">
                      <div className="flex items-center gap-1.5 mb-3">
                        <StarIcon />
                        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">{pick.badge}</span>
                      </div>
                      <p className="font-bold text-[var(--text)] text-lg mb-2">{pick.name}</p>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{pick.verdict}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="sammenligning">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-2">{rich.comparisonTable.heading}</h2>
                <p className="text-[var(--muted)] mb-6">{rich.comparisonTable.caption}</p>
                <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[var(--bg)] border-b border-[var(--border)]">
                        {rich.comparisonTable.columns.map(col => (
                          <th key={col} className="text-left px-4 py-3 font-semibold text-[var(--text)] whitespace-nowrap">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rich.comparisonTable.rows.map((row, i) => (
                        <tr key={row.operatør} className={i % 2 === 0 ? "border-b border-[var(--border)]" : "bg-[var(--bg)] border-b border-[var(--border)]"}>
                          <td className="px-4 py-3 font-semibold text-[var(--text)] whitespace-nowrap">{row.operatør}</td>
                          <td className="px-4 py-3 text-[var(--muted)]">{row.nett}</td>
                          <td className="px-4 py-3 font-bold text-teal-600 whitespace-nowrap">{row.prisFra}</td>
                          <td className="px-4 py-3 text-[var(--muted)]">{row.dekning}</td>
                          <td className="px-4 py-3 text-[var(--muted)]">{row.bindingstid}</td>
                          <td className="px-4 py-3 text-[var(--muted)]">{row.passerFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[var(--light)] mt-3">Priser er veiledende per mars 2026 og kan variere etter flåtestørrelse og forhandlet avtale.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-5">{rich.intro.heading}</h2>
                <div className="space-y-4">
                  {rich.intro.paragraphs.map((p, i) => (
                    <p key={i} className="text-[var(--muted)] leading-relaxed">{p}</p>
                  ))}
                </div>
              </section>

              <section id="operatorer">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-2">{rich.providerComparison.heading}</h2>
                <p className="text-[var(--muted)] mb-8">{rich.providerComparison.intro}</p>
                <div className="space-y-6">
                  {rich.providerComparison.providers.map(p => (
                    <article key={p.name} className="border border-[var(--border)] rounded-2xl overflow-hidden">
                      <div className="bg-[var(--bg)] border-b border-[var(--border)] px-6 py-4 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-[var(--text)]">{p.name}</h3>
                          <p className="text-sm text-[var(--light)] mt-0.5">Nett: {p.network}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-[var(--light)]">Fra</span>
                          <p className="font-bold text-[var(--text)]">{p.priceFrom}</p>
                        </div>
                      </div>
                      <div className="px-6 py-5 grid sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--light)] mb-3">Fordeler</p>
                          <ul className="space-y-2">
                            {p.pros.map(pro => (
                              <li key={pro} className="flex items-start gap-2">
                                <span className="mt-0.5 shrink-0"><CheckIcon /></span>
                                <span className="text-sm text-[var(--muted)]">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--light)] mb-3">Ulemper</p>
                          <ul className="space-y-2">
                            {p.cons.map(con => (
                              <li key={con} className="flex items-start gap-2">
                                <span className="mt-0.5 shrink-0"><CrossIcon /></span>
                                <span className="text-sm text-[var(--muted)]">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-[var(--bg)] border-t border-[var(--border)] px-6 py-3">
                        <p className="text-sm text-[var(--muted)]">
                          <strong className="text-[var(--text)]">Typisk pris:</strong> {p.typicalPrice}
                          <span className="mx-3 text-[var(--border)]">|</span>
                          <strong className="text-[var(--text)]">Passer for:</strong> {p.bestFor}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="priser">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-2">{rich.priceGuide.heading}</h2>
                <p className="text-[var(--muted)] mb-8">{rich.priceGuide.intro}</p>
                <div className="grid sm:grid-cols-3 gap-5 mb-6">
                  {rich.priceGuide.tiers.map(tier => (
                    <div key={tier.label} className="border border-[var(--border)] rounded-2xl p-5">
                      <h3 className="font-bold text-[var(--text)] text-sm mb-1">{tier.label}</h3>
                      <p className="text-xl font-bold text-teal-600 my-2">{tier.priceRange}</p>
                      <p className="text-sm text-[var(--muted)] mb-3">{tier.includes}</p>
                      <p className="text-xs text-[var(--light)] italic">{tier.note}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4 text-sm text-amber-800">
                  <strong>Tips:</strong> {rich.priceGuide.tip}
                </div>
              </section>

              <section id="velg-riktig">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-2">{rich.buyingGuide.heading}</h2>
                <p className="text-[var(--muted)] mb-8">{rich.buyingGuide.intro}</p>
                <ol className="space-y-6">
                  {rich.buyingGuide.steps.map(step => (
                    <li key={step.stepNumber} className="flex gap-5">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">
                        {step.stepNumber}
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--text)] mb-1">{step.title}</h3>
                        <p className="text-[var(--muted)] leading-relaxed">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="bransje">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-2">{rich.industryRecommendations.heading}</h2>
                <p className="text-[var(--muted)] mb-8">{rich.industryRecommendations.intro}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {rich.industryRecommendations.recommendations.map(rec => (
                    <div key={rec.industry} className="border border-[var(--border)] rounded-xl p-5">
                      <h3 className="font-bold text-[var(--text)] text-sm mb-1">{rec.industry}</h3>
                      <p className="text-teal-600 font-semibold text-sm mb-2">{rec.recommended}</p>
                      <p className="text-[var(--muted)] text-sm leading-relaxed">{rec.reason}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="unngaa">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-6">{rich.avoidList.heading}</h2>
                <div className="space-y-4">
                  {rich.avoidList.items.map(item => (
                    <div key={item.title} className="flex gap-4 border border-red-100 bg-red-50 rounded-xl px-5 py-4">
                      <CrossIcon />
                      <div>
                        <p className="font-semibold text-red-900 text-sm mb-1">{item.title}</p>
                        <p className="text-red-800 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-8">Ofte stilte spørsmål om {cat.shortTitle.toLowerCase()}</h2>
                <div className="space-y-4">
                  {rich.faq.map(item => (
                    <details key={item.question} className="group border border-[var(--border)] rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer select-none hover:bg-[var(--bg)] transition-colors">
                        <span className="font-semibold text-[var(--text)] text-sm leading-snug">{item.question}</span>
                        <svg className="shrink-0 w-5 h-5 text-[var(--light)] transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-5 pt-3">
                        <p className="text-[var(--muted)] leading-relaxed text-sm">{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {relatedGuides.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[var(--text)] mb-4">Relaterte guider</h2>
                  <div className="space-y-3">
                    {relatedGuides.map(g => (
                      <Link key={g.slug} href={`/guide/${g.slug}`} className="card card-hover flex items-center gap-4 p-4 group">
                        <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CategoryIcon slug={cat.slug} size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors">{g.title}</div>
                          <div className="text-xs text-[var(--light)] mt-0.5">{g.readTime} lesetid</div>
                        </div>
                        <span className="ml-auto text-teal-500 text-base">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <footer className="border-t border-[var(--border)] pt-6 text-xs text-[var(--light)] space-y-1">
                <p>Sist oppdatert: {rich.lastUpdated}. Bedriftsavtale.no er en nøytral rådgivningsportal. Vi mottar ikke betaling for å anbefale spesifikke leverandører.</p>
                <p>Driftes av <a href="https://it-firma.no" className="underline hover:text-[var(--muted)]" rel="noopener">IT-Firma.no</a>.</p>
              </footer>

            </article>

            <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
              {related.length > 0 && (
                <div className="card overflow-hidden">
                  <div className="bg-[var(--bg)] px-4 py-3 border-b border-[var(--border)]">
                    <span className="section-label">Relaterte kategorier</span>
                  </div>
                  <div className="divide-y divide-[var(--border)]">
                    {related.map(c => (
                      <Link key={c.slug} href={`/${c.slug}`} className="flex items-center gap-2.5 px-4 py-3 hover:bg-[var(--bg)] transition-colors group">
                        <CategoryIcon slug={c.slug} size={16} />
                        <span className="text-sm font-semibold text-[var(--text)] group-hover:text-teal-600 transition-colors">{c.shortTitle}</span>
                        <span className="ml-auto text-[var(--light)] text-sm">›</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div className="card overflow-hidden">
                <div className="bg-[var(--bg)] px-4 py-3 border-b border-[var(--border)]">
                  <span className="section-label">Andre avtaletyper</span>
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {otherRelated.map(c => (
                    <Link key={c.slug} href={`/${c.slug}`} className="flex items-center gap-2.5 px-4 py-3 hover:bg-[var(--bg)] transition-colors group">
                      <CategoryIcon slug={c.slug} size={16} />
                      <span className="text-sm font-semibold text-[var(--text)] group-hover:text-teal-600 transition-colors">{c.shortTitle}</span>
                      <span className="ml-auto text-[var(--light)] text-sm">›</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </>
    )
  }

  // ── FALLBACK FOR KATEGORIER UTEN RIKT INNHOLD ────────────────────────────────
  const content = defaultContent

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cat.title,
    description: cat.description,
    url: `https://bedriftsavtale.no/${cat.slug}`,
    publisher: { "@type": "Organization", name: "Bedriftsavtale.no", url: "https://bedriftsavtale.no" },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Kategorier", href: "/kategorier" }, { label: cat.shortTitle }]} />
          <div className="mt-5 flex items-start gap-4">
            <div className="w-14 h-14 bg-teal-50 rounded-2xl items-center justify-center flex-shrink-0 hidden sm:flex">
              <CategoryIcon slug={cat.slug} size={28} />
            </div>
            <div>
              {cat.popular && (
                <span className="inline-block bg-teal-50 text-teal-600 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-2">Populær kategori</span>
              )}
              <h1 className="text-3xl font-extrabold text-[var(--text)] tracking-tight mb-3">{cat.title}</h1>
              <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl">{cat.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 space-y-10">
            <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-2xl p-6">
              <p className="text-xs font-bold tracking-[.12em] uppercase text-teal-500 mb-2">Kort svar</p>
              <p className="text-base text-[var(--text)] leading-relaxed">{content.quickAnswer}</p>
            </div>

            {content.sections.map(sec => (
              <div key={sec.id}>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4 tracking-tight">{sec.h2}</h2>
                <p className="text-base text-[var(--muted)] leading-relaxed">{sec.body}</p>
              </div>
            ))}

            <div className="bg-teal-500 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-white mb-1">{content.cta.primary}</h3>
                <p className="text-sm text-white/70">Ta kontakt med oss, så hjelper vi deg finne riktig avtale for din bedrift.</p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <Link href="/kontakt" className="bg-white text-teal-600 font-bold text-sm px-6 py-3 rounded-full hover:bg-teal-50 transition-colors whitespace-nowrap">
                  {content.cta.secondary} →
                </Link>
              </div>
            </div>

            {relatedGuides.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-[var(--text)] mb-4">Relaterte guider</h2>
                <div className="space-y-3">
                  {relatedGuides.map(g => (
                    <Link key={g.slug} href={`/guide/${g.slug}`} className="card card-hover flex items-center gap-4 p-4 group">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CategoryIcon slug={cat.slug} size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors">{g.title}</div>
                        <div className="text-xs text-[var(--light)] mt-0.5">{g.readTime} lesetid</div>
                      </div>
                      <span className="ml-auto text-teal-500 text-base">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            <ContactBox title={`Få hjelp med ${cat.shortTitle.toLowerCase()}`} />
            {related.length > 0 && (
              <div className="card overflow-hidden">
                <div className="bg-[var(--bg)] px-4 py-3 border-b border-[var(--border)]">
                  <span className="section-label">Relaterte kategorier</span>
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {related.map(c => (
                    <Link key={c.slug} href={`/${c.slug}`} className="flex items-center gap-2.5 px-4 py-3 hover:bg-[var(--bg)] transition-colors group">
                      <CategoryIcon slug={c.slug} size={16} />
                      <span className="text-sm font-semibold text-[var(--text)] group-hover:text-teal-600 transition-colors">{c.shortTitle}</span>
                      <span className="ml-auto text-[var(--light)] text-sm">›</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="card overflow-hidden">
              <div className="bg-[var(--bg)] px-4 py-3 border-b border-[var(--border)]">
                <span className="section-label">Andre avtaletyper</span>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {otherRelated.map(c => (
                  <Link key={c.slug} href={`/${c.slug}`} className="flex items-center gap-2.5 px-4 py-3 hover:bg-[var(--bg)] transition-colors group">
                    <CategoryIcon slug={c.slug} size={16} />
                    <span className="text-sm font-semibold text-[var(--text)] group-hover:text-teal-600 transition-colors">{c.shortTitle}</span>
                    <span className="ml-auto text-[var(--light)] text-sm">›</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <FAQAccordion faqs={content.faq} title={`Spørsmål og svar om ${cat.shortTitle.toLowerCase()}`} />
    </>
  )
}
