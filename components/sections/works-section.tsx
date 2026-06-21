"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { works } from "@/lib/portfolio-data";
import type { CaseStudy } from "@/lib/portfolio-data";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundBeams } from "../ui/background-beams";

export function WorksSection() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: CaseStudy) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <div className="flex min-h-full w-full items-center px-6 py-24 md:px-12 md:py-32 lg:px-20 bg-[url('/images/grid.png')] bg-cover bg-center">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Past Works
              </p>
              <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
                Selected projects.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A small selection of recent product work across fintech, SaaS,
              commerce, and travel.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 ">
            {works.map((work) => (
              <article
                key={work.title}
                className="group cursor-pointer relative h-full rounded-2xl border p-2 md:rounded-3xl bg-[#0f0f0f] transition-colors hover:border-primary/50 hover:shadow-lg"
                onClick={() => openProjectModal(work)}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={`${work.title} — ${work.category}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                        {work.title}
                      </h3>
                      <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                        {work.category}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {work.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}

            <article className="group relative flex h-full cursor-pointer items-center justify-center rounded-2xl border bg-[#0f0f0f] p-2 transition-colors hover:border-primary/50 hover:shadow-lg md:rounded-3xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />

              <h2 className="text-3xl font-medium capitalize text-foreground transition-colors group-hover:text-primary">
                More coming soon!
              </h2>
              <BackgroundBeams />
            </article>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
