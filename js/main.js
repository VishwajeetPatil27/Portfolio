const skills = [
  { name: 'Core Java', level: 94, note: 'OOP, collections, and strong fundamentals', icon: iconJava },
  { name: 'Spring Boot', level: 88, note: 'Backend development and REST APIs', icon: iconSpringBoot },
  { name: 'MySQL', level: 86, note: 'Database design, queries, and joins', icon: iconMysql },
  { name: 'Git & GitHub', level: 90, note: 'Version control and collaboration', icon: iconGit },
  { name: 'HTML', level: 95, note: 'Semantic, accessible page structure', icon: iconHtml },
  { name: 'CSS', level: 92, note: 'Responsive layouts and UI styling', icon: iconCss },
  { name: 'JavaScript', level: 90, note: 'Interactive front-end logic', icon: iconJs },
  { name: 'Problem Solving', level: 88, note: 'DSA-style thinking and debugging', icon: iconPython },
];

const projects = [
  
  {
    title: 'Student Mental Health Analysis System',
    description: 'A data-driven application designed to analyze student mental health using survey-based inputs and surface patterns that support student well-being and decision-making.',
    image: 'images/student.png',
    fallback: 'Mental Health',
    github: 'https://github.com/VishwajeetPatil27',
    live: 'https://vishwajeetpatil27.github.io/Mental_Health_SelfCheck/',
    tags: ['HTML', 'CSS', 'JS', 'ChatBot'],
    impact: 'Focused on identifying trends and generating awareness through data insights.',
  },
  {
    title: 'AgriBid',
    description: 'A full-stack online auction platform built with the MERN stack to enable fair and transparent bidding for agricultural products between farmers and buyers.',
    image: 'images/bid.png',
    fallback: 'AgriBid',
    github: 'https://github.com/VishwajeetPatil27',
    live: 'https://agricultural-product-auction-system.onrender.com',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    impact: 'Designed for real-world scalability, accessibility, and pricing efficiency.',
  },
  {
    title: 'Python Learning Platform',
    description: 'An interactive web-based learning platform that helps beginners learn Python through structured lessons, examples, and practice exercises.',
    image: 'images/python.png',
    fallback: 'Python Learning',
    github: 'https://github.com/VishwajeetPatil27',
    live: 'https://vishwajeetpatil27.github.io/website/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
    impact: 'Simplified beginner learning with a clean, step-by-step experience.',
  },
];

const timeline = [
  {
    role: 'Android Developer Intern',
    org: 'EduSkills',
    date: 'Internship Experience',
    desc: 'Worked on mobile development exposure and strengthened practical app-building fundamentals with a focus on implementation and collaboration.',
  },
  {
    role: 'AI/ML Intern',
    org: 'EduSkills',
    date: 'Internship Experience',
    desc: 'Explored machine learning concepts, model workflows, and data-oriented problem solving while building a stronger foundation in emerging technologies.',
  },
  {
    role: 'Java Fullstack Development',
    org: 'EduSkills',
    date: 'Training & Certification',
    desc: 'Built confidence in Java-based application development, backend thinking, and fullstack workflow fundamentals through structured learning.',
  },
];

const education = [
  {
    title: 'Bachelor of Technology (Computer Science Engineering)',
    sub: 'Tatyasaheb Kore Institute of Engineering and Technology, Warananagar',
    meta: 'CGPA: 8.30',
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    sub: 'Yashwantrao Chavan Warana Mahavidyalaya',
    meta: 'Percentage: 69.33%',
  },
  {
    title: 'Secondary School Certificate (SSC)',
    sub: 'Shivraj Vidyalaya, Aitwade Khurde',
    meta: 'Percentage: 86.55%',
  },
];

const activities = [
  {
    title: 'Media Coordinator',
    desc: 'ACES leadership and event coordination contribution with a creative and organized role in student community activities.',
  },
  {
    title: 'Core Member',
    desc: 'Active participation in Code Byte Club with collaboration, technical engagement, and peer-driven learning.',
  },
  {
    title: 'Cultural Committee Member',
    desc: 'Supported planning and execution of cultural events, building teamwork and communication skills beyond technical work.',
  },
];

