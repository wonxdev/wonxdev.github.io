export function ProjectCard(project) {
  const stack = project.technologies.map((tech) => `<span>${tech}</span>`).join("");

  const actions = [
    project.github
      ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>`
      : "",
    project.live
      ? `<a href="${project.live}" target="_blank" rel="noreferrer">Live →</a>`
      : ""
  ]
    .filter(Boolean)
    .join("");

  return `
    <article class="project-card surface surface-interactive">
      <header class="project-header">
        ${
          project.featured
            ? `<span class="project-featured">Featured</span>`
            : ``
        }

        <span class="project-number">
          #${String(project.id).padStart(2, "0")}
        </span>
      </header>

      <div class="project-content">
        <h3 class="project-title">
          ${project.title}
        </h3>

        <p class="project-description">
          ${project.description}
        </p>
      </div>

      <div class="project-stack">
        ${stack}
      </div>

      <hr class="project-divider">

      <footer class="project-links">
        <span class="project-status">
          ${project.status}
        </span>

        <div class="project-actions">
          ${actions}
        </div>
      </footer>
    </article>
  `;
}