/**
 * Vishwajeet Patil - Dynamic Portfolio Engine
 * Full frontend-driven portfolio with dynamic profile photo, certificates,
 * projects, info editing, localStorage persistence, and export/import backup.
 */

// ==========================================
// 1. DEFAULT DATA CONFIGURATION
// ==========================================
const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Vishwajeet Patil",
    initials: "VP",
    headline: "Java Full-Stack Developer | CSE Student",
    typingPhrases: [
      "Java Full-Stack Developer",
      "Problem Solver",
      "Web Technologies Enthusiast"
    ],
    availability: "Available for internships and developer roles",
    bio: "I build clean, reliable, and modern Java full-stack and web applications with a focus on user experience, scalability, and sharp problem solving. I enjoy turning ideas into practical products using Core Java, Spring Boot, MySQL, HTML, CSS, and JavaScript.",
    chips: ["Core Java", "Spring Boot", "MySQL", "Web Technologies"],
    avatar: "images/vp.jpeg",
    focus: "Java Full-Stack, Web Technologies",
    currently: "Building full-stack projects",
    status: "Open to Java full-stack & Web Technology internships and opportunities",
    aboutP1: "I am a Computer Science and Engineering student with a strong interest in Java full-stack development, web technologies, and building elegant digital experiences. I enjoy solving problems methodically, learning modern tools quickly, and designing applications that balance usability with technical strength.",
    aboutP2: "My goal is to contribute to a forward-thinking engineering team where I can sharpen my skills in Core Java, Spring Boot, MySQL, and responsive UI development while delivering work that is thoughtful and reliable.",
    coreStrengths: "Core Java, Spring Boot, MySQL, GitHub, Web Development",
    careerGoal: "Join a strong software team and build impactful products",
    email: "vspatil1627@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishwajeet-patil-626362289/",
    github: "https://github.com/VishwajeetPatil27",
    leetcode: "https://leetcode.com/u/Vishwajeet_S_Patil/",
    hackerrank: "https://www.hackerrank.com/profile/vspatil1627"
  },
  certificates: [
    {
      id: "cert-1",
      title: "Android Developer Intern",
      org: "EduSkills",
      image: "images/android.png",
      fallback: "Android Intern",
      desc: "Internship certificate highlighting mobile development exposure and practical learning."
    },
    {
      id: "cert-2",
      title: "AI/ML Intern",
      org: "EduSkills",
      image: "images/AiMl.png",
      fallback: "AI ML Intern",
      desc: "Certificate for AI and ML internship experience focused on foundational concepts and applications."
    },
    {
      id: "cert-3",
      title: "Java Fullstack Development",
      org: "EduSkills",
      image: "images/fullstack.png",
      fallback: "Java Fullstack",
      desc: "Training certificate for Java full-stack development and backend-oriented learning."
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Student Mental Health Analysis System",
      description: "A data-driven application designed to analyze student mental health using survey-based inputs and surface patterns that support student well-being and decision-making.",
      image: "images/student.png",
      fallback: "Mental Health",
      github: "https://github.com/VishwajeetPatil27",
      live: "https://vishwajeetpatil27.github.io/Mental_Health_SelfCheck/",
      tags: ["HTML", "CSS", "JS", "ChatBot"],
      impact: "Focused on identifying trends and generating awareness through data insights."
    },
    {
      id: "proj-2",
      title: "AgriBid",
      description: "A full-stack online auction platform built with the MERN stack to enable fair and transparent bidding for agricultural products between farmers and buyers.",
      image: "images/bid.png",
      fallback: "AgriBid",
      github: "https://github.com/VishwajeetPatil27",
      live: "https://agricultural-product-auction-system.onrender.com",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      impact: "Designed for real-world scalability, accessibility, and pricing efficiency."
    },
    {
      id: "proj-3",
      title: "Python Learning Platform",
      description: "An interactive web-based learning platform that helps beginners learn Python through structured lessons, examples, and practice exercises.",
      image: "images/python.png",
      fallback: "Python Learning",
      github: "https://github.com/VishwajeetPatil27",
      live: "https://vishwajeetpatil27.github.io/website/",
      tags: ["HTML", "CSS", "JavaScript", "Python"],
      impact: "Simplified beginner learning with a clean, step-by-step experience."
    }
  ],
  skills: [
    { id: "sk-1", name: "Core Java", note: "OOP, collections, and strong fundamentals", iconKey: "java" },
    { id: "sk-2", name: "Spring Boot", note: "Backend development and REST APIs", iconKey: "springboot" },
    { id: "sk-3", name: "MySQL", note: "Database design, queries, and joins", iconKey: "mysql" },
    { id: "sk-4", name: "Git & GitHub", note: "Version control and collaboration", iconKey: "git" },
    { id: "sk-5", name: "HTML", note: "Semantic, accessible page structure", iconKey: "html" },
    { id: "sk-6", name: "CSS", note: "Responsive layouts and UI styling", iconKey: "css" },
    { id: "sk-7", name: "JavaScript", note: "Interactive front-end logic", iconKey: "js" },
    { id: "sk-8", name: "Problem Solving", note: "DSA-style thinking and debugging", iconKey: "python" }
  ],
  education: [
    {
      id: "edu-1",
      title: "Bachelor of Technology (Computer Science Engineering)",
      sub: "Tatyasaheb Kore Institute of Engineering and Technology, Warananagar",
      meta: "CGPA: 8.30"
    },
    {
      id: "edu-2",
      title: "Higher Secondary Certificate (HSC)",
      sub: "Yashwantrao Chavan Warana Mahavidyalaya",
      meta: "Percentage: 69.33%"
    },
    {
      id: "edu-3",
      title: "Secondary School Certificate (SSC)",
      sub: "Shivraj Vidyalaya, Aitwade Khurde",
      meta: "Percentage: 86.55%"
    }
  ],
  activities: [
    {
      id: "act-1",
      title: "Media Coordinator",
      desc: "ACES leadership and event coordination contribution with a creative and organized role in student community activities."
    },
    {
      id: "act-2",
      title: "Core Member",
      desc: "Active participation in Code Byte Club with collaboration, technical engagement, and peer-driven learning."
    },
    {
      id: "act-3",
      title: "Cultural Committee Member",
      desc: "Supported planning and execution of cultural events, building teamwork and communication skills beyond technical work."
    }
  ]
};

// ==========================================
// 2. STATE, STORAGE & AUTH MANAGEMENT
// ==========================================
const STORAGE_KEY = "vspatil_portfolio_data_v2";
const AUTH_STORAGE_KEY = "vspatil_portfolio_auth_hash_v2";
const SESSION_STORAGE_KEY = "vspatil_portfolio_owner_session_v2";
// Master authentication hash (SHA-256)
const DEFAULT_AUTH_HASH = "a3815ee4e20bed9203b8dd9f8eb38b081f0831581cd54fe0a6da7154eac4588e";

let appState = null;
let isEditMode = false;
let isOwnerAuthenticated = false;
let typingInterval = null;

