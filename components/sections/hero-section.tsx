"use client";

import type { SectionId } from "@/lib/portfolio-data";
import { Spotlight } from "../ui/spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Transforming complex ideas into simple, user-centered products.`;

export function HeroSection({
  onNavigate,
}: {
  onNavigate: (id: SectionId) => void;
}) {
  return (
    <div className="relative flex min-h-full w-full items-center px-6 py-24 pt-28 md:px-12 md:py-0 md:pt-10 lg:px-20 bg-[url('/images/grid.png')] bg-cover bg-center">
      <Spotlight fill="#EF852E" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:mx-48 mx-auto w-full max-w-4xl z-10">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Product Designer
          </p>

          <h1 className="text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <TextGenerateEffect duration={1.5} words={words} />
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m Ian Josef — a product designer with years of experience
            turning ambiguous problems into clear, considered digital
            experiences.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate("works")}
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:px-8 md:py-4"
            >
              View selected work
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="rounded-full border border-[#ef852e] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary md:px-8 md:py-4"
            >
              More about me
            </button>
          </div>
          <p className="mt-16 hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:block">
            Scroll to explore &rarr;
          </p>
        </div>
        <div>
          <img
            src="images/persona.png"
            alt="Ian Josef Portrait"
            className="md:absolute md:block hidden md:mx-auto xl:w-250 md:w-200 md:-bottom-0 -right-20 z-0 opacity-45"
          />
        </div>
      </div>
    </div>
  );
}
