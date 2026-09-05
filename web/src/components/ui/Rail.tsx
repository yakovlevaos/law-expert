"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
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

/** Gap between items, matching the `gap-6` on the track. */
const GAP = 24;

/**
 * Copies of the item list laid end to end. The visitor sits in the middle one
 * and has a full copy of travel in either direction before the rail silently
 * re-centres, which is what makes the loop seamless.
 */
const COPIES = 3;

/**
 * How far the rail may drift from the middle copy before it is re-centred, as
 * a fraction of one copy's width.
 *
 * It has to be more than half, or the correction lands exactly on the opposite
 * threshold and the next step immediately trips it again — the rail then
 * ping-pongs between two positions and stops moving. Three quarters leaves a
 * quarter of a copy of slack on each side, far more than the one-card step the
 * arrows take.
 */
const DRIFT_LIMIT = 0.75;

/** How much to add to `position` to bring it back into the middle copy. */
const correction = (position: number, copyWidth: number) => {
  if (position < copyWidth * (1 - DRIFT_LIMIT)) return copyWidth;
  if (position > copyWidth * (1 + DRIFT_LIMIT)) return -copyWidth;
  return 0;
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * A horizontally scrollable row with snap points, replacing the Swiper
 * carousels of the old site. It is a plain scroll container, so it works
 * without JavaScript, keeps every card reachable by keyboard and screen
 * reader, and does not hide content behind an auto-rotating viewport.
 *
 * When the items overflow the viewport the row loops endlessly in both
 * directions, the way the old Swiper's `loop: true` did. It does that by
 * rendering the list three times and jumping back by exactly one copy's width
 * once the visitor scrolls out of the middle one — an instant, unanimated
 * assignment at a position where every copy looks identical, so it cannot be
 * seen. Native scrolling is untouched, so swipe, trackpad and momentum all
 * keep working.
 */
export const Rail = ({ label, children, itemClassName }: Props) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const copyWidthRef = useRef(0);
  const [isLooping, setIsLooping] = useState(false);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const items = Array.isArray(children) ? children : [children];
  const copies = isLooping ? COPIES : 1;

  /**
   * Width of one copy, measured from the first `items.length` cards plus the
   * gap that follows each of them.
   *
   * Deliberately measured from the items rather than derived from the track's
   * `scrollWidth`: the answer must not depend on how many copies are currently
   * rendered, or the effect that decides whether to clone would be reading a
   * number that its own decision had just changed, and the two would chase
   * each other until React gave up with "Maximum update depth exceeded".
   */
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const copy = (Array.from(track.children) as HTMLElement[]).slice(0, items.length);
    if (copy.length === 0) return;

    const copyWidth = copy.reduce((total, item) => total + item.offsetWidth + GAP, 0);
    copyWidthRef.current = copyWidth;

    // Looping is only meaningful when a copy overflows the viewport. The game
    // page shows this same rail with two people, which fits, and cloning there
    // would just repeat them for no reason.
    setIsLooping(copyWidth > track.clientWidth + 1);
  }, [items.length]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [measure]);

  /** Start in the middle copy, so there is room to scroll back immediately. */
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || !isLooping) return;
    track.scrollLeft = copyWidthRef.current;
  }, [isLooping, items.length]);

  const syncArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanScrollBack(track.scrollLeft > 4);
    setCanScrollForward(track.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    syncArrows();
  }, [syncArrows, isLooping]);

  /** Re-centre on the middle copy once the visitor scrolls out of it. */
  const recentre = useCallback(() => {
    const track = trackRef.current;
    const copyWidth = copyWidthRef.current;
    if (!track || !isLooping || copyWidth <= 0) return;
    track.scrollLeft += correction(track.scrollLeft, copyWidth);
  }, [isLooping]);

  const onScroll = () => {
    recentre();
    if (!isLooping) syncArrows();
  };

  const scrollByItem = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstItem = track.firstElementChild as HTMLElement | null;
    const step = firstItem ? firstItem.offsetWidth + GAP : track.clientWidth * 0.8;
    const copyWidth = copyWidthRef.current;

    // Re-centre *before* animating when this step would leave the middle copy.
    // Correcting afterwards would mean assigning scrollLeft mid-animation,
    // which cancels the smooth scroll and stops the rail dead.
    if (isLooping && copyWidth > 0) {
      track.scrollLeft += correction(track.scrollLeft + step * direction, copyWidth);
    }

    track.scrollBy({
      left: step * direction,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        onScroll={onScroll}
        aria-label={label}
        className="rail gap-6 pb-4"
      >
        {Array.from({ length: copies }, (_, copy) =>
          items.map((item, index) => (
            <li
              key={`${copy}-${index}`}
              // Only the middle copy is the real list. The other two are
              // scenery: hidden from assistive technology and skipped by the
              // keyboard, so the cards inside them do not repeat the expert
              // bios or triple the tab stops.
              aria-hidden={isLooping && copy !== 1 ? true : undefined}
              inert={isLooping && copy !== 1}
              className={itemClassName ?? "w-[85vw] sm:w-[380px]"}
            >
              {item}
            </li>
          )),
        )}
      </ul>

      {/* Arrows are a desktop affordance; touch users swipe the rail itself. */}
      <div className="pointer-events-none absolute inset-y-0 -left-3 -right-3 hidden items-center justify-between lg:flex">
        <Button
          variant="secondary"
          isIconOnly
          className="pointer-events-auto size-11 rounded-full shadow-md disabled:opacity-0"
          isDisabled={!isLooping && !canScrollBack}
          aria-label={`${label}: предыдущие`}
          onPress={() => scrollByItem(-1)}
        >
          <ChevronLeftIcon className="size-5" />
        </Button>
        <Button
          variant="secondary"
          isIconOnly
          className="pointer-events-auto size-11 rounded-full shadow-md disabled:opacity-0"
          isDisabled={!isLooping && !canScrollForward}
          aria-label={`${label}: следующие`}
          onPress={() => scrollByItem(1)}
        >
          <ChevronRightIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
};
