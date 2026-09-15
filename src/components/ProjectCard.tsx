import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent-line">
      <div className="aspect-[16/10] overflow-hidden bg-surface-2">
        <img
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line-strong px-3 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-faint">
              {project.year}
            </p>
            <p className="text-sm font-semibold text-accent">
              {project.status}
            </p>
          </div>

          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                title="Ver projeto"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
