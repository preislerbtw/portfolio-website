import { useT } from "../i18n/LanguageContext";
import type { TranslationKey } from "../i18n/translations";

type Skill = {
  name: string;
  devicon: string;
};

type Group = {
  labelKey: TranslationKey;
  skills: Skill[];
};

const GROUPS: Group[] = [
  {
    labelKey: "skills.frontend",
    skills: [
      { name: "HTML5", devicon: "devicon-html5-plain colored" },
      { name: "CSS3", devicon: "devicon-css3-plain colored" },
      { name: "JavaScript", devicon: "devicon-javascript-plain colored" },
      { name: "TypeScript", devicon: "devicon-typescript-plain colored" },
      { name: "React", devicon: "devicon-react-original colored" },
      { name: "Tailwind CSS", devicon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    labelKey: "skills.backend",
    skills: [
      { name: "Java", devicon: "devicon-java-plain colored" },
      { name: "Spring Boot", devicon: "devicon-spring-original colored" },
      { name: "Node.js", devicon: "devicon-nodejs-plain colored" },
      { name: "Express", devicon: "devicon-express-original" },
    ],
  },
  {
    labelKey: "skills.database",
    skills: [
      { name: "MySQL", devicon: "devicon-mysql-plain colored" },
      { name: "MongoDB", devicon: "devicon-mongodb-plain colored" },
    ],
  },
  {
    labelKey: "skills.tools",
    skills: [
      { name: "Git", devicon: "devicon-git-plain colored" },
      { name: "Vite", devicon: "devicon-vitejs-plain colored" },
      { name: "Vercel", devicon: "devicon-vercel-original" },
      { name: "Postman", devicon: "devicon-postman-plain colored" },
      { name: "Insomnia", devicon: "devicon-insomnia-plain colored" },
      { name: "Docker", devicon: "devicon-docker-plain colored" },
    ],
  },
];

export function Skills() {
  const { t } = useT();

  return (
    <section
      id="skills"
      className="border-y border-line bg-surface py-24 md:py-32"
    >
      <div className="container-page text-center">
        <p className="eyebrow mb-3">{t("skills.title")}</p>
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
          {t("skills.technologies")}
        </h2>

        <div className="mt-14 flex flex-col gap-10">
          {GROUPS.map((group) => (
            <div key={group.labelKey}>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-faint">
                {t(group.labelKey)}
              </p>
              <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/5 px-4 py-2 text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-ink"
                  >
                    <i className={`${skill.devicon} text-base`} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
