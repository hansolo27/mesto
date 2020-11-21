const configObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_type_invalid',
}

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = '' 
}

function hasInvalidInput(inputList) { 
  return inputList.some((item) => { 
    return !item.validity.valid
  })
}

function toggleButtonState(inputList, buttonElement, configObj) { 
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(configObj.inactiveButtonClass)
    buttonElement.setAttribute('disabled', 'true')
  }
  else { 
    buttonElement.classList.remove(configObj.inactiveButtonClass)
    buttonElement.removeAttribute('disabled', 'true')
  }
}

function isValid(formElement, inputElement) { 
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  }
  else { 
    hideInputError(formElement, inputElement)
  }
}

function setEventListener(formElement, configObj) {
  const inputList = Array.from(formElement.querySelectorAll(configObj.inputSelector));
  const submitBtn = formElement.querySelector(configObj.submitButtonSelector);
  toggleButtonState(inputList, submitBtn, configObj)
  inputList.forEach((item) => { 
    item.addEventListener('input', () => { 
      isValid(formElement, item)
      toggleButtonState(inputList, submitBtn, configObj)
    })
  })
}

function enableValidation(obj) {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((item) => { 
    item.addEventListener('submit', (e)=>{
      e.preventDefault();
    })
    setEventListener(item, configObj);
  })
}
enableValidation(configObj)
