import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/layout.css";
import "./styles/utilities.css";
import "./styles/animations.css";
import "./styles/intro-burn.css";

import { App } from "./App";

import { initAnimations } from "./scripts/animations";
import { initCards } from "./scripts/cards";
import { initIntroBurn } from "./scripts/introBurn";
import { initNav } from "./scripts/nav";
import { initScroll } from "./scripts/scroll";

document.querySelector("#app").innerHTML = App();

initIntroBurn();
initAnimations();
initCards();
initNav();
initScroll();