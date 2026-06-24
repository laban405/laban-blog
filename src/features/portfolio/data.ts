export const services = [
  {
    id: "01",
    icon: "✦",
    title: "AI Integration & Agentic Systems",
    desc: "I connect your product to Claude, GPT-4o, and beyond — streaming chat, AI copilots, RAG pipelines, and agentic workflows that feel native, not bolted on.",
  },
  {
    id: "02",
    icon: "⬡",
    title: "Full-Stack Web Development",
    desc: "End-to-end delivery in React, Next.js, Angular, and Node.js — from database schema to deployed UI, built to scale and maintained with confidence.",
  },
  {
    id: "03",
    icon: "◻",
    title: "Mobile App Engineering",
    desc: "Cross-platform iOS and Android apps with consistent performance and clean UI using React Native, Flutter, and Ionic/Capacitor.",
  },
  {
    id: "04",
    icon: "↑",
    title: "System Modernization",
    desc: "Legacy codebase? I migrate monoliths to micro-frontends or modular backends, roll out design systems, and rebuild architectures your team will actually enjoy working in.",
  },
  {
    id: "05",
    icon: "◉",
    title: "IoT & Hardware-Connected Systems",
    desc: "Production-grade hardware communication via WebSerial, WebUSB, BLE, and WiFi — built and deployed at scale across 5,000+ IoT devices.",
  },
  {
    id: "06",
    icon: "⚡",
    title: "Performance & Architecture Audit",
    desc: "Faster loads, tighter APIs, smarter caching — I've cut load times by 50% and API integration effort by 30% in production. Clear written audit + action plan.",
  },
  {
    id: "07",
    icon: "◈",
    title: "UI/UX Engineering",
    desc: "Structured UX audits and accessible, intuitive interfaces — designed to work, not just look good.",
  },
  {
    id: "08",
    icon: "◎",
    title: "Technical Leadership & Consultation",
    desc: "Architecture decisions, coding standards, design systems, and mentorship — I raise the bar for the whole team, not just my own output.",
  },
];

export const skillCategories = [
  {
    icon: "✦",
    title: "AI & Backend",
    items: ["Claude API", "OpenAI", "LangChain", "RAG", "Node.js", "REST APIs", "GraphQL", "NoSQL"],
  },
  {
    icon: "⬡",
    title: "Web & Mobile",
    items: ["React", "Next.js", "Angular", "React Native", "Flutter", "Ionic", "Capacitor"],
  },
  {
    icon: "◈",
    title: "Languages & State",
    items: ["TypeScript", "JavaScript ES6+", "Dart", "NgRx", "GraphQL", "SQL"],
  },
  {
    icon: "◉",
    title: "UI & Design Systems",
    items: ["Tailwind CSS", "SASS", "Shadcn", "Material UI", "AntD", "Bootstrap", "Figma"],
  },
  {
    icon: "◫",
    title: "IoT & Hardware APIs",
    items: ["WebSerial", "WebUSB", "BLE", "WiFi Provisioning", "Device Management", "Real-time Dashboards"],
  },
  {
    icon: "⊞",
    title: "Architecture",
    items: ["Micro-frontends", "Single-SPA", "NX Monorepo", "Design Systems", "PWA", "Component Libraries"],
  },
  {
    icon: "⊙",
    title: "DevOps & Tools",
    items: ["Git", "Docker", "CI/CD", "Webpack", "Jest/Enzyme", "Cypress", "GCP", "AWS", "Vercel"],
  },
];

export const projects = [
  {
    id: "01",
    title: "Real-Time Whiteboard Collaboration",
    desc: "Low-latency multi-user drawing and annotation platform for collaboration, training, and design sessions.",
    type: "WebSockets · Canvas",
  },
  {
    id: "02",
    title: "Carwash POS — SaaS Platform",
    desc: "Modern point-of-sale and operations system with receipts, staff management, transaction tracking, and reporting.",
    type: "SaaS · Dashboard",
  },
  {
    id: "03",
    title: "Transport Management & Ticketing",
    desc: "Led UI/UX and frontend engineering for a large-scale transport intelligence system deployed across Kenya.",
    type: "Enterprise · Transport",
  },
  {
    id: "04",
    title: "Spare Parts & Insurance Workflow",
    desc: "Parts sourcing, quoting, and approval system that streamlines accident resolution for insurers and garages.",
    type: "Workflow · Fintech",
  },
];

