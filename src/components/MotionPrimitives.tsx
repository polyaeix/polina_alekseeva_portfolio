import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
  progress: MotionValue<number>;
};

export function ParallaxLayer({
  children,
  className,
  distance = 120,
  progress,
}: ParallaxLayerProps) {
  const y = useTransform(progress, [0, 1], [distance, -distance]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

type SectionProgressProps = {
  className?: string;
};

export function SectionProgress({ className }: SectionProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div aria-hidden style={{ scaleX }} className="h-px origin-left bg-acid" />
    </div>
  );
}
