import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Check, MoveDown, MoveRight } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveal } from "@/components/MotionPrimitives";
import { NextCase } from "@/components/NextCase";

export const Route = createFileRoute("/work/markedu")({
  head: () => ({
    meta: [
      { title: "MarkEDU case study — Polina Alekseeva" },
      {
        name: "description",
        content:
          "Brand, website and complete automation for a European marketing education platform.",
      },
    ],
  }),
  component: MarkeduCase,
});

const built = [
  [
    "01",
    "Discovery & structure",
    "Mapped audiences, offers and content relationships into a clear information architecture.",
  ],
  [
    "02",
    "Brand & interface system",
    "Created a distinctive visual language and reusable rules that stay consistent across many page types.",
  ],
  [
    "03",
    "Product UX & development",
    "Designed and built responsive journeys for discovery, comparison, application and contact.",
  ],
  [
    "04",
    "Operations & automation",
    "Connected the public experience with CRM, payments and communication tools while keeping internal details private.",
  ],
  [
    "05",
    "Quality assurance & launch",
    "Tested critical journeys, configured deployment and prepared the platform for ongoing growth.",
  ],
];

const system = ["Website", "Lead form", "CRM", "Stripe", "GetCourse", "Email"];

const goals = [
  {
    number: "01",
    title: "Clarify the offer",
    copy: "Help different audiences quickly understand the available formats, their value and the right next step.",
  },
  {
    number: "02",
    title: "Create a scalable system",
    copy: "Build reusable page patterns and visual rules that support new programs without redesigning the platform each time.",
  },
  {
    number: "03",
    title: "Connect the customer journey",
    copy: "Make applications, payments, lead management and communication feel like one coherent experience.",
  },
  {
    number: "04",
    title: "Reduce manual work",
    copy: "Support the team with dependable operational flows while keeping sensitive business logic private.",
  },
];

