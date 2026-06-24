import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "../lib/utils";
import { ThemeProvider } from "../providers/theme-provider";
import "../styles/globals.css";

const SITE_URL = "https://laban.mikrosell.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Laban Mogire | Full-Stack Engineer & AI Consultant — React, Node.js, Angular",
    template: "%s | Laban Mogire",
  },
  description:
    "Full-Stack Software Engineer with 6+ years building end-to-end web, mobile, and AI-powered systems in React, Next.js, Angular, Node.js, and Flutter — across fintech, SaaS, IoT, and enterprise.",
  keywords: [
    "Full-Stack Engineer",
    "AI Integration Engineer",
    "Software Engineer Nairobi",
    "React Developer",
    "Node.js Developer",
    "Angular Developer",
    "Laban Mogire",
    "AI Consultant Kenya",
    "Mobile App Developer",
    "Technical Consultant Nairobi",
  ],
  authors: [{ name: "Laban Mogire", url: SITE_URL }],
  creator: "Laban Mogire",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Laban Mogire",
    title: "Laban Mogire | Full-Stack Engineer & AI Consultant",
    description:
      "Full-Stack Software Engineer with 6+ years building end-to-end web, mobile, and AI-powered systems in React, Node.js, Angular, and Flutter.",
    images: [
      {
        url: "/assets/laban_clean.jpg",
        width: 1247,
        height: 1280,
        alt: "Laban Mogire — Full-Stack Engineer & AI Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laban Mogire | Full-Stack Engineer & AI Consultant",
    description:
      "Full-Stack Software Engineer with 6+ years building end-to-end web, mobile, and AI-powered systems in React, Node.js, Angular, and Flutter.",
    images: ["/assets/laban_clean.jpg"],
    creator: "@laban_mogire",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

(global as any).performance = global.performance || {
  now: () => new Date().getTime(),
};

const mozillaText = localFont({
  src: [
    { path: "../../public/fonts/mozilla/mozilla-text-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/mozilla/mozilla-text-500.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/mozilla/mozilla-text-600.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/mozilla/mozilla-text-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-stack-sans-text",
  display: "swap",
});

const stackSansNotch = localFont({
  src: [
    { path: "../../public/fonts/stack/stack-sans-notch-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/stack/stack-sans-notch-500.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/stack/stack-sans-notch-600.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/stack/stack-sans-notch-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
});

interface LayoutProps {
  children: any;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Laban Mogire",
  jobTitle: "Full-Stack Software Engineer",
  url: SITE_URL,
  email: "laban405@gmail.com",
  telephone: "+254797313732",
  sameAs: [
    "https://www.linkedin.com/in/laban405/",
    "https://github.com/laban405",
  ],
  knowsAbout: [
    "React", "Next.js", "Angular", "Node.js", "TypeScript",
    "AI Integration", "LLM Applications", "Flutter", "React Native",
    "Micro-frontend Architecture", "IoT Systems", "Full-Stack Development",
  ],
};

function AppLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full bg-primary text-base antialiased",
        mozillaText.variable,
        stackSansNotch.variable,
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className={cn("min-h-screen antialiased relative dark:bg-gradient")}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default AppLayout;
