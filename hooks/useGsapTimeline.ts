"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";
import { gsap, ensureGsapRegistered } from "@/lib/motion/gsapConfig";

type TimelineFactory = (context: { gsap: typeof gsap }) => void;

export function useGsapTimeline(
  scopeRef: RefObject<HTMLElement | null>,
  factory: TimelineFactory,
  deps: ReadonlyArray<unknown> = []
): void {
  const factoryRef = useRef(factory);
  factoryRef.current = factory;

  useLayoutEffect(() => {
    if (!scopeRef.current) return;
    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      factoryRef.current({ gsap });
    }, scopeRef as RefObject<HTMLElement>);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
