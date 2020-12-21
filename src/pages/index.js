import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { initialCards, configObj, profileForm, popupEdit, addButton, places, popupFormPlaceAdd, nameInput, infoInput} from '../utils/constants.js'
import UserInfo from '../components/UserInfo.js';
import Section from "../components/Section.js";

const UserRender = new UserInfo({ name:'.profile__title', info:'.profile__subtitle'})

const popupProfile = new PopupWithForm('.popup_type_profile', (arr) => {
  UserRender.setUserInfo(arr.popupName, arr.popupInfo);
  popupProfile.close();
})

popupProfile.setEventListeners()

const popupPlace = new PopupWithForm('.popup_type_place', (arr) => {
  const obj = {}
  obj.name = arr.popupInfo;
  obj.link = arr.popupName;
  obj.alt = `фотография: ${arr.popupInfo}`;
  const newCard = new Card(obj, 'template',()=> {
  popupImage.open(arr.popupInfo, arr.popupName)
  })
  section.addItem(newCard.createCard())
  popupPlace.close()
  popupPlace.clear()
})
popupPlace.setEventListeners()

const popupImage = new PopupWithImage('.popup_type_img')

const section = new Section({
  items: initialCards, renderer: (i) => { 
    const cards = new Card(i, 'template', () => { 
      popupImage.open(i.name, i.link)
      popupImage.setEventListeners()
    });
    const cardElement = cards.createCard();
    section.addItem(cardElement);
  }
}, '.places')
section.renderItem()

const validationProfile = new FormValidator(configObj, profileForm)
const validationAddCard = new FormValidator(configObj, popupFormPlaceAdd)
validationProfile.enableValidation();
validationAddCard.enableValidation();

popupEdit.addEventListener('click', () => {   
  popupProfile.open()
  const obj = UserRender.getUserInfo()
  nameInput.value = obj.name;
  infoInput.value = obj.info;
})

addButton.addEventListener('click', () => { 
  popupPlace.open()
})