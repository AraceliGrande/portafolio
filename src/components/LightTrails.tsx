import { useEffect, useRef } from "react";
import "./LightTrails.css";

type Particle = {
  x: number;
  y: number;
  origX: number;
  origY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
};

export default function LightTrails() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particleCount = 150;
    const colors = [
      "hsla(174, 70%, 70%, 0.9)", // turquesa
      "hsla(190, 60%, 80%, 0.9)", // celeste
      "hsla(160, 60%, 80%, 0.9)", // verde menta
      "hsla(180, 70%, 60%, 0.9)",  // azul profundo
    ];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      particles.current.push({
        x,
        y,
        origX: x,
        origY: y,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        size: 2 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Halo central alrededor del mouse
      const gradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        150
      );
      gradient.addColorStop(0, "rgba(180, 255, 255, 0.15)");
      gradient.addColorStop(0.5, "rgba(180, 255, 255, 0.08)");
      gradient.addColorStop(1, "rgba(180, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(p => {
        // Movimiento libre
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const attractRadius = 200;
        const disperseRadius = 30;

        // Atracción suave al mouse
        if (dist < attractRadius) {
          const force = (attractRadius - dist) / attractRadius * 0.007;
          p.vx += dx * force;
          p.vy += dy * force;
        } else {
          const rdx = p.origX - p.x;
          const rdy = p.origY - p.y;
          p.vx += rdx * 0.0008;
          p.vy += rdy * 0.0008;
        }

        if (dist < disperseRadius) {
          p.vx += (p.x - mouse.current.x) * 0.003;
          p.vy += (p.y - mouse.current.y) * 0.003;
        }

        // Oscilación armónica suave
        p.vx += Math.sin(p.y * 0.004) * 0.0005;
        p.vy += Math.cos(p.x * 0.004) * 0.0005;

        // Fricción
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Dibujar partícula
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(update);
    };

    update();

    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="light-trails-canvas" />;
}
