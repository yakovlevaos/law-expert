"use client";

import { useSyncExternalStore } from "react";

/**
 * The visitor's answer to the cookie banner.
 *
 * Kept the way the theme choice is kept — in localStorage, not a cookie, so
 * remembering "no cookies" does not itself need one — and announced on change,
 * so the banner and the analytics counter follow each other without a reload.
 *
 * `null` means the visitor has not chosen yet. Nothing that sets a cookie may
 * run in that state: the audit that prompted this found Yandex.Metrika setting
 * seven cookies on first load, before any choice had been offered.
 */
export type Consent = "granted" | "denied";

export const CONSENT_STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";

/**
 * Runs in <head> before paint, like the theme script, and marks <html> with
 * the stored answer. The banner is in the server-rendered HTML for everyone —
 * so scanners that only read the static page can see it, and it shows before
 * JavaScript arrives — and a CSS rule on this attribute hides it at once for
 * visitors who have already answered, instead of flashing it at them.
 */
export const CONSENT_INIT_SCRIPT = `(function(){try{var c=localStorage.getItem("${CONSENT_STORAGE_KEY}");if(c==="granted"||c==="denied")document.documentElement.dataset.cookieConsent=c;}catch(e){}})();`;

export const readConsent = (): Consent | null => {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    // Storage blocked (private mode, strict settings): treat as undecided, which
    // keeps analytics off — the safe side to fail on.
    return null;
  }
};

export const writeConsent = (value: Consent | null) => {
  if (value === null) delete document.documentElement.dataset.cookieConsent;
  else document.documentElement.dataset.cookieConsent = value;
  try {
    if (value === null) localStorage.removeItem(CONSENT_STORAGE_KEY);
    else localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // Nothing to persist into; the in-page state still updates below.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

const subscribe = (onChange: () => void) => {
  window.addEventListener(CHANGE_EVENT, onChange);
  // A choice made in another tab applies here too.
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
};

/**
 * The current choice, or `null` while none has been made.
 *
 * The server cannot see localStorage, so it renders as though nothing had
 * been chosen: the banner is in the HTML and nothing that sets a cookie is.
 * React then re-renders with the stored answer straight after hydration, and
 * CONSENT_INIT_SCRIPT has already hidden the banner by then for anyone who
 * answered on an earlier visit.
 */
export const useConsent = (): Consent | null =>
  useSyncExternalStore(subscribe, readConsent, () => null);

/**
 * Removes the first-party cookies Metrika sets on this domain. Its cookies on
 * yandex.ru domains cannot be reached from here; the policy page tells the
 * visitor how to clear those in the browser.
 */
export const clearAnalyticsCookies = () => {
  const { hostname } = window.location;
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0]?.trim();
    if (!name?.startsWith("_ym")) continue;
    // A cookie is only removed by a write that matches the domain it was set
    // with, which is not visible from script — so try each form it can take.
    for (const domain of ["", `; domain=${hostname}`, `; domain=.${hostname}`]) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  }
};
