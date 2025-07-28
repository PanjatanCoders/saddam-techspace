window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.body.style.overflow = "visible";
    initializeAnimations();
  }, 1500);
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const offsetTop = element.offsetTop - 80;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
}

// Typewriter effect
function typeWriter() {
  const texts = [
    "Building intelligent test frameworks",
    "Innovating with AI-driven automation",
    "Teaching next-gen testing techniques",
    "Researching future of quality assurance",
  ];
  const typewriterElement = document.getElementById("typewriter");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// Particle system
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 3 + 3 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Neural network canvas
function drawNeuralNetwork() {
  const canvas = document.getElementById("neural-canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const nodes = [];
  const nodeCount = 20;

  // Create nodes
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw nodes
    nodes.forEach((node, i) => {
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 255, 255, 0.6)";
      ctx.fill();

      // Draw connections
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) +
              Math.pow(node.y - otherNode.y, 2)
          );

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${
              0.3 * (1 - distance / 150)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize animations
function initializeAnimations() {
  typeWriter();
  createParticles();
  drawNeuralNetwork();
  animateSkillBars();
}

// Animate skill bars on scroll
function animateSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillProgress = entry.target.querySelector(".skill-progress");
        if (skillProgress && !skillProgress.classList.contains("animated")) {
          skillProgress.classList.add("animated");
          skillProgress.style.animation = "progressLoad 2s ease-out forwards";
        }
      }
    });
  });

  document.querySelectorAll(".skill-item").forEach((item) => {
    observer.observe(item);
  });
}

