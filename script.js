console.log("Portfolio loaded successfully!");

// DARK / LIGHT MODE TOGGLE
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode")
    ? "🌚"
    : "🌙";
});

// PRINT CV
document.getElementById("print-cv").addEventListener("click", () => {
  window.print();
});

// ANIMATE SKILL BARS ON SCROLL
const skillBars = document.querySelectorAll(".skill-bar span");

function animateSkills() {
  skillBars.forEach((bar) => {
    const level = bar.getAttribute("data-level");
    bar.style.width = level + "%";
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const top = skillsSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    animateSkills();
  }
});
