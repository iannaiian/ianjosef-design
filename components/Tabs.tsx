"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabsProps<T extends string> {
  tabs: T[];
  active: T;
  onChange: (tab: T) => void;
}

export default function Tabs<T extends string>({
  tabs,
  active,
  onChange,
}: TabsProps<T>) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function handleSelect(tab: T) {
    onChange(tab);
    // keep the active tab in view when the bar is horizontally scrollable (mobile)
    buttonRefs.current[tab]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  return (
    <div className="w-full sm:w-auto">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory items-center gap-1 overflow-x-auto rounded-full border border-zinc-200 bg-zinc-50 p-1 sm:inline-flex sm:w-auto sm:flex-wrap sm:overflow-visible"
      >
        {tabs.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              ref={(el) => {
                buttonRefs.current[tab] = el;
              }}
              onClick={() => handleSelect(tab)}
              className={cn(
                "relative flex-none snap-start whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "text-white" : "text-zinc-600 hover:text-zinc-900"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-accent-600"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
