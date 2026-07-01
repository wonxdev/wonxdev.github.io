import { navigation } from "../data/navigation";
import { site } from "../data/site";

export function Navbar() {
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
    <header>
      <div
        class="scroll-progress"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="0">
      </div>
      <nav aria-label="Primary navigation">
        <a class="logo" href="#hero">
          <span class="logo-mark">W</span>
          <span class="logo-text">${site.name}</span>
        </a>

        <ul class="nav-links">
          ${links}
        </ul>
      </nav>
    </header>
  `;
}