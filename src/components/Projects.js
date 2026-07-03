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
          "Progressive Web Apps, school systems, and games built to solve real problems — most began as functioning school software before being adapted into standalone frontend demonstrations."
      })}

      <div class="projects-grid">
        ${cards}
      </div>
    </section>
  `;
}