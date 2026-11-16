"use client";

import { useEffect, useRef } from "react";

interface AntigravityProps {
  count?: number;
  speed?: number;
  colors?: string[];
  shape?: "mixed" | "circle" | "square" | "triangle";
  gravity?: number;
  interactive?: boolean;
  className?: string;
  opacity?: number;
}

export default function AntigravityAnimation({
  count = 36,
  speed = 0.7,
  colors = ["#ff2a3b", "#ffffff", "#e5e5e5", "#b91c1c", "#404040"],
  shape = "mixed",
  gravity = -0.04,
  interactive = true,
  className = "absolute inset-0 pointer-events-none z-0",
  opacity = 0.85,
}: AntigravityProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
      willReadFrequently: false,
    });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;

    // Sprite Cache (Offscreen canvases for GPU-accelerated drawImage)
    const spriteCache: Record<string, HTMLCanvasElement> = {};

    const getSprite = (color: string, shapeType: number): HTMLCanvasElement => {
      const key = `${color}-${shapeType}`;
      if (spriteCache[key]) return spriteCache[key];

      const size = 64;
      const center = size / 2;
      const drawSize = 26;

      const c = document.createElement("canvas");
      c.width = size;
      c.height = size;
      const cx = c.getContext("2d");

      if (cx) {
        cx.shadowColor = "rgba(0, 0, 0, 0.4)";
        cx.shadowBlur = 10;
        cx.shadowOffsetX = 2;
        cx.shadowOffsetY = 3;
        cx.fillStyle = color;

        cx.translate(center, center);
        cx.beginPath();

        if (shapeType === 0) {
          // Circle
          cx.arc(0, 0, drawSize / 2, 0, Math.PI * 2);
        } else if (shapeType === 1) {
          // Square / Rounded Rect
          cx.rect(-drawSize / 2, -drawSize / 2, drawSize, drawSize);
        } else if (shapeType === 2) {
          // Triangle
          cx.moveTo(0, -drawSize / 2);
          cx.lineTo(drawSize / 2, drawSize / 2);
          cx.lineTo(-drawSize / 2, drawSize / 2);
          cx.closePath();
        }
        cx.fill();
      }

      spriteCache[key] = c;
      return c;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    };

    resize();
    window.addEventListener("resize", resize);

    // Particle Class
    class Particle {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      visualSize = 0;
      color = "#ff2a3b";
      rotation = 0;
      rotationSpeed = 0;
      type = 0;
      depth = 1;
      sprite: HTMLCanvasElement | null = null;

      constructor() {
        this.init(true);
      }

      getShapeType() {
        if (shape === "circle") return 0;
        if (shape === "square") return 1;
        if (shape === "triangle") return 2;
        return Math.floor(Math.random() * 3);
      }

      init(randomY = false) {
        this.x = Math.random() * width;
        this.y = randomY ? Math.random() * height : height + 40;
        this.visualSize = Math.random() * 12 + 6;

        this.vx = (Math.random() - 0.5) * 1.5 * speed;
        this.vy = (Math.random() - 0.5) * 1.5 * speed;

        if (gravity < 0) {
          this.vy -= (Math.random() * 0.8 + 0.2) * Math.abs(gravity) * 20;
        } else {
          this.y = randomY ? Math.random() * height : -40;
        }

        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
        this.type = this.getShapeType();
        this.sprite = getSprite(this.color, this.type);
        this.depth = Math.random() * 0.8 + 0.5;
      }

      update(mX: number, mY: number) {
        this.vy += gravity * 0.04 * this.depth;
        this.x += this.vx * this.depth;
        this.y += this.vy * this.depth;
        this.rotation += this.rotationSpeed;

        if (interactive && mX > -500 && mY > -500) {
          const dx = this.x - mX;
          const dy = this.y - mY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 140;

          if (dist < radius) {
            const force = (radius - dist) / radius;
            const angle = Math.atan2(dy, dx);
            const push = force * 3;
            this.vx += Math.cos(angle) * push;
            this.vy += Math.sin(angle) * push;
          }
        }

        this.vx *= 0.96;
        this.vy *= 0.96;

        // Wrap edges
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;

        if (gravity < 0) {
          if (this.y < -50) this.init(false);
        } else {
          if (this.y > height + 50) this.init(false);
        }
      }

      draw(c: CanvasRenderingContext2D) {
        if (!this.sprite) return;
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rotation);

        const scaleFactor = (this.visualSize * this.depth) / 26;
        const renderSize = 64 * scaleFactor;

        c.drawImage(this.sprite, -renderSize / 2, -renderSize / 2, renderSize, renderSize);
        c.restore();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
      }
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouseX, mouseY);
        particles[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [count, speed, colors, shape, gravity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
