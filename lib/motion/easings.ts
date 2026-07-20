/**
 * Shared easing curves and durations for every animated surface in the app.
 *
 * EASE_ENTER is a long-tailed deceleration — content settles into place
 * rather than arriving abruptly. It is used for anything appearing on
 * screen (reveals, hero stagger, panel transitions).
 *
 * EASE_EXIT is the mirror: quicker and sharper, because things leaving
 * the screen should get out of the way fast rather than lingering.
 *
 * Keeping one curve per direction across Framer Motion, GSAP, and raw CSS
 * transitions is what makes the motion read as a single, considered system
 * instead of several unrelated animations stitched together.
 */
export const EASE_ENTER = [0.16, 1, 0.3, 1] as const;
export const EASE_EXIT = [0.4, 0, 1, 1] as const;

export const DURATION = {
  /** Hover, press, focus — feedback must feel instant. */
  micro: 0.12,
  /** Tabs, accordions, small state changes. */
  standard: 0.2,
  /** Overlays, sheets, panels entering the viewport. */
  overlay: 0.22,
  /** Content reveals — hero, section entrances, the verdict card. */
  reveal: 0.5,
} as const;
