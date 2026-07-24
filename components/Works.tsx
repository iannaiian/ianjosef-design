"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Tabs from "./Tabs";
import { BentoGrid } from "./BentoGrid";
import Reveal from "./Reveal";
import { categories, projects, type Category } from "@/data/projects";

export default function Works() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="works" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-accent-600">
              Selected Works
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Projects I've shipped
            </h2>
            <p className="mt-3 max-w-xl text-zinc-500">
              A mix of product design, branding, and design systems work from
              the last few years.
            </p>
          </div>

          <Tabs tabs={categories} active={active} onChange={setActive} />
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <AnimatePresence mode="popLayout">
            <BentoGrid items={filtered} />
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
