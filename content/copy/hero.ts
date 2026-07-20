import type { StatusVariant } from "@/types/status";

export interface HeroCopy {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  verdict: {
    status: StatusVariant;
    title: string;
    description: string;
    detail: string;
  };
}

export const heroCopy: HeroCopy = {
  eyebrow: "Accountability infrastructure",
  headline: "The accountability layer for on-chain finance.",
  subhead:
    "Millions of people were given self-custody and autonomous agents at the same time. SANEX verifies every action, enforces the limits you and your agents are allowed to work within, and keeps a clear record of who was responsible.",
  primaryCta: { label: "Request access", href: "/access" },
  secondaryCta: { label: "Read the thesis", href: "/docs" },
  verdict: {
    status: "safe",
    title: "Verified action",
    description: "Contract matches a known-safe pattern. Within your mandate.",
    detail: "0x3f2a…9c4d · Lending deposit · 2.5 ETH",
  },
};
