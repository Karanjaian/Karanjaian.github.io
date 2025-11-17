// Dark/Light Mode Toggle
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
  if(document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

// Animate Skill Bars when in viewport
const skills = document.querySelectorAll('.skill-bar div');

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
};

const animateSkills = () => {
  skills.forEach(skill => {
    if(isInViewport(skill)) {
      skill.style.width = skill.getAttribute('data-width');
    }
  });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
