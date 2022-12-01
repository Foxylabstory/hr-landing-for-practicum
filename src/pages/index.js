//import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import "../pages/index.css";
import Splide from '@splidejs/splide';

import { Popup } from "../components/Popup";
import { vacanciyApplyBtns, vacancyBtns, faqBtns, applyBtn, burgerBtn, mobileMenu, mobileMenuCloser, titleAnchors } from "../utils/constants.js";

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

//-----------   PopUp -----------------

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


//-----------   Slider -----------------

/* console.log(window.screen.width);

const images = document.querySelectorAll('.slider__block .slider__line img');
const sliderLine = document.querySelector('.slider__block .slider__line');
let count = 0;
let width;
let gap

if (window.screen.width>400){
  gap = 40;
} else {
  gap = 14;
}

function init() {
    width = document.querySelector('.story').offsetWidth + gap;
    rollSlider();
}

init();

document.querySelector('.slider__next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider__prev').addEventListener('click', function () {

    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';

} */

// -----------------NewOne Slider (splide)--------------

var splide = new Splide( '.splide', {
  type: 'loop',
  drag: 'free',
  snap: true,
  perPage: 2,
  perMove: 1,
  wheel: true,
  //padding: '2rem',
  focus  : 0,
  omitEnd: true,
  autoWidth: true,
  autoplay: true,
  breakpoints: {
    970: {
      perPage: 1,
    },
  },
} );

splide.mount();

//-----------   Quiz -----------------
let choice;
const quiz = document.querySelectorAll('.test__choice');
const resultMentor = document.querySelector('.result-mentor');
const resultReviewer = document.querySelector('.result-reviewer');
const test = document.querySelector('.test');
const testButton = document.querySelector('.test__button');
const resultButton = document.querySelector('.result__choice');
console.log(111);
testButton.addEventListener('click', () => {
  let job = countSelection();
  test.classList.toggle("hide");
  job.classList.toggle("hide");
});

resultMentor.querySelector('.result__choice_colour').addEventListener('click', () => {
  resultMentor.classList.toggle("hide");
  test.classList.toggle("hide");
});


resultReviewer.querySelector('.result__choice_colour').addEventListener('click', () => {
  resultReviewer.classList.toggle("hide");
  test.classList.toggle("hide");
});


for (let i = 0; i < quiz.length; i++){
  quiz[i].addEventListener('click', () => {
    quiz[i].classList.toggle("test__choice_colour");
  });
}

function countSelection(){
  let arrChoices = document.querySelectorAll(".test__choice_colour");
  let count = 0;
  arrChoices.forEach(choice => {
    if (choice.classList.contains("mentor")){
      count += 1;
    }
  })
  return selectJob(count)
}

function selectJob(count){
  if (count >= 2){
    return resultMentor
  } else {
    return resultReviewer
  }
}

burgerBtn.addEventListener('click', function (params) {
  mobileMenu.classList.add('mobile_opened');
  mobileMenu.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      handleCloseBurgerMenu();
    }
  });
  mobileMenuCloser.addEventListener('click', function (params) {
    handleCloseBurgerMenu();
  });
  titleAnchors.forEach((title) => {
    title.addEventListener('click', function (params) {
      handleCloseBurgerMenu();
    });
  });
});

const handleCloseBurgerMenu = () => {
  mobileMenu.classList.remove('mobile_opened');
  titleAnchors.forEach((title) => {
    title.removeEventListener('click', function (params) {
      handleCloseBurgerMenu();
    });
  });
}