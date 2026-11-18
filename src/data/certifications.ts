import certificateFrontend from "../assets/certificate-frontend.png";

export type Certification = {
  slug: string;
  title: string;
  institution: string;
  date: string;
  hours?: number;
  skills?: string[];
  image?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    slug: "frontend-course",
    title: "Front-end Development",
    institution: "Udemy",
    date: "2026",
    hours: 120,
    skills: ["HTML", "CSS", "JavaScript", "Typescript", "React"],
    image: certificateFrontend,
    credentialUrl: "/certificate-frontend.pdf",
  },
];