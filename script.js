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
  
    // Animate progress bars
    const skills = document.querySelectorAll('.progress');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progress = entry.target;
          const targetWidth = progress.getAttribute('data-width');
          progress.style.transition = "width 1s ease-out";
          progress.style.width = targetWidth;
        }
      });
    }, { threshold: 0.4 });
  
    skills.forEach(skill => observer.observe(skill));
  
    // Toggle Read More buttons for all job descriptions
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
  
    readMoreButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const jobDesc = btn.closest('.job-description');
        const additionalInfo = jobDesc.querySelector('.additional-info');
  
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
    document.querySelectorAll('.additional-info').forEach(section => {
      section.style.display = 'none';
    });
  
    // Dropdown menu link behavior
    const projectLinks = document.querySelectorAll('.dropdown-content a');
  
    projectLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  });
  