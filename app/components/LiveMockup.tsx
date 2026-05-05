"use client";

import { useEffect, useRef } from "react";

const CODE_HTML = `<span style="color:#555;font-style:italic">// Anderson Martins · landing.tsx</span>
<span style="color:#555;font-style:italic">// Build limpo, sem dependências inúteis.</span>

<span style="color:#888">&lt;</span><span style="color:#ff7d54">section</span> <span style="color:#d4a857">className</span><span style="color:#888">=</span><span style="color:#87b88a">"hero"</span><span style="color:#888">&gt;</span>
  <span style="color:#888">&lt;</span><span style="color:#ff7d54">Tag</span><span style="color:#888">&gt;</span>LANÇAMENTO · MAIO 2026<span style="color:#888">&lt;/</span><span style="color:#ff7d54">Tag</span><span style="color:#888">&gt;</span>

  <span style="color:#888">&lt;</span><span style="color:#ff7d54">h1</span><span style="color:#888">&gt;</span>
    Cresça com uma página
    que <span style="color:#888">&lt;</span><span style="color:#ff7d54">em</span><span style="color:#888">&gt;</span>vende sozinha<span style="color:#888">&lt;/</span><span style="color:#ff7d54">em</span><span style="color:#888">&gt;</span>.
  <span style="color:#888">&lt;/</span><span style="color:#ff7d54">h1</span><span style="color:#888">&gt;</span>

  <span style="color:#888">&lt;</span><span style="color:#ff7d54">p</span><span style="color:#888">&gt;</span>
    Capture leads qualificados,
    integre com o seu CRM,
    e durma em paz.
  <span style="color:#888">&lt;/</span><span style="color:#ff7d54">p</span><span style="color:#888">&gt;</span>

  <span style="color:#888">&lt;</span><span style="color:#ff7d54">CTA</span> <span style="color:#d4a857">href</span><span style="color:#888">=</span><span style="color:#87b88a">"/contato"</span><span style="color:#888">/&gt;</span>

  <span style="color:#888">&lt;</span><span style="color:#ff7d54">Metrics</span>
    <span style="color:#d4a857">lighthouse</span><span style="color:#888">=</span><span style="color:#87b88a">{98}</span>
    <span style="color:#d4a857">lcp</span><span style="color:#888">=</span><span style="color:#87b88a">"0.8s"</span>
    <span style="color:#d4a857">conv</span><span style="color:#888">=</span><span style="color:#87b88a">"+4.2x"</span>
  <span style="color:#888">/&gt;</span>
<span style="color:#888">&lt;/</span><span style="color:#ff7d54">section</span><span style="color:#888">&gt;</span>`;

