"use client";

function Mock1() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 22, display: "flex", flexDirection: "column", gap: 12, background: "linear-gradient(135deg, #1a1310 0%, #0d0d0d 100%)" }}>
      <span style={{ display: "inline-flex", alignSelf: "flex-start", fontFamily: "var(--font-geist-mono)", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4521a", border: "1px solid #d4521a", padding: "4px 8px", borderRadius: 999 }}>Studio · Arquitetura</span>
      <div style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 26, color: "#f0f0f0", letterSpacing: "-0.02em" }}>
        Casas que <em style={{ color: "#d4521a" }}>respiram</em> com seus moradores.
      </div>
      <div style={{ fontSize: 10, color: "#888", maxWidth: "60%", lineHeight: 1.4 }}>Estúdio premiado em BH com foco em residências de alto padrão.</div>
      <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
        <span style={{ fontSize: 10, padding: "7px 14px", background: "#d4521a", color: "#fff", borderRadius: 999 }}>Agendar visita</span>
        <span style={{ fontSize: 10, padding: "7px 14px", background: "transparent", border: "1px solid #444", color: "#ccc", borderRadius: 999 }}>Portfólio</span>
      </div>
    </div>
  );
}

function Mock2() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 22, display: "flex", flexDirection: "column", gap: 12, background: "#f4f1ec", color: "#161412" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-geist-mono)", fontSize: 9, letterSpacing: "0.1em" }}>
        <span>BORDA / 26</span><span>NEW IN</span>
      </div>
      <div style={{ fontSize: 30, fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.04em", marginTop: 24 }}>
        Tipografia que <em style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "#c9461a", fontWeight: 400 }}>fica</em> com você.
      </div>
      <div style={{ display: "flex", gap: 22, marginTop: "auto", paddingTop: 14, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
        {[["07", "Famílias"], ["38", "Cuts"], ["∞", "Licenças"]].map(([v, l]) => (
          <div key={l}>
            <div style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 22, color: "#c9461a" }}>{v}</div>
            <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 8, letterSpacing: "0.1em", color: "#6a6a6a", textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Mock3() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 22, display: "flex", flexDirection: "column", gap: 12, background: "#0a0e1a", color: "#fff", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%, rgba(120, 100, 255, 0.4), transparent 50%)", pointerEvents: "none" }} />
      <span style={{ position: "relative", fontFamily: "var(--font-geist-mono)", fontSize: 9, letterSpacing: "0.15em", color: "#a8a8ff" }}>SAAS · B2B</span>
      <div style={{ position: "relative", fontSize: 24, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.03em", marginTop: 16 }}>
        <span style={{ background: "linear-gradient(90deg, #fff, #a8a8ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Análise contábil</span> sem planilhas.
      </div>
      <div style={{ position: "relative", marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{ height: 28, background: "rgba(168,168,255,0.1)", border: "1px solid rgba(168,168,255,0.2)", borderRadius: 4 }} />
        ))}
      </div>
    </div>
  );
}

function Mock4() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 22, display: "flex", flexDirection: "column", gap: 12, background: "#161412" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, #d4521a 200%)", opacity: 0.4, pointerEvents: "none" }} />
      <div style={{ position: "relative", fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 60, lineHeight: 0.9, color: "#d4521a" }}>5×</div>
      <div style={{ position: "relative", fontSize: 18, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em", marginTop: 8, color: "#f0f0f0" }}>
        Mais agendamentos. Sem aumentar a <em style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "#f3a26a" }}>verba</em>.
      </div>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 5, marginTop: "auto" }}>
        <div style={{ height: 2, background: "#d4521a", borderRadius: 999, width: "60%" }} />
        <div style={{ height: 2, background: "#2a2a2a", borderRadius: 999, width: "40%" }} />
      </div>
    </div>
  );
}

function Mock5() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 22, display: "flex", flexDirection: "column", gap: 12, background: "#f8e9d4", color: "#2a1810" }}>
      <div style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 32, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
        Café <span style={{ textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 4, textDecorationColor: "#c9461a" }}>torrado</span> ontem,
        <br />na sua casa amanhã.
      </div>
      <div style={{ fontSize: 9, color: "#6a4a30", lineHeight: 1.5, maxWidth: "70%" }}>Microlote de produtores da Mantiqueira, entregue em até 24h em SP e RJ.</div>
      <div style={{ display: "flex", gap: 6, marginTop: "auto", flexWrap: "wrap" }}>
        {["FRETE GRÁTIS", "12X"].map((c) => (
          <span key={c} style={{ fontFamily: "var(--font-geist-mono)", fontSize: 8, padding: "4px 8px", background: "#fff", borderRadius: 999, letterSpacing: "0.08em" }}>{c}</span>
        ))}
      </div>
      <span style={{ position: "absolute", bottom: 22, right: 22, width: 32, height: 32, background: "#2a1810", color: "#f8e9d4", borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 14 }}>→</span>
    </div>
  );
}

function PortCard({ children, tall = false, title, cat, lift }: { children: React.ReactNode; tall?: boolean; title: string; cat: string; lift: string }) {
  return (
    <article
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-line)",
        borderRadius: 14,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transition: "border-color var(--transition), transform var(--transition)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-line-2)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-line)";
        (e.currentTarget as HTMLElement).style.transform = "";
      }}
      data-reveal
    >
      <div style={{ aspectRatio: tall ? "4/5" : "16/10", position: "relative", overflow: "hidden" }}>
        {children}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 22px",
          borderTop: "1px solid var(--color-line)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <h4 style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}>{title}</h4>
          <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-muted)" }}>{cat}</span>
        </div>
        <div style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 26, color: "var(--color-accent)", letterSpacing: "-0.02em" }}>
          {lift}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section
      id="trabalhos"
      style={{ padding: "clamp(80px, 12vh, 140px) var(--shell-pad)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          data-reveal
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 72, alignItems: "end" }}
          className="section-head-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: "var(--color-accent)", letterSpacing: "0.1em" }}>/ 04</span>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted)" }}>Trabalhos selecionados</span>
          </div>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 500 }}>
            Páginas que já
            <br />estão{" "}
            <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "var(--color-accent)" }}>no ar</span>.
          </h2>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16 }}
          className="port-grid-cols"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <PortCard title="Atelier Vento Sul" cat="Arquitetura · 2026" lift="+312%">
              <Mock1 />
            </PortCard>
            <PortCard title="Norma Cloud" cat="SaaS B2B · 2025" lift="2.4x">
              <Mock3 />
            </PortCard>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <PortCard tall title="Borda Type Foundry" cat="E-commerce · 2026" lift="+187%">
              <Mock2 />
            </PortCard>
            <PortCard title="Clínica Lúmen" cat="Saúde · 2025" lift="5.0x">
              <Mock4 />
            </PortCard>
            <PortCard title="Sereno Coffee" cat="DTC · 2026" lift="+91%">
              <Mock5 />
            </PortCard>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .port-grid-cols { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 860px) {
          .section-head-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
