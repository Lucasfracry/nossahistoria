const startBtn = document.getElementById("startBtn");
const timeline = document.getElementById("timeline");
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterModal = document.getElementById("letterModal");
const heartsContainer = document.querySelector(".hearts-container");

startBtn.addEventListener("click", () => {
  timeline.scrollIntoView({ behavior: "smooth" });
});

openLetter.addEventListener("click", () => {
  letterModal.classList.add("active");
  document.body.classList.add("modal-open");
});

closeLetter.addEventListener("click", () => {
  letterModal.classList.remove("active");
  document.body.classList.remove("modal-open");
});

letterModal.addEventListener("click", (event) => {
  if (event.target === letterModal) {
    letterModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 12 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 450);