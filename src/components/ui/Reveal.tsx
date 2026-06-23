"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-reveal wrapper. Fades + slides children into view the first time
 * they enter the viewport. Optional stagger delay for sequenced reveals.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  style,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "li" | "span";
}) {
  const { x, y } = offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