// Pure JS SHA-256 fallback (standard Big-Endian 64-bit length)
function sha256Fallback(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }
  var words = [];
  var asciiBitLength = ascii.length * 8;
  var hash = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  var k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];

  for (var i = 0; i < ascii.length; i++) {
    words[i >> 2] |= (ascii.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
  }
  words[asciiBitLength >> 5] |= 0x80 << (24 - (asciiBitLength % 32));
  words[(((asciiBitLength + 64) >> 9) << 4) + 15] = asciiBitLength;

  for (var j = 0; j < words.length; j += 16) {
    var w = words.slice(j, j + 16);
    var [a, b, c, d, e, f, g, h] = hash;

    for (var i = 0; i < 64; i++) {
      if (i >= 16) {
        var s0 = rightRotate(w[i - 15] || 0, 7) ^ rightRotate(w[i - 15] || 0, 18) ^ ((w[i - 15] || 0) >>> 3);
        var s1 = rightRotate(w[i - 2] || 0, 17) ^ rightRotate(w[i - 2] || 0, 19) ^ ((w[i - 2] || 0) >>> 10);
        w[i] = ((w[i - 16] || 0) + s0 + (w[i - 7] || 0) + s1) | 0;
      }
      var ch = (e & f) ^ (~e & g);
      var temp1 = (h + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + ch + k[i] + (w[i] || 0)) | 0;
      var maj = (a & b) ^ (a & c) ^ (b & c);
      var temp2 = ((rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + maj) | 0;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) | 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) | 0;
    }

    hash[0] = (hash[0] + a) | 0;
    hash[1] = (hash[1] + b) | 0;
    hash[2] = (hash[2] + c) | 0;
    hash[3] = (hash[3] + d) | 0;
    hash[4] = (hash[4] + e) | 0;
    hash[5] = (hash[5] + f) | 0;
    hash[6] = (hash[6] + g) | 0;
    hash[7] = (hash[7] + h) | 0;
  }

  return hash.map(h => (h >>> 0).toString(16).padStart(8, "0")).join("");
}

async function hashString(str) {
  if (window.crypto && window.crypto.subtle) {
    try {
      const msgBuffer = new TextEncoder().encode(str);
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    } catch (e) {
      console.warn("Crypto subtle fallback triggered:", e);
    }
  }
  return sha256Fallback(str);
}

function getStoredAuthHash() {
  return localStorage.getItem(AUTH_STORAGE_KEY) || DEFAULT_AUTH_HASH;
}

function checkIsOwnerAuthenticated() {
  return (
    sessionStorage.getItem(SESSION_STORAGE_KEY) === "true" ||
    localStorage.getItem(SESSION_STORAGE_KEY) === "true"
  );
}

function setOwnerAuthenticated(remember = true) {
  isOwnerAuthenticated = true;
  document.body.classList.add("owner-authenticated");
  if (remember) {
    localStorage.setItem(SESSION_STORAGE_KEY, "true");
  } else {
    sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
  }
  updateAuthUI();
  renderCertificates();
  renderProjects();
}

function lockOwnerSession() {
  isOwnerAuthenticated = false;
  if (isEditMode) {
    isEditMode = false;
    document.body.classList.remove("edit-mode-active");
    const indicator = document.getElementById("edit-mode-indicator-text");
    if (indicator) indicator.textContent = "Edit Mode: OFF";
    const toggleBtn = document.getElementById("toggle-edit-mode-btn");
    if (toggleBtn) toggleBtn.classList.remove("primary");
  }
  localStorage.removeItem(SESSION_STORAGE_KEY);
  sessionStorage.removeItem(SESSION_STORAGE_KEY);
  document.body.classList.remove("owner-authenticated");
  closeStudio();
  updateAuthUI();
  renderCertificates();
  renderProjects();
  showToast("Studio locked. Visitor mode active.", "info");
}

function updateAuthUI() {
  const navText = document.getElementById("nav-customize-text");
  const navLock = document.getElementById("nav-lock-icon");
  const mobileText = document.getElementById("mobile-customize-text");
  const mobileLock = document.getElementById("mobile-lock-icon");

  if (isOwnerAuthenticated) {
    if (navText) navText.textContent = "Studio 🔓";
    if (navLock) {
      navLock.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>';
    }
    if (mobileText) mobileText.textContent = "Studio (Unlocked) 🔓";
    if (mobileLock) {
      mobileLock.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>';
    }
  } else {
    if (navText) navText.textContent = "Customize";
    if (navLock) {
      navLock.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>';
    }
    if (mobileText) mobileText.textContent = "Customize Portfolio";
    if (mobileLock) {
      mobileLock.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>';
    }
  }
}

function openAuthModal() {
  const modal = document.getElementById("auth-modal-backdrop");
  const form = document.getElementById("auth-login-form");
  const errorMsg = document.getElementById("auth-error-msg");
  const input = document.getElementById("auth-password-input");

  if (!modal) return;
  if (form) form.reset();
  if (errorMsg) errorMsg.classList.add("hidden");

  modal.classList.add("is-open");
  setTimeout(() => {
    if (input) input.focus();
  }, 100);
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal-backdrop");
  if (modal) modal.classList.remove("is-open");
}

function initAuth() {
  const isAuth = checkIsOwnerAuthenticated();
  if (isAuth) {
    setOwnerAuthenticated(true);
  } else {
    isOwnerAuthenticated = false;
    document.body.classList.remove("owner-authenticated");
    updateAuthUI();
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    }
    const parsed = JSON.parse(raw);
    // Deep merge to ensure backward compatibility
    return {
      profile: { ...DEFAULT_PORTFOLIO_DATA.profile, ...(parsed.profile || {}) },
      certificates: Array.isArray(parsed.certificates) ? parsed.certificates : DEFAULT_PORTFOLIO_DATA.certificates,
      projects: Array.isArray(parsed.projects) ? parsed.projects : DEFAULT_PORTFOLIO_DATA.projects,
      skills: Array.isArray(parsed.skills) ? parsed.skills : DEFAULT_PORTFOLIO_DATA.skills,
      education: Array.isArray(parsed.education) ? parsed.education : DEFAULT_PORTFOLIO_DATA.education,
      activities: Array.isArray(parsed.activities) ? parsed.activities : DEFAULT_PORTFOLIO_DATA.activities
    };
  } catch (err) {
    console.error("Error loading portfolio data from localStorage:", err);
    return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
  }
}

function saveState(newState) {
  appState = newState;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (err) {
    console.warn("Storage quota warning or error:", err);
    showToast("Storage quota reached. Consider using smaller images or image URLs.", "error");
  }
  renderAll();
}

// ==========================================
// 3. IMAGE COMPRESSION UTILITY (CANVAS-BASED)
// ==========================================
function compressImageFile(file, maxWidth = 1000, maxHeight = 1000, quality = 0.82) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("Please upload a valid image file."));
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error("Failed to load image."));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.readAsDataURL(file);
  });
}

