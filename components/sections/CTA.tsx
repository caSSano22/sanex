"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ctaCopy } from "@/content/copy/cta";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATION, EASE_ENTER } from "@/lib/motion/easings";

export function CTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-border-subtle bg-bg-base px-6 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(59,110,246,0.14),transparent)]"
      />

      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: reducedMotion ? 0 : DURATION.reveal, ease: EASE_ENTER }}
        className="relative mx-auto flex max-w-app flex-col items-center text-center"
      >
        <h2 className="max-w-[20ch] text-balance font-display text-h1 text-text-primary">
          {ctaCopy.headline}
        </h2>
        <p className="mt-4 max-w-prose text-pretty text-body text-text-secondary">
          {ctaCopy.body}
        </p>
        <div className="mt-8">
          <Button href={ctaCopy.button.href} variant="primary" size="lg">
            {ctaCopy.button.label}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
