import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Polina Alekseeva — Product Designer, Prague" },
      {
        name: "description",
        content:
          "Portfolio of Polina Alekseeva — product designer connecting B2B UX, web platforms, frontend and business systems.",
      },
      { property: "og:title", content: "Polina Alekseeva — Product Designer" },
      {
        property: "og:description",
        content: "Selected B2B product, web platform and digital systems work by Polina Alekseeva.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alekseeva.xyz/" },
    ],
    links: [{ rel: "canonical", href: "https://alekseeva.xyz/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Work />
      <Process />
      <Contact />
    </main>
  );
}
