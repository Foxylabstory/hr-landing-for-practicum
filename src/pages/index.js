import "../pages/index.css";

import { vacancyBtns } from "../utils/constants.js";

function setAccordion(accordionBtns, iconSelector, openedPostfix) {
  for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const icon = this.querySelector("." + iconSelector);
      icon.classList.toggle(iconSelector + openedPostfix);
      console.log("icon", icon);
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}
setAccordion(vacancyBtns, "vacancies__open-icon", "_opened");
