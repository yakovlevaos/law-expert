import "../css/style.css";
import { initModal } from "./modal.js";

const library = [
  {
    index: 0,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 1,
    videoGame: "Серия игр Devil May Cry 1-5",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "10 часов",
    type: "Одиночная",
    genre: "Hack and slash",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "личностные компетенции",
      "моральная составляющая",
      "работа с агрессией",
      "институт семьи",
    ],
    picture: "DMC",
    detailedDescription:
      "Серия игр повествующая о противостоянии нашего мира с демонами. Основными действующими серии являются 2 сына демона Спарды и земной женщины: Данте и Вергилий, а также полудемон Неро. Геймплей выстраивается вокруг эффектных и зрелищных боев. За наиболее сложные и длинные боевые комбинации выбивается более высокий оценочный ранг. По итогам каждого уровня вашему прохождению присуждается оценка, основанная на различных факторах. ",
    screenshots: [],
  },
  {
    index: 2,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 3,
    videoGame: "The last of us part 1",
    platform: ["PS3", "PS4", "PS5", "ПК"],
    duration: "11 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Институт семьи",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "суицидальные мысли",
    ],
    picture: "TLOU",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 4,
    videoGame: "Серия игр FIFA",
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
      "дисциплинированность",
    ],
    picture: "Fifa",
    detailedDescription: "Популярнейший футбольный симулятор.",
    screenshots: [],
  },
  {
    index: 5,
    videoGame: "Серия игр NHL",
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
      "дисциплинированность",
    ],
    picture: "NHL",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 6,
    videoGame: "Серия игр NBA",
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
      "дисциплинированность",
    ],
    picture: "NBA",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 7,
    videoGame: "Серия игр Batman: Arkham",
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
    detailedDescription:
      "Серия игр, посвященная темному рыцарю, супергерою Бэтмену. В каждой из частей серии, события которой длятся 1 ночь, Бэтмену придется расправится с толпой своих заклятых врагов. Игра имеет прекрасную боевую систему, удобное передвижение по открытому миру, а в последней части Batman: Arkham Knight под управление также доступ бэтмобиль, который может переходить в режим танка.",
    screenshots: ["BatmanArkham1", "BatmanArkham2", "BatmanArkham3"],
  },
  {
    index: 8,
    videoGame: ["Horizon Zero Dawn", "Horizon Forbidden West"],
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 9,
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
    detailedDescription:
      "Квадрология платформера, посвященная похождениям Крэша Бандикута. На каждом из уровней вам нужно добраться до конца, преодолевая препятствия, разбивая ящики, побеждая врагов и собирая вампа-фрукты. В некоторых уровнях разработчики уходят от классической схемы и вам предлагается передвигаться на каком-либо транспорте или взять под управление другого персонажа со своим уникальным геймплеем.",
    screenshots: [],
  },
  {
    index: 10,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 11,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 12,
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
    detailedDescription:
      "Самураи острова Цусима вынуждены противостоять армии монголов, которые безжалостно захватывают остров. Главный герой самурай Дзин Сакай с малых лет воспитывался настоящим воином с честью и всегда придерживался правил. Однако когда под ударом находятся его дом и близкие, он вопреки мнению своего дяди становится на путь призрака и начинает сражаться не по самурайским канонам. Игра имеет открытый мир и проработанную боевую систему с 4-мя вариантами стоек, каждая из которых рассчитана на определенных противников.",
    screenshots: [],
  },
  {
    index: 13,
    videoGame:
      "Серия игр Lego Games (более десятка игр по разным франшизам: Marvel, DC, Star Wars, Harry Potter)",
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 14,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 15,
    videoGame:
      "Серия игр Assassin`s Creed (более 10 игр серии, действия которых разворачиваются в разных временных эпохах)",
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
    detailedDescription:
      "Серия Assassin`s Creed – научно-фантастический экшн, который отправляет нас в различные временные эпохи. По сюжету в мире игры генетическая память с помощью устройства под названием «Анимус» позволяет увидеть прошлое наших предков и пережить все, что пережили они. Таким образом каждая серия игра позволяет посмотреть на разные временные отрезки совершенно разных стран и культур. \n" +
      "Каждая из игр показывает противоборство ассассинов и тамплиеров, которая по сюжету игры продолжается уже множество веков и это противостояние сохраняется и на сегодняшний день.\n" +
      "Отличительные особенности серии – эффектная боевка система, паркур и очень точное и впечатляющее воссоздание исторических эпох, архитектуры и событий. Но стоит отметить, что хоть за основу событий и взятые реальные научные факты и личности, интерпретация сюжета имеет художественный характер и не является документально точным.\n",
    screenshots: ["AssassinsCreed1", "AssassinsCreed2", "AssassinsCreed3"],
  },
  {
    index: 16,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 17,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 18,
    videoGame: "Spyro The Dragon: Reignited Trilogy",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "4-6 часов",
    type: "Одиночная",
    genre: "Приключения",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "ST",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 19,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 20,
    videoGame: "Hogwarts Legacy",
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 21,
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
    detailedDescription:
      "Главный герой байкер Дикон Сент-Джон, который в начале эпидемии потерял свою жену, вынужден выживать в мире, который заполонили фрикеры (местные зомби). Действия игры разворачиваются в штате Оригон, игровой мир доступен для изучения вне заданий (открытый мир). В вашем арсенале куча различного вида оружия ближнего боя и огнестрела, а также самодельных бомб для сражения с фрикерами. А для передвижения по миру доступен байк, который можно прокачивать по мере прохождения игры. Одна из основных особенностей игры – это сражения с сотнями зараженных. Самые большие орды в игре достигают почти 500 фрикеров.",
    screenshots: [],
  },
  {
    index: 22,
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
    detailedDescription:
      "God of war 2018 года выпуска является неким перезапуском серии. Прошлые игры были основаны на греческой мифологии, а данные 2 части серии посвящены скандинавской. Полубог Кратос и его сын Атрей потеряли любимую жену и мать и отправляются в опасное приключения, чтобы исполнить ее последнюю волю. Герои будут перемещаться в разные миры, сражаться с разнообразными противниками и решать нетрудные головоломки.",
    screenshots: [],
  },
  {
    index: 23,
    videoGame: "Journey",
    platform: ["PS3", "PS4", "PS5", "ПК"],
    duration: "2 часа",
    type: ["Одиночная", "Мультиплеерная"],
    genre: "Приключения",
    competencies: "медитативная игра",
    picture: "J",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 24,
    videoGame: "Flower",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "2 часа",
    type: "Одиночная",
    genre: "Пазл",
    competencies: "медитативная игра",
    picture: "Fl",
    detailedDescription:
      "Медитативная игра в жанре пазл, где вы управляете потоком ветра в цветочном поле и собираете лепестки различных цветов.",
    screenshots: [],
  },
  {
    index: 25,
    videoGame: "ABZU",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "2 часа",
    type: "Одиночная",
    genre: "Приключения",
    competencies: "медитативная игра",
    picture: "ABZU",
    detailedDescription:
      "В игре вы примерите на себя роль некого дайвера, который будет изучать разные локации в открытом океане и решать головоломки. Спокойная, красивая и очень медитативная игра.",
    screenshots: ["abzu1", "abzu2", "abzu3"],
  },
  {
    index: 26,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 27,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 28,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 29,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 30,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 31,
    videoGame: "Fallout 3",
    platform: ["PS3", "ПК", "Xbox"],
    duration: "15 часов",
    type: "Одиночная",
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
    picture: "Fallout3",
    detailedDescription:
      "Fallout – серия игр в жанре RPG, выполненные в постапокалипсическом ретрофутуристическом стиле. Спустя многие годы после ядерной войны, главный герой выходит из подземного убежища в большой открытый мир, где его встретят множество приключений и опасностей.",
    screenshots: [],
  },
  {
    index: 32,
    videoGame: "Fallout New Vegas",
    platform: ["PS3", "ПК", "Xbox"],
    duration: "15 часов",
    type: "Одиночная",
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
    picture: "FalloutNV",
    detailedDescription:
      "Fallout – серия игр в жанре RPG, выполненные в постапокалипсическом ретрофутуристическом стиле. В отличие от других частей игры, главный герой начинает свой путь не из подземного убежища, а уже на поверхности и для него окружающий мир, переживший ядерную войну, не является чем-то новым. ",
    screenshots: [],
  },
  {
    index: 33,
    videoGame: "Fallout 4",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "15 часов",
    type: "Одиночная",
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
    picture: "Fallout4",
    detailedDescription:
      "Fallout – серия игр в жанре RPG, выполненные в постапокалипсическом ретрофутуристическом стиле. Главный герой просыпается в криокамере, в которую поместили его и его семью после начала ядерной войны. Жену главного героя убивают и похищают младенца. И теперь отец отправляется в неизведанный для него мир для того, чтобы найти своего ребенка.",
    screenshots: [],
  },
  {
    index: 34,
    videoGame: "Fallout 76",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "40 часов",
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
    picture: "Fallout76",
    detailedDescription:
      "Fallout – серия игр в жанре RPG, выполненные в постапокалипсическом ретрофутуристическом стиле. Главный герой пропускает выход на поверхность из подземного убежища и с ужасом выясняет, что его ждет на поверхности.",
    screenshots: [],
  },
  {
    index: 35,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 36,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 37,
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
    detailedDescription:
      "Игра повествует о новом приключении известной космической команды супергеройской вселенной MARVEL – стражах галактики. Под управление вам будет доступен только лидер команды – Питер Квилл, он же Звездный Лорд, но остальные члены команды будут помогать вам во время сражений, а также всегда сопровождать главного героя интересными и смешными диалогами.",
    screenshots: [],
  },
  {
    index: 38,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 39,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 40,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 41,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 42,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 43,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 44,
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
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 45,
    videoGame:
      "Marvel’s Midnight Suns (официально выходила только на англ. языке, есть любительский перевод на ПК)",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "100 часов",
    type: "Одиночная",
    genre: ["Пошаговая стратегия, Тактическая ролевая игра"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "работа с агрессией",
      "логическое мышление",
      "тактическое мышление",
      "усидчивость",
      "целеустремленность",
      "социальные навыки",
      "институт семьи",
      "знание английского языка",
    ],
    picture: "MMS",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 46,
    videoGame: "Серия игр Mortal Kombat",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Файтинг",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "MortalKombat",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 47,
    videoGame: "Sonic Frontiers",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "12 часов",
    type: "Одиночная",
    genre: "Платформер",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "SonicFrontiers",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 48,
    videoGame: [
      "Mario + Rabbids Kingdom Battle, Mario + Rabbids Sparks of Hope",
    ],
    platform: "Nintendo Switch",
    duration: "10 часов",
    type: "Одиночная",
    genre: ["Пошаговая стратегия", "Тактическая ролевая игра"],
    competencies: [
      "Логическое мышление",
      "тактическое мышление",
      "усидчивость",
      "целеустремленность",
    ],
    picture: "MarioRabbids",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 49,
    videoGame: "Серия игр Little Big Planet",
    platform: ["PS3", "PS4", "PS5"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Платформер", "Головоломка", "Конструктор уровней"],
    competencies: [
      "Креативность",
      "абстрактное мышление",
      "творчество",
      "целеустремленность",
      "структурно-логическое мышление",
    ],
    picture: "LittleBigPlanet",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 50,
    videoGame: ["Middle-earth: Shadow of Mordor, Middle-earth: Shadow of War"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "14 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "MiddleEarth",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 51,
    videoGame: "Tony Hawk's Pro Skater 1 + 2",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "3 часа",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Спортивный симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "TonyHawkProSkater",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 52,
    videoGame: "Серия игр The Sims",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: "Одиночная",
    genre: "Симулятор жизни",
    competencies: [
      "Креативность",
      "творчество",
      "целеустремленность",
      "пространственное мышление",
      "структурно-логическое мышление",
      "навыки проектирования",
      "финансовая грамотность",
    ],
    picture: "TheSims",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 53,
    videoGame: ["Resident Evil 4, Resident Evil 4 Remake"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "14 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
    ],
    picture: "ResidentEvil4",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 54,
    videoGame: "Серия игр Street Fighter",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Файтинг",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "StreetFighter",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 55,
    videoGame: "Серия игр Tekken",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Файтинг",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "Tekken",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 56,
    videoGame: "Серия игр SoulCalibur",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: "Файтинг",
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "SoulCalibur",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 57,
    videoGame: "Серия игр Dead or Alive",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Файтинг"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "DeadOrAlive",
    detailedDescription: "Серия файтингов с многоуровневыми аренами. ",
    screenshots: [],
  },
  {
    index: 58,
    videoGame: "Knack, Knack 2",
    platform: ["PS4", "PS5"],
    duration: "10 часов",
    type: ["Одиночная", "Split screen"],
    genre: ["Платформер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "Knack",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 59,
    videoGame: "Unravel 2",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "5 часов",
    type: ["Одиночная", "Split screen"],
    genre: ["Платформер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "Unravel2",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 60,
    videoGame: "Ice Age: Scrat's Nutty Adventure",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "3 часа",
    type: "Одиночная",
    genre: ["Платформер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "IceAgeNutty",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 61,
    videoGame: "Kao the Kangaroo",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "5 часов",
    type: "Одиночная",
    genre: ["Платформер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "KaoTheKangaroo",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 62,
    videoGame: "Marvel’s Spider-man Miles Morales",
    platform: ["PS4", "PS5", "ПК"],
    duration: "6 часов",
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
    picture: "MarvelsSpiderManMilesMorales",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 63,
    videoGame: "Portal 2",
    platform: ["PS3", "ПК", "Xbox"],
    duration: "3 часа",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Головоломка"],
    competencies: [
      "Логическое мышление",
      "навыки планирования своих действий",
      "структурно-логическое мышление",
      "пространственное мышление",
    ],
    picture: "Portal2",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 64,
    videoGame: "A Way Out",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "5 часов",
    type: ["Мультиплеерная", "Split screen"],
    genre: ["Приключенческий боевик"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "институт семьи",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "логическое мышление",
    ],
    picture: "aWayOut",
    detailedDescription:
      "Сугубо кооперативная игра, в которой вам совместно с еще одним игроком предстоит взять под управление двух незнакомых заключенных: Лео и Винсента. Вместе, они должны найти способ сбежать из тюрьмы, работая сообща. Постепенно заключенные все больше узнают друг о друге, становятся настоящей командой, но впереди их ждет непростое испытание, которое проверит их союз на прочность.",
    screenshots: ["Awayout1", "Awayout2", "Awayout3"],
  },
  {
    index: 65,
    videoGame: "Серия игр Mass Effect",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "20-30 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "RPG", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "институт семьи",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "логическое мышление",
    ],
    picture: "MassEffect",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 66,
    videoGame: "Riders Republic",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Спортивный симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
    ],
    picture: "RidersRepublic",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 67,
    videoGame: "Crash Team Racing Nitro-Fueled",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Спортивный симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
    ],
    picture: "CTR",
    detailedDescription:
      "Аркадные гонки с персонажами серии Crash Bandicoot, где для победы вы можете использовать различные ускорители, особую дрифт-систему, а так же различные орудия для того, чтобы задержать соперников.",
    screenshots: [],
  },
  {
    index: 68,
    videoGame: "Resident Evil 2 Remake",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "10 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
    ],
    picture: "ResidentEvil2Remake",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 69,
    videoGame: "Resident Evil 3 Remake",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "6 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
    ],
    picture: "ResidentEvil3Remake",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 70,
    videoGame: "Mirror's Edge: Catalyst",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "9 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Паркур"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "личностные компетенции",
      "моральная составляющая",
      "институт семьи",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
    ],
    picture: "MirrorsEdgeCatalyst",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 71,
    videoGame: "Resident Evil 7",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "7 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
    ],
    picture: "ResidentEvil7",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 72,
    videoGame: "Resident Evil 8: Village",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "13 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
    ],
    picture: "ResidentEvil8Village",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 73,
    videoGame: "Mario Kart 8",
    platform: ["Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Спортивный симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
    ],
    picture: "MarioKart8",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 74,
    videoGame: "Sackboy: A Big Adventure",
    platform: ["PS4", "PS5"],
    duration: "8 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Платформер", "Головоломка"],
    competencies: [
      "Абстрактное мышление",
      "творчество",
      "целеустремленность",
      "структурно-логическое мышление",
    ],
    picture: "Sackboy",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 75,
    videoGame: "Naruto X Boruto: Ultimate Ninja Storm Connections",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "13 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Файтинг"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "вопросы преданности",
      "поиск своего места в жизни",
      "осмысленность своего бытия",
    ],
    picture: "NarutoXBoruto",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 76,
    videoGame: "Серия игр Marvel vs. Capcom",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Файтинг"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "MarvelvsCapcom",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 77,
    videoGame: "Resident Evil 5",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "8 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
    ],
    picture: "ResidentEvil5",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 78,
    videoGame: "Resident Evil 6",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "17 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
    ],
    picture: "ResidentEvil6",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 79,
    videoGame: ["Left 4 Dead", "Left 4 Dead 2"],
    platform: ["ПК", "Xbox"],
    duration: "10 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Шутер", "Survival horror"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "Left4Dead",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 80,
    videoGame: "Half-life 2",
    platform: ["PS3", "ПК", "Xbox"],
    duration: "8 часов",
    type: "Одиночная",
    genre: ["Шутер"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "мотивированность",
      "настрой на победу",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "Halflife2",
    detailedDescription:
      "Однажды физик-теоретик Гордон Фримен, работающий в научно-исследовательском центре «Чёрная Меза», участвовал в проведении эксперимента над аномальными материалами в ходе которого произошёл сбой. В результате сбоя открылся портал в другой мир, из которого в наш просочились разные существа. Вторая часть серии рассказывает о событиях, которые произошли спустя 20 лет после этого инцидента.",
    screenshots: [],
  },
  {
    index: 81,
    videoGame: "Tomb Raider",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "8 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "TombRaider",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 82,
    videoGame: "Ninja Gaiden: Master Collection",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "8 часов",
    type: "Одиночная",
    genre: ["Hack and slash"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "личностные компетенции",
      "моральная составляющая",
      "работа с агрессией",
    ],
    picture: "NinjaGaiden",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 83,
    videoGame: "MultiVersus",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: "Мультиплеерная",
    genre: ["Файтинг"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "MultiVersus",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 84,
    videoGame: "Prince of Persia: The Lost Crown",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "17 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
    ],
    picture: "PrinceOoPersiaTheLostCrown",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 85,
    videoGame: "Серия игр Metro",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "15 часов",
    type: "Одиночная",
    genre: ["Шутер"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "мотивированность",
      "настрой на победу",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "Metro",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 86,
    videoGame: "Back 4 Blood",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "9 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Шутер", "Survival horror"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "Back4Blood",
    detailedDescription:
      "Командный кооперативный шутер от первого лица, где вам вместе с другими игроками предстоит противостоять армии зомби. Некоторые из зараженных имеют уникальные способности, к которым необходимо искать особый подход. Игра нацелена на совместное прохождение и командную работу.",
    screenshots: ["Back4Blood1", "Back4Blood2", "Back4Blood3"],
  },
  {
    index: 87,
    videoGame: "Серия игр Gran Turismo",
    platform: ["PS3", "PS4", "PS5"],
    duration: "15 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Спортивный симулятор", "Гоночный симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "дисциплинированность",
    ],
    picture: "GranTurismo",
    detailedDescription:
      "Гоночный симулятор, который очень точно и реалистично передает ощущения передвижения на настоящем автомобиле. В играх серии позволяют не только прокатиться на настоящих машинах, но и в мельчайших подробностях настраивать их характеристики.",
    screenshots: [],
  },
  {
    index: 88,
    videoGame: "Серия игр Dark Souls",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "40 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["RPG", "Экшн", "Хардкор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
      "терпение",
    ],
    picture: "DarkSouls",
    detailedDescription:
      "Игры в сеттинге темного фэнтези, разработанные FromSoftware. Игры от FromSoftware, так называемые «Soulslike» игры, известны своей сложностью, отсутствием подсказок, карт, необходимостью самостоятельно изучать игровые локации, а также геймплейные механики. Точно такой же подход к сюжету. Игрок самостоятельно должен изучать записки и описание предметов, анализировать и связывать события между собой, чтобы образовалась более целостная картинка.",
    screenshots: [],
  },
  {
    index: 89,
    videoGame: "Bloodborne",
    platform: ["PS4", "PS5"],
    duration: "40 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["RPG", "Экшн", "Хардкор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
      "терпение",
    ],
    picture: "Bloodborne",
    detailedDescription:
      "Главный герой игры – охотник, который пытается разобраться, что происходит в городе Ярнам. Игра выполнена в готическом стиле и напоминает произведения Лавкрафта Говарда Филлипса. Игры от разработчиков FromSoftware, так называемые «Soulslike» игры, известны своей сложностью, отсутствием подсказок, карт, необходимостью самостоятельно изучать игровые локации, а также геймплейные механики. Точно такой же подход у данных игр и к сюжету. Игрок самостоятельно должен изучать записки и описание предметов, анализировать и связывать события между собой, чтобы образовалась более целостная картинка.",
    screenshots: [],
  },
  {
    index: 90,
    videoGame: "Sekiro: Shadows Die Twice",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "12 часов",
    type: "Одиночная",
    genre: ["RPG", "Экшн", "Хардкор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
      "терпение",
    ],
    picture: "Sekiro",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 91,
    videoGame: "Death Stranding",
    platform: ["PS4", "PS5", "ПК"],
    duration: "30 часов",
    type: "Одиночная",
    genre: ["Приключения"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
    ],
    picture: "DeathStranding",
    detailedDescription:
      "События игры происходят в будущем, где призрачные существа из иного мира заполонили планету. Игру в шутку называют «Симулятором курьера», так как в основе геймплея лежит доставка различных грузов. Игроку требуется тщательно продумывать свой маршрут, чтобы достигнуть цели максимально не повредив груз. Кроме того, по ходу игры будут появляться новые механики и появятся различные конструкции, которые позволят облегчить свой путь – лестницы, мотоцикл, укрытие от дождя, а затем появится возможность строить внушительные сооружения.",
    screenshots: [],
  },
  {
    index: 92,
    videoGame: "Gotham Knights",
    platform: ["PS5", "ПК", "Xbox"],
    duration: "12 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Приключенческий боевик"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "логическое мышление",
    ],
    picture: "GothamKnights",
    detailedDescription:
      "Игра рассказывает о том, как команда из Бэт-семьи: Красный Колпан, Робин, Найтвинг и Бетгерл справляются с городской преступностью самостоятельно после смерти Бэтмена. Вам доступны для прохождения любой из членов Рыцарей Готэма, а сам Готэм доступен для изучения в открытом мире, по которому можно передвигаться не только на своих «двоих», но и на мотоцикле.",
    screenshots: [],
  },
  {
    index: 93,
    videoGame: "No Man's Sky: Beyond",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "40 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Приключения", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "принятие последствий за собственные решения",
      "креативность",
      "абстрактное мышление",
      "творчество",
      "целеустремленность",
      "навыки планирования своих действий",
      "структурно-логическое мышление",
    ],
    picture: "NoMansSkyBeyond",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 94,
    videoGame: "Biomutant",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "9 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "RPG"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "Biomutant",
    detailedDescription:
      "Игра о мире антропоморфных животных, которые живут в постапокалиптическом мире. Вы создаете своего енотоподобное персонажа, выбираете ему внешность, класс и способности, которые в дальнейшем можно будет прокачивать.",
    screenshots: ["Biomutant1", "Biomutant2", "Biomutant3"],
  },
  {
    index: 95,
    videoGame: "Elden Ring",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "40 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["RPG", "Экшн", "Хардкор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
      "терпение",
    ],
    picture: "EldenRing",
    detailedDescription:
      "Игры от разработчиков FromSoftware, так называемые «Soulslike» игры, известны своей сложностью, отсутствием подсказок, карт, необходимостью самостоятельно изучать игровые локации, а также геймплейные механики. Точно такой же подход к сюжету. Игрок самостоятельно должен изучать записки и описание предметов, анализировать и связывать события между собой, чтобы образовалась более целостная картинка.\n" +
      "Данная игра отличается от других тайтлов разработчиков наличием открытого мира. \n",
    screenshots: [],
  },
  {
    index: 96,
    videoGame: "Demon's Souls",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "15 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["RPG", "Экшн", "Хардкор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
      "терпение",
    ],
    picture: "DemonsSouls",
    detailedDescription:
      "Игрок берет на себя роль воина, которому придется сражаться с демонами, чтобы освободить королевство.\n" +
      "Игры от разработчиков FromSoftware, так называемые «Soulslike» игры, известны своей сложностью, отсутствием подсказок, карт, необходимостью самостоятельно изучать игровые локации, а также геймплейные механики. Точно такой же подход к сюжету. Игрок самостоятельно должен изучать записки и описание предметов, анализировать и связывать события между собой, чтобы образовалась более целостная картинка.\n",
    screenshots: [],
  },
  {
    index: 97,
    videoGame: "Lies of P",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "20 часов",
    type: "Одиночная",
    genre: ["RPG", "Экшн", "Хардкор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
      "терпение",
    ],
    picture: "LiesOfP",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 98,
    videoGame: "Серия игр WWE",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "7 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Спортивный симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "WWE",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 99,
    videoGame: "Серия игр UFC",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Спортивный симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "UFC",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 100,
    videoGame: ["Luigi's mansion 2 HD, Luigi's mansion 3"],
    platform: ["Nintendo Switch"],
    duration: "15 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Головоломка"],
    competencies: [
      "Логическое мышление",
      "навыки планирования своих действий",
      "структурно-логическое мышление",
      "пространственное мышление",
    ],
    picture: "LuigisMansion",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 101,
    videoGame: "Avatar: Frontiers of Pandora",
    platform: ["PS5", "ПК", "Xbox"],
    duration: "14 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Приключенческий боевик"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "AvatarFrontiersOfPandora",
    detailedDescription:
      "Игра от первого лица, чьи события происходят в мире киносерии «Аватар». Под управление игроку дадут представителя расы На’ви, который будет помогает своим братьям и сестрам в противоборстве с корпорацией RDA.",
    screenshots: ["Avatar1", "Avatar2", "Avatar3"],
  },
  {
    index: 102,
    videoGame: "Counter-Strike 2",
    platform: ["ПК"],
    duration: "∞",
    type: "Мультиплеерная",
    genre: ["Шутер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
      "терпение",
    ],
    picture: "CounterStrike2",
    detailedDescription:
      "Всеми известный многопользовательский тактический шутер от первого лица, в котором в противоборство вступают 2 команды: контртеррористы и террористы. В игре есть несколько режимов, но основным считается соревновательный, где террористы должны установить взрывчатку в одном из двух мест взрыва на карте или устранить всех контртеррористов, а контртеррористы устранить всех террористов и обезвредить взрывчатку, если она установлена.",
    screenshots: [],
  },
  {
    index: 103,
    videoGame: "Dota 2",
    platform: ["ПК"],
    duration: "∞",
    type: "Мультиплеерная",
    genre: ["Многопользовательская онлайн боевая арена"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
      "терпение",
    ],
    picture: "Dota2",
    detailedDescription:
      "Игра представляет собой многопользовательскую игру в жанре многопользовательской онлайновой боевой арены. Две команды по пять игроков, каждый из которых выбирает себе уникального героя (доступно более 100 персонажей), сталкиваются между собой на арене и пытаются уничтожить вражескую крепость, при этом обороняя свою.",
    screenshots: [],
  },
  {
    index: 104,
    videoGame: "DC Universe Online",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: "Мультиплеерная",
    genre: ["Массовая многопользовательская онлайн-игра"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "DCUniverseOnline",
    detailedDescription:
      "Многопользовательская игра во вселенной комиксов DC, где вы создаете своего героя или злодея, выбираете ему свой уникальный внешний вид, способности, способ передвижения и отправляетесь выполнять различные задания, как в одиночку, так и с другими игроками. По мере прохождения вы будете открывать новую броню и прокачивать способности. На своем пути вы также встретите культовых героев и злодеев: Супермен, Бэтмен, Джокер, Флэш и многих других.",
    screenshots: [],
  },
  {
    index: 105,
    videoGame: "Dead Space Remake",
    platform: ["PS5", "ПК", "Xbox"],
    duration: "8 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
    ],
    picture: "DeadSpaceRemake",
    detailedDescription:
      "Ремейк первой части Dead Space, вышедшей в 2008 году. Современная графика, а также немного осовременный геймплей, который постарался сохранить все преимущества оригинала.",
    screenshots: [],
  },
  {
    index: 106,
    videoGame: "Серия игр Forza Horizon",
    platform: ["ПК", "Xbox"],
    duration: "12 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Гоночный симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "дисциплинированность",
    ],
    picture: "ForzaHorizon",
    detailedDescription: "Популярная серия аркадных гонок с открытым миром.",
    screenshots: [],
  },
  {
    index: 108,
    videoGame: "Hi-Fi Rush",
    platform: ["PS5", "ПК", "Xbox"],
    duration: "9 часов",
    type: "Одиночная",
    genre: ["Ритм-игра", "Hack and slash"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "личностные компетенции",
    ],
    picture: "HiFiRush",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 109,
    videoGame: "Starfield",
    platform: ["ПК", "Xbox"],
    duration: "23 часа",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "RPG"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
    ],
    picture: "Starfield",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 110,
    videoGame: "The Lord of the Rings: Gollum",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "9 часов",
    type: "Одиночная",
    genre: ["Приключения"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "LOTRGollum",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 111,
    videoGame: "Серия игр Need for Speed",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "12 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Гоночный симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "дисциплинированность",
    ],
    picture: "NeedForSpeed",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 112,
    videoGame: "Sifu",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "4 часа",
    type: "Одиночная",
    genre: ["Экшн", "Файтинг"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
    ],
    picture: "Sifu",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 113,
    videoGame: "Серия игр Crysis",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "8 часов",
    type: "Одиночная",
    genre: ["Шутер"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
    ],
    picture: "Crysis",
    detailedDescription:
      "Серия шутеров от первого лица о вторжении пришельцев, в котором главной особенностью является нанокостюм (экзоскелет), который наделяет носителя способностью к регенерации, увеличенной силой, защитой, скоростью и невидимостью. В некоторых моментах уровней вам позволят проявить себя и выбрать свой стиль игры: идти в открытый бой или же попробовать пройти в скрытном режиме.",
    screenshots: [],
  },
  {
    index: 114,
    videoGame: "Серия игр Doom",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "16 часов",
    type: "Одиночная",
    genre: ["Шутер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
    ],
    picture: "Doom",
    detailedDescription:
      "Культовая серия игр в жанре шутер от первого лица. В DOOM игроки окажутся в шкуре безымянного солдата, который выступит против армии демонов.",
    screenshots: [],
  },
  {
    index: 115,
    videoGame: "Серия игр Mafia",
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "12 часов",
    type: "Одиночная",
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
    picture: "Mafia",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 116,
    videoGame: "Marvel’s Avengers",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "15 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Приключенческий боевик"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "MarvelsAvengers",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 117,
    videoGame: ["Nioh", "Nioh 2"],
    platform: ["PS4", "PS5", "ПК"],
    duration: "22 часа",
    type: "Одиночная",
    genre: ["RPG", "Экшн", "Хардкор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
      "терпение",
    ],
    picture: "Nioh",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 118,
    videoGame: "Star Wars: Squadrons",
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "7 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Шутер", "Космический симулятор"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "дисциплинированность",
    ],
    picture: "StarWarsSquadrons",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 119,
    videoGame: "Streets of Rage 4",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "3 часа",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Beat ’em up"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
    ],
    picture: "StreetsOfRage4",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 120,
    videoGame: ["Darksiders", "Darksiders 2", "Darksiders 3"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "13 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Hack and slash", "RPG"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "личностные компетенции",
      "моральная составляющая",
      "работа с агрессией",
    ],
    picture: "Darksiders",
    detailedDescription:
      "Сюжет серии основан на пророчестве об апокалипсисе, в центре которого находятся 4-е всадника апокалипсиса. Вам дадут одного из них под управление в зависимости от части серии: в первой части вы играете за Войну, во второй за Смерть и в третьей за Ярость. Игра представляет из себя в основном сражения в ближнем бою с элементами платформинга и RPG.",
    screenshots: [],
  },
  {
    index: 121,
    videoGame: "Darksiders Genesis",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "11 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Приключенческий боевик", "Hack and slash"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "личностные компетенции",
      "моральная составляющая",
      "работа с агрессией",
    ],
    picture: "DarksidersGenesis",
    detailedDescription:
      "Продолжение серии Darksiders, которое отошла от своей стандартной механики игры и превратилось в кооперативный экшн с видом сверху, где под управление вам дадут двух всадников апокалипсиса: Войну и Раздор. При одиночном прохождении вы можете переключаться между всадниками прямо во время игрового процесса. ",
    screenshots: [],
  },
  {
    index: 122,
    videoGame: "Shadow of the Colossus",
    platform: ["PS3", "PS4", "PS5"],
    duration: "5 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "тактическое мышление",
    ],
    picture: "ShadowOfTheColossus",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 123,
    videoGame: "Super Smash Bros. Ultimate",
    platform: ["Nintendo Switch"],
    duration: "∞",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Файтинг"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "SuperSmashBrosUltimate",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 124,
    videoGame: "Cuphead",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "5 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Run and gun", "Хардкор", "Платформер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "тактическое мышление",
      "дисциплинированность",
      "работа с агрессией",
      "терпение",
    ],
    picture: "Cuphead",
    detailedDescription:
      "Игра в жанре «Беги и стреляй», которую можно проходить в кооперативе. Визуальный стиль напоминает старые зарубежные мультфильмы. Но визуал может создать неверное впечатление, так как игра достаточно сложная.",
    screenshots: [],
  },
  {
    index: 125,
    videoGame: "Fortnite",
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "∞",
    type: "Мультиплеерная",
    genre: ["Королевская битва", "Онлайн-игра"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "Fortnite",
    detailedDescription:
      "Многопользовательская игра с большим количеством режимов игры, но основными являются:\n" +
      "Нулевая высота. На остров выбрасываются 100 игроков, у которых изначально нет никакого оружия и снаряжения. Его необходимо искать в сундуках или подбирать с убитых противников. Постепенно радиус доступной для передвижения карты сужается, сталкивая игроков лицом к лицу. Победителем окажется тот игрок, который останется последним на острове.\n" +
      "Королевская битва. Тот же режим, что и «Нулевая высота», но с возможностью строительства различных конструкций, используя собираемое сырье.\n",
    screenshots: [],
  },
  {
    index: 126,
    videoGame: ["Star Wars: Battlefront", "Star Wars: Battlefront II"],
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "∞",
    type: "Мультиплеерная",
    genre: ["Шутер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "StarWarsBattlefront",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 127,
    videoGame: ["Серия игр The Adventures of Sherlock Holmes"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "10 часов",
    type: "Одиночная",
    genre: ["Приключения", "Головоломка"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "креативность",
      "абстрактное мышление",
      "творчество",
      "целеустремленность",
    ],
    picture: "TheAdventuresOfSherlockHolmes",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 128,
    videoGame: ["Dragon's Dogma: Dark Arisen", "Dragon's Dogma 2"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "15 часов",
    type: "Одиночная",
    genre: ["RPG", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
    ],
    picture: "DragonsDogma",
    detailedDescription:
      "Фэнтезийная RPG, которая отличается уникальной системой «пешек». Пешки представляют из себя ваших спутников, которых вы не только можете выбирать и настраивать на свой вкус и под свой стиль игры, но и которые будут помогать в сражениях. ",
    screenshots: [],
  },
  {
    index: 129,
    videoGame: ["Pumpkin Jack"],
    platform: ["PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "4 часа",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Платформер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
    ],
    picture: "PumpkinJack",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 130,
    videoGame: ["Серия игр Splinter Cell"],
    platform: ["PS3", "ПК", "Xbox"],
    duration: "5 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Приключенческий боевик", "Стэлс-экшн"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "логическое мышление",
      "терпение",
    ],
    picture: "SplinterCell",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 131,
    videoGame: ["Red Dead Redemption"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox", "Nintendo Switch"],
    duration: "12 часов",
    type: "Одиночная",
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
    picture: "RedDeadRedemption",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 132,
    videoGame: ["Alone in the Dark (2008)"],
    platform: ["PS3", "ПК"],
    duration: "6 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Survival horror", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
      "осмысленность своего бытия",
      "креативность",
      "структурно-логическое мышление",
    ],
    picture: "AloneInTheDark",
    detailedDescription:
      "Главный герой – Эдвард, который не помнит своего прошлого. События игры разворачиваются в Нью-Йорке, который окутала странная паранормальная сила. Интересной особенностью является разделение уровней на эпизоды, словно это телесериал. В Alone in the dark представлена очень проработанная физика и взаимодействие с окружением, что даже спустя почти 2 десятка лет может приятно удивить.\n" +
      "Играть можно как от первого, так и от третьего лица.",
    screenshots: [
      "AloneintheDark(2008)1",
      "AloneintheDark(2008)2",
      "AloneintheDark(2008)3",
    ],
  },
  {
    index: 133,
    videoGame: ["Prototype", "Prototype 2"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "6 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
    ],
    picture: "Prototype",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 134,
    videoGame: ["Серия игр Fable"],
    platform: ["ПК", "Xbox"],
    duration: "15 часов",
    type: "Одиночная",
    genre: ["RPG", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
    ],
    picture: "Fable",
    detailedDescription:
      "Игра в стиле фэнтези, в которой ваше поведение и стиль игры отражаются на главном герое и окружающем мире. Помимо ближнего и дальнего боев вам доступно использование магии. ",
    screenshots: [],
  },
  {
    index: 135,
    videoGame: ["Alice: Madness Returns"],
    platform: ["PS3", "ПК", "Xbox"],
    duration: "12 часов",
    type: "Одиночная",
    genre: ["Приключенческий боевик"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "логическое мышление",
      "личностные компетенции",
      "моральная составляющая",
    ],
    picture: "AliceMadnessReturns",
    detailedDescription:
      "Новый взгляд на всем знакомую сказку. Это сиквел предыдущей игры «American McGee’s Alice». Это яркий приключенческий боевик с элементами платформера. Одна из интересных особенностей игры является то, что мир игры разделе на 2 составляющих - воображаемая, происходящий в Стране чудес, и реальная, происходящий на улицах Лондона. Каждый из миров имеет свои уникальные как геймплейные, так и визуальные особенности.",
    screenshots: [
      "AliceMadnessReturns1",
      "AliceMadnessReturns2",
      "AliceMadnessReturns3",
    ],
  },
  {
    index: 136,
    videoGame: ["Battletoads"],
    platform: ["ПК", "Xbox"],
    duration: "3 часа",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Beat ’em up"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
    ],
    picture: "Battletoads",
    detailedDescription:
      "Современное переосмысленного классического представителя Beat ’em up, про трех жаб и вы можете проходить игру совместно с другими игроками.",
    screenshots: ["Battletoads1", "Battletoads2", "Battletoads3"],
  },
  {
    index: 137,
    videoGame: ["Dead Space", "Dead Space 2", "Dead Space 3"],
    platform: ["PS3", "ПК", "Xbox"],
    duration: "10 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Приключенческий боевик", "Survival horror"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "логическое мышление",
      "работа со страхами",
    ],
    picture: "DS23",
    detailedDescription:
      "Научно-фантастической хоррор, действия которого происходят в будущем. Первая часть игры начинается с того, что ремонтный челнок с нашим главным героем Айзеком Кларком направляется за космическим кораблем «Ишимура», с которым была потеряна связь, и на котором находится возлюбленная главного героя (старший медик). Оказывается, что корабль заполонили некроморфы – ужасные твари, уничтожающие всех на своем пути. Игровые ситуации и окружение все время держат игрока в напряжении и не дают расслабиться. ",
    screenshots: [],
  },
  {
    index: 138,
    videoGame: ["Серия игр Gears of War"],
    platform: ["ПК", "Xbox"],
    duration: "9 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Приключенческий боевик", "Шутер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "GearsOfWar",
    detailedDescription:
      "Шутер от третьего лица, который акцентирует геймплей на использовании укрытий. События серии разворачиваются в далеком будущем на планете Сера. Из-за последствий войн люди были вынуждены покинуть Землю и нашли свой новый «дом» в виде планеты Сера. Однако смена одной планеты на другую не уберегло людей от новых воин и опасностей.",
    screenshots: [],
  },
  {
    index: 139,
    videoGame: ["Серия игр Halo"],
    platform: ["ПК", "Xbox"],
    duration: "5 часов",
    type: ["Одиночная", "Мультиплеерная", "Split screen"],
    genre: ["Шутер"],
    competencies: [
      "Мотивированность",
      "настрой на победу",
      "принятие поражений",
      "умение работать в команде",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "Halo",
    detailedDescription:
      "Серия шутеров от первого лица, повествующая о противостоянии суперсолдат и пришельцев в далеком будущем. Помимо разного футуристического арсенала есть возможность использовать транспорт с огнестрельным оружием.",
    screenshots: [],
  },
  {
    index: 140,
    videoGame: ["Watch Dogs"],
    platform: ["PS3", "PS4", "PS5", "ПК", "Xbox"],
    duration: "15 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Приключенческий боевик", "Песочница"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
    ],
    picture: "WatchDogs",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 141,
    videoGame: ["Ryse: Son of Rome"],
    platform: ["ПК", "Xbox"],
    duration: "5 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Приключенческий боевик", "Hack and slash"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
    ],
    picture: "Ryse",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 142,
    videoGame: [
      "S.T.A.L.K.E.R.: Тень Чернобыля",
      "S.T.A.L.K.E.R.: Чистое небо",
      "S.T.A.L.K.E.R.: Зов Припяти",
    ],
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "10 часов",
    type: "Одиночная",
    genre: ["Шутер"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
    ],
    picture: "STALKER",
    detailedDescription: "",
    screenshots: [],
  },
  {
    index: 143,
    videoGame: ["Call of Duty 2"],
    platform: ["ПК", "Xbox"],
    duration: "6 часов",
    type: "Одиночная",
    genre: ["Шутер"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "CallOfDuty2",
    detailedDescription:
      "Игра основана на событиях Второй мировой войны. Игра представляет из себя шутер от первого лица, в котором вы возьмете на себя роль солдатов советской, британской и американской армий. ",
    screenshots: [],
  },
  {
    index: 144,
    videoGame: ["Call of Duty: World War II"],
    platform: ["PS4", "PS5", "ПК", "Xbox"],
    duration: "5 часов",
    type: ["Одиночная", "Мультиплеерная"],
    genre: ["Шутер"],
    competencies: [
      "Личностные компетенции",
      "моральная составляющая",
      "работа с ответственностью",
      "принятие последствий за собственные решения",
      "работа с потерей близких",
      "тактическое мышление",
      "дисциплинированность",
    ],
    picture: "CallOfDutyWorldWarII",
    detailedDescription:
      "Действия игры охватывают боевые действия в оккупированных городах Франции, Бельгии, а также в Германии во время Второй мировой войны. Игра представляет из себя шутер от первого лица, в котором вы возьмете на себя роль разных солдат.",
    screenshots: [],
  },
];

