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
    const labels = this._form.querySelectorAll(".form__item_type_text-area");

    for (let i = 0; i < labels.length; i++) {
      labels[i].parentNode.style.gridArea = labels[i].id;
    }
  }
  _vacancyNameToTitle (vacancyName) {
    //return `Хочу стать ${vacancyName.charAt(0).toLowerCase()}${vacancyName.slice(1)}`;
    return "Хочу стать "+ vacancyName;
  }
  _setVacancy (vacancyName){
    if (vacancyName)
    {
      this._title.textContent = this._vacancyNameToTitle(vacancyName);
      this._form.querySelector ("#position").style.display = "none";
      this._form.querySelector ("#area").style.display = "none";
      const experience = this._form.querySelector ("#experience").parentNode;
      experience.style.display = "flex";
      experience.style.gridArea = "area";
      this._form.querySelector ("#stack").parentNode.style.gridArea = "position";
    }
    else {
      this._title.textContent = "Оставьте свои контакты";
      this._form.querySelector ("#position").style.display = "block";
      this._form.querySelector ("#area").style.display = "block";
      this._form.querySelector ("#experience").parentNode.style.display = "none";
    }
    // this._title.textContent = isDefined ? this._vacancyNameToTitle(vacancyName) : ;
    // this._form.querySelector ("#position").style.display = isDefined ? "none" : "flex";
    // this._form.querySelector ("#area").style.display = isDefined ? "none" : "flex";
    // this._form.querySelector ("#experience").parentNode.style.display = isDefined ? "flex" : "none";
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
