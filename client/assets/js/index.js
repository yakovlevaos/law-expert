import "../css/style.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { loadExperts, initializeSwiper, initialRendering } from "./experts.js";

const expertsData = [
  {
    name: "Екатерина Сергеевна Милованова",
    photo: "milovanova-photo",
    docs: [],
    title: "Директор",
    description:
      "Курирование реализации социальных проектов (в том числе за счёт грантовых средств), организация работы по сотрудничеству и выстраиванию партнёрских отношений, организация взаимодействия со специалистами-психологами, проведение мероприятий.",
  },
  {
    name: "Дмитрий Владимирович Юрков",
    photo: "yurkov-photo",
    docs: [
      "yurkov-1",
      "yurkov-2",
      "yurkov-3",
      "yurkov-4",
      "yurkov-5",
      "yurkov-6",
    ],
    title:
      "директор МАУ «Центр психолого-педагогической, медицинской и социальной помощи «Эго»",
    description: `педагог–психолог высшей категории, психиатр, судебный эксперт психолог
    (экспертный стаж 9 лет, специализация по вопросам экспертизы несовершеннолетних,
    детско-родительских отношений, сопровождение несовершеннолетних в уголовном процессе,
    этические экспертизы), почетный работник общего образования, Заслуженный педагог
    Красноярского края.`,
  },
  {
    name: "Евгений Сергеевич Эгле",
    photo: "egle-photo",
    docs: ["egle-1", "egle-2", "egle-3"],
    title: "Руководитель социально-психологической службы МАОУ СШ № 150",
    description: `Педагог-психолог высшей категории, медиатор.
    Медиация:
    - детско-родительских отношений;
    - супружеских споров;
    - при расторжении брака.`,
  },
  {
    name: "Ярошевич Лариса Петровна",
    photo: "yaroshevich-photo",
    docs: ["yaroshevich-1", "yaroshevich-2", "yaroshevich-3"],
    title: `педагог-психолог МАУ «ЦППМиСП «Эго», эксперт АНО ДО ЦППС «ГЕНЕЗИС»`,
    description: `высшее психолого-педагогическое образование, высшая категорию педагога-психолога,
    стаж профессиональной деятельности 24 года.
    Направления деятельности:
    - Диагностика и коррекция детско-родительских отношений;
    - Определение уровня актуального развития детей от 0 до 18 лет;
    - Оценка детско-родительских отношений при проведении судебных и досудебных психологических экспертиз.`,
  },
  {
    name: "Куцонец Александра Дияновна",
    photo: "kutsonets-photo",
    docs: [],
    title: `педагог-психолог высшей кв. категории, нейропсихолог,
    Московский психолого-социальный институт Специальность «Психология»
    Квалификация Психолог, преподаватель психологии стаж работы: 18 лет`,
    description: `нейропсихологическая диагностика, психологическая диагностика особенностей
    развития ребенка, определение уровня сформированности познавательной деятельности,
    способности к обучению, особенности эмоционально-волевой сферы, нейропсихологическая
    коррекция реализации коррекционно-развивающих программ с элементами игротерапии,
    арт-терапии, сказкотерапии, владение техниками НЛП и психодрамы, положительный и устойчивый
    результат коррекции и развития детей, с которыми ведется индивидуальная и групповая работа.`,
  },
  {
    name: "Куницина Екатерина Александровна",
    photo: "kunitsina-photo",
    docs: [],
    title: `заместитель директора по работе с клиентами;
    высшее психолого-педагогическое образование, стаж профессиональной деятельности 6 лет`,
    description: `Эффективное взаимодействие с клиентами, обработка запросов и заявок на услуги,
    заключение контрактов, проведение консультаций по услугам.`,
  },
  {
    name: "Сняткова Наталья Павловна",
    photo: "snyatkova-photo",
    docs: [],
    title: `учитель – дефектолог/ логопед высшей квалификационной категории;
    стаж профессиональной деятельности более 24 лет`,
    description: `Помощь обучающимся, испытывающим трудности в освоении основных
    общеобразовательных программ, развитии и социальной адаптации; обучающимся с
    тяжелыми нарушениями речи; обучающимся с задержкой психического развития;
    обучающимся с легкой и умеренной умственной отсталостью; обучающимся с расстройством аутистического спектра.`,
  },
  {
    name: "Зинаида Владимировна Маз",
    photo: "maz-photo",
    docs: [],
    title: `Учитель - логопед высшей кв. категории. Красноярский педагогический университет имени
    В.П. Астафьева. Стаж работы 15 лет. Красноярский педагогический университет имени
    В.П. Астафьева. «Медицинский логопед» ВГАПС Волгоградская гуманитарная академия.`,
    description: `Представитель сложной, немаловажной и очень интересной профессии.
    Консультации, диагностика речевого развития, коррекция речи, индивидуальные логопедические
    занятия, логопедический массаж, логопедические приемы восстановления функций жевания и глотания.`,
  },
];
window.addEventListener("load", () => {
  loadExperts(expertsData);
  initializeSwiper();
  initialRendering();
});

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

const swiperVideo = new Swiper(".swiper-container.video", {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: "#button-next-video",
    prevEl: "#button-prev-video",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
