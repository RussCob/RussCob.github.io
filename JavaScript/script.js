document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !message) {
      event.preventDefault();
      alert("Please fill in both the email and message fields.");
    } else if (!emailPattern.test(email)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });

  // Smooth scrolling for internal links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 70; // Adjust if you have fixed nav height
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close hamburger if open (for mobile)
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        if (hamburger && navMenu && navMenu.classList.contains("active")) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        }

        // Hide dropdown if open
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach((d) => (d.style.display = "none"));
      }
    });
  });

  // Animate progress bars with color
  const skills = document.querySelectorAll(".progress");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progress = entry.target;
          const targetWidth = progress.getAttribute("data-width");
          const progressColor =
            progress.getAttribute("data-color") || "#4CAF50";

          progress.style.transition =
            "width 1s ease-out, background-color 1s ease-out";
          progress.style.width = targetWidth;
          progress.style.backgroundColor = progressColor;
        }
      });
    },
    { threshold: 0.4 }
  );
  skills.forEach((skill) => observer.observe(skill));

  // Toggle Read More buttons
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  readMoreButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const jobDesc = btn.closest(".job-description");
      const additionalInfo = jobDesc.querySelector(".additional-info");

      if (additionalInfo.style.display === "block") {
        additionalInfo.style.display = "none";
        btn.textContent = "Read More";
      } else {
        additionalInfo.style.display = "block";
        btn.textContent = "Read Less";
      }
    });
  });

  // Hide all additional-info sections on load
  document.querySelectorAll(".additional-info").forEach((section) => {
    section.style.display = "none";
  });

  // Dropdown toggle logic
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    const dropdown = toggle.nextElementSibling;
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Close all others first
      document.querySelectorAll(".dropdown-content").forEach((menu) => {
        if (menu !== dropdown) menu.style.display = "none";
      });

      // Toggle current
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    });
  });

  // Dropdown link click smooth scroll
  const projectLinks = document.querySelectorAll(".dropdown-content a");
  projectLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Hide dropdown after click
        this.closest(".dropdown-content").style.display = "none";
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.previousElementSibling;
      if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Toggle hamburger menu (mobile)
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }
});
