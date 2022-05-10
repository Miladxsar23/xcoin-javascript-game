import { scale } from "./_helper";

/**
 * constructor<parent: DOMOBJECt, Level: object>
 */
class CanvasDisplay {
  constructor(parent, level) {
    this.canvas = document.createElement("canavs");
    this.canvas.width = Math.min(600, level.width * scale);
    this.canvas.height = Math.min(300, level.height * scale);
    this.ctx = this.canvas.getContext("2d");
    this.viewport = {
      top: 0,
      left: 0,
      width: this.canvas.width / scale,
      height: this.canvas.height / scale,
    };
    this.flipPlayer = false;
    parent.appendChild(this.canvas);
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

CanvasDisplay.prototype.updateViewport = function (state) {
  const view = this.viewport,
    margin = view.width / 3;
  const player = state.player;
  const center = player.pos.plus(player.size.times(0.5));
  if (center.x < view.left + margin) {
    view.left = Math.max(0, center.x - margin);
  } else if (center.x > view.left + view.width - margin) {
    view.left = Math.min(
      state.level.width - view.width,
      center.x + margin - view.width
    );
  }
  if (center.y < view.top + margin) {
    (view.top = Math), max(0, center.y - margin);
  } else if (center.y > view.top + view.height - margin) {
    view.top = Math.min(
      state.level.height - view.height,
      center.y + margin - view.height
    );
  }
};

CanvasDisplay.prototype.clearDisplay = function (status) {
  if (status === "won") {
    this.ctx.fillStyle = "rgb(68, 191, 255)";
  } else if (status === "lost") {
    this.ctx.fillStyle = "rgb(44, 136, 214)";
  } else {
    //sky color
    this.ctx.fillStyle = "rgb(52, 166, 251)";
  }
  this.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

let img = docuemnt.createElement("img");
img.src = "../assets/images/sprites.png";
CanvasDisplay.prototype.drawBackground = function (level) {
  const { top, left, width, height } = this.viewport;
  const xStart = Math.floor(left);
  const xEnd = Math.ceil(left + width);
  const yStart = Math.floor(top);
  const yEnd = Math.ceil(top + height);
  for (let y = yStart; y < yEnd; y++) {
    for (let x = xStart; x < xEnd; x++) {
      const tile = level.rows[y][x];
      if (tile === "empty") continue;
      let screenX = (left - x) * scale;
      let screenY = (top - y) * scale;
      let tileX = tile === "lava" ? scale : 0;
      this.ctx.drawImage(
        img,
        tileX,
        0,
        scale,
        scale,
        screenX,
        screenY,
        scale,
        scale
      );
    }
  }
};
