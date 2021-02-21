export default class Api{
  constructor({ adress, token }){ 
  this._adress = adress;
    this._token = token;
  }
  getCards() { 
    return fetch(`${this._adress}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._getResponseData)
  }

  rebootAvatar(link) { 
    return fetch(`${this._adress}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token
      },
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(this._getResponseData)
  }


  getUser() { 
    return fetch(`${this._adress}/users/me`, {
      headers: {
        authorization:this._token
      }
    })
    .then(this._getResponseData)
  }


  rendUser(nameRend, aboutRend) { 
    return fetch(`${this._adress}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token
      },
      body: JSON.stringify({
        name: nameRend,
        about: aboutRend
      })
    })
    .then(this._getResponseData)
  }


  getId() { 
    return fetch(`${this._adress}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token
      }
    })
    .then(this._getResponseData)
  }

  getLike(idCard) {
    return fetch(`${this._adress}/cards/likes/${idCard}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      }
    })
    .then(this._getResponseData)
  }

  removeLike(idCard) {
    return fetch(`${this._adress}/cards/likes/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._getResponseData)
  }

  removeCard(idCard) { 
    return fetch(`${this._adress}/cards/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._getResponseData)
  }

  rendCard(nameRend, linkRend) { 
    return fetch(`${this._adress}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token
      },
      body: JSON.stringify({
        name: nameRend,
        link: linkRend
      })
    })
    .then(this._getResponseData)
  }

  _getResponseData(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}
}