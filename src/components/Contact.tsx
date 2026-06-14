import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const ringY = useTransform(scrollYProgress, [0, 1], [160, -180]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const [now, setNow] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Prague",
      });
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden border-t border-border pt-32 pb-12 grain"
    >
      <motion.div
        aria-hidden
        style={{ y: ringY, rotate: ringRotate }}
        className="pointer-events-none absolute -right-24 top-24 h-[42rem] w-[42rem] rounded-full border border-acid/20"
      />
      <motion.div
        aria-hidden
        style={{ y: ringY }}
        className="pointer-events-none absolute left-8 bottom-36 hidden h-40 w-40 rounded-full border border-cream/15 md:block"
      />
      <div className="mx-auto max-w-[1700px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            (Contact / 004)
          </div>
          <div className="col-span-12 md:col-span-10 font-mono text-[11px] uppercase tracking-[0.25em] text-acid">
            ● Open for select projects in 2026
          </div>
        </div>

        <motion.h2
          style={{ y }}
          className="font-display uppercase text-[16vw] md:text-[13vw] leading-[0.85]"
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 52, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Let&rsquo;s build
          </motion.span>
          <motion.span
            className="block text-outline"
            initial={{ opacity: 0, y: 52, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            something good<span className="text-acid">.</span>
          </motion.span>
        </motion.h2>

        <motion.a
          href="mailto:palekseeva.design@gmail.com"
          data-cursor="view"
          data-cursor-label="Write ↗"
          whileHover={{ x: 12 }}
          transition={{ type: "spring", damping: 22, stiffness: 180 }}
          className="mt-16 group flex items-baseline justify-between border-t border-border py-8 transition-colors hover:text-acid"
        >
          <span className="font-display uppercase text-2xl md:text-5xl">
            palekseeva.design@gmail.com
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] opacity-60 group-hover:opacity-100">
            ↗ Email
          </span>
        </motion.a>

        <motion.a
          href="tel:+420773082209"
          data-cursor="view"
          data-cursor-label="Call ↗"
          whileHover={{ x: 12 }}
          transition={{ type: "spring", damping: 22, stiffness: 180 }}
          className="group flex items-baseline justify-between gap-4 border-t border-border py-8 transition-colors hover:text-acid"
        >
          <span className="font-display text-2xl uppercase md:text-5xl">+420 773 082 209</span>
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] opacity-60 group-hover:opacity-100">
            ↗ Call
          </span>
        </motion.a>

        <div className="grid grid-cols-12 gap-6 border-t border-border pt-10">
          <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Elsewhere
          </div>
          <ul className="col-span-12 md:col-span-5 space-y-2 font-display uppercase text-2xl md:text-3xl">
            <li>
              <a
                href="https://www.linkedin.com/in/polina-alekseeva"
                target="_blank"
                rel="noreferrer"
                className="link-quiet"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a
                href="https://t.me/polya_eix"
                target="_blank"
                rel="noreferrer"
                className="link-quiet"
              >
                Telegram{" "}
                <span className="font-serif italic lowercase text-muted-foreground">
                  @polya_eix
                </span>{" "}
                ↗
              </a>
            </li>
          </ul>
          <div className="col-span-12 md:col-span-5 font-serif italic text-xl md:text-2xl text-cream/85 text-balance">
            Based in Prague, working worldwide. Comfortable in English, Russian and Czech.
          </div>
        </div>

        <footer className="mt-24 flex flex-wrap items-end justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground border-t border-border pt-6">
          <span>© 2026 — Polina Alekseeva</span>
          <span>Prague · {now || "—:—"} CET</span>
          <span>Designed with care ●</span>
        </footer>
      </div>
    </section>
  );
}
