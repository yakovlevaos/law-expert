"use client";

import { Disclosure, DisclosureGroup } from "@heroui/react";

import { GAMELIB_FAQ } from "@/data/gamelib";

/**
 * The old FAQ was a set of hand-rolled buttons that rewrote innerHTML on every
 * toggle; DisclosureGroup gives the same behaviour with correct ARIA state.
 */
export const GameLibFaq = () => (
  <DisclosureGroup className="mt-4">
    {GAMELIB_FAQ.map((entry) => (
      <Disclosure key={entry.id}>
        <Disclosure.Heading>
          <Disclosure.Trigger className="flex w-full cursor-pointer items-center justify-between gap-4 py-3 text-left font-medium">
            {entry.question}
            <Disclosure.Indicator />
          </Disclosure.Trigger>
        </Disclosure.Heading>
        <Disclosure.Content>
          <div className="flex max-w-(--container-prose) flex-col gap-2 pb-4 text-sm leading-relaxed">
            {entry.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Disclosure.Content>
      </Disclosure>
    ))}
  </DisclosureGroup>
);
