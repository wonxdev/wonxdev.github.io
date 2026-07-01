import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

function createSkillList(items) {
  return items.map((skill) => `<span class="skill-chip">${skill}</span>`).join("");
}

export function Skills() {
  return `
    <section id="skills">
      ${SectionHeader({
        eyebrow: "Skills",
        title: "A focused toolkit",
        description:
          "I work best when the stack stays simple, expressive, and easy to maintain."
      })}

      <div class="skills-grid">
        <article class="skills-card surface">
          <h3>Languages</h3>

          <div class="skill-list">
            ${createSkillList(profile.skills.languages)}
          </div>
        </article>

        <article class="skills-card surface">
          <h3>Frameworks</h3>

          <div class="skill-list">
            ${createSkillList(profile.skills.frameworks)}
          </div>
        </article>

        <article class="skills-card surface">
          <h3>Tools</h3>

          <div class="skill-list">
            ${createSkillList(profile.skills.tools)}
          </div>
        </article>
      </div>
    </section>
  `;
}