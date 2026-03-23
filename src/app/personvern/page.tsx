import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"

export const metadata: Metadata = {
  title: "Personvernerklæring | Bedriftsavtale.no",
  description: "Les Bedriftsavtale.no sin personvernerklæring.",
  alternates: { canonical: "https://bedriftsavtale.no/personvern" },
}

export default function PersonvernPage() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Personvernerklæring","url":"https://bedriftsavtale.no/personvern"}` }} />
      <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Personvern" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Personvernerklæring</h1>
        </div>
      </div>
      <div className="container-site py-10 max-w-2xl">
        <div className="prose-portal space-y-2">
          <h2>Behandlingsansvarlig</h2>
          <p>Bedriftsavtale.no er behandlingsansvarlig for personopplysninger som samles inn og behandles på denne nettsiden.</p>
          <h2>Hvilke opplysninger samler vi inn?</h2>
          <p>Vi samler inn standard loggfiler (IP-adresse, nettlesertype, sider besøkt) for drift og statistikkformål. Dersom du tar kontakt via skjema eller e-post, lagrer vi kontaktopplysningene du oppgir.</p>
          <h2>Cookies</h2>
          <p>Vi bruker nødvendige informasjonskapsler (cookies) for å drive nettsiden. Vi bruker også analysecookies (Google Analytics) for å forstå brukeratferd, med anonymisert IP.</p>
          <h2>Dine rettigheter</h2>
          <p>Du har rett til innsyn, retting og sletting av dine personopplysninger. Ta kontakt på post@bedriftsavtale.no.</p>
          <h2>Kontakt</h2>
          <p>Spørsmål om personvern kan rettes til post@bedriftsavtale.no eller 22 00 00 00.</p>
        </div>
      </div>
    </div>
    </>
  )
}
