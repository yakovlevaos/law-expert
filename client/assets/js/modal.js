export const initModal = () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalContent = document.getElementById("modalContent");
  const closeButton = document.getElementById("closeButton");

  if (!modal || !modalImage || !modalContent || !closeButton) {
    console.error("Modal elements are missing from the DOM.");
    return;
  }

  const openModal = (src) => {
    const ext = src.split('.').pop().toLowerCase();

    if (ext === 'mp4' || ext === 'webm' || ext === 'ogg') {
      // Handle video
      modalImage.style.display = 'none'; // Hide the image element

      // Create video element if not already present
      let videoElement = document.getElementById('modalVideo');
      if (!videoElement) {
        videoElement = document.createElement('video');
        videoElement.id = 'modalVideo';
        videoElement.className = 'max-w-full max-h-full md:p-20';
        videoElement.controls = true;
        modalContent.appendChild(videoElement);
      }

      videoElement.src = src;
      videoElement.style.display = 'block';
    } else {
      // Handle image
      // Hide video element if present
      const videoElement = document.getElementById('modalVideo');
      if (videoElement) {
        videoElement.style.display = 'none';
      }

      modalImage.src = src;
      modalImage.style.display = 'block';
    }

    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    // Pause video if it's playing
    const videoElement = document.getElementById('modalVideo');
    if (videoElement) {
      videoElement.pause();
    }
  };

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  return openModal;
};
