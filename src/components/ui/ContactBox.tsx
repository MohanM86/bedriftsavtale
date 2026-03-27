import Link from "next/link"

export function ContactBox({ title = "Trenger du hjelp å finne riktig avtale?" }: { title?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-teal-500">
      <div className="p-6">
        <p className="text-xs font-bold tracking-[.14em] uppercase text-white/55 mb-3">Ta kontakt</p>
        <h3 className="text-lg font-extrabold text-white leading-snug tracking-tight mb-3">{title}</h3>
        <p className="text-sm text-white/65 leading-relaxed mb-5">
          Vi svarer på spørsmål og hjelper deg navigere markedet, helt gratis og uten forpliktelser.
        </p>
        <hr className="border-white/10 mb-5" />
        <a href="tel:22000000" className="block text-2xl font-extrabold text-white tracking-tight mb-1.5">
          22 00 00 00
        </a>
        <a href="mailto:post@bedriftsavtale.no" className="block text-sm text-white/55 hover:text-white/80 transition-colors mb-5">
          post@bedriftsavtale.no
        </a>
        <Link href="/kontakt" className="block bg-white rounded-full py-3 text-center text-sm font-bold text-teal-600 hover:bg-teal-50 transition-colors">
          Send oss en e-post →
        </Link>
      </div>
    </div>
  )
}
