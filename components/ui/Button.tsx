"use client";

import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-120 ease-enter disabled:cursor-not-allowed disabled:opacity-40 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent-hover active:scale-[0.98] active:brightness-95",
        secondary:
          "bg-surface-2 text-text-primary border border-border-strong hover:border-text-tertiary active:scale-[0.98] active:brightness-95",
        ghost:
          "bg-transparent text-text-secondary hover:text-text-primary active:scale-[0.98]",
        destructive:
          "bg-blocked text-white hover:bg-blocked/90 active:scale-[0.98] active:brightness-95",
      },
      size: {
        sm: "h-8 px-3 text-body-sm",
        md: "h-10 px-4 text-body",
        lg: "h-12 px-6 text-title",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonStyles>;

interface SharedProps extends ButtonVariants {
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { className, variant, size, children } = props;
  const classes = cn(buttonStyles({ variant, size }), className);

  if (props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...anchorProps } =
      props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { variant: _v2, size: _s2, className: _c2, children: _ch2, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
