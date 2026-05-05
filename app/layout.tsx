import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anderson Martins — Landing pages que convertem",
  description:
    "Dev fullstack especializado em landing pages rápidas, escaláveis e orientadas à conversão. Lighthouse 95+, SEO técnico, integração com seu CRM.",
  openGraph: {
    title: "Anderson Martins — Landing pages que convertem",
    description:
      "Dev fullstack especializado em landing pages rápidas, escaláveis e orientadas à conversão. Lighthouse 95+, SEO técnico, integração com seu CRM.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Martins — Landing pages que convertem",
    description:
      "Dev fullstack especializado em landing pages rápidas, escaláveis e orientadas à conversão. Lighthouse 95+, SEO técnico, integração com seu CRM.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
