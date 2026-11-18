import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-grid bg-bg relative pt-40 pb-24 md:pt-52 md:pb-32"
    >
      <div className="container-page text-center">
        <h1 className="eyebrow mb-6">Computer Science - Web Developer</h1>
        <p className="font-display mx-auto max-w-2xl text-xl font-semibold leading-[1.1] tracking-tight md:text-3xl">
          Computer Science student passionate about web development and building interfaces for the web.
        </p>
        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-accent" />
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
          Web Developer focused on building clean, scalable, and modern web applications.
          I value structure, performance, and long-term maintainability over hype.
          I'm Currently improving my skills through personal projects, coding practice, and studying modern tools and frameworks.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Show Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Resume
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-3">
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