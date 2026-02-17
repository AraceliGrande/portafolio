import { motion } from "framer-motion";
import "./Projects.css";

interface Project {
  year?: string;
  title: string;
  summary: string;
  desc: string;
  video: string;
  repo?: string;
  tech: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Tripper",
      summary:
        "Aplicación web para planificación y organización inteligente de viajes.",
      desc:
        "Permite gestionar destinos, actividades y recursos asociados a cada itinerario de forma estructurada, priorizando experiencia de usuario y navegación intuitiva.",
      video: "https://www.youtube.com/embed/MBDsNVNMPOw?si=5v8rIBDjP1B-uoxk",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"]
    },
    {
      title: "Sistema - Fábrica de Pastas",
      summary:
        "Sistema de gestión interna para optimizar producción y administración.",
      desc:
        "Desarrollado para organizar pedidos, controlar inventario y dar seguimiento a la producción diaria de manera eficiente.",
      video: "https://www.canva.com/design/DAG4g9AU8vA/3hPpoR-6PMI4Sf-p25XzbQ/view?embed",
      repo: "https://github.com/AraceliGrande/FIDELANDIA..git",
      tech: [".NET", "#C", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h3 className="sectionTitle">Proyectos</h3>
      <div className="animated-divider" />

      <div className="timeline">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="timeline-dot" />

            <div className="project-card">
              <span className="project-year">{p.year}</span>
              <h4 className="project-title">{p.title}</h4>

              <div className="project-grid">
                {/* IZQUIERDA */}
                <div className="project-info">
                  <p className="project-summary">{p.summary}</p>

                  <p className="project-desc">{p.desc}</p>

                  <div className="tech-list">
                    {p.tech.map((t, index) => (
                      <span key={index} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-btn"
                    >
                      Ver código
                    </a>
                  )}
                </div>

                {/* DERECHA */}
                <div className="video-wrapper">
                  <iframe
                    src={p.video}
                    title={p.title}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}