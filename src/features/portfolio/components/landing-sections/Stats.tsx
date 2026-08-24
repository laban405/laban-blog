"use client";

import { StatCounter } from "@laban405/design-system";

export function StatsSection() {
  return (
    <section id="stats" className="flex gap-5 mt-4">
      <StatCounter value={5} label="Industries Served" delay={0} />
      <StatCounter value={6} label="Years Building" delay={120} />
      <StatCounter value={10} label="Projects Done" delay={240} />
    </section>
  );
}
