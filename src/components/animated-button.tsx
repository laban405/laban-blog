import { ButtonHTMLAttributes, ReactNode } from "react";

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};


export function AnimatedButton({
  children,
  className = "",
  onClick,
  type = "button",
}: AnimatedButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full px-[22px] py-2 text-[12px] uppercase tracking-[0.1em] cursor-pointer border border-[hsl(var(--border))]  group ${className}`}
    >
      <div className="relative overflow-hidden h-6 flex items-center justify-center">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7 text-center">
          {children}
        </span>

        <span className="absolute left-0 right-0 top-7 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-[1.5px] text-center">
          {children}
        </span>
      </div>
    </button>
  );
}