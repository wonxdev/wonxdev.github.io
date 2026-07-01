import { timeline } from "../data/timeline";
import { SectionHeader } from "./SectionHeader";

export function Timeline() {
  const items = timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-year">
            ${item.year}
          </div>

          <div class="timeline-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");

  return `
    <section id="timeline">
      ${SectionHeader({
        eyebrow: "Journey",
        title: "A steady progression",
        description:
          "Small steps, consistent practice, and a focus on shipping thoughtful work."
      })}

      <div class="timeline">
        ${items}
      </div>
    </section>
  `;
}