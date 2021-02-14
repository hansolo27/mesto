export class Card {
  constructor(data,handleCardClick,{likeCard, removeCard},UserId, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._data = data;
    this._cardSelector = cardSelector;
    this._removeCard = removeCard;
    this._handleCardClick = handleCardClick;
    this._userId = UserId;
    this._likeCard = likeCard;
    this._ownerId = data.owner._id;
    
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.cloneNode('true')
    return cardElement;
  }

  _setRemove() {
    if (this._ownerId === this._userId) {
        this._element.querySelector('.places__item-delete').classList.add("active");
    }
}

  createCard() {
    this._element = this._getTemplate();
    // this._element.querySelector('.places__like_value').textContent = this._data.likes.length;
    this._element.querySelector('.places__text').textContent = this._name
    this._placesBg = this._element.querySelector('.places__bg');
    this._placesBg.setAttribute('style', `background-image: url(${this._link})`)
    this._placesBg.setAttribute('title', `${this._name}`)
    this._delIcon = this._element.querySelector('.places__item-delete')
    this._likeIcon = this._element.querySelector('.places__img')
    this.idCard = this._data._id
    if(this._data.owner._id === this._userId){
      this._delIcon.classList.add('active')
    }
    this._setRemove()
    this._setEvents()
    this._like_value = this._element.querySelector('.places__like_value')
    this.card = this._element.querySelector('.places__item')
    return this._element
  }


haveLike(){
  return this.isLiked
}

 setLikes(data) {
  this.isLiked = data.likes.some((item) => {
    return item._id == this._userId
 })


 this._like_value.textContent = data.likes.length;

  if (this.haveLike()) {
     this._likeIcon.classList.add('places__img_like_on');
  
  } else {
    this._likeIcon.classList.remove('places__img_like_on');
  }
}


  
  delCard() {
    this.card.remove();
    this.card = null;
}


  _setEvents() { 
    this._element.querySelector('.places__item-delete').addEventListener('click', () => { 
      this._removeCard();
    })
    this._likeIcon.addEventListener('click', () => {
      this._likeCard()
    })
    this._placesBg.addEventListener('click', (e) => { 
      if (e.target.className === 'places__bg') { 
        this._handleCardClick()
      }
    })
  }
}