const dropdownData = {
  genre: {
    1: "Приключенческий боевик",
    2: "Приключения",
    3: "Survival horror",
    4: "Песочница",
    5: "Beat ’em up",
    6: "Шутер",
    7: "RPG",
    8: "Экшн",
    9: "Хардкор",
    10: "Платформер",
    11: "Спортивный симулятор",
    12: "Hack and slash",
    13: "Файтинг",
    14: "Многопользовательская онлайн боевая арена",
    15: "Пазл",
  },
  platform: {
    1: "PS3",
    2: "PS4",
    3: "PS5",
    4: "ПК",
    5: "Xbox",
    6: "Nintendo Switch",
  },
  duration: {
    1: "малая",
    2: "средняя",
    3: "длинная",
    4: "бесконечная",
  },
};

const filterArray = {
  platform: [],
  genre: [],
  duration: [],
};

const createDropdownMenu = (containerId, title, data, type) => {
  const container = document.getElementById(containerId);

  const dropdownButton = document.createElement("button");
  dropdownButton.className =
    "inline-flex justify-between w-full rounded-md px-4 py-2 text-sm font-medium hover:bg-slate-500";
  dropdownButton.setAttribute("id", `${containerId}Button`);

  const buttonContent = document.createElement("span");
  buttonContent.textContent = title;

  const dropdownIcon = document.createElement("span");
  dropdownIcon.innerHTML = "&#x25BC;";
  dropdownIcon.className = "ml-2 transition-transform duration-300";

  dropdownButton.appendChild(buttonContent);
  dropdownButton.appendChild(dropdownIcon);

  const dropdownMenu = document.createElement("div");
  dropdownMenu.className =
    "hidden flex flex-col absolute origin-top-left mt-2 whitespace-nowrap rounded-md shadow-lg bg-slate-500 ring-1 ring-black ring-opacity-5 focus:outline-none";
  dropdownMenu.setAttribute("id", `${containerId}Menu`);

  const dropdownContent = document.createElement("div");
  dropdownContent.className = "py-1";
  dropdownContent.setAttribute("role", "none");

  for (const [value, label] of Object.entries(data)) {
    const labelElement = document.createElement("label");
    labelElement.className = "flex px-2 py-0.5 text-sm text-white";

    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.value = value;
    inputElement.className = "";

    const inputText = document.createElement("span");
    inputText.className = "p-2";
    inputText.innerHTML = label;

    labelElement.appendChild(inputElement);
    labelElement.appendChild(inputText);
    dropdownContent.appendChild(labelElement);

    inputElement.addEventListener("change", (event) => {
      if (event.target.checked) {
        filterArray[type].push(label);
      } else {
        const index = filterArray[type].indexOf(label);
        if (index !== -1) {
          filterArray[type].splice(index, 1);
        }
      }
      updateFilteredGames(library);
    });
  }

  dropdownMenu.appendChild(dropdownContent);

  container.appendChild(dropdownButton);
  container.appendChild(dropdownMenu);

  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
    dropdownIcon.innerHTML = dropdownMenu.classList.contains("hidden")
      ? "&#x25BC;"
      : "&#x25B2;";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  createDropdownMenu(
    "genreDropdownContainer",
    "Жанр",
    dropdownData.genre,
    "genre",
  );
  createDropdownMenu(
    "platformDropdownContainer",
    "Платформа",
    dropdownData.platform,
    "platform",
  );
  createDropdownMenu(
    "durationDropdownContainer",
    "Длительность",
    dropdownData.duration,
    "duration",
  );
});
const numberOfGames = (arr) => {
  const totalNumber = arr.length;
  document.getElementById("total").innerHTML = totalNumber;
};

