import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 24, stiffness: 190, mass: 0.55 });
  const ringY = useSpring(y, { damping: 24, stiffness: 190, mass: 0.55 });
  const glowX = useSpring(x, { damping: 34, stiffness: 120, mass: 0.8 });
  const glowY = useSpring(y, { damping: 34, stiffness: 120, mass: 0.8 });
  const dotX = useSpring(x, { damping: 18, stiffness: 520, mass: 0.22 });
  const dotY = useSpring(y, { damping: 18, stiffness: 520, mass: 0.22 });
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

  const size = variant === "view" ? 118 : variant === "link" ? 58 : 34;
  const dotSize = variant === "view" ? 5 : variant === "link" ? 8 : 7;
  const showLabel = variant === "view";

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[98] hidden rounded-full md:block"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, oklch(0.88 0.22 125 / 0.26), transparent 68%)",
          filter: "blur(8px)",
        }}
        animate={{
          width: variant === "view" ? 190 : 120,
          height: variant === "view" ? 190 : 120,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center rounded-full border md:flex"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: variant === "default" ? "var(--acid)" : "var(--cream)",
          color: variant === "view" ? "var(--ink)" : "var(--cream)",
          boxShadow:
            variant === "view"
              ? "0 0 0 1px var(--acid), 0 0 34px oklch(0.88 0.22 125 / 0.48)"
              : "0 0 26px oklch(0.88 0.22 125 / 0.35)",
          backgroundColor:
            variant === "view"
              ? "var(--acid)"
              : variant === "link"
                ? "oklch(0.88 0.22 125 / 0.16)"
                : "oklch(0.10 0.005 240 / 0.22)",
          backdropFilter: "blur(10px)",
        }}
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          rotate: variant === "view" ? 8 : 0,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 240 }}
      >
        <motion.span
          className="font-mono text-[10px] uppercase tracking-[0.22em]"
          animate={{
            opacity: showLabel ? 1 : 0,
            scale: showLabel ? 1 : 0.8,
          }}
        >
          {label}
        </motion.span>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden rounded-full bg-acid md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 18px oklch(0.88 0.22 125 / 0.85)",
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 18, stiffness: 420 }}
      />
    </>
  );
}
