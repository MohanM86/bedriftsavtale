import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"

export const metadata: Metadata = {
  title: "Vilkår for bruk | Bedriftsavtale.no",
  description: "Vilkår og betingelser for bruk av Bedriftsavtale.no.",
  alternates: { canonical: "https://bedriftsavtale.no/vilkar" },
}

export default function VilkarPage() {
  return (
    <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Vilkår" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Vilkår for bruk</h1>
        </div>
      </div>
      <div className="container-site py-10 max-w-2xl">
        <div className="prose-portal space-y-2">
          <h2>Bruk av nettstedet</h2>
          <p>Bedriftsavtale.no er en informasjonsportal. Innholdet er ment som generell veiledning og er ikke å anse som juridisk eller finansiell rådgivning.</p>
          <h2>Informasjonens nøyaktighet</h2>
          <p>Vi tilstreber å holde informasjonen oppdatert og korrekt, men kan ikke garantere at all informasjon til enhver tid er fullstendig nøyaktig. Dobbeltsjekk alltid direkte med leverandøren før du inngår avtaler.</p>
          <h2>Kontakt</h2>
          <p>Spørsmål om vilkår kan rettes til post@bedriftsavtale.no.</p>
        </div>
      </div>
    </div>
  )
}
