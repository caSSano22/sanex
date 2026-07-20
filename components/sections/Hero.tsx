"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { heroCopy } from "@/content/copy/hero";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeRise, staggerContainer } from "@/lib/motion/variants";
import { DURATION, EASE_ENTER } from "@/lib/motion/easings";

export function Hero() {
  const reducedMotion = useReducedMotion();

  const itemTransition = {
    duration: reducedMotion ? 0 : DURATION.reveal,
    ease: EASE_ENTER,
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-bg-base px-6 pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-[560px] w-[560px] -translate-y-1/4 bg-[radial-gradient(closest-side,rgba(59,110,246,0.16),transparent)]"
      />

      <div className="relative mx-auto grid max-w-wide items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
          variants={staggerContainer(0.1)}
          className="flex flex-col items-start text-left"
        >
          <motion.span
            variants={fadeRise}
            transition={itemTransition}
            className="mb-6 inline-flex items-center rounded-full border border-border-subtle bg-surface-1 px-3 py-1 text-micro uppercase tracking-wide text-text-secondary"
          >
            {heroCopy.eyebrow}
          </motion.span>

          <motion.h1
            id="hero-heading"
            variants={fadeRise}
            transition={itemTransition}
            className="max-w-[15ch] text-balance font-display text-display text-text-primary"
          >
            {heroCopy.headline}
          </motion.h1>

          <motion.p
            variants={fadeRise}
            transition={itemTransition}
            className="mt-6 max-w-xl text-pretty text-body text-text-secondary md:text-title"
          >
            {heroCopy.subhead}
          </motion.p>

          <motion.div
            variants={fadeRise}
            transition={itemTransition}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <Button href={heroCopy.primaryCta.href} variant="primary" size="lg">
              {heroCopy.primaryCta.label}
            </Button>
            <Button href={heroCopy.secondaryCta.href} variant="ghost" size="lg">
              {heroCopy.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
            delay: reducedMotion ? 0 : 0.24,
            ease: EASE_ENTER,
          }}
          className="w-full justify-self-center lg:justify-self-end"
        >
          <div
            className={[
              "w-full max-w-md rounded-xl border border-white/[0.06] bg-bg-raised p-6 text-left shadow-glass",
              "supports-[backdrop-filter]:bg-[rgba(16,18,22,0.72)]",
              "supports-[backdrop-filter]:backdrop-blur-[20px]",
              "supports-[backdrop-filter]:backdrop-saturate-[120%]",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <Badge status={heroCopy.verdict.status} />
              <span className="font-mono text-micro text-text-tertiary">
                Live verdict
              </span>
            </div>
            <p className="mt-4 text-title text-text-primary">{heroCopy.verdict.title}</p>
            <p className="mt-1 text-body-sm text-text-secondary">
              {heroCopy.verdict.description}
            </p>
            <p className="mt-4 border-t border-border-subtle pt-4 font-mono text-body-sm text-text-tertiary">
              {heroCopy.verdict.detail}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
