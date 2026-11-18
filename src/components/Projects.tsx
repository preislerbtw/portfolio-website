import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { useT } from "../i18n/LanguageContext";

export function Projects() {
  const { t } = useT();

  return (
    <section id="projects" className="bg-bg py-24 md:py-32">
      <div className="container-page">
        <p className="eyebrow mb-4 text-center">{t("projects.title")}</p>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}