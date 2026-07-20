"use client";

import { useRef, type RefObject } from "react";
import { useGsapTimeline } from "@/hooks/useGsapTimeline";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollProgressLineProps {
  trackRef: RefObject<HTMLElement | null>;
  className?: string;
}

export function ScrollProgressLine({ trackRef, className }: ScrollProgressLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGsapTimeline(
    trackRef,
    ({ gsap }) => {
      if (reducedMotion || !lineRef.current || !trackRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 75%",
            end: "bottom 65%",
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
        transformOrigin: "top",
        transform: reducedMotion ? "scaleY(1)" : "scaleY(0)",
      }}
    />
  );
}
