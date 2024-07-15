import "../css/style.css";

const library = [
  {
    videoGame: "Marvel’s Spider-man",
    platform: ["PS4", "PS5", "ПК"],
    duration: "10 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "институт семьи",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "логическое мышление",
    ],
    picture: "SM1",
  },
  {
    videoGame: "Marvel’s Spider-man 2",
    platform: ["PS5"],
    duration: "12 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "институт семьи",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "работа с агрессией",
      "логическое мышление",
    ],
    picture: "SM2",
  },
  {
    videoGame: "The last of us part 1",
    platform: ["PS3", "PS4", "PS5", "ПК"],
    duration: "11 часов",
    type: "Одиночная",
    genre: "Приключенческий боевик",
    competencies: [
      "Институт семьи",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "суицидальные мысли",
    ],
    picture: "TLOU",
  },
  {
    videoGame: "FIFA",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Спортивный симулятор",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
    ],
    picture: "Fifa",
  },
  {
    videoGame: "NHL",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Спортивный симулятор",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
    ],
    picture: "NHL",
  },
  {
    videoGame: "NBA",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Спортивный симулятор",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
    ],
    picture: "NBA",
  },
  {
    videoGame: "Batman: Arkham Collection",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "7-16 часов",
    type: ["Одиночная"],
    genre: "Приключенческий боевик, Песочница",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "логическое мышление",
    ],
    picture: "BAT",
  },
  {
    videoGame: "Horizon Zero Dawn",
    platform: ["PS4", "PS5", "ПК"],
    duration: "12 часов",
    type: ["Одиночная"],
    genre: "Приключенческий боевик, Песочница",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "horizonzerodawn",
  },
  {
    videoGame: [
      "Crash Bandicoot N. Sane Trilogy",
      "Crash Bandicoot 4: It’s About duration",
    ],
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "2-6 часов",
    type: ["Одиночная"],
    genre: "Платформер",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "CB",
  },
  {
    videoGame: "Red Dead Redemption 2",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "50 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: "Приключенческий боевик, Песочница",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "вопросы преданности",
      "поиска своего места в жизни",
      "осмысленность своего бытия",
    ],
    picture: "RDR2",
  },
  {
    videoGame: "The Elder Scrolls V: Skyrim",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "12 часов",
    type: ["Одиночная"],
    genre: "RPG, Песочница",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
    ],
    picture: "SK",
  },
  {
    videoGame: "Ghost of Tsushima",
    platform: ["PS4", "PS5", "ПК"],
    duration: "28 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: "Приключенческий боевик, Песочница",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "вопросы преданности",
      "поиска своего места в жизни",
      "осмысленность своего бытия",
    ],
    picture: "GOT",
  },
  {
    videoGame:
      "Lego Games (более десятка игр по разным франшизам: Marvel, DC, Star Wars, Harry Potter)",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "5-10 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Аркада",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "Lego",
  },
  {
    videoGame: [
      "Spongebob Squarepants Battle for Bikini Bottom Rehydrated",
      "Spongebob Squarepants the Cosmic Shake",
    ],
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "6 часов",
    type: ["Одиночная"],
    genre: "Платформер",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "SB",
  },
  {
    videoGame:
      "Серия Assassin`s Creed (более 10 игр серии, действия которых разворачиваются в разных временных эпохах)",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "10-15 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Приключенческий боевик", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "вопросы преданности",
      "поиск своего места в жизни",
      "осмысленность своего бытия",
    ],
    picture: "AC",
  },
  {
    videoGame: "Серия игр Uncharted",
    platform: ["PS3", "PS4", "PS5", "ПК"],
    duration: "4-11 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Приключенческий боевик",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "поиск своего места в жизни",
      "осмысленность своего бытия",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "U",
  },
  {
    videoGame: "Infamous: Second son",
    platform: ["PS4", "PS5"],
    duration: "7 часов",
    type: "Одиночная",
    genre: "Приключенческий боевик",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "вопросы преданности",
      "поиск своего места в жизни",
      "осмысленность своего бытия",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "ISS",
  },
  {
    videoGame: "Spyro The Dragon: Reignited Trilogy",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "4-6 часов",
    type: "Одиночная",
    genre: "Платформер",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "ST",
  },
  {
    videoGame: "Серия игр Ratchet and Clank",
    platform: ["PS3", "PS4", "PS5", "ПК"],
    duration: "5-10 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Платформер"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "RaC",
  },
  {
    videoGame: "Хогвартс: Наследие",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "18 часов",
    type: "Одиночная",
    genre: ["RPG", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "вопросы преданности",
    ],
    picture: "HL",
  },
  {
    videoGame: "Days Gone",
    platform: ["PS4", "PS5", "ПК"],
    duration: "20 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "вопросы преданности",
    ],
    picture: "DG",
  },
  {
    videoGame: ["God of War", "God of War: Ragnarok"],
    platform: ["PS4", "PS5", "ПК"],
    duration: "15-30 часов",
    type: "Одиночная",
    genre: "Приключенческий боевик",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "вопросы преданности",
      "поиск своего места в жизни",
      "осмысленность своего бытия",
      "мужественность",
    ],
    picture: "GOW",
  },
  {
    videoGame: "Journey",
    platform: ["PS3", "PS4", "PS5", "ПК"],
    duration: "2 часа",
    type: ["Одиночная", "Мультиплеерная"],
    genre: "Приключения",
    competencies: "медитативная игра",
    picture: "J",
  },
  {
    videoGame: "Flower",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "2 часа",
    type: "Одиночная",
    genre: "Пазл",
    competencies: "медитативная игра",
    picture: "Fl",
  },
  {
    videoGame: "ABZU",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "2 часа",
    type: "Одиночная",
    genre: "Приключения",
    competencies: "медитативная игра",
    picture: "ABZU",
  },
  {
    videoGame: "Sonic Forces",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "3 часа",
    type: "Одиночная",
    genre: "Платформер",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "SF",
  },
  {
    videoGame: "Silent Hill: short message",
    platform: "PS5",
    duration: "2 часа",
    type: "Одиночная",
    genre: "Survival horror",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "проблемы в семье",
      "школьный буллинг",
      "социальные сети",
      "суицидальные мысли",
    ],
    picture: "SH",
  },
  {
    videoGame: "Minecraft",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная"],
    genre: "Песочница",
    competencies: [
      "Креативность",
      "абстрактное мышление",
      "творчество",
      "целеустремленность",
      "навыки планирования своих действий",
      "структурно-логическое мышление",
    ],
    picture: "Minecraft",
  },
  {
    videoGame: ["Injustice", "Injustice 2"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Файтинг",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
    ],
    picture: "Injustice",
  },
  {
    videoGame: "It takes two",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "10 часов",
    type: ["Мультиплеерная", "Split screen"],
    genre: "Приключенческий боевик",
    competencies: [
      "Институт семьи",
      "принятие последствий за собственные решения",
      "логическое мышление",
    ],
    picture: "ITT",
  },
  {
    videoGame: ["Fallout 3", "Fallout New Vegas", "Fallout 4", "Fallout 76"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "5-20 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["RPG", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "институт семьи",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "логическое мышление",
    ],
    picture: "Fallout",
  },
  {
    videoGame: "The Elder Scrolls IV: Oblivion",
    platform: ["PS3", "ПК", "Xbox"],
    duration: "6 часов",
    type: "Одиночная",
    genre: ["RPG", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
    ],
    picture: "ES4",
  },
  {
    videoGame: "The Elder Scrolls III: Morrowind",
    platform: ["ПК", "Xbox"],
    duration: "8 часов",
    type: "Одиночная",
    genre: ["RPG", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
    ],
    picture: "ES",
  },
  {
    videoGame: "Guardians of the Galaxy",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "13 часов",
    type: "Одиночная",
    genre: "Приключенческий боевик",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "институт семьи",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "логическое мышление",
    ],
    picture: "GOTG",
  },
  {
    videoGame: "Kena: Bridge of Spirits",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "7 часов",
    type: "Одиночная",
    genre: "Приключенческий боевик",
    competencies: [
      "Моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
    ],
    picture: "Kena",
  },
  {
    videoGame: "Teenage Mutant Ninja Turtles: Shredder's Revenge",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "2 часа",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Beat ’em up",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
    ],
    picture: "TMNT",
  },
  {
    videoGame: "Stray",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "5 часов",
    type: "Одиночная",
    genre: "Приключения",
    competencies: [
      "Мотивированность",
      "личностные компетенции",
      "моральная составляющая",
      "логическое мышление",
    ],
    picture: "Stray",
  },
  {
    videoGame: ["Star Wars Jedi: Fallen order", "Star Wars Jedi: Survivor"],
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "12-15 часов",
    type: "Одиночная",
    genre: "Приключенческий боевик",
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "работа с агрессией",
      "логическое мышление",
    ],
    picture: "SW",
  },
  {
    videoGame: "Super Mario Odyssey",
    platform: "Nintendo Switch",
    duration: "6 часов",
    type: "Одиночная",
    genre: "Платформер",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "SMO",
  },
  {
    videoGame: "Серия игр Marvel Ultimate Alliance",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "7-15 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Приключенческий боевик", "RPG"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
    ],
    picture: "MUA",
  },
  {
    videoGame: [
      "The Legend of Zelda: Tears of the Kingdom",
      "The Legend of Zelda: Breath of the Wild",
    ],
    platform: "Nintendo Switch",
    duration: "15 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Песочница"],
    competencies: [
      "Креативность",
      "абстрактное мышление",
      "творчество",
      "целеустремленность",
      "навыки планирования своих действий",
      "структурно-логическое мышление",
    ],
    picture: "Zelda",
  },
];

