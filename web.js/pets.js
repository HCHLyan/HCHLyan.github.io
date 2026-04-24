document.addEventListener("DOMContentLoaded", () => { 
  const petImages = document.querySelectorAll(".hover");

  petImages.forEach((img) => { 
    const soundSrc = img.getAttribute("data-sound");

    if (soundSrc) { 
      const audio = new Audio(soundSrc);
      audio.volume = 0.5;
      audio.loop = true;

      // EVENT: WHEN HOVER ON IMAGE
      img.addEventListener("mouseenter", () => { 
        audio.play().catch((error) => {
          console.log("Couldn't play the sound:", error);
        });
      });

      // EVENT: WHEN HOVER GETS OUT OF THE IMAGE
      img.addEventListener("mouseleave", () => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  });
});