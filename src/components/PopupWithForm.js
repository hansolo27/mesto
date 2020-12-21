import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunc) { 
    super(popupSelector);
    this._submitFunc = submitFunc;
    this._inputs = this._popupElement.querySelectorAll('.popup__input');
    this._form = this._popupElement.querySelector('.popup__form')
  }
  _getInputValues() { 
    //this._inputs = this._popupElement.querySelectorAll('.popup__input');
    this._inputObj = {};
    this._inputs.forEach((item) => { 
      this._inputObj[item.name] = item.value
    })
    delete this._inputs
    return this._inputObj;
  }

  clear() { 
    this._form.reset()
  }
  setEventListeners() { 
    super.setEventListeners()
    this._popupElement.querySelector('.popup__close').addEventListener('click', () => {
      this.close()
    })
    this._form.addEventListener('submit', () => { 
      this._submitFunc(this._getInputValues())
    })
  }
}