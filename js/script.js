let popup = document.querySelector(".popup");
popup.classList.remove("popup_opened");
let nameInput = document.querySelector(".popup_input-name");

let infoInput = document.querySelector(".popup_input-info");

let popupSave = document.querySelector(".popup__save");

let profileName = document.querySelector(".profile__title");
let popupForm = document.querySelector(".popup__form")
let profileInfo = document.querySelector(".profile__subtitle");
let popupEdit = document.querySelector(".profile__linkedit");
let popupClose = document.querySelector(".popup__close");

function popupOpen() {
  popup.classList.add("popup_opened")
  nameInput.value = profileName.textContent
  infoInput.value = profileInfo.textContent
}

function popupCloused() {
  popup.classList.remove("popup_opened")
}

function formSubmitHandler(evt) { 
  evt.preventDefault();
  nameInput = nameInput.value
  infoInput = infoInput.value
  profileName.textContent = nameInput
  profileInfo.textContent = infoInput
  popupCloused()
}

popupClose.addEventListener("click", popupCloused);
popupEdit.addEventListener("click", popupOpen);
popupForm.addEventListener("submit", formSubmitHandler);

