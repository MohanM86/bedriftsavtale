import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { ContactBox } from "@/components/ui/ContactBox"

export const metadata: Metadata = {
  title: "Om Bedriftsavtale.no – Norges uavhengige portal for bedriftsavtaler",
  description: "Bedriftsavtale.no er en nøytral og uavhengig informasjonsportal som hjelper norske bedrifter å finne, forstå og sammenligne bedriftsavtaler.",
  alternates: { canonical: "https://bedriftsavtale.no/om-oss" },
}

export default function OmOssPage() {
  return (
    <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Om oss" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Om Bedriftsavtale.no</h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">
            En nøytral og uavhengig portal som hjelper norske bedrifter å navigere i markedet for bedriftsavtaler.
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose-portal space-y-2">
            <h2>Hva er Bedriftsavtale.no?</h2>
            <p>Bedriftsavtale.no er Norges ledende informasjonsportal for bedriftsavtaler. Vi gir norske virksomheter — fra enkeltpersonforetak til mellomstore bedrifter — et nøytralt og grundig grunnlag for å finne, forstå og sammenligne bedriftsavtaler innen over 40 kategorier.</p>

            <h2>Vår misjon</h2>
            <p>Vi tror at norske bedrifter tar bedre beslutninger når de har tilgang til god, nøytral og lett forståelig informasjon. Markedet for bedriftsavtaler er komplekst og preget av markedsføring fra leverandørene. Vi er her for å gi det motsatte: ærlig, nøytral og informativ veiledning.</p>

            <h2>Hva vi ikke er</h2>
            <p>Vi er ikke en leverandør av bedriftsavtaler. Vi mottar ikke betaling fra leverandører for å rangere dem høyere eller anbefale dem. Vi er en redaksjonell portal som lever av å gi norske bedrifter nyttig informasjon.</p>

            <h2>Hva vi dekker</h2>
            <p>Portalen dekker hele spekteret av avtaler norske bedrifter typisk trenger: kommunikasjon (mobil, bredbånd), energi (strøm), finans (bedriftskort, bank), forsikring, transport (bil, drivstoff, fly, hotell), facility management, IT og programvare, HR og personal, og mye mer.</p>

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
                { n: "100%", l: "Nøytral informasjon" },
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
