"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

/**
 * Animated number counter that runs once when scrolled into view.
 * Renders prefix + animated value (locale-formatted) + suffix.
 */
export default function Counter({
  to,
  from = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  style,
}: {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, mv]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-IN");

  return (
    <span ref={ref} style={style}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
