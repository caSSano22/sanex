import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureGsapRegistered(): void {
  if (registered) return;

  gsap.registerPlugin(ScrollTrigger);

  // Ignore resize events caused by mobile browser chrome (address bar
  // show/hide) — these fire constantly on scroll and would otherwise force
  // needless ScrollTrigger recalculation, a common source of mobile jank.
  ScrollTrigger.config({ ignoreMobileResize: true });

  // A single shared scrub value so every scroll-linked animation eases
  // toward the scroll position instead of snapping to it 1:1. This one
  // number is most of what makes scroll-driven motion feel natural rather
  // than mechanical. Individual triggers can still override it.
  ScrollTrigger.defaults({
    scrub: 0.5,
    invalidateOnRefresh: true,
  });

  registered = true;
}

export function killAllScrollTriggers(): void {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

export { gsap, ScrollTrigger };
