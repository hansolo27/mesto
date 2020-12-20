export default class Popup { 
  constructor(popupSelector) { 
    this._selector = document.querySelector(popupSelector);
  }
  open() { 
    this._selector.classList.add('popup_opened')
  }

  close() { 
    this._selector.classList.remove("popup_opened")
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened')
      this.close(openedPopup)
    }
  }

  closeByOverlayClick(e) {
    if (e.target.classList.contains('popup')) {
      const openedPopup = document.querySelector('.popup_opened')
      this.close(openedPopup)
    }
  }

  setEventListeners() { 
    document.addEventListener('keydown', (e) => { 
      this._handleEscClose(e)
    })
    document.addEventListener('click', (e) => { 
      this.closeByOverlayClick(e)
    })
  }
}