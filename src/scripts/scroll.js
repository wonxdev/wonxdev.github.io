export function initScroll() {
  const progressBar = document.querySelector(".scroll-progress");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  function updateProgress() {
    const scrollTop = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / maxScroll) * 100;
    progressBar.style.width = `${progress}%`;
  }

  function updateActiveSection() {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      const isActive = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener(
    "scroll",
    () => {
      updateProgress();
      updateActiveSection();
    },
    { passive: true }
  );

  updateProgress();
  updateActiveSection();
}