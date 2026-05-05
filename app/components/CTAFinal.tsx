"use client";

import { useEffect, useRef } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

const WA_FINAL =
  "https://wa.me/5531991910629?text=Ol%C3%A1%20Anderson%2C%20quero%20iniciar%20um%20projeto.";

export default function CTAFinal() {
  const megaRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const mega = megaRef.current;
    if (!mega) return;
    const rows = mega.querySelectorAll<HTMLElement>(".cta-row");
    const onScroll = () => {
      const r = mega.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const dist = Math.abs(window.innerHeight / 2 - center);
      const max = window.innerHeight;
      const p = Math.max(0, 1 - dist / max);
      rows.forEach((row, i) => {
        const offset = (i - 1) * 30 * (1 - p);
        row.style.transform = `translateX(${offset}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(120px, 20vh, 200px) var(--shell-pad)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <h2
          ref={megaRef}
          style={{
            fontSize: "clamp(80px, 18vw, 280px)",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
            fontWeight: 500,
            textAlign: "center",
            position: "relative",
          }}
        >
          <span className="cta-row" style={{ display: "block" }}>
            Sua landing
          </span>
          <span className="cta-row" style={{ display: "block" }}>
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--color-accent)",
              }}
            >
              no ar
            </span>{" "}
            em até
          </span>
          <span className="cta-row" style={{ display: "block" }}>
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ visibility: "hidden", pointerEvents: "none" }} aria-hidden="true">cinco</span>
              <svg
                aria-label="cinco"
                style={{ position: "absolute", inset: 0, overflow: "visible" }}
                width="100%"
                height="100%"
              >
                <text
                  fill="none"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  x="0"
                  y="75%"
                  style={{
                    font: "inherit",
                    letterSpacing: "-0.05em",
                    stroke: "var(--color-text)",
                    strokeWidth: "3",
                  }}
                >
                  cinco
                </text>
              </svg>
            </span>{" "}
            <span style={{ color: "var(--color-accent)" }}>dias</span>.
          </span>
        </h2>

        <div
          data-reveal
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            marginTop: 60,
          }}
        >
          <a
            href={WA_FINAL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 32px",
              borderRadius: 999,
              fontFamily: "var(--font-geist-sans)",
              fontSize: 16,
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
            Vamos conversar agora
          </a>
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 11,
              color: "var(--color-muted)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Resposta em até 2h úteis · +55 31 99191-0629
          </span>
        </div>
      </div>
    </section>
  );
}
