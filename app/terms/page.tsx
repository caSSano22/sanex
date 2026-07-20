import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/ProsePage";
import { termsContent } from "@/content/copy/pages";

export const metadata: Metadata = {
  title: "Terms of Use — SANEX",
  description: "The terms that govern your use of the SANEX website.",
};

export default function TermsPage() {
  return (
    <ProsePage
      eyebrow={termsContent.eyebrow}
      title={termsContent.title}
      updated={termsContent.updated}
      sections={termsContent.sections}
    />
  );
}
