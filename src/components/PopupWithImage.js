import Popup from './Popup.js';
export default class PopupWithImage extends Popup { 
  open(name, img) { 
    const popupImg = document.querySelector('.popup_type_img');
    const popupImgBG = popupImg.querySelector('.popup-img__bg');
    const popupImgText = popupImg.querySelector('.popup-img__text');
    popupImgBG.setAttribute('style', `background-image: url(${img})`);
    popupImgText.textContent = name;
    popupImgBG.setAttribute('title', `фотография: ${name}`);
    this._selector.classList.add('popup_opened');
    this.setEventListeners()
  }
  setEventListeners() {
    super.setEventListeners()
    this._selector.querySelector('.popup-img__close').addEventListener('click', () => {
      this.close()
    })
  }
}