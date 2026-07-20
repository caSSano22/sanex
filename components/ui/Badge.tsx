import { cn } from "@/lib/cn";
import type { StatusVariant } from "@/types/status";

const STATUS_META: Record<
  StatusVariant,
  { label: string; text: string; bg: string; dot: string }
> = {
  safe: { label: "Safe", text: "text-safe", bg: "bg-safe-quiet", dot: "bg-safe" },
  caution: {
    label: "Review",
    text: "text-caution",
    bg: "bg-caution-quiet",
    dot: "bg-caution",
  },
  blocked: {
    label: "Blocked",
    text: "text-blocked",
    bg: "bg-blocked-quiet",
    dot: "bg-blocked",
  },
};

export interface BadgeProps {
  status: StatusVariant;
  className?: string;
}

export function Badge({ status, className }: BadgeProps) {
  const meta = STATUS_META[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-micro uppercase tracking-wide",
        meta.text,
        meta.bg,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", meta.dot)} aria-hidden="true" />
      {meta.label}
    </span>
  );
}
