"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { HorizontalProgressLine } from "@/components/motion/HorizontalProgressLine";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { roadmapCopy } from "@/content/copy/roadmap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATION, EASE_ENTER } from "@/lib/motion/easings";

export function Roadmap() {
  const trackRef = useRef<HTMLOListElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="roadmap"
      className="border-t border-border-subtle bg-bg-raised px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-app">
        <div className="max-w-prose">
          <SectionKicker>{roadmapCopy.eyebrow}</SectionKicker>
          <h2 className="mt-4 font-display text-h2 text-text-primary">
            {roadmapCopy.headline}
          </h2>
          <p className="mt-4 text-pretty text-body text-text-secondary">
            {roadmapCopy.subhead}
          </p>
        </div>

        {/*
          Each connector spans calc(100% + 2rem) of its own phase column —
          exactly that column's rendered width plus the 2rem (gap-8) gutter
          to its right. That lands precisely on the next dot regardless of
          the column's actual responsive width, instead of guessing a
          fraction of the whole grid's width (which breaks the moment a
          gap is involved).
        */}
        <ol ref={trackRef} className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {roadmapCopy.phases.map((phase, index) => {
            const isLast = index === roadmapCopy.phases.length - 1;
            return (
              <motion.li
                key={phase.label}
                initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{
                  duration: reducedMotion ? 0 : DURATION.reveal,
                  delay: reducedMotion ? 0 : index * 0.08,
                  ease: EASE_ENTER,
                }}
                className="relative md:pt-10"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-0 hidden h-[15px] w-[15px] -translate-x-1/2 rounded-full border-2 border-bg-raised md:block",
                    phase.active ? "bg-accent" : "bg-border-strong"
                  )}
                />
                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[7px] hidden h-px w-[calc(100%+2rem)] bg-border-subtle md:block"
                    />
                    <HorizontalProgressLine
                      trackRef={trackRef}
                      className="absolute left-0 top-[7px] hidden h-px w-[calc(100%+2rem)] bg-accent md:block"
                    />
                  </>
                )}
                <span
                  className={cn(
                    "text-micro font-medium uppercase tracking-wide",
                    phase.active ? "text-accent" : "text-text-tertiary"
                  )}
                >
                  {phase.label}
                </span>
                <p className="mt-2 text-pretty text-title text-text-primary">
                  {phase.description}
                </p>
              </motion.li>
            );
          })}
        </ol>

        <p className="mt-16 text-body-sm text-text-tertiary">{roadmapCopy.closingLine}</p>
      </div>
    </section>
  );
}
