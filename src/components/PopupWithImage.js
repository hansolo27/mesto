import Popup from './Popup.js';
export default class PopupWithImage extends Popup { 
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImgBG = this._popupElement.querySelector('.popup-img__bg');
    this._popupImgText = this._popupElement.querySelector('.popup-img__text');
  }
  open(name, img) { 
    this._popupImgBG.setAttribute('style', `background-image: url(${img})`);
    this._popupImgText.textContent = name;
    this._popupImgBG.setAttribute('title', `фотография: ${name}`);
    super.open()
  }
  
  setEventListeners() {
    super.setEventListeners()
    this._popupElement.querySelector('.popup-img__close').addEventListener('click', () => {
      this.close()
    })
  }
}