// Modal functionality
function openModal(projectId) {
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");

  const projectDetails = {
    project1: {
      title: "AI-Powered Test Automation Framework",
      description:
        "A revolutionary testing framework that leverages machine learning algorithms for intelligent test case generation, self-healing automation scripts, and predictive failure analysis. This framework reduces maintenance overhead by 60% and improves test reliability through adaptive element identification.",
      features: [
        "Machine learning-based element locator healing",
        "Intelligent test case prioritization",
        "Automated visual regression testing",
        "Natural language test generation",
        "Predictive failure analysis",
      ],
      technologies: [
        "Java",
        "Selenium",
        "TensorFlow",
        "TestNG",
        "Maven",
        "Jenkins",
      ],
      github: "#",
      demo: "#",
    },
    project2: {
      title: "Cucumber BDD Framework",
      description:
        "A comprehensive Behavior-Driven Development framework that bridges the gap between business requirements and technical implementation. Features include parallel execution, detailed reporting, and seamless CI/CD integration.",
      features: [
        "Gherkin-based feature files",
        "Page Object Model implementation",
        "Parallel test execution",
        "Advanced reporting with screenshots",
        "Database validation support",
      ],
      technologies: [
        "Cucumber",
        "Java",
        "Selenium",
        "Maven",
        "TestNG",
        "ExtentReports",
      ],
      github: "#",
      demo: "#",
    },
    project3: {
      title: "Data-Driven Testing Suite",
      description:
        "Advanced data-driven testing framework with Excel/CSV integration, dynamic test generation, and comprehensive reporting. Supports multiple data sources and complex data transformation scenarios.",
      features: [
        "Multi-format data source support",
        "Dynamic test case generation",
        "Data validation and transformation",
        "Parametrized test execution",
        "Real-time data refresh capabilities",
      ],
      technologies: [
        "Apache POI",
        "TestNG",
        "Java",
        "MySQL",
        "ExtentReports",
        "Jackson",
      ],
      github: "#",
      demo: "#",
    },
    project4: {
      title: "API Testing Framework",
      description:
        "Comprehensive RESTful API testing framework with authentication handling, schema validation, and performance testing capabilities. Includes automated contract testing and API versioning support.",
      features: [
        "RESTful API automation",
        "JSON/XML schema validation",
        "OAuth 2.0 authentication",
        "Performance benchmarking",
        "Contract testing integration",
      ],
      technologies: [
        "REST Assured",
        "TestNG",
        "Jackson",
        "JSON Schema",
        "WireMock",
        "Maven",
      ],
      github: "#",
      demo: "#",
    },
    project5: {
      title: "Mobile Test Automation",
      description:
        "Cross-platform mobile testing solution supporting both Android and iOS applications. Features device farm integration, gesture automation, and native/hybrid app testing capabilities.",
      features: [
        "Cross-platform mobile testing",
        "Real device and emulator support",
        "Gesture and touch automation",
        "Native and hybrid app testing",
        "Device farm integration",
      ],
      technologies: [
        "Appium",
        "Java",
        "TestNG",
        "XCUITest",
        "Espresso",
        "AWS Device Farm",
      ],
      github: "#",
      demo: "#",
    },
    project6: {
      title: "Performance Testing Dashboard",
      description:
        "Real-time performance monitoring dashboard with automated load testing and detailed analytics visualization. Features predictive scaling and bottleneck identification.",
      features: [
        "Real-time performance monitoring",
        "Automated load test execution",
        "Predictive performance analytics",
        "Bottleneck identification",
        "Scalability recommendations",
      ],
      technologies: [
        "JMeter",
        "Grafana",
        "InfluxDB",
        "Docker",
        "Kubernetes",
        "Python",
      ],
      github: "#",
      demo: "#",
    },
  };

  const project = projectDetails[projectId];

  modalContent.innerHTML = `
                <h2 style="color: var(--neon-cyan); margin-bottom: 1rem;">${
                  project.title
                }</h2>
                <p style="color: var(--text-gray); margin-bottom: 2rem; line-height: 1.6;">${
                  project.description
                }</p>
                
                <h3 style="color: var(--text-light); margin-bottom: 1rem;">Key Features:</h3>
                <ul style="color: var(--text-gray); margin-bottom: 2rem; padding-left: 1.5rem;">
                    ${project.features
                      .map(
                        (feature) =>
                          `<li style="margin-bottom: 0.5rem;">${feature}</li>`
                      )
                      .join("")}
                </ul>
                
                <h3 style="color: var(--text-light); margin-bottom: 1rem;">Technologies Used:</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
                
                <div style="display: flex; gap: 1rem;">
                    <a href="${
                      project.demo
                    }" class="project-link" style="background: linear-gradient(45deg, var(--primary-blue), var(--neon-cyan)); color: white; padding: 0.8rem 1.5rem; border-radius: 25px; text-decoration: none; font-weight: bold;">View Demo</a>
                    <a href="${
                      project.github
                    }" class="project-link" style="background: linear-gradient(45deg, var(--secondary-purple), var(--neon-pink)); color: white; padding: 0.8rem 1.5rem; border-radius: 25px; text-decoration: none; font-weight: bold;">GitHub</a>
                </div>
            `;

  modal.style.display = "block";
}

// Close modal
document.querySelector(".close").onclick = function () {
  document.getElementById("projectModal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Simulate form submission
  const submitBtn = this.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin" style="margin-right: 0.5rem;"></i>Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.innerHTML =
      '<i class="fas fa-check" style="margin-right: 0.5rem;"></i>Message Sent!';
    submitBtn.style.background = "linear-gradient(45deg, #10b981, #34d399)";

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      submitBtn.style.background =
        "linear-gradient(45deg, var(--primary-blue), var(--neon-cyan))";
      this.reset();
    }, 2000);
  }, 2000);
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    scrollToSection(targetId);
  });
});

// Scroll animations for sections
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Animate cards and sections
  document
    .querySelectorAll(
      ".project-card, .course-card, .blog-card, .research-content"
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease";
      observer.observe(el);
    });
}

// Initialize scroll animations after page load
window.addEventListener("load", () => {
  setTimeout(setupScrollAnimations, 1600);
});

// Resize handler for neural network canvas
window.addEventListener("resize", function () {
  const canvas = document.getElementById("neural-canvas");
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

// Add floating animation to course cards
document.querySelectorAll(".course-card").forEach((card, index) => {
  card.style.animationDelay = index * 0.2 + "s";
  card.style.animation = "float 6s ease-in-out infinite";
});

// Add glow effect to project cards on hover
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 20px 40px rgba(0, 255, 255, 0.3)";
    this.style.transform = "translateY(-15px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.boxShadow = "";
    this.style.transform = "";
  });
});

