"use client";

import { useEffect, useRef } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import ThemeToggle from "./ThemeToggle";

const WA_NAV = "https://wa.me/5531991910629?text=Ol%C3%A1%20Anderson";

const links = [
  { href: "#diferenciais", label: "Diferenciais", idx: "01" },
  { href: "#processo", label: "Processo", idx: "02" },  
  { href: "#planos", label: "Planos", idx: "03" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () =>
      nav.classList.toggle("nav-scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-scrolled {
          background: color-mix(in oklch, var(--color-bg) 85%, transparent) !important;
          border-bottom: 1px solid var(--color-line) !important;
        }
      `}</style>
      <header
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "18px var(--shell-pad)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "linear-gradient(180deg, var(--color-bg) 60%, transparent)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid transparent",
          transition: "background var(--transition), border-color var(--transition)",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--color-text)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "baseline",
            gap: 1,
          }}
        >
          Anderson
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--color-accent)",
              display: "inline-block",
              marginLeft: 2,
              marginBottom: 2,
              alignSelf: "flex-end",
              boxShadow: "0 0 12px var(--accent-glow)",
            }}
            aria-hidden="true"
          />
        </a>

        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {links.map(({ href, label, idx }) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 12,
                color: "var(--color-text-2)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "color var(--transition)",
              }}
              className="hidden md:inline nav-link"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-2)")
              }
            >
              <span style={{ color: "var(--color-muted)" }}>{idx}</span> {label}
            </a>
          ))}

          <ThemeToggle />

          <a
            href={WA_NAV}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 16px",
              borderRadius: 999,
              fontFamily: "var(--font-geist-sans)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              textDecoration: "none",
              color: "#fff",
              background: "var(--color-accent)",
              border: "1px solid transparent",
              boxShadow: "0 8px 28px -8px var(--accent-glow)",
              whiteSpace: "nowrap",
              transition: "background var(--transition), transform var(--transition)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#b8420f";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-accent)";
              (e.currentTarget as HTMLElement).style.transform = "";
            }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Fale comigo
          </a>
        </nav>
      </header>
    </>
  );
}