function MarkeduCase() {
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
            Case study · Full-cycle digital product
          </span>
          <a
            href="https://www.markedu.cz/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-acid px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink transition-transform hover:scale-105 sm:flex"
          >
            <span className="md:hidden">Live</span>
            <span className="hidden md:inline">Live site</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </header>

      <section className="markedu-grid grain relative min-h-screen pt-28">
        <div className="pointer-events-none absolute -right-32 top-28 hidden size-[42vw] rounded-full border border-acid/20 md:block" />
        <div className="pointer-events-none absolute -left-24 bottom-20 hidden size-56 rounded-full border border-cream/10 md:block" />
        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1600px] flex-col justify-between px-5 pb-8 md:px-10 md:pb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>
              <b className="text-acid">●</b> Prague · EU &nbsp;/&nbsp; Education platform
            </span>
            <span className="hidden md:inline">2026 — ongoing</span>
          </div>

          <h1 className="mt-14 min-w-0 font-display text-[13.5vw] leading-[0.72] md:text-[14.8vw]">
            <span className="block">MarkEDU</span>
            <span className="ml-[12%] mt-5 block font-serif text-[9.5vw] font-normal italic lowercase leading-[0.8] text-acid md:text-[7vw]">
              built to run.
            </span>
          </h1>

          <div className="mt-16 grid min-w-0 grid-cols-12 items-end gap-6 md:mt-10">
            <div className="col-span-12 min-w-0 md:col-span-4">
              <p className="w-[calc(100vw-2.5rem)] max-w-full text-base leading-snug md:w-auto md:max-w-[34ch] md:text-2xl">
                <span className="block">A website that does more than look good.</span>
                <span className="block">It sells, captures, connects and communicates.</span>
              </p>
            </div>
            <div className="col-span-12 min-w-0 md:col-span-3 md:col-start-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                My role
              </div>
              <p className="mt-2 w-[calc(100vw-2.5rem)] max-w-full text-xs leading-relaxed md:w-auto md:text-sm">
                <span className="block">Strategy · Identity · UX/UI · Development</span>
                <span className="block">Automation · Launch</span>
              </p>
            </div>
            <div className="hidden justify-end md:col-span-2 md:col-start-11 md:flex">
              <div className="grid size-20 place-items-center rounded-full border border-acid/40 text-acid">
                <MoveDown size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-3 py-3 md:px-5 md:py-5">
        <motion.div
          initial={{ y: 50, rotate: -1.5, opacity: 0 }}
          whileInView={{ y: 0, rotate: -1.5, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-[1540px] overflow-hidden rounded-md border border-cream/15 bg-cream p-1.5 shadow-2xl md:p-2"
        >
          <img
            src="/markedu/home-screen.webp"
            alt="MarkEDU home page"
            width={1440}
            height={1050}
            className="w-full rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        <div className="mx-auto mt-8 flex max-w-[1540px] justify-between px-2 pb-5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>01 / Homepage</span>
          <span>Brand meets conversion</span>
        </div>
      </section>

      <section className="border-b border-border px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            01 / Project overview
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {[
              ["Client", "MarkEDU"],
              ["Industry", "Marketing education"],
              ["Role", "Full-cycle digital product"],
              ["Tags", "Brand · UX/UI · Web · Automation"],
            ].map(([label, value]) => (
              <div key={label} className="min-h-36 bg-secondary/80 p-5 md:min-h-44">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-acid">
                  {label}
                </div>
                <div className="mt-12 font-display text-xl uppercase leading-tight md:text-3xl">
                  {value}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-xl leading-relaxed md:text-3xl">
            MarkEDU is a European marketing education platform offering intensive courses,
            accredited programs and professional learning formats. I created the digital product and
            connected the customer-facing experience with the operational system behind it.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6">
          <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
            <span className="text-[#ff4b10]">●</span>&nbsp;
            <span className="text-[#00aef0]">●</span>&nbsp;&nbsp; 02 / Challenge
          </div>
          <Reveal className="col-span-12 md:col-span-8">
            <h2 className="font-display text-[12vw] leading-[0.85] md:text-[7vw]">
              Not a website.
              <br />
              <span className="text-outline">A working business system.</span>
            </h2>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-cream/70 md:text-2xl">
              The business needed to present several educational formats, serve different audiences
              and support a growing number of offers. At the same time, applications, payments, lead
              management and communication could not remain disconnected manual steps.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                "Complex offer structure",
                "Disconnected operational tools",
                "Need for a recognizable, scalable brand",
              ].map((item) => (
                <div
                  key={item}
                  className="border-t border-border pt-4 text-sm leading-relaxed text-cream/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              03 / Goals & opportunity
            </div>
            <Reveal className="col-span-12 md:col-span-9">
              <h2 className="font-display text-[12vw] leading-[0.85] md:text-[7vw]">
                Make growth
                <br />
                <span className="font-serif font-normal italic lowercase text-acid">
                  easier to manage.
                </span>
              </h2>
              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-cream/65 md:text-2xl">
                The opportunity was to turn the website into a shared foundation for brand,
                conversion and daily operations, making the experience clearer for visitors and more
                manageable for the team.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {goals.map((item) => (
              <article key={item.number} className="min-h-72 bg-ink p-6 md:p-9">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
                  {item.number} / Goal
                </div>
                <h3 className="mt-12 max-w-lg font-display text-3xl uppercase leading-[0.95] md:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/55 md:text-base">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6 pb-14">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              04 / Process
            </div>
            <Reveal className="col-span-12 md:col-span-8">
              <h2 className="font-display text-[13vw] leading-[0.82] md:text-[8vw]">
                From discovery
                <br />
                <span className="text-outline">to dependable launch.</span>
              </h2>
            </Reveal>
          </div>

          <div className="border-t border-border">
            {built.map(([number, title, copy]) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-12 gap-5 border-b border-border py-7 transition-colors hover:bg-cream/[0.02] md:py-10"
              >
                <span className="col-span-2 font-mono text-[10px] uppercase tracking-[0.18em] text-acid md:col-span-1">
                  {number}
                </span>
                <h3 className="col-span-10 font-display text-2xl uppercase leading-none md:col-span-5 md:text-5xl">
                  {title}
                </h3>
                <p className="col-span-10 col-start-3 max-w-md text-sm leading-relaxed text-cream/60 md:col-span-4 md:col-start-8 md:text-base">
                  {copy}
                </p>
                <MoveRight className="col-span-1 hidden justify-self-end text-acid md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="markedu-grid border-y border-border px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              05 / Solution
            </div>
            <Reveal className="col-span-12 md:col-span-8">
              <h2 className="font-display text-[12vw] leading-[0.85] md:text-[7vw]">
                One product system.
                <br />
                <span className="font-serif font-normal italic lowercase text-acid">
                  Built for many journeys.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid items-start gap-8 md:grid-cols-12 md:gap-5">
            <motion.figure
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-md border border-cream/15 bg-cream p-1.5 shadow-2xl md:col-span-8"
            >
              <img
                src="/markedu/program-screen.webp"
                alt="MarkEDU strategic marketing program page"
                width={1440}
                height={1050}
                className="rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="flex justify-between px-4 py-4 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55">
                <span>02 / Program page</span>
                <span>Clear offer · clear action</span>
              </figcaption>
            </motion.figure>
            <motion.figure
              whileHover={{ y: -8, rotate: 0 }}
              className="overflow-hidden rounded-md border border-cream/15 bg-cream p-1.5 shadow-2xl md:col-span-4 md:mt-28 md:rotate-2"
            >
              <img
                src="/markedu/programs-screen.webp"
                alt="MarkEDU programs overview"
                width={1440}
                height={1050}
                className="aspect-[4/3] w-full rounded-xl object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="px-4 py-4 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55">
                03 / Programs overview
              </figcaption>
            </motion.figure>
            <motion.figure
              whileHover={{ y: -8, rotate: 0 }}
              className="overflow-hidden rounded-md border border-cream/15 bg-cream p-1.5 shadow-2xl md:col-span-5 md:-mt-14 md:-rotate-1"
            >
              <img
                src="/markedu/contacts-screen.webp"
                alt="MarkEDU contact page"
                width={1440}
                height={1050}
                className="w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="flex justify-between px-4 py-4 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55">
                <span>04 / Contact journey</span>
                <span>Clear routing</span>
              </figcaption>
            </motion.figure>
            <motion.figure
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-md border border-cream/15 bg-cream p-1.5 shadow-2xl md:col-span-7 md:mt-16"
            >
              <img
                src="/markedu/intensive-screen.webp"
                alt="MarkEDU intensive course page"
                width={1440}
                height={1050}
                className="w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="flex justify-between px-4 py-4 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55">
                <span>05 / Intensive course</span>
                <span>Offer · proof · conversion</span>
              </figcaption>
            </motion.figure>
          </div>

          <div className="mt-20 grid grid-cols-12 gap-6 border-t border-border pt-8">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-3">
              System thinking
            </div>
            <p className="col-span-12 max-w-4xl text-xl leading-relaxed md:col-span-8 md:text-3xl">
              Different page types share the same visual grammar, but each one is structured around
              a specific visitor question: what is available, why it matters, whether it fits and
              what to do next.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "Clearer decisions",
                "Offers are organized around visitor needs, making comparison and action easier.",
              ],
              [
                "Faster expansion",
                "Reusable structures allow the platform to grow while preserving visual and UX consistency.",
              ],
              [
                "Connected operations",
                "Customer actions continue into the appropriate business workflow without exposing complexity.",
              ],
            ].map(([title, copy]) => (
              <article key={title} className="border-t border-border pt-5">
                <h3 className="font-display text-2xl uppercase">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/55">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              06 / Key features
            </div>
            <Reveal className="col-span-12 md:col-span-9">
              <h2 className="font-display text-[12vw] leading-[0.85] md:text-[7vw]">
                The visible product
                <br />
                <span className="text-outline">and the system behind it.</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid border border-border md:grid-cols-6">
            {system.map((item, index) => (
              <div
                key={item}
                className="relative min-h-44 border-b border-border p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span
                  className={`inline-block size-2 rounded-full ${index % 2 ? "bg-[#00aef0]" : "bg-[#ff4b10]"}`}
                />
                <div className="absolute bottom-5 left-5">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                    0{index + 1}
                  </div>
                  <div className="mt-2 font-display text-xl uppercase">{item}</div>
                </div>
                {index < system.length - 1 && (
                  <MoveRight className="absolute -right-3 top-1/2 z-10 hidden bg-secondary text-acid md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "CRM configured around the client's real sales process",
              "Stripe payments connected to the customer journey",
              "GetCourse email flows with a branded email design",
            ].map((item) => (
              <div key={item} className="flex gap-4 border-t border-border pt-5">
                <Check className="shrink-0 text-acid" size={18} />
                <p className="max-w-sm text-sm leading-relaxed text-cream/60">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-12 gap-6 border-t border-border pt-8">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-3">
              Confidential by design
            </div>
            <p className="col-span-12 max-w-4xl text-lg leading-relaxed text-cream/60 md:col-span-8 md:text-2xl">
              This case shows the architecture and my responsibilities without exposing private
              workflows, credentials, business rules or customer data. The important result is
              visible: the public product and operational tools behave as one connected system.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border px-5 py-24 grain md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6">
          <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-3">
            07 / Outcome
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-[13vw] uppercase leading-[0.82] md:text-[7.5vw]">
              A platform ready to operate and evolve.
            </h2>
            <div className="mt-14 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
              <p className="max-w-xl text-lg leading-relaxed md:text-2xl">
                MarkEDU received a complete customer-facing platform and a connected operational
                foundation, created from zero and prepared for everyday use.
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-cream/60 md:text-base">
                Reusable page patterns reduce the effort required to launch new offers. Connected
                flows reduce unnecessary handoffs and keep customer information moving through the
                appropriate tools. Exact commercial metrics remain confidential.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {[
                ["One", "coherent digital ecosystem"],
                ["Reusable", "foundation for future offers"],
                ["Connected", "customer and operational journeys"],
              ].map(([strong, copy]) => (
                <div key={strong} className="bg-secondary/80 p-5">
                  <div className="font-display text-4xl uppercase text-acid">{strong}</div>
                  <div className="mt-2 text-sm text-cream/60">{copy}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6">
          <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
            08 / Reflection
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="font-display text-[13vw] leading-[0.82] md:text-[8vw]">
              Strong products emerge
              <br />
              <span className="text-outline">between disciplines.</span>
            </h2>
            <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
              <p className="max-w-2xl text-lg leading-relaxed text-cream/80 md:text-2xl">
                The strongest part of this project was moving between strategy, interface design,
                implementation and operational requirements without losing the original product
                vision.
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-cream/55 md:text-base">
                It reinforced an important principle in my work: a website becomes much more
                valuable when the visible experience and the invisible process are designed
                together. In future iterations, I would continue validating content performance and
                refining journeys using real usage data.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextCase
        to="/work/orange-flowers"
        title="Orange Flowers"
        description="A focused redesign that made a large flower catalog calmer, clearer and easier to browse."
        accent="#f9b335"
      />

      <footer className="px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-5">
          <Link to="/" hash="work" className="text-[10px] uppercase tracking-[0.18em]">
            ← Back to selected work
          </Link>
          <a
            href="mailto:palekseeva.design@gmail.com"
            className="flex items-center gap-3 font-display text-2xl uppercase hover:text-acid md:text-4xl"
          >
            Build something useful <ArrowUpRight />
          </a>
        </div>
      </footer>
    </main>
  );
}
