import "../pages/index.css";

import { Popup } from "../components/Popup";
import { vacanciyApplyBtns, vacancyBtns, faqBtns, applyBtn } from "../utils/constants.js";

function setAccordion(accordionBtns, iconSelector, openedPostfix) {
  for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const icon = this.querySelector("." + iconSelector);
      icon.classList.toggle(iconSelector + openedPostfix);
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}
function setApplyButtonsListeners () {
  for (let i = 0; i < vacanciyApplyBtns.length; i++) {
    vacanciyApplyBtns[i].addEventListener('click', openPopUpWithVacancy);
  }
}

function handleApplicationSubmit(data) {
  console.log (data);
}

setAccordion(vacancyBtns, "vacancies__open-icon", "_opened");
setAccordion(faqBtns, "faq__open-icon", "_opened")

function openPopUpEmpty () {
  popUp.open();
}
function openPopUpWithVacancy (evt) {
  popUp.open (evt.target.parentNode.parentNode.parentNode.querySelector('.vacancies__vacancy-title').textContent);
}

const popUp = new Popup('.popup', handleApplicationSubmit);
popUp.setEventListeners();
applyBtn.addEventListener('click', openPopUpEmpty);

setApplyButtonsListeners();

