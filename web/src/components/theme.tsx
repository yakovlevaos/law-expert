"use client";

import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "@/components/icons";

/**
 * Same localStorage key the previous site used, so a visitor who already chose
 * a theme keeps it after the rewrite.
 */
export const THEME_STORAGE_KEY = "dark-mode";

/**
 * Runs before first paint to stamp `data-theme` on <html>. Inlined in <head>
 * rather than done in an effect: doing it in React would let the light theme
 * paint first and flash.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s===null?window.matchMedia("(prefers-color-scheme: dark)").matches:s==="true";document.documentElement.dataset.theme=d?"dark":"light";}catch(e){document.documentElement.dataset.theme="light";}})();`;

export const ThemeToggle = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false);
  // The server cannot know the stored preference, so the control renders in a
  // neutral state until the client has read it.
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.dataset.theme === "dark");
    setIsReady(true);
  }, []);

  const apply = (dark: boolean) => {
    setIsDark(dark);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem(THEME_STORAGE_KEY, String(dark));
    } catch {
      // Private mode or blocked storage: the theme still applies for this visit.
    }
  };

  return (
    /*
      A plain icon control rather than a switch: the icon already says which
      theme is on offer, and a track and thumb beside it said the same thing
      twice. 44px hit area around a 20px mark.
    */
    <button
      type="button"
      onClick={() => apply(!isDark)}
      className={`grid size-10 cursor-pointer place-items-center rounded-md sm:size-11 text-[var(--chrome-muted)] transition-colors duration-200 hover:text-white ${className ?? ""}`}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      aria-pressed={isReady ? isDark : undefined}
    >
      {isReady && isDark ? (
        <MoonIcon className="size-5" />
      ) : (
        <SunIcon className="size-5" />
      )}
    </button>
  );
};
