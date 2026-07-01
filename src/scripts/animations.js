export function initAnimations() {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("revealed");
      });
    },
    {
      threshold: 0.15,
    }
  );

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}