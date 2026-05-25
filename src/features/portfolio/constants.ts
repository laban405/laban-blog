import type { ExperienceItem, Project, Service, Stat } from "./types";

export const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "GraphQL",
  "Micro-frontends",
  "Design Systems",
  "PWA",
  "React Native",
  "Performance",
  "CI/CD",
  "Accessibility",
  "Node.js",
];

export const SERVICES: Service[] = [
  { n: "01", icon: "⬡", title: "Frontend Development", desc: "Clean, scalable implementations built on best practices, maintainable patterns, and long-term stability — not just something that works today." },
  { n: "02", icon: "↑", title: "Frontend Modernization", desc: "I take legacy interfaces and rebuild them into modular, performant architectures that your team won't dread touching." },
  { n: "03", icon: "◈", title: "UI/UX Engineering", desc: "Better flow, sharper clarity, and real accessibility — structured UX audits and interfaces designed to work, not just look good." },
  { n: "04", icon: "⚡", title: "Performance Optimization", desc: "Faster load times, tighter responsiveness, and streamlined CI/CD workflows. Speed isn't a feature — it's the foundation." },
  { n: "05", icon: "◻", title: "Mobile App Engineering", desc: "Cross-platform mobile apps with smooth interactions, clean UI, and consistent performance across devices." },
  { n: "06", icon: "◎", title: "Technical Leadership", desc: "Design systems, coding standards, documentation, and team mentorship to raise the bar across your entire engineering org." },
];

export const PROJECTS: Project[] = [
  { idx: "01", title: "Real-Time Whiteboard Collaboration", desc: "Low-latency multi-user drawing and annotation platform for collaboration, training, and design sessions.", type: "WebSockets · Canvas" },
  { idx: "02", title: "Carwash POS — SaaS Platform", desc: "Modern point-of-sale and operations system with receipts, staff management, transaction tracking, and reporting.", type: "SaaS · Dashboard" },
  { idx: "03", title: "Transport Management & Ticketing", desc: "Led UI/UX and frontend engineering for a large-scale transport intelligence system deployed across Kenya.", type: "Enterprise · Transport" },
  { idx: "04", title: "Spare Parts & Insurance Workflow", desc: "Parts sourcing, quoting, and approval system that streamlines accident resolution for insurers and garages.", type: "Workflow · Fintech" },
];

export const EXPERIENCE: ExperienceItem[] = [
  { company: "Kamsware", role: "Senior Frontend Engineer", desc: "Performance improvements, real-time dashboards, architecture upgrades, and CI/CD optimization across production systems." },
  { company: "Kyosk Digital Services", role: "Frontend Engineer", desc: "Micro-frontend architecture, design systems, GraphQL migration, PWA optimization, and developer tooling at scale." },
  { company: "Innovex Solutions", role: "Frontend Engineer", desc: "UI architecture ownership, reusable component libraries, and direct team mentorship." },
  { company: "Data Integrated", role: "Frontend Engineer & UI/UX Architect", desc: "Ticketing systems, UX audits, frontend redesigns, and coding standards across the product team." },
  { company: "Ciphercom", role: "Software Developer & UI/UX Architect", desc: "M-Rescue App, SaaS financial tools, and internal documentation systems from concept through delivery." },
];

export const STATS: Stat[] = [
  { n: "5+", l: "Years of experience" },
  { n: "5", l: "Industries served" },
  { n: "10+", l: "Products shipped" },
  { n: "0", l: "Tolerance for spaghetti code" },
];

export const NAV_LINKS = ["About", "Services", "Projects", "Experience", "Contact"];

export const OPEN_TO = [
  "Full-time senior / lead roles",
  "Contract & freelance projects",
  "Architecture consulting",
  "Frontend audits & modernization",
];
