import type { Metadata } from "next";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { PRIVACY_POLICY } from "@/data/privacy";

export const metadata: Metadata = {
  title: PRIVACY_POLICY.title,
  description:
    "Какие персональные данные обрабатывает сайт центра «Генезис», для чего, на каком основании и как отозвать согласие.",
  alternates: { canonical: "/privacy" },
};

// The other pages' navigation is made of in-page anchors (#services, #team…),
// which would point at nothing here, so this page links to the pages instead.
const NAV = [
  { href: "/", label: "Главная" },
  { href: "/game", label: "Игровой центр" },
  { href: "/gamelib", label: "Библиотека игр" },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader nav={NAV} />

      <main id="content" className="mx-auto max-w-(--container-prose) px-5 py-10 sm:py-14">
        <h1 className="text-3xl font-bold text-balance sm:text-4xl">{PRIVACY_POLICY.title}</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">{PRIVACY_POLICY.revision}</p>

        <div className="mt-10 flex flex-col gap-10">
          {PRIVACY_POLICY.sections.map((section) => (
            <section key={section.heading} aria-labelledby={slug(section.heading)}>
              <h2 id={slug(section.heading)} className="text-xl font-semibold sm:text-2xl">
                {section.heading}
              </h2>

              <div className="mt-4 flex flex-col gap-3 leading-relaxed">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.items && (
                  <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-[var(--muted)]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.links && (
                  <ul className="flex flex-col gap-1">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[var(--accent)] underline underline-offset-4"
                        >
                          {link.label}
                          <span className="sr-only"> (откроется в новой вкладке)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter links={NAV} />
    </>
  );
}

/** The numbered headings make stable, readable anchors: "1. Общие положения" → "section-1". */
const slug = (heading: string) => `section-${heading.split(".")[0]}`;
