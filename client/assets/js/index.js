import "../css/style.css";

const cardData = [
  {
    title: "Консультирование",
    imgSrc: "consultation",
    content: [
      "<ul><li>рецензия на психологические экспертизы;</li><li>этические экспертизы;</li><li>сопровождение несовершеннолетних в уголовном процессе.</li></ul>",
      "<p>проведение психологического консультирования подростков и их родителей (законных представителей)</p>",
      "<p>консультации по вопросам детско-родительских отношений, межличностных коммуникации и социализации детей и подростков, вопросам правового характера, связанным с воспитанием и обучением детей, профориентации, семейное консультирование)</p>",
      "<p>реализация комплексной программы психологического сопровождения учителей общеобразовательных школ города Красноярска и Красноярского края с целью снижения виктимизации педагогов в случаях проявления агрессивного поведения школьников</p>",
    ],
    paginationId: "pagination-consult",
  },
  {
    title: "Диагностика",
    imgSrc: "diagnostics",
    content: [
      "<p>проведение психолого-педагогического обследования детей дошкольного и школьного возраста с целью определению уровня актуального развития и дальнейшего прохождения ПМПК. Составление рекомендаций по дальнейшему образовательному маршруту</p>",
      "<p>диагностика уровня речевого развития, постановка, автоматизация и дифференциация звуков в речи</p>",
    ],
    paginationId: "pagination-diagnostics",
  },
  {
    title: "Коррекция",
    imgSrc: "correction",
    content: [
      "<p>проведение индивидуальных и групповых коррекционно-развивающих занятий с детьми дошкольного и младшего школьного возраста</p>",
      "<p>использование нейропсихологических методик в работе с детьми с СДВГ, РАС, имеющими трудности обучения в школе, с нарушением внимания, памяти, мышления</p>",
      "<p>проведение индивидуальных и групповых занятий с детьми старшего дошкольного возраста по подготовке к школе</p>",
    ],
    paginationId: "pagination-correction",
  },
  {
    title: "Медиация",
    imgSrc: "mediation",
    content: [
      "<p>Медиация – технология, позволяющая «услышать» друг друга и сэкономить время и ресурсы. В конфликте всегда есть выход!</p>",
    ],
    paginationId: "pagination-mediation",
  },
];

const projects = [
  {
    id: 1,
    title:
      "Психологические консультации с помощью видеоигр в загородных оздоровительных лагерях",
    image: "./assets/img/gameplayproject1.jpeg",
    description: `
      Дети-подростки в возрасте с 10 до 17 лет, отдыхающие в муниципальном загородном оздоровительном лагере «Ласточка», на протяжении 4-ех сезонов проходили индивидуальные психологические консультации с психологами «Генезис» с помощью новейшей авторской методики, которая в своей работе использует видеоигры в качестве инструмента. Кроме того, проведены семинары о видеоиграх и их месте в жизни, культуре и их влиянии на психологическое и эмоциональное здоровье.
    `,
    details: [
      { label: "Срок реализации:", value: "Летний период 2024 года." },
      {
        label: "Охват:",
        value:
          "Более 1500 детей, проживающих на территории города Красноярска.",
      },
      { label: "Место проведения:", value: "Загородный лагерь «Ласточка»." },
      {
        label: "Источник финансирования:",
        value:
          "Cубсидия департамента социального развития администрации города Красноярска, собственные средства.",
      },
      {
        label: "Партнеры:",
        value:
          "Муниципальное автономное учреждение «Центр психолого-педагогической, медицинской и социальной помощи «Эго»;<br />Загородный стационарный детский оздоровительный лагерь «Ласточка»;<br />Муниципальное молодежное автономное учреждение «ИТ-Центр».",
      },
    ],
  },
  {
    id: 2,
    title: "Киберспортивная психология",
    image: "./assets/img/cypepsycho1.jpeg",
    description: `
      В рамках проекта на протяжении летнего периода 2024 года проводились на еженедельной основе киберспортивные тренировки по дисциплинам: Dota 2, Counter-strike 2, MK1 и EA FC 24 с участием киберспортивного тренера и психолога. Прорабатывались: умение работать с собственными эмоциями, повышение стрессоустойчивости, развитие коммуникативных навыков, повышение уверенности в себе. Кроме того, еженедельно проводились ценностно-смысловые дни, в рамках которых подростки совместно с психологами проходили сюжетноориентированные игры (The last of us, Ghost of Tsushima, God of war: Ragnarek), где прорабатывались: самоосознание, семейные ценности, инициатива и т.д.
    `,
    details: [
      { label: "Срок реализации:", value: "Июнь-Сентябрь 2024 года." },
      {
        label: "Охват:",
        value:
          "32 подростка в возрасте 14-18 лет, проживающих в городе Красноярске.",
      },
      {
        label: "Место проведения:",
        value: "Муниципальное молодежное автономное учреждение «ИТ-Центр».",
      },
      {
        label: "Источник финансирования:",
        value: "Cубсидия в рамках конкурса «Ты-город», собственные средства.",
      },
      {
        label: "Партнеры:",
        value:
          "Главное управление по физической культуре и спорту администрации города Красноярска;<br />Главное управление образования администрации города Красноярска;<br />Муниципальное автономное учреждение «Центр психолого-педагогической, медицинской и социальной помощи «Эго»;<br />Муниципальное молодежное автономное учреждение «ИТ-Центр»;<br />Телеканал «Енисей».",
      },
    ],
  },
];

