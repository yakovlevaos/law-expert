export const initModal = () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.getElementById("closeButton");

  if (!modal || !modalImage || !closeButton) {
    console.error("Modal elements are missing from the DOM.");
    return;
  }

  const openModal = (src) => {
    modalImage.src = src;
    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    modal.classList.add("hidden");
  };

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  return openModal;
};
