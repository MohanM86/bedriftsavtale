"use client"
import { useState } from "react"

type Status = "idle" | "sending" | "success" | "error"

export function KontaktForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    await new Promise(r => setTimeout(r, 1200))
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[var(--text)]">Melding sendt!</h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">Takk for henvendelsen, {form.name.split(" ")[0]}. Vi svarer deg så raskt som mulig.</p>
        <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", message: "" }) }} className="btn-outline mt-2">Send ny melding</button>
      </div>
    )
  }

  return (
    <div className="bg-teal-500 rounded-2xl p-7">
      <p className="text-xs font-bold tracking-[.14em] uppercase text-white/55 mb-2">Skriv til oss</p>
      <h2 className="text-xl font-extrabold text-white mb-6 leading-snug tracking-tight">Finn riktig bedriftsavtale for din bedrift</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5">Navn *</label>
            <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Ola Nordmann"
              className="w-full bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5">Bedrift</label>
            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Bedriften AS"
              className="w-full bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-white/70 mb-1.5">E-post *</label>
          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="ola@bedriften.no"
            className="w-full bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-white/70 mb-1.5">Hva kan vi hjelpe deg med? *</label>
          <textarea name="message" required value={form.message} onChange={handleChange} rows={4} placeholder="Beskriv hvilke bedriftsavtaler du ser etter..."
            className="w-full bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-all resize-none" />
        </div>
        <button type="submit" disabled={status === "sending"}
          className="w-full bg-white hover:bg-teal-50 text-teal-600 font-bold text-sm py-3.5 rounded-full transition-colors disabled:opacity-60">
          {status === "sending" ? "Sender..." : "Send melding →"}
        </button>
        <p className="text-xs text-white/40 text-center">Vi svarer normalt innen én virkedag</p>
      </form>
    </div>
  )
}
