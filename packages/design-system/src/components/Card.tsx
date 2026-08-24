import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: "default" | "cta";
  as?: "div" | "article";
};

export function Card({ children, className, variant = "default", as = "article", ...props }: CardProps) {
  const Tag = as;
  return (
    <Tag className={cn("ds-card", variant === "cta" && "ds-card--cta", className)} {...props}>
      {children}
    </Tag>
  );
}
