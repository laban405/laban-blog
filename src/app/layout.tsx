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
    default: "Laban Mogire | AI-Native Frontend Engineer — React, Next.js & Angular",
    template: "%s | Laban Mogire",
  },
  description:
    "Frontend Engineer specialising in AI integration with 6+ years building React, Next.js, and Angular systems — LLM-powered UIs, agentic workflows, mobile apps, and full backend capability when the project needs it.",
  keywords: [
    "AI Frontend Engineer",
    "AI Integration Engineer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "Frontend Engineer Nairobi",
    "Laban Mogire",
    "LLM UI Engineer",
    "Mobile App Developer Kenya",
    "Frontend AI Specialist",
  ],
  authors: [{ name: "Laban Mogire", url: SITE_URL }],
  creator: "Laban Mogire",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Laban Mogire",
    title: "Laban Mogire | AI-Native Frontend Engineer",
    description:
      "Frontend Engineer specialising in AI integration — LLM-powered UIs, agentic workflows, React, Next.js, Angular, and mobile apps.",
    images: [
      {
        url: "/assets/laban_clean.jpg",
        width: 1247,
        height: 1280,
        alt: "Laban Mogire — AI-Native Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laban Mogire | AI-Native Frontend Engineer",
    description:
      "Frontend Engineer specialising in AI integration — LLM-powered UIs, agentic workflows, React, Next.js, Angular, and mobile apps.",
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
    { path: "../../public/fonts/mozilla/mozilla-text-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/mozilla/mozilla-text-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/mozilla/mozilla-text-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/mozilla/mozilla-text-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-stack-sans-text",
  display: "swap",
});

const stackSansNotch = localFont({
  src: [
    { path: "../../public/fonts/stack/stack-sans-notch-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/stack/stack-sans-notch-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/stack/stack-sans-notch-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/stack/stack-sans-notch-700.woff2", weight: "700", style: "normal" },
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
  jobTitle: "Frontend Engineer & AI Integration Specialist",
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
