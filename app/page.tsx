import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero container">


      <div className="hero-content">

        <p className="eyebrow">
          HELLO, My Name is
        </p>

        <h1>
          Aliyu Mohammed
        </h1>

        <h2>
          Frontend Web Developer
        </h2>

        <p className="description">
          I build responsive, user-friendly web
          applications using modern technologies
          such as React, TypeScript, and Next.js.
        </p>

        <div className="hero-buttons">
          <Link href="/projects" className="btn">
            View My Projects
          </Link>

          <Link href="/contact" className="btn-outline">
            Contact Me
          </Link>
        </div>

      </div>

      <div className="hero-image">
        <Image
          src="/images/my-pic.jpg"
          alt="Portrait of Aliyu Mohammed"
          width={400}
          height={450}
          priority
          className="profile-img"
        />
      </div>

    </section>
  );
}