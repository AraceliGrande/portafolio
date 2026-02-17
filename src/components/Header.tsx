import { useState } from "react";
import "./Header.css";
import ICOimg from "../assets/portafolioICO.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Función para hacer scroll a una sección
  const handleScroll = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="header">
      <a href="#hero" className="title-link">
        <h1 className="title">
          <img  src={ICOimg} alt="Logo" className="title-icon" />
          Araceli Grande.
          <span className="dot"> Mi portafolio</span>
        </h1>
      </a>

      {/* Menú escritorio */}
      <nav className="header-nav">
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>

      {/* Toggle mobile */}
      <div
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú móvil */}
       {/* Menú móvil */}
      <nav className={`nav-mobile ${open ? "open" : ""}`}>
        <a onClick={() => handleScroll("about")}>Sobre mí</a>
        <a onClick={() => handleScroll("projects")}>Proyectos</a>
        <a onClick={() => handleScroll("contact")}>Contacto</a>
      </nav>
    </header>
  );
}