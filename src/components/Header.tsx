import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a href="#hero" className="title-link">
        <h1 className="title">
          <img src="/portafolio.svg" alt="Logo" className="title-icon" />
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
      <nav className={`nav-mobile ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
        <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
      </nav>
    </header>
  );
}