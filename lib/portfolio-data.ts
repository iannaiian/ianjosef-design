export type SectionId = "hero" | "about" | "experience" | "works";

export interface CaseStudy {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
}

export const sections: { id: SectionId; label: string; index: string }[] = [
  { id: "hero", label: "Intro", index: "01" },
  { id: "about", label: "About Me", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "works", label: "Past Works", index: "04" },
];

export const experiences = [
  {
    period: "2022 — 2026",
    role: "UI/UX Designer",
    company: "Altametrics",
    summary:
      "Create wireframes, mockups, and prototypes using Figma to visualize website layouts and user interactions. Implement design elements, including typography, imagery, and icons, to enhance visual appeal and brand consistency. Incorporate user feedback and usability testing results to iterate and refine designs for improved user experience. Collaborate with developers to ensure design specifications are accurately implemented during the website development process.",
    tags: [
      "Design Systems",
      "Figma",
      "Research",
      "Prototyping",
      "User Testing",
    ],
  },
  {
    period: "2019 — 2023",
    role: "Frontend Web Developer/Designer",
    company: "WebriQ",
    summary:
      "Day-to-day implementation of web projects based on the company's workflow. Day to day management of web projects through the company's open sources content management systems",
    tags: [
      "Web Design",
      "Research",
      "Frontend Development",
      "Content Management",
      "Figma",
    ],
  },
  {
    period: "2018 — 2019",
    role: "Web Designer/SEO Specialist",
    company: "411 BPO",
    summary:
      "Execute integrated SEO programs across Google and Bing in the US and internationally. Implement best SEO practices to improve rankings of clients' websites. Design and maintain clients' WordPress websites based on the clients' wants and needs.",
    tags: ["SEO", "Web Design", "WordPress", "Content Management"],
  },
  {
    period: "2017 — 2018",
    role: "Web Designer",
    company: "CML Mopro",
    summary:
      "Design outstanding user-friendly websites that render well across multiple devices. Maintained and redesigned websites to enhance user experience.",
    tags: [
      "Web Design",
      "Research",
      "Frontend Development",
      "Content Management",
    ],
  },
];

export const works: CaseStudy[] = [
  {
    title: "Plum Ledger",
    category: "Finance · Web app",
    year: "2024",
    image: "/images/ledger.png",
    description:
      "A calm, confidence-building Ledger app focused on clarity and effortless money movement.",
    challenge:
      "Users were overwhelmed by the complexity of their existing banking app. Transaction history was buried, account balances weren't clear at a glance, and transferring money between accounts required six separate steps.",
    solution:
      "We redesigned the entire experience around clarity and speed. The dashboard now surfaces what matters most through a card-based layout, transaction search is instant, and peer-to-peer transfers take just two taps.",
    results: [
      "Easy trackin of finances with a clear, intuitive dashboard",
      "Clean and modern design that feels approachable and trustworthy",
      "Reduced clutter and cognitive load, making it easier for users to manage their money",
    ],
    tags: ["Mobile Design", "Fintech", "User Research", "Prototyping"],

    url: "https://www.figma.com/proto/W5gynoRGS9KSZjjTDZaa8f/Portfolio?node-id=137-95294&p=f&t=gfWKCQaRF0lexNod-0&scaling=scale-down-width&content-scaling=fixed&page-id=137%3A34938&starting-point-node-id=137%3A95294&hide-ui=1",
  },
  {
    title: "Aemorph",
    category: "Fitness · Website",
    year: "2024",
    image: "/images/aemorph1.png",
    description:
      "A modern, conversion-focused website designed for an online coaching business to increase client bookings and strengthen its digital presence.",
    challenge:
      "Visitors struggled to understand the coaching offers. No clear calls to action throughout the website. Low engagement on mobile devices. Limited social proof and trust-building elements.",
    solution:
      "We redesigned the online coaching website with a user-centered approach focused on increasing conversions and improving the overall user experience. The new website features clear messaging that highlights the coach’s value proposition, simplified navigation to help visitors quickly explore available programs, and strategically placed calls to action that encourage consultation bookings. To build trust and credibility, we incorporated client testimonials, success stories, and coach credentials throughout the site. The entire experience was optimized for mobile devices, ensuring seamless performance and accessibility across all screen sizes.",
    // results: [
    //   "42% increase in consultation bookings",
    //   "35% decrease in bounce rate",
    //   "28% increase in average session duration",
    //   "51% increase in mobile conversions",
    // ],
    tags: ["Mobile Design", "Fintech", "User Research", "Prototyping"],

    url: "https://www.figma.com/proto/W5gynoRGS9KSZjjTDZaa8f/Portfolio?node-id=109-5739&t=gfWKCQaRF0lexNod-0&scaling=scale-down-width&content-scaling=fixed&page-id=109%3A5605&starting-point-node-id=109%3A5739&show-proto-sidebar=1&hide-ui=1",
  },
];
