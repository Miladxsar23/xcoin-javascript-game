/**
 * The state is all about things that change over time
 * ++++++++ level of game
 * ++++++++ actors of game
 * ++++++++ status of game
 *          | _ _ _ playing
 *          | _ _ _ lost
 *          | _ _ _ win
 */

class State {
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.status = status;
  }
  static start(level) {
    return new State(level, level.startActors, "playing");
  }
  get player() {
    return this.actors.find((a) => a.type === "player");
  }
}

State.prototype.update = function (time, keys) {
  let actors = this.actors.map((actor) => {
    return actor.update(time, this, keys);
  });
  let newState = new State(this.level, actors, this.status);
  if (newState.status === "playing") return newState;
  const player = newState.player;
  if (this.level.touches(player.pos, player.size, "lava"))
    return new State(this.level, actors, "lost");
  for (let actor of actors) {
    if (actor != player && overlap(actor, player)) {
      newState = actor.collide(newState);
    }
  }
  return newState;
};
export default State;
