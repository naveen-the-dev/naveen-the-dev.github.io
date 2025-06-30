// Navigation functionality
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Typewriter effect for hero subtitle
const typewriterText = [
  "Full Stack Developer",
  "Software Engineer",
  "Web Developer",
  "Problem Solver",
  "Code Architect",
];

let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typewriter() {
  const typewriterElement = document.getElementById("typewriter");

  if (isDeleting) {
    currentText = typewriterText[textIndex].substring(0, charIndex - 1);
    charIndex--;
  } else {
    currentText = typewriterText[textIndex].substring(0, charIndex + 1);
    charIndex++;
  }

  typewriterElement.textContent = currentText;

  let typeSpeed = 100;

  if (isDeleting) {
    typeSpeed /= 2;
  }

  if (!isDeleting && charIndex === typewriterText[textIndex].length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typewriterText.length;
    typeSpeed = 500;
  }

  setTimeout(typewriter, typeSpeed);
}

// Start typewriter effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typewriter, 1000);

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      // Animate skill bars
      if (entry.target.classList.contains("skill-category")) {
        animateSkillBars(entry.target);
      }

      // Animate timeline items
      if (entry.target.classList.contains("timeline-item")) {
        entry.target.classList.add("fade-in");
      }
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".timeline-item, .skill-category, .about-content, .contact-content"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Animate skill bars
function animateSkillBars(skillCategory) {
  const skillBars = skillCategory.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width + "%";
    }, 300);
  });
}

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.borderBottom = "1px solid rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
  }
});

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Modal functionality
function openResumeModal() {
  document.getElementById("resumeModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeResumeModal() {
  document.getElementById("resumeModal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  const modal = document.getElementById("resumeModal");
  if (event.target === modal) {
    closeResumeModal();
  }
});

// Resume download functionality
function downloadResume() {
  // In a real application, this would download an actual PDF file
  alert(
    "Resume download would start here. In a real application, this would download a PDF file."
  );
}

// Add loading animation for page transitions
window.addEventListener("beforeunload", () => {
  document.body.style.opacity = "0";
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");

  if (heroContent && heroImage) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
});

// Add smooth entrance animations for timeline items
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 200);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

document.querySelectorAll(".timeline-item").forEach((item) => {
  timelineObserver.observe(item);
});

// Add CSS for active nav link
const style = document.createElement("style");
style.textContent = `
    .nav-link.active {
        color: #667eea !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  // Close modal with Escape key
  if (e.key === "Escape") {
    closeResumeModal();
  }
});

// Add focus management for accessibility
document
  .querySelectorAll(".btn, .nav-link, input, textarea, .contact-icon-link")
  .forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid #667eea";
      this.style.outlineOffset = "2px";
    });

    element.addEventListener("blur", function () {
      this.style.outline = "none";
    });
  });

// Performance optimization: lazy load images when they come into view
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    }
  });
});

// Add smooth reveal animation for stats
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const stats = entry.target.querySelectorAll(".stat h4");
        stats.forEach((stat, index) => {
          const finalValue = parseInt(stat.textContent);
          let currentValue = 0;
          const increment = finalValue / 50;

          const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
              stat.textContent =
                finalValue + (stat.textContent.includes("+") ? "+" : "");
              clearInterval(counter);
            } else {
              stat.textContent =
                Math.floor(currentValue) +
                (stat.textContent.includes("+") ? "+" : "");
            }
          }, 30);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Contact icon hover effects
document.querySelectorAll(".contact-icon-link").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.1)";
  });

  link.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});
