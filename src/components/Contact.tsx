import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MessageCircle,
} from "lucide-react";

import styles from "./Contact.module.css";

const contactLinks = [
  {
    label: "Email",
    value: "hussseinkaraki2@gmail.com",
    href: "mailto:hussseinkaraki2@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+961 81 988 270",
    href: "https://wa.me/96181988270",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "hussein-karaki",
    href: "https://github.com/hussein-karaki",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "Hussein Karaki",
    href: "https://www.linkedin.com/in/husssein-karaki-4241423ba/",
    icon: BriefcaseBusiness,
  },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className={`section ${styles.contact}`}>
        <div className="container">
          <p className="eyebrow">Contact</p>

          <div className={styles.heading}>
            <h2>
              Have an idea?
              <br />
              Let&apos;s build it.
            </h2>

            <p>
              I&apos;m open to discussing websites, custom applications,
              e-commerce platforms and interesting digital projects.
            </p>
          </div>

          <a
            href="mailto:hussseinkaraki2@gmail.com"
            className={styles.emailButton}
          >
            Start a conversation
            <ArrowUpRight size={22} strokeWidth={1.7} />
          </a>

          <div className={styles.links}>
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              const isExternal = contact.href.startsWith("http");

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={styles.contactLink}
                >
                  <span className={styles.icon}>
                    <Icon size={20} strokeWidth={1.7} />
                  </span>

                  <span className={styles.linkText}>
                    <span className={styles.label}>{contact.label}</span>
                    <span className={styles.value}>{contact.value}</span>
                  </span>

                  <ArrowUpRight
                    className={styles.arrow}
                    size={19}
                    strokeWidth={1.7}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <p>© {new Date().getFullYear()} Hussein Karaki</p>

          <p>
            Web Developer &amp; Co-founder of{" "}
            <a
              href="https://ahlaweb.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              AhlaWeb
            </a>
          </p>

          <a href="#" className={styles.backToTop}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}