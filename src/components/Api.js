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
      .then((res) => {
        return res.json()
      })
      return Promise.reject(`Ошибка: ${res.status}`);
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
    .then((res)=>{
      if(res.ok){
        return res.json()
      }
    })
    return Promise.reject(`Ошибка: ${res.status}`);
  }


  getUser() { 
    return fetch(`${this._adress}/users/me`, {
      headers: {
        authorization:this._token
      }
    })
      .then(res => res.json())
      return Promise.reject(`Ошибка: ${res.status}`);
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
    return Promise.reject(`Ошибка: ${res.status}`);
  }


  getId() { 
    return fetch(`${this._adress}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token
      }
    })
      .then((res) => { 
        return res.json
      })
      return Promise.reject(`Ошибка: ${res.status}`);
  }

  getLike(idCard) {
    return fetch(`${this._adress}/cards/likes/${idCard}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      }
    })
      .then((res) => { 
        return res.json()
      })
      return Promise.reject(`Ошибка: ${res.status}`);
  }

  removeLike(idCard) {
    return fetch(`${this._adress}/cards/likes/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => { 
        return res.json()
      })
      return Promise.reject(`Ошибка: ${res.status}`);
  }

  removeCard(idCard) { 
    return fetch(`${this._adress}/cards/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => { 
        return res.json()
      })
      return Promise.reject(`Ошибка: ${res.status}`);
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
    .then((res)=>{
      return res.json()
    })
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}