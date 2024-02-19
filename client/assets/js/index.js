import "../css/style.css";

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

const elementMore = document.getElementById("button-more");
elementMore.addEventListener("click", myFunction);
const elementLess = document.getElementById("button-less");
elementLess.addEventListener("click", myFunction);

function myFunction() {
  const text = document.getElementById("more");
  const buttonMore = document.getElementById("button-more");
  const buttonLess = document.getElementById("button-less");

  if (text.style.display === "none") {
    text.style.display = "block";
    buttonMore.style.display = "none";
    buttonLess.style.display = "block";
  } else {
    text.style.display = "none";
    buttonMore.style.display = "block";
    buttonLess.style.display = "none";
  }
}

let swiper = new Swiper(".slide-container", {
  slidesPerView: 2,
  spaceBetween: 40,
  sliderPerGroup: 4,
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

let consultSwiper = new Swiper(".slide-consult-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: "#pagination-consult",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#button-next-consult",
    prevEl: "#button-prev-consult",
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
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

let diagnosticsSwiper = new Swiper(".slide-diagnostics-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: "#pagination-diagnostics",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#button-next-diagnostics",
    prevEl: "#button-prev-diagnostics",
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
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
let correctionSwiper = new Swiper(".slide-correction-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: "#pagination-correction",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#button-next-correction",
    prevEl: "#button-prev-correction",
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
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
