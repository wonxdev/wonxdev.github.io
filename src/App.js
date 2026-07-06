import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { IntroBurn } from "./components/IntroBurn";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";

export function App() {
  return `
    ${IntroBurn()}

    <a class="skip-link" href="#main-content">Skip to content</a>

    ${Sidebar()}

    <main id="main-content">
      ${Hero()}
      ${About()}
      ${Projects()}
      ${Skills()}
      ${Timeline()}
      ${Contact()}
    </main>

    ${Footer()}
  `;
}
