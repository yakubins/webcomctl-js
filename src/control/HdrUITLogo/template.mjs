import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('HdrUITLogo', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  favicon: [
    await mk.loadSvgAsCssUrl('./favicon.svg'),
  ],
  header: [
    await mk.loadSvgAsCssUrl('./uitestHead.svg'),
  ],
});

const favicon = await mk.loadSvgAsHtmlAsync('./favicon.svg');
mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <h1>${favicon}</h1>
  <h2></h2>
</div>
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

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}
{
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > h1
{
  width: 35px;
  height: 100%;
  margin: 0 10px 0 0;
  /*background-image: ${vars.favicon.asVar()};*/
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${clss.ROOT_CLASS} > h2
{
  width: 90px;
  height: 100%;
  margin: 0px;
  background-image: ${vars.header.asVar()};
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