// Add parallax effect to hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero");
  const speed = scrolled * 0.5;

  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Add typing sound effect simulation
function addTypingEffect() {
  const typewriterElement = document.getElementById("typewriter");
  let isTyping = false;

  const observer = new MutationObserver(() => {
    if (!isTyping) {
      isTyping = true;
      typewriterElement.style.borderRight = "2px solid var(--neon-cyan)";
      typewriterElement.style.animation = "blink 1s infinite";

      setTimeout(() => {
        isTyping = false;
      }, 100);
    }
  });

  observer.observe(typewriterElement, {
    childList: true,
    characterData: true,
    subtree: true,
  });
}

// CSS for blinking cursor
const style = document.createElement("style");
style.textContent = `
            @keyframes blink {
                0%, 50% { border-color: var(--neon-cyan); }
                51%, 100% { border-color: transparent; }
            }
        `;
document.head.appendChild(style);

// Initialize additional animations
window.addEventListener("load", function () {
  setTimeout(() => {
    addTypingEffect();
  }, 2000);
});

// Add interactive background for sections
function createInteractiveBackground() {
  document.querySelectorAll(".section").forEach((section) => {
    section.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      this.style.background = `
                        radial-gradient(circle at ${x}% ${y}%, 
                        rgba(0, 255, 255, 0.05) 0%, 
                        transparent 50%)
                    `;
    });

    section.addEventListener("mouseleave", function () {
      this.style.background = "";
    });
  });
}

// Initialize interactive backgrounds
window.addEventListener("load", function () {
  setTimeout(createInteractiveBackground, 2000);
});

// Add easter egg - Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.keyCode);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.toString() === konamiSequence.toString()) {
    // Easter egg activated
    document.body.style.animation = "rainbow 2s infinite";
    setTimeout(() => {
      document.body.style.animation = "";
    }, 10000);

    // Show secret message
    const message = document.createElement("div");
    message.innerHTML = "🎉 Easter Egg Activated! Welcome to the Matrix! 🎉";
    message.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(45deg, var(--neon-cyan), var(--neon-pink));
                    color: white;
                    padding: 2rem;
                    border-radius: 15px;
                    z-index: 3000;
                    text-align: center;
                    font-size: 1.2rem;
                    font-weight: bold;
                    animation: modalFadeIn 0.5s ease;
                `;
    document.body.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000);

    konamiCode = [];
  }
});

// Add rainbow animation for easter egg
const rainbowStyle = document.createElement("style");
rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
document.head.appendChild(rainbowStyle);

// Performance optimization - Lazy load images and animations
function optimizePerformance() {
  // Reduce particles on mobile
  if (window.innerWidth < 768) {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle, index) => {
      if (index > 20) {
        particle.remove();
      }
    });
  }

  // Pause animations when tab is not visible
  document.addEventListener("visibilitychange", function () {
    const isHidden = document.hidden;
    const canvas = document.getElementById("neural-canvas");

    if (isHidden) {
      canvas.style.animationPlayState = "paused";
    } else {
      canvas.style.animationPlayState = "running";
    }
  });
}

// Initialize performance optimizations
window.addEventListener("load", optimizePerformance);

// Add loading progress indicator
function updateLoadingProgress() {
  let progress = 0;
  const loader = document.querySelector(".loader");

  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }

    if (loader) {
      loader.style.background = `conic-gradient(var(--neon-cyan) ${
        progress * 3.6
      }deg, rgba(0, 255, 255, 0.3) 0deg)`;
    }
  }, 100);
}

// Start loading progress
updateLoadingProgress();

console.log(
  "🚀 Portfolio loaded successfully! Built with AI and creativity by Saddam Hossain"
);
console.log("💡 Try the Konami code for a surprise! (↑↑↓↓←→←→BA)");
