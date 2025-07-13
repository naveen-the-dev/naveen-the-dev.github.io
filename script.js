// // Dynamic text animation - Full role titles
// const dynamicWords = [
//   "Full Stack Developer",
//   "Backend Developer",
//   "MongoDB Expert",
// ];
// let currentWordIndex = 0;
// const dynamicTextElement = document.querySelector(".dynamic-text");

// function updateDynamicText() {
//   if (dynamicTextElement) {
//     dynamicTextElement.style.opacity = "0";

//     setTimeout(() => {
//       dynamicTextElement.textContent = dynamicWords[currentWordIndex];
//       dynamicTextElement.style.opacity = "1";
//       currentWordIndex = (currentWordIndex + 1) % dynamicWords.length;
//     }, 300);
//   }
// }

// // Start dynamic text animation
// if (dynamicTextElement) {
//   dynamicTextElement.textContent = dynamicWords[0];
//   setInterval(updateDynamicText, 3000);
// }

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
    typeSpeed /= 1;
  }

  if (!isDeleting && charIndex === typewriterText[textIndex].length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typewriterText.length;
    typeSpeed = 0;
  }

  setTimeout(typewriter, typeSpeed);
}

// Start typewriter effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typewriter, 0);

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 90; // Account for top navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Active navigation highlighting
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Update active nav on scroll
window.addEventListener("scroll", updateActiveNav);

// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const verticalSidebar = document.querySelector(".vertical-sidebar");

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", function () {
    verticalSidebar.classList.toggle("active");
  });
}

// Close sidebar when clicking on a link (mobile)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
      verticalSidebar.classList.remove("active");
    }
  });
});

// Close sidebar when clicking outside (mobile)
document.addEventListener("click", function (event) {
  if (window.innerWidth <= 1024) {
    if (
      !verticalSidebar.contains(event.target) &&
      !mobileMenuToggle.contains(event.target)
    ) {
      verticalSidebar.classList.remove("active");
    }
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Add animation classes
const animateElements = document.querySelectorAll(
  ".timeline-item, .skill-category, .cert-card, .award-card, .education-item, .roadmap-item, .project-card"
);
animateElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Contact interaction functions
function openEmail() {
  window.location.href = "mailto:naveensk1672002@gmail.com";
}

function openResume() {
  window.open(
    "https://drive.google.com/file/d/10JEDhGExEEmFXv1XFJfHrQD6oUbX122s/view?usp=sharing",
    "_blank"
  );
}

function openPhone() {
  window.open("tel:+15551234567", "_self");
}

function openLinkedIn() {
  window.open("https://www.linkedin.com/in/naveen-the-dev/", "_blank");
}

function openGitHub() {
  window.open("https://github.com/naveen-the-dev", "_blank");
}

function openTwitter() {
  //   window.open("https://twitter.com/johndoe", "_blank");
}

function openLocation() {
  window.open("https://maps.google.com/?q=San Francisco, CA", "_blank");
}

function openDemo() {
  window.open("https://example.com", "_blank");
}

// Parallax effect for background elements
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".home-section::before");

  parallaxElements.forEach((element) => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Add CSS for loading animation
const loadingStyle = document.createElement("style");
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Add scroll-to-top functionality
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = "scroll-to-top";
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener("mouseenter", function () {
  this.style.transform = "scale(1.1)";
});

scrollToTopBtn.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
});

// Enhanced skills carousel with proper duplication
function initializeSkillsCarousel() {
  const skillsTrack = document.querySelector(".skills-track");
  if (skillsTrack) {
    const skillIcons = skillsTrack.innerHTML;
    // Duplicate the content multiple times for seamless infinite scroll
    skillsTrack.innerHTML = skillIcons + skillIcons + skillIcons;
  }
}

// Initialize skills carousel on page load
document.addEventListener("DOMContentLoaded", function () {
  initializeSkillsCarousel();
  updateActiveNav();
});

// Add typing effect to dynamic text
function typeText(element, text, callback) {
  let i = 0;
  element.textContent = "";
  element.style.opacity = "1";

  const typeInterval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(typeInterval);
      if (callback) callback();
    }
  }, 100);
}

// Enhanced dynamic text with typing effect
// function updateDynamicTextWithTyping() {
//   if (dynamicTextElement) {
//     const currentWord = dynamicWords[currentWordIndex];

//     // Clear current text
//     dynamicTextElement.style.opacity = "0";

//     setTimeout(() => {
//       typeText(dynamicTextElement, currentWord, () => {
//         currentWordIndex = (currentWordIndex + 1) % dynamicWords.length;
//       });
//     }, 0);
//   }
// }

// Replace the original dynamic text function
// if (dynamicTextElement) {
//   typeText(dynamicTextElement, dynamicWords[0]);
//   setInterval(updateDynamicTextWithTyping, 4000);
// }

// Handle window resize for sidebar
window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) {
    verticalSidebar.classList.remove("active");
  }
});

// Add interactive effects to skill tags
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px) scale(1.05)";
  });

  tag.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add click effects to contact items
document.querySelectorAll(".contact-item").forEach((item) => {
  item.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "translateY(-3px)";
    }, 150);
  });
});
