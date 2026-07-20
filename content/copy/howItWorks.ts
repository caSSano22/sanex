import type { StatusVariant } from "@/types/status";

export interface HowItWorksStep {
  title: string;
  description: string;
  badges?: StatusVariant[];
}

export interface HowItWorksCopy {
  eyebrow: string;
  headline: string;
  steps: HowItWorksStep[];
  closingLine: string;
}

export const howItWorksCopy: HowItWorksCopy = {
  eyebrow: "How it works",
  headline: "Connect. Define. Act. Trust.",
  steps: [
    {
      title: "Connect",
      description: "Link your wallet, and your agents if you use them.",
    },
    {
      title: "Define",
      description: "Set the limits you're comfortable operating within.",
    },
    {
      title: "Act",
      description: "At every request, SANEX verifies and enforces in real time.",
    },
    {
      title: "Decide",
      description: "Safe actions proceed. Unauthorized ones stop before they settle.",
      badges: ["safe", "blocked"],
    },
    {
      title: "Review",
      description: "Every action stays attributable and easy to audit.",
    },
    {
      title: "Carry",
      description: "Your limits and history follow you to the next application.",
    },
  ],
  closingLine: "You don't have to become an expert. You have to be protected like one.",
};
