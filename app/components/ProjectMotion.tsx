"use client";

import { useEffect } from "react";

// Motion for project screenshots: gentle scroll parallax and a highlight that
// follows the cursor. Writes CSS variables only; the look lives in Projects.tsx.
export default function ProjectMotion() {
  useEffect(() => {
    const frames = [...document.querySelectorAll<HTMLElement>(".proj-img")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const parallax = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of frames) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        // -1 when the frame enters at the bottom, +1 when it leaves at the top
        const p = (vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2);
        el.style.setProperty("--py", `${(p * -14).toFixed(2)}px`);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(parallax);
    };

    const onMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    frames.forEach((el) => el.addEventListener("pointermove", onMove));
    if (!reduce) {
      window.addEventListener("scroll", onScroll, { passive: true });
      parallax();
    }
    return () => {
      frames.forEach((el) => el.removeEventListener("pointermove", onMove));
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
