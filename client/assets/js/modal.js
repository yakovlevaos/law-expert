export function initializeModal() {
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeButton = document.getElementById("closeButton");

    window.openModal = function (src) {
      modalImage.src = src;
      modal.classList.remove("hidden");
      console.log("sdfd");
    };

    closeButton.addEventListener("click", function () {
      modal.classList.add("hidden");
    });

    // Optionally, close the modal when clicking outside the image
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
}
