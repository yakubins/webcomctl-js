import { BaseControl, Util } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UIImageContentControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  _urlRef = null;
  _imageElm;

  _init() {
    this._imageElm = this.element.querySelector("." + CLASS.CONTENT);
  }

  setContent(params) {
    if (!this._imageElm)
      return;

    if (this._urlRef) {
      Util.revokeObjectURL(this._urlRef);
      this._urlRef = null;
    }

    let url = null;
    if (typeof params === 'string')
      url = params;
    else {
      this._urlRef = Util.createObjectURL(params);
      url = this._urlRef;
    }

    this._imageElm.src = url;
  }
};
