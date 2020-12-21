export default class Section { 
  constructor({ items, renderer }, containerSelector) { 
    this._items = items;
    this._renderer = renderer;
    this. _containerElement  = document.querySelector(containerSelector);
  }
  addItem(item) { 
    this. _containerElement.prepend(item);
  }
  renderItem() { 
    this._items.forEach((i) => { 
      this._renderer(i)
    })
  }
}