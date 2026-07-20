"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { useNavScrollState } from "@/hooks/useNavScrollState";
import { primaryNavLinks } from "@/content/nav";
import { DURATION, EASE_ENTER, EASE_EXIT } from "@/lib/motion/easings";
import { Logo } from "@/components/icons";


const mobileSheetVariants = {
  hidden: { opacity: 0, y: -8, transition: { duration: 0.15, ease: EASE_EXIT } },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.overlay, ease: EASE_ENTER } },
};

export function Navbar() {
  const scrolled = useNavScrollState();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstFocusable = menuRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-160 ease-enter",
        scrolled
          ? "border-b border-border-subtle bg-bg-raised/95 shadow-1 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-wide items-center justify-between px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md text-title font-display font-semibold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Logo className="h-6 w-6 text-text-primary" />
          <span>SANEX</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {primaryNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative py-1 text-body-sm text-text-secondary transition-colors duration-120 hover:text-text-primary"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-text-primary transition-transform duration-160 ease-enter group-hover:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Button href="/docs" variant="ghost" size="sm">
            Docs
          </Button>
          <Button href="/access" variant="primary" size="sm">
            Request access
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-text-primary md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-sheet"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-sheet"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileSheetVariants}
            className="border-t border-border-subtle bg-bg-raised px-6 py-6 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {primaryNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-3 py-3 text-body text-text-secondary transition-colors duration-120 hover:bg-surface-1 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <Button href="/docs" variant="secondary" size="md" className="w-full">
                Docs
              </Button>
              <Button href="/access" variant="primary" size="md" className="w-full">
                Request access
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
    </svg>
  );
}