export const careerItems = [
  {
    period: "Nov 2023 — Present",
    company: "Kamsware LTD",
    role: "Senior Frontend Engineer",
    summary: "Built and scaled hardware-connected frontend systems for 5,000+ IoT devices with a 96% provisioning and diagnostics efficiency improvement.",
    bullets: [
      "Delivered 150+ features across 3 projects with 95% on-time success through cross-timezone coordination with offshore tech lead.",
      "Reduced app loading times by 50% and API integration effort by 30% by architecting reusable Angular OData query modules with intelligent caching.",
      "Built a scalable hardware-communication architecture using WebSerial, WebUSB, BLE, and WiFi APIs — automating provisioning and diagnostics for 5,000+ IoT devices with a 96% efficiency improvement.",
      "Led frontend architecture for an enterprise IoT management portal serving 1,000+ users across 5+ sites with real-time notifications and device monitoring.",
      "Mentored 3 junior developers — 2 earned promotions within 12 months. Team delivery speed up by 50%.",
    ],
    tags: ["Angular", "IoT", "WebSerial", "BLE", "NX", "CI/CD"],
  },
  {
    period: "Jul 2022 — Nov 2023",
    company: "Kyosk Digital",
    role: "Senior Frontend Engineer",
    summary: "Migrated a legacy monolith to micro-frontends with Single-SPA, improving scalability and developer velocity by 50%.",
    bullets: [
      "Implemented a company-wide design system that standardised web and mobile interfaces, increasing component reusability and boosting user satisfaction by 40%.",
      "Migrated REST APIs to GraphQL, cutting app response times by 45% and enabling 3× higher trip delivery volumes.",
      "Migrated a legacy monolith to micro-frontend architecture using Single-SPA, improving scalability and developer velocity by 50%.",
      "Configured PWA bundle compression and caching, reducing mobile data usage cost by 70%.",
    ],
    tags: ["React", "GraphQL", "Single-SPA", "PWA", "Design System"],
  },
  {
    period: "Jan — Jul 2022",
    company: "Innovex Solutions",
    role: "Frontend Engineer",
    summary: "Architected an enterprise spare parts sourcing platform that reduced accident resolution time by 78%.",
    bullets: [
      "Architected an enterprise spare parts sourcing system for 60+ insurers and garages using Angular 16, TypeScript, and NgRx — reducing accident resolution time by 78%.",
      "Built a library of 20+ reusable Angular modules achieving 30% code reuse and cutting feature development time by 50%.",
      "Implemented automated visual regression testing, reducing UI bugs in production by 70%.",
    ],
    tags: ["Angular 16", "NgRx", "TypeScript", "Visual Testing"],
  },
  {
    period: "Nov 2020 — Dec 2021",
    company: "Data Integrated",
    role: "Frontend Engineer",
    summary: "Built the React UI for the NTSA Intelligent Transport MVP, tracking 500,000+ commercial vehicles across 40+ screens.",
    bullets: [
      "Led redesign of a travel booking platform through user interviews and usability testing — increased bookings by 50% and cut booking time by 30%.",
      "Built the React UI for the NTSA Intelligent Transport MVP, tracking 500,000+ commercial vehicles across 40+ Figma screens integrated with four microservice APIs.",
      "Established coding standards for a 5-engineer team reducing code review time by 40% and cutting technical debt by 60%.",
    ],
    tags: ["React", "Figma", "UX Research", "Microservices"],
  },
];

export const updates = [
  "/assets/illustration-1.jpg",
  "/assets/2Illustration1.png",
  "/assets/people-1.png",
  "/assets/people-2.png",
  "/assets/people-3.png",
  "/assets/Illustration2.png",
];
