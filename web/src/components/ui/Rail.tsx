"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Button } from "@heroui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

type Props = {
  /** Announced to assistive technology, e.g. "Специалисты центра". */
  label: string;
  children: ReactNode;
  /** Tailwind classes describing one item's width at each breakpoint. */
  itemClassName?: string;
};

/**
 * A horizontally scrollable row with snap points, replacing the Swiper
 * carousels of the old site. It is a plain scroll container, so it works
 * without JavaScript, keeps every card reachable by keyboard and screen
 * reader, and does not hide content behind an auto-rotating viewport.
 */
export const Rail = ({ label, children, itemClassName }: Props) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanScrollBack(track.scrollLeft > 4);
    setCanScrollForward(track.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstItem = track.firstElementChild as HTMLElement | null;
    const step = firstItem ? firstItem.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({
      left: step * direction,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const items = Array.isArray(children) ? children : [children];

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        onScroll={sync}
        aria-label={label}
        className="rail gap-6 pb-4"
      >
        {items.map((item, index) => (
          <li key={index} className={itemClassName ?? "w-[85vw] sm:w-[380px]"}>
            {item}
          </li>
        ))}
      </ul>

      {/* Arrows are a desktop affordance; touch users swipe the rail itself. */}
      <div className="pointer-events-none absolute inset-y-0 -left-3 -right-3 hidden items-center justify-between lg:flex">
        <Button
          variant="secondary"
          isIconOnly
          className="pointer-events-auto size-11 rounded-full shadow-md disabled:opacity-0"
          isDisabled={!canScrollBack}
          aria-label={`${label}: предыдущие`}
          onPress={() => scrollBy(-1)}
        >
          <ChevronLeftIcon className="size-5" />
        </Button>
        <Button
          variant="secondary"
          isIconOnly
          className="pointer-events-auto size-11 rounded-full shadow-md disabled:opacity-0"
          isDisabled={!canScrollForward}
          aria-label={`${label}: следующие`}
          onPress={() => scrollBy(1)}
        >
          <ChevronRightIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
};
