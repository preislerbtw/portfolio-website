import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-grid bg-bg relative pt-40 pb-24 md:pt-52 md:pb-32"
    >
      <div className="container-page">
        <p className="eyebrow mb-6">Frontend developer · Fortaleza, Brasil</p>

        <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Eu transformo ideias em{" "}
          <span className="text-accent">interfaces</span> que funcionam.
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          Estudante de Ciência da Computação focado em front-end. Construo
          aplicações web limpas e escaláveis com React, TypeScript e
          Tailwind, priorizando estrutura e performance.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Ver projetos
          </a>

          <a
            href="#contato"
            className="rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Entrar em contato
          </a>
        </div>

        <div className="mt-10 flex gap-3">
        <SocialIcon href="https://github.com/preislerbtw" label="GitHub">
          <GithubIcon size={18} />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/jorge-preisler-2b206341b/?isSelfProfile=true"
          label="LinkedIn"
        >
          <LinkedinIcon size={18} />
        </SocialIcon>
        <SocialIcon href="https://x.com/preislerbtw" label="X (Twitter)">
          <XIcon size={18} />
        </SocialIcon>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}