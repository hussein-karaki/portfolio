import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Building ideas into digital experiences.</h2>
          </div>

          <p>
            A growing collection of companies and products I&apos;ve helped
            create. More independent projects will be added as they are
            developed.
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((project, index) => (
            <article className={styles.project} key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visual}
                aria-label={`Visit ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.projectImage}
                />

                <span className={styles.projectNumber}>
                  {project.number}
                </span>

                <span className={styles.openIcon}>
                  <ArrowUpRight size={22} strokeWidth={1.7} />
                </span>
              </a>

              <div className={styles.information}>
                <div className={styles.projectHeading}>
                  <p className={styles.type}>{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.role}>{project.role}</p>
                </div>

                <div className={styles.projectDetails}>
                  <p>{project.description}</p>

                  <div className={styles.categories}>
                    {project.categories.map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Visit website
                    <ArrowUpRight size={17} strokeWidth={1.8} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}