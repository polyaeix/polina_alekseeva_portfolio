import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 220, mass: 0.5 });
  const sy = useSpring(y, { damping: 30, stiffness: 220, mass: 0.5 });
  const [variant, setVariant] = useState<"default" | "link" | "view">("default");
  const [label, setLabel] = useState<string>("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const t = e.target as HTMLElement | null;
      const interactive = t?.closest("a, button, [role='button'], [data-cursor]");
      if (interactive) {
        const dc = interactive.getAttribute("data-cursor");
        if (dc === "view") {
          setVariant("view");
          setLabel(interactive.getAttribute("data-cursor-label") || "View");
        } else {
          setVariant("link");
          setLabel("");
        }
      } else {
        setVariant("default");
        setLabel("");
      }
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  const size = variant === "view" ? 104 : variant === "link" ? 40 : 10;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:flex items-center justify-center rounded-full"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: variant === "default" ? "var(--ink)" : "var(--ink)",
        color: "var(--cream)",
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 26, stiffness: 240 }}
    >
      {variant === "view" && (
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          {label}
        </span>
      )}
    </motion.div>
  );
}
