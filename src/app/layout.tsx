import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { GoogleAnalytics } from "@/components/ui/GoogleAnalytics"
import { CookieBanner } from "@/components/ui/CookieBanner"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

const BASE = "https://bedriftsavtale.no"

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Bedriftsavtale.no – Norges største portal for bedriftsavtaler",
    template: "%s – Bedriftsavtale.no | Norges største portal for bedriftsavtaler",
  },
  description:
    "Norges største portal for bedriftsavtaler. Finn og sammenlign bedriftsavtaler innen mobilabonnement, strøm, forsikring, drivstoffkort og 40+ andre avtaletyper.",
  keywords: [
    "bedriftsavtale", "bedriftsavtaler", "bedriftsavtale norge",
    "norges største portal for bedriftsavtaler", "finn bedriftsavtale",
    "sammenlign bedriftsavtaler", "mobilabonnement bedrift",
    "strøm bedrift", "forsikring bedrift", "drivstoffkort bedrift",
    "bensinkort bedrift", "leasing bedrift", "IT-drift bedrift",
    "bedriftsavtale.no"
  ],
  authors: [{ name: "Bedriftsavtale.no", url: BASE }],
  creator: "Bedriftsavtale.no",
  publisher: "Bedriftsavtale.no",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: BASE,
    siteName: "Bedriftsavtale.no",
    title: "Bedriftsavtale.no – Finn riktige bedriftsavtaler for din bedrift",
    description: "Norges største portal for bedriftsavtaler. Sammenlign 40+ bedriftsavtaler på ett sted.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Norges største portal for bedriftsavtaler – Bedriftsavtale.no" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedriftsavtale.no – Finn riktige bedriftsavtaler",
    description: "Norges største portal for bedriftsavtaler. Finn riktige bedriftsavtaler for din bedrift.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: BASE },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={jakarta.variable}>
      <head>
        <meta name="theme-color" content="#0F6B5E" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <GoogleAnalytics />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-teal-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold">
          Hopp til innhold
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
