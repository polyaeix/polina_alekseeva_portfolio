import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Check, MoveDown, MoveRight } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveal } from "@/components/MotionPrimitives";
import { NextCase } from "@/components/NextCase";

export const Route = createFileRoute("/work/orange-flowers")({
  head: () => ({
    meta: [
      { title: "Orange Flowers case study — Polina Alekseeva" },
      {
        name: "description",
        content:
          "A focused UX/UI redesign for a large flower delivery e-commerce website in Almaty.",
      },
    ],
  }),
  component: OrangeFlowersCase,
});

const orange = "#f05a24";
const yellow = "#f9b335";

const process = [
  [
    "01",
    "Audit the live store",
    "Reviewed the highest-value journeys, page types and recurring friction across the existing Tilda website.",
  ],
  [
    "02",
    "Prioritise improvements",
    "Separated high-impact UX and visual changes from work that would add cost without improving the buying journey.",
  ],
  [
    "03",
    "Refresh the system",
    "Replaced the mix of fonts and colours with one simple visual system, then refined spacing and product presentation around it.",
  ],
  [
    "04",
    "Apply to key journeys",
    "Applied the lighter visual direction to catalog, promotional, delivery and support touchpoints.",
  ],
  [
    "05",
    "Review in context",
    "Checked responsive behaviour and consistency inside the constraints of the existing commerce platform.",
  ],
];

const goals = [
  ["01", "Make browsing easier", "Help people move through a large catalog without feeling lost."],
  [
    "02",
    "Clarify the next step",
    "Make ordering and support actions easier to notice and understand.",
  ],
  [
    "03",
    "Create consistency",
    "Give different commercial pages one recognisable visual and UX grammar.",
  ],
  [
    "04",
    "Protect what works",
    "Improve the storefront without disrupting existing SEO and commerce logic.",
  ],
];

const features = ["Catalog", "Filters", "Product cards", "Promotions", "Delivery", "Quick support"];

const teardownItems = [
  {
    number: "01",
    title: "Unify the header",
    beforeSrc: "/orange/before-header-old.webp",
    beforeSize: [1440, 150],
    afterSrc: "/orange/after-peonies-header.webp",
    afterSize: [2968, 255],
    note: "The header colours were softened and its visual weight was reduced, making the interface feel calmer, less distracting and more comfortable to navigate.",
  },
  {
    number: "02",
    title: "Replace the heavy banner",
    beforeSrc: "/orange/before-promo-banner.webp",
    beforeSize: [1500, 330],
    afterSrc: "/orange/after-peonies-hero.webp",
    afterSize: [2968, 864],
    note: "A large framed promotion was replaced by a category-specific hero that introduces the offer without delaying the shopping journey.",
  },
  {
    number: "03",
    title: "Clarify service messages",
    beforeSrc: "/orange/before-delivery-warning.webp",
    beforeSize: [1500, 121],
    afterSrc: "/orange/after-peonies-service-message.webp",
    afterSize: [2968, 204],
    note: "The disconnected orange warning becomes a calmer contextual service block with one clear action.",
  },
  {
    number: "04",
    title: "Add category navigation",
    afterSrc: "/orange/after-peonies-navigation.webp",
    afterSize: [2968, 283],
    note: "A new category navigation layer helps customers move directly to the relevant flower type or occasion.",
  },
  {
    number: "05",
    title: "Make products the focus",
    beforeSrc: "/orange/before-product-grid.webp",
    beforeSize: [1500, 570],
    afterSrc: "/orange/after-peonies-products.webp",
    afterSize: [2968, 1850],
    note: "The catalog logic stays intact, while lighter cards and more whitespace create a clearer rhythm from product to price and order.",
  },
  {
    number: "06",
    title: "Add SEO-aware video content",
    beforeSrc: "/orange/before-cross-sell.webp",
    beforeSize: [1500, 591],
    afterSrc: "/orange/after-peonies-video.webp",
    afterSize: [2968, 1264],
    note: "Generic supporting panels were replaced by a dedicated video visualisation that reinforces relevant search intent and stays connected to the category.",
  },
];

