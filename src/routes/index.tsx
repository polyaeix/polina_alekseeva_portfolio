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
      { title: "Polina Alekseeva — UI/UX & Digital Designer, Prague" },
      { name: "description", content: "Portfolio of Polina Alekseeva — UI/UX, web and brand designer based in Prague. Selected work for Markedu, Orange Flowers, SpacefyAI and more." },
      { property: "og:title", content: "Polina Alekseeva — UI/UX & Digital Designer" },
      { property: "og:description", content: "Selected work, process and contact. Designer of websites, products and brand systems." },
      { property: "og:type", content: "website" },
    ],
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
