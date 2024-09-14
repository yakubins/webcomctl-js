import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('ImageInfoPanel', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "DESCRIPTION_CLASS", // TODO: Remove
  "DESCRIPTION_FORMAT_CLASS", // TODO: Remove
  "DESCRIPTION_TITLE",
  "DESCRIPTION_HISTORY",
  "LIST_CLASS",
  "LIST_NAME",
  "LIST_VALUE",
]);

const vars = mk.newCSSVariableMap({
  menuCol: [ 'black', '#b8b4b4' ],
  titleCol: [ '#272626', '#9b9b9b' ],
});

const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <div class="${clss.DESCRIPTION_CLASS} notranslate" translate="no">

        <div class="${clss.DESCRIPTION_FORMAT_CLASS}">
          <h2 class="${clss.DESCRIPTION_TITLE}"></h2>
          <span class="${clss.DESCRIPTION_HISTORY}"></span>
        </div>

        <div class="${clss.LIST_CLASS}"></div>

    </div>
  </div>
`);

mk.newHTML('ITEM_HTML', `
<span>
  <h3 class="${clss.LIST_NAME}"></h3>
  <label class="${clss.LIST_VALUE}"></label>
</span>
`);

mk.newCSS('CSS', `

:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${clss.DESCRIPTION_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.DESCRIPTION_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${clss.DESCRIPTION_CLASS}::-webkit-scrollbar-track,
.${clss.DESCRIPTION_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCROLLBAR_TRACK_COLOR};
}

.${clss.ROOT_CLASS}
{
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.${clss.DESCRIPTION_FORMAT_CLASS} h2
{
  display: inline-block;
  padding-left: 5px;
  margin: 0px;
  font-weight: 500;
  font-size: 18px;
  color: ${vars.titleCol.asVar()};
}

.${clss.DESCRIPTION_CLASS} h3
{
  margin: 0px;
  font-weight: 400;
  font-size: 16px;
}

.${clss.DESCRIPTION_CLASS}
{
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 10px 25px 10px 10px;
  color: #393939;
  font-family: Open Sans, Arial, sans-serif;
  box-sizing: border-box;
  color: ${vars.menuCol.asVar()};
  overflow: auto;
}

.${clss.DESCRIPTION_CLASS} *
{
  box-sizing: border-box;
}

.${clss.DESCRIPTION_FORMAT_CLASS} > span
{
  display: block;
  padding: 0px 5px;
  margin-bottom: 16px;
  line-height: 1.7;
}

.${clss.LIST_CLASS}
{
  display: table;
  width: 100%;
  border-spacing: 0 10px;
}

.${clss.LIST_CLASS} span 
{
  display: table-row-group;
}

.${clss.LIST_CLASS} > span > h3
{
  display: table-cell;
  padding-left: 10px;
  min-width: 50px;
}

.${clss.LIST_CLASS} > span > label
{
  display: table-cell;
  width: 100%;
  padding-left: 10px;
  word-break: break-all;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
