/**
 * coin actors
 */

import State from "./_state";
import Vec from "./_vec";

class Coin {
  contructor(pos, basePos, wobble) {
    this.pos = pos; /* dynamic position by wobblling */
    this.basePos = basePos; /* initial position */
    this.wobble = wobble; /*for wobble motion */
  }
  static create(pos) {
    const basePos = pos.plus(new Vec(0.2, 0.1));
    return new Coin(
      basePos,
      basePos,
      Math.PI * Math.random() * 2 /*simulate wobble motion with Math.sin */
    );
  }
  get type() {
    return "coin";
  }
}
//collide player with coin
Coin.prototype.collide = function (state) {
  let newActors = state.actors.filter((actor) => actor !== this);
  const status = state.status;
  if (!newActors.some((actor) => actor.type === "coin")) status = "won";
  return new State(state.level, newActors, status);
};
Coin.prototype.size = new Vec(0.6, 0.6);
export default Coin;
