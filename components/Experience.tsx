import { experience } from "@/data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-50/60 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-wide text-accent-600">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Where I've made an impact
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200 sm:left-[7px]" />

          <ol className="space-y-12">
            {experience.map((item, i) => (
              <Reveal
                as="li"
                key={item.role + item.company}
                delay={i * 90}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-600 bg-white" />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {item.role}{" "}
                    <span className="font-normal text-zinc-400">
                      · {item.company}
                    </span>
                  </h3>
                  <span className="text-sm font-medium text-accent-600">
                    {item.period}
                  </span>
                </div>

                <p className="mt-3 max-w-2xl text-zinc-600">
                  {item.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-zinc-500 border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
