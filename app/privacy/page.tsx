import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/ProsePage";
import { privacyContent } from "@/content/copy/pages";

export const metadata: Metadata = {
  title: "Privacy Policy — SANEX",
  description: "What information the SANEX website collects and how it is used.",
};

export default function PrivacyPage() {
  return (
    <ProsePage
      eyebrow={privacyContent.eyebrow}
      title={privacyContent.title}
      updated={privacyContent.updated}
      sections={privacyContent.sections}
    />
  );
}
