import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type Project = {
  n: string;
  year: string;
  title: string;
  sub: string;
  role: string;
  tags: string[];
  link?: string;
  span: "full" | "wide" | "tall";
  visual: ReactNode;
};

/* visual fills (placeholder until real screenshots) */
const MarkeduVisual = (
  <div className="relative h-full w-full overflow-hidden bg-[oklch(0.16_0.005_240)]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,oklch(0.28_0.04_240),transparent_60%)]" />
    <div className="absolute inset-0 grid grid-cols-12 gap-px opacity-[0.08]">
      {Array.from({ length: 60 }).map((_, i) => <div key={i} className="bg-cream" />)}
    </div>
    <div className="absolute right-8 bottom-8 font-display uppercase text-[15vw] md:text-[10vw] leading-none text-cream">
      MK<span className="text-acid">/</span>
    </div>
  </div>
);

const BloomVisual = (
  <div className="relative h-full w-full overflow-hidden grain" style={{
    background: "radial-gradient(ellipse at 30% 25%, oklch(0.85 0.18 38), oklch(0.6 0.2 28) 45%, oklch(0.22 0.08 30) 100%)",
  }}>
    {[
      { l: "20%", t: "55%", s: 110, d: 0 },
      { l: "65%", t: "30%", s: 170, d: 0.3 },
      { l: "45%", t: "75%", s: 80, d: 0.6 },
    ].map((p, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6 + i, repeat: Infinity, delay: p.d }}
        className="absolute rounded-full bg-cream/30 blur-[2px] mix-blend-overlay"
        style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
      />
    ))}
    <div className="absolute left-8 bottom-8 font-display uppercase text-[12vw] md:text-[8vw] leading-none text-ink">
      bloom<span className="text-cream">.</span>
    </div>
  </div>
);

const SpacefyVisual = (
  <div className="relative h-full w-full overflow-hidden bg-ink p-6 md:p-10">
    <div className="absolute inset-0 opacity-25"
         style={{
           backgroundImage:
             "linear-gradient(to right, oklch(0.3 0.01 240) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.3 0.01 240) 1px, transparent 1px)",
           backgroundSize: "52px 52px",
         }} />
    <div className="relative grid grid-cols-10 gap-2 h-full">
      {Array.from({ length: 40 }).map((_, i) => {
        const hl = [3, 7, 12, 18, 22, 27, 31].includes(i);
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.015 }}
            viewport={{ once: true }}
            className={`rounded-md border ${hl ? "border-acid bg-acid/15" : "border-border bg-cream/[0.03]"}`}
          />
        );
      })}
    </div>
    <div className="absolute left-6 bottom-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-acid">
      <span className="size-1.5 rounded-full bg-acid animate-pulse" /> planogram.layout.v4
    </div>
  </div>
);

const RetailVisual = (
  <div className="relative h-full w-full overflow-hidden" style={{ background: "linear-gradient(160deg, oklch(0.72 0.17 48), oklch(0.32 0.10 40))" }}>
    <div className="absolute inset-0 grain opacity-90" />
    <div className="absolute inset-0 p-8 flex flex-col justify-between">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/80">Issue · 04 / Day 02</div>
      <div className="font-display uppercase text-[10vw] md:text-[6vw] leading-[0.9] text-ink">
        Retail<br /><span className="text-cream">in motion</span>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/70">✶ Prague · 2024</div>
    </div>
  </div>
);

const BrandVisual = (
  <div className="relative h-full w-full overflow-hidden grid grid-cols-3 grid-rows-2 gap-2 p-2 bg-ink">
    <div className="row-span-2 bg-cream flex items-center justify-center font-serif italic text-[10vw] md:text-[6vw] text-ink">a/p</div>
    <div className="bg-acid flex items-end p-3 font-display uppercase text-xs md:text-base text-ink">Logos</div>
    <div className="bg-secondary flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70">type · color · grid</div>
    <div className="col-span-2 p-3 flex items-end" style={{ background: "linear-gradient(180deg, oklch(0.26 0.01 240), oklch(0.16 0 0))" }}>
      <div className="grid grid-cols-4 gap-1 w-full">
        {["#0a0a0a","#f5efe6","#d2ff4d","#e07b3a"].map((c) => (
          <div key={c} className="aspect-square rounded" style={{ background: c }} />
        ))}
      </div>
    </div>
  </div>
);

