import SkillsCarousel from "./SkillsCarousel";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <h3 className="sectionTitle">Sobre mí</h3>
      <div className="animated-divider"></div>
      <p className="about-description">
      Soy Ingeniera en Sistemas egresada de la Facultad Regional Córdoba de la UTN en 2025. 
      Me especializo en el desarrollo de aplicaciones, análisis funcional y automatización de procesos, 
      con un enfoque orientado a construir soluciones simples, robustas y eficientes.
      Me considero una profesional comprometida, con pensamiento analítico y una fuerte vocación por el aprendizaje continuo.
      Disfruto enfrentar nuevos desafíos tecnológicos y seguir incorporando herramientas que me permitan crecer y aportar valor real en cada proyecto.
      </p>

      <SkillsCarousel />
    </section>
  );
}