const lightSwitches = document.querySelectorAll(".light-switch");
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem("dark-mode") === "true") {
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener("change", () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark-mode", true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("dark-mode", false);
      }
    });
  });
}

let swiperGameExperts = new Swiper(".slide-container.experts-games", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#button-next-experts",
    prevEl: "#button-prev-experts",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const elementMore = document.getElementById("slider");

const initialRendering = () => {
  const elements = elementMore.children;
  for (const element of elements) {
    const reviewedElement = element.lastElementChild.lastElementChild;
    const reviewedElementLength = reviewedElement.textContent
      .trim()
      .split(/\s+/).length;
    if (reviewedElementLength >= 50) {
      const extraText = reviewedElement.textContent
        .trim()
        .split(/\s+/)
        .slice(51)
        .join(" ");
      const extraTextLength = extraText.trim().split(/\s+/).length;
      const subStringLength = reviewedElement.lastElementChild.textContent
        .trim()
        .split(/\s+/).length;
      const subString = reviewedElement.lastElementChild.textContent
        .trim()
        .split(/\s+/)
        .slice(0, subStringLength - extraTextLength)
        .join(" ")
        .slice(0, -1);
      reviewedElement.lastElementChild.style.display = "none";
      const p = document.createElement("p");
      p.style.display = "block";
      p.append(subString + "...");
      reviewedElement.append(p);
      const div = document.createElement("div");
      div.id = "button-more";
      div.className = "pt-3 font-bold";
      div.append("Узнать больше");
      reviewedElement.append(div);
    }
  }
};

window.addEventListener("load", initialRendering);

elementMore.addEventListener("click", (event) => {
  const button = event.target.id;
  if (button !== "button-more") return;

  const textMore = event.target.closest(".text-more");

  const textMoreChildrenLength = textMore.children.length;

  if (textMore.lastElementChild.textContent === "Узнать больше") {
    textMore.children[textMoreChildrenLength - 2].style.display = "none";
    textMore.children[textMoreChildrenLength - 3].style.display = "block";
    textMore.lastElementChild.textContent = "Свернуть";
  } else {
    textMore.children[textMoreChildrenLength - 2].style.display = "block";
    textMore.children[textMoreChildrenLength - 3].style.display = "none";
    textMore.lastElementChild.textContent = "Узнать больше";
  }
});

const swiperWrapper = document.querySelector(".main-swiper .swiper-wrapper");

cardData.forEach((card) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide";
  swiperSlide.innerHTML = `
      <div class="rounded-md flex flex-col justify-center items-center">
        <h2 class="text-center">${card.title}</h2>
        <div class="flex justify-center items-center pt-5 pb-5">
          <img  src="/images/${card.imgSrc}.jpg" class="w-1/2 opacity-85 rounded-3xl" alt="${card.title}">
        </div>
        <div class="container swiper text-center">
          <div class="swiper-container child-swiper overflow-hidden">
            <div class="swiper-wrapper pb-5">
              ${card.content.map((content) => `<div class="swiper-slide px-2">${content}</div>`).join("")}
            </div>
            <div id="${card.paginationId}" class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    `;
  swiperWrapper.appendChild(swiperSlide);
});

const mainSwiper = new Swiper(".main-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

cardData.forEach((card) => {
  new Swiper(`.child-swiper:has(#${card.paginationId})`, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    nested: true,
    grabCursor: "true",
    pagination: {
      el: `#${card.paginationId}`,
      clickable: true,
      dynamicBullets: true,
    },
  });
});

let swiper = new Swiper(".slide-container", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#button-next-experts",
    prevEl: "#button-prev-experts",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

let swiperGames = new Swiper(".swiper-games-container", {
  loop: true,
  pagination: {
    el: ".swiper-games-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-games-button-next",
    prevEl: ".swiper-games-button-prev",
  },
});

const tabSystem = {
  init() {
    document.querySelectorAll(".card").forEach((card) => {
      const tabContainer = card.querySelector(".tabs");
      const tabMenu = tabContainer.querySelector(".tabs-menu");
      const tabs = Array.from(tabMenu.children);

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabSystem.toggle(card, tab.dataset.target);
        });

        // Initialize by showing the active tab's content
        if (tab.classList.contains("is-active")) {
          tabSystem.toggle(card, tab.dataset.target);
        }
      });
    });
  },
  toggle(card, targetId) {
    // Hide all tab contents within the same card
    const contents = card.querySelectorAll(".tab-content");
    contents.forEach((contentElement) => {
      contentElement.style.display =
        contentElement.id === targetId ? "block" : "none";
    });

    // Update active class in tab menu
    const tabs = card.querySelectorAll(".tabs-menu li");
    tabs.forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.target === targetId);
    });
  },
};

// Initialize the tab system
tabSystem.init();

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.getElementById("closeButton");

  window.openModal = function (src) {
    modalImage.src = src;
    modal.classList.remove("hidden");
  };

  closeButton.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  // Optionally, close the modal when clicking outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

var swiperVideo = new Swiper(".video", {
  slidesPerView: 1,
  loop: true,
  loopedSlides: 2,
  navigation: {
    nextEl: "#button-next-video",
    prevEl: "#button-prev-video",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
