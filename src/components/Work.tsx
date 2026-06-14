import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Link } from "@tanstack/react-router";
import { useRef, type PointerEvent, type ReactNode } from "react";
import { Reveal } from "./MotionPrimitives";

type Project = {
  n: string;
  year: string;
  title: string;
  sub: string;
  role: string;
  tags: string[];
  link?: string;
  internalLink?: "/work/markedu" | "/work/orange-flowers" | "/work/spacefy-ai" | "/work/workchain";
  span: "full" | "wide" | "tall";
  visual: ReactNode;
};

/* visual fills (placeholder until real screenshots) */
const MarkeduVisual = (
  <div className="relative h-full w-full overflow-hidden bg-ink text-cream grain">
    <div
      className="absolute inset-0 opacity-[0.09]"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--cream) 1px, transparent 1px), linear-gradient(to bottom, var(--cream) 1px, transparent 1px)",
        backgroundSize: "clamp(44px,6vw,82px) clamp(44px,6vw,82px)",
      }}
    />
    <div className="absolute -right-[16%] -top-[28%] size-[78%] rounded-full border border-acid/30" />
    <div className="absolute -bottom-[20%] -left-[8%] size-[42%] rounded-full border border-cream/10" />

    <div className="absolute left-[6%] top-[21%] z-20 font-display text-[11vw] uppercase leading-[0.72] md:text-[7.5vw]">
      Mark
      <br />
      <span className="ml-[19%]">EDU</span>
      <span className="text-acid">.</span>
    </div>
    <div className="absolute bottom-[14%] left-[8%] z-20 font-serif text-[4.5vw] italic leading-none text-acid md:text-[3vw]">
      built to run.
    </div>

    <motion.div
      animate={{ rotate: [4, 1, 4], y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-[9%] right-[5%] z-10 w-[40%] overflow-hidden rounded-md border border-cream/20 bg-cream p-1 shadow-2xl"
    >
      <img
        src="/markedu/home-screen.webp"
        alt=""
        width={1440}
        height={1050}
        className="aspect-[4/3] w-full rounded object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    </motion.div>

    <div className="absolute bottom-[8%] right-[7%] z-20 hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-ink md:flex">
      <span className="size-1.5 rounded-full bg-[#ff4b10]" />
      Live product
    </div>
  </div>
);

const BloomVisual = (
  <div className="relative h-full w-full overflow-hidden bg-ink grain">
    <div
      className="absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--cream) 1px, transparent 1px), linear-gradient(to bottom, var(--cream) 1px, transparent 1px)",
        backgroundSize: "54px 54px",
      }}
    />
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [3, 1, 3] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-[22%] top-[8%] w-[78%] overflow-hidden rounded-md border border-cream/15 bg-cream p-1 shadow-2xl"
    >
      <img
        src="/orange/home-screen.webp"
        alt=""
        width={1440}
        height={1050}
        className="aspect-[4/3] w-full rounded object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
    <div className="absolute left-[7%] top-[12%] z-10 font-mono text-[8px] uppercase tracking-[0.2em] text-cream/50">
      Almaty · KZ / Florist e-commerce
    </div>
    <div className="absolute bottom-[12%] left-[7%] z-10 font-display text-[10vw] uppercase leading-[0.74] text-cream md:text-[6.4vw]">
      Orange
      <br />
      Flowers<span style={{ color: "#f9b335" }}>.</span>
    </div>
    <div
      className="absolute -bottom-[17%] -left-[15%] size-[48%] rounded-full border"
      style={{ borderColor: "#f05a2466" }}
    />
    <div
      className="absolute bottom-[9%] right-[7%] size-2 rounded-full"
      style={{ backgroundColor: "#f05a24" }}
    />
    <div className="absolute bottom-[8%] right-[10%] font-mono text-[8px] uppercase tracking-[0.18em] text-cream/45">
      Focused redesign
    </div>
  </div>
);

const planogramTiles = [2, 1, 3, 2, 4, 1, 2, 3, 2, 4, 3, 1, 2, 2, 4, 2, 3, 1, 4, 2];

function ScrollPlanogramTile({
  index,
  span,
  progress,
}: {
  index: number;
  span: number;
  progress: MotionValue<number>;
}) {
  const start = 0.08 + index * 0.025;
  const opacity = useTransform(progress, [start, start + 0.09, 0.84, 0.96], [0.1, 0.9, 0.9, 0.16]);
  const backgroundColor = useTransform(
    progress,
    [start, start + 0.09, 0.84, 0.96],
    [
      "rgba(210,255,77,0.02)",
      "rgba(210,255,77,0.28)",
      "rgba(210,255,77,0.28)",
      "rgba(210,255,77,0.03)",
    ],
  );
  const borderColor = useTransform(
    progress,
    [start, start + 0.09, 0.84, 0.96],
    [
      "rgba(247,244,236,0.12)",
      "rgba(210,255,77,0.85)",
      "rgba(210,255,77,0.85)",
      "rgba(247,244,236,0.14)",
    ],
  );

  return (
    <motion.span
      className="border"
      style={{
        gridColumn: `span ${span} / span ${span}`,
        opacity,
        backgroundColor,
        borderColor,
      }}
    />
  );
}

