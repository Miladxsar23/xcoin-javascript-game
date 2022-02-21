//wrapper for create dom element
function elt(type, attrs, ...children) {
  const elm = document.createElement(type);
  for (let attr of Object.keys(attrs)) {
    elm.setAttribute(attr, attrs[attr]);
  }
  for (let child of children) {
    elm.appendChild(child);
  }
  return elm;
}
//wdrawing static layer of game by drawGrid
const scale = 20;
function drawGrid(level) {
  const grid = elt(
    "table",
    {
      class: "background",
      style: `width : ${scale * level.width}px; height`,
    },
    ...level.rows.map((row) => {
      return elt(
        "tr",
        { style: `height : ${scale}px;` },
        ...row.map((type) => {
          return elt("td", { class: type });
        })
      );
    })
  );
  return grid;
}

const helper = {
  elt,
  drawGrid
};

export default helper;
