import "./styles/animations.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/layout.css";
import "./styles/reset.css";
import "./styles/utilities.css";
import "./styles/variables.css";

import { App } from "./App";

import { initAnimations } from "./scripts/animations";
import { initCards } from "./scripts/cards";
import { initScroll } from "./scripts/scroll";

document.querySelector("#app").innerHTML = App();

initAnimations();
initCards();
initScroll();