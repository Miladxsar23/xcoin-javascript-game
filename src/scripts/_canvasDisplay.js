import { scale } from "./_helper";

class CanvasDisplay {
  constructor(parent, level) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = Math.min(600, level.width * scale);
    this.canvas.height = Math.min(300, level.height * scale);
    parent.appendChild(this.canvas);
    this.flipPlayer = false;
    this.ctx = this.canvas.getContext("2d");
    this.viewport = {
      top: 0,
      left: 0,
      width: this.canvas.width / scale,
      height: this.canvas.height / scale,
    };
  }
  clear() {
    this.canvas.remove();
  }
}

CanvasDisplay.prototype.syncState = function (state) {
  this.updateViewport(state);
  this.clearDisplay(state.status);
  this.drawBackground(state.level);
  this.drawActors(state.actors);
};

export default CanvasDisplay;
