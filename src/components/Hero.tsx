import { motion } from "framer-motion";
import LightTrails from "./LightTrails";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <LightTrails />

      <div className="hero-container">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">
            Bienvenido a
          </span>

          <h2 className="hero-title">
            Mi espacio profesional
          </h2>

          <p className="hero-description">
            En este sitio comparto los proyectos que he desarrollado y mi
            repositorio de trabajos personales.
          </p>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/heroimg.png"
            alt="Imagen principal"
            className="hero-image"
          />
        </motion.div>

      </div>
    </section>
  );
}