function TeardownItem({ item }: { item: (typeof teardownItems)[number] }) {
  const reduceMotion = useReducedMotion();
  const revealTransition = {
    duration: reduceMotion ? 0 : 0.85,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  };

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0.35 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
      className="group/teardown relative border-t border-border pt-5"
    >
      <motion.div
        aria-hidden
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-px left-0 h-px w-full origin-left"
        style={{ background: `linear-gradient(90deg, ${orange}, ${yellow}, transparent)` }}
      />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
        <motion.span
          initial={reduceMotion ? false : { x: -18, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={revealTransition}
          style={{ color: orange }}
        >
          {item.number} / Page detail
        </motion.span>
        <motion.span
          initial={reduceMotion ? false : { x: 18, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={revealTransition}
        >
          {item.title}
        </motion.span>
      </div>

      <div className="grid items-start gap-5 md:grid-cols-[minmax(0,5fr)_auto_minmax(0,7fr)]">
        <motion.div
          initial={reduceMotion ? false : { x: -42, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={revealTransition}
        >
          <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            <span style={{ color: orange }}>● &nbsp; Before</span>
          </div>
          {item.beforeSrc ? (
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -5, rotate: -0.25 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden rounded-md border border-cream/15 shadow-2xl"
            >
              <motion.img
                src={item.beforeSrc}
                alt=""
                width={item.beforeSize?.[0]}
                height={item.beforeSize?.[1]}
                loading="lazy"
                decoding="async"
                whileHover={reduceMotion ? undefined : { scale: 1.012 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block w-full rounded"
              />
            </motion.div>
          ) : (
            <motion.div
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              className="grid min-h-28 place-items-center border border-dashed border-border px-6 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-cream/35"
            >
              No category shortcut layer
            </motion.div>
          )}
        </motion.div>

        <div className="relative mx-auto grid h-full min-h-14 place-items-center md:min-h-0">
          <motion.div
            aria-hidden
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, delay: 0.18 }}
            className="absolute h-full w-px origin-top md:hidden"
            style={{ backgroundColor: `${yellow}55` }}
          />
          <motion.div
            className={`relative z-10 grid size-10 place-items-center rounded-full border bg-ink ${reduceMotion ? "" : "teardown-arrow"}`}
            style={{ borderColor: `${yellow}66`, color: yellow }}
          >
            <MoveRight className="rotate-90 md:rotate-0" size={19} />
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { x: 42, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ ...revealTransition, delay: reduceMotion ? 0 : 0.12 }}
        >
          <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            <span style={{ color: yellow }}>● &nbsp; After</span>
          </div>
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -7, rotate: 0.25 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative overflow-hidden rounded-md border border-cream/15 shadow-2xl"
          >
            <motion.img
              src={item.afterSrc}
              alt=""
              width={item.afterSize[0]}
              height={item.afterSize[1]}
              loading="lazy"
              decoding="async"
              whileHover={reduceMotion ? undefined : { scale: 1.012 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block w-full rounded"
            />
            {!reduceMotion && (
              <motion.div
                aria-hidden
                initial={{ x: "-130%" }}
                whileInView={{ x: "230%" }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.25, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/12 to-transparent"
              />
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.p
        initial={reduceMotion ? false : { y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ ...revealTransition, delay: reduceMotion ? 0 : 0.2 }}
        className="mt-5 max-w-4xl text-sm leading-relaxed text-cream/55 md:text-base"
      >
        {item.note}
      </motion.p>
    </motion.article>
  );
}

function Screen({
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
  return (
    <motion.figure
      whileHover={{ y: -7 }}
      className={`overflow-hidden rounded-md border border-cream/15 bg-cream p-1.5 shadow-2xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="aspect-[2/1] w-full rounded object-cover object-top"
        loading="lazy"
        decoding="async"
      />
      <figcaption className="px-3 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

function OrangeFlowersCase() {
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
            Case study · Focused e-commerce redesign
          </span>
          <a
            href="https://orange-flowers.kz/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-ink transition-transform hover:scale-105 sm:flex"
            style={{ backgroundColor: yellow }}
          >
            Live site <ArrowUpRight size={13} />
          </a>
        </div>
      </header>

      <section className="markedu-grid grain relative min-h-screen pt-28">
        <div
          className="pointer-events-none absolute -right-28 top-24 hidden size-[44vw] rounded-full border md:block"
          style={{ borderColor: `${orange}55` }}
        />
        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1600px] flex-col justify-between px-5 pb-8 md:px-10 md:pb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>
              <b style={{ color: orange }}>●</b> Almaty · KZ &nbsp;/&nbsp; Florist e-commerce
            </span>
            <span className="hidden md:inline">2025</span>
          </div>

          <h1 className="mt-14 min-w-0 font-display text-[12.5vw] uppercase leading-[0.72] md:text-[13.2vw]">
            <span className="block">Orange</span>
            <span className="ml-[10%] block">Flowers</span>
            <span
              className="ml-[28%] mt-7 block font-serif text-[8vw] font-normal italic lowercase leading-[0.8] md:ml-[45%] md:text-[5.5vw]"
              style={{ color: yellow }}
            >
              less friction.
            </span>
          </h1>

          <div className="mt-14 grid grid-cols-12 items-end gap-6">
            <p className="col-span-12 max-w-[38ch] text-base leading-snug md:col-span-5 md:text-2xl">
              A focused redesign that makes a large, living flower store easier to browse and easier
              to buy from.
            </p>
            <div className="col-span-12 md:col-span-3 md:col-start-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                My role
              </div>
              <p className="mt-2 text-xs leading-relaxed md:text-sm">
                UX audit · UI redesign · Responsive review
              </p>
            </div>
            <div className="hidden justify-end md:col-span-2 md:flex">
              <div
                className="grid size-20 place-items-center rounded-full border"
                style={{ borderColor: `${orange}88`, color: orange }}
              >
                <MoveDown size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-3 py-3 md:px-5 md:py-5">
        <motion.div
          initial={{ y: 50, rotate: -1.2, opacity: 0 }}
          whileInView={{ y: 0, rotate: -1.2, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-[1540px] overflow-hidden rounded-md border border-cream/15 bg-cream p-1.5 shadow-2xl md:p-2"
        >
          <img
            src="/orange/home-screen.webp"
            alt="Orange Flowers home page"
            width={1440}
            height={1050}
            className="w-full rounded"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        <div className="mx-auto mt-8 flex max-w-[1540px] justify-between px-2 pb-5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>01 / Storefront</span>
          <span>A working store, carefully refined</span>
        </div>
      </section>

      <section className="border-b border-border px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            01 / Project overview
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {[
              ["Client", "Orange Flowers"],
              ["Industry", "Florist e-commerce"],
              ["Role", "UX/UI redesign"],
              ["Tags", "E-commerce · Tilda · Responsive"],
            ].map(([label, value]) => (
              <div key={label} className="min-h-36 bg-secondary/80 p-5 md:min-h-44">
                <div
                  className="font-mono text-[9px] uppercase tracking-[0.18em]"
                  style={{ color: orange }}
                >
                  {label}
                </div>
                <div className="mt-12 font-display text-xl uppercase leading-tight md:text-3xl">
                  {value}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-xl leading-relaxed md:text-3xl">
            Orange Flowers is an Almaty flower delivery store with a broad catalog, occasion-based
            collections, promotions and fast ordering support. The project was a light, focused
            redesign: make the existing storefront feel cleaner and easier to scan without
            rebuilding its business logic or technical foundation. A unified typography and colour
            system also made the refreshed identity easy to adapt for social media.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6">
          <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
            <span style={{ color: orange }}>●</span>&nbsp;
            <span style={{ color: yellow }}>●</span>&nbsp;&nbsp; 02 / Challenge
          </div>
          <Reveal className="col-span-12 md:col-span-8">
            <h2 className="font-display text-[12vw] uppercase leading-[0.85] md:text-[7vw]">
              Plenty to choose.
              <br />
              <span className="text-outline">Too much to process.</span>
            </h2>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-cream/70 md:text-2xl">
              The store had grown into many categories, campaigns and page types. Useful content and
              actions competed for attention, while strong backgrounds, shadows and decorative
              elements made the catalog feel heavier than it needed to be. Different fonts and
              colours across pages also made the brand feel fragmented.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                "A visually dense catalog surface",
                "Heavy shadows and competing accents",
                "Too many fonts and disconnected colours",
              ].map((item) => (
                <div key={item} className="border-t border-border pt-4 text-sm text-cream/60">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              Before / After · Design teardown
            </div>
            <Reveal className="col-span-12 md:col-span-9">
              <h2 className="font-display text-[12vw] uppercase leading-[0.85] md:text-[7vw]">
                One complete page.
                <br />
                <span className="text-outline">A calmer system.</span>
              </h2>
              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-cream/65 md:text-2xl">
                The updated peonies page shows how small visual decisions work together across a
                complete shopping journey. The existing structure and mechanics remain, while the
                presentation becomes lighter, quieter and easier to follow.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 space-y-16 md:space-y-24">
            {teardownItems.map((item) => (
              <TeardownItem key={item.number} item={item} />
            ))}
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {[
              [
                "Unified style",
                "One typography and colour system replaces the previous mix of visual languages.",
              ],
              ["Quieter cards", "Fewer heavy shadows let the flower photography carry the page."],
              [
                "Social-ready",
                "The simple visual system is easy to extend into reusable social media content.",
              ],
            ].map(([title, copy]) => (
              <article key={title} className="bg-ink p-6 md:min-h-48">
                <h3 className="font-display text-2xl uppercase" style={{ color: yellow }}>
                  {title}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
              03 / Goals & opportunity
            </div>
            <Reveal className="col-span-12 md:col-span-9">
              <h2 className="font-display text-[12vw] uppercase leading-[0.85] md:text-[7vw]">
                Improve the journey.
                <br />
                <span className="font-serif font-normal italic lowercase" style={{ color: yellow }}>
                  Keep the engine.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {goals.map(([number, title, copy]) => (
              <article key={number} className="min-h-64 bg-ink p-6 md:p-9">
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: orange }}
                >
                  {number} / Goal
                </div>
                <h3 className="mt-10 font-display text-3xl uppercase md:text-5xl">{title}</h3>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/55 md:text-base">
                  {copy}
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
              <h2 className="font-display text-[13vw] uppercase leading-[0.82] md:text-[8vw]">
                Change what matters.
                <br />
                <span className="text-outline">Preserve what works.</span>
              </h2>
            </Reveal>
          </div>
          <div className="border-t border-border">
            {process.map(([number, title, copy]) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-12 gap-5 border-b border-border py-7 md:py-10"
              >
                <span
                  className="col-span-2 font-mono text-[10px] uppercase tracking-[0.18em] md:col-span-1"
                  style={{ color: orange }}
                >
                  {number}
                </span>
                <h3 className="col-span-10 font-display text-2xl uppercase leading-none md:col-span-5 md:text-5xl">
                  {title}
                </h3>
                <p className="col-span-10 col-start-3 max-w-md text-sm leading-relaxed text-cream/60 md:col-span-4 md:col-start-8 md:text-base">
                  {copy}
                </p>
                <MoveRight
                  className="col-span-1 hidden justify-self-end md:block"
                  style={{ color: yellow }}
                />
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
              <h2 className="font-display text-[12vw] uppercase leading-[0.85] md:text-[7vw]">
                A clearer storefront.
                <br />
                <span className="font-serif font-normal italic lowercase" style={{ color: yellow }}>
                  Built around choice.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid items-start gap-8 md:grid-cols-12 md:gap-5">
            <Screen
              src="/orange/after-catalog-clean.webp"
              alt="Updated Orange Flowers catalog"
              caption="02 / Catalog · Product-first presentation"
              className="md:col-span-7 md:-rotate-1"
            />
            <Screen
              src="/orange/after-delivery-clean.webp"
              alt="Updated Orange Flowers delivery page"
              caption="03 / Delivery · Confidence before order"
              className="md:col-span-5 md:mt-24 md:rotate-2"
            />
          </div>

          <div className="mt-20 grid grid-cols-12 gap-6 border-t border-border pt-8">
            <div
              className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] md:col-span-3"
              style={{ color: orange }}
            >
              Focused redesign
            </div>
            <p className="col-span-12 max-w-4xl text-xl leading-relaxed md:col-span-8 md:text-3xl">
              The solution did not ask the business to start over. It organised the existing offer,
              reduced visual competition and introduced one consistent typography and colour system
              across the pages customers use to discover, decide and order. Its simplicity also
              makes the identity easy to adapt for social media.
            </p>
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
              <h2 className="font-display text-[12vw] uppercase leading-[0.85] md:text-[7vw]">
                Every touchpoint
                <br />
                <span className="text-outline">supports the order.</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid border border-border md:grid-cols-6">
            {features.map((item, index) => (
              <div
                key={item}
                className="relative min-h-44 border-b border-border p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span
                  className="inline-block size-2 rounded-full"
                  style={{ backgroundColor: index % 2 ? yellow : orange }}
                />
                <div className="absolute bottom-5 left-5">
                  <div className="font-mono text-[9px] text-muted-foreground">0{index + 1}</div>
                  <div className="mt-2 font-display text-xl uppercase">{item}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Occasion and category paths help visitors narrow a broad choice.",
              "Promotions and delivery information support confident decisions.",
              "Quick contact channels remain visible when a customer needs help.",
            ].map((item) => (
              <div key={item} className="flex gap-4 border-t border-border pt-5">
                <Check className="shrink-0" size={18} style={{ color: orange }} />
                <p className="text-sm leading-relaxed text-cream/60">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border px-5 py-24 grain md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6">
          <div
            className="col-span-12 font-mono text-[10px] uppercase tracking-[0.2em] md:col-span-3"
            style={{ color: orange }}
          >
            07 / Outcome
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-[13vw] uppercase leading-[0.82] md:text-[7.5vw]">
              A store that feels easier to choose from.
            </h2>
            <div className="mt-14 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
              <p className="max-w-xl text-lg leading-relaxed md:text-2xl">
                The redesign created a more coherent storefront and clearer path through a complex
                product range, while preserving the website’s existing mechanics and operational
                foundation.
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-cream/60 md:text-base">
                Working within the current system reduced implementation risk and avoided the cost
                of rebuilding useful commerce and SEO structures. Exact commercial metrics were not
                available for this case.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {[
                ["Cleaner", "catalog and commercial pages"],
                ["Lighter", "visual treatment without a rebuild"],
                ["Preserved", "existing store mechanics and SEO foundation"],
              ].map(([strong, copy]) => (
                <div key={strong} className="bg-secondary/80 p-5">
                  <div className="font-display text-4xl uppercase" style={{ color: yellow }}>
                    {strong}
                  </div>
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
            <h2 className="font-display text-[13vw] uppercase leading-[0.82] md:text-[8vw]">
              Restraint is also
              <br />
              <span className="text-outline">a design decision.</span>
            </h2>
            <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
              <p className="max-w-2xl text-lg leading-relaxed text-cream/80 md:text-2xl">
                A useful redesign is not measured by how much changed. It is measured by whether the
                right things became clearer for customers and easier to maintain for the business.
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-cream/55 md:text-base">
                This project reinforced the value of prioritisation inside a live product. With
                access to behavioural data, the next iteration would validate navigation choices and
                test the highest-traffic paths to order.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextCase
        to="/work/spacefy-ai"
        title="SpacefyAI"
        description="A private B2B product shaped across product ownership, UX/UI and frontend development."
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
