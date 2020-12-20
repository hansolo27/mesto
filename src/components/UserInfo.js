export default class UserInfo{ 
  constructor({ name, info }) { 
    this._name = document.querySelector(name);
    this._info = document.querySelector(info);
  }
  getUserInfo() {
    const userObj = {}
    userObj.name = this._name.textContent;
    userObj.info = this._info.textContent;
    return userObj;
  }
  setUserInfo(nameValue, infoValue) {
    this._name.textContent = nameValue;
    this._info.textContent = infoValue;
  }
}