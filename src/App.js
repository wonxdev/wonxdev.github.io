import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";

export function App() {
  return `
    <a class="skip-link" href="#main-content">Skip to content</a>

    ${Navbar()}

    <main id="main-content">
      ${Hero()}
      ${Projects()}
      ${About()}
      ${Skills()}
      ${Timeline()}
    </main>

    ${Footer()}
  `;
}