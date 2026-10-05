import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "color-mix(in oklch, var(--color-bg) 70%, transparent)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--color-line)",
      }}
    >
      <style>{`
        .nav-link { color: var(--color-text-2); text-decoration: none; font-size: 14px; transition: color var(--transition); }
        .nav-link:hover { color: var(--color-text); }
        @media (max-width: 520px) { .nav-links { display: none !important; } }
      `}</style>
      <div className="shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <a href="#top" style={{ fontWeight: 600, fontSize: 15, color: "var(--color-text)", textDecoration: "none" }}>
          Anderson Martins
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              marginLeft: 3,
              borderRadius: "50%",
              background: "var(--color-accent)",
              boxShadow: "0 0 12px var(--accent-glow)",
            }}
          />
        </a>
        <nav aria-label="Principal" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div className="nav-links" style={{ display: "flex", gap: 24 }}>
            {links.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
