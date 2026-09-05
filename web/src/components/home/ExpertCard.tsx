"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Card } from "@heroui/react";

import { expertDocCover, expertDocPdf, expertPhoto } from "@/data/experts";
import type { Expert } from "@/data/experts";

/** Bios longer than this are collapsed, matching the previous site's rule. */
const WORD_LIMIT = 50;

const splitBio = (text: string) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= WORD_LIMIT) return { head: text.trim(), tail: "" };
  return {
    head: words.slice(0, WORD_LIMIT).join(" "),
    tail: words.slice(WORD_LIMIT).join(" "),
  };
};

export const ExpertCard = ({ expert }: { expert: Expert }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { head, tail } = splitBio(expert.description);

  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      {/*
        Fixed height, natural width, centred -- the portraits range from 0.67
        to 0.96 in aspect ratio, and a shared box would cut heads and
        shoulders off the widest of them. The card's own background fills
        whatever is left at the sides, so it reads as padding.
      */}
      <div className="relative h-[360px] w-full">
        <Image
          src={expertPhoto(expert)}
          alt={`Фотография: ${expert.name}`}
          fill
          sizes="(max-width: 640px) 85vw, 340px"
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <Card.Header className="p-0">
          <Card.Title className="text-lg font-bold">{expert.name}</Card.Title>
          <Card.Description className="text-sm text-[var(--muted)]">
            {expert.title}
          </Card.Description>
        </Card.Header>

        {expert.docs.length > 0 && (
          /*
            Scans in a single row, as on the original site: the thumbnail is
            the link, with no "PDF" caption beside it. Six of them do not fit
            a card at this width, so the row scrolls sideways rather than
            wrapping onto three lines and pushing the biography down. The
            accessible name lives on the link, so dropping the visible caption
            costs a screen reader nothing.
          */
          <ul className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {expert.docs.map((doc, index) => (
              <li key={doc} className="shrink-0">
                <a
                  href={expertDocPdf(doc)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xs border border-[var(--border)] transition-colors duration-200 hover:border-[var(--accent)]"
                  aria-label={`${expert.name}: документ ${index + 1} из ${expert.docs.length}, PDF (откроется в новой вкладке)`}
                >
                  <Image
                    src={expertDocCover(doc)}
                    alt=""
                    width={64}
                    height={88}
                    className="h-14 w-auto max-w-none"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="text-sm leading-relaxed">
          {isExpanded || !tail ? expert.description : `${head}…`}
        </p>

        {tail && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-auto self-start px-0"
            onPress={() => setIsExpanded((value) => !value)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Свернуть" : "Узнать больше"}
          </Button>
        )}
      </div>
    </Card>
  );
};
