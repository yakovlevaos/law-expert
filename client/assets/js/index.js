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

let servicesSwiper = new Swiper(".slide-services-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: "#swiper-services-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#button-next-services",
    prevEl: "#button-prev-services",
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
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

let consultSwiper = new Swiper(".slide-consult-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  nested: true,
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
  nested: true,
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
  nested: true,
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

let mediationSwiper = new Swiper(".slide-mediation-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  nested: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: "#pagination-mediation",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#button-next-mediation",
    prevEl: "#button-prev-mediation",
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
