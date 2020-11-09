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
const templ = document.querySelector('template');
const popupImgBG = popupImg.querySelector('.popup-img__bg');
const popupImgText = popupImg.querySelector('.popup-img__text');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function createCard(title, link, clone) {
  const cloneCard = clone.content.cloneNode(true);
  cloneCard.querySelector('.places__text').textContent = title;
  const placeBG = cloneCard.querySelector('.places__bg');
  placeBG.setAttribute('style', `background-image: url(${link})`);
  cloneCard.querySelector('.places__item-delete').addEventListener('click', cardDelete);
  cloneCard.querySelector('.places__img').addEventListener('click', likeCard);
  placeBG.addEventListener('click', function renderClassName(e) { 
    if (e.target.className === 'places__bg') { 
      openImagePopup(title, link);
    }
  });
  /*если убираю проверку класса то при нажатии удаление карточки открывается и попап с изобр*/
  return cloneCard;
}

function createNewPlace(e) {
  e.preventDefault();
  places.prepend(createCard(popupPlaceInputTitle.value, popupPlaceInputLink.value, templ));
  closePopupPlaceCard();
}

function openPopup(pop) { 
  pop.classList.add('popup_opened')
}

function likeCard(item) {
  item.target.classList.toggle('places__img_like_on');
}

function cardDelete(item) { 
  const parent = item.target.parentElement;
  parent.parentElement.remove();
}

function openImagePopup(name, img) {
  popupImgBG.setAttribute('style', `background-image: url(${img})`);
  popupImgText.textContent = name;
  openPopup(popupImg)
}

function renderCards() { 
  for (let i = 0; i < initialCards.length; i += 1) { 
    places.append(createCard(initialCards[i].name, initialCards[i].link,templ))
  }
}
renderCards()

function openPopupAddCard() { 
  openPopup(popupAddPlace);
  popupPlaceInputTitle.value = '';
  popupPlaceInputLink.value = '';
}

function openPopupEditProfile() {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent
  infoInput.value = profileInfo.textContent
}

function closePopup(popup) {
  popup.classList.remove("popup_opened")
}

function closePopupPlaceCard() { 
  closePopup(popupAddPlace)
}

function closePopupEditProfile() { 
  closePopup(profilePopup)
}

function closePopupImg(){ 
  closePopup(popupImg)
}

function formSubmitHandler(evt) { 
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileInfo.textContent = infoInput.value
  closePopupEditProfile()
}

popupCloseImg.addEventListener("click", closePopupImg);
popupClosePlaceButton.addEventListener("click", closePopupPlaceCard);
popupClose.addEventListener("click", closePopupEditProfile);
popupEdit.addEventListener("click", openPopupEditProfile);
profileForm.addEventListener("submit", formSubmitHandler);
addButton.addEventListener("click", openPopupAddCard);
popupFormPlaceAdd.addEventListener("submit", createNewPlace);