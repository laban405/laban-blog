import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export type ButtonVariant = "primary" | "outline" | "ghost";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "ds-btn--primary",
  outline: "ds-btn--outline",
  ghost: "",
};

export function Button({ children, className, variant = "ghost", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn("ds-btn", variantClass[variant], className)}
      {...props}
    >
      <span className="ds-btn__viewport">
        <span className="ds-btn__slide-top">{children}</span>
        <span className="ds-btn__slide-bottom">{children}</span>
      </span>
    </button>
  );
}
