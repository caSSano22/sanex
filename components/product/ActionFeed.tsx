import { Badge } from "@/components/ui/Badge";
import type { ActionRecord } from "@/types/dashboard";

export interface ActionFeedProps {
  items: ActionRecord[];
  variant?: "feed" | "record";
}

export function ActionFeed({ items, variant = "feed" }: ActionFeedProps) {
  return (
    <ul className="divide-y divide-border-subtle">
      {items.map((item) => (
        <li
          key={item.id}
          className="-mx-2 flex items-center justify-between gap-4 rounded-md px-2 py-3 transition-colors duration-160 ease-enter first:pt-0 last:pb-0 hover:bg-surface-2/40"
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Badge status={item.status} />
              <p className="truncate text-body-sm text-text-primary">{item.action}</p>
            </div>
            <p className="mt-1 truncate font-mono text-caption text-text-tertiary">
              {variant === "record"
                ? `${item.actor} · ${item.mandate} · ${item.detail}`
                : item.detail}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-mono text-body-sm text-text-secondary">{item.amount}</p>
            <p className="mt-1 text-caption text-text-tertiary">{item.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
