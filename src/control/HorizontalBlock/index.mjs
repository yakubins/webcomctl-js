import { BaseControl } from "webnetq-js";
import { NAME, ROOT_HTML, PORT_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, PORT_CLASS, ROOT_HTML };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UIHorizontalBlockControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_HTML,
    portClass: PORT_CLASS,
  } }
};
