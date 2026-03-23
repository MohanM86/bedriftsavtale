import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-7xl font-extrabold text-teal-50 mb-2 tracking-tight">404</div>
        <h1 className="text-2xl font-extrabold text-[var(--text)] mb-3 tracking-tight">Siden finnes ikke</h1>
        <p className="text-sm text-[var(--muted)] mb-8 max-w-sm mx-auto leading-relaxed">
          Siden du leter etter finnes ikke eller har blitt flyttet. Bruk menyen for å finne det du trenger.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Til forsiden</Link>
          <Link href="/kategorier" className="btn-outline">Se alle kategorier</Link>
        </div>
      </div>
    </div>
  )
}
