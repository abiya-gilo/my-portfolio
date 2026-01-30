import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Logo" className={styles.logo} />

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
