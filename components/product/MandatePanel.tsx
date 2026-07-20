import type { MandateLimit } from "@/types/dashboard";

export interface MandatePanelProps {
  limits: MandateLimit[];
}

export function MandatePanel({ limits }: MandatePanelProps) {
  return (
    <dl className="divide-y divide-border-subtle">
      {limits.map((limit) => (
        <div
          key={limit.label}
          className="-mx-2 flex items-center justify-between gap-4 rounded-md px-2 py-3 transition-colors duration-160 ease-enter first:pt-0 last:pb-0 hover:bg-surface-2/40"
        >
          <dt className="text-body-sm text-text-secondary">{limit.label}</dt>
          <dd className="text-right font-mono text-body-sm text-text-primary">
            {limit.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
