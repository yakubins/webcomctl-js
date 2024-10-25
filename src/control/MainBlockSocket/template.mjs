import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('MainBlockSocket', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}">
</div>
`;

export const CSS = `
.${ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCTHBG_CLR};
  border-radius: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-track,
.${ROOT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCTRBG_CLR};
}

.${ROOT_CLASS}
{
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  overflow-x: auto;
}
`;
