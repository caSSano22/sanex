export interface NavLink {
  label: string;
  href: string;
}

export const primaryNavLinks: NavLink[] = [
  { label: "Product", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Docs", href: "/docs" },
  { label: "Roadmap", href: "#roadmap" },
];
