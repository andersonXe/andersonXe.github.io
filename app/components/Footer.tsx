export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-line)", padding: "28px 0", position: "relative", zIndex: 2 }}>
      <div
        className="shell"
        style={{ fontSize: 13, color: "var(--color-muted)" }}
      >
        <span>© {new Date().getFullYear()} Anderson Martins</span>
      </div>
    </footer>
  );
}
