import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { guides } from "@/data/content"

export const metadata: Metadata = {
  title: "Guider om bedriftsavtaler – Råd og innsikt",
  description: "Les våre guider om bedriftsavtaler. Finn ut hva du bør vurdere, hvordan du sammenligner, og hva ekspertene anbefaler.",
  alternates: { canonical: "https://bedriftsavtale.no/guide" },
}

export default function GuidePage() {
  return (
    <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Guider" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Guider om bedriftsavtaler</h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">
            Nøytrale, grundige guider som hjelper deg ta bedre beslutninger. Skrevet for norske bedriftseiere og beslutningstakere.
          </p>
        </div>
      </div>
      <div className="container-site py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map(guide => {
            const date = new Date(guide.published).toLocaleDateString("nb-NO", { year: "numeric", month: "long", day: "numeric" })
            return (
              <Link key={guide.slug} href={`/guide/${guide.slug}`} className="card card-hover p-5 flex flex-col gap-3 group">
                <div className="flex items-center gap-2 text-[9px] text-[var(--light)]">
                  <span>{date}</span>
                  <span>·</span>
                  <span>{guide.readTime} lesetid</span>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[var(--text)] leading-snug mb-2 group-hover:text-teal-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-3">{guide.description}</p>
                </div>
                <div className="flex items-center gap-1 text-teal-600 text-[10px] font-bold mt-auto group-hover:gap-2 transition-all">
                  Les guide <span>→</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
