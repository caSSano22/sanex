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
      className="relative overflow-hidden bg-bg-base px-6 pb-24 pt-32 md:pb-32 md:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/4 bg-[radial-gradient(closest-side,rgba(59,110,246,0.16),transparent)]"
      />

      <motion.div
        initial={reducedMotion ? undefined : "hidden"}
        animate={reducedMotion ? undefined : "visible"}
        variants={staggerContainer(0.1)}
        className="relative mx-auto flex max-w-wide flex-col items-center text-center"
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
          className="max-w-[18ch] text-balance font-display text-display text-text-primary"
        >
          {heroCopy.headline}
        </motion.h1>

        <motion.p
          variants={fadeRise}
          transition={itemTransition}
          className="mt-6 max-w-prose text-pretty text-body text-text-secondary md:text-title"
        >
          {heroCopy.subhead}
        </motion.p>

        <motion.div
          variants={fadeRise}
          transition={itemTransition}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href={heroCopy.primaryCta.href} variant="primary" size="lg">
            {heroCopy.primaryCta.label}
          </Button>
          <Button href={heroCopy.secondaryCta.href} variant="ghost" size="lg">
            {heroCopy.secondaryCta.label}
          </Button>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ ...itemTransition, duration: reducedMotion ? 0 : 0.6 }}
          className="mt-16 w-full max-w-md"
        >
          <div
            className={[
              "rounded-xl border border-white/[0.06] bg-bg-raised p-6 text-left shadow-glass",
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
      </motion.div>
    </section>
  );
}
