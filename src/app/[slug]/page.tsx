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
import { stromavtaleBedriftContent } from "@/lib/content/stromavtale-bedrift"
import { forsikringBedriftContent } from "@/lib/content/forsikring-bedrift"
import { bedriftskortContent } from "@/lib/content/bedriftskort"
import { drivstoffkortBedriftContent } from "@/lib/content/drivstoffkort-bedrift"
import { regnskapstjenesterContent } from "@/lib/content/regnskapstjenester-bedrift"
import { bredbandBedriftContent } from "@/lib/content/bredband-bedrift"
import { leasingBedriftContent } from "@/lib/content/leasing-bedrift"
import { firmabilavtaleContent } from "@/lib/content/firmabilavtale"
import { hotellavtaleBedriftContent } from "@/lib/content/hotellavtale-bedrift"
import { itDriftBedriftContent } from "@/lib/content/it-drift-bedrift"
import { alarmBedriftContent } from "@/lib/content/alarm-bedrift"
import { hrSystemBedriftContent } from "@/lib/content/hr-system-bedrift"
import { programvareBedriftContent } from "@/lib/content/programvare-bedrift"
import { bedriftshelsetjenesteContent } from "@/lib/content/bedriftshelsetjeneste"
import { reiseavtaleBedriftContent } from "@/lib/content/reiseavtale-bedrift"

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) return {}

  const richContent = getRichContent(params.slug)
  const title = richContent?.meta.title || `${cat.title} – Sammenlign og velg riktig`
  const description = richContent?.meta.description || `${cat.description} Les vår guide, forstå prismodeller og finn riktig leverandør for din bedrift.`

  return {
    title,
    description,
    alternates: { canonical: `https://bedriftsavtale.no/${cat.slug}` },
    openGraph: {
      title: `${title} | Bedriftsavtale.no`,
      description,
    },
  }
}

function getRichContent(slug: string) {
  const map: Record<string, typeof mobilabonnementContent> = {
    "mobilabonnement-bedrift": mobilabonnementContent,
    "stromavtale-bedrift":     stromavtaleBedriftContent,
    "forsikring-bedrift":       forsikringBedriftContent,
    "bedriftskort":             bedriftskortContent,
    "drivstoffkort-bedrift":       drivstoffkortBedriftContent,
    "regnskapstjenester-bedrift":  regnskapstjenesterContent,
    "bredband-bedrift":            bredbandBedriftContent,
    "leasing-bedrift":             leasingBedriftContent,
    "firmabilavtale":              firmabilavtaleContent,
    "hotellavtale-bedrift":        hotellavtaleBedriftContent,
    "it-drift-bedrift":            itDriftBedriftContent,
    "alarm-bedrift":               alarmBedriftContent,
    "hr-system-bedrift":           hrSystemBedriftContent,
    "programvare-bedrift":         programvareBedriftContent,
    "bedriftshelsetjeneste":       bedriftshelsetjenesteContent,
    "reiseavtale-bedrift":         reiseavtaleBedriftContent,
  }
  return map[slug] || null
}

