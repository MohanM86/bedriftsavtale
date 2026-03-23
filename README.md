# Bedriftsavtale.no

Norges ledende portal for bedriftsavtaler. Next.js 14 · TypeScript · Tailwind CSS · Plus Jakarta Sans.

## Hurtigstart

```bash
npm install
cp .env.local.example .env.local   # legg inn GA4-ID
npm run dev                         # → http://localhost:3000
```

## Deploy

Push til GitHub → koble repo på vercel.com → auto-deploy ved push til main.

## Miljøvariabler

| Variabel | Eksempel |
|---|---|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `abc123...` |

## Sider (~55 totalt)

| Type | Antall | Mønster |
|---|---|---|
| Forside | 1 | `/` |
| Kategorisider | 22 | `/[slug]` |
| Guider | 10+1 | `/guide/[slug]` |
| Bransjer | 8+1 | `/bransje/[slug]` |
| Størrelser | 4+1 | `/for/[slug]` |
| Statiske | 6 | `/kategorier`, `/om-oss`, `/kontakt`, `/personvern`, `/vilkar`, `/search` |

## Neste steg

1. Legg inn `NEXT_PUBLIC_GA_ID` i `.env.local`
2. Koble Google Search Console
3. Erstatt SVG-illustrasjoner med ekte bilder
4. Koble kontaktskjema til e-post / CRM
5. Skriv fullstendige artikler for alle 22 kategorier
6. Vurder Sanity.io for CMS ved skalering
