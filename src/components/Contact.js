import { site } from "../data/site";
import { SectionHeader } from "./SectionHeader";

function displayUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function Contact() {
  return `
    <section id="contact">
      ${SectionHeader({
        eyebrow: "Contact",
        title: "Let's build something together",
        description:
          "Open to internships, collaborations, and opportunities in software development and educational technology. Feel free to reach out."
      })}

      <div class="contact-grid">
        <aside class="contact-card surface surface-interactive">
          <div class="contact-row">
            <span class="contact-label">GitHub</span>
            <a class="contact-value" href="${site.github}" target="_blank" rel="noreferrer">
              ${displayUrl(site.github)}
            </a>
          </div>

          <div class="contact-row">
            <span class="contact-label">LinkedIn</span>
            <a class="contact-value" href="${site.linkedin}" target="_blank" rel="noreferrer">
              ${displayUrl(site.linkedin)}
            </a>
          </div>

          <div class="contact-row">
            <span class="contact-label">Email</span>
            <a class="contact-value" href="${site.emailHref}" target="_blank" rel="noreferrer">
              ${site.email}
            </a>
          </div>
        </aside>
      </div>
    </section>
  `;
}
