import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [now, setNow] = useState("");
  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Prague" });
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden border-t border-border pt-32 pb-12">
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
          Let&rsquo;s build<br />
          <span className="text-outline">something good<span className="text-acid">.</span></span>
        </motion.h2>

        <a
          href="mailto:alekseevaps2002@mail.com"
          data-cursor="view" data-cursor-label="Write ↗"
          className="mt-16 group flex items-baseline justify-between border-t border-border py-8 transition-colors hover:text-acid"
        >
          <span className="font-display uppercase text-2xl md:text-5xl">alekseevaps2002@mail.com</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] opacity-60 group-hover:opacity-100">↗ Email</span>
        </a>

        <div className="grid grid-cols-12 gap-6 border-t border-border pt-10">
          <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Elsewhere
          </div>
          <ul className="col-span-12 md:col-span-5 space-y-2 font-display uppercase text-2xl md:text-3xl">
            <li>
              <a href="https://www.linkedin.com/in/polina-alekseeva" target="_blank" rel="noreferrer" className="link-quiet">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href="https://t.me/polya_eix" target="_blank" rel="noreferrer" className="link-quiet">
                Telegram <span className="font-serif italic lowercase text-muted-foreground">@polya_eix</span> ↗
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