const defaultContent = {
  quickAnswer: "En god bedriftsavtale gir lavere pris ved volum, enklere fakturering på organisasjonsnummer og dedikert kundeservice. Start med å definere behovet, hent inn minst tre tilbud og sammenlign totalprisen over hele bindingsperioden.",
  sections: [
    {
      id: "hva-er",
      h2: "Hva er denne avtaletypen?",
      body: "En bedriftsavtale innen denne kategorien er tilpasset virksomheter og gir bedre betingelser enn tilsvarende privatavtale. Du faktureres på organisasjonsnummer, og avtalene er typisk strukturert rundt volum, servicenivå og administrasjonsverktøy.",
    },
    {
      id: "hvem-passer",
      h2: "Hvem passer dette for?",
      body: "Alle norske virksomheter, fra enkeltpersonforetak til større konserner, kan dra nytte av dedikerte bedriftsavtaler. Behovet og de beste alternativene varierer mellom bransjer og størrelser.",
    },
    {
      id: "hva-se-etter",
      h2: "Hva bør du se etter?",
      body: "Totalprisen over hele avtaleperioden er det viktigste, ikke bare månedsprisen. Inkluder etableringsgebyr, bindingstid, oppsigelseskostnader og prisreguleringsklausuler. Sammenlign også servicenivå og rapporteringsverktøy.",
    },
  ],
  faq: [
    { question: "Kan jeg forhandle vilkårene?", answer: "Ja. I de fleste tilfeller er det mulig å forhandle pris, bindingstid og servicenivå. Jo større volum du representerer, jo mer forhandlingskraft har du. Start alltid med å be om beste pris." },
    { question: "Hva er normal bindingstid?", answer: "Varierer mye etter bransje og kategori. Fra ingen binding til 12 til 36 måneder. Du kan alltid forsøke å forhandle om kortere bindingstid, gjerne mot noe høyere pris." },
  ],
  relatedPages: [] as { label: string; href: string }[],
  cta: { primary: "Sammenlign alternativer", secondary: "Få hjelp til å velge" },
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) notFound()

  const rich = getRichContent(params.slug)
  const content = rich || defaultContent

  const related = categories.filter(c => c.slug !== cat.slug && c.group === cat.group).slice(0, 5)
  const otherRelated = categories.filter(c => c.slug !== cat.slug && c.group !== cat.group).slice(0, 4)
  const relatedGuides = guides.filter(g => g.category === cat.slug).slice(0, 2)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: rich?.meta.title || cat.title,
    description: rich?.meta.description || cat.description,
    url: `https://bedriftsavtale.no/${cat.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Bedriftsavtale.no",
      url: "https://bedriftsavtale.no",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Kategorier", href: "/kategorier" }, { label: cat.shortTitle }]} />
          <div className="mt-5 flex items-start gap-4">
            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 hidden sm:flex">
              <CategoryIcon slug={cat.slug} size={28} />
            </div>
            <div>
              {cat.popular && (
                <span className="inline-block bg-teal-50 text-teal-600 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-2">
                  Populær kategori
                </span>
              )}
              <h1 className="text-3xl font-extrabold text-[var(--text)] tracking-tight mb-3">{cat.title}</h1>
              <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl">{cat.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-site py-10">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Content */}
          <article className="lg:col-span-2 space-y-10">

            {/* Quick answer box */}
            <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-2xl p-6">
              <p className="text-xs font-bold tracking-[.12em] uppercase text-teal-500 mb-2">Kort svar</p>
              <p className="text-base text-[var(--text)] leading-relaxed">{content.quickAnswer}</p>
            </div>

            {/* Rich sections */}
            {'sections' in content && content.sections.map((sec) => (
              <div key={sec.id}>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4 tracking-tight">{sec.h2}</h2>
                <div className="prose-portal">
                  {sec.body.split('\n\n').map((para, i) => {
                    if (para.startsWith('**')) {
                      // Bold heading within body
                      const lines = para.split('\n')
                      return (
                        <div key={i} className="space-y-2 mb-4">
                          {lines.map((line, j) => {
                            if (line.startsWith('**') && line.endsWith('**')) {
                              return <h3 key={j} className="text-base font-bold text-[var(--text)] mt-4 mb-1">{line.replace(/\*\*/g, '')}</h3>
                            }
                            if (line.startsWith('**') && line.includes(':**')) {
                              const [bold, rest] = line.split(':**')
                              return <p key={j} className="text-base text-[var(--muted)] leading-relaxed"><strong className="text-[var(--text)]">{bold.replace('**','')}:</strong>{rest}</p>
                            }
                            return line ? <p key={j} className="text-base text-[var(--muted)] leading-relaxed">{line}</p> : null
                          })}
                        </div>
                      )
                    }
                    return <p key={i} className="text-base text-[var(--muted)] leading-relaxed mb-4">{para}</p>
                  })}
                </div>
              </div>
            ))}

            {/* CTA box */}
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

            {/* Related guides */}
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

            {/* Related pages from rich content */}
            {'relatedPages' in content && content.relatedPages.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-[var(--text)] mb-4">Se også</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {content.relatedPages.map(p => (
                    <Link key={p.href} href={p.href} className="card card-hover flex items-center gap-2.5 px-4 py-3 group">
                      <span className="text-sm font-semibold text-[var(--text)] group-hover:text-teal-600 transition-colors">{p.label}</span>
                      <span className="ml-auto text-[var(--light)] text-sm">›</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            <ContactBox title={`Få hjelp med ${cat.shortTitle.toLowerCase()}`} />

            {/* Related same group */}
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

            {/* Other cats */}
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

      {/* FAQ */}
      {'faq' in content && content.faq.length > 0 && (
        <FAQAccordion faqs={content.faq} title={`Spørsmål og svar om ${cat.shortTitle.toLowerCase()}`} />
      )}
    </>
  )
}
