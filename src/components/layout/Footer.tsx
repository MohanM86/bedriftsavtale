import Link from "next/link"

const categories = [
  { label: "Mobilabonnement",   href: "/mobilabonnement-bedrift" },
  { label: "Bredbånd",          href: "/bredband-bedrift" },
  { label: "Strøm",             href: "/stromavtale-bedrift" },
  { label: "Forsikring",        href: "/forsikring-bedrift" },
  { label: "Bedriftskort",      href: "/bedriftskort" },
  { label: "Drivstoffkort",     href: "/drivstoffkort-bedrift" },
  { label: "Ladekort",          href: "/ladekort-bedrift" },
  { label: "Bensinkort",        href: "/bensinkort-bedrift" },
  { label: "Leasing",           href: "/leasing-bedrift" },
  { label: "Firmabil",          href: "/firmabilavtale" },
  { label: "Reiseavtale",       href: "/reiseavtale-bedrift" },
  { label: "Hotellavtale",      href: "/hotellavtale-bedrift" },
  { label: "IT-drift",          href: "/it-drift-bedrift" },
  { label: "HR-system",         href: "/hr-system-bedrift" },
  { label: "Programvare",       href: "/programvare-bedrift" },
  { label: "Alarm og sikkerhet",href: "/alarm-bedrift" },
  { label: "Renhold",           href: "/renholdsavtale-bedrift" },
  { label: "Kaffe",             href: "/kaffeavtale-bedrift" },
  { label: "Frakt og logistikk",href: "/fraktavtale-bedrift" },
  { label: "Bedriftshelsetjeneste", href: "/bedriftshelsetjeneste" },
  { label: "Kontorrekvisita",   href: "/kontorrekvisita-bedrift" },
  { label: "Regnskap",          href: "/regnskapstjenester-bedrift" },
]

const guides = [
  { label: "Hva er en bedriftsavtale?",         href: "/guide/hva-er-en-bedriftsavtale" },
  { label: "Slik sammenligner du avtaler",       href: "/guide/hvordan-sammenligne-bedriftsavtaler" },
  { label: "Beste bensinkort for bedrift",       href: "/guide/beste-bensinkort-for-bedrift" },
  { label: "Slik velger du hotellavtale",        href: "/guide/hvordan-velge-hotellavtale-for-bedrift" },
  { label: "Strømavtale for bedrift",            href: "/guide/stromavtale-for-bedrift" },
  { label: "Mobilabonnement for bedrift",        href: "/guide/mobilabonnement-for-bedrift" },
  { label: "Er firmabilavtale lønnsomt?",         href: "/guide/nar-lonner-det-seg-med-firmabilavtale" },
  { label: "Forhandle bedre avtaler",            href: "/guide/hvordan-forhandle-bedriftsavtaler" },
  { label: "Avtaler for små bedrifter",          href: "/guide/viktigste-avtaler-sma-bedrifter" },
  { label: "Avtaler for vekstselskaper",         href: "/guide/viktigste-avtaler-vekstselskaper" },
]

const bransjer = [
  { label: "Håndverker og byggebransjen", href: "/bransje/handverker" },
  { label: "Restaurant og servering",     href: "/bransje/restaurant" },
  { label: "Transport og logistikk",      href: "/bransje/transport" },
  { label: "Kontor og konsulenter",       href: "/bransje/kontor" },
  { label: "Eiendom og forvaltning",      href: "/bransje/eiendom" },
  { label: "Butikk og detaljhandel",      href: "/bransje/butikk" },
  { label: "Hotell og overnatting",       href: "/bransje/hotell" },
  { label: "Helse og klinikk",            href: "/bransje/helseklinikk" },
]

const bedriftsstorrelser = [
  { label: "Enkeltpersonforetak",         href: "/for/enkeltpersonforetak" },
  { label: "Små bedrifter (1–10 ansatte)",href: "/for/sma-bedrifter" },
  { label: "Mellomstore bedrifter",       href: "/for/mellomstore-bedrifter" },
  { label: "Startups og vekstselskaper",  href: "/for/startups" },
]

const info = [
  { label: "Om oss",       href: "/om-oss" },
  { label: "Kontakt oss",  href: "/kontakt" },
  { label: "Søk",          href: "/search" },
  { label: "Personvern",   href: "/personvern" },
  { label: "Vilkår",       href: "/vilkar" },
]

