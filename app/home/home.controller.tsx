import ScrollToTop from "../components/scrollToTop";
import About from "../components/sections/about.view";
import Contact from "../components/sections/contact.view";
import Education from "../components/sections/education.view";
import Experience from "../components/sections/experience.view";
import Hero from "../components/sections/hero.view";
import Projects from "../components/sections/projects.view";
import Skills from "../components/sections/skills.view";

export function HomeContent() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <ScrollToTop />
    </>
  );
}
