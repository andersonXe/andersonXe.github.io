const GITHUB = "https://github.com/andersonXe";
const WA = "https://wa.me/5531991910629?text=Ol%C3%A1%20Anderson%2C%20vi%20seu%20portf%C3%B3lio.";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", padding: "clamp(150px, 24vh, 220px) 0 clamp(56px, 10vh, 104px)" }}>
      <div
        aria-hidden="true"
        className="rise"
        style={{
          ...d(0),
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 25% 50%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 25% 50%, black 20%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="shell" style={{ position: "relative" }}>
        <h1
          className="rise"
          style={{ ...d(80), fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.04em", fontWeight: 600 }}
        >
          Anderson Martins<span style={{ color: "var(--color-accent)" }}>.</span>
        </h1>
        <p
          className="rise"
          style={{ ...d(220), marginTop: 18, fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5, color: "var(--color-text-2)", maxWidth: 680 }}
        >
          Desenvolvedor fullstack. Construo software que resolve problemas reais — alguns deles estão aqui embaixo.
        </p>
        <div className="rise" style={{ ...d(360), display: "flex", gap: 28, marginTop: 32, fontSize: 15, flexWrap: "wrap" }}>
          <a href="#projetos" className="text-link">Projetos</a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-link">GitHub</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="text-link">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
