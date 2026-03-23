"use client"
import { useState } from "react"

export interface FAQ { question: string; answer: string }

export function FAQAccordion({ faqs, title = "Vanlige spørsmål" }: { faqs: FAQ[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0)

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  return (
    <section className="py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-site">
        <h2 className="text-2xl font-bold text-[var(--text)] mb-3">{title}</h2>
        <p className="text-base text-[var(--muted)] mb-10 max-w-2xl">
          Her svarer vi på de spørsmålene norske bedriftseiere oftest stiller.
        </p>
        <div className="max-w-4xl space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-base font-semibold text-[var(--text)] leading-snug">{faq.question}</span>
                <span className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--light)] text-sm font-bold transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>
                  ↓
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 pt-1 text-base text-[var(--muted)] leading-relaxed border-t border-[var(--border)]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
