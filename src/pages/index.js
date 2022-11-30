/* import "../pages/index.css"; */

import { vacancyBtns,faqBtns } from "../utils/constants.js";

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
setAccordion(faqBtns, "faq__open-icon", "_opened")

//-----------   Slider -----------------

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    width = document.querySelector('.story').offsetWidth + 40;
    rollSlider();
}

init();

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {

    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

//-----------   Quiz -----------------
let choice;
let quiz = document.querySelectorAll('.test__choice');
let resultImage = document.querySelector('.result__image');
let resultText = document.querySelector('.result__text');


document.querySelector('.test__button').addEventListener('click', () => {
  countSelection();
  document.querySelector('.test').style.setProperty("display", "none");
  document.querySelector('.result').style.setProperty("display", "block");
});

document.querySelector('.result__choice_colour').addEventListener('click', () => {
  document.querySelector('.result').style.setProperty("display", "none");
  document.querySelector('.test').style.setProperty("display", "block");
});


for (let i = 0; i < quiz.length; i++){
  quiz[i].addEventListener('click', () => {
    quiz[i].classList.toggle("test__choice_colour");
  });
}

function countSelection(){
  let arrChoices = document.querySelectorAll(".test__choice_colour");
  let result = 0;
  arrChoices.forEach(choice => {
    if (choice.classList.contains("mentor")){
      result += 1;
    }
  })
  selectJob(result)
}

function selectJob(count){
  if (count >= 2){
    resultImage.src = "../src/images/professions/result-mentor.png";
    resultText.textContent = "Вам может быть интересна роль наставника";
  } else {
    resultImage.src = "../src/images/professions/result-reviewer.png";
    resultText.textContent = "Вам может быть интересна роль ревьюера";
  }
}
