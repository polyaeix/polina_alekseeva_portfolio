import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-b border-border bg-background/85 py-3 backdrop-blur-md"
            : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            onClick={closeMenu}
            className="font-display text-xl uppercase leading-none"
          >
            Polina<span className="text-acid">.</span>Alekseeva
          </a>

          <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] md:flex">
            <a href="#work" className="link-quiet">
              Work / 04
            </a>
            <a href="#about" className="link-quiet">
              About
            </a>
            <a href="#process" className="link-quiet">
              Process
            </a>
            <a href="#contact" className="link-quiet">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-acid px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-transform hover:scale-[1.04] md:inline-flex"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-ink" />
            Open for ’26
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center border border-border text-cream md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <motion.div
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-acid"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background px-6 pb-8 pt-28 grain md:hidden"
          >
            <nav className="border-t border-border">
              {[
                ["Work / 04", "#work"],
                ["About", "#about"],
                ["Process", "#process"],
                ["Contact", "#contact"],
              ].map(([label, href], index) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center justify-between border-b border-border py-5 font-display text-5xl uppercase"
                >
                  {label}
                  <span className="font-mono text-[9px] text-acid">0{index + 1}</span>
                </motion.a>
              ))}
            </nav>
            <div className="absolute inset-x-6 bottom-8 flex items-end justify-between border-t border-border pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>Prague · Worldwide</span>
              <span className="text-acid">● Open for ’26</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
