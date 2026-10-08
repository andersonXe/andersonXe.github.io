"use client";

import { useEffect, useRef } from "react";

// The glows are very faint (alpha ~0.07–0.2). Drawn as a CSS gradient — or as
// a translucent canvas, which stores premultiplied 8-bit colour — that leaves
// only a dozen or so levels between centre and edge, and they show up as rings.
// So each glow is painted as an *opaque* layer holding the exact change it
// makes to the background, dithered per pixel, and blended with plus-lighter
// (glows that brighten) or multiply (glows that darken). Every screen pixel
// then gets its final value plus noise, and the falloff stays smooth.
const SIZE = 768; // canvas resolution; CSS scales it to the blob size

// The CSS pipeline may hand us #rrggbbaa, rgb() or rgba(); letting the canvas
// normalise it gives either "#rrggbb" (opaque) or "rgba(r, g, b, a)".
function parseColor(ctx: CanvasRenderingContext2D, value: string): [number, number, number, number] {
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.fillStyle = value.trim();
  const v = String(ctx.fillStyle);
  if (v.startsWith("#")) {
    return [parseInt(v.slice(1, 3), 16), parseInt(v.slice(3, 5), 16), parseInt(v.slice(5, 7), 16), 1];
  }
  const [r, g, b, a = "1"] = (v.match(/\(([^)]+)\)/)?.[1] ?? "0,0,0,0").split(",");
  return [Number(r), Number(g), Number(b), Number(a)];
}

function paintGlow(canvas: HTMLCanvasElement, color: string, background: string) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const [r, g, b, a] = parseColor(ctx, color);
  const bg = parseColor(ctx, background);
  const glow = [r, g, b];
  // Does this glow lighten or darken the page?
  const lighten = r + g + b >= bg[0] + bg[1] + bg[2];
  canvas.style.mixBlendMode = lighten ? "plus-lighter" : "multiply";

  const img = ctx.createImageData(SIZE, SIZE);
  const px = img.data;
  const half = SIZE / 2;
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const dx = (x + 0.5 - half) / half;
      const dy = (y + 0.5 - half) / half;
      const d = Math.sqrt(dx * dx + dy * dy);
      // Gaussian-like falloff, eased to exactly zero at the edge
      const t = Math.min(1, Math.max(0, (d - 0.72) / 0.28));
      const edge = 1 - t * t * (3 - 2 * t);
      const k = d >= 1 ? 0 : a * Math.exp(-(d * d) / 0.17) * edge;
      const i = (y * SIZE + x) * 4;
      for (let c = 0; c < 3; c++) {
        // target = bg + (glow - bg) * k, expressed as what the blend mode needs
        const v = lighten
          ? (glow[c] - bg[c]) * k // added to the page
          : 255 * (1 + (glow[c] / Math.max(1, bg[c]) - 1) * k); // multiplied into the page
        // triangular dither of ±1 level
        const n = Math.random() + Math.random() - 1;
        px[i + c] = Math.max(0, Math.min(255, Math.round(v + (k > 0 ? n : 0))));
      }
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

export default function BackgroundFX() {
  const b1 = useRef<HTMLCanvasElement>(null);
  const b2 = useRef<HTMLCanvasElement>(null);

  // Paint the glows, and repaint when the theme (and so the colours) changes
  useEffect(() => {
    const paint = () => {
      const css = getComputedStyle(document.documentElement);
      const bg = css.getPropertyValue("--color-bg");
      if (b1.current) paintGlow(b1.current, css.getPropertyValue("--blob-1"), bg);
      if (b2.current) paintGlow(b2.current, css.getPropertyValue("--blob-2"), bg);
    };
    paint();
    const mo = new MutationObserver(paint);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const blob1 = b1.current;
    const blob2 = b2.current;
    if (!blob1 || !blob2) return;

    const onScroll = () => {
      const s = window.scrollY;
      blob1.style.setProperty("--sx", `${s * 0.1}px`);
      blob1.style.setProperty("--sy", `${s * 0.15}px`);
      blob2.style.setProperty("--sx", `${-s * 0.06}px`);
      blob2.style.setProperty("--sy", `${-s * 0.09}px`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-reveal: observes all [data-reveal] elements page-wide
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="bg-fx" aria-hidden="true">
        <canvas ref={b1} width={SIZE} height={SIZE} className="bg-blob bg-blob-1" />
        <canvas ref={b2} width={SIZE} height={SIZE} className="bg-blob bg-blob-2" />
      </div>
      <div className="grain" aria-hidden="true" />
      <div className="theme-flash" id="theme-flash" aria-hidden="true" />
    </>
  );
}
