/**
 * Organisation-wide facts and contact details, shared by every page.
 * All user-facing copy on this site is Russian — keep it that way.
 */

export const ORG = {
  shortName: "АНОДО «Генезис»",
  fullName: "Центр психолого-педагогического сопровождения «Генезис»",
  legalForm: "Автономная некоммерческая организация дополнительного образования",
  ogrn: "1222400024241",
  inn: "2464160079",
  kpp: "246401001",
  address: "г. Красноярск, улица 60 лет Октября, 102",
  siteUrl: "https://genesis-expert.ru",
} as const;

export const PHONES = {
  general: { tel: "+79029272400", label: "+7 902 927-24-00" },
  director: { tel: "+79504062612", label: "+7 950 406-26-12" },
  office: { tel: "+79509815481", label: "+7 950 981-54-81" },
  gameCentre: { tel: "+79831992391", label: "+7 983 199-23-91" },
} as const;

export const SOCIAL = {
  vk: "https://vk.com/genesiskrsk",
  vkPersonal: "https://vk.com/dmitryurk",
  vkGameLib: "https://vk.com/icv24",
  telegram: "https://t.me/genesiskrsk",
} as const;

export type ContactBlock = {
  heading: string;
  lines: string[];
};

export const CONTACTS: ContactBlock[] = [
  {
    heading: "Адрес",
    lines: [ORG.address],
  },
  {
    heading: "Делопроизводство",
    lines: [PHONES.office.label, "Куницина Екатерина"],
  },
  {
    heading: "По общим вопросам",
    lines: [PHONES.general.label, "Юрков Дмитрий", "genesisexpert@yandex.ru"],
  },
  {
    heading: "Директор",
    lines: ["Милованова Екатерина", PHONES.director.label, "genesiskrsk@yandex.ru"],
  },
  {
    heading: "Руководитель центра игровой поддержки",
    lines: ["Седых Анастасия"],
  },
];

/** Yandex.Maps embed for the office, reused on both pages that show contacts. */
export const MAP_EMBED_URL =
  "https://yandex.ru/map-widget/v1/?from=mapframe&ll=92.879197%2C55.979485&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjQyMTI0OBJM0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7Rj9GA0YHQuiwg0YPQu9C40YbQsCA2MCDQu9C10YIg0J7QutGC0Y_QsdGA0Y8sIDEwMiIKDSfCuUIV_upfQg%2C%2C&source=mapframe&utm_source=mapframe&z=16.78";

export const HOME_NAV = [
  { href: "#court-expertise", label: "Экспертиза", labelLong: "Судебно-психологическая экспертиза" },
  { href: "#services", label: "Услуги" },
  { href: "#team", label: "Специалисты" },
  { href: "#projects", label: "Проекты" },
  { href: "#video", label: "Видео" },
  { href: "#about", label: "О нас" },
  { href: "#contacts", label: "Контакты" },
] as const;

export const GAME_NAV = [
  { href: "#method", label: "Методика" },
  { href: "#authors", label: "Специалисты" },
  { href: "/gamelib", label: "Библиотека игр" },
  { href: "#contacts", label: "Контакты" },
] as const;

/** Main directions of forensic psychological assessment, shown on the home page. */
export const COURT_EXPERTISE = [
  "Оценка детско-родительских отношений",
  "Психолого-педагогическая экспертиза ребенка при разводе родителей",
  "Комплексная психолого-педагогическая экспертиза несовершеннолетних лиц",
  "Заключение на психолого-педагогическую экспертизу",
];

export const ABOUT_GOALS = [
  {
    image: "/img/edu-help-1.jpg",
    text: "предоставление психолого-педагогических и социальных услуг обучающимся, испытывающим трудности в освоении основных общеобразовательных программ, развитие и социальная адаптация",
  },
  {
    image: "/img/edu-help-2.jpg",
    text: "помощь организациям, осуществляющим образовательную деятельность по вопросам реализации основных общеобразовательных программ, осуществление образовательной деятельности",
  },
  {
    image: "/img/edu-help-3.jpg",
    text: "предоставление консультационных и просветительских услуг, направленных на формирование высокого профессионального уровня и высокой степени квалификации специалистов-психологов, а также профессиональную ориентацию потенциальных специалистов-психологов",
  },
];

export const FOUNDING_DOCUMENTS = [
  { title: "Свидетельство", pdf: "/docs/certificate.pdf", cover: "/img/certificate.jpeg" },
  { title: "Устав", pdf: "/docs/charter.pdf", cover: "/img/charter.jpg" },
];
