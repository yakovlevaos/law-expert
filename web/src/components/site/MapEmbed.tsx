"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

import { MapPinIcon } from "@/components/icons";
import { MAP_EMBED_URL, MAP_OPEN_URL, ORG } from "@/data/site";
import { useConsent } from "@/lib/consent";

/**
 * The Yandex map, framed only once the visitor has agreed to it.
 *
 * Measured on a fresh visit with no answer given on the cookie banner: merely
 * scrolling to the contacts let the lazy iframe load and set nine cookies on
 * yandex.ru and yandex.com — yandexuid, _yasc, i, bh and more — and start an
 * ad-exchange user-sync chain. Those are the "unrecognised" cookies an audit
 * reported, so gating Metrika alone would not have cleared it.
 *
 * So the map loads if the visitor has accepted cookies, or when they press
 * "Показать карту", which is itself the consent for this one embed. Until then
 * a still panel says where the centre is and links out to Yandex Maps in a new
 * tab, which sets nothing on this site. The same approach as the VK videos.
 */
export const MapEmbed = () => {
  const consent = useConsent();
  const [isRequested, setIsRequested] = useState(false);
  const showMap = isRequested || consent === "granted";

  return (
    <div className="min-h-[320px] overflow-hidden rounded-lg border border-[var(--border)]">
      {showMap ? (
        <iframe
          src={MAP_EMBED_URL}
          title="Центр «Генезис» на карте Красноярска"
          loading="lazy"
          className="size-full min-h-[320px] border-0"
        />
      ) : (
        <div className="grid size-full min-h-[320px] place-items-center bg-[var(--surface-secondary)] p-6 text-center">
          <div className="flex max-w-sm flex-col items-center gap-3">
            <MapPinIcon className="size-9 text-[var(--accent)]" />
            <p className="font-semibold text-balance">{ORG.address}</p>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Карта загружается с серверов Яндекса и устанавливает их cookie,
              поэтому показывается по нажатию.
            </p>
            <div className="mt-1 flex flex-wrap justify-center gap-2">
              <Button variant="secondary" onPress={() => setIsRequested(true)}>
                Показать карту
              </Button>
              <a
                href={MAP_OPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full px-4 text-sm font-medium text-[var(--accent)] underline underline-offset-4"
              >
                Открыть в Яндекс.Картах
                <span className="sr-only"> (откроется в новой вкладке)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
