/**
 * main actor in a game
 */

import Vec from "./_vec";
const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;
class Player {
  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }
  get type() {
    return "player";
  }
  static create(pos) {
    return new Player(
      pos.plus(new Vec(0, -0.5)) /**y in grid dont calculate size of player 
      So we have to apply this factor because the player size is 1.5 
      times one square in the grid  */,
      new Vec(0, 0)
    );
  }
}
Player.prototype.update = function (time, state, keys) {
  let xSpeed = 0;
  /**base on left and right arrow xSpeed hanges direction and is set */
  if (keys.ArrowLeft) xSpeed -= playerXSpeed;
  if (keys.ArrowRight) xSpeed += playerXSpeed;
  let pos = this.pos;
  let movedX = pos.plus(
    new Vec(xSpeed * time, 0)
  ); /**It just has to move on the x-axis */
  if (!state.level.touches(movedX, this.size, "wall")) {
    pos = movedX;
  }
  let ySpeed =
    this.speed.y + time * gravity; /** The initial velocity that decreases
    over time due to the effect of gravity
    v = v. + gt */
  let movedY = pos.plus(
    new Vec(0, ySpeed * time)
  ); /**New position in each time frame 
      y = y. + vt*/
  if (!state.level.touches(movedY, this.size, "wall")) {
    pos = movedY;
  } else if (keys.ArrowUp && ySpeed > 0) {
    ySpeed = -jumpSpeed;
  } else {
    ySpeed = 0;
  }
  return new Player(pos, new Vec(xSpeed, ySpeed));
};
Player.prototype.size = new Vec(0.8, 1.5);
export default Player;
