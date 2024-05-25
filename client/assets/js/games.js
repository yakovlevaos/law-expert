import "../css/style.css";

const library = [
  {
    gameName: "Marvel’s Spider-man",
    picture: "SM1",
    console: "PS4, PS5, ПК",
    time: "10 часов",
    description:
      "Личностные компетенции, моральная составляющая, институт семьи, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, логическое мышление",
  },
  {
    gameName: "Marvel’s Spider-man 2",
    picture: "SM2",
    console: "PS5",
    time: "12 часов",
    description:
      "Личностные компетенции, моральная составляющая, институт семьи, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, работа с агрессией, логическое мышление",
  },
  {
    gameName: "The last of us part 1",
    picture: "TLOU",
    console: "PS4, PS5, ПК",
    time: "11 часов",
    description:
      "Институт семьи, принятие последствий за собственные решения, логическое мышление",
  },
  {
    gameName: "FIFA",
    picture: "FIFA",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "∞",
    description:
      "Мотивированность, настрой на победу, принятие поражений, умение работать в команде, тактическое мышление",
  },
  {
    gameName: "NHL",
    picture: "NHL",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "∞",
    description:
      "Мотивированность, настрой на победу, принятие поражений, умение работать в команде, тактическое мышление",
  },
  {
    gameName: "NBA",
    picture: "NBA",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "∞",
    description:
      "Мотивированность, настрой на победу, принятие поражений, умение работать в команде, тактическое мышление",
  },
  {
    gameName: "Batman: Arkham collection (3 игры)",
    picture: "BAT",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "1. 7 часов <br/> 2. 7 часов <br/> 3. 16 часов",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, логическое мышление",
  },
  {
    gameName: "Horizon zero dawn",
    picture: "horizonzerodawn",
    console: "PS4, PS5, ПК",
    time: "12 часов",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, логическое мышление, тактическое мышление",
  },
  {
    gameName:
      "Crash Bandicoot N. Sane Trilogy,  <br/> Crash Bandicoot 4: It’s about time",
    picture: "CB",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "1. 2 часа<br/> 2. 3 часа<br/>3. 4 часа<br/> 4. 6 часов",
    description:
      "Мотивированность, настрой на победу, принятие поражений, логическое мышление",
  },
  {
    gameName: "Red Dead Redemption 2",
    picture: "RDR2",
    console: "PS4, PS5, ПК, Xbox",
    time: "50 часов",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, вопросы преданности, поиска своего места в жизни, осмысленность своего бытия",
  },
  {
    gameName: "The Elder Scrolls V: Skyrim",
    picture: "SK",
    console: "PS3, PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "12 часов",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения",
  },
  {
    gameName: "Ghost of Tsushima",
    picture: "GOT",
    console: "PS4, PS5, ПК",
    time: "28 часов",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, вопросы преданности, поиска своего места в жизни, осмысленность своего бытия",
  },
  {
    gameName:
      "Lego Games (более десятка игр по разным франшизам: Marvel, DC, Star Wars, Harry Potter)",
    picture: "Lego",
    console: "PS3, PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "5-10 часов каждая",
    description:
      "Мотивированность, настрой на победу, принятие поражений, логическое мышление",
  },
  {
    gameName:
      "Spongebob Squarepants Battle for Bikini Bottom Rehydrated, Spongebob Squarepants the cosmic shake",
    picture: "SB",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "1. 6 часов<br/> 2. 6 часов",
    description:
      "Мотивированность, настрой на победу, принятие поражений, логическое мышление",
  },
  {
    gameName:
      "Серия Assassin`s Creed (более 10 игр серии, действия которых разворачиваются в разных временных эпохах)",
    picture: "AC",
    console: "PS3, PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "Не менее 10 часов",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, вопросы преданности, поиска своего места в жизни, осмысленность своего бытия",
  },
  {
    gameName: " Серия игр Uncharted",
    picture: "U",
    console: "PS3, PS4, PS5, ПК ",
    time: "4-11 часов",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, поиска своего места в жизни, осмысленность своего бытия, логическое мышление, тактическое мышление",
  },
  {
    gameName: "Infamous: Second son",
    picture: "ISS",
    console: "PS4, PS5",
    time: "7 часов",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, вопросы преданности, поиска своего места в жизни, осмысленность своего бытия, логическое мышление, тактическое мышление",
  },
  {
    gameName: "Spyro The Dragon: Reignited Trilogy",
    picture: "ST",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "15 часов<br/>(общее время за 3 части)",
    description:
      "Мотивированность, настрой на победу, принятие поражений, логическое мышление",
  },
  {
    gameName: "Серия игр Ratchet and Clank",
    picture: "RaC",
    console: "PS3, PS4, PS5, ПК",
    time: "",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, логическое мышление, тактическое мышление",
  },
  {
    gameName: "Хогвартс: Наследие ",
    picture: "HL",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "18 часов",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, вопросы преданности",
  },
  {
    gameName: "Days Gone",
    picture: "DG",
    console: "PS4, PS5, ПК",
    time: "20 часов",
    description:
      "Личностные компетенции, моральная составляющая, принятие последствий за собственные решения, работа с потерей близких, вопросы преданности",
  },
  {
    gameName: "God of War,<br/>God of War: Ragnarok ",
    picture: "GOW",
    console: "PS4, PS5, ПК",
    time: "1. 16 часов<br/>2. 30 часов ",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, вопросы преданности, поиска своего места в жизни, осмысленность своего бытия, мужественность",
  },
  {
    gameName: "Journey",
    picture: "J",
    console: "PS3, PS4, PS5, ПК",
    time: "2 часа",
    description: "Медиативная игра",
  },
  {
    gameName: "Flower",
    picture: "Fl",
    console: "PS3, PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "2 часа",
    description: "Медиативная игра",
  },
  {
    gameName: "ABZU",
    picture: "ABZU",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "2 часа",
    description: "Медиативная игра",
  },
  {
    gameName: "Sonic Forces",
    picture: "SF",
    console: "PS4, PS5, ПК, Xbox, Nintendo Switch",
    time: "3 часа",
    description:
      "Мотивированность, настрой на победу, принятие поражений, логическое мышление",
  },
  {
    gameName: "Silent Hill: short message",
    picture: "SH",
    console: "PS5 ",
    time: "2 часа",
    description:
      "Личностные компетенции, моральная составляющая, работа с ответственностью, принятие последствий за собственные решения, работа с потерей близких, проблемы в семье, школьный буллинг, социальные сети, суицидальные мысли",
  },
];

const table = (arr) => {
  const html = arr
    .map(
      (item, index) =>
        `<tr
          class="border-collapse ${index === arr.length - 1 ? "" : "border-b border-slate-700 dark:border-slate-300"} text-center"
        >
          <td class="px-6 py-2">
            <div class="flex flex-col justify-center items-center">
              <div class="mb-2">${item.gameName}</div>
              <img
                class="max-w-60 rounded-md"
                src="/images/${item.picture}.jpg"
                alt=""
              />
            </div>
          </td>
          <td class="px-6 py-2 min-w-52"><div>${item.console}</div></td>
          <td class="px-6 py-2"><div>${item.time}</div></td>
          <td class="px-6 py-2">
            <div>
              ${item.description}
            </div>
          </td>
        </tr>`
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
        <div class="mb-2">${item.gameName}</div>
        <img
          class="max-w-32 rounded-md"
          src="/images/${item.picture}.jpg"
          alt=""
        />
      </div>
      <div>${item.console}</div>
      <div>${item.time}</div>
      <div>
      ${item.description}
      </div>
    </div>`
    )
    .join("");
  document.querySelector("#minitable").innerHTML = html;
};

window.addEventListener("load", table(library));
window.addEventListener("load", minitable(library));
