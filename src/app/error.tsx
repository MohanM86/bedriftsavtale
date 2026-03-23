"use client"
import { useEffect } from "react"
import Link from "next/link"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-6xl font-extrabold text-teal-50 mb-2">Ops</div>
        <h1 className="text-2xl font-extrabold text-[var(--text)] mb-3 tracking-tight">Noe gikk galt</h1>
        <p className="text-sm text-[var(--muted)] mb-8 max-w-sm mx-auto leading-relaxed">
          Det oppstod en feil. Prøv igjen eller gå tilbake til forsiden.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={reset} className="btn-primary">Prøv igjen</button>
          <Link href="/" className="btn-outline">Til forsiden</Link>
        </div>
      </div>
    </div>
  )
}
