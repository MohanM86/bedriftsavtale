import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { industries } from "@/data/content"

export const metadata: Metadata = {
  title: "Bedriftsavtaler etter bransje – Finn avtaler for din virksomhet",
  description: "Se hvilke bedriftsavtaler som er viktigst for din bransje. Oversikter for håndverkere, restauranter, transport, kontor, hotell og mer.",
  alternates: { canonical: "https://bedriftsavtale.no/bransje" },
}

export default function BransjePage() {
  return (
    <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Bransjer" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Bedriftsavtaler etter bransje</h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">
            Ulike bransjer har ulike behov. Finn avtalene som er mest relevante for din type virksomhet.
          </p>
        </div>
      </div>
      <div className="container-site py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map(ind => (
            <Link key={ind.slug} href={`/bransje/${ind.slug}`} className="card card-hover p-5 flex flex-col gap-3 group">
              <div className="text-3xl"></div>
              <div>
                <h2 className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors mb-1.5 leading-snug">{ind.title}</h2>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{ind.description}</p>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto">
                {ind.categories.slice(0, 3).map(c => (
                  <span key={c} className="text-[8px] font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
                    {c.replace("-bedrift", "").replace(/-/g, " ")}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
