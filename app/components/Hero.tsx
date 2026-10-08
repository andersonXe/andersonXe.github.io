const GITHUB = "https://github.com/andersonXe";
const WA = "https://wa.me/5531991910629?text=Ol%C3%A1%20Anderson%2C%20vi%20seu%20portf%C3%B3lio.";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="hero">
      <style>{`
        .hero { position: relative; }
        .mast { padding: clamp(130px, 20vh, 190px) 0 clamp(40px, 7vh, 72px); }
        .mast-inner { position: relative; }
        .mast-name { font-size: clamp(40px, 6vw, 72px); line-height: 1.02; letter-spacing: -0.04em; font-weight: 600; }
        .mast-text { margin-top: 18px; font-size: clamp(18px, 2vw, 22px); line-height: 1.5; color: var(--color-text-2); max-width: 680px; }
        .mast-links { display: flex; gap: 28px; margin-top: 32px; font-size: 15px; flex-wrap: wrap; }
        .mast-name, .mast-text, .mast-links { transform-origin: left top; }

        /* Compact masthead: on desktop, the name and links stay on screen while the
           projects play. Scrolling from the top down to the first project shrinks
           the name, dissolves the sentence and tucks the links under the name;
           leaving the last project, the masthead scrolls away with it. Offsets
           (--t-first, --t-last, --name-dy …) are measured by ProjectMotion. */
        @supports (animation-timeline: scroll()) {
          @media (prefers-reduced-motion: no-preference) and (min-width: 901px) {
            .hero { height: var(--hero-h, auto); }
            .mast {
              position: fixed; top: 0; left: 0; right: 0; z-index: 3; pointer-events: none;
              animation: mast-exit linear both;
              animation-timeline: scroll(root);
              animation-range: var(--t-last, 9999px) calc(var(--t-last, 9999px) + 100svh);
            }
            .mast a { pointer-events: auto; }
            .mast-name, .mast-text, .mast-links {
              animation-timing-function: linear; animation-fill-mode: both;
              animation-timeline: scroll(root);
              animation-range: 0px var(--t-first, 9999px);
            }
            .mast-name { animation-name: mast-name; }
            .mast-text { animation-name: mast-text; }
            .mast-links { animation-name: mast-links; }
          }
        }
        @keyframes mast-name { to { transform: translateY(var(--name-dy, 0px)) scale(var(--name-s, 1)); } }
        @keyframes mast-text { to { transform: translateY(var(--text-dy, 0px)); opacity: 0; filter: blur(6px); } }
        @keyframes mast-links { to { transform: translateY(var(--links-dy, 0px)) scale(0.93); } }
        @keyframes mast-exit { to { transform: translateY(-100svh); } }
      `}</style>
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
      <div className="mast">
        <div className="shell mast-inner">
          <div className="rise" style={d(80)}>
            <h1 className="mast-name">
              Anderson Martins<span style={{ color: "var(--color-accent)" }}>.</span>
            </h1>
          </div>
          <div className="rise" style={d(220)}>
            <p className="mast-text">
              Engenheiro de software. Construo sistemas que resolvem problemas reais. Alguns deles estão logo abaixo.
            </p>
          </div>
          <div className="rise" style={d(360)}>
            <div className="mast-links">
              <a href="#projetos" className="text-link">Projetos</a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-link">GitHub</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="text-link">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
