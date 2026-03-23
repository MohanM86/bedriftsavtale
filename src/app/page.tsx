import type { Metadata } from "next"
import Link from "next/link"
import { categories, popularCategories } from "@/data/categories"
import { CategoryIcon } from "@/components/ui/icons/CategoryIcons"
import { guides, industries } from "@/data/content"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { ContactBox } from "@/components/ui/ContactBox"

export const metadata: Metadata = {
  title: "Bedriftsavtale.no – Finn riktige bedriftsavtaler for din bedrift",
  description: "Norges ledende portal for bedriftsavtaler. Sammenlign mobilabonnement, strøm, forsikring, drivstoffkort, reiseavtaler og 40+ andre avtaletyper. Gratis og nøytral informasjon.",
  alternates: { canonical: "https://bedriftsavtale.no" },
}

const homeFaqs = [
  { question: "Hva er en bedriftsavtale, og skiller den seg fra en privatavtale?", answer: "En bedriftsavtale er en kommersiell kontrakt mellom en leverandør og en virksomhet, typisk med bedre betingelser enn privatmarkedet. Du får fakturering på org.nr., volumrabatter, dedikert kundeservice og administratorverktøy." },
  { question: "Kan enkeltpersonforetak tegne bedriftsavtaler?", answer: "Ja. De aller fleste leverandører tilbyr bedriftsavtaler til enkeltpersonforetak. Du trenger et organisasjonsnummer. Fordelen er at du holder privat og jobb adskilt og kan føre kostnadene i regnskapet." },
  { question: "Hvilke forsikringer er lovpålagte for norske bedrifter?", answer: "Yrkesskadeforsikring er lovpålagt for alle bedrifter med ansatte. I tillegg er det lovpålagte forsikringer i visse bransjer, som ansvarsforsikring for revisorer, advokater og eiendomsmeglere." },
  { question: "Hvor lang bindingstid er normalt i en bedriftsavtale?", answer: "Varierer etter avtaletypen. Mobilabonnement og bredbånd har typisk 12–24 måneder. Strøm kan tegnes uten binding. IT-drift og programvareavtaler løper gjerne over 12–36 måneder." },
]

const guideHighlights = guides.slice(0, 3)
const featuredGuides   = guides.slice(0, 4)
const featuredIndustries = industries.slice(0, 4)

