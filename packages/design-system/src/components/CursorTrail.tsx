"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorTrail() {
  const [active, setActive] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.1 });

  const ringX = useSpring(mouseX, { stiffness: 120, damping: 16, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 16, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setActive(true);
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = "";
    };
  }, [mouseX, mouseY]);

  if (!active) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          position: "fixed",
          top: 0,
          left: 0,
          marginLeft: "-18px",
          marginTop: "-18px",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid hsl(var(--ds-primary))",
          background: "transparent",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.4)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
      {/* Exact dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          position: "fixed",
          top: 0,
          left: 0,
          marginLeft: "-3px",
          marginTop: "-3px",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "hsl(var(--ds-primary))",
          boxShadow: "0 0 0 1.5px rgba(255,255,255,0.5)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
    </>
  );
}
