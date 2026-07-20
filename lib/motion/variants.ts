import type { Variants } from "framer-motion";

/**
 * Base reveal used everywhere a single element fades and rises into place.
 * Duration/ease are intentionally left off the variant itself — callers pass
 * their own `transition` prop (usually DURATION.reveal + EASE_ENTER) so a
 * parent stagger container can still control per-child delay.
 */
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Wrap a group of `fadeRise` children in this to get a natural cascading
 * reveal driven by Framer's own orchestration, instead of hand-rolled
 * per-index delay math scattered across components.
 */
export function staggerContainer(staggerChildren = 0.09, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}
