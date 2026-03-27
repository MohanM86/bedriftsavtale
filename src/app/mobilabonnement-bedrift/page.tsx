// src/app/mobilabonnement-bedrift/page.tsx
// Rank-1-optimalisert side for "mobilabonnement bedrift"
// Schema: Article + FAQPage + BreadcrumbList + Organization
// Sist oppdatert: mars 2026

import type { Metadata } from "next";
import { mobilabonnementContent as c } from "@/lib/content/mobilabonnement-bedrift";

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: c.seo.metaTitle,
  description: c.seo.metaDescription,
  keywords: c.seo.keywords.join(", "),
  openGraph: {
    title: c.seo.metaTitle,
    description: c.seo.metaDescription,
    url: "https://bedriftsavtale.no/mobilabonnement-bedrift",
    siteName: "Bedriftsavtale.no",
    locale: "nb_NO",
    type: "article",
  },
  alternates: {
    canonical: "https://bedriftsavtale.no/mobilabonnement-bedrift",
  },
};

// ─── SCHEMA JSON-LD ──────────────────────────────────────────────────────────

function buildSchemas() {
  const base = "https://bedriftsavtale.no";

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: base },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mobilabonnement for bedrift",
        item: `${base}/mobilabonnement-bedrift`,
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.seo.metaTitle,
    description: c.seo.metaDescription,
    datePublished: "2025-01-01",
    dateModified: "2026-03-27",
    lastReviewed: "2026-03-27",
    url: `${base}/mobilabonnement-bedrift`,
    publisher: {
      "@type": "Organization",
      name: "Bedriftsavtale.no",
      url: base,
      logo: { "@type": "ImageObject", url: `${base}/icon.svg` },
    },
    author: {
      "@type": "Organization",
      name: "Redaksjonen, Bedriftsavtale.no",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: c.buyingGuide.heading,
    description: c.buyingGuide.intro,
    step: c.buyingGuide.steps.map((step: { stepNumber: number; title: string; body: string }) => ({
      "@type": "HowToStep",
      position: step.stepNumber,
      name: step.title,
      text: step.body,
    })),
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bedriftsavtale.no",
    url: base,
    logo: { "@type": "ImageObject", url: `${base}/icon.svg` },
    description:
      "Nøytral rådgivningsportal for bedriftsavtaler i Norge. Sammenlign mobilabonnement, strøm, forsikring og andre avtaler for norske bedrifter.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hei@bedriftsavtale.no",
      availableLanguage: "Norwegian",
    },
    sameAs: ["https://it-firma.no"],
  };

  return [breadcrumb, article, faq, howTo, organization];
}

// ─── IKONER (SVG) ────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="8" fill="#16a34a" />
    <path
      d="M4.5 8.5l2.5 2.5 4.5-5"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="8" fill="#dc2626" />
    <path
      d="M5.5 5.5l5 5M10.5 5.5l-5 5"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="9" cy="9" r="8.25" stroke="#2563eb" strokeWidth="1.5" />
    <path
      d="M9 8v5M9 6v.5"
      stroke="#2563eb"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z"
      fill="#ca8a04"
      stroke="#ca8a04"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);



