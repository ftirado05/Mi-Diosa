document.getElementById("revealBtn").addEventListener("click", () => {
    const surprise = document.getElementById("surprise");
    surprise.classList.remove("hidden");
  });
  
  // Animación de corazones
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.getElementById("hearts-container").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
  
  setInterval(createHeart, 300);
  
 // Mostrar carta y galería
document.getElementById("revealBtn").addEventListener("click", () => {
    document.getElementById("surprise").classList.remove("hidden");
  });
  
  // Música de fondo
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("musicBtn");
  let musicPlaying = false;
  
  musicBtn.addEventListener("click", () => {
    if (!musicPlaying) {
      music.play();
      musicBtn.textContent = "Música activada 🎵";
      musicPlaying = true;
    }
  });
  
  // Corazones flotantes
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.getElementById("hearts-container").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
  
  setInterval(createHeart, 300);
  
  // Función para abrir el lightbox (ventana emergente)
  function openLightbox(imageSrc, message) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxMessage = document.getElementById("lightbox-message");
  
    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
    lightboxMessage.textContent = message;
  }
  
  // Función para cerrar el lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  