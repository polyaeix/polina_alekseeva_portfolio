import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Check, Code2, Compass, LockKeyhole, MoveRight, Workflow } from "lucide-react";
import type { ReactNode } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveal } from "@/components/MotionPrimitives";
import { NextCase } from "@/components/NextCase";

export const Route = createFileRoute("/work/spacefy-ai")({
  head: () => ({
    meta: [
      { title: "SpacefyAI case study — Polina Alekseeva" },
      {
        name: "description",
        content:
          "A selected case study from a private B2B AI product shaped across product ownership, UX/UI and frontend development.",
      },
    ],
  }),
  component: SpacefyCase,
});

const acid = "#d2ff4d";

const process = [
  [
    "01",
    "Frame the product",
    "Translated an emerging business concept into a product structure, prioritised workflows and a practical delivery roadmap.",
  ],
  [
    "02",
    "Model complex workflows",
    "Turned specialist retail-planning tasks into understandable screens, states and repeatable actions.",
  ],
  [
    "03",
    "Design the interface",
    "Created the information architecture and UI patterns for data-heavy operational work.",
  ],
  [
    "04",
    "Build the frontend",
    "Implemented core interface flows and continuously aligned product decisions with technical constraints.",
  ],
  [
    "05",
    "Validate and iterate",
    "Used internal feedback and demos to refine priorities, terminology and interaction patterns.",
  ],
];

const features = [
  ["Unified workspace", "One entry point for categories, templates, planograms and analytics."],
  ["Repeatable templates", "Reusable structures reduce repetitive setup across planning tasks."],
  ["Operational overview", "Clear status and activity views support everyday decision-making."],
  [
    "Scalable foundation",
    "A modular interface supports the product as workflows and roles evolve.",
  ],
];

const planogramCells = [
  "col-span-3 row-span-2",
  "col-span-2",
  "col-span-4",
  "col-span-3 row-span-2",
  "col-span-2",
  "col-span-3",
  "col-span-2 row-span-2",
  "col-span-3",
  "col-span-2",
  "col-span-4",
  "col-span-3",
  "col-span-2",
];