// ==========================================
// 4. ICON LIBRARY
// ==========================================
const icons = {
  java: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 14c-2.2-1.2-3-2.8-1.8-4.4C9.6 8.5 11 8 11 6.5"/>
      <path d="M14 7.2c1.3 1.3 1.3 2.9.1 4.2"/>
      <path d="M12 3c1.6 1.8 2 3.4.5 5.1"/>
    </svg>`,
  springboot: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 16c1.4 1.2 3.2 2 6 2 4 0 6-2 6-5.5V5"/>
      <path d="M10 8c1.5-1.1 3.6-1.4 5.5-.7"/>
      <path d="M8 12.5c1.4-1 3.6-1.3 5.2-.5"/>
    </svg>`,
  python: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 4.5h8a3.5 3.5 0 0 1 3.5 3.5v4.5A3.5 3.5 0 0 1 16 16H8a3.5 3.5 0 0 0-3.5 3.5V20"/>
      <path d="M16 19.5H8a3.5 3.5 0 0 1-3.5-3.5V11.5A3.5 3.5 0 0 1 8 8h8a3.5 3.5 0 0 0 3.5-3.5V4"/>
      <circle cx="9" cy="7" r="0.75" fill="currentColor" stroke="none"/>
      <circle cx="15" cy="17" r="0.75" fill="currentColor" stroke="none"/>
    </svg>`,
  mysql: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 17c2-1.2 4.8-2 8-2s6 .8 8 2"/>
      <path d="M7 8c1.8-1.1 3.8-1.6 5-1.6 2.8 0 4.7 1.4 5.9 3.6"/>
      <path d="M8 15c.7-2.5 2.3-4.2 4-4.2 2.1 0 3.9 2.2 5 5.2"/>
    </svg>`,
  git: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3l9 9-9 9-9-9 9-9z"/>
      <path d="M9 12h6"/>
      <path d="M12 9v6"/>
    </svg>`,
  html: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 4h12l-1.1 13L12 20l-4.9-3L6 4z"/>
      <path d="M9 8h6"/>
      <path d="M9.5 12h5"/>
    </svg>`,
  css: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 4h12l-1.2 13.4L12 20l-4.8-2.6L6 4z"/>
      <path d="M9 8h6l-.3 3H9.3"/>
      <path d="M9.5 14h4.2"/>
    </svg>`,
  js: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7.5 18.5c.7 1 1.8 1.5 3 1.5 1.8 0 3-1.1 3-2.7V5.5"/>
      <path d="M15.8 16.5c.5 1.1 1.5 1.8 2.9 1.8 1.4 0 2.5-.8 2.5-2.1 0-1.5-1.2-2.1-2.8-2.7-1.4-.5-2.2-.9-2.2-1.8 0-.9.7-1.4 1.8-1.4 1 0 1.7.4 2.2 1"/>
    </svg>`
};

function getIcon(key) {
  if (icons[key]) return icons[key]();
  return icons.java();
}

// ==========================================
// 5. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const iconSvg = type === "success" 
    ? `<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>`
    : type === "error"
    ? `<svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>`
    : `<svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;

  toast.innerHTML = `
    <span>${iconSvg}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3200);
}

// ==========================================
// 6. RENDERING FUNCTIONS
// ==========================================
function renderProfile() {
  const p = appState.profile;

  document.title = `${p.name} | Portfolio`;

  const navInitials = document.getElementById("nav-initials");
  if (navInitials) navInitials.textContent = p.initials || "VP";

  const navName = document.getElementById("nav-name");
  if (navName) navName.textContent = p.name;

  const heroAvail = document.getElementById("hero-availability");
  if (heroAvail) heroAvail.textContent = p.availability;

  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = p.name;

  const heroHeadline = document.getElementById("hero-headline");
  if (heroHeadline) heroHeadline.textContent = p.headline;

  const heroBio = document.getElementById("hero-bio");
  if (heroBio) heroBio.textContent = p.bio;

  // Profile Image
  const profileImg = document.getElementById("profile-image");
  if (profileImg) {
    profileImg.src = p.avatar || "images/vp.jpeg";
    profileImg.alt = `${p.name} profile photo`;
  }

  const studioAvatarPreview = document.getElementById("studio-avatar-preview");
  if (studioAvatarPreview) {
    studioAvatarPreview.src = p.avatar || "images/vp.jpeg";
  }

  // Chips
  const chipsContainer = document.getElementById("hero-chips");
  if (chipsContainer && Array.isArray(p.chips)) {
    chipsContainer.innerHTML = p.chips.map(chip => `<span class="chip">${chip.trim()}</span>`).join("");
  }

  // Developer Profile mini cards
  const heroFocus = document.getElementById("hero-focus");
  if (heroFocus) heroFocus.textContent = p.focus;

  const heroCurr = document.getElementById("hero-currently");
  if (heroCurr) heroCurr.textContent = p.currently;

  const heroStatus = document.getElementById("hero-status");
  if (heroStatus) heroStatus.textContent = p.status;

  // About Section
  const aboutP1 = document.getElementById("about-p1");
  if (aboutP1) aboutP1.textContent = p.aboutP1;

  const aboutP2 = document.getElementById("about-p2");
  if (aboutP2) aboutP2.textContent = p.aboutP2;

  const aboutStrengths = document.getElementById("about-strengths");
  if (aboutStrengths) aboutStrengths.textContent = p.coreStrengths;

  const aboutGoal = document.getElementById("about-goal");
  if (aboutGoal) aboutGoal.textContent = p.careerGoal;

  // Contact links
  const emailLink = document.getElementById("contact-email-link");
  if (emailLink) emailLink.href = `mailto:${p.email}`;
  const emailVal = document.getElementById("contact-email-val");
  if (emailVal) emailVal.textContent = p.email;
  const emailText = document.getElementById("contact-email-text");
  if (emailText) {
    emailText.href = `mailto:${p.email}`;
    emailText.textContent = p.email;
  }

  const setLink = (id, url, valId = null) => {
    const el = document.getElementById(id);
    if (el) el.href = url || "#";
    if (valId) {
      const valEl = document.getElementById(valId);
      if (valEl) {
        try {
          const parsed = new URL(url);
          valEl.textContent = parsed.pathname.replace(/^\//, "") || p.name;
        } catch {
          valEl.textContent = url || "";
        }
      }
    }
  };

  setLink("contact-linkedin-link", p.linkedin, "contact-linkedin-val");
  setLink("contact-leetcode-link", p.leetcode, "contact-leetcode-val");
  setLink("contact-hackerrank-link", p.hackerrank, "contact-hackerrank-val");
  setLink("contact-github-link", p.github, "contact-github-val");

  setLink("footer-linkedin-link", p.linkedin);
  setLink("footer-github-link", p.github);
  setLink("footer-leetcode-link", p.leetcode);
  setLink("footer-hackerrank-link", p.hackerrank);

  const footerName = document.getElementById("footer-name");
  if (footerName) footerName.textContent = p.name;

  // Restart typing phrases
  setupTyping();
}

function renderCertificates() {
  const grid = document.getElementById("certificates-grid");
  const template = document.getElementById("certificate-template");
  if (!grid || !template) return;

  grid.innerHTML = "";

  // If in Edit Mode and authenticated as owner, prepend "+ Add Certificate" card
  if (isOwnerAuthenticated && isEditMode) {
    const addCard = document.createElement("div");
    addCard.className = "add-card-placeholder certificate-card";
    addCard.innerHTML = `
      <div class="add-card-plus-icon">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
      </div>
      <div>
        <p class="font-display font-bold text-white text-base">Add New Certificate</p>
        <p class="text-xs text-slate-400 mt-1">Upload certificate image & details</p>
      </div>
    `;
    addCard.addEventListener("click", () => openCertModal());
    grid.appendChild(addCard);
  }

  appState.certificates.forEach((cert) => {
    const node = template.content.firstElementChild.cloneNode(true);

    const image = node.querySelector(".certificate-image");
    const fallback = node.querySelector(".certificate-fallback");
    image.src = cert.image;
    image.alt = `${cert.title} certificate`;

    image.addEventListener("error", () => {
      image.classList.add("hidden");
      fallback.classList.remove("hidden");
      fallback.querySelector("span").textContent = cert.fallback || cert.title;
    }, { once: true });

    node.querySelector("h3").textContent = cert.title;
    node.querySelector("p").textContent = `${cert.org} · ${cert.desc}`;

    // Lightbox click on preview
    const previewWrap = node.querySelector(".cert-click-preview");
    if (previewWrap) {
      previewWrap.addEventListener("click", (e) => {
        if (e.target.closest(".action-icon-btn")) return;
        openLightbox(cert);
      });
    }

    // Edit button
    const editBtn = node.querySelector(".edit-cert-btn");
    if (editBtn) {
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openCertModal(cert.id);
      });
    }

    // Delete button
    const deleteBtn = node.querySelector(".delete-cert-btn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteCert(cert.id);
      });
    }

    grid.appendChild(node);
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const template = document.getElementById("project-template");
  if (!grid || !template) return;

  grid.innerHTML = "";

  // If in Edit Mode and authenticated as owner, prepend "+ Add Project" card
  if (isOwnerAuthenticated && isEditMode) {
    const addCard = document.createElement("div");
    addCard.className = "add-card-placeholder project-card";
    addCard.innerHTML = `
      <div class="add-card-plus-icon">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
      </div>
      <div>
        <p class="font-display font-bold text-white text-base">Add New Project</p>
        <p class="text-xs text-slate-400 mt-1">Add title, screenshot, tags & demo links</p>
      </div>
    `;
    addCard.addEventListener("click", () => openProjectModal());
    grid.appendChild(addCard);
  }

  appState.projects.forEach((proj) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const image = node.querySelector(".project-image");
    const fallback = node.querySelector(".project-fallback");
    image.src = proj.image;
    image.alt = `${proj.title} project image`;

    image.addEventListener("error", () => {
      image.classList.add("hidden");
      fallback.classList.remove("hidden");
      fallback.querySelector("span").textContent = proj.fallback || proj.title;
    }, { once: true });

    node.querySelector("h3").textContent = proj.title;
    node.querySelector("p").textContent = proj.description;
    node.querySelector(".project-impact").textContent = proj.impact || "";

    const link = node.querySelector(".project-link");
    if (link) {
      if (proj.github) {
        link.href = proj.github;
        link.classList.remove("hidden");
      } else {
        link.classList.add("hidden");
      }
    }

    const liveLink = node.querySelector(".project-live-link");
    if (liveLink) {
      if (proj.live) {
        liveLink.href = proj.live;
        liveLink.classList.remove("hidden");
      } else {
        liveLink.classList.add("hidden");
      }
    }

    const tags = node.querySelector(".project-tags");
    if (tags && Array.isArray(proj.tags)) {
      tags.innerHTML = proj.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    }

    // Edit button
    const editBtn = node.querySelector(".edit-project-btn");
    if (editBtn) {
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openProjectModal(proj.id);
      });
    }

    // Delete button
    const deleteBtn = node.querySelector(".delete-project-btn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteProject(proj.id);
      });
    }

    grid.appendChild(node);
  });
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  const template = document.getElementById("skill-template");
  if (!grid || !template) return;

  grid.innerHTML = "";
  appState.skills.forEach((skill) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector("h3").textContent = skill.name;
    node.querySelector("p").textContent = skill.note;
    node.querySelector(".skill-icon").innerHTML = getIcon(skill.iconKey);
    grid.appendChild(node);
  });
}

