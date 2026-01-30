import React from "react";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>What I Do</h2>
        <p className={styles.subtitle}>
          I help businesses and individuals build modern, scalable, and
          user‑friendly digital experiences using full‑stack JavaScript
          technologies.
        </p>

        <div className={styles.grid}>
          {/* Service 1 */}
          <div className={styles.card}>
            <div className={styles.icon}>💻</div>
            <h3 className={styles.cardTitle}>Frontend Development</h3>
            <p className={styles.cardText}>
              Clean, responsive, and modern interfaces built with JavaScript,
              React, Hooks, and UI/UX best practices.
            </p>
          </div>

          {/* Service 2 */}
          <div className={styles.card}>
            <div className={styles.icon}>🛠️</div>
            <h3 className={styles.cardTitle}>Backend Development</h3>
            <p className={styles.cardText}>
              Scalable backend systems using Node.js, Express, REST APIs,
              authentication, and database integration.
            </p>
          </div>

          {/* Service 3 */}
          <div className={styles.card}>
            <div className={styles.icon}>⚙️</div>
            <h3 className={styles.cardTitle}>Full‑Stack Applications</h3>
            <p className={styles.cardText}>
              Complete end‑to‑end applications, from frontend UI to backend
              logic, API design, and deployment.
            </p>
          </div>

          {/* Service 4 */}
          <div className={styles.card}>
            <div className={styles.icon}>🚀</div>
            <h3 className={styles.cardTitle}>Deployment & Optimization</h3>
            <p className={styles.cardText}>
              Fast, secure, and optimized deployments using Netlify, Vercel, and
              modern performance techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
