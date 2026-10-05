const GITHUB = "https://github.com/andersonXe";
const WA = "https://wa.me/5531991910629?text=Ol%C3%A1%20Anderson%2C%20vi%20seu%20portf%C3%B3lio.";

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", padding: "clamp(140px, 22vh, 200px) 0 clamp(56px, 10vh, 96px)" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="shell" style={{ position: "relative" }}>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.035em", fontWeight: 600 }}>
          Anderson Martins<span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>
        <p style={{ marginTop: 16, fontSize: "clamp(18px, 2vw, 21px)", lineHeight: 1.5, color: "var(--color-text-2)", maxWidth: 640 }}>
          Desenvolvedor fullstack. Construo software que resolve problemas reais — alguns deles estão aqui embaixo.
        </p>
        <div style={{ display: "flex", gap: 24, marginTop: 28, fontSize: 15, flexWrap: "wrap" }}>
          <a href="#projetos" className="text-link">Projetos</a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-link">GitHub</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="text-link">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
