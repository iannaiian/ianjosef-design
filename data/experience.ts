export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "UI/UX Designer",
    company: "Altametrics",
    period: "2022 — 2026",
    description:
      "Create wireframes, mockups, and prototypes using Figma to visualize website layouts and user interactions. Implement design elements, including typography, imagery, and icons, to enhance visual appeal and brand consistency. Incorporate user feedback and usability testing results to iterate and refine designs for improved user experience. Collaborate with developers to ensure design specifications are accurately implemented during the website development process.",
    tags: ["Design Systems", "Figma", "Research", "Prototyping", "User Testing"],
  },
  {
    role: "Frontend Web Developer/Designer",
    company: "WebriQ",
    period: "2019 — 2023",
    description:
      "Day-to-day implementation of web projects based on the company's workflow. Day to day management of web projects through the company's open source content management systems.",
    tags: ["Web Design", "Research", "Frontend Development", "Content Management", "Figma"],
  },
  {
    role: "Web Designer/SEO Specialist",
    company: "411 BPO",
    period: "2018 — 2019",
    description:
      "Execute integrated SEO programs across Google and Bing in the US and internationally. Implement best SEO practices to improve rankings of clients' websites. Design and maintain clients' WordPress websites based on the clients' wants and needs.",
    tags: ["SEO", "Web Design", "WordPress", "Content Management"],
  },
  {
    role: "Web Designer",
    company: "CML Mopro",
    period: "2017 — 2018",
    description:
      "Design outstanding user-friendly websites that render well across multiple devices. Maintained and redesigned websites to enhance user experience.",
    tags: ["Web Design", "Research", "Frontend Development", "Content Management"],
  },
];