function renderEducation() {
  const grid = document.getElementById("education-grid");
  const template = document.getElementById("education-template");
  if (!grid || !template) return;

  grid.innerHTML = "";
  appState.education.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".edu-title").textContent = item.title;
    node.querySelector(".edu-sub").textContent = item.sub;
    const badge = node.querySelector(".mt-6");
    if (badge) badge.textContent = item.meta;
    grid.appendChild(node);
  });
}

function renderActivities() {
  const grid = document.getElementById("activities-grid");
  const template = document.getElementById("activity-template");
  if (!grid || !template) return;

  grid.innerHTML = "";
  appState.activities.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector("h3").textContent = item.title;
    node.querySelector("p").textContent = item.desc;
    grid.appendChild(node);
  });
}

function renderStudioLists() {
  // Sync Certificates tab list
  const certsList = document.getElementById("studio-certs-list");
  if (certsList) {
    certsList.innerHTML = appState.certificates.map(cert => `
      <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-white/10 bg-slate-900/60">
        <div class="flex items-center gap-3 overflow-hidden">
          <img src="${cert.image}" alt="" class="w-10 h-10 rounded-lg object-cover border border-white/10 bg-slate-950 flex-shrink-0" onerror="this.src='images/android.png'" />
          <div class="truncate">
            <p class="font-bold text-white text-sm truncate">${cert.title}</p>
            <p class="text-xs text-slate-400 truncate">${cert.org}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button type="button" class="action-icon-btn !w-8 !h-8" onclick="openCertModal('${cert.id}')" title="Edit">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
          </button>
          <button type="button" class="action-icon-btn delete-btn !w-8 !h-8" onclick="deleteCert('${cert.id}')" title="Delete">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      </div>
    `).join("");
  }

  // Sync Projects tab list
  const projsList = document.getElementById("studio-projects-list");
  if (projsList) {
    projsList.innerHTML = appState.projects.map(proj => `
      <div class="flex items-center justify-between gap-3 p-3 rounded-xl border border-white/10 bg-slate-900/60">
        <div class="flex items-center gap-3 overflow-hidden">
          <img src="${proj.image}" alt="" class="w-12 h-8 rounded-lg object-cover border border-white/10 bg-slate-950 flex-shrink-0" onerror="this.src='images/bid.png'" />
          <div class="truncate">
            <p class="font-bold text-white text-sm truncate">${proj.title}</p>
            <p class="text-xs text-slate-400 truncate">${proj.tags ? proj.tags.join(', ') : ''}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button type="button" class="action-icon-btn !w-8 !h-8" onclick="openProjectModal('${proj.id}')" title="Edit">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
          </button>
          <button type="button" class="action-icon-btn delete-btn !w-8 !h-8" onclick="deleteProject('${proj.id}')" title="Delete">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      </div>
    `).join("");
  }

  // Sync Skills list in Studio
  const studioSkillsList = document.getElementById("studio-skills-list");
  if (studioSkillsList) {
    studioSkillsList.innerHTML = appState.skills.map((s, idx) => `
      <div class="flex items-center justify-between p-2 rounded-lg bg-slate-900/40 border border-white/5 text-xs">
        <span class="font-bold text-white">${s.name}</span>
        <span class="text-slate-400">${s.note}</span>
      </div>
    `).join("");
  }

  // Sync Education list in Studio
  const studioEduList = document.getElementById("studio-edu-list");
  if (studioEduList) {
    studioEduList.innerHTML = appState.education.map((e) => `
      <div class="p-2.5 rounded-lg bg-slate-900/40 border border-white/5 text-xs space-y-1">
        <p class="font-bold text-white">${e.title}</p>
        <p class="text-slate-400">${e.sub}</p>
        <span class="inline-block text-cyan-300 font-semibold">${e.meta}</span>
      </div>
    `).join("");
  }

  // Sync Profile Form Inputs
  const p = appState.profile;
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };
  setVal("inp-profile-name", p.name);
  setVal("inp-profile-initials", p.initials);
  setVal("inp-profile-headline", p.headline);
  setVal("inp-profile-typing", (p.typingPhrases || []).join(", "));
  setVal("inp-profile-availability", p.availability);
  setVal("inp-profile-bio", p.bio);
  setVal("inp-profile-chips", (p.chips || []).join(", "));
  setVal("inp-profile-focus", p.focus);
  setVal("inp-profile-currently", p.currently);
  setVal("inp-profile-status", p.status);
  setVal("inp-profile-about-p1", p.aboutP1);
  setVal("inp-profile-about-p2", p.aboutP2);
  setVal("inp-profile-strengths", p.coreStrengths);
  setVal("inp-profile-goal", p.careerGoal);
  setVal("studio-avatar-url", p.avatar);

  // Sync Contact Form Inputs
  setVal("inp-contact-email", p.email);
  setVal("inp-contact-linkedin", p.linkedin);
  setVal("inp-contact-github", p.github);
  setVal("inp-contact-leetcode", p.leetcode);
  setVal("inp-contact-hackerrank", p.hackerrank);
}

