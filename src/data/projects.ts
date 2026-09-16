import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "flight-tracker",
    title: "Flight Tracker",
    description:
      "Real-time flight tracker with an interactive map, airport weather, and aircraft information.",
    stack: ["React", "JavaScript", "APIs", "CSS"],
    image: project1,
    githubUrl: "https://github.com/preislerbtw/flight-tracker",
  },
  {
    slug: "web-photobooth",
    title: "Web Photobooth",
    description:
      "Interactive photo booth featuring real-time webcam capture, multiple composition layouts, and an adjustable timer.",
    stack: ["React", "JavaScript", "CSS"],
    image: project2,
    githubUrl: "https://github.com/preislerbtw/web-photobooth",
  },
  {
    slug: "music-player",
    title: "Music Player",
    description:
      "A Spotify-style desktop music player featuring local folder import, library organization, and playback via YouTube API integration.",
    stack: ["Electron", "React", "JavaScript", "Python"],
    image: project3,
    githubUrl: "https://github.com/preislerbtw/music-player",
  },
  {
    slug: "car-landing-page",
    title: "Car Landing Page",
    description: "A modern car landing page featuring a sleek design, responsive layout, smooth animations, and interactive sections focused on showcasing the vehicle's performance and features.",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    image: project4,
    githubUrl: "https://github.com/preislerbtw/car-landing-page",
  }
];
