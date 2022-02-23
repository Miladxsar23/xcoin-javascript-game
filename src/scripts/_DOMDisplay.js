/**
 * create a class for drawing element
 */
import { elt, drawGrid, drawActors, scale } from "./_helper";
class DOMDisplay {
  constructor(parent, level) {
    this.dom = elt("div", { class: "game" }, drawGrid(level));
    this.actorLayer = null;
    parent.appendChild(this.dom);
  }
  clear() {
    this.dom.remove();
  }
}
DOMDisplay.prototype.syncState = function (newState) {
  if (this.actorLayer) this.actorLayer.remove();
  this.actorLayer = drawActors(newState.actors);
  this.dom.appendChild(this.actorLayer);
  this.dom.className = `game ${newState.status}`;
  this.scrollPlayerIntoView(newState);
};

DOMDisplay.prototype.scrollPlayerIntoView = function (newState) {
  const { width, height } =
    this.dom.getBoundingClientRect(); /** get width and height of dom */
  const margin = width / 3; /**This value is used as a boundary line, 
    ie if the player reaches this line from the viewport, 
    scrolling is performed*/
  const left = this.dom.scrollLeft,
    right = left + width;
  const top = this.dom.scrollTop,
    bottom = top + height;
  const player = newState.player;
  const center = player.pos.plus(player.size.times(0.5)).times(scale);
  if (center.x < left + margin) {
    this.dom.scrollLeft = center.x - margin;
  } else if (center.x > right - margin) {
    this.dom.scrollLeft = center.x + margin - width;
  }
  if (center.y < top + margin) {
    this.dom.scrollTop = center.y - margin;
  } else if (center.y > bottom - margin) {
    this.dom.scrollTop = center.y + margin - height;
  }
};

export default DOMDisplay;
