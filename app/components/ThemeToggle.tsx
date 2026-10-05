"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

// The <html data-theme> attribute (set pre-paint in layout) is the source of truth.
function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const getTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, (): Theme => "dark");

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}

    // Radial reveal from the button; the flash layer's bg already resolves to the new theme
    const flash = document.getElementById("theme-flash");
    if (!flash) return;
    const r = e.currentTarget.getBoundingClientRect();
    flash.style.setProperty("--ox", `${r.left + r.width / 2}px`);
    flash.style.setProperty("--oy", `${r.top + r.height / 2}px`);
    flash.classList.remove("run");
    void flash.offsetWidth;
    flash.classList.add("run");
    flash.addEventListener("animationend", () => flash.classList.remove("run"), { once: true });
  }

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      style={{
        width: 32,
        height: 32,
        borderRadius: 6,
        border: "1px solid var(--color-line)",
        background: "transparent",
        color: "var(--color-text-2)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}
