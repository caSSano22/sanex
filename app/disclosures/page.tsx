import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/ProsePage";
import { disclosuresContent } from "@/content/copy/pages";

export const metadata: Metadata = {
  title: "Disclosures — SANEX",
  description: "Informational disclosures accompanying the SANEX website.",
};

export default function DisclosuresPage() {
  return (
    <ProsePage
      eyebrow={disclosuresContent.eyebrow}
      title={disclosuresContent.title}
      updated={disclosuresContent.updated}
      sections={disclosuresContent.sections}
    />
  );
}
