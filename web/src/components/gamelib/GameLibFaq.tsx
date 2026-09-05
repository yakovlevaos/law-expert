"use client";

import { Disclosure } from "@heroui/react";

import { ChevronDownIcon } from "@/components/icons";
import { GAMELIB_FAQ } from "@/data/gamelib";

/**
 * The questions as cards rather than as lines of text.
 *
 * They were a plain list with a hairline chevron: nothing about them said they
 * could be opened, which is the one thing an accordion has to say. Each is now
 * a bordered card that lifts its border to the accent on hover and focus,
 * carries a numbered accent badge, and turns its chevron over when open — with
 * the accent running down the left edge while it is. Each opens independently,
 * so comparing two answers does not mean closing one to read the other.
 */
export const GameLibFaq = () => (
  <div className="mt-4 flex flex-col gap-3">
    {GAMELIB_FAQ.map((entry, index) => (
      <Disclosure key={entry.id}>
        {({ isExpanded }) => (
          <div
            className={`overflow-hidden rounded-[var(--radius)] border bg-[var(--surface)] transition-colors duration-200 ${
              isExpanded
                ? "border-[var(--accent)] border-l-4"
                : "border-[var(--border)] hover:border-[var(--accent)]"
            }`}
          >
            <Disclosure.Heading>
              <Disclosure.Trigger className="flex w-full cursor-pointer items-center gap-4 p-4 text-left sm:p-5">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--accent-foreground)]"
                >
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1 text-base font-semibold text-balance sm:text-lg">
                  {entry.question}
                </span>
                <ChevronDownIcon
                  className={`size-5 shrink-0 text-[var(--muted)] transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </Disclosure.Trigger>
            </Disclosure.Heading>

            <Disclosure.Content>
              {/* Indented to the question's text, not the badge, so the answer
                  reads as belonging to it. */}
              <div className="flex max-w-(--container-prose) flex-col gap-3 px-4 pb-5 pl-17 text-sm leading-relaxed sm:px-5 sm:pb-6 sm:pl-18">
                {entry.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Disclosure.Content>
          </div>
        )}
      </Disclosure>
    ))}
  </div>
);
