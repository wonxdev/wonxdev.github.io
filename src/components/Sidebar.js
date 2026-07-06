import { navigation } from "../data/navigation";
import { site } from "../data/site";
import { githubIcon, linkedinIcon, mailIcon } from "./icons";

export function Sidebar() {
  const links = navigation
    .map(
      ({ label, href }) => `
        <li>
          <a href="${href}">${label}</a>
        </li>
      `
    )
    .join("");

  return `
    <div
      class="scroll-progress"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="0">
    </div>

    <button
      type="button"
      id="nav-toggle"
      class="nav-toggle"
      aria-expanded="false"
      aria-controls="sidebar"
      aria-label="Open menu">
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
    </button>

    <div id="nav-overlay" class="nav-overlay"></div>

    <header id="sidebar" class="sidebar">
      <a class="logo" href="#hero">
        <span class="logo-mark">W</span>
        <span class="logo-text">${site.name}</span>
      </a>

      <nav class="sidebar-nav" aria-label="Primary navigation">
        <ul class="nav-links">
          ${links}
        </ul>
      </nav>

      <div class="sidebar-socials">
        <a href="${site.github}" target="_blank" rel="noreferrer" aria-label="GitHub profile">
          ${githubIcon}
        </a>
        <a href="${site.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          ${linkedinIcon}
        </a>
        <a href="${site.emailHref}" target="_blank" rel="noreferrer" aria-label="Email Nathan">
          ${mailIcon}
        </a>
      </div>
    </header>
  `;
}
