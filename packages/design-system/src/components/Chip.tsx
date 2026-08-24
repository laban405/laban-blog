import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: "skill" | "ghost";
};

export function Chip({ children, className, variant = "skill", ...props }: ChipProps) {
  return (
    <span className={cn(variant === "ghost" ? "ds-chip--ghost" : "ds-chip", className)} {...props}>
      {children}
    </span>
  );
}
