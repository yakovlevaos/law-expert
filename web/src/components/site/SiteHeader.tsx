import Image from "next/image";
import Link from "next/link";

import { GamepadIcon, TelegramIcon, VkIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme";
import { PHONES, SOCIAL } from "@/data/site";

export type NavItem = {
  href: string;
  label: string;
  /** Longer wording used where there is room for it. */
  labelLong?: string;
};

type Props = {
  nav: readonly NavItem[];
  /** Where the logo links to — the game pages point back at the home page. */
  homeHref?: string;
  phones?: { tel: string; label: string }[];
  /** Shown on the right of the bar; the game centre logo links to /game. */
  showGameCentreLink?: boolean;
  gameCentreHref?: string;
};

export const SiteHeader = ({
  nav,
  homeHref = "/",
  phones = [PHONES.general, PHONES.director],
  showGameCentreLink = true,
  gameCentreHref = "/game",
}: Props) => (
  <header className="sticky top-0 z-30 bg-[var(--chrome)] text-[var(--chrome-foreground)] shadow-sm">
    <div className="mx-auto flex max-w-[1600px] items-center gap-1.5 px-2 py-2 sm:gap-4 sm:px-5">
      <Link
        href={homeHref}
        className="shrink-0 transition-opacity hover:opacity-80"
        aria-label="Центр «Генезис» — на главную"
      >
        <Image
          src="/img/genesis-logo.png"
          alt=""
          width={80}
          height={80}
          priority
          className="h-9 w-auto sm:h-11 lg:h-14"
        />
      </Link>

      {/* The game centre's wordmark is 136px wide and cannot ride in a phone's
          bar, but it is the customer's second entrance and has to stay
          reachable. Below `sm` it becomes this icon, next to the site logo
          where the eye already is. */}
      {showGameCentreLink && (
        <Link
          href={gameCentreHref}
          className="grid size-10 shrink-0 place-items-center rounded-md text-[var(--chrome-muted)] transition-colors duration-200 hover:text-white sm:hidden"
          aria-label="Центр игровой психологической поддержки"
        >
          <GamepadIcon className="size-6" />
        </Link>
      )}

      <nav aria-label="Основная навигация" className="hidden min-w-0 flex-1 lg:block">
        <ul className="flex items-center gap-x-4 text-sm whitespace-nowrap xl:gap-x-6 xl:text-base">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[var(--chrome-foreground)] underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="ml-auto flex items-center gap-1.5 sm:gap-4">
        {showGameCentreLink && (
          <Link
            href={gameCentreHref}
            /* Below `sm` the bar cannot hold this wordmark, a phone number and
               the icons at once; the gamepad icon beside the site logo stands
               in for it there. It used to be a text link at the tail of the
               scrollable rail, which nobody scrolled far enough to find. */
            className="hidden shrink-0 transition-opacity hover:opacity-80 sm:block"
            aria-label="Центр игровой психологической поддержки"
          >
            <Image
              src="/img/game-centre-logo.png"
              alt=""
              width={200}
              height={80}
              className="h-8 w-auto sm:h-10 lg:h-12"
            />
          </Link>
        )}

        {/* Calling is the main action on a phone, so the first number stays
            visible at every width; the rest appear once there is room. */}
        <div className="flex flex-col text-sm leading-tight">
          {phones.map((phone, index) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className={`tracking-tight whitespace-nowrap py-0.5 text-[var(--chrome-foreground)] transition-colors duration-200 hover:text-white sm:tracking-normal ${
                index === 0 ? "" : "hidden sm:block"
              }`}
            >
              {phone.label}
            </a>
          ))}
        </div>

        {/* Measured, not guessed. Everything visible — logo, games icon, phone
            number, both social links and the theme toggle — needs 360px of the
            375px an iPhone SE gives, so VKontakte appears from 360px and
            Telegram from 375px, which covers every current iPhone. Games come
            first because they are the entrance the customer asked to keep;
            both social links are also in the footer at any width.

            The room for that last icon comes from the bar itself below `sm`:
            8px side padding instead of 12, 6px gaps instead of 8, and tighter
            letter-spacing on the phone number. Nothing shrinks the tap targets,
            which stay at 40px — above the 24px WCAG minimum — and everything
            reverts at `sm`. */}
        <div className="flex items-center gap-1">
          <a
            href={SOCIAL.vk}
            target="_blank"
            rel="noopener noreferrer"
            /* 44px hit area — the bare 16px logos of the old header were below
               the minimum touch target. */
            className="hidden size-10 place-items-center rounded-md text-[var(--chrome-muted)] transition-colors duration-200 hover:text-white min-[360px]:grid sm:size-11"
            aria-label="Сообщество во ВКонтакте (откроется в новой вкладке)"
          >
            <VkIcon className="size-6" />
          </a>
          <a
            href={SOCIAL.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden size-10 place-items-center rounded-md text-[var(--chrome-muted)] transition-colors duration-200 hover:text-white min-[375px]:grid sm:size-11"
            aria-label="Канал в Telegram (откроется в новой вкладке)"
          >
            <TelegramIcon className="size-6" />
          </a>
        </div>

        <ThemeToggle />
      </div>
    </div>

    {/*
      The previous header hid every navigation link below the `md` breakpoint,
      leaving phone visitors with no way to reach a section. On small screens
      the same links become a scrollable rail instead of disappearing.
    */}
    <nav
      aria-label="Разделы страницы"
      className="border-t border-white/10 lg:hidden"
    >
      <ul className="flex gap-1 overflow-x-auto px-2 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {nav.map((item) => (
          <li key={item.href} className="shrink-0">
            <Link
              href={item.href}
              className="block whitespace-nowrap rounded-md px-3 py-2 text-sm text-[var(--chrome-muted)] transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
