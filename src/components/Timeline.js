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
            ${
              item.organization
                ? `<p class="timeline-org">${item.organization}</p>`
                : ""
            }
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
          "From a first Construct 3 game to representing BINUS University Semarang — a timeline of projects, leadership, and outreach."
      })}

      <div class="timeline">
        ${items}
      </div>
    </section>
  `;
}
