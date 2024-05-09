export const NAME = 'DMKikoBtn';

const BORDER_COLOR = '#6a6a6a';
const IMAGE_BORDER_COLOR = 'transparent';

export const CLASS = {
  ROOT: "uic-dmkkbtn-root",
  TOGGLE: "uic-dmkkbtn-toggle",
};

export const HTML = `
<div class="${CLASS.ROOT}">
  <div></div>
</div>
`;

export const CSS = `
:root 
{
  --uic-dmkkbtn-img: url(moon.svg);
}

[data-theme="dark"]
{
  --uic-dmkkbtn-img: url(sun.svg);
}

.${CLASS.ROOT}
{
  width: 50px;
  height: 50px;
  border: 2px solid ${BORDER_COLOR};
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.${CLASS.ROOT} > div
{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 4px solid ${IMAGE_BORDER_COLOR};
  background-image: var(--uic-dmkkbtn-img);
}
`;