export interface NavLink {
  label: string;
  href: string;
}

// Anchors are prefixed with "/" so they resolve from any route (e.g. /docs),
// not only from the home page.
export const primaryNavLinks: NavLink[] = [
  { label: "Product", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Docs", href: "/docs" },
  { label: "Roadmap", href: "/#roadmap" },
];
