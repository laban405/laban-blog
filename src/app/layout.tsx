import React from "react";
import localFont from "next/font/local";
import { cn } from "../lib/utils";
import { ThemeProvider } from "../providers/theme-provider";
import "../styles/globals.css";

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
