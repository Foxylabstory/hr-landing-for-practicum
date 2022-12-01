export class Popup {
  constructor(popupSelector, handleFormSubmit) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtn = this._popup.querySelector('.popup__close-btn');
    this.close = this.close.bind(this);
    this._submit = handleFormSubmit;
    this._form = this._popup.querySelector('.form');
    this._thanks = this._popup.querySelector('.form__thanks');
    this._title = this._form.querySelector('.form__title');
    this._inputs = [...this._popup.querySelectorAll('.form__item')];
  }
  open(vacancyName) {
    document.addEventListener('keydown', this._handleEscClose);
    this._setGrid();
    this._setVacancy(vacancyName);
    this._showThanks(false);
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._form.reset();
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  _getInputValues() {
    const data = {};
    this._inputs.forEach(input => {
      data[input.id] = input.value;
    });
    return data;
  }
  
  _setGrid () {
    for (let i = 0; i < this._inputs.length; i++) {
      this._inputs[i].style.gridArea = this._inputs[i].id;
    }
  }

  _setVacancy (vacancyName) {
    this._title.textContent = vacancyName ? vacancyName :  "Оставьте свои контакты";
  }

  _showThanks (isShow) {
    this._form.style.display = isShow ? "none" : "flex";
    this._thanks.style.display = isShow ? "flex" : "none";
  }

  setEventListeners() {
    this._closeBtn.addEventListener('click', this.close);
    this._popup.addEventListener('click', evt => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submit(this._getInputValues())
      this._showThanks(true);
    });
  }


}
