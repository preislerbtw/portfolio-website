export type Lang = "pt" | "en";

export const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "language.switch": "Switch to Portuguese",
    "theme.toggle": "Toggle theme",

    "hero.eyebrow": "Computer Science - Web Developer",
    "hero.title":
      "Computer Science student passionate about web development and building interfaces for the web.",
    "hero.desc":
      "Web Developer focused on building clean, scalable, and modern web applications. I value structure, performance, and long-term maintainability over hype. I'm currently improving my skills through personal projects, coding practice, and studying modern tools and frameworks.",
    "hero.projects": "Show Projects",
    "hero.contact": "Get in Touch",
    "hero.resume": "Resume",

    "about.title": "About Me",
    "about.intro":
      "I’m a Computer Science student focused on Frontend Development, passionate about building modern, responsive, and intuitive web experiences.",
    "about.current":
      "Currently, I’m expanding my knowledge of Backend Development to better understand how web applications work behind the scenes and build more complete solutions. I’m also studying English at UFC Cultura Britânica, continuously improving my communication skills and broadening my horizons as a developer.",
    "about.languages": "Languages",
    "about.portuguese": "Portuguese",
    "about.native": "Native",
    "about.english": "English",
    "about.englishLevel": "UFC Cultura Britânica · Currently in 4th semester",

    "skills.title": "Skills",
    "skills.technologies": "Technologies",
    "skills.frontend": "Front End",
    "skills.backend": "Back End - Learning",
    "skills.database": "Database",
    "skills.tools": "Tools",

    "certifications.title": "Certifications",
    "certifications.view": "View certificate",

    "projects.title": "Projects",
    "projects.preview": "Preview of the {title} project",
    "projects.view": "View project",

    "contact.title": "Contact",
    "contact.heading": "Get in Touch.",
    "contact.description":
      "Open to front-end internship opportunities and collaborative projects. Get in touch.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.messagePlaceholder": "What would you like to talk about?",
    "contact.send": "Send Message",
    "contact.sent": "Message sent. Thank you for reaching out!",

    "footer.location": "Ceará, Brazil",
    "meta.title": "Jorge Preisler | Web Developer",
    "meta.description":
      "Jorge Preisler — Frontend Developer. Portfolio of projects built with React, TypeScript, and Tailwind CSS.",
  },
  pt: {
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.openMenu": "Abrir menu",
    "nav.closeMenu": "Fechar menu",
    "language.switch": "Mudar para inglês",
    "theme.toggle": "Alternar tema",

    "hero.eyebrow": "Ciência da Computação - Desenvolvedor Web",
    "hero.title":
      "Estudante de Ciência da Computação apaixonado por desenvolvimento web e por criar interfaces para a web.",
    "hero.desc":
      "Desenvolvedor Web focado em construir aplicações web limpas, escaláveis e modernas. Valorizo estrutura, performance e manutenção a longo prazo acima de modismos. Atualmente aprimoro minhas habilidades com projetos pessoais, prática de código e estudo de ferramentas e frameworks modernos.",
    "hero.projects": "Ver Projetos",
    "hero.contact": "Fale Comigo",
    "hero.resume": "Currículo",

    "about.title": "Sobre Mim",
    "about.intro":
      "Sou estudante de Ciência da Computação com foco em Desenvolvimento Front-end e apaixonado por criar experiências web modernas, responsivas e intuitivas.",
    "about.current":
      "Atualmente, estou ampliando meus conhecimentos em Desenvolvimento Back-end para entender melhor como as aplicações web funcionam nos bastidores e criar soluções mais completas. Também estudo inglês na UFC Cultura Britânica, aprimorando continuamente minhas habilidades de comunicação e ampliando meus horizontes como desenvolvedor.",
    "about.languages": "Idiomas",
    "about.portuguese": "Português",
    "about.native": "Nativo",
    "about.english": "Inglês",
    "about.englishLevel": "UFC Cultura Britânica · Atualmente no 4º semestre",

    "skills.title": "Habilidades",
    "skills.technologies": "Tecnologias",
    "skills.frontend": "Front-end",
    "skills.backend": "Back-end - Em aprendizado",
    "skills.database": "Banco de Dados",
    "skills.tools": "Ferramentas",

    "certifications.title": "Certificações",
    "certifications.view": "Ver certificado",

    "projects.title": "Projetos",
    "projects.preview": "Prévia do projeto {title}",
    "projects.view": "Ver projeto",

    "contact.title": "Contato",
    "contact.heading": "Vamos conversar.",
    "contact.description":
      "Estou aberto a oportunidades de estágio em front-end e projetos colaborativos. Entre em contato.",
    "contact.name": "Nome",
    "contact.namePlaceholder": "Seu nome",
    "contact.email": "E-mail",
    "contact.message": "Mensagem",
    "contact.messagePlaceholder": "Sobre o que gostaria de conversar?",
    "contact.send": "Enviar mensagem",
    "contact.sent": "Mensagem enviada. Obrigado por entrar em contato!",

    "footer.location": "Ceará, Brasil",
    "meta.title": "Jorge Preisler | Desenvolvedor Web",
    "meta.description":
      "Jorge Preisler — Desenvolvedor Front-end. Portfólio de projetos em React, TypeScript e Tailwind CSS.",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];