/**
 * create a class for drawing element
 */
import { elt, drawGrid } from "./_helper";
class DOMDisplay {
  constructor(parent, level) {
    this.parent = parent;
    this.dom = elt("div", { class: "game" }, drawGrid(level));
    this.actorLayer = null;
  }
  clear() {
    this.dom.remove();
  }
}
