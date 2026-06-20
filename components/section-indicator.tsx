"use client"

import { sections, type SectionId } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function SectionIndicator({
  active,
  onNavigate,
}: {
  active: SectionId
  onNavigate: (id: SectionId) => void
}) {
  const current = sections.find((s) => s.id === active) ?? sections[0]

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40">
      <div className="flex items-end justify-between px-6 pb-6 md:px-12 md:pb-8">
        {/* Caption: current section */}
        <div className="pointer-events-auto flex items-baseline gap-3">
          <span className="font-mono text-xs text-primary">{current.index}</span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {current.label}
          </span>
        </div>

        {/* Progress dots */}
        <div className="pointer-events-auto flex items-center gap-3">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              aria-label={`Go to ${s.label}`}
              aria-current={active === s.id}
              className="group flex items-center"
            >
              <span
                className={cn(
                  "h-px transition-all duration-500",
                  active === s.id
                    ? "w-8 bg-primary"
                    : "w-4 bg-border group-hover:bg-muted-foreground",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
