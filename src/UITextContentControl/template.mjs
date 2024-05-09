import { COMMON_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';

export const NAME = 'TextContent';

const BLUE_COLOR = '#0000ff';
const OFFSET_COLOR = 'rgb(197, 6, 11)';
const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

export const CLASS = {
  ROOT: "uic-txtcnt-root",
  NUMBERS: "uic-txtcnt-numbers",
  CONTENT: "uic-txtcnt-content",
  OFFSET: "uic-txtcnt-offset",
  BLUE: "uic-txtcnt-blue",
};

export const HTML = `
<div class="${CLASS.ROOT}">
  <ul class="${CLASS.NUMBERS}"></ul>
  <div class="${CLASS.CONTENT}"></div>
</div>
`;

export const CSS = `
:root
{
  --uic-txtcnt-col: black;
  --uic-txtcnt-bor: #e6e6e6;
}

[data-theme="dark"]
{
  --uic-txtcnt-col: #ffffff9e;
  --uic-txtcnt-bor: #5f5f5f4a;
}

.${CLASS.ROOT} ul
{
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}

.${CLASS.ROOT} > div::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${CLASS.ROOT} > div::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${CLASS.ROOT} > div::-webkit-scrollbar-track,
.${CLASS.ROOT} > div::-webkit-scrollbar-corner
{
  background-color: ${SCROLLBAR_TRACK_COLOR};
}

.${CLASS.ROOT} > ul::-webkit-scrollbar
{
  display: none;
}

.${CLASS.ROOT}
{
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 1.4em;
  color: var(--uic-txtcnt-col);
  font-family: monospace;
}

.${CLASS.ROOT} > div
{
  height: auto;
  width: 100%;
  padding: 10px 10px 0px 10px;
  overflow-y: scroll;
  overflow-x: scroll;
}

.${CLASS.ROOT} > div > span
{
  white-space: pre;
}

.${CLASS.ROOT} > ul
{
  flex-shrink: 0;
  height: auto;
  min-width: 55px;
  padding: 10px 5px 10px 5px;
  text-align: center;
  border-right: 1px solid var(--uic-txtcnt-bor);
  overflow-y: auto;
  overflow-x: hidden;
}

.${CLASS.ROOT} > ul:empty
{
  display: none;
}

.${CLASS.ROOT} > ul > li,
.${CLASS.ROOT} > div > span
{
  display: block;
  height: 20px;
}

.${CLASS.BLUE}
{
  color: ${BLUE_COLOR};
}

.${CLASS.OFFSET}
{
  color: ${OFFSET_COLOR};
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT}
  {
    font-size: 25px;
  }
  .${CLASS.ROOT} > ul > li, 
  .${CLASS.ROOT} > div > span
  {
    height: 30px;
  }
}
`;