# SANEX — Frontend Architecture

**On-Chain Accountability Infrastructure**

*Implementation architecture for BLUEPRINT.md and COPY.md, styled per DESIGN_SYSTEM.md and BRAND.md. Stack: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP.*

---

## Architectural Principles

- **Server by default.** Pages and section shells are React Server Components; interactivity is isolated to small Client Components at the leaf.
- **Design tokens are the single source of truth.** Every color, spacing, radius, and duration in DESIGN_SYSTEM.md lives in `tailwind.config.ts` and CSS variables — never hardcoded in components.
- **Motion is layered, not tangled.** Framer Motion handles component-level state and enter/exit (buttons, accordions, badges, sheets). GSAP + ScrollTrigger handles scroll-linked sequences (roadmap timeline, how-it-works progress line, agent boundary diagram). They never animate the same element.
- **One section, one file, one purpose.** Each BLUEPRINT.md section is a self-contained component with its own copy import, no shared mutable state across sections.
- **Reduced motion is a first-class path,** not an afterthought — checked once, propagated via context.

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15 (App Router) | RSC by default, `app/` directory, route groups |
| UI | React 19 | `use`, actions, no unnecessary `"use client"` |
| Language | TypeScript (strict) | No `any`; discriminated unions for status/state |
| Styling | Tailwind CSS | Config extended from `DESIGN_SYSTEM.md` tokens |
| Component primitives | Radix UI (headless) | Accordion (FAQ), Dialog (sheets), Tabs (dashboard preview) — accessibility-first, unstyled |
| Micro-interaction motion | Framer Motion | Buttons, badges, accordion, hover/press, hero stagger |
| Scroll-linked motion | GSAP + ScrollTrigger | Timeline draws, step activation, diagram sequencing |
| Icons | Custom SVG set (uniform stroke) | No icon library with mismatched visual weight |
| Fonts | `next/font` (local + Google) | Inter, Inter Display/SF Pro Display, JetBrains Mono |
| Linting/format | ESLint + Prettier + Tailwind plugin | Enforces class ordering |
| Content | Local TypeScript copy modules | Sourced from COPY.md, typed, not CMS-driven at v1 |

---

## Folder Structure

