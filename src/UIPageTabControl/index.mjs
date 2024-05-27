import { BaseControl, Random, NQDOM } from 'webnetq-js';
import { NAME, HTML, ITEM_HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

class TabItemControl {
  _name;
  _element;

  _focus = true;
  _loading = false;
  _text = '';
  _onfocuscanceled = false;

  _focusElm;
  _textElm;
  _closeElm;

  _listeners = {
    focus: [],
    close: [],
  };

  constructor({ name, text, focus, onclose, onfocus }) {
    this._element = NQDOM.createElement(ITEM_HTML);
    this._element.id = Random.nextElementId();
    this._element.title = text;
    this._element.addEventListener('dragstart', event => this.onOnDragStart(event));

    this._name = name;
    
    this._focusElm = NQDOM.getElementByClassName(this._element, CLASS.FOCUS);
    this._focusElm && this._focusElm.addEventListener('click', event => this.onOnFocusClick(event), false);

    this._closeElm = NQDOM.getElementByClassName(this._element, CLASS.CLOSE);
    this._closeElm && this._closeElm.addEventListener('click', event => this.onOnCloseClick(event));

    this._textElm = NQDOM.getElementByClassName(this._element, CLASS.TEXT);

    this._onclose = onclose;
    this._onfocus = onfocus;

    this.text = text;
    this.focus = focus;
  }

  get element() {
    return this._element;
  }

  get text() { return this._text; }
  set text(value) {
    if (this._text != value) {
      this._textElm && (this._textElm.textContent = value);
      this._text = value;
    }
  }

  get focus() { return this._focus; }
  set focus(value) {
    if (this._focus != value) {
      if (this._focusElm) {
        const cname = CLASS.FOCUS;
        const clist = this._focusElm.classList;
        value ? clist.add(cname) : clist.remove(cname);
      }
      this._focus = value;
    }
  }
  
  get loading() { return this._loading; }
  set loading(value) {
    if (this._loading != value) {
      if (this._focusElm) {
        const cname = CLASS.LOADING;
        const clist = this._focusElm.classList;
        value ? clist.add(cname) : clist.remove(cname);
      }
      this._loading = value;
    }
  }

  addEventListener(type, listener) {
    this._listeners[type].push(listener);
  }

  getInfo() {
    const info = {
      focus: this._focus,
      text: this._text,
    };

    if (this._name)
      info.name = this._name;

    return info;
  }

  onOnFocusClick(event) {
    if (!this._onfocuscanceled) {
      const info = this.getInfo();
      this._listeners.focus.forEach(listener => listener(info));
    }
    this._onfocuscanceled = false;
  }

  onOnCloseClick(event) {
    const info = this.getInfo();
    this._listeners.close.forEach(listener => listener(info));
    this._onfocuscanceled = true;
  }

  onOnDragStart(event) {
    event.dataTransfer.setData("text/plain", this._name);
  }

  release() {
    this._listeners = null;
    this._focusElm = null;
    this._textElm = null;
    this._closeElm = null;
  }
};

export default class UIPageTabControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
  } }

  _items = [];
  _focusIndex = 0;
  _focusHistory = [];

  constructor(element) {
    super(element);
    this.registerEvent('empty');
  }

  _unfocusAll() {
    this._items.forEach(iter => iter.focus = false);
  }

  _removeItem(item) {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
    this._element.removeChild(item.element);
    item.release();
  }

  _setFocusItem(item) {
    this._removeFromHistory(item);
    this._focusHistory.push(item);
    item.focus = true;
  }

  _removeFromHistory(item) {
    const index = this._focusHistory.indexOf(item);
    (index !== -1) && (this._focusHistory.splice(index, 1));
  }

  appendItem(params) {
    const focus = params.focus || this._items.length == 0;
    const item = new TabItemControl({
      name: params.name,
      text: params.text,
      onclose: params.onclose || (() => {}),
      onfocus: params.onfocus || (() => {}),
      focus,
    });
    
    if (focus) {
      if (this._items.length)
        this._items[this._focusIndex].focus = false;
      this._focusIndex = this._items.length;
      this._setFocusItem(item);
    }

    item.addEventListener('focus', event => {
      if (!event.focus) {
        this._items[this._focusIndex].focus = false;
        this._focusIndex = this._items.indexOf(item);
        this._setFocusItem(item);
        item._onfocus(item.getInfo());
      }
    });

    item.addEventListener('close', event => {
      const index = this._items.indexOf(item);
      this._removeFromHistory(item);
      this._removeItem(item);
      const isLast = (this._items.length == 0);
      let newFocusItem = null;
      if (event.focus && !isLast) {
        if (this._focusHistory.length) {
          newFocusItem = this._focusHistory[this._focusHistory.length - 1];
          this._focusIndex = this._items.indexOf(newFocusItem);
        }
        else {
          if (this._items.length <= this._focusIndex)
            this._focusIndex = this._items.length - 1;
          newFocusItem = this._items[this._focusIndex];
        }
      }
      else if (index < this._focusIndex) {
        this._focusIndex--;
      }
      item._onclose(event);
      if (newFocusItem) {
        this._setFocusItem(newFocusItem);
        newFocusItem._onfocus(newFocusItem.getInfo());
      }
      else if (isLast) {
        this.dispatchEvent('empty', {});
      }
    });

    this._items.push(item);
    this._element.appendChild(item.element);

    if (!params.focus && this._items.length == 1) {
      item._onfocus(item.getInfo());
    }
  }

  loadingByName(name, value) {
    const item = this._items.find((item) => item.name && item.name === name);
    if (item) {
      item.loading = value;
    }
  }

  removeItemByName(name) {
    const item = this._items.find((item) => item.name && item.name === name);
    if (!item)
      return false;
    this._removeItem(item);
    return true;
  }
};
