import Image from "next/image";

const stats = [
  { value: "10+", label: "Years designing" },
  { value: "60+", label: "Products shipped" },
  { value: "12", label: "Teams led" },
];

const skills = [
  "Product Strategy",
  "Design Systems",
  "User Research",
  "Prototyping",
  "Interaction Design",
  "Usability Testing",
];

export function AboutSection() {
  return (
    <div className="flex min-h-full w-full items-center px-6 py-24 md:px-12 md:py-0 lg:px-20 bg-[url('/images/wave.png')] bg-cover bg-center">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[0.8fr_1fr] lg:gap-20">
        {/* Portrait */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-border md:max-w-none">
          <Image
            src="/images/persona2.png"
            alt="Portrait of Ian Josef"
            fill
            sizes="(max-width: 768px) 320px, 400px"
            className="object-cover"
          />
        </div>

        {/* Copy */}
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            About Me
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
            I believe good design disappears into the experience.
          </h2>
          <div className="mt-6 space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              My work lives at the intersection of research, systems thinking,
              and craft. I partner closely with engineers and product leaders to
              ship interfaces that feel obvious — the kind people never have to
              think about.
            </p>
          </div>

          {/* <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div> */}

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
