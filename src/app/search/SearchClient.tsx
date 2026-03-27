"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import { categories } from "@/data/categories"
import { guides, industries } from "@/data/content"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { CategoryIcon } from "@/components/ui/icons/CategoryIcons"

interface Result { type: "kategori" | "guide" | "bransje"; slug: string; href: string; title: string; description: string }

const allItems: Result[] = [
  ...categories.map(c => ({ type: "kategori" as const, slug: c.slug, href: `/${c.slug}`, title: c.title, description: c.description })),
  ...guides.map(g => ({ type: "guide" as const, slug: g.slug, href: `/guide/${g.slug}`, title: g.title, description: g.description })),
  ...industries.map(i => ({ type: "bransje" as const, slug: i.slug, href: `/bransje/${i.slug}`, title: i.title, description: i.description })),
]

const typeColor: Record<string, string> = { kategori: "bg-teal-50 text-teal-700", guide: "bg-blue-50 text-blue-700", bransje: "bg-purple-50 text-purple-700" }
const typeLabel: Record<string, string> = { kategori: "Kategori", guide: "Guide", bransje: "Bransje" }

export function SearchClient() {
  const [query, setQuery] = useState("")
  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return []
    return allItems.filter(item => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Søk" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-5 tracking-tight">Søk</h1>
          <div className="relative max-w-xl">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--light)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="search" autoFocus value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Søk etter avtaletyper, guider, bransjer…"
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-[var(--border)] rounded-xl text-sm text-[var(--text)] placeholder-[var(--light)] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100" />
          </div>
        </div>
      </div>
      <div className="container-site py-8">
        {!query && (
          <div>
            <p className="text-sm text-[var(--muted)] mb-6">Skriv inn et søkeord for å finne avtaletyper, guider og bransjesider.</p>
            <h2 className="text-xs font-bold tracking-[.1em] uppercase text-[var(--text)] mb-3">Populære søk</h2>
            <div className="flex flex-wrap gap-2">
              {["Mobilabonnement", "Strøm bedrift", "Forsikring", "Drivstoffkort", "IT-drift", "Regnskap"].map(term => (
                <button key={term} onClick={() => setQuery(term)} className="text-xs font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 border border-teal-100 px-3 py-1.5 rounded-full transition-colors">{term}</button>
              ))}
            </div>
          </div>
        )}
        {query && results.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-base font-bold text-[var(--text)] mb-2">Ingen resultater for «{query}»</h2>
            <p className="text-sm text-[var(--muted)] mb-6">Prøv et annet søkeord eller se alle kategorier.</p>
            <Link href="/kategorier" className="btn-primary">Se alle kategorier</Link>
          </div>
        )}
        {results.length > 0 && (
          <div>
            <p className="text-xs text-[var(--muted)] mb-5 font-medium">{results.length} resultat{results.length !== 1 ? "er" : ""} for «{query}»</p>
            <div className="space-y-2">
              {results.map(item => (
                <Link key={item.href} href={item.href} className="flex items-start gap-4 p-4 card card-hover group">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CategoryIcon slug={item.slug} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold tracking-wide uppercase px-2 py-0.5 rounded-full ${typeColor[item.type]}`}>{typeLabel[item.type]}</span>
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors leading-snug">{item.title}</h3>
                    <p className="text-xs text-[var(--muted)] mt-0.5 leading-relaxed line-clamp-2">{item.description}</p>
                  </div>
                  <span className="text-[var(--light)] text-sm mt-2 flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
