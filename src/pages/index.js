import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { configObj, profileForm, popupEdit, addButton, places, popupFormPlaceAdd, nameInput, infoInput, profileImage, submitList} from '../utils/constants.js'
import UserInfo from '../components/UserInfo.js';
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import DeleteCard from "../components/DeleteCard.js";

const api = new Api({adress: "https://mesto.nomoreparties.co/v1/cohort-19", token: "762e704b-e6ae-4693-8360-375cfc8f77e1"});

const popupPlace = new PopupWithForm('.popup_type_place', (arr)=>{
  renderLoading(true)
  api.rendCard(arr.popupInfo, arr.popupName)
  .then((data) => {
      createAndAdd(data, "baaba7995d63271a9f3ad435", section);
      popupPlace.close();
  })
  .catch((err) => {
      console.log(`${err}`);
  })
  .finally(()=>{
    renderLoading(false)
  })
})


popupPlace.setEventListeners()

addButton.addEventListener('click', () => { 
popupPlace.open()
})



const PopupDelete = new DeleteCard('.popup_type_delete')
PopupDelete.setEventListeners()

const popupProfile = new PopupWithForm('.popup_type_profile', (arr) => {
  renderLoading(true)
  api.rendUser(arr.popupName, arr.popupInfo)
  .then((res)=>{
    if(res.ok){
      api.getUser()
      .then((res)=>{
        UserRender.setUserInfo(res.name, res.about, res.avatar)
      })
    }
  })
  .catch((err)=>{
    console.log(`${err}`)
  })
  .finally(()=>{
    renderLoading(false)
  })
  popupProfile.close();
})
popupProfile.setEventListeners()



const section = new Section((i)=>{
  createAndAdd(i, "baaba7995d63271a9f3ad435", section)
},  
  '.places');


const UserRender = new UserInfo({ name:'.profile__title', info:'.profile__subtitle', avatar: ".profile__img"})


Promise.all([api.getUser(), api.getCards()])
.then((values)=>{
  UserRender.setUserInfo(values[0].name, values[0].about, values[0].avatar)
  section.renderItem(values[1])
})
.catch((err)=>{
  console.log(`${err}`)
})

const popupImage = new PopupWithImage('.popup_type_img')
popupImage.setEventListeners()

//!!!! функция создания и добавления карточки
function createAndAdd(data, userId, section) {
  const newCard = new Card(data,
    () => {
      popupImage.open(data.name, data.link)
    },
        { likeCard: () => handleLikeClick(newCard, data),
          removeCard: () => handleCardDelete(newCard) },
         userId,
         'template');
  const cardElement = newCard.createCard();
  newCard.setLikes(data);
  section.addItem(cardElement);
}

function handleLikeClick(card, data) {
  const promise = card.haveLike() ? api.removeLike(data._id) : api.getLike(data._id)

  promise
  .then((res)=>{
    card.setLikes(res)
  })
  .catch((err) => {
    console.log(`${err}`);
});
}



function handleCardDelete(data){
  PopupDelete.open()
  PopupDelete.setSubmitAction(()=>{
    
    api.removeCard(data.idCard)
    .then((res) => {
        data.delCard();
        PopupDelete.close();
    })
    .catch((err) => {
        console.log(`${err}`);
    });
  })
}





api.rebootAvatar("https://images.unsplash.com/photo-1612378887767-5d4697c7bdd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")
const popupAvatar = new PopupWithForm('.popup_type_avatar', (arr)=>{
  renderLoading(true)
  api.rebootAvatar(arr.popupInfo)
  .then((res)=>{
    popupAvatar.close()
    UserRender.setUserInfo(res.name, res.about, res.avatar)
  })
  .catch((err) => {
    console.log(`${err}`)
})
.finally(()=>{
  renderLoading(false)
})

})
popupAvatar.setEventListeners()

profileImage.addEventListener('click', ()=>{
    popupAvatar.open()
})


const validationProfile = new FormValidator(configObj, profileForm)
const validationAddCard = new FormValidator(configObj, popupFormPlaceAdd)
validationProfile.enableValidation();
validationAddCard.enableValidation();

popupEdit.addEventListener('click', () => {   
  popupProfile.open()
})

function renderLoading(loadingStatus){
  if(loadingStatus){
    Array.from(submitList).forEach((item)=>{
      item.textContent = 'Сохранение ...'
    })
  }
  else{
    Array.from(submitList).forEach((item)=>{
      item.textContent = 'Сохранено'
    })
  }
}