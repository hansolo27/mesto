const popup = document.querySelector(".popup");
const nameInput = document.querySelector(".popup__input_save_name");
const infoInput = document.querySelector(".popup__input_save_info");
const profileName = document.querySelector(".profile__title");
const popupForm = document.querySelector(".popup__form");
const profileInfo = document.querySelector(".profile__subtitle");
const popupEdit = document.querySelector(".profile__linkedit");
const popupClose = document.querySelector(".popup__close");
const addButton = document.querySelector('.profile__add');
const places = document.querySelector('.places');
const popupImg = document.querySelector('.popup_type_img');
const popupAddPlace = document.querySelector('.popup_type_place');
const popupClosePlaceButton = document.querySelector('.popup__close_type_place');
const popupCloseImg = document.querySelector('.popup-img__close');
const popupFormPlaceAdd = document.querySelector('.popup__form_type_place');
const popupPlaceInputTitle = document.querySelector('.popup__input_type_place-title');
const popupPlaceInputLink = document.querySelector('.popup__input_type_place-link');

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

function createCard(initialCards) { 
  let clone = document.querySelector('template');
  let cloneCard = clone.content.cloneNode(true);
  cloneCard.querySelector('.places__text').textContent = initialCards.name;
  cloneCard.querySelector('.places__bg').setAttribute('style', `background-image: url(${initialCards.link})`);
  cloneCard.querySelector('.places__item-delete').addEventListener('click', cardDelete);
  cloneCard.querySelector('.places__img').addEventListener('click', likeCard);
  cloneCard.querySelector('.places__bg').addEventListener('click', imagePopup);
  return cloneCard;
}

function createNewPlace(e) {
  e.preventDefault();
  let clone = document.querySelector('template');
  let cloneCard = clone.content.cloneNode(true);
  cloneCard.querySelector('.places__bg').setAttribute("style", `background-image: url(${popupPlaceInputLink.value})`);
  cloneCard.querySelector('.places__text').textContent = popupPlaceInputTitle.value;
  cloneCard.querySelector('.places__item-delete').addEventListener('click', cardDelete);
  cloneCard.querySelector('.places__img').addEventListener('click', likeCard);
  cloneCard.querySelector('.places__bg').addEventListener('click', imagePopup);
  places.prepend(cloneCard);
  clousedPopupPlaceCard();
}

function imagePopup(e) {
  let iconBg = e.target.getAttribute('style');
  let popupImgBg = document.querySelector('.popup-img__bg');
  let item = e.target.closest('.places__item');
  let text = item.querySelector('.places__text');
  document.querySelector('.popup-img__text').textContent = text.textContent;
  popupImgBg.setAttribute('style', iconBg);
  if (e.target.className === "places__bg") {
    openPopup(popupImg)
  }
}

function openPopup(e) { 
  e.classList.add('popup_opened')
}

function likeCard(item) {
  item.target.classList.toggle('places__img_like_on');
}

function cardDelete(item) { 
  let parent = item.target.parentElement;
  parent.parentElement.classList.add('places__item_delete')
}

function add() { 
  for (let i = 0; i < initialCards.length; i += 1) { 
    //console.log(createCard(initialCards[i]));
    places.append(createCard(initialCards[i]))
  }
}
add()

function openPopupAddCard() { 
  openPopup(popupAddPlace);
  popupAddPlace.querySelector('.popup__input_type_place-link').value = 'Ссылка на картинку';
  popupAddPlace.querySelector('.popup__input_type_place-title').value = 'Название';
}

function openPopupEditProfile() {
  openPopup(popup);
  nameInput.value = profileName.textContent
  infoInput.value = profileInfo.textContent
}

function clousedPopup(e) {
  e.classList.remove("popup_opened")
}

function clousedPopupPlaceCard() { 
  clousedPopup(popupAddPlace)
}

function clousedPopupEditProfile() { 
  clousedPopup(popup)
}

function clousedPopupImg(){ 
  clousedPopup(popupImg)
}

function closePopEdit() { 
  clousedPopup(popup)
}

function formSubmitHandler(evt) { 
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileInfo.textContent = infoInput.value
  closePopEdit()
}

popupCloseImg.addEventListener("click", clousedPopupImg);
popupClosePlaceButton.addEventListener("click", clousedPopupPlaceCard);
popupClose.addEventListener("click", clousedPopupEditProfile);
popupEdit.addEventListener("click", openPopupEditProfile);
popupForm.addEventListener("submit", formSubmitHandler);
addButton.addEventListener("click", openPopupAddCard);
popupFormPlaceAdd.addEventListener("submit", createNewPlace);

