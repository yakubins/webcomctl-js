import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('UtilspotHeader', import.meta.url);
const UTILSPOT_IMG = await mk.loadSvgAsCssUrl('./header.svg');

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  list_header_col: [ 'white', 'white' ],
  list_header_bg: [ '#1d3b4e', '#1d3b4ea1' ],
});

mk.newHTML('ROOT_HTML', `
<header class="notranslate ${clss.ROOT_CLASS} ${clss.PORT_CLASS}" translate="no" draggable="false"></header>
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

.${clss.ROOT_CLASS}
{
  display: flex;
  height: 275px;
  padding: 0px;
  box-shadow: none;
  border: none;
  text-align: left;
  color: ${vars.list_header_col.asVar()};
  background-color: ${vars.list_header_bg.asVar()};
  background-image: ${UTILSPOT_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 10px;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  overflow: hidden;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

@media (device-width <= 550px)
{
  .${clss.ROOT_CLASS} 
  {
    height: 550px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
