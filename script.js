console.log("Portfolio loaded successfully!");

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const skillLevels = document.querySelectorAll(".skill-level");
window.addEventListener("scroll", () => {
    skillLevels.forEach(level => {
        const top = level.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            level.style.width = level.dataset.level + "%";
        }
    });
});

document.getElementById("printCV").addEventListener("click", () => {
    window.print();
});
