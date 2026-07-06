import { profile } from "../data/profile";
import { site } from "../data/site";
import { githubIcon, linkedinIcon } from "./icons";

export function Hero() {
  const roleChips = profile.roles.map((role) => `<span>${role}</span>`).join("");

  const resumeButton = site.resume
    ? `<a href="${site.resume}" target="_blank" rel="noreferrer" class="button button-secondary">Download Resume</a>`
    : `<span class="button button-secondary button-disabled" aria-disabled="true" title="Resume coming soon">Download Resume</span>`;

  return `
    <section id="hero" class="hero">
      <div class="hero-content">
        <span class="hero-eyebrow">${profile.status}</span>
        <p class="hero-role">${profile.title}</p>
        <h1>${profile.name}</h1>

        <h2 class="hero-tagline">
          ${profile.tagline.line1}<span class="gradient-work"> ${profile.tagline.highlight1}</span>${profile.tagline.line2}<br>
          ${profile.tagline.line3}<span class="gradient-last"> ${profile.tagline.highlight2}</span>${profile.tagline.line4}
        </h2>

        <p class="hero-summary">
          ${profile.summary}
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="button button-primary">
            View Projects
          </a>

          ${resumeButton}

          <a href="#contact" class="button button-secondary">
            Contact
          </a>
        </div>

        <div class="hero-socials">
          <a href="${site.github}" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            ${githubIcon}
          </a>
          <a href="${site.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            ${linkedinIcon}
          </a>
        </div>
      </div>

      <aside class="hero-card surface surface-interactive">
        <div class="hero-card-header">
          <span>Focus Areas</span>
          <span class="status-dot"></span>
        </div>

        <div class="hero-stack">
          ${roleChips}
        </div>

        <div class="hero-card-footer">
          <span>${profile.location}</span>
          <span>${profile.availability}</span>
        </div>
      </aside>
    </section>
  `;
}
