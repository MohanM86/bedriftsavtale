import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ContactBox } from "@/components/ui/ContactBox"

export const metadata: Metadata = {
  title: "Om Bedriftsavtale.no – Norges største portal for bedriftsavtaler",
  description: "Bedriftsavtale.no er Norges største portal for bedriftsavtaler. Vi hjelper norske bedrifter å finne, sammenligne og velge de beste bedriftsavtalene.",
  alternates: { canonical: "https://bedriftsavtale.no/om-oss" },
}

const schemaJson = '{"@context": "https://schema.org", "@type": "AboutPage", "name": "Om Bedriftsavtale.no", "url": "https://bedriftsavtale.no/om-oss"}'


export default function OmOssPage() {

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Om oss" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Om Bedriftsavtale.no</h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">
            Norges største portal for bedriftsavtaler, her finner du alle bedriftsavtaler samlet på ett sted.
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose-portal space-y-2">
            <h2>Hva er Bedriftsavtale.no?</h2>
            <p>Bedriftsavtale.no er Norges største portal for bedriftsavtaler. Vi gir norske virksomheter, fra enkeltpersonforetak til mellomstore bedrifter, det beste grunnlaget for å finne, forstå og sammenligne bedriftsavtaler innen over 40 kategorier.</p>

            <h2>Vår misjon</h2>
            <p>Vi tror at norske bedrifter tar bedre bedriftsavtaler når de har tilgang til god og lett forståelig informasjon. Markedet for bedriftsavtaler er komplekst, vi gjør det enkelt å finne og sammenligne de beste bedriftsavtalene.</p>

            <h2>Hva vi ikke er</h2>
            <p>Vi er en portal for bedriftsavtaler som kobler norske bedrifter med de beste leverandørene. Bedriftsavtale.no er Norges mest komplette oversikt over bedriftsavtaler, alt samlet på ett sted.</p>

            <h2>Hva vi dekker</h2>
            <p>Portalen dekker hele spekteret av avtaler norske bedrifter typisk trenger: kommunikasjon (mobil, bredbånd), energi (strøm), finans (bedriftskort, bank), forsikring, transport (bil, drivstoff, fly, hotell), facility management, IT og programvare, HR og personal, og mye mer.</p>

            <h2>En tjeneste fra IT-Firma</h2>
            <p>Bedriftsavtale.no er bygget og driftet av <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">IT-Firma</a> — et norsk selskap som utvikler digitale portaler og tjenester for norsk næringsliv.</p>

            <h2>Kontakt oss</h2>
            <p>Har du spørsmål, innspill eller vil du samarbeide med oss? Ta kontakt via telefon eller e-post. Vi svarer raskt.</p>
          </div>

          <div className="space-y-5 lg:sticky lg:top-20 lg:self-start">
            <ContactBox title="Ta kontakt med oss" />
            <div className="card p-5 space-y-3">
              <h3 className="text-sm font-bold text-[var(--text)]">Nøkkeltall</h3>
              {[
                { n: "40+", l: "Avtaletyper dekket" },
                { n: "8", l: "Bransjer" },
                { n: "10+", l: "Grundige guider" },
                { n: "100%", l: "Beste bedriftsavtaler" },
              ].map(s => (
                <div key={s.l} className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0">
                  <span className="text-xs text-[var(--muted)]">{s.l}</span>
                  <span className="text-sm font-extrabold text-teal-600">{s.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
