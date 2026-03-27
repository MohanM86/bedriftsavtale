import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { CategoryIcon } from "@/components/ui/icons/CategoryIcons"
import { categories, categoryGroups } from "@/data/categories"

export const metadata: Metadata = {
  title: "Alle bedriftsavtaler – Oversikt over 40 avtaletyper",
  description: "Komplett oversikt over alle typer bedriftsavtaler norske bedrifter kan ha.",
  alternates: { canonical: "https://bedriftsavtale.no/kategorier" },
}

export default function KategorierPage() {
  return (
    <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Kategorier" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Alle bedriftsavtaler</h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">Komplett oversikt over alle 40 typer bedriftsavtaler.</p>
        </div>
      </div>
      <div className="container-site py-10 space-y-10">
        {categoryGroups.map(group => {
          const groupCats = categories.filter(c => c.group === group)
          if (!groupCats.length) return null
          return (
            <div key={group}>
              <h2 className="text-xs font-bold tracking-[.1em] uppercase text-[var(--text)] mb-4 pb-2 border-b border-[var(--border)]">{group}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {groupCats.map(cat => (
                  <Link key={cat.slug} href={`/${cat.slug}`} className="card card-hover flex items-start gap-3.5 p-4 group">
                    <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CategoryIcon slug={cat.slug} size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors leading-snug">{cat.shortTitle}</h3>
                      <p className="text-xs text-[var(--muted)] mt-0.5 leading-relaxed line-clamp-2">{cat.description.slice(0, 70)}…</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
