import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const text = "OF DIGITAL";

type Dot = {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
};

const pointer = {
  x: 0,
  y: 0,
  active: false,
  strength: 0,
};

export function InteractiveHeroWord() {
  const shellRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const frameRef = useRef(0);
  const runningRef = useRef(false);
  const startRef = useRef(() => {});

  useEffect(() => {
    const shell = shellRef.current;
    const canvas = canvasRef.current;
    if (!shell || !canvas) return;

    const context = canvas.getContext("2d");
    const mask = document.createElement("canvas");
    const maskContext = mask.getContext("2d");
    if (!context || !maskContext) return;

    let width = 1;
    let height = 1;
    let dpr = 1;
    const drawDot = (x: number, y: number, size: number, alpha: number, hot: boolean) => {
      context.globalAlpha = alpha;
      context.fillStyle = hot ? "#e7ff66" : "#b8ff22";
      context.fillRect(x - size * 0.5, y - size * 0.5, size, size);
    };

    const drawStill = () => {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";
      for (const dot of dotsRef.current) {
        drawDot(dot.x, dot.y, 2.6, 0.92, false);
      }
      context.globalAlpha = 1;
    };

    const buildDots = () => {
      const rect = shell.getBoundingClientRect();
      const styles = window.getComputedStyle(shell);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.ceil(rect.width));
      height = Math.max(1, Math.ceil(rect.height));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      mask.width = width;
      mask.height = height;
      maskContext.clearRect(0, 0, width, height);
      maskContext.fillStyle = "#fff";
      maskContext.textAlign = "left";
      maskContext.textBaseline = "middle";
      maskContext.font = `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;
      maskContext.fillText(text, 0, height * 0.5 + height * 0.045);

      const pixels = maskContext.getImageData(0, 0, width, height).data;
      let nextDots: Dot[] = [];
      const step = Math.max(3.8, Math.min(5.2, width / 260));

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const alphaIndex = (Math.floor(y) * width + Math.floor(x)) * 4 + 3;
          if (pixels[alphaIndex] > 32) {
            nextDots.push({
              homeX: x,
              homeY: y,
              x,
              y,
              vx: 0,
              vy: 0,
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      const maxDots = width < 760 ? 3200 : 7200;
      if (nextDots.length > maxDots) {
        const stride = Math.ceil(nextDots.length / maxDots);
        nextDots = nextDots.filter((_, index) => index % stride === 0);
      }

      dotsRef.current = nextDots;
      drawStill();
    };

    const animate = () => {
      runningRef.current = true;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";

      let moving = false;
      const time = performance.now() * 0.001;
      pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * 0.12;
      const radius = Math.min(250, Math.max(120, width * 0.18));

      for (const dot of dotsRef.current) {
        let targetX = dot.homeX;
        let targetY = dot.homeY + Math.sin(time * 1.6 + dot.phase) * 0.8;
        let energy = 0;

        if (pointer.strength > 0.01) {
          const dx = dot.homeX - pointer.x;
          const dy = dot.homeY - pointer.y;
          const distance = Math.hypot(dx, dy) || 1;
          const influence = Math.max(0, 1 - distance / radius);
          const ripple = Math.sin(distance * 0.09 - time * 12) * 0.5 + 0.5;
          const force = influence * influence * pointer.strength * (82 + ripple * 44);

          targetX += (dx / distance) * force;
          targetY += (dy / distance) * force;
          energy = influence * pointer.strength;
        }

        dot.vx += (targetX - dot.x) * 0.075;
        dot.vy += (targetY - dot.y) * 0.075;
        dot.vx *= 0.78;
        dot.vy *= 0.78;
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (Math.abs(dot.vx) + Math.abs(dot.vy) + Math.abs(targetX - dot.x) > 0.08) {
          moving = true;
        }

        drawDot(dot.x, dot.y, 2.4 + energy * 2.2, 0.78 + energy * 0.22, energy > 0.08);
      }

      context.globalAlpha = 1;

      if (pointer.active || pointer.strength > 0.012 || moving) {
        frameRef.current = window.requestAnimationFrame(animate);
      } else {
        runningRef.current = false;
        drawStill();
      }
    };

    const start = () => {
      if (!runningRef.current) {
        frameRef.current = window.requestAnimationFrame(animate);
      }
    };
    startRef.current = start;

    const resizeObserver = new ResizeObserver(() => {
      buildDots();
      start();
    });

    buildDots();
    resizeObserver.observe(shell);

    const ready = document.fonts?.ready ?? Promise.resolve();
    void ready.then(() => {
      buildDots();
      start();
    });

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.span
      ref={shellRef}
      className="hero-word hero-particle-word block"
      data-cursor="view"
      data-cursor-label="Distort"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
        pointer.active = true;
        startRef.current();
      }}
      onPointerEnter={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
        pointer.active = true;
        startRef.current();
      }}
      onPointerLeave={() => {
        pointer.active = false;
        startRef.current();
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          pointer.x = event.currentTarget.clientWidth * 0.5;
          pointer.y = event.currentTarget.clientHeight * 0.5;
          pointer.active = true;
          startRef.current();
          window.setTimeout(() => {
            pointer.active = false;
            startRef.current();
          }, 420);
        }
      }}
      initial={{ y: 120, opacity: 0, rotateX: 18 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ duration: 1.1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="hero-particle-word__text">{text}</span>
      <canvas ref={canvasRef} className="hero-particle-word__canvas" />
    </motion.span>
  );
}
