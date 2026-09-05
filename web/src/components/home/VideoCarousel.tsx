import { Rail } from "@/components/ui/Rail";
import { VIDEOS } from "@/data/videos";

/**
 * The videos as a carousel, the way the original site ran them, rather than
 * five players stacked down the page.
 *
 * Two at a time on a wide screen and one below that, which keeps each player
 * near the 853×480 the original used instead of blowing a single one up to
 * the full width of the page.
 *
 * Deliberately not looped: looping renders the list three times, and three
 * copies of a VK embed is three players. Each iframe is also framed lazily, so
 * the ones that have not been scrolled to cost nothing.
 */
export const VideoCarousel = () => (
  <Rail
    label="Видео о центре"
    canLoop={false}
    visibleClassName="[--rail-visible:1] lg:[--rail-visible:min(2,var(--rail-count))]"
  >
    {VIDEOS.map((video) => (
      <figure key={video.src} className="flex h-full flex-col gap-2">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--surface-secondary)]">
          {video.kind === "file" ? (
            <video
              src={video.src}
              controls
              preload="metadata"
              className="size-full"
              title={video.title}
            />
          ) : (
            <iframe
              src={video.src}
              title={video.title}
              loading="lazy"
              /* `fullscreen` in `allow` supersedes the legacy
                 allowfullscreen attribute, which browsers warn about. */
              allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              className="size-full border-0"
            />
          )}
        </div>
        <figcaption className="text-sm text-[var(--muted)]">
          {video.title}
        </figcaption>
      </figure>
    ))}
  </Rail>
);
