import type { ReactNode, CSSProperties, ElementType } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

/**
 * CSS-only entrance reveal. Renders content that fades/slides in via a pure
 * CSS animation (see globals.css). It needs NO JavaScript and always settles
 * at opacity:1 — so content can never get stuck invisible if hydration fails.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  scale = false,
  className = "",
  style,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  scale?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}) {
  const variant = scale
    ? "reveal--scale"
    : direction === "left"
    ? "reveal--left"
    : direction === "right"
    ? "reveal--right"
    : "";

  const Tag = as as ElementType;

  return (
    <Tag
      className={`reveal ${variant} ${className}`.trim()}
      style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s`, ...style }}
    >
      {children}
    </Tag>
  );
}
