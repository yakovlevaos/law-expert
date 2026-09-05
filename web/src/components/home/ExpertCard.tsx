"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { Button, Card } from "@heroui/react";

import { expertDocCover, expertDocPdf, expertPhoto } from "@/data/experts";
import type { Expert } from "@/data/experts";

type Props = {
  expert: Expert;
  /** Shared with every other card in the rail; see ExpertsRail. */
  isExpanded: boolean;
  onToggle: () => void;
};

export const ExpertCard = ({ expert, isExpanded, onToggle }: Props) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const bioRef = useRef<HTMLParagraphElement>(null);

  /*
   * Collapsed to a fixed number of lines rather than a word count. The bios
   * run from 16 to 48 words, and the card is one column wide on a phone and a
   * quarter of the row on a wide screen, so the same wording fills wildly
   * different numbers of lines; clamping the lines is what actually keeps the
   * cards to a common height. Measured only while collapsed, so the state
   * survives expanding and the control does not vanish under the reader.
   */
  useLayoutEffect(() => {
    const bio = bioRef.current;
    if (!bio || isExpanded) return;

    const check = () => setIsOverflowing(bio.scrollHeight > bio.clientHeight + 1);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(bio);
    return () => observer.disconnect();
  }, [isExpanded]);

  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      {/*
        Cropped to a common box so every portrait ends on the same line, at the
        customer's request. Anchored to the top, so what a wide photograph
        loses is the bottom of the frame rather than the face.
      */}
      <div className="relative aspect-4/5 w-full">
        <Image
          src={expertPhoto(expert)}
          alt={`Фотография: ${expert.name}`}
          fill
          sizes="(max-width: 640px) 100vw, 25vw"
          className="object-cover object-top"
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
          <ul className="flex gap-2 overflow-x-auto pb-1 [justify-content:safe_center] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

        <p
          ref={bioRef}
          className={`text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-4"}`}
        >
          {expert.description}
        </p>

        {(isOverflowing || isExpanded) && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-auto self-start px-0"
            onPress={onToggle}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Свернуть" : "Узнать больше"}
          </Button>
        )}
      </div>
    </Card>
  );
};
