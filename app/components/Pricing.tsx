import WhatsAppIcon from "./WhatsAppIcon";
import ArrowIcon from "./ArrowIcon";

const WA_ESSENCIAL = "https://wa.me/5531991910629?text=Ol%C3%A1%2C%20quero%20o%20plano%20Essencial.";
const WA_CONVERSAO = "https://wa.me/5531991910629?text=Ol%C3%A1%2C%20quero%20o%20plano%20Convers%C3%A3o.";
const WA_SOB_MEDIDA = "https://wa.me/5531991910629?text=Ol%C3%A1%2C%20quero%20discutir%20um%20projeto%20sob%20medida.";

const CHECK_ICON = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M3 8l3.5 3.5L13 5' stroke='black' stroke-width='1.8' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>")`;
const X_ICON = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M4 12L12 4M4 4l8 8' stroke='black' stroke-width='1.6' fill='none' stroke-linecap='round'/></svg>")`;

function PriceItem({ text, off = false }: { text: string; off?: boolean }) {
  return (
    <li
      style={{
        fontSize: 14,
        color: off ? "var(--color-muted)" : "var(--color-text-2)",
        textDecoration: off ? "line-through" : "none",
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        lineHeight: 1.5,
      }}
    >
      <span
        style={{
          width: 16,
          height: 16,
          background: off ? "var(--color-muted)" : "var(--color-accent)",
          mask: off ? X_ICON : CHECK_ICON,
          WebkitMask: off ? X_ICON : CHECK_ICON,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          flexShrink: 0,
          marginTop: 3,
          display: "inline-block",
        }}
      />
      {text}
    </li>
  );
}

export default function Pricing() {
  return (
    <section
      id="planos"
      style={{ padding: "clamp(80px, 12vh, 140px) var(--shell-pad)" }}
    >
      <style>{`
        .price-card {
          background: var(--color-surface);
          border: 1px solid var(--color-line);
          border-radius: 14px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          transition: border-color var(--transition);
        }
        .price-card:hover { border-color: var(--color-line-2); }
        .price-card.featured {
          border-color: var(--color-accent);
          background: linear-gradient(180deg, color-mix(in oklch, var(--color-accent) 10%, var(--color-surface)) 0%, var(--color-surface) 60%);
        }
        .price-grid-cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) { .price-grid-cols { grid-template-columns: 1fr; } }
        .btn-ghost-price {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 999px;
          font-family: var(--font-geist-sans);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          color: var(--color-text);
          background: transparent;
          border: 1px solid var(--color-line-2);
          transition: border-color var(--transition), color var(--transition);
          margin-top: auto;
        }
        .btn-ghost-price:hover { border-color: var(--color-accent); color: var(--color-accent); }
        .btn-primary-price {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 999px;
          font-family: var(--font-geist-sans);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          color: #fff;
          background: var(--color-accent);
          border: 1px solid transparent;
          box-shadow: 0 8px 28px -8px var(--accent-glow);
          transition: background var(--transition), transform var(--transition);
          margin-top: auto;
        }
        .btn-primary-price:hover { background: #b8420f; transform: translateY(-1px); }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          data-reveal
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 72, alignItems: "end" }}
          className="section-head-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: "var(--color-accent)", letterSpacing: "0.1em" }}>/ 06</span>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted)" }}>Planos</span>
          </div>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 500 }}>
            Escopo claro.
            <br />
            <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "var(--color-accent)" }}>Preço fechado.</span>
          </h2>
        </div>

        <div className="price-grid-cols">
          {/* Essencial */}
          <article className="price-card" data-reveal>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>Essencial</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--color-text-2)" }}>Uma página objetiva, focada em capturar leads ou agendamentos. Pronta para subir em até 5 dias úteis.</p>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, paddingBottom: 24, borderBottom: "1px dashed var(--color-line-2)" }}>
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--color-muted)", letterSpacing: "0.08em" }}>A partir de</span>
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 13, color: "var(--color-muted)", letterSpacing: "0.04em" }}>R$</span>
              <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 56, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--color-text)" }}>1.890</span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              <PriceItem text="Landing single-page (até 5 seções)" />
              <PriceItem text="Design responsivo + dark mode" />
              <PriceItem text="Formulário integrado ao seu e-mail" />
              <PriceItem text="Lighthouse 95+ garantido" />
              <PriceItem text="3 meses de suporte" />
              <PriceItem text="Integração com CRM" off />
              <PriceItem text="A/B testing" off />
            </ul>
            <a href={WA_ESSENCIAL} target="_blank" rel="noopener noreferrer" className="btn-ghost-price group">
              Quero esse <ArrowIcon />
            </a>
          </article>

          {/* Conversão (featured) */}
          <article className="price-card featured" data-reveal>
            <span
              style={{
                position: "absolute",
                top: -12,
                left: 32,
                fontFamily: "var(--font-geist-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: "var(--color-accent)",
                color: "#fff",
                padding: "5px 12px",
                borderRadius: 999,
              }}
            >
              Mais escolhido
            </span>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>Conversão</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--color-text-2)" }}>Para quem já investe em tráfego pago e precisa de uma página que extrai o máximo de cada clique. Pixel, GTM, CRM, tudo conectado.</p>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, paddingBottom: 24, borderBottom: "1px dashed var(--color-line-2)" }}>
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--color-muted)", letterSpacing: "0.08em" }}>A partir de</span>
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 13, color: "var(--color-muted)", letterSpacing: "0.04em" }}>R$</span>
              <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 56, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--color-accent)" }}>3.490</span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              <PriceItem text="Tudo do plano Essencial" />
              <PriceItem text="Integração com CRM e pixel" />
              <PriceItem text="GTM + eventos customizados" />
              <PriceItem text="Versão A/B (duas variações)" />
              <PriceItem text="SEO técnico + schema markup" />
              <PriceItem text="1 ano completo de suporte" />
              <PriceItem text="Reunião mensal de otimização" />
            </ul>
            <a href={WA_CONVERSAO} target="_blank" rel="noopener noreferrer" className="btn-primary-price">
              <WhatsAppIcon className="w-4 h-4" />
              Quero esse plano
            </a>
          </article>

          {/* Sob medida */}
          <article className="price-card" data-reveal>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>Sob medida</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--color-text-2)" }}>Multi-páginas, integrações complexas, área logada, blog SEO ou stack específica. Conversamos e fecho o escopo na hora.</p>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, paddingBottom: 24, borderBottom: "1px dashed var(--color-line-2)" }}>
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--color-muted)", letterSpacing: "0.08em" }}>A partir de</span>
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 13, color: "var(--color-muted)", letterSpacing: "0.04em" }}>R$</span>
              <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 56, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--color-text)" }}>7k</span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              <PriceItem text="Até 12 páginas + blog" />
              <PriceItem text="Stack à sua escolha (Next, Astro, etc)" />
              <PriceItem text="Integrações via API customizadas" />
              <PriceItem text="Área de membros / login" />
              <PriceItem text="SEO técnico avançado" />
              <PriceItem text="Onboarding da sua equipe" />
              <PriceItem text="1 ano de suporte premium" />
            </ul>
            <a href={WA_SOB_MEDIDA} target="_blank" rel="noopener noreferrer" className="btn-ghost-price group">
              Conversar <ArrowIcon />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
