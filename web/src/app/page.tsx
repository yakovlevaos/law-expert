import Image from "next/image";

import { ExpertsRail } from "@/components/home/ExpertsRail";
import { ProjectCard } from "@/components/home/ProjectCard";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { VideoCarousel } from "@/components/home/VideoCarousel";
import { Contacts } from "@/components/site/Contacts";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Section } from "@/components/ui/Section";
import { EXPERTS } from "@/data/experts";
import { PROJECTS } from "@/data/projects";
import {
  ABOUT_GOALS,
  COURT_EXPERTISE,
  FOUNDING_DOCUMENTS,
  HOME_NAV,
  ORG,
} from "@/data/site";

const FOOTER_LINKS = [
  { href: "#about", label: "О нас" },
  { href: "#team", label: "Специалисты" },
  { href: "#contacts", label: "Контакты" },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader nav={HOME_NAV} />

      <main id="content">
        {/* Hero. The old banner was desktop-only, so phones opened on a bare
            heading; here the image is the background at every width. */}
        <section className="relative isolate flex min-h-[46vh] items-center overflow-hidden sm:min-h-[56vh]">
          <Image
            src="/img/banner.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-slate-950/65" />
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">
              Красноярск
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
              {ORG.fullName}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
              {ORG.legalForm}. Судебно-психологическая экспертиза, диагностика,
              коррекция и медиация для детей, подростков и их семей.
            </p>
          </div>
        </section>

        <Section
          id="court-expertise"
          title="Судебно-психологическая экспертиза"
          lead="Основные направления работы центра."
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,420px)]">
            <ul className="flex flex-col gap-4">
              {COURT_EXPERTISE.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-[var(--accent)] pl-4 text-lg font-semibold text-balance sm:text-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Image
              src="/img/court-expertise.jpg"
              alt=""
              width={840}
              height={560}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </Section>

        <Section id="services" title="Другие услуги центра" band>
          <ServicesGrid />
        </Section>

        <Section
          id="team"
          title="Специалисты"
          lead="Педагоги-психологи, эксперты и логопеды центра."
        >
          <ExpertsRail experts={EXPERTS} />
        </Section>

        <Section id="projects" title="Проекты" band>
          <div className="flex flex-col gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                isMirrored={index % 2 === 1}
              />
            ))}
          </div>
        </Section>

        <Section id="video" title="Видео">
          <VideoCarousel />
        </Section>

        <Section id="about" title="О нас" band>
          <div className="max-w-(--container-prose) text-base leading-relaxed">
            <p className="font-semibold">{ORG.legalForm}</p>
            <p className="mt-3">
              Центр «Генезис» организован 4 октября 2022 года. Обучение и
              воспитание в центре ведутся на русском языке.
            </p>
          </div>

          <h3 className="mt-10 text-xl font-bold">Цели деятельности организации</h3>
          <ul className="mt-5 grid gap-6 md:grid-cols-3">
            {ABOUT_GOALS.map((goal) => (
              <li
                key={goal.image}
                className="flex flex-col gap-4 rounded-xl bg-[var(--surface)] p-5"
              >
                <Image
                  src={goal.image}
                  alt=""
                  width={480}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="aspect-square w-full rounded-lg object-contain"
                />
                <p className="text-sm leading-relaxed">{goal.text}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-xl font-bold">Учредительные документы</h3>
          <ul className="mt-5 flex flex-wrap gap-6">
            {FOUNDING_DOCUMENTS.map((doc) => (
              <li key={doc.pdf}>
                <a
                  href={doc.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 text-sm"
                >
                  <Image
                    src={doc.cover}
                    alt=""
                    width={160}
                    height={220}
                    className="h-44 w-auto rounded-md border border-[var(--border)] object-cover transition-opacity duration-200 group-hover:opacity-90"
                  />
                  <span className="text-[var(--accent)] underline-offset-4 group-hover:underline">
                    {doc.title}, PDF
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contacts" title="Контакты">
          <Contacts />
        </Section>
      </main>

      <SiteFooter links={FOOTER_LINKS} />
    </>
  );
}
