import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { loadExperts, initializeSwiper, initialRendering } from "./experts.js";

const expertsGamesData = [
  {
    name: "Федотиков Матвей Александрович",
    photo: "fedotikov-photo",
    docs: [],
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
];
window.addEventListener("load", () => {
  loadExperts(expertsGamesData);
  initializeSwiper();
  initialRendering();
});
