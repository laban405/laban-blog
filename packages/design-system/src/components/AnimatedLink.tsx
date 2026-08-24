import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export type AnimatedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function AnimatedLink({ children, className, ...props }: AnimatedLinkProps) {
  return (
    <a className={cn("ds-link", className)} {...props}>
      <span className="ds-link__viewport">
        <span className="ds-link__slide-top">{children}</span>
        <span className="ds-link__slide-bottom">{children}</span>
      </span>
    </a>
  );
}