function stripTags(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export default function LiveMockup() {
  const codeRef = useRef<HTMLPreElement>(null);
  const lrHRef = useRef<HTMLHeadingElement>(null);
  const lrPRef = useRef<HTMLParagraphElement>(null);
  const lrCtaRef = useRef<HTMLDivElement>(null);
  const lrStatsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let started = false;

    function animateText(
      el: HTMLElement,
      text: string,
      speed: number,
      allowItalic: boolean,
      done?: () => void
    ) {
      el.innerHTML = "";
      let i = 0;
      let html2 = "";
      function step() {
        if (i >= text.length) {
          el.innerHTML = html2;
          done && done();
          return;
        }
        if (allowItalic && text.substr(i, 3) === "<i>") {
          html2 += '<i style="font-style:italic;color:var(--color-accent);">';
          i += 3;
        } else if (allowItalic && text.substr(i, 4) === "</i>") {
          html2 += "</i>";
          i += 4;
        } else {
          html2 += text[i];
          i++;
        }
        el.innerHTML = html2 + '<span class="live-cursor"></span>';
        setTimeout(step, speed);
      }
      step();
    }

    function start() {
      const codeEl = codeRef.current;
      const lrH = lrHRef.current;
      const lrP = lrPRef.current;
      const lrCta = lrCtaRef.current;
      const lrStats = lrStatsRef.current;
      if (!codeEl) return;
      const el = codeEl;

      let i = 0;
      let buf = "";
      let inTag = false;
      let typedHero = false;
      let typedSub = false;
      let shownCta = false;
      let shownStats = false;

      function tick() {
        if (i >= CODE_HTML.length) {
          el.innerHTML = buf + '<span class="live-cursor"></span>';
          setTimeout(() => {
            el.innerHTML = "";
            if (lrH) lrH.innerHTML = '<span class="live-cursor"></span>';
            if (lrP) lrP.textContent = "";
            lrCta?.classList.remove("lr-in");
            lrStats?.classList.remove("lr-in");
            typedHero = typedSub = shownCta = shownStats = false;
            i = 0;
            buf = "";
            inTag = false;
            start();
          }, 4500);
          return;
        }
        const ch = CODE_HTML[i];
        buf += ch;
        if (ch === "<") inTag = true;
        if (ch === ">") inTag = false;
        el.innerHTML = buf + '<span class="live-cursor"></span>';
        i++;

        const stripped = stripTags(buf);
        if (!typedHero && stripped.includes("Cresça") && lrH) {
          typedHero = true;
          animateText(
            lrH,
            "Cresça com uma página que <i>vende sozinha</i>.",
            28,
            true
          );
        }
        if (!typedSub && stripped.includes("Capture leads") && lrP) {
          typedSub = true;
          animateText(
            lrP,
            "Capture leads qualificados, integre com o seu CRM, e durma em paz.",
            14,
            false
          );
        }
        if (!shownCta && stripped.includes("CTA") && lrCta) {
          shownCta = true;
          lrCta.classList.add("lr-in");
        }
        if (!shownStats && stripped.includes("Metrics") && lrStats) {
          shownStats = true;
          lrStats.classList.add("lr-in");
        }

        setTimeout(tick, inTag ? 2 : 18);
      }
      tick();
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            start();
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: 0, padding: "0 var(--shell-pad) clamp(80px,12vh,140px)" }}
    >
      <style>{`
        .live-cursor {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: var(--color-accent);
          vertical-align: middle;
          animation: blink 1s infinite;
          margin-bottom: 2px;
        }
        .build-cursor {
          display: inline-block;
          width: 3px;
          height: 30px;
          background: var(--color-accent);
          vertical-align: text-bottom;
          animation: blink 0.8s infinite;
        }
        .lr-cta-wrap {
          display: flex;
          gap: 8px;
          margin-top: 4px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 400ms ease, transform 400ms ease;
        }
        .lr-cta-wrap.lr-in { opacity: 1; transform: translateY(0); }
        .lr-stats-wrap {
          margin-top: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          padding-top: 18px;
          border-top: 1px solid var(--color-line);
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 500ms ease 100ms, transform 500ms ease 100ms;
        }
        .lr-stats-wrap.lr-in { opacity: 1; transform: translateY(0); }
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
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: "var(--color-accent)", letterSpacing: "0.1em" }}>/ 02</span>
            <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted)" }}>Em tempo real</span>
          </div>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 500 }}>
            Veja uma landing{" "}
            <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", color: "var(--color-accent)" }}>nascendo</span>{" "}
            agora.
          </h2>
        </div>

        {/* Live stage */}
        <div
          data-reveal
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-line)",
            borderRadius: 16,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: 560,
          }}
          className="live-stage-grid"
        >
          {/* Code pane */}
          <div
            style={{
              background: "#0a0a0a",
              borderRight: "1px solid var(--color-line)",
              position: "relative",
              fontFamily: "var(--font-geist-mono)",
              fontSize: 13,
              lineHeight: 1.7,
              color: "#c8c8c8",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 18px",
                borderBottom: "1px solid #1a1a1a",
                background: "#0d0d0d",
              }}
            >
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "#777", marginLeft: 12, letterSpacing: "0.04em" }}>
                index.tsx — Anderson.dev
              </span>
            </div>
            <pre
              ref={codeRef}
              style={{
                padding: "24px 22px",
                margin: 0,
                height: "calc(100% - 47px)",
                overflow: "hidden",
                whiteSpace: "pre",
                fontFamily: "var(--font-geist-mono)",
                fontSize: 13,
                lineHeight: 1.7,
                color: "#c8c8c8",
              }}
            />
          </div>

          {/* Preview pane */}
          <div style={{ background: "var(--color-bg)", position: "relative", overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 18px",
                borderBottom: "1px solid var(--color-line)",
                background: "var(--color-surface)",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-line-2)", display: "inline-block" }} />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  color: "var(--color-muted)",
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-line)",
                  borderRadius: 4,
                  padding: "5px 10px",
                  textAlign: "center",
                }}
              >
                cliente.com.br
              </div>
            </div>

            <div style={{ position: "relative", height: "calc(100% - 47px)", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>
                    Cliente<span style={{ color: "var(--color-accent)" }}>.</span>
                  </span>
                  <span style={{ fontSize: 10, padding: "6px 12px", background: "var(--color-accent)", color: "#fff", borderRadius: 999, fontWeight: 500 }}>
                    Fale conosco
                  </span>
                </div>

                <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 14 }}>
                  <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-accent)" }}>
                    LANÇAMENTO · MAIO 2026
                  </span>
                  <h3
                    ref={lrHRef}
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontStyle: "italic",
                      fontSize: 38,
                      lineHeight: 0.95,
                      letterSpacing: "-0.03em",
                      color: "var(--color-text)",
                      minHeight: 38,
                    }}
                  >
                    <span className="build-cursor" />
                  </h3>
                  <p
                    ref={lrPRef}
                    style={{ fontSize: 11, lineHeight: 1.5, color: "var(--color-text-2)", maxWidth: 320, minHeight: 33 }}
                  />
                  <div ref={lrCtaRef} className="lr-cta-wrap">
                    <span style={{ fontSize: 10, padding: "8px 14px", background: "var(--color-accent)", color: "#fff", borderRadius: 999 }}>Quero saber mais</span>
                    <span style={{ fontSize: 10, padding: "8px 14px", background: "transparent", border: "1px solid var(--color-line-2)", color: "var(--color-text)", borderRadius: 999 }}>Ver demonstração</span>
                  </div>
                </div>

                <div ref={lrStatsRef} className="lr-stats-wrap">
                  {[
                    { n: "98", l: "Lighthouse" },
                    { n: "0.8s", l: "LCP" },
                    { n: "+4.2x", l: "Conversão" },
                  ].map(({ n, l }) => (
                    <div key={l}>
                      <div style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 22, color: "var(--color-accent)" }}>{n}</div>
                      <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: 18,
                  right: 18,
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 10,
                  color: "var(--color-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-line)",
                  padding: "6px 10px",
                  borderRadius: 4,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    boxShadow: "0 0 8px var(--color-accent)",
                    animation: "blink 1.4s infinite",
                    display: "inline-block",
                  }}
                />
                BUILDING…
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .live-stage-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
