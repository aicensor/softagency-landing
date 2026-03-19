"use client";

import { useEffect, useRef } from "react";

interface Shard {
  x: number;
  y: number;
  z: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  driftX: number;
  driftY: number;
  vertices: number;
  opacity: number;
  glintPhase: number;
  glintSpeed: number;
  edgeHue: number; // 0 = purple, 1 = blue, 2 = cyan
}

export default function FractalAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Create shards
    const shardCount = 35;
    const shards: Shard[] = [];

    for (let i = 0; i < shardCount; i++) {
      shards.push({
        x: Math.random() * 2 - 0.5,
        y: Math.random() * 2 - 0.5,
        z: Math.random() * 0.8 + 0.2,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.008,
        driftX: (Math.random() - 0.5) * 0.15,
        driftY: (Math.random() - 0.5) * 0.1,
        vertices: Math.floor(Math.random() * 3) + 4, // 4-6 vertices
        opacity: Math.random() * 0.4 + 0.1,
        glintPhase: Math.random() * Math.PI * 2,
        glintSpeed: Math.random() * 0.02 + 0.005,
        edgeHue: Math.floor(Math.random() * 3),
      });
    }

    const edgeColors = [
      [140, 92, 246],  // purple
      [99, 130, 255],  // blue
      [80, 200, 220],  // cyan
    ];

    const drawShard = (shard: Shard) => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = shard.x * w;
      const cy = shard.y * h;
      const size = shard.size * shard.z;

      // Parallax based on mouse
      const parallaxX = (mouseX - 0.5) * 30 * (1 - shard.z);
      const parallaxY = (mouseY - 0.5) * 20 * (1 - shard.z);

      const px = cx + parallaxX;
      const py = cy + parallaxY;

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(shard.rotation);

      // Generate crystal shape (irregular polygon)
      const points: [number, number][] = [];
      for (let i = 0; i < shard.vertices; i++) {
        const angle = (i / shard.vertices) * Math.PI * 2 - Math.PI / 2;
        const r = size * (0.5 + Math.random() * 0.01); // slight irregularity cached via seed
        const elongation = i % 2 === 0 ? 1.3 : 0.7; // angular crystal shape
        points.push([
          Math.cos(angle) * r * elongation,
          Math.sin(angle) * r,
        ]);
      }

      // Draw crystal body (dark obsidian fill)
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
      }
      ctx.closePath();

      // Gradient fill — dark with subtle depth
      const grad = ctx.createLinearGradient(-size, -size, size, size);
      grad.addColorStop(0, `rgba(15, 12, 25, ${shard.opacity * 0.8})`);
      grad.addColorStop(0.5, `rgba(25, 20, 40, ${shard.opacity * 0.6})`);
      grad.addColorStop(1, `rgba(10, 8, 18, ${shard.opacity * 0.9})`);
      ctx.fillStyle = grad;
      ctx.fill();

      // Glowing edges
      const glint = Math.sin(time * 3 + shard.glintPhase) * 0.5 + 0.5;
      const [er, eg, eb] = edgeColors[shard.edgeHue];
      const edgeAlpha = (0.3 + glint * 0.5) * shard.opacity * 2;

      ctx.strokeStyle = `rgba(${er}, ${eg}, ${eb}, ${edgeAlpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Light refraction line across shard
      const refractionAngle = time * 0.5 + shard.glintPhase;
      const refractGlint = Math.pow(Math.sin(time * 2 + shard.glintPhase * 3) * 0.5 + 0.5, 3);

      if (refractGlint > 0.1) {
        ctx.beginPath();
        const rx1 = Math.cos(refractionAngle) * size * 0.8;
        const ry1 = Math.sin(refractionAngle) * size * 0.3;
        const rx2 = -rx1 * 0.6;
        const ry2 = -ry1 * 0.8;
        ctx.moveTo(rx1, ry1);
        ctx.lineTo(rx2, ry2);

        const refGrad = ctx.createLinearGradient(rx1, ry1, rx2, ry2);
        refGrad.addColorStop(0, `rgba(${er}, ${eg}, ${eb}, 0)`);
        refGrad.addColorStop(0.5, `rgba(255, 255, 255, ${refractGlint * 0.4 * shard.opacity * 2})`);
        refGrad.addColorStop(1, `rgba(${er}, ${eg}, ${eb}, 0)`);
        ctx.strokeStyle = refGrad;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Edge glow (outer)
      if (glint > 0.3) {
        ctx.shadowColor = `rgba(${er}, ${eg}, ${eb}, ${glint * 0.3})`;
        ctx.shadowBlur = 20;
        ctx.strokeStyle = `rgba(${er}, ${eg}, ${eb}, ${glint * 0.15 * shard.opacity * 2})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
    };

    // Draw ambient floating particles
    const particleCount = 60;
    const particles: { x: number; y: number; speed: number; size: number; hue: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        speed: Math.random() * 0.0003 + 0.0001,
        size: Math.random() * 2 + 0.5,
        hue: Math.floor(Math.random() * 3),
      });
    }

    const animate = () => {
      time += 0.016;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Update and draw particles
      for (const p of particles) {
        p.y -= p.speed;
        p.x += Math.sin(time + p.y * 5) * 0.0001;
        if (p.y < -0.05) {
          p.y = 1.05;
          p.x = Math.random();
        }
        const [pr, pg, pb] = edgeColors[p.hue];
        const pAlpha = 0.3 + Math.sin(time * 2 + p.x * 10) * 0.2;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pr}, ${pg}, ${pb}, ${pAlpha})`;
        ctx.fill();
      }

      // Sort shards by z-depth (back to front)
      shards.sort((a, b) => a.z - b.z);

      // Update and draw shards
      for (const shard of shards) {
        shard.rotation += shard.rotationSpeed;
        shard.x += shard.driftX * 0.001;
        shard.y += shard.driftY * 0.001;

        // Wrap around
        if (shard.x > 1.3) shard.x = -0.3;
        if (shard.x < -0.3) shard.x = 1.3;
        if (shard.y > 1.3) shard.y = -0.3;
        if (shard.y < -0.3) shard.y = 1.3;

        drawShard(shard);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
