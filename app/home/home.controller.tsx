import ScrollToTop from "../components/scrollToTop";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Education from "../components/sections/education";
import Experience from "../components/sections/experience";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import Skills from "../components/sections/skills";

export type HomeNavLink = {
  name: string;
  href: string;
};

export const homeNavLinks: HomeNavLink[] = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function HomeContent() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <ScrollToTop />
    </>
  );
}
