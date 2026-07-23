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

export const workCategories: WorkCategory[] = [
  {
    id: "landing",
    label: "Case Studies",
    items: [
      {
        title: "Plum Accounting",
        category: "",
        year: "",
        image: "/images/portfolio-4.png",
        description:
          "A marketing website built from the ground up for a restaurant-focused accounting platform, designed to turn skeptical restaurant owners into demo bookings from day one.",
        challenge:
          "Plum Accounting had built a genuinely purpose-made accounting tool for restaurant owners — but no website to introduce it. Starting from a blank slate meant every ounce of trust, differentiation, and credibility had to be created from nothing, for an audience that is busy, hands-on, and wary of software promises.",
        solution: "",
        // results: [
        //   "42% increase in consultation bookings",
        //   "35% decrease in bounce rate",
        //   "28% increase in average session duration",
        //   "51% increase in mobile conversions",
        // ],
        tags: ["Web Design", "Figma", "User Research"],

        url: "https://www.figma.com/proto/Sj1P8qQmvcdVUXVvAjcMob/Case-Study--Plum-Accounting?node-id=7-2&t=t1sM3eSo0i8pp4Pl-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A2&hide-ui=1",
      },
      {
        title: "Zip HACCP",
        category: "",
        year: "",
        image: "/images/ziphaccp.png",
        description:
          "Zip HACCP makes a handheld food-safety thermometer paired with compliance software used by multi-location restaurant groups such as Mooyah, Fresh Griller, Dunn Brothers Coffee, and Famous Dave's. ",
        challenge:
          "The business is selling a handheld device that keeps a restaurant HACCP-compliant. They need a website that read as precise and trustworthy at a glace. The original homepage instead asked visitors to do the work of finding the message.",
        solution: "",
        // results: [
        //   "42% increase in consultation bookings",
        //   "35% decrease in bounce rate",
        //   "28% increase in average session duration",
        //   "51% increase in mobile conversions",
        // ],
        tags: ["Web Design", "Figma", "User Research"],

        url: "https://www.figma.com/proto/Sj1P8qQmvcdVUXVvAjcMob/Portfolio--Case-Studies?node-id=76-29&t=iIYVBkDtHX1JPMdM-0&scaling=scale-down-width&content-scaling=fixed&page-id=76%3A26&hide-ui=1",
      },
    ],
  },
  {
    id: "Figma Mockups",
    label: "Figma Mockups",
    items: [
      {
        title: "Plum Ledger",
        category: "Application",
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
        tags: ["Web Design", "Figma", "User Research"],

        url: "https://www.figma.com/proto/W5gynoRGS9KSZjjTDZaa8f/Portfolio?node-id=109-5739&t=gfWKCQaRF0lexNod-0&scaling=scale-down-width&content-scaling=fixed&page-id=109%3A5605&starting-point-node-id=109%3A5739&show-proto-sidebar=1&hide-ui=1",
      },
      {
        title: "Zip Forecasting",
        category: "",
        year: "2024",
        image: "/images/portfolio-3.png",
        description:
          "Get precise sales projections with Zip Forecasting software. A cloud-based forecasting software easily integrates with your business and makes sales prediction and business planning much easier than before. An intuitive software interface is easy to use and learn",
        challenge: "",
        solution: "",
        // results: [
        //   "42% increase in consultation bookings",
        //   "35% decrease in bounce rate",
        //   "28% increase in average session duration",
        //   "51% increase in mobile conversions",
        // ],
        tags: ["Web Design", "Figma", "User Research"],

        url: "https://www.figma.com/proto/W5gynoRGS9KSZjjTDZaa8f/Portfolio?node-id=1338-1135&t=9EtX2Zrx4Rn8zSFz-0&scaling=scale-down-width&content-scaling=fixed&page-id=109%3A5605&starting-point-node-id=109%3A5739&hide-ui=1",
      },
      {
        title: "Decatur Tree Services",
        category: "",
        year: "2024",
        image: "/images/portfolio-2.png",
        description:
          "Decatur Tree Services is more than just a local business; we are a family legacy rooted deeply in the soil of Houma. Since 2012, Michel and Leon have built a reputation based on unshakeable reliability and expert craftsmanship.",
        challenge: "",
        solution: "",
        // results: [
        //   "42% increase in consultation bookings",
        //   "35% decrease in bounce rate",
        //   "28% increase in average session duration",
        //   "51% increase in mobile conversions",
        // ],
        tags: ["Web Design", "Figma", "User Research"],

        url: "https://www.figma.com/proto/W5gynoRGS9KSZjjTDZaa8f/Portfolio?node-id=738-1141&t=9EtX2Zrx4Rn8zSFz-0&scaling=scale-down-width&content-scaling=fixed&page-id=109%3A5605&starting-point-node-id=109%3A5739&hide-ui=1",
      },
      {
        title: "Aerotek",
        category: "",
        year: "2024",
        image: "/images/aerotek.png",
        description:
          "Aerotek Environmental, LLC provides Certified Mold Testing & Inspection, Certified Mold Remediation & Removal, and Real Estate Mold Certification in New Jersey, Philadelphia and Delaware.",
        challenge: "",
        solution: "",
        // results: [
        //   "42% increase in consultation bookings",
        //   "35% decrease in bounce rate",
        //   "28% increase in average session duration",
        //   "51% increase in mobile conversions",
        // ],
        tags: ["Web Design", "Figma", "User Research"],

        url: "https://www.figma.com/proto/W5gynoRGS9KSZjjTDZaa8f/Portfolio?node-id=612-813&t=ciKxVvkZPaO9E8CF-0&scaling=scale-down-width&content-scaling=fixed&page-id=109%3A5605&starting-point-node-id=109%3A5739&hide-ui=1",
      },
      {
        title: "Lily Creek",
        category: "",
        year: "2024",
        image: "/images/lily.png",
        description:
          "Lily Creek is a leading wedding and events venue located in the heart of the countryside base in Belden, Mississippi. With its picturesque setting and elegant facilities, Lily Creek offers a perfect backdrop for couples to celebrate their special day.",
        challenge: "",
        solution: "",
        // results: [
        //   "42% increase in consultation bookings",
        //   "35% decrease in bounce rate",
        //   "28% increase in average session duration",
        //   "51% increase in mobile conversions",
        // ],
        tags: ["Web Design", "Figma", "User Research"],

        url: "https://www.figma.com/proto/W5gynoRGS9KSZjjTDZaa8f/Portfolio?node-id=109-5609&t=ciKxVvkZPaO9E8CF-0&scaling=scale-down-width&content-scaling=fixed&page-id=109%3A5605&starting-point-node-id=109%3A5609&hide-ui=1",
      },
    ],
  },
  {
    id: "live",
    label: "Live Websites",
    items: [
      {
        title: "One Source Associates Inc.",
        category: "Live Websites",
        year: "2024",
        image: "/images/onesa.png",
        description:
          "Website maintenance for a lighting and electrical supplies company, focused on improving user experience, updating design elements, and ensuring the site remains functional and visually appealing across all devices.",
        // challenge:
        //   "Visitors struggled to understand the coaching offers. No clear calls to action throughout the website. Low engagement on mobile devices. Limited social proof and trust-building elements.",
        // solution:
        //   "We redesigned the online coaching website with a user-centered approach focused on increasing conversions and improving the overall user experience. The new website features clear messaging that highlights the coach’s value proposition, simplified navigation to help visitors quickly explore available programs, and strategically placed calls to action that encourage consultation bookings. To build trust and credibility, we incorporated client testimonials, success stories, and coach credentials throughout the site. The entire experience was optimized for mobile devices, ensuring seamless performance and accessibility across all screen sizes.",
        // results: [
        //   "42% increase in consultation bookings",
        //   "35% decrease in bounce rate",
        //   "28% increase in average session duration",
        //   "51% increase in mobile conversions",
        // ],
        tags: ["Web Maintenance", "NextJS", "Content Management"],

        url: "https://www.onesa.com/",
      },
    ],
  },
];
