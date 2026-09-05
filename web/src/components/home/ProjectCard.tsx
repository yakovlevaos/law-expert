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

export const ProjectCard = ({ project }: { project: Project }) => {
  const { open } = useLightbox();
  const cover = resolveMedia(project.media[0]);
  const links = PROJECT_LINKS[project.slug] ?? [];

  return (
    <Card className="overflow-hidden p-0">
      <div className="grid gap-0 md:grid-cols-[minmax(0,340px)_1fr]">
        <button
          type="button"
          onClick={() =>
            open({ src: cover.src, kind: cover.kind, alt: project.title })
          }
          /* The card's height follows the selected tab, so the cover column
             is whatever height that comes to. `contain` centres the photo in
             it rather than cropping it to fit, and the leftover space reads
             as padding because it is the card's own background. */
          className="group relative aspect-3/2 w-full cursor-pointer overflow-hidden md:aspect-auto md:h-full"
          aria-label={`Открыть медиа проекта «${project.title}»`}
        >
          {cover.kind === "video" ? (
            <video
              src={cover.src}
              muted
              playsInline
              preload="metadata"
              className="size-full object-contain"
            />
          ) : (
            <Image
              src={cover.src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          )}
        </button>

        <div className="min-w-0 p-5 sm:p-6">
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
                            className="size-full object-contain"
                          />
                        ) : (
                          <Image
                            src={media.src}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 45vw, 220px"
                            className="object-contain transition-transform duration-200 hover:scale-[1.03]"
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
