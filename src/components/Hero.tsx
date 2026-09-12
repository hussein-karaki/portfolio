"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.status}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.statusDot} />

          <span>Based in Lebanon · Available for selected projects</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: "easeOut",
          }}
        >
          I build digital experiences that help{" "}
          <span>businesses stand out.</span>
        </motion.h1>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.18,
            ease: "easeOut",
          }}
        >
          <p className={styles.introduction}>
            I&apos;m Hussein Karaki, a web developer and co-founder of{" "}
            <a
              href="https://ahlaweb.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              AhlaWeb
            </a>
            . I create modern websites, e-commerce platforms and interactive
            web experiences.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryButton}>
              View my work
              <ArrowDownRight size={18} strokeWidth={1.8} />
            </a>

            <a href="#contact" className={styles.secondaryButton}>
              Contact me
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </a>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <span>Web development</span>
          <span>Frontend · Backend · Interactive</span>
        </div>
      </div>
    </section>
  );
}