import Image from "next/image";
import type { Project } from "../data/projects";


interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="project-card">

      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="project-image"
      />

      <div className="project-content">

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="technologies">
          {project.technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View on GitHub →
        </a>

      </div>

    </article>
  );
}