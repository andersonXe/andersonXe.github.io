"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const konamiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const word = "anderson";
    let buf = "";
    const k = konamiRef.current;

    const onKeyDown = (e: KeyboardEvent) => {
      if (!/^[a-z]$/i.test(e.key)) return;
      buf += e.key.toLowerCase();
      if (buf.length > word.length) buf = buf.slice(-word.length);
      if (buf.includes(word) && k) {
        k.classList.add("konami-show");
        setTimeout(() => k?.classList.remove("konami-show"), 6000);
        buf = "";
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <style>{`
        .konami-box {
          position: fixed;
          bottom: 24px;
          left: 24px;
          background: var(--color-surface);
          border: 1px solid var(--color-accent);
          border-radius: 8px;
          padding: 16px 20px;
          font-family: var(--font-geist-mono);
          font-size: 12px;
          color: var(--color-text);
          z-index: 100;
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
          transition: opacity 300ms, transform 300ms;
          box-shadow: 0 16px 40px var(--accent-glow);
        }
        .konami-box.konami-show { opacity: 1; transform: translateY(0); pointer-events: auto; }
        .footer-link { color: var(--color-text-2); text-decoration: none; font-size: 14px; transition: color var(--transition); }
        .footer-link:hover { color: var(--color-accent); }
        .footer-bot-link { color: var(--color-muted); text-decoration: none; transition: color var(--transition); }
        .footer-bot-link:hover { color: var(--color-accent); }
        .footer-logo-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--color-accent);
          display: inline-block;
          margin-left: 2px;
          margin-bottom: 2px;
          align-self: flex-end;
          box-shadow: 0 0 12px var(--accent-glow);
        }
        .footer-grid-cols {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          max-width: 1280px;
          margin: 0 auto 56px;
        }
        @media (max-width: 760px) { .footer-grid-cols { grid-template-columns: 1fr 1fr; gap: 32px; } }
      `}</style>

      <footer
        style={{
          padding: "56px var(--shell-pad) 32px",
          borderTop: "1px solid var(--color-line)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="footer-grid-cols">
          <div style={{ maxWidth: 360 }}>
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
              <span className="footer-logo-dot" aria-hidden="true" />
            </a>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-text-2)", marginTop: 20 }}>
              Dev fullstack especializado em landing pages rápidas, escaláveis e orientadas à conversão. Belo Horizonte, atendendo Brasil inteiro.
            </p>
          </div>

          <div>
            <h5
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              Páginas
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "#diferenciais", label: "Diferenciais" },
                { href: "#processo", label: "Processo" },
                { href: "#trabalhos", label: "Trabalhos" },
                { href: "#planos", label: "Planos" },
              ].map(({ href, label }) => (
                <li key={href}><a href={href} className="footer-link">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              Contato
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href="https://wa.me/5531991910629" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a></li>
              <li><a href="mailto:contato@andersonmartins.dev" className="footer-link">contato@andersonmartins.dev</a></li>
              <li><a href="#" className="footer-link">LinkedIn</a></li>
              <li><a href="#" className="footer-link">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h5
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              Stack
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["Next.js · React", "TypeScript", "Tailwind CSS", "Vercel"].map((s) => (
                <li key={s}><a href="#" className="footer-link">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-geist-mono)",
            fontSize: 11,
            color: "var(--color-muted)",
            letterSpacing: "0.04em",
            paddingTop: 24,
            borderTop: "1px solid var(--color-line)",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>© {new Date().getFullYear()} Anderson Martins · CNPJ 00.000.000/0001-00</span>
          <span>
            Feito à mão em{" "}
            <a href="#" className="footer-bot-link">Belo Horizonte</a>
            {" "}· Tente digitar "anderson"
          </span>
        </div>
      </footer>

      {/* Easter egg */}
      <div ref={konamiRef} className="konami-box">
        <div>
          Console <span style={{ color: "var(--color-accent)" }}>/</span> Anderson
        </div>
        <div style={{ marginTop: 8, fontSize: 11, color: "var(--color-text-2)" }}>
          <span style={{ color: "var(--color-accent)" }}>→</span> Você encontrou o easter egg.
          <br />
          <span style={{ color: "var(--color-accent)" }}>→</span> WhatsApp:{" "}
          <a
            href="https://wa.me/5531991910629"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-accent)", textDecoration: "none" }}
          >
            +55 31 99191-0629
          </a>
          <br />
          <span style={{ color: "var(--color-accent)" }}>→</span> Bônus de 10% no orçamento se mencionar "konami".
        </div>
      </div>
    </>
  );
}
