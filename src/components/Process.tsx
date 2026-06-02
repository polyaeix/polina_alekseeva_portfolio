import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Brief & goals", d: "Understanding the business, audience, problems and where the project really needs to land." },
  { n: "02", t: "Research & structure", d: "Competitors, journeys, content architecture — defining what the system has to do." },
  { n: "03", t: "Concept & design", d: "Wireframes, visual direction and interfaces built around clarity and business goals." },
  { n: "04", t: "System logic", d: "Connecting the design to CRM, email, forms, payments — the plumbing nobody sees." },
  { n: "05", t: "Build & review", d: "Final design, testing the flow, collecting feedback and tuning every detail." },
  { n: "06", t: "Launch & support", d: "Helping the project ship — then iterating with analytics and continued improvements." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="process" ref={ref} className="relative border-t border-border py-32 overflow-hidden">
      <div className="mx-auto max-w-[1700px] px-6 md:px-10 grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          (Process / 003)
        </div>
        <h2 className="col-span-12 md:col-span-10 font-display uppercase text-6xl md:text-9xl leading-[0.9]">
          From brief<br /><span className="text-outline">to shipped<span className="text-acid">.</span></span>
        </h2>
      </div>

      <ul className="mx-auto max-w-[1700px] px-6 md:px-10 border-t border-border">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group grid grid-cols-12 gap-4 border-b border-border py-8 transition-colors hover:bg-cream/[0.02]"
          >
            <div className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.25em] text-acid">
              {s.n}
            </div>
            <h3 className="col-span-10 md:col-span-4 font-display uppercase text-3xl md:text-5xl leading-none transition-transform duration-500 group-hover:translate-x-3">
              {s.t}
            </h3>
            <p className="col-span-12 md:col-span-7 text-cream/75 text-balance md:text-lg">
              {s.d}
            </p>
          </motion.li>
        ))}
      </ul>

      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-10 font-display uppercase text-[20vw] leading-none text-acid/[0.06] select-none"
      >
        METHOD
      </motion.div>
    </section>
  );
}
