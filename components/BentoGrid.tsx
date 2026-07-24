"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

/**
 * Aceternity-style Bento Grid, adapted from their canonical
 * BentoGrid / BentoGridItem primitives (grid + group/bento hover).
 *
 * Runs on a 3-column track (2 on tablet), with every card the same
 * width for a clean, even grid.
 *
 * Rows have a 16rem floor (auto-rows minmax) rather than a fixed
 * aspect ratio, so a row grows if a card ever needs more room instead
 * of cropping or stretching its contents.
 *
 * Each cell is image-only at rest; hovering (or tapping/focusing, for
 * touch and keyboard users) reveals the project details as an overlay.
 */
export function BentoGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[minmax(16rem,auto)] lg:grid-cols-3">
      {items.map((project, i) => (
        <BentoGridItem key={project.title} project={project} index={i} />
      ))}
    </div>
  );
}

function BentoGridItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const visibleTags = project.tags.slice(0, 3);
  const extraTags = project.tags.length - visibleTags.length;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
      className="group/bento relative min-h-[16rem] cursor-pointer overflow-hidden rounded-xl border border-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)] outline-none transition-all duration-200 hover:shadow-xl hover:shadow-accent-900/10 focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2"
    >
      {/* image (real screenshot when available, otherwise a gradient fill) */}
      {project.image ? (
        <div className="absolute inset-0 overflow-hidden bg-zinc-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/bento:scale-[1.04]"
          />
        </div>
      ) : (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gradient-to-br transition-transform duration-500 ease-out group-hover/bento:scale-[1.04]",
            project.gradient
          )}
        >
          <span className="select-none text-5xl font-semibold text-white/20">
            {project.title.charAt(0)}
          </span>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_60%)]" />
        </div>
      )}

      {/* hover / tap / focus reveal */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 opacity-0 transition-opacity duration-300 ease-out group-hover/bento:opacity-100 group-focus-within/bento:opacity-100",
          open && "opacity-100"
        )}
      >
        <div
          className={cn(
            "translate-y-2 transition-transform duration-300 ease-out group-hover/bento:translate-y-0 group-focus-within/bento:translate-y-0",
            open && "translate-y-0"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="truncate text-xs font-medium uppercase tracking-wide text-accent-300">
              {project.category}
            </span>
            <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors group-hover/bento:border-white/70 group-hover/bento:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
          </div>
          <div className="mt-1.5 truncate font-sans font-semibold text-white">
            {project.title}
          </div>
          <div className="mt-1 line-clamp-2 font-sans text-sm font-normal text-white/70">
            {project.description}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            {extraTags > 0 && (
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                +{extraTags}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
