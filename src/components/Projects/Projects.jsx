import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

import netflixImg from "../../assets/images/netflix.png";
import amazonImg from "../../assets/images/amazon.png";
import evangadiImg from "../../assets/images/evenagadi.png";

const projectsData = [
  {
    title: "Netflix Clone",
    category: "frontend",
    image: netflixImg,
    description:
      "A modern Netflix UI clone built with React, featuring categories, hover effects, and responsive layout.",
    demo: "https://abiya-gilo.github.io/Netflix-Clone-2025/", // LIVE SITE
    github: "https://github.com/abiya-gilo/Netflix-Clone-2025",
    repo: "abiya-gilo/Netflix-Clone-2025",
  },

  {
    title: "Evangadi Forum",
    category: "fullstack",
    image: evangadiImg,
    description:
      "A full‑stack MERN discussion forum with authentication, posting, comments, and a modern UI.",
    demo: "https://evangadi-forum-deploy-0io8.onrender.com",
    github: "https://github.com/abiya-gilo/Evangadi-Forum",
    repo: "abiya-gilo/Evangadi-Forum",
  },
  {
    title: "Amazon Frontend",
    category: "frontend",
    image: amazonImg,
    description:
      "A responsive Amazon‑style frontend with product listings, cart functionality, and clean UI components.",
    demo: "https://ahme-amazon-frontend.netlify.app/",
    github: "https://github.com/abiya-gilo/amazon-frontend",
    repo: "abiya-gilo/amazon-frontend",
  },
  {
    title: "Amazon Backend API",
    category: "backend",
    image: amazonImg,
    description:
      "A Node.js + Express backend API powering product data, user authentication, and checkout logic.",
    demo: "https://amazon-api-deploy-2nd.onrender.com",
    github: "https://github.com/abiya-gilo/amazon-api--deploy",
    repo: "abiya-gilo/amazon-api--deploy",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [stats, setStats] = useState({}); // { repo: { stars, forks } }

  useEffect(() => {
    async function fetchStats() {
      const results = {};
      for (const project of projectsData) {
        try {
          const res = await fetch(
            `https://api.github.com/repos/${project.repo}`,
          );
          if (!res.ok) continue;
          const data = await res.json();
          results[project.repo] = {
            stars: data.stargazers_count,
            forks: data.forks_count,
          };
        } catch (err) {
          // fail silently, keep UI clean
        }
      }
      setStats(results);
    }
    fetchStats();
  }, []);

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A selection of real‑world applications and interfaces I’ve built using
          JavaScript, React, Node.js, Express, and modern web technologies.
        </motion.p>

        {/* Filters */}
        <div className={styles.filters}>
          {["all", "frontend", "fullstack", "backend"].map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${
                filter === cat ? styles.filterBtnActive : ""
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat === "all"
                ? "All"
                : cat === "fullstack"
                  ? "Full‑Stack"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ rotateX: 6, rotateY: -6, translateY: -6 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                />
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardText}>{project.description}</p>

              <div className={styles.metaRow}>
                <span className={styles.badge}>
                  {project.category === "frontend" && "Frontend"}
                  {project.category === "backend" && "Backend"}
                  {project.category === "fullstack" && "Full‑Stack"}
                </span>
                {stats[project.repo] && (
                  <span className={styles.stats}>
                    ⭐ {stats[project.repo].stars} · 🍴{" "}
                    {stats[project.repo].forks}
                  </span>
                )}
              </div>

              <div
                className={styles.buttons}
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={project.demo}
                  className={styles.btnPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className={styles.btnSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className={styles.modalImage}
              loading="lazy"
            />
            <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
            <p className={styles.modalText}>{selectedProject.description}</p>

            {stats[selectedProject.repo] && (
              <div className={styles.modalStats}>
                <span>⭐ {stats[selectedProject.repo].stars} Stars</span>
                <span>🍴 {stats[selectedProject.repo].forks} Forks</span>
              </div>
            )}

            <div className={styles.modalButtons}>
              <a
                href={selectedProject.demo}
                className={styles.btnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.github}
                className={styles.btnSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <button
              className={styles.modalClose}
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
