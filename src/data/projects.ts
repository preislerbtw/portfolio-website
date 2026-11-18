import type { Lang } from "../i18n/translations";

// import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
// import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

export type Project = {
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  // {
  //   slug: "flight-tracker",
  //   title: "Flight Tracker",
  //   description:
  //     "Real-time flight tracker with an interactive map, airport weather, and aircraft information.",
  //   stack: ["React", "JavaScript", "APIs", "CSS"],
  //   image: project1,
  //   githubUrl: "https://github.com/preislerbtw/flight-tracker",
  // },
  {
    slug: "web-photobooth",
    title: { en: "Web Photobooth", pt: "Cabine Fotográfica Web" },
    description: {
      en: "Interactive photo booth featuring real-time webcam capture, multiple composition layouts, and an adjustable timer.",
      pt: "Cabine fotográfica interativa com captura pela webcam em tempo real, diferentes opções de composição e temporizador ajustável.",
    },
    stack: ["React", "JavaScript", "CSS"],
    image: project2,
    githubUrl: "https://github.com/preislerbtw/web-photobooth",
  },
  {
    slug: "music-player",
    title: { en: "Music Player", pt: "Player de Música" },
    description: {
      en: "A Spotify-style desktop music player featuring local folder import, library organization, and playback via YouTube API integration.",
      pt: "Player de música para desktop inspirado no Spotify, com importação de pastas locais, organização da biblioteca e reprodução integrada à API do YouTube.",
    },
    stack: ["Electron", "React", "TypeScript", "Python", "Tailwind CSS"],
    image: project3,
    githubUrl: "https://github.com/preislerbtw/music-player",
  },
  // {
  //   slug: "car-landing-page",
  //   title: "Car Landing Page",
  //   description: "A modern car landing page featuring a sleek design, responsive layout, smooth animations, and interactive sections focused on showcasing the vehicle's performance and features.",
  //   stack: ["TypeScript", "React", "Tailwind CSS"],
  //   image: project4,
  //   githubUrl: "https://github.com/preislerbtw/car-landing-page",
  // },
  {
    slug: "nike",
    title: { en: "Nike Landing Page", pt: "Página da Nike" },
    description: {
      en: "A modern Nike landing page showcasing the latest sneakers, featuring a clean and responsive design, bold typography, and an immersive product-focused layout.",
      pt: "Página moderna da Nike que apresenta os tênis mais recentes, com design limpo e responsivo, tipografia marcante e foco imersivo nos produtos.",
    },
    stack: ["React", "JavaScript", "Tailwind CSS"],
    image: project5,
    githubUrl: "https://github.com/preislerbtw/nike-landing-page"
  }
];

