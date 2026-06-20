"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { sections, type SectionId } from "@/lib/portfolio-data"
import { Navbar } from "@/components/navbar"
import { SectionIndicator } from "@/components/section-indicator"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { WorksSection } from "@/components/sections/works-section"

export function PortfolioScroller() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const [active, setActive] = useState<SectionId>("hero")
  const activeRef = useRef<SectionId>("hero")

  const navigateTo = useCallback((id: SectionId) => {
    const el = sectionRefs.current[id]
    const container = containerRef.current
    if (el && container) {
      container.scrollTo({ left: el.offsetLeft, behavior: "smooth" })
    }
  }, [])

  // Track which section is active based on horizontal scroll position
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const center = container.scrollLeft + container.clientWidth / 2
        let current: SectionId = "hero"
        for (const s of sections) {
          const el = sectionRefs.current[s.id]
          if (el && el.offsetLeft <= center) current = s.id
        }
        activeRef.current = current
        setActive(current)
      })
    }

    container.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      container.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Translate vertical/horizontal wheel intent into horizontal section
  // navigation, but defer to vertical scrolling when a section's content
  // overflows the viewport. Because the track uses snap-mandatory, we move a
  // whole section per gesture (debounced) instead of nudging scrollLeft, which
  // snap would otherwise immediately revert.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let locked = false

    const onWheel = (e: WheelEvent) => {
      // Use whichever axis the user pushed hardest (supports mice + trackpads).
      let delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX

      // Physical mouse wheels often report deltas in lines or pages rather than
      // pixels. Normalize so a single wheel notch produces a meaningful value.
      if (e.deltaMode === 1) {
        delta *= 16 // lines -> approx pixels
      } else if (e.deltaMode === 2) {
        delta *= container.clientHeight // pages -> pixels
      }

      // Find the inner scrollable section under the pointer.
      const inner = (e.target as HTMLElement)?.closest(
        "[data-section-scroll]",
      ) as HTMLElement | null

      if (inner) {
        const canScrollVertically = inner.scrollHeight > inner.clientHeight + 1
        const atTop = inner.scrollTop <= 0
        const atBottom =
          inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 1

        // Let the section scroll vertically until it hits a boundary.
        if (
          canScrollVertically &&
          !(atTop && delta < 0) &&
          !(atBottom && delta > 0)
        ) {
          return
        }
      }

      // Convert the wheel gesture into horizontal section navigation.
      e.preventDefault()
      if (locked || Math.abs(delta) < 8) return

      const idx = sections.findIndex((s) => s.id === activeRef.current)
      const next = delta > 0 ? idx + 1 : idx - 1
      if (next < 0 || next > sections.length - 1) return

      locked = true
      navigateTo(sections[next].id)
      // Release after the smooth scroll settles so one gesture = one section.
      window.setTimeout(() => {
        locked = false
      }, 700)
    }

    container.addEventListener("wheel", onWheel, { passive: false })
    return () => container.removeEventListener("wheel", onWheel)
  }, [navigateTo])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const idx = sections.findIndex((s) => s.id === active)
      if (e.key === "ArrowRight" && idx < sections.length - 1) {
        navigateTo(sections[idx + 1].id)
      } else if (e.key === "ArrowLeft" && idx > 0) {
        navigateTo(sections[idx - 1].id)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [active, navigateTo])

  const setRef = (id: SectionId) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  return (
    <main className="relative h-[100dvh] overflow-hidden bg-background">
      <Navbar active={active} onNavigate={navigateTo} />

      <div
        ref={containerRef}
        className="no-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth"
      >
        <section
          ref={setRef("hero")}
          id="hero"
          data-section-scroll
          className="no-scrollbar h-full w-screen flex-none snap-start overflow-y-auto"
        >
          <HeroSection onNavigate={navigateTo} />
        </section>

        <section
          ref={setRef("about")}
          id="about"
          data-section-scroll
          className="no-scrollbar h-full w-screen flex-none snap-start overflow-y-auto"
        >
          <AboutSection />
        </section>

        <section
          ref={setRef("experience")}
          id="experience"
          data-section-scroll
          className="no-scrollbar h-full w-screen flex-none snap-start overflow-y-auto"
        >
          <ExperienceSection />
        </section>

        <section
          ref={setRef("works")}
          id="works"
          data-section-scroll
          className="no-scrollbar h-full w-screen flex-none snap-start overflow-y-auto"
        >
          <WorksSection />
        </section>
      </div>

      <SectionIndicator active={active} onNavigate={navigateTo} />
    </main>
  )
}
