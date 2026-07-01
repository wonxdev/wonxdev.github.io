export function SectionHeader({
  eyebrow = "",
  title,
  description = ""
}) {

  return `
    <div class="section-header">

      ${
        eyebrow
          ? `<span class="section-eyebrow">${eyebrow}</span>`
          : ""
      }

      <h2 class="section-title">
        ${title}
      </h2>

      ${
        description
          ? `
            <p class="section-description">
              ${description}
            </p>
          `
          : ""
      }
    </div>
  `;
}