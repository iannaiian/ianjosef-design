"use client";

import { sections, type SectionId } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Navbar({
  active,
  onNavigate,
}: {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(17,14,11,0.6)] backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-2 text-left"
          aria-label="Ian Josef, back to intro"
        >
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            <img
              src="/images/logo.svg"
              alt="Ian Josef"
              className="h-10 w-auto"
            />
          </span>
        </button>

        {/* Center nav (desktop) */}
        <nav className="hidden items-center gap-1 md:flex mr-20">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm transition-colors",
                active === s.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:ianjosef.rivera@gmail.com"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
