"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { howItWorksCopy } from "@/content/copy/howItWorks";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATION, EASE_ENTER } from "@/lib/motion/easings";
import { cn } from "@/lib/cn";

export function HowItWorks() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="border-t border-border-subtle bg-bg-base px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-app">
        <div className="max-w-prose">
          <SectionKicker>{howItWorksCopy.eyebrow}</SectionKicker>
          <h2 className="mt-4 font-display text-h2 text-text-primary">
            {howItWorksCopy.headline}
          </h2>
        </div>

        {/*
          The connector between steps is sized by flexbox itself (flex-1
          inside a stretched column), not by a percentage-of-container
          guess — so it terminates exactly at the next circle regardless of
          how many lines a step's description wraps to. The extra spacing
          between steps lives on the *text* column's own padding-bottom
          (not on the <li>), which is what lets the icon column's
          align-items:stretch height include that gap correctly.
        */}
        <ol className="mt-14">
          {howItWorksCopy.steps.map((step, index) => {
            const isLast = index === howItWorksCopy.steps.length - 1;
            return (
              <motion.li
                key={step.title}
                initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{
                  duration: reducedMotion ? 0 : DURATION.reveal,
                  ease: EASE_ENTER,
                }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface-1 font-mono text-micro text-text-secondary">
                    {index + 1}
                  </span>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="relative mt-2 w-px flex-1 overflow-hidden bg-border-subtle"
                    >
                      <motion.span
                        initial={reducedMotion ? undefined : { scaleY: 0 }}
                        whileInView={reducedMotion ? undefined : { scaleY: 1 }}
                        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                        transition={{
                          duration: reducedMotion ? 0 : DURATION.reveal,
                          ease: EASE_ENTER,
                        }}
                        className="absolute inset-0 origin-top bg-accent"
                      />
                    </span>
                  )}
                </div>
                <div className={cn("pt-1", !isLast && "pb-10")}>
                  <h3 className="text-title text-text-primary">{step.title}</h3>
                  <p className="mt-1 max-w-prose text-pretty text-body-sm text-text-secondary">
                    {step.description}
                  </p>
                  {step.badges && step.badges.length > 0 && (
                    <div className="mt-3 flex gap-2">
                      {step.badges.map((status) => (
                        <Badge key={status} status={status} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>

        <p className="mt-16 max-w-prose text-title text-text-primary">
          {howItWorksCopy.closingLine}
        </p>
      </div>
    </section>
  );
}
