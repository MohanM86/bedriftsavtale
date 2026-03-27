import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { ContactBox } from "@/components/ui/ContactBox"
import { guides, getGuideBySlug } from "@/data/content"
import { stromLeverandorGuides } from "@/lib/guides/strom-leverandorer"
import { treningsenterGuides } from "@/lib/guides/treningssenter"
import { reiseOgTransportGuides } from "@/lib/guides/reise-og-transport"
import { hotellLeverandorGuides } from "@/lib/guides/hotell-leverandorer"
import { stromFlereGuides } from "@/lib/guides/strom-flere"
import { bransjeGuides } from "@/lib/guides/bransje-guides"
import { sammenligningGuides } from "@/lib/guides/sammenligning-guides"
import { bransjePakker } from "@/lib/guides/bransje-pakker"
import { stromBransjeGuides } from "@/lib/guides/strom-bransje"
import { hotellFlereGuides } from "@/lib/guides/hotell-flere"
import { mobilBransjeGuides } from "@/lib/guides/mobil-bransje"
import { stromIndustriGuides } from "@/lib/guides/strom-industri"
import { sisteBransjeGuides } from "@/lib/guides/siste-bransje"
import { pillarGuides } from "@/lib/guides/pillar-guides"

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return {}
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `https://bedriftsavtale.no/guide/${guide.slug}` },
    openGraph: { title: `${guide.title} | Bedriftsavtale.no`, description: guide.description },
  }
}

/* Inline article content for founding guides */
const articleContent: Record<string, { summary: string; sections: { heading: string; body: string; list?: string[] }[]; faqs: { question: string; answer: string }[] }> = {
  "hva-er-en-bedriftsavtale": {
    summary: "En bedriftsavtale er en kommersiell kontrakt mellom en leverandør og en virksomhet, med bedre betingelser enn privatmarkedet. Det finnes bedriftsavtaler for nesten alle typer varer og tjenester fra mobil og strøm til reise og IT.",
    sections: [
      {
        heading: "Hva er en bedriftsavtale?",
        body: "En bedriftsavtale er en kontrakt mellom en virksomhet og en leverandør av varer eller tjenester. Avtalen er tilpasset bedriftens behov og skiller seg fra private avtaler på flere måter: fakturering på organisasjonsnummer, volumbasert prising og gjerne et definert tjenestenivå (SLA).",
        list: [
          "Fakturering på organisasjonsnummer",
          "Volumbasert prising – lavere pris ved større bruk",
          "Dedikert bedriftskundeservice",
          "Administratorportaler og brukerstyring",
          "Detaljerte forbruksrapporter",
        ],
      },
      {
        heading: "Hva er forskjellen på bedriftsavtale og privatavtale?",
        body: "Den viktigste praktiske forskjellen er fakturering: bedriftsavtaler faktureres på organisasjonsnummer, som gjør det enklere å føre kostnadene i regnskapet og trekke fra mva. I tillegg tilbyr bedriftsavtaler gjerne volumrabatter, dedikert kundeservice og administratorportaler.",
      },
      {
        heading: "Hvilke typer bedriftsavtaler finnes?",
        body: "Det finnes bedriftsavtaler for de aller fleste kategorier. De vanligste for norske bedrifter er: mobilabonnement, internett og bredbånd, strøm, forsikring, bedriftskort, drivstoffkort, reise og overnatting, regnskap og lønn, IT-drift og support, og HR-systemer.",
      },
      {
        heading: "Hvem bør tegne bedriftsavtaler?",
        body: "Alle virksomheter bør vurdere bedriftsavtaler for de tjenestene de bruker regelmessig. Selv et enkeltpersonforetak kan spare penger og tid ved å ha separate bedriftsavtaler for mobil, regnskap og forsikring. Jo større bedriften er, jo mer å hente.",
      },
    ],
    faqs: [
      {
        question: "Er bedriftsavtaler alltid billigere enn privatavtaler?",
        answer: "Ikke nødvendigvis, men de er ofte bedre tilpasset bedriftens behov. For lavt volum er prisforskjellen gjerne liten, men administrative fordeler som fakturering på org.nr. og rapportering er likevel verdifulle.",
      },
      {
        question: "Kan enkeltpersonforetak tegne bedriftsavtaler?",
        answer: "Ja. Enkeltpersonforetak kan tegne de fleste bedriftsavtaler. Du trenger et organisasjonsnummer, som du får automatisk ved registrering i Enhetsregisteret.",
      },
      {
        question: "Hvor lang bindingstid er vanlig?",
        answer: "Varierer etter bransje. Mobilavtaler: 12 til 24 måneder. Strøm: 0 til 12 måneder. IT-tjenester: 12 til 36 måneder. Du kan alltid forsøke å forhandle om kortere bindingstid.",
      },
    ],
  },
}

