interface IconProps {
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
}

const defaults = { size: 24, color: "#0F6B5E", strokeWidth: 1.75 }

function Icon({ size = 24, color = "#0F6B5E", strokeWidth = 1.75, className = "", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {children}
    </svg>
  )
}

export function IconMobil(p: IconProps) {
  return <Icon {...p}><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="9" y1="6" x2="15" y2="6"/><circle cx="12" cy="17.5" r="1" fill={p.color || defaults.color} stroke="none"/></Icon>
}
export function IconBredband(p: IconProps) {
  return <Icon {...p}><path d="M5 12.5c1.8-2 4.2-3 7-3s5.2 1 7 3"/><path d="M1 9c3-3.5 6.7-5 11-5s8 1.5 11 5" strokeOpacity=".4"/><path d="M9 16c.9-1 2.3-1.8 3-1.8s2.1.8 3 1.8"/><circle cx="12" cy="19.5" r="1.2" fill={p.color || defaults.color} stroke="none"/></Icon>
}
export function IconStrom(p: IconProps) {
  return <Icon {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>
}
export function IconForsikring(p: IconProps) {
  return <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></Icon>
}
export function IconRegnskap(p: IconProps) {
  return <Icon {...p}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></Icon>
}
export function IconBedriftskort(p: IconProps) {
  return <Icon {...p}><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/><path d="M7 15h4M15 15h2"/></Icon>
}
export function IconDrivstoffkort(p: IconProps) {
  return <Icon {...p}><path d="M3 4h13M3 4v10h13V4M13 4l4 4v6h-4M7 15v3M13 15v3"/><line x1="6" y1="8" x2="10" y2="8"/><line x1="6" y1="11" x2="10" y2="11"/></Icon>
}
export function IconLadekort(p: IconProps) {
  return <Icon {...p}><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="9" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><line x1="17" y1="8" x2="17" y2="13"/><line x1="14" y1="10.5" x2="20" y2="10.5"/></Icon>
}
export function IconBensinkort(p: IconProps) {
  return <Icon {...p}><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="9" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><rect x="15" y="6" width="4" height="5" rx="1" strokeOpacity=".5"/></Icon>
}
export function IconLeasing(p: IconProps) {
  return <Icon {...p}><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="9" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><line x1="9" y1="9" x2="13" y2="9"/><line x1="9" y1="12" x2="11" y2="12"/></Icon>
}
export function IconFirmabil(p: IconProps) {
  return <Icon {...p}><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="9" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></Icon>
}
export function IconReise(p: IconProps) {
  return <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Icon>
}
export function IconHotell(p: IconProps) {
  return <Icon {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></Icon>
}
export function IconITDrift(p: IconProps) {
  return <Icon {...p}><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></Icon>
}
export function IconHRSystem(p: IconProps) {
  return <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>
}
export function IconProgramvare(p: IconProps) {
  return <Icon {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></Icon>
}
export function IconAlarm(p: IconProps) {
  return <Icon {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></Icon>
}
export function IconRenhold(p: IconProps) {
  return <Icon {...p}><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><line x1="18" y1="2" x2="22" y2="6"/><path d="M22 2l-4 4"/></Icon>
}
export function IconKaffe(p: IconProps) {
  return <Icon {...p}><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></Icon>
}
export function IconFrakt(p: IconProps) {
  return <Icon {...p}><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8l4 0 3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/></Icon>
}
export function IconBHT(p: IconProps) {
  return <Icon {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></Icon>
}
export function IconKontorrekvisita(p: IconProps) {
  return <Icon {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></Icon>
}

export const categoryIconMap: Record<string, React.ComponentType<IconProps>> = {
  "mobilabonnement-bedrift":    IconMobil,
  "bredband-bedrift":           IconBredband,
  "stromavtale-bedrift":        IconStrom,
  "forsikring-bedrift":         IconForsikring,
  "regnskapstjenester-bedrift": IconRegnskap,
  "bedriftskort":               IconBedriftskort,
  "drivstoffkort-bedrift":      IconDrivstoffkort,
  "ladekort-bedrift":           IconLadekort,
  "bensinkort-bedrift":         IconBensinkort,
  "leasing-bedrift":            IconLeasing,
  "firmabilavtale":             IconFirmabil,
  "reiseavtale-bedrift":        IconReise,
  "hotellavtale-bedrift":       IconHotell,
  "it-drift-bedrift":           IconITDrift,
  "hr-system-bedrift":          IconHRSystem,
  "programvare-bedrift":        IconProgramvare,
  "alarm-bedrift":              IconAlarm,
  "renholdsavtale-bedrift":     IconRenhold,
  "kaffeavtale-bedrift":        IconKaffe,
  "fraktavtale-bedrift":        IconFrakt,
  "bedriftshelsetjeneste":      IconBHT,
  "kontorrekvisita-bedrift":    IconKontorrekvisita,
}

export function CategoryIcon({ slug, size = 20, color = "#0F6B5E" }: { slug: string; size?: number; color?: string }) {
  const Comp = categoryIconMap[slug]
  if (!Comp) return null
  return <Comp size={size} color={color} />
}
