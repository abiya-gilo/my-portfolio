import React from "react";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Expertise</h2>

        <p className={styles.subtitle}>
          A collection of the technologies, tools, and frameworks I use to build
          modern, scalable, and user‑friendly web applications.
        </p>

        <div className={styles.grid}>
          {/* Frontend */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Frontend Development</h3>

            <div className={styles.skillItem}>
              <span>JavaScript (ES6+)</span>
              <div className={styles.progress}>
                <div style={{ width: "95%" }} />
              </div>
            </div>

            <div className={styles.skillItem}>
              <span>React & Hooks</span>
              <div className={styles.progress}>
                <div style={{ width: "90%" }} />
              </div>
            </div>

            <div className={styles.skillItem}>
              <span>HTML & CSS</span>
              <div className={styles.progress}>
                <div style={{ width: "100%" }} />
              </div>
            </div>

            <div className={styles.skillItem}>
              <span>Bootstrap / Sass</span>
              <div className={styles.progress}>
                <div style={{ width: "85%" }} />
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Backend Development</h3>

            <div className={styles.skillItem}>
              <span>Node.js</span>
              <div className={styles.progress}>
                <div style={{ width: "90%" }} />
              </div>
            </div>

            <div className={styles.skillItem}>
              <span>Express.js</span>
              <div className={styles.progress}>
                <div style={{ width: "88%" }} />
              </div>
            </div>

            <div className={styles.skillItem}>
              <span>REST APIs</span>
              <div className={styles.progress}>
                <div style={{ width: "92%" }} />
              </div>
            </div>

            <div className={styles.skillItem}>
              <span>Authentication</span>
              <div className={styles.progress}>
                <div style={{ width: "80%" }} />
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Tools & Workflow</h3>

            <div className={styles.skillItem}>
              <span>Git & GitHub</span>
              <div className={styles.progress}>
                <div style={{ width: "95%" }} />
              </div>
            </div>

            <div className={styles.skillItem}>
              <span>Responsive Design</span>
              <div className={styles.progress}>
                <div style={{ width: "100%" }} />
              </div>
            </div>

            <div className={styles.skillItem}>
              <span>Debugging & Problem Solving</span>
              <div className={styles.progress}>
                <div style={{ width: "90%" }} />
              </div>
            </div>

            <div className={styles.skillItem}>
              <span>Deployment (Netlify / Vercel)</span>
              <div className={styles.progress}>
                <div style={{ width: "85%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