/* All guide content merged into one lookup */
const allGuideContent: Record<string, { summary: string; sections: { heading: string; body: string; list?: string[] }[]; faqs: { question: string; answer: string }[] }> = {
  ...articleContent,
  ...stromLeverandorGuides,
  ...treningsenterGuides,
  ...reiseOgTransportGuides,
  ...hotellLeverandorGuides,
  ...stromFlereGuides,
  ...bransjeGuides,
  ...sammenligningGuides,
  ...bransjePakker,
  ...stromBransjeGuides,
  ...hotellFlereGuides,
  ...mobilBransjeGuides,
  ...stromIndustriGuides,
  ...sisteBransjeGuides,
  ...pillarGuides,
}

const defaultArticle = {
  summary: "En god bedriftsavtale gir din virksomhet bedre betingelser enn privatmarkedet, enklere administrasjon og gjerne dedikert kundeservice. Les guiden for å forstå hva du bør vurdere.",
  sections: [
    {
      heading: "Innledning",
      body: "Denne guiden gir deg en grundig gjennomgang av temaet. Vi ser på hva du bør vurdere, hvordan du sammenligner alternativer, og hva ekspertene anbefaler for ulike typer norske bedrifter.",
    },
    {
      heading: "Hva er viktigst å vurdere?",
      body: "Totalprisen over hele avtaleperioden er det viktigste, ikke bare månedsprisen. Inkluder etableringsgebyr, bindingstid og oppsigelseskostnader i regnestykket.",
      list: [
        "Definer behovet ditt presist",
        "Hent inn minst tre tilbud",
        "Sammenlign totalprisen",
        "Forhandle alltid",
      ],
    },
    {
      heading: "Hva sier ekspertene?",
      body: "De fleste innkjøpsrådgivere understreker viktigheten av å ha en skriftlig kravspesifikasjon før man tar kontakt med leverandørene. Dette sikrer at du sammenligner epler med epler, og gjør det lettere å argumentere for bedre vilkår.",
    },
  ],
  faqs: [
    {
      question: "Kan jeg forhandle på alle typer bedriftsavtaler?",
      answer: "Ja, i de fleste tilfeller. Spesielt pris, bindingstid og servicenivå er forhandlingsbare. Start alltid med å be om leverandørens beste pris.",
    },
    {
      question: "Hvor lang tid tar det å bytte leverandør?",
      answer: "Varierer mye. Mobilabonnement: 1 til 3 virkedager. Strøm: 2 til 4 uker. IT-tjenester: kan ta måneder. Planlegg byttet i god tid før eksisterende avtale utløper.",
    },
  ],
}

export default function GuideArticlePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) notFound()

  const content = allGuideContent[params.slug] || defaultArticle
  const related = guides.filter(g => g.slug !== guide.slug).slice(0, 3)
  const date = new Date(guide.published).toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.published,
    publisher: {
      "@type": "Organization",
      name: "Bedriftsavtale.no",
      url: "https://bedriftsavtale.no",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs
            items={[{ label: "Guider", href: "/guide" }, { label: guide.title }]}
          />
          <div className="mt-5 max-w-2xl">
            <div className="flex items-center gap-3 text-xs text-[var(--light)] mb-3">
              <span>{date}</span>
              <span>·</span>
              <span>{guide.readTime} lesetid</span>
            </div>
            <h1 className="text-2xl font-extrabold text-[var(--text)] tracking-tight mb-3 leading-tight">
              {guide.title}
            </h1>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{guide.description}</p>
          </div>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="grid lg:grid-cols-3 gap-10">

          <article className="lg:col-span-2">
            {/* Summary box */}
            <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-5 mb-8">
              <p className="text-xs font-bold tracking-[.12em] uppercase text-teal-500 mb-2">
                Oppsummering
              </p>
              <p className="text-sm font-semibold text-[var(--text)] leading-relaxed">
                {content.summary}
              </p>
            </div>

            {/* Sections */}
            <div className="prose-portal">
              {content.sections.map((sec, i) => (
                <div key={i}>
                  <h2>{sec.heading}</h2>
                  <p>{sec.body}</p>
                  {sec.list && (
                    <ul>
                      {sec.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-10">
              <FAQAccordion faqs={content.faqs} title="Spørsmål og svar" />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            {/* TOC */}
            <div className="card overflow-hidden">
              <div className="bg-[var(--bg)] px-4 py-3 border-b border-[var(--border)]">
                <span className="section-label">Innhold</span>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {content.sections.map((sec, i) => (
                  <div key={i} className="px-4 py-2.5">
                    <span className="text-xs text-[var(--muted)] hover:text-teal-600 cursor-pointer transition-colors">
                      {sec.heading}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ContactBox />

            {/* Related guides */}
            <div className="card overflow-hidden">
              <div className="bg-[var(--bg)] px-4 py-3 border-b border-[var(--border)]">
                <span className="section-label">Relaterte guider</span>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {related.map(g => (
                  <Link
                    key={g.slug}
                    href={`/guide/${g.slug}`}
                    className="flex items-start gap-2.5 px-4 py-3 hover:bg-[var(--bg)] transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-[var(--text)] leading-snug group-hover:text-teal-600 transition-colors">
                        {g.title}
                      </div>
                      <div className="text-xs text-[var(--light)] mt-0.5">{g.readTime} lesetid</div>
                    </div>
                    <span className="ml-auto text-[var(--light)] text-xs mt-0.5 flex-shrink-0">›</span>
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
