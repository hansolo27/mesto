export default class UserInfo{ 
  constructor({ name, info, avatar}) { 
    this._name = document.querySelector(name);
    this._info = document.querySelector(info);
    this._avatar = document.querySelector(avatar);
  }
  getUserInfo() {
    const userObj = {}
    userObj.name = this._name.textContent;
    userObj.info = this._info.textContent;
    userObj.avatar = this._avatar.src;
    return userObj;
  }
  setUserInfo(nameValue, infoValue, avatar) {
    this._name.textContent = nameValue;
    this._info.textContent = infoValue;
    this._avatar.src = avatar;
  }
  
}