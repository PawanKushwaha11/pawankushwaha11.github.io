/**
 * PAWAN KUSHWAHA - PORTFOLIO INTERACTIVE SCRIPT
 * Handles tabs, projects showcase, app logo cards, screenshot modal slider, particle canvas, and typewriter.
 */

// Project Data Store with real assets and logos
const portfolioProjects = [
  {
    id: "offline_sync_core",
    title: "offline_sync_core",
    subtitle: "Flutter & Dart Published Package",
    category: "packages",
    badge: "Open Source / pub.dev",
    logo: "assets/offline_sync_core/app_logo.png",
    rating: "5.0 ★",
    downloads: "Active on pub.dev",
    overview: "Built and published an open-source Flutter package for offline-first caching & sync on pub.dev. Designed for enterprise mobile apps needing zero-downtime offline capabilities with intelligent cache invalidation, persistent mutation queues, and automatic background synchronization.",
    techStack: ["Flutter", "Dart", "Hive", "SQLite", "Streams", "Background Fetch", "Offline Sync Queue"],
    highlights: [
      "Smart TTL (Time-To-Live) cache invalidation strategies.",
      "Offline sync mutation queue with exponential backoff auto-retry logic.",
      "Optimistic UI updates for immediate user feedback.",
      "Periodic background sync integration for Android & iOS.",
      "Built-in visual debug inspector widget for live queue monitoring."
    ],
    links: [
      { label: "pub.dev Package", icon: "fab fa-flutter", url: "https://pub.dev/packages/offline_sync_core" },
      { label: "GitHub Profile", icon: "fab fa-github", url: "https://github.com/PawanKushwaha11" }
    ],
    images: [
      "assets/offline_sync_core/app_logo.png"
    ]
  },
  {
    id: "hrms_system",
    title: "HRMS Attendance System",
    subtitle: "PlayStore App",
    category: "mobile",
    badge: "Play Store App",
    logo: "assets/Hrms/app_logo.png",
    rating: "4.8 ★",
    downloads: "Live on PlayStore",
    overview: "Developed an enterprise Human Resource Management System (HRMS) featuring real-time employee lifecycle tracking, Google Maps GPS location validation, selfie attendance with geofencing, half-day/leave management, and automated payroll reporting.",
    techStack: ["Flutter", "Dart", "BLoC", "Google Maps API", "Geolocator", "Camera/Selfie Verification", "REST APIs", "Node.js"],
    highlights: [
      "Implemented Google Maps–based live location tracking with strict geofenced boundaries.",
      "Selfie-based attendance validation with instant background location and timestamp tagging.",
      "Half-day, leave approval workflows, overtime tracking, and detailed attendance analytics.",
      "Role-based authentication & access control for HR Admins and Employees.",
      "Automated monthly timesheet generation and PDF/Excel export."
    ],
    links: [
      { label: "Google Play Store", icon: "fab fa-google-play", url: "https://play.google.com/store/apps/details?id=com.cepl.hrmSystem&hl=en_IN" }
    ],
    images: [
      "assets/Hrms/image1.png",
      "assets/Hrms/image2.png",
      "assets/Hrms/image3.png",
      "assets/Hrms/image4.png",
      "assets/Hrms/image5.png",
      "assets/Hrms/image6.png"
    ]
  },
  {
    id: "ikris_health",
    title: "Ikris Health Plus",
    subtitle: "Healthcare & Pharma Network",
    category: "mobile",
    badge: "10k+ Downloads",
    logo: "assets/Ikris/app_logo.png",
    rating: "4.9 ★",
    downloads: "10,000+ Downloads",
    overview: "Developed a mission-critical Android & iOS healthcare application for a global pharma network to manage pharmaceutical product catalogs, patient inquiries, rare & unlicensed medicine procurement, and real-time shipment updates.",
    techStack: ["Flutter", "Dart", "Provider / GetX", "RESTful APIs", "Push Notifications (FCM)", "Secure Storage", "Payment Gateway"],
    highlights: [
      "Bridging global access to rare and unlicensed life-saving medications.",
      "High-security architecture for patient health data and prescription verification.",
      "Integrated push notifications and real-time medicine shipment tracking.",
      "Architected responsive, intuitive healthcare catalog UI with multi-filter search.",
      "Successfully deployed and maintained on Google Play Store & Apple App Store with 10k+ users."
    ],
    links: [
      { label: "Google Play Store", icon: "fab fa-google-play", url: "https://play.google.com/store/apps/details?id=com.ikris.ikris_pharma_network&hl=en_IN" },
      { label: "Apple App Store", icon: "fab fa-app-store-ios", url: "https://apps.apple.com/in/app/ikris-health/id6464600946" }
    ],
    images: [
      "assets/Ikris/image1.png",
      "assets/Ikris/image2.png",
      "assets/Ikris/image3.png",
      "assets/Ikris/image4.png",
      "assets/Ikris/image5.png"
    ]
  },
  {
    id: "m_business",
    title: "M-Business Suite",
    subtitle: "Mall & Inventory Management System",
    category: "mobile",
    badge: "Enterprise Suite",
    logo: "assets/M-Business/app_logo.png",
    rating: "4.8 ★",
    downloads: "Enterprise Production",
    overview: "Engineered an end-to-end business management mobile & web suite equipped with multi-outlet inventory management, sales billing POS, purchase tracking, payment records, customer ledgers, and live stock analytics.",
    techStack: ["Flutter", "Dart", "Clean Architecture", "BLoC", "SQLite / Hive Cache", "REST APIs", "Charts & Analytics"],
    highlights: [
      "Multi-store inventory management with real-time low-stock threshold alerts.",
      "Sales POS and billing receipt generation with bluetooth thermal printing support.",
      "Comprehensive customer ledgers, debit/credit tracking, and payment reminders.",
      "Interactive business analytics dashboards with interactive sales trend charts.",
      "Offline sync support allowing store managers to continue billing without continuous internet."
    ],
    links: [
      { label: "View Showcase", icon: "fas fa-arrow-up-right-from-square", url: "#" }
    ],
    images: [
      "assets/M-Business/image1.png",
      "assets/M-Business/image2.png",
      "assets/M-Business/image3.png",
      "assets/M-Business/image4.png",
      "assets/M-Business/image5.png"
    ]
  },
  {
    id: "npp_healthcare",
    title: "NPP Healthcare Program",
    subtitle: "Named Patient Program System",
    category: "mobile",
    badge: "Play Store",
    logo: "assets/NPP/app_logo.png",
    rating: "4.7 ★",
    downloads: "PlayStore Healthcare",
    overview: "Built a specialized healthcare platform managing Named Patient Programs with KYC/Aadhaar verification, patient profiles, family member coverage, prescription uploads, order tracking, and secure payment processing.",
    techStack: ["Flutter", "Dart", "Aadhaar / KYC API", "BLoC Pattern", "Payment Gateway", "FCM Notifications", "REST APIs"],
    highlights: [
      "Seamless patient onboarding with Aadhaar KYC validation and secure document storage.",
      "Family member profile binding with shared medical order capabilities.",
      "End-to-end order processing, medication dispatch tracking, and digital invoices.",
      "Encrypted API communication ensuring regulatory pharma compliance."
    ],
    links: [
      { label: "Google Play Store", icon: "fab fa-google-play", url: "https://play.google.com/store/apps/details?id=com.ikris.npmapp.npm_app&hl=en_IN" }
    ],
    images: [
      "assets/NPP/image1.png",
      "assets/NPP/image2.png",
      "assets/NPP/image3.png",
      "assets/NPP/image4.png",
      "assets/NPP/image5.png"
    ]
  },
  {
    id: "sparrow_website",
    title: "Sparrow Software & Technology",
    subtitle: "Official Platform & Admin Panel",
    category: "web",
    badge: "Web + Admin Platform",
    logo: "assets/Sparrow Software & Technology/app_logo.png",
    rating: "5.0 ★",
    downloads: "Live Production Website",
    overview: "Designed, developed, and deployed the official corporate platform with responsive high-speed UI, dynamic product showcases, custom shopping cart, secure payment gateway, and an advanced admin control panel.",
    techStack: ["Node.js", "PHP / Laravel", "Flutter Web", "JavaScript", "MySQL", "Tailwind CSS", "Payment API"],
    highlights: [
      "Full-featured e-commerce catalog with dynamic filters and instantaneous search.",
      "Robust Admin Panel for managing services, software licenses, orders, and inquiries.",
      "Automated customer lead routing and notification system.",
      "SEO optimized, high-performance web architecture scoring 95+ on Google Lighthouse."
    ],
    links: [
      { label: "Official Website", icon: "fas fa-globe", url: "https://sparrowsoftwares.cloud/" }
    ],
    images: [
      "assets/Sparrow Software & Technology/image1.png",
      "assets/Sparrow Software & Technology/image2.png",
      "assets/Sparrow Software & Technology/image3.png",
      "assets/Sparrow Software & Technology/image4.png",
      "assets/Sparrow Software & Technology/image5.png"
    ]
  },
  {
    id: "comfort_varanasi",
    title: "Comfort Varanasi",
    subtitle: "E-Commerce Web & Android App",
    category: "mobile",
    badge: "E-Commerce Platform",
    logo: "assets/comfort_varanasi/app_logo.png",
    rating: "4.9 ★",
    downloads: "Production Live",
    overview: "Developed the complete E-Commerce platform for Comfort Varanasi, including the official responsive website and Android application with a sleek, user-friendly UI. Implemented BLoC architecture for state management and integrated REST APIs for seamless product showcase, cart management, payment processing, and order lifecycle tracking.",
    techStack: ["Flutter", "Dart", "BLoC Architecture", "RESTful APIs", "Payment Gateway", "PHP / Node.js", "Android & Web"],
    highlights: [
      "Cross-platform responsive e-commerce web platform and native Android mobile app.",
      "Implemented BLoC state management for seamless cart management and state persistence.",
      "Integrated secure third-party payment gateways for instant and safe checkouts.",
      "Real-time product inventory sync and customer order tracking dashboard.",
      "Delivered a polished digital shopping experience with 60fps fluid UI performance."
    ],
    links: [
      { label: "Live Website", icon: "fas fa-globe", url: "https://www.comfortvaranasi.com/" }
    ],
    images: [
      "assets/comfort_varanasi/image1.png",
      "assets/comfort_varanasi/image2.png",
      "assets/comfort_varanasi/image3.png",
      "assets/comfort_varanasi/image4.png"
    ]
  }
];

