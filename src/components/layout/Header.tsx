"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

const nav = [
  { label: "Kategorier", href: "/kategorier" },
  { label: "Guider", href: "/guide" },
  { label: "Bransjer", href: "/bransje" },
  { label: "Din bedrift", href: "/for" },
  { label: "Om oss", href: "/om-oss" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-[var(--border)]">
        <div className="container-site">
          <div className="h-14 flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-[17px] font-extrabold tracking-tight text-[var(--text)]">
                Bedrifts<span className="text-teal-500">avtale</span>
                <span className="text-[var(--light)] font-normal">.no</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center">
              {nav.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-semibold text-[var(--muted)] hover:text-teal-600 px-3 py-1.5 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-2">
              {/* Search button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-[var(--muted)] hover:text-teal-600 hover:bg-teal-50 transition-colors"
                aria-label="Søk"
              >
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <a href="tel:22000000" className="text-[11px] font-bold text-[var(--text)] bg-[var(--bg)] hover:bg-teal-50 px-4 py-2 rounded-full transition-colors">
                22 00 00 00
              </a>
              <Link href="/kontakt" className="btn-outline text-[11px] py-2 px-4">
                Ta kontakt
              </Link>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden flex items-center gap-1">
              <button onClick={() => setSearchOpen(true)} className="p-2 rounded-lg text-[var(--muted)]" aria-label="Søk">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                className="p-2 rounded-lg text-[var(--muted)] hover:bg-[var(--bg)]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Meny"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-white">
            <div className="container-site py-3 space-y-1">
              {nav.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-semibold text-[var(--muted)] hover:text-teal-600 px-3 py-2.5 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-[var(--border)] flex gap-2">
                <a href="tel:22000000" className="btn-outline text-xs flex-1 justify-center">22 00 00 00</a>
                <Link href="/kontakt" onClick={() => setMobileOpen(false)} className="btn-primary text-xs flex-1 justify-center">Ta kontakt</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false) }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden">
            <form onSubmit={handleSearch} className="flex items-center gap-3 p-4 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[var(--light)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                autoFocus
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Søk etter avtaletyper, guider, bransjer…"
                className="flex-1 text-sm text-[var(--text)] placeholder-[var(--light)] outline-none"
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="text-[var(--light)] hover:text-[var(--text)] text-lg leading-none">✕</button>
            </form>

            {/* Quick links */}
            <div className="p-4">
              <p className="text-[9px] font-bold tracking-[.1em] uppercase text-[var(--light)] mb-3">Populære kategorier</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Mobilabonnement", href: "/mobilabonnement-bedrift", icon: "📱" },
                  { label: "Strøm", href: "/stromavtale-bedrift", icon: "⚡" },
                  { label: "Forsikring", href: "/forsikring-bedrift", icon: "🛡️" },
                  { label: "Drivstoffkort", href: "/drivstoffkort-bedrift", icon: "⛽" },
                ].map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-teal-50 transition-colors group"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="text-xs font-semibold text-[var(--text)] group-hover:text-teal-600">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
