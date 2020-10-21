let popup = document.querySelector(".popup");

let nameInput = document.querySelector(".popup_save_name");

let infoInput = document.querySelector(".popup_save_info");

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

function popupClosed() {
  popup.classList.remove("popup_opened")
}

function formSubmitHandler(evt) { 
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileInfo.textContent = infoInput.value
  popupClosed()
}

popupClose.addEventListener("click", popupClosed);
popupEdit.addEventListener("click", popupOpen);
popupForm.addEventListener("submit", formSubmitHandler);