// Current modal state
let activeProject = null;
let currentSlideIndex = 0;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  initTypewriter();
  initTabs();
  renderProjects("all");
  initFilters();
  initModalListeners();
});

/* ==========================================================================
   PARTICLE CANVAS AMBIENT BACKGROUND
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 22), 40);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.8 + 0.8,
      color: "rgba(56, 189, 248,"
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color} 0.4)`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.14 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   TYPEWRITER HERO EFFECT
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;

  const roles = [
    "Full Stack Flutter Developer",
    "Mobile Application Developer",
    "Cross-Platform Mobile Engineer",
    "Node.js & PHP Web Specialist",
    "Clean Architecture Expert"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseDelay = 2000;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseDelay);
      return;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  type();
}

/* ==========================================================================
   TABS NAVIGATION
   ========================================================================== */
function initTabs() {
  const tabButtons = document.querySelectorAll(".nav-btn");
  const tabSections = document.querySelectorAll(".tab-section");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      tabButtons.forEach(b => b.classList.remove("active"));
      tabSections.forEach(s => s.classList.remove("active"));

      btn.classList.add("active");
      const targetSection = document.getElementById(`tab-${targetTab}`);
      if (targetSection) {
        targetSection.classList.add("active");
      }

      // Smooth scroll on mobile
      if (window.innerWidth <= 1080) {
        window.scrollTo({
          top: document.querySelector(".main-content").offsetTop - 20,
          behavior: "smooth"
        });
      }
    });
  });
}