const certificates = [
  {
    title: 'Android Developer Intern',
    org: 'EduSkills',
    image: 'images/android.png',
    fallback: 'Android Intern',
    desc: 'Internship certificate highlighting mobile development exposure and practical learning.',
  },
  {
    title: 'AI/ML Intern',
    org: 'EduSkills',
    image: 'images/AiMl.png',
    fallback: 'AI ML Intern',
    desc: 'Certificate for AI and ML internship experience focused on foundational concepts and applications.',
  },
  {
    title: 'Java Fullstack Development',
    org: 'EduSkills',
    image: 'images/fullstack.png',
    fallback: 'Java Fullstack',
    desc: 'Training certificate for Java full-stack development and backend-oriented learning.',
  },
];

const typingPhrases = ['Java Full-Stack Developer', 'Problem Solver', 'Web Technologies Enthusiast'];

const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const timelineWrap = document.getElementById('timeline');
const educationGrid = document.getElementById('education-grid');
const activitiesGrid = document.getElementById('activities-grid');
const certificatesGrid = document.getElementById('certificates-grid');
const typingTarget = document.getElementById('typing-text');
const header = document.getElementById('site-header');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const loader = document.getElementById('page-loader');
const contactForm = document.getElementById('contact-form');

function renderSkills() {
  const template = document.getElementById('skill-template');
  skillsGrid.innerHTML = '';

  skills.forEach((skill) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('h3').textContent = skill.name;
    node.querySelector('p').textContent = skill.note;
    node.querySelector('.skill-icon').innerHTML = skill.icon();
    skillsGrid.appendChild(node);
  });
}

function renderProjects() {
  const template = document.getElementById('project-template');
  projectsGrid.innerHTML = '';

  projects.forEach((project) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const image = node.querySelector('.project-image');
    const fallback = node.querySelector('.project-fallback');
    image.src = project.image;
    image.alt = `${project.title} project image`;
    image.addEventListener('error', () => {
      image.classList.add('hidden');
      fallback.classList.remove('hidden');
      fallback.querySelector('span').textContent = project.fallback;
    }, { once: true });
    node.querySelector('h3').textContent = project.title;
    node.querySelector('p').textContent = project.description;
    node.querySelector('.project-impact').textContent = project.impact;
    node.querySelector('.project-link').href = project.github;
    node.querySelector('.project-live-link').href = project.live;
    const tags = node.querySelector('.project-tags');
    tags.innerHTML = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
    projectsGrid.appendChild(node);
  });
}

function renderTimeline() {
  const template = document.getElementById('timeline-template');
  timelineWrap.innerHTML = '';

  timeline.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.timeline-role').textContent = item.role;
    node.querySelector('.timeline-org').textContent = item.org;
    node.querySelector('.timeline-date').textContent = item.date;
    node.querySelector('.timeline-desc').textContent = item.desc;
    timelineWrap.appendChild(node);
  });
}

function renderEducation() {
  const template = document.getElementById('education-template');
  educationGrid.innerHTML = '';

  education.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.edu-title').textContent = item.title;
    node.querySelector('.edu-sub').textContent = item.sub;
    node.querySelector('.mt-6').textContent = item.meta;
    educationGrid.appendChild(node);
  });
}

function renderActivities() {
  const template = document.getElementById('activity-template');
  activitiesGrid.innerHTML = '';

  activities.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('h3').textContent = item.title;
    node.querySelector('p').textContent = item.desc;
    activitiesGrid.appendChild(node);
  });
}

function renderCertificates() {
  const template = document.getElementById('certificate-template');
  certificatesGrid.innerHTML = '';

  certificates.forEach((certificate) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const image = node.querySelector('.certificate-image');
    const fallback = node.querySelector('.certificate-fallback');
    image.src = certificate.image;
    image.alt = `${certificate.title} certificate`;
    image.addEventListener('error', () => {
      image.classList.add('hidden');
      fallback.classList.remove('hidden');
      fallback.querySelector('span').textContent = certificate.fallback;
    }, { once: true });
    node.querySelector('h3').textContent = certificate.title;
    node.querySelector('p').textContent = `${certificate.org} · ${certificate.desc}`;
    certificatesGrid.appendChild(node);
  });
}

