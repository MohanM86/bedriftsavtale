import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { companySizes } from "@/data/content"

export const metadata: Metadata = {
  title: "Bedriftsavtaler etter bedriftsstørrelse – Bedriftsavtale.no",
  description: "Finn de viktigste bedriftsavtalene for din bedriftsstørrelse.",
  alternates: { canonical: "https://bedriftsavtale.no/for" },
}

export default function ForPage() {
  return (
    <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Din bedrift" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Bedriftsavtaler for alle størrelser</h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">Behovet for bedriftsavtaler varierer avhengig av om du er soloselvstending, vekststartup eller etablert bedrift.</p>
        </div>
      </div>
      <div className="container-site py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {companySizes.map(size => (
            <Link key={size.slug} href={`/for/${size.slug}`} className="card card-hover p-5 flex flex-col gap-3 group">
              <div>
                <h2 className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors mb-1.5 leading-snug">{size.title}</h2>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{size.description}</p>
              </div>
              <p className="text-xs font-bold text-teal-600 mt-auto">Se anbefalte avtaler →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
