import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ParallaxLayer, Reveal } from "./MotionPrimitives";
import { InteractiveHeroWord } from "./InteractiveHeroWord";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const slow = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const deep = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28 grain"
    >
      <motion.div
        aria-hidden
        style={{ y: slow, scale }}
        className="pointer-events-none absolute inset-x-6 top-24 h-[70vh] rounded-[50%] border border-cream/10"
      />
      <motion.div
        aria-hidden
        style={{ y: deep }}
        className="pointer-events-none absolute -right-28 top-28 hidden h-[54vw] w-[54vw] rounded-full border border-acid/25 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--cream) 1px, transparent 1px), linear-gradient(to bottom, var(--cream) 1px, transparent 1px)",
          backgroundSize: "clamp(44px, 7vw, 112px) clamp(44px, 7vw, 112px)",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />
      {/* meta strip */}
      <Reveal className="relative z-10 mx-auto flex max-w-[1700px] items-center justify-between px-6 md:px-10 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        <span>● Portfolio / 2020 — 26</span>
        <span className="hidden md:inline">50.07°N · 14.43°E</span>
        <span>Prague, CZ</span>
      </Reveal>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto mt-10 max-w-[1700px] px-6 md:mt-12 md:px-10"
      >
        <motion.h1
          style={{ y: y1 }}
          className="font-display uppercase text-[13vw] leading-[0.84] md:text-[clamp(7rem,14vw,16rem)] md:leading-[0.78]"
        >
          <motion.span
            className="block text-[10vw] md:text-[inherit]"
            initial={{ y: 120, opacity: 0, rotateX: 18 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Designer
          </motion.span>
          <InteractiveHeroWord />
          <motion.span
            className="block text-[11vw] md:text-[inherit]"
            initial={{ y: 120, opacity: 0, rotateX: 18 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            systems<span className="text-acid">.</span>
          </motion.span>
        </motion.h1>

        <div className="mt-8 grid grid-cols-12 gap-6 md:mt-10">
          <motion.p
            style={{ y: y3 }}
            className="col-span-12 md:col-span-5 md:col-start-7 text-balance text-lg md:text-2xl text-cream/85 font-light leading-snug"
          >
            <span className="font-serif italic text-cream">Polina Alekseeva</span> — independent
            UI/UX & digital designer building websites, products and brand systems for teams that
            take craft seriously.
          </motion.p>
        </div>

        <ParallaxLayer
          progress={scrollYProgress}
          distance={90}
          className="pointer-events-none absolute left-6 top-[38vh] hidden md:block font-serif italic text-[8vw] leading-none text-cream/[0.08]"
        >
          flow / depth / detail
        </ParallaxLayer>

        <motion.div
          style={{ y: y2 }}
          className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-5 md:mt-14"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            ↓ Scroll · 4 selected projects
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            EN · RU · CZ
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
