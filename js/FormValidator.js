export class FormValidator {
  constructor(data, form) {
    this._data = data;
    this._form = form;
  }

  _showInputError(inputElement, errorMessage, invalidSelector) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(`${invalidSelector}`)
  }
  
  _hideInputError(inputElement, invalidSelector) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = ''
    inputElement.classList.remove(`${invalidSelector}`)
  }

  _hasInvalidInput(inputList) { 
    return inputList.some((item) => { 
      return !item.validity.valid
    })
  }

  _toggleButtonState(inputList, buttonElement, configObj) { 
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(configObj.inactiveButtonClass)
      buttonElement.setAttribute('disabled', 'true')
    }
    else { 
      buttonElement.classList.remove(configObj.inactiveButtonClass)
      buttonElement.removeAttribute('disabled', 'true')
    }
  }

  _isValid(inputElement) { 
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, this._data.invalidSelector)
    }
    else { 
      this._hideInputError(inputElement, this._data.invalidSelector)
    }
  }

  _setEventListener(obj) { 
    const inputList = Array.from(this._form.querySelectorAll(obj.inputSelector));
    const submitBtn = this._form.querySelector(obj.submitButtonSelector);
    this._toggleButtonState(inputList, submitBtn, obj)
    inputList.forEach((item) => { 
      item.addEventListener('input', () => { 
        this._isValid(item)
        this._toggleButtonState(inputList, submitBtn, obj)
      })
    })
  }

  enableValidation() {
    this._form.addEventListener('submit', (e) => { 
      e.preventDefault()
    })
    this._setEventListener(this._data, this._form)
  }
}

