export const initialCards = [
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
export const configObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_type_invalid',
  invalidSelector: 'popup__input_invalid'
}
export const profilePopup = document.querySelector(".popup_type_profile");
export const nameInput = document.querySelector(".popup__input_save_name");
export const infoInput = document.querySelector(".popup__input_save_info");
//const profileName = document.querySelector(".profile__title");
export const profileForm = profilePopup.querySelector(".popup__form");
//const profileInfo = document.querySelector(".profile__subtitle");
export const popupEdit = document.querySelector(".profile__linkedit");
//const popupClose = profilePopup.querySelector(".popup__close");
export const addButton = document.querySelector('.profile__add');
export const places = document.querySelector('.places');
//const popupImg = document.querySelector('.popup_type_img');
//const popupAddPlace = document.querySelector('.popup_type_place');
//const popupClosePlaceButton = document.querySelector('.popup__close_type_place');
//const popupCloseImg = document.querySelector('.popup-img__close');
export const popupFormPlaceAdd = document.querySelector('.popup__form_type_place');
//const popupPlaceInputTitle = document.querySelector('.popup__input_type_place-title');
//const popupPlaceInputLink = document.querySelector('.popup__input_type_place-link');