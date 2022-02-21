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

// drawing actors by drawActors
function drawActors(actors) {
  return elt(
    "div",
    { class: "actors" },
    ...actors.map((actor) => {
      const rect = elt("div", { class: `actor ${actor.type}` });
      rect.style.width = `${actor.size.x * scale}px`;
      rect.style.height = `${actor.size.y * scale}px`;
      rect.style.top = `${actor.pos.y * scale}px`;
      rect.style.left = `${actor.pos.x * scale}px`;
      return rect;
    })
  );
}

const helper = {
  elt,
  drawGrid,
  drawActors
};

export default helper;
