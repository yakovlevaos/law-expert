"use client";

import { useEffect, useRef, useState } from "react";

import { scrollTrackTo } from "@/lib/scroll";

/**
 * What a service covers, one point at a time, the way the original site did it
 * — each service card carried its own small carousel with pagination dots
 * rather than a bulleted list.
 *
 * It is a plain scroll container, so it can be swiped, works without
 * JavaScript, and keeps every point reachable by keyboard and screen reader;
 * the dots are a shortcut, not the only way through.
 */
export const ServiceItems = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const cancelScroll = useRef<(() => void) | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => () => cancelScroll.current?.(), []);

  const clamp = (index: number) => Math.max(0, Math.min(items.length - 1, index));

  const syncActive = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActive(clamp(Math.round(track.scrollLeft / track.clientWidth)));
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    setActive(index);
    cancelScroll.current?.();
    cancelScroll.current = scrollTrackTo(track, index * track.clientWidth, () => {
      cancelScroll.current = null;
    });
  };

  // A single point is not a carousel; one dot under it would say nothing.
  if (items.length === 1) {
    return <p className="flex-1 text-sm leading-relaxed">{items[0]}</p>;
  }

  return (
    <div className="flex flex-1 flex-col gap-3">
      <ul
        ref={trackRef}
        onScroll={syncActive}
        aria-label={`${title}: направления работы`}
        className="rail flex-1 [--rail-gap:0rem] [--rail-visible:1]"
      >
        {items.map((item) => (
          <li key={item} className="min-w-0 text-sm leading-relaxed">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`${title}: пункт ${index + 1} из ${items.length}`}
            aria-current={index === active ? "true" : undefined}
            /* 44px hit area around a small dot, so the target is not the dot. */
            className="grid size-11 cursor-pointer place-items-center"
          >
            <span
              className={`block size-3.5 rounded-full transition-colors duration-200 ${
                index === active
                  ? "bg-[var(--accent)]"
                  : "bg-[var(--border)] hover:bg-[var(--muted)]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
