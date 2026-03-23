import Link from "next/link"

export function ContactBox({ title = "Trenger du hjelp å finne riktig avtale?" }: { title?: string }) {
  return (
    <div className="rounded-xl overflow-hidden bg-teal-500">
      <div className="p-5">
        <p className="text-[9px] font-bold tracking-[.12em] uppercase text-white/55 mb-2">Ta kontakt</p>
        <h3 className="text-[15px] font-extrabold text-white leading-snug tracking-tight mb-2">{title}</h3>
        <p className="text-xs text-white/65 leading-relaxed mb-4">
          Vi svarer på spørsmål og hjelper deg navigere markedet — helt gratis og uten forpliktelser.
        </p>
        <hr className="border-white/10 mb-4" />
        <a href="tel:22000000" className="block text-xl font-extrabold text-white tracking-tight mb-1">
          22 00 00 00
        </a>
        <a href="mailto:post@bedriftsavtale.no" className="block text-xs text-white/55 hover:text-white/80 transition-colors mb-4">
          post@bedriftsavtale.no
        </a>
        <Link
          href="/kontakt"
          className="block bg-white rounded-full py-2.5 text-center text-xs font-bold text-teal-600 hover:bg-teal-50 transition-colors"
        >
          Send oss en e-post →
        </Link>
      </div>
    </div>
  )
}
