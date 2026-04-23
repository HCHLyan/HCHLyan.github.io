const text = "Lyan's portfolio";
let i = 0;

function typeWriter() {
  const el = document.querySelector(".glitch");
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

window.addEventListener("load", () => {
  document.querySelector(".glitch").textContent = "";
  typeWriter();
});

/* SCROLL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// --- CÓDIGO JS PARA EL MODAL DE IMÁGENES ---
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".modal-close-btn");

document.querySelectorAll(".expandable-image").forEach((img) => {
  img.addEventListener("click", function () {
    modal.classList.add("open");
    modalImg.src = this.src;
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

/* ========== CHISPAS EN INPUTS =============*/
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const rect = input.getBoundingClientRect();
    particle.style.left = `${rect.left + Math.random() * rect.width}px`;
    particle.style.top = `${rect.top + Math.random() * rect.height}px`;

    particle.style.background = Math.random() > 0.5 ? "#ff00ff" : "#00f7ff";

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 600);
  });
});
