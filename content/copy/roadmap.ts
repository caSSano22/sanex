export interface RoadmapPhase {
  label: string;
  description: string;
  active?: boolean;
}

export interface RoadmapCopy {
  eyebrow: string;
  headline: string;
  subhead: string;
  phases: RoadmapPhase[];
  closingLine: string;
}

export const roadmapCopy: RoadmapCopy = {
  eyebrow: "Roadmap",
  headline: "An accountability standard, built in stages.",
  subhead:
    "We're building a layer meant to last a decade, not a season. Here's the order.",
  phases: [
    {
      label: "Now",
      description:
        "Verification and enforcement for people and their agents. Know what you're signing. Hold every actor to its limits.",
      active: true,
    },
    {
      label: "Next",
      description:
        "The standard for autonomous action. As agents become the way most people transact, SANEX becomes the layer that defines what they're allowed to do — and proves what they did.",
    },
    {
      label: "Horizon",
      description:
        "Trust that travels. Your limits, your reputation, and your record follow you across every application and network you use.",
    },
  ],
  closingLine: "We commit to ranges, not dates we can't keep.",
};
