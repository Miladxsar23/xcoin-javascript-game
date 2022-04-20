import Vec from "./_vec";
import State from "./_state";
const monsterSpeed = 4;
class Monster {
  constructor(pos) {
    this.pos = pos;
  }
  get type() {
    return "monster";
  }
  static create(pos) {
    return new Monster(pos.plus(new Vec(0, -1)));
  }
}
Monster.prototype.size = new Vec(1.2, 2);
Monster.prototype.update = function (timeStep, state) {
  const player = state.player;
  let speed = (player.pos.x < this.pos.x ? -1 : 1) * timeStep * monsterSpeed;
  let newPos = new Vec(this.pos.x + speed, this.pos.y);
  if (state.level.touches(newPos, this.size, "wall")) {
    return this;
  }
  return new Monster(newPos);
};

Monster.prototype.collide = function (state) {
  const player = state.player;
  if (player.pos.y + player.size.y < this.pos.y + 0.5) {
    let newActors = state.actors.filter(actor => actor != this);
    return new State(state.level, newActors, state.status);
  }
  return new State(state.level, state.actors, "lost");
};
export default Monster;
