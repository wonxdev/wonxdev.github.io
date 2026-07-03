import { site } from "../data/site";

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="footer-content">
        <div>
          <p class="footer-title">Let’s build something sharp, useful, and lasting.</p>
          <div class="footer-links">
            <a class="footer-link" href="${site.github}" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a class="footer-link" href="${site.linkedin}" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div class="footer-meta">
          <span>© ${site.year} ${site.owner}</span>
          <span>wonxdev</span>
        </div>
      </div>
    </footer>
  `;
}
