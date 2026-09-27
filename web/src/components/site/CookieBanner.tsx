"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

import { clearAnalyticsCookies, useConsent, writeConsent } from "@/lib/consent";

/**
 * Asks before anything that sets a cookie runs, and says where the policy is.
 *
 * Non-modal on purpose: the page stays usable and readable behind it, so the
 * visitor can read the policy it links to before deciding. The two answers are
 * the same size and weight — refusing must be as easy as agreeing, or the
 * choice is not a real one.
 */
export const CookieBanner = () => {
  const consent = useConsent();
  if (consent !== null) return null;

  const decline = () => {
    // Reopened from the footer after an earlier "yes": the counter is already
    // running in this page and has set its cookies. Clear what can be cleared
    // and reload, so the script is actually gone rather than merely unwanted.
    const counterRunning = typeof (window as { ym?: unknown }).ym === "function";
    writeConsent("denied");
    if (counterRunning) {
      clearAnalyticsCookies();
      window.location.reload();
    }
  };

  return (
    <section
      id="cookie-consent-banner"
      aria-label="Согласие на использование cookie"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-5"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--surface-foreground)] shadow-2xl sm:flex-row sm:items-center sm:gap-6 sm:p-5">
        <p className="text-sm leading-relaxed">
          Сайт использует сервисы Яндекса, которые устанавливают cookie: Метрику —
          чтобы понимать, как посетителям удобнее, — и карту в контактах. Они
          включатся только с вашего согласия. Подробнее — в{" "}
          <Link
            href="/privacy"
            className="font-medium text-[var(--accent)] underline underline-offset-4"
          >
            политике обработки персональных данных
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="secondary" className="flex-1 sm:flex-none" onPress={decline}>
            Отклонить
          </Button>
          <Button
            variant="secondary"
            className="flex-1 sm:flex-none"
            onPress={() => writeConsent("granted")}
          >
            Принять
          </Button>
        </div>
      </div>
    </section>
  );
};

/**
 * Brings the banner back, so consent can be withdrawn as easily as it was
 * given — a right the visitor has under 152-ФЗ, not a courtesy.
 */
export const CookieSettingsButton = ({ className = "" }: { className?: string }) => (
  <button
    type="button"
    onClick={() => writeConsent(null)}
    className={`cursor-pointer text-left underline-offset-4 transition-colors duration-200 hover:underline ${className}`}
  >
    Настройки cookie
  </button>
);
