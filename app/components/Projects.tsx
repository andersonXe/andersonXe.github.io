import Image from "next/image";
import { projects, type Project } from "../data/projects";
import ProjectMotion from "./ProjectMotion";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

function ProjectRow({ p }: { p: Project }) {
  const body = (
    <div className="proj-body" data-reveal style={d(140)}>
      <p className="proj-meta">
        {p.category} · {p.year}
        {p.status !== "no ar" && <span className="proj-wip"> · {p.status}</span>}
      </p>
      <h3>{p.name}</h3>
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
  );

  return (
    <article className="proj">
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
            <div className="proj-img-inner">
              <Image
                src={`${BASE}${p.image}`}
                alt={`Captura de tela do ${p.name}`}
                fill
                sizes="(max-width: 900px) 100vw, 760px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </a>
          {p.imageNote && <figcaption>{p.imageNote}</figcaption>}
        </figure>
      )}
      {body}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" style={{ padding: "clamp(32px, 6vh, 64px) 0" }}>
      <style>{`
        .proj {
          display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr); gap: clamp(32px, 4vw, 64px);
          align-items: center; padding: clamp(48px, 7vh, 80px) 0; border-top: 1px solid var(--color-line);
        }
        .proj-figure { margin: 0; }
        .proj-img {
          position: relative; display: block; aspect-ratio: 16 / 10; overflow: hidden; border-radius: 12px;
          border: 1px solid var(--color-line); background: var(--color-surface-2);
          box-shadow: 0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 50px -30px rgba(0,0,0,0.6);
          transition: transform 500ms var(--ease), box-shadow 500ms var(--ease), border-color 500ms var(--ease);
        }
        .proj-img-inner {
          position: absolute; inset: -4% 0; /* room for parallax travel */
          transform: translate3d(0, var(--py, 0px), 0) scale(1.0);
          transition: transform 700ms var(--ease);
          will-change: transform;
        }
        /* Cursor-following highlight */
        .proj-img::after {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0;
          background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), var(--spot), transparent 60%);
          transition: opacity 400ms var(--ease);
        }
        .proj-img:hover { transform: translateY(-6px); border-color: var(--color-line-2);
          box-shadow: 0 1px 0 rgba(255,255,255,0.04) inset, 0 40px 80px -40px rgba(0,0,0,0.75); }
        .proj-img:hover::after { opacity: 1; }
        .proj-img:hover .proj-img-inner { transform: translate3d(0, var(--py, 0px), 0) scale(1.03); }
        [data-theme="light"] .proj-img { box-shadow: 0 20px 50px -34px rgba(20,24,40,0.35); }
        [data-theme="light"] .proj-img:hover { box-shadow: 0 40px 80px -40px rgba(20,24,40,0.45); }
        .proj-figure figcaption { margin-top: 10px; font-size: 12px; color: var(--color-muted); }

        .proj-body { display: flex; flex-direction: column; gap: 14px; }
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

        @media (max-width: 900px) {
          .proj { grid-template-columns: 1fr; gap: 28px; align-items: start; }
        }
      `}</style>
      <ProjectMotion />
      <div className="shell">
        <h2 className="section-label" data-reveal>Projetos</h2>
        {projects.map((p) => (
          <ProjectRow key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