const sortGames = (arr) => {
  return arr.sort((a, b) => {
    const cleanTitle = (title) => {
      if (Array.isArray(title)) title = title[0];
      return typeof title === "string"
        ? title.replace("Серия игр", "").trim().toLowerCase()
        : title;
    };
    return cleanTitle(a.videoGame) > cleanTitle(b.videoGame) ? 1 : -1;
  });
};

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

document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target && e.target.matches("button[id^='accordionButton-']")) {
    const index = e.target.getAttribute("data-index");
    toggleGameAccordion(index);
  }
});

const addGameAccordionContent = (index, gameDescription, screenshots) => {
  let description = gameDescription || "Описание в разработке";
  const accordionContent = document.getElementById(`accordionContent-${index}`);

  accordionContent.innerHTML = `
    <td colspan="6" class="p-6 bg-gray-100 dark:bg-gray-700">
      <p>${description}</p>
      <div class="flex justify-between pt-2">
        ${screenshots
          .map(
            (item) => `
            <img
               class="flex-1 mx-2 cursor-pointer game-screenshot"
               src="/images/${item}.jpg"
               alt="Screenshot"
               style="max-width: calc(33.33% - 0.5rem);"
            />
          `,
          )
          .join("")}
      </div>
    </td>
  `;

  const openModal = initModal();
  if (openModal) {
    document.querySelectorAll(".game-screenshot").forEach((img) => {
      img.addEventListener("click", function () {
        openModal(this.src);
      });
    });
  }
};

