const page = document.querySelector(".page");
const vacanciyApplyBtns = document.querySelectorAll(".vacancies__apply-button");
const vacancyBtns = document.querySelectorAll(".vacancies__vacancy-summary-button");
const faqBtns = document.querySelectorAll(".faq__question-button");
const applyBtn = page.querySelector(".vacancies__apply");
const burgerBtn = page.querySelector(".header__burger");
const mobileMenu = page.querySelector(".mobile");
const mobileMenuCloser = page.querySelector(".mobile__closer");
const titleAnchors = page.querySelectorAll(".mobile__link");
const positionFilter = page.querySelector(".vacancies__position-filter");
const areaFilter = page.querySelector(".vacancies__area-filter");
const shareButtons =page.querySelectorAll('.vacancies__share-button');

const vacancies = [...page.querySelectorAll('.vacancies__vacancy')];
const vacanciesContainer = page.querySelector(".vacancies__list");
const vacanciesNotFoundMessage = page.querySelector(".vacancies__not-found-message");

export {
  page,
  vacanciyApplyBtns,
  vacancyBtns,
  faqBtns,
  applyBtn,
  burgerBtn,
  mobileMenu,
  mobileMenuCloser,
  titleAnchors,
  positionFilter,
  areaFilter,
  vacancies,
  vacanciesContainer,
  vacanciesNotFoundMessage,
  shareButtons,
};
