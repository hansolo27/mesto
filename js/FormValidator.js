export class FormValidator {
  constructor(data, form) {
    this._data = data;
    this._form = form;
  }
  
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
  }
  
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '' 
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

  _isValid(formElement, inputElement) { 
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage)
    }
    else { 
      this._hideInputError(formElement, inputElement)
    }
  }

  _setEventListener(obj, formElement) { 
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const submitBtn = formElement.querySelector(obj.submitButtonSelector);
    this._toggleButtonState(inputList, submitBtn, obj)
    inputList.forEach((item) => { 
      item.addEventListener('input', () => { 
        this._isValid(formElement, item)
        this._toggleButtonState(inputList, submitBtn, obj)
      })
    })
  }

  enableValidation() { 
    this._setEventListener(this._data, this._form)
  }
}

