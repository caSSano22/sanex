"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeRise } from "@/lib/motion/variants";
import { DURATION, EASE_ENTER } from "@/lib/motion/easings";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FadeInOnViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInOnView({ children, delay = 0, className }: FadeInOnViewProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? undefined : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={fadeRise}
      transition={{
        duration: reducedMotion ? 0 : DURATION.reveal,
        delay: reducedMotion ? 0 : delay,
        ease: EASE_ENTER,
      }}
    >
      {children}
    </motion.div>
  );
}
