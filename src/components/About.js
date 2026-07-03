import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const interests = profile.interests.map((item) => `<li>${item}</li>`).join("");

  return `
    <section id="about">
      ${SectionHeader({
        eyebrow: "About",
        title: "From classroom projects to real systems",
        description:
          "A closer look at how I got here, and what I care about building next."
      })}

      <div class="about-grid">
        <div class="about-copy">
          <p class="about-text">
            ${profile.about}
          </p>

          <div class="about-interests">
            <h3 class="about-subheading">Primary Interests</h3>
            <ul class="about-list">
              ${interests}
            </ul>
          </div>
        </div>

        <aside class="about-card surface">
          <div>
            <span>Education</span>
            <strong>${profile.availability}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>${profile.location}</strong>
          </div>

          <div>
            <span>Focus</span>
            <strong>Software Development &amp; Educational Technology</strong>
          </div>
        </aside>
      </div>
    </section>
  `;
}
