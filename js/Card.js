import { openImagePopup } from './index.js'

export class Card{
  constructor(data, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document.querySelector(this._cardSelector).content.cloneNode('true')
  }

  createCard() { 
    this._element = this._getTemplate();
    this._element.querySelector('.places__text').textContent = this._name;
    this._element.querySelector('.places__bg').setAttribute('style', `background-image: url(${this._link})`)
    this._element.querySelector('.places__bg').setAttribute('title', `${this._alt}`)
    this.delIcon = this._element.querySelector('.places__item-delete')
    this.likeIcon = this._element.querySelector('.places__img')
    this._bgCard = this._element.querySelector('.places__bg')
    this._setEvents()
    return this._element
  }

  _removeCard(e) { 
    const parent = e.closest('.places__item')
    parent.remove();
  }

  _likedCard() { 
    this.likeIcon.classList.toggle('places__img_like_on')
  }
  /*
  _openImagePopup(name, img) {
    const popupImg = document.querySelector('.popup_type_img');
    const popupImgBG = popupImg.querySelector('.popup-img__bg');
    const popupImgText = popupImg.querySelector('.popup-img__text');
    popupImgBG.setAttribute('style', `background-image: url(${img})`);
    popupImgText.textContent = name;
    popupImgBG.setAttribute('title', `фотография: ${name}`);
    openPopup(popupImg)
  }*/

  _setEvents() { 
    this._element.querySelector('.places__item-delete').addEventListener('click', () => { 
      this._removeCard(this.delIcon)
    })
    this.likeIcon.addEventListener('click', () => { 
      this._likedCard()
    })
    this._bgCard.addEventListener('click', (e) => {
      if (e.target.className === 'places__bg') {
          openImagePopup(this._name, this._link)
      }
    })
  }
}