function renderAll() {
  renderProfile();
  renderCertificates();
  renderProjects();
  renderSkills();
  renderEducation();
  renderActivities();
  renderStudioLists();
  setupReveal();
}

// ==========================================
// 7. TYPING ANIMATION
// ==========================================
function setupTyping() {
  const typingTarget = document.getElementById("typing-text");
  if (!typingTarget) return;

  if (typingInterval) {
    clearTimeout(typingInterval);
  }

  const phrases = (appState.profile.typingPhrases && appState.profile.typingPhrases.length > 0)
    ? appState.profile.typingPhrases
    : ["Java Developer", "Problem Solver"];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const phrase = phrases[phraseIndex] || "";

    if (deleting) {
      charIndex -= 1;
      typingTarget.textContent = phrase.slice(0, Math.max(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    } else {
      charIndex += 1;
      typingTarget.textContent = phrase.slice(0, charIndex);
      if (charIndex >= phrase.length) {
        deleting = true;
        typingInterval = window.setTimeout(tick, 1400);
        return;
      }
    }

    typingInterval = window.setTimeout(tick, deleting ? 45 : 80);
  };

  tick();
}

// ==========================================
// 8. PROFILE PHOTO HANDLERS
// ==========================================
function setupProfilePhotoHandlers() {
  // 1. Quick photo button on Hero image
  const quickBtn = document.getElementById("quick-change-photo-btn");
  const quickInput = document.getElementById("quick-photo-file-input");

  if (quickBtn && quickInput) {
    quickBtn.addEventListener("click", () => {
      if (!isOwnerAuthenticated) {
        openAuthModal();
        return;
      }
      quickInput.click();
    });
    quickInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        showToast("Processing & optimizing photo...", "info");
        const compressedBase64 = await compressImageFile(file, 800, 800, 0.85);
        appState.profile.avatar = compressedBase64;
        saveState(appState);
        showToast("Profile picture updated successfully!", "success");
      } catch (err) {
        showToast(err.message || "Failed to upload photo", "error");
      }
      quickInput.value = "";
    });
  }

  // 2. Studio drawer avatar upload
  const studioFile = document.getElementById("studio-avatar-file");
  if (studioFile) {
    studioFile.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        showToast("Processing photo...", "info");
        const compressedBase64 = await compressImageFile(file, 800, 800, 0.85);
        appState.profile.avatar = compressedBase64;
        saveState(appState);
        showToast("Profile picture updated!", "success");
      } catch (err) {
        showToast(err.message || "Failed to process image", "error");
      }
      studioFile.value = "";
    });
  }

  // 3. Studio drawer avatar URL input
  const studioUrl = document.getElementById("studio-avatar-url");
  if (studioUrl) {
    studioUrl.addEventListener("change", () => {
      const url = studioUrl.value.trim();
      if (url) {
        appState.profile.avatar = url;
        saveState(appState);
        showToast("Photo URL updated!", "success");
      }
    });
  }

  // 4. Reset Avatar
  const resetBtn = document.getElementById("studio-reset-avatar-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      appState.profile.avatar = DEFAULT_PORTFOLIO_DATA.profile.avatar;
      saveState(appState);
      showToast("Reset to default profile photo", "info");
    });
  }
}

// ==========================================
// 9. CERTIFICATES CRUD
// ==========================================
function openCertModal(certId = null) {
  if (!isOwnerAuthenticated) {
    openAuthModal();
    return;
  }
  const modal = document.getElementById("cert-modal-backdrop");
  const form = document.getElementById("cert-form");
  const title = document.getElementById("cert-modal-title");
  const preview = document.getElementById("cert-preview-img");

  if (!modal || !form) return;

  form.reset();

  if (certId) {
    const cert = appState.certificates.find(c => c.id === certId);
    if (!cert) return;
    title.textContent = "Edit Certificate";
    document.getElementById("cert-id").value = cert.id;
    document.getElementById("cert-title").value = cert.title;
    document.getElementById("cert-org").value = cert.org;
    document.getElementById("cert-desc").value = cert.desc;
    document.getElementById("cert-image-url").value = cert.image;
    preview.src = cert.image;
  } else {
    title.textContent = "Add New Certificate";
    document.getElementById("cert-id").value = "";
    preview.src = "images/android.png";
  }

  modal.classList.add("is-open");
}

function closeCertModal() {
  const modal = document.getElementById("cert-modal-backdrop");
  if (modal) modal.classList.remove("is-open");
}

function deleteCert(certId) {
  if (!isOwnerAuthenticated) {
    openAuthModal();
    return;
  }
  const cert = appState.certificates.find(c => c.id === certId);
  const name = cert ? cert.title : "this certificate";
  if (!confirm(`Are you sure you want to remove "${name}"?`)) return;

  appState.certificates = appState.certificates.filter(c => c.id !== certId);
  saveState(appState);
  showToast("Certificate deleted", "info");
}

