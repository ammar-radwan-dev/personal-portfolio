import {
  BriefcaseBusiness,
  Camera,
  Folder,
  Globe,
  House,
  Layers3,
  Layout,
  Mail,
  PenLine,
  Send,
  Wrench,
} from "lucide-react";

export const profile = {
  image: "/ammar_radwan.png",
  name: "Ammar Radwan",
  description:
    "Frontend Engineer building responsive, high-performance digital products with React, Next.js, and TypeScript.",
  socialMedia: [
    {
      icon: "/social/linkedin_icon.svg",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ammar-radwan-mohammed/",
    },
    {
      icon: "/social/whatsapp_icon.svg",
      label: "Whatsapp",
      url: "https://wa.me/971568988967",
    },
    {
      icon: "/social/telegram_icon.svg",
      label: "Telegram",
      url: "https://t.me/ammarradwanmohammed",
    },
    {
      icon: "/social/mail_icon.svg",
      label: "Email",
      url: "https://mail.google.com/mail/?view=cm&to=ammarradwan03@gmail.com",
    },
  ],
};

export const header = {
  title: {
    top: "FRONTEND",
    bottom: "ENGINEERING",
  },
  description:
    "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
  stats: [
    {
      id: 1,
      value: "4+",
      label: {
        top: "REAL-WORLD",
        down: "SYSTEMS",
      },
    },
    {
      id: 2,
      value: "8+",
      label: {
        top: "CORE",
        down: "TECHNOLOGIES",
      },
    },
    {
      id: 3,
      value: "3",
      label: {
        top: "ENGINEERING",
        down: "DOMAINS",
      },
    },
  ],
  services: [
    {
      id: 1,
      icon: Layers3,
      title: "INTERACTIVE FRONTEND\nENGINEERING",
      colorClass: "orange",
    },
    {
      id: 2,
      icon: Layout,
      title: "REACT, NEXT.JS,\nTYPESCRIPT, GSAP",
      colorClass: "green",
    },
  ],
};

export const projects = {
  title: {
    top: "RECENT",
    bottom: "PROJECTS",
  },
  items: [
    {
      name: "Open Home Properties",
      type: "Production Real Estate Platform",
      image: "/thumpnails/ohp_thumpnail.png",
      url: "https://openhomeproperties.com",
    },
    {
      name: "Website QA Auditor",
      type: "Frontend Quality & Accessibility Tool — In Progress",
      image: "/thumpnails/web_qa_thumpnail.png",
      url: "https://web-qa-ten.vercel.app",
    },
    {
      name: "Elevvo Tech Company Website",
      type: "Full Stack Web App",
      image: "/thumpnails/elevvo_thumpnail.png",
      url: "https://elevvo.tech",
    },
  ],
};

export const experiences = {
  title: {
    top: "2+ YEARS OF",
    bottom: "EXPERIENCE",
  },
  items: [
    {
      company: "Open Home Properties",
      description:
        "Building and improving a production real estate platform with Next.js, TypeScript, PostgreSQL, multilingual routing, CRM integrations, analytics, performance optimization, and responsive user experiences.",
      date: "Current",
    },
    {
      company: "Freelancer.com",
      description:
        "Delivered & designed tailored web solutions for diverse clients, translating complex design requirements into fully responsive, pixel-perfect user interfaces and functional prototypes to meet specific business objectives.",
      date: "Jan 2025 – Dec 2025",
    },
    {
      company: "Tactful AI",
      description:
        "Worked as a Frontend Developer intern, building a React KPI dashboard, integrating FastAPI services, and collaborating within an Agile development workflow.",
      date: "Aug 2024 – Oct 2024",
    },
  ],
};

export const tools = {
  title: {
    top: "FRAMEWORKS",
    bottom: "& TOOLS",
  },
  items: [
    {
      name: "React",
      type: "Frontend Library",
      image: "/tools/react.png",
    },
    {
      name: "Next.js",
      type: "Full-Stack React Framework",
      image: "/tools/nextjs.png",
    },
    {
      name: "TypeScript",
      type: "Typed JavaScript",
      image: "/tools/typescript.png",
    },
    {
      name: "Tailwind CSS",
      type: "Utility-First CSS Framework",
      image: "/tools/tailwindcss.png",
    },
    {
      name: "GSAP",
      type: "Web Animation Library",
      image: "/tools/gsap.png",
    },
    {
      name: "PostgreSQL",
      type: "Relational Database",
      image: "/tools/postgresql.png",
    },
  ],
};