function AbstractPlanogram() {
  return (
    <section className="border-y border-border bg-ink px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between gap-5 font-mono text-[8px] uppercase tracking-[0.2em] text-cream/35">
          <span>Abstracted system map</span>
          <span className="text-right" style={{ color: acid }}>
            Scroll to activate · No product data
          </span>
        </div>

        <div className="markedu-grid grain relative min-h-[780px] overflow-hidden border border-border p-5 md:min-h-[760px] md:p-10">
          <div className="absolute left-5 top-5 font-mono text-[7px] uppercase tracking-[0.18em] text-cream/35 md:left-10 md:top-10">
            Space model / Sector A-03
          </div>
          <div className="absolute right-5 top-5 flex gap-6 font-mono text-[7px] uppercase tracking-[0.18em] text-cream/35 md:right-10 md:top-10">
            <span>X 08</span>
            <span>Y 12</span>
            <span style={{ color: acid }}>Live model</span>
          </div>

          <div className="absolute inset-x-5 top-[18%] grid h-[42%] grid-cols-12 grid-rows-3 gap-2 md:inset-x-10 md:h-[48%] md:gap-3">
            {planogramCells.map((className, index) => (
              <motion.div
                key={index}
                initial={{
                  borderColor: "rgba(247,244,236,0.12)",
                  backgroundColor: "rgba(247,244,236,0.015)",
                }}
                whileInView={{
                  borderColor: "rgba(210,255,77,0.72)",
                  backgroundColor: "rgba(210,255,77,0.13)",
                }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.35, delay: index * 0.055 }}
                className={`relative border ${className}`}
              >
                <span className="absolute left-2 top-2 font-mono text-[6px] tracking-[0.15em] text-cream/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-5 top-[64%] h-px origin-left bg-acid md:inset-x-10 md:top-[70%]"
          />

          <div className="absolute inset-x-5 bottom-6 grid gap-5 md:inset-x-10 md:bottom-10 md:grid-cols-3">
            {[
              ["Coverage", "86", "Operational structure mapped"],
              ["Reusable patterns", "12", "Shared interaction foundations"],
              ["Product lenses", "03", "Ownership · Design · Frontend"],
            ].map(([label, value, detail], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + index * 0.12 }}
                className="border-t border-cream/15 pt-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-cream/35">
                    {label}
                  </span>
                  <span className="font-display text-3xl" style={{ color: acid }}>
                    {value}
                  </span>
                </div>
                <p className="mt-5 text-xs text-cream/45">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ThinkingPanel({
  caption,
  children,
  className = "",
}: {
  caption: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.figure
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className={`overflow-hidden border border-cream/15 bg-ink shadow-2xl ${className}`}
    >
      <div className="min-h-72 p-6 md:min-h-96 md:p-8">{children}</div>
      <figcaption className="border-t border-border px-6 py-4 font-mono text-[9px] uppercase tracking-[0.18em] text-cream/40">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

function SpacefyCase() {
  return (
    <main className="portfolio-case overflow-hidden bg-ink text-cream">
      <CustomCursor />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            to="/"
            hash="work"
            className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em]"
          >
            <ArrowLeft size={14} /> Work
          </Link>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:block">
            Case study · Private B2B product
          </span>
          <span
            className="flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em]"
            style={{ borderColor: `${acid}66`, color: acid }}
          >
            <LockKeyhole size={13} /> Confidential case
          </span>
        </div>
      </header>

      <section className="markedu-grid grain relative min-h-screen pt-28">
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1600px] flex-col justify-between px-5 pb-10 md:px-10">
          <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>
              <span style={{ color: acid }}>●</span> B2B · Retail technology
            </span>
            <span>2025 · Confidential product · Abstracted case</span>
          </div>

          <div className="relative py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-[20vw] uppercase leading-[0.7] md:text-[13vw]">
                SpacefyAI
              </h1>
              <p
                className="ml-[16%] mt-7 font-serif text-[9vw] italic leading-none md:text-[5vw]"
                style={{ color: acid }}
              >
                from concept to product.
              </p>
            </motion.div>
            <div
              className="pointer-events-none absolute right-[7%] top-[8%] size-[24vw] max-w-[390px] rounded-full border"
              style={{ borderColor: `${acid}25` }}
            />
          </div>

          <div className="grid gap-8 border-t border-border pt-7 md:grid-cols-12">
            <p className="max-w-2xl text-xl leading-relaxed md:col-span-7 md:text-3xl">
              A private B2B AI-assisted planning product shaped from ambiguous requirements into
              usable product flows, interface logic and a working frontend MVP.
            </p>
            <div className="grid grid-cols-2 gap-5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground md:col-span-5">
              <div>
                <span className="block text-cream/35">My role</span>
                <span className="mt-2 block text-cream">
                  Product owner · Product designer · Frontend developer
                </span>
              </div>
              <div>
                <span className="block text-cream/35">Access</span>
                <span className="mt-2 block text-cream">Company-led demos only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              01 / Project
            </div>
            <Reveal className="col-span-12 md:col-span-8">
              <h2 className="font-display text-[12vw] uppercase leading-[0.85] md:text-[7vw]">
                A complex tool.
                <br />
                <span className="text-outline">Made workable.</span>
              </h2>
              <p className="mt-10 max-w-4xl text-lg leading-relaxed text-cream/65 md:text-2xl">
                SpacefyAI is a company-delivered product for specialist retail workflows. My work
                connected product direction, user roles, UX decisions and frontend implementation,
                helping move the idea toward a coherent B2B tool that could be demonstrated, tested
                and developed further.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {[
              ["Industry", "Retail technology"],
              ["Product type", "Private B2B platform"],
              ["Role", "Product · Design · Frontend"],
              ["Availability", "Through company demo"],
            ].map(([label, value]) => (
              <div key={label} className="bg-ink p-6">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cream/35">
                  {label}
                </span>
                <p className="mt-6 text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/35 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: acid }}
              >
                02 / Challenge
              </span>
              <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] md:text-7xl">
                Structure before polish.
              </h2>
            </div>
            <div className="space-y-6 md:col-span-7 md:col-start-6">
              <p className="text-xl leading-relaxed text-cream/70 md:text-3xl">
                The challenge was not simply designing screens. It was defining how a specialist,
                data-heavy service should behave while the product itself was still taking shape.
              </p>
              {[
                "Turn an early concept into an understandable product structure",
                "Map specialist workflows, roles, states and edge cases",
                "Create reusable UI patterns for a product expected to evolve",
                "Keep product, UX and frontend decisions aligned through fast iteration",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-t border-border pt-4 text-cream/60"
                >
                  <Check size={16} style={{ color: acid }} className="mt-1 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AbstractPlanogram />

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              03 / Product thinking
            </div>
            <Reveal className="col-span-12 md:col-span-8">
              <h2 className="font-display text-[12vw] uppercase leading-[0.85] md:text-[7vw]">
                Decisions over
                <br />
                <span className="font-serif font-normal italic lowercase" style={{ color: acid }}>
                  decoration.
                </span>
              </h2>
              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-cream/60">
                The product itself remains confidential. These abstracted artefacts show how I
                connected business goals, user needs, interface decisions and implementation without
                exposing proprietary workflows, data structures or technology.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid items-start gap-8 md:grid-cols-12 md:gap-5">
            <ThinkingPanel caption="01 / Three roles · One product" className="md:col-span-7">
              <div className="relative grid min-h-60 place-items-center md:min-h-80">
                {[
                  {
                    label: "Product owner",
                    detail: "Priority · Scope · Value",
                    position: "left-0 top-4 md:left-[4%]",
                    icon: Compass,
                  },
                  {
                    label: "Product designer",
                    detail: "Flow · Clarity · System",
                    position: "right-0 top-4 md:right-[4%]",
                    icon: Workflow,
                  },
                  {
                    label: "Frontend developer",
                    detail: "Feasibility · Build · Iterate",
                    position: "bottom-0 left-1/2 -translate-x-1/2",
                    icon: Code2,
                  },
                ].map(({ label, detail, position, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    animate={{ y: [0, index === 1 ? 6 : -6, 0] }}
                    transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute w-[45%] border border-cream/15 bg-secondary/90 p-4 ${position}`}
                  >
                    <Icon size={18} style={{ color: acid }} />
                    <h3 className="mt-5 font-display text-xl uppercase md:text-2xl">{label}</h3>
                    <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.16em] text-cream/40">
                      {detail}
                    </p>
                  </motion.div>
                ))}
                <div
                  className="grid size-24 place-items-center rounded-full border bg-ink text-center font-mono text-[8px] uppercase tracking-[0.16em] md:size-32"
                  style={{ borderColor: `${acid}80`, color: acid }}
                >
                  One product
                  <br />
                  context
                </div>
              </div>
            </ThinkingPanel>

            <ThinkingPanel caption="02 / Decision loop" className="md:col-span-5 md:mt-24">
              <div className="space-y-3">
                {[
                  ["Need", "What operational problem matters?"],
                  ["Model", "How should the workflow behave?"],
                  ["Prototype", "Can the idea be understood quickly?"],
                  ["Build", "Can it work within real constraints?"],
                  ["Learn", "What should change next?"],
                ].map(([label, detail], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.09 }}
                    className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-t border-border py-3"
                  >
                    <span className="font-mono text-[9px]" style={{ color: acid }}>
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl uppercase">{label}</h3>
                      <p className="mt-1 text-xs text-cream/45">{detail}</p>
                    </div>
                    <MoveRight size={15} className="text-cream/30" />
                  </motion.div>
                ))}
              </div>
            </ThinkingPanel>

            <ThinkingPanel
              caption="03 / Product principles"
              className="md:col-span-8 md:col-start-3 md:mt-8"
            >
              <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {[
                  [
                    "Make complexity legible",
                    "Organise specialist work without oversimplifying it.",
                  ],
                  [
                    "Design for repetition",
                    "Turn repeated actions into predictable product patterns.",
                  ],
                  ["Prioritise the next decision", "Help users understand what matters now."],
                  ["Build to learn", "Use implementation to test and improve product assumptions."],
                ].map(([title, detail], index) => (
                  <motion.div
                    key={title}
                    whileHover={{ backgroundColor: "rgba(210,255,77,0.06)" }}
                    className="min-h-40 bg-ink p-5"
                  >
                    <span className="font-mono text-[9px]" style={{ color: acid }}>
                      0{index + 1}
                    </span>
                    <h3 className="mt-7 font-display text-2xl uppercase">{title}</h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/45">{detail}</p>
                  </motion.div>
                ))}
              </div>
            </ThinkingPanel>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/35 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              04 / Process
            </div>
            <div className="col-span-12 md:col-span-9">
              {process.map(([number, title, copy]) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="grid grid-cols-12 gap-4 border-t border-border py-7"
                >
                  <span className="col-span-2 font-mono text-[10px]" style={{ color: acid }}>
                    {number}
                  </span>
                  <h3 className="col-span-10 font-display text-2xl uppercase md:col-span-4 md:text-4xl">
                    {title}
                  </h3>
                  <p className="col-span-10 col-start-3 max-w-xl text-sm leading-relaxed text-cream/60 md:col-span-5 md:col-start-7 md:text-base">
                    {copy}
                  </p>
                  <MoveRight className="hidden justify-self-end md:block" style={{ color: acid }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              05 / Key features
            </div>
            <div className="col-span-12 grid gap-px overflow-hidden border border-border bg-border md:col-span-9 md:grid-cols-2">
              {features.map(([title, copy]) => (
                <article key={title} className="bg-ink p-7 md:min-h-56">
                  <h3 className="font-display text-3xl uppercase">{title}</h3>
                  <p className="mt-10 max-w-sm leading-relaxed text-cream/55">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
            06 / Outcome
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[13vw] uppercase leading-[0.82] md:text-[8vw]">
              One person.
              <br />
              <span className="text-outline">Three lenses.</span>
            </h2>
            <p className="mt-10 max-w-4xl text-xl leading-relaxed text-cream/65 md:text-3xl">
              The strongest outcome was the connection between product strategy, interface design
              and implementation. Decisions could move from an operational need to a designed and
              working frontend flow without losing context between disciplines.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {[
                ["Working", "frontend flows ready for internal demos"],
                ["Reusable", "patterns for evolving specialist workflows"],
                ["Aligned", "product, design and technical decisions"],
              ].map(([strong, copy]) => (
                <div key={strong} className="bg-secondary/60 p-5">
                  <div className="font-display text-4xl uppercase" style={{ color: acid }}>
                    {strong}
                  </div>
                  <div className="mt-2 text-sm text-cream/55">{copy}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
            07 / Reflection
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-3xl italic leading-tight text-cream/80 md:text-6xl">
              Working across ownership, design and frontend taught me to treat every interface
              decision as a product decision.
            </p>
            <p className="mt-10 max-w-3xl leading-relaxed text-cream/55 md:text-lg">
              This case also reflects an important professional constraint: a strong portfolio does
              not need to expose confidential work. It can communicate responsibility, complexity
              and judgement while protecting the product and its clients.
            </p>
          </div>
        </div>
      </section>

      <NextCase
        to="/work/workchain"
        title="WorkChain"
        description="A Web3 hiring startup concept designed around transparent agreements and trusted payments."
      />

      <footer className="px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>SpacefyAI · Selected case study</span>
          <Link to="/" hash="work" className="transition-colors hover:text-cream">
            Back to work
          </Link>
        </div>
      </footer>
    </main>
  );
}
