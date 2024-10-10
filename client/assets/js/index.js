import "../css/style.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { loadExperts, initializeSwiper, initialRendering } from "./experts.js";

window.addEventListener("load", () => {
  loadExperts();
  initializeSwiper();
  initialRendering();
});

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

let swiper = new Swiper(".slide-container.experts-general", {
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

const swiperVideo = new Swiper(".swiper-container.video", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#button-next-video",
    prevEl: "#button-prev-video",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
