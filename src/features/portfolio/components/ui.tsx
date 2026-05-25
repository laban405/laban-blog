import { useEffect, useRef, useState, type ButtonHTMLAttributes, type CSSProperties, type PropsWithChildren, type ReactNode } from "react";
import type { Theme } from "../types";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
  }, [theme]);
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.unobserve(el);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "lg";
};

export function Button({ children, variant = "default", size = "default", className = "", ...props }: ButtonProps) {
  const base: CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontFamily: "'Syne', sans-serif", fontWeight: 700, cursor: "pointer", border: "none", textDecoration: "none", transition: "all 0.2s ease", borderRadius: "var(--radius)", letterSpacing: "-0.01em" };
  const variants: Record<NonNullable<ButtonProps["variant"]>, CSSProperties> = {
    default: { background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", padding: size === "lg" ? "0.9rem 2rem" : "0.75rem 1.5rem", fontSize: size === "lg" ? "1rem" : "0.875rem" },
    outline: { background: "transparent", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border))", padding: size === "lg" ? "0.9rem 2rem" : "0.75rem 1.5rem", fontSize: size === "lg" ? "1rem" : "0.875rem" },
    ghost: { background: "transparent", color: "hsl(var(--muted-foreground))", padding: "0.5rem 0.75rem", fontSize: "0.875rem" },
  };

  return <button {...props} style={{ ...base, ...variants[variant], ...props.style }} className={className}>{children}</button>;
}

export function Badge({ children }: PropsWithChildren) {
  return <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.06em", padding: "0.3rem 0.7rem", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)", color: "hsl(var(--muted-foreground))", display: "inline-block" }}>{children}</span>;
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>{children}</div>;
}

export function SectionTag({ children }: PropsWithChildren) {
  return <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "hsl(var(--accent))", marginBottom: "0.75rem" }}>{children}</p>;
}

export function SectionTitle({ children }: PropsWithChildren) {
  return <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "hsl(var(--foreground))" }}>{children}</h2>;
}
