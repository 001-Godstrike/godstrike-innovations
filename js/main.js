(() => {
  const config = window.GODSTRIKE_CONFIG || {};
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[id$='EmailLink'], #emailLink").forEach(link => {
    if (config.email) link.href = `mailto:${config.email}`;
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach(link => {
    if (config.whatsapp) link.href = config.whatsapp;
  });

  const githubLink = document.getElementById("githubLink");
  if (githubLink && config.github) {
    githubLink.href = config.github;
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Reveal elements as they enter the viewport. Falls back gracefully.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Keep the site usable if JavaScript is unavailable or reduced motion is preferred.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach(item => item.classList.add("visible"));
  }
})();
