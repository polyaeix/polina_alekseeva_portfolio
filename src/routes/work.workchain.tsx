import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  FileSignature,
  Search,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveal } from "@/components/MotionPrimitives";
import { NextCase } from "@/components/NextCase";

export const Route = createFileRoute("/work/workchain")({
  head: () => ({
    meta: [
      { title: "WorkChain startup case study — Polina Alekseeva" },
      {
        name: "description",
        content:
          "A Web3 hiring startup concept designed to make freelance agreements and payments more transparent through smart contracts.",
      },
    ],
  }),
  component: WorkChainCase,
});

const blue = "#1d31e9";
const lime = "#d9ea0c";
const ink = "#1e1e1e";

const stages = ["Empathize", "Define", "Ideate", "Prototype", "Test"];

const mediaSizes: Record<string, [number, number]> = {
  "/workchain/6.webp": [1400, 794],
  "/workchain/9.webp": [1400, 1227],
  "/workchain/10.webp": [1400, 704],
  "/workchain/11.mp4": [1920, 1080],
};

function Media({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  const [width, height] = mediaSizes[src] ?? [1400, 900];
  const mediaRef = useRef<HTMLDivElement>(null);
  const mediaInView = useInView(mediaRef, { once: true, margin: "600px" });

  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      className={className}
    >
      <div ref={mediaRef} className="overflow-hidden border border-black/15 bg-white">
        {src.endsWith(".mp4") ? (
          <video
            src={mediaInView ? src : undefined}
            aria-label={alt}
            width={width}
            height={height}
            className="block h-auto w-full"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
        ) : (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="block h-auto w-full"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <figcaption className="mt-3 font-mono text-[8px] uppercase tracking-[0.18em] text-black/45">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

function WorkChainCase() {
  return (
    <main className="overflow-hidden bg-white text-[#1e1e1e]">
      <CustomCursor />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#1d31e9]/90 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            to="/"
            hash="work"
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]"
          >
            <ArrowLeft size={14} /> Work
          </Link>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/60 md:block">
            Startup case · Product design
          </span>
          <span className="rounded-full border border-[#d9ea0c] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#d9ea0c]">
            2024 · Concept
          </span>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden bg-[#1d31e9] px-5 pb-10 pt-28 text-white md:px-10">
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1600px] flex-col justify-between">
          <div className="flex justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-white/55">
            <span>Web3 · Future of work</span>
            <span>Bachelor thesis · 5 months</span>
          </div>

          <div className="relative py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h1 className="font-display text-[19vw] uppercase leading-[0.72] md:text-[13vw]">
                Work
                <br />
                Chain<span style={{ color: lime }}>.</span>
              </h1>
              <p className="ml-[18%] mt-7 max-w-3xl text-xl leading-relaxed text-white/75 md:text-3xl">
                A startup concept for trusted freelance hiring, agreements and payments powered by
                smart contracts.
              </p>
            </motion.div>

            <div className="pointer-events-none absolute right-[5%] top-[2%] hidden size-[32vw] max-w-[470px] md:block">
              {[
                ["0%", "0%"],
                ["38%", "0%"],
                ["19%", "34%"],
              ].map(([left, top], index) => (
                <motion.span
                  key={left + top}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 4, delay: index * 0.45, repeat: Infinity }}
                  className="absolute size-[48%] rounded-full border-2 border-white"
                  style={{ left, top, backgroundColor: index === 2 ? `${lime}55` : "transparent" }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/25 pt-6 font-mono text-[8px] uppercase tracking-[0.17em] text-white/60 md:grid-cols-4">
            {[
              ["Role", "Product designer · UX/UI"],
              ["Product", "Mobile + web platform"],
              ["Method", "Design thinking"],
              ["Deliverable", "Validated prototype"],
            ].map(([label, value]) => (
              <div key={label}>
                <span className="block text-white/35">{label}</span>
                <span className="mt-2 block text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40 md:col-span-3">
              01 / Opportunity
            </span>
            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[12vw] uppercase leading-[0.84] md:text-[7vw]">
                Trust is the
                <br />
                <span style={{ color: blue }}>real product.</span>
              </h2>
              <p className="mt-10 max-w-4xl text-xl leading-relaxed text-black/60 md:text-3xl">
                Freelancers need confidence they will be paid. Clients need confidence that agreed
                work will be delivered. WorkChain explored how transparent agreements and automated
                payments could reduce risk for both sides.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px border border-black/15 bg-black/15 md:grid-cols-3">
            {[
              [
                "01",
                "Unclear listings",
                "Job offers can be vague, misleading or impossible to verify.",
              ],
              [
                "02",
                "Fragile agreements",
                "Expectations and responsibilities are often scattered across conversations.",
              ],
              ["03", "Payment risk", "Delayed or disputed payments erode trust on both sides."],
            ].map(([n, title, copy]) => (
              <article key={n} className="bg-white p-6 md:min-h-64">
                <span className="font-mono text-[9px]" style={{ color: blue }}>
                  {n}
                </span>
                <h3 className="mt-12 font-display text-3xl uppercase">{title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-black/50">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1e1e1e] px-5 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 md:col-span-3">
              02 / Product thesis
            </span>
            <div className="md:col-span-8">
              <h2 className="font-display text-[12vw] uppercase leading-[0.84] md:text-[7vw]">
                One agreement.
                <br />
                <span style={{ color: lime }}>Two protected sides.</span>
              </h2>
            </div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {[
              [
                "Freelancer",
                "Find relevant work, agree clear terms, complete the project and receive payment automatically.",
              ],
              [
                "Client",
                "Create a clear brief, select talent, track delivery and release payment against the agreement.",
              ],
            ].map(([title, copy], index) => (
              <motion.article
                key={title}
                whileHover={{ y: -6 }}
                className="border border-white/15 p-7 md:min-h-72"
                style={{ backgroundColor: index ? `${lime}12` : `${blue}22` }}
              >
                <span
                  className="font-mono text-[8px] uppercase tracking-[0.18em]"
                  style={{ color: lime }}
                >
                  Side 0{index + 1}
                </span>
                <h3 className="mt-12 font-display text-5xl uppercase">{title}</h3>
                <p className="mt-6 max-w-xl leading-relaxed text-white/55">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40 md:col-span-3">
              03 / Process
            </span>
            <div className="md:col-span-9">
              <h2 className="font-display text-[12vw] uppercase leading-[0.84] md:text-[7vw]">
                From ambiguity to a testable product.
              </h2>
              <div className="mt-14 grid gap-px border border-black/15 bg-black/15 md:grid-cols-5">
                {stages.map((stage, index) => (
                  <motion.div
                    key={stage}
                    whileHover={{ backgroundColor: lime }}
                    className="bg-white p-5 transition-colors"
                  >
                    <span className="font-mono text-[8px] text-black/40">0{index + 1}</span>
                    <p className="mt-12 font-display text-xl uppercase">{stage}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-12">
            <Media
              src="/workchain/6.webp"
              alt="WorkChain user research and personas"
              caption="Research · Needs and pain points"
              className="md:col-span-7"
            />
            <Media
              src="/workchain/9.webp"
              alt="WorkChain dual user flow"
              caption="System thinking · Two connected flows"
              className="md:col-span-5"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#d9ea0c] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45 md:col-span-3">
              04 / Solution
            </span>
            <div className="md:col-span-8">
              <h2 className="font-display text-[13vw] uppercase leading-[0.8] md:text-[8vw]">
                A contract-led hiring loop.
              </h2>
              <p className="mt-10 max-w-3xl text-xl leading-relaxed text-black/60 md:text-3xl">
                The concept connects discovery, negotiation, delivery and payment into one
                continuous experience instead of treating them as separate tools.
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-px border border-black/20 bg-black/20 md:grid-cols-4">
            {[
              [Search, "Discover", "Match projects and talent through relevant filters."],
              [FileSignature, "Agree", "Turn negotiated conditions into an explicit agreement."],
              [ShieldCheck, "Deliver", "Keep progress and responsibilities visible."],
              [Wallet, "Release", "Automate payment when agreed work is accepted."],
            ].map(([Icon, title, copy]) => (
              <article key={title as string} className="bg-[#d9ea0c] p-6 md:min-h-64">
                <Icon size={25} />
                <h3 className="mt-12 font-display text-3xl uppercase">{title as string}</h3>
                <p className="mt-5 text-sm leading-relaxed text-black/55">{copy as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d31e9] px-5 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                05 / Prototype
              </span>
              <h2 className="mt-7 font-display text-[13vw] uppercase leading-[0.8] md:text-[8vw]">
                Designed to prove the loop.
              </h2>
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Media
              src="/workchain/10.webp"
              alt="WorkChain connected prototype"
              caption="Connected prototype · Core scenarios"
            />
            <Media
              src="/workchain/11.mp4"
              alt="WorkChain product prototype animation"
              caption="Prototype walkthrough · Mobile interaction"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40 md:col-span-3">
              06 / Outcome
            </span>
            <div className="md:col-span-8">
              <h2 className="font-display text-[13vw] uppercase leading-[0.8] md:text-[8vw]">
                Clear enough to move forward.
              </h2>
              <p className="mt-10 max-w-4xl text-xl leading-relaxed text-black/60 md:text-3xl">
                Informal usability checks validated the main flows. Participants responded most
                positively to clarity and ease of use, while payment trust emerged as the strongest
                opportunity for further development.
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ["70", "Clarity & ease of use"],
              ["20", "Trust in payments"],
              ["10", "Minor suggestions"],
            ].map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="border-t-2 pt-5"
                style={{ borderColor: index === 1 ? lime : blue }}
              >
                <span className="font-display text-8xl" style={{ color: index === 1 ? ink : blue }}>
                  {value}
                </span>
                <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-black/45">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1e1e1e] px-5 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-12">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 md:col-span-3">
            07 / Reflection
          </span>
          <div className="md:col-span-8">
            <p className="font-serif text-3xl italic leading-tight text-white/85 md:text-6xl">
              Designing WorkChain taught me to treat trust as an interaction, not a claim.
            </p>
            <div className="mt-12 space-y-4">
              {[
                "Applied Design Thinking from research through testing",
                "Translated blockchain capability into understandable user value",
                "Designed a two-sided product with connected but distinct journeys",
                "Built a realistic mobile-first prototype ready for further development",
              ].map((item) => (
                <div key={item} className="flex gap-3 border-t border-white/15 pt-4 text-white/60">
                  <Check size={16} style={{ color: lime }} className="mt-1 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NextCase
        to="/work/markedu"
        title="MarkEDU"
        description="A full-cycle educational platform connecting brand, website, CRM, payments and communication."
      />

      <footer className="border-t border-black/15 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-black/45">
          <span>WorkChain · Startup concept · 2024</span>
          <Link
            to="/"
            hash="work"
            className="flex items-center gap-2 transition-colors hover:text-black"
          >
            Back to work <ArrowUpRight size={13} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
