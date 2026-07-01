import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const cards = projects.map(ProjectCard).join("");

  return `
    <section id="projects">
      ${SectionHeader({
        eyebrow: "Portfolio",
        title: "Selected Projects",
        description:
          "A small collection of work shaped by restraint, clarity, and thoughtful interaction."
      })}

      <div class="projects-grid">
        ${cards}
      </div>
    </section>
  `;
}