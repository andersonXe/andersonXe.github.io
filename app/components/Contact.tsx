import WhatsAppIcon from "./WhatsAppIcon";

const WA = "https://wa.me/5531991910629?text=Ol%C3%A1%20Anderson%2C%20vi%20seu%20portf%C3%B3lio.";
const GITHUB = "https://github.com/andersonXe";

export default function Contact() {
  return (
    <section id="contato" style={{ padding: "clamp(64px, 10vh, 112px) 0" }}>
      <div className="shell" data-reveal>
        <h2 className="section-label">Contato</h2>
        <p style={{ fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.4, letterSpacing: "-0.02em", maxWidth: 620 }}>
          Quer conversar? O jeito mais rápido é pelo WhatsApp.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="contact-btn">
            <WhatsAppIcon className="w-4 h-4" />
            +55 31 99191-0629
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: 15 }}>
            github.com/andersonXe
          </a>
        </div>
      </div>
      <style>{`
        .contact-btn {
          display: inline-flex; align-items: center; gap: 10px; padding: 12px 20px; border-radius: 8px;
          font-size: 15px; font-weight: 500; text-decoration: none; color: #fff; background: var(--color-accent); box-shadow: 0 8px 28px -8px var(--accent-glow);
          transition: filter var(--transition);
        }
        .contact-btn:hover { filter: brightness(1.1); }
      `}</style>
    </section>
  );
}
