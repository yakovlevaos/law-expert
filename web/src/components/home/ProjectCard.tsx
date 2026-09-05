"use client";

import Image from "next/image";
import { Card, Tabs } from "@heroui/react";

import { useLightbox } from "@/components/ui/Lightbox";
import { PROJECT_LINKS, resolveMedia } from "@/data/projects";
import type { Project, ProjectMedia } from "@/data/projects";

/**
 * The four short facts, which sit beside the cover. Partners are deliberately
 * not among them: the list is long, and in the original it was a row spanning
 * the full width of the table under the image cell rather than squeezed into
 * the narrow column next to it.
 */
const Facts = ({ project }: { project: Project }) => (
  <dl className="grid min-w-0 flex-1 gap-x-6 gap-y-3 sm:grid-cols-[max-content_1fr]">
    {[
      ["Срок реализации", project.period],
      ["Охват", project.coverage],
      ["Место проведения", project.place],
      ["Источник финансирования", project.funding],
    ].map(([term, value]) => (
      <div key={term} className="contents">
        <dt className="font-semibold">{term}</dt>
        <dd className="text-[var(--muted)]">{value}</dd>
      </div>
    ))}
  </dl>
);

/** Runs the full width beneath the cover, filling what would be dead space. */
const Partners = ({ project }: { project: Project }) => (
  <dl className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-[max-content_1fr]">
    <dt className="font-semibold">Партнёры</dt>
    <dd>
      <ul className="flex list-disc flex-col gap-1 pl-4 text-[var(--muted)] marker:text-[var(--accent)]">
        {project.partners.map((partner) => (
          <li key={partner}>{partner}</li>
        ))}
      </ul>
    </dd>
  </dl>
);

/**
 * The cover as the original had it: a third of the width, in the flow of the
 * tab beside the text rather than in a column of its own. Because the box is
 * sized to the picture instead of to the card, there is no leftover space
 * underneath it to fill.
 */
const Cover = ({
  media,
  title,
  onOpen,
}: {
  media: ProjectMedia;
  title: string;
  onOpen: () => void;
}) => (
  <button
    type="button"
    onClick={onOpen}
    className="group relative aspect-3/2 w-full shrink-0 cursor-pointer self-start overflow-hidden rounded-lg sm:w-1/3"
    aria-label={`Открыть ${media.kind === "video" ? "видео" : "фотографию"} проекта «${title}»`}
  >
    {media.kind === "video" ? (
      <video
        src={media.src}
        muted
        playsInline
        preload="metadata"
        className="size-full object-contain"
      />
    ) : (
      <Image
        src={media.src}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 30vw"
        className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
      />
    )}
  </button>
);

type Props = {
  project: Project;
  /**
   * Every second card hangs off the right edge instead of the left, the
   * staggered arrangement the original site used (`md:w-4/6` with
   * `md:ml-auto` on the odd ones).
   */
  isMirrored?: boolean;
};

export const ProjectCard = ({ project, isMirrored = false }: Props) => {
  const { open } = useLightbox();
  const cover = resolveMedia(project.media[0]);
  const links = PROJECT_LINKS[project.slug] ?? [];

  const openCover = () =>
    open({ src: cover.src, kind: cover.kind, alt: project.title });

  return (
    <Card
      /*
       * One solid block on the section's band rather than a card split into an
       * image panel and a text panel. `--project-card` keeps the original's
       * relationship to the band in each theme: lighter than the band in the
       * light theme, darker than it in the dark one.
       */
      className={`bg-[var(--project-card)] p-5 sm:p-6 lg:w-5/6 xl:w-4/6 ${
        isMirrored ? "lg:ml-auto" : ""
      }`}
    >
      {/* Above the tabs rather than inside the first one as in the original,
          so the project stays named when the visitor switches to Фото. */}
      <h3 className="text-xl font-bold text-balance">{project.title}</h3>

      <Tabs defaultSelectedKey="facts" variant="secondary" className="mt-4">
        <Tabs.ListContainer className="w-fit">
          <Tabs.List aria-label={`Разделы проекта «${project.title}»`}>
            <Tabs.Tab id="facts">
              Проект
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="description">
              Описание
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="gallery">
              Фото
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>

        <Tabs.Panel id="facts" className="pt-5 text-sm leading-relaxed">
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
            <Cover media={cover} title={project.title} onOpen={openCover} />
            <Facts project={project} />
          </div>
          <Partners project={project} />
        </Tabs.Panel>

        <Tabs.Panel id="description" className="pt-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
            <Cover media={cover} title={project.title} onOpen={openCover} />
            <div className="min-w-0">
              <p className="text-sm leading-relaxed">{project.description}</p>
              {links.length > 0 && (
                <ul className="mt-4 flex flex-col gap-1 text-sm">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel id="gallery" className="pt-5">
          {/*
            Thumbnails are navigation, not content: they fill their tile so the
            contact sheet reads as one grid, and the whole frame is one click
            away in the lightbox.
          */}
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.media.map((entry) => {
              const media = resolveMedia(entry);
              return (
                <li key={entry}>
                  <button
                    type="button"
                    onClick={() =>
                      open({
                        src: media.src,
                        kind: media.kind,
                        alt: project.title,
                      })
                    }
                    className="relative block aspect-3/2 w-full cursor-pointer overflow-hidden rounded-md bg-[var(--surface-secondary)]"
                    aria-label={`Открыть ${media.kind === "video" ? "видео" : "фотографию"} проекта «${project.title}»`}
                  >
                    {media.kind === "video" ? (
                      <video
                        src={media.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="size-full object-cover"
                      />
                    ) : (
                      <Image
                        src={media.src}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 45vw, 220px"
                        className="object-cover transition-transform duration-200 hover:scale-[1.03]"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};
