const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.documentElement.toggleAttribute('data-theme');
  if(document.documentElement.hasAttribute('data-theme')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

const skillBars = document.querySelectorAll('.skill-bar div');

function animateSkills() {
  skillBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 50) {
      bar.style.width = bar.getAttribute('data-width');
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

const sections = document.querySelectorAll('section');

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add('fade-section');
  observer.observe(section);
});
