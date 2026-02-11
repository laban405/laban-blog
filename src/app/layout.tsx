import React from "react";
import { josefin, cardo } from "./fonts";
import { cn } from "../lib/utils";

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
      className={`${josefin.variable} ${cardo.variable} h-full bg-primary text-base antialiased`}
    >
      <body className="flex min-h-full flex-col font-josefin">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn("min-h-screen antialiased relative dark:bg-gradient")}
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default AppLayout;
