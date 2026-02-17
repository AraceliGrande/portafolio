import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./SkillsCarousel.css";

interface Skill {
  profile: string;
  tech: string;
}

const skills: Skill[] = [
  {
    profile: "Frontend Developer",
    tech: "React · TypeScript · CSS · HTML"
  },
 {
    profile: "Backend Developer",
    tech: ".NET · C# · Node.js · SQL · MongoDB"
  },
  {
    profile: "SAP Consultant",
    tech: "ABAP · FI · MM"
  },
  {
    profile: "Cloud & Deploy",
    tech: "AWS · Docker · CI/CD"
  }
];

export default function SkillsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % skills.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisible = () => {
    const prevIndex = (current - 1 + skills.length) % skills.length;
    const nextIndex = (current + 1) % skills.length;

    return [
      { ...skills[prevIndex], position: -1 },
      { ...skills[current], position: 0 },
      { ...skills[nextIndex], position: 1 },
    ];
  };

  return (
    <div className="carousel-wrapper">
      {getVisible().map((skill) => {
        const scale = skill.position === 0 ? 1.15 : 0.85;
        const xOffset = `${skill.position * 110}%`;

        return (
          <motion.div
            key={skill.profile}
            className="carousel-card"
            animate={{ x: xOffset, scale }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            style={{ zIndex: skill.position === 0 ? 10 : 5 }}
          >
            <div className="carousel-profile">
              {skill.profile}
            </div>

            <div className="carousel-divider" />

            <div className="carousel-tech">
              {skill.tech}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}