function setupCertHandlers() {
  const modal = document.getElementById("cert-modal-backdrop");
  const form = document.getElementById("cert-form");
  const fileInput = document.getElementById("cert-file-input");
  const urlInput = document.getElementById("cert-image-url");
  const preview = document.getElementById("cert-preview-img");
  const closeBtn = document.getElementById("close-cert-modal-btn");
  const cancelBtn = document.getElementById("cancel-cert-modal-btn");
  const addBtnHero = document.getElementById("add-cert-btn");
  const addBtnStudio = document.getElementById("studio-add-cert-btn");

  if (addBtnHero) addBtnHero.addEventListener("click", () => openCertModal());
  if (addBtnStudio) addBtnStudio.addEventListener("click", () => openCertModal());
  if (closeBtn) closeBtn.addEventListener("click", closeCertModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeCertModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeCertModal();
    });
  }

  // Image preview on URL input
  if (urlInput && preview) {
    urlInput.addEventListener("input", () => {
      const val = urlInput.value.trim();
      if (val) preview.src = val;
    });
  }

  // Image preview & compression on file upload
  let uploadedCertDataUrl = "";
  if (fileInput && preview) {
    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        showToast("Processing certificate image...", "info");
        uploadedCertDataUrl = await compressImageFile(file, 1000, 1000, 0.82);
        preview.src = uploadedCertDataUrl;
        if (urlInput) urlInput.value = "";
        showToast("Image ready!", "success");
      } catch (err) {
        showToast(err.message, "error");
      }
    });
  }

  // Form submit
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("cert-id").value;
      const title = document.getElementById("cert-title").value.trim();
      const org = document.getElementById("cert-org").value.trim();
      const desc = document.getElementById("cert-desc").value.trim();
      const url = urlInput ? urlInput.value.trim() : "";

      const finalImage = uploadedCertDataUrl || url || preview.src || "images/android.png";

      if (id) {
        // Edit existing
        const index = appState.certificates.findIndex(c => c.id === id);
        if (index !== -1) {
          appState.certificates[index] = {
            ...appState.certificates[index],
            title,
            org,
            desc,
            image: finalImage,
            fallback: title
          };
          showToast(`Updated "${title}"!`, "success");
        }
      } else {
        // Create new
        const newCert = {
          id: `cert-${Date.now()}`,
          title,
          org,
          desc,
          image: finalImage,
          fallback: title
        };
        appState.certificates.unshift(newCert);
        showToast(`Added "${title}"!`, "success");
      }

      uploadedCertDataUrl = "";
      saveState(appState);
      closeCertModal();
    });
  }
}

// ==========================================
// 10. PROJECTS CRUD
// ==========================================
function openProjectModal(projId = null) {
  if (!isOwnerAuthenticated) {
    openAuthModal();
    return;
  }
  const modal = document.getElementById("project-modal-backdrop");
  const form = document.getElementById("project-form");
  const title = document.getElementById("project-modal-title");
  const preview = document.getElementById("project-preview-img");

  if (!modal || !form) return;

  form.reset();

  if (projId) {
    const proj = appState.projects.find(p => p.id === projId);
    if (!proj) return;
    title.textContent = "Edit Project";
    document.getElementById("project-id").value = proj.id;
    document.getElementById("project-title").value = proj.title;
    document.getElementById("project-desc").value = proj.description;
    document.getElementById("project-impact").value = proj.impact || "";
    document.getElementById("project-tags").value = (proj.tags || []).join(", ");
    document.getElementById("project-github").value = proj.github || "";
    document.getElementById("project-live").value = proj.live || "";
    document.getElementById("project-image-url").value = proj.image;
    preview.src = proj.image;
  } else {
    title.textContent = "Add New Project";
    document.getElementById("project-id").value = "";
    preview.src = "images/bid.png";
  }

  modal.classList.add("is-open");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal-backdrop");
  if (modal) modal.classList.remove("is-open");
}

function deleteProject(projId) {
  if (!isOwnerAuthenticated) {
    openAuthModal();
    return;
  }
  const proj = appState.projects.find(p => p.id === projId);
  const name = proj ? proj.title : "this project";
  if (!confirm(`Are you sure you want to remove "${name}"?`)) return;

  appState.projects = appState.projects.filter(p => p.id !== projId);
  saveState(appState);
  showToast("Project deleted", "info");
}

function setupProjectHandlers() {
  const modal = document.getElementById("project-modal-backdrop");
  const form = document.getElementById("project-form");
  const fileInput = document.getElementById("project-file-input");
  const urlInput = document.getElementById("project-image-url");
  const preview = document.getElementById("project-preview-img");
  const closeBtn = document.getElementById("close-project-modal-btn");
  const cancelBtn = document.getElementById("cancel-project-modal-btn");
  const addBtnHero = document.getElementById("add-project-btn");
  const addBtnStudio = document.getElementById("studio-add-project-btn");

  if (addBtnHero) addBtnHero.addEventListener("click", () => openProjectModal());
  if (addBtnStudio) addBtnStudio.addEventListener("click", () => openProjectModal());
  if (closeBtn) closeBtn.addEventListener("click", closeProjectModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeProjectModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  if (urlInput && preview) {
    urlInput.addEventListener("input", () => {
      const val = urlInput.value.trim();
      if (val) preview.src = val;
    });
  }

  let uploadedProjectDataUrl = "";
  if (fileInput && preview) {
    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        showToast("Processing screenshot...", "info");
        uploadedProjectDataUrl = await compressImageFile(file, 1100, 700, 0.82);
        preview.src = uploadedProjectDataUrl;
        if (urlInput) urlInput.value = "";
        showToast("Screenshot ready!", "success");
      } catch (err) {
        showToast(err.message, "error");
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("project-id").value;
      const title = document.getElementById("project-title").value.trim();
      const description = document.getElementById("project-desc").value.trim();
      const impact = document.getElementById("project-impact").value.trim();
      const tags = document.getElementById("project-tags").value.split(",").map(t => t.trim()).filter(Boolean);
      const github = document.getElementById("project-github").value.trim();
      const live = document.getElementById("project-live").value.trim();
      const url = urlInput ? urlInput.value.trim() : "";

      const finalImage = uploadedProjectDataUrl || url || preview.src || "images/bid.png";

      if (id) {
        const index = appState.projects.findIndex(p => p.id === id);
        if (index !== -1) {
          appState.projects[index] = {
            ...appState.projects[index],
            title,
            description,
            impact,
            tags,
            github,
            live,
            image: finalImage,
            fallback: title
          };
          showToast(`Updated "${title}"!`, "success");
        }
      } else {
        const newProj = {
          id: `proj-${Date.now()}`,
          title,
          description,
          impact,
          tags,
          github,
          live,
          image: finalImage,
          fallback: title
        };
        appState.projects.unshift(newProj);
        showToast(`Added "${title}"!`, "success");
      }

      uploadedProjectDataUrl = "";
      saveState(appState);
      closeProjectModal();
    });
  }
}