function FixtureTile({
  active,
  index,
  progress,
}: {
  active: boolean;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(
    progress,
    [0.08 + index * 0.018, 0.18 + index * 0.018],
    [0.18, active ? 0.8 : 0.32],
  );

  return (
    <motion.span
      className="h-5 border border-cream/15"
      style={{
        opacity,
        backgroundColor: active ? "rgba(210,255,77,0.13)" : "rgba(247,244,236,0.02)",
      }}
    />
  );
}

function SpacefyVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scanX = useTransform(scrollYProgress, [0.12, 0.82], ["0%", "100%"]);
  const coverage = useTransform(scrollYProgress, [0.12, 0.78], ["18%", "86%"]);
  const confidence = useTransform(scrollYProgress, [0.2, 0.86], ["8%", "72%"]);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden bg-ink grain">
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--cream) 1px, transparent 1px), linear-gradient(to bottom, var(--cream) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div className="absolute left-[6%] top-[12%] z-20 font-mono text-[8px] uppercase tracking-[0.2em] text-cream/50">
        Private B2B product · 2025
      </div>
      <div className="absolute left-[6%] top-[21%] hidden w-[23%] grid-cols-5 grid-rows-3 gap-1.5 border-x border-cream/20 p-2 md:grid">
        {[1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0].map((active, index) => (
          <FixtureTile
            key={index}
            index={index}
            active={Boolean(active)}
            progress={scrollYProgress}
          />
        ))}
        <span className="absolute -top-4 left-0 font-mono text-[6px] uppercase tracking-[0.18em] text-cream/35">
          Fixture map / A-03
        </span>
        <span className="absolute -bottom-4 right-0 font-mono text-[6px] uppercase tracking-[0.18em] text-acid/70">
          12 zones
        </span>
      </div>
      <div className="absolute bottom-[11%] left-[6%] z-20 font-display text-[10vw] uppercase leading-[0.75] text-cream md:text-[6.5vw]">
        Spacefy
        <br />
        <span className="text-acid">AI.</span>
      </div>
      <div className="absolute right-[4%] top-[9%] h-[72%] w-[62%] border-l border-t border-cream/10 pl-3 pt-3">
        <div className="mb-3 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-cream/40">
          <span>Abstracted planogram · X03 / Y12</span>
          <span className="text-acid">Scroll signal</span>
        </div>
        <div className="relative grid h-[calc(100%_-_1.5rem)] grid-cols-12 grid-rows-4 gap-1.5 overflow-hidden md:gap-2">
          {planogramTiles.map((span, index) => (
            <ScrollPlanogramTile key={index} index={index} span={span} progress={scrollYProgress} />
          ))}
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-px bg-acid shadow-[0_0_18px_3px_rgba(210,255,77,0.25)]"
            style={{ left: scanX }}
          />
          <div className="pointer-events-none absolute left-[23%] top-[20%] size-2 rounded-full border border-acid bg-ink">
            <span className="absolute left-3 top-0 font-mono text-[6px] uppercase tracking-[0.15em] text-acid">
              A4
            </span>
          </div>
          <div className="pointer-events-none absolute bottom-[22%] right-[26%] size-2 rounded-full border border-acid bg-ink">
            <span className="absolute bottom-3 right-0 font-mono text-[6px] uppercase tracking-[0.15em] text-acid">
              C8
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[7%] left-[42%] hidden w-[25%] space-y-2 font-mono text-[6px] uppercase tracking-[0.16em] text-cream/35 md:block">
        <div className="flex items-center gap-2">
          <span className="w-14">Coverage</span>
          <span className="h-px flex-1 bg-cream/10">
            <motion.span className="block h-px bg-acid" style={{ width: coverage }} />
          </span>
          <span>86</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-14">Confidence</span>
          <span className="h-px flex-1 bg-cream/10">
            <motion.span className="block h-px bg-acid" style={{ width: confidence }} />
          </span>
          <span>72</span>
        </div>
      </div>
      <div className="absolute bottom-[8%] right-[6%] flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-cream/45">
        <span className="size-1.5 rounded-full bg-acid" /> Product · UX · Frontend
      </div>
    </div>
  );
}

