"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorTrail() {
  const [active, setActive] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot follows exactly
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.1 });

  // Ring lags behind — liquid feel
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

  const shared: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 9999,
    willChange: "transform",
    translateX: "-50%",
    translateY: "-50%",
  };

  return (
    <>
      <motion.div
        style={{
          ...shared,
          x: ringX,
          y: ringY,
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "white",
          mixBlendMode: "difference",
          opacity: 0.85,
        }}
      />
      <motion.div
        style={{
          ...shared,
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "white",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
