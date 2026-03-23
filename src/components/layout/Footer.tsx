import Link from "next/link"

const cols = [
  {
    head: "Kategorier",
    links: [
      { label: "Mobilabonnement", href: "/mobilabonnement-bedrift" },
      { label: "Bredbånd", href: "/bredband-bedrift" },
      { label: "Strøm", href: "/stromavtale-bedrift" },
      { label: "Forsikring", href: "/forsikring-bedrift" },
      { label: "Bedriftskort", href: "/bedriftskort" },
      { label: "Drivstoffkort", href: "/drivstoffkort-bedrift" },
      { label: "Se alle →", href: "/kategorier" },
    ],
  },
  {
    head: "Guider",
    links: [
      { label: "Hva er en bedriftsavtale?", href: "/guide/hva-er-en-bedriftsavtale" },
      { label: "Slik sammenligner du", href: "/guide/hvordan-sammenligne-bedriftsavtaler" },
      { label: "Beste bensinkort", href: "/guide/beste-bensinkort-for-bedrift" },
      { label: "Forhandle bedre", href: "/guide/hvordan-forhandle-bedriftsavtaler" },
      { label: "Se alle guider →", href: "/guide" },
    ],
  },
  {
    head: "Bransjer",
    links: [
      { label: "Håndverker", href: "/bransje/handverker" },
      { label: "Transport", href: "/bransje/transport" },
      { label: "Restaurant", href: "/bransje/restaurant" },
      { label: "Kontor", href: "/bransje/kontor" },
      { label: "Hotell", href: "/bransje/hotell" },
      { label: "Alle bransjer →", href: "/bransje" },
    ],
  },
  {
    head: "Informasjon",
    links: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Kontakt oss", href: "/kontakt" },
      { label: "Søk", href: "/search" },
      { label: "Personvern", href: "/personvern" },
      { label: "Vilkår", href: "/vilkar" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container-site py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/[.07]">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="text-[16px] font-extrabold tracking-tight">
                Bedrifts<span className="text-teal-300">avtale</span><span className="text-white/40">.no</span>
              </span>
            </Link>
            <p className="text-[10px] text-white/40 leading-relaxed mb-5 max-w-[170px]">
              Norges ledende portal for bedriftsavtaler. Nøytral og uavhengig informasjon.
            </p>
            <a href="tel:22000000" className="block text-sm font-bold text-teal-300 hover:text-teal-200 transition-colors mb-1">
              22 00 00 00
            </a>
            <a href="mailto:post@bedriftsavtale.no" className="block text-[10px] text-white/40 hover:text-white/70 transition-colors">
              post@bedriftsavtale.no
            </a>
          </div>
          {cols.map(col => (
            <div key={col.head}>
              <h3 className="text-[9px] font-bold tracking-[.1em] uppercase text-teal-400/60 border-b border-white/[.06] pb-2.5 mb-3">
                {col.head}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[10px] text-white/50 hover:text-white/80 transition-colors leading-snug block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[9px] text-white/20">
            © {new Date().getFullYear()} Bedriftsavtale.no — Uavhengig informasjon om bedriftsavtaler i Norge
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {["Nøytral", "Redaksjonell", "AEO-optimalisert", "GDPR-compliant"].map(b => (
              <span key={b} className="text-[7px] font-bold tracking-wide uppercase text-white/20 border border-white/10 rounded-full px-2 py-1">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
