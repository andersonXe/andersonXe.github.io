import type { ReactNode } from "react";

const WHATSAPP_LINK =
  "https://wa.me/5531991910629?text=Ol%C3%A1%2C%20Anderson%21%20Quero%20uma%20landing%20page.";

function WhatsAppButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-white transition-opacity hover:opacity-85 ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L.057 23.882l6.197-1.448A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.886 9.886 0 0 1-5.031-1.375l-.36-.214-3.733.872.93-3.618-.235-.372A9.869 9.869 0 0 1 2.106 12C2.106 6.533 6.533 2.106 12 2.106S21.894 6.533 21.894 12 17.467 21.894 12 21.894z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            Anderson<span className="text-accent">.</span>
          </span>
          <WhatsAppButton className="py-2 px-5 text-sm">
            Fale comigo
          </WhatsAppButton>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm text-accent">
          Entrega em menos de 1 semana
        </span>
        <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Sua presença online que{" "}
          <span className="text-accent">converte de verdade</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Landing pages profissionais para pequenos negócios, autônomos e
          profissionais que querem crescer — com suporte de 1 ano incluso.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <WhatsAppButton>Quero minha landing page</WhatsAppButton>
          <a
            href="#como-funciona"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            Como funciona →
          </a>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Por que escolher a <span className="text-accent">Anderson Martins</span>?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Entrega em menos de 1 semana",
                desc: "Seu site no ar rapidamente. Sem enrolação, sem espera de meses.",
              },
              {
                icon: "🛡️",
                title: "Suporte de 1 ano incluso",
                desc: "Texto, imagem, ajuste de cor — qualquer mudança está coberta sem custo extra.",
              },
              {
                icon: "📈",
                title: "Foco em conversão",
                desc: "Cada elemento é pensado para transformar visitantes em clientes.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/5 bg-surface p-8 transition-colors hover:border-accent/20"
              >
                <div className="mb-4 text-4xl">{icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Como funciona
          </h2>
          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Me conta sobre o seu negócio",
                desc: "Uma conversa rápida no WhatsApp para entender o que você precisa e qual é o seu público.",
              },
              {
                step: "02",
                title: "Crio sua landing page",
                desc: "Desenvolvo a página com design profissional, focado em conversão e adaptado à identidade do seu negócio.",
              },
              {
                step: "03",
                title: "Publicamos e você vende",
                desc: "Seu site entra no ar em menos de uma semana, e você conta com suporte por 1 ano inteiro.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6">
                <div className="flex-shrink-0 text-3xl font-bold text-accent/40">
                  {step}
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">{title}</h3>
                  <p className="text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl rounded-3xl border border-accent/20 bg-surface px-8 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Pronto para ter sua página no ar?
          </h2>
          <p className="mb-8 text-muted">
            Fale comigo agora e em menos de uma semana seu negócio terá uma
            presença online profissional.
          </p>
          <WhatsAppButton>Falar no WhatsApp agora</WhatsAppButton>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Anderson Martins — Todos os direitos reservados.
      </footer>
    </div>
  );
}