export default function HomePage() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bedriftsavtale.no",
    url: "https://bedriftsavtale.no",
    description: "Norges ledende portal for bedriftsavtaler",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bedriftsavtale.no/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />

      {/* ── HERO ── */}
      <section className="bg-teal-500">
        <div className="container-site py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="animate-fade-up">
              <p className="text-sm font-bold tracking-[.16em] uppercase text-white/60 mb-6">
                Norges portal for bedriftsavtaler · 2025
              </p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                Finn riktige bedriftsavtaler for din bedrift
              </h1>
              <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-lg">
                Norske bedrifter betaler for mye på dårlige avtaler. Vi gir deg nøytral informasjon, grundige sammenligninger og konkrete råd — uten å selge deg noe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kategorier" className="btn-white text-base px-8 py-4">Se alle avtaletyper →</Link>
                <Link href="/guide" className="btn-ghost-white text-base px-8 py-4">Les guider</Link>
              </div>
            </div>

            <div className="animate-fade-up delay-200 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "40+", lbl: "Avtaletyper" },
                  { num: "8",   lbl: "Bransjer dekket" },
                  { num: "100%",lbl: "Nøytral info" },
                  { num: "0 kr",lbl: "Kostnad for deg" },
                ].map(s => (
                  <div key={s.lbl} className="bg-white/10 border border-white/15 rounded-2xl px-6 py-5">
                    <div className="text-3xl font-extrabold text-white tracking-tight mb-1">{s.num}</div>
                    <div className="text-sm font-medium text-white/60">{s.lbl}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 border border-white/12 rounded-2xl p-5">
                <p className="text-xs font-bold tracking-[.12em] uppercase text-white/50 mb-4">Mest lest nå</p>
                {[
                  { t: "Hva er en bedriftsavtale?",        c: "Grunnkurs",       href: "/guide/hva-er-en-bedriftsavtale" },
                  { t: "Beste mobilabonnement 2025",        c: "Mobilabonnement", href: "/guide/mobilabonnement-for-bedrift" },
                  { t: "Hvilke forsikringer er lovpålagte?",c: "Forsikring",      href: "/forsikring-bedrift" },
                ].map((item, i) => (
                  <Link key={i} href={item.href} className="flex items-start gap-3 py-3 border-b border-white/10 last:border-0 hover:opacity-80 transition-opacity">
                    <span className="text-base font-extrabold text-white/20 w-5 flex-shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <div className="text-sm font-semibold text-white/90 leading-snug">{item.t}</div>
                      <div className="text-xs font-medium text-white/45 mt-0.5">{item.c}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-teal-50 border-b border-teal-100">
        <div className="container-site py-3.5 flex flex-wrap items-center gap-x-8 gap-y-2">
          {["40+ avtaletyper", "Sammenlign enkelt", "Oppdatert 2025", "AEO og LLM-optimalisert", "Redaksjonell kvalitet"].map(t => (
            <div key={t} className="flex items-center gap-2 text-sm font-semibold text-teal-700">
              <span className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 8 8" fill="none">
                  <polyline points="1.5,4 3,5.5 6.5,2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* ── KATEGORIER ── */}
      <section className="py-14 border-b border-[var(--border)]">
        <div className="container-site">
          <div className="flex items-center justify-between mb-7">
            <h2 className="section-label text-base">Populære avtaletyper</h2>
            <Link href="/kategorier" className="text-sm font-semibold text-teal-600 hover:underline">
              Se alle 40+ →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {popularCategories.map(cat => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="card card-hover p-4 flex flex-col gap-3 group"
              >
                <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center">
                  <CategoryIcon slug={cat.slug} size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--text)] leading-snug group-hover:text-teal-600 transition-colors">{cat.shortTitle}</div>
                  <div className="text-xs text-[var(--light)] mt-0.5 leading-snug line-clamp-1">{cat.description.slice(0,38)}…</div>
                </div>
                {cat.popular && (
                  <span className="text-xs font-bold uppercase tracking-wide text-teal-500">★ Populær</span>
                )}
              </Link>
            ))}
            <Link href="/kategorier" className="card bg-[var(--bg)] flex items-center justify-center p-4 card-hover">
              <div className="text-sm font-bold text-teal-600 text-center leading-snug">Se alle<br/>40+ kategorier →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GUIDE HIGHLIGHT ── */}
      <section className="py-14 border-b border-[var(--border)]">
        <div className="container-site">
          <div className="flex items-center justify-between mb-7">
            <h2 className="section-label text-base">Anbefalte guider</h2>
            <Link href="/guide" className="text-sm font-semibold text-teal-600 hover:underline">Se alle guider →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {guideHighlights.map((guide, i) => (
              <Link key={guide.slug} href={`/guide/${guide.slug}`} className={`overflow-hidden group rounded-2xl border transition-all duration-150 ${i === 1 ? "bg-teal-500 border-teal-500 card-hover-dark" : "card card-hover"}`}>
                <div className={`h-28 flex items-center justify-center ${i === 1 ? "bg-teal-600" : "bg-teal-50"}`}>
                  <CategoryIcon
                    slug={guide.category || "stromavtale-bedrift"}
                    size={40}
                    color={i === 1 ? "rgba(255,255,255,0.85)" : "#0F6B5E"}
                  />
                </div>
                <div className="p-6">
                  <p className={`text-xs font-bold tracking-[.12em] uppercase mb-2 ${i === 1 ? "text-white/60" : "text-teal-500"}`}>
                    Guide · {guide.category ? guide.category.split("-")[0] : "Generell"}
                  </p>
                  <h3 className={`text-lg font-bold leading-snug mb-3 ${i === 1 ? "text-white" : "text-[var(--text)]"}`}>
                    {guide.title}
                  </h3>
                  <p className={`text-sm leading-relaxed line-clamp-2 ${i === 1 ? "text-white/65" : "text-[var(--muted)]"}`}>
                    {guide.description}
                  </p>
                  <p className={`text-sm font-bold mt-4 group-hover:underline ${i === 1 ? "text-white/80" : "text-teal-600"}`}>
                    Les guiden →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN 2-COL ── */}
      <section className="py-14 border-b border-[var(--border)]">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Articles */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-7">
                <h2 className="section-label text-base">Siste guider og analyser</h2>
                <Link href="/guide" className="text-sm font-semibold text-teal-600 hover:underline">Se alle →</Link>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {featuredGuides.map(guide => (
                  <Link key={guide.slug} href={`/guide/${guide.slug}`} className="flex items-start gap-5 py-5 group">
                    <div className="w-20 h-16 bg-teal-50 rounded-xl flex-shrink-0 flex items-center justify-center">
                      <CategoryIcon slug={guide.category || "kontorrekvisita-bedrift"} size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[.1em] uppercase text-teal-500 mb-1">
                        {guide.category ? guide.category.replace(/-bedrift/, "").replace(/-/g, " ") : "Guide"}
                      </p>
                      <h3 className="text-base font-bold text-[var(--text)] leading-snug group-hover:text-teal-600 transition-colors mb-1">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-[var(--light)]">{guide.readTime} lesetid · {new Date(guide.published).toLocaleDateString("nb-NO", { month: "long", year: "numeric" })}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card overflow-hidden">
                <div className="bg-[var(--bg)] px-5 py-4 border-b border-[var(--border)]">
                  <span className="section-label">Mest lest</span>
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {guides.slice(0, 4).map(g => (
                    <Link key={g.slug} href={`/guide/${g.slug}`} className="flex items-start gap-3 px-5 py-4 hover:bg-[var(--bg)] transition-colors group">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wide text-teal-500 block mb-1">
                          {g.category ? g.category.replace(/-bedrift/, "").replace(/-/g, " ") : "Generell"}
                        </span>
                        <span className="text-sm font-semibold text-[var(--text)] leading-snug group-hover:text-teal-600 transition-colors">
                          {g.title}
                        </span>
                      </div>
                      <span className="text-[var(--light)] ml-auto flex-shrink-0 mt-0.5 text-base">›</span>
                    </Link>
                  ))}
                </div>
              </div>
              <ContactBox />
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANSJER ── */}
      <section className="py-14 border-b border-[var(--border)]">
        <div className="container-site">
          <div className="flex items-center justify-between mb-7">
            <h2 className="section-label text-base">Tilpasset din bransje</h2>
            <Link href="/bransje" className="text-sm font-semibold text-teal-600 hover:underline">Se alle bransjer →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredIndustries.map(industry => (
              <Link key={industry.slug} href={`/bransje/${industry.slug}`} className="card card-hover p-6 group">

                <h3 className="text-base font-bold text-[var(--text)] mb-2 leading-snug group-hover:text-teal-600 transition-colors">{industry.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{industry.description}</p>
                <p className="text-sm font-bold text-teal-600">Se avtaler →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion faqs={homeFaqs} title="Vanlige spørsmål om bedriftsavtaler" />
    </>
  )
}
