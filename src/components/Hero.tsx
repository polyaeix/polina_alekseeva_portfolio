import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[110vh] overflow-hidden pt-32">
      {/* meta strip */}
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 md:px-10 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        <span>● Portfolio / 2020 — 26</span>
        <span className="hidden md:inline">50.07°N · 14.43°E</span>
        <span>Prague, CZ</span>
      </div>

      <motion.div style={{ opacity }} className="mx-auto mt-20 max-w-[1700px] px-6 md:px-10">
        <motion.h1
          style={{ y: y1 }}
          className="font-display uppercase text-[20vw] md:text-[16vw] leading-[0.82]"
        >
          Designer
          <br />
          <span className="text-outline">of digital</span>
          <br />
          systems<span className="text-acid">.</span>
        </motion.h1>

        <div className="mt-14 grid grid-cols-12 gap-6">
          <motion.p
            style={{ y: y3 }}
            className="col-span-12 md:col-span-5 md:col-start-7 text-balance text-lg md:text-2xl text-cream/85 font-light leading-snug"
          >
            <span className="font-serif italic text-cream">Polina Alekseeva</span> —
            independent UI/UX & digital designer building websites, products and brand
            systems for teams that take craft seriously.
          </motion.p>
        </div>

        <motion.div
          style={{ y: y2 }}
          className="mt-24 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            ↓ Scroll · 5 selected projects
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            EN · RU · CZ
          </div>
        </motion.div>
      </motion.div>

      {/* floating mark */}
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute right-6 top-44 hidden md:flex size-28 items-center justify-center rounded-full border border-acid/50 text-acid font-mono text-[10px] uppercase tracking-[0.3em] rotate-12"
      >
        Available · ’26
      </motion.div>
    </section>
  );
}
