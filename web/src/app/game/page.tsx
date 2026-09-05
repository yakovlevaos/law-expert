import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExpertsRail } from "@/components/home/ExpertsRail";
import { Contacts } from "@/components/site/Contacts";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Section } from "@/components/ui/Section";
import { Surface } from "@/components/ui/Surface";
import { GAME_EXPERTS } from "@/data/experts";
import { METHOD_GOALS } from "@/data/gamelib";
import { GAME_NAV, PHONES } from "@/data/site";

export const metadata: Metadata = {
  title: "Центр психологического гейминга",
  description:
    "Центр игровой психологической поддержки: консультирование подростков с помощью видеоигр — методика, специалисты и библиотека игр.",
};

const FOOTER_LINKS = [
  { href: "#method", label: "Методика" },
  { href: "#authors", label: "Специалисты" },
  { href: "/gamelib", label: "Библиотека игр" },
  { href: "#contacts", label: "Контакты" },
];

export default function GamePage() {
  return (
    <>
      <SiteHeader
        nav={GAME_NAV}
        phones={[PHONES.general, PHONES.gameCentre]}
        showGameCentreLink={false}
      />

      <main id="content">
        <section className="relative isolate flex min-h-[42vh] items-center overflow-hidden sm:min-h-[54vh]">
          <Image
            src="/img/game-banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-slate-950/65" />
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16">
            <h1 className="max-w-3xl text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
              Центр игровой психологической поддержки
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
              Консультирование с аспектами игровой деятельности — видеоигр как
              инструмента работы с подростком.
            </p>
            <Link
              href="/gamelib"
              className="mt-6 inline-flex h-11 items-center rounded-lg bg-[var(--accent)] px-5 font-medium text-[var(--accent-foreground)] transition-opacity duration-200 hover:opacity-90"
            >
              Открыть библиотеку игр
            </Link>
          </div>
        </section>

        <Section
          id="method"
          title="Методика"
          lead="Преимущество методики заключается в заинтересованности подростков в консультациях. Создается комфортная и безопасная среда, что позволяет эффективно работать и решать трудности и проблемы подростка."
        >
          <h3 className="text-2xl font-bold sm:text-3xl">
            Задачи, которые решает методика
          </h3>
          {/*
            The page's case for the method, so it is given weight: numbered,
            set larger than body copy, and each carrying an accent mark, rather
            than reading as five more paragraphs.
          */}
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {METHOD_GOALS.map((goal, index) => (
              <Surface
                key={goal}
                as="li"
                className="flex items-start gap-4 border-l-4 border-[var(--accent)] p-6"
              >
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-lg font-bold text-[var(--accent-foreground)]"
                >
                  {index + 1}
                </span>
                <span className="text-lg leading-snug font-semibold text-balance">
                  {goal}
                </span>
              </Surface>
            ))}
          </ol>
        </Section>

        <Section id="authors" title="Специалисты" band>
          <div className="max-w-[820px]">
            <ExpertsRail experts={GAME_EXPERTS} />
          </div>
        </Section>

        <Section id="contacts" title="Контакты">
          <Contacts />
        </Section>
      </main>

      <SiteFooter
        links={FOOTER_LINKS}
        phones={[PHONES.general, PHONES.gameCentre]}
        showTelegram={false}
      />
    </>
  );
}
