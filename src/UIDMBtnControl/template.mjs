import { Mobile } from '../lib/Settings.mjs';

export const NAME = 'DMBtn';

export const CLASS = {
  ROOT: "uic-dmbtn-root",
  TOGGLE: "uic-dmbtn-toggle",
};

export const HTML = `
<div class="${CLASS.ROOT}">
  <span class="${CLASS.TOGGLE}"></span>
</div>
`;

export const CSS = `
:root
{
  --uic-dmbtn-bor: #6a6a6a;
  --uic-dmbtn-bor2: transparent;
  /*light*/
  --uic-dmbtn-img: url(moon.svg);
  --uic-dmbtn-bg: #7b7b7b21;
}

[data-theme="dark"]
{
  --uic-dmbtn-img: url(sun.svg);
  --uic-dmbtn-bg: #ffffff21;
}

.${CLASS.ROOT}
{
  display: block;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid var(--uic-dmbtn-bor);
  box-sizing: border-box;
}

.${CLASS.ROOT}:hover
{
  background-color: var(--uic-dmbtn-bg);
}

.${CLASS.TOGGLE}
{
  background-image: var(--uic-dmbtn-img);
  display: block;
  height: 100%;
  width: 100%;
  border: 3px solid var(--uic-dmbtn-bor2);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

@media (device-width < ${Mobile.deviceWidth})
{
  .${CLASS.ROOT}
  {
    width: 60px;
    height: 60px;
  }
}
`;
