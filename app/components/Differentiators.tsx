"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    tag: "Velocidade",
    num: "01",
    title: "Entrega em menos de 1 semana",
    desc: "Briefing na segunda, no ar na sexta. Stack moderno (Next.js + Vercel) + processo enxuto, sem reuniões intermináveis.",
  },
  {
    tag: "Garantia",
    num: "02",
    title: "Suporte de 1 ano incluso",
    desc: "Bugs, ajustes de copy, troca de imagens, integrações novas. Você tem um dev de plantão — não um template órfão no ar.",
  },
  {
    tag: "Conversão",
    num: "03",
    title: "Foco obsessivo em conversão",
    desc: "Lighthouse 95+, SEO técnico, integração com pixel, GTM e CRM. Cada lead capturado, processado e aproveitado.",
  },
];

export default function Differentiators() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardEls = gridRef.current?.querySelectorAll<HTMLElement>(".diff-card");
    if (!cardEls) return;

    cardEls.forEach((card) => {
      const glow = card.querySelector<HTMLElement>(".diff-glow");

      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rx = ((y / r.height) - 0.5) * -8;
        const ry = ((x / r.width) - 0.5) * 10;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
        if (glow) {
          glow.style.left = x + "px";
          glow.style.top = y + "px";
        }
      };
      const onLeave = () => {
        card.style.transform = "";
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });
  }, []);

  return (
    <section
      id="diferenciais"
      style={{
        padding: "clamp(80px, 12vh, 140px) var(--shell-pad)",
      }}
    >
      <style>{`
        .diff-card {
          position: relative;
          padding: 36px 32px 32px;
          background: var(--color-surface);
          border: 1px solid var(--color-line);
          border-radius: 14px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 24px;
          transform-style: preserve-3d;
          transition: border-color var(--transition);
          cursor: default;
          overflow: hidden;
        }
        .diff-card:hover { border-color: var(--color-line-2); }
        .diff-glow {
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 60%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 300ms ease;
          transform: translate(-50%, -50%);
          filter: blur(20px);
        }
        .diff-card:hover .diff-glow { opacity: 1; }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section head */}
        <div
          data-reveal
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 48,
            marginBottom: 72,
            alignItems: "end",
          }}
          className="section-head-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 12,
                color: "var(--color-accent)",
                letterSpacing: "0.1em",
              }}
            >
              / 01
            </span>
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
              }}
            >
              Diferenciais
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 64px)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 500,
            }}
          >
            Não é só{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                color: "var(--color-accent)",
              }}
            >
              bonito
            </span>
            <br />— foi{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                color: "var(--color-accent)",
              }}
            >
              arquitetado
            </span>{" "}
            para vender.
          </h2>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="diff-grid-cols"
        >
          {cards.map(({ tag, num, title, desc }) => (
            <article key={num} className="diff-card" data-reveal>
              <span className="diff-glow" aria-hidden="true" />
              <span
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                }}
              >
                {tag}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontStyle: "italic",
                  fontSize: 88,
                  lineHeight: 1,
                  color: "var(--color-accent)",
                  letterSpacing: "-0.03em",
                  transform: "translateZ(40px)",
                }}
              >
                {num}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    marginBottom: 8,
                    transform: "translateZ(20px)",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--color-text-2)",
                    transform: "translateZ(15px)",
                  }}
                >
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .diff-grid-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
