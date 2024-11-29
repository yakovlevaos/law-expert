import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../css/style.css";

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
        <h3 class="font-bold text-center py-2">${expert.name}</h3>
        <h3 class="text-center py-2">${expert.title}</h3>
        <div class="flex justify-center items-center gap-x-3">${docsHTML}</div>
        
        <div class="text-more flex flex-col justify-center items-center text-center text-sm mx-10 mb-5">
          <p class="pt-2 pb-2 font-bold">${expert.description}</p>
        </div>  
    </div>
  `;
};

export const loadExperts = (data) => {
  const slider = document.getElementById("slider");
  data.forEach((expert) => {
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
