import Image from "next/image";

import styles from "./About.module.css";

const capabilities = [
  "Frontend development",
  "Backend development",
  "E-commerce",
  "Responsive design",
  "REST APIs",
  "Interactive 3D",
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Laravel",
  "PHP",
  "Three.js",
  "MySQL",
  "Git",
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <p className="eyebrow">About me</p>

            <h2>
              Developer by craft.
              <br />
              Founder by mindset.
            </h2>
          </div>

          <div className={styles.photo}>
            <Image
              src="/images/hussein-karaki.png"
              alt="Hussein Karaki, web developer and founder of AhlaWeb"
              fill
              sizes="(max-width: 800px) 100vw, 500px"
              className={styles.photoImage}
            />
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.lead}>
            I&apos;m Hussein Karaki, a web developer focused on creating
            digital products that are useful, distinctive and built to last.
          </p>

          <p>
            As the founder of AhlaWeb, I work directly with businesses to
            understand their goals and transform them into polished digital
            experiences.
          </p>

          <p>
            My work ranges from professional business websites and e-commerce
            platforms to custom web applications and interactive 3D
            experiences.
          </p>

          <p>
            I enjoy working across the entire development process—from shaping
            the initial idea and user interface to building the backend,
            improving performance and launching the finished product.
          </p>

          <div className={styles.details}>
            <div className={styles.detailGroup}>
              <h3>What I do</h3>

              <ul>
                {capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>

            <div className={styles.detailGroup}>
              <h3>Technologies</h3>

              <ul>
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>

            <div className={styles.detailGroup}>
              <h3>Currently</h3>

              <p>
                Building websites and digital products through{" "}
                <a
                  href="https://ahlaweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AhlaWeb ↗
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}