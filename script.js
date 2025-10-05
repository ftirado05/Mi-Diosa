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
  

// === ACCESO POR CLAVE O CONTADOR ===
document.getElementById("accessBtn").addEventListener("click", () => {
  const clave = prompt("💌 Ingresa la clave secreta para acceder a la sorpresa:");
  const claveCorrecta = "teamo"; // <-- cambia la clave si quieres
  const countdownContainer = document.getElementById("countdown-container");
  const countdownText = document.getElementById("countdown-text");

  if (clave === claveCorrecta) {
    alert("💖 Clave correcta, prepárate para tu sorpresa...");
    window.location.href = "./1Ay10M.html";
  } else {
    alert("❌ Clave incorrecta... pero podrás verla cuando llegue el momento 💫");
    countdownContainer.style.display = "block";

    // Establecer la fecha objetivo (5 de octubre a las 00:00)
    const targetDate = new Date("October 5, 2025 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        countdownText.textContent = "🎁 Ya puedes abrir tu sorpresa 💖";
        setTimeout(() => {
          window.location.href = "./1Ay10M.html";
        }, 2000);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownText.textContent = `⏰ Faltan ${days}d ${hours}h ${minutes}m ${seconds}s para poder abrirlo 💌`;
      }
    }, 1000);
  }
});
