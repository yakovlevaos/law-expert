"use client";

import Script from "next/script";

import { useConsent } from "@/lib/consent";

/**
 * Yandex.Metrika counter, loaded only once the visitor has accepted cookies.
 *
 * It used to load on every page view, and an audit caught it setting its
 * cookies (`_ym_uid`, `_ym_d`, `_ym_isad`, `_ym_visorc` and more on yandex.ru)
 * before the visitor had been asked anything. Metrika's cookies are analytics,
 * not strictly necessary, so they wait for consent.
 *
 * There is deliberately no `<noscript>` tracking pixel any more. A visitor
 * without JavaScript cannot reach the banner to say yes, so a pixel that fires
 * for them would be tracking without any possibility of consent.
 *
 * Still rendered only when an id is configured, so local development and
 * previews do not report into the production counter.
 */
export const YandexMetrika = () => {
  const consent = useConsent();
  const counterId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
  if (!counterId || consent !== "granted") return null;

  return (
    <Script id="yandex-metrika" strategy="afterInteractive">
      {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(${Number(counterId)}, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});`}
    </Script>
  );
};