// ==========================================
// 11. LIGHTBOX MODAL
// ==========================================
function openLightbox(cert) {
  const modal = document.getElementById("lightbox-modal-backdrop");
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const sub = document.getElementById("lightbox-subtitle");
  const desc = document.getElementById("lightbox-desc");
  const external = document.getElementById("lightbox-open-external");

  if (!modal) return;

  img.src = cert.image;
  img.alt = cert.title;
  title.textContent = cert.title;
  sub.textContent = `Issued by: ${cert.org}`;
  desc.textContent = cert.desc;
  external.href = cert.image;

  modal.classList.add("is-open");
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal-backdrop");
  if (modal) modal.classList.remove("is-open");
}

function setupLightbox() {
  const modal = document.getElementById("lightbox-modal-backdrop");
  const closeBtn = document.getElementById("close-lightbox-btn");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

// ==========================================
// 12. STUDIO DRAWER & EDIT MODE TOGGLE
// ==========================================
function openStudio(tabName = null) {
  if (!isOwnerAuthenticated) {
    openAuthModal();
    return;
  }
  const drawer = document.getElementById("studio-drawer");
  const backdrop = document.getElementById("studio-drawer-backdrop");
  if (drawer) drawer.classList.add("is-open");
  if (backdrop) backdrop.classList.add("is-open");

  if (tabName) {
    switchStudioTab(tabName);
  }
}

function closeStudio() {
  const drawer = document.getElementById("studio-drawer");
  const backdrop = document.getElementById("studio-drawer-backdrop");
  if (drawer) drawer.classList.remove("is-open");
  if (backdrop) backdrop.classList.remove("is-open");
}

function switchStudioTab(tabId) {
  const tabBtns = document.querySelectorAll(".studio-tab-btn");
  const tabPanes = document.querySelectorAll(".studio-tab-pane");

  tabBtns.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  tabPanes.forEach(pane => {
    pane.classList.toggle("hidden", pane.id !== tabId);
  });
}

function toggleEditMode() {
  if (!isOwnerAuthenticated) {
    openAuthModal();
    return;
  }
  isEditMode = !isEditMode;
  document.body.classList.toggle("edit-mode-active", isEditMode);

  const indicator = document.getElementById("edit-mode-indicator-text");
  if (indicator) {
    indicator.textContent = isEditMode ? "Edit Mode: ON ✏️" : "Edit Mode: OFF";
  }

  const toggleBtn = document.getElementById("toggle-edit-mode-btn");
  if (toggleBtn) {
    toggleBtn.classList.toggle("primary", isEditMode);
  }

  renderCertificates();
  renderProjects();

  showToast(
    isEditMode 
      ? "Edit Mode ON: Quick edit icons & Add cards are now visible!" 
      : "Edit Mode OFF: Previewing clean visitor view.",
    isEditMode ? "success" : "info"
  );
}

function setupStudioDrawer() {
  const openNavBtn = document.getElementById("open-studio-nav-btn");
  const openMobileBtn = document.getElementById("open-studio-mobile-btn");
  const openDockBtn = document.getElementById("open-studio-btn");
  const closeBtn = document.getElementById("close-studio-btn");
  const backdrop = document.getElementById("studio-drawer-backdrop");
  const toggleEditBtn = document.getElementById("toggle-edit-mode-btn");

  if (openNavBtn) {
    openNavBtn.addEventListener("click", () => {
      if (isOwnerAuthenticated) {
        openStudio();
      } else {
        openAuthModal();
      }
    });
  }
  if (openMobileBtn) {
    openMobileBtn.addEventListener("click", () => {
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) mobileMenu.classList.add("hidden");
      if (isOwnerAuthenticated) {
        openStudio();
      } else {
        openAuthModal();
      }
    });
  }
  if (openDockBtn) {
    openDockBtn.addEventListener("click", () => {
      if (isOwnerAuthenticated) {
        openStudio();
      } else {
        openAuthModal();
      }
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeStudio);
  if (backdrop) backdrop.addEventListener("click", closeStudio);
  if (toggleEditBtn) toggleEditBtn.addEventListener("click", toggleEditMode);

  // Studio tab click handlers
  const tabBtns = document.querySelectorAll(".studio-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchStudioTab(targetTab);
    });
  });

  // Profile Form submit
  const profileForm = document.getElementById("studio-profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value.trim() : "";

      appState.profile.name = getVal("inp-profile-name");
      appState.profile.initials = getVal("inp-profile-initials") || "VP";
      appState.profile.headline = getVal("inp-profile-headline");
      appState.profile.typingPhrases = getVal("inp-profile-typing").split(",").map(s => s.trim()).filter(Boolean);
      appState.profile.availability = getVal("inp-profile-availability");
      appState.profile.bio = getVal("inp-profile-bio");
      appState.profile.chips = getVal("inp-profile-chips").split(",").map(s => s.trim()).filter(Boolean);
      appState.profile.focus = getVal("inp-profile-focus");
      appState.profile.currently = getVal("inp-profile-currently");
      appState.profile.status = getVal("inp-profile-status");
      appState.profile.aboutP1 = getVal("inp-profile-about-p1");
      appState.profile.aboutP2 = getVal("inp-profile-about-p2");
      appState.profile.coreStrengths = getVal("inp-profile-strengths");
      appState.profile.careerGoal = getVal("inp-profile-goal");

      saveState(appState);
      showToast("Profile details saved successfully!", "success");
    });
  }

  // Contact Form submit
  const contactForm = document.getElementById("studio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value.trim() : "";
      appState.profile.email = getVal("inp-contact-email");
      appState.profile.linkedin = getVal("inp-contact-linkedin");
      appState.profile.github = getVal("inp-contact-github");
      appState.profile.leetcode = getVal("inp-contact-leetcode");
      appState.profile.hackerrank = getVal("inp-contact-hackerrank");

      saveState(appState);
      showToast("Contact links updated!", "success");
    });
  }
}

// ==========================================
// 13. BACKUP, EXPORT & IMPORT
// ==========================================
function setupBackupAndSync() {
  // Export JSON
  const exportBtn = document.getElementById("export-json-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const jsonStr = JSON.stringify(appState, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `portfolio-data-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Backup JSON downloaded!", "success");
    });
  }

  // Import JSON
  const importInput = document.getElementById("import-json-file");
  if (importInput) {
    importInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (!parsed.profile || !parsed.certificates) {
            throw new Error("Invalid portfolio data file format.");
          }
          saveState(parsed);
          showToast("Portfolio data restored from backup!", "success");
        } catch (err) {
          showToast(err.message || "Failed to parse JSON file.", "error");
        }
      };
      reader.readAsText(file);
      importInput.value = "";
    });
  }

  // Copy JSON to clipboard
  const copyBtn = document.getElementById("copy-json-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const jsonStr = JSON.stringify(appState, null, 2);
      navigator.clipboard.writeText(jsonStr).then(() => {
        showToast("Config JSON copied to clipboard!", "success");
      }).catch(() => {
        showToast("Unable to copy to clipboard", "error");
      });
    });
  }

  // Reset all
  const resetBtn = document.getElementById("reset-all-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset everything back to original portfolio defaults? Any unsaved frontend changes will be reverted.")) {
        localStorage.removeItem(STORAGE_KEY);
        appState = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
        saveState(appState);
        showToast("Reverted to original portfolio defaults!", "info");
      }
    });
  }
}