export function Footer() {
  return (
    <footer className="bg-[var(--navy)]">

      {/* ── MEGA FOOTER TOP ── */}
      <div className="container-site pt-20 pb-16">

        {/* Brand row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-14 border-b border-white/10">
          <div className="max-w-sm">
            <Link href="/" className="block mb-5">
              <span className="text-3xl font-extrabold tracking-tight text-white">
                Bedrifts<span className="text-teal-300">avtale</span>
                <span className="text-white/30">.no</span>
              </span>
            </Link>
            <p className="text-base text-white/50 leading-relaxed mb-8">
              Norges største portal for bedriftsavtaler. Finn, sammenlign og velg riktige bedriftsavtaler for din bedrift.
            </p>
            {/* Contact */}
            <div className="space-y-3">
              <a href="tel:22000000" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/30 transition-colors">
                  <svg className="w-5 h-5 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-0.5">Telefon</div>
                  <div className="text-lg font-extrabold text-teal-300 tracking-tight">22 00 00 00</div>
                </div>
              </a>
              <a href="mailto:post@bedriftsavtale.no" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-0.5">E-post</div>
                  <div className="text-base font-semibold text-white/60 group-hover:text-white/80 transition-colors">post@bedriftsavtale.no</div>
                </div>
              </a>
            </div>

            {/* IT-Firma attribution */}
            <div className="mt-6 pt-5 border-t border-white/[.07] flex items-center gap-2">
              <span className="text-[10px] text-white/30">En tjeneste fra</span>
              <a
                href="https://it-firma.no"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-teal-300/60 hover:text-teal-300 transition-colors tracking-tight"
              >
                IT-Firma
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-3 lg:w-80">
            {[
              { icon: "✓", label: "40+ avtaletyper", desc: "Alle samlet på ett sted" },
              { icon: "✓", label: "Sammenlign enkelt", desc: "Finn beste avtale raskt" },
              { icon: "✓", label: "AEO-optimalisert", desc: "Klar for AI-søk" },
              { icon: "✓", label: "GDPR-compliant", desc: "Personvern ivaretatt" },
            ].map(b => (
              <div key={b.label} className="bg-white/5 border border-white/8 rounded-2xl p-4">
                <div className="w-7 h-7 bg-teal-500/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-teal-400 text-sm font-bold">{b.icon}</span>
                </div>
                <div className="text-sm font-bold text-white/80 leading-snug mb-0.5">{b.label}</div>
                <div className="text-xs text-white/35 leading-snug">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── LINK GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 pt-14">

          {/* Kategorier, spans 2 cols on large */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-extrabold tracking-[.1em] uppercase text-teal-400 mb-5 pb-3 border-b border-white/10">
              Alle kategorier
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {categories.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white transition-colors leading-snug"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/kategorier" className="text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors col-span-2 mt-1">
                Se alle 40+ kategorier →
              </Link>
            </div>
          </div>

          {/* Guider */}
          <div>
            <h3 className="text-sm font-extrabold tracking-[.1em] uppercase text-teal-400 mb-5 pb-3 border-b border-white/10">
              Guider
            </h3>
            <ul className="space-y-2.5">
              {guides.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors leading-snug block">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/guide" className="text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors">
                  Se alle guider →
                </Link>
              </li>
            </ul>
          </div>

          {/* Bransjer */}
          <div>
            <h3 className="text-sm font-extrabold tracking-[.1em] uppercase text-teal-400 mb-5 pb-3 border-b border-white/10">
              Bransjer
            </h3>
            <ul className="space-y-2.5 mb-8">
              {bransjer.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors leading-snug block">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/bransje" className="text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors">
                  Alle bransjer →
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-extrabold tracking-[.1em] uppercase text-teal-400 mb-5 pb-3 border-b border-white/10">
              Din bedrift
            </h3>
            <ul className="space-y-2.5">
              {bedriftsstorrelser.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors leading-snug block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-extrabold tracking-[.1em] uppercase text-teal-400 mb-5 pb-3 border-b border-white/10">
              Informasjon
            </h3>
            <ul className="space-y-2.5 mb-8">
              {info.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/55 hover:text-white transition-colors leading-snug block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA box */}
            <div className="bg-teal-500/15 border border-teal-500/25 rounded-2xl p-5">
              <p className="text-sm font-bold text-teal-300 mb-2">Trenger du hjelp?</p>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                Ring oss for gratis og uforpliktende veiledning om bedriftsavtaler.
              </p>
              <a
                href="tel:22000000"
                className="block bg-teal-500 hover:bg-teal-400 text-white text-sm font-bold text-center py-3 rounded-xl transition-colors"
              >
                Ring 22 00 00 00
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/[.07]">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/25">
            © {new Date().getFullYear()} Bedriftsavtale.no, En tjeneste fra <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/60 transition-colors">IT-Firma</a>
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {["40+ bedriftsavtaler", "Norges største", "AEO-optimalisert", "GDPR-compliant"].map(b => (
              <span
                key={b}
                className="text-xs font-semibold tracking-wide uppercase text-white/25 border border-white/10 rounded-full px-3 py-1"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
