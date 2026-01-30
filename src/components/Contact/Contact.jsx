import React from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have a project in mind or want to collaborate? I’d love to hear from
          you.
        </p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className={styles.inputGroup}>
            <FaCommentDots className={styles.icon} />
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit" className={styles.btn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
