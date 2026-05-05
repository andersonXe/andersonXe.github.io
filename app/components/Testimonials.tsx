const testimonials = [
  {
    featured: true,
    quote: "O Anderson entregou em 6 dias o que duas agências não fizeram em 3 meses. A página subiu na sexta — na segunda já tínhamos 11 leads qualificados na caixa de entrada.",
    initials: "RM",
    name: "Renata Macedo",
    role: "CEO · Atelier Vento Sul",
  },
  {
    quote: "A diferença é que ele entende de marketing também. Não fez só uma página — pensou no funil inteiro.",
    initials: "JF",
    name: "João Felipe",
    role: "Head of Growth · Norma Cloud",
  },
  {
    quote: "Lighthouse 99. Não sabia que era possível. Os anúncios pagam mais barato, o Google ranqueia melhor, e o cliente fica.",
    initials: "CP",
    name: "Camila Prado",
    role: "Diretora · Clínica Lúmen",
  },
  {
    quote: "Suporte de verdade. Mandei mensagem domingo às 23h pedindo um ajuste antes do lançamento — segunda 8h estava no ar.",
    initials: "LB",
    name: "Lucas Bittencourt",
    role: "Fundador · Sereno Coffee",
  },
  {
    quote: "Cobra justo, entrega cedo, escreve código limpo. Próxima landing já está contratada.",
    initials: "MA",
    name: "Mariana Alves",
    role: "Cofundadora · Borda Type",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      style={{ padding: "clamp(80px, 12vh, 140px) var(--shell-pad)" }}
    >
      <style>{`
        .testi-card {
          background: var(--color-surface);
          border: 1px solid var(--color-line);
          border-radius: 14px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-height: 260px;
        }
        .testi-card.featured {
          background: linear-gradient(180deg, color-mix(in oklch, var(--color-accent) 8%, var(--color-surface)) 0%, var(--color-surface) 100%);
          border-color: color-mix(in oklch, var(--color-accent) 30%, var(--color-line));
          grid-row: span 2;
        }
        .testi-grid-cols {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 1000px) { .testi-grid-cols { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 700px) { .testi-grid-cols { grid-template-columns: 1fr; } }
        @media (max-width: 860px) {
          .section-head-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          data-reveal
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 72, alignItems: "end" }}
          className="section-head-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: "var(--color-accent)", letterSpacing: "0.1em" }}>/ 05</span>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted)" }}>Quem já trabalhou comigo</span>
          </div>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 500 }}>
            Resultado,{" "}
            <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "var(--color-accent)" }}>não promessa</span>.
          </h2>
        </div>

        <div className="testi-grid-cols">
          {testimonials.map(({ featured, quote, initials, name, role }) => (
            <article
              key={name}
              className={`testi-card${featured ? " featured" : ""}`}
              data-reveal
            >
              <blockquote
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontStyle: "italic",
                  fontSize: featured ? 32 : 22,
                  lineHeight: 1.3,
                  letterSpacing: "-0.015em",
                  color: "var(--color-text)",
                }}
              >
                <span style={{ color: "var(--color-accent)" }}>"</span>
                {quote}
                <span style={{ color: "var(--color-accent)" }}>"</span>
              </blockquote>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: "auto",
                  paddingTop: 18,
                  borderTop: "1px solid var(--color-line)",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 13,
                    display: "grid",
                    placeItems: "center",
                    letterSpacing: "-0.02em",
                    flexShrink: 0,
                  }}
                >
                  {initials}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{name}</span>
                  <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--color-muted)", letterSpacing: "0.04em" }}>{role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