const displayVertical = (property) => {
  return Array.isArray(property)
    ? `<ul>${property.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : `<div>${property}</div>`;
};

const displayComma = (property) => {
  return Array.isArray(property)
    ? `<div>${property.map((item) => `<span> ${item}</span>`)}</div>`
    : `<div>${property}</div>`;
};

const table = (arr) => {
  const html = arr
    .map(
      (item, index) =>
        `<tr
          class="border-collapse ${index === arr.length - 1 ? "" : "border-b border-slate-700 dark:border-slate-300"} text-center"
        >
          <td class="px-6 py-2">
            <div class="flex flex-col justify-center items-center">
              <div class="mb-2">${item.videoGame}</div>
              <img
                class="max-w-60 rounded-md"
                src="/images/${item.picture}.jpg"
                alt=""
              />
            </div>
          </td>
          <td class="px-2 py-2 min-w-52"><div>${displayVertical(item.platform)}</div></td>
          <td class="px-2 py-2"><div>${item.duration}</div></td>
          <td class="px-2 py-2"><div>${displayVertical(item.type)}</div></td>
          <td class="px-2 py-2"><div>${displayVertical(item.genre)}</div></td>
          <td class="px-2 py-2">
            <div>
              ${displayComma(item.competencies)}
            </div>
          </td>
        </tr>`,
    )
    .join("");
  document.querySelector("tbody").innerHTML = html;
};

const minitable = (arr) => {
  const html = arr
    .map(
      (item) => `<div
      class="flex flex-col justify-center items-center pb-4 border-b border-slate-700 dark:border-slate-300"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="mb-2">${displayComma(item.videoGame)}</div>
        <img
          class="max-w-32 rounded-md"
          src="/images/${item.picture}.jpg"
          alt=""
        />
      </div>
      <div>${displayComma(item.platform)}</div>
      <div>${item.duration}</div>
      <div>${displayComma(item.type)}</div>
      <div>${displayComma(item.genre)}</div>
      <div class="pl-2 text-justify">
      ${displayComma(item.competencies)}
      </div>
    </div>`,
    )
    .join("");
  document.querySelector("#minitable").innerHTML = html;
};

window.addEventListener("load", table(library));
window.addEventListener("load", minitable(library));
