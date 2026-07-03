import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

const categoryLabels = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  gameDevelopment: "Game Development",
  softwareEngineering: "Software Engineering",
  technology: "Technology",
  professional: "Professional",
};

function createSkillList(items) {
  return items.map((skill) => `<span class="skill-chip">${skill}</span>`).join("");
}

export function Skills() {
  const cards = Object.entries(profile.skills)
    .map(
      ([key, items]) => `
        <article class="skills-card surface">
          <h3>${categoryLabels[key] || key}</h3>

          <div class="skill-list">
            ${createSkillList(items)}
          </div>
        </article>
      `
    )
    .join("");

  return `
    <section id="skills">
      ${SectionHeader({
        eyebrow: "Skills",
        title: "A growing, well-rounded toolkit",
        description:
          "From frontend interfaces and Progressive Web Apps to game development and hands-on technology work."
      })}

      <div class="skills-grid">
        ${cards}
      </div>
    </section>
  `;
}
