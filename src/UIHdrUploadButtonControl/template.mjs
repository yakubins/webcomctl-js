import { HEADER_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';
import { HEADER_FONT_SIZE } from '../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../lib/WickedTheme.mjs';
import { HEADER_FONT_FAMILY } from '../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR } from '../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR_DARK } from '../lib/WickedTheme.mjs';
import { HEADER_BORDER_RADIUS_HOVER } from '../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER } from '../lib/WickedTheme.mjs';

export const NAME = 'HdrUploadButton';

const IMAGE_DEFAULT = 'url(search_default.svg)';
const IMAGE_HOVER = 'url(search_hover.svg)';

export const CLASS = {
  ROOT: "uic-hdrupl-root",
  HIDDEN: "uic-hdrupl-hidden",
};

export const HTML = `
<label class="${CLASS.ROOT} ${CLASS.HIDDEN} notranslate" translate="no" draggable="false">
  <div></div>
  <span>Upload</span>
  <!--<input type="file">-->
</label>
`;

export const CSS = `
:root
{
  --uic-hdrupl-btnbg: ${HEADER_BACKGROUND_COLOR};
}

[data-theme="dark"]
{
  --uic-hdrupl-btnbg: ${HEADER_BACKGROUND_COLOR_DARK};
}

.${CLASS.ROOT} > input
{
  display: none;
}

.${CLASS.HIDDEN}
{
  visibility: hidden;
}

.${CLASS.ROOT}
{
  display: flex;
  width: min-content;
  height: min-content;
  margin: 0px 5px;
  padding-right: 5px;
  color: ${HEADER_FONT_COLOR};
  font-size: ${HEADER_FONT_SIZE};
  font-family: ${HEADER_FONT_FAMILY};
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
}

.${CLASS.ROOT} > div
{
  display: block;
  width: 40px;
  height: 30px;
  border: 4px solid transparent;
  background-image: ${IMAGE_DEFAULT};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  flex-shrink: 0;
  box-sizing: border-box;
}

.${CLASS.ROOT}:hover 
{
  color: ${HEADER_COLOR_HOVER};
  background-color: var(--uic-hdrupl-btnbg);
  border-radius: ${HEADER_BORDER_RADIUS_HOVER};
  transition: background-color 0.2s;
}

.${CLASS.ROOT}:hover div
{
  background-image: ${IMAGE_HOVER};
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT} > div
  {
    width: 60px;
    height: 55px;
  }
  .${CLASS.ROOT}
  {
    font-size: 60px;
  }
}
`;
