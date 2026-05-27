import { AnchorHTMLAttributes, ReactNode } from "react";

type AnimatedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function AnimatedLink({
  children,
  className = "",
  ...props
}: AnimatedLinkProps) {
  return (
    <a {...props} className={`group inline-block ${className}`}>
      <div className="relative overflow-hidden h-6 flex items-center justify-center">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7 text-center">
          {children}
        </span>

        <span className="absolute left-0 top-7 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-[1.5px] text-center">
          {children}
        </span>
      </div>
    </a>
  );
}