import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules"; // Importing modules separately
import "swiper/swiper-bundle.css"; // Import Swiper styles
import "../css/style.css";

const expertsData = [
  {
    name: "Дмитрий Владимирович Юрков",
    photo: "yurkov-photo",
    docs: ["yurkov-1", "yurkov-2", "yurkov-3", "yurkov-4", "yurkov-5"],
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

const createExpertCard = (expert) => {
  const docsHTML = expert.docs
    .map(
      (doc) =>
        `<a href="/docs/${doc}.pdf" target="_blank"><img src="/images/${doc}.jpg" class="w-10" /></a>`,
    )
    .join("");

  return `
    <div class="swiper-slide rounded-md flex flex-col justify-center items-center">
      <img src="/images/${expert.photo}.jpg" alt="expert photo" class="h-96 overflow-hidden rounded-md mx-auto mb-2"/>
        <h3 class="font-bold text-center pt-2 pb-4">${expert.name}</h3>
        <div class="flex justify-center items-center gap-x-3">${docsHTML}</div>
        <div class="text-more flex flex-col justify-center items-center text-center text-sm mx-10 mb-5">
          <p class="pt-2 pb-2 font-bold">${expert.description}</p>
        </div>  
    </div>
  `;
};

export const loadExperts = () => {
  const slider = document.getElementById("slider");
  expertsData.forEach((expert) => {
    slider.innerHTML += createExpertCard(expert);
  });
};

export const initializeSwiper = () => {
  new Swiper(".swiper-container.experts", {
    modules: [Navigation, Pagination], // Register modules
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    grabCursor: true,
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
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 1, spaceBetween: 20 },
      800: { slidesPerView: 2, spaceBetween: 40 },
    },
  });
};

export const initialRendering = () => {
  const elementMore = document.getElementById("slider");
  const elements = elementMore.children;

  for (const element of elements) {
    const reviewedElement = element.querySelector(".text-more");
    const reviewedElementLength = reviewedElement.textContent
      .trim()
      .split(/\s+/).length;

    if (reviewedElementLength >= 50) {
      const extraText = reviewedElement.textContent
        .trim()
        .split(/\s+/)
        .slice(51)
        .join(" ");
      const subString = reviewedElement.textContent
        .trim()
        .split(/\s+/)
        .slice(0, 50)
        .join(" ");

      // Set initial HTML
      reviewedElement.innerHTML = `<p>${subString}...</p>
        <div id="button-more" class="pt-3 font-bold">Узнать больше</div>`;

      // Event listener for "Узнать больше"
      reviewedElement
        .querySelector("#button-more")
        .addEventListener("click", () => {
          // Check if extra text is currently shown or not
          if (reviewedElement.textContent.includes("свернуть")) {
            // Collapse the text
            reviewedElement.innerHTML = `<p>${subString}...</p>
              <div id="button-more" class="pt-3 font-bold">Узнать больше</div>`;
          } else {
            // Show the full text
            reviewedElement.innerHTML = `<p>${subString} ${extraText}</p>
              <div id="button-more" class="pt-3 font-bold">Свернуть</div>`;
          }

          // Reattach the event listener to the new button
          reviewedElement
            .querySelector("#button-more")
            .addEventListener("click", () => {
              // Call the same function to toggle between states
              reviewedElement.innerHTML = reviewedElement.textContent.includes(
                "свернуть",
              )
                ? `<p>${subString}...</p>
                   <div id="button-more" class="pt-3 font-bold">Узнать больше</div>`
                : `<p>${subString} ${extraText}</p>
                   <div id="button-more" class="pt-3 font-bold">Свернуть</div>`;
            });
        });
    }
  }
};
