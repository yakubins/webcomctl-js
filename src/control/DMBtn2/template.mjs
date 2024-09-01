import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('DMBtn2', import.meta.url);

const ROOT_CLASS = mk.newClassName("ROOT_CLASS");

const MOON_IMG = await mk.loadSvgAsCssUrl('./moon.svg');
const SUN_IMG = await mk.loadSvgAsCssUrl('./sun.svg');

const vars = mk.newCSSVariableMap({
  img:   [ MOON_IMG,  SUN_IMG   ],
  bgHov: [ '#e4e6e8', '#6a6a6a' ],
  bsHov: [ '#ffffff', '#000000' ],
  bor:   [ '#7c7c7c', '#616161' ],
  bs:    [ '#c8c8c8', '#373737' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${ROOT_CLASS}"></div>
`);

mk.newCSS('CSS', `
:root
{
  ${vars.img.toString(0)};
  ${vars.bgHov.toString(0)};
  ${vars.bsHov.toString(0)};
  ${vars.bor.toString(0)};
  ${vars.bs.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.img.toString(1)};
  ${vars.bgHov.toString(1)};
  ${vars.bsHov.toString(1)};
  ${vars.bor.toString(1)};
  ${vars.bs.toString(1)};
}

.${ROOT_CLASS}
{
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid ${vars.bor.asVar()};
  background-image: ${vars.img.asVar()};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0px 0px 3px 0px ${vars.bs.asVar()};
}

.${ROOT_CLASS}:hover
{
  background-color: ${vars.bgHov.asVar()};
  box-shadow: inset 0px 0px 6px 0px ${vars.bsHov.asVar()};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