function setupTyping() {
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const phrase = typingPhrases[phraseIndex];

    if (deleting) {
      charIndex -= 1;
      typingTarget.textContent = phrase.slice(0, charIndex);
      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      }
    } else {
      charIndex += 1;
      typingTarget.textContent = phrase.slice(0, charIndex);
      if (charIndex >= phrase.length) {
        deleting = true;
        window.setTimeout(tick, 1200);
        return;
      }
    }

    window.setTimeout(tick, deleting ? 50 : 85);
  };

  tick();
}

function setupReveal() {
  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => observer.observe(item));
}

function setupHeader() {
  const onScroll = () => {
    document.body.classList.toggle('nav-scrolled', window.scrollY > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function setupMenu() {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      mobileMenu.classList.add('hidden');
    }
  });
}

function setupContactForm() {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:vspatil1627@gmail.com?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}

function setupYear() {
  const year = document.querySelector('[data-year]');
  year.textContent = new Date().getFullYear();
}

function hideLoader() {
  window.setTimeout(() => {
    loader.classList.add('is-hidden');
  }, 450);
}

function iconJava() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 14c-2.2-1.2-3-2.8-1.8-4.4C9.6 8.5 11 8 11 6.5"/>
      <path d="M14 7.2c1.3 1.3 1.3 2.9.1 4.2"/>
      <path d="M12 3c1.6 1.8 2 3.4.5 5.1"/>
    </svg>`;
}

function iconSpringBoot() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 16c1.4 1.2 3.2 2 6 2 4 0 6-2 6-5.5V5"/>
      <path d="M10 8c1.5-1.1 3.6-1.4 5.5-.7"/>
      <path d="M8 12.5c1.4-1 3.6-1.3 5.2-.5"/>
    </svg>`;
}

function iconPython() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 4.5h8a3.5 3.5 0 0 1 3.5 3.5v4.5A3.5 3.5 0 0 1 16 16H8a3.5 3.5 0 0 0-3.5 3.5V20"/>
      <path d="M16 19.5H8a3.5 3.5 0 0 1-3.5-3.5V11.5A3.5 3.5 0 0 1 8 8h8a3.5 3.5 0 0 0 3.5-3.5V4"/>
      <circle cx="9" cy="7" r="0.75" fill="currentColor" stroke="none"/>
      <circle cx="15" cy="17" r="0.75" fill="currentColor" stroke="none"/>
    </svg>`;
}

function iconC() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15.8 8.8a5 5 0 1 0 0 6.4"/>
      <path d="M14 12h4"/>
    </svg>`;
}

function iconHtml() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 4h12l-1.1 13L12 20l-4.9-3L6 4z"/>
      <path d="M9 8h6"/>
      <path d="M9.5 12h5"/>
    </svg>`;
}

function iconCss() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 4h12l-1.2 13.4L12 20l-4.8-2.6L6 4z"/>
      <path d="M9 8h6l-.3 3H9.3"/>
      <path d="M9.5 14h4.2"/>
    </svg>`;
}

function iconJs() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7.5 18.5c.7 1 1.8 1.5 3 1.5 1.8 0 3-1.1 3-2.7V5.5"/>
      <path d="M15.8 16.5c.5 1.1 1.5 1.8 2.9 1.8 1.4 0 2.5-.8 2.5-2.1 0-1.5-1.2-2.1-2.8-2.7-1.4-.5-2.2-.9-2.2-1.8 0-.9.7-1.4 1.8-1.4 1 0 1.7.4 2.2 1"/>
    </svg>`;
}

function iconMysql() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 17c2-1.2 4.8-2 8-2s6 .8 8 2"/>
      <path d="M7 8c1.8-1.1 3.8-1.6 5-1.6 2.8 0 4.7 1.4 5.9 3.6"/>
      <path d="M8 15c.7-2.5 2.3-4.2 4-4.2 2.1 0 3.9 2.2 5 5.2"/>
    </svg>`;
}

function iconGit() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3l9 9-9 9-9-9 9-9z"/>
      <path d="M9 12h6"/>
      <path d="M12 9v6"/>
    </svg>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderEducation();
  renderActivities();
  renderCertificates();
  setupTyping();
  setupReveal();
  setupHeader();
  setupMenu();
  setupContactForm();
  setupYear();
  hideLoader();
});
