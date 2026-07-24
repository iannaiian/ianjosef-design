import type { SVGProps } from "react";

function NextLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 180" aria-hidden {...props}>
      <mask
        id="nextmask"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#nextmask)">
        <circle cx="90" cy="90" r="90" fill="currentColor" />
        <path
          d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325Z"
          fill="#fff"
        />
        <rect x="115" y="54" width="12" height="72" fill="#fff" />
      </g>
    </svg>
  );
}

function TailwindLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 54 33" aria-hidden {...props}>
      <path
        fill="#38bdf8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.003-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
      />
    </svg>
  );
}

function AceternityLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M12 2 2 20h4.2l1.8-3.3h8l1.8 3.3H22L12 2Zm-2.1 11.6L12 9.4l2.1 4.2H9.9Z"
      />
    </svg>
  );
}

function ClaudeLogo(props: SVGProps<SVGSVGElement>) {
  // Simplified Anthropic "burst" mark
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g fill="#D97757">
        <path d="M12 1.5 13.5 9 12 12 10.5 9 12 1.5Z" />
        <path d="M12 22.5 10.5 15 12 12 13.5 15 12 22.5Z" />
        <path d="M1.5 12 9 10.5 12 12 9 13.5 1.5 12Z" />
        <path d="M22.5 12 15 13.5 12 12 15 10.5 22.5 12Z" />
        <path d="m4.55 4.55 6.16 4.4L12 12l-3.05-1.29L4.55 4.55Z" />
        <path d="m19.45 19.45-6.16-4.4L12 12l3.05 1.29 4.4 6.16Z" />
        <path d="m19.45 4.55-4.4 6.16L12 12l1.29-3.05 6.16-4.4Z" />
        <path d="m4.55 19.45 4.4-6.16L12 12l-1.29 3.05-6.16 4.4Z" />
      </g>
    </svg>
  );
}

const items = [
  { name: "Next.js", href: "https://nextjs.org", logo: NextLogo, className: "h-4 w-4 text-zinc-900" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com", logo: TailwindLogo, className: "h-4 w-auto" },
  { name: "Aceternity UI", href: "https://ui.aceternity.com", logo: AceternityLogo, className: "h-4 w-4 text-zinc-900" },
  { name: "Claude AI", href: "https://claude.ai", logo: ClaudeLogo, className: "h-4 w-4" },
];

export default function PoweredBy() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
      <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
        Powered by
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {items.map(({ name, href, logo: Logo, className }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <Logo className={className} />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
