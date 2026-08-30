import { VIDEOS } from "@/data/videos";

/**
 * Videos are lazily framed: five autoplaying VK players on one page is a lot
 * of third-party weight, so each iframe loads only when it scrolls into view.
 */
export const VideoGrid = () => (
  <ul className="grid gap-6 lg:grid-cols-2">
    {VIDEOS.map((video) => (
      <li key={video.src} className="flex flex-col gap-2">
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
        <p className="text-sm text-[var(--muted)]">{video.title}</p>
      </li>
    ))}
  </ul>
);
