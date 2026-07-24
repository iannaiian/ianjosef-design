export type Category = "All" | "Web Design" | "Mobile App" | "Branding" | "Design System";

export interface Project {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  gradient: string;
  tags: string[];
  /** Optional real screenshot; falls back to the gradient fill when omitted. */
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Plum Accounting",
    description:
      "A marketing website built from the ground up for a restaurant-focused accounting platform, designed to turn skeptical restaurant owners into demo bookings from day one.",
    category: "Web Design",
    gradient: "from-accent-600 to-violet-700",
    tags: ["Marketing Site", "Case Study"],
    image: "https://www.ianjosef.design/images/portfolio-4.png",
  },
  {
    title: "Zip HACCP",
    description:
      "A handheld food-safety thermometer paired with compliance software, used by multi-location restaurant groups such as Mooyah, Fresh Griller, Dunn Brothers Coffee, and Famous Dave's.",
    category: "Web Design",
    gradient: "from-violet-500 to-indigo-500",
    tags: ["Product Design", "Case Study"],
    image: "https://www.ianjosef.design/images/ziphaccp.png",
  },
  {
    title: "Nimbus Finance",
    description: "A banking app redesign focused on clarity and trust for everyday budgeting.",
    category: "Mobile App",
    gradient: "from-accent-500 via-fuchsia-500 to-accent-700",
    tags: ["UX Research", "iOS", "Fintech"],
  },
  {
    title: "Orbit Analytics",
    description: "Dashboard design system for a B2B data platform.",
    category: "Design System",
    gradient: "from-violet-500 to-indigo-500",
    tags: ["Dashboard", "SaaS"],
  },
  {
    title: "Haven Studio",
    description: "Brand identity and site for an interior design studio.",
    category: "Branding",
    gradient: "from-purple-400 to-pink-400",
    tags: ["Logo", "Identity"],
  },
  {
    title: "Loop Music",
    description: "Streaming app concept with a focus on discovery and mood-based playlists.",
    category: "Mobile App",
    gradient: "from-fuchsia-500 to-accent-600",
    tags: ["Mobile", "Media"],
  },
  {
    title: "Marlow & Co.",
    description: "Marketing site redesign for a boutique law firm, built for conversions.",
    category: "Web Design",
    gradient: "from-accent-600 to-violet-700",
    tags: ["Website", "CMS"],
  },
  {
    title: "Fieldnote",
    description: "Note-taking app with an emphasis on typography and offline-first sync.",
    category: "Mobile App",
    gradient: "from-indigo-500 via-accent-500 to-purple-600",
    tags: ["Productivity", "iOS/Android"],
  },
  {
    title: "Verdant",
    description: "E-commerce experience for a sustainable home goods brand.",
    category: "Web Design",
    gradient: "from-purple-500 to-fuchsia-600",
    tags: ["Shopify", "E-commerce"],
  },
  {
    title: "Pulse Health",
    description: "Design system and component library for a telehealth platform.",
    category: "Design System",
    gradient: "from-accent-400 to-indigo-600",
    tags: ["Healthcare", "Accessibility"],
  },
];

export const categories: Category[] = [
  "All",
  "Web Design",
  "Mobile App",
  "Branding",
  "Design System",
];
