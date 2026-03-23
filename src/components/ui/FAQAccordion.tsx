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
    <section className="py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-site">
        <h2 className="text-xl font-bold text-[var(--text)] mb-2">{title}</h2>
        <p className="text-sm text-[var(--muted)] mb-8 max-w-xl">
          Her svarer vi på de spørsmålene norske bedriftseiere oftest stiller.
        </p>
        <div className="max-w-3xl space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="faq-question">{faq.question}</span>
                <span className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--light)] text-xs font-bold transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>
                  ↓
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-1 text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)]">
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
