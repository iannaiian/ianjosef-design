"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface CaseStudy {
  title: string;
  category: string;
  year: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
}

interface ProjectModalProps {
  project: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "auto";
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          className="relative h-full w-full max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 z-10 float-right rounded-lg bg-secondary/80 p-2 text-foreground transition-all hover:bg-secondary"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-10">
            {/* Header image */}
            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Metadata */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                  {project.category}
                </p>
                <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
                  {project.title}
                </h2>
              </div>

              <a
                href={project.url}
                className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 text-center"
                target="_blank"
              >
                See Project
              </a>
            </div>

            {/* Challenge */}
            <div className="mb-8 border-t border-border pt-8">
              <h3 className="mb-4 font-serif text-xl font-medium text-foreground">
                Challenge
              </h3>
              <p className="leading-relaxed text-foreground">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8 border-t border-border pt-8">
              <h3 className="mb-4 font-serif text-xl font-medium text-foreground">
                Solution
              </h3>
              <p className="leading-relaxed text-foreground">
                {project.solution}
              </p>
            </div>

            {/* Results */}
            {project.results?.length > 0 && (
              <div className="mb-8 border-t border-border pt-8">
                <div>
                  <h3 className="mb-4 font-serif text-xl font-medium text-foreground">
                    Results
                  </h3>

                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex gap-3 text-foreground">
                        <span className="text-primary">→</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* CTA */}

            {/* Tags */}
            <div className="border-t border-border pt-8">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/30 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
