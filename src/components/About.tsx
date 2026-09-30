export function About() {
  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="eyebrow text-5xl mb-4">About Me</h1>
          <p className="mt-4 text-3xl leading-relaxed text-muted">
            I am a <strong>Computer Science</strong> student, focused on
            building clean, scalable, and modern web applications. I value
            structure, performance, and long-term maintainability over
            fads.
          </p>
          <p className="mt-4 text-3xl leading-relaxed text-muted">
            Currently honing my skills through personal projects, coding practice, 
            and studying modern front-end tools and frameworks.
          </p>
        </div>
      </div>
    </section>
  );
}