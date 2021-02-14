import Popup from '../components/Popup.js';

export default class DeleteCard extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._form = this._popupElement.querySelector('.popup__form');
  }

  setSubmitAction(submitAction){
    //this._submitCallback = submitAction
    this._handleDelete = submitAction
  }

  setEventListeners() {
    super.setEventListeners()

    this._popupElement.querySelector('.popup__close').addEventListener('click', () => {
        this.close()
      })

    this._form.addEventListener('submit', (e) => { 
        e.preventDefault()
        this._handleDelete()
      })
  }

}