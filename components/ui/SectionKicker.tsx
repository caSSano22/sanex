import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface SectionKickerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small label that anchors every section heading. The tick uses a neutral
 * tone rather than the accent color deliberately — accent is reserved for
 * the verification moment and real state (safe/caution/blocked), so a
 * purely structural wayfinding mark stays out of its way and keeps the
 * accent's rarity intact everywhere else on the page.
 */
export function SectionKicker({ children, className }: SectionKickerProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span aria-hidden="true" className="h-px w-4 bg-border-strong" />
      <span className="text-micro font-medium uppercase tracking-wide text-text-tertiary">
        {children}
      </span>
    </div>
  );
}
