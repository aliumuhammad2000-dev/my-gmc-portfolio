
const skills: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
];

export const dynamic = "force-dynamic";

export default function About() {

  // Generate a timestamp on the server.
  const serverTime = new Date().toISOString();

  return (
    <section className="container section">

      <h1 className="section-title">
        About Me
      </h1>

      <p className="description">
        My name is Aliyu Mohammed, and I am a
        frontend web developer passionate about
        creating beautiful and functional websites.
      </p>

      <p className="description">
        I enjoy working with React, TypeScript,
        and modern web development technologies.
        My goal is to build scalable, responsive,
        and accessible web applications.
      </p>

      <h2 className="subheading">
        Technical Skills
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>


      <p className="server-info">
        Page rendered on the server at: {serverTime}
      </p>

    </section>
  );
}