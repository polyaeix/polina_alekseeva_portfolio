import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ParallaxLayer, Reveal } from "./MotionPrimitives";

const marquee = [
  "Websites",
  "Brand Identity",
  "Product Design",
  "UX Research",
  "Landing Pages",
  "Web Apps",
  "Design Systems",
  "Email Campaigns",
];

const experience = [
  {
    year: "2025",
    role: "Product Developer / UX Engineer",
    company: "SpacefyAI",
    note: "Took a complex B2B product from concept to a working MVP in roughly eight weeks.",
  },
  {
    year: "2024—25",
    role: "Consultant / Data Integrator",
    company: "Retail technology",
    note: "Connected data, automation and product communication for operational teams.",
  },
  {
    year: "2024—25",
    role: "UX/UI Designer",
    company: "CrowdShelfAI",
    note: "Simplified AI-assisted retail workflows, roles and interface logic.",
  },
  {
    year: "2023—24",
    role: "Product Researcher",
    company: "Syntagma Labs · Web3",
    note: "Turned emerging technology and user research into clear product directions.",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const panelY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden border-t border-border py-24">
      {/* marquee strip */}
      <div className="mb-24 overflow-hidden border-b border-border pb-8">
        <div className="flex marquee-track gap-10 whitespace-nowrap font-display uppercase text-7xl md:text-[8vw] leading-none">
          {[...marquee, ...marquee].map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              {w}
              <span className="text-acid">●</span>
            </span>
          ))}
        </div>
        <div className="mt-5 flex marquee-track-reverse gap-8 whitespace-nowrap font-serif italic text-4xl leading-none text-cream/35 md:text-[5vw]">
          {[
            "Strategy",
            "Interface",
            "Motion",
            "Identity",
            "Systems",
            "Strategy",
            "Interface",
            "Motion",
            "Identity",
            "Systems",
          ].map((w, i) => (
            <span key={`${w}-${i}`}>{w} /</span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          (About / 001)
        </div>

        <motion.div style={{ y }} className="col-span-12 space-y-12 md:col-span-10">
          <Reveal>
            <p className="max-w-6xl text-balance font-display text-3xl uppercase leading-[1.0] md:text-6xl">
              I turn complex ideas into <span className="text-acid">working digital products</span>,
              websites and business systems that{" "}
              <span className="font-serif italic lowercase text-cream/90">
                do the heavy lifting
              </span>
              .
            </p>
          </Reveal>

          <div className="grid grid-cols-1 items-start gap-10 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.62fr)] lg:gap-16">
            <div className="space-y-12">
              <Reveal delay={0.06}>
                <p className="max-w-4xl text-lg leading-relaxed text-cream/60 md:text-2xl">
                  My work connects product thinking, UX/UI, visual identity and implementation. I am
                  especially useful when a team needs to shape an early idea, simplify a complex
                  workflow or connect the customer experience with the operational system behind it.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-y border-border">
                  {experience.map((item) => (
                    <div
                      key={`${item.year}-${item.company}`}
                      className="grid gap-3 border-b border-border py-5 last:border-b-0 md:grid-cols-[6rem_1fr]"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-acid">
                        {item.year}
                      </div>
                      <div className="grid gap-2 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                        <div>
                          <div className="font-display text-lg uppercase leading-tight text-cream">
                            {item.role}
                          </div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/45">
                            {item.company}
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-cream/55">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-acid">
                      Education
                    </div>
                    <p className="text-cream/85">MBA · Business Analysis</p>
                    <p className="text-sm text-cream/45">
                      Czech University of Life Sciences · 2025—27
                    </p>
                    <p className="mt-4 text-cream/85">BSc · Information Media & Services</p>
                    <p className="text-sm text-cream/45">
                      Prague University of Economics · 2021—25
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-acid">
                      Selected evidence
                    </div>
                    <p className="text-cream/85">Concept → working MVP in ~8 weeks</p>
                    <p className="mt-2 text-cream/85">
                      Product, design and implementation in one process
                    </p>
                    <a
                      href="/cv-PolinaAlekseeva.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex border-b border-acid pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-acid transition-colors hover:text-cream"
                    >
                      Full CV ↗
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <motion.figure style={{ y: panelY }} className="about-portrait lg:sticky lg:top-28">
              <img
                src="/polina-about.jpg"
                alt="Polina Alekseeva in Rome"
                width={1400}
                height={1866}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="about-portrait__green" aria-hidden />
              <div className="about-portrait__dots" aria-hidden />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-16 font-mono text-[9px] uppercase tracking-[0.22em] text-cream/70">
                <span>Polina Alekseeva</span>
                <span>Product · UX · Frontend</span>
              </figcaption>
            </motion.figure>
          </div>

          <div className="grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-3">
            {[
              {
                k: "Services",
                v: [
                  "Product strategy & ownership",
                  "Web & product design",
                  "UX research & flows",
                  "Frontend & automation",
                ],
              },
              {
                k: "Industries",
                v: ["Retail technology", "Education", "E-commerce", "Startups & SMB"],
              },
              { k: "Languages", v: ["English", "Russian", "Czech"] },
            ].map((b) => (
              <Reveal key={b.k} delay={0.04}>
                <div>
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-acid">
                    {b.k}
                  </div>
                  <ul className="space-y-1 text-cream/85">
                    {b.v.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </motion.div>
      </div>

      <ParallaxLayer
        progress={scrollYProgress}
        distance={70}
        className="pointer-events-none absolute bottom-12 left-6 font-mono text-[11px] uppercase tracking-[0.35em] text-acid/60"
      >
        scroll-sensitive portfolio system
      </ParallaxLayer>
    </section>
  );
}
