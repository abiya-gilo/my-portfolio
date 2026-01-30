import React from "react";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>About Me</h2>

          <p className={styles.description}>
            I'm Ahmed, a Full‑Stack JavaScript Developer who enjoys building
            clean, modern, and scalable web applications. I’ve rebuilt
            real‑world websites like Apple’s homepage, developed full‑stack
            clones such as Netflix and Amazon, and created responsive interfaces
            using HTML, CSS, JavaScript, Bootstrap, and React.
          </p>

          <p className={styles.description}>
            I love turning ideas into functional digital experiences. Whether
            it’s frontend UI/UX, backend API development, or full‑stack
            application architecture, I enjoy solving problems and creating
            smooth, user‑friendly solutions.
          </p>

          <div className={styles.highlights}>
            <div className={styles.highlightItem}>✔ Full‑Stack JavaScript</div>
            <div className={styles.highlightItem}>
              ✔ React & Modern Frontend
            </div>
            <div className={styles.highlightItem}>✔ Node.js & Express APIs</div>
            <div className={styles.highlightItem}>✔ Responsive UI/UX</div>
            <div className={styles.highlightItem}>
              ✔ Real‑World Project Builds
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.glowCircle}></div>
        </div>
      </div>
    </section>
  );
}
