import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="bg-bg py-24 md:py-32">
      <div className="container-page">
        <p className="eyebrow mb-4 text-center">Projects</p>
        {/* <h2 className="font-display mx-auto max-w-xl text-center text-4xl font-semibold leading-tight md:text-5xl">
          O que eu construí.
        </h2> */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}