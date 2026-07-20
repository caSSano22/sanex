import type { SVGProps } from "react";

export function Logo({ className, width = "24", height = "24", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Hook 1 (Top / Right) */}
      <path d="M6 6h12v7h-4v-3h-8z" fill="currentColor" />
      
      {/* Hook 2 (Bottom / Left) */}
      <path d="M18 18H6v-7h4v3h8z" fill="currentColor" />
      
      {/* Central Checkpoint (Moment of Verification) */}
      <rect x="11" y="11" width="2" height="2" rx="0.5" fill="#3B6EF6" />
    </svg>
  );
}
