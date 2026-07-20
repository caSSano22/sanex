export interface DocsSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface DocsCopy {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: DocsSection[];
}

export const docsCopy: DocsCopy = {
  eyebrow: "Thesis",
  title: "The accountability layer for on-chain finance.",
  intro:
    "Robinhood Chain moved millions of mainstream investors on-chain and handed them self-custody and autonomous agents at the same time. Execution arrived. Accountability did not. This is the case for the layer that closes that gap.",
  updated: "Updated July 2026",
  sections: [
    {
      id: "gap",
      heading: "The gap",
      paragraphs: [
        "The chain shipped tokenized equities, on-chain lending, perpetual futures, and agentic accounts that let an AI model transact on a user's behalf. What it did not ship is an independent layer that verifies those actions, constrains the actors behind them, and records who was responsible.",
        "Today the answer to that gap is warnings and disclaimers. That is not a product; it is a liability notice. A mainstream user cannot read a hex payload and decide whether a contract is safe, and an autonomous agent acting at machine speed has no independent brake around it.",
      ],
    },
    {
      id: "functions",
      heading: "Three functions",
      paragraphs: [
        "Verification: an independent, plain-language verdict on every counterparty, contract, and payload, delivered at the moment of signing in words a non-expert can act on.",
        "Mandate enforcement: limits on assets, size, venue, and rate of action, enforced outside the executing app or agent — so nothing can exceed the authority it was granted.",
        "Attribution and recourse: a portable, verifiable record of which actor acted under which mandate, and what resulted — for the user's own review and for anyone who has to answer for it later.",
      ],
    },
    {
      id: "independence",
      heading: "Why independent",
      paragraphs: [
        "A safety layer is only credible when it does not belong to the party being checked. Execution venues are built to maximize throughput, not to slow a user before a dangerous action. Agent platforms are built to make agents capable, not to constrain them from the outside.",
        "The one function no incumbent is structurally motivated to provide is user-aligned safety, precisely because it must sometimes say no. That neutrality is why SANEX is a distinct layer rather than a feature of any single venue.",
      ],
    },
    {
      id: "category",
      heading: "The category",
      paragraphs: [
        "On-Chain Accountability Infrastructure: the independent layer that verifies actions, enforces authority for both humans and autonomous agents, and produces portable proof of who did what and under what mandate.",
        "It is not a token, a fund, a wallet, or a trading venue. It operates at decision time and after the fact, it is agent-native, and the trust it establishes travels with the user across applications and chains.",
      ],
    },
    {
      id: "roadmap",
      heading: "Direction",
      paragraphs: [
        "Now: verification and mandate enforcement for Robinhood Chain users and their agents.",
        "Next: the accountability standard for autonomous financial action, integrated as a baseline expectation rather than a differentiator.",
        "Horizon: portable trust infrastructure across venues and chains, where no serious on-chain action — human or automated — happens without an accountability layer.",
      ],
    },
  ],
};
