export function ProjectCard(project) {
  const stack = project.technologies.map((tech) => `<span>${tech}</span>`).join("");

  const actions = project.links
    .map(
      (link) =>
        `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label} →</a>`
    )
    .join("");

  const roles = project.role.join(" · ");

  return `
    <article class="project-card surface surface-interactive">
      <header class="project-header">
        <span class="project-category">${project.category}</span>
        ${
          project.featured
            ? `<span class="project-featured">Featured</span>`
            : ``
        }
      </header>

      <div class="project-content">
        <h3 class="project-title">
          ${project.title}
        </h3>

        <div class="project-meta">
          <span>${project.year}</span>
          <span aria-hidden="true">•</span>
          <span>${roles}</span>
        </div>

        <p class="project-description">
          ${project.description}
        </p>
      </div>

      <div class="project-stack">
        ${stack}
      </div>

      <hr class="project-divider">

      <footer class="project-links">
        <div class="project-actions">
          ${actions}
        </div>
      </footer>
    </article>
  `;
}
