type Skill = {
  name: string;
  devicon: string;
};

type Group = {
  label: string;
  skills: Skill[];
};

const GROUPS: Group[] = [
  {
    label: "Core",
    skills: [
      { name: "HTML5", devicon: "devicon-html5-plain colored" },
      { name: "CSS3", devicon: "devicon-css3-plain colored" },
      { name: "JavaScript", devicon: "devicon-javascript-plain colored" },
      { name: "TypeScript", devicon: "devicon-typescript-plain colored" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: "React", devicon: "devicon-react-original colored" },
      { name: "Tailwind CSS", devicon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    label: "Data Base",
    skills: [{ name: "MySQL", devicon: "devicon-mysql-plain colored" }],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", devicon: "devicon-git-plain colored" },
      { name: "Vite", devicon: "devicon-vitejs-plain colored" },
      { name: "Vercel", devicon: "devicon-vercel-plain colored" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface py-24 md:py-32">
      <div className="container-page">
        <p className="eyebrow mb-3">Skills</p>
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
          Technologies
        </h2>

        <div className="mt-14 flex flex-col gap-12">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-faint">
                {group.label}
              </p>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-6">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-transparent bg-surface-2 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-accent">
                      <i className={`${skill.devicon} text-4xl`} />
                    </div>
                    <span className="text-xs font-medium text-muted">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}