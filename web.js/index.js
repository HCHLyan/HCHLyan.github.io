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

// --- CODE JS FOR MODAL IMAGES ---
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

/* ========== SPARKS ON INPUTS =============*/
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


/* ========================================================== */
/* ===== HAMBURGUER MENU ====== */
/* ========================================================== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.navigation');

// OPEN/CLOSE MENU WHEN CLICK ON THE HAMBURGUER
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// CLOSE THE MENU AUTOMATICALLY WHEN CLICK ON A LINK
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});
