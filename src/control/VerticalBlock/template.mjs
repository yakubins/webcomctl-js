import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('VerticalBlock', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = `

.${ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 670px;
  background-color: var(--uic-vrtblk-rootbg);
  overflow: hidden;
}
`;
