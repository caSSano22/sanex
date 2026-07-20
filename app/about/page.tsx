import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/ProsePage";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/content/copy/pages";

export const metadata: Metadata = {
  title: "About — SANEX",
  description:
    "SANEX is an independent accountability layer for on-chain finance — verifying actions, enforcing mandates, and proving who was responsible.",
};

export default function AboutPage() {
  return (
    <ProsePage
      eyebrow={aboutContent.eyebrow}
      title={aboutContent.title}
      intro={aboutContent.intro}
      sections={aboutContent.sections}
    >
      <div className="flex flex-wrap items-center gap-3 border-t border-border-subtle pt-10">
        <Button href="/access" variant="primary" size="md">
          Request access
        </Button>
        <Button href="/docs" variant="ghost" size="md">
          Read the thesis
        </Button>
      </div>
    </ProsePage>
  );
}
