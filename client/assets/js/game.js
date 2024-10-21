import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { loadExperts, initializeSwiper, initialRendering } from "./experts.js";

const expertsGamesData = [
  {
    name: "Федотиков Матвей Александрович",
    photo: "fedotikov-photo",
    docs: [],
    title: "педагог-психолог МАОУ СШ № 158 «Грани»",
    description: `председатель научного
              сектора студенческого совета института психолого-педагогического
              образования КГПУ им В.П. Астафьева, первый в России
              практик-психолог, использующий в работе видеоигры.`,
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
