import type { ReactNode } from "react";

type Props = {
  /** Anchor target used by the header navigation. */
  id?: string;
  title?: string;
  lead?: ReactNode;
  /** Tinted background, alternating down the page. */
  band?: boolean;
  children: ReactNode;
  className?: string;
};

export const Section = ({ id, title, lead, band, children, className }: Props) => (
  <section
    id={id}
    className={[
      "scroll-mt-28 py-12 sm:py-16",
      band ? "band" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ")}
  >
    <div className="mx-auto w-full max-w-[1400px] px-5">
      {title && (
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h2>
      )}
      {lead && (
        <div className="mt-3 max-w-(--container-prose) text-base text-[var(--muted)] sm:text-lg">
          {lead}
        </div>
      )}
      <div className={title || lead ? "mt-8" : ""}>{children}</div>
    </div>
  </section>
);
