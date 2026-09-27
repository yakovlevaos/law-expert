"use client";

import Image from "next/image";
import { useState } from "react";

import { PlayIcon } from "@/components/icons";
import type { SiteVideo } from "@/data/videos";

/** The same embed, told to start playing, for when the visitor asks it to. */
const withAutoplay = (src: string) => {
  const url = new URL(src);
  url.searchParams.set("autoplay", "1");
  return url.toString();
};

/**
 * One video, framed only once the visitor asks for it.
 *
 * The carousel loops, which means the list is rendered three times, and a VK
 * embed rendered three times is three player pages fetched. Measured on the
 * home page that came to ten of them loading before anyone had pressed play.
 * So an embed starts as a still panel with a play control and becomes an
 * iframe on demand: the loop costs almost nothing, and only the video someone
 * actually watches is ever fetched.
 *
 * The clones cannot be pressed — they are `inert` — so only the real copy ever
 * swaps in a player.
 */
export const VideoSlide = ({ video }: { video: SiteVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <figure className="flex h-full flex-col gap-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[var(--surface-secondary)]">
        {/* A local file used to preload its metadata, on the belief that this
            was cheap. It was not: the carousel renders every slide three times
            for its loop, and the file keeps its index at the end, so each copy
            fetched the start, aborted, and went for the tail — five aborted
            loads of a 94 MB file per page view, by an audit's count. Now the
            poster stands in and nothing is fetched until play is pressed. */}
        {video.kind === "file" ? (
          <video
            src={video.src}
            poster={video.poster}
            controls
            preload="none"
            className="size-full"
            title={video.title}
          />
        ) : isPlaying ? (
          <iframe
            src={withAutoplay(video.src)}
            title={video.title}
            /* `fullscreen` in `allow` supersedes the legacy allowfullscreen
               attribute, which browsers warn about. */
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            className="size-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative grid size-full cursor-pointer place-items-center bg-[var(--surface-tertiary)]"
            aria-label={`Воспроизвести: ${video.title}`}
          >
            {video.poster && (
              <Image
                src={video.poster}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
            )}
            <span className="relative grid size-16 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] shadow-lg transition-transform duration-200 group-hover:scale-110">
              <PlayIcon className="size-7 translate-x-0.5" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="text-sm text-[var(--muted)]">{video.title}</figcaption>
    </figure>
  );
};
