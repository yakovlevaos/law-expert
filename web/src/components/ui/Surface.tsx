import type { ReactNode } from "react";

/**
 * Card-shaped container built straight from the HeroUI theme tokens.
 *
 * HeroUI's own `<Card>` is a client component (its barrel pulls in
 * `client-only`), so a server component cannot render one. Static panels use
 * this instead and stay on the server; HeroUI components are reserved for the
 * places that actually need interactivity.
 */
export const Surface = ({
  children,
  className = "",
  as: Tag = "div",
  tone = "page",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  /**
   * Where the card sits. On a tinted section band `--surface` is the wrong
   * colour: in the dark theme it is the same slate-800 as the band itself, and
   * the card would have no visible edge.
   */
  tone?: "page" | "band";
}) => (
  <Tag
    className={`rounded-[var(--radius)] text-[var(--surface-foreground)] shadow-[var(--surface-shadow)] ${
      tone === "band" ? "bg-[var(--card-on-band)]" : "bg-[var(--surface)]"
    } ${className}`}
  >
    {children}
  </Tag>
);
