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
          <p>Bedriftsavtale.no er en informasjonsportal. Innholdet er ment som generell veiledning og er ikke å anse som juridisk eller finansiell rådgivning. Vi anbefaler alltid at du leser avtaledokumentene selv og eventuelt konsulterer fagpersoner ved behov.</p>

          <h2>Informasjonens nøyaktighet</h2>
          <p>Vi tilstreber å holde informasjonen oppdatert og korrekt, men kan ikke garantere at all informasjon til enhver tid er fullstendig nøyaktig. Priser, betingelser og produkter endres jevnlig av leverandørene. Dobbeltsjekk alltid direkte med leverandøren før du inngår avtaler.</p>

          <h2>Lenker til tredjeparts nettsteder</h2>
          <p>Bedriftsavtale.no kan inneholde lenker til eksterne nettsteder. Vi er ikke ansvarlige for innhold på disse sidene og anbefaler at du leser personvernreglene til disse nettstedene separat.</p>

          <h2>Immaterielle rettigheter</h2>
          <p>Alt innhold på Bedriftsavtale.no – tekst, illustrasjoner og kode – er opphavsrettslig beskyttet. Kopiering eller videredistribusjon krever skriftlig tillatelse.</p>

          <h2>Endringer</h2>
          <p>Vi forbeholder oss retten til å endre disse vilkårene. Endringer trer i kraft ved publisering på nettstedet.</p>

          <h2>Kontakt</h2>
          <p>Spørsmål om vilkår kan rettes til post@bedriftsavtale.no.</p>
        </div>
      </div>
    </div>
  )
}
