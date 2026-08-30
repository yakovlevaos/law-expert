"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Card } from "@heroui/react";

import { DocumentIcon } from "@/components/icons";
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
      <div className="relative aspect-4/5 w-full bg-[var(--surface-secondary)]">
        <Image
          src={expertPhoto(expert)}
          alt={`Фотография: ${expert.name}`}
          fill
          sizes="(max-width: 640px) 85vw, 380px"
          className="object-cover"
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
          <ul className="flex flex-wrap items-center gap-2">
            {expert.docs.map((doc, index) => (
              <li key={doc}>
                <a
                  href={expertDocPdf(doc)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 rounded-md border border-[var(--border)] px-2 py-1.5 text-xs text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label={`${expert.name}: документ ${index + 1}, PDF (откроется в новой вкладке)`}
                >
                  <Image
                    src={expertDocCover(doc)}
                    alt=""
                    width={24}
                    height={34}
                    className="h-8 w-auto rounded-xs object-cover"
                  />
                  <DocumentIcon className="size-4" aria-hidden="true" />
                  <span>PDF</span>
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
