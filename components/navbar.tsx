"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "relative flex items-center gap-1 rounded-full border p-1.5 backdrop-blur-md transition-all duration-300",
          scrolled
            ? "border-zinc-200 bg-white/90 shadow-lg shadow-zinc-900/10"
            : "border-zinc-200/70 bg-white/80 shadow-md shadow-zinc-900/5"
        )}
      >
        <a
          href="#about"
          aria-label="Home"
          className="flex items-center pl-2 pr-2"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={500}
            height={500}
            className="h-8 w-8"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  active === link.href
                    ? "text-accent-700"
                    : "text-zinc-600 hover:text-zinc-900"
                )}
              >
                {active === link.href && (
                  <span className="absolute inset-0 rounded-full bg-accent-50 -z-10" />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-accent-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-700"
        >
          Let's talk
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 text-zinc-700"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-4 bg-current transition-transform",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-4 bg-current transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-4 bg-current transition-transform",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>

        {open && (
          <div className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white/95 p-2 shadow-xl shadow-zinc-900/10 backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActive(link.href);
                      setOpen(false);
                    }}
                    className={cn(
                      "block rounded-xl px-3 py-2 text-sm font-medium",
                      active === link.href
                        ? "bg-accent-50 text-accent-700"
                        : "text-zinc-600"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => {
                    setActive("#contact");
                    setOpen(false);
                  }}
                  className="mt-1 flex items-center justify-center rounded-xl bg-accent-600 px-3 py-2 text-sm font-medium text-white"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
