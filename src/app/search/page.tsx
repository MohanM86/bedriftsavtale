import type { Metadata } from "next"
import { SearchClient } from "./SearchClient"

export const metadata: Metadata = {
  title: "Søk – Finn bedriftsavtaler",
  description: "Søk blant alle kategorier, guider og bransjesider på Bedriftsavtale.no.",
  alternates: { canonical: "https://bedriftsavtale.no/search" },
  robots: { index: false, follow: true },
}

export default function SearchPage() {
  return <SearchClient />
}
