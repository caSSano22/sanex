"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export function Tabs({ items, defaultTabId, className }: TabsProps) {
  const [activeId, setActiveId] = useState<string>(
    defaultTabId ?? items[0]?.id ?? ""
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();

    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + items.length) % items.length;
    const next = items[nextIndex];

    if (next) {
      setActiveId(next.id);
      document.getElementById(`tab-${next.id}`)?.focus();
    }
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Dashboard views"
        className="flex gap-1 border-b border-border-subtle"
      >
        {items.map((item, index) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "relative rounded-t-md px-4 py-3 text-body-sm transition-colors duration-120",
                selected
                  ? "text-text-primary"
                  : "text-text-secondary hover:bg-surface-2/60 hover:text-text-primary"
              )}
            >
              {item.label}
              {selected && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-px h-px bg-accent"
                />
              )}
            </button>
          );
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`panel-${item.id}`}
          aria-labelledby={`tab-${item.id}`}
          hidden={item.id !== activeId}
          className={cn("pt-6", item.id === activeId && "animate-fade-in")}
        >
          {item.id === activeId ? item.content : null}
        </div>
      ))}
    </div>
  );
}
