import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { KontaktForm } from "./KontaktForm"

export const metadata: Metadata = {
  title: "Kontakt oss – Bedriftsavtale.no",
  description: "Ta kontakt med Bedriftsavtale.no. Vi hjelper deg å finne riktige bedriftsavtaler for din virksomhet.",
  alternates: { canonical: "https://bedriftsavtale.no/kontakt" },
}

export default function KontaktPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ContactPage","name":"Kontakt Bedriftsavtale.no","description":"Ta kontakt med Bedriftsavtale.no for hjelp med bedriftsavtaler.","url":"https://bedriftsavtale.no/kontakt"}` }} />
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Kontakt" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Ta kontakt</h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">
            Vi hjelper deg å finne de beste bedriftsavtalene for din bedrift, gratis og uforpliktende.
          </p>
        </div>
      </div>

      <div className="container-site py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">

          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-[var(--text)] mb-5">Kontaktinformasjon</h2>
              <div className="space-y-3">
                <a href="tel:22000000" className="flex items-center gap-4 p-4 bg-teal-50 rounded-2xl border border-teal-100 hover:bg-teal-100 transition-colors group">
                  <div className="w-11 h-11 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-teal-600 mb-0.5">Telefon</p>
                    <p className="text-xl font-extrabold text-[var(--text)] tracking-tight">22 00 00 00</p>
                  </div>
                </a>
                <a href="mailto:post@bedriftsavtale.no" className="flex items-center gap-4 p-4 bg-[var(--bg)] rounded-2xl border border-[var(--border)] hover:bg-teal-50 hover:border-teal-200 transition-colors group">
                  <div className="w-11 h-11 bg-[var(--border)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                    <svg className="w-5 h-5 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-[var(--muted)] mb-0.5">E-post</p>
                    <p className="text-base font-semibold text-teal-600">post@bedriftsavtale.no</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[var(--bg)] rounded-2xl border border-[var(--border)] p-5">
              <h3 className="text-sm font-bold text-[var(--text)] mb-3">Hva kan vi hjelpe med?</h3>
              <ul className="space-y-2.5">
                {[
                  "Finne riktige bedriftsavtaler for din bedrift",
                  "Sammenligne leverandører og avtalevilkår",
                  "Råd om forhandlingsstrategi",
                  "Spørsmål om spesifikke avtaletyper",
                  "Partnerskapsforespørsler",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                    <span className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 8 8" fill="none">
                        <polyline points="1.5,4 3,5.5 6.5,2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <KontaktForm />
        </div>
      </div>
    </div>
    </>
  )
}
