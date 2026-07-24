import {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Mail,
  PenTool,
  MousePointer2,
  Pipette,
  Type,
} from "lucide-react";

const socials = [
  { href: "https://github.com/", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: Linkedin },
  { href: "https://dribbble.com/", label: "Dribbble", icon: Dribbble },
  { href: "https://twitter.com/", label: "Twitter", icon: Twitter },
  { href: "mailto:hello@studio.design", label: "Email", icon: Mail },
];

const toolAccents = [
  {
    icon: PenTool,
    label: "Pen Tool",
    position: "left-[8%] top-[26%]",
    rotate: "-rotate-12",
    delay: "400ms",
  },
  {
    icon: Pipette,
    label: "Eyedropper",
    position: "right-[8%] top-[22%]",
    rotate: "rotate-12",
    delay: "440ms",
  },
  {
    icon: Type,
    label: "Text Tool",
    position: "left-[9%] top-[60%]",
    rotate: "-rotate-6",
    delay: "480ms",
  },
  {
    icon: MousePointer2,
    label: "Selection",
    position: "right-[9%] top-[58%]",
    rotate: "rotate-6",
    delay: "520ms",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* animated purple glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-200/40 blur-3xl motion-safe:animate-blobA"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[6%] h-[26rem] w-[26rem] rounded-full bg-fuchsia-200/30 blur-3xl motion-safe:animate-blobB"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10rem] left-[12%] h-[22rem] w-[22rem] rounded-full bg-accent-300/20 blur-3xl motion-safe:animate-blobA"
        style={{ animationDelay: "-6s" }}
      />
      {/* subtle grid background, faded towards the edges, slowly panning */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_20%,#000_50%,transparent_100%)] motion-safe:animate-gridPan"
      />

      {/* floating design-tool accents */}
      {toolAccents.map(({ icon: Icon, label, position, rotate, delay }) => (
        <div
          key={label}
          aria-hidden
          className={`pointer-events-none absolute ${position} hidden ${rotate} flex-col items-center gap-1.5 lg:flex animate-fadeUp`}
          style={{ animationDelay: delay, opacity: 0 }}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-accent-600 shadow-lg shadow-zinc-900/5">
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-400">
            {label}
          </span>
        </div>
      ))}

      <div className="relative mx-auto max-w-4xl w-full text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700 animate-fadeUp">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          Available for freelance projects
        </span>

        <h1
          className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl animate-fadeUp"
          style={{ animationDelay: "80ms", opacity: 0 }}
        >
          Designing interfaces that feel{" "}
          <span className="bg-gradient-to-r from-accent-600 to-fuchsia-500 bg-clip-text text-transparent">
            effortless
          </span>
          .
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-zinc-500 animate-fadeUp"
          style={{ animationDelay: "160ms", opacity: 0 }}
        >
          I'm a product designer who turns complex problems into simple,
          human-centered digital experiences — from early research and
          wireframes to polished, pixel-perfect interfaces.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fadeUp"
          style={{ animationDelay: "240ms", opacity: 0 }}
        >
          <a
            href="#works"
            className="inline-flex items-center justify-center rounded-full bg-accent-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-accent-600/20 transition-all hover:bg-accent-700 hover:shadow-md hover:shadow-accent-600/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-all hover:border-accent-300 hover:text-accent-700"
          >
            Get In Touch
          </a>
        </div>

        <div
          className="mt-12 flex items-center justify-center gap-3 animate-fadeUp"
          style={{ animationDelay: "320ms", opacity: 0 }}
        >
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:text-accent-700 hover:shadow-sm"
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
