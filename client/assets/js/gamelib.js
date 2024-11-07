import "../css/style.css";
import { initModal } from "./modal.js";

let library = [];

let dropdownData = {};
async function fetchGamesData() {
  try {
    const response = await fetch("https://genesis-expert.ru/api/v1/games");
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    library = data;
    return data;
  } catch (error) {
    console.error("Failed to fetch games data:", error);
    return null;
  }
}
async function fetchDropdownData() {
  try {
    const endpoints = [
      { url: "https://genesis-expert.ru/api/v1/genres", key: "genres" },
      { url: "https://genesis-expert.ru/api/v1/modes", key: "modes" },
      { url: "https://genesis-expert.ru/api/v1/platforms", key: "platforms" },
      {
        url: "https://genesis-expert.ru/api/v1/competencies",
        key: "competencies",
      },
      { url: "https://genesis-expert.ru/api/v1/durations", key: "durations" },
    ];

    const fetchPromises = endpoints.map(async ({ url, key }) => {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Error fetching ${key}: ${response.status}`);
      const data = await response.json();
      const mappedData = data.reduce((acc, item) => {
        acc[item.id] = item.name;
        return acc;
      }, {});
      return { [key]: mappedData };
    });

    const results = await Promise.all(fetchPromises);
    return Object.assign({}, ...results);
  } catch (error) {
    console.error("Failed to fetch dropdown data:", error);
    return null;
  }
}

const CDN = "https://genesis-expert.ru";

const filterArray = {
  platforms: [],
  genres: [],
  durations: [],
  modes: [],
  competencies: [],
};

const faq = [
  {
    index: 0,
    question: "На чем играть?",
    answer: [
      "PS – игровая консоль Playstation компании Sony.",
      "Xbox – игровая консоль Xbox компании Microsoft.",
      "Nintendo Switch – портативная консоль компании Nintendo.",
      "ПК – персональный компьютер, ноутбук или Steam Deck.",
    ],
  },
  {
    index: 1,
    question: "Основные термины",
    answer: [
      "Локальный кооператив – игры с возможностью играть совместно на одной консоли 2-м и более игрокам",
      "Локальное противостояние – игры с возможностью играть нескольким игрокам друг против друга на одной консоли.",
      "Мультиплеерный кооператив – игры с возможностью играть совместно по сети.",
      "Мультиплеерное противостояние – игры с возможностью играть друг против друга нескольким игрокам по сети.",
      "Песочница – игры с большой свободой действий.",
      "RPG – ролевая игра, для которой характерны: возможность создавать главного героя, развивать характеристики подконтрольных игроку персонажей, выбирать варианты ответных реплик в диалогах с неигровыми персонажами, своими действиями влиять на ход внутриигровых нарративов.",
      "Платформер – игры с упором на прыжках по платформам.",
      "Beat ’em up – игры с акцентом на рукопашные схватки.",
      "Hack and slash – игры, в которых происходит в основном истребление множества противников в ближнем бою с помощью разнообразного оружия.",
      "Survival horror – игры с упором на выживание, нагнетание атмосферы страха.",
    ],
  },
  {
    index: 2,
    question: "Как могут помочь видеоигры?",
    answer: [
      "Видеоигры могут научить ценным навыкам, таким как решение проблем, ответственность за принятие решений и стратегии преодоления трудностей. Видеоигры также могут моделировать сценарии реальной жизни, позволяя людям практиковать и совершенствовать социальные навыки в безопасной и контролируемой среде.",
      "Игра может быть ресурсом развития. Инструментом, через который ребенок познает мир, познает себя.",
      "Библиотека видеоигр рекомендуется как психологам, которые хотят проводить консультации по нашей авторской методике, так и родителям, которые хотят провести больше времени со своим ребенком, создавая крепкие и доверительные отношения.",
    ],
  },
  {
    index: 3,
    question: "Для кого предназначена библиотека?",
    answer: [
      "У картотеки видеоигр 2 целевых аудитории:",
      "1. Психологи, которые хотят использовать в своей работе методику психологического консультирования с помощью видеоигр.",
      "2. Родители, которые хотят лучше понимать увлечения своих детей и погрузиться в мир игровой индустрии.",
    ],
  },
];

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
    "hidden flex flex-col absolute origin-top-left mt-2 whitespace-wrap rounded-md max-h-[50vh] py-2 overflow-y-auto shadow-lg bg-slate-500 ring-1 ring-black ring-opacity-5 focus:outline-none";
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
    inputText.innerHTML = label.toLowerCase();

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
    return cleanTitle(a.titles_list) > cleanTitle(b.titles_list) ? 1 : -1;
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

document.getElementById("faq").addEventListener("click", function (e) {
  if (e.target && e.target.matches("button[id^='accordionFaqButton-']")) {
    const index = e.target.getAttribute("data-index");
    toggleFaqAccordion(index);
  }
});

const addFaqAccordionContent = (index, question, answer) => {
  const accordionFaqContent = document.getElementById(
    `accordionFaqContent-${index}`,
  );

  accordionFaqContent.innerHTML = `
    <div class="p-6 bg-slate-300 dark:bg-slate-700">
      <div class="flex flex-col w-full">
        ${answer
          .map(
            (item) => `
            <div>${item}</div>
          `,
          )
          .join("")}
      </div>
    </div>
  `;
};

const toggleFaqAccordion = (index) => {
  const item = faq.find((item) => item.index == index);

  const faqContent = document.getElementById(`accordionFaqContent-${index}`);
  const faqButtonRow = document.getElementById(
    `accordionFaqButtonRow-${index}`,
  );
  const faqButton = document.getElementById(`accordionFaqButton-${index}`);

  if (faqContent.classList.contains("hidden")) {
    const question = item.question;
    const answer = item.answer;

    // Add content to the accordion
    addFaqAccordionContent(index, question, answer);

    faqContent.classList.remove("hidden");
    faqButtonRow.classList.remove("border-b", "border-slate-500");
    faqContent.classList.add("border-b", "border-slate-500");
    faqButton.innerHTML = `${item.question} &#x25B2;`;
  } else {
    faqContent.classList.add("hidden");
    faqButtonRow.classList.add("border-b", "border-slate-500");
    faqContent.classList.remove("border-b", "border-slate-500");
    faqButton.innerHTML = `${item.question} &#x25BC;`;
  }
};

document.querySelector("tbody").addEventListener("click", function (e) {
  if (e.target && e.target.matches("button[id^='accordionButton-']")) {
    const index = e.target.getAttribute("data-index");
    toggleGameAccordion(index);
  }

  if (e.target && e.target.matches(".game-screenshot")) {
    const openModal = initModal();
    if (openModal) {
      openModal(e.target.src);
    }
  }
});

const addGameAccordionContent = (index, gameDescription, screenshots) => {
  let description = gameDescription || "Описание в разработке";
  const accordionContent = document.getElementById(`accordionContent-${index}`);

  accordionContent.innerHTML = `
    <td colspan="6" class="p-6 bg-gray-300 dark:bg-gray-700">
      <p>${description}</p>
      <div class="flex justify-between pt-2">
        ${screenshots
          .map(
            (screenshot) => `
            <img
               class="flex-1 mx-2 cursor-pointer game-screenshot"
               src="${CDN + screenshot}"
               alt="Screenshot"
               style="max-width: calc(33.33% - 0.5rem);"
            />
          `,
          )
          .join("")}
      </div>
    </td>
  `;
};

const toggleGameAccordion = (index) => {
  const game = library.find((game) => game.id == index);
  const content = document.getElementById(`accordionContent-${index}`);
  const buttonRow = document.getElementById(`accordionButtonRow-${index}`);
  const button = document.getElementById(`accordionButton-${index}`);

  if (content.classList.contains("hidden")) {
    const gameDescription = game.description;
    const screenshots = game.screen_shots_list;

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

const faqBlock = (arr) => {
  const html = arr
    .map(
      (item) => `<div
                  id="accordionFaqButtonRow-${item.index}"
                  class="border-b border-slate-500"
                >
                    <div class="flex justify-center w-full bg-slate-300 dark:bg-slate-700">
                      <button
                        id="accordionFaqButton-${item.index}"
                        data-index="${item.index}"
                        class="text-slate-900 dark:text-slate-100  py-4 focus:outline-none"
                      >
                        ${item.question} &#x25BC;
                      </button>
                    </div>
                </div>
                <div id="accordionFaqContent-${item.index}" class="hidden"></div>`,
    )
    .join("");
  document.getElementById("faq").innerHTML = html;
};
const table = (arr) => {
  const sortedArray = sortGames(arr);
  const html = sortedArray
    .map(
      (game) => `
        <tr class="text-center">
          <td class="px-6 py-2">
            <div class="flex flex-col justify-center items-center">
              <div class="mb-2">${displayVertical(game.titles_list)}</div>
              <img class="max-w-60 rounded-md" src=${CDN + game.cover_image} alt="" />
            </div>
          </td>
          <td class="px-2 py-2 min-w-52">
            <div>${displayVertical(game.platforms.map((platform) => platform.name))}</div>
          </td>
          <td class="px-2 py-2">
            <div>${game.duration}</div>
          </td>
          <td class="px-2 py-2">
            <div>${displayVertical(game.modes.map((mode) => mode.name))}</div>
          </td>
          <td class="px-2 py-2">
            <div>${displayVertical(game.genres.map((genre) => genre.name))}</div>
          </td>
          <td class="px-2 py-2">
            <div>${displayComma(
              game.competencies.map((competency, index) => {
                const name = competency.name.toLowerCase();
                return index === 0
                  ? name.charAt(0).toUpperCase() + name.slice(1)
                  : name;
              }),
            )}</div>
          </td>
        </tr>
        <tr id="accordionButtonRow-${game.id}" class="border-b border-slate-700 dark:border-slate-300">
          <td colspan="6" class="text-center">
            <div class="flex justify-center">
              <button id="accordionButton-${game.id}" data-index="${game.id}" class="text-slate-500 pb-2 focus:outline-none">
                Узнать больше &#x25BC;
              </button>
            </div>
          </td>
        </tr>
        <tr id="accordionContent-${game.id}" class="hidden">
          <td colspan="6" class="p-6 bg-gray-300 dark:bg-gray-700">
            <p>${game.description || "Описание в разработке"}</p>
            <div class="flex justify-between pt-2">
              ${game.screen_shots_list
                .map(
                  (screenshot) => `
                  <img
                    class="flex-1 mx-2 cursor-pointer game-screenshot"
                    src=${screenshot}
                    alt="Screenshot"
                    style="max-width: calc(33.33% - 0.5rem);"
                  />
                `,
                )
                .join("")}
            </div>
          </td>
        </tr>
`,
    )
    .join("");
  document.querySelector("tbody").innerHTML = html;
};

const minitable = (arr) => {
  const sortedArray = sortGames(arr);
  const html = sortedArray
    .map(
      (game) => `<div
      class="flex flex-col justify-center items-center pb-4 border-b border-slate-700 dark:border-slate-300"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="mb-2">${displayComma(game.titles_list)}</div>
        <img
          class="max-w-32 rounded-md"
          src=${CDN + game.cover_image}
          alt=""
        />
      </div>
      <div>${displayComma(game.platforms.map((platform) => platform.name))}</div>
      <div>${game.duration[0]}</div>
      <div>${displayComma(game.modes.map((mode) => mode.name))}</div>
      <div>${displayComma(game.genres.map((genre) => genre.name))}</div>
      <div class="pl-2 text-justify">
      ${displayComma(
        game.competencies.map((competency, index) => {
          const name = competency.name.toLowerCase();
          return index === 0
            ? name.charAt(0).toUpperCase() + name.slice(1)
            : name;
        }),
      )}
      </div>
    </div>`,
    )
    .join("");
  document.querySelector("#minitable").innerHTML = html;
};
const filterGames = (games) => {
  const { genres, platforms, modes, durations, competencies } = filterArray;
  return games.filter((game) => {
    const sortedGames = game.genres.map((i) => i.name);
    const genreMatch =
      genres.length === 0 || genres.some((g) => sortedGames.includes(g));
    const sortedPlatforms = game.platforms.map((i) => i.name);
    const platformMatch =
      platforms.length === 0 ||
      platforms.some((p) => sortedPlatforms.includes(p));
    const sortedModes = game.modes.map((i) => i.name);
    const modeMatch =
      modes.length === 0 || modes.every((t) => sortedModes.includes(t));
    const durationMatch =
      durations.length === 0 || durations.includes(game.duration_type.name);
    const sortedCompetencies = game.competencies.map((i) => i.name);
    const competenciesMatch =
      competencies.length === 0 ||
      competencies.every((c) => sortedCompetencies.includes(c));
    return (
      genreMatch &&
      platformMatch &&
      modeMatch &&
      durationMatch &&
      competenciesMatch
    );
  });
};

const updateFilteredGames = (games) => {
  const filteredGames = filterGames(games);
  const tbody = document.querySelector("tbody");
  if (filteredGames.length === 0) {
    const html = `
      <tr>
        <td colspan="100%" class="text-center w-full">Мы не нашли ни одной игры, соответствующей этому запросу.</td>
      </tr>
    `;
    tbody.innerHTML = html;
  } else {
    table(filteredGames);
  }
};

document.addEventListener("DOMContentLoaded", () => {});
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchGamesData();
  const dropdownData = await fetchDropdownData();
  if (data && dropdownData) {
    createDropdownMenu(
      "platformDropdownContainer",
      "Платформа",
      dropdownData.platforms,
      "platforms",
    );
    createDropdownMenu(
      "durationDropdownContainer",
      "Продолжительность основной сюжетной линии (приблизительная)",
      dropdownData.durations,
      "durations",
    );

    createDropdownMenu(
      "typeDropdownContainer",
      "Режим игры",
      dropdownData.modes,
      "modes",
    );
    createDropdownMenu(
      "genreDropdownContainer",
      "Жанр",
      dropdownData.genres,
      "genres",
    );
    createDropdownMenu(
      "competenciesDropdownContainer",
      "Компетенции",
      dropdownData.competencies,
      "competencies",
    );
    faqBlock(faq);
    numberOfGames(data);
    updateFilteredGames(data);
    minitable(data);
  }
});
