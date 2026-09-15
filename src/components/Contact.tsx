import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" className="border-t border-line bg-bg py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface p-8 text-center md:p-14">
          <p className="eyebrow mb-4">Contato</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Vamos conversar.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Aberto a oportunidades de estágio em front-end e a projetos
            colaborativos. Me chama.
          </p>

          {sent ? (
            <p className="mt-8 text-sm font-semibold text-accent">
              Mensagem enviada. Obrigado pelo contato!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 text-left">
              <Field id="name" label="Nome completo" placeholder="Seu nome" />
              <Field id="email" label="E-mail" type="email" placeholder="voce@email.com" />
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-faint">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Sobre o que você quer falar?"
                  className="w-full resize-none rounded-2xl border border-line-strong bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 self-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-wide text-faint">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-line-strong bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none"
      />
    </div>
  );
}