const toggleGameAccordion = (index) => {
  const game = library.find((game) => game.index == index);

  const content = document.getElementById(`accordionContent-${index}`);
  const buttonRow = document.getElementById(`accordionButtonRow-${index}`);
  const button = document.getElementById(`accordionButton-${index}`);

  if (content.classList.contains("hidden")) {
    const gameDescription = game.detailedDescription;
    const screenshots = game.screenshots;

    // Add content to the accordion
    addGameAccordionContent(index, gameDescription, screenshots);

    content.classList.remove("hidden");
    buttonRow.classList.remove(
      "border-b",
      "border-slate-700",
      "dark:border-slate-300",
    );
    content.classList.add(
      "border-b",
      "border-slate-700",
      "dark:border-slate-300",
    );
    button.innerHTML = "Свернуть &#x25B2;";
  } else {
    content.classList.add("hidden");
    buttonRow.classList.add(
      "border-b",
      "border-slate-700",
      "dark:border-slate-300",
    );
    content.classList.remove(
      "border-b",
      "border-slate-700",
      "dark:border-slate-300",
    );
    button.innerHTML = "Узнать больше &#x25BC;";
  }
};

const table = (arr) => {
  const sortedArray = sortGames(arr);
  const html = sortedArray
    .map(
      (item) => `
        <tr class="text-center">
          <td class="px-6 py-2">
            <div class="flex flex-col justify-center items-center">
              <div class="mb-2">${displayVertical(item.videoGame)}</div>
              <img class="max-w-60 rounded-md" src="/images/${item.picture}.jpg" alt="" />
            </div>
          </td>
          <td class="px-2 py-2 min-w-52">
            <div>${displayVertical(item.platform)}</div>
          </td>
          <td class="px-2 py-2">
            <div>${item.duration}</div>
          </td>
          <td class="px-2 py-2">
            <div>${displayVertical(item.type)}</div>
          </td>
          <td class="px-2 py-2">
            <div>${displayVertical(item.genre)}</div>
          </td>
          <td class="px-2 py-2">
            <div>${displayComma(item.competencies)}</div>
          </td>
        </tr>
        <tr id="accordionButtonRow-${item.index}" class="border-b border-slate-700 dark:border-slate-300">
          <td colspan="6" class="text-center">
            <div class="flex justify-center">
              <button id="accordionButton-${item.index}" data-index="${item.index}" class="text-slate-500 pb-2 focus:outline-none">
                Узнать больше &#x25BC;
              </button>
            </div>
          </td>
        </tr>
        <tr id="accordionContent-${item.index}" class="hidden"></tr>
`,
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
const filterGames = (games) => {
  const { genre, platform } = filterArray;

  return games.filter((game) => {
    const genreMatch =
      genre.length === 0 || genre.some((g) => game.genre.includes(g));
    const platformMatch =
      platform.length === 0 || platform.some((p) => game.platform.includes(p));
    return genreMatch && platformMatch;
  });
};

const updateFilteredGames = (games) => {
  const filteredGames = filterGames(games);
  table(filteredGames);
  minitable(filteredGames);
};

window.addEventListener("load", () => {
  updateFilteredGames(library);
  numberOfGames(library);
});
