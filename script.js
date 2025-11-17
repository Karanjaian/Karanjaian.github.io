const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
  if(document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.skill-bar div').forEach(bar => {
    bar.style.width = bar.getAttribute('style').match(/\d+%/)[0];
  });
});
