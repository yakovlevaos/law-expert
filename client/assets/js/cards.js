import { initModal } from "./modal.js";
import "../css/style.css";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    index: 1,
    title: "Психологические консультации с помощью видеоигр",
    period: "Летний период 2024 года.",
    coverage: "Более 1500 детей, проживающих на территории города Красноярска.",
    place: "Загородный лагерь «Ласточка».",
    funding:
      "Cубсидия департамента социального развития администрации города Красноярска, собственные средства.",
    partners: [
      "Муниципальное автономное учреждение «Центр психолого-педагогической, медицинской и социальной помощи «Эго»",
      "Загородный стационарный детский оздоровительный лагерь «Ласточка»",
      "Муниципальное молодежное автономное учреждение «ИТ-Центр»",
    ],
    description:
      "Дети-подростки в возрасте с 10 до 17 лет, отдыхающие в\n      муниципальном загородном оздоровительном лагере «Ласточка», на\n      протяжении 4-ех сезонов проходили индивидуальные\n      психологические консультации с психологами «Генезис» с помощью\n      новейшей авторской методики, которая в своей работы использует\n      видеоигры в качестве инструмента. Кроме того, проведены\n      семинары о видеоиграх и их месте в жизни, культуре и их\n      влиянии на психологическое и эмоциональное здоровье.",
    images: [
      "gameplayproject1",
      "gameplayproject2",
      "gameplayproject3",
      "gameplayproject4",
    ],
  },
  {
    index: 2,
    title: "Киберспортивная психология",
    period: "Июнь-Сентябрь 2024 года.",
    coverage:
      "32 подростка в возрасте 14-18 лет, проживающих в городе Красноярске.",
    place: "Муниципальное молодежное автономное учреждение «ИТ-Центр».",
    funding: "Субсидия в рамках конкурса «Ты-город», собственные средства.",
    partners: [
      "Главное управление по физической культуре и спорту администрации города Красноярска",
      "Главное управление образования администрации города Красноярска",
      "Муниципальное автономное учреждение «Центр психолого-педагогической, медицинской и социальной помощи «Эго»",
      "Муниципальное молодежное автономное учреждение «ИТ-Центр»",
      "Телеканал «Енисей»",
    ],
    description:
      "В рамках проекта на протяжении летнего периода 2024 года проводились на еженедельной основе киберспортивные тренировки по дисциплинам: Dota 2, Counter-strike 2, MK1 и EA FC 24 с участием киберспортивного тренера и психолога. Прорабатывались: умение работать с собственными эмоциями, повышение стрессоустойчивости, развитие коммуникативных навыков, повышение уверенности в себе. Кроме того, еженедельно проводились ценностно-смысловые дни, в рамках которых подростки совместно с психологами проходили сюжетноориентированные игры (The last of us, Ghost of Tsushima, God of war: Ragnarek), где прорабатывались: самоосознание, семейные ценности, инициатива и т.д. По итогам проекта был проведен киберспортивный турнир, а также проведена работа с родителями, в результате которой был снят видеоподкаст с психологами, где были разобраны все вопросы родительского сообщества о видеоиграх и их влиянии на детей. Публикации в СМИ: https://www.enisey.tv/news/post-69581/",
    images: [
      "cypepsycho1",
      "cypepsycho2",
      "cypepsycho3",
      "cypepsycho4",
      "cypepsycho5",
      "cypepsycho6",
      "cypepsycho7",
    ],
  },
];

