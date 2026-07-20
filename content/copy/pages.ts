import type { ProseSection } from "@/components/layout/ProsePage";

export interface PageContent {
  eyebrow: string;
  title: string;
  intro?: string;
  updated?: string;
  sections: ProseSection[];
}

export const aboutContent: PageContent = {
  eyebrow: "Company",
  title: "Built so on-chain finance can be trusted.",
  intro:
    "SANEX is an independent accountability layer for on-chain finance — the system that verifies actions, enforces the limits people and their agents operate within, and proves who was responsible.",
  sections: [
    {
      heading: "Why we exist",
      paragraphs: [
        "Millions of mainstream investors were moved on-chain and handed self-custody and autonomous agents at the same time. Execution arrived long before accountability did. We are building the layer that closes that gap.",
        "We believe safety infrastructure is only credible when it does not belong to the party being checked. That principle — independence — shapes everything we build.",
      ],
    },
    {
      heading: "What we value",
      paragraphs: [
        "Independence: we answer to the user, not to the venues or agents we oversee. Clarity: safety is worthless if it cannot be understood. Accountability: we hold ourselves to the standard we ask of everyone else.",
        "We build for a decade of autonomous finance, not a single market cycle.",
      ],
    },
    {
      heading: "Where we are",
      paragraphs: [
        "SANEX is early. We are opening access in cohorts and working closely with the first people and teams who rely on us. If that is you, we would like to hear from you.",
      ],
    },
  ],
};

export const careersContent: PageContent = {
  eyebrow: "Company",
  title: "Help build the accountability layer.",
  intro:
    "We are a small, early team building infrastructure meant to last. We hire slowly and deliberately, for people who care about getting the hard, quiet details right.",
  sections: [
    {
      heading: "Who we look for",
      paragraphs: [
        "Engineers who think about safety, systems, and edge cases before features. Designers who value restraint. People comfortable with ambiguity and allergic to hype.",
        "Experience with on-chain systems, security, or high-trust consumer products is a strong signal, but curiosity and rigor matter more than a specific résumé.",
      ],
    },
    {
      heading: "How to reach us",
      paragraphs: [
        "We do not always have open listings, but we always read thoughtful introductions. Tell us what you have built and what you would want to build here.",
        "Email careers@sanexprotocol.space with a short note and anything that shows how you think.",
      ],
    },
  ],
};

export const termsContent: PageContent = {
  eyebrow: "Legal",
  title: "Terms of Use",
  updated: "Last updated: July 2026",
  sections: [
    {
      paragraphs: [
        "These Terms govern your use of the SANEX website and any related informational services (the \"Site\"). By using the Site, you agree to these Terms. If you do not agree, do not use the Site. This is a template intended for a website in development and should be reviewed by legal counsel before launch.",
      ],
    },
    {
      heading: "Use of the site",
      paragraphs: [
        "The Site is provided for informational purposes. You agree to use it lawfully and not to misuse, disrupt, or attempt to gain unauthorized access to it or its systems.",
        "Content on the Site describes a product in development. Features, availability, and timelines may change without notice, and nothing here is a binding commitment to deliver any specific functionality.",
      ],
    },
    {
      heading: "No financial or legal advice",
      paragraphs: [
        "Nothing on the Site is financial, investment, legal, or tax advice, and nothing constitutes an offer or solicitation to buy or sell any asset. You are responsible for your own decisions and for complying with the laws that apply to you.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The SANEX name, brand, and Site content are owned by SANEX or its licensors and may not be copied or reused without permission, except as allowed by law.",
      ],
    },
    {
      heading: "Disclaimers and liability",
      paragraphs: [
        "The Site is provided \"as is\" without warranties of any kind. To the fullest extent permitted by law, SANEX is not liable for any indirect, incidental, or consequential damages arising from your use of the Site.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Questions about these Terms can be sent to legal@sanexprotocol.space.",
      ],
    },
  ],
};

export const privacyContent: PageContent = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  updated: "Last updated: July 2026",
  sections: [
    {
      paragraphs: [
        "This Policy explains what information we collect through the SANEX website and how we use it. It is a template for a website in development and should be reviewed by legal counsel before launch.",
      ],
    },
    {
      heading: "What we collect",
      paragraphs: [
        "When you request access, we collect the email address you provide and any optional details you choose to share, such as your role or a short message. We may collect basic, aggregated analytics about how the Site is used.",
        "We do not take custody of your funds and we do not require a wallet connection to browse the Site.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "We use your email only to contact you about access and related updates. We do not sell your personal information.",
        "We retain what you submit for as long as needed to respond to your request, and we delete it on request.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can ask us to access, correct, or delete the information you submitted at any time by emailing privacy@sanexprotocol.space.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Questions about this Policy can be sent to privacy@sanexprotocol.space.",
      ],
    },
  ],
};

export const disclosuresContent: PageContent = {
  eyebrow: "Legal",
  title: "Disclosures",
  updated: "Last updated: July 2026",
  sections: [
    {
      paragraphs: [
        "These disclosures accompany the SANEX website. They are informational and should be reviewed by legal counsel before launch.",
      ],
    },
    {
      heading: "Not investment advice",
      paragraphs: [
        "Nothing on this Site is financial, investment, legal, or tax advice, or a recommendation to enter into any transaction. Any decisions you make are your own.",
      ],
    },
    {
      heading: "No token offering",
      paragraphs: [
        "SANEX is infrastructure. This Site is not an offer or solicitation to buy or sell any token, security, or other asset, and it does not describe an investment opportunity.",
      ],
    },
    {
      heading: "On-chain risk",
      paragraphs: [
        "Interacting with blockchains and on-chain applications carries real risk, including irreversible loss from mistakes, malicious contracts, and market volatility. SANEX aims to reduce certain risks but cannot eliminate them, and it does not guarantee any outcome.",
      ],
    },
    {
      heading: "Forward-looking statements",
      paragraphs: [
        "Statements about future plans, features, or capabilities reflect current intentions and may change. They are not promises, and actual results may differ.",
      ],
    },
  ],
};
