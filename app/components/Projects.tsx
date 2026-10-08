import Image from "next/image";
import { projects, type Project } from "../data/projects";
import ProjectMotion from "./ProjectMotion";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

function ProjectTitle({ p }: { p: Project }) {
  return (
    <>
      <p className="proj-meta">
        {p.category} · {p.year}
        {p.status !== "no ar" && <span className="proj-wip"> · {p.status}</span>}
      </p>
      <h3>{p.name}</h3>
    </>
  );
}

function ProjectRow({ p, index }: { p: Project; index: number }) {
  const edge = index === 0 ? "first" : index === projects.length - 1 ? "last" : undefined;
  return (
    <article className="proj" id={`projeto-${p.slug}`} data-index={index} data-edge={edge}>
      <div className="proj-stage">
        <div className="shell proj-grid">
          {/* phones: title above the screenshot */}
          <div className="proj-title proj-title-top" data-reveal>
            <ProjectTitle p={p} />
          </div>

          {p.image && (
            <figure className="proj-figure" data-reveal>
              <a
                href={p.live ?? undefined}
                target={p.live ? "_blank" : undefined}
                rel={p.live ? "noopener noreferrer" : undefined}
                className="proj-img"
                aria-label={p.live ? `Abrir ${p.name}` : undefined}
                tabIndex={p.live ? undefined : -1}
              >
                <Image
                  src={`${BASE}${p.image}`}
                  alt={`Captura de tela do ${p.name}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 760px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
                <span className="proj-edge" aria-hidden="true" />
              </a>
              {p.imageNote && <figcaption>{p.imageNote}</figcaption>}
            </figure>
          )}

          <div className="proj-body" data-reveal style={d(140)}>
            <div className="proj-title proj-title-side">
              <ProjectTitle p={p} />
            </div>
            <p className="proj-problem">{p.problem}</p>
            <ul className="proj-highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="proj-links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-link">
                  Ver no ar ↗
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-link">
                  Código ↗
                </a>
              )}
              {!p.repo && <span style={{ color: "var(--color-muted)" }}>Código privado</span>}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" style={{ padding: "clamp(32px, 6vh, 64px) 0 0" }}>
      <style>{`
        .proj-grid {
          display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr); gap: clamp(32px, 4vw, 64px);
          align-items: center;
        }
        .proj { padding: clamp(48px, 7vh, 80px) 0; border-top: 1px solid var(--color-line); }
        .proj-figure { margin: 0; perspective: 1100px; }

        /* Card (hover effect from "card effect"): tilts toward the cursor in 3D,
           with a soft light that follows it. Transform is driven by ProjectMotion. */
        .proj-img {
          position: relative; display: block; aspect-ratio: 16 / 10; overflow: hidden; border-radius: 12px;
          border: 1px solid var(--color-line); background: var(--color-surface-2);
          transform-style: preserve-3d; will-change: transform;
          box-shadow: 0 1px 0 rgba(255,255,255,0.03) inset, 0 30px 70px -30px rgba(0,0,0,0.7);
          transition: box-shadow 500ms var(--ease), border-color 500ms var(--ease);
        }
        .proj-img:hover {
          border-color: var(--color-line-2);
          box-shadow: 0 1px 0 rgba(255,255,255,0.05) inset, 0 50px 90px -35px rgba(0,0,0,0.85);
        }
        /* Light that follows the cursor along the card's border only; the
           screenshot itself is left untouched */
        .proj-edge {
          position: absolute; inset: 0; pointer-events: none; border-radius: inherit; padding: 1px;
          background: radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), var(--edge-light), transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
          opacity: 0; transition: opacity 600ms var(--ease);
        }
        .proj-img:hover .proj-edge { opacity: 1; }
        .proj-img { --edge-light: rgba(255, 255, 255, 0.55); }
        [data-theme="light"] .proj-img { --edge-light: rgba(229, 72, 15, 0.55); }
        [data-theme="light"] .proj-img { box-shadow: 0 30px 60px -34px rgba(20,24,40,0.35); }
        [data-theme="light"] .proj-img:hover { box-shadow: 0 50px 90px -40px rgba(20,24,40,0.5); }
        .proj-figure figcaption { margin-top: 10px; font-size: 12px; color: var(--color-muted); }

        .proj-body { display: flex; flex-direction: column; gap: 14px; }
        .proj-title { display: flex; flex-direction: column; gap: 14px; }
        .proj-title-top { display: none; }
        .proj-meta { font-family: var(--font-geist-mono); font-size: 12px; color: var(--color-muted); }
        .proj-wip { color: var(--color-accent); }
        .proj h3 { font-size: clamp(26px, 2.6vw, 34px); line-height: 1.1; letter-spacing: -0.03em; font-weight: 600; }
        .proj-problem { font-size: 16px; line-height: 1.6; color: var(--color-text); }
        .proj-highlights { list-style: none; padding: 0; margin: 2px 0 0; display: flex; flex-direction: column; gap: 8px; }
        .proj-highlights li { position: relative; padding-left: 18px; font-size: 14px; line-height: 1.55; color: var(--color-text-2); }
        .proj-highlights li::before {
          content: ""; position: absolute; left: 0; top: 0.62em; width: 8px; height: 1px; background: var(--color-accent);
        }
        .proj-links { display: flex; gap: 24px; font-size: 14px; margin-top: 6px; flex-wrap: wrap; }

        /* Progress dots on the side: show where you are while projects swap in place */
        .proj-dots {
          position: fixed; right: clamp(14px, 2vw, 28px); top: 50%; translate: 0 -50%; z-index: 40;
          display: none; flex-direction: column; gap: 14px; list-style: none; margin: 0; padding: 0;
          opacity: 0; pointer-events: none; transition: opacity 500ms var(--ease);
        }
        .proj-dots.on { opacity: 1; pointer-events: auto; }
        .proj-dots a {
          display: block; width: 8px; height: 8px; background: var(--color-line-2);
          transition: background 300ms var(--ease), transform 300ms var(--ease), box-shadow 300ms var(--ease);
        }
        .proj-dots a:hover { background: var(--color-text-2); }
        .proj-dots a[aria-current="true"] { background: var(--color-accent); transform: scale(1.5); box-shadow: 0 0 10px var(--accent-glow); }

        /* Section swap on scroll (from "scroll-driven scroll-snapping animations"):
           each project is a full-screen panel (ProjectMotion steps between them); its content is pinned to the
           screen and animated by the panel's position, so instead of sliding up,
           one project dissolves and the next one resolves in the same place. */
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) and (min-width: 901px) {
            .proj {
              height: 100svh; padding: 0; border-top: 0;
              view-timeline: --proj;
            }
            .proj-stage {
              position: fixed; inset: 0; display: flex; align-items: center;
              padding-top: calc(var(--stage-top, 60px) + 44px);
              animation: proj-swap linear both;
              animation-timeline: --proj;
            }
            .proj-grid { width: 100%; }
            #projetos { padding-top: 0 !important; }
            .proj-head {
              position: fixed; top: var(--stage-top, 60px); left: 0; right: 0; z-index: 3; pointer-events: none;
              animation: proj-head-exit linear both;
              animation-timeline: scroll(root);
              animation-range: var(--t-last, 9999px) calc(var(--t-last, 9999px) + 100svh);
            }
            .proj-head-move {
              animation: proj-head-in linear both;
              animation-timeline: scroll(root);
              animation-range: 0px var(--t-first, 9999px);
            }
            .proj-head .section-label { margin-bottom: 0; }
            .proj-head [data-reveal] { opacity: 1; transform: none; transition: none; }
            .proj [data-reveal] { opacity: 1; transform: none; transition: none; }
            .proj-dots { display: flex; }
            .proj[data-edge="first"] .proj-stage { animation-name: proj-scroll-in; }
            .proj[data-edge="last"] .proj-stage { animation-name: proj-scroll-out; }
          }
        }
        @keyframes proj-swap {
          0%, 30% { opacity: 0; visibility: hidden; filter: blur(12px) contrast(3); transform: scale(0.95); }
          46%, 54% { opacity: 1; visibility: visible; filter: none; transform: none; }
          70%, 100% { opacity: 0; visibility: hidden; filter: blur(12px) contrast(3); transform: scale(1.05); }
        }

        /* First project: arrives by scrolling up like normal content, then dissolves out */
        @keyframes proj-scroll-in {
          0% { transform: translateY(100svh); }
          50%, 54% { opacity: 1; visibility: visible; filter: none; transform: none; }
          70%, 100% { opacity: 0; visibility: hidden; filter: blur(12px) contrast(3); transform: scale(1.05); }
        }
        /* Last project: resolves in, then leaves by scrolling up like normal content */
        @keyframes proj-scroll-out {
          0%, 30% { opacity: 0; visibility: hidden; filter: blur(12px) contrast(3); transform: scale(0.95); }
          46%, 50% { opacity: 1; visibility: visible; filter: none; transform: none; }
          100% { transform: translateY(-100svh); }
        }

        /* Section title: arrives with the first project (moving with the page),
           leaves with the last one */
        @keyframes proj-head-in { from { transform: translateY(var(--t-first, 0px)); } }
        @keyframes proj-head-exit { to { transform: translateY(-100svh); } }

        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: 1fr; gap: 28px; align-items: start; }
          .proj-title-top { display: flex; gap: 10px; margin-bottom: -10px; }
          .proj-title-side { display: none; }
        }
      `}</style>
      <ProjectMotion />

      <div className="proj-head">
        <div className="proj-head-move">
          <div className="shell">
            <h2 className="section-label" data-reveal>Projetos</h2>
          </div>
        </div>
      </div>
      {projects.map((p, i) => (
        <ProjectRow key={p.slug} p={p} index={i} />
      ))}

      <ol className="proj-dots" aria-label="Projetos">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <a href={`#projeto-${p.slug}`} aria-label={p.name} title={p.name} aria-current={i === 0 ? "true" : undefined} />
          </li>
        ))}
      </ol>
    </section>
  );
}
