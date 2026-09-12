import styles from "./Navbar.module.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Main navigation">
        <a href="#" className={styles.logo} aria-label="Hussein Karaki home">
          Hussein Karaki
        </a>

        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className={styles.contact}>
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}