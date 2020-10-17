let popup = document.querySelector(".popup");

popup.classList.remove("popup_opened");

let popupEdit = document.querySelector(".profile__linkedit");
let popupClose = document.querySelector(".popup__close");

function popupOpen() {
  popup.classList.add("popup_opened")
}
popupEdit.addEventListener("click", popupOpen)

function popupCloused() {
  popup.classList.remove("popup_opened")
}
popupClose.addEventListener("click", popupCloused);

let nameInput = document.querySelector(".popup__name");

let infoInput = document.querySelector(".popup__info");

let popupSave = document.querySelector(".popup__save");

let profileName = document.querySelector(".profile__title");

let profileInfo = document.querySelector(".profile__subtitle");

function popupSubmit() {
  let a = nameInput.value
  let b = infoInput.value
  profileName.textContent = a
  profileInfo.textContent = b
  popupCloused()
}

popupSave.addEventListener("click", popupSubmit);
