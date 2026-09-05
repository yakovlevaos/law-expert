"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

import { ArrowUpIcon } from "@/components/icons";

/**
 * The old site pinned this control permanently, including at the very top of
 * the page where it does nothing. It now appears only once there is something
 * to scroll back to.
 */
export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      variant="secondary"
      isIconOnly
      className="fixed bottom-4 right-4 z-20 size-11 rounded-full shadow-lg"
      aria-label="Наверх"
      onPress={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
    >
      <ArrowUpIcon className="size-6" />
    </Button>
  );
};
