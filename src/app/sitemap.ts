import { MetadataRoute } from "next"
import { categories } from "@/data/categories"
import { guides, industries, companySizes } from "@/data/content"

const BASE = "https://bedriftsavtale.no"
const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const static_: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/kategorier`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/guide`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/bransje`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/for`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/om-oss`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/personvern`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  return [
    ...static_,
    ...categories.map(c => ({ url: `${BASE}/${c.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: c.popular ? 0.9 : 0.8 })),
    ...guides.map(g => ({ url: `${BASE}/guide/${g.slug}`, lastModified: new Date(g.published), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...industries.map(i => ({ url: `${BASE}/bransje/${i.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...companySizes.map(s => ({ url: `${BASE}/for/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
  ]
}
