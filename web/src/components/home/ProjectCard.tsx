"use client";

import Image from "next/image";
import { Card, Tabs } from "@heroui/react";

import { useLightbox } from "@/components/ui/Lightbox";
import { PROJECT_LINKS, resolveMedia } from "@/data/projects";
import type { Project } from "@/data/projects";

const Facts = ({ project }: { project: Project }) => (
  <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[max-content_1fr]">
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

type Props = {
  project: Project;
  /**
   * Every second card hangs off the right edge instead of the left, the
   * staggered arrangement the original site used (`md:w-4/6` with
   * `md:ml-auto` on the odd ones). The cover column swaps sides to match, so
   * the photographs run along the outer edge and the text always faces the
   * middle of the page.
   */
  isMirrored?: boolean;
};

export const ProjectCard = ({ project, isMirrored = false }: Props) => {
  const { open } = useLightbox();
  const cover = resolveMedia(project.media[0]);
  const links = PROJECT_LINKS[project.slug] ?? [];

  return (
    <Card
      className={`overflow-hidden p-0 lg:w-5/6 xl:w-4/6 ${
        isMirrored ? "lg:ml-auto" : ""
      }`}
    >
      <div
        className={`grid gap-0 ${
          isMirrored
            ? "md:grid-cols-[1fr_minmax(0,40%)]"
            : "md:grid-cols-[minmax(0,40%)_1fr]"
        }`}
      >
        <button
          type="button"
          onClick={() =>
            open({ src: cover.src, kind: cover.kind, alt: project.title })
          }
          /* The card's height follows the selected tab, so the cover column
             is whatever height that comes to. `contain` centres the photo in
             it rather than cropping it to fit, and the leftover space reads
             as padding because it is the card's own background. */
          /* A tint turns the column into a deliberate image panel. The card's
             height follows the selected tab, and the cover is centred in
             whatever that comes to rather than cropped to fill it -- against
             the card's own white that centring read as an empty gap. */
          className={`group relative aspect-3/2 w-full cursor-pointer overflow-hidden bg-[var(--surface-secondary)] md:aspect-auto md:h-full ${
            isMirrored ? "md:order-2" : ""
          }`}
          aria-label={`Открыть медиа проекта «${project.title}»`}
        >
          {cover.kind === "video" ? (
            <video
              src={cover.src}
              muted
              playsInline
              preload="metadata"
              className="size-full object-contain object-top"
            />
          ) : (
            <Image
              src={cover.src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain object-top transition-transform duration-200 group-hover:scale-[1.02]"
            />
          )}
        </button>

        <div className={`min-w-0 p-5 sm:p-6 ${isMirrored ? "md:order-1" : ""}`}>
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
              <Facts project={project} />
            </Tabs.Panel>

            <Tabs.Panel id="description" className="pt-5">
              <p className="max-w-(--container-prose) text-sm leading-relaxed">
                {project.description}
              </p>
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
            </Tabs.Panel>

            <Tabs.Panel id="gallery" className="pt-5">
              {/*
                Thumbnails are navigation, not content: they fill their tile so
                the contact sheet reads as one grid, and the whole frame is one
                click away in the lightbox. Portrait-orientation shots would
                otherwise sit as narrow strips between wide empty margins and
                look like something failed to load.
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
        </div>
      </div>
    </Card>
  );
};
