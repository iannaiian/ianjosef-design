import { experiences } from "@/lib/portfolio-data";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function ExperienceSection() {
  return (
    <div className="flex min-h-full w-full items-center px-6 py-24 md:px-12 md:py-32 lg:px-20 bg-[url('/images/grid.png')] bg-cover bg-center">
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Experience
        </p>
        <h2 className="mb-10 text-balance font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
          Where I've made an impact
        </h2>

        <ol className="">
          {experiences.map((exp) => (
            <li key={exp.role}>
              <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl group grid gap-3 py-6 transition-colors md:grid-cols-[180px_1fr] md:gap-8 bg-[#181818] mb-10 px-6 ">
                {" "}
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {exp.period}
                </p>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {exp.role}{" "}
                    <span className="text-primary">· {exp.company}</span>
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {exp.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {tag}test
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
