import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface CardProps {
  className?: string;
  children: ReactNode;
  interactive?: boolean;
}

export function Card({ className, children, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border-subtle bg-surface-1 p-6 shadow-1",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-200 ease-enter hover:-translate-y-1 hover:border-border-strong hover:shadow-2",
        className
      )}
    >
      {children}
    </div>
  );
}
