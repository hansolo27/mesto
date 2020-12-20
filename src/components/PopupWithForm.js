import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunc) { 
    super(popupSelector);
    this._submitFunc = submitFunc;
  }
  _getInputValues() { 
    this._inputs = this._selector.querySelectorAll('.popup__input');
    this._inputObj = {};
    this._inputs.forEach((item) => { 
      this._inputObj[item.name] = item.value
    })
    delete this._inputs
    return this._inputObj;
  }

  clear() { 
    this._selector.querySelector('.popup__form').reset()
  }
  setEventListeners() { 
    super.setEventListeners()
    this._selector.querySelector('.popup__close').addEventListener('click', () => {
      this.close()
    })
    this._selector.querySelector('.popup__form').addEventListener('submit', () => { 
      this._submitFunc(this._getInputValues())
    })
  }
}