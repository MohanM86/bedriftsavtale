import Link from "next/link"

interface Crumb { label: string; href?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: "https://bedriftsavtale.no" },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `https://bedriftsavtale.no${item.href}` } : {}),
      })),
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="flex items-center gap-1.5 text-xs text-[var(--light)]">
        <Link href="/" className="hover:text-teal-600 transition-colors">Forside</Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span className="text-[var(--border)]">/</span>
            {item.href
              ? <Link href={item.href} className="hover:text-teal-600 transition-colors">{item.label}</Link>
              : <span className="text-[var(--text)] font-medium">{item.label}</span>
            }
          </span>
        ))}
      </nav>
    </>
  )
}
