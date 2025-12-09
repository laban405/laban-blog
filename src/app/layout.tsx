import React from "react";
import { inter, playfair } from "./fonts";
import { cn } from "../lib/utils";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "../providers/theme-provider";
import "../styles/globals.css";

global.performance = global.performance || {
  now: () => new Date().getTime(),
};



interface LayoutProps {
  children: any;
}

function AppLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full bg-primary text-base antialiased`}
    >
      <body className="flex min-h-full flex-col font-inter">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              "min-h-screen antialiased relative dark:bg-gradient"
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
