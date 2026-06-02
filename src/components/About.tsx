import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const marquee = [
  "Websites", "Brand Identity", "Product Design", "UX Research",
  "Landing Pages", "Web Apps", "Design Systems", "Email Campaigns",
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative border-t border-border py-24">
      {/* marquee strip */}
      <div className="overflow-hidden border-b border-border pb-8 mb-24">
        <div className="flex marquee-track gap-10 whitespace-nowrap font-display uppercase text-7xl md:text-[8vw] leading-none">
          {[...marquee, ...marquee].map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              {w}
              <span className="text-acid">●</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1700px] px-6 md:px-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          (About / 001)
        </div>

        <motion.div style={{ y }} className="col-span-12 md:col-span-9 space-y-12">
          <p className="font-display uppercase text-3xl md:text-6xl leading-[1.0] text-balance">
            I design <span className="text-acid">websites</span>, products
            and brand identities — focused on usability, conversion
            and customer journeys that <span className="font-serif italic lowercase text-cream/90">do the heavy lifting</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-border">
            {[
              { k: "Services", v: ["Web & product design", "Brand identity", "UX research & flows", "Marketing & email"] },
              { k: "Industries", v: ["Retail technology", "Education", "E-commerce", "Startups & SMB"] },
              { k: "Languages", v: ["English", "Russian", "Czech"] },
            ].map((b) => (
              <div key={b.k}>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid mb-3">{b.k}</div>
                <ul className="space-y-1 text-cream/85">
                  {b.v.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
