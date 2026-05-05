"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";
import ArrowIcon from "./ArrowIcon";

const WA_HERO =
  "https://wa.me/5531991910629?text=Ol%C3%A1%20Anderson%2C%20quero%20conversar%20sobre%20uma%20landing%20page.";

const WORDS = ["convertem", "performam", "rankeiam", "escalam", "vendem"];

const MARQUEE_ITEMS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "SEO técnico",
  "Core Web Vitals",
  "A/B testing",
  "Performance real",
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const swapRef = useRef<HTMLSpanElement>(null);

  // Hero scroll transform
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    const onScroll = () => {
      const y = window.scrollY;
      const max = window.innerHeight * 0.7;
      const p = Math.min(y / max, 1);
      title.style.transform = `translateY(${-p * 60}px) scale(${1 - p * 0.06})`;
      title.style.opacity = String(1 - p * 0.55);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cycling word
  useEffect(() => {
    const swap = swapRef.current;
    if (!swap) return;
    let i = 0;
    const id = setInterval(() => {
      const cur = swap.querySelector<HTMLSpanElement>("span:not(.exit)");
      if (!cur) return;
      i = (i + 1) % WORDS.length;
      const next = document.createElement("span");
      next.textContent = WORDS[i];
      next.className = "enter";
      swap.appendChild(next);
      requestAnimationFrame(() => {
        cur.classList.add("exit");
        next.classList.remove("enter");
      });
      setTimeout(() => {
        if (cur.parentNode === swap) swap.removeChild(cur);
      }, 450);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 110,
        paddingBottom: 60,
        paddingLeft: "var(--shell-pad)",
        paddingRight: "var(--shell-pad)",
        position: "relative",
      }}
      id="top"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <style>{`
        .hero-swap > span {
          display: inline-block;
          font-family: var(--font-instrument-serif);
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.025em;
          color: var(--color-accent);
          transition: opacity 350ms ease, transform 350ms cubic-bezier(0.32,0.72,0.27,1);
        }
        .hero-swap > span.exit {
          opacity: 0;
          transform: translateY(-12px) rotate(-2deg);
          position: absolute;
          left: 0; right: 0;
        }
        .hero-swap > span.enter {
          opacity: 0;
          transform: translateY(12px) rotate(2deg);
        }
        .photo-ring {
          position: absolute;
          z-index: 1;
          width: 110%;
          height: 110%;
          top: -5%;
          left: -5%;
          border-radius: 50%;
          border: 1px solid var(--color-line);
          opacity: 0.5;
          animation: rotateRing 40s linear infinite;
        }
        .photo-ring::before,
        .photo-ring::after {
          content: "";
          position: absolute;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--color-accent);
        }
        .photo-ring::before { top: -4px; left: 50%; }
        .photo-ring::after { bottom: -4px; left: 30%; opacity: 0.4; }
        .photo-tag {
          position: absolute;
          z-index: 3;
          font-family: var(--font-geist-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-text-2);
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--color-surface);
          border: 1px solid var(--color-line);
          padding: 6px 12px;
          border-radius: 999px;
        }
        .photo-tag::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 8px var(--color-accent);
          flex-shrink: 0;
        }
        .hero-stamp::before {
          content: "";
          width: 24px;
          height: 1px;
          background: var(--color-line-2);
          display: inline-block;
          margin-right: 10px;
          vertical-align: middle;
        }
        .badge-pulse::after {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1px solid var(--color-accent);
          animation: pulse 2s ease-out infinite;
        }
        .marquee-track {
          display: flex;
          gap: 48px;
          animation: scroll 40s linear infinite;
          white-space: nowrap;
          width: max-content;
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative" }}>
        {/* Two-column layout: text left, photo right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-main-grid"
        >
          {/* Left: all text content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {/* Meta badge */}
            <div style={{ marginBottom: 40 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "7px 14px 7px 10px",
                  background: "color-mix(in oklch, var(--color-accent) 12%, transparent)",
                  border: "1px solid color-mix(in oklch, var(--color-accent) 35%, transparent)",
                  borderRadius: 999,
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  color: "var(--color-accent-soft)",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    position: "relative",
                    flexShrink: 0,
                  }}
                  className="badge-pulse"
                  aria-hidden="true"
                />
                Aceitando 2 projetos em maio de 2026
              </span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              style={{
                fontSize: "clamp(40px, 6vw, 96px)",
                lineHeight: 0.94,
                letterSpacing: "-0.045em",
                fontWeight: 500,
                willChange: "transform, opacity",
                marginBottom: 32,
              }}
            >
              <span style={{ display: "block" }}>Páginas que</span>
              <span style={{ display: "block" }}>
                <span
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--color-accent)",
                  }}
                >
                  não só
                </span>{" "}
                existem
                <span style={{ color: "var(--color-accent)" }}>.</span>
              </span>
              <span style={{ display: "block" }}>
                Elas{" "}
                <span
                  ref={swapRef}
                  className="hero-swap"
                  aria-live="polite"
                  style={{ position: "relative", display: "inline-block", verticalAlign: "baseline" }}
                >
                  <span>convertem</span>
                </span>
                .
              </span>
            </h1>

            {/* Divider */}
            <div style={{ borderTop: "1px solid var(--color-line)", marginBottom: 32 }} />

            {/* Bio */}
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--color-text-2)",
                marginBottom: 32,
              }}
            >
              Sou <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>Anderson Martins</strong>, dev fullstack. Construo landing pages{" "}
              <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>rápidas, escaláveis e orientadas à conversão</strong> — com performance real, SEO técnico e integração ponta-a-ponta com suas ferramentas de marketing. Sem templates engessados, sem efeitos sem propósito.
            </p>

            {/* CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span
                className="hero-stamp"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Resposta em até 2h úteis
              </span>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={WA_HERO}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 22px",
                    borderRadius: 999,
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: 14,
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
                  Iniciar projeto no WhatsApp
                </a>
                <a
                  href="#processo"
                  className="group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 22px",
                    borderRadius: 999,
                    fontFamily: "var(--font-geist-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    textDecoration: "none",
                    color: "var(--color-text)",
                    background: "transparent",
                    border: "1px solid var(--color-line-2)",
                    whiteSpace: "nowrap",
                    transition: "border-color var(--transition), color var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-line-2)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                  }}
                >
                  Como funciona
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right: photo */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 460,
                aspectRatio: "4/5",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "8% -8% -4% 8%",
                  background:
                    "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 65%)",
                  filter: "blur(40px)",
                  opacity: 0.35,
                  zIndex: 0,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  border: "1px dashed var(--color-line-2)",
                  borderRadius: "50% 50% 6px 6px / 35% 35% 6px 6px",
                  zIndex: 0,
                  opacity: 0.4,
                }}
              />
              <span className="photo-ring" aria-hidden="true" />
              <span className="photo-tag" style={{ top: "12%", left: 0 }}>
                Anderson · BH
              </span>
              <span className="photo-tag" style={{ bottom: "24%", right: -8 }}>
                Disponível
              </span>
              <Image
                src="/assets/anderson.png"
                alt="Anderson Martins"
                width={460}
                height={575}
                priority
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  zIndex: 2,
                  filter:
                    "drop-shadow(0 30px 60px rgba(0,0,0,0.5)) drop-shadow(0 0 30px var(--accent-glow))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        aria-hidden="true"
        style={{
          borderTop: "1px solid var(--color-line)",
          borderBottom: "1px solid var(--color-line)",
          padding: "22px 0",
          marginTop: 60,
          overflow: "hidden",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontSize: 38,
                color: "var(--color-text)",
                display: "inline-flex",
                alignItems: "center",
                gap: 48,
              }}
            >
              {item}
              <span
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontStyle: "normal",
                  color: "var(--color-accent)",
                  fontSize: 18,
                }}
              >
                ✻
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
