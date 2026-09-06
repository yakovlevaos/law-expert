import Link from "next/link";

import { TelegramIcon, VkIcon } from "@/components/icons";
import { ORG, PHONES, SOCIAL } from "@/data/site";
import type { NavItem } from "@/components/site/SiteHeader";

type Props = {
  links: readonly NavItem[];
  phones?: { tel: string; label: string }[];
  /** The VKontakte community differs per page; Telegram is one channel for
   *  the whole site, so it is not configurable. */
  vkHref?: string;
};

export const SiteFooter = ({
  links,
  phones = [PHONES.general, PHONES.director],
  vkHref = SOCIAL.vkPersonal,
}: Props) => (
  <footer className="mt-12 bg-[var(--chrome)] text-[var(--chrome-foreground)]">
    <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
      <div className="text-sm leading-relaxed text-[var(--chrome-muted)]">
        <p className="font-semibold text-[var(--chrome-foreground)]">{ORG.shortName}</p>
        <p>ОГРН {ORG.ogrn}</p>
        <p>ИНН {ORG.inn}</p>
        <p>КПП {ORG.kpp}</p>
      </div>

      <nav aria-label="Навигация в подвале">
        <ul className="flex flex-col gap-2 text-sm">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[var(--chrome-foreground)] underline-offset-4 transition-colors duration-200 hover:underline"
              >
                {item.labelLong ?? item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-3 text-sm sm:col-span-2 lg:col-span-1">
        {phones.map((phone) => (
          <a
            key={phone.tel}
            href={`tel:${phone.tel}`}
            className="whitespace-nowrap transition-colors duration-200 hover:underline"
          >
            {phone.label}
          </a>
        ))}
        <div className="flex items-center gap-1">
          <a
            href={vkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-11 place-items-center rounded-md text-[var(--chrome-muted)] transition-colors duration-200 hover:text-white"
            aria-label="ВКонтакте (откроется в новой вкладке)"
          >
            <VkIcon className="size-6" />
          </a>
          <a
            href={SOCIAL.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-11 place-items-center rounded-md text-[var(--chrome-muted)] transition-colors duration-200 hover:text-white"
            aria-label="Telegram (откроется в новой вкладке)"
          >
            <TelegramIcon className="size-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