const projects: Project[] = [
  { n: "01", year: "2024", title: "Markedu", sub: "Educational platform", role: "Identity · Web · Automation", tags: ["Identity", "Web"], link: "https://www.markedu.cz", span: "wide", visual: MarkeduVisual },
  { n: "02", year: "2024", title: "Orange Flowers", sub: "Florist e-commerce", role: "UI/UX · Redesign", tags: ["E-commerce"], link: "https://orange-flowers.kz", span: "tall", visual: BloomVisual },
  { n: "03", year: "2023", title: "SpacefyAI", sub: "AI planogram tool", role: "Product · UX", tags: ["Product", "AI"], span: "full", visual: SpacefyVisual },
  { n: "04", year: "2024", title: "Retail Innovation", sub: "Conference materials", role: "Editorial · Social", tags: ["Editorial"], span: "wide", visual: RetailVisual },
  { n: "05", year: "Ongoing", title: "Small giants", sub: "Brand systems", role: "Identity · Guidelines", tags: ["Identity"], span: "tall", visual: BrandVisual },
];

function ProjectTile({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const heightClass =
    p.span === "full" ? "aspect-[16/8]" :
    p.span === "tall" ? "aspect-[4/5]" :
    "aspect-[16/10]";

  const Wrapper: any = p.link ? "a" : "div";
  const wrapperProps = p.link
    ? { href: p.link, target: "_blank", rel: "noreferrer", "data-cursor": "view", "data-cursor-label": "Visit ↗" }
    : { "data-cursor": "view", "data-cursor-label": "View" };

  return (
    <Wrapper {...wrapperProps} className="group block">
      <div ref={ref} className={`relative overflow-hidden rounded-md ${heightClass}`}>
        <motion.div style={{ y }} className="absolute inset-0 -top-10 -bottom-10">
          {p.visual}
        </motion.div>
        {/* overlay info on hover */}
        <div className="absolute left-5 top-5 z-10 flex gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80">
          <span>{p.n}</span>
          <span>·</span>
          <span>{p.year}</span>
        </div>
        <div className="absolute right-5 top-5 z-10 flex gap-2 font-mono text-[10px] uppercase tracking-[0.3em]">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-cream/30 px-2 py-1 text-cream/80 backdrop-blur-sm">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-display uppercase text-4xl md:text-6xl leading-none transition-transform duration-700 group-hover:translate-x-2">
          {p.title}<span className="text-acid">.</span>
        </h3>
        <div className="text-right">
          <div className="font-serif italic text-xl md:text-2xl text-cream/85">{p.sub}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{p.role}{p.link && " ↗"}</div>
        </div>
      </div>
    </Wrapper>
  );
}

export function Work() {
  return (
    <section id="work" className="relative border-t border-border pt-24 pb-32">
      <div className="mx-auto max-w-[1700px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            (Work / 002)
          </div>
          <h2 className="col-span-12 md:col-span-10 font-display uppercase text-6xl md:text-9xl leading-[0.9]">
            Five projects<span className="text-acid">.</span><br />
            <span className="text-outline">Five worlds.</span>
          </h2>
        </div>

        {/* alternating grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7">          <ProjectTile p={projects[0]} /></div>
          <div className="col-span-12 md:col-span-5 md:mt-32"> <ProjectTile p={projects[1]} /></div>
          <div className="col-span-12 mt-12">                  <ProjectTile p={projects[2]} /></div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 mt-12"><ProjectTile p={projects[3]} /></div>
          <div className="col-span-12 md:col-span-5 md:col-start-1 md:-mt-32"><ProjectTile p={projects[4]} /></div>
        </div>
      </div>
    </section>
  );
}
