import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Anderson Martins — Dev fullstack",
  description:
    "Anderson Martins, desenvolvedor fullstack. Projetos que resolvem problemas reais: Conformind, Craque a Craque, Escandir, Afeto em Cesta e Estimador de Salário Dev.",
  openGraph: {
    title: "Anderson Martins — Dev fullstack",
    description:
      "Anderson Martins, desenvolvedor fullstack. Projetos que resolvem problemas reais: Conformind, Craque a Craque, Escandir, Afeto em Cesta e Estimador de Salário Dev.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Martins — Dev fullstack",
    description:
      "Anderson Martins, desenvolvedor fullstack. Projetos que resolvem problemas reais: Conformind, Craque a Craque, Escandir, Afeto em Cesta e Estimador de Salário Dev.",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply the saved theme before first paint so there's no dark→light flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
