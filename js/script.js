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

function createCard(title, link, clone, alt) {
  const cloneCard = clone.content.cloneNode(true);
  cloneCard.querySelector('.places__text').textContent = title;
  const placeBG = cloneCard.querySelector('.places__bg');
  placeBG.setAttribute('style', `background-image: url(${link})`);
  placeBG.setAttribute('title', `${alt}`);
  const deleteIcon = cloneCard.querySelector('.places__item-delete')
  deleteIcon.addEventListener('click', () => {
    cardDelete(deleteIcon)
  })
  cloneCard.querySelector('.places__img').addEventListener('click', likeCard);
  placeBG.addEventListener('click', function renderClassName(e) { 
    if (e.target.className === 'places__bg') { 
      openImagePopup(title, link);
    }
  });
  return cloneCard;
}

function createNewPlace(e) {
  e.preventDefault();
  places.prepend(createCard(popupPlaceInputTitle.value, popupPlaceInputLink.value, templ, `фотография: ${popupPlaceInputTitle.value}`));
  const openedPopup = document.querySelector('.popup_opened')
  closePopup(openedPopup);
}

function openPopup(pop) { 
  pop.classList.add('popup_opened')
  document.addEventListener('click', closeByOverlayClick)
  document.addEventListener('keydown', closeByEsc)
}

function likeCard(item) {
  item.target.classList.toggle('places__img_like_on');
}

function cardDelete(e) { 
  const parent = e.closest('.places__item');
  parent.remove();
}

function openImagePopup(name, img) {
  popupImgBG.setAttribute('style', `background-image: url(${img})`);
  popupImgText.textContent = name;
  popupImgBG.setAttribute('title', `фотография: ${name}`);
  openPopup(popupImg)
}

function renderCards() { 
  for (let i = 0; i < initialCards.length; i += 1) { 
    places.append(createCard(initialCards[i].name, initialCards[i].link, templ, initialCards[i].alt))
  }
}
renderCards()

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

function closePopup(popup) {
  popup.classList.remove("popup_opened")
  document.addEventListener('click', closeByOverlayClick)
  document.removeEventListener('keydown', closeByEsc)
}

function formSubmitHandler(evt) { 
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileInfo.textContent = infoInput.value
  const openedPopup = document.querySelector('.popup_opened')
  closePopup(openedPopup)
}

function closeByOverlayClick(e) { 
  if (e.target.classList.contains('popup')) { 
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

function closeByEsc(e) { 
  if (e.key === 'Escape') { 
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
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
