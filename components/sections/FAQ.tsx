"use client";

import { useState } from "react";
import type { SVGProps } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { faqCopy } from "@/content/copy/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bg-base px-6 py-24 md:py-32">
      <div className="mx-auto max-w-prose">
        <SectionKicker>{faqCopy.eyebrow}</SectionKicker>
        <h2 className="mt-4 font-display text-h2 text-text-primary">{faqCopy.headline}</h2>

        <div className="mt-14 divide-y divide-border-subtle border-t border-border-subtle">
          {faqCopy.items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="-mx-4 flex w-full items-center justify-between gap-4 rounded-md px-4 py-5 text-left transition-colors duration-160 ease-enter hover:bg-surface-1"
                  >
                    <span className="text-title text-text-primary">{item.question}</span>
                    <ChevronIcon open={open} />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-enter",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-[62ch] text-pretty px-4 pb-5 text-body-sm text-text-secondary">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <p className="text-body-sm text-text-tertiary">{faqCopy.closingLine}</p>
          <Button href={faqCopy.closingLinkHref} variant="ghost" size="sm">
            {faqCopy.closingLinkLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ open, ...props }: { open: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn(
        "shrink-0 text-text-tertiary transition-transform duration-160 ease-enter",
        open && "rotate-180"
      )}
      {...props}
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}
