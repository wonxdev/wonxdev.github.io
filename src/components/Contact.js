import { site } from "../data/site";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const emailValue = site.email
    ? `<a class="contact-value" href="mailto:${site.email}">${site.email}</a>`
    : `<span class="contact-value contact-placeholder">Reach out via LinkedIn or GitHub</span>`;

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
              github.com/wonxdev
            </a>
          </div>

          <div class="contact-row">
            <span class="contact-label">LinkedIn</span>
            <a class="contact-value" href="${site.linkedin}" target="_blank" rel="noreferrer">
              linkedin.com/in/nathansuwiji
            </a>
          </div>

          <div class="contact-row">
            <span class="contact-label">Email</span>
            ${emailValue}
          </div>
        </aside>
      </div>
    </section>
  `;
}
