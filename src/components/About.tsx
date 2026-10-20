export function About() {
  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="eyebrow mb-4 text-5xl">About Me</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted md:text-2xl">
            I’m a <strong>Computer Science student</strong> focused on
            Frontend Development, passionate about building modern, responsive,
            and intuitive web experiences. I enjoy turning ideas into functional
            interfaces, with attention to detail, usability, and performance.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-muted md:text-2xl">
            Currently, I’m expanding my knowledge of{" "}
            <strong>Backend Development</strong> to better understand how web
            applications work behind the scenes and build more complete
            solutions. Alongside my technical studies, I’m also studying English
            at <strong>UFC Cultura Britânica</strong>, continuously improving my
            communication skills and broadening my horizons as a developer.
          </p>

          <div className="mt-16">
            <h2 className="eyebrow mb-8 text-3xl">Languages</h2>

            <div className="mx-auto grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl border border-line-strong bg-white/5 p-5 text-left transition-all duration-300 hover:border-accent">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-2xl">
                  🇧🇷
                </div>

                <div>
                  <h3 className="font-semibold text-ink">Portuguese</h3>
                  <p className="mt-1 text-sm text-muted">Native</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-line-strong bg-white/5 p-5 text-left transition-all duration-300 hover:border-accent">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-2xl">
                  🇬🇧
                </div>
                <div>
                  <h3 className="font-semibold text-ink">English</h3>
                  <p className="mt-1 text-sm text-muted">Currently studying</p>
                  <p className="mt-1 text-xs text-muted">
                    UFC Cultura Britânica · 4th semester
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