const WorkChainVisual = (
  <div className="relative h-full w-full overflow-hidden bg-[#1d31e9] text-white grain">
    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
    {[
      ["18%", "26%", "25%"],
      ["44%", "34%", "29%"],
      ["68%", "22%", "23%"],
    ].map(([left, top, size], index) => (
      <motion.span
        key={left}
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 3.5, delay: index * 0.55, repeat: Infinity }}
        className="absolute rounded-full border-2 border-white"
        style={{ left, top, width: size, aspectRatio: "1" }}
      />
    ))}
    <div className="absolute left-[6%] top-[12%] font-mono text-[8px] uppercase tracking-[0.2em] text-white/65">
      Startup concept · Web3 · 2024
    </div>
    <div className="absolute bottom-[12%] left-[6%] z-10 font-display text-[10vw] uppercase leading-[0.75] md:text-[6.5vw]">
      Work
      <br />
      Chain<span className="text-[#d9ea0c]">.</span>
    </div>
    <div className="absolute bottom-[8%] right-[6%] font-mono text-[8px] uppercase tracking-[0.18em] text-white/60">
      Trust through smart contracts
    </div>
  </div>
);

const projects: Project[] = [
  {
    n: "01",
    year: "2026",
    title: "Markedu",
    sub: "Educational platform",
    role: "Identity · Web · Automation",
    tags: ["Identity", "Web"],
    internalLink: "/work/markedu",
    span: "wide",
    visual: MarkeduVisual,
  },
  {
    n: "02",
    year: "2025",
    title: "Orange Flowers",
    sub: "Florist e-commerce",
    role: "UI/UX · Redesign",
    tags: ["E-commerce"],
    internalLink: "/work/orange-flowers",
    span: "tall",
    visual: BloomVisual,
  },
  {
    n: "03",
    year: "2025",
    title: "SpacefyAI",
    sub: "AI planogram tool",
    role: "Product · UX",
    tags: ["Product", "AI"],
    internalLink: "/work/spacefy-ai",
    span: "full",
    visual: <SpacefyVisual />,
  },
  {
    n: "04",
    year: "2024",
    title: "WorkChain",
    sub: "Web3 hiring startup",
    role: "Product · UX/UI",
    tags: ["Startup", "Web3"],
    internalLink: "/work/workchain",
    span: "wide",
    visual: WorkChainVisual,
  },
];

function ProjectTile({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    damping: 24,
    stiffness: 180,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    damping: 24,
    stiffness: 180,
  });

  const heightClass =
    p.span === "full" ? "aspect-[16/8]" : p.span === "tall" ? "aspect-[4/5]" : "aspect-[16/10]";

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const content = (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 44, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotateX, rotateY, transformPerspective: 1100 }}
        className={`relative overflow-hidden rounded-md border border-cream/10 will-change-transform ${heightClass}`}
      >
        <motion.div
          style={{ y, scale: imageScale }}
          className="absolute inset-0 -top-10 -bottom-10"
        >
          {p.visual}
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(1_0_0_/_0.20),transparent_42%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-cream/15 blur-xl transition-transform duration-1000 group-hover:translate-x-[420%]" />
        </div>
        {/* overlay info on hover */}
        <div className="absolute left-5 top-5 z-10 flex gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80">
          <span>{p.n}</span>
          <span>·</span>
          <span>{p.year}</span>
        </div>
        <div className="absolute right-5 top-5 z-10 flex gap-2 font-mono text-[10px] uppercase tracking-[0.3em]">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-cream/30 px-2 py-1 text-cream/80 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-display uppercase text-4xl md:text-6xl leading-none transition-transform duration-700 group-hover:translate-x-2">
          {p.title}
          <span className="text-acid">.</span>
        </h3>
        <div className="text-right">
          <div className="font-serif italic text-xl md:text-2xl text-cream/85">{p.sub}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
            {p.role}
            {(p.link || p.internalLink) && " ↗"}
          </div>
        </div>
      </div>
    </>
  );

  if (p.link) {
    return (
      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        data-cursor="view"
        data-cursor-label="Visit ↗"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        className="group block"
      >
        {content}
      </a>
    );
  }

  if (p.internalLink) {
    return (
      <Link
        to={p.internalLink}
        data-cursor="view"
        data-cursor-label="Case →"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        className="group block"
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      data-cursor="view"
      data-cursor-label="View"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="group block"
    >
      {content}
    </div>
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
          <Reveal className="col-span-12 md:col-span-10">
            <h2 className="font-display uppercase text-6xl md:text-9xl leading-[0.9]">
              Four projects<span className="text-acid">.</span>
              <br />
              <span className="text-outline">Different challenges.</span>
            </h2>
          </Reveal>
        </div>

        {/* alternating grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7">
            <ProjectTile p={projects[0]} />
          </div>
          <div className="col-span-12 md:col-span-5 md:mt-32">
            <ProjectTile p={projects[1]} />
          </div>
          <div className="col-span-12 mt-12">
            <ProjectTile p={projects[2]} />
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 mt-12">
            <ProjectTile p={projects[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
