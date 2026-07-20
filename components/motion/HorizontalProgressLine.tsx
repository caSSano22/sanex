"use client";

import { useRef, type RefObject } from "react";
import { useGsapTimeline } from "@/hooks/useGsapTimeline";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HorizontalProgressLineProps {
  trackRef: RefObject<HTMLElement | null>;
  className?: string;
}

export function HorizontalProgressLine({
  trackRef,
  className,
}: HorizontalProgressLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGsapTimeline(
    trackRef,
    ({ gsap }) => {
      if (reducedMotion || !lineRef.current || !trackRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 80%",
            end: "bottom 55%",
          },
        }
      );
    },
    [reducedMotion]
  );

  return (
    <div
      ref={lineRef}
      aria-hidden="true"
      className={className}
      style={{
        transformOrigin: "left",
        transform: reducedMotion ? "scaleX(1)" : "scaleX(0)",
      }}
    />
  );
}