function switchTab(tabName) {
  const targetBtn = document.querySelector(`.nav-btn[data-tab="${tabName}"]`);
  if (targetBtn) {
    targetBtn.click();
  }
}

/* ==========================================================================
   PROJECTS RENDERING (Centered App Logo Visuals)
   ========================================================================== */
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filtered = filter === "all" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(proj => `
    <div class="project-card" onclick="openProjectModal('${proj.id}')">
      <div class="project-logo-banner">
        <img src="${proj.logo}" alt="${proj.title}" class="project-app-logo-large" loading="lazy" onerror="this.src='assets/profile.png'">
        <span class="project-badge-tag">${proj.badge}</span>
        <div class="project-screenshot-count">
          <i class="far fa-images"></i> ${proj.images ? proj.images.length : 0} screens
        </div>
      </div>
      <div class="project-body">
        <div class="project-card-title">
          <span>${proj.title}</span>
          <i class="fas fa-arrow-up-right-from-square"></i>
        </div>
        <p class="project-card-desc">${proj.overview}</p>
        <div class="project-tech-tags">
          ${proj.techStack.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          ${proj.techStack.length > 3 ? `<span class="tech-tag">+${proj.techStack.length - 3}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   PROJECT DETAILS MODAL & SLIDER
   ========================================================================== */
function openProjectModal(projectId) {
  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  activeProject = project;
  currentSlideIndex = 0;

  const modal = document.getElementById("project-modal");
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-subtitle").textContent = project.subtitle || project.badge;
  document.getElementById("modal-desc").textContent = project.overview;
  
  const logoElem = document.getElementById("modal-logo");
  logoElem.src = project.logo;
  logoElem.onerror = () => { logoElem.src = 'assets/profile.png'; };

  // Links
  const linksWrap = document.getElementById("modal-links");
  linksWrap.innerHTML = project.links.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn-store">
      <i class="${link.icon}"></i> ${link.label}
    </a>
  `).join('');

  // Highlights
  const bulletsWrap = document.getElementById("modal-highlights");
  bulletsWrap.innerHTML = project.highlights.map(item => `
    <li><i class="fas fa-circle-check"></i> <span>${item}</span></li>
  `).join('');

  // Tech stack
  const techWrap = document.getElementById("modal-tech");
  techWrap.innerHTML = project.techStack.map(tech => `
    <span class="tech-tag" style="padding: 5px 12px; font-size: 0.8rem;">${tech}</span>
  `).join('');

  // Setup Carousel Images
  setupModalCarousel(project.images);

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function setupModalCarousel(images) {
  const slideImg = document.getElementById("carousel-img");
  const dotsContainer = document.getElementById("carousel-dots");
  const counter = document.getElementById("carousel-counter");
  
  if (!images || images.length === 0) {
    slideImg.src = "assets/profile.png";
    dotsContainer.innerHTML = "";
    if (counter) counter.textContent = "1 of 1";
    return;
  }

  currentSlideIndex = 0;
  updateSlide();

  // Dots
  dotsContainer.innerHTML = images.map((_, idx) => `
    <div class="carousel-dot ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})"></div>
  `).join('');
}

function updateSlide() {
  if (!activeProject || !activeProject.images || activeProject.images.length === 0) return;
  const slideImg = document.getElementById("carousel-img");
  const counter = document.getElementById("carousel-counter");
  
  slideImg.style.opacity = "0.2";
  setTimeout(() => {
    slideImg.src = activeProject.images[currentSlideIndex];
    slideImg.style.opacity = "1";
  }, 150);

  if (counter) {
    counter.textContent = `${currentSlideIndex + 1} of ${activeProject.images.length}`;
  }

  // Update dots
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((d, idx) => {
    d.classList.toggle("active", idx === currentSlideIndex);
  });
}

function nextSlide() {
  if (!activeProject || !activeProject.images) return;
  currentSlideIndex = (currentSlideIndex + 1) % activeProject.images.length;
  updateSlide();
}

function prevSlide() {
  if (!activeProject || !activeProject.images) return;
  currentSlideIndex = (currentSlideIndex - 1 + activeProject.images.length) % activeProject.images.length;
  updateSlide();
}

function goToSlide(index) {
  currentSlideIndex = index;
  updateSlide();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  activeProject = null;
}

function initModalListeners() {
  const modal = document.getElementById("project-modal");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active")) {
      if (e.key === "Escape") closeProjectModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    }
  });

  // Mobile Touch Swipe Support
  const carouselSection = document.querySelector(".modal-carousel-section");
  let touchStartX = 0;
  let touchEndX = 0;

  if (carouselSection) {
    carouselSection.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselSection.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 40;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide(); // Swiped left -> next image
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide(); // Swiped right -> prev image
    }
  }
}

/* ==========================================================================
   COPY UTILS & TOAST
   ========================================================================== */
function copyToClipboard(text, message = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast(message);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function sendWhatsApp() {
  const phone = "919305429451";
  const text = encodeURIComponent("Hi Pawan, I saw your portfolio and would like to discuss a Flutter/Full-Stack project!");
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}
