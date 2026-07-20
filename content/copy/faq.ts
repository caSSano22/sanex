export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCopy {
  eyebrow: string;
  headline: string;
  items: FaqItem[];
  closingLine: string;
  closingLinkLabel: string;
  closingLinkHref: string;
}

export const faqCopy: FaqCopy = {
  eyebrow: "FAQ",
  headline: "Questions, answered plainly.",
  items: [
    {
      question: "Is SANEX a token?",
      answer:
        "No. SANEX is infrastructure. If a token ever exists, it does one job — metering usage and governing standards. It is not something to trade.",
    },
    {
      question: "Why does it have to be independent?",
      answer:
        "Because a safety layer is only believable when it doesn't belong to the party being checked. SANEX answers to the user, not to the venues or agents it oversees.",
    },
    {
      question: "Will it slow me down?",
      answer:
        "Only before something dangerous or unauthorized. Safe actions pass without friction. The pause exists exactly where a mistake would be irreversible.",
    },
    {
      question: "Does it work with autonomous agents?",
      answer:
        "Yes. Agent limits are enforced from the outside, so an agent cannot exceed the authority you gave it — and every action it takes is recorded.",
    },
    {
      question: "Who holds my funds?",
      answer:
        "You do. SANEX is non-custodial. It verifies, enforces, and records; it never takes possession of your assets.",
    },
    {
      question: "What do I actually get?",
      answer:
        "A clear verdict before you sign, limits that hold, and a record you can stand behind — carried with you across everything you use.",
    },
  ],
  closingLine: "Still deciding?",
  closingLinkLabel: "Read the docs",
  closingLinkHref: "/docs",
};
