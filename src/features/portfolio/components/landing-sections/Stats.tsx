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
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Stat({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) {
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
    if (prefersReducedMotion) { setDisplay(value); return; }
    const timer = setTimeout(() => raw.set(value), delay);
    return () => clearTimeout(timer);
  }, [inView, value, delay, raw, prefersReducedMotion]);

  return (
    <div ref={ref}>
      <p className="stat-big">{display}+</p>
      <div className="uppercase text-zinc-500 text-xs mt-2">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="flex gap-5 mt-4">
      <Stat value={5}  label="Industries Served" delay={0} />
      <Stat value={6}  label="Years Building"    delay={120} />
      <Stat value={10} label="Projects Done"     delay={240} />
    </section>
  );
}
