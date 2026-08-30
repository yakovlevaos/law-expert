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
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) => (
  <Tag
    className={`rounded-[var(--radius)] bg-[var(--surface)] text-[var(--surface-foreground)] shadow-[var(--surface-shadow)] ${className}`}
  >
    {children}
  </Tag>
);
