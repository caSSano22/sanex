import Link from "next/link";
import { footerCopy } from "@/content/copy/footer";
import { Logo } from "@/components/icons";


export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-raised px-6 py-16">
      <div className="mx-auto max-w-wide">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md text-title font-display font-semibold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Logo className="h-6 w-6 text-text-primary" />
              <span>SANEX</span>
            </Link>
            <p className="mt-3 max-w-[32ch] text-body-sm text-text-tertiary">
              {footerCopy.pitch}
            </p>
          </div>

          {footerCopy.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-micro font-medium uppercase tracking-wide text-text-tertiary">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block py-3 text-body-sm text-text-tertiary transition-colors duration-120 hover:text-text-secondary"
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-2.5 h-px origin-left scale-x-0 bg-text-secondary transition-transform duration-160 ease-enter group-hover:scale-x-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-micro text-text-tertiary">
            © {year} SANEX. Accountability for on-chain finance.
          </p>
          <p className="text-micro text-text-tertiary">{footerCopy.networkLine}</p>
        </div>
      </div>
    </footer>
  );
}
