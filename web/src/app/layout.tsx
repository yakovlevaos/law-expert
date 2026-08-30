import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

import { BackToTop } from "@/components/site/BackToTop";
import { YandexMetrika } from "@/components/site/YandexMetrika";
import { LightboxProvider } from "@/components/ui/Lightbox";
import { THEME_INIT_SCRIPT } from "@/components/theme";
import { ORG } from "@/data/site";

// Both families ship Cyrillic, which the whole site needs; next/font
// self-hosts them so no request leaves for a font CDN.
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const description =
  "Оценка детско-родительских отношений, психолого-педагогическая экспертиза ребенка при разводе родителей, комплексная психолого-педагогическая экспертиза несовершеннолетних лиц, заключение на психолого-педагогическую экспертизу, предоставление психолого-педагогических и социальных услуг обучающимся, испытывающим трудности в освоении основных общеобразовательных программ, развитие и социальная адаптация.";

export const metadata: Metadata = {
  metadataBase: new URL(ORG.siteUrl),
  title: {
    default: `${ORG.fullName} — ГЕНЕЗИС`,
    template: "%s — ГЕНЕЗИС",
  },
  description,
  keywords: [
    "экспертиза",
    "Красноярск",
    "психологи",
    "педагогика",
    "психологическая экспертиза",
    "судебная экспертиза",
    "психологическое сопровождение",
    "генезис",
    "центр",
  ],
  openGraph: {
    type: "website",
    siteName: ORG.fullName,
    title: "Психолого-педагогическая экспертиза",
    description,
    url: ORG.siteUrl,
    locale: "ru_RU",
    images: [`${ORG.siteUrl}/docs/edu-help-1.jpg`],
  },
  verification: {
    yandex: "75a823300fa6c68d",
  },
  manifest: "/docs/site.webmanifest",
  icons: {
    icon: [
      { url: "/docs/favicon.ico" },
      { url: "/docs/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/docs/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/docs/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/docs/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/docs/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning className={`${inter.variable} ${manrope.variable}`}>
      <head>
        {/* Must run before paint, otherwise dark-mode visitors get a light flash. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-dvh antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:shadow-lg"
        >
          Перейти к содержимому
        </a>
        <LightboxProvider>{children}</LightboxProvider>
        <BackToTop />
        <YandexMetrika />
      </body>
    </html>
  );
}
