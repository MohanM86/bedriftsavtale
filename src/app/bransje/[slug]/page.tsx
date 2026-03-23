import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { ContactBox } from "@/components/ui/ContactBox"
import { industries, getIndustryBySlug } from "@/data/content"
import { categories, getCategoryBySlug } from "@/data/categories"
import { CategoryIcon } from "@/components/ui/icons/CategoryIcons"

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return industries.map(i => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = getIndustryBySlug(params.slug)
  if (!ind) return {}
  return {
    title: `Bedriftsavtaler for ${ind.title}`,
    description: `${ind.description} Se hvilke bedriftsavtaler som er viktigst for din bransje.`,
    alternates: { canonical: `https://bedriftsavtale.no/bransje/${ind.slug}` },
  }
}

const branjeFaqs: Record<string, { question: string; answer: string }[]> = {
  transport: [
    { question: "Hvilke forsikringer trenger en transportbedrift?", answer: "Transportbedrifter trenger yrkesskadeforsikring (lovpålagt), ansvarsforsikring for kjøretøy (lovpålagt), gods-/vareforsikring og gjerne driftsavbruddsforsikring." },
    { question: "Er drivstoffkort nødvendig for transportbedrifter?", answer: "Drivstoffkort er nesten alltid lønnsomt for transportbedrifter. Du får rabatter på drivstoff, samlet fakturering, og rapporteringsverktøy som gjør det enkelt å styre kostnader per kjøretøy." },
  ],
  restaurant: [
    { question: "Hva er de viktigste forsikringene for en restaurant?", answer: "En restaurant bør ha: ansvarsforsikring, brannforsikring for lokalet, utstyrsforsikring (komfyrer, frysere), yrkesskadeforsikring for ansatte og gjerne produktansvarsforsikring." },
    { question: "Er strøm en stor kostnad for restauranter?", answer: "Ja, strøm er typisk en av de største driftskostnadene for serveringssteder. En god bedriftsstrømavtale kan utgjøre betydelige besparelser." },
  ],
}

const defaultFaqs = [
  { question: "Bør jeg ha alle avtaler hos én leverandør?", answer: "Ikke nødvendigvis. Én leverandør kan gi enklere administrasjon, men du mister konkurransen som holder prisene nede. En god strategi er å ha noen ankerleverandører, men beholde konkurranse i de viktigste kategoriene." },
  { question: "Hvor ofte bør jeg reforhandle avtalene?", answer: "Vi anbefaler å gjennomgå alle bedriftsavtaler minst én gang i året, og alltid i god tid før fornyelse." },
]

export default function BransjeDetailPage({ params }: Props) {
  const industry = getIndustryBySlug(params.slug)
  if (!industry) notFound()

  const industryCats = industry.categories
    .map(slug => getCategoryBySlug(slug))
    .filter(Boolean) as ReturnType<typeof getCategoryBySlug>[]

  const faqs = [...(branjeFaqs[industry.slug] || []), ...defaultFaqs]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","publisher":{"@type":"Organization","name":"Bedriftsavtale.no","url":"https://bedriftsavtale.no","sameAs":["https://it-firma.no"]}}` }} />
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Bransjer", href: "/bransje" }, { label: industry.title }]} />
          <div className="mt-5 flex items-start gap-4">
            
            <div>
              <h1 className="text-2xl font-extrabold text-[var(--text)] tracking-tight mb-2">
                Bedriftsavtaler for <span className="text-teal-600">{industry.title.toLowerCase()}</span>
              </h1>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-2xl">{industry.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Quick answer */}
            <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-5">
              <p className="text-[9px] font-bold tracking-[.12em] uppercase text-teal-500 mb-2">For din bransje</p>
              <p className="text-sm text-[var(--text)] leading-relaxed">
                Bedrifter i {industry.title.toLowerCase()} har spesifikke behov som skiller seg fra andre bransjer. Her er de avtaletypene som er mest relevante og der potensialet for besparelse er størst.
              </p>
            </div>

            {/* Recommended categories */}
            <div>
              <h2 className="text-lg font-bold text-[var(--text)] mb-4">
                Anbefalte bedriftsavtaler for {industry.title.toLowerCase()}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {industryCats.map((cat, i) => cat && (
                  <Link key={cat.slug} href={`/${cat.slug}`} className="card card-hover flex items-start gap-3.5 p-4 group relative">
                    {i === 0 && (
                      <span className="absolute top-2 right-2 text-[8px] font-bold uppercase tracking-wide text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                        Viktigst
                      </span>
                    )}
                    <CategoryIcon slug={cat.slug} size={20} />
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors leading-snug">{cat.shortTitle}</h3>
                      <p className="text-[10px] text-[var(--muted)] mt-0.5 leading-relaxed line-clamp-2">{cat.description.slice(0, 70)}…</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other industries */}
            <div>
              <h2 className="text-lg font-bold text-[var(--text)] mb-3">Andre bransjer</h2>
              <div className="flex flex-wrap gap-2">
                {industries.filter(i => i.slug !== industry.slug).map(ind => (
                  <Link key={ind.slug} href={`/bransje/${ind.slug}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)] hover:text-teal-600 bg-[var(--bg)] hover:bg-teal-50 border border-[var(--border)] hover:border-teal-200 rounded-full px-3 py-1.5 transition-all">
                    <span></span>{ind.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            <ContactBox />
          </div>
        </div>
      </div>

      <FAQAccordion faqs={faqs} title={`Vanlige spørsmål for ${industry.title.toLowerCase()}`} />
    </>
  )
}
