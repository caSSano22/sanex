import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/ProsePage";
import { Button } from "@/components/ui/Button";
import { careersContent } from "@/content/copy/pages";

export const metadata: Metadata = {
  title: "Careers — SANEX",
  description:
    "Help build the accountability layer for on-chain finance. We hire slowly, for people who care about the hard, quiet details.",
};

export default function CareersPage() {
  return (
    <ProsePage
      eyebrow={careersContent.eyebrow}
      title={careersContent.title}
      intro={careersContent.intro}
      sections={careersContent.sections}
    >
      <div className="border-t border-border-subtle pt-10">
        <Button href="mailto:careers@sanexprotocol.space" variant="primary" size="md">
          Introduce yourself
        </Button>
      </div>
    </ProsePage>
  );
}
