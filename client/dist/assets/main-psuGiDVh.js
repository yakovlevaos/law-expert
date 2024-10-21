import"./modulepreload-polyfill-9p4a8sJU.js";import"./index-_oiXrOeT.js";import{i as l}from"./modal-Yooto6kQ.js";/* empty css              */import{S as o}from"./experts-AF8xnTQk.js";const c=[{index:1,title:"Психологические консультации с помощью видеоигр",period:"Летний период 2024 года.",coverage:"Более 1500 детей, проживающих на территории города Красноярска.",place:"Загородный лагерь «Ласточка».",funding:"Cубсидия департамента социального развития администрации города Красноярска, собственные средства.",partners:["Муниципальное автономное учреждение «Центр психолого-педагогической, медицинской и социальной помощи «Эго»","Загородный стационарный детский оздоровительный лагерь «Ласточка»","Муниципальное молодежное автономное учреждение «ИТ-Центр»"],description:`Дети-подростки в возрасте с 10 до 17 лет, отдыхающие в
      муниципальном загородном оздоровительном лагере «Ласточка», на
      протяжении 4-ех сезонов проходили индивидуальные
      психологические консультации с психологами «Генезис» с помощью
      новейшей авторской методики, которая в своей работы использует
      видеоигры в качестве инструмента. Кроме того, проведены
      семинары о видеоиграх и их месте в жизни, культуре и их
      влиянии на психологическое и эмоциональное здоровье.`,images:["gameplayproject1","gameplayproject2","gameplayproject3","gameplayproject4"]},{index:2,title:"Киберспортивная психология",period:"Июнь-Сентябрь 2024 года.",coverage:"32 подростка в возрасте 14-18 лет, проживающих в городе Красноярске.",place:"Муниципальное молодежное автономное учреждение «ИТ-Центр».",funding:"Субсидия в рамках конкурса «Ты-город», собственные средства.",partners:["Главное управление по физической культуре и спорту администрации города Красноярска","Главное управление образования администрации города Красноярска","Муниципальное автономное учреждение «Центр психолого-педагогической, медицинской и социальной помощи «Эго»","Муниципальное молодежное автономное учреждение «ИТ-Центр»","Телеканал «Енисей»"],description:"В рамках проекта на протяжении летнего периода 2024 года проводились на еженедельной основе киберспортивные тренировки по дисциплинам: Dota 2, Counter-strike 2, MK1 и EA FC 24 с участием киберспортивного тренера и психолога. Прорабатывались: умение работать с собственными эмоциями, повышение стрессоустойчивости, развитие коммуникативных навыков, повышение уверенности в себе. Кроме того, еженедельно проводились ценностно-смысловые дни, в рамках которых подростки совместно с психологами проходили сюжетноориентированные игры (The last of us, Ghost of Tsushima, God of war: Ragnarek), где прорабатывались: самоосознание, семейные ценности, инициатива и т.д. По итогам проекта был проведен киберспортивный турнир, а также проведена работа с родителями, в результате которой был снят видеоподкаст с психологами, где были разобраны все вопросы родительского сообщества о видеоиграх и их влиянии на детей. Публикации в СМИ: https://www.enisey.tv/news/post-69581/",images:["cypepsycho1","cypepsycho2","cypepsycho3","cypepsycho4","cypepsycho5","cypepsycho6","cypepsycho7"]}],d={init(){document.querySelectorAll(".card").forEach(t=>{const e=t.querySelector(".tabs-menu");Array.from(e.children).forEach(s=>{s.addEventListener("click",()=>{this.toggle(t,s.dataset.target)}),s.classList.contains("is-active")&&this.toggle(t,s.dataset.target)})})},toggle(t,e){t.querySelectorAll(".tab-content").forEach(a=>{a.style.display=a.id===e?"block":"none"}),t.querySelectorAll(".tabs-menu li").forEach(a=>{const r=a.querySelector("a"),n=a.dataset.target===e;a.classList.toggle("is-active",n),r.style.color=n?"blue":"grey"}),e.startsWith("tab-")&&e.endsWith("3")&&this.initSwiper(t)},initSwiper(t){const e=t.querySelector(".swiper-container");e&&!e.swiper&&new o(e,{slidesPerView:1,centeredSlides:!0,spaceBetween:10,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}},p=(t,e)=>`
    <div class="card ${e%2===0?"dark:bg-slate-900 bg-slate-100 md:rounded-2xl md:w-4/6 md:m-4 p-4":"dark:bg-slate-900 bg-slate-100 md:rounded-2xl md:w-4/6 md:m-4 p-4 md:ml-auto"}">
      <div class="tabs">
        <ul class="tabs-menu">
          <li class="is-active" data-target="tab-${e}-1">
            <a>Проект</a>
          </li>
          <li data-target="tab-${e}-2">
            <a>Описание проекта</a>
          </li>
          <li data-target="tab-${e}-3">
            <a>Фото</a>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="tab-${e}-1" style="display:none;">
        <h2 class="text-center">${t.title}</h2>
        <table class="table border-separate border-spacing-y-2 dark:bg-slate-900 bg-slate-100 dark:text-slate-100 text-slate-900 w-full">
          <tbody>
            <tr>
              <td class="max-sm:hidden w-1/3 pr-2 mb-0" rowspan="4">
                <img src="/images/${t.images[0]}.jpeg" alt="Image ${e}" class="w-full cursor-pointer card-screenshot" />
              </td>
              <td class="font-bold">Срок реализации:</td>
              <td>${t.period}</td>
            </tr>
            <tr>
              <td class="font-bold">Охват:</td>
              <td>${t.coverage}</td>
            </tr>
            <tr>
              <td class="font-bold">Место проведения:</td>
              <td>${t.place}</td>
            </tr>
            <tr>
              <td class="font-bold">Источник финансирования:</td>
              <td>${t.funding}</td>
            </tr>
            <tr>
              <td class="font-bold">Партнеры:</td>
              <td colspan="2">${t.partners.join("<br />")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-content px-2" id="tab-${e}-2" style="display:none;">
        <div class="flex">
          <img
            src="/images/${t.images[0]}.jpeg"
            alt="Видеоигры1"
            class="max-sm:hidden w-1/3 h-full cursor-pointer pr-4 card-screenshot"
          />
          <p>${t.description}</p>
        </div>
      </div>
      <div class="tab-content" id="tab-${e}-3" style="display:none;">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            ${t.images.map(a=>`<div class="swiper-slide flex justify-center items-center">
                    <img src="/images/${a}.jpeg" alt="Image Slide" class="object-contain w-full cursor-pointer card-screenshot" />
                  </div>`).join("")}
          </div>
          <!-- Pagination -->
          <div class="swiper-pagination"></div>
          <!-- Navigation buttons -->
          <div class="swiper-button-prev swiper-navBtn"></div>
          <div class="swiper-button-next swiper-navBtn"></div>
        </div>
      </div>
    </div>
  `,g=()=>{const t=document.getElementById("cardsContainer");t.innerHTML=c.map((i,s)=>p(i,s)).join(""),d.init();const e=l();e&&document.querySelectorAll(".card-screenshot").forEach(i=>{i.addEventListener("click",function(){e(this.src)})})};g();
