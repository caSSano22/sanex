import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SANEX — The accountability layer for on-chain finance",
  description:
    "SANEX verifies every on-chain action, enforces the limits people and agents are allowed to work within, and keeps a clear, portable record of who was responsible.",
  other: {
    "virtual-protocol-site-verification": "626a8f5d97871c2eed35248dcf0fdf55",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg-base font-sans text-text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-md focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:text-body-sm focus-visible:font-medium focus-visible:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
