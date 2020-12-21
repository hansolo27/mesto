export default class Popup { 
  constructor(popupSelector) { 
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose =  this._handleEscClose.bind(this)
  }

  close() { 
    this._popupElement.classList.remove("popup_opened")
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close()
    }
  }

  open() {
    this._popupElement.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose)
  }

  closeByOverlayClick(e) {
    if (e.target.classList.contains('popup')) {
      this.close()
    }
  }

  setEventListeners() { 
    document.addEventListener('click', (e) => { 
      this.closeByOverlayClick(e)
    })
  }
}