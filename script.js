const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        console.log('CV downloaded by recruiter');
    });
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--header-bg)';
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

const skillData = [
    {
        category: "Programming Languages",
        icon: "fas fa-code",
        skills: ["Python 3", "Bash", "C++", "JavaScript ES6"]
    },
    {
        category: "Cybersecurity Tools",
        icon: "fas fa-shield-alt",
        skills: ["Nmap", "Wireshark", "Burp Suite", "Metasploit", "Hydra"]
    },
    {
        category: "Cloud & Other",
        icon: "fas fa-cloud",
        skills: ["AWS (Beginner)", "Git/GitHub", "Linux", "WordPress", "Web Development"]
    }
];

const skillsGrid = document.querySelector('.skills-grid');
skillsGrid.innerHTML = "";

skillData.forEach(section => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = "skill-category";

    const h3 = document.createElement('h3');
    h3.innerHTML = `<i class="${section.icon}"></i> ${section.category}`;
    categoryDiv.appendChild(h3);

    const tagsDiv = document.createElement('div');
    tagsDiv.className = "skill-tags";

    section.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = "skill-tag";
        span.textContent = skill;
        tagsDiv.appendChild(span);
    });

    categoryDiv.appendChild(tagsDiv);
    skillsGrid.appendChild(categoryDiv);
});

