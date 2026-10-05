export default function About() {
  return (
    <section id="sobre" style={{ padding: "clamp(64px, 10vh, 112px) 0", borderTop: "1px solid var(--color-line)" }}>
      <div className="shell" data-reveal>
        <h2 className="section-label">Sobre</h2>
        <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.4, letterSpacing: "-0.02em" }}>
            Gosto de desafios que geram valor real. A tecnologia é só a ferramenta — o valor está em resolver problemas
            de verdade.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text-2)" }}>
            Por isso começo pelo problema: entender quem vai usar, o que atrapalha o dia a dia dessa pessoa e o que
            precisa ser verdade para a solução funcionar. Só depois escolho como construir.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text-2)" }}>
            E levo até o fim: da primeira conversa até o sistema no ar — sendo honesto, inclusive, sobre o que ele ainda
            não resolve.
          </p>
        </div>
      </div>
    </section>
  );
}
