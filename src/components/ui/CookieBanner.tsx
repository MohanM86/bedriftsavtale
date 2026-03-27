"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-[var(--navy)] text-white rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs font-bold text-white mb-1">Vi bruker informasjonskapsler</p>
          <p className="text-[11px] text-white/60 leading-relaxed">
            Vi bruker cookies for analyse og forbedret brukeropplevelse. Les mer i vår{" "}
            <Link href="/personvern" className="underline text-teal-300 hover:text-teal-200">personvernerklæring</Link>.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button onClick={decline} className="text-[11px] font-semibold text-white/60 hover:text-white px-4 py-2 rounded-full border border-white/20 hover:border-white/40 transition-colors">
            Avvis
          </button>
          <button onClick={accept} className="text-[11px] font-bold bg-teal-500 hover:bg-teal-400 text-white px-5 py-2 rounded-full transition-colors">
            Godta
          </button>
        </div>
      </div>
    </div>
  )
}
