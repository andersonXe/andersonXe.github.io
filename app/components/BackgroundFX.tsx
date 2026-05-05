"use client";

import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const b1 = useRef<HTMLDivElement>(null);
  const b2 = useRef<HTMLDivElement>(null);

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
        <div ref={b1} className="bg-blob bg-blob-1" />
        <div ref={b2} className="bg-blob bg-blob-2" />
      </div>
      <div className="grain" aria-hidden="true" />
      <div className="theme-flash" id="theme-flash" aria-hidden="true" />
    </>
  );
}
