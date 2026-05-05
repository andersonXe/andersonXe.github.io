const steps = [
  {
    num: "01",
    title: "Briefing direto no WhatsApp",
    desc: "Conversamos por 20 minutos sobre o seu negócio, objetivo da página, público e referências. Saio dali com tudo o que preciso para começar — você volta a tocar a sua empresa.",
    details: ["20 minutos no WhatsApp", "Sem formulário gigante", "Resposta em até 2h úteis"],
  },
  {
    num: "02",
    title: "Construção e ajustes ao vivo",
    desc: "Compartilho um link de preview que você acompanha em tempo real. A cada commit, atualiza. Comenta nos pontos, eu ajusto, sem reuniões — código limpo, performance Lighthouse 95+ e SEO técnico já no primeiro deploy.",
    details: ["Preview ao vivo na Vercel", "Comentários direto no link", "Lighthouse 95+ garantido"],
  },
  {
    num: "03",
    title: "No ar com seu domínio",
    desc: "Apertamos o publish. Domínio configurado, pixel rodando, GTM integrado, formulários conectados ao seu CRM ou e-mail. Próximos 12 meses, qualquer ajuste vem comigo — você só precisa avisar.",
    details: ["Domínio próprio + SSL", "Pixel, GTM e CRM integrados", "1 ano de suporte incluso"],
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      style={{ padding: "clamp(80px, 12vh, 140px) var(--shell-pad)" }}
    >
      <style>{`
        .step-row {
          display: grid;
          grid-template-columns: 100px 1fr 280px;
          gap: 32px;
          padding: 40px 0;
          border-top: 1px solid var(--color-line);
          align-items: start;
          transition: padding var(--transition);
        }
        .step-row:last-child { border-bottom: 1px solid var(--color-line); }
        .step-row:hover { padding-left: 16px; }
        @media (max-width: 860px) {
          .step-row { grid-template-columns: 60px 1fr; gap: 16px; }
          .step-detail-col { grid-column: 1 / -1; padding-top: 8px; }
        }
        .step-detail-item::before { content: "→ "; color: var(--color-accent); }
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
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: "var(--color-accent)", letterSpacing: "0.1em" }}>/ 03</span>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted)" }}>Como funciona</span>
          </div>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 500 }}>
            Três passos.
            <br />
            <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "var(--color-accent)" }}>Sem mistério.</span>
          </h2>
        </div>

        <div>
          {steps.map(({ num, title, desc, details }) => (
            <div key={num} className="step-row" data-reveal>
              <div
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontStyle: "italic",
                  fontSize: 64,
                  color: "var(--color-accent)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                }}
              >
                {num}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-text-2)", maxWidth: 540 }}>
                  {desc}
                </p>
              </div>
              <div
                className="step-detail-col"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  color: "var(--color-muted)",
                  letterSpacing: "0.04em",
                }}
              >
                {details.map((d) => (
                  <span key={d} className="step-detail-item" style={{ color: "var(--color-text-2)" }}>
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