// ==========================================
// 14. UI & INTERACTION HELPERS
// ==========================================
function setupReveal() {
  if (typeof IntersectionObserver === "undefined") return;
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
}

function setupHeader() {
  const onScroll = () => {
    document.body.classList.toggle("nav-scrolled", window.scrollY > 10);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        mobileMenu.classList.add("hidden");
      }
    });
  }
}

function setupContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const targetEmail = appState.profile.email || "vspatil1627@gmail.com";
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    contactForm.reset();
    showToast("Opening mail client...", "info");
  });
}

function setupYear() {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
}

function hideLoader() {
  const loader = document.getElementById("page-loader");
  if (loader) {
    window.setTimeout(() => {
      loader.classList.add("is-hidden");
    }, 350);
  }
}

// ==========================================
// 14. AUTHENTICATION & SECURITY EVENT HANDLERS
// ==========================================
function setupAuthHandlers() {
  const modal = document.getElementById("auth-modal-backdrop");
  const closeBtn = document.getElementById("close-auth-modal-btn");
  const cancelBtn = document.getElementById("cancel-auth-modal-btn");
  const authForm = document.getElementById("auth-login-form");
  const togglePwdBtn = document.getElementById("auth-toggle-pwd-btn");
  const studioLockBtn = document.getElementById("studio-lock-btn");
  const lockStudioBtn = document.getElementById("lock-studio-btn");
  const lockDockBtn = document.getElementById("lock-dock-btn");
  const changePwdForm = document.getElementById("change-password-form");
  const resetPwdDefaultBtn = document.getElementById("reset-pwd-default-btn");

  if (closeBtn) closeBtn.addEventListener("click", closeAuthModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeAuthModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAuthModal();
    });
  }

  // Keyboard accessibility
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAuthModal();
    }
    // Pro owner shortcut: Alt + E or Ctrl + Shift + E
    if ((e.altKey && (e.key === "e" || e.key === "E")) || (e.ctrlKey && e.shiftKey && (e.key === "E" || e.key === "e"))) {
      e.preventDefault();
      if (isOwnerAuthenticated) {
        openStudio();
      } else {
        openAuthModal();
      }
    }
  });

  // Toggle password visibility
  if (togglePwdBtn) {
    togglePwdBtn.addEventListener("click", () => {
      const input = document.getElementById("auth-password-input");
      if (!input) return;
      const isPwd = input.type === "password";
      input.type = isPwd ? "text" : "password";
      togglePwdBtn.innerHTML = isPwd
        ? '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>'
        : '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>';
    });
  }

  // Auth form submission
  if (authForm) {
    authForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const pwdInput = document.getElementById("auth-password-input");
      const errorMsg = document.getElementById("auth-error-msg");
      const errorText = document.getElementById("auth-error-text");
      const modalBox = modal ? modal.querySelector(".studio-modal") : null;
      const rememberMe = document.getElementById("auth-remember-me")?.checked;

      const pwd = pwdInput ? pwdInput.value : "";
      if (!pwd) return;

      const hashed = await hashString(pwd);
      const stored = getStoredAuthHash();

      if (hashed === stored) {
        if (errorMsg) errorMsg.classList.add("hidden");
        closeAuthModal();
        setOwnerAuthenticated(Boolean(rememberMe));
        showToast("Owner authentication successful! Customizer unlocked.", "success");
        openStudio();
      } else {
        if (errorMsg) errorMsg.classList.remove("hidden");
        if (errorText) errorText.textContent = "Incorrect password. Access denied.";
        if (modalBox) {
          modalBox.classList.remove("auth-shake");
          void modalBox.offsetWidth; // force reflow
          modalBox.classList.add("auth-shake");
        }
        if (pwdInput) {
          pwdInput.select();
        }
      }
    });
  }

  // Session lock buttons
  if (studioLockBtn) studioLockBtn.addEventListener("click", lockOwnerSession);
  if (lockStudioBtn) lockStudioBtn.addEventListener("click", lockOwnerSession);
  if (lockDockBtn) lockDockBtn.addEventListener("click", lockOwnerSession);

  // Change password form in Security tab
  if (changePwdForm) {
    changePwdForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const currInput = document.getElementById("inp-current-pwd");
      const newPwdInput = document.getElementById("inp-new-pwd");
      const confirmPwdInput = document.getElementById("inp-confirm-pwd");

      const curr = currInput ? currInput.value : "";
      const newPwd = newPwdInput ? newPwdInput.value : "";
      const confirmPwd = confirmPwdInput ? confirmPwdInput.value : "";

      if (newPwd.length < 4) {
        showToast("New password must be at least 4 characters!", "error");
        return;
      }
      if (newPwd !== confirmPwd) {
        showToast("New passwords do not match!", "error");
        return;
      }

      const currHash = await hashString(curr);
      const storedHash = getStoredAuthHash();

      if (currHash !== storedHash) {
        showToast("Current password is incorrect!", "error");
        return;
      }

      const newHash = await hashString(newPwd);
      localStorage.setItem(AUTH_STORAGE_KEY, newHash);
      changePwdForm.reset();
      showToast("Owner password updated successfully! Keep it secure.", "success");
    });
  }

  // Reset to default password
  if (resetPwdDefaultBtn) {
    resetPwdDefaultBtn.addEventListener("click", () => {
      if (confirm("Reset owner password back to the default master password?")) {
        localStorage.setItem(AUTH_STORAGE_KEY, DEFAULT_AUTH_HASH);
        showToast("Owner password reset to default master password", "info");
      }
    });
  }
}

// ==========================================
// 15. WEB INSPECT & DEVTOOLS PROTECTION
// ==========================================
function setupInspectProtection() {
  // 1. Disable right-click context menu across the page
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 2. Block Inspect, DevTools, and View-Source keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // F12 key
    if (e.key === "F12" || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect Element)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (
      e.key === "I" || e.key === "i" ||
      e.key === "J" || e.key === "j" ||
      e.key === "C" || e.key === "c"
    )) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+U / Meta+U (View Source)
    if ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "U")) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+S / Meta+S (Save Page)
    if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });

  // 3. Prevent dragging images to open or inspect
  document.addEventListener("dragstart", (e) => {
    if (e.target && e.target.nodeName === "IMG") {
      e.preventDefault();
      return false;
    }
  });
}

// Make functions accessible from inline HTML onclicks if needed
window.openCertModal = openCertModal;
window.deleteCert = deleteCert;
window.openProjectModal = openProjectModal;
window.deleteProject = deleteProject;
window.openLightbox = openLightbox;
window.openAuthModal = openAuthModal;
window.lockOwnerSession = lockOwnerSession;
window.openStudio = openStudio;

// ==========================================
// 16. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  setupInspectProtection();
  appState = loadState();
  initAuth();
  renderAll();
  setupProfilePhotoHandlers();
  setupCertHandlers();
  setupProjectHandlers();
  setupLightbox();
  setupStudioDrawer();
  setupBackupAndSync();
  setupAuthHandlers();
  setupHeader();
  setupMenu();
  setupContactForm();
  setupYear();
  hideLoader();
});
