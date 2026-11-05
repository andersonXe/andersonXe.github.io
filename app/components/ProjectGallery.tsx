"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/projects";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const AUTOPLAY_MS = 5000;

// Screenshot carousel for one project. The card (.proj-img) keeps the tilt /
// edge-light hover from ProjectMotion; slides crossfade inside it.
export default function ProjectGallery({ p }: { p: Project }) {
  const imgs = p.images;
  const many = imgs.length > 1;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const fig = useRef<HTMLElement>(null);
  const touch = useRef<number | null>(null);

  const go = (n: number) => setI((n + imgs.length) % imgs.length);

  // Only cycle while this project is the one on screen. Watch its panel
  // (.proj), not the card: in the pinned layout every card sits in the same place.
  useEffect(() => {
    if (!many) return;
    const panel = fig.current?.closest(".proj");
    if (!panel) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.6 });
    io.observe(panel);
    return () => io.disconnect();
  }, [many]);

  // Autoplay; restarts after every change, so a manual step gets a full interval
  useEffect(() => {
    if (!many || paused || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % imgs.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [many, paused, inView, i, imgs.length]);

  const slides = imgs.map((img, n) => (
    <Image
      key={img.src}
      src={`${BASE}${img.src}`}
      alt={`${p.name}: ${img.alt}`}
      fill
      sizes="(max-width: 900px) 100vw, 760px"
      className="proj-slide"
      data-on={n === i ? "true" : undefined}
      aria-hidden={n === i ? undefined : true}
      style={{ objectFit: "cover", objectPosition: "top center" }}
    />
  ));

  const note = imgs[i].note;

  return (
    <figure
      ref={fig}
      className="proj-figure"
      data-reveal
      aria-roledescription={many ? "carrossel" : undefined}
      aria-label={many ? `Telas do ${p.name}` : undefined}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="proj-img"
        onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touch.current === null || !many) return;
          const dx = e.changedTouches[0].clientX - touch.current;
          touch.current = null;
          if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
        }}
      >
        {p.live ? (
          <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-shots" aria-label={`Abrir ${p.name}`}>
            {slides}
          </a>
        ) : (
          <div className="proj-shots">{slides}</div>
        )}
        {many && (
          <>
            <button type="button" className="proj-nav proj-prev" aria-label="Tela anterior" onClick={() => go(i - 1)}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3 5 8l5 5" /></svg>
            </button>
            <button type="button" className="proj-nav proj-next" aria-label="Próxima tela" onClick={() => go(i + 1)}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 3 5 5-5 5" /></svg>
            </button>
          </>
        )}
        <span className="proj-edge" aria-hidden="true" />
      </div>

      {(many || note) && (
        <figcaption>
          {many && (
            <span className="proj-pips">
              {imgs.map((img, n) => (
                <button
                  key={img.src}
                  type="button"
                  aria-label={img.alt}
                  aria-current={n === i ? "true" : undefined}
                  onClick={() => go(n)}
                />
              ))}
            </span>
          )}
          <span className="proj-cap">
            {many && imgs[i].alt}
            {many && note && " · "}
            {note}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
