const profilePopup = document.querySelector(".popup_type_profile");
const nameInput = document.querySelector(".popup__input_save_name");
const infoInput = document.querySelector(".popup__input_save_info");
const profileName = document.querySelector(".profile__title");
const profileForm = profilePopup.querySelector(".popup__form");
const profileInfo = document.querySelector(".profile__subtitle");
const popupEdit = document.querySelector(".profile__linkedit");
const popupClose = profilePopup.querySelector(".popup__close");
const addButton = document.querySelector('.profile__add');
const places = document.querySelector('.places');
const popupImg = document.querySelector('.popup_type_img');
const popupAddPlace = document.querySelector('.popup_type_place');
const popupClosePlaceButton = document.querySelector('.popup__close_type_place');
const popupCloseImg = document.querySelector('.popup-img__close');
const popupFormPlaceAdd = document.querySelector('.popup__form_type_place');
const popupPlaceInputTitle = document.querySelector('.popup__input_type_place-title');
const popupPlaceInputLink = document.querySelector('.popup__input_type_place-link');
//const templ = document.querySelector('template');
//const popupImgBG = popupImg.querySelector('.popup-img__bg');
//const popupImgText = popupImg.querySelector('.popup-img__text');

const configObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_type_invalid',
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'фотография: Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'фотография: Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'фотография: Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'фотография: Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'фотография: Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'фотография: Байкал'
  }
];

import { Card } from './Card.js';
import {FormValidator} from './FormValidator.js'

function closePopup(popup) {
  popup.classList.toggle("popup_opened")
  document.addEventListener('click', closeByOverlayClick)
  document.removeEventListener('keydown', closeByEsc)
}

function closeByEsc(e) { 
  if (e.key === 'Escape') { 
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

function closeByOverlayClick(e) { 
  if (e.target.classList.contains('popup')) { 
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

function openPopup(pop) { 
  pop.classList.add('popup_opened')
  document.addEventListener('click', closeByOverlayClick)
  document.addEventListener('keydown', closeByEsc)
}

function openPopupAddCard() { 
  openPopup(popupAddPlace);
  const popupSavePlace = popupAddPlace.querySelector('.popup__save_type_place')
  popupSavePlace.setAttribute('disabled', 'true');
  popupSavePlace.classList.add('popup__save_type_invalid');
  popupPlaceInputTitle.value = '';
  popupPlaceInputLink.value = '';
}

function openPopupEditProfile() {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent
  infoInput.value = profileInfo.textContent
}

function formSubmitHandler(evt) { 
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileInfo.textContent = infoInput.value
  closePopup(profilePopup)
}

function createNewPlace(e) {
  e.preventDefault();
  const obj = {}
  obj.name = popupPlaceInputTitle.value;
  obj.link = popupPlaceInputLink.value;
  obj.alt = `фотография: ${popupPlaceInputTitle.value}`;
  const newCard = new Card(obj, 'template')
  places.prepend(newCard.createCard())
  closePopup(popupAddPlace);
}

export function openImagePopup(name, img) {
  const popupImg = document.querySelector('.popup_type_img');
  const popupImgBG = popupImg.querySelector('.popup-img__bg');
  const popupImgText = popupImg.querySelector('.popup-img__text');
  popupImgBG.setAttribute('style', `background-image: url(${img})`);
  popupImgText.textContent = name;
  popupImgBG.setAttribute('title', `фотография: ${name}`);
  openPopup(popupImg)
}

popupCloseImg.addEventListener("click", () => {
  closePopup(popupImg)
});
popupClosePlaceButton.addEventListener("click", () => { 
  closePopup(popupAddPlace)
});
popupClose.addEventListener("click", () => { 
  closePopup(profilePopup)
});
popupEdit.addEventListener("click", openPopupEditProfile);
profileForm.addEventListener("submit", formSubmitHandler);
addButton.addEventListener("click", openPopupAddCard);
popupFormPlaceAdd.addEventListener("submit", createNewPlace);

initialCards.forEach(item => { 
  const cards = new Card(item, 'template');
  places.append(cards.createCard())
})

const formElement = Array.from(document.querySelectorAll('.popup__form'))
formElement.forEach(item => {
  const validationObject = new FormValidator(configObj, item)
  validationObject.enableValidation()
})
