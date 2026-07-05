"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import { works } from "@/lib/portfolio-data";
import type { CaseStudy } from "@/lib/portfolio-data";

import { workCategories, contactEmail, type Work } from "@/lib/portfolio-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundBeams } from "../ui/background-beams";

function WorkCard({ work }: { work: Work }) {
  return (
    <a
      href="#"
      className="group relative overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={work.image || "/placeholder.svg"}
          alt={`${work.title} project preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
        />
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground">
            {work.title}
          </h4>
          <p className="mt-1 text-sm text-muted-foreground">{work.meta}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{work.year}</span>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            {/* <ArrowUpRight className="size-4" /> */}
          </span>
        </div>
      </div>
    </a>
  );
}

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

          <Tabs defaultValue="landing" className="mt-10 gap-8">
            <TabsList className="h-auto flex-wrap justify-start gap-1 bg-secondary/60 p-1">
              {workCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="font-display text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                  <span className="ml-1.5 text-xs opacity-70">
                    {category.items.length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {workCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0 focus-visible:outline-none"
              >
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((work) => (
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
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* <div className="grid gap-6 sm:grid-cols-2 ">
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

            <article className="group relative flex md:h-auto h-50 cursor-pointer items-center justify-center rounded-2xl border bg-[#0f0f0f] p-2 transition-colors hover:border-primary/50 hover:shadow-lg md:rounded-3xl ">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />

              <h2 className="md:text-3xl font-medium capitalize text-foreground transition-colors group-hover:text-primary">
                More coming soon!
              </h2>
              <BackgroundBeams />
            </article>
          </div> */}
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
