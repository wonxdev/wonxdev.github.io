export function initCards() {
  const cards = document.querySelectorAll(".hero-card, .project-card, .contact-card");

  cards.forEach((card) => {
    card.addEventListener("mousedown", () => {
      card.classList.add("card-active");
    });

    card.addEventListener("mouseup", () => {
      card.classList.remove("card-active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("card-active");
    });
  });
}