import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type CaseLink = "/work/markedu" | "/work/orange-flowers" | "/work/spacefy-ai" | "/work/workchain";

export function NextCase({
  to,
  title,
  description,
  accent = "#d2ff4d",
}: {
  to: CaseLink;
  title: string;
  description: string;
  accent?: string;
}) {
  return (
    <Link
      to={to}
      data-cursor="view"
      data-cursor-label="Next →"
      className="group block border-y border-border bg-ink px-5 py-16 text-cream transition-colors hover:bg-secondary/60 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-12 md:items-end">
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/40 md:col-span-3">
          Next case →
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-[15vw] uppercase leading-[0.78] md:text-[7vw]">
            {title}
            <span style={{ color: accent }}>.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/55 md:text-xl">
            {description}
          </p>
        </div>
        <ArrowRight
          className="size-10 transition-transform duration-500 group-hover:translate-x-4 md:col-span-2 md:size-16 md:justify-self-end"
          style={{ color: accent }}
        />
      </div>
    </Link>
  );
}
