import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import PortfolioFooter from "@/components/portfolio/footer";
import PortfolioHeader from "@/components/portfolio/header";
export const metadata: Metadata = {
  metadataBase: new URL("https://prodmast.com"),
  title: {
    default: "Senior Frontend Engineer - Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "Senior Frontend Engineer with 6+ years delivering performant, maintainable, and user-focused digital products using Angular, React, and modern frontend architectures.",
  openGraph: {
    title: "Senior Frontend Engineer - Portfolio",
    description:
      "6+ years delivering performant, maintainable, and user-focused digital products. Building scalable, high-quality web applications.",
    url: "https://portfolio.com",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Senior Frontend Engineer - Portfolio",
    card: "summary_large_image",
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx("text-black", GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          <main className="min-h-screen antialiased">
            <PortfolioHeader />
            {children}
            <PortfolioFooter />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
