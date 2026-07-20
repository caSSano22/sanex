export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterCopy {
  pitch: string;
  networkLine: string;
  columns: FooterColumn[];
}

export const footerCopy: FooterCopy = {
  pitch: "The independent accountability layer for on-chain finance.",
  networkLine: "Built on Robinhood Chain. Independent by design.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Overview", href: "/#hero" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Agent controls", href: "/#dashboard" },
        { label: "Access", href: "/access" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Docs", href: "/docs" },
        { label: "Thesis", href: "/docs#thesis" },
        { label: "Roadmap", href: "/#roadmap" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
        { label: "Disclosures", href: "/disclosures" },
      ],
    },
  ],
};
