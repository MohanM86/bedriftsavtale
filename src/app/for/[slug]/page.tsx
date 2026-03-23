import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { ContactBox } from "@/components/ui/ContactBox"
import { companySizes, getCompanySizeBySlug } from "@/data/content"
import { getCategoryBySlug } from "@/data/categories"
import { CategoryIcon } from "@/components/ui/icons/CategoryIcons"

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return companySizes.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const size = getCompanySizeBySlug(params.slug)
  if (!size) return {}
  return {
    title: `Bedriftsavtaler for ${size.title}`,
    description: `${size.description} Se de viktigste avtalene for din bedriftsstørrelse.`,
    alternates: { canonical: `https://bedriftsavtale.no/for/${size.slug}` },
  }
}

const sizeFaqs: Record<string, { question: string; answer: string }[]> = {
  enkeltpersonforetak: [
    { question: "Må enkeltpersonforetak ha yrkesskadeforsikring?", answer: "Nei. Yrkesskadeforsikring er lovpålagt kun for bedrifter med ansatte. Som ENK uten ansatte trenger du det ikke, men vurder en privat ulykkesforsikring." },
    { question: "Kan jeg bruke private abonnement i enkeltpersonforetaket mitt?", answer: "Teknisk sett ja, men det anbefales å ha separate bedriftsavtaler. Det gir renere regnskapsmessig skille og enklere mva-behandling." },
  ],
  startups: [
    { question: "Bør startups inngå langsiktige bedriftsavtaler?", answer: "Startups bør prioritere fleksibilitet. Unngå lange bindingstider i den tidlige fasen. Sky-baserte løsninger med månedlig abonnement er ofte bedre enn flerårige enterprise-avtaler." },
  ],
}

const defaultFaqs = [
  { question: "Når bør jeg reforhandle bedriftens avtaler?", answer: "Sett av tid til å gjennomgå alle bedriftsavtaler minst én gang per år. Markedet endrer seg, og du kan ha mye å hente på å be om ny pris ved fornyelse." },
  { question: "Bør jeg samle alle avtaler hos én leverandør?", answer: "Det gir enklere administrasjon, men du mister konkurransen som holder prisene nede. En god strategi er noen ankerleverandører, men beholde konkurranse i de viktigste kategoriene." },
]

export default function CompanySizeDetailPage({ params }: Props) {
  const size = getCompanySizeBySlug(params.slug)
  if (!size) notFound()

  const sizeCats = size.categories.map(slug => getCategoryBySlug(slug)).filter(Boolean) as NonNullable<ReturnType<typeof getCategoryBySlug>>[]
  const faqs = [...(sizeFaqs[size.slug] || []), ...defaultFaqs]

  return (
    <>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Din bedrift", href: "/for" }, { label: size.title }]} />
          <div className="mt-5 flex items-start gap-4">
            
            <div>
              <h1 className="text-2xl font-extrabold text-[var(--text)] tracking-tight mb-2">
                Bedriftsavtaler for <span className="text-teal-600">{size.title.toLowerCase()}</span>
              </h1>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-2xl">{size.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-5">
              <p className="text-[9px] font-bold tracking-[.12em] uppercase text-teal-500 mb-2">Tilpasset din størrelse</p>
              <p className="text-sm text-[var(--text)] leading-relaxed">
                Behovene varierer mye etter bedriftsstørrelse. Her er avtaletypene som erfaringsmessig gir størst verdi for {size.title.toLowerCase()}.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[var(--text)] mb-4">Anbefalte avtaler</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {sizeCats.map(cat => (
                  <Link key={cat.slug} href={`/${cat.slug}`} className="card card-hover flex items-start gap-3.5 p-4 group">
                    <CategoryIcon slug={cat.slug} size={20} />
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors leading-snug">{cat.shortTitle}</h3>
                      <p className="text-[10px] text-[var(--muted)] mt-0.5 line-clamp-2 leading-relaxed">{cat.description.slice(0, 70)}…</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[var(--text)] mb-3">Andre bedriftsstørrelser</h2>
              <div className="flex flex-wrap gap-2">
                {companySizes.filter(s => s.slug !== size.slug).map(s => (
                  <Link key={s.slug} href={`/for/${s.slug}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)] hover:text-teal-600 bg-[var(--bg)] hover:bg-teal-50 border border-[var(--border)] hover:border-teal-200 rounded-full px-3 py-1.5 transition-all">
                    <span></span>{s.title}
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

      <FAQAccordion faqs={faqs} title={`Spørsmål fra ${size.title.toLowerCase()}`} />
    </>
  )
}
