import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anderson Martins | Landing Pages Profissionais",
  description:
    "Landing pages que convertem, entregues em menos de uma semana com suporte de 1 ano incluso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
