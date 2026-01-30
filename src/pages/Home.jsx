import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact/>
    </>
  );
}
