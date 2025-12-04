import React from "react";
import { Ubuntu as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "../providers/theme-provider";
import "../styles/globals.css";

global.performance = global.performance || {
  now: () => new Date().getTime(),
};

const fontSans = FontSans({
  weight: "300",
  subsets: ["latin", "cyrillic"],
  variable: "--font-ubuntu",
});

interface LayoutProps {
  children: any;
}

function AppLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full bg-primary text-base antialiased"
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              `${fontSans.className}`,
              "min-h-screen bg-background antialiased relative bg-gradient"
            )}
          >
            <Layout>
              {children}
            </Layout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default AppLayout;
