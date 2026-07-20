import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "var(--bg-base)",
          raised: "var(--bg-raised)",
        },
        surface: {
          1: "var(--surface-1)",
          2: "var(--surface-2)",
        },
        border: {
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          quiet: "var(--accent-quiet)",
        },
        safe: {
          DEFAULT: "var(--safe)",
          quiet: "var(--safe-quiet)",
        },
        caution: {
          DEFAULT: "var(--caution)",
          quiet: "var(--caution-quiet)",
        },
        blocked: {
          DEFAULT: "var(--blocked)",
          quiet: "var(--blocked-quiet)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["var(--font-sans)", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        display: [
          "clamp(2.75rem, 2rem + 3.5vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "600" },
        ],
        h1: [
          "clamp(1.875rem, 1.5rem + 1.8vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h2: [
          "1.75rem",
          { lineHeight: "2.125rem", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        h3: [
          "1.375rem",
          { lineHeight: "1.75rem", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        title: [
          "1.125rem",
          { lineHeight: "1.625rem", letterSpacing: "-0.005em", fontWeight: "550" },
        ],
        body: ["1rem", { lineHeight: "1.625rem", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.375rem", fontWeight: "400" }],
        caption: [
          "0.8125rem",
          { lineHeight: "1.125rem", letterSpacing: "0.01em", fontWeight: "450" },
        ],
        micro: [
          "0.6875rem",
          { lineHeight: "0.875rem", letterSpacing: "0.04em", fontWeight: "500" },
        ],
      },
      maxWidth: {
        prose: "680px",
        app: "1120px",
        wide: "1280px",
        full: "1440px",
      },
      borderRadius: {
        md: "10px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        1: "var(--shadow-1)",
        2: "var(--shadow-2)",
        3: "var(--shadow-3)",
        glass: "var(--shadow-glass)",
        focus: "var(--shadow-focus)",
      },
      transitionDuration: {
        120: "120ms",
        160: "160ms",
        200: "200ms",
        240: "240ms",
      },
      transitionTimingFunction: {
        enter: "cubic-bezier(0.2, 0, 0, 1)",
        exit: "cubic-bezier(0.4, 0, 1, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
