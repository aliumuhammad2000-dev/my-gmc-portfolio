import ProjectCard from "../components/ProjectCards";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="container section">

      <h1 className="section-title">
        My Projects
      </h1>

      <p className="description">
        Here are some projects I have worked on,
        demonstrating my frontend development skills.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </section>
  );
}