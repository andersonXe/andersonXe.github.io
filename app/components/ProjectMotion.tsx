"use client";

import { useEffect } from "react";

// Motion for the projects section. Writes inline transforms / CSS variables
// and classes only; the look lives in Projects.tsx.
export default function ProjectMotion() {
  // Masthead + panel offsets for the scroll-driven animations in Hero.tsx / Projects.tsx.
  // Measured from layout (offsetTop/offsetHeight), so the current animation state doesn't matter.
  useEffect(() => {
    const root = document.documentElement;
    const mast = document.querySelector<HTMLElement>(".mast");
    const inner = document.querySelector<HTMLElement>(".mast-inner");
    const name = document.querySelector<HTMLElement>(".mast-name");
    const text = document.querySelector<HTMLElement>(".mast-text");
    const links = document.querySelector<HTMLElement>(".mast-links");
    const panels = [...document.querySelectorAll<HTMLElement>(".proj")];
    if (!mast || !inner || !name || !text || !links || !panels.length) return;

    const NAV = 60; // fixed navbar height
    const NAME_PX = 30; // compact name size
    const measure = () => {
      const pad = parseFloat(getComputedStyle(mast).paddingTop);
      const top = (el: HTMLElement) => {
        // offset from .mast-inner (positioned) down to el, ignoring transforms
        let y = 0;
        for (let n: HTMLElement | null = el; n && n !== inner; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
        return pad + y;
      };
      const s = NAME_PX / parseFloat(getComputedStyle(name).fontSize);
      const nameTop = top(name);
      const nameTo = NAV + 18;
      const linksTo = nameTo + name.offsetHeight * s + 6;
      const linksBottom = linksTo + links.offsetHeight * 0.93;

      root.style.setProperty("--name-s", s.toFixed(4));
      root.style.setProperty("--name-dy", `${(nameTo - nameTop).toFixed(1)}px`);
      root.style.setProperty("--text-dy", `${((nameTo - nameTop) * 0.8).toFixed(1)}px`);
      root.style.setProperty("--links-dy", `${(linksTo - top(links)).toFixed(1)}px`);
      root.style.setProperty("--stage-top", `${Math.round(linksBottom + 20)}px`);
      root.style.setProperty("--hero-h", `${Math.round(mast.offsetHeight)}px`);
      // read panel positions after the hero height is applied
      const doc = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;
      root.style.setProperty("--t-first", `${Math.round(doc(panels[0]))}px`);
      root.style.setProperty("--t-last", `${Math.round(doc(panels[panels.length - 1]))}px`);
    };

    // hide the navbar's name while the compact masthead is showing it
    const onScroll = () => {
      const y = window.scrollY;
      const first = parseFloat(root.style.getPropertyValue("--t-first")) || Infinity;
      const last = parseFloat(root.style.getPropertyValue("--t-last")) || Infinity;
      root.classList.toggle("mast-compact", y > first * 0.6 && y < last + window.innerHeight * 0.6);
    };

    measure();
    onScroll();
    document.fonts?.ready.then(() => {
      measure();
      onScroll();
    });
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("mast-compact");
    };
  }, []);

  // Card hover: tilt toward the cursor in 3D (eased), light follows the cursor
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = [...document.querySelectorAll<HTMLElement>(".proj-img")];
    // x/y: current tilt, tx/ty: target; h: hover amount (0…1), th: its target
    const state = new Map(cards.map((el) => [el, { x: 0, y: 0, tx: 0, ty: 0, h: 0, th: 0 }]));
    let raf = 0;
    let last = 0;

    const tick = (now: number) => {
      raf = 0;
      // frame-rate independent easing; slower on the way back to rest
      const dt = Math.min(64, last ? now - last : 16.7);
      last = now;
      let moving = false;
      for (const [el, s] of state) {
        const k = 1 - Math.pow(1 - (s.th ? 0.12 : 0.06), dt / 16.7);
        s.x += (s.tx - s.x) * k;
        s.y += (s.ty - s.y) * k;
        s.h += (s.th - s.h) * k;
        const settled = Math.abs(s.tx - s.x) < 0.0005 && Math.abs(s.ty - s.y) < 0.0005 && Math.abs(s.th - s.h) < 0.0005;
        if (settled && !s.th) {
          el.style.transform = "";
          continue;
        }
        moving = true;
        el.style.transform =
          `rotateX(${(-s.y * 13).toFixed(2)}deg) rotateY(${(s.x * 15).toFixed(2)}deg) ` +
          `translate3d(${(s.x * 8).toFixed(1)}px, ${(s.y * 8).toFixed(1)}px, 0) scale(${(1 + 0.02 * s.h).toFixed(4)})`;
      }
      if (moving) raf = requestAnimationFrame(tick);
      else last = 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const s = state.get(el)!;
      // -0.5 … 0.5 from the card's centre
      s.tx = (e.clientX - r.left) / r.width - 0.5;
      s.ty = (e.clientY - r.top) / r.height - 0.5;
      s.th = 1;
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
      kick();
    };
    const onLeave = (e: PointerEvent) => {
      const s = state.get(e.currentTarget as HTMLElement)!;
      s.tx = 0;
      s.ty = 0;
      s.th = 0;
      kick();
    };

    cards.forEach((el) => {
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
    });
    return () => {
      cards.forEach((el) => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  // Section swap: one gesture = one project. While the projects are on screen,
  // wheel / keyboard steps glide from panel to panel (CSS scroll-snap made short
  // gestures bounce back). Entering from the hero glides to the first project;
  // leaving the last one is free scrolling, so it scrolls away to the footer.
  useEffect(() => {
    const panels = [...document.querySelectorAll<HTMLElement>(".proj")];
    const dots = [...document.querySelectorAll<HTMLAnchorElement>(".proj-dots a")];
    const dotsWrap = document.querySelector<HTMLElement>(".proj-dots");
    if (!panels.length) return;

    // Same conditions as the pinned layout in Projects.tsx
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference) and (min-width: 901px)");
    const supported = CSS.supports("animation-timeline: view()");
    const active = () => supported && mq.matches;

    const tops = () => panels.map((p) => p.getBoundingClientRect().top + window.scrollY);
    const near = (a: number, b: number) => Math.abs(a - b) < 2;

    // --- smooth glide ---
    let anim = 0;
    let animating = false;
    let glideEnd = 0;
    let lastWheel = 0;
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const glide = (to: number) => {
      cancelAnimationFrame(anim);
      const from = window.scrollY;
      const dist = to - from;
      if (Math.abs(dist) < 1) return;
      const dur = Math.min(1100, 600 + Math.abs(dist) * 0.25);
      const t0 = performance.now();
      animating = true;
      const step = (now: number) => {
        const t = Math.min(1, (now - t0) / dur);
        window.scrollTo({ top: from + dist * ease(t), behavior: "instant" });
        if (t < 1) {
          anim = requestAnimationFrame(step);
        } else {
          animating = false;
          glideEnd = performance.now();
        }
      };
      anim = requestAnimationFrame(step);
    };

    // Where a step in direction dir should go from here; null = let the page scroll
    const target = (dir: number): number | null => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const t = tops();
      const first = t[0];
      const last = t[t.length - 1];
      if (dir > 0) {
        if (y < first - 1) return first - y < vh ? first : null; // hero -> first project
        if (y >= last - 1) return null; // on/after the last: scroll freely to the footer
        return t.find((v) => v > y + 1) ?? null; // next project
      }
      if (y > last + 1) return y - last < vh ? last : null; // coming back up -> last project
      if (y <= first + 1) return null; // on/above the first: scroll freely to the top
      return [...t].reverse().find((v) => v < y - 1) ?? null; // previous project
    };

    // between the bottom of the hero and just past the last project
    const inZone = () => {
      const t = tops();
      const y = window.scrollY;
      return y > t[0] - window.innerHeight && y < t[t.length - 1] + window.innerHeight;
    };

    const onWheel = (e: WheelEvent) => {
      if (!active() || e.ctrlKey || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      const now = performance.now();
      const gap = now - lastWheel;
      lastWheel = now;
      // swallow the rest of the gesture (and trackpad inertia) while / right after gliding
      if (animating || (gap < 160 && now - glideEnd < 600)) {
        if (inZone()) e.preventDefault();
        return;
      }
      if (Math.abs(e.deltaY) < 2) return;
      const to = target(Math.sign(e.deltaY));
      if (to === null) return;
      e.preventDefault();
      glide(to);
    };

    const onKey = (e: KeyboardEvent) => {
      if (!active() || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      if ((e.target as HTMLElement).closest("input, textarea, select, [contenteditable]")) return;
      const down = e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey);
      const up = e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey);
      if (!down && !up) return;
      if (animating) {
        if (inZone()) e.preventDefault();
        return;
      }
      const to = target(down ? 1 : -1);
      if (to === null) return;
      e.preventDefault();
      glide(to);
    };

    // Scrollbar drags / touch: a scroll that comes to rest between two projects settles on the nearer one
    let settleTimer = 0;
    const settle = () => {
      if (!active() || animating) return;
      const y = window.scrollY;
      const t = tops();
      if (y <= t[0] + 1 || y >= t[t.length - 1] - 1 || t.some((v) => near(v, y))) return;
      glide(t.reduce((a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a)));
    };

    // Dots glide instead of jumping
    const onDot = (e: MouseEvent) => {
      if (!active()) return;
      e.preventDefault();
      glide(tops()[dots.indexOf(e.currentTarget as HTMLAnchorElement)]);
    };

    // Dots visibility and current project
    let raf = 0;
    let current = -1;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const first = panels[0].getBoundingClientRect();
      const last = panels[panels.length - 1].getBoundingClientRect();
      dotsWrap?.classList.toggle("on", first.top < vh * 0.5 && last.bottom > vh * 0.5);
      let best = 0;
      let bestDist = Infinity;
      panels.forEach((el, i) => {
        const dist = Math.abs(el.getBoundingClientRect().top);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      if (best !== current) {
        current = best;
        dots.forEach((a, i) => (i === best ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
      clearTimeout(settleTimer);
      if (!animating) settleTimer = window.setTimeout(settle, 220);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    dots.forEach((a) => a.addEventListener("click", onDot));
    update();
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      dots.forEach((a) => a.removeEventListener("click", onDot));
      cancelAnimationFrame(raf);
      cancelAnimationFrame(anim);
      clearTimeout(settleTimer);
    };
  }, []);

  return null;
}
