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

Player.prototype.size = new Vec(0.8, 1.5);
export default Player;