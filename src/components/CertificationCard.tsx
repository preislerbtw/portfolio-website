import { ArrowUpRight, Award } from "lucide-react";
import type { Certification } from "../data/certifications";

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface text-left transition-colors hover:border-accent-line">
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-surface-2">
        {cert.image ? (
          <img
            src={cert.image}
            alt={`Certificado: ${cert.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Award size={48} className="text-faint" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        {cert.skills && (
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line-strong px-3 py-1 text-xs font-medium text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-display text-xl font-semibold">{cert.title}</h3>
        <p className="text-sm leading-relaxed text-muted">
          {cert.institution}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
          <p className="text-[11px] uppercase tracking-wide text-faint">
            {cert.date}
            {cert.hours && ` · ${cert.hours}h`}
          </p>

          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              title="Ver certificado"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}