"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as "dark" | "light" | null;
      if (saved) {
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch {}
  }, []);

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const next = theme === "dark" ? "light" : "dark";
    const flash = document.getElementById("theme-flash");
    const btn = e.currentTarget;
    const r = btn.getBoundingClientRect();

    // Theme changes immediately; flash bg auto-resolves to new --color-bg
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);

    if (!flash) return;
    flash.style.setProperty("--ox", `${r.left + r.width / 2}px`);
    flash.style.setProperty("--oy", `${r.top + r.height / 2}px`);
    flash.classList.remove("run");
    void flash.offsetWidth;
    flash.classList.add("run");
    const onEnd = () => {
      flash.classList.remove("run");
      flash.removeEventListener("animationend", onEnd);
    };
    flash.addEventListener("animationend", onEnd);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "1px solid var(--color-line)",
        background: "var(--color-surface)",
        color: "var(--color-text)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color var(--transition)",
        flexShrink: 0,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--color-accent)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--color-line)")
      }
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
