import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-md bg-background/70 border-b border-border" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-xl leading-none uppercase">
          Polina<span className="text-acid">.</span>Alekseeva
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em]">
          <a href="#work" className="link-quiet">Work / 05</a>
          <a href="#about" className="link-quiet">About</a>
          <a href="#process" className="link-quiet">Process</a>
          <a href="#contact" className="link-quiet">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-acid px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-transform hover:scale-[1.04]"
        >
          <span className="size-1.5 rounded-full bg-ink animate-pulse" />
          Open for ’26
        </a>
      </div>
    </header>
  );
}