```
sanex/
├── app/
│   ├── layout.tsx                  # Root layout: fonts, ThemeProvider, MotionConfig
│   ├── page.tsx                    # Landing page — composes all sections (RSC)
│   ├── globals.css                 # Tailwind base + CSS variable tokens
│   ├── docs/
│   │   └── page.tsx                # Docs entry (linked from CTA/footer)
│   ├── roadmap/
│   │   └── page.tsx                # Optional standalone roadmap
│   └── (legal)/
│       ├── terms/page.tsx
│       ├── privacy/page.tsx
│       └── disclosures/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx               # Client — scroll-aware background swap
│   │   ├── Footer.tsx                # Server
│   │   └── PageShell.tsx             # Server — container/grid wrapper
│   │
│   ├── sections/
│   │   ├── Hero.tsx                  # Client — Framer stagger + accent glow
│   │   ├── SocialProof.tsx           # Server + Client fade-in wrapper
│   │   ├── Features.tsx              # Server — maps FeatureCard
│   │   ├── HowItWorks.tsx            # Client — GSAP ScrollTrigger progress line
│   │   ├── DashboardPreview.tsx      # Client — Tabs + crossfade + verdict demo
│   │   ├── AIIntelligence.tsx        # Client — GSAP boundary diagram
│   │   ├── Roadmap.tsx               # Client — GSAP timeline draw
│   │   ├── FAQ.tsx                   # Client — Radix Accordion + Framer height
│   │   ├── CTA.tsx                   # Client — glow steady-state
│   │   └── index.ts                  # Barrel export
│   │
│   ├── ui/
│   │   ├── Button.tsx                 # Primary/Secondary/Ghost/Destructive
│   │   ├── Card.tsx                   # Base surface card (feature, roadmap node)
│   │   ├── Badge.tsx                  # Safe/Review/Blocked + neutral
│   │   ├── Input.tsx                  # Text/mono variants
│   │   ├── Tooltip.tsx                # Radix-based, used in AI diagram
│   │   ├── Accordion.tsx              # Radix wrapper styled per tokens
│   │   ├── Tabs.tsx                   # Radix wrapper for dashboard preview
│   │   ├── GlassPanel.tsx             # Verification sheet / floating surfaces
│   │   └── VisuallyHidden.tsx         # A11y utility wrapper
│   │
│   ├── product/
│   │   ├── VerificationVerdict.tsx    # Verdict card used in hero + dashboard
│   │   ├── MandatePanel.tsx           # Limits display
│   │   ├── ActionFeed.tsx             # Live-style feed with status badges
│   │   ├── AgentBoundaryDiagram.tsx   # SVG diagram driven by GSAP
│   │   └── TimelineNode.tsx           # Roadmap node (now/next/horizon)
│   │
│   └── motion/
│       ├── FadeInOnView.tsx           # Framer wrapper, respects reduced motion
│       ├── StaggerGroup.tsx           # Framer stagger container
│       └── ScrollProgressLine.tsx     # GSAP-driven line, exposes ref API
│
├── content/
│   ├── copy/
│   │   ├── hero.ts
│   │   ├── features.ts
│   │   ├── howItWorks.ts
│   │   ├── dashboard.ts
│   │   ├── aiIntelligence.ts
│   │   ├── roadmap.ts
│   │   ├── faq.ts
│   │   ├── cta.ts
│   │   ├── footer.ts
│   │   └── index.ts                   # Typed aggregate export
│   └── nav.ts                          # Navbar/footer link definitions
│
├── hooks/
│   ├── useReducedMotion.ts
│   ├── useScrollProgress.ts
│   ├── useGsapTimeline.ts
│   ├── useInView.ts
│   ├── useMediaQuery.ts
│   ├── useMandateState.ts
│   └── useNavScrollState.ts
│
├── lib/
│   ├── motion/
│   │   ├── variants.ts                # Framer variants (fade, rise, stagger)
│   │   ├── easings.ts                 # Cubic-bezier constants from tokens
│   │   └── gsapConfig.ts              # ScrollTrigger defaults, cleanup helpers
│   ├── status.ts                      # Safe/Review/Blocked type + color mapping
│   ├── cn.ts                          # Tailwind class-merge utility
│   ├── format.ts                      # Address/amount truncation, tabular figures
│   └── constants.ts                   # Breakpoints, container widths, durations
│
├── types/
│   ├── copy.ts                        # Section copy interfaces
│   ├── status.ts                       # StatusVariant = 'safe' | 'caution' | 'blocked'
│   └── roadmap.ts
│
├── styles/
│   └── tokens.css                     # CSS variables mirroring DESIGN_SYSTEM.md
│
├── public/
│   ├── fonts/                          # Self-hosted font files
│   ├── icons/                          # SVG icon set
│   └── illustrations/                  # Diagrammatic SVGs (AI boundary, mandate)
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Component Structure

### Composition model

`app/page.tsx` is a Server Component that imports the `sections/` barrel and renders them in BLUEPRINT.md order. No section fetches data client-side at v1; all copy is statically imported from `content/copy`.

```tsx
// app/page.tsx (RSC)
import {
  Navbar, Hero, SocialProof, Features, HowItWorks,
  DashboardPreview, AIIntelligence, Roadmap, FAQ, CTA, Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <AIIntelligence />
      <Roadmap />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
```

### Section contract

Every `sections/*.tsx` follows the same shape so the page composition stays predictable:

- Accepts no required props (copy is imported internally from `content/copy`), matching the artifact/component convention of no mandatory inputs.
- Wraps client-only motion in a leaf child (`"use client"` pushed as deep as possible) so the section shell itself can stay server-rendered where possible.
- Uses `PageShell`/`Container` from `layout/` for consistent max-width per DESIGN_SYSTEM.md (`--container-app` / `--container-wide`).

```tsx
// components/sections/Features.tsx (RSC)
import { featuresCopy } from "@/content/copy/features";
import { Card } from "@/components/ui/Card";
import { FadeInOnView } from "@/components/motion/FadeInOnView";

export function Features() {
  return (
    <section id="features" className="container-app py-24">
      <h2 className="text-h2">{featuresCopy.headline}</h2>
      <p className="text-body text-text-secondary">{featuresCopy.subhead}</p>
      <div className="grid gap-6 lg:grid-cols-3 mt-12">
        {featuresCopy.items.map((item, i) => (
          <FadeInOnView key={item.title} delay={i * 0.08}>
            <Card title={item.title} body={item.body} icon={item.icon} />
          </FadeInOnView>
        ))}
      </div>
    </section>
  );
}
```

### Product components (design-system-critical)

- **`VerificationVerdict`** — the single component allowed the "expressive moment" per BRAND.md/DESIGN_SYSTEM.md. Renders a `Badge` (Safe/Review/Blocked), a plain-language line, and a monospace detail row. Used in Hero (static) and Dashboard Preview (animated transition).
- **`AgentBoundaryDiagram`** — SVG diagram with named nodes (`agent`, `boundary`, `outcome`); GSAP timeline animates one action passing through as `safe` and one caught as `blocked`. Exposes `play()`/`reset()` for reduced-motion fallback (renders final state only).
- **`ActionFeed`** — list of `ActionRow` (actor, mandate, status badge, timestamp) — same component powers the "Attribution and recourse" narrative in both marketing and product contexts.

### Component variant strategy

UI primitives (`Button`, `Badge`, `Card`) use a `cva` (class-variance-authority) pattern layered on Tailwind, keyed directly to DESIGN_SYSTEM.md variants (`primary | secondary | ghost | destructive`, `safe | caution | blocked | neutral`) so there is exactly one source of truth for variant-to-token mapping.

---

## Hooks

| Hook | Responsibility |
|---|---|
| `useReducedMotion()` | Wraps `window.matchMedia('(prefers-reduced-motion: reduce)')`, exposed via a top-level `MotionPreferenceProvider`; all motion hooks read from this instead of querying individually. |
| `useInView(ref, options)` | Thin wrapper over `IntersectionObserver` for one-time fade-in triggers (Social Proof, Features); returns `hasEntered: boolean`. |
| `useScrollProgress(ref)` | Returns 0–1 progress of an element through the viewport; backs `ScrollProgressLine` in How It Works and Roadmap. |
| `useGsapTimeline(factory, deps)` | Creates a GSAP timeline inside `useLayoutEffect`, scoped with `gsap.context()` for automatic cleanup on unmount; used by `AgentBoundaryDiagram` and `Roadmap`. |
| `useNavScrollState()` | Tracks scroll position to toggle Navbar background/blur state at the 64px threshold. |
| `useMediaQuery(query)` | Generic breakpoint hook backing responsive behavior not achievable with Tailwind alone (e.g., swapping GSAP scroll config on mobile). |
| `useMandateState()` | Local state/reducer for the interactive Mandate Panel demo (asset, size, venue, rate limits) — client-only, no persistence at v1. |
| `useFocusTrap(ref)` | Focus containment for the mobile nav sheet and any modal/glass overlay, layered on Radix primitives where they don't already provide it. |

All scroll/motion hooks short-circuit to a static, fully-visible state when `useReducedMotion()` is true — enforced at the hook level so no component has to remember to check it individually.

---

## Utilities

**`lib/cn.ts`** — `clsx` + `tailwind-merge` wrapper; the only accepted way to compose conditional class names.

**`lib/status.ts`** — single mapping from `StatusVariant` (`safe | caution | blocked`) to Tailwind classes, badge dot color, and accessible label, so status never gets re-implemented per component:

```ts
export const STATUS_META: Record<StatusVariant, StatusMeta> = {
  safe:    { label: "Safe",    className: "text-safe bg-safe/10" },
  caution: { label: "Review",  className: "text-caution bg-caution/10" },
  blocked: { label: "Blocked", className: "text-blocked bg-blocked/10" },
};
```

**`lib/format.ts`** — address truncation (`0x3f...9a2c`), tabular-figure amount formatting, and relative timestamps for `ActionFeed`.

**`lib/motion/easings.ts`** — exports the two cubic-bezier constants from DESIGN_SYSTEM.md (`enterEase`, `exitEase`) so Framer and GSAP reference identical curves.

**`lib/motion/variants.ts`** — shared Framer Motion variants (`fadeRise`, `staggerContainer`, `pressable`) built from token durations (120/160/200/240ms) — no component defines its own ad hoc animation timing.

**`lib/motion/gsapConfig.ts`** — centralizes `ScrollTrigger.defaults()` (start/end offsets, `scrub` behavior) and a `killAll()` helper called on route change to prevent trigger leaks in the App Router.

**`lib/constants.ts`** — breakpoint values, container max-widths, and spacing scale mirrored from DESIGN_SYSTEM.md as typed constants, consumed by both Tailwind config and any inline calculation (e.g., GSAP trigger math).

---

## Assets

```
public/
├── icons/                 # 24x24 uniform-stroke SVGs: checkpoint, boundary,
│                          # record, signature, agent, wallet, arrow, close
├── illustrations/
│   ├── agent-boundary.svg      # Base state for AIIntelligence diagram
│   ├── mandate-flow.svg        # Optional supporting diagram
│   └── verification-flow.svg   # How It Works supporting graphic
├── og/
│   └── og-image.png            # Static, matches hero visual language
└── favicon.ico / icon.svg / apple-icon.png
```

- All icons follow DESIGN_SYSTEM.md iconography rules: single stroke weight, geometric, no gradients, no metaphor beyond function.
- Illustrations are authored as SVG (not raster) so they can be selectively animated (GSAP targets named `<g>` elements) and stay crisp at any density.
- No stock photography per BRAND.md; if a photographic asset is ever introduced (architectural, cool light), it lives under `public/photography/` and is treated as the exception, not the default.

---

## Fonts

Loaded via `next/font` for automatic self-hosting, subsetting, and zero layout shift.

```ts
// app/layout.tsx
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const interDisplay = localFont({
  src: "../public/fonts/InterDisplay-SemiBold.woff2",
  variable: "--font-display",
  weight: "600",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
```

| Role | Family | Tailwind token | Used by |
|---|---|---|---|
| Interface / body | Inter | `font-sans` | Body, labels, UI copy |
| Headline / display | Inter Display (SF Pro Display fallback) | `font-display` | `display`, `h1`, `h2` |
| Numeric / addresses | JetBrains Mono | `font-mono` | `ActionFeed`, addresses, amounts, roadmap step numbers |

Font variables are applied once on `<html>` and consumed through Tailwind's `fontFamily` extension — no per-component font declarations. Tabular figures (`font-variant-numeric: tabular-nums`) are enabled globally on `.font-mono` per DESIGN_SYSTEM.md typography rules.

---

## Tailwind Configuration Mapping

`tailwind.config.ts` extends theme directly from `styles/tokens.css` custom properties rather than duplicating hex values, keeping DESIGN_SYSTEM.md the single authority:

```ts
export default {
  theme: {
    extend: {
      colors: {
        bg: { base: "var(--bg-base)", raised: "var(--bg-raised)" },
        surface: { 1: "var(--surface-1)", 2: "var(--surface-2)" },
        border: { subtle: "var(--border-subtle)", strong: "var(--border-strong)" },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
        accent: { DEFAULT: "var(--accent)", hover: "var(--accent-hover)" },
        safe: "var(--safe)", caution: "var(--caution)", blocked: "var(--blocked)",
      },
      spacing: { /* 2,4,8,...,128 mapped 1:1 to DESIGN_SYSTEM.md scale */ },
      borderRadius: { md: "10px", lg: "12px", xl: "16px" },
      boxShadow: {
        1: "var(--shadow-1)", 2: "var(--shadow-2)", 3: "var(--shadow-3)",
      },
      transitionDuration: { 120: "120ms", 160: "160ms", 200: "200ms", 240: "240ms" },
      maxWidth: {
        prose: "680px", app: "1120px", wide: "1280px", full: "1440px",
      },
    },
  },
};
```

---

*This architecture keeps every visual and motion decision traceable back to a single token source, so the build cannot silently drift from BRAND.md and DESIGN_SYSTEM.md as the codebase grows.*
