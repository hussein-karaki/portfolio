import { ArrowUpRight } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Fast, responsive and professional websites designed to establish trust and turn visitors into customers.",
    technologies: "Design · Development · SEO",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Complete online stores with product management, customer accounts, ordering and reliable business workflows.",
    technologies: "Laravel · Payments · Management",
  },
  {
    number: "03",
    title: "Custom Web Applications",
    description:
      "Purpose-built platforms and internal systems developed around the specific needs of a product or business.",
    technologies: "React · Laravel · REST APIs",
  },
  {
    number: "04",
    title: "Interactive Experiences",
    description:
      "Distinctive digital experiences combining animation, creative development and interactive 3D environments.",
    technologies: "Three.js · Motion · WebGL",
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.introduction}>
          <p className="eyebrow">Services</p>

          <h2>How I can help.</h2>

          <p>
            From the first idea to the final launch, I create focused digital
            solutions shaped around real business goals.
          </p>
        </div>

        <div className={styles.list}>
          {services.map((service) => (
            <article className={styles.service} key={service.number}>
              <span className={styles.number}>{service.number}</span>

              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className={styles.technologies}>
                  {service.technologies}
                </span>
              </div>

              <ArrowUpRight
                className={styles.icon}
                size={25}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}