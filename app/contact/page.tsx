export default function Contact() {
  return (
    <section className="container section">

      <h1 className="section-title">
        Contact Me
      </h1>

      <p className="description">
        Interested in working together?
        Feel free to reach out through
        any of the platforms below.
      </p>

      <div className="contact-links">

        <a
          href="mailto:aliumuhammad2000@gmail.com"
          className="contact-card"
        >
          Email Me
        </a>

        <a
          href="https://github.com/aliumuhammad2000-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
}