const tabSystem = {
  init() {
    document.querySelectorAll(".card").forEach((card) => {
      const tabMenu = card.querySelector(".tabs-menu");
      const tabs = Array.from(tabMenu.children);

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          this.toggle(card, tab.dataset.target);
        });

        if (tab.classList.contains("is-active")) {
          this.toggle(card, tab.dataset.target);
        }
      });
    });
  },
  toggle(card, targetId) {
    const contents = card.querySelectorAll(".tab-content");
    contents.forEach((contentElement) => {
      contentElement.style.display =
        contentElement.id === targetId ? "block" : "none";
    });

    const tabs = card.querySelectorAll(".tabs-menu li");
    tabs.forEach((tab) => {
      const link = tab.querySelector("a");
      const isActive = tab.dataset.target === targetId;
      tab.classList.toggle("is-active", isActive);
      link.style.color = isActive ? "blue" : "grey";
    });

    // Initialize Swiper for tab 3 when it's opened
    if (targetId.startsWith("tab-") && targetId.endsWith("3")) {
      this.initSwiper(card);
    }
  },
  initSwiper(card) {
    const swiperContainer = card.querySelector(".swiper-container");
    if (swiperContainer && !swiperContainer.swiper) {
      new Swiper(swiperContainer, {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  },
};

const createCard = (project, index) => {
  const cardClass =
    index % 2 === 0
      ? "dark:bg-slate-900 bg-slate-100 md:rounded-2xl md:w-4/6 md:m-4 p-4"
      : "dark:bg-slate-900 bg-slate-100 md:rounded-2xl md:w-4/6 md:m-4 p-4 md:ml-auto";
  const html = `
    <div class="card ${cardClass}">
      <div class="tabs">
        <ul class="tabs-menu">
          <li class="is-active" data-target="tab-${index}-1">
            <a>Проект</a>
          </li>
          <li data-target="tab-${index}-2">
            <a>Описание проекта</a>
          </li>
          <li data-target="tab-${index}-3">
            <a>Фото</a>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="tab-${index}-1" style="display:none;">
        <h2 class="text-center">${project.title}</h2>
        <table class="table border-separate border-spacing-y-2 dark:bg-slate-900 bg-slate-100 dark:text-slate-100 text-slate-900 w-full">
          <tbody>
            <tr>
              <td class="max-sm:hidden w-1/3 pr-2 mb-0" rowspan="4">
                <img src="/images/${project.images[0]}.jpeg" alt="Image ${index}" class="w-full cursor-pointer card-screenshot" />
              </td>
              <td class="font-bold">Срок реализации:</td>
              <td>${project.period}</td>
            </tr>
            <tr>
              <td class="font-bold">Охват:</td>
              <td>${project.coverage}</td>
            </tr>
            <tr>
              <td class="font-bold">Место проведения:</td>
              <td>${project.place}</td>
            </tr>
            <tr>
              <td class="font-bold">Источник финансирования:</td>
              <td>${project.funding}</td>
            </tr>
            <tr>
              <td class="font-bold">Партнеры:</td>
              <td colspan="2">${project.partners.join("<br />")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-content px-2" id="tab-${index}-2" style="display:none;">
        <div class="flex">
          <img
            src="/images/${project.images[0]}.jpeg"
            alt="Видеоигры1"
            class="max-sm:hidden w-1/3 h-full cursor-pointer pr-4 card-screenshot"
          />
          <p>${project.description}</p>
        </div>
      </div>
      <div class="tab-content" id="tab-${index}-3" style="display:none;">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            ${project.images
              .map(
                (img) =>
                  `<div class="swiper-slide flex justify-center items-center">
                    <img src="/images/${img}.jpeg" alt="Image Slide" class="object-contain w-full cursor-pointer card-screenshot" />
                  </div>`,
              )
              .join("")}
          </div>
          <!-- Pagination -->
          <div class="swiper-pagination"></div>
          <!-- Navigation buttons -->
          <div class="swiper-button-prev swiper-navBtn"></div>
          <div class="swiper-button-next swiper-navBtn"></div>
        </div>
      </div>
    </div>
  `;
  return html;
};

export const loadCards = () => {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = projects
    .map((project, index) => createCard(project, index))
    .join("");

  tabSystem.init();

  const openModal = initModal();
  if (openModal) {
    document.querySelectorAll(".card-screenshot").forEach((img) => {
      img.addEventListener("click", function () {
        openModal(this.src);
      });
    });
  }
};
