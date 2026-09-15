import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  year: string;
  status: "Concluído" | "Em progresso";
  image: string;
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "flight-tracker",
    title: "Flight Tracker",
    description:
      "Rastreador de voos em tempo real com mapa interativo, clima do aeroporto e informações da aeronave.",
    stack: ["React", "JavaScript", "Leaflet", "APIs"],
    year: "2025",
    status: "Concluído",
    image: project1,
    githubUrl: "https://github.com/preislerbtw/flight-tracker",
  },
  {
    slug: "web-photobooth",
    title: "Web Photobooth",
    description:
      "Fotobooth interativo com captura em tempo real pela webcam, múltiplos layouts de montagem e timer ajustável.",
    stack: ["React", "JavaScript", "CSS"],
    year: "2025",
    status: "Concluído",
    image: project2,
    githubUrl: "https://github.com/preislerbtw/web-photobooth",
  },
  {
    slug: "music-player",
    title: "Music Player",
    description:
      "Player de música desktop no estilo Spotify, com importação de pastas locais, organização por biblioteca e reprodução via integração com a API do YouTube.",
    stack: ["Electron", "React", "Python"],
    year: "2024",
    status: "Concluído",
    image: project3,
    githubUrl: "https://github.com/preislerbtw/music-player",
  },
];
