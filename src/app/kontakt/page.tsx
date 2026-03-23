import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"

export const metadata: Metadata = {
  title: "Kontakt oss | Bedriftsavtale.no",
  description: "Ta kontakt med Bedriftsavtale.no. Vi hjelper deg å finne riktige bedriftsavtaler for din virksomhet.",
  alternates: { canonical: "https://bedriftsavtale.no/kontakt" },
}

export default function KontaktPage() {
  return (
    <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Kontakt" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Ta kontakt</h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">Vi svarer på spørsmål og hjelper deg navigere markedet for bedriftsavtaler.</p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="grid lg:grid-cols-2 gap-10 max-w-3xl">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-bold text-[var(--text)] mb-4">Kontaktinformasjon</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-xl border border-teal-100">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-[9px] font-bold tracking-wide uppercase text-teal-600 mb-0.5">Telefon</p>
                    <a href="tel:22000000" className="text-base font-extrabold text-[var(--text)] hover:text-teal-600 transition-colors">22 00 00 00</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="text-[9px] font-bold tracking-wide uppercase text-[var(--muted)] mb-0.5">E-post</p>
                    <a href="mailto:post@bedriftsavtale.no" className="text-sm font-semibold text-teal-600 hover:underline">post@bedriftsavtale.no</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
              <h3 className="text-sm font-bold text-[var(--text)] mb-2">Hva kan vi hjelpe med?</h3>
              <ul className="space-y-2">
                {[
                  "Finne riktig avtale for din bedrift",
                  "Forstå forskjellene mellom leverandører",
                  "Råd om forhandlingsstrategi",
                  "Spørsmål om spesifikke avtaletyper",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[var(--muted)]">
                    <span className="w-3.5 h-3.5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 h-2 text-white" viewBox="0 0 8 8" fill="none">
                        <polyline points="1.5,4 3,5.5 6.5,2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Simple contact note */}
          <div className="bg-teal-500 rounded-xl p-6 text-white">
            <p className="text-[9px] font-bold tracking-[.12em] uppercase text-white/55 mb-3">Gratis og uforpliktende</p>
            <h2 className="text-lg font-extrabold mb-3 leading-snug">Vi hjelper deg finne de beste avtalene</h2>
            <p className="text-xs text-white/70 leading-relaxed mb-5">
              Ring oss eller send en e-post. Vi er her for å hjelpe norske bedrifter få bedre avtaler — uten skjulte agendaer.
            </p>
            <a href="tel:22000000" className="block bg-white text-teal-600 font-bold text-sm text-center py-3 rounded-full hover:bg-teal-50 transition-colors mb-3">
              Ring 22 00 00 00
            </a>
            <a href="mailto:post@bedriftsavtale.no" className="block border border-white/30 text-white font-semibold text-sm text-center py-3 rounded-full hover:border-white/60 transition-colors">
              Send e-post
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
