import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/Breadcrumbs"
import { CategoryIcon } from "@/components/ui/icons/CategoryIcons"
import { guides } from "@/data/content"

export const metadata: Metadata = {
  title: "Guider om bedriftsavtaler – Finn riktig avtale for din bedrift",
  description: "Komplett samling av guider om bedriftsavtaler. Lær om mobilabonnement, strøm, forsikring, drivstoffkort og 40+ andre avtaletyper for norske bedrifter.",
  alternates: { canonical: "https://bedriftsavtale.no/guide" },
}

const categoryLabels: Record<string, string> = {
  "mobilabonnement-bedrift": "Mobil",
  "stromavtale-bedrift": "Strøm",
  "hotellavtale-bedrift": "Hotell",
  "firmabilavtale": "Firmabil",
  "reiseavtale-bedrift": "Reise",
  "drivstoffkort-bedrift": "Drivstoff",
  "bedriftsavtale-treningssenter": "Treningssenter",
}

function getCategoryLabel(cat?: string) {
  if (!cat) return "Generell"
  return categoryLabels[cat] || cat.replace(/-bedrift$/, "").replace(/-/g, " ")
}

export default function GuidePage() {
  const featured = guides.slice(0, 3)
  const rest = guides.slice(3)

  return (
    <div>
      <div className="bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="container-site py-8">
          <Breadcrumbs items={[{ label: "Guider" }]} />
          <h1 className="text-2xl font-extrabold text-[var(--text)] mt-4 mb-2 tracking-tight">
            Guider om bedriftsavtaler
          </h1>
          <p className="text-sm text-[var(--muted)] max-w-xl">
            Grundige guider som hjelper deg å forstå, sammenligne og velge riktige bedriftsavtaler for din virksomhet.
          </p>
        </div>
      </div>

      <div className="container-site py-10 space-y-12">

        {/* Featured guides */}
        <div>
          <h2 className="text-xs font-bold tracking-[.1em] uppercase text-[var(--text)] mb-5 pb-2 border-b border-[var(--border)]">
            Anbefalte guider
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {featured.map((guide, i) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className={`overflow-hidden group rounded-2xl border transition-all duration-150 ${i === 1 ? "bg-teal-500 border-teal-500 card-hover-dark" : "card card-hover"}`}
              >
                <div className={`h-24 flex items-center justify-center ${i === 1 ? "bg-teal-600" : "bg-teal-50"}`}>
                  <CategoryIcon
                    slug={guide.category || "kontorrekvisita-bedrift"}
                    size={36}
                    color={i === 1 ? "rgba(255,255,255,0.85)" : "#0F6B5E"}
                  />
                </div>
                <div className="p-5">
                  <p className={`text-xs font-bold tracking-[.12em] uppercase mb-2 ${i === 1 ? "text-white/60" : "text-teal-500"}`}>
                    {getCategoryLabel(guide.category)}
                  </p>
                  <h3 className={`text-base font-bold leading-snug mb-2 ${i === 1 ? "text-white" : "text-[var(--text)]"}`}>
                    {guide.title}
                  </h3>
                  <p className={`text-xs leading-relaxed line-clamp-2 mb-3 ${i === 1 ? "text-white/65" : "text-[var(--muted)]"}`}>
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${i === 1 ? "text-white/50" : "text-[var(--light)]"}`}>{guide.readTime} lesetid</span>
                    <span className={`text-sm font-bold ${i === 1 ? "text-white/80" : "text-teal-600"}`}>Les →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All guides */}
        <div>
          <h2 className="text-xs font-bold tracking-[.1em] uppercase text-[var(--text)] mb-5 pb-2 border-b border-[var(--border)]">
            Alle guider ({guides.length} totalt)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {rest.map(guide => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="card card-hover flex items-start gap-3.5 p-4 group"
              >
                <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CategoryIcon slug={guide.category || "kontorrekvisita-bedrift"} size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold tracking-wide uppercase text-teal-500 mb-1">
                    {getCategoryLabel(guide.category)}
                  </p>
                  <h3 className="text-sm font-bold text-[var(--text)] group-hover:text-teal-600 transition-colors leading-snug mb-1">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--light)]">{guide.readTime} lesetid</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
