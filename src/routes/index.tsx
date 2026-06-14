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
      {
        name: "description",
        content:
          "Portfolio of Polina Alekseeva — product and digital designer connecting UX/UI, websites, frontend and business systems.",
      },
      { property: "og:title", content: "Polina Alekseeva — UI/UX & Digital Designer" },
      {
        property: "og:description",
        content: "Selected product, web and digital systems work by Polina Alekseeva.",
      },
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
