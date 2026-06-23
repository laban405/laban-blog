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
    default: "Laban Mogire | Senior Frontend Engineer — React, Next.js & Angular",
    template: "%s | Laban Mogire",
  },
  description:
    "Senior Frontend Engineer with 6+ years building scalable web and mobile systems in React, Next.js, Angular, and AI-integrated UIs across fintech, SaaS, IoT, and enterprise.",
  keywords: [
    "Senior Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "Frontend Engineer Nairobi",
    "Laban Mogire",
    "AI Frontend Engineer",
    "IoT Frontend",
    "Micro-frontend",
  ],
  authors: [{ name: "Laban Mogire", url: SITE_URL }],
  creator: "Laban Mogire",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Laban Mogire",
    title: "Laban Mogire | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 6+ years building scalable web and mobile systems in React, Next.js, Angular, and AI-integrated UIs.",
    images: [
      {
        url: "/assets/laban_clean.jpg",
        width: 1247,
        height: 1280,
        alt: "Laban Mogire — Senior Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laban Mogire | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 6+ years building scalable web and mobile systems in React, Next.js, Angular, and AI-integrated UIs.",
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
