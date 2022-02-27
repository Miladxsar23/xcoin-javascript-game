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
// overlap actors
function overlap(actor1, actor2) {
  return (
    actor1.pos.x + actor1.size.x > actor2.pos.x &&
    actor1.pos.x < actor2.pos.x + actor2.size.x &&
    actor1.pos.y + actor1.size.y > actor2.pos.y &&
    actor1.pos.y < actor2.pos.y + actor2.size.y
  );
}
const helper = {
  elt,
  drawGrid,
  drawActors,
  scale,
  overlap,
};

export default helper;
