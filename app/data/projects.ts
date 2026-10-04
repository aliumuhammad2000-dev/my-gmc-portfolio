
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
}


export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A responsive online shopping website with product listings, cart functionality, and checkout.",
    image: "/images/my-store.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/aliumuhammad2000-dev/my-store",
  },
  {
    id: 2,
    title: "Photobooth",
    description:
      "A job tracking application for managing and monitoring employee activities.",
    image: "/images/my-tracker.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/aliumuhammad2000-dev/thundey-traker",
  },
];