export const blog = {
  title: {
    top: "DEVELOPMENT",
    bottom: "THOUGHTS",
  },
  articles: [
    {
      slug: "building-production-ready-nextjs-experiences",
      title: "What Production-Ready Frontend Really Means",
      excerpt:
        "A polished interface is only the surface. Production frontend work also demands accessibility, performance, reliable data flows, and maintainable architecture.",
      date: "Aug 28, 2026",
      image: "/articles/a70g11CzlnQYCTEi1c802r8x1CE.avif",
      sections: [
        [
          "",
          "Building real products changed how I judge frontend quality. A page is not finished when it matches the design; it is finished when it behaves reliably across devices, data states, languages, and network conditions.",
        ],
        [
          "Beyond the interface",
          "Strong frontend engineering connects user experience with API behavior, caching, validation, permissions, analytics, SEO, and deployment constraints. Decisions at the component level often affect the entire product.",
        ],
        [
          "Designing for every state",
          "Loading, empty, partial, error, and success states deserve the same attention as the ideal screenshot. The interface should explain what is happening and give the user a safe next action.",
        ],
        [
          "Performance is part of UX",
          "Images, fonts, JavaScript, animation, and rendering strategy all shape how fast a product feels. Good performance work begins with measurement and ends with measurable improvement.",
        ],
        [
          "Maintainability matters",
          "Clear boundaries, reusable components, strict types, focused tests, and documented decisions make future changes safer. Production quality includes the experience of the next engineer who works on the code.",
        ],
      ],
    },
    {
      slug: "multilingual-nextjs-without-duplicating-complexity",
      title: "Lessons from Building Multilingual Next.js Routes",
      excerpt:
        "Internationalization is not just translated text. Routing, rendering, fallbacks, SEO, and unfinished locales must behave as one predictable system.",
      date: "Aug 24, 2026",
      image: "/articles/SmKpJArNfpH0J4YgHNcqsyxuyEA.avif",
      sections: [
        [
          "",
          "While introducing Arabic into a production Next.js platform, I learned that locale handling becomes fragile when routing rules, static generation, and translation availability are controlled in different places.",
        ],
        [
          "One source of truth",
          "Supported locales and translated routes should come from shared configuration. This prevents middleware, navigation, and static generation from disagreeing about which pages are available.",
        ],
        [
          "Progressive rollout",
          "A language can be released page by page when unavailable routes fall back deliberately. The important part is to avoid generating pages whose required messages do not exist.",
        ],
        [
          "RTL is a layout concern",
          "Arabic support also affects alignment, direction, icons, spacing, forms, and content length. Translation files alone cannot guarantee a complete localized experience.",
        ],
      ],
    },
    {
      slug: "designing-ai-teams-as-products",
      title: "Designing AI Teams as Real Products",
      excerpt:
        "Multi-agent systems need more than impressive prompts: they need permissions, observable workflows, reliable handoffs, and shared organizational memory.",
      date: "Aug 22, 2026",
      image: "/articles/iwNXp5FbnVuonnC3boDtFbw8Mk.avif",
      sections: [
        [
          "",
          "I am exploring a visual platform where companies can compose AI teams, assign responsibilities, connect knowledge, and observe how work moves between specialized agents.",
        ],
        [
          "Agents need boundaries",
          "Each agent should have a defined role, limited tools, scoped data access, and explicit escalation rules. Capability without authority boundaries creates unpredictable systems.",
        ],
        [
          "Handoffs are product states",
          "A handoff should record the task, evidence, decisions, remaining uncertainty, and expected next action. This makes collaboration inspectable instead of hiding it inside a conversation log.",
        ],
        [
          "Learning needs governance",
          "Experiments can improve shared organizational knowledge, but proposed lessons should be reviewed, versioned, and traceable before they influence every agent in the system.",
        ],
      ],
    },
    {
      slug: "engineering-an-interactive-real-estate-map",
      title: "Engineering an Interactive Real Estate Map",
      excerpt:
        "A useful property map is not just a collection of markers. It connects geographic context, project data, filters, boundaries, and responsive interaction.",
      date: "Aug 20, 2026",
      image: "/articles/zOWx0eEsJcZm7ntGp0RzPSjE00.avif",
      sections: [
        [
          "",
          "I explored a MapLibre-based experience that lets users move from developer to country, city, and project while keeping the map synchronized with the selected data.",
        ],
        [
          "Model the geography first",
          "Developers, countries, cities, projects, coordinates, and project boundaries need a clean data relationship. A well-designed model makes filtering and camera behavior far easier to maintain.",
        ],
        [
          "Synchronize state and motion",
          "Selecting a project should update its card, marker, boundary, and camera as one transition. The user should never wonder which project the map is currently describing.",
        ],
        [
          "Design for incomplete data",
          "Some projects have full polygon boundaries while others only have coordinates. The interface must remain useful in both cases instead of assuming every record is equally complete.",
        ],
      ],
    },
    {
      slug: "frontend-engineering-in-the-age-of-ai",
      title: "Frontend Engineering in the Age of AI",
      excerpt:
        "AI can accelerate implementation, but engineering judgment still determines whether a product is coherent, secure, maintainable, and useful.",
      date: "Aug 15, 2026",
      image: "/articles/images/X45kreSZsm5DFF2be6T8o6YaJAQ.avif",
      sections: [
        [
          "",
          "AI changes the speed of production, not the need for understanding. A developer still needs to recognize incorrect assumptions, fragile architecture, inaccessible interactions, and security risks.",
        ],
        [
          "Use AI as a collaborator",
          "The strongest workflow gives AI clear context, constraints, and acceptance criteria, then verifies the result through code review, tests, browser inspection, and real measurements.",
        ],
        [
          "Fundamentals become more valuable",
          "Browser behavior, JavaScript, TypeScript, accessibility, networking, and architecture help developers evaluate generated code instead of trusting it blindly.",
        ],
        [
          "Own the final decision",
          "Tools can propose options, but the engineer remains responsible for what ships. Good judgment means understanding the tradeoffs and being able to explain why the final solution fits the product.",
        ],
      ],
    },
  ],
};

export const nav = [
  { href: "/", label: "Home", icon: House },
  { href: "/projects", label: "Projects", icon: Folder },
  {
    href: "/experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  { href: "/tools", label: "Tools", icon: Wrench },
  { href: "/blog", label: "Thoughts", icon: PenLine },
];
