/** How long to let a scroll animate before its end position is asserted. */
export const SCROLL_DURATION = 500;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scrolls a snapping container to an exact position, and gets there.
 *
 * Two things get in the way of simply calling `scrollTo`.
 *
 * `scroll-snap-type: x mandatory` fights a programmatic smooth scroll: the
 * snap engine keeps re-targeting the point the container is already on, the
 * animation is dropped, and the control that asked for the scroll appears
 * dead. So snapping is suspended for the length of the scroll and restored
 * afterwards, at a position that is a snap point anyway.
 *
 * And smooth scrolling is not guaranteed to run at all — it is driven by
 * animation frames, which a background tab or a headless browser may starve.
 * So the position is asserted once the scroll should have finished. The
 * container therefore always ends up where it was asked to go, whether or not
 * the animation was ever drawn.
 *
 * Returns a function that cancels the pending settle, for a caller that starts
 * another scroll first or unmounts.
 */
export const scrollTrackTo = (
  track: HTMLElement,
  left: number,
  onSettled?: () => void,
): (() => void) => {
  const reduceMotion = prefersReducedMotion();

  track.style.scrollSnapType = "none";
  track.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });

  const settle = () => {
    if (Math.abs(track.scrollLeft - left) > 2) track.scrollLeft = left;
    track.style.scrollSnapType = "";
    onSettled?.();
  };

  if (reduceMotion) {
    settle();
    return () => {};
  }

  const timer = setTimeout(settle, SCROLL_DURATION);
  return () => clearTimeout(timer);
};
