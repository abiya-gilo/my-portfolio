import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Hi, I'm <span>Ahmed</span>
        </h1>

        <h2 className={styles.heroSubtitle}>Full‑Stack JavaScript Developer</h2>

        <p className={styles.heroText}>
          I build modern, scalable web applications using React, Node.js,
          Express, and clean UI/UX principles. I’ve rebuilt real‑world websites,
          developed full‑stack clones, and created responsive interfaces from
          scratch.
        </p>

        <div className={styles.heroButtons}>
          <a href="#projects" className={styles.btnPrimary}>
            View Projects
          </a>
          <a href="/Ahmed-Resume.pdf" className={styles.btnSecondary}>
            Download Resume
          </a>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.abstractCircle}></div>
      </div>
    </section>
  );
}
