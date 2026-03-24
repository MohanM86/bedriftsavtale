import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { categories, categoryGroups } from "@/data/categories"
import { CategoryIcon } from "@/components/ui/icons/CategoryIcons"

export const metadata: Metadata = {
  title: "Alle bedriftsavtaler – Oversikt over 40+ avtaletyper",
  description: "Komplett oversikt over alle typer bedriftsavtaler norske bedrifter kan ha. Klikk på en kategori for guider, sammenligninger og råd.",
  alternates: { canonical: "https://bedriftsavtale.no/kategorier" },
}

export default function KategorierPage() {
  const _schema = {"@context":"https://schema.org","@type":"CollectionPage","name":"Alle bedriftsavtaler","description":"Komplett oversikt over 40 pluss typer bedriftsavtaler.","url":"https://bedriftsavtale.no/kategorier"}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_schema) }} />
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Kategorier" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">Alle bedriftsavtaler</h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">
            Komplett oversikt over alle 40+ typer bedriftsavtaler. Klikk på en kategori for guider, prismodeller og sammenligninger.
          </p>
        </div>
      </div>
      <div className="container-site py-10 space-y-10">
        {categoryGroups.map(group => {
          const groupCats = categories.filter(c => c.group === group)
          if (!groupCats.length) return null
          return (
            <div key={group}>
              <h2 className="text-[11px] font-bold tracking-[.1em] uppercase text-[var(--text)] mb-4 pb-2 border-b border-[var(--border)]">
                {group}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {groupCats.map(cat => (
                  <Link key={cat.slug} href={`/${cat.slug}`} className="card card-hover flex items-start gap-3.5 p-4 group">
                    <CategoryIcon slug={cat.slug} size={20} />
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors leading-snug">
                        {cat.shortTitle}
                      </h3>
                      <p className="text-[10px] text-[var(--muted)] mt-0.5 leading-relaxed line-clamp-2">
                        {cat.description.slice(0, 70)}…
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}
