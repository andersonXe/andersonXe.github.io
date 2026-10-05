import Image from "next/image";
import { projects, type Project } from "../data/projects";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function ProjectRow({ p }: { p: Project }) {
  return (
    <article className="proj" data-reveal>
      {p.image && (
        <figure className="proj-figure">
          <div className="proj-img">
            <Image
              src={`${BASE}${p.image}`}
              alt={`Captura de tela do ${p.name}`}
              fill
              sizes="(max-width: 860px) 100vw, 560px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          {p.imageNote && <figcaption>{p.imageNote}</figcaption>}
        </figure>
      )}

      <div className="proj-body">
        <p className="proj-meta">
          {p.category} · {p.year}
          {p.status !== "no ar" && <> · {p.status}</>}
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
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projetos" style={{ padding: "clamp(32px, 6vh, 64px) 0" }}>
      <style>{`
        .proj {
          display: grid; grid-template-columns: 1.15fr 1fr; gap: 40px; align-items: start;
          padding: 48px 0; border-top: 1px solid var(--color-line);
        }
        .proj-figure { margin: 0; }
        .proj-img {
          position: relative; aspect-ratio: 16 / 10; overflow: hidden;
          border: 1px solid var(--color-line); border-radius: 8px; background: var(--color-surface-2);
        }
        .proj-figure figcaption { margin-top: 8px; font-size: 12px; color: var(--color-muted); }
        .proj-body { display: flex; flex-direction: column; gap: 12px; }
        .proj-meta { font-family: var(--font-geist-mono); font-size: 12px; color: var(--color-muted); }
        .proj h3 { font-size: 26px; line-height: 1.15; letter-spacing: -0.025em; font-weight: 600; }
        .proj-problem { font-size: 16px; line-height: 1.55; color: var(--color-text); }
        .proj-highlights { list-style: none; padding: 0; margin: 4px 0 0; display: flex; flex-direction: column; gap: 6px; }
        .proj-highlights li { position: relative; padding-left: 16px; font-size: 14px; line-height: 1.55; color: var(--color-text-2); }
        .proj-highlights li::before { content: "–"; position: absolute; left: 0; color: var(--color-muted); }
        .proj-links { display: flex; gap: 20px; font-size: 14px; margin-top: 4px; flex-wrap: wrap; }
        @media (max-width: 860px) {
          .proj { grid-template-columns: 1fr; gap: 24px; padding: 40px 0; }
        }
      `}</style>
      <div className="shell">
        <h2 className="section-label">Projetos</h2>
        {projects.map((p) => (
          <ProjectRow key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
