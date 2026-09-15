export function About() {
  return (
    <section id="sobre" className="border-t border-line bg-surface">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Sobre mim</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Da ideia ao deploy.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Sou estudante de Ciência da Computação em Fortaleza, focado em
            construir aplicações web limpas, escaláveis e modernas. Valorizo
            estrutura, performance e manutenibilidade a longo prazo mais do
            que modismos.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Atualmente estou aprimorando minhas habilidades através de
            projetos pessoais, prática de código e estudo de ferramentas e
            frameworks modernos do front-end.
          </p>
        </div>
      </div>
    </section>
  );
}