export default function MobilabonnementPage() {
  const schemas = buildSchemas();

  return (
    <>
      {/* Schema JSON-LD */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-white">
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Brødsmulesti" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-slate-500">
                <li>
                  <a href="/" className="hover:text-slate-800 transition-colors">
                    Hjem
                  </a>
                </li>
                <li aria-hidden="true" className="text-slate-300">/</li>
                <li className="text-slate-800 font-medium" aria-current="page">
                  Mobilabonnement for bedrift
                </li>
              </ol>
            </nav>

            <span className="inline-block text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1 mb-4">
              Oppdatert {c.lastUpdated}
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              {c.hero.heading}
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              {c.hero.subheading}
            </p>

            {/* ── INNHOLDSFORTEGNELSE ──────────────────────────────── */}
            <nav aria-label="Innhold på denne siden">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
                På denne siden
              </p>
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                {[
                  { href: "#raskt-svar", label: "Hva koster det?" },
                  { href: "#toppvalg", label: "Våre anbefalinger" },
                  { href: "#sammenligning", label: "Sammenligningstabell" },
                  { href: "#operatorer", label: "Gjennomgang per operatør" },
                  { href: "#priser", label: "Priser etter bedriftsstørrelse" },
                  { href: "#velg-riktig", label: "Slik velger du riktig" },
                  { href: "#bransje", label: "Anbefaling per bransje" },
                  { href: "#unngaa", label: "Vanlige feil" },
                  { href: "#faq", label: "Ofte stilte spørsmål" },
                ].map((item: { href: string; label: string }) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 group"
                    >
                      <ArrowIcon />
                      <span className="group-hover:underline">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">

          {/* ── DIREKTE SVAR (AI-chunk 1) ────────────────────────────── */}
          <section aria-labelledby="raskt-svar">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <InfoIcon />
                <div>
                  <h2
                    id="raskt-svar"
                    className="text-base font-semibold text-blue-900 mb-2"
                  >
                    {c.shortAnswer.question}
                  </h2>
                  <p className="text-blue-800 leading-relaxed">
                    {c.shortAnswer.answer}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── TOPPVALG / VINNER-FREMHEVING ─────────────────────────── */}
          <section aria-labelledby="toppvalg" id="toppvalg">
            <h2 id="toppvalg-heading" className="text-2xl font-bold text-slate-900 mb-2">
              Våre anbefalinger for mars 2026
            </h2>
            <p className="text-slate-600 mb-6">
              Basert på pris, dekning og kundetilfredshet er dette våre toppvalg for norske bedrifter.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {c.topPicks.map((pick: { badge: string; name: string; verdict: string }) => (
                <div
                  key={pick.name}
                  className="border-2 border-amber-200 bg-amber-50 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-1.5 mb-3">
                    <StarIcon />
                    <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                      {pick.badge}
                    </span>
                  </div>
                  <p className="font-bold text-slate-900 text-lg mb-2">{pick.name}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{pick.verdict}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SAMMENLIGNINGSTABELL (AI-chunk 2a) ───────────────────── */}
          <section aria-labelledby="sammenligning" id="sammenligning">
            <h2
              id="sammenligning"
              className="text-2xl font-bold text-slate-900 mb-2"
            >
              {c.comparisonTable.heading}
            </h2>
            <p className="text-slate-600 mb-6">{c.comparisonTable.caption}</p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {c.comparisonTable.columns.map((col: string) => (
                      <th
                        key={col}
                        className="text-left px-4 py-3 font-semibold text-slate-700 whitespace-nowrap"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.comparisonTable.rows.map((row: { operatør: string; nett: string; prisFra: string; dekning: string; bindingstid: string; passerFor: string }, i: number) => (
                    <tr
                      key={row.operatør}
                      className={
                        i % 2 === 0
                          ? "bg-white border-b border-slate-100"
                          : "bg-slate-50 border-b border-slate-100"
                      }
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">
                        {row.operatør}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.nett}</td>
                      <td className="px-4 py-3 font-bold text-blue-700 whitespace-nowrap">
                        {row.prisFra}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.dekning}</td>
                      <td className="px-4 py-3 text-slate-600">{row.bindingstid}</td>
                      <td className="px-4 py-3 text-slate-600">{row.passerFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              Priser er veiledende per mars 2026 og kan variere etter flåtestørrelse og forhandlet avtale.
            </p>
          </section>


          <section aria-labelledby="hva-er">
            <h2
              id="hva-er"
              className="text-2xl font-bold text-slate-900 mb-5"
            >
              {c.intro.heading}
            </h2>
            <div className="space-y-4">
              {c.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* ── LEVERANDØRSAMMENLIGNING (AI-chunk 2) ─────────────────── */}
          <section aria-labelledby="operatorer" id="operatorer">
            <h2
              id="operatorer"
              className="text-2xl font-bold text-slate-900 mb-2"
            >
              {c.providerComparison.heading}
            </h2>
            <p className="text-slate-600 mb-8">{c.providerComparison.intro}</p>

            <div className="space-y-6">
              {c.providerComparison.providers.map((p: { name: string; network: string; priceFrom: string; coverageGrade: string; bestFor: string; pros: string[]; cons: string[]; typicalPrice: string }) => (
                <article
                  key={p.name}
                  className="border border-slate-200 rounded-2xl overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {p.name}
                      </h3>
                      <p className="text-sm text-slate-500 mt-0.5">
                        Nett: {p.network}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-slate-500">Fra</span>
                      <p className="font-bold text-slate-900">{p.priceFrom}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-6 py-5 grid sm:grid-cols-2 gap-6">
                    {/* Fordeler */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
                        Fordeler
                      </p>
                      <ul className="space-y-2">
                        {p.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <span className="mt-0.5 shrink-0">
                              <CheckIcon />
                            </span>
                            <span className="text-sm text-slate-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ulemper */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
                        Ulemper
                      </p>
                      <ul className="space-y-2">
                        {p.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <span className="mt-0.5 shrink-0">
                              <CrossIcon />
                            </span>
                            <span className="text-sm text-slate-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span>
                        <strong className="text-slate-800">Typisk pris:</strong>{" "}
                        {p.typicalPrice}
                      </span>
                      <span>
                        <strong className="text-slate-800">Passer for:</strong>{" "}
                        {p.bestFor}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── PRISGUIDE (AI-chunk 3) ───────────────────────────────── */}
          <section aria-labelledby="priser">
            <h2
              id="priser"
              className="text-2xl font-bold text-slate-900 mb-2"
            >
              {c.priceGuide.heading}
            </h2>
            <p className="text-slate-600 mb-8">{c.priceGuide.intro}</p>

            <div className="grid sm:grid-cols-3 gap-5 mb-6">
              {c.priceGuide.tiers.map((tier: { label: string; priceRange: string; includes: string; note: string }) => (
                <div
                  key={tier.label}
                  className="border border-slate-200 rounded-2xl p-5"
                >
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    {tier.label}
                  </h3>
                  <p className="text-xl font-bold text-blue-700 my-2">
                    {tier.priceRange}
                  </p>
                  <p className="text-sm text-slate-600 mb-3">
                    {tier.includes}
                  </p>
                  <p className="text-xs text-slate-400 italic">{tier.note}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4 text-sm text-amber-800">
              <strong>Tips:</strong> {c.priceGuide.tip}
            </div>
          </section>

          {/* ── KJØPSGUIDE / HOWTO (AI-chunk 4) ─────────────────────── */}
          <section aria-labelledby="velg-riktig">
            <h2
              id="velg-riktig"
              className="text-2xl font-bold text-slate-900 mb-2"
            >
              {c.buyingGuide.heading}
            </h2>
            <p className="text-slate-600 mb-8">{c.buyingGuide.intro}</p>

            <ol className="space-y-6">
              {c.buyingGuide.steps.map((step: { stepNumber: number; title: string; body: string }) => (
                <li key={step.stepNumber} className="flex gap-5">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    {step.stepNumber}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ── BRANSJEANBEFALING (AI-chunk 5) ──────────────────────── */}
          <section aria-labelledby="bransje" id="bransje">
            <h2
              id="bransje"
              className="text-2xl font-bold text-slate-900 mb-2"
            >
              {c.industryRecommendations.heading}
            </h2>
            <p className="text-slate-600 mb-8">
              {c.industryRecommendations.intro}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {c.industryRecommendations.recommendations.map((rec: { industry: string; recommended: string; reason: string }) => (
                <div
                  key={rec.industry}
                  className="border border-slate-200 rounded-xl p-5"
                >
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    {rec.industry}
                  </h3>
                  <p className="text-blue-700 font-semibold text-sm mb-2">
                    {rec.recommended}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {rec.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── VANLIGE FEIL ─────────────────────────────────────────── */}
          <section aria-labelledby="unngaa" id="unngaa">
            <h2
              id="unngaa"
              className="text-2xl font-bold text-slate-900 mb-6"
            >
              {c.avoidList.heading}
            </h2>

            <div className="space-y-4">
              {c.avoidList.items.map((item: { title: string; description: string }) => (
                <div
                  key={item.title}
                  className="flex gap-4 border border-red-100 bg-red-50 rounded-xl px-5 py-4"
                >
                  <CrossIcon />
                  <div>
                    <p className="font-semibold text-red-900 text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-red-800 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ (AI-chunk 6) ─────────────────────────────────────── */}
          <section aria-labelledby="faq" id="faq">
            <h2
              id="faq"
              className="text-2xl font-bold text-slate-900 mb-8"
            >
              Ofte stilte spørsmål om mobilabonnement for bedrift
            </h2>

            <div className="space-y-4">
              {c.faq.map((item: { question: string; answer: string }) => (
                <details
                  key={item.question}
                  className="group border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                    <span className="font-semibold text-slate-900 text-sm leading-snug">
                      {item.question}
                    </span>
                    <svg
                      className="shrink-0 w-5 h-5 text-slate-400 transition-transform group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-3">
                    <p className="text-slate-700 leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── RELATERTE KATEGORIER OG GUIDER ───────────────────────── */}
          <section aria-labelledby="relatert">
            <h2
              id="relatert"
              className="text-xl font-bold text-slate-900 mb-5"
            >
              Relaterte bedriftsavtaler
            </h2>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {c.relatedCategories.map((cat: { title: string; slug: string; description: string }) => (
                <a
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="group border border-slate-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <p className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-blue-700">
                    {cat.title}
                  </p>
                  <p className="text-xs text-slate-500">{cat.description}</p>
                </a>
              ))}
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Relaterte guider
            </h3>
            <ul className="space-y-2">
              {c.relatedGuides.map((guide: { title: string; slug: string }) => (
                <li key={guide.slug}>
                  <a
                    href={`/guide/${guide.slug}`}
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 text-sm group"
                  >
                    <ArrowIcon />
                    <span className="group-hover:underline">{guide.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* ── REDAKSJONELL NOTE ────────────────────────────────────── */}
          <footer className="border-t border-slate-100 pt-8 text-xs text-slate-400 space-y-1">
            <p>
              Sist oppdatert: {c.lastUpdated}. Bedriftsavtale.no er en nøytral
              rådgivningsportal. Vi mottar ikke betaling for å anbefale
              spesifikke leverandører.
            </p>
            <p>
              Driftes av{" "}
              <a
                href="https://it-firma.no"
                className="underline hover:text-slate-600"
                rel="noopener"
              >
                IT-Firma.no
              </a>
              .
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
