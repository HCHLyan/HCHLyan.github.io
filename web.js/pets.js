document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todas las imágenes que tienen la clase 'hover'
  const petImages = document.querySelectorAll(".hover");

  petImages.forEach((img) => {
    // Obtenemos la ruta del sonido del atributo data-sound
    const soundSrc = img.getAttribute("data-sound");

    if (soundSrc) {
      // Creamos el objeto de audio UNA SOLA VEZ por cada imagen
      const audio = new Audio(soundSrc);
      audio.volume = 0.5; // Volumen al 50%
      audio.loop = true;  // ¡Esto hace que el audio se repita infinitamente!

      // Evento: Cuando el cursor ENTRA a la imagen
      img.addEventListener("mouseenter", () => {
        // Reproducimos el audio
        audio.play().catch((error) => {
          console.log("No se pudo reproducir el sonido:", error);
        });
      });

      // Evento: Cuando el cursor SALE de la imagen
      img.addEventListener("mouseleave", () => {
        audio.pause();         // Pausamos el sonido inmediatamente
        audio.currentTime = 0; // Lo reiniciamos al segundo 0 para la próxima vez
      });
    }
  });
});