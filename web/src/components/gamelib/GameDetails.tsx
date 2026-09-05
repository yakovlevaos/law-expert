"use client";

import Image from "next/image";
import { Disclosure } from "@heroui/react";

import { useLightbox } from "@/components/ui/Lightbox";
import type { Game } from "@/lib/types";

/** Expandable description and screenshots, shared by the table and card views. */
export const GameDetails = ({ game }: { game: Game }) => {
  const { open } = useLightbox();
  const title = game.titles_list[0] ?? "Видеоигра";

  return (
    <Disclosure>
      <Disclosure.Heading>
        <Disclosure.Trigger className="flex w-full cursor-pointer items-center justify-center gap-2 py-2 text-sm text-[var(--accent)]">
          Подробнее о «{title}»
          <Disclosure.Indicator />
        </Disclosure.Trigger>
      </Disclosure.Heading>
      <Disclosure.Content className="px-1 pb-4">
        <p className="max-w-(--container-prose) text-sm leading-relaxed">
          {game.description || "Описание в разработке."}
        </p>

        {game.screen_shots_list.length > 0 && (
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {game.screen_shots_list.map((shot, index) => (
              <li key={shot}>
                <button
                  type="button"
                  onClick={() =>
                    open({ src: shot, kind: "image", alt: `${title}: скриншот` })
                  }
                  className="relative block aspect-16/9 w-full cursor-pointer overflow-hidden rounded-md bg-[var(--surface-secondary)]"
                  aria-label={`${title}: открыть скриншот ${index + 1}`}
                >
                  <Image
                    src={shot}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 45vw, 260px"
                    className="object-cover transition-transform duration-200 hover:scale-[1.03]"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </Disclosure.Content>
    </Disclosure>
  );
};
