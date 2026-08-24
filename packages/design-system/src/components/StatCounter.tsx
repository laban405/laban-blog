"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export type StatCounterProps = {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  className?: string;
};

export function StatCounter({ value, label, suffix = "+", delay = 0, className }: StatCounterProps) {
  const { ref, inView } = useInView(0.3);
  const prefersReducedMotion = useReducedMotion();
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 40, damping: 16, restDelta: 0.01 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    return spring.onChange((v) => setDisplay(Math.round(v)));
  }, [spring]);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    const timer = setTimeout(() => raw.set(value), delay);
    return () => clearTimeout(timer);
  }, [inView, value, delay, raw, prefersReducedMotion]);

  return (
    <div ref={ref} className={className}>
      <p className="ds-stat-value">
        {display}
        {suffix}
      </p>
      <div className="ds-stat-label">{label}</div>
    </div>
  );
}
