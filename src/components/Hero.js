import { profile } from "../data/profile";
import { site } from "../data/site";

export function Hero() {
  return `
    <section id="hero" class="hero">
      <div class="hero-content">
        <span class="hero-eyebrow">${profile.availability}</span>
        <p class="hero-role">${profile.title}</p>
        <h1>${profile.name}</h1>

        <h2 class="hero-tagline">
          ${profile.tagline}
        </h2>

        <p class="hero-summary">
          ${profile.summary}
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="button button-primary">
            View Projects
          </a>

          <a
            href="${site.github}"
            target="_blank"
            rel="noreferrer"
            class="button button-secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <aside class="hero-card surface surface-interactive">
        <div class="hero-card-header">
          <span>Currently building</span>
          <span class="status-dot"></span>
        </div>

        <div class="hero-stack">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Vite</span>
          <span>Git</span>
        </div>

        <div class="hero-card-footer">
          <span>${profile.location}</span>
          <span>${profile.availability}</span>
        </div>
      </aside>
    </section>
  `;
}