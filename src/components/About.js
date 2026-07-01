import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const principles = profile.principles.map((item) => `<li>${item}</li>`).join("");

  return `
    <section id="about">
      ${SectionHeader({
        eyebrow: "About",
        title: "Focused on thoughtful craft",
        description:
          "I care about clarity, durable systems, and interfaces that feel calm and considered."
      })}

      <div class="about-grid">
        <div class="about-copy">
          <p class="about-text">
            ${profile.about}
          </p>

          <ul class="about-list">
            ${principles}
          </ul>
        </div>

        <aside class="about-card surface">
          <div>
            <span>Location</span>
            <strong>${profile.location}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>${profile.availability}</strong>
          </div>
        </aside>
      </div>
